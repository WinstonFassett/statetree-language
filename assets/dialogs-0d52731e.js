var _a;
import { D as Disposable, ah as $, bh as hide, c as localize, u7 as InputBox, u8 as Checkbox, aI as addDisposableListener, aJ as EventType, cn as clearNode, rE as ButtonBar, iB as mnemonicButtonLabel, u9 as ButtonWithDescription, fH as EventHelper, bT as StandardKeyboardEvent, jL as isAncestor, aK as ThemeIcon, aM as Codicon, cA as ActionBar, cy as Action, bq as show, aT as isMacintosh, dz as isLinux, d2 as isWindows, ua as AbstractDialogHandler, b$ as MarkdownRenderer, c8 as Severity, a6 as DisposableStore, rF as defaultButtonStyles, ub as defaultCheckboxStyles, dx as defaultInputBoxStyles, uc as defaultDialogStyles, gu as __decorate, gv as __param, ud as fromNow, fM as ILogService, qY as ILayoutService, a$ as IKeybindingService, b1 as IInstantiationService, jI as IProductService, v as IClipboardService, Z as Registry, h1 as Extensions, iK as IDialogService, aD as Emitter, eL as DeferredPromise, hR as IWorkbenchEnvironmentService, R as RawContextKey, iJ as IFileDialogService, br as Schemas, gx as IEditorService, aV as basename, fz as joinPath, ha as deepClone, a2 as URI, rV as toLocalResource, ml as extname, b5 as dirname, ds as format, ue as equalsIgnoreCase, uf as extUriIgnorePathCase, d8 as relativePath, ug as hasTrailingPathSeparator, uh as addTrailingPathSeparator, ui as startsWithIgnoreCase, bB as isEqual, iF as removeTrailingPathSeparator, uj as isValidBasename, ao as createCancelablePromise, uk as normalizeDriveLetter, k0 as getIconClasses, k1 as FileKind, he as IFileService, as as IQuickInputService, b0 as ILabelService, d7 as IWorkspaceContextService, al as INotificationService, a4 as IModelService, bb as ILanguageService, iv as IRemoteAgentService, iu as IPathService, I as IContextKeyService, cN as IAccessibilityService, aX as dispose, pK as isAbsolute, qL as normalize, iE as isSavedWorkspace, ir as isTemporaryWorkspace, ul as getFileNamesMessage, m8 as EditorOpenSource, is as WORKSPACE_EXTENSION, bE as coalesce, hm as distinct, um as trim, iL as IHostService, rh as IHistoryService, ay as IConfigurationService, c2 as IOpenerService, iI as IWorkspacesService, ak as ICommandService, u as ICodeEditorService, un as PLAINTEXT_EXTENSION, hh as SyncDescriptor, r7 as getServiceOverride$1, iS as unsupported } from "./theme-defaults-1df7f429.js";
import { i as isWorkspaceToOpen, b as isFileToOpen } from "./window-67f3d505.js";
import "./index-3bddf13b.js";
const dialog = "";
var __awaiter = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
class Dialog extends Disposable {
  constructor(container, message, buttons, options) {
    super();
    this.container = container;
    this.message = message;
    this.options = options;
    this.modalElement = this.container.appendChild($(`.monaco-dialog-modal-block.dimmed`));
    this.shadowElement = this.modalElement.appendChild($(".dialog-shadow"));
    this.element = this.shadowElement.appendChild($(".monaco-dialog-box"));
    this.element.setAttribute("role", "dialog");
    this.element.tabIndex = -1;
    hide(this.element);
    this.buttonStyles = options.buttonStyles;
    if (Array.isArray(buttons) && buttons.length > 0) {
      this.buttons = buttons;
    } else if (!this.options.disableDefaultAction) {
      this.buttons = [localize("ok", "OK")];
    } else {
      this.buttons = [];
    }
    const buttonsRowElement = this.element.appendChild($(".dialog-buttons-row"));
    this.buttonsContainer = buttonsRowElement.appendChild($(".dialog-buttons"));
    const messageRowElement = this.element.appendChild($(".dialog-message-row"));
    this.iconElement = messageRowElement.appendChild($("#monaco-dialog-icon.dialog-icon"));
    this.iconElement.setAttribute("aria-label", this.getIconAriaLabel());
    this.messageContainer = messageRowElement.appendChild($(".dialog-message-container"));
    if (this.options.detail || this.options.renderBody) {
      const messageElement = this.messageContainer.appendChild($(".dialog-message"));
      const messageTextElement = messageElement.appendChild($("#monaco-dialog-message-text.dialog-message-text"));
      messageTextElement.innerText = this.message;
    }
    this.messageDetailElement = this.messageContainer.appendChild($("#monaco-dialog-message-detail.dialog-message-detail"));
    if (this.options.detail || !this.options.renderBody) {
      this.messageDetailElement.innerText = this.options.detail ? this.options.detail : message;
    } else {
      this.messageDetailElement.style.display = "none";
    }
    if (this.options.renderBody) {
      const customBody = this.messageContainer.appendChild($("#monaco-dialog-message-body.dialog-message-body"));
      this.options.renderBody(customBody);
      for (const el of this.messageContainer.querySelectorAll("a")) {
        el.tabIndex = 0;
      }
    }
    if (this.options.inputs) {
      this.inputs = this.options.inputs.map((input) => {
        var _a2;
        const inputRowElement = this.messageContainer.appendChild($(".dialog-message-input"));
        const inputBox = this._register(new InputBox(inputRowElement, void 0, {
          placeholder: input.placeholder,
          type: (_a2 = input.type) !== null && _a2 !== void 0 ? _a2 : "text",
          inputBoxStyles: options.inputBoxStyles
        }));
        if (input.value) {
          inputBox.value = input.value;
        }
        return inputBox;
      });
    } else {
      this.inputs = [];
    }
    if (this.options.checkboxLabel) {
      const checkboxRowElement = this.messageContainer.appendChild($(".dialog-checkbox-row"));
      const checkbox = this.checkbox = this._register(new Checkbox(this.options.checkboxLabel, !!this.options.checkboxChecked, options.checkboxStyles));
      checkboxRowElement.appendChild(checkbox.domNode);
      const checkboxMessageElement = checkboxRowElement.appendChild($(".dialog-checkbox-message"));
      checkboxMessageElement.innerText = this.options.checkboxLabel;
      this._register(addDisposableListener(checkboxMessageElement, EventType.CLICK, () => checkbox.checked = !checkbox.checked));
    }
    const toolbarRowElement = this.element.appendChild($(".dialog-toolbar-row"));
    this.toolbarContainer = toolbarRowElement.appendChild($(".dialog-toolbar"));
    this.applyStyles();
  }
  getIconAriaLabel() {
    let typeLabel = localize("dialogInfoMessage", "Info");
    switch (this.options.type) {
      case "error":
        typeLabel = localize("dialogErrorMessage", "Error");
        break;
      case "warning":
        typeLabel = localize("dialogWarningMessage", "Warning");
        break;
      case "pending":
        typeLabel = localize("dialogPendingMessage", "In Progress");
        break;
    }
    return typeLabel;
  }
  updateMessage(message) {
    this.messageDetailElement.innerText = message;
  }
  show() {
    return __awaiter(this, void 0, void 0, function* () {
      this.focusToReturn = document.activeElement;
      return new Promise((resolve) => {
        clearNode(this.buttonsContainer);
        const buttonBar = this.buttonBar = this._register(new ButtonBar(this.buttonsContainer));
        const buttonMap = this.rearrangeButtons(this.buttons, this.options.cancelId);
        buttonMap.forEach((entry, index) => {
          const primary = buttonMap[index].index === 0;
          const button = this.options.buttonDetails ? this._register(buttonBar.addButtonWithDescription(Object.assign({ title: true, secondary: !primary }, this.buttonStyles))) : this._register(buttonBar.addButton(Object.assign({ title: true, secondary: !primary }, this.buttonStyles)));
          button.label = mnemonicButtonLabel(buttonMap[index].label, true);
          if (button instanceof ButtonWithDescription) {
            button.description = this.options.buttonDetails[buttonMap[index].index];
          }
          this._register(button.onDidClick((e) => {
            if (e) {
              EventHelper.stop(e);
            }
            resolve({
              button: buttonMap[index].index,
              checkboxChecked: this.checkbox ? this.checkbox.checked : void 0,
              values: this.inputs.length > 0 ? this.inputs.map((input) => input.value) : void 0
            });
          }));
        });
        this._register(addDisposableListener(window, "keydown", (e) => {
          var _a2, _b;
          const evt = new StandardKeyboardEvent(e);
          if (evt.equals(
            512
            /* KeyMod.Alt */
          )) {
            evt.preventDefault();
          }
          if (evt.equals(
            3
            /* KeyCode.Enter */
          )) {
            if (this.inputs.some((input) => input.hasFocus())) {
              EventHelper.stop(e);
              resolve({
                button: (_b = (_a2 = buttonMap.find((button) => button.index !== this.options.cancelId)) === null || _a2 === void 0 ? void 0 : _a2.index) !== null && _b !== void 0 ? _b : 0,
                checkboxChecked: this.checkbox ? this.checkbox.checked : void 0,
                values: this.inputs.length > 0 ? this.inputs.map((input) => input.value) : void 0
              });
            }
            return;
          }
          if (evt.equals(
            10
            /* KeyCode.Space */
          )) {
            return;
          }
          let eventHandled = false;
          if (evt.equals(
            2
            /* KeyCode.Tab */
          ) || evt.equals(
            17
            /* KeyCode.RightArrow */
          ) || evt.equals(
            1024 | 2
            /* KeyCode.Tab */
          ) || evt.equals(
            15
            /* KeyCode.LeftArrow */
          )) {
            const focusableElements = [];
            let focusedIndex = -1;
            if (this.messageContainer) {
              const links = this.messageContainer.querySelectorAll("a");
              for (const link of links) {
                focusableElements.push(link);
                if (link === document.activeElement) {
                  focusedIndex = focusableElements.length - 1;
                }
              }
            }
            for (const input of this.inputs) {
              focusableElements.push(input);
              if (input.hasFocus()) {
                focusedIndex = focusableElements.length - 1;
              }
            }
            if (this.checkbox) {
              focusableElements.push(this.checkbox);
              if (this.checkbox.hasFocus()) {
                focusedIndex = focusableElements.length - 1;
              }
            }
            if (this.buttonBar) {
              for (const button of this.buttonBar.buttons) {
                focusableElements.push(button);
                if (button.hasFocus()) {
                  focusedIndex = focusableElements.length - 1;
                }
              }
            }
            if (evt.equals(
              2
              /* KeyCode.Tab */
            ) || evt.equals(
              17
              /* KeyCode.RightArrow */
            )) {
              if (focusedIndex === -1) {
                focusedIndex = 0;
              }
              const newFocusedIndex = (focusedIndex + 1) % focusableElements.length;
              focusableElements[newFocusedIndex].focus();
            } else {
              if (focusedIndex === -1) {
                focusedIndex = focusableElements.length;
              }
              let newFocusedIndex = focusedIndex - 1;
              if (newFocusedIndex === -1) {
                newFocusedIndex = focusableElements.length - 1;
              }
              focusableElements[newFocusedIndex].focus();
            }
            eventHandled = true;
          }
          if (eventHandled) {
            EventHelper.stop(e, true);
          } else if (this.options.keyEventProcessor) {
            this.options.keyEventProcessor(evt);
          }
        }, true));
        this._register(addDisposableListener(window, "keyup", (e) => {
          EventHelper.stop(e, true);
          const evt = new StandardKeyboardEvent(e);
          if (!this.options.disableCloseAction && evt.equals(
            9
            /* KeyCode.Escape */
          )) {
            resolve({
              button: this.options.cancelId || 0,
              checkboxChecked: this.checkbox ? this.checkbox.checked : void 0
            });
          }
        }, true));
        this._register(addDisposableListener(this.element, "focusout", (e) => {
          if (!!e.relatedTarget && !!this.element) {
            if (!isAncestor(e.relatedTarget, this.element)) {
              this.focusToReturn = e.relatedTarget;
              if (e.target) {
                e.target.focus();
                EventHelper.stop(e, true);
              }
            }
          }
        }, false));
        const spinModifierClassName = "codicon-modifier-spin";
        this.iconElement.classList.remove(...ThemeIcon.asClassNameArray(Codicon.dialogError), ...ThemeIcon.asClassNameArray(Codicon.dialogWarning), ...ThemeIcon.asClassNameArray(Codicon.dialogInfo), ...ThemeIcon.asClassNameArray(Codicon.loading), spinModifierClassName);
        if (this.options.icon) {
          this.iconElement.classList.add(...ThemeIcon.asClassNameArray(this.options.icon));
        } else {
          switch (this.options.type) {
            case "error":
              this.iconElement.classList.add(...ThemeIcon.asClassNameArray(Codicon.dialogError));
              break;
            case "warning":
              this.iconElement.classList.add(...ThemeIcon.asClassNameArray(Codicon.dialogWarning));
              break;
            case "pending":
              this.iconElement.classList.add(...ThemeIcon.asClassNameArray(Codicon.loading), spinModifierClassName);
              break;
            case "none":
              this.iconElement.classList.add("no-codicon");
              break;
            case "info":
            case "question":
            default:
              this.iconElement.classList.add(...ThemeIcon.asClassNameArray(Codicon.dialogInfo));
              break;
          }
        }
        if (!this.options.disableCloseAction) {
          const actionBar = this._register(new ActionBar(this.toolbarContainer, {}));
          const action = this._register(new Action("dialog.close", localize("dialogClose", "Close Dialog"), ThemeIcon.asClassName(Codicon.dialogClose), true, () => __awaiter(this, void 0, void 0, function* () {
            resolve({
              button: this.options.cancelId || 0,
              checkboxChecked: this.checkbox ? this.checkbox.checked : void 0
            });
          })));
          actionBar.push(action, { icon: true, label: false });
        }
        this.applyStyles();
        this.element.setAttribute("aria-modal", "true");
        this.element.setAttribute("aria-labelledby", "monaco-dialog-icon monaco-dialog-message-text");
        this.element.setAttribute("aria-describedby", "monaco-dialog-icon monaco-dialog-message-text monaco-dialog-message-detail monaco-dialog-message-body");
        show(this.element);
        if (this.inputs.length > 0) {
          this.inputs[0].focus();
          this.inputs[0].select();
        } else {
          buttonMap.forEach((value, index) => {
            if (value.index === 0) {
              buttonBar.buttons[index].focus();
            }
          });
        }
      });
    });
  }
  applyStyles() {
    const style = this.options.dialogStyles;
    const fgColor = style.dialogForeground;
    const bgColor = style.dialogBackground;
    const shadowColor = style.dialogShadow ? `0 0px 8px ${style.dialogShadow}` : "";
    const border = style.dialogBorder ? `1px solid ${style.dialogBorder}` : "";
    const linkFgColor = style.textLinkForeground;
    this.shadowElement.style.boxShadow = shadowColor;
    this.element.style.color = fgColor !== null && fgColor !== void 0 ? fgColor : "";
    this.element.style.backgroundColor = bgColor !== null && bgColor !== void 0 ? bgColor : "";
    this.element.style.border = border;
    if (linkFgColor) {
      for (const el of this.messageContainer.getElementsByTagName("a")) {
        el.style.color = linkFgColor;
      }
    }
    let color;
    switch (this.options.type) {
      case "error":
        color = style.errorIconForeground;
        break;
      case "warning":
        color = style.warningIconForeground;
        break;
      default:
        color = style.infoIconForeground;
        break;
    }
    if (color) {
      this.iconElement.style.color = color;
    }
  }
  dispose() {
    super.dispose();
    if (this.modalElement) {
      this.modalElement.remove();
      this.modalElement = void 0;
    }
    if (this.focusToReturn && isAncestor(this.focusToReturn, document.body)) {
      this.focusToReturn.focus();
      this.focusToReturn = void 0;
    }
  }
  rearrangeButtons(buttons, cancelId) {
    const buttonMap = buttons.map((label, index) => ({ label, index }));
    if (buttons.length < 2) {
      return buttonMap;
    }
    if (isMacintosh || isLinux) {
      if (typeof cancelId === "number" && buttonMap[cancelId]) {
        const cancelButton = buttonMap.splice(cancelId, 1)[0];
        buttonMap.splice(1, 0, cancelButton);
      }
      buttonMap.reverse();
    } else if (isWindows) {
      if (typeof cancelId === "number" && buttonMap[cancelId]) {
        const cancelButton = buttonMap.splice(cancelId, 1)[0];
        buttonMap.push(cancelButton);
      }
    }
    return buttonMap;
  }
}
let BrowserDialogHandler = (_a = class extends AbstractDialogHandler {
  constructor(logService, layoutService, keybindingService, instantiationService, productService, clipboardService) {
    super();
    this.logService = logService;
    this.layoutService = layoutService;
    this.keybindingService = keybindingService;
    this.instantiationService = instantiationService;
    this.productService = productService;
    this.clipboardService = clipboardService;
    this.markdownRenderer = this.instantiationService.createInstance(MarkdownRenderer, {});
  }
  async prompt(prompt) {
    this.logService.trace("DialogService#prompt", prompt.message);
    const buttons = this.getPromptButtons(prompt);
    const { button, checkboxChecked } = await this.doShow(prompt.type, prompt.message, buttons, prompt.detail, prompt.cancelButton ? buttons.length - 1 : -1, prompt.checkbox, void 0, typeof (prompt == null ? void 0 : prompt.custom) === "object" ? prompt.custom : void 0);
    return this.getPromptResult(prompt, button, checkboxChecked);
  }
  async confirm(confirmation) {
    this.logService.trace("DialogService#confirm", confirmation.message);
    const buttons = this.getConfirmationButtons(confirmation);
    const { button, checkboxChecked } = await this.doShow(confirmation.type ?? "question", confirmation.message, buttons, confirmation.detail, buttons.length - 1, confirmation.checkbox, void 0, typeof (confirmation == null ? void 0 : confirmation.custom) === "object" ? confirmation.custom : void 0);
    return { confirmed: button === 0, checkboxChecked };
  }
  async input(input) {
    this.logService.trace("DialogService#input", input.message);
    const buttons = this.getInputButtons(input);
    const { button, checkboxChecked, values } = await this.doShow(input.type ?? "question", input.message, buttons, input.detail, buttons.length - 1, input == null ? void 0 : input.checkbox, input.inputs, typeof input.custom === "object" ? input.custom : void 0);
    return { confirmed: button === 0, checkboxChecked, values };
  }
  async about() {
    const detailString = (useAgo) => {
      return localize(
        "aboutDetail",
        "Version: {0}\nCommit: {1}\nDate: {2}\nBrowser: {3}",
        this.productService.version || "Unknown",
        this.productService.commit || "Unknown",
        this.productService.date ? `${this.productService.date}${useAgo ? " (" + fromNow(new Date(this.productService.date), true) + ")" : ""}` : "Unknown",
        navigator.userAgent
      );
    };
    const detail = detailString(true);
    const detailToCopy = detailString(false);
    const { button } = await this.doShow(Severity.Info, this.productService.nameLong, [
      localize({ key: "copy", comment: ["&& denotes a mnemonic"] }, "&&Copy"),
      localize("ok", "OK")
    ], detail, 1);
    if (button === 0) {
      this.clipboardService.writeText(detailToCopy);
    }
  }
  async doShow(type, message, buttons, detail, cancelId, checkbox, inputs, customOptions) {
    const dialogDisposables = new DisposableStore();
    const renderBody = customOptions ? (parent) => {
      var _a2;
      parent.classList.add(...customOptions.classes || []);
      (_a2 = customOptions.markdownDetails) == null ? void 0 : _a2.forEach((markdownDetail) => {
        const result2 = this.markdownRenderer.render(markdownDetail.markdown);
        parent.appendChild(result2.element);
        result2.element.classList.add(...markdownDetail.classes || []);
        dialogDisposables.add(result2);
      });
    } : void 0;
    const dialog2 = new Dialog(this.layoutService.container, message, buttons, {
      detail,
      cancelId,
      type: this.getDialogType(type),
      keyEventProcessor: (event) => {
        const resolved = this.keybindingService.softDispatch(event, this.layoutService.container);
        if (resolved.kind === 2 && resolved.commandId) {
          if (_a.ALLOWABLE_COMMANDS.indexOf(resolved.commandId) === -1) {
            EventHelper.stop(event, true);
          }
        }
      },
      renderBody,
      icon: customOptions == null ? void 0 : customOptions.icon,
      disableCloseAction: customOptions == null ? void 0 : customOptions.disableCloseAction,
      buttonDetails: customOptions == null ? void 0 : customOptions.buttonDetails,
      checkboxLabel: checkbox == null ? void 0 : checkbox.label,
      checkboxChecked: checkbox == null ? void 0 : checkbox.checked,
      inputs,
      buttonStyles: defaultButtonStyles,
      checkboxStyles: defaultCheckboxStyles,
      inputBoxStyles: defaultInputBoxStyles,
      dialogStyles: defaultDialogStyles
    });
    dialogDisposables.add(dialog2);
    const result = await dialog2.show();
    dialogDisposables.dispose();
    return result;
  }
}, _a.ALLOWABLE_COMMANDS = [
  "copy",
  "cut",
  "editor.action.selectAll",
  "editor.action.clipboardCopyAction",
  "editor.action.clipboardCutAction",
  "editor.action.clipboardPasteAction"
], _a);
BrowserDialogHandler = __decorate([
  __param(0, ILogService),
  __param(1, ILayoutService),
  __param(2, IKeybindingService),
  __param(3, IInstantiationService),
  __param(4, IProductService),
  __param(5, IClipboardService)
], BrowserDialogHandler);
let DialogHandlerContribution = class DialogHandlerContribution2 extends Disposable {
  constructor(dialogService, logService, layoutService, keybindingService, instantiationService, productService, clipboardService) {
    super();
    this.dialogService = dialogService;
    this.impl = new BrowserDialogHandler(
      logService,
      layoutService,
      keybindingService,
      instantiationService,
      productService,
      clipboardService
    );
    this.model = this.dialogService.model;
    this._register(this.model.onWillShowDialog(() => {
      if (!this.currentDialog) {
        this.processDialogs();
      }
    }));
    this.processDialogs();
  }
  async processDialogs() {
    while (this.model.dialogs.length) {
      this.currentDialog = this.model.dialogs[0];
      let result = void 0;
      if (this.currentDialog.args.confirmArgs) {
        const args = this.currentDialog.args.confirmArgs;
        result = await this.impl.confirm(args.confirmation);
      } else if (this.currentDialog.args.inputArgs) {
        const args = this.currentDialog.args.inputArgs;
        result = await this.impl.input(args.input);
      } else if (this.currentDialog.args.promptArgs) {
        const args = this.currentDialog.args.promptArgs;
        result = await this.impl.prompt(args.prompt);
      } else {
        await this.impl.about();
      }
      this.currentDialog.close(result);
      this.currentDialog = void 0;
    }
  }
};
DialogHandlerContribution = __decorate([
  __param(0, IDialogService),
  __param(1, ILogService),
  __param(2, ILayoutService),
  __param(3, IKeybindingService),
  __param(4, IInstantiationService),
  __param(5, IProductService),
  __param(6, IClipboardService)
], DialogHandlerContribution);
const workbenchRegistry = Registry.as(Extensions.Workbench);
workbenchRegistry.registerWorkbenchContribution(DialogHandlerContribution, 1);
class DialogsModel extends Disposable {
  constructor() {
    super(...arguments);
    this.dialogs = [];
    this._onWillShowDialog = this._register(new Emitter());
    this.onWillShowDialog = this._onWillShowDialog.event;
    this._onDidShowDialog = this._register(new Emitter());
    this.onDidShowDialog = this._onDidShowDialog.event;
  }
  show(dialog2) {
    const promise = new DeferredPromise();
    const item = {
      args: dialog2,
      close: (result) => {
        this.dialogs.splice(0, 1);
        promise.complete(result);
        this._onDidShowDialog.fire();
      }
    };
    this.dialogs.push(item);
    this._onWillShowDialog.fire();
    return {
      item,
      result: promise.p
    };
  }
}
let DialogService = class DialogService2 extends Disposable {
  constructor(environmentService, logService) {
    super();
    this.environmentService = environmentService;
    this.logService = logService;
    this.model = this._register(new DialogsModel());
    this.onWillShowDialog = this.model.onWillShowDialog;
    this.onDidShowDialog = this.model.onDidShowDialog;
  }
  skipDialogs() {
    if (this.environmentService.isExtensionDevelopment && this.environmentService.extensionTestsLocationURI) {
      return true;
    }
    return !!this.environmentService.enableSmokeTestDriver;
  }
  async confirm(confirmation) {
    if (this.skipDialogs()) {
      this.logService.trace("DialogService: refused to show confirmation dialog in tests.");
      return { confirmed: true };
    }
    const handle = this.model.show({ confirmArgs: { confirmation } });
    return await handle.result;
  }
  async prompt(prompt) {
    if (this.skipDialogs()) {
      throw new Error(`DialogService: refused to show dialog in tests. Contents: ${prompt.message}`);
    }
    const handle = this.model.show({ promptArgs: { prompt } });
    return await handle.result;
  }
  async input(input) {
    if (this.skipDialogs()) {
      throw new Error("DialogService: refused to show input dialog in tests.");
    }
    const handle = this.model.show({ inputArgs: { input } });
    return await handle.result;
  }
  async info(message, detail) {
    await this.prompt({ type: Severity.Info, message, detail });
  }
  async warn(message, detail) {
    await this.prompt({ type: Severity.Warning, message, detail });
  }
  async error(message, detail) {
    await this.prompt({ type: Severity.Error, message, detail });
  }
  async about() {
    if (this.skipDialogs()) {
      throw new Error("DialogService: refused to show about dialog in tests.");
    }
    const handle = this.model.show({});
    await handle.result;
  }
};
DialogService = __decorate([
  __param(0, IWorkbenchEnvironmentService),
  __param(1, ILogService)
], DialogService);
var OpenLocalFileCommand;
(function(OpenLocalFileCommand2) {
  OpenLocalFileCommand2.ID = "workbench.action.files.openLocalFile";
  OpenLocalFileCommand2.LABEL = localize("openLocalFile", "Open Local File...");
  function handler() {
    return (accessor) => {
      const dialogService = accessor.get(IFileDialogService);
      return dialogService.pickFileAndOpen({ forceNewWindow: false, availableFileSystems: [Schemas.file] });
    };
  }
  OpenLocalFileCommand2.handler = handler;
})(OpenLocalFileCommand || (OpenLocalFileCommand = {}));
var SaveLocalFileCommand;
(function(SaveLocalFileCommand2) {
  SaveLocalFileCommand2.ID = "workbench.action.files.saveLocalFile";
  SaveLocalFileCommand2.LABEL = localize("saveLocalFile", "Save Local File...");
  function handler() {
    return (accessor) => {
      const editorService = accessor.get(IEditorService);
      const activeEditorPane = editorService.activeEditorPane;
      if (activeEditorPane) {
        return editorService.save({ groupId: activeEditorPane.group.id, editor: activeEditorPane.input }, { saveAs: true, availableFileSystems: [Schemas.file], reason: 1 });
      }
      return Promise.resolve(void 0);
    };
  }
  SaveLocalFileCommand2.handler = handler;
})(SaveLocalFileCommand || (SaveLocalFileCommand = {}));
var OpenLocalFolderCommand;
(function(OpenLocalFolderCommand2) {
  OpenLocalFolderCommand2.ID = "workbench.action.files.openLocalFolder";
  OpenLocalFolderCommand2.LABEL = localize("openLocalFolder", "Open Local Folder...");
  function handler() {
    return (accessor) => {
      const dialogService = accessor.get(IFileDialogService);
      return dialogService.pickFolderAndOpen({ forceNewWindow: false, availableFileSystems: [Schemas.file] });
    };
  }
  OpenLocalFolderCommand2.handler = handler;
})(OpenLocalFolderCommand || (OpenLocalFolderCommand = {}));
var OpenLocalFileFolderCommand;
(function(OpenLocalFileFolderCommand2) {
  OpenLocalFileFolderCommand2.ID = "workbench.action.files.openLocalFileFolder";
  OpenLocalFileFolderCommand2.LABEL = localize("openLocalFileFolder", "Open Local...");
  function handler() {
    return (accessor) => {
      const dialogService = accessor.get(IFileDialogService);
      return dialogService.pickFileFolderAndOpen({ forceNewWindow: false, availableFileSystems: [Schemas.file] });
    };
  }
  OpenLocalFileFolderCommand2.handler = handler;
})(OpenLocalFileFolderCommand || (OpenLocalFileFolderCommand = {}));
var UpdateResult;
(function(UpdateResult2) {
  UpdateResult2[UpdateResult2["Updated"] = 0] = "Updated";
  UpdateResult2[UpdateResult2["UpdatedWithTrailing"] = 1] = "UpdatedWithTrailing";
  UpdateResult2[UpdateResult2["Updating"] = 2] = "Updating";
  UpdateResult2[UpdateResult2["NotUpdated"] = 3] = "NotUpdated";
  UpdateResult2[UpdateResult2["InvalidPath"] = 4] = "InvalidPath";
})(UpdateResult || (UpdateResult = {}));
const RemoteFileDialogContext = new RawContextKey("remoteFileDialogVisible", false);
let SimpleFileDialog = class SimpleFileDialog2 {
  constructor(fileService, quickInputService, labelService, workspaceContextService, notificationService, fileDialogService, modelService, languageService, environmentService, remoteAgentService, pathService, keybindingService, contextKeyService, accessibilityService) {
    this.fileService = fileService;
    this.quickInputService = quickInputService;
    this.labelService = labelService;
    this.workspaceContextService = workspaceContextService;
    this.notificationService = notificationService;
    this.fileDialogService = fileDialogService;
    this.modelService = modelService;
    this.languageService = languageService;
    this.environmentService = environmentService;
    this.remoteAgentService = remoteAgentService;
    this.pathService = pathService;
    this.keybindingService = keybindingService;
    this.accessibilityService = accessibilityService;
    this.hidden = false;
    this.allowFileSelection = true;
    this.allowFolderSelection = false;
    this.requiresTrailing = false;
    this.userEnteredPathSegment = "";
    this.autoCompletePathSegment = "";
    this.isWindows = false;
    this.separator = "/";
    this.onBusyChangeEmitter = new Emitter();
    this.disposables = [
      this.onBusyChangeEmitter
    ];
    this.remoteAuthority = this.environmentService.remoteAuthority;
    this.contextKey = RemoteFileDialogContext.bindTo(contextKeyService);
    this.scheme = this.pathService.defaultUriScheme;
  }
  set busy(busy) {
    if (this.filePickBox.busy !== busy) {
      this.filePickBox.busy = busy;
      this.onBusyChangeEmitter.fire(busy);
    }
  }
  get busy() {
    return this.filePickBox.busy;
  }
  async showOpenDialog(options = {}) {
    this.scheme = this.getScheme(options.availableFileSystems, options.defaultUri);
    this.userHome = await this.getUserHome();
    this.trueHome = await this.getUserHome(true);
    const newOptions = this.getOptions(options);
    if (!newOptions) {
      return Promise.resolve(void 0);
    }
    this.options = newOptions;
    return this.pickResource();
  }
  async showSaveDialog(options) {
    this.scheme = this.getScheme(options.availableFileSystems, options.defaultUri);
    this.userHome = await this.getUserHome();
    this.trueHome = await this.getUserHome(true);
    this.requiresTrailing = true;
    const newOptions = this.getOptions(options, true);
    if (!newOptions) {
      return Promise.resolve(void 0);
    }
    this.options = newOptions;
    this.options.canSelectFolders = true;
    this.options.canSelectFiles = true;
    return new Promise((resolve) => {
      this.pickResource(true).then((folderUri) => {
        resolve(folderUri);
      });
    });
  }
  getOptions(options, isSave = false) {
    let defaultUri = void 0;
    let filename = void 0;
    if (options.defaultUri) {
      defaultUri = this.scheme === options.defaultUri.scheme ? options.defaultUri : void 0;
      filename = isSave ? basename(options.defaultUri) : void 0;
    }
    if (!defaultUri) {
      defaultUri = this.userHome;
      if (filename) {
        defaultUri = joinPath(defaultUri, filename);
      }
    }
    if (this.scheme !== Schemas.file && !this.fileService.hasProvider(defaultUri)) {
      this.notificationService.info(localize(
        "remoteFileDialog.notConnectedToRemote",
        "File system provider for {0} is not available.",
        defaultUri.toString()
      ));
      return void 0;
    }
    const newOptions = deepClone(options);
    newOptions.defaultUri = defaultUri;
    return newOptions;
  }
  remoteUriFrom(path, hintUri) {
    if (!path.startsWith("\\\\")) {
      path = path.replace(/\\/g, "/");
    }
    const uri = this.scheme === Schemas.file ? URI.file(path) : URI.from(
      { scheme: this.scheme, path, query: hintUri == null ? void 0 : hintUri.query, fragment: hintUri == null ? void 0 : hintUri.fragment }
    );
    const authority = uri.scheme === Schemas.file ? void 0 : this.remoteAuthority ?? (hintUri == null ? void 0 : hintUri.authority);
    return toLocalResource(
      uri,
      authority,
      authority ? this.pathService.defaultUriScheme : uri.scheme
    );
  }
  getScheme(available, defaultUri) {
    if (available && available.length > 0) {
      if (defaultUri && available.indexOf(defaultUri.scheme) >= 0) {
        return defaultUri.scheme;
      }
      return available[0];
    } else if (defaultUri) {
      return defaultUri.scheme;
    }
    return Schemas.file;
  }
  async getRemoteAgentEnvironment() {
    if (this.remoteAgentEnvironment === void 0) {
      this.remoteAgentEnvironment = await this.remoteAgentService.getEnvironment();
    }
    return this.remoteAgentEnvironment;
  }
  getUserHome(trueHome = false) {
    return trueHome ? this.pathService.userHome({ preferLocal: this.scheme === Schemas.file }) : this.fileDialogService.preferredHome(this.scheme);
  }
  async pickResource(isSave = false) {
    this.allowFolderSelection = !!this.options.canSelectFolders;
    this.allowFileSelection = !!this.options.canSelectFiles;
    this.separator = this.labelService.getSeparator(this.scheme, this.remoteAuthority);
    this.hidden = false;
    this.isWindows = await this.checkIsWindowsOS();
    let homedir = this.options.defaultUri ? this.options.defaultUri : this.workspaceContextService.getWorkspace().folders[0].uri;
    let stat;
    const ext = extname(homedir);
    if (this.options.defaultUri) {
      try {
        stat = await this.fileService.stat(this.options.defaultUri);
      } catch (e) {
      }
      if (!stat || !stat.isDirectory) {
        homedir = dirname(this.options.defaultUri);
        this.trailing = basename(this.options.defaultUri);
      }
    }
    return new Promise((resolve) => {
      this.filePickBox = this.quickInputService.createQuickPick();
      this.busy = true;
      this.filePickBox.matchOnLabel = false;
      this.filePickBox.sortByLabel = false;
      this.filePickBox.autoFocusOnList = false;
      this.filePickBox.ignoreFocusOut = true;
      this.filePickBox.ok = true;
      if (this.scheme !== Schemas.file && this.options && this.options.availableFileSystems && this.options.availableFileSystems.length > 1 && this.options.availableFileSystems.indexOf(Schemas.file) > -1) {
        this.filePickBox.customButton = true;
        this.filePickBox.customLabel = localize("remoteFileDialog.local", "Show Local");
        let action;
        if (isSave) {
          action = SaveLocalFileCommand;
        } else {
          action = this.allowFileSelection ? this.allowFolderSelection ? OpenLocalFileFolderCommand : OpenLocalFileCommand : OpenLocalFolderCommand;
        }
        const keybinding = this.keybindingService.lookupKeybinding(action.ID);
        if (keybinding) {
          const label = keybinding.getLabel();
          if (label) {
            this.filePickBox.customHover = format("{0} ({1})", action.LABEL, label);
          }
        }
      }
      let isResolving = 0;
      let isAcceptHandled = false;
      this.currentFolder = dirname(homedir);
      this.userEnteredPathSegment = "";
      this.autoCompletePathSegment = "";
      this.filePickBox.title = this.options.title;
      this.filePickBox.value = this.pathFromUri(this.currentFolder, true);
      this.filePickBox.valueSelection = [this.filePickBox.value.length, this.filePickBox.value.length];
      this.filePickBox.items = [];
      function doResolve(dialog2, uri) {
        if (uri) {
          uri = addTrailingPathSeparator(uri, dialog2.separator);
          uri = removeTrailingPathSeparator(uri);
        }
        resolve(uri);
        dialog2.contextKey.set(false);
        dialog2.filePickBox.dispose();
        dispose(dialog2.disposables);
      }
      this.filePickBox.onDidCustom(() => {
        if (isAcceptHandled || this.busy) {
          return;
        }
        isAcceptHandled = true;
        isResolving++;
        if (this.options.availableFileSystems && this.options.availableFileSystems.length > 1) {
          this.options.availableFileSystems = this.options.availableFileSystems.slice(1);
        }
        this.filePickBox.hide();
        if (isSave) {
          return this.fileDialogService.showSaveDialog(this.options).then((result) => {
            doResolve(this, result);
          });
        } else {
          return this.fileDialogService.showOpenDialog(this.options).then((result) => {
            doResolve(this, result ? result[0] : void 0);
          });
        }
      });
      function handleAccept(dialog2) {
        if (dialog2.busy) {
          dialog2.onBusyChangeEmitter.event((busy) => {
            if (!busy) {
              handleAccept(dialog2);
            }
          });
          return;
        } else if (isAcceptHandled) {
          return;
        }
        isAcceptHandled = true;
        isResolving++;
        dialog2.onDidAccept().then((resolveValue) => {
          if (resolveValue) {
            dialog2.filePickBox.hide();
            doResolve(dialog2, resolveValue);
          } else if (dialog2.hidden) {
            doResolve(dialog2, void 0);
          } else {
            isResolving--;
            isAcceptHandled = false;
          }
        });
      }
      this.filePickBox.onDidAccept((_) => {
        handleAccept(this);
      });
      this.filePickBox.onDidChangeActive((i) => {
        isAcceptHandled = false;
        if (i.length === 1 && this.isSelectionChangeFromUser()) {
          this.filePickBox.validationMessage = void 0;
          const userPath = this.constructFullUserPath();
          if (!equalsIgnoreCase(this.filePickBox.value.substring(0, userPath.length), userPath)) {
            this.filePickBox.valueSelection = [0, this.filePickBox.value.length];
            this.insertText(userPath, userPath);
          }
          this.setAutoComplete(userPath, this.userEnteredPathSegment, i[0], true);
        }
      });
      this.filePickBox.onDidChangeValue(async (value) => {
        return this.handleValueChange(value);
      });
      this.filePickBox.onDidHide(() => {
        this.hidden = true;
        if (isResolving === 0) {
          doResolve(this, void 0);
        }
      });
      this.filePickBox.show();
      this.contextKey.set(true);
      this.updateItems(homedir, true, this.trailing).then(() => {
        if (this.trailing) {
          this.filePickBox.valueSelection = [this.filePickBox.value.length - this.trailing.length, this.filePickBox.value.length - ext.length];
        } else {
          this.filePickBox.valueSelection = [this.filePickBox.value.length, this.filePickBox.value.length];
        }
        this.busy = false;
      });
    });
  }
  async handleValueChange(value) {
    try {
      if (this.isValueChangeFromUser()) {
        if (!equalsIgnoreCase(value, this.constructFullUserPath()) && !this.isBadSubpath(value)) {
          this.filePickBox.validationMessage = void 0;
          const filePickBoxUri = this.filePickBoxValue();
          let updated = UpdateResult.NotUpdated;
          if (!extUriIgnorePathCase.isEqual(this.currentFolder, filePickBoxUri)) {
            updated = await this.tryUpdateItems(value, filePickBoxUri);
          }
          if (updated === UpdateResult.NotUpdated || updated === UpdateResult.UpdatedWithTrailing) {
            this.setActiveItems(value);
          }
        } else {
          this.filePickBox.activeItems = [];
          this.userEnteredPathSegment = "";
        }
      }
    } catch {
    }
  }
  isBadSubpath(value) {
    return this.badPath && value.length > this.badPath.length && equalsIgnoreCase(value.substring(0, this.badPath.length), this.badPath);
  }
  isValueChangeFromUser() {
    if (equalsIgnoreCase(this.filePickBox.value, this.pathAppend(this.currentFolder, this.userEnteredPathSegment + this.autoCompletePathSegment))) {
      return false;
    }
    return true;
  }
  isSelectionChangeFromUser() {
    if (this.activeItem === (this.filePickBox.activeItems ? this.filePickBox.activeItems[0] : void 0)) {
      return false;
    }
    return true;
  }
  constructFullUserPath() {
    const currentFolderPath = this.pathFromUri(this.currentFolder);
    if (equalsIgnoreCase(this.filePickBox.value.substr(0, this.userEnteredPathSegment.length), this.userEnteredPathSegment)) {
      if (equalsIgnoreCase(this.filePickBox.value.substr(0, currentFolderPath.length), currentFolderPath)) {
        return currentFolderPath;
      } else {
        return this.userEnteredPathSegment;
      }
    } else {
      return this.pathAppend(this.currentFolder, this.userEnteredPathSegment);
    }
  }
  filePickBoxValue() {
    const directUri = this.remoteUriFrom(this.filePickBox.value.trimRight(), this.currentFolder);
    const currentPath = this.pathFromUri(this.currentFolder);
    if (equalsIgnoreCase(this.filePickBox.value, currentPath)) {
      return this.currentFolder;
    }
    const currentDisplayUri = this.remoteUriFrom(currentPath, this.currentFolder);
    const relativePath$1 = relativePath(currentDisplayUri, directUri);
    const isSameRoot = this.filePickBox.value.length > 1 && currentPath.length > 1 ? equalsIgnoreCase(this.filePickBox.value.substr(0, 2), currentPath.substr(0, 2)) : false;
    if (relativePath$1 && isSameRoot) {
      let path = joinPath(this.currentFolder, relativePath$1);
      const directBasename = basename(directUri);
      if (directBasename === "." || directBasename === "..") {
        path = this.remoteUriFrom(this.pathAppend(path, directBasename), this.currentFolder);
      }
      return hasTrailingPathSeparator(directUri) ? addTrailingPathSeparator(path) : path;
    } else {
      return directUri;
    }
  }
  async onDidAccept() {
    this.busy = true;
    if (this.filePickBox.activeItems.length === 1) {
      const item = this.filePickBox.selectedItems[0];
      if (item.isFolder) {
        if (this.trailing) {
          await this.updateItems(item.uri, true, this.trailing);
        } else {
          const newPath = this.pathFromUri(item.uri);
          if (startsWithIgnoreCase(newPath, this.filePickBox.value) && equalsIgnoreCase(item.label, basename(item.uri))) {
            this.filePickBox.valueSelection = [this.pathFromUri(this.currentFolder).length, this.filePickBox.value.length];
            this.insertText(newPath, this.basenameWithTrailingSlash(item.uri));
          } else if (item.label === ".." && startsWithIgnoreCase(this.filePickBox.value, newPath)) {
            this.filePickBox.valueSelection = [newPath.length, this.filePickBox.value.length];
            this.insertText(newPath, "");
          } else {
            await this.updateItems(item.uri, true);
          }
        }
        this.filePickBox.busy = false;
        return;
      }
    } else {
      if (await this.tryUpdateItems(this.filePickBox.value, this.filePickBoxValue()) !== UpdateResult.NotUpdated) {
        this.filePickBox.busy = false;
        return;
      }
    }
    let resolveValue;
    if (this.filePickBox.activeItems.length === 0) {
      resolveValue = this.filePickBoxValue();
    } else if (this.filePickBox.activeItems.length === 1) {
      resolveValue = this.filePickBox.selectedItems[0].uri;
    }
    if (resolveValue) {
      resolveValue = this.addPostfix(resolveValue);
    }
    if (await this.validate(resolveValue)) {
      this.busy = false;
      return resolveValue;
    }
    this.busy = false;
    return void 0;
  }
  root(value) {
    let lastDir = value;
    let dir = dirname(value);
    while (!isEqual(lastDir, dir)) {
      lastDir = dir;
      dir = dirname(dir);
    }
    return dir;
  }
  tildaReplace(value) {
    const home = this.trueHome;
    if (value.length > 0 && value[0] === "~") {
      return joinPath(home, value.substring(1));
    }
    return this.remoteUriFrom(value);
  }
  tryAddTrailingSeparatorToDirectory(uri, stat) {
    if (stat.isDirectory) {
      if (!this.endsWithSlash(uri.path)) {
        return addTrailingPathSeparator(uri);
      }
    }
    return uri;
  }
  async tryUpdateItems(value, valueUri) {
    if (value.length > 0 && value[0] === "~") {
      const newDir = this.tildaReplace(value);
      return await this.updateItems(newDir, true) ? UpdateResult.UpdatedWithTrailing : UpdateResult.Updated;
    } else if (value === "\\") {
      valueUri = this.root(this.currentFolder);
      value = this.pathFromUri(valueUri);
      return await this.updateItems(valueUri, true) ? UpdateResult.UpdatedWithTrailing : UpdateResult.Updated;
    } else if (!extUriIgnorePathCase.isEqual(this.currentFolder, valueUri) && (this.endsWithSlash(value) || !extUriIgnorePathCase.isEqual(this.currentFolder, dirname(valueUri)) && extUriIgnorePathCase.isEqualOrParent(this.currentFolder, dirname(valueUri)))) {
      let stat;
      try {
        stat = await this.fileService.stat(valueUri);
      } catch (e) {
      }
      if (stat && stat.isDirectory && basename(valueUri) !== "." && this.endsWithSlash(value)) {
        valueUri = this.tryAddTrailingSeparatorToDirectory(valueUri, stat);
        return await this.updateItems(valueUri) ? UpdateResult.UpdatedWithTrailing : UpdateResult.Updated;
      } else if (this.endsWithSlash(value)) {
        this.filePickBox.validationMessage = localize("remoteFileDialog.badPath", "The path does not exist.");
        this.badPath = value;
        return UpdateResult.InvalidPath;
      } else {
        let inputUriDirname = dirname(valueUri);
        const currentFolderWithoutSep = removeTrailingPathSeparator(addTrailingPathSeparator(this.currentFolder));
        const inputUriDirnameWithoutSep = removeTrailingPathSeparator(addTrailingPathSeparator(inputUriDirname));
        if (!extUriIgnorePathCase.isEqual(currentFolderWithoutSep, inputUriDirnameWithoutSep) && (!/^[a-zA-Z]:$/.test(this.filePickBox.value) || !equalsIgnoreCase(this.pathFromUri(this.currentFolder).substring(0, this.filePickBox.value.length), this.filePickBox.value))) {
          let statWithoutTrailing;
          try {
            statWithoutTrailing = await this.fileService.stat(inputUriDirname);
          } catch (e) {
          }
          if (statWithoutTrailing && statWithoutTrailing.isDirectory) {
            this.badPath = void 0;
            inputUriDirname = this.tryAddTrailingSeparatorToDirectory(inputUriDirname, statWithoutTrailing);
            return await this.updateItems(inputUriDirname, false, basename(valueUri)) ? UpdateResult.UpdatedWithTrailing : UpdateResult.Updated;
          }
        }
      }
    }
    this.badPath = void 0;
    return UpdateResult.NotUpdated;
  }
  tryUpdateTrailing(value) {
    const ext = extname(value);
    if (this.trailing && ext) {
      this.trailing = basename(value);
    }
  }
  setActiveItems(value) {
    value = this.pathFromUri(this.tildaReplace(value));
    const asUri = this.remoteUriFrom(value);
    const inputBasename = basename(asUri);
    const userPath = this.constructFullUserPath();
    const pathsEqual = equalsIgnoreCase(userPath, value.substring(0, userPath.length)) || equalsIgnoreCase(value, userPath.substring(0, value.length));
    if (pathsEqual) {
      let hasMatch = false;
      for (let i = 0; i < this.filePickBox.items.length; i++) {
        const item = this.filePickBox.items[i];
        if (this.setAutoComplete(value, inputBasename, item)) {
          hasMatch = true;
          break;
        }
      }
      if (!hasMatch) {
        const userBasename = inputBasename.length >= 2 ? userPath.substring(userPath.length - inputBasename.length + 2) : "";
        this.userEnteredPathSegment = userBasename === inputBasename ? inputBasename : "";
        this.autoCompletePathSegment = "";
        this.filePickBox.activeItems = [];
        this.tryUpdateTrailing(asUri);
      }
    } else {
      this.userEnteredPathSegment = inputBasename;
      this.autoCompletePathSegment = "";
      this.filePickBox.activeItems = [];
      this.tryUpdateTrailing(asUri);
    }
  }
  setAutoComplete(startingValue, startingBasename, quickPickItem, force = false) {
    if (this.busy) {
      this.userEnteredPathSegment = startingBasename;
      this.autoCompletePathSegment = "";
      return false;
    }
    const itemBasename = quickPickItem.label;
    if (itemBasename === "..") {
      this.userEnteredPathSegment = "";
      this.autoCompletePathSegment = "";
      this.activeItem = quickPickItem;
      if (force) {
        document.execCommand("insertText", false, "");
      }
      return false;
    } else if (!force && itemBasename.length >= startingBasename.length && equalsIgnoreCase(itemBasename.substr(0, startingBasename.length), startingBasename)) {
      this.userEnteredPathSegment = startingBasename;
      this.activeItem = quickPickItem;
      this.autoCompletePathSegment = "";
      if (quickPickItem.isFolder || !this.trailing) {
        this.filePickBox.activeItems = [quickPickItem];
      } else {
        this.filePickBox.activeItems = [];
      }
      return true;
    } else if (force && !equalsIgnoreCase(this.basenameWithTrailingSlash(quickPickItem.uri), this.userEnteredPathSegment + this.autoCompletePathSegment)) {
      this.userEnteredPathSegment = "";
      if (!this.accessibilityService.isScreenReaderOptimized()) {
        this.autoCompletePathSegment = this.trimTrailingSlash(itemBasename);
      }
      this.activeItem = quickPickItem;
      if (!this.accessibilityService.isScreenReaderOptimized()) {
        this.filePickBox.valueSelection = [this.pathFromUri(this.currentFolder, true).length, this.filePickBox.value.length];
        this.insertText(this.pathAppend(this.currentFolder, this.autoCompletePathSegment), this.autoCompletePathSegment);
        this.filePickBox.valueSelection = [this.filePickBox.value.length - this.autoCompletePathSegment.length, this.filePickBox.value.length];
      }
      return true;
    } else {
      this.userEnteredPathSegment = startingBasename;
      this.autoCompletePathSegment = "";
      return false;
    }
  }
  insertText(wholeValue, insertText) {
    if (this.filePickBox.inputHasFocus()) {
      document.execCommand("insertText", false, insertText);
      if (this.filePickBox.value !== wholeValue) {
        this.filePickBox.value = wholeValue;
        this.handleValueChange(wholeValue);
      }
    } else {
      this.filePickBox.value = wholeValue;
      this.handleValueChange(wholeValue);
    }
  }
  addPostfix(uri) {
    let result = uri;
    if (this.requiresTrailing && this.options.filters && this.options.filters.length > 0 && !hasTrailingPathSeparator(uri)) {
      let hasExt = false;
      const currentExt = extname(uri).substr(1);
      for (let i = 0; i < this.options.filters.length; i++) {
        for (let j = 0; j < this.options.filters[i].extensions.length; j++) {
          if (this.options.filters[i].extensions[j] === "*" || this.options.filters[i].extensions[j] === currentExt) {
            hasExt = true;
            break;
          }
        }
        if (hasExt) {
          break;
        }
      }
      if (!hasExt) {
        result = joinPath(dirname(uri), basename(uri) + "." + this.options.filters[0].extensions[0]);
      }
    }
    return result;
  }
  trimTrailingSlash(path) {
    return path.length > 1 && this.endsWithSlash(path) ? path.substr(0, path.length - 1) : path;
  }
  yesNoPrompt(uri, message) {
    const prompt = this.quickInputService.createQuickPick();
    prompt.title = message;
    prompt.ignoreFocusOut = true;
    prompt.ok = true;
    prompt.customButton = true;
    prompt.customLabel = localize("remoteFileDialog.cancel", "Cancel");
    prompt.value = this.pathFromUri(uri);
    let isResolving = false;
    return new Promise((resolve) => {
      prompt.onDidAccept(() => {
        isResolving = true;
        prompt.hide();
        resolve(true);
      });
      prompt.onDidHide(() => {
        if (!isResolving) {
          resolve(false);
        }
        this.filePickBox.show();
        this.hidden = false;
        this.filePickBox.items = this.filePickBox.items;
        prompt.dispose();
      });
      prompt.onDidChangeValue(() => {
        prompt.hide();
      });
      prompt.onDidCustom(() => {
        prompt.hide();
      });
      prompt.show();
    });
  }
  async validate(uri) {
    if (uri === void 0) {
      this.filePickBox.validationMessage = localize("remoteFileDialog.invalidPath", "Please enter a valid path.");
      return Promise.resolve(false);
    }
    let stat;
    let statDirname;
    try {
      statDirname = await this.fileService.stat(dirname(uri));
      stat = await this.fileService.stat(uri);
    } catch (e) {
    }
    if (this.requiresTrailing) {
      if (stat && stat.isDirectory) {
        this.filePickBox.validationMessage = localize(
          "remoteFileDialog.validateFolder",
          "The folder already exists. Please use a new file name."
        );
        return Promise.resolve(false);
      } else if (stat) {
        const message = localize(
          "remoteFileDialog.validateExisting",
          "{0} already exists. Are you sure you want to overwrite it?",
          basename(uri)
        );
        return this.yesNoPrompt(uri, message);
      } else if (!isValidBasename(basename(uri), this.isWindows)) {
        this.filePickBox.validationMessage = localize("remoteFileDialog.validateBadFilename", "Please enter a valid file name.");
        return Promise.resolve(false);
      } else if (!statDirname) {
        const message = localize(
          "remoteFileDialog.validateCreateDirectory",
          "The folder {0} does not exist. Would you like to create it?",
          basename(dirname(uri))
        );
        return this.yesNoPrompt(uri, message);
      } else if (!statDirname.isDirectory) {
        this.filePickBox.validationMessage = localize(
          "remoteFileDialog.validateNonexistentDir",
          "Please enter a path that exists."
        );
        return Promise.resolve(false);
      }
    } else {
      if (!stat) {
        this.filePickBox.validationMessage = localize(
          "remoteFileDialog.validateNonexistentDir",
          "Please enter a path that exists."
        );
        return Promise.resolve(false);
      } else if (uri.path === "/" && this.isWindows) {
        this.filePickBox.validationMessage = localize(
          "remoteFileDialog.windowsDriveLetter",
          "Please start the path with a drive letter."
        );
        return Promise.resolve(false);
      } else if (stat.isDirectory && !this.allowFolderSelection) {
        this.filePickBox.validationMessage = localize("remoteFileDialog.validateFileOnly", "Please select a file.");
        return Promise.resolve(false);
      } else if (!stat.isDirectory && !this.allowFileSelection) {
        this.filePickBox.validationMessage = localize("remoteFileDialog.validateFolderOnly", "Please select a folder.");
        return Promise.resolve(false);
      }
    }
    return Promise.resolve(true);
  }
  async updateItems(newFolder, force = false, trailing) {
    this.busy = true;
    this.autoCompletePathSegment = "";
    const isSave = !!trailing;
    let result = false;
    const updatingPromise = createCancelablePromise(async (token) => {
      let folderStat;
      try {
        folderStat = await this.fileService.resolve(newFolder);
        if (!folderStat.isDirectory) {
          trailing = basename(newFolder);
          newFolder = dirname(newFolder);
          folderStat = void 0;
          result = true;
        }
      } catch (e) {
      }
      const newValue = trailing ? this.pathAppend(newFolder, trailing) : this.pathFromUri(newFolder, true);
      this.currentFolder = this.endsWithSlash(newFolder.path) ? newFolder : addTrailingPathSeparator(newFolder, this.separator);
      this.userEnteredPathSegment = trailing ? trailing : "";
      return this.createItems(folderStat, this.currentFolder, token).then((items) => {
        if (token.isCancellationRequested) {
          this.busy = false;
          return false;
        }
        this.filePickBox.items = items;
        this.filePickBox.activeItems = [this.filePickBox.items[0]];
        this.filePickBox.activeItems = [];
        if (!equalsIgnoreCase(this.filePickBox.value, newValue) && force) {
          this.filePickBox.valueSelection = [0, this.filePickBox.value.length];
          this.insertText(newValue, newValue);
        }
        if (force && trailing && isSave) {
          this.filePickBox.valueSelection = [this.filePickBox.value.length - trailing.length, this.filePickBox.value.length - trailing.length];
        } else if (!trailing) {
          this.filePickBox.valueSelection = [this.filePickBox.value.length, this.filePickBox.value.length];
        }
        this.busy = false;
        this.updatingPromise = void 0;
        return result;
      });
    });
    if (this.updatingPromise !== void 0) {
      this.updatingPromise.cancel();
    }
    this.updatingPromise = updatingPromise;
    return updatingPromise;
  }
  pathFromUri(uri, endWithSeparator = false) {
    let result = normalizeDriveLetter(uri.fsPath, this.isWindows).replace(/\n/g, "");
    if (this.separator === "/") {
      result = result.replace(/\\/g, this.separator);
    } else {
      result = result.replace(/\//g, this.separator);
    }
    if (endWithSeparator && !this.endsWithSlash(result)) {
      result = result + this.separator;
    }
    return result;
  }
  pathAppend(uri, additional) {
    if (additional === ".." || additional === ".") {
      const basePath = this.pathFromUri(uri, true);
      return basePath + additional;
    } else {
      return this.pathFromUri(joinPath(uri, additional));
    }
  }
  async checkIsWindowsOS() {
    let isWindowsOS = isWindows;
    const env = await this.getRemoteAgentEnvironment();
    if (env) {
      isWindowsOS = env.os === 1;
    }
    return isWindowsOS;
  }
  endsWithSlash(s) {
    return /[\/\\]$/.test(s);
  }
  basenameWithTrailingSlash(fullPath) {
    const child = this.pathFromUri(fullPath, true);
    const parent = this.pathFromUri(dirname(fullPath), true);
    return child.substring(parent.length);
  }
  async createBackItem(currFolder) {
    const fileRepresentationCurr = this.currentFolder.with({ scheme: Schemas.file, authority: "" });
    const fileRepresentationParent = dirname(fileRepresentationCurr);
    if (!isEqual(fileRepresentationCurr, fileRepresentationParent)) {
      const parentFolder = dirname(currFolder);
      if (await this.fileService.exists(parentFolder)) {
        return { label: "..", uri: addTrailingPathSeparator(parentFolder, this.separator), isFolder: true };
      }
    }
    return void 0;
  }
  async createItems(folder, currentFolder, token) {
    const result = [];
    const backDir = await this.createBackItem(currentFolder);
    try {
      if (!folder) {
        folder = await this.fileService.resolve(currentFolder);
      }
      const items = folder.children ? await Promise.all(folder.children.map((child) => this.createItem(child, currentFolder, token))) : [];
      for (const item of items) {
        if (item) {
          result.push(item);
        }
      }
    } catch (e) {
      console.log(e);
    }
    if (token.isCancellationRequested) {
      return [];
    }
    const sorted = result.sort((i1, i2) => {
      if (i1.isFolder !== i2.isFolder) {
        return i1.isFolder ? -1 : 1;
      }
      const trimmed1 = this.endsWithSlash(i1.label) ? i1.label.substr(0, i1.label.length - 1) : i1.label;
      const trimmed2 = this.endsWithSlash(i2.label) ? i2.label.substr(0, i2.label.length - 1) : i2.label;
      return trimmed1.localeCompare(trimmed2);
    });
    if (backDir) {
      sorted.unshift(backDir);
    }
    return sorted;
  }
  extname(file) {
    const ext = extname(file);
    if (ext.length === 0) {
      const basename$1 = basename(file);
      if (basename$1.startsWith(".")) {
        return basename$1;
      }
    } else {
      return ext;
    }
    return "";
  }
  filterFile(file) {
    if (this.options.filters) {
      const ext = this.extname(file);
      for (let i = 0; i < this.options.filters.length; i++) {
        for (let j = 0; j < this.options.filters[i].extensions.length; j++) {
          const testExt = this.options.filters[i].extensions[j];
          if (testExt === "*" || ext === "." + testExt) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  }
  async createItem(stat, parent, token) {
    if (token.isCancellationRequested) {
      return void 0;
    }
    let fullPath = joinPath(parent, stat.name);
    if (stat.isDirectory) {
      const filename = basename(fullPath);
      fullPath = addTrailingPathSeparator(fullPath, this.separator);
      return { label: filename, uri: fullPath, isFolder: true, iconClasses: getIconClasses(this.modelService, this.languageService, fullPath || void 0, FileKind.FOLDER) };
    } else if (!stat.isDirectory && this.allowFileSelection && this.filterFile(fullPath)) {
      return { label: stat.name, uri: fullPath, isFolder: false, iconClasses: getIconClasses(this.modelService, this.languageService, fullPath || void 0) };
    }
    return void 0;
  }
};
SimpleFileDialog = __decorate([
  __param(0, IFileService),
  __param(1, IQuickInputService),
  __param(2, ILabelService),
  __param(3, IWorkspaceContextService),
  __param(4, INotificationService),
  __param(5, IFileDialogService),
  __param(6, IModelService),
  __param(7, ILanguageService),
  __param(8, IWorkbenchEnvironmentService),
  __param(9, IRemoteAgentService),
  __param(10, IPathService),
  __param(11, IKeybindingService),
  __param(12, IContextKeyService),
  __param(13, IAccessibilityService)
], SimpleFileDialog);
let AbstractFileDialogService = class AbstractFileDialogService2 {
  constructor(hostService, contextService, historyService, environmentService, instantiationService, configurationService, fileService, openerService, dialogService, languageService, workspacesService, labelService, pathService, commandService, editorService, codeEditorService, logService) {
    this.hostService = hostService;
    this.contextService = contextService;
    this.historyService = historyService;
    this.environmentService = environmentService;
    this.instantiationService = instantiationService;
    this.configurationService = configurationService;
    this.fileService = fileService;
    this.openerService = openerService;
    this.dialogService = dialogService;
    this.languageService = languageService;
    this.workspacesService = workspacesService;
    this.labelService = labelService;
    this.pathService = pathService;
    this.commandService = commandService;
    this.editorService = editorService;
    this.codeEditorService = codeEditorService;
    this.logService = logService;
  }
  async defaultFilePath(schemeFilter = this.getSchemeFilterForWindow()) {
    let candidate = this.historyService.getLastActiveFile(schemeFilter);
    if (!candidate) {
      candidate = this.historyService.getLastActiveWorkspaceRoot(schemeFilter);
    } else {
      candidate = dirname(candidate);
    }
    if (!candidate) {
      candidate = await this.preferredHome(schemeFilter);
    }
    return candidate;
  }
  async defaultFolderPath(schemeFilter = this.getSchemeFilterForWindow()) {
    let candidate = this.historyService.getLastActiveWorkspaceRoot(schemeFilter);
    if (!candidate) {
      candidate = this.historyService.getLastActiveFile(schemeFilter);
    }
    if (!candidate) {
      return this.preferredHome(schemeFilter);
    }
    return dirname(candidate);
  }
  async preferredHome(schemeFilter = this.getSchemeFilterForWindow()) {
    const preferLocal = schemeFilter === Schemas.file;
    const preferredHomeConfig = this.configurationService.inspect("files.dialog.defaultPath");
    const preferredHomeCandidate = preferLocal ? preferredHomeConfig.userLocalValue : preferredHomeConfig.userRemoteValue;
    if (preferredHomeCandidate) {
      const isPreferredHomeCandidateAbsolute = preferLocal ? isAbsolute(preferredHomeCandidate) : (await this.pathService.path).isAbsolute(preferredHomeCandidate);
      if (isPreferredHomeCandidateAbsolute) {
        const preferredHomeNormalized = preferLocal ? normalize(preferredHomeCandidate) : (await this.pathService.path).normalize(preferredHomeCandidate);
        const preferredHome = toLocalResource(await this.pathService.fileURI(preferredHomeNormalized), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
        if (await this.fileService.exists(preferredHome)) {
          return preferredHome;
        }
      }
    }
    return this.pathService.userHome({ preferLocal });
  }
  async defaultWorkspacePath(schemeFilter = this.getSchemeFilterForWindow()) {
    let defaultWorkspacePath;
    if (this.contextService.getWorkbenchState() === 3) {
      const configuration = this.contextService.getWorkspace().configuration;
      if ((configuration == null ? void 0 : configuration.scheme) === schemeFilter && isSavedWorkspace(configuration, this.environmentService) && !isTemporaryWorkspace(configuration)) {
        defaultWorkspacePath = dirname(configuration);
      }
    }
    if (!defaultWorkspacePath) {
      defaultWorkspacePath = await this.defaultFilePath(schemeFilter);
    }
    return defaultWorkspacePath;
  }
  async showSaveConfirm(fileNamesOrResources) {
    if (this.skipDialogs()) {
      this.logService.trace("FileDialogService: refused to show save confirmation dialog in tests.");
      return 1;
    }
    return this.doShowSaveConfirm(fileNamesOrResources);
  }
  skipDialogs() {
    if (this.environmentService.isExtensionDevelopment && this.environmentService.extensionTestsLocationURI) {
      return true;
    }
    return !!this.environmentService.enableSmokeTestDriver;
  }
  async doShowSaveConfirm(fileNamesOrResources) {
    if (fileNamesOrResources.length === 0) {
      return 1;
    }
    let message;
    let detail = localize("saveChangesDetail", "Your changes will be lost if you don't save them.");
    if (fileNamesOrResources.length === 1) {
      message = localize(
        "saveChangesMessage",
        "Do you want to save the changes you made to {0}?",
        typeof fileNamesOrResources[0] === "string" ? fileNamesOrResources[0] : basename(fileNamesOrResources[0])
      );
    } else {
      message = localize(
        "saveChangesMessages",
        "Do you want to save the changes to the following {0} files?",
        fileNamesOrResources.length
      );
      detail = getFileNamesMessage(fileNamesOrResources) + "\n" + detail;
    }
    const { result } = await this.dialogService.prompt({
      type: Severity.Warning,
      message,
      detail,
      buttons: [
        {
          label: fileNamesOrResources.length > 1 ? localize({ key: "saveAll", comment: ["&& denotes a mnemonic"] }, "&&Save All") : localize({ key: "save", comment: ["&& denotes a mnemonic"] }, "&&Save"),
          run: () => 0
        },
        {
          label: localize({ key: "dontSave", comment: ["&& denotes a mnemonic"] }, "Do&&n't Save"),
          run: () => 1
        }
      ],
      cancelButton: {
        run: () => 2
      }
    });
    return result;
  }
  addFileSchemaIfNeeded(schema, _isFolder) {
    return schema === Schemas.untitled ? [Schemas.file] : schema !== Schemas.file ? [schema, Schemas.file] : [schema];
  }
  async pickFileFolderAndOpenSimplified(schema, options, preferNewWindow) {
    const title = localize("openFileOrFolder.title", "Open File or Folder");
    const availableFileSystems = this.addFileSchemaIfNeeded(schema);
    const uri = await this.pickResource({ canSelectFiles: true, canSelectFolders: true, canSelectMany: false, defaultUri: options.defaultUri, title, availableFileSystems });
    if (uri) {
      const stat = await this.fileService.stat(uri);
      const toOpen = stat.isDirectory ? { folderUri: uri } : { fileUri: uri };
      if (!isWorkspaceToOpen(toOpen) && isFileToOpen(toOpen)) {
        this.addFileToRecentlyOpened(toOpen.fileUri);
      }
      if (stat.isDirectory || options.forceNewWindow || preferNewWindow) {
        await this.hostService.openWindow([toOpen], { forceNewWindow: options.forceNewWindow, remoteAuthority: options.remoteAuthority });
      } else {
        await this.editorService.openEditors([{ resource: uri, options: { source: EditorOpenSource.USER, pinned: true } }], void 0, { validateTrust: true });
      }
    }
  }
  async pickFileAndOpenSimplified(schema, options, preferNewWindow) {
    const title = localize("openFile.title", "Open File");
    const availableFileSystems = this.addFileSchemaIfNeeded(schema);
    const uri = await this.pickResource({ canSelectFiles: true, canSelectFolders: false, canSelectMany: false, defaultUri: options.defaultUri, title, availableFileSystems });
    if (uri) {
      this.addFileToRecentlyOpened(uri);
      if (options.forceNewWindow || preferNewWindow) {
        await this.hostService.openWindow([{ fileUri: uri }], { forceNewWindow: options.forceNewWindow, remoteAuthority: options.remoteAuthority });
      } else {
        await this.editorService.openEditors([{ resource: uri, options: { source: EditorOpenSource.USER, pinned: true } }], void 0, { validateTrust: true });
      }
    }
  }
  addFileToRecentlyOpened(uri) {
    this.workspacesService.addRecentlyOpened([{ fileUri: uri, label: this.labelService.getUriLabel(uri) }]);
  }
  async pickFolderAndOpenSimplified(schema, options) {
    const title = localize("openFolder.title", "Open Folder");
    const availableFileSystems = this.addFileSchemaIfNeeded(schema, true);
    const uri = await this.pickResource({ canSelectFiles: false, canSelectFolders: true, canSelectMany: false, defaultUri: options.defaultUri, title, availableFileSystems });
    if (uri) {
      return this.hostService.openWindow([{ folderUri: uri }], { forceNewWindow: options.forceNewWindow, remoteAuthority: options.remoteAuthority });
    }
  }
  async pickWorkspaceAndOpenSimplified(schema, options) {
    const title = localize("openWorkspace.title", "Open Workspace from File");
    const filters = [{ name: localize("filterName.workspace", "Workspace"), extensions: [WORKSPACE_EXTENSION] }];
    const availableFileSystems = this.addFileSchemaIfNeeded(schema, true);
    const uri = await this.pickResource({ canSelectFiles: true, canSelectFolders: false, canSelectMany: false, defaultUri: options.defaultUri, title, filters, availableFileSystems });
    if (uri) {
      return this.hostService.openWindow([{ workspaceUri: uri }], { forceNewWindow: options.forceNewWindow, remoteAuthority: options.remoteAuthority });
    }
  }
  async pickFileToSaveSimplified(schema, options) {
    if (!options.availableFileSystems) {
      options.availableFileSystems = this.addFileSchemaIfNeeded(schema);
    }
    options.title = localize("saveFileAs.title", "Save As");
    const uri = await this.saveRemoteResource(options);
    if (uri) {
      this.addFileToRecentlyOpened(uri);
    }
    return uri;
  }
  async showSaveDialogSimplified(schema, options) {
    if (!options.availableFileSystems) {
      options.availableFileSystems = this.addFileSchemaIfNeeded(schema);
    }
    return this.saveRemoteResource(options);
  }
  async showOpenDialogSimplified(schema, options) {
    if (!options.availableFileSystems) {
      options.availableFileSystems = this.addFileSchemaIfNeeded(schema, options.canSelectFolders);
    }
    const uri = await this.pickResource(options);
    return uri ? [uri] : void 0;
  }
  getSimpleFileDialog() {
    return this.instantiationService.createInstance(SimpleFileDialog);
  }
  pickResource(options) {
    return this.getSimpleFileDialog().showOpenDialog(options);
  }
  saveRemoteResource(options) {
    return this.getSimpleFileDialog().showSaveDialog(options);
  }
  getSchemeFilterForWindow(defaultUriScheme) {
    return defaultUriScheme ?? this.pathService.defaultUriScheme;
  }
  getFileSystemSchema(options) {
    var _a2;
    return options.availableFileSystems && options.availableFileSystems[0] || this.getSchemeFilterForWindow((_a2 = options.defaultUri) == null ? void 0 : _a2.scheme);
  }
  getWorkspaceAvailableFileSystems(options) {
    if (options.availableFileSystems && options.availableFileSystems.length > 0) {
      return options.availableFileSystems;
    }
    const availableFileSystems = [Schemas.file];
    if (this.environmentService.remoteAuthority) {
      availableFileSystems.unshift(Schemas.vscodeRemote);
    }
    return availableFileSystems;
  }
  getPickFileToSaveDialogOptions(defaultUri, availableFileSystems) {
    const options = {
      defaultUri,
      title: localize("saveAsTitle", "Save As"),
      availableFileSystems
    };
    const ext = defaultUri ? extname(defaultUri) : void 0;
    let matchingFilter;
    const registeredLanguageNames = this.languageService.getSortedRegisteredLanguageNames();
    const registeredLanguageFilters = coalesce(registeredLanguageNames.map(({ languageName, languageId }) => {
      const extensions = this.languageService.getExtensions(languageId);
      if (!extensions.length) {
        return null;
      }
      const filter = { name: languageName, extensions: distinct(extensions).slice(0, 10).map((e) => trim(e, ".")) };
      const extOrPlaintext = ext || PLAINTEXT_EXTENSION;
      if (!matchingFilter && extensions.includes(extOrPlaintext)) {
        matchingFilter = filter;
        const trimmedExt = trim(extOrPlaintext, ".");
        if (!filter.extensions.includes(trimmedExt)) {
          filter.extensions.unshift(trimmedExt);
        }
        return null;
      }
      return filter;
    }));
    if (!matchingFilter && ext) {
      matchingFilter = { name: trim(ext, ".").toUpperCase(), extensions: [trim(ext, ".")] };
    }
    options.filters = coalesce([
      { name: localize("allFiles", "All Files"), extensions: ["*"] },
      matchingFilter,
      ...registeredLanguageFilters,
      { name: localize("noExt", "No Extension"), extensions: [""] }
    ]);
    return options;
  }
};
AbstractFileDialogService = __decorate([
  __param(0, IHostService),
  __param(1, IWorkspaceContextService),
  __param(2, IHistoryService),
  __param(3, IWorkbenchEnvironmentService),
  __param(4, IInstantiationService),
  __param(5, IConfigurationService),
  __param(6, IFileService),
  __param(7, IOpenerService),
  __param(8, IDialogService),
  __param(9, ILanguageService),
  __param(10, IWorkspacesService),
  __param(11, ILabelService),
  __param(12, IPathService),
  __param(13, ICommandService),
  __param(14, IEditorService),
  __param(15, ICodeEditorService),
  __param(16, ILogService)
], AbstractFileDialogService);
class FileDialogService extends AbstractFileDialogService {
  constructor() {
    super(...arguments);
    this.pickWorkspaceAndOpen = unsupported;
  }
  async pickFileFolderAndOpen(options) {
    const schema = this.getFileSystemSchema(options);
    if (options.defaultUri == null) {
      options.defaultUri = await this.defaultFilePath(schema);
    }
    return super.pickFileFolderAndOpenSimplified(schema, options, false);
  }
  async pickFolderAndOpen(options) {
    const schema = this.getFileSystemSchema(options);
    if (options.defaultUri == null) {
      options.defaultUri = await this.defaultFolderPath(schema);
    }
    return super.pickFolderAndOpenSimplified(schema, options);
  }
  async pickFileAndOpen(options) {
    const schema = this.getFileSystemSchema(options);
    if (options.defaultUri == null) {
      options.defaultUri = await this.defaultFilePath(schema);
    }
    return super.pickFileAndOpenSimplified(schema, options, false);
  }
  async showSaveDialog(options) {
    const schema = this.getFileSystemSchema(options);
    return super.showSaveDialogSimplified(schema, options);
  }
  async showOpenDialog(options) {
    const schema = this.getFileSystemSchema(options);
    return super.showOpenDialogSimplified(schema, options);
  }
  async pickFileToSave(defaultUri, availableFileSystems) {
    const schema = this.getFileSystemSchema({ defaultUri, availableFileSystems });
    const options = this.getPickFileToSaveDialogOptions(defaultUri, availableFileSystems);
    return super.pickFileToSaveSimplified(schema, options);
  }
}
function getServiceOverride(container) {
  return {
    [IDialogService.toString()]: new SyncDescriptor(DialogService, void 0, true),
    [IFileDialogService.toString()]: new SyncDescriptor(FileDialogService, void 0, true),
    ...getServiceOverride$1(container)
  };
}
export {
  getServiceOverride as default
};
