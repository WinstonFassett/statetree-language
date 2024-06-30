var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { gM as n, aL as registerIcon, c as localize, aM as Codicon, cy as Action, aK as ThemeIcon, gu as __decorate, gv as __param, ak as ICommandService, v as IClipboardService, co as isNonEmptyArray, cn as clearNode, ah as $, uo as DomEmitter, aJ as EventType, bo as Event, bT as StandardKeyboardEvent, je as Gesture, jf as EventType$1, a6 as DisposableStore, cA as ActionBar, up as DropdownMenuActionViewItem, j8 as ProgressBar, j9 as defaultProgressBarStyles, aX as dispose, D as Disposable, dZ as Severity, aI as addDisposableListener, fH as EventHelper, a2 as URI, g_ as ActionRunner, rE as ButtonBar, rF as defaultButtonStyles, uq as isEventLike, ct as IContextMenuService, b1 as IInstantiationService, c2 as IOpenerService, a$ as IKeybindingService, ur as WorkbenchList, us as NOTIFICATIONS_BACKGROUND, bY as trackFocus, ut as NotificationFocusedContext, lr as assertAllDefined, jL as isAncestor, ay as IConfigurationService, l6 as Themable, aD as Emitter, uu as NotificationsToastsVisibleContext, uv as IntervalCounter, aS as Dimension, uw as NotificationsFilter, pJ as NotificationPriority, jU as scheduleAtNextAnimationFrame, aq as toDisposable, dK as widgetShadow, ux as NOTIFICATIONS_TOAST_BORDER, dA as assertIsDefined, jk as IWorkbenchLayoutService, aQ as IThemeService, l3 as IEditorGroupsService, I as IContextKeyService, hS as ILifecycleService, iL as IHostService, uy as NoOpNotification, pI as NeverShowAgainScope, aa as IStorageService, uz as NotificationsCenterVisibleContext, uA as NOTIFICATIONS_CENTER_BORDER, uB as NOTIFICATIONS_CENTER_HEADER_FOREGROUND, uC as NOTIFICATIONS_CENTER_HEADER_BACKGROUND, al as INotificationService, ia as toErrorMessage, d as alert, uD as onRenderWorkbench, qY as ILayoutService, bW as getClientArea, hh as SyncDescriptor, r7 as getServiceOverride$1 } from "./theme-defaults-1df7f429.js";
import { C as CLEAR_NOTIFICATION, a as CLEAR_ALL_NOTIFICATIONS, T as TOGGLE_DO_NOT_DISTURB_MODE, H as HIDE_NOTIFICATIONS_CENTER, E as EXPAND_NOTIFICATION, b as COLLAPSE_NOTIFICATION, N as NotificationViewItem, c as ChoiceAction, d as NotificationActionRunner, e as NotificationsModel, f as NotificationsTelemetry, r as registerNotificationCommands } from "./notificationsCommands-9319aa92.js";
import "./index-3bddf13b.js";
var css$3 = ".monaco-workbench>.notifications-toasts{bottom:26px;display:none;overflow:hidden;position:absolute;right:3px;z-index:1000}.monaco-workbench.nostatusbar>.notifications-toasts{bottom:3px}.monaco-workbench>.notifications-toasts.visible{display:flex;flex-direction:column}.monaco-workbench>.notifications-toasts .notification-toast-container{overflow:hidden}.monaco-workbench>.notifications-toasts .notification-toast-container>.notification-toast{border-radius:4px;margin:8px;opacity:0;transform:translate3d(0,100%,0);transition:transform .3s ease-out,opacity .3s ease-out}.monaco-workbench.reduce-motion>.notifications-toasts .notification-toast-container>.notification-toast{transition:transform 0ms ease-out,opacity 0ms ease-out}.monaco-workbench>.notifications-toasts .notification-toast-container>.notification-toast.notification-fade-in{opacity:1;transform:none}.monaco-workbench>.notifications-toasts .notification-toast-container>.notification-toast.notification-fade-in-done{opacity:1;transform:none;transition:none}.monaco-workbench>.notifications-toasts .codicon.codicon-error{color:var(--vscode-notificationsErrorIcon-foreground)!important}.monaco-workbench>.notifications-toasts .codicon.codicon-warning{color:var(--vscode-notificationsWarningIcon-foreground)!important}.monaco-workbench>.notifications-toasts .codicon.codicon-info{color:var(--vscode-notificationsInfoIcon-foreground)!important}";
n(css$3, {});
var css$2 = ".monaco-workbench .notifications-list-container{background:var(--vscode-notifications-background);border-radius:inherit;color:var(--vscode-notifications-foreground);outline-color:var(--vscode-contrastBorder)}.monaco-workbench .notifications-list-container .notification-list-item{border-radius:4px;box-sizing:border-box;display:flex;flex-direction:column;flex-direction:column-reverse;height:100%;padding:10px 5px}.monaco-workbench .notifications-list-container .notification-offset-helper{word-wrap:break-word;line-height:22px;opacity:0;position:absolute}.monaco-workbench .notifications-list-container .monaco-scrollable-element{border-radius:4px}.monaco-workbench .notifications-list-container .notification-list-item>.notification-list-item-main-row{display:flex;flex-grow:1}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-icon{align-items:center;background-position:50%;background-repeat:no-repeat;display:flex;flex:0 0 16px;font-size:18px;height:22px;margin-left:4px;margin-right:4px}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-message{flex:1;line-height:22px;overflow:hidden;text-overflow:ellipsis;user-select:text;-webkit-user-select:text}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-message a{color:var(--vscode-notificationLink-foreground)}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-message a:focus{outline-color:var(--vscode-focusBorder);outline-style:solid;outline-width:1px}.monaco-workbench .notifications-list-container .notification-list-item.expanded .notification-list-item-message{word-wrap:break-word;white-space:normal}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-toolbar-container{display:none;height:22px}.monaco-workbench .notifications-list-container .monaco-list-row.focused .notification-list-item .notification-list-item-toolbar-container,.monaco-workbench .notifications-list-container .monaco-list:focus-within .notification-list-item .notification-list-item-toolbar-container,.monaco-workbench .notifications-list-container .notification-list-item.expanded .notification-list-item-toolbar-container,.monaco-workbench .notifications-list-container .notification-list-item:hover .notification-list-item-toolbar-container{display:block}.monaco-workbench .notifications-list-container .notification-list-item>.notification-list-item-details-row{align-items:center;display:none;overflow:hidden;padding-left:5px}.monaco-workbench .notifications-list-container .notification-list-item.expanded>.notification-list-item-details-row{display:flex}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-source{flex:1;font-size:12px;overflow:hidden;text-overflow:ellipsis}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-buttons-container{display:flex;overflow:hidden}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-buttons-container>.monaco-button,.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-buttons-container>.monaco-button-dropdown{margin:4px 5px}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-buttons-container .monaco-button{outline-offset:2px!important}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-buttons-container .monaco-text-button{display:inline-block;font-size:12px;overflow:hidden;padding:4px 10px;text-overflow:ellipsis;width:fit-content}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-buttons-container .monaco-dropdown-button{padding:5px}.monaco-workbench .notifications-list-container .progress-bit{bottom:0;height:2px}";
n(css$2, {});
var css$1 = ".monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-toolbar-container .action-item,.monaco-workbench>.notifications-center>.notifications-center-header>.notifications-center-header-toolbar .action-item{margin-right:4px}.monaco-workbench .notifications-list-container .notification-list-item .notification-list-item-toolbar-container .action-item:first-child,.monaco-workbench>.notifications-center>.notifications-center-header>.notifications-center-header-toolbar .action-item:first-child{margin-left:4px}";
n(css$1, {});
const clearIcon = registerIcon("notifications-clear", Codicon.close, localize("clearIcon", "Icon for the clear action in notifications."));
const clearAllIcon = registerIcon("notifications-clear-all", Codicon.clearAll, localize("clearAllIcon", "Icon for the clear all action in notifications."));
const hideIcon = registerIcon("notifications-hide", Codicon.chevronDown, localize("hideIcon", "Icon for the hide action in notifications."));
const expandIcon = registerIcon("notifications-expand", Codicon.chevronUp, localize("expandIcon", "Icon for the expand action in notifications."));
const collapseIcon = registerIcon("notifications-collapse", Codicon.chevronDown, localize("collapseIcon", "Icon for the collapse action in notifications."));
const configureIcon = registerIcon("notifications-configure", Codicon.gear, localize("configureIcon", "Icon for the configure action in notifications."));
const doNotDisturbIcon = registerIcon("notifications-do-not-disturb", Codicon.bellSlash, localize("doNotDisturbIcon", "Icon for the mute all action in notifications."));
let ClearNotificationAction = (_a = class extends Action {
  constructor(id, label, commandService) {
    super(id, label, ThemeIcon.asClassName(clearIcon));
    this.commandService = commandService;
  }
  async run(notification) {
    this.commandService.executeCommand(CLEAR_NOTIFICATION, notification);
  }
}, _a.ID = CLEAR_NOTIFICATION, _a.LABEL = localize("clearNotification", "Clear Notification"), _a);
ClearNotificationAction = __decorate([
  __param(2, ICommandService)
], ClearNotificationAction);
let ClearAllNotificationsAction = (_b = class extends Action {
  constructor(id, label, commandService) {
    super(id, label, ThemeIcon.asClassName(clearAllIcon));
    this.commandService = commandService;
  }
  async run() {
    this.commandService.executeCommand(CLEAR_ALL_NOTIFICATIONS);
  }
}, _b.ID = CLEAR_ALL_NOTIFICATIONS, _b.LABEL = localize("clearNotifications", "Clear All Notifications"), _b);
ClearAllNotificationsAction = __decorate([
  __param(2, ICommandService)
], ClearAllNotificationsAction);
let ToggleDoNotDisturbAction = (_c = class extends Action {
  constructor(id, label, commandService) {
    super(id, label, ThemeIcon.asClassName(doNotDisturbIcon));
    this.commandService = commandService;
  }
  async run() {
    this.commandService.executeCommand(TOGGLE_DO_NOT_DISTURB_MODE);
  }
}, _c.ID = TOGGLE_DO_NOT_DISTURB_MODE, _c.LABEL = localize("toggleDoNotDisturbMode", "Toggle Do Not Disturb Mode"), _c);
ToggleDoNotDisturbAction = __decorate([
  __param(2, ICommandService)
], ToggleDoNotDisturbAction);
let HideNotificationsCenterAction = (_d = class extends Action {
  constructor(id, label, commandService) {
    super(id, label, ThemeIcon.asClassName(hideIcon));
    this.commandService = commandService;
  }
  async run() {
    this.commandService.executeCommand(HIDE_NOTIFICATIONS_CENTER);
  }
}, _d.ID = HIDE_NOTIFICATIONS_CENTER, _d.LABEL = localize("hideNotificationsCenter", "Hide Notifications"), _d);
HideNotificationsCenterAction = __decorate([
  __param(2, ICommandService)
], HideNotificationsCenterAction);
let ExpandNotificationAction = (_e = class extends Action {
  constructor(id, label, commandService) {
    super(id, label, ThemeIcon.asClassName(expandIcon));
    this.commandService = commandService;
  }
  async run(notification) {
    this.commandService.executeCommand(EXPAND_NOTIFICATION, notification);
  }
}, _e.ID = EXPAND_NOTIFICATION, _e.LABEL = localize("expandNotification", "Expand Notification"), _e);
ExpandNotificationAction = __decorate([
  __param(2, ICommandService)
], ExpandNotificationAction);
let CollapseNotificationAction = (_f = class extends Action {
  constructor(id, label, commandService) {
    super(id, label, ThemeIcon.asClassName(collapseIcon));
    this.commandService = commandService;
  }
  async run(notification) {
    this.commandService.executeCommand(COLLAPSE_NOTIFICATION, notification);
  }
}, _f.ID = COLLAPSE_NOTIFICATION, _f.LABEL = localize("collapseNotification", "Collapse Notification"), _f);
CollapseNotificationAction = __decorate([
  __param(2, ICommandService)
], CollapseNotificationAction);
const _ConfigureNotificationAction = class _ConfigureNotificationAction extends Action {
  constructor(id, label, configurationActions) {
    super(id, label, ThemeIcon.asClassName(configureIcon));
    this.configurationActions = configurationActions;
  }
};
_ConfigureNotificationAction.ID = "workbench.action.configureNotification";
_ConfigureNotificationAction.LABEL = localize("configureNotification", "Configure Notification");
let ConfigureNotificationAction = _ConfigureNotificationAction;
let CopyNotificationMessageAction = (_g = class extends Action {
  constructor(id, label, clipboardService) {
    super(id, label);
    this.clipboardService = clipboardService;
  }
  run(notification) {
    return this.clipboardService.writeText(notification.message.raw);
  }
}, _g.ID = "workbench.action.copyNotificationMessage", _g.LABEL = localize("copyNotification", "Copy Text"), _g);
CopyNotificationMessageAction = __decorate([
  __param(2, IClipboardService)
], CopyNotificationMessageAction);
const _NotificationsListDelegate = class _NotificationsListDelegate {
  constructor(container) {
    this.offsetHelper = this.createOffsetHelper(container);
  }
  createOffsetHelper(container) {
    const offsetHelper = document.createElement("div");
    offsetHelper.classList.add("notification-offset-helper");
    container.appendChild(offsetHelper);
    return offsetHelper;
  }
  getHeight(notification) {
    if (!notification.expanded) {
      return _NotificationsListDelegate.ROW_HEIGHT;
    }
    let expandedHeight = _NotificationsListDelegate.ROW_HEIGHT;
    const preferredMessageHeight = this.computePreferredHeight(notification);
    const messageOverflows = _NotificationsListDelegate.LINE_HEIGHT < preferredMessageHeight;
    if (messageOverflows) {
      const overflow = preferredMessageHeight - _NotificationsListDelegate.LINE_HEIGHT;
      expandedHeight += overflow;
    }
    if (notification.source || isNonEmptyArray(notification.actions && notification.actions.primary)) {
      expandedHeight += _NotificationsListDelegate.ROW_HEIGHT;
    }
    if (expandedHeight === _NotificationsListDelegate.ROW_HEIGHT) {
      notification.collapse(true);
    }
    return expandedHeight;
  }
  computePreferredHeight(notification) {
    let actions = 0;
    if (!notification.hasProgress) {
      actions++;
    }
    if (notification.canCollapse) {
      actions++;
    }
    if (isNonEmptyArray(notification.actions && notification.actions.secondary)) {
      actions++;
    }
    this.offsetHelper.style.width = `${450 - (10 + 26 + actions * (24 + 8) - 4)}px`;
    const renderedMessage = NotificationMessageRenderer.render(notification.message);
    this.offsetHelper.appendChild(renderedMessage);
    const preferredHeight = Math.max(this.offsetHelper.offsetHeight, this.offsetHelper.scrollHeight);
    clearNode(this.offsetHelper);
    return preferredHeight;
  }
  getTemplateId(element) {
    if (element instanceof NotificationViewItem) {
      return NotificationRenderer.TEMPLATE_ID;
    }
    throw new Error("unknown element type: " + element);
  }
};
_NotificationsListDelegate.ROW_HEIGHT = 42;
_NotificationsListDelegate.LINE_HEIGHT = 22;
let NotificationsListDelegate = _NotificationsListDelegate;
class NotificationMessageRenderer {
  static render(message, actionHandler) {
    const messageContainer = document.createElement("span");
    for (const node of message.linkedText.nodes) {
      if (typeof node === "string") {
        messageContainer.appendChild(document.createTextNode(node));
      } else {
        let title = node.title;
        if (!title && node.href.startsWith("command:")) {
          title = localize(
            "executeCommand",
            "Click to execute command '{0}'",
            node.href.substr("command:".length)
          );
        } else if (!title) {
          title = node.href;
        }
        const anchor = $("a", { href: node.href, title, tabIndex: 0 }, node.label);
        if (actionHandler) {
          const handleOpen = (e) => {
            if (isEventLike(e)) {
              EventHelper.stop(e, true);
            }
            actionHandler.callback(node.href);
          };
          const onClick = actionHandler.toDispose.add(new DomEmitter(anchor, EventType.CLICK)).event;
          const onKeydown = actionHandler.toDispose.add(new DomEmitter(anchor, EventType.KEY_DOWN)).event;
          const onSpaceOrEnter = actionHandler.toDispose.add(Event.chain(onKeydown)).filter((e) => {
            const event = new StandardKeyboardEvent(e);
            return event.equals(10) || event.equals(3);
          }).event;
          actionHandler.toDispose.add(Gesture.addTarget(anchor));
          const onTap = actionHandler.toDispose.add(new DomEmitter(anchor, EventType$1.Tap)).event;
          Event.any(onClick, onTap, onSpaceOrEnter)(handleOpen, null, actionHandler.toDispose);
        }
        messageContainer.appendChild(anchor);
      }
    }
    return messageContainer;
  }
}
let NotificationRenderer = (_h = class {
  constructor(actionRunner, contextMenuService, instantiationService) {
    this.actionRunner = actionRunner;
    this.contextMenuService = contextMenuService;
    this.instantiationService = instantiationService;
  }
  get templateId() {
    return _h.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const data = /* @__PURE__ */ Object.create(null);
    data.toDispose = new DisposableStore();
    data.container = document.createElement("div");
    data.container.classList.add("notification-list-item");
    data.mainRow = document.createElement("div");
    data.mainRow.classList.add("notification-list-item-main-row");
    data.icon = document.createElement("div");
    data.icon.classList.add("notification-list-item-icon", "codicon");
    data.message = document.createElement("div");
    data.message.classList.add("notification-list-item-message");
    const toolbarContainer = document.createElement("div");
    toolbarContainer.classList.add("notification-list-item-toolbar-container");
    data.toolbar = new ActionBar(toolbarContainer, {
      ariaLabel: localize("notificationActions", "Notification Actions"),
      actionViewItemProvider: (action) => {
        if (action && action instanceof ConfigureNotificationAction) {
          const item = new DropdownMenuActionViewItem(
            action,
            action.configurationActions,
            this.contextMenuService,
            { actionRunner: this.actionRunner, classNames: action.class }
          );
          data.toDispose.add(item);
          return item;
        }
        return void 0;
      },
      actionRunner: this.actionRunner
    });
    data.toDispose.add(data.toolbar);
    data.detailsRow = document.createElement("div");
    data.detailsRow.classList.add("notification-list-item-details-row");
    data.source = document.createElement("div");
    data.source.classList.add("notification-list-item-source");
    data.buttonsContainer = document.createElement("div");
    data.buttonsContainer.classList.add("notification-list-item-buttons-container");
    container.appendChild(data.container);
    data.container.appendChild(data.detailsRow);
    data.detailsRow.appendChild(data.source);
    data.detailsRow.appendChild(data.buttonsContainer);
    data.container.appendChild(data.mainRow);
    data.mainRow.appendChild(data.icon);
    data.mainRow.appendChild(data.message);
    data.mainRow.appendChild(toolbarContainer);
    data.progress = new ProgressBar(container, defaultProgressBarStyles);
    data.toDispose.add(data.progress);
    data.renderer = this.instantiationService.createInstance(NotificationTemplateRenderer, data, this.actionRunner);
    data.toDispose.add(data.renderer);
    return data;
  }
  renderElement(notification, index, data) {
    data.renderer.setInput(notification);
  }
  disposeTemplate(templateData) {
    dispose(templateData.toDispose);
  }
}, _h.TEMPLATE_ID = "notification", _h);
NotificationRenderer = __decorate([
  __param(1, IContextMenuService),
  __param(2, IInstantiationService)
], NotificationRenderer);
let NotificationTemplateRenderer = (_i = class extends Disposable {
  constructor(template, actionRunner, openerService, instantiationService, keybindingService, contextMenuService) {
    super();
    this.template = template;
    this.actionRunner = actionRunner;
    this.openerService = openerService;
    this.instantiationService = instantiationService;
    this.keybindingService = keybindingService;
    this.contextMenuService = contextMenuService;
    this.inputDisposables = this._register(new DisposableStore());
    if (!_i.closeNotificationAction) {
      _i.closeNotificationAction = instantiationService.createInstance(ClearNotificationAction, ClearNotificationAction.ID, ClearNotificationAction.LABEL);
      _i.expandNotificationAction = instantiationService.createInstance(ExpandNotificationAction, ExpandNotificationAction.ID, ExpandNotificationAction.LABEL);
      _i.collapseNotificationAction = instantiationService.createInstance(CollapseNotificationAction, CollapseNotificationAction.ID, CollapseNotificationAction.LABEL);
    }
  }
  setInput(notification) {
    this.inputDisposables.clear();
    this.render(notification);
  }
  render(notification) {
    this.template.container.classList.toggle("expanded", notification.expanded);
    this.inputDisposables.add(addDisposableListener(this.template.container, EventType.MOUSE_UP, (e) => {
      if (e.button === 1) {
        EventHelper.stop(e, true);
      }
    }));
    this.inputDisposables.add(addDisposableListener(this.template.container, EventType.AUXCLICK, (e) => {
      if (!notification.hasProgress && e.button === 1) {
        EventHelper.stop(e, true);
        notification.close();
      }
    }));
    this.renderSeverity(notification);
    const messageOverflows = this.renderMessage(notification);
    this.renderSecondaryActions(notification, messageOverflows);
    this.renderSource(notification);
    this.renderButtons(notification);
    this.renderProgress(notification);
    this.inputDisposables.add(notification.onDidChangeContent((event) => {
      switch (event.kind) {
        case 0:
          this.renderSeverity(notification);
          break;
        case 3:
          this.renderProgress(notification);
          break;
        case 1:
          this.renderMessage(notification);
          break;
      }
    }));
  }
  renderSeverity(notification) {
    _i.SEVERITIES.forEach((severity) => {
      if (notification.severity !== severity) {
        this.template.icon.classList.remove(...ThemeIcon.asClassNameArray(this.toSeverityIcon(severity)));
      }
    });
    this.template.icon.classList.add(...ThemeIcon.asClassNameArray(this.toSeverityIcon(notification.severity)));
  }
  renderMessage(notification) {
    clearNode(this.template.message);
    this.template.message.appendChild(NotificationMessageRenderer.render(notification.message, {
      callback: (link) => this.openerService.open(URI.parse(link), { allowCommands: true }),
      toDispose: this.inputDisposables
    }));
    const messageOverflows = notification.canCollapse && !notification.expanded && this.template.message.scrollWidth > this.template.message.clientWidth;
    if (messageOverflows) {
      this.template.message.title = this.template.message.textContent + "";
    } else {
      this.template.message.removeAttribute("title");
    }
    return messageOverflows;
  }
  renderSecondaryActions(notification, messageOverflows) {
    const actions = [];
    const secondaryActions = notification.actions ? notification.actions.secondary : void 0;
    if (isNonEmptyArray(secondaryActions)) {
      const configureNotificationAction = this.instantiationService.createInstance(ConfigureNotificationAction, ConfigureNotificationAction.ID, ConfigureNotificationAction.LABEL, secondaryActions);
      actions.push(configureNotificationAction);
      this.inputDisposables.add(configureNotificationAction);
    }
    let showExpandCollapseAction = false;
    if (notification.canCollapse) {
      if (notification.expanded) {
        showExpandCollapseAction = true;
      } else if (notification.source) {
        showExpandCollapseAction = true;
      } else if (messageOverflows) {
        showExpandCollapseAction = true;
      }
    }
    if (showExpandCollapseAction) {
      actions.push(notification.expanded ? _i.collapseNotificationAction : _i.expandNotificationAction);
    }
    if (!notification.hasProgress) {
      actions.push(_i.closeNotificationAction);
    }
    this.template.toolbar.clear();
    this.template.toolbar.context = notification;
    actions.forEach((action) => this.template.toolbar.push(action, { icon: true, label: false, keybinding: this.getKeybindingLabel(action) }));
  }
  renderSource(notification) {
    if (notification.expanded && notification.source) {
      this.template.source.textContent = localize("notificationSource", "Source: {0}", notification.source);
      this.template.source.title = notification.source;
    } else {
      this.template.source.textContent = "";
      this.template.source.removeAttribute("title");
    }
  }
  renderButtons(notification) {
    clearNode(this.template.buttonsContainer);
    const primaryActions = notification.actions ? notification.actions.primary : void 0;
    if (notification.expanded && isNonEmptyArray(primaryActions)) {
      const that = this;
      const actionRunner = new class extends ActionRunner {
        async runAction(action) {
          that.actionRunner.run(action, notification);
          if (!(action instanceof ChoiceAction) || !action.keepOpen) {
            notification.close();
          }
        }
      }();
      const buttonToolbar = this.inputDisposables.add(new ButtonBar(this.template.buttonsContainer));
      for (let i = 0; i < primaryActions.length; i++) {
        const action = primaryActions[i];
        const options = {
          title: true,
          secondary: i > 0,
          ...defaultButtonStyles
        };
        const dropdownActions = action instanceof ChoiceAction ? action.menu : void 0;
        const button = this.inputDisposables.add(dropdownActions ? buttonToolbar.addButtonWithDropdown({
          ...options,
          contextMenuProvider: this.contextMenuService,
          actions: dropdownActions,
          actionRunner
        }) : buttonToolbar.addButton(options));
        button.label = action.label;
        this.inputDisposables.add(button.onDidClick((e) => {
          if (e) {
            EventHelper.stop(e, true);
          }
          actionRunner.run(action);
        }));
      }
    }
  }
  renderProgress(notification) {
    if (!notification.hasProgress) {
      this.template.progress.stop().hide();
      return;
    }
    const state = notification.progress.state;
    if (state.infinite) {
      this.template.progress.infinite().show();
    } else if (typeof state.total === "number" || typeof state.worked === "number") {
      if (typeof state.total === "number" && !this.template.progress.hasTotal()) {
        this.template.progress.total(state.total);
      }
      if (typeof state.worked === "number") {
        this.template.progress.setWorked(state.worked).show();
      }
    } else {
      this.template.progress.done().hide();
    }
  }
  toSeverityIcon(severity) {
    switch (severity) {
      case Severity.Warning:
        return Codicon.warning;
      case Severity.Error:
        return Codicon.error;
    }
    return Codicon.info;
  }
  getKeybindingLabel(action) {
    const keybinding = this.keybindingService.lookupKeybinding(action.id);
    return keybinding ? keybinding.getLabel() : null;
  }
}, _i.SEVERITIES = [Severity.Info, Severity.Warning, Severity.Error], _i);
NotificationTemplateRenderer = __decorate([
  __param(2, IOpenerService),
  __param(3, IInstantiationService),
  __param(4, IKeybindingService),
  __param(5, IContextMenuService)
], NotificationTemplateRenderer);
let NotificationsList = class NotificationsList2 extends Disposable {
  constructor(container, options, instantiationService, contextMenuService) {
    super();
    this.container = container;
    this.options = options;
    this.instantiationService = instantiationService;
    this.contextMenuService = contextMenuService;
    this.viewModel = [];
  }
  show() {
    if (this.isVisible) {
      return;
    }
    if (!this.list) {
      this.createNotificationsList();
    }
    this.isVisible = true;
  }
  createNotificationsList() {
    this.listContainer = document.createElement("div");
    this.listContainer.classList.add("notifications-list-container");
    const actionRunner = this._register(this.instantiationService.createInstance(NotificationActionRunner));
    const renderer = this.instantiationService.createInstance(NotificationRenderer, actionRunner);
    const listDelegate = this.listDelegate = new NotificationsListDelegate(this.listContainer);
    const options = this.options;
    const list = this.list = this._register(this.instantiationService.createInstance(WorkbenchList, "NotificationsList", this.listContainer, listDelegate, [renderer], {
      ...options,
      setRowLineHeight: false,
      horizontalScrolling: false,
      overrideStyles: {
        listBackground: NOTIFICATIONS_BACKGROUND
      },
      accessibilityProvider: this.instantiationService.createInstance(NotificationAccessibilityProvider, options)
    }));
    const copyAction = this._register(this.instantiationService.createInstance(CopyNotificationMessageAction, CopyNotificationMessageAction.ID, CopyNotificationMessageAction.LABEL));
    this._register(list.onContextMenu((e) => {
      if (!e.element) {
        return;
      }
      this.contextMenuService.showContextMenu({
        getAnchor: () => e.anchor,
        getActions: () => [copyAction],
        getActionsContext: () => e.element,
        actionRunner
      });
    }));
    this._register(list.onMouseDblClick((event) => event.element.toggle()));
    const listFocusTracker = this._register(trackFocus(list.getHTMLElement()));
    this._register(listFocusTracker.onDidBlur(() => {
      if (document.hasFocus()) {
        list.setFocus([]);
      }
    }));
    NotificationFocusedContext.bindTo(list.contextKeyService);
    this._register(list.onDidChangeSelection((e) => {
      if (e.indexes.length > 0) {
        list.setSelection([]);
      }
    }));
    this.container.appendChild(this.listContainer);
  }
  updateNotificationsList(start, deleteCount, items = []) {
    const [list, listContainer] = assertAllDefined(this.list, this.listContainer);
    const listHasDOMFocus = isAncestor(document.activeElement, listContainer);
    const focusedIndex = list.getFocus()[0];
    const focusedItem = this.viewModel[focusedIndex];
    let focusRelativeTop = null;
    if (typeof focusedIndex === "number") {
      focusRelativeTop = list.getRelativeTop(focusedIndex);
    }
    this.viewModel.splice(start, deleteCount, ...items);
    list.splice(start, deleteCount, items);
    list.layout();
    if (this.viewModel.length === 0) {
      this.hide();
    } else if (typeof focusedIndex === "number") {
      let indexToFocus = 0;
      if (focusedItem) {
        let indexToFocusCandidate = this.viewModel.indexOf(focusedItem);
        if (indexToFocusCandidate === -1) {
          indexToFocusCandidate = focusedIndex - 1;
        }
        if (indexToFocusCandidate < this.viewModel.length && indexToFocusCandidate >= 0) {
          indexToFocus = indexToFocusCandidate;
        }
      }
      if (typeof focusRelativeTop === "number") {
        list.reveal(indexToFocus, focusRelativeTop);
      }
      list.setFocus([indexToFocus]);
    }
    if (this.isVisible && listHasDOMFocus) {
      list.domFocus();
    }
  }
  updateNotificationHeight(item) {
    const index = this.viewModel.indexOf(item);
    if (index === -1) {
      return;
    }
    const [list, listDelegate] = assertAllDefined(this.list, this.listDelegate);
    list.updateElementHeight(index, listDelegate.getHeight(item));
    list.layout();
  }
  hide() {
    if (!this.isVisible || !this.list) {
      return;
    }
    this.isVisible = false;
    this.list.splice(0, this.viewModel.length);
    this.viewModel = [];
  }
  focusFirst() {
    if (!this.list) {
      return;
    }
    this.list.focusFirst();
    this.list.domFocus();
  }
  hasFocus() {
    if (!this.listContainer) {
      return false;
    }
    return isAncestor(document.activeElement, this.listContainer);
  }
  layout(width, maxHeight) {
    if (this.listContainer && this.list) {
      this.listContainer.style.width = `${width}px`;
      if (typeof maxHeight === "number") {
        this.list.getHTMLElement().style.maxHeight = `${maxHeight}px`;
      }
      this.list.layout();
    }
  }
  dispose() {
    this.hide();
    super.dispose();
  }
};
NotificationsList = __decorate([
  __param(2, IInstantiationService),
  __param(3, IContextMenuService)
], NotificationsList);
let NotificationAccessibilityProvider = class NotificationAccessibilityProvider2 {
  constructor(_options, _keybindingService, _configurationService) {
    this._options = _options;
    this._keybindingService = _keybindingService;
    this._configurationService = _configurationService;
  }
  getAriaLabel(element) {
    var _a2;
    let accessibleViewHint;
    const keybinding = (_a2 = this._keybindingService.lookupKeybinding("editor.action.accessibleView")) == null ? void 0 : _a2.getAriaLabel();
    if (this._configurationService.getValue("accessibility.verbosity.notification")) {
      accessibleViewHint = keybinding ? localize(
        "notificationAccessibleViewHint",
        "Inspect the response in the accessible view with {0}",
        keybinding
      ) : localize(
        "notificationAccessibleViewHintNoKb",
        "Inspect the response in the accessible view via the command Open Accessible View which is currently not triggerable via keybinding"
      );
    }
    if (!element.source) {
      return accessibleViewHint ? localize(
        "notificationAriaLabelHint",
        "{0}, notification, {1}",
        element.message.raw,
        accessibleViewHint
      ) : localize("notificationAriaLabel", "{0}, notification", element.message.raw);
    }
    return accessibleViewHint ? localize(
      "notificationWithSourceAriaLabelHint",
      "{0}, source: {1}, notification, {2}",
      element.message.raw,
      element.source,
      accessibleViewHint
    ) : localize(
      "notificationWithSourceAriaLabel",
      "{0}, source: {1}, notification",
      element.message.raw,
      element.source
    );
  }
  getWidgetAriaLabel() {
    return this._options.widgetAriaLabel ?? localize("notificationsList", "Notifications List");
  }
  getRole() {
    return "dialog";
  }
};
NotificationAccessibilityProvider = __decorate([
  __param(1, IKeybindingService),
  __param(2, IConfigurationService)
], NotificationAccessibilityProvider);
var ToastVisibility;
(function(ToastVisibility2) {
  ToastVisibility2[ToastVisibility2["HIDDEN_OR_VISIBLE"] = 0] = "HIDDEN_OR_VISIBLE";
  ToastVisibility2[ToastVisibility2["HIDDEN"] = 1] = "HIDDEN";
  ToastVisibility2[ToastVisibility2["VISIBLE"] = 2] = "VISIBLE";
})(ToastVisibility || (ToastVisibility = {}));
let NotificationsToasts = (_j = class extends Themable {
  get isVisible() {
    return !!this._isVisible;
  }
  constructor(container, model, instantiationService, layoutService, themeService, editorGroupService, contextKeyService, lifecycleService, hostService) {
    super(themeService);
    this.container = container;
    this.model = model;
    this.instantiationService = instantiationService;
    this.layoutService = layoutService;
    this.editorGroupService = editorGroupService;
    this.contextKeyService = contextKeyService;
    this.lifecycleService = lifecycleService;
    this.hostService = hostService;
    this._onDidChangeVisibility = this._register(new Emitter());
    this.onDidChangeVisibility = this._onDidChangeVisibility.event;
    this._isVisible = false;
    this.mapNotificationToToast = /* @__PURE__ */ new Map();
    this.mapNotificationToDisposable = /* @__PURE__ */ new Map();
    this.notificationsToastsVisibleContextKey = NotificationsToastsVisibleContext.bindTo(this.contextKeyService);
    this.addedToastsIntervalCounter = new IntervalCounter(_j.SPAM_PROTECTION.interval);
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.layoutService.onDidLayout((dimension) => this.layout(Dimension.lift(dimension))));
    this.lifecycleService.when(3).then(() => {
      this.model.notifications.forEach((notification) => this.addToast(notification));
      this._register(this.model.onDidChangeNotification((e) => this.onDidChangeNotification(e)));
    });
    this._register(this.model.onDidChangeFilter((filter) => {
      if (filter === NotificationsFilter.SILENT || filter === NotificationsFilter.ERROR) {
        this.hide();
      }
    }));
  }
  onDidChangeNotification(e) {
    switch (e.kind) {
      case 0:
        return this.addToast(e.item);
      case 3:
        return this.removeToast(e.item);
    }
  }
  addToast(item) {
    if (this.isNotificationsCenterVisible) {
      return;
    }
    if (item.priority === NotificationPriority.SILENT) {
      return;
    }
    if (this.addedToastsIntervalCounter.increment() > _j.SPAM_PROTECTION.limit) {
      return;
    }
    const itemDisposables = new DisposableStore();
    this.mapNotificationToDisposable.set(item, itemDisposables);
    itemDisposables.add(scheduleAtNextAnimationFrame(() => this.doAddToast(item, itemDisposables)));
  }
  doAddToast(item, itemDisposables) {
    let notificationsToastsContainer = this.notificationsToastsContainer;
    if (!notificationsToastsContainer) {
      notificationsToastsContainer = this.notificationsToastsContainer = document.createElement("div");
      notificationsToastsContainer.classList.add("notifications-toasts");
      this.container.appendChild(notificationsToastsContainer);
    }
    notificationsToastsContainer.classList.add("visible");
    const notificationToastContainer = document.createElement("div");
    notificationToastContainer.classList.add("notification-toast-container");
    const firstToast = notificationsToastsContainer.firstChild;
    if (firstToast) {
      notificationsToastsContainer.insertBefore(notificationToastContainer, firstToast);
    } else {
      notificationsToastsContainer.appendChild(notificationToastContainer);
    }
    const notificationToast = document.createElement("div");
    notificationToast.classList.add("notification-toast");
    notificationToastContainer.appendChild(notificationToast);
    const notificationList = this.instantiationService.createInstance(NotificationsList, notificationToast, {
      verticalScrollMode: 2,
      widgetAriaLabel: (() => {
        if (!item.source) {
          return localize("notificationAriaLabel", "{0}, notification", item.message.raw);
        }
        return localize(
          "notificationWithSourceAriaLabel",
          "{0}, source: {1}, notification",
          item.message.raw,
          item.source
        );
      })()
    });
    itemDisposables.add(notificationList);
    const toast = { item, list: notificationList, container: notificationToastContainer, toast: notificationToast };
    this.mapNotificationToToast.set(item, toast);
    itemDisposables.add(toDisposable(() => this.updateToastVisibility(toast, false)));
    notificationList.show();
    const maxDimensions = this.computeMaxDimensions();
    this.layoutLists(maxDimensions.width);
    notificationList.updateNotificationsList(0, 0, [item]);
    this.layoutContainer(maxDimensions.height);
    itemDisposables.add(item.onDidChangeExpansion(() => {
      notificationList.updateNotificationsList(0, 1, [item]);
    }));
    itemDisposables.add(item.onDidChangeContent((e) => {
      switch (e.kind) {
        case 2:
          notificationList.updateNotificationsList(0, 1, [item]);
          break;
        case 1:
          if (item.expanded) {
            notificationList.updateNotificationHeight(item);
          }
          break;
      }
    }));
    Event.once(item.onDidClose)(() => {
      this.removeToast(item);
    });
    this.purgeNotification(item, notificationToastContainer, notificationList, itemDisposables);
    this.updateStyles();
    this.notificationsToastsVisibleContextKey.set(true);
    notificationToast.classList.add("notification-fade-in");
    itemDisposables.add(addDisposableListener(notificationToast, "transitionend", () => {
      notificationToast.classList.remove("notification-fade-in");
      notificationToast.classList.add("notification-fade-in-done");
    }));
    item.updateVisibility(true);
    if (!this._isVisible) {
      this._isVisible = true;
      this._onDidChangeVisibility.fire();
    }
  }
  purgeNotification(item, notificationToastContainer, notificationList, disposables) {
    let isMouseOverToast = false;
    disposables.add(addDisposableListener(notificationToastContainer, EventType.MOUSE_OVER, () => isMouseOverToast = true));
    disposables.add(addDisposableListener(notificationToastContainer, EventType.MOUSE_OUT, () => isMouseOverToast = false));
    let purgeTimeoutHandle;
    let listener;
    const hideAfterTimeout = () => {
      purgeTimeoutHandle = setTimeout(() => {
        if (!this.hostService.hasFocus) {
          if (!listener) {
            listener = this.hostService.onDidChangeFocus((focus) => {
              if (focus) {
                hideAfterTimeout();
              }
            });
            disposables.add(listener);
          }
        } else if (item.sticky || notificationList.hasFocus() || isMouseOverToast) {
          hideAfterTimeout();
        } else {
          this.removeToast(item);
        }
      }, _j.PURGE_TIMEOUT[item.severity]);
    };
    hideAfterTimeout();
    disposables.add(toDisposable(() => clearTimeout(purgeTimeoutHandle)));
  }
  removeToast(item) {
    let focusEditor = false;
    const notificationToast = this.mapNotificationToToast.get(item);
    if (notificationToast) {
      const toastHasDOMFocus = isAncestor(document.activeElement, notificationToast.container);
      if (toastHasDOMFocus) {
        focusEditor = !(this.focusNext() || this.focusPrevious());
      }
      this.mapNotificationToToast.delete(item);
    }
    const notificationDisposables = this.mapNotificationToDisposable.get(item);
    if (notificationDisposables) {
      dispose(notificationDisposables);
      this.mapNotificationToDisposable.delete(item);
    }
    if (this.mapNotificationToToast.size > 0) {
      this.layout(this.workbenchDimensions);
    } else {
      this.doHide();
      if (focusEditor) {
        this.editorGroupService.activeGroup.focus();
      }
    }
  }
  removeToasts() {
    this.mapNotificationToToast.clear();
    this.mapNotificationToDisposable.forEach((disposable) => dispose(disposable));
    this.mapNotificationToDisposable.clear();
    this.doHide();
  }
  doHide() {
    var _a2;
    (_a2 = this.notificationsToastsContainer) == null ? void 0 : _a2.classList.remove("visible");
    this.notificationsToastsVisibleContextKey.set(false);
    if (this._isVisible) {
      this._isVisible = false;
      this._onDidChangeVisibility.fire();
    }
  }
  hide() {
    const focusEditor = this.notificationsToastsContainer ? isAncestor(document.activeElement, this.notificationsToastsContainer) : false;
    this.removeToasts();
    if (focusEditor) {
      this.editorGroupService.activeGroup.focus();
    }
  }
  focus() {
    const toasts = this.getToasts(ToastVisibility.VISIBLE);
    if (toasts.length > 0) {
      toasts[0].list.focusFirst();
      return true;
    }
    return false;
  }
  focusNext() {
    const toasts = this.getToasts(ToastVisibility.VISIBLE);
    for (let i = 0; i < toasts.length; i++) {
      const toast = toasts[i];
      if (toast.list.hasFocus()) {
        const nextToast = toasts[i + 1];
        if (nextToast) {
          nextToast.list.focusFirst();
          return true;
        }
        break;
      }
    }
    return false;
  }
  focusPrevious() {
    const toasts = this.getToasts(ToastVisibility.VISIBLE);
    for (let i = 0; i < toasts.length; i++) {
      const toast = toasts[i];
      if (toast.list.hasFocus()) {
        const previousToast = toasts[i - 1];
        if (previousToast) {
          previousToast.list.focusFirst();
          return true;
        }
        break;
      }
    }
    return false;
  }
  focusFirst() {
    const toast = this.getToasts(ToastVisibility.VISIBLE)[0];
    if (toast) {
      toast.list.focusFirst();
      return true;
    }
    return false;
  }
  focusLast() {
    const toasts = this.getToasts(ToastVisibility.VISIBLE);
    if (toasts.length > 0) {
      toasts[toasts.length - 1].list.focusFirst();
      return true;
    }
    return false;
  }
  update(isCenterVisible) {
    if (this.isNotificationsCenterVisible !== isCenterVisible) {
      this.isNotificationsCenterVisible = isCenterVisible;
      if (this.isNotificationsCenterVisible) {
        this.removeToasts();
      }
    }
  }
  updateStyles() {
    this.mapNotificationToToast.forEach(({ toast }) => {
      const backgroundColor = this.getColor(NOTIFICATIONS_BACKGROUND);
      toast.style.background = backgroundColor ? backgroundColor : "";
      const widgetShadowColor = this.getColor(widgetShadow);
      toast.style.boxShadow = widgetShadowColor ? `0 0 8px 2px ${widgetShadowColor}` : "";
      const borderColor = this.getColor(NOTIFICATIONS_TOAST_BORDER);
      toast.style.border = borderColor ? `1px solid ${borderColor}` : "";
    });
  }
  getToasts(state) {
    const notificationToasts = [];
    this.mapNotificationToToast.forEach((toast) => {
      switch (state) {
        case ToastVisibility.HIDDEN_OR_VISIBLE:
          notificationToasts.push(toast);
          break;
        case ToastVisibility.HIDDEN:
          if (!this.isToastInDOM(toast)) {
            notificationToasts.push(toast);
          }
          break;
        case ToastVisibility.VISIBLE:
          if (this.isToastInDOM(toast)) {
            notificationToasts.push(toast);
          }
          break;
      }
    });
    return notificationToasts.reverse();
  }
  layout(dimension) {
    this.workbenchDimensions = dimension;
    const maxDimensions = this.computeMaxDimensions();
    if (maxDimensions.height) {
      this.layoutContainer(maxDimensions.height);
    }
    this.layoutLists(maxDimensions.width);
  }
  computeMaxDimensions() {
    const maxWidth = _j.MAX_WIDTH;
    let availableWidth = maxWidth;
    let availableHeight;
    if (this.workbenchDimensions) {
      availableWidth = this.workbenchDimensions.width;
      availableWidth -= 2 * 8;
      availableHeight = this.workbenchDimensions.height;
      if (this.layoutService.isVisible("workbench.parts.statusbar")) {
        availableHeight -= 22;
      }
      if (this.layoutService.isVisible("workbench.parts.titlebar")) {
        availableHeight -= 22;
      }
      availableHeight -= 2 * 12;
    }
    availableHeight = typeof availableHeight === "number" ? Math.round(availableHeight * 0.618) : 0;
    return new Dimension(Math.min(maxWidth, availableWidth), availableHeight);
  }
  layoutLists(width) {
    this.mapNotificationToToast.forEach(({ list }) => list.layout(width));
  }
  layoutContainer(heightToGive) {
    let visibleToasts = 0;
    for (const toast of this.getToasts(ToastVisibility.HIDDEN_OR_VISIBLE)) {
      toast.container.style.opacity = "0";
      this.updateToastVisibility(toast, true);
      heightToGive -= toast.container.offsetHeight;
      let makeVisible = false;
      if (visibleToasts === _j.MAX_NOTIFICATIONS) {
        makeVisible = false;
      } else if (heightToGive >= 0) {
        makeVisible = true;
      }
      this.updateToastVisibility(toast, makeVisible);
      toast.container.style.opacity = "";
      if (makeVisible) {
        visibleToasts++;
      }
    }
  }
  updateToastVisibility(toast, visible) {
    if (this.isToastInDOM(toast) === visible) {
      return;
    }
    const notificationsToastsContainer = assertIsDefined(this.notificationsToastsContainer);
    if (visible) {
      notificationsToastsContainer.appendChild(toast.container);
    } else {
      notificationsToastsContainer.removeChild(toast.container);
    }
    toast.item.updateVisibility(visible);
  }
  isToastInDOM(toast) {
    return !!toast.container.parentElement;
  }
}, _j.MAX_WIDTH = 450, _j.MAX_NOTIFICATIONS = 3, _j.PURGE_TIMEOUT = {
  [Severity.Info]: 15e3,
  [Severity.Warning]: 18e3,
  [Severity.Error]: 2e4
}, _j.SPAM_PROTECTION = {
  interval: 800,
  limit: _j.MAX_NOTIFICATIONS
}, _j);
NotificationsToasts = __decorate([
  __param(2, IInstantiationService),
  __param(3, IWorkbenchLayoutService),
  __param(4, IThemeService),
  __param(5, IEditorGroupsService),
  __param(6, IContextKeyService),
  __param(7, ILifecycleService),
  __param(8, IHostService)
], NotificationsToasts);
let NotificationService = (_k = class extends Disposable {
  constructor(storageService) {
    super();
    this.storageService = storageService;
    this.model = this._register(new NotificationsModel());
    this._onDidAddNotification = this._register(new Emitter());
    this.onDidAddNotification = this._onDidAddNotification.event;
    this._onDidRemoveNotification = this._register(new Emitter());
    this.onDidRemoveNotification = this._onDidRemoveNotification.event;
    this._onDidChangeDoNotDisturbMode = this._register(new Emitter());
    this.onDidChangeDoNotDisturbMode = this._onDidChangeDoNotDisturbMode.event;
    this._doNotDisturbMode = this.storageService.getBoolean(_k.DND_SETTINGS_KEY, -1, false);
    this.updateDoNotDisturbFilters();
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.model.onDidChangeNotification((e) => {
      switch (e.kind) {
        case 0:
        case 3: {
          const notification = {
            message: e.item.message.original,
            severity: e.item.severity,
            source: typeof e.item.sourceId === "string" && typeof e.item.source === "string" ? { id: e.item.sourceId, label: e.item.source } : e.item.source,
            priority: e.item.priority
          };
          if (e.kind === 0) {
            this._onDidAddNotification.fire(notification);
          }
          if (e.kind === 3) {
            this._onDidRemoveNotification.fire(notification);
          }
          break;
        }
      }
    }));
  }
  get doNotDisturbMode() {
    return this._doNotDisturbMode;
  }
  set doNotDisturbMode(enabled) {
    if (this._doNotDisturbMode === enabled) {
      return;
    }
    this.storageService.store(_k.DND_SETTINGS_KEY, enabled, -1, 1);
    this._doNotDisturbMode = enabled;
    this.updateDoNotDisturbFilters();
    this._onDidChangeDoNotDisturbMode.fire();
  }
  updateDoNotDisturbFilters() {
    let filter;
    if (this._doNotDisturbMode) {
      filter = NotificationsFilter.ERROR;
    } else {
      filter = NotificationsFilter.OFF;
    }
    this.model.setFilter(filter);
  }
  info(message) {
    if (Array.isArray(message)) {
      message.forEach((m) => this.info(m));
      return;
    }
    this.model.addNotification({ severity: Severity.Info, message });
  }
  warn(message) {
    if (Array.isArray(message)) {
      message.forEach((m) => this.warn(m));
      return;
    }
    this.model.addNotification({ severity: Severity.Warning, message });
  }
  error(message) {
    if (Array.isArray(message)) {
      message.forEach((m) => this.error(m));
      return;
    }
    this.model.addNotification({ severity: Severity.Error, message });
  }
  notify(notification) {
    var _a2, _b2;
    const toDispose = new DisposableStore();
    if (notification.neverShowAgain) {
      const scope = this.toStorageScope(notification.neverShowAgain);
      const id = notification.neverShowAgain.id;
      if (this.storageService.getBoolean(id, scope)) {
        return new NoOpNotification();
      }
      const neverShowAgainAction = toDispose.add(new Action("workbench.notification.neverShowAgain", localize("neverShowAgain", "Don't Show Again"), void 0, true, async () => {
        handle.close();
        this.storageService.store(id, true, scope, 0);
      }));
      const actions = {
        primary: ((_a2 = notification.actions) == null ? void 0 : _a2.primary) || [],
        secondary: ((_b2 = notification.actions) == null ? void 0 : _b2.secondary) || []
      };
      if (!notification.neverShowAgain.isSecondary) {
        actions.primary = [neverShowAgainAction, ...actions.primary];
      } else {
        actions.secondary = [...actions.secondary, neverShowAgainAction];
      }
      notification.actions = actions;
    }
    const handle = this.model.addNotification(notification);
    Event.once(handle.onDidClose)(() => toDispose.dispose());
    return handle;
  }
  toStorageScope(options) {
    switch (options.scope) {
      case NeverShowAgainScope.APPLICATION:
        return -1;
      case NeverShowAgainScope.PROFILE:
        return 0;
      case NeverShowAgainScope.WORKSPACE:
        return 1;
      default:
        return -1;
    }
  }
  prompt(severity, message, choices, options) {
    const toDispose = new DisposableStore();
    if (options == null ? void 0 : options.neverShowAgain) {
      const scope = this.toStorageScope(options.neverShowAgain);
      const id = options.neverShowAgain.id;
      if (this.storageService.getBoolean(id, scope)) {
        return new NoOpNotification();
      }
      const neverShowAgainChoice = {
        label: localize("neverShowAgain", "Don't Show Again"),
        run: () => this.storageService.store(id, true, scope, 0),
        isSecondary: options.neverShowAgain.isSecondary
      };
      if (!options.neverShowAgain.isSecondary) {
        choices = [neverShowAgainChoice, ...choices];
      } else {
        choices = [...choices, neverShowAgainChoice];
      }
    }
    let choiceClicked = false;
    const primaryActions = [];
    const secondaryActions = [];
    choices.forEach((choice, index) => {
      const action = new ChoiceAction(`workbench.dialog.choice.${index}`, choice);
      if (!choice.isSecondary) {
        primaryActions.push(action);
      } else {
        secondaryActions.push(action);
      }
      toDispose.add(action.onDidRun(() => {
        choiceClicked = true;
        if (!choice.keepOpen) {
          handle.close();
        }
      }));
      toDispose.add(action);
    });
    const actions = { primary: primaryActions, secondary: secondaryActions };
    const handle = this.notify({ severity, message, actions, sticky: options == null ? void 0 : options.sticky, priority: options == null ? void 0 : options.priority });
    Event.once(handle.onDidClose)(() => {
      toDispose.dispose();
      if (options && typeof options.onCancel === "function" && !choiceClicked) {
        options.onCancel();
      }
    });
    return handle;
  }
  status(message, options) {
    return this.model.showStatusMessage(message, options);
  }
}, _k.DND_SETTINGS_KEY = "notifications.doNotDisturbMode", _k);
NotificationService = __decorate([
  __param(0, IStorageService)
], NotificationService);
var css = ".monaco-workbench>.notifications-center{border-radius:4px;bottom:31px;display:none;overflow:hidden;position:absolute;right:8px;z-index:1000}.monaco-workbench.nostatusbar>.notifications-center{bottom:8px}.monaco-workbench>.notifications-center.visible{display:block}.monaco-workbench>.notifications-center>.notifications-center-header{align-items:center;display:flex;height:35px;padding-left:8px;padding-right:5px}.monaco-workbench>.notifications-center>.notifications-center-header>.notifications-center-header-title{font-size:11px;text-transform:uppercase}.monaco-workbench>.notifications-center>.notifications-center-header>.notifications-center-header-toolbar{flex:1}.monaco-workbench>.notifications-center>.notifications-center-header>.notifications-center-header-toolbar .actions-container{justify-content:flex-end}.monaco-workbench>.notifications-center .notifications-list-container .monaco-list-row[data-last-element=false]>.notification-list-item{border-bottom:1px solid var(--vscode-notifications-border)}.monaco-workbench>.notifications-center .notifications-list-container,.monaco-workbench>.notifications-center .notifications-list-container .monaco-scrollable-element,.monaco-workbench>.notifications-center .notifications-list-container .notification-list-item{border-radius:0}.monaco-workbench>.notifications-center .codicon.codicon-error{color:var(--vscode-notificationsErrorIcon-foreground)!important}.monaco-workbench>.notifications-center .codicon.codicon-warning{color:var(--vscode-notificationsWarningIcon-foreground)!important}.monaco-workbench>.notifications-center .codicon.codicon-info{color:var(--vscode-notificationsInfoIcon-foreground)!important}";
n(css, {});
let NotificationsCenter = (_l = class extends Themable {
  constructor(container, model, themeService, instantiationService, layoutService, contextKeyService, editorGroupService, keybindingService, notificationService) {
    super(themeService);
    this.container = container;
    this.model = model;
    this.instantiationService = instantiationService;
    this.layoutService = layoutService;
    this.contextKeyService = contextKeyService;
    this.editorGroupService = editorGroupService;
    this.keybindingService = keybindingService;
    this.notificationService = notificationService;
    this._onDidChangeVisibility = this._register(new Emitter());
    this.onDidChangeVisibility = this._onDidChangeVisibility.event;
    this.notificationsCenterVisibleContextKey = NotificationsCenterVisibleContext.bindTo(this.contextKeyService);
    this.notificationsCenterVisibleContextKey = NotificationsCenterVisibleContext.bindTo(contextKeyService);
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.model.onDidChangeNotification((e) => this.onDidChangeNotification(e)));
    this._register(this.layoutService.onDidLayout((dimension) => this.layout(Dimension.lift(dimension))));
    this._register(this.notificationService.onDidChangeDoNotDisturbMode(() => this.onDidChangeDoNotDisturbMode()));
  }
  onDidChangeDoNotDisturbMode() {
    this.hide();
  }
  get isVisible() {
    return !!this._isVisible;
  }
  show() {
    if (this._isVisible) {
      const notificationsList2 = assertIsDefined(this.notificationsList);
      notificationsList2.show();
      notificationsList2.focusFirst();
      return;
    }
    if (!this.notificationsCenterContainer) {
      this.create();
    }
    this.updateTitle();
    const [notificationsList, notificationsCenterContainer] = assertAllDefined(this.notificationsList, this.notificationsCenterContainer);
    this._isVisible = true;
    notificationsCenterContainer.classList.add("visible");
    notificationsList.show();
    this.layout(this.workbenchDimensions);
    notificationsList.updateNotificationsList(0, 0, this.model.notifications);
    notificationsList.focusFirst();
    this.updateStyles();
    this.model.notifications.forEach((notification) => notification.updateVisibility(true));
    this.notificationsCenterVisibleContextKey.set(true);
    this._onDidChangeVisibility.fire();
  }
  updateTitle() {
    const [notificationsCenterTitle, clearAllAction] = assertAllDefined(this.notificationsCenterTitle, this.clearAllAction);
    if (this.model.notifications.length === 0) {
      notificationsCenterTitle.textContent = localize("notificationsEmpty", "No new notifications");
      clearAllAction.enabled = false;
    } else {
      notificationsCenterTitle.textContent = localize("notifications", "Notifications");
      clearAllAction.enabled = this.model.notifications.some((notification) => !notification.hasProgress);
    }
  }
  create() {
    this.notificationsCenterContainer = document.createElement("div");
    this.notificationsCenterContainer.classList.add("notifications-center");
    this.notificationsCenterHeader = document.createElement("div");
    this.notificationsCenterHeader.classList.add("notifications-center-header");
    this.notificationsCenterContainer.appendChild(this.notificationsCenterHeader);
    this.notificationsCenterTitle = document.createElement("span");
    this.notificationsCenterTitle.classList.add("notifications-center-header-title");
    this.notificationsCenterHeader.appendChild(this.notificationsCenterTitle);
    const toolbarContainer = document.createElement("div");
    toolbarContainer.classList.add("notifications-center-header-toolbar");
    this.notificationsCenterHeader.appendChild(toolbarContainer);
    const actionRunner = this._register(this.instantiationService.createInstance(NotificationActionRunner));
    const notificationsToolBar = this._register(new ActionBar(toolbarContainer, {
      ariaLabel: localize("notificationsToolbar", "Notification Center Actions"),
      actionRunner
    }));
    this.clearAllAction = this._register(this.instantiationService.createInstance(ClearAllNotificationsAction, ClearAllNotificationsAction.ID, ClearAllNotificationsAction.LABEL));
    notificationsToolBar.push(this.clearAllAction, { icon: true, label: false, keybinding: this.getKeybindingLabel(this.clearAllAction) });
    this.toggleDoNotDisturbAction = this._register(this.instantiationService.createInstance(ToggleDoNotDisturbAction, ToggleDoNotDisturbAction.ID, ToggleDoNotDisturbAction.LABEL));
    notificationsToolBar.push(this.toggleDoNotDisturbAction, { icon: true, label: false, keybinding: this.getKeybindingLabel(this.toggleDoNotDisturbAction) });
    const hideAllAction = this._register(this.instantiationService.createInstance(HideNotificationsCenterAction, HideNotificationsCenterAction.ID, HideNotificationsCenterAction.LABEL));
    notificationsToolBar.push(hideAllAction, { icon: true, label: false, keybinding: this.getKeybindingLabel(hideAllAction) });
    this.notificationsList = this.instantiationService.createInstance(NotificationsList, this.notificationsCenterContainer, {
      widgetAriaLabel: localize("notificationsCenterWidgetAriaLabel", "Notifications Center")
    });
    this.container.appendChild(this.notificationsCenterContainer);
  }
  getKeybindingLabel(action) {
    const keybinding = this.keybindingService.lookupKeybinding(action.id);
    return keybinding ? keybinding.getLabel() : null;
  }
  onDidChangeNotification(e) {
    if (!this._isVisible) {
      return;
    }
    let focusEditor = false;
    const [notificationsList, notificationsCenterContainer] = assertAllDefined(this.notificationsList, this.notificationsCenterContainer);
    switch (e.kind) {
      case 0:
        notificationsList.updateNotificationsList(e.index, 0, [e.item]);
        e.item.updateVisibility(true);
        break;
      case 1:
        switch (e.detail) {
          case 2:
            notificationsList.updateNotificationsList(e.index, 1, [e.item]);
            break;
          case 1:
            if (e.item.expanded) {
              notificationsList.updateNotificationHeight(e.item);
            }
            break;
        }
        break;
      case 2:
        notificationsList.updateNotificationsList(e.index, 1, [e.item]);
        break;
      case 3:
        focusEditor = isAncestor(document.activeElement, notificationsCenterContainer);
        notificationsList.updateNotificationsList(e.index, 1);
        e.item.updateVisibility(false);
        break;
    }
    this.updateTitle();
    if (this.model.notifications.length === 0) {
      this.hide();
      if (focusEditor) {
        this.editorGroupService.activeGroup.focus();
      }
    }
  }
  hide() {
    if (!this._isVisible || !this.notificationsCenterContainer || !this.notificationsList) {
      return;
    }
    const focusEditor = isAncestor(document.activeElement, this.notificationsCenterContainer);
    this._isVisible = false;
    this.notificationsCenterContainer.classList.remove("visible");
    this.notificationsList.hide();
    this.model.notifications.forEach((notification) => notification.updateVisibility(false));
    this.notificationsCenterVisibleContextKey.set(false);
    this._onDidChangeVisibility.fire();
    if (focusEditor) {
      this.editorGroupService.activeGroup.focus();
    }
  }
  updateStyles() {
    if (this.notificationsCenterContainer && this.notificationsCenterHeader) {
      const widgetShadowColor = this.getColor(widgetShadow);
      this.notificationsCenterContainer.style.boxShadow = widgetShadowColor ? `0 0 8px 2px ${widgetShadowColor}` : "";
      const borderColor = this.getColor(NOTIFICATIONS_CENTER_BORDER);
      this.notificationsCenterContainer.style.border = borderColor ? `1px solid ${borderColor}` : "";
      const headerForeground = this.getColor(NOTIFICATIONS_CENTER_HEADER_FOREGROUND);
      this.notificationsCenterHeader.style.color = headerForeground ?? "";
      const headerBackground = this.getColor(NOTIFICATIONS_CENTER_HEADER_BACKGROUND);
      this.notificationsCenterHeader.style.background = headerBackground ?? "";
    }
  }
  layout(dimension) {
    this.workbenchDimensions = dimension;
    if (this._isVisible && this.notificationsCenterContainer) {
      const maxWidth = _l.MAX_DIMENSIONS.width;
      const maxHeight = _l.MAX_DIMENSIONS.height;
      let availableWidth = maxWidth;
      let availableHeight = maxHeight;
      if (this.workbenchDimensions) {
        availableWidth = this.workbenchDimensions.width;
        availableWidth -= 2 * 8;
        availableHeight = this.workbenchDimensions.height - 35;
        if (this.layoutService.isVisible("workbench.parts.statusbar")) {
          availableHeight -= 22;
        }
        if (this.layoutService.isVisible("workbench.parts.titlebar")) {
          availableHeight -= 22;
        }
        availableHeight -= 2 * 12;
      }
      const notificationsList = assertIsDefined(this.notificationsList);
      notificationsList.layout(Math.min(maxWidth, availableWidth), Math.min(maxHeight, availableHeight));
    }
  }
  clearAll() {
    this.hide();
    for (const notification of [...this.model.notifications]) {
      if (!notification.hasProgress) {
        notification.close();
      }
    }
  }
}, _l.MAX_DIMENSIONS = new Dimension(450, 400), _l);
NotificationsCenter = __decorate([
  __param(2, IThemeService),
  __param(3, IInstantiationService),
  __param(4, IWorkbenchLayoutService),
  __param(5, IContextKeyService),
  __param(6, IEditorGroupsService),
  __param(7, IKeybindingService),
  __param(8, INotificationService)
], NotificationsCenter);
class NotificationsAlerts extends Disposable {
  constructor(model) {
    super();
    this.model = model;
    for (const notification of model.notifications) {
      this.triggerAriaAlert(notification);
    }
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.model.onDidChangeNotification((e) => this.onDidChangeNotification(e)));
  }
  onDidChangeNotification(e) {
    if (e.kind === 0) {
      this.triggerAriaAlert(e.item);
      if (e.item.severity === Severity.Error) {
        if (e.item.message.original instanceof Error) {
          console.error(e.item.message.original);
        } else {
          console.error(toErrorMessage(e.item.message.linkedText.toString(), true));
        }
      }
    }
  }
  triggerAriaAlert(notification) {
    if (notification.priority === NotificationPriority.SILENT) {
      return;
    }
    const listener = notification.onDidChangeContent((e) => {
      if (e.kind === 1) {
        this.doTriggerAriaAlert(notification);
      }
    });
    Event.once(notification.onDidClose)(() => listener.dispose());
    this.doTriggerAriaAlert(notification);
  }
  doTriggerAriaAlert(notification) {
    let alertText;
    if (notification.severity === Severity.Error) {
      alertText = localize("alertErrorMessage", "Error: {0}", notification.message.linkedText.toString());
    } else if (notification.severity === Severity.Warning) {
      alertText = localize("alertWarningMessage", "Warning: {0}", notification.message.linkedText.toString());
    } else {
      alertText = localize("alertInfoMessage", "Info: {0}", notification.message.linkedText.toString());
    }
    alert(alertText);
  }
}
onRenderWorkbench(async (accessor) => {
  const container = accessor.get(ILayoutService).container;
  const model = accessor.get(INotificationService).model;
  const instantiationService = accessor.get(IInstantiationService);
  setTimeout(() => {
    const notificationsCenter = instantiationService.createInstance(NotificationsCenter, container, model);
    const notificationsToasts = instantiationService.createInstance(NotificationsToasts, container, model);
    instantiationService.createInstance(NotificationsAlerts, model);
    instantiationService.createInstance(NotificationsTelemetry);
    registerNotificationCommands(notificationsCenter, notificationsToasts, model);
    notificationsToasts.layout(getClientArea(container));
  });
});
function getServiceOverride(container) {
  return {
    [INotificationService.toString()]: new SyncDescriptor(NotificationService, void 0, true),
    ...getServiceOverride$1(container)
  };
}
export {
  getServiceOverride as default
};
