import { CW as registerAccessibilityConfiguration, gu as __decorate, gv as __param, Z as Registry, h1 as Extensions, c as localize, ds as format, CX as AccessibilityHelpNLS, a$ as IKeybindingService, D as Disposable, gE as AccessibilityHelpAction, u as ICodeEditorService, gF as IAccessibleViewService, b1 as IInstantiationService, ak as ICommandService, nf as NEW_UNTITLED_FILE_COMMAND_ID, CY as AccessibleViewAction, e as EditorContextKeys, dW as IContextViewService, jG as IHoverService, bz as IListService, ut as NotificationFocusedContext, CZ as AccessibleViewNextAction, C_ as AccessibleViewPreviousAction, ur as WorkbenchList, d as alert, gM as n, bF as registerAction2, f6 as Action2, C$ as accessibilityHelpIsShown, cN as IAccessibilityService, ay as IConfigurationService, hh as SyncDescriptor, D0 as AccessibleViewService } from "./theme-defaults-1df7f429.js";
import { a0 as ToggleTabFocusModeAction, M as ModesHoverController } from "./index-ca8d23e0.js";
import { g as getNotificationFromContext } from "./notificationsCommands-9319aa92.js";
import "./index-3bddf13b.js";
registerAccessibilityConfiguration();
let AccessibilityHelpProvider = class AccessibilityHelpProvider2 {
  onClose() {
    this._editor.focus();
  }
  constructor(_editor, _keybindingService) {
    this._editor = _editor;
    this._keybindingService = _keybindingService;
    this.options = { type: "help", ariaLabel: localize("editor-help", "editor accessibility help"), readMoreUrl: "https://go.microsoft.com/fwlink/?linkid=851010" };
    this.verbositySettingKey = "accessibility.verbosity.editor";
  }
  _descriptionForCommand(commandId, msg, noKbMsg) {
    const kb = this._keybindingService.lookupKeybinding(commandId);
    if (kb) {
      return format(msg, kb.getAriaLabel());
    }
    return format(noKbMsg, commandId);
  }
  provideContent() {
    const options = this._editor.getOptions();
    const content = [];
    if (options.get(60)) {
      if (options.get(89)) {
        content.push(AccessibilityHelpNLS.readonlyDiffEditor);
      } else {
        content.push(AccessibilityHelpNLS.editableDiffEditor);
      }
    } else {
      if (options.get(89)) {
        content.push(AccessibilityHelpNLS.readonlyEditor);
      } else {
        content.push(AccessibilityHelpNLS.editableEditor);
      }
    }
    if (options.get(141)) {
      content.push(this._descriptionForCommand(ToggleTabFocusModeAction.ID, AccessibilityHelpNLS.tabFocusModeOnMsg, AccessibilityHelpNLS.tabFocusModeOnMsgNoKb));
    } else {
      content.push(this._descriptionForCommand(ToggleTabFocusModeAction.ID, AccessibilityHelpNLS.tabFocusModeOffMsg, AccessibilityHelpNLS.tabFocusModeOffMsgNoKb));
    }
    return content.join("\n");
  }
};
AccessibilityHelpProvider = __decorate([
  __param(1, IKeybindingService)
], AccessibilityHelpProvider);
class EditorAccessibilityHelpContribution extends Disposable {
  constructor() {
    super();
    this._register(AccessibilityHelpAction.addImplementation(95, "editor", async (accessor) => {
      const codeEditorService = accessor.get(ICodeEditorService);
      const accessibleViewService = accessor.get(IAccessibleViewService);
      const instantiationService = accessor.get(IInstantiationService);
      const commandService = accessor.get(ICommandService);
      let codeEditor = codeEditorService.getActiveCodeEditor() || codeEditorService.getFocusedCodeEditor();
      if (!codeEditor) {
        await commandService.executeCommand(NEW_UNTITLED_FILE_COMMAND_ID);
        codeEditor = codeEditorService.getActiveCodeEditor();
      }
      accessibleViewService.show(instantiationService.createInstance(AccessibilityHelpProvider, codeEditor));
    }));
  }
}
const workbenchRegistry = Registry.as(Extensions.Workbench);
workbenchRegistry.registerWorkbenchContribution(EditorAccessibilityHelpContribution, 4);
class HoverAccessibleViewContribution extends Disposable {
  constructor() {
    super();
    this._options = {
      ariaLabel: localize("hoverAccessibleView", "Hover Accessible View"),
      language: "typescript",
      type: "view"
    };
    this._register(AccessibleViewAction.addImplementation(95, "hover", (accessor) => {
      var _a, _b;
      const accessibleViewService = accessor.get(IAccessibleViewService);
      const codeEditorService = accessor.get(ICodeEditorService);
      const editor = codeEditorService.getActiveCodeEditor() || codeEditorService.getFocusedCodeEditor();
      const editorHoverContent = editor ? ((_a = ModesHoverController.get(editor)) == null ? void 0 : _a.getWidgetContent()) ?? void 0 : void 0;
      if (!editor || !editorHoverContent) {
        return false;
      }
      this._options.language = ((_b = editor == null ? void 0 : editor.getModel()) == null ? void 0 : _b.getLanguageId()) ?? void 0;
      accessibleViewService.show({
        verbositySettingKey: "accessibility.verbosity.hover",
        provideContent() {
          return editorHoverContent;
        },
        onClose() {
          var _a2;
          (_a2 = ModesHoverController.get(editor)) == null ? void 0 : _a2.focus();
        },
        options: this._options
      });
      return true;
    }, EditorContextKeys.hoverFocused));
    this._register(AccessibleViewAction.addImplementation(90, "extension-hover", (accessor) => {
      const accessibleViewService = accessor.get(IAccessibleViewService);
      const contextViewService = accessor.get(IContextViewService);
      const contextViewElement = contextViewService.getContextViewElement();
      const extensionHoverContent = (contextViewElement == null ? void 0 : contextViewElement.textContent) ?? void 0;
      const hoverService = accessor.get(IHoverService);
      if (contextViewElement.classList.contains("accessible-view-container") || !extensionHoverContent) {
        return false;
      }
      accessibleViewService.show({
        verbositySettingKey: "accessibility.verbosity.hover",
        provideContent() {
          return extensionHoverContent;
        },
        onClose() {
          hoverService.showAndFocusLastHover();
        },
        options: this._options
      });
      return true;
    }));
  }
}
const workbenchContributionsRegistry = Registry.as(Extensions.Workbench);
workbenchContributionsRegistry.registerWorkbenchContribution(HoverAccessibleViewContribution, 4);
class NotificationAccessibleViewContribution extends Disposable {
  constructor() {
    super();
    this._register(AccessibleViewAction.addImplementation(90, "notifications", (accessor) => {
      const accessibleViewService = accessor.get(IAccessibleViewService);
      const listService = accessor.get(IListService);
      const commandService = accessor.get(ICommandService);
      function renderAccessibleView() {
        const notification = getNotificationFromContext(listService);
        if (!notification) {
          return false;
        }
        commandService.executeCommand("notifications.showList");
        let notificationIndex;
        let length;
        const list = listService.lastFocusedList;
        if (list instanceof WorkbenchList) {
          notificationIndex = list.indexOf(notification);
          length = list.length;
        }
        if (notificationIndex === void 0) {
          return false;
        }
        function focusList() {
          commandService.executeCommand("notifications.showList");
          if (list && notificationIndex !== void 0) {
            list.domFocus();
            try {
              list.setFocus([notificationIndex]);
            } catch {
            }
          }
        }
        const message = notification.message.original.toString();
        if (!message) {
          return false;
        }
        accessibleViewService.show({
          provideContent: () => {
            return localize(
              "notification.accessibleView",
              "{0} Source: {1}",
              message,
              notification.source
            );
          },
          onClose() {
            focusList();
          },
          next() {
            if (!list) {
              return;
            }
            focusList();
            list.focusNext();
            alertFocusChange(notificationIndex, length, "next");
            renderAccessibleView();
          },
          previous() {
            if (!list) {
              return;
            }
            focusList();
            list.focusPrevious();
            alertFocusChange(notificationIndex, length, "previous");
            renderAccessibleView();
          },
          verbositySettingKey: "accessibility.verbosity.notification",
          options: {
            ariaLabel: localize("notification", "Notification Accessible View"),
            type: "view"
          }
        });
        return true;
      }
      return renderAccessibleView();
    }, NotificationFocusedContext));
  }
}
workbenchContributionsRegistry.registerWorkbenchContribution(NotificationAccessibleViewContribution, 4);
class AccessibleViewNavigatorContribution extends Disposable {
  constructor() {
    super();
    this._register(AccessibleViewNextAction.addImplementation(95, "next", (accessor) => {
      const accessibleViewService = accessor.get(IAccessibleViewService);
      accessibleViewService.next();
      return true;
    }));
    this._register(AccessibleViewPreviousAction.addImplementation(95, "previous", (accessor) => {
      const accessibleViewService = accessor.get(IAccessibleViewService);
      accessibleViewService.previous();
      return true;
    }));
  }
}
workbenchContributionsRegistry.registerWorkbenchContribution(AccessibleViewNavigatorContribution, 4);
function alertFocusChange(index, length, type) {
  if (index === void 0 || length === void 0) {
    return;
  }
  const number = index + 1;
  if (type === "next" && number + 1 <= length) {
    alert(`Focused ${number + 1} of ${length}`);
  } else if (type === "previous" && number - 1 > 0) {
    alert(`Focused ${number - 1} of ${length}`);
  }
  return;
}
var css = ".accessible-view{background-color:var(--vscode-editorWidget-background);border:2px solid var(--vscode-focusBorder);box-shadow:0 2px 8px var(--vscode-widget-shadow);color:var(--vscode-editorWidget-foreground);position:absolute}";
n(css, {});
class ToggleScreenReaderMode extends Action2 {
  constructor() {
    super({
      id: "editor.action.toggleScreenReaderAccessibilityMode",
      title: { value: localize("toggleScreenReaderMode", "Toggle Screen Reader Accessibility Mode"), original: "Toggle Screen Reader Accessibility Mode" },
      f1: true,
      keybinding: [
        {
          primary: 2048 | 35,
          weight: 200 + 10,
          when: accessibilityHelpIsShown
        },
        {
          primary: 512 | 59 | 1024,
          linux: { primary: 512 | 62 | 1024 },
          weight: 200 + 10
        }
      ]
    });
  }
  async run(accessor) {
    const accessibiiltyService = accessor.get(IAccessibilityService);
    const configurationService = accessor.get(IConfigurationService);
    const isScreenReaderOptimized = accessibiiltyService.isScreenReaderOptimized();
    configurationService.updateValue("editor.accessibilitySupport", isScreenReaderOptimized ? "off" : "on", 2);
    alert(isScreenReaderOptimized ? AccessibilityHelpNLS.screenReaderModeDisabled : AccessibilityHelpNLS.screenReaderModeEnabled);
  }
}
registerAction2(ToggleScreenReaderMode);
function getServiceOverride() {
  return {
    [IAccessibleViewService.toString()]: new SyncDescriptor(AccessibleViewService, [], true)
  };
}
export {
  getServiceOverride as default
};
