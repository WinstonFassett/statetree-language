import { D as Disposable, aD as Emitter, uw as NotificationsFilter, uy as NoOpNotification, bo as Event, aq as toDisposable, fv as isCancellationError, dZ as Severity, wH as isErrorWithActions, pJ as NotificationPriority, ia as toErrorMessage, pv as parseLinkedText, cD as equals, cy as Action, gu as __decorate, gv as __param, cu as ITelemetryService, al as INotificationService, d$ as hash, a0 as CommandsRegistry, bu as KeybindingsRegistry, uz as NotificationsCenterVisibleContext, ut as NotificationFocusedContext, bz as IListService, C as ContextKeyExpr, uu as NotificationsToastsVisibleContext, b1 as IInstantiationService, ik as firstOrDefault, c as localize, h as MenuRegistry, i as MenuId, g_ as ActionRunner, ur as WorkbenchList } from "./theme-defaults-1df7f429.js";
class NotificationHandle extends Disposable {
  constructor(item, onClose) {
    super();
    this.item = item;
    this.onClose = onClose;
    this._onDidClose = this._register(new Emitter());
    this.onDidClose = this._onDidClose.event;
    this._onDidChangeVisibility = this._register(new Emitter());
    this.onDidChangeVisibility = this._onDidChangeVisibility.event;
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.item.onDidChangeVisibility((visible) => this._onDidChangeVisibility.fire(visible)));
    Event.once(this.item.onDidClose)(() => {
      this._onDidClose.fire();
      this.dispose();
    });
  }
  get progress() {
    return this.item.progress;
  }
  updateSeverity(severity) {
    this.item.updateSeverity(severity);
  }
  updateMessage(message) {
    this.item.updateMessage(message);
  }
  updateActions(actions) {
    this.item.updateActions(actions);
  }
  close() {
    this.onClose(this.item);
    this.dispose();
  }
}
const _NotificationsModel = class _NotificationsModel extends Disposable {
  constructor() {
    super(...arguments);
    this._onDidChangeNotification = this._register(new Emitter());
    this.onDidChangeNotification = this._onDidChangeNotification.event;
    this._onDidChangeStatusMessage = this._register(new Emitter());
    this.onDidChangeStatusMessage = this._onDidChangeStatusMessage.event;
    this._onDidChangeFilter = this._register(new Emitter());
    this.onDidChangeFilter = this._onDidChangeFilter.event;
    this._notifications = [];
    this.filter = NotificationsFilter.OFF;
  }
  get notifications() {
    return this._notifications;
  }
  get statusMessage() {
    return this._statusMessage;
  }
  setFilter(filter) {
    this.filter = filter;
    this._onDidChangeFilter.fire(filter);
  }
  addNotification(notification) {
    const item = this.createViewItem(notification);
    if (!item) {
      return _NotificationsModel.NO_OP_NOTIFICATION;
    }
    const duplicate = this.findNotification(item);
    duplicate == null ? void 0 : duplicate.close();
    this._notifications.splice(0, 0, item);
    this._onDidChangeNotification.fire({ item, index: 0, kind: 0 });
    return new NotificationHandle(item, (item2) => this.onClose(item2));
  }
  onClose(item) {
    const liveItem = this.findNotification(item);
    if (liveItem && liveItem !== item) {
      liveItem.close();
    } else {
      item.close();
    }
  }
  findNotification(item) {
    return this._notifications.find((notification) => notification.equals(item));
  }
  createViewItem(notification) {
    const item = NotificationViewItem.create(notification, this.filter);
    if (!item) {
      return void 0;
    }
    const fireNotificationChangeEvent = (kind, detail) => {
      const index = this._notifications.indexOf(item);
      if (index >= 0) {
        this._onDidChangeNotification.fire({ item, index, kind, detail });
      }
    };
    const itemExpansionChangeListener = item.onDidChangeExpansion(() => fireNotificationChangeEvent(2));
    const itemContentChangeListener = item.onDidChangeContent((e) => fireNotificationChangeEvent(1, e.kind));
    Event.once(item.onDidClose)(() => {
      itemExpansionChangeListener.dispose();
      itemContentChangeListener.dispose();
      const index = this._notifications.indexOf(item);
      if (index >= 0) {
        this._notifications.splice(index, 1);
        this._onDidChangeNotification.fire({ item, index, kind: 3 });
      }
    });
    return item;
  }
  showStatusMessage(message, options) {
    const item = StatusMessageViewItem.create(message, options);
    if (!item) {
      return Disposable.None;
    }
    this._statusMessage = item;
    this._onDidChangeStatusMessage.fire({ kind: 0, item });
    return toDisposable(() => {
      if (this._statusMessage === item) {
        this._statusMessage = void 0;
        this._onDidChangeStatusMessage.fire({ kind: 1, item });
      }
    });
  }
};
_NotificationsModel.NO_OP_NOTIFICATION = new NoOpNotification();
let NotificationsModel = _NotificationsModel;
function isNotificationViewItem(obj) {
  return obj instanceof NotificationViewItem;
}
class NotificationViewItemProgress extends Disposable {
  constructor() {
    super();
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this._state = /* @__PURE__ */ Object.create(null);
  }
  get state() {
    return this._state;
  }
  infinite() {
    if (this._state.infinite) {
      return;
    }
    this._state.infinite = true;
    this._state.total = void 0;
    this._state.worked = void 0;
    this._state.done = void 0;
    this._onDidChange.fire();
  }
  done() {
    if (this._state.done) {
      return;
    }
    this._state.done = true;
    this._state.infinite = void 0;
    this._state.total = void 0;
    this._state.worked = void 0;
    this._onDidChange.fire();
  }
  total(value) {
    if (this._state.total === value) {
      return;
    }
    this._state.total = value;
    this._state.infinite = void 0;
    this._state.done = void 0;
    this._onDidChange.fire();
  }
  worked(value) {
    if (typeof this._state.worked === "number") {
      this._state.worked += value;
    } else {
      this._state.worked = value;
    }
    this._state.infinite = void 0;
    this._state.done = void 0;
    this._onDidChange.fire();
  }
}
const _NotificationViewItem = class _NotificationViewItem extends Disposable {
  static create(notification, filter = NotificationsFilter.OFF) {
    if (!notification || !notification.message || isCancellationError(notification.message)) {
      return void 0;
    }
    let severity;
    if (typeof notification.severity === "number") {
      severity = notification.severity;
    } else {
      severity = Severity.Info;
    }
    const message = _NotificationViewItem.parseNotificationMessage(notification.message);
    if (!message) {
      return void 0;
    }
    let actions;
    if (notification.actions) {
      actions = notification.actions;
    } else if (isErrorWithActions(notification.message)) {
      actions = { primary: notification.message.actions };
    }
    let priority = notification.priority ?? NotificationPriority.DEFAULT;
    if (priority === NotificationPriority.DEFAULT && (filter === NotificationsFilter.SILENT || filter === NotificationsFilter.ERROR && notification.severity !== Severity.Error)) {
      priority = NotificationPriority.SILENT;
    }
    return new _NotificationViewItem(
      notification.id,
      severity,
      notification.sticky,
      priority,
      message,
      notification.source,
      notification.progress,
      actions
    );
  }
  static parseNotificationMessage(input) {
    let message;
    if (input instanceof Error) {
      message = toErrorMessage(input, false);
    } else if (typeof input === "string") {
      message = input;
    }
    if (!message) {
      return void 0;
    }
    const raw = message;
    if (message.length > _NotificationViewItem.MAX_MESSAGE_LENGTH) {
      message = `${message.substr(0, _NotificationViewItem.MAX_MESSAGE_LENGTH)}...`;
    }
    message = message.replace(/(\r\n|\n|\r)/gm, " ").trim();
    const linkedText = parseLinkedText(message);
    return { raw, linkedText, original: input };
  }
  constructor(id, _severity, _sticky, _priority, _message, _source, progress, actions) {
    super();
    this.id = id;
    this._severity = _severity;
    this._sticky = _sticky;
    this._priority = _priority;
    this._message = _message;
    this._source = _source;
    this._visible = false;
    this._onDidChangeExpansion = this._register(new Emitter());
    this.onDidChangeExpansion = this._onDidChangeExpansion.event;
    this._onDidClose = this._register(new Emitter());
    this.onDidClose = this._onDidClose.event;
    this._onDidChangeContent = this._register(new Emitter());
    this.onDidChangeContent = this._onDidChangeContent.event;
    this._onDidChangeVisibility = this._register(new Emitter());
    this.onDidChangeVisibility = this._onDidChangeVisibility.event;
    if (progress) {
      this.setProgress(progress);
    }
    this.setActions(actions);
  }
  setProgress(progress) {
    if (progress.infinite) {
      this.progress.infinite();
    } else if (progress.total) {
      this.progress.total(progress.total);
      if (progress.worked) {
        this.progress.worked(progress.worked);
      }
    }
  }
  setActions(actions = { primary: [], secondary: [] }) {
    this._actions = {
      primary: Array.isArray(actions.primary) ? actions.primary : [],
      secondary: Array.isArray(actions.secondary) ? actions.secondary : []
    };
    this._expanded = actions.primary && actions.primary.length > 0;
  }
  get canCollapse() {
    return !this.hasActions;
  }
  get expanded() {
    return !!this._expanded;
  }
  get severity() {
    return this._severity;
  }
  get sticky() {
    if (this._sticky) {
      return true;
    }
    const hasActions = this.hasActions;
    if (hasActions && this._severity === Severity.Error || !hasActions && this._expanded || this._progress && !this._progress.state.done) {
      return true;
    }
    return false;
  }
  get priority() {
    return this._priority;
  }
  get hasActions() {
    if (!this._actions) {
      return false;
    }
    if (!this._actions.primary) {
      return false;
    }
    return this._actions.primary.length > 0;
  }
  get hasProgress() {
    return !!this._progress;
  }
  get progress() {
    if (!this._progress) {
      this._progress = this._register(new NotificationViewItemProgress());
      this._register(this._progress.onDidChange(() => this._onDidChangeContent.fire({ kind: 3 })));
    }
    return this._progress;
  }
  get message() {
    return this._message;
  }
  get source() {
    return typeof this._source === "string" ? this._source : this._source ? this._source.label : void 0;
  }
  get sourceId() {
    return this._source && typeof this._source !== "string" && "id" in this._source ? this._source.id : void 0;
  }
  get actions() {
    return this._actions;
  }
  get visible() {
    return this._visible;
  }
  updateSeverity(severity) {
    if (severity === this._severity) {
      return;
    }
    this._severity = severity;
    this._onDidChangeContent.fire({ kind: 0 });
  }
  updateMessage(input) {
    const message = _NotificationViewItem.parseNotificationMessage(input);
    if (!message || message.raw === this._message.raw) {
      return;
    }
    this._message = message;
    this._onDidChangeContent.fire({ kind: 1 });
  }
  updateActions(actions) {
    this.setActions(actions);
    this._onDidChangeContent.fire({ kind: 2 });
  }
  updateVisibility(visible) {
    if (this._visible !== visible) {
      this._visible = visible;
      this._onDidChangeVisibility.fire(visible);
    }
  }
  expand() {
    if (this._expanded || !this.canCollapse) {
      return;
    }
    this._expanded = true;
    this._onDidChangeExpansion.fire();
  }
  collapse(skipEvents) {
    if (!this._expanded || !this.canCollapse) {
      return;
    }
    this._expanded = false;
    if (!skipEvents) {
      this._onDidChangeExpansion.fire();
    }
  }
  toggle() {
    if (this._expanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }
  close() {
    this._onDidClose.fire();
    this.dispose();
  }
  equals(other) {
    if (this.hasProgress || other.hasProgress) {
      return false;
    }
    if (typeof this.id === "string" || typeof other.id === "string") {
      return this.id === other.id;
    }
    if (typeof this._source === "object") {
      if (this._source.label !== other.source || this._source.id !== other.sourceId) {
        return false;
      }
    } else if (this._source !== other.source) {
      return false;
    }
    if (this._message.raw !== other.message.raw) {
      return false;
    }
    const primaryActions = this._actions && this._actions.primary || [];
    const otherPrimaryActions = other.actions && other.actions.primary || [];
    return equals(primaryActions, otherPrimaryActions, (action, otherAction) => action.id + action.label === otherAction.id + otherAction.label);
  }
};
_NotificationViewItem.MAX_MESSAGE_LENGTH = 1e3;
let NotificationViewItem = _NotificationViewItem;
class ChoiceAction extends Action {
  constructor(id, choice) {
    super(id, choice.label, void 0, true, async () => {
      choice.run();
      this._onDidRun.fire();
    });
    this._onDidRun = this._register(new Emitter());
    this.onDidRun = this._onDidRun.event;
    this._keepOpen = !!choice.keepOpen;
    this._menu = !choice.isSecondary && choice.menu ? choice.menu.map((c, index) => new ChoiceAction(`${id}.${index}`, c)) : void 0;
  }
  get menu() {
    return this._menu;
  }
  get keepOpen() {
    return this._keepOpen;
  }
}
class StatusMessageViewItem {
  static create(notification, options) {
    if (!notification || isCancellationError(notification)) {
      return void 0;
    }
    let message;
    if (notification instanceof Error) {
      message = toErrorMessage(notification, false);
    } else if (typeof notification === "string") {
      message = notification;
    }
    if (!message) {
      return void 0;
    }
    return { message, options };
  }
}
function notificationToMetrics(message, source, silent) {
  return {
    id: hash(message.toString()).toString(),
    silent,
    source: source || "core"
  };
}
let NotificationsTelemetry = class NotificationsTelemetry2 extends Disposable {
  constructor(telemetryService, notificationService) {
    super();
    this.telemetryService = telemetryService;
    this.notificationService = notificationService;
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.notificationService.onDidAddNotification((notification) => {
      const source = notification.source && typeof notification.source !== "string" ? notification.source.id : notification.source;
      this.telemetryService.publicLog2("notification:show", notificationToMetrics(notification.message, source, notification.priority === NotificationPriority.SILENT));
    }));
    this._register(this.notificationService.onDidRemoveNotification((notification) => {
      const source = notification.source && typeof notification.source !== "string" ? notification.source.id : notification.source;
      this.telemetryService.publicLog2("notification:close", notificationToMetrics(notification.message, source, notification.priority === NotificationPriority.SILENT));
    }));
  }
};
NotificationsTelemetry = __decorate([
  __param(0, ITelemetryService),
  __param(1, INotificationService)
], NotificationsTelemetry);
const SHOW_NOTIFICATIONS_CENTER = "notifications.showList";
const HIDE_NOTIFICATIONS_CENTER = "notifications.hideList";
const TOGGLE_NOTIFICATIONS_CENTER = "notifications.toggleList";
const HIDE_NOTIFICATION_TOAST = "notifications.hideToasts";
const FOCUS_NOTIFICATION_TOAST = "notifications.focusToasts";
const FOCUS_NEXT_NOTIFICATION_TOAST = "notifications.focusNextToast";
const FOCUS_PREVIOUS_NOTIFICATION_TOAST = "notifications.focusPreviousToast";
const FOCUS_FIRST_NOTIFICATION_TOAST = "notifications.focusFirstToast";
const FOCUS_LAST_NOTIFICATION_TOAST = "notifications.focusLastToast";
const COLLAPSE_NOTIFICATION = "notification.collapse";
const EXPAND_NOTIFICATION = "notification.expand";
const ACCEPT_PRIMARY_ACTION_NOTIFICATION = "notification.acceptPrimaryAction";
const TOGGLE_NOTIFICATION = "notification.toggle";
const CLEAR_NOTIFICATION = "notification.clear";
const CLEAR_ALL_NOTIFICATIONS = "notifications.clearAll";
const TOGGLE_DO_NOT_DISTURB_MODE = "notifications.toggleDoNotDisturbMode";
function getNotificationFromContext(listService, context) {
  if (isNotificationViewItem(context)) {
    return context;
  }
  const list = listService.lastFocusedList;
  if (list instanceof WorkbenchList) {
    const focusedElement = list.getFocusedElements()[0];
    if (isNotificationViewItem(focusedElement)) {
      return focusedElement;
    }
  }
  return void 0;
}
function registerNotificationCommands(center, toasts, model) {
  CommandsRegistry.registerCommand(SHOW_NOTIFICATIONS_CENTER, () => {
    toasts.hide();
    center.show();
  });
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: HIDE_NOTIFICATIONS_CENTER,
    weight: 200 + 50,
    when: NotificationsCenterVisibleContext,
    primary: 9,
    handler: (accessor) => {
      const telemetryService = accessor.get(ITelemetryService);
      for (const notification of model.notifications) {
        if (notification.visible) {
          telemetryService.publicLog2("notification:hide", notificationToMetrics(notification.message.original, notification.sourceId, notification.priority === NotificationPriority.SILENT));
        }
      }
      center.hide();
    }
  });
  CommandsRegistry.registerCommand(TOGGLE_NOTIFICATIONS_CENTER, () => {
    if (center.isVisible) {
      center.hide();
    } else {
      toasts.hide();
      center.show();
    }
  });
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: CLEAR_NOTIFICATION,
    weight: 200,
    when: NotificationFocusedContext,
    primary: 20,
    mac: {
      primary: 2048 | 1
    },
    handler: (accessor, args) => {
      const notification = getNotificationFromContext(accessor.get(IListService), args);
      if (notification && !notification.hasProgress) {
        notification.close();
      }
    }
  });
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: EXPAND_NOTIFICATION,
    weight: 200,
    when: NotificationFocusedContext,
    primary: 17,
    handler: (accessor, args) => {
      const notification = getNotificationFromContext(accessor.get(IListService), args);
      notification == null ? void 0 : notification.expand();
    }
  });
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: ACCEPT_PRIMARY_ACTION_NOTIFICATION,
    weight: 200,
    when: ContextKeyExpr.and(NotificationsToastsVisibleContext),
    primary: 2048 | 1024 | 31,
    handler: (accessor) => {
      var _a;
      const actionRunner = accessor.get(IInstantiationService).createInstance(NotificationActionRunner);
      const notification = firstOrDefault(model.notifications);
      if (!notification) {
        return;
      }
      const primaryAction = ((_a = notification.actions) == null ? void 0 : _a.primary) ? firstOrDefault(notification.actions.primary) : void 0;
      if (!primaryAction) {
        return;
      }
      actionRunner.run(primaryAction, notification);
      notification.close();
    }
  });
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: COLLAPSE_NOTIFICATION,
    weight: 200,
    when: NotificationFocusedContext,
    primary: 15,
    handler: (accessor, args) => {
      const notification = getNotificationFromContext(accessor.get(IListService), args);
      notification == null ? void 0 : notification.collapse();
    }
  });
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: TOGGLE_NOTIFICATION,
    weight: 200,
    when: NotificationFocusedContext,
    primary: 10,
    secondary: [3],
    handler: (accessor) => {
      const notification = getNotificationFromContext(accessor.get(IListService));
      notification == null ? void 0 : notification.toggle();
    }
  });
  CommandsRegistry.registerCommand(HIDE_NOTIFICATION_TOAST, (accessor) => {
    const telemetryService = accessor.get(ITelemetryService);
    for (const notification of model.notifications) {
      if (notification.visible) {
        telemetryService.publicLog2("notification:hide", notificationToMetrics(notification.message.original, notification.sourceId, notification.priority === NotificationPriority.SILENT));
      }
    }
    toasts.hide();
  });
  KeybindingsRegistry.registerKeybindingRule({
    id: HIDE_NOTIFICATION_TOAST,
    weight: 200 - 50,
    when: NotificationsToastsVisibleContext,
    primary: 9
  });
  KeybindingsRegistry.registerKeybindingRule({
    id: HIDE_NOTIFICATION_TOAST,
    weight: 200 + 100,
    when: ContextKeyExpr.and(NotificationsToastsVisibleContext, NotificationFocusedContext),
    primary: 9
  });
  CommandsRegistry.registerCommand(FOCUS_NOTIFICATION_TOAST, () => toasts.focus());
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: FOCUS_NEXT_NOTIFICATION_TOAST,
    weight: 200,
    when: ContextKeyExpr.and(NotificationFocusedContext, NotificationsToastsVisibleContext),
    primary: 18,
    handler: () => {
      toasts.focusNext();
    }
  });
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: FOCUS_PREVIOUS_NOTIFICATION_TOAST,
    weight: 200,
    when: ContextKeyExpr.and(NotificationFocusedContext, NotificationsToastsVisibleContext),
    primary: 16,
    handler: () => {
      toasts.focusPrevious();
    }
  });
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: FOCUS_FIRST_NOTIFICATION_TOAST,
    weight: 200,
    when: ContextKeyExpr.and(NotificationFocusedContext, NotificationsToastsVisibleContext),
    primary: 11,
    secondary: [14],
    handler: () => {
      toasts.focusFirst();
    }
  });
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: FOCUS_LAST_NOTIFICATION_TOAST,
    weight: 200,
    when: ContextKeyExpr.and(NotificationFocusedContext, NotificationsToastsVisibleContext),
    primary: 12,
    secondary: [13],
    handler: () => {
      toasts.focusLast();
    }
  });
  CommandsRegistry.registerCommand(CLEAR_ALL_NOTIFICATIONS, () => center.clearAll());
  CommandsRegistry.registerCommand(TOGGLE_DO_NOT_DISTURB_MODE, (accessor) => {
    const notificationService = accessor.get(INotificationService);
    notificationService.doNotDisturbMode = !notificationService.doNotDisturbMode;
  });
  const category = { value: localize("notifications", "Notifications"), original: "Notifications" };
  MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: SHOW_NOTIFICATIONS_CENTER, title: { value: localize("showNotifications", "Show Notifications"), original: "Show Notifications" }, category } });
  MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: HIDE_NOTIFICATIONS_CENTER, title: { value: localize("hideNotifications", "Hide Notifications"), original: "Hide Notifications" }, category }, when: NotificationsCenterVisibleContext });
  MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: CLEAR_ALL_NOTIFICATIONS, title: { value: localize("clearAllNotifications", "Clear All Notifications"), original: "Clear All Notifications" }, category } });
  MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: ACCEPT_PRIMARY_ACTION_NOTIFICATION, title: { value: localize("acceptNotificationPrimaryAction", "Accept Notification Primary Action"), original: "Accept Notification Primary Action" }, category } });
  MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: TOGGLE_DO_NOT_DISTURB_MODE, title: { value: localize("toggleDoNotDisturbMode", "Toggle Do Not Disturb Mode"), original: "Toggle Do Not Disturb Mode" }, category } });
  MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: FOCUS_NOTIFICATION_TOAST, title: { value: localize("focusNotificationToasts", "Focus Notification Toast"), original: "Focus Notification Toast" }, category }, when: NotificationsToastsVisibleContext });
}
let NotificationActionRunner = class NotificationActionRunner2 extends ActionRunner {
  constructor(telemetryService, notificationService) {
    super();
    this.telemetryService = telemetryService;
    this.notificationService = notificationService;
  }
  async runAction(action, context) {
    this.telemetryService.publicLog2("workbenchActionExecuted", { id: action.id, from: "message" });
    if (isNotificationViewItem(context)) {
      this.telemetryService.publicLog2("notification:actionExecuted", {
        id: hash(context.message.original.toString()).toString(),
        actionLabel: action.label,
        source: context.sourceId || "core",
        silent: context.priority === NotificationPriority.SILENT
      });
    }
    try {
      await super.runAction(action, context);
    } catch (error) {
      this.notificationService.error(error);
    }
  }
};
NotificationActionRunner = __decorate([
  __param(0, ITelemetryService),
  __param(1, INotificationService)
], NotificationActionRunner);
export {
  CLEAR_NOTIFICATION as C,
  EXPAND_NOTIFICATION as E,
  HIDE_NOTIFICATIONS_CENTER as H,
  NotificationViewItem as N,
  TOGGLE_DO_NOT_DISTURB_MODE as T,
  CLEAR_ALL_NOTIFICATIONS as a,
  COLLAPSE_NOTIFICATION as b,
  ChoiceAction as c,
  NotificationActionRunner as d,
  NotificationsModel as e,
  NotificationsTelemetry as f,
  getNotificationFromContext as g,
  registerNotificationCommands as r
};
