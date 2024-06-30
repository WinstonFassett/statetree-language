import { gu as __decorate, gv as __param, r4 as BaseActionViewItem, cF as MenuEntryActionViewItem, up as DropdownMenuActionViewItem, ah as $, aG as append, aI as addDisposableListener, bT as StandardKeyboardEvent, aJ as EventType, a$ as IKeybindingService, al as INotificationService, I as IContextKeyService, aQ as IThemeService, cN as IAccessibilityService } from "./theme-defaults-1df7f429.js";
let DropdownWithPrimaryActionViewItem = class DropdownWithPrimaryActionViewItem2 extends BaseActionViewItem {
  get onDidChangeDropdownVisibility() {
    return this._dropdown.onDidChangeVisibility;
  }
  constructor(primaryAction, dropdownAction, dropdownMenuActions, className, _contextMenuProvider, _options, _keybindingService, _notificationService, _contextKeyService, _themeService, _accessibilityService) {
    var _a;
    super(null, primaryAction);
    this._contextMenuProvider = _contextMenuProvider;
    this._options = _options;
    this._container = null;
    this._dropdownContainer = null;
    this._primaryAction = new MenuEntryActionViewItem(
      primaryAction,
      void 0,
      _keybindingService,
      _notificationService,
      _contextKeyService,
      _themeService,
      _contextMenuProvider,
      _accessibilityService
    );
    this._dropdown = new DropdownMenuActionViewItem(dropdownAction, dropdownMenuActions, this._contextMenuProvider, {
      menuAsChild: true,
      classNames: className ? ["codicon", "codicon-chevron-down", className] : ["codicon", "codicon-chevron-down"],
      keybindingProvider: (_a = this._options) == null ? void 0 : _a.getKeyBinding
    });
  }
  setActionContext(newContext) {
    super.setActionContext(newContext);
    this._primaryAction.setActionContext(newContext);
    this._dropdown.setActionContext(newContext);
  }
  render(container) {
    this._container = container;
    super.render(this._container);
    this._container.classList.add("monaco-dropdown-with-primary");
    const primaryContainer = $(".action-container");
    this._primaryAction.render(append(this._container, primaryContainer));
    this._dropdownContainer = $(".dropdown-action-container");
    this._dropdown.render(append(this._container, this._dropdownContainer));
    this._register(addDisposableListener(primaryContainer, EventType.KEY_DOWN, (e) => {
      const event = new StandardKeyboardEvent(e);
      if (event.equals(17)) {
        this._primaryAction.element.tabIndex = -1;
        this._dropdown.focus();
        event.stopPropagation();
      }
    }));
    this._register(addDisposableListener(this._dropdownContainer, EventType.KEY_DOWN, (e) => {
      var _a;
      const event = new StandardKeyboardEvent(e);
      if (event.equals(15)) {
        this._primaryAction.element.tabIndex = 0;
        this._dropdown.setFocusable(false);
        (_a = this._primaryAction.element) == null ? void 0 : _a.focus();
        event.stopPropagation();
      }
    }));
  }
  focus(fromRight) {
    if (fromRight) {
      this._dropdown.focus();
    } else {
      this._primaryAction.element.tabIndex = 0;
      this._primaryAction.element.focus();
    }
  }
  blur() {
    this._primaryAction.element.tabIndex = -1;
    this._dropdown.blur();
    this._container.blur();
  }
  setFocusable(focusable) {
    if (focusable) {
      this._primaryAction.element.tabIndex = 0;
    } else {
      this._primaryAction.element.tabIndex = -1;
      this._dropdown.setFocusable(false);
    }
  }
  update(dropdownAction, dropdownMenuActions, dropdownIcon) {
    this._dropdown.dispose();
    this._dropdown = new DropdownMenuActionViewItem(dropdownAction, dropdownMenuActions, this._contextMenuProvider, {
      menuAsChild: true,
      classNames: ["codicon", dropdownIcon || "codicon-chevron-down"]
    });
    if (this._dropdownContainer) {
      this._dropdown.render(this._dropdownContainer);
    }
  }
  dispose() {
    this._primaryAction.dispose();
    this._dropdown.dispose();
    super.dispose();
  }
};
DropdownWithPrimaryActionViewItem = __decorate([
  __param(6, IKeybindingService),
  __param(7, INotificationService),
  __param(8, IContextKeyService),
  __param(9, IThemeService),
  __param(10, IAccessibilityService)
], DropdownWithPrimaryActionViewItem);
export {
  DropdownWithPrimaryActionViewItem as D
};
