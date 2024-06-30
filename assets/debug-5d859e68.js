var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
import { gu as __decorate, gv as __param, C as ContextKeyExpr, I as IContextKeyService, c as localize, vQ as isDebuggerMainContribution, a2 as URI, br as Schemas, vR as cleanRemoteAuthority, vS as debuggerDisabledMessage, vT as filter, ay as IConfigurationService, vU as ITextResourcePropertiesService, vV as IConfigurationResolverService, hR as IWorkbenchEnvironmentService, vJ as IDebugService, e7 as isObject, gr as ExtensionsRegistry, Z as Registry, hP as Extensions, D as Disposable, aD as Emitter, vW as CONTEXT_DEBUGGERS_AVAILABLE, vX as CONTEXT_DEBUG_EXTENSION_AVAILABLE, vY as TaskDefinitionRegistry, vZ as INTERNAL_CONSOLE_OPTIONS_SCHEMA, ue as equalsIgnoreCase, bG as isCodeEditor, c8 as Severity, gx as IEditorService, as as IQuickInputService, b1 as IInstantiationService, ak as ICommandService, h5 as IExtensionService, bb as ILanguageService, iK as IDialogService, hS as ILifecycleService, v_ as CONTEXT_DEBUG_CONFIGURATION_TYPE, v$ as DebugConfigurationProviderTriggerKind, w0 as sequence, ed as CancellationTokenSource, aK as ThemeIcon, a6 as DisposableStore, q4 as flatten, w1 as getVisibleAndSorted, bo as Event, hm as distinct, aX as dispose, d7 as IWorkspaceContextService, aa as IStorageService, rh as IHistoryService, hz as IUriIdentityService, fz as joinPath, l2 as ACTIVE_GROUP, d6 as withUndefinedAsNull, ha as deepClone, he as IFileService, h4 as ITextFileService, ht as parse, hy as IPreferencesService, a7 as CancellationToken, aq as toDisposable, w2 as FileType, w3 as FilePermission, w4 as createFileSystemProviderError, w5 as FileSystemProviderErrorCode, eJ as assertNever, hf as VSBuffer, w6 as DEBUG_MEMORY_SCHEME, w7 as clamp, dZ as Severity$1, w8 as isUri, fb as CancellationError, w9 as formatPII, wa as createErrorWithActions, d0 as toAction, hA as ErrorNoTelemetry, wb as mixin, wc as IExtensionHostDebugService, c2 as IOpenerService, al as INotificationService, e9 as isString, d3 as generateUuid, cZ as MutableDisposable, j as RunOnceScheduler, bs as basenameOrAuthority, g8 as language, wd as canceled, uk as normalizeDriveLetter, cO as status, hr as Queue, we as filterExceptionsFromTelemetry, cu as ITelemetryService, iL as IHostService, jA as IPaneCompositePartService, jI as IProductService, wf as ICustomEndpointTelemetryService, fM as ILogService, pf as VIEWLET_ID, c6 as MarkerSeverity, cy as Action, wg as ITaskService, c3 as IMarkerService, mT as IViewsService, wh as CONTEXT_EXPRESSION_SELECTED, wi as CONTEXT_LOADED_SCRIPTS_SUPPORTED, wj as CONTEXT_STEP_BACK_SUPPORTED, wk as CONTEXT_FOCUSED_SESSION_IS_ATTACH, wl as CONTEXT_RESTART_FRAME_SUPPORTED, wm as CONTEXT_STEP_INTO_TARGETS_SUPPORTED, wn as CONTEXT_JUMP_TO_CURSOR_SUPPORTED, wo as CONTEXT_SET_VARIABLE_SUPPORTED, wp as CONTEXT_SET_EXPRESSION_SUPPORTED, wq as CONTEXT_MULTI_SESSION_DEBUG, wr as CONTEXT_TERMINATE_DEBUGGEE_SUPPORTED, ws as CONTEXT_SUSPEND_DEBUGGEE_SUPPORTED, wt as CONTEXT_DISASSEMBLE_REQUEST_SUPPORTED, wu as CONTEXT_FOCUSED_STACK_FRAME_HAS_INSTRUCTION_POINTER_REFERENCE, wv as isSessionAttach, ww as CALLSTACK_VIEW_ID, kc as NumberBadge, wx as CONTEXT_DEBUG_TYPE, wy as CONTEXT_DEBUG_STATE, wz as CONTEXT_HAS_DEBUGGED, wA as CONTEXT_IN_DEBUG_MODE, wB as CONTEXT_DEBUG_UX, wC as CONTEXT_BREAKPOINTS_EXIST, wD as CONTEXT_DISASSEMBLY_VIEW_FOCUS, wE as getStateLabel, wF as saveAllBeforeDebugStart, wG as REPL_VIEW_ID, fv as isCancellationError, wH as isErrorWithActions, wI as getExtensionHostDebugSession, na as VIEWLET_ID$1, hq as equals, d as alert, wJ as raceTimeout, jl as IViewDescriptorService, jk as IWorkbenchLayoutService, jz as IActivityService, u5 as IWorkspaceTrustRequestService, wK as LanguageFeatureRegistry, wL as AbstractVariableResolverService, l0 as EditorResourceAccessor, l1 as SideBySideEditor, on as isDiffEditor, js as isUndefinedOrNull, b0 as ILabelService, iu as IPathService, gM as n, a9 as createDecorator, z as EditorCommand, wM as CONTEXT_BREAKPOINT_WIDGET_VISIBLE, wN as CONTEXT_IN_BREAKPOINT_WIDGET, e as EditorContextKeys, wO as BREAKPOINT_EDITOR_CONTRIBUTION_ID, Y as registerEditorCommand, wP as ZoneWidget, bl as PLAINTEXT_LANGUAGE_ID, wQ as SelectBox, gT as defaultSelectBoxStyles, aG as append, hg as ServiceCollection, wR as getSimpleCodeEditorWidgetOptions, wS as CodeEditorWidget, wT as DEBUG_SCHEME, g1 as provideSuggestionItems, g2 as CompletionOptions, P as Position, k as Range, wU as getSimpleEditorOptions, ap as onUnexpectedError, dW as IContextViewService, aQ as IThemeService, a4 as IModelService, u as ICodeEditorService, a3 as ILanguageFeaturesService, a$ as IKeybindingService, ah as $$a, gA as editorForeground, wV as GlyphMarginLane, wW as memoize, cL as registerThemingParticipant, f as registerColor, aT as isMacintosh, dz as isLinux, k9 as BrowserFeatures, m0 as isSafari, jC as SubmenuAction, cE as Separator, fn as timeout, ct as IContextMenuService, aI as addDisposableListener, aJ as EventType, fU as StandardMouseEvent, qk as disposeIfDisposable, wX as DebuggerString, bP as withNullAsUndefined, M as MarkdownString, t as themeColorFromId, O as OverviewRulerLane, aC as noBreakWhitespace, aM as Codicon, b7 as HighlightedLabel, cA as ActionBar, b6 as createMatches, cn as clearNode, u7 as InputBox, dx as defaultInputBoxStyles, bn as addStandardDisposableListener, ad as once$1, r4 as BaseActionViewItem, bT as StandardKeyboardEvent, dj as asCssVariable, wY as selectBorder, wZ as selectBackground, gS as SelectActionViewItem, w_ as foreground, ck as editorInfoForeground, ci as editorWarningForeground, dR as errorForeground, kr as badgeBackground, ks as badgeForeground, w$ as listDeemphasizedForeground, dU as toolbarHoverBackground, ca as contrastBorder, dN as isHighContrast, fL as inputBorder, av as Color, h as MenuRegistry, i as MenuId, l6 as Themable, j7 as createActionViewItem, cd as createAndFillInActionBarActions, cD as equals$1, x0 as addDisposableGenericMouseUpListener, mC as addDisposableGenericMouseDownListener, x1 as addDisposableGenericMouseMoveListener, aF as PixelRatio, dF as getComputedStyle, dK as widgetShadow, dL as widgetBorder, bq as show, bh as hide, c9 as IMenuService, cB as MenuItemAction, cF as MenuEntryActionViewItem, k4 as SubmenuItemAction, x2 as SubmenuEntryActionViewItem, bF as registerAction2, x3 as ViewAction, x4 as CONTEXT_CALLSTACK_ITEM_TYPE, x5 as CONTEXT_CALLSTACK_SESSION_HAS_ONE_THREAD, x6 as CONTEXT_CALLSTACK_ITEM_STOPPED, x7 as CONTEXT_CALLSTACK_SESSION_IS_ATTACH, fu as commonSuffixLength, il as posix, oo as ViewPane, x8 as WorkbenchCompressibleAsyncDataTree, k7 as createAndFillInContextMenuActions, x9 as CONTEXT_STACK_FRAME_SUPPORTS_RESTART, xa as textLinkForeground, xb as PickerQuickAccessProvider, xc as matchesFuzzy, bI as EditorAction2, kz as PanelFocusContext, xd as CONTEXT_LANGUAGE_SUPPORTS_DISASSEMBLE_REQUEST, f6 as Action2, E as EditorAction, xe as getEvaluatableExpressionAtPosition, xf as WATCH_VIEW_ID, bN as MessageController, aP as getDomNodePagePosition, b as registerEditorAction, K as KeyChord, xg as EDITOR_CONTRIBUTION_ID, xh as CONTEXT_EXCEPTION_WIDGET_VISIBLE, d2 as isWindows, qL as normalize, xi as join, qW as ITunnelService, a0 as CommandsRegistry, v as IClipboardService, bE as coalesce, d1 as IProgressService, kX as SIDE_GROUP, xj as VARIABLES_VIEW_ID, bt as WorkbenchAsyncDataTree, xk as CONTEXT_VARIABLES_FOCUSED, xl as CONTEXT_BREAK_WHEN_VALUE_CHANGES_SUPPORTED, xm as CONTEXT_BREAK_WHEN_VALUE_IS_ACCESSED_SUPPORTED, xn as CONTEXT_BREAK_WHEN_VALUE_IS_READ_SUPPORTED, xo as CONTEXT_DEBUG_PROTOCOL_VARIABLE_MENU_CONTEXT, xp as CONTEXT_VARIABLE_EVALUATE_NAME_PRESENT, xq as CONTEXT_CAN_VIEW_MEMORY, xr as CONTEXT_VARIABLE_IS_READONLY, aH as editorHoverBackground, bS as DomScrollableElement, g as ModelDecorationOptions, jL as isAncestor, cM as editorHoverBorder, xs as editorHoverForeground, dC as widgetClose, uo as DomEmitter, gL as basename, hs as setProperty, cP as EditOperation, ds as format, a8 as onUnexpectedExternalError, aj as ILanguageFeatureDebounceService, eu as InjectedTextCursorStops, xt as DEFAULT_WORD_REGEXP, xu as visit, f3 as CoreEditingCommands, pJ as NotificationPriority, xv as TriggerAction, R as RawContextKey, jp as Extensions$1, xw as ViewContentGroups, jy as ViewsSubMenu, jv as ViewPaneContainer, xx as CONTEXT_DEBUG_UX_KEY, xy as BREAKPOINTS_VIEW_ID, lg as EditorPane, xz as DISASSEMBLY_VIEW_ID, xA as BareFontInfo, xB as WorkbenchTable, cc as editorBackground, xC as binarySearch2, pK as isAbsolute, et as applyFontInfo, ev as StringBuilder, a_ as ITextModelService, mn as getMimeTypes, eb as IEditorWorkerService, jS as ltrim, it as tildify, k1 as FileKind, xD as CONTEXT_LOADED_SCRIPTS_ITEM_TYPE, kV as ResourceLabels, xE as WorkbenchCompressibleObjectTree, op as TreeFindMode, xF as splitGlobAware, aw as RGBA, xG as ansiColorIdentifiers, b3 as CountBadge, b4 as defaultCountBadgeStyles, xH as CachedListVirtualDelegate, xI as FilterViewPane, xJ as HistoryNavigator, xK as CONTEXT_MULTI_SESSION_REPL, xL as CompletionItemKinds, am as EDITOR_FONT_DEFAULTS, xM as removeAnsiEscapeCodes, aS as Dimension, xN as registerNavigableContainer, xO as MOUSE_CURSOR_TEXT_CSS_CLASS_NAME, gU as createStyleSheet, xP as registerAndCreateHistoryNavigationContext, xQ as CONTEXT_IN_DEBUG_REPL, xR as resolveColorValue, eW as SuggestController, qn as STATUS_BAR_FOREGROUND, qq as STATUS_BAR_BORDER, pB as IStatusbarService, xS as CONTEXT_WATCH_ITEM_TYPE, xT as CONTEXT_WATCH_EXPRESSIONS_EXIST, xU as CONTEXT_WATCH_EXPRESSIONS_FOCUSED, xV as ElementsDragAndDropData, h1 as Extensions$2, r_ as Extensions$3, a as registerEditorContribution, xW as DEBUG_PANEL_ID, hh as SyncDescriptor, xX as LOADED_SCRIPTS_VIEW_ID, m7 as EditorExtensions, pn as EditorPaneDescriptor, _ as Extensions$4, r7 as getServiceOverride$1 } from "./theme-defaults-1df7f429.js";
import { w as launchSchemaId, G as GutterActionsRegistry, M as ModesHoverController } from "./index-ca8d23e0.js";
import { d as debugConfigure, E as ExpressionContainer, M as MemoryRegion, S as Source, T as Thread, D as DEBUG_CONFIGURE_COMMAND_ID, a as DEBUG_CONFIGURE_LABEL, B as Breakpoint, F as FunctionBreakpoint, b as ExceptionBreakpoint, c as DataBreakpoint, e as Expression, f as DebugModel, g as DisassemblyViewInput, I as InstructionBreakpoint, h as debugBreakpointHint, i as allBreakpoints, j as debugBreakpointUnsupported, k as breakpoint, l as debugStackframeFocused, m as debugStackframe, n as getBreakpointMessageAndIcon, V as Variable, o as debugStart, A as ADD_CONFIGURATION_ID, p as debugPause, q as debugStop, r as debugDisconnect, s as debugRestart, t as debugRestartFrame, u as debugStepOver, v as debugStepInto, w as debugStepOut, x as debugContinue, y as debugReverseContinue, z as debugStepBack, C as CONTINUE_LABEL, G as CONTINUE_ID, P as PAUSE_LABEL, H as PAUSE_ID, J as DISCONNECT_ID, K as DISCONNECT_LABEL, L as STOP_LABEL, N as STOP_ID, O as STEP_OVER_LABEL, Q as STEP_OVER_ID, R as STEP_INTO_LABEL, U as STEP_INTO_ID, W as STEP_OUT_LABEL, X as STEP_OUT_ID, Y as STEP_BACK_ID, Z as REVERSE_CONTINUE_ID, _ as DISCONNECT_AND_SUSPEND_ID, $ as DISCONNECT_AND_SUSPEND_LABEL, a0 as debugGripper, a1 as FOCUS_SESSION_ID, a2 as RESTART_LABEL, a3 as RESTART_SESSION_ID, a4 as FOCUS_SESSION_LABEL, a5 as callstackViewSession, a6 as StackFrame, a7 as ThreadAndSessionIds, a8 as DEBUG_CONSOLE_QUICK_ACCESS_PREFIX, a9 as SELECT_AND_START_ID, aa as openBreakpointSource, ab as getUriForDebugMemory, ac as ErrorScope, ad as Scope, ae as DEBUG_QUICK_ACCESS_PREFIX, af as debugRemoveConfig, ag as DEBUG_START_COMMAND_ID, ah as getUriFromSource, ai as debugConsoleEvaluationInput, aj as debugConsoleEvaluationPrompt, ak as debugConsoleClearAll, al as watchExpressionsAdd, am as watchExpressionsRemoveAll, an as SELECT_DEBUG_CONSOLE_ID, ao as TERMINATE_THREAD_ID, ap as STEP_INTO_TARGET_LABEL, aq as STEP_INTO_TARGET_ID, ar as FOCUS_REPL_ID, as as JUMP_TO_CURSOR_ID, at as TOGGLE_INLINE_BREAKPOINT_ID, au as SELECT_AND_START_LABEL, av as CALLSTACK_TOP_LABEL, aw as CALLSTACK_TOP_ID, ax as CALLSTACK_BOTTOM_LABEL, ay as CALLSTACK_BOTTOM_ID, az as CALLSTACK_UP_LABEL, aA as CALLSTACK_UP_ID, aB as CALLSTACK_DOWN_LABEL, aC as CALLSTACK_DOWN_ID, aD as RESTART_FRAME_ID, aE as COPY_STACK_TRACE_ID, aF as EDIT_EXPRESSION_COMMAND_ID, aG as SET_EXPRESSION_COMMAND_ID, aH as REMOVE_EXPRESSION_COMMAND_ID, aI as debugRun, aJ as debugConsoleViewIcon, aK as runViewIcon, aL as variablesViewIcon, aM as watchViewIcon, aN as callStackViewIcon, aO as breakpointsViewIcon, aP as BreakpointsView, aQ as loadedScriptsViewIcon, aR as DEBUG_COMMAND_CATEGORY, aS as NEXT_DEBUG_CONSOLE_LABEL, aT as NEXT_DEBUG_CONSOLE_ID, aU as PREV_DEBUG_CONSOLE_LABEL, aV as PREV_DEBUG_CONSOLE_ID, aW as OPEN_LOADED_SCRIPTS_LABEL, aX as SHOW_LOADED_SCRIPTS_ID, aY as SELECT_DEBUG_CONSOLE_LABEL, aZ as SELECT_DEBUG_SESSION_LABEL, a_ as SELECT_DEBUG_SESSION_ID, a$ as debugInspectMemory, b0 as watchExpressionRemove } from "./debugCommands-865f55ea.js";
import { M as Markers } from "./markers-818a6784.js";
import { D as DropdownWithPrimaryActionViewItem } from "./dropdownWithPrimaryActionViewItem-f7a63dfc.js";
import "./index-3bddf13b.js";
let Breakpoints = class Breakpoints2 {
  constructor(breakpointContribution, contextKeyService) {
    this.breakpointContribution = breakpointContribution;
    this.contextKeyService = contextKeyService;
    this.breakpointsWhen = typeof breakpointContribution.when === "string" ? ContextKeyExpr.deserialize(breakpointContribution.when) : void 0;
  }
  get language() {
    return this.breakpointContribution.language;
  }
  get enabled() {
    return !this.breakpointsWhen || this.contextKeyService.contextMatchesRules(this.breakpointsWhen);
  }
};
Breakpoints = __decorate([
  __param(1, IContextKeyService)
], Breakpoints);
function applyDeprecatedVariableMessage(schema) {
  schema.pattern = schema.pattern || "^(?!.*\\$\\{(env|config|command)\\.)";
  schema.patternErrorMessage = schema.patternErrorMessage || localize(
    "deprecatedVariables",
    "'env.', 'config.' and 'command.' are deprecated, use 'env:', 'config:' and 'command:' instead."
  );
}
let Debugger = class Debugger2 {
  constructor(adapterManager, dbgContribution, extensionDescription, configurationService, resourcePropertiesService, configurationResolverService, environmentService, debugService, contextKeyService) {
    this.adapterManager = adapterManager;
    this.configurationService = configurationService;
    this.resourcePropertiesService = resourcePropertiesService;
    this.configurationResolverService = configurationResolverService;
    this.environmentService = environmentService;
    this.debugService = debugService;
    this.contextKeyService = contextKeyService;
    this.mergedExtensionDescriptions = [];
    this.debuggerContribution = { type: dbgContribution.type };
    this.merge(dbgContribution, extensionDescription);
    this.debuggerWhen = typeof this.debuggerContribution.when === "string" ? ContextKeyExpr.deserialize(this.debuggerContribution.when) : void 0;
  }
  merge(otherDebuggerContribution, extensionDescription) {
    function mixin2(destination, source, overwrite, level = 0) {
      if (!isObject(destination)) {
        return source;
      }
      if (isObject(source)) {
        Object.keys(source).forEach((key) => {
          if (key !== "__proto__") {
            if (isObject(destination[key]) && isObject(source[key])) {
              mixin2(destination[key], source[key], overwrite, level + 1);
            } else {
              if (key in destination) {
                if (overwrite) {
                  if (level === 0 && key === "type")
                    ;
                  else {
                    destination[key] = source[key];
                  }
                }
              } else {
                destination[key] = source[key];
              }
            }
          }
        });
      }
      return destination;
    }
    if (this.mergedExtensionDescriptions.indexOf(extensionDescription) < 0) {
      this.mergedExtensionDescriptions.push(extensionDescription);
      mixin2(this.debuggerContribution, otherDebuggerContribution, extensionDescription.isBuiltin);
      if (isDebuggerMainContribution(otherDebuggerContribution)) {
        this.mainExtensionDescription = extensionDescription;
      }
    }
  }
  async startDebugging(configuration, parentSessionId) {
    const parentSession = this.debugService.getModel().getSession(parentSessionId);
    return await this.debugService.startDebugging(void 0, configuration, { parentSession }, void 0);
  }
  async createDebugAdapter(session) {
    await this.adapterManager.activateDebuggers("onDebugAdapterProtocolTracker", this.type);
    const da = this.adapterManager.createDebugAdapter(session);
    if (da) {
      return Promise.resolve(da);
    }
    throw new Error(localize("cannot.find.da", "Cannot find debug adapter for type '{0}'.", this.type));
  }
  async substituteVariables(folder, config) {
    const substitutedConfig = await this.adapterManager.substituteVariables(this.type, folder, config);
    return await this.configurationResolverService.resolveWithInteractionReplace(folder, substitutedConfig, "launch", this.variables, substitutedConfig.__configurationTarget);
  }
  runInTerminal(args, sessionId) {
    return this.adapterManager.runInTerminal(this.type, args, sessionId);
  }
  get label() {
    return this.debuggerContribution.label || this.debuggerContribution.type;
  }
  get type() {
    return this.debuggerContribution.type;
  }
  get variables() {
    return this.debuggerContribution.variables;
  }
  get configurationSnippets() {
    return this.debuggerContribution.configurationSnippets;
  }
  get languages() {
    return this.debuggerContribution.languages;
  }
  get when() {
    return this.debuggerWhen;
  }
  get enabled() {
    return !this.debuggerWhen || this.contextKeyService.contextMatchesRules(this.debuggerWhen);
  }
  get strings() {
    return this.debuggerContribution.strings ?? this.debuggerContribution.uiMessages;
  }
  interestedInLanguage(languageId) {
    return !!(this.languages && this.languages.indexOf(languageId) >= 0);
  }
  hasInitialConfiguration() {
    return !!this.debuggerContribution.initialConfigurations;
  }
  hasConfigurationProvider() {
    return this.debugService.getConfigurationManager().hasDebugConfigurationProvider(this.type);
  }
  getInitialConfigurationContent(initialConfigs) {
    let initialConfigurations = this.debuggerContribution.initialConfigurations || [];
    if (initialConfigs) {
      initialConfigurations = initialConfigurations.concat(initialConfigs);
    }
    const eol = this.resourcePropertiesService.getEOL(URI.from({ scheme: Schemas.untitled, path: "1" })) === "\r\n" ? "\r\n" : "\n";
    const configs = JSON.stringify(initialConfigurations, null, "	").split("\n").map((line) => "	" + line).join(eol).trim();
    const comment1 = localize(
      "launch.config.comment1",
      "Use IntelliSense to learn about possible attributes."
    );
    const comment2 = localize(
      "launch.config.comment2",
      "Hover to view descriptions of existing attributes."
    );
    const comment3 = localize(
      "launch.config.comment3",
      "For more information, visit: {0}",
      "https://go.microsoft.com/fwlink/?linkid=830387"
    );
    let content = [
      "{",
      `	// ${comment1}`,
      `	// ${comment2}`,
      `	// ${comment3}`,
      `	"version": "0.2.0",`,
      `	"configurations": ${configs}`,
      "}"
    ].join(eol);
    const editorConfig = this.configurationService.getValue();
    if (editorConfig.editor && editorConfig.editor.insertSpaces) {
      content = content.replace(new RegExp("	", "g"), " ".repeat(editorConfig.editor.tabSize));
    }
    return Promise.resolve(content);
  }
  getMainExtensionDescriptor() {
    return this.mainExtensionDescription || this.mergedExtensionDescriptions[0];
  }
  getCustomTelemetryEndpoint() {
    const aiKey = this.debuggerContribution.aiKey;
    if (!aiKey) {
      return void 0;
    }
    const sendErrorTelemtry = cleanRemoteAuthority(this.environmentService.remoteAuthority) !== "other";
    return {
      id: `${this.getMainExtensionDescriptor().publisher}.${this.type}`,
      aiKey,
      sendErrorTelemetry: sendErrorTelemtry
    };
  }
  getSchemaAttributes(definitions) {
    if (!this.debuggerContribution.configurationAttributes) {
      return null;
    }
    return Object.keys(this.debuggerContribution.configurationAttributes).map((request) => {
      const definitionId = `${this.type}:${request}`;
      const platformSpecificDefinitionId = `${this.type}:${request}:platform`;
      const attributes = this.debuggerContribution.configurationAttributes[request];
      const defaultRequired = ["name", "type", "request"];
      attributes.required = attributes.required && attributes.required.length ? defaultRequired.concat(attributes.required) : defaultRequired;
      attributes.additionalProperties = false;
      attributes.type = "object";
      if (!attributes.properties) {
        attributes.properties = {};
      }
      const properties = attributes.properties;
      properties["type"] = {
        enum: [this.type],
        enumDescriptions: [this.label],
        description: localize("debugType", "Type of configuration."),
        pattern: "^(?!node2)",
        deprecationMessage: this.debuggerContribution.deprecated || (this.enabled ? void 0 : debuggerDisabledMessage(this.type)),
        doNotSuggest: !!this.debuggerContribution.deprecated,
        errorMessage: localize(
          "debugTypeNotRecognised",
          "The debug type is not recognized. Make sure that you have a corresponding debug extension installed and that it is enabled."
        ),
        patternErrorMessage: localize(
          "node2NotSupported",
          '"node2" is no longer supported, use "node" instead and set the "protocol" attribute to "inspector".'
        )
      };
      properties["request"] = {
        enum: [request],
        description: localize(
          "debugRequest",
          'Request type of configuration. Can be "launch" or "attach".'
        )
      };
      for (const prop in definitions["common"].properties) {
        properties[prop] = {
          $ref: `#/definitions/common/properties/${prop}`
        };
      }
      Object.keys(properties).forEach((name) => {
        applyDeprecatedVariableMessage(properties[name]);
      });
      definitions[definitionId] = { ...attributes };
      definitions[platformSpecificDefinitionId] = {
        type: "object",
        additionalProperties: false,
        properties: filter(properties, (key) => key !== "type" && key !== "request" && key !== "name")
      };
      const attributesCopy = { ...attributes };
      attributesCopy.properties = {
        ...properties,
        ...{
          windows: {
            $ref: `#/definitions/${platformSpecificDefinitionId}`,
            description: localize(
              "debugWindowsConfiguration",
              "Windows specific launch configuration attributes."
            )
          },
          osx: {
            $ref: `#/definitions/${platformSpecificDefinitionId}`,
            description: localize("debugOSXConfiguration", "OS X specific launch configuration attributes.")
          },
          linux: {
            $ref: `#/definitions/${platformSpecificDefinitionId}`,
            description: localize(
              "debugLinuxConfiguration",
              "Linux specific launch configuration attributes."
            )
          }
        }
      };
      return attributesCopy;
    });
  }
};
Debugger = __decorate([
  __param(3, IConfigurationService),
  __param(4, ITextResourcePropertiesService),
  __param(5, IConfigurationResolverService),
  __param(6, IWorkbenchEnvironmentService),
  __param(7, IDebugService),
  __param(8, IContextKeyService)
], Debugger);
const idDescription = localize(
  "JsonSchema.input.id",
  "The input's id is used to associate an input with a variable of the form ${input:id}."
);
const typeDescription = localize("JsonSchema.input.type", "The type of user input prompt to use.");
const descriptionDescription = localize(
  "JsonSchema.input.description",
  "The description is shown when the user is prompted for input."
);
const defaultDescription = localize("JsonSchema.input.default", "The default value for the input.");
const inputsSchema = {
  definitions: {
    inputs: {
      type: "array",
      description: localize(
        "JsonSchema.inputs",
        "User inputs. Used for defining user input prompts, such as free string input or a choice from several options."
      ),
      items: {
        oneOf: [
          {
            type: "object",
            required: ["id", "type", "description"],
            additionalProperties: false,
            properties: {
              id: {
                type: "string",
                description: idDescription
              },
              type: {
                type: "string",
                description: typeDescription,
                enum: ["promptString"],
                enumDescriptions: [
                  localize(
                    "JsonSchema.input.type.promptString",
                    "The 'promptString' type opens an input box to ask the user for input."
                  )
                ]
              },
              description: {
                type: "string",
                description: descriptionDescription
              },
              default: {
                type: "string",
                description: defaultDescription
              },
              password: {
                type: "boolean",
                description: localize(
                  "JsonSchema.input.password",
                  "Controls if a password input is shown. Password input hides the typed text."
                )
              }
            }
          },
          {
            type: "object",
            required: ["id", "type", "description", "options"],
            additionalProperties: false,
            properties: {
              id: {
                type: "string",
                description: idDescription
              },
              type: {
                type: "string",
                description: typeDescription,
                enum: ["pickString"],
                enumDescriptions: [
                  localize(
                    "JsonSchema.input.type.pickString",
                    "The 'pickString' type shows a selection list."
                  )
                ]
              },
              description: {
                type: "string",
                description: descriptionDescription
              },
              default: {
                type: "string",
                description: defaultDescription
              },
              options: {
                type: "array",
                description: localize(
                  "JsonSchema.input.options",
                  "An array of strings that defines the options for a quick pick."
                ),
                items: {
                  oneOf: [
                    {
                      type: "string"
                    },
                    {
                      type: "object",
                      required: ["value"],
                      additionalProperties: false,
                      properties: {
                        label: {
                          type: "string",
                          description: localize("JsonSchema.input.pickString.optionLabel", "Label for the option.")
                        },
                        value: {
                          type: "string",
                          description: localize("JsonSchema.input.pickString.optionValue", "Value for the option.")
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            type: "object",
            required: ["id", "type", "command"],
            additionalProperties: false,
            properties: {
              id: {
                type: "string",
                description: idDescription
              },
              type: {
                type: "string",
                description: typeDescription,
                enum: ["command"],
                enumDescriptions: [
                  localize("JsonSchema.input.type.command", "The 'command' type executes a command.")
                ]
              },
              command: {
                type: "string",
                description: localize(
                  "JsonSchema.input.command.command",
                  "The command to execute for this input variable."
                )
              },
              args: {
                oneOf: [
                  {
                    type: "object",
                    description: localize(
                      "JsonSchema.input.command.args",
                      "Optional arguments passed to the command."
                    )
                  },
                  {
                    type: "array",
                    description: localize(
                      "JsonSchema.input.command.args",
                      "Optional arguments passed to the command."
                    )
                  },
                  {
                    type: "string",
                    description: localize(
                      "JsonSchema.input.command.args",
                      "Optional arguments passed to the command."
                    )
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
};
const debuggersExtPoint = ExtensionsRegistry.registerExtensionPoint({
  extensionPoint: "debuggers",
  defaultExtensionKind: ["workspace"],
  jsonSchema: {
    description: localize("vscode.extension.contributes.debuggers", "Contributes debug adapters."),
    type: "array",
    defaultSnippets: [{ body: [{ type: "" }] }],
    items: {
      additionalProperties: false,
      type: "object",
      defaultSnippets: [{ body: { type: "", program: "", runtime: "" } }],
      properties: {
        type: {
          description: localize(
            "vscode.extension.contributes.debuggers.type",
            "Unique identifier for this debug adapter."
          ),
          type: "string"
        },
        label: {
          description: localize(
            "vscode.extension.contributes.debuggers.label",
            "Display name for this debug adapter."
          ),
          type: "string"
        },
        program: {
          description: localize(
            "vscode.extension.contributes.debuggers.program",
            "Path to the debug adapter program. Path is either absolute or relative to the extension folder."
          ),
          type: "string"
        },
        args: {
          description: localize(
            "vscode.extension.contributes.debuggers.args",
            "Optional arguments to pass to the adapter."
          ),
          type: "array"
        },
        runtime: {
          description: localize(
            "vscode.extension.contributes.debuggers.runtime",
            "Optional runtime in case the program attribute is not an executable but requires a runtime."
          ),
          type: "string"
        },
        runtimeArgs: {
          description: localize(
            "vscode.extension.contributes.debuggers.runtimeArgs",
            "Optional runtime arguments."
          ),
          type: "array"
        },
        variables: {
          description: localize(
            "vscode.extension.contributes.debuggers.variables",
            "Mapping from interactive variables (e.g. ${action.pickProcess}) in `launch.json` to a command."
          ),
          type: "object"
        },
        initialConfigurations: {
          description: localize(
            "vscode.extension.contributes.debuggers.initialConfigurations",
            "Configurations for generating the initial 'launch.json'."
          ),
          type: ["array", "string"]
        },
        languages: {
          description: localize(
            "vscode.extension.contributes.debuggers.languages",
            'List of languages for which the debug extension could be considered the "default debugger".'
          ),
          type: "array"
        },
        configurationSnippets: {
          description: localize(
            "vscode.extension.contributes.debuggers.configurationSnippets",
            "Snippets for adding new configurations in 'launch.json'."
          ),
          type: "array"
        },
        configurationAttributes: {
          description: localize(
            "vscode.extension.contributes.debuggers.configurationAttributes",
            "JSON schema configurations for validating 'launch.json'."
          ),
          type: "object"
        },
        when: {
          description: localize(
            "vscode.extension.contributes.debuggers.when",
            "Condition which must be true to enable this type of debugger. Consider using 'shellExecutionSupported', 'virtualWorkspace', 'resourceScheme' or an extension-defined context key as appropriate for this."
          ),
          type: "string",
          default: ""
        },
        deprecated: {
          description: localize(
            "vscode.extension.contributes.debuggers.deprecated",
            "Optional message to mark this debug type as being deprecated."
          ),
          type: "string",
          default: ""
        },
        windows: {
          description: localize(
            "vscode.extension.contributes.debuggers.windows",
            "Windows specific settings."
          ),
          type: "object",
          properties: {
            runtime: {
              description: localize(
                "vscode.extension.contributes.debuggers.windows.runtime",
                "Runtime used for Windows."
              ),
              type: "string"
            }
          }
        },
        osx: {
          description: localize("vscode.extension.contributes.debuggers.osx", "macOS specific settings."),
          type: "object",
          properties: {
            runtime: {
              description: localize(
                "vscode.extension.contributes.debuggers.osx.runtime",
                "Runtime used for macOS."
              ),
              type: "string"
            }
          }
        },
        linux: {
          description: localize("vscode.extension.contributes.debuggers.linux", "Linux specific settings."),
          type: "object",
          properties: {
            runtime: {
              description: localize(
                "vscode.extension.contributes.debuggers.linux.runtime",
                "Runtime used for Linux."
              ),
              type: "string"
            }
          }
        },
        strings: {
          description: localize(
            "vscode.extension.contributes.debuggers.strings",
            "UI strings contributed by this debug adapter."
          ),
          type: "object",
          properties: {
            unverifiedBreakpoints: {
              description: localize(
                "vscode.extension.contributes.debuggers.strings.unverifiedBreakpoints",
                "When there are unverified breakpoints in a language supported by this debug adapter, this message will appear on the breakpoint hover and in the breakpoints view. Markdown and command links are supported."
              ),
              type: "string"
            }
          }
        }
      }
    }
  }
});
const breakpointsExtPoint = ExtensionsRegistry.registerExtensionPoint({
  extensionPoint: "breakpoints",
  jsonSchema: {
    description: localize("vscode.extension.contributes.breakpoints", "Contributes breakpoints."),
    type: "array",
    defaultSnippets: [{ body: [{ language: "" }] }],
    items: {
      type: "object",
      additionalProperties: false,
      defaultSnippets: [{ body: { language: "" } }],
      properties: {
        language: {
          description: localize(
            "vscode.extension.contributes.breakpoints.language",
            "Allow breakpoints for this language."
          ),
          type: "string"
        },
        when: {
          description: localize(
            "vscode.extension.contributes.breakpoints.when",
            "Condition which must be true to enable breakpoints in this language. Consider matching this to the debugger when clause as appropriate."
          ),
          type: "string",
          default: ""
        }
      }
    }
  }
});
const presentationSchema = {
  type: "object",
  description: localize(
    "presentation",
    "Presentation options on how to show this configuration in the debug configuration dropdown and the command palette."
  ),
  properties: {
    hidden: {
      type: "boolean",
      default: false,
      description: localize(
        "presentation.hidden",
        "Controls if this configuration should be shown in the configuration dropdown and the command palette."
      )
    },
    group: {
      type: "string",
      default: "",
      description: localize(
        "presentation.group",
        "Group that this configuration belongs to. Used for grouping and sorting in the configuration dropdown and the command palette."
      )
    },
    order: {
      type: "number",
      default: 1,
      description: localize(
        "presentation.order",
        "Order of this configuration within a group. Used for grouping and sorting in the configuration dropdown and the command palette."
      )
    }
  },
  default: {
    hidden: false,
    group: "",
    order: 1
  }
};
const defaultCompound = { name: "Compound", configurations: [] };
const launchSchema = {
  id: launchSchemaId,
  type: "object",
  title: localize("app.launch.json.title", "Launch"),
  allowTrailingCommas: true,
  allowComments: true,
  required: [],
  default: { version: "0.2.0", configurations: [], compounds: [] },
  properties: {
    version: {
      type: "string",
      description: localize("app.launch.json.version", "Version of this file format."),
      default: "0.2.0"
    },
    configurations: {
      type: "array",
      description: localize(
        "app.launch.json.configurations",
        "List of configurations. Add new configurations or edit existing ones by using IntelliSense."
      ),
      items: {
        defaultSnippets: [],
        "type": "object",
        oneOf: []
      }
    },
    compounds: {
      type: "array",
      description: localize(
        "app.launch.json.compounds",
        "List of compounds. Each compound references multiple configurations which will get launched together."
      ),
      items: {
        type: "object",
        required: ["name", "configurations"],
        properties: {
          name: {
            type: "string",
            description: localize(
              "app.launch.json.compound.name",
              "Name of compound. Appears in the launch configuration drop down menu."
            )
          },
          presentation: presentationSchema,
          configurations: {
            type: "array",
            default: [],
            items: {
              oneOf: [{
                enum: [],
                description: localize("useUniqueNames", "Please use unique configuration names.")
              }, {
                type: "object",
                required: ["name"],
                properties: {
                  name: {
                    enum: [],
                    description: localize(
                      "app.launch.json.compound.name",
                      "Name of compound. Appears in the launch configuration drop down menu."
                    )
                  },
                  folder: {
                    enum: [],
                    description: localize(
                      "app.launch.json.compound.folder",
                      "Name of folder in which the compound is located."
                    )
                  }
                }
              }]
            },
            description: localize(
              "app.launch.json.compounds.configurations",
              "Names of configurations that will be started as part of this compound."
            )
          },
          stopAll: {
            type: "boolean",
            default: false,
            description: localize(
              "app.launch.json.compound.stopAll",
              "Controls whether manually terminating one session will stop all of the compound sessions."
            )
          },
          preLaunchTask: {
            type: "string",
            default: "",
            description: localize(
              "compoundPrelaunchTask",
              "Task to run before any of the compound configurations start."
            )
          }
        },
        default: defaultCompound
      },
      default: [
        defaultCompound
      ]
    },
    inputs: inputsSchema.definitions.inputs
  }
};
const jsonRegistry$1 = Registry.as(Extensions.JSONContribution);
let AdapterManager = class AdapterManager2 extends Disposable {
  constructor(delegate, editorService, configurationService, quickInputService, instantiationService, commandService, extensionService, contextKeyService, languageService, dialogService, lifecycleService) {
    super();
    this.editorService = editorService;
    this.configurationService = configurationService;
    this.quickInputService = quickInputService;
    this.instantiationService = instantiationService;
    this.commandService = commandService;
    this.extensionService = extensionService;
    this.contextKeyService = contextKeyService;
    this.languageService = languageService;
    this.dialogService = dialogService;
    this.lifecycleService = lifecycleService;
    this.debugAdapterFactories = /* @__PURE__ */ new Map();
    this._onDidRegisterDebugger = new Emitter();
    this._onDidDebuggersExtPointRead = new Emitter();
    this.breakpointContributions = [];
    this.debuggerWhenKeys = /* @__PURE__ */ new Set();
    this.usedDebugTypes = /* @__PURE__ */ new Set();
    this.adapterDescriptorFactories = [];
    this.debuggers = [];
    this.registerListeners();
    this.contextKeyService.bufferChangeEvents(() => {
      this.debuggersAvailable = CONTEXT_DEBUGGERS_AVAILABLE.bindTo(contextKeyService);
      this.debugExtensionsAvailable = CONTEXT_DEBUG_EXTENSION_AVAILABLE.bindTo(contextKeyService);
    });
    this._register(this.contextKeyService.onDidChangeContext((e) => {
      if (e.affectsSome(this.debuggerWhenKeys)) {
        this.debuggersAvailable.set(this.hasEnabledDebuggers());
        this.updateDebugAdapterSchema();
      }
    }));
    this._register(this.onDidDebuggersExtPointRead(() => {
      this.debugExtensionsAvailable.set(this.debuggers.length > 0);
    }));
    this.lifecycleService.when(4).then(() => this.debugExtensionsAvailable.set(this.debuggers.length > 0));
    this._register(delegate.onDidNewSession((s) => {
      this.usedDebugTypes.add(s.configuration.type);
    }));
  }
  registerListeners() {
    debuggersExtPoint.setHandler((extensions, delta) => {
      delta.added.forEach((added) => {
        added.value.forEach((rawAdapter) => {
          var _a2;
          if (!rawAdapter.type || typeof rawAdapter.type !== "string") {
            added.collector.error(localize(
              "debugNoType",
              "Debugger 'type' can not be omitted and must be of type 'string'."
            ));
          }
          if (rawAdapter.type !== "*") {
            const existing = this.getDebugger(rawAdapter.type);
            if (existing) {
              existing.merge(rawAdapter, added.description);
            } else {
              const dbg = this.instantiationService.createInstance(Debugger, this, rawAdapter, added.description);
              (_a2 = dbg.when) == null ? void 0 : _a2.keys().forEach((key) => this.debuggerWhenKeys.add(key));
              this.debuggers.push(dbg);
            }
          }
        });
      });
      extensions.forEach((extension) => {
        extension.value.forEach((rawAdapter) => {
          if (rawAdapter.type === "*") {
            this.debuggers.forEach((dbg) => dbg.merge(rawAdapter, extension.description));
          }
        });
      });
      delta.removed.forEach((removed) => {
        const removedTypes = removed.value.map((rawAdapter) => rawAdapter.type);
        this.debuggers = this.debuggers.filter((d) => removedTypes.indexOf(d.type) === -1);
      });
      this.updateDebugAdapterSchema();
      this._onDidDebuggersExtPointRead.fire();
    });
    breakpointsExtPoint.setHandler((extensions) => {
      this.breakpointContributions = extensions.flatMap((ext) => ext.value.map(
        (breakpoint2) => this.instantiationService.createInstance(Breakpoints, breakpoint2)
      ));
    });
  }
  updateDebugAdapterSchema() {
    const items = launchSchema.properties["configurations"].items;
    const taskSchema = TaskDefinitionRegistry.getJsonSchema();
    const definitions = {
      "common": {
        properties: {
          "name": {
            type: "string",
            description: localize(
              "debugName",
              "Name of configuration; appears in the launch configuration dropdown menu."
            ),
            default: "Launch"
          },
          "debugServer": {
            type: "number",
            description: localize(
              "debugServer",
              "For debug extension development only: if a port is specified VS Code tries to connect to a debug adapter running in server mode"
            ),
            default: 4711
          },
          "preLaunchTask": {
            anyOf: [taskSchema, {
              type: ["string"]
            }],
            default: "",
            defaultSnippets: [{ body: { task: "", type: "" } }],
            description: localize("debugPrelaunchTask", "Task to run before debug session starts.")
          },
          "postDebugTask": {
            anyOf: [taskSchema, {
              type: ["string"]
            }],
            default: "",
            defaultSnippets: [{ body: { task: "", type: "" } }],
            description: localize("debugPostDebugTask", "Task to run after debug session ends.")
          },
          "presentation": presentationSchema,
          "internalConsoleOptions": INTERNAL_CONSOLE_OPTIONS_SCHEMA,
          "suppressMultipleSessionWarning": {
            type: "boolean",
            description: localize(
              "suppressMultipleSessionWarning",
              "Disable the warning when trying to start the same debug configuration more than once."
            ),
            default: true
          }
        }
      }
    };
    launchSchema.definitions = definitions;
    items.oneOf = [];
    items.defaultSnippets = [];
    this.debuggers.forEach((adapter) => {
      const schemaAttributes = adapter.getSchemaAttributes(definitions);
      if (schemaAttributes && items.oneOf) {
        items.oneOf.push(...schemaAttributes);
      }
      const configurationSnippets = adapter.configurationSnippets;
      if (configurationSnippets && items.defaultSnippets) {
        items.defaultSnippets.push(...configurationSnippets);
      }
    });
    jsonRegistry$1.registerSchema(launchSchemaId, launchSchema);
  }
  registerDebugAdapterFactory(debugTypes, debugAdapterLauncher) {
    debugTypes.forEach((debugType) => this.debugAdapterFactories.set(debugType, debugAdapterLauncher));
    this.debuggersAvailable.set(this.hasEnabledDebuggers());
    this._onDidRegisterDebugger.fire();
    return {
      dispose: () => {
        debugTypes.forEach((debugType) => this.debugAdapterFactories.delete(debugType));
      }
    };
  }
  hasEnabledDebuggers() {
    for (const [type] of this.debugAdapterFactories) {
      const dbg = this.getDebugger(type);
      if (dbg && dbg.enabled) {
        return true;
      }
    }
    return false;
  }
  createDebugAdapter(session) {
    const factory = this.debugAdapterFactories.get(session.configuration.type);
    if (factory) {
      return factory.createDebugAdapter(session);
    }
    return void 0;
  }
  substituteVariables(debugType, folder, config) {
    const factory = this.debugAdapterFactories.get(debugType);
    if (factory) {
      return factory.substituteVariables(folder, config);
    }
    return Promise.resolve(config);
  }
  runInTerminal(debugType, args, sessionId) {
    const factory = this.debugAdapterFactories.get(debugType);
    if (factory) {
      return factory.runInTerminal(args, sessionId);
    }
    return Promise.resolve(void 0);
  }
  registerDebugAdapterDescriptorFactory(debugAdapterProvider) {
    this.adapterDescriptorFactories.push(debugAdapterProvider);
    return {
      dispose: () => {
        this.unregisterDebugAdapterDescriptorFactory(debugAdapterProvider);
      }
    };
  }
  unregisterDebugAdapterDescriptorFactory(debugAdapterProvider) {
    const ix = this.adapterDescriptorFactories.indexOf(debugAdapterProvider);
    if (ix >= 0) {
      this.adapterDescriptorFactories.splice(ix, 1);
    }
  }
  getDebugAdapterDescriptor(session) {
    const config = session.configuration;
    const providers = this.adapterDescriptorFactories.filter((p) => p.type === config.type && p.createDebugAdapterDescriptor);
    if (providers.length === 1) {
      return providers[0].createDebugAdapterDescriptor(session);
    }
    return Promise.resolve(void 0);
  }
  getDebuggerLabel(type) {
    const dbgr = this.getDebugger(type);
    if (dbgr) {
      return dbgr.label;
    }
    return void 0;
  }
  get onDidRegisterDebugger() {
    return this._onDidRegisterDebugger.event;
  }
  get onDidDebuggersExtPointRead() {
    return this._onDidDebuggersExtPointRead.event;
  }
  canSetBreakpointsIn(model) {
    const languageId = model.getLanguageId();
    if (!languageId || languageId === "jsonc" || languageId === "log") {
      return false;
    }
    if (this.configurationService.getValue("debug").allowBreakpointsEverywhere) {
      return true;
    }
    return this.breakpointContributions.some((breakpoints) => breakpoints.language === languageId && breakpoints.enabled);
  }
  getDebugger(type) {
    return this.debuggers.find((dbg) => equalsIgnoreCase(dbg.type, type));
  }
  getEnabledDebugger(type) {
    const adapter = this.getDebugger(type);
    return adapter && adapter.enabled ? adapter : void 0;
  }
  someDebuggerInterestedInLanguage(languageId) {
    return !!this.debuggers.filter((d) => d.enabled).find((a) => a.interestedInLanguage(languageId));
  }
  async guessDebugger(gettingConfigurations) {
    const activeTextEditorControl = this.editorService.activeTextEditorControl;
    let candidates = [];
    let languageLabel = null;
    let model = null;
    if (isCodeEditor(activeTextEditorControl)) {
      model = activeTextEditorControl.getModel();
      const language2 = model ? model.getLanguageId() : void 0;
      if (language2) {
        languageLabel = this.languageService.getLanguageName(language2);
      }
      const adapters = this.debuggers.filter((a) => a.enabled).filter((a) => language2 && a.interestedInLanguage(language2));
      if (adapters.length === 1) {
        return adapters[0];
      }
      if (adapters.length > 1) {
        candidates = adapters;
      }
    }
    if ((!languageLabel || gettingConfigurations || model && this.canSetBreakpointsIn(model)) && candidates.length === 0) {
      await this.activateDebuggers("onDebugInitialConfigurations");
      candidates = this.debuggers.filter((a) => a.enabled).filter((dbg) => dbg.hasInitialConfiguration() || dbg.hasConfigurationProvider());
    }
    if (candidates.length === 0 && languageLabel) {
      if (languageLabel.indexOf(" ") >= 0) {
        languageLabel = `'${languageLabel}'`;
      }
      const { confirmed } = await this.dialogService.confirm({
        type: Severity.Warning,
        message: localize(
          "CouldNotFindLanguage",
          "You don't have an extension for debugging {0}. Should we find a {0} extension in the Marketplace?",
          languageLabel
        ),
        primaryButton: localize(
          { key: "findExtension", comment: ["&& denotes a mnemonic"] },
          "&&Find {0} extension",
          languageLabel
        )
      });
      if (confirmed) {
        await this.commandService.executeCommand("debug.installAdditionalDebuggers", languageLabel);
      }
      return void 0;
    }
    this.initExtensionActivationsIfNeeded();
    candidates.sort((first, second) => first.label.localeCompare(second.label));
    const suggestedCandidates = [];
    const otherCandidates = [];
    candidates.forEach((d) => {
      var _a2;
      const descriptor = d.getMainExtensionDescriptor();
      if (descriptor.id && !!((_a2 = this.earlyActivatedExtensions) == null ? void 0 : _a2.has(descriptor.id))) {
        suggestedCandidates.push(d);
      } else if (this.usedDebugTypes.has(d.type)) {
        suggestedCandidates.push(d);
      } else {
        otherCandidates.push(d);
      }
    });
    const picks = [];
    if (suggestedCandidates.length > 0) {
      picks.push({ type: "separator", label: localize("suggestedDebuggers", "Suggested") }, ...suggestedCandidates.map((c) => ({ label: c.label, debugger: c })));
    }
    if (otherCandidates.length > 0) {
      if (picks.length > 0) {
        picks.push({ type: "separator", label: "" });
      }
      picks.push(...otherCandidates.map((c) => ({ label: c.label, debugger: c })));
    }
    picks.push({ type: "separator", label: "" }, { label: languageLabel ? localize("installLanguage", "Install an extension for {0}...", languageLabel) : localize("installExt", "Install extension...") });
    const placeHolder = localize("selectDebug", "Select debugger");
    return this.quickInputService.pick(picks, { activeItem: picks[0], placeHolder }).then((picked) => {
      if (picked && picked.debugger) {
        return picked.debugger;
      }
      if (picked) {
        this.commandService.executeCommand("debug.installAdditionalDebuggers", languageLabel);
      }
      return void 0;
    });
  }
  initExtensionActivationsIfNeeded() {
    if (!this.earlyActivatedExtensions) {
      this.earlyActivatedExtensions = /* @__PURE__ */ new Set();
      const status2 = this.extensionService.getExtensionsStatus();
      for (const id in status2) {
        if (!!status2[id].activationTimes) {
          this.earlyActivatedExtensions.add(id);
        }
      }
    }
  }
  async activateDebuggers(activationEvent, debugType) {
    this.initExtensionActivationsIfNeeded();
    const promises = [
      this.extensionService.activateByEvent(activationEvent),
      this.extensionService.activateByEvent("onDebug")
    ];
    if (debugType) {
      promises.push(this.extensionService.activateByEvent(`${activationEvent}:${debugType}`));
    }
    await Promise.all(promises);
  }
};
AdapterManager = __decorate([
  __param(1, IEditorService),
  __param(2, IConfigurationService),
  __param(3, IQuickInputService),
  __param(4, IInstantiationService),
  __param(5, ICommandService),
  __param(6, IExtensionService),
  __param(7, IContextKeyService),
  __param(8, ILanguageService),
  __param(9, IDialogService),
  __param(10, ILifecycleService)
], AdapterManager);
const jsonRegistry = Registry.as(Extensions.JSONContribution);
jsonRegistry.registerSchema(launchSchemaId, launchSchema);
const DEBUG_SELECTED_CONFIG_NAME_KEY = "debug.selectedconfigname";
const DEBUG_SELECTED_ROOT = "debug.selectedroot";
const DEBUG_SELECTED_TYPE = "debug.selectedtype";
const DEBUG_RECENT_DYNAMIC_CONFIGURATIONS = "debug.recentdynamicconfigurations";
let ConfigurationManager = class ConfigurationManager2 {
  constructor(adapterManager, contextService, configurationService, quickInputService, instantiationService, storageService, extensionService, historyService, uriIdentityService, contextKeyService) {
    this.adapterManager = adapterManager;
    this.contextService = contextService;
    this.configurationService = configurationService;
    this.quickInputService = quickInputService;
    this.instantiationService = instantiationService;
    this.storageService = storageService;
    this.extensionService = extensionService;
    this.historyService = historyService;
    this.uriIdentityService = uriIdentityService;
    this.getSelectedConfig = () => Promise.resolve(void 0);
    this.selectedDynamic = false;
    this._onDidSelectConfigurationName = new Emitter();
    this.configProviders = [];
    this.toDispose = [];
    this.initLaunches();
    this.setCompoundSchemaValues();
    this.registerListeners();
    const previousSelectedRoot = this.storageService.get(DEBUG_SELECTED_ROOT, 1);
    const previousSelectedType = this.storageService.get(DEBUG_SELECTED_TYPE, 1);
    const previousSelectedLaunch = this.launches.find((l) => l.uri.toString() === previousSelectedRoot);
    const previousSelectedName = this.storageService.get(DEBUG_SELECTED_CONFIG_NAME_KEY, 1);
    this.debugConfigurationTypeContext = CONTEXT_DEBUG_CONFIGURATION_TYPE.bindTo(contextKeyService);
    const dynamicConfig = previousSelectedType ? { type: previousSelectedType } : void 0;
    if (previousSelectedLaunch && previousSelectedLaunch.getConfigurationNames().length) {
      this.selectConfiguration(previousSelectedLaunch, previousSelectedName, void 0, dynamicConfig);
    } else if (this.launches.length > 0) {
      this.selectConfiguration(void 0, previousSelectedName, void 0, dynamicConfig);
    }
  }
  registerDebugConfigurationProvider(debugConfigurationProvider) {
    this.configProviders.push(debugConfigurationProvider);
    return {
      dispose: () => {
        this.unregisterDebugConfigurationProvider(debugConfigurationProvider);
      }
    };
  }
  unregisterDebugConfigurationProvider(debugConfigurationProvider) {
    const ix = this.configProviders.indexOf(debugConfigurationProvider);
    if (ix >= 0) {
      this.configProviders.splice(ix, 1);
    }
  }
  hasDebugConfigurationProvider(debugType, triggerKind) {
    if (triggerKind === void 0) {
      triggerKind = DebugConfigurationProviderTriggerKind.Initial;
    }
    const provider = this.configProviders.find((p) => p.provideDebugConfigurations && p.type === debugType && p.triggerKind === triggerKind);
    return !!provider;
  }
  async resolveConfigurationByProviders(folderUri, type, config, token) {
    const resolveDebugConfigurationForType = async (type2, config2) => {
      if (type2 !== "*") {
        await this.adapterManager.activateDebuggers("onDebugResolve", type2);
      }
      for (const p of this.configProviders) {
        if (p.type === type2 && p.resolveDebugConfiguration && config2) {
          config2 = await p.resolveDebugConfiguration(folderUri, config2, token);
        }
      }
      return config2;
    };
    let resolvedType = config.type ?? type;
    let result = config;
    for (let seen = /* @__PURE__ */ new Set(); result && !seen.has(resolvedType); ) {
      seen.add(resolvedType);
      result = await resolveDebugConfigurationForType(resolvedType, result);
      result = await resolveDebugConfigurationForType("*", result);
      resolvedType = (result == null ? void 0 : result.type) ?? type;
    }
    return result;
  }
  async resolveDebugConfigurationWithSubstitutedVariables(folderUri, type, config, token) {
    const providers = this.configProviders.filter((p) => p.type === type && p.resolveDebugConfigurationWithSubstitutedVariables).concat(this.configProviders.filter((p) => p.type === "*" && p.resolveDebugConfigurationWithSubstitutedVariables));
    let result = config;
    await sequence(providers.map((provider) => async () => {
      if (result) {
        result = await provider.resolveDebugConfigurationWithSubstitutedVariables(folderUri, result, token);
      }
    }));
    return result;
  }
  async provideDebugConfigurations(folderUri, type, token) {
    await this.adapterManager.activateDebuggers("onDebugInitialConfigurations");
    const results = await Promise.all(this.configProviders.filter((p) => p.type === type && p.triggerKind === DebugConfigurationProviderTriggerKind.Initial && p.provideDebugConfigurations).map((p) => p.provideDebugConfigurations(folderUri, token)));
    return results.reduce((first, second) => first.concat(second), []);
  }
  async getDynamicProviders() {
    await this.extensionService.whenInstalledExtensionsRegistered();
    const onDebugDynamicConfigurationsName = "onDebugDynamicConfigurations";
    const debugDynamicExtensionsTypes = this.extensionService.extensions.reduce((acc, e) => {
      var _a2, _b2;
      if (!e.activationEvents) {
        return acc;
      }
      const explicitTypes = [];
      let hasGenericEvent = false;
      for (const event of e.activationEvents) {
        if (event === onDebugDynamicConfigurationsName) {
          hasGenericEvent = true;
        } else if (event.startsWith(`${onDebugDynamicConfigurationsName}:`)) {
          explicitTypes.push(event.slice(onDebugDynamicConfigurationsName.length + 1));
        }
      }
      if (explicitTypes.length) {
        return acc.concat(explicitTypes);
      }
      if (hasGenericEvent) {
        const debuggerType = (_b2 = (_a2 = e.contributes) == null ? void 0 : _a2.debuggers) == null ? void 0 : _b2[0].type;
        return debuggerType ? acc.concat(debuggerType) : acc;
      }
      return acc;
    }, []);
    return debugDynamicExtensionsTypes.map((type) => {
      return {
        label: this.adapterManager.getDebuggerLabel(type),
        getProvider: async () => {
          await this.adapterManager.activateDebuggers(onDebugDynamicConfigurationsName, type);
          return this.configProviders.find((p) => p.type === type && p.triggerKind === DebugConfigurationProviderTriggerKind.Dynamic && p.provideDebugConfigurations);
        },
        type,
        pick: async () => {
          await this.adapterManager.activateDebuggers(onDebugDynamicConfigurationsName, type);
          const token = new CancellationTokenSource();
          const picks = [];
          const provider = this.configProviders.find((p) => p.type === type && p.triggerKind === DebugConfigurationProviderTriggerKind.Dynamic && p.provideDebugConfigurations);
          this.getLaunches().forEach((launch) => {
            if (launch.workspace && provider) {
              picks.push(provider.provideDebugConfigurations(launch.workspace.uri, token.token).then((configurations) => configurations.map((config) => ({
                label: config.name,
                description: launch.name,
                config,
                buttons: [{
                  iconClass: ThemeIcon.asClassName(debugConfigure),
                  tooltip: localize("editLaunchConfig", "Edit Debug Configuration in launch.json")
                }],
                launch
              }))));
            }
          });
          const disposables = new DisposableStore();
          const input = disposables.add(this.quickInputService.createQuickPick());
          input.busy = true;
          input.placeholder = localize("selectConfiguration", "Select Launch Configuration");
          const chosenPromise = new Promise((resolve) => {
            disposables.add(input.onDidAccept(() => resolve(input.activeItems[0])));
            disposables.add(input.onDidTriggerItemButton(async (context) => {
              resolve(void 0);
              const { launch, config } = context.item;
              await launch.openConfigFile({ preserveFocus: false, type: config.type, suppressInitialConfigs: true });
              await launch.writeConfiguration(config);
              await this.selectConfiguration(launch, config.name);
              this.removeRecentDynamicConfigurations(config.name, config.type);
            }));
          });
          const nestedPicks = await Promise.all(picks);
          const items = flatten(nestedPicks);
          input.items = items;
          input.busy = false;
          input.show();
          const chosen = await chosenPromise;
          disposables.dispose();
          if (!chosen) {
            token.cancel();
            return;
          }
          return chosen;
        }
      };
    });
  }
  getAllConfigurations() {
    const all = [];
    for (const l of this.launches) {
      for (const name of l.getConfigurationNames()) {
        const config = l.getConfiguration(name) || l.getCompound(name);
        if (config) {
          all.push({ launch: l, name, presentation: config.presentation });
        }
      }
    }
    return getVisibleAndSorted(all);
  }
  removeRecentDynamicConfigurations(name, type) {
    const remaining = this.getRecentDynamicConfigurations().filter((c) => c.name !== name || c.type !== type);
    this.storageService.store(DEBUG_RECENT_DYNAMIC_CONFIGURATIONS, JSON.stringify(remaining), 1, 1);
    if (this.selectedConfiguration.name === name && this.selectedType === type && this.selectedDynamic) {
      this.selectConfiguration(void 0, void 0);
    } else {
      this._onDidSelectConfigurationName.fire();
    }
  }
  getRecentDynamicConfigurations() {
    return JSON.parse(this.storageService.get(DEBUG_RECENT_DYNAMIC_CONFIGURATIONS, 1, "[]"));
  }
  registerListeners() {
    this.toDispose.push(Event.any(this.contextService.onDidChangeWorkspaceFolders, this.contextService.onDidChangeWorkbenchState)(() => {
      this.initLaunches();
      this.selectConfiguration(void 0);
      this.setCompoundSchemaValues();
    }));
    this.toDispose.push(this.configurationService.onDidChangeConfiguration(async (e) => {
      if (e.affectsConfiguration("launch")) {
        await this.selectConfiguration(void 0);
        this.setCompoundSchemaValues();
      }
    }));
    this.toDispose.push(this.adapterManager.onDidDebuggersExtPointRead(() => {
      this.setCompoundSchemaValues();
    }));
  }
  initLaunches() {
    this.launches = this.contextService.getWorkspace().folders.map(
      (folder) => this.instantiationService.createInstance(Launch, this, this.adapterManager, folder)
    );
    if (this.contextService.getWorkbenchState() === 3) {
      this.launches.push(this.instantiationService.createInstance(WorkspaceLaunch, this, this.adapterManager));
    }
    this.launches.push(this.instantiationService.createInstance(UserLaunch, this, this.adapterManager));
    if (this.selectedLaunch && this.launches.indexOf(this.selectedLaunch) === -1) {
      this.selectConfiguration(void 0);
    }
  }
  setCompoundSchemaValues() {
    const compoundConfigurationsSchema = launchSchema.properties["compounds"].items.properties["configurations"];
    const launchNames = this.launches.map((l) => l.getConfigurationNames(true)).reduce((first, second) => first.concat(second), []);
    compoundConfigurationsSchema.items.oneOf[0].enum = launchNames;
    compoundConfigurationsSchema.items.oneOf[1].properties.name.enum = launchNames;
    const folderNames = this.contextService.getWorkspace().folders.map((f) => f.name);
    compoundConfigurationsSchema.items.oneOf[1].properties.folder.enum = folderNames;
    jsonRegistry.registerSchema(launchSchemaId, launchSchema);
  }
  getLaunches() {
    return this.launches;
  }
  getLaunch(workspaceUri) {
    if (!URI.isUri(workspaceUri)) {
      return void 0;
    }
    return this.launches.find((l) => l.workspace && this.uriIdentityService.extUri.isEqual(l.workspace.uri, workspaceUri));
  }
  get selectedConfiguration() {
    return {
      launch: this.selectedLaunch,
      name: this.selectedName,
      getConfig: this.getSelectedConfig,
      type: this.selectedType
    };
  }
  get onDidSelectConfiguration() {
    return this._onDidSelectConfigurationName.event;
  }
  getWorkspaceLaunch() {
    if (this.contextService.getWorkbenchState() === 3) {
      return this.launches[this.launches.length - 1];
    }
    return void 0;
  }
  async selectConfiguration(launch, name, config, dynamicConfig) {
    if (typeof launch === "undefined") {
      const rootUri = this.historyService.getLastActiveWorkspaceRoot();
      launch = this.getLaunch(rootUri);
      if (!launch || launch.getConfigurationNames().length === 0) {
        launch = this.launches.find((l) => !!(l && l.getConfigurationNames().length)) || launch || this.launches[0];
      }
    }
    const previousLaunch = this.selectedLaunch;
    const previousName = this.selectedName;
    const previousSelectedDynamic = this.selectedDynamic;
    this.selectedLaunch = launch;
    if (this.selectedLaunch) {
      this.storageService.store(DEBUG_SELECTED_ROOT, this.selectedLaunch.uri.toString(), 1, 1);
    } else {
      this.storageService.remove(DEBUG_SELECTED_ROOT, 1);
    }
    const names = launch ? launch.getConfigurationNames() : [];
    this.getSelectedConfig = () => {
      const selected = this.selectedName ? launch == null ? void 0 : launch.getConfiguration(this.selectedName) : void 0;
      return Promise.resolve(selected || config);
    };
    let type = config == null ? void 0 : config.type;
    if (name && names.indexOf(name) >= 0) {
      this.setSelectedLaunchName(name);
    } else if (dynamicConfig && dynamicConfig.type) {
      type = dynamicConfig.type;
      if (!config) {
        const providers = (await this.getDynamicProviders()).filter((p) => p.type === type);
        this.getSelectedConfig = async () => {
          const activatedProviders = await Promise.all(providers.map((p) => p.getProvider()));
          const provider = activatedProviders.length > 0 ? activatedProviders[0] : void 0;
          if (provider && launch && launch.workspace) {
            const token = new CancellationTokenSource();
            const dynamicConfigs = await provider.provideDebugConfigurations(launch.workspace.uri, token.token);
            const dynamicConfig2 = dynamicConfigs.find((c) => c.name === name);
            if (dynamicConfig2) {
              return dynamicConfig2;
            }
          }
          return void 0;
        };
      }
      this.setSelectedLaunchName(name);
      let recentDynamicProviders = this.getRecentDynamicConfigurations();
      if (name && dynamicConfig.type) {
        recentDynamicProviders.unshift({ name, type: dynamicConfig.type });
        recentDynamicProviders = distinct(recentDynamicProviders, (t) => `${t.name} : ${t.type}`);
        this.storageService.store(DEBUG_RECENT_DYNAMIC_CONFIGURATIONS, JSON.stringify(recentDynamicProviders), 1, 1);
      }
    } else if (!this.selectedName || names.indexOf(this.selectedName) === -1) {
      const nameToSet = names.length ? names[0] : void 0;
      this.setSelectedLaunchName(nameToSet);
    }
    if (!config && launch && this.selectedName) {
      config = launch.getConfiguration(this.selectedName);
      type = config == null ? void 0 : config.type;
    }
    this.selectedType = (dynamicConfig == null ? void 0 : dynamicConfig.type) || (config == null ? void 0 : config.type);
    this.selectedDynamic = !!dynamicConfig;
    this.storageService.store(DEBUG_SELECTED_TYPE, dynamicConfig ? this.selectedType : void 0, 1, 1);
    if (type) {
      this.debugConfigurationTypeContext.set(type);
    } else {
      this.debugConfigurationTypeContext.reset();
    }
    if (this.selectedLaunch !== previousLaunch || this.selectedName !== previousName || previousSelectedDynamic !== this.selectedDynamic) {
      this._onDidSelectConfigurationName.fire();
    }
  }
  setSelectedLaunchName(selectedName) {
    this.selectedName = selectedName;
    if (this.selectedName) {
      this.storageService.store(DEBUG_SELECTED_CONFIG_NAME_KEY, this.selectedName, 1, 1);
    } else {
      this.storageService.remove(DEBUG_SELECTED_CONFIG_NAME_KEY, 1);
    }
  }
  dispose() {
    this.toDispose = dispose(this.toDispose);
  }
};
ConfigurationManager = __decorate([
  __param(1, IWorkspaceContextService),
  __param(2, IConfigurationService),
  __param(3, IQuickInputService),
  __param(4, IInstantiationService),
  __param(5, IStorageService),
  __param(6, IExtensionService),
  __param(7, IHistoryService),
  __param(8, IUriIdentityService),
  __param(9, IContextKeyService)
], ConfigurationManager);
class AbstractLaunch {
  constructor(configurationManager, adapterManager) {
    this.configurationManager = configurationManager;
    this.adapterManager = adapterManager;
  }
  getCompound(name) {
    const config = this.getConfig();
    if (!config || !config.compounds) {
      return void 0;
    }
    return config.compounds.find((compound) => compound.name === name);
  }
  getConfigurationNames(ignoreCompoundsAndPresentation = false) {
    const config = this.getConfig();
    if (!config || !Array.isArray(config.configurations) && !Array.isArray(config.compounds)) {
      return [];
    } else {
      const configurations = [];
      if (config.configurations) {
        configurations.push(...config.configurations.filter((cfg) => cfg && typeof cfg.name === "string"));
      }
      if (ignoreCompoundsAndPresentation) {
        return configurations.map((c) => c.name);
      }
      if (config.compounds) {
        configurations.push(...config.compounds.filter((compound) => typeof compound.name === "string" && compound.configurations && compound.configurations.length));
      }
      return getVisibleAndSorted(configurations).map((c) => c.name);
    }
  }
  getConfiguration(name) {
    const config = deepClone(this.getConfig());
    if (!config || !config.configurations) {
      return void 0;
    }
    const configuration = config.configurations.find((config2) => config2 && config2.name === name);
    if (configuration) {
      if (this instanceof UserLaunch) {
        configuration.__configurationTarget = 2;
      } else if (this instanceof WorkspaceLaunch) {
        configuration.__configurationTarget = 5;
      } else {
        configuration.__configurationTarget = 6;
      }
    }
    return configuration;
  }
  async getInitialConfigurationContent(folderUri, type, useInitialConfigs, token) {
    let content = "";
    const adapter = type ? this.adapterManager.getEnabledDebugger(type) : await this.adapterManager.guessDebugger(true);
    if (adapter) {
      const initialConfigs = useInitialConfigs ? await this.configurationManager.provideDebugConfigurations(folderUri, adapter.type, token || CancellationToken.None) : [];
      content = await adapter.getInitialConfigurationContent(initialConfigs);
    }
    return content;
  }
  get hidden() {
    return false;
  }
}
let Launch = class Launch2 extends AbstractLaunch {
  constructor(configurationManager, adapterManager, workspace, fileService, textFileService, editorService, configurationService) {
    super(configurationManager, adapterManager);
    this.workspace = workspace;
    this.fileService = fileService;
    this.textFileService = textFileService;
    this.editorService = editorService;
    this.configurationService = configurationService;
  }
  get uri() {
    return joinPath(this.workspace.uri, "/.vscode/launch.json");
  }
  get name() {
    return this.workspace.name;
  }
  getConfig() {
    return this.configurationService.inspect("launch", { resource: this.workspace.uri }).workspaceFolderValue;
  }
  async openConfigFile({ preserveFocus, type, suppressInitialConfigs }, token) {
    const resource = this.uri;
    let created = false;
    let content = "";
    try {
      const fileContent = await this.fileService.readFile(resource);
      content = fileContent.value.toString();
    } catch {
      content = await this.getInitialConfigurationContent(this.workspace.uri, type, !suppressInitialConfigs, token);
      if (!content) {
        return { editor: null, created: false };
      }
      created = true;
      try {
        await this.textFileService.write(resource, content);
      } catch (error) {
        throw new Error(localize("DebugConfig.failed", "Unable to create 'launch.json' file inside the '.vscode' folder ({0}).", error.message));
      }
    }
    const index = content.indexOf(`"${this.configurationManager.selectedConfiguration.name}"`);
    let startLineNumber = 1;
    for (let i = 0; i < index; i++) {
      if (content.charAt(i) === "\n") {
        startLineNumber++;
      }
    }
    const selection = startLineNumber > 1 ? { startLineNumber, startColumn: 4 } : void 0;
    const editor = await this.editorService.openEditor({
      resource,
      options: {
        selection,
        preserveFocus,
        pinned: created,
        revealIfVisible: true
      }
    }, ACTIVE_GROUP);
    return {
      editor: withUndefinedAsNull(editor),
      created
    };
  }
  async writeConfiguration(configuration) {
    const fullConfig = deepClone(this.getConfig());
    if (!fullConfig.configurations) {
      fullConfig.configurations = [];
    }
    fullConfig.configurations.push(configuration);
    await this.configurationService.updateValue("launch", fullConfig, { resource: this.workspace.uri }, 6);
  }
};
Launch = __decorate([
  __param(3, IFileService),
  __param(4, ITextFileService),
  __param(5, IEditorService),
  __param(6, IConfigurationService)
], Launch);
let WorkspaceLaunch = class WorkspaceLaunch2 extends AbstractLaunch {
  constructor(configurationManager, adapterManager, editorService, configurationService, contextService) {
    super(configurationManager, adapterManager);
    this.editorService = editorService;
    this.configurationService = configurationService;
    this.contextService = contextService;
  }
  get workspace() {
    return void 0;
  }
  get uri() {
    return this.contextService.getWorkspace().configuration;
  }
  get name() {
    return localize("workspace", "workspace");
  }
  getConfig() {
    return this.configurationService.inspect("launch").workspaceValue;
  }
  async openConfigFile({ preserveFocus, type, useInitialConfigs }, token) {
    const launchExistInFile = !!this.getConfig();
    if (!launchExistInFile) {
      const content = await this.getInitialConfigurationContent(void 0, type, useInitialConfigs, token);
      if (content) {
        await this.configurationService.updateValue("launch", parse(content), 5);
      } else {
        return { editor: null, created: false };
      }
    }
    const editor = await this.editorService.openEditor({
      resource: this.contextService.getWorkspace().configuration,
      options: { preserveFocus }
    }, ACTIVE_GROUP);
    return {
      editor: withUndefinedAsNull(editor),
      created: false
    };
  }
};
WorkspaceLaunch = __decorate([
  __param(2, IEditorService),
  __param(3, IConfigurationService),
  __param(4, IWorkspaceContextService)
], WorkspaceLaunch);
let UserLaunch = class UserLaunch2 extends AbstractLaunch {
  constructor(configurationManager, adapterManager, configurationService, preferencesService) {
    super(configurationManager, adapterManager);
    this.configurationService = configurationService;
    this.preferencesService = preferencesService;
  }
  get workspace() {
    return void 0;
  }
  get uri() {
    return this.preferencesService.userSettingsResource;
  }
  get name() {
    return localize("user settings", "user settings");
  }
  get hidden() {
    return true;
  }
  getConfig() {
    return this.configurationService.inspect("launch").userValue;
  }
  async openConfigFile({ preserveFocus, type, useInitialContent }) {
    const editor = await this.preferencesService.openUserSettings({ jsonEditor: true, preserveFocus, revealSetting: { key: "launch" } });
    return {
      editor: withUndefinedAsNull(editor),
      created: false
    };
  }
};
UserLaunch = __decorate([
  __param(2, IConfigurationService),
  __param(3, IPreferencesService)
], UserLaunch);
const rangeRe = /range=([0-9]+):([0-9]+)/;
class DebugMemoryFileSystemProvider {
  constructor(debugService) {
    this.debugService = debugService;
    this.memoryFdCounter = 0;
    this.fdMemory = /* @__PURE__ */ new Map();
    this.changeEmitter = new Emitter();
    this.onDidChangeCapabilities = Event.None;
    this.onDidChangeFile = this.changeEmitter.event;
    this.capabilities = 0 | 1024 | 4;
    debugService.onDidEndSession((session) => {
      for (const [fd, memory] of this.fdMemory) {
        if (memory.session === session) {
          this.close(fd);
        }
      }
    });
  }
  watch(resource, opts) {
    if (opts.recursive) {
      return toDisposable(() => {
      });
    }
    const { session, memoryReference, offset } = this.parseUri(resource);
    const disposable = new DisposableStore();
    disposable.add(session.onDidChangeState(() => {
      if (session.state === 3 || session.state === 0) {
        this.changeEmitter.fire([{ type: 2, resource }]);
      }
    }));
    disposable.add(session.onDidInvalidateMemory((e) => {
      if (e.body.memoryReference !== memoryReference) {
        return;
      }
      if (offset && (e.body.offset >= offset.toOffset || e.body.offset + e.body.count < offset.fromOffset)) {
        return;
      }
      this.changeEmitter.fire([{ resource, type: 0 }]);
    }));
    return disposable;
  }
  stat(file) {
    const { readOnly } = this.parseUri(file);
    return Promise.resolve({
      type: FileType.File,
      mtime: 0,
      ctime: 0,
      size: 0,
      permissions: readOnly ? FilePermission.Readonly : void 0
    });
  }
  mkdir() {
    throw createFileSystemProviderError(`Not allowed`, FileSystemProviderErrorCode.NoPermissions);
  }
  readdir() {
    throw createFileSystemProviderError(`Not allowed`, FileSystemProviderErrorCode.NoPermissions);
  }
  delete() {
    throw createFileSystemProviderError(`Not allowed`, FileSystemProviderErrorCode.NoPermissions);
  }
  rename() {
    throw createFileSystemProviderError(`Not allowed`, FileSystemProviderErrorCode.NoPermissions);
  }
  open(resource, _opts) {
    const { session, memoryReference, offset } = this.parseUri(resource);
    const fd = this.memoryFdCounter++;
    let region = session.getMemory(memoryReference);
    if (offset) {
      region = new MemoryRegionView(region, offset);
    }
    this.fdMemory.set(fd, { session, region });
    return Promise.resolve(fd);
  }
  close(fd) {
    var _a2;
    (_a2 = this.fdMemory.get(fd)) == null ? void 0 : _a2.region.dispose();
    this.fdMemory.delete(fd);
    return Promise.resolve();
  }
  async writeFile(resource, content) {
    const { offset } = this.parseUri(resource);
    if (!offset) {
      throw createFileSystemProviderError(`Range must be present to read a file`, FileSystemProviderErrorCode.FileNotFound);
    }
    const fd = await this.open(resource, { create: false });
    try {
      await this.write(fd, offset.fromOffset, content, 0, content.length);
    } finally {
      this.close(fd);
    }
  }
  async readFile(resource) {
    const { offset } = this.parseUri(resource);
    if (!offset) {
      throw createFileSystemProviderError(`Range must be present to read a file`, FileSystemProviderErrorCode.FileNotFound);
    }
    const data = new Uint8Array(offset.toOffset - offset.fromOffset);
    const fd = await this.open(resource, { create: false });
    try {
      await this.read(fd, offset.fromOffset, data, 0, data.length);
      return data;
    } finally {
      this.close(fd);
    }
  }
  async read(fd, pos, data, offset, length) {
    const memory = this.fdMemory.get(fd);
    if (!memory) {
      throw createFileSystemProviderError(`No file with that descriptor open`, FileSystemProviderErrorCode.Unavailable);
    }
    const ranges = await memory.region.read(pos, length);
    let readSoFar = 0;
    for (const range of ranges) {
      switch (range.type) {
        case 1:
          return readSoFar;
        case 2:
          if (readSoFar > 0) {
            return readSoFar;
          } else {
            throw createFileSystemProviderError(range.error, FileSystemProviderErrorCode.Unknown);
          }
        case 0: {
          const start = Math.max(0, pos - range.offset);
          const toWrite = range.data.slice(start, Math.min(range.data.byteLength, start + (length - readSoFar)));
          data.set(toWrite.buffer, offset + readSoFar);
          readSoFar += toWrite.byteLength;
          break;
        }
        default:
          assertNever();
      }
    }
    return readSoFar;
  }
  write(fd, pos, data, offset, length) {
    const memory = this.fdMemory.get(fd);
    if (!memory) {
      throw createFileSystemProviderError(`No file with that descriptor open`, FileSystemProviderErrorCode.Unavailable);
    }
    return memory.region.write(pos, VSBuffer.wrap(data).slice(offset, offset + length));
  }
  parseUri(uri) {
    if (uri.scheme !== DEBUG_MEMORY_SCHEME) {
      throw createFileSystemProviderError(`Cannot open file with scheme ${uri.scheme}`, FileSystemProviderErrorCode.FileNotFound);
    }
    const session = this.debugService.getModel().getSession(uri.authority);
    if (!session) {
      throw createFileSystemProviderError(`Debug session not found`, FileSystemProviderErrorCode.FileNotFound);
    }
    let offset;
    const rangeMatch = rangeRe.exec(uri.query);
    if (rangeMatch) {
      offset = { fromOffset: Number(rangeMatch[1]), toOffset: Number(rangeMatch[2]) };
    }
    const [, memoryReference] = uri.path.split("/");
    return {
      session,
      offset,
      readOnly: !session.capabilities.supportsWriteMemoryRequest,
      sessionId: uri.authority,
      memoryReference: decodeURIComponent(memoryReference)
    };
  }
}
class MemoryRegionView extends Disposable {
  constructor(parent, range) {
    super();
    this.parent = parent;
    this.range = range;
    this.invalidateEmitter = new Emitter();
    this.onDidInvalidate = this.invalidateEmitter.event;
    this.width = this.range.toOffset - this.range.fromOffset;
    this.writable = parent.writable;
    this._register(parent);
    this._register(parent.onDidInvalidate((e) => {
      const fromOffset = clamp(e.fromOffset - range.fromOffset, 0, this.width);
      const toOffset = clamp(e.toOffset - range.fromOffset, 0, this.width);
      if (toOffset > fromOffset) {
        this.invalidateEmitter.fire({ fromOffset, toOffset });
      }
    }));
  }
  read(fromOffset, toOffset) {
    if (fromOffset < 0) {
      throw new RangeError(`Invalid fromOffset: ${fromOffset}`);
    }
    return this.parent.read(this.range.fromOffset + fromOffset, this.range.fromOffset + Math.min(toOffset, this.width));
  }
  write(offset, data) {
    return this.parent.write(this.range.fromOffset + offset, data);
  }
}
let RawDebugSession = class RawDebugSession2 {
  constructor(debugAdapter, dbgr, sessionId, name, extensionHostDebugService, openerService, notificationService, dialogSerivce) {
    this.dbgr = dbgr;
    this.sessionId = sessionId;
    this.name = name;
    this.extensionHostDebugService = extensionHostDebugService;
    this.openerService = openerService;
    this.notificationService = notificationService;
    this.dialogSerivce = dialogSerivce;
    this.allThreadsContinued = true;
    this._readyForBreakpoints = false;
    this.debugAdapterStopped = false;
    this.inShutdown = false;
    this.terminated = false;
    this.firedAdapterExitEvent = false;
    this.startTime = 0;
    this.didReceiveStoppedEvent = false;
    this._onDidInitialize = new Emitter();
    this._onDidStop = new Emitter();
    this._onDidContinued = new Emitter();
    this._onDidTerminateDebugee = new Emitter();
    this._onDidExitDebugee = new Emitter();
    this._onDidThread = new Emitter();
    this._onDidOutput = new Emitter();
    this._onDidBreakpoint = new Emitter();
    this._onDidLoadedSource = new Emitter();
    this._onDidProgressStart = new Emitter();
    this._onDidProgressUpdate = new Emitter();
    this._onDidProgressEnd = new Emitter();
    this._onDidInvalidated = new Emitter();
    this._onDidInvalidateMemory = new Emitter();
    this._onDidCustomEvent = new Emitter();
    this._onDidEvent = new Emitter();
    this._onDidExitAdapter = new Emitter();
    this.stoppedSinceLastStep = false;
    this.toDispose = [];
    this.debugAdapter = debugAdapter;
    this._capabilities = /* @__PURE__ */ Object.create(null);
    this.toDispose.push(this.debugAdapter.onError((err) => {
      this.shutdown(err);
    }));
    this.toDispose.push(this.debugAdapter.onExit((code) => {
      if (code !== 0) {
        this.shutdown(new Error(`exit code: ${code}`));
      } else {
        this.shutdown();
      }
    }));
    this.debugAdapter.onEvent((event) => {
      switch (event.event) {
        case "initialized":
          this._readyForBreakpoints = true;
          this._onDidInitialize.fire(event);
          break;
        case "loadedSource":
          this._onDidLoadedSource.fire(event);
          break;
        case "capabilities":
          if (event.body) {
            const capabilities = event.body.capabilities;
            this.mergeCapabilities(capabilities);
          }
          break;
        case "stopped":
          this.didReceiveStoppedEvent = true;
          this.stoppedSinceLastStep = true;
          this._onDidStop.fire(event);
          break;
        case "continued":
          this.allThreadsContinued = event.body.allThreadsContinued === false ? false : true;
          this._onDidContinued.fire(event);
          break;
        case "thread":
          this._onDidThread.fire(event);
          break;
        case "output":
          this._onDidOutput.fire(event);
          break;
        case "breakpoint":
          this._onDidBreakpoint.fire(event);
          break;
        case "terminated":
          this._onDidTerminateDebugee.fire(event);
          break;
        case "exit":
          this._onDidExitDebugee.fire(event);
          break;
        case "progressStart":
          this._onDidProgressStart.fire(event);
          break;
        case "progressUpdate":
          this._onDidProgressUpdate.fire(event);
          break;
        case "progressEnd":
          this._onDidProgressEnd.fire(event);
          break;
        case "invalidated":
          this._onDidInvalidated.fire(event);
          break;
        case "memory":
          this._onDidInvalidateMemory.fire(event);
          break;
        case "process":
          break;
        case "module":
          break;
        default:
          this._onDidCustomEvent.fire(event);
          break;
      }
      this._onDidEvent.fire(event);
    });
    this.debugAdapter.onRequest((request) => this.dispatchRequest(request));
  }
  get isInShutdown() {
    return this.inShutdown;
  }
  get onDidExitAdapter() {
    return this._onDidExitAdapter.event;
  }
  get capabilities() {
    return this._capabilities;
  }
  get readyForBreakpoints() {
    return this._readyForBreakpoints;
  }
  get onDidInitialize() {
    return this._onDidInitialize.event;
  }
  get onDidStop() {
    return this._onDidStop.event;
  }
  get onDidContinued() {
    return this._onDidContinued.event;
  }
  get onDidTerminateDebugee() {
    return this._onDidTerminateDebugee.event;
  }
  get onDidExitDebugee() {
    return this._onDidExitDebugee.event;
  }
  get onDidThread() {
    return this._onDidThread.event;
  }
  get onDidOutput() {
    return this._onDidOutput.event;
  }
  get onDidBreakpoint() {
    return this._onDidBreakpoint.event;
  }
  get onDidLoadedSource() {
    return this._onDidLoadedSource.event;
  }
  get onDidCustomEvent() {
    return this._onDidCustomEvent.event;
  }
  get onDidProgressStart() {
    return this._onDidProgressStart.event;
  }
  get onDidProgressUpdate() {
    return this._onDidProgressUpdate.event;
  }
  get onDidProgressEnd() {
    return this._onDidProgressEnd.event;
  }
  get onDidInvalidated() {
    return this._onDidInvalidated.event;
  }
  get onDidInvalidateMemory() {
    return this._onDidInvalidateMemory.event;
  }
  get onDidEvent() {
    return this._onDidEvent.event;
  }
  async start() {
    if (!this.debugAdapter) {
      return Promise.reject(new Error(localize("noDebugAdapterStart", "No debug adapter, can not start debug session.")));
    }
    await this.debugAdapter.startSession();
    this.startTime = (/* @__PURE__ */ new Date()).getTime();
  }
  async initialize(args) {
    const response = await this.send("initialize", args, void 0, void 0, false);
    if (response) {
      this.mergeCapabilities(response.body);
    }
    return response;
  }
  disconnect(args) {
    const terminateDebuggee = this.capabilities.supportTerminateDebuggee ? args.terminateDebuggee : void 0;
    const suspendDebuggee = this.capabilities.supportTerminateDebuggee && this.capabilities.supportSuspendDebuggee ? args.suspendDebuggee : void 0;
    return this.shutdown(void 0, args.restart, terminateDebuggee, suspendDebuggee);
  }
  async launchOrAttach(config) {
    const response = await this.send(config.request, config, void 0, void 0, false);
    if (response) {
      this.mergeCapabilities(response.body);
    }
    return response;
  }
  terminate(restart = false) {
    if (this.capabilities.supportsTerminateRequest) {
      if (!this.terminated) {
        this.terminated = true;
        return this.send("terminate", { restart }, void 0);
      }
      return this.disconnect({ terminateDebuggee: true, restart });
    }
    return Promise.reject(new Error("terminated not supported"));
  }
  restart(args) {
    if (this.capabilities.supportsRestartRequest) {
      return this.send("restart", args);
    }
    return Promise.reject(new Error("restart not supported"));
  }
  async next(args) {
    this.stoppedSinceLastStep = false;
    const response = await this.send("next", args);
    if (!this.stoppedSinceLastStep) {
      this.fireSimulatedContinuedEvent(args.threadId);
    }
    return response;
  }
  async stepIn(args) {
    this.stoppedSinceLastStep = false;
    const response = await this.send("stepIn", args);
    if (!this.stoppedSinceLastStep) {
      this.fireSimulatedContinuedEvent(args.threadId);
    }
    return response;
  }
  async stepOut(args) {
    this.stoppedSinceLastStep = false;
    const response = await this.send("stepOut", args);
    if (!this.stoppedSinceLastStep) {
      this.fireSimulatedContinuedEvent(args.threadId);
    }
    return response;
  }
  async continue(args) {
    this.stoppedSinceLastStep = false;
    const response = await this.send("continue", args);
    if (response && response.body && response.body.allThreadsContinued !== void 0) {
      this.allThreadsContinued = response.body.allThreadsContinued;
    }
    if (!this.stoppedSinceLastStep) {
      this.fireSimulatedContinuedEvent(args.threadId, this.allThreadsContinued);
    }
    return response;
  }
  pause(args) {
    return this.send("pause", args);
  }
  terminateThreads(args) {
    if (this.capabilities.supportsTerminateThreadsRequest) {
      return this.send("terminateThreads", args);
    }
    return Promise.reject(new Error("terminateThreads not supported"));
  }
  setVariable(args) {
    if (this.capabilities.supportsSetVariable) {
      return this.send("setVariable", args);
    }
    return Promise.reject(new Error("setVariable not supported"));
  }
  setExpression(args) {
    if (this.capabilities.supportsSetExpression) {
      return this.send("setExpression", args);
    }
    return Promise.reject(new Error("setExpression not supported"));
  }
  async restartFrame(args, threadId) {
    if (this.capabilities.supportsRestartFrame) {
      this.stoppedSinceLastStep = false;
      const response = await this.send("restartFrame", args);
      if (!this.stoppedSinceLastStep) {
        this.fireSimulatedContinuedEvent(threadId);
      }
      return response;
    }
    return Promise.reject(new Error("restartFrame not supported"));
  }
  stepInTargets(args) {
    if (this.capabilities.supportsStepInTargetsRequest) {
      return this.send("stepInTargets", args);
    }
    return Promise.reject(new Error("stepInTargets not supported"));
  }
  completions(args, token) {
    if (this.capabilities.supportsCompletionsRequest) {
      return this.send("completions", args, token);
    }
    return Promise.reject(new Error("completions not supported"));
  }
  setBreakpoints(args) {
    return this.send("setBreakpoints", args);
  }
  setFunctionBreakpoints(args) {
    if (this.capabilities.supportsFunctionBreakpoints) {
      return this.send("setFunctionBreakpoints", args);
    }
    return Promise.reject(new Error("setFunctionBreakpoints not supported"));
  }
  dataBreakpointInfo(args) {
    if (this.capabilities.supportsDataBreakpoints) {
      return this.send("dataBreakpointInfo", args);
    }
    return Promise.reject(new Error("dataBreakpointInfo not supported"));
  }
  setDataBreakpoints(args) {
    if (this.capabilities.supportsDataBreakpoints) {
      return this.send("setDataBreakpoints", args);
    }
    return Promise.reject(new Error("setDataBreakpoints not supported"));
  }
  setExceptionBreakpoints(args) {
    return this.send("setExceptionBreakpoints", args);
  }
  breakpointLocations(args) {
    if (this.capabilities.supportsBreakpointLocationsRequest) {
      return this.send("breakpointLocations", args);
    }
    return Promise.reject(new Error("breakpointLocations is not supported"));
  }
  configurationDone() {
    if (this.capabilities.supportsConfigurationDoneRequest) {
      return this.send("configurationDone", null);
    }
    return Promise.reject(new Error("configurationDone not supported"));
  }
  stackTrace(args, token) {
    return this.send("stackTrace", args, token);
  }
  exceptionInfo(args) {
    if (this.capabilities.supportsExceptionInfoRequest) {
      return this.send("exceptionInfo", args);
    }
    return Promise.reject(new Error("exceptionInfo not supported"));
  }
  scopes(args, token) {
    return this.send("scopes", args, token);
  }
  variables(args, token) {
    return this.send("variables", args, token);
  }
  source(args) {
    return this.send("source", args);
  }
  loadedSources(args) {
    if (this.capabilities.supportsLoadedSourcesRequest) {
      return this.send("loadedSources", args);
    }
    return Promise.reject(new Error("loadedSources not supported"));
  }
  threads() {
    return this.send("threads", null);
  }
  evaluate(args) {
    return this.send("evaluate", args);
  }
  async stepBack(args) {
    if (this.capabilities.supportsStepBack) {
      this.stoppedSinceLastStep = false;
      const response = await this.send("stepBack", args);
      if (!this.stoppedSinceLastStep) {
        this.fireSimulatedContinuedEvent(args.threadId);
      }
      return response;
    }
    return Promise.reject(new Error("stepBack not supported"));
  }
  async reverseContinue(args) {
    if (this.capabilities.supportsStepBack) {
      this.stoppedSinceLastStep = false;
      const response = await this.send("reverseContinue", args);
      if (!this.stoppedSinceLastStep) {
        this.fireSimulatedContinuedEvent(args.threadId);
      }
      return response;
    }
    return Promise.reject(new Error("reverseContinue not supported"));
  }
  gotoTargets(args) {
    if (this.capabilities.supportsGotoTargetsRequest) {
      return this.send("gotoTargets", args);
    }
    return Promise.reject(new Error("gotoTargets is not supported"));
  }
  async goto(args) {
    if (this.capabilities.supportsGotoTargetsRequest) {
      this.stoppedSinceLastStep = false;
      const response = await this.send("goto", args);
      if (!this.stoppedSinceLastStep) {
        this.fireSimulatedContinuedEvent(args.threadId);
      }
      return response;
    }
    return Promise.reject(new Error("goto is not supported"));
  }
  async setInstructionBreakpoints(args) {
    if (this.capabilities.supportsInstructionBreakpoints) {
      return await this.send("setInstructionBreakpoints", args);
    }
    return Promise.reject(new Error("setInstructionBreakpoints is not supported"));
  }
  async disassemble(args) {
    if (this.capabilities.supportsDisassembleRequest) {
      return await this.send("disassemble", args);
    }
    return Promise.reject(new Error("disassemble is not supported"));
  }
  async readMemory(args) {
    if (this.capabilities.supportsReadMemoryRequest) {
      return await this.send("readMemory", args);
    }
    return Promise.reject(new Error("readMemory is not supported"));
  }
  async writeMemory(args) {
    if (this.capabilities.supportsWriteMemoryRequest) {
      return await this.send("writeMemory", args);
    }
    return Promise.reject(new Error("writeMemory is not supported"));
  }
  cancel(args) {
    return this.send("cancel", args);
  }
  custom(request, args) {
    return this.send(request, args);
  }
  async shutdown(error, restart = false, terminateDebuggee = void 0, suspendDebuggee = void 0) {
    if (!this.inShutdown) {
      this.inShutdown = true;
      if (this.debugAdapter) {
        try {
          const args = { restart };
          if (typeof terminateDebuggee === "boolean") {
            args.terminateDebuggee = terminateDebuggee;
          }
          if (typeof suspendDebuggee === "boolean") {
            args.suspendDebuggee = suspendDebuggee;
          }
          await this.send("disconnect", args, void 0, error ? 200 : 2e3);
        } catch (e) {
        } finally {
          await this.stopAdapter(error);
        }
      } else {
        return this.stopAdapter(error);
      }
    }
  }
  async stopAdapter(error) {
    try {
      if (this.debugAdapter) {
        const da = this.debugAdapter;
        this.debugAdapter = null;
        await da.stopSession();
        this.debugAdapterStopped = true;
      }
    } finally {
      this.fireAdapterExitEvent(error);
    }
  }
  fireAdapterExitEvent(error) {
    if (!this.firedAdapterExitEvent) {
      this.firedAdapterExitEvent = true;
      const e = {
        emittedStopped: this.didReceiveStoppedEvent,
        sessionLengthInSeconds: ((/* @__PURE__ */ new Date()).getTime() - this.startTime) / 1e3
      };
      if (error && !this.debugAdapterStopped) {
        e.error = error;
      }
      this._onDidExitAdapter.fire(e);
    }
  }
  async dispatchRequest(request) {
    const response = {
      type: "response",
      seq: 0,
      command: request.command,
      request_seq: request.seq,
      success: true
    };
    const safeSendResponse = (response2) => this.debugAdapter && this.debugAdapter.sendResponse(response2);
    if (request.command === "launchVSCode") {
      try {
        let result = await this.launchVsCode(request.arguments);
        if (!result.success) {
          const { confirmed } = await this.dialogSerivce.confirm({
            type: Severity$1.Warning,
            message: localize(
              "canNotStart",
              "The debugger needs to open a new tab or window for the debuggee but the browser prevented this. You must give permission to continue."
            ),
            primaryButton: localize({ key: "continue", comment: ["&& denotes a mnemonic"] }, "&&Continue")
          });
          if (confirmed) {
            result = await this.launchVsCode(request.arguments);
          } else {
            response.success = false;
            safeSendResponse(response);
            await this.shutdown();
          }
        }
        response.body = {
          rendererDebugPort: result.rendererDebugPort
        };
        safeSendResponse(response);
      } catch (err) {
        response.success = false;
        response.message = err.message;
        safeSendResponse(response);
      }
    } else if (request.command === "runInTerminal") {
      try {
        const shellProcessId = await this.dbgr.runInTerminal(request.arguments, this.sessionId);
        const resp = response;
        resp.body = {};
        if (typeof shellProcessId === "number") {
          resp.body.shellProcessId = shellProcessId;
        }
        safeSendResponse(resp);
      } catch (err) {
        response.success = false;
        response.message = err.message;
        safeSendResponse(response);
      }
    } else if (request.command === "startDebugging") {
      try {
        const args = request.arguments;
        const config = {
          ...args.configuration,
          ...{
            request: args.request,
            type: this.dbgr.type,
            name: args.configuration.name || this.name
          }
        };
        const success = await this.dbgr.startDebugging(config, this.sessionId);
        if (success) {
          safeSendResponse(response);
        } else {
          response.success = false;
          response.message = "Failed to start debugging";
          safeSendResponse(response);
        }
      } catch (err) {
        response.success = false;
        response.message = err.message;
        safeSendResponse(response);
      }
    } else {
      response.success = false;
      response.message = `unknown request '${request.command}'`;
      safeSendResponse(response);
    }
  }
  launchVsCode(vscodeArgs) {
    const args = [];
    for (const arg of vscodeArgs.args) {
      const a2 = (arg.prefix || "") + (arg.path || "");
      const match = /^--(.+)=(.+)$/.exec(a2);
      if (match && match.length === 3) {
        const key = match[1];
        let value = match[2];
        if ((key === "file-uri" || key === "folder-uri") && !isUri(arg.path)) {
          value = isUri(value) ? value : URI.file(value).toString();
        }
        args.push(`--${key}=${value}`);
      } else {
        args.push(a2);
      }
    }
    if (vscodeArgs.env) {
      args.push(`--extensionEnvironment=${JSON.stringify(vscodeArgs.env)}`);
    }
    return this.extensionHostDebugService.openExtensionDevelopmentHostWindow(args, !!vscodeArgs.debugRenderer);
  }
  send(command, args, token, timeout2, showErrors = true) {
    return new Promise((completeDispatch, errorDispatch) => {
      if (!this.debugAdapter) {
        if (this.inShutdown) {
          completeDispatch(void 0);
        } else {
          errorDispatch(new Error(localize(
            "noDebugAdapter",
            "No debugger available found. Can not send '{0}'.",
            command
          )));
        }
        return;
      }
      let cancelationListener;
      const requestId = this.debugAdapter.sendRequest(command, args, (response) => {
        cancelationListener == null ? void 0 : cancelationListener.dispose();
        if (response.success) {
          completeDispatch(response);
        } else {
          errorDispatch(response);
        }
      }, timeout2);
      if (token) {
        cancelationListener = token.onCancellationRequested(() => {
          cancelationListener.dispose();
          if (this.capabilities.supportsCancelRequest) {
            this.cancel({ requestId });
          }
        });
      }
    }).then(void 0, (err) => Promise.reject(this.handleErrorResponse(err, showErrors)));
  }
  handleErrorResponse(errorResponse, showErrors) {
    var _a2;
    if (errorResponse.command === "canceled" && errorResponse.message === "canceled") {
      return new CancellationError();
    }
    const error = (_a2 = errorResponse == null ? void 0 : errorResponse.body) == null ? void 0 : _a2.error;
    const errorMessage = (errorResponse == null ? void 0 : errorResponse.message) || "";
    const userMessage = error ? formatPII(error.format, false, error.variables) : errorMessage;
    const url = error == null ? void 0 : error.url;
    if (error && url) {
      const label = error.urlLabel ? error.urlLabel : localize("moreInfo", "More Info");
      const uri = URI.parse(url);
      const actionId = uri.scheme === Schemas.command ? "debug.moreInfo.command" : "debug.moreInfo";
      return createErrorWithActions(userMessage, [toAction({ id: actionId, label, run: () => this.openerService.open(uri, { allowCommands: true }) })]);
    }
    if (showErrors && error && error.format && error.showUser) {
      this.notificationService.error(userMessage);
    }
    const result = new ErrorNoTelemetry(userMessage);
    result.showUser = error == null ? void 0 : error.showUser;
    return result;
  }
  mergeCapabilities(capabilities) {
    if (capabilities) {
      this._capabilities = mixin(this._capabilities, capabilities);
    }
  }
  fireSimulatedContinuedEvent(threadId, allThreadsContinued = false) {
    this._onDidContinued.fire({
      type: "event",
      event: "continued",
      body: {
        threadId,
        allThreadsContinued
      },
      seq: void 0
    });
  }
  dispose() {
    dispose(this.toDispose);
  }
};
RawDebugSession = __decorate([
  __param(4, IExtensionHostDebugService),
  __param(5, IOpenerService),
  __param(6, INotificationService),
  __param(7, IDialogService)
], RawDebugSession);
const MAX_REPL_LENGTH = 1e4;
let topReplElementCounter = 0;
const getUniqueId = () => `topReplElement:${topReplElementCounter++}`;
class ReplOutputElement {
  constructor(session, id, value, severity, sourceData, expression) {
    this.session = session;
    this.id = id;
    this.value = value;
    this.severity = severity;
    this.sourceData = sourceData;
    this.expression = expression;
    this._count = 1;
    this._onDidChangeCount = new Emitter();
  }
  toString(includeSource = false) {
    let valueRespectCount = this.value;
    for (let i = 1; i < this.count; i++) {
      valueRespectCount += (valueRespectCount.endsWith("\n") ? "" : "\n") + this.value;
    }
    const sourceStr = this.sourceData && includeSource ? ` ${this.sourceData.source.name}` : "";
    return valueRespectCount + sourceStr;
  }
  getId() {
    return this.id;
  }
  getChildren() {
    var _a2;
    return ((_a2 = this.expression) == null ? void 0 : _a2.getChildren()) || Promise.resolve([]);
  }
  set count(value) {
    this._count = value;
    this._onDidChangeCount.fire();
  }
  get count() {
    return this._count;
  }
  get onDidChangeCount() {
    return this._onDidChangeCount.event;
  }
  get hasChildren() {
    var _a2;
    return !!((_a2 = this.expression) == null ? void 0 : _a2.hasChildren);
  }
}
class ReplVariableElement {
  constructor(expression, severity, sourceData) {
    this.expression = expression;
    this.severity = severity;
    this.sourceData = sourceData;
    this.id = generateUuid();
    this.hasChildren = expression.hasChildren;
  }
  getChildren() {
    return this.expression.getChildren();
  }
  toString() {
    return this.expression.toString();
  }
  getId() {
    return this.id;
  }
}
const _RawObjectReplElement = class _RawObjectReplElement {
  constructor(id, name, valueObj, sourceData, annotation) {
    this.id = id;
    this.name = name;
    this.valueObj = valueObj;
    this.sourceData = sourceData;
    this.annotation = annotation;
  }
  getId() {
    return this.id;
  }
  get value() {
    if (this.valueObj === null) {
      return "null";
    } else if (Array.isArray(this.valueObj)) {
      return `Array[${this.valueObj.length}]`;
    } else if (isObject(this.valueObj)) {
      return "Object";
    } else if (isString(this.valueObj)) {
      return `"${this.valueObj}"`;
    }
    return String(this.valueObj) || "";
  }
  get hasChildren() {
    return Array.isArray(this.valueObj) && this.valueObj.length > 0 || isObject(this.valueObj) && Object.getOwnPropertyNames(this.valueObj).length > 0;
  }
  evaluateLazy() {
    throw new Error("Method not implemented.");
  }
  getChildren() {
    let result = [];
    if (Array.isArray(this.valueObj)) {
      result = this.valueObj.slice(0, _RawObjectReplElement.MAX_CHILDREN).map((v, index) => new _RawObjectReplElement(`${this.id}:${index}`, String(index), v));
    } else if (isObject(this.valueObj)) {
      result = Object.getOwnPropertyNames(this.valueObj).slice(0, _RawObjectReplElement.MAX_CHILDREN).map((key, index) => new _RawObjectReplElement(`${this.id}:${index}`, key, this.valueObj[key]));
    }
    return Promise.resolve(result);
  }
  toString() {
    return `${this.name}
${this.value}`;
  }
};
_RawObjectReplElement.MAX_CHILDREN = 1e3;
let RawObjectReplElement = _RawObjectReplElement;
class ReplEvaluationInput {
  constructor(value) {
    this.value = value;
    this.id = generateUuid();
  }
  toString() {
    return this.value;
  }
  getId() {
    return this.id;
  }
}
class ReplEvaluationResult extends ExpressionContainer {
  get available() {
    return this._available;
  }
  constructor(originalExpression) {
    super(void 0, void 0, 0, generateUuid());
    this.originalExpression = originalExpression;
    this._available = true;
  }
  async evaluateExpression(expression, session, stackFrame, context) {
    const result = await super.evaluateExpression(expression, session, stackFrame, context);
    this._available = result;
    return result;
  }
  toString() {
    return `${this.value}`;
  }
}
const _ReplGroup = class _ReplGroup {
  constructor(name, autoExpand, sourceData) {
    this.name = name;
    this.autoExpand = autoExpand;
    this.sourceData = sourceData;
    this.children = [];
    this.ended = false;
    this.id = `replGroup:${_ReplGroup.COUNTER++}`;
  }
  get hasChildren() {
    return true;
  }
  getId() {
    return this.id;
  }
  toString(includeSource = false) {
    const sourceStr = includeSource && this.sourceData ? ` ${this.sourceData.source.name}` : "";
    return this.name + sourceStr;
  }
  addChild(child) {
    const lastElement = this.children.length ? this.children[this.children.length - 1] : void 0;
    if (lastElement instanceof _ReplGroup && !lastElement.hasEnded) {
      lastElement.addChild(child);
    } else {
      this.children.push(child);
    }
  }
  getChildren() {
    return this.children;
  }
  end() {
    const lastElement = this.children.length ? this.children[this.children.length - 1] : void 0;
    if (lastElement instanceof _ReplGroup && !lastElement.hasEnded) {
      lastElement.end();
    } else {
      this.ended = true;
    }
  }
  get hasEnded() {
    return this.ended;
  }
};
_ReplGroup.COUNTER = 0;
let ReplGroup = _ReplGroup;
function areSourcesEqual(first, second) {
  if (!first && !second) {
    return true;
  }
  if (first && second) {
    return first.column === second.column && first.lineNumber === second.lineNumber && first.source.uri.toString() === second.source.uri.toString();
  }
  return false;
}
class ReplModel {
  constructor(configurationService) {
    this.configurationService = configurationService;
    this.replElements = [];
    this._onDidChangeElements = new Emitter();
    this.onDidChangeElements = this._onDidChangeElements.event;
  }
  getReplElements() {
    return this.replElements;
  }
  async addReplExpression(session, stackFrame, name) {
    this.addReplElement(new ReplEvaluationInput(name));
    const result = new ReplEvaluationResult(name);
    await result.evaluateExpression(name, session, stackFrame, "repl");
    this.addReplElement(result);
  }
  appendToRepl(session, { output, expression, sev, source }) {
    const clearAnsiSequence = "\x1B[2J";
    const clearAnsiIndex = output.lastIndexOf(clearAnsiSequence);
    if (clearAnsiIndex !== -1) {
      this.removeReplExpressions();
      this.appendToRepl(session, { output: localize("consoleCleared", "Console was cleared"), sev: Severity.Ignore });
      output = output.substring(clearAnsiIndex + clearAnsiSequence.length);
    }
    if (expression) {
      this.addReplElement(output ? new ReplOutputElement(session, getUniqueId(), output, sev, source, expression) : new ReplVariableElement(expression, sev, source));
      return;
    }
    const previousElement = this.replElements.length ? this.replElements[this.replElements.length - 1] : void 0;
    if (previousElement instanceof ReplOutputElement && previousElement.severity === sev) {
      const config = this.configurationService.getValue("debug");
      if (previousElement.value === output && areSourcesEqual(previousElement.sourceData, source) && config.console.collapseIdenticalLines) {
        previousElement.count++;
        return;
      }
      if (!previousElement.value.endsWith("\n") && !previousElement.value.endsWith("\r\n") && previousElement.count === 1) {
        this.replElements[this.replElements.length - 1] = new ReplOutputElement(session, getUniqueId(), previousElement.value + output, sev, source);
        this._onDidChangeElements.fire();
        return;
      }
    }
    const element = new ReplOutputElement(session, getUniqueId(), output, sev, source);
    this.addReplElement(element);
  }
  startGroup(name, autoExpand, sourceData) {
    const group = new ReplGroup(name, autoExpand, sourceData);
    this.addReplElement(group);
  }
  endGroup() {
    const lastElement = this.replElements[this.replElements.length - 1];
    if (lastElement instanceof ReplGroup) {
      lastElement.end();
    }
  }
  addReplElement(newElement) {
    const lastElement = this.replElements.length ? this.replElements[this.replElements.length - 1] : void 0;
    if (lastElement instanceof ReplGroup && !lastElement.hasEnded) {
      lastElement.addChild(newElement);
    } else {
      this.replElements.push(newElement);
      if (this.replElements.length > MAX_REPL_LENGTH) {
        this.replElements.splice(0, this.replElements.length - MAX_REPL_LENGTH);
      }
    }
    this._onDidChangeElements.fire();
  }
  removeReplExpressions() {
    if (this.replElements.length > 0) {
      this.replElements = [];
      this._onDidChangeElements.fire();
    }
  }
  clone() {
    const newRepl = new ReplModel(this.configurationService);
    newRepl.replElements = this.replElements.slice();
    return newRepl;
  }
}
let DebugSession = class DebugSession2 {
  constructor(id, _configuration, root, model, options, debugService, telemetryService, hostService, configurationService, paneCompositeService, workspaceContextService, productService, notificationService, lifecycleService, uriIdentityService, instantiationService, customEndpointTelemetryService, workbenchEnvironmentService, logService) {
    this.id = id;
    this._configuration = _configuration;
    this.root = root;
    this.model = model;
    this.debugService = debugService;
    this.telemetryService = telemetryService;
    this.hostService = hostService;
    this.configurationService = configurationService;
    this.paneCompositeService = paneCompositeService;
    this.workspaceContextService = workspaceContextService;
    this.productService = productService;
    this.notificationService = notificationService;
    this.uriIdentityService = uriIdentityService;
    this.instantiationService = instantiationService;
    this.customEndpointTelemetryService = customEndpointTelemetryService;
    this.workbenchEnvironmentService = workbenchEnvironmentService;
    this.logService = logService;
    this.initialized = false;
    this.sources = /* @__PURE__ */ new Map();
    this.threads = /* @__PURE__ */ new Map();
    this.threadIds = [];
    this.cancellationMap = /* @__PURE__ */ new Map();
    this.rawListeners = [];
    this.stoppedDetails = [];
    this._onDidChangeState = new Emitter();
    this._onDidEndAdapter = new Emitter();
    this._onDidLoadedSource = new Emitter();
    this._onDidCustomEvent = new Emitter();
    this._onDidProgressStart = new Emitter();
    this._onDidProgressUpdate = new Emitter();
    this._onDidProgressEnd = new Emitter();
    this._onDidInvalidMemory = new Emitter();
    this._onDidChangeREPLElements = new Emitter();
    this._onDidChangeName = new Emitter();
    this._options = options || {};
    this.parentSession = this._options.parentSession;
    if (this.hasSeparateRepl()) {
      this.repl = new ReplModel(this.configurationService);
    } else {
      this.repl = this.parentSession.repl;
    }
    const toDispose = new DisposableStore();
    const replListener = toDispose.add(new MutableDisposable());
    replListener.value = this.repl.onDidChangeElements(() => this._onDidChangeREPLElements.fire());
    if (lifecycleService) {
      toDispose.add(lifecycleService.onWillShutdown(() => {
        this.shutdown();
        dispose(toDispose);
      }));
    }
    const compoundRoot = this._options.compoundRoot;
    if (compoundRoot) {
      toDispose.add(compoundRoot.onDidSessionStop(() => this.terminate()));
    }
    this.passFocusScheduler = new RunOnceScheduler(() => {
      var _a2;
      if (this.debugService.getModel().getSessions().some((s) => s.state === 2) || this.getAllThreads().some((t) => t.stopped)) {
        if (typeof this.lastContinuedThreadId === "number") {
          const thread = this.debugService.getViewModel().focusedThread;
          if (thread && thread.threadId === this.lastContinuedThreadId && !thread.stopped) {
            const toFocusThreadId = (_a2 = this.getStoppedDetails()) == null ? void 0 : _a2.threadId;
            const toFocusThread = typeof toFocusThreadId === "number" ? this.getThread(toFocusThreadId) : void 0;
            this.debugService.focusStackFrame(void 0, toFocusThread);
          }
        } else {
          const session = this.debugService.getViewModel().focusedSession;
          if (session && session.getId() === this.getId() && session.state !== 2) {
            this.debugService.focusStackFrame(void 0);
          }
        }
      }
    }, 800);
    const parent = this._options.parentSession;
    if (parent) {
      toDispose.add(parent.onDidEndAdapter(() => {
        var _a2;
        if (!this.hasSeparateRepl() && ((_a2 = this.raw) == null ? void 0 : _a2.isInShutdown) === false) {
          this.repl = this.repl.clone();
          replListener.value = this.repl.onDidChangeElements(() => this._onDidChangeREPLElements.fire());
          this.parentSession = void 0;
        }
      }));
    }
  }
  getId() {
    return this.id;
  }
  setSubId(subId) {
    this._subId = subId;
  }
  getMemory(memoryReference) {
    return new MemoryRegion(memoryReference, this);
  }
  get subId() {
    return this._subId;
  }
  get configuration() {
    return this._configuration.resolved;
  }
  get unresolvedConfiguration() {
    return this._configuration.unresolved;
  }
  get lifecycleManagedByParent() {
    return !!this._options.lifecycleManagedByParent;
  }
  get compact() {
    return !!this._options.compact;
  }
  get saveBeforeRestart() {
    var _a2;
    return this._options.saveBeforeRestart ?? !((_a2 = this._options) == null ? void 0 : _a2.parentSession);
  }
  get compoundRoot() {
    return this._options.compoundRoot;
  }
  get suppressDebugStatusbar() {
    return this._options.suppressDebugStatusbar ?? false;
  }
  get suppressDebugToolbar() {
    return this._options.suppressDebugToolbar ?? false;
  }
  get suppressDebugView() {
    return this._options.suppressDebugView ?? false;
  }
  get autoExpandLazyVariables() {
    return this.configurationService.getValue("debug").autoExpandLazyVariables;
  }
  setConfiguration(configuration) {
    this._configuration = configuration;
  }
  getLabel() {
    const includeRoot = this.workspaceContextService.getWorkspace().folders.length > 1;
    return includeRoot && this.root ? `${this.name} (${basenameOrAuthority(this.root.uri)})` : this.name;
  }
  setName(name) {
    this._name = name;
    this._onDidChangeName.fire(name);
  }
  get name() {
    return this._name || this.configuration.name;
  }
  get state() {
    if (!this.initialized) {
      return 1;
    }
    if (!this.raw) {
      return 0;
    }
    const focusedThread = this.debugService.getViewModel().focusedThread;
    if (focusedThread && focusedThread.session === this) {
      return focusedThread.stopped ? 2 : 3;
    }
    if (this.getAllThreads().some((t) => t.stopped)) {
      return 2;
    }
    return 3;
  }
  get capabilities() {
    return this.raw ? this.raw.capabilities : /* @__PURE__ */ Object.create(null);
  }
  get onDidChangeState() {
    return this._onDidChangeState.event;
  }
  get onDidEndAdapter() {
    return this._onDidEndAdapter.event;
  }
  get onDidChangeReplElements() {
    return this._onDidChangeREPLElements.event;
  }
  get onDidChangeName() {
    return this._onDidChangeName.event;
  }
  get onDidCustomEvent() {
    return this._onDidCustomEvent.event;
  }
  get onDidLoadedSource() {
    return this._onDidLoadedSource.event;
  }
  get onDidProgressStart() {
    return this._onDidProgressStart.event;
  }
  get onDidProgressUpdate() {
    return this._onDidProgressUpdate.event;
  }
  get onDidProgressEnd() {
    return this._onDidProgressEnd.event;
  }
  get onDidInvalidateMemory() {
    return this._onDidInvalidMemory.event;
  }
  async initialize(dbgr) {
    if (this.raw) {
      await this.shutdown();
    }
    try {
      const debugAdapter = await dbgr.createDebugAdapter(this);
      this.raw = this.instantiationService.createInstance(RawDebugSession, debugAdapter, dbgr, this.id, this.configuration.name);
      await this.raw.start();
      this.registerListeners();
      await this.raw.initialize({
        clientID: "vscode",
        clientName: this.productService.nameLong,
        adapterID: this.configuration.type,
        pathFormat: "path",
        linesStartAt1: true,
        columnsStartAt1: true,
        supportsVariableType: true,
        supportsVariablePaging: true,
        supportsRunInTerminalRequest: true,
        locale: language,
        supportsProgressReporting: true,
        supportsInvalidatedEvent: true,
        supportsMemoryReferences: true,
        supportsArgsCanBeInterpretedByShell: true,
        supportsMemoryEvent: true,
        supportsStartDebuggingRequest: true
      });
      this.initialized = true;
      this._onDidChangeState.fire();
      this.debugService.setExceptionBreakpointsForSession(this, this.raw && this.raw.capabilities.exceptionBreakpointFilters || []);
    } catch (err) {
      this.initialized = true;
      this._onDidChangeState.fire();
      await this.shutdown();
      throw err;
    }
  }
  async launchOrAttach(config) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "launch or attach"));
    }
    if (this.parentSession && this.parentSession.state === 0) {
      throw canceled();
    }
    config.__sessionId = this.getId();
    try {
      await this.raw.launchOrAttach(config);
    } catch (err) {
      this.shutdown();
      throw err;
    }
  }
  async terminate(restart = false) {
    var _a2;
    if (!this.raw) {
      this.onDidExitAdapter();
    }
    this.cancelAllRequests();
    if (this._options.lifecycleManagedByParent && this.parentSession) {
      await this.parentSession.terminate(restart);
    } else if (this.raw) {
      if (this.raw.capabilities.supportsTerminateRequest && this._configuration.resolved.request === "launch") {
        await this.raw.terminate(restart);
      } else {
        await this.raw.disconnect({ restart, terminateDebuggee: true });
      }
    }
    if (!restart) {
      (_a2 = this._options.compoundRoot) == null ? void 0 : _a2.sessionStopped();
    }
  }
  async disconnect(restart = false, suspend = false) {
    var _a2;
    if (!this.raw) {
      this.onDidExitAdapter();
    }
    this.cancelAllRequests();
    if (this._options.lifecycleManagedByParent && this.parentSession) {
      await this.parentSession.disconnect(restart, suspend);
    } else if (this.raw) {
      await this.raw.disconnect({ restart, terminateDebuggee: false, suspendDebuggee: suspend });
    }
    if (!restart) {
      (_a2 = this._options.compoundRoot) == null ? void 0 : _a2.sessionStopped();
    }
  }
  async restart() {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "restart"));
    }
    this.cancelAllRequests();
    if (this._options.lifecycleManagedByParent && this.parentSession) {
      await this.parentSession.restart();
    } else {
      await this.raw.restart({ arguments: this.configuration });
    }
  }
  async sendBreakpoints(modelUri, breakpointsToSend, sourceModified) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "breakpoints"));
    }
    if (!this.raw.readyForBreakpoints) {
      return Promise.resolve(void 0);
    }
    const rawSource = this.getRawSource(modelUri);
    if (breakpointsToSend.length && !rawSource.adapterData) {
      rawSource.adapterData = breakpointsToSend[0].adapterData;
    }
    if (rawSource.path) {
      rawSource.path = normalizeDriveLetter(rawSource.path);
    }
    const response = await this.raw.setBreakpoints({
      source: rawSource,
      lines: breakpointsToSend.map((bp) => bp.sessionAgnosticData.lineNumber),
      breakpoints: breakpointsToSend.map(
        (bp) => ({ line: bp.sessionAgnosticData.lineNumber, column: bp.sessionAgnosticData.column, condition: bp.condition, hitCondition: bp.hitCondition, logMessage: bp.logMessage })
      ),
      sourceModified
    });
    if (response && response.body) {
      const data = /* @__PURE__ */ new Map();
      for (let i = 0; i < breakpointsToSend.length; i++) {
        data.set(breakpointsToSend[i].getId(), response.body.breakpoints[i]);
      }
      this.model.setBreakpointSessionData(this.getId(), this.capabilities, data);
    }
  }
  async sendFunctionBreakpoints(fbpts) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "function breakpoints"));
    }
    if (this.raw.readyForBreakpoints) {
      const response = await this.raw.setFunctionBreakpoints({ breakpoints: fbpts });
      if (response && response.body) {
        const data = /* @__PURE__ */ new Map();
        for (let i = 0; i < fbpts.length; i++) {
          data.set(fbpts[i].getId(), response.body.breakpoints[i]);
        }
        this.model.setBreakpointSessionData(this.getId(), this.capabilities, data);
      }
    }
  }
  async sendExceptionBreakpoints(exbpts) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "exception breakpoints"));
    }
    if (this.raw.readyForBreakpoints) {
      const args = this.capabilities.supportsExceptionFilterOptions ? {
        filters: [],
        filterOptions: exbpts.map((exb) => {
          if (exb.condition) {
            return { filterId: exb.filter, condition: exb.condition };
          }
          return { filterId: exb.filter };
        })
      } : { filters: exbpts.map((exb) => exb.filter) };
      const response = await this.raw.setExceptionBreakpoints(args);
      if (response && response.body && response.body.breakpoints) {
        const data = /* @__PURE__ */ new Map();
        for (let i = 0; i < exbpts.length; i++) {
          data.set(exbpts[i].getId(), response.body.breakpoints[i]);
        }
        this.model.setBreakpointSessionData(this.getId(), this.capabilities, data);
      }
    }
  }
  async dataBreakpointInfo(name, variablesReference) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "data breakpoints info"));
    }
    if (!this.raw.readyForBreakpoints) {
      throw new Error(localize("sessionNotReadyForBreakpoints", "Session is not ready for breakpoints"));
    }
    const response = await this.raw.dataBreakpointInfo({ name, variablesReference });
    return response == null ? void 0 : response.body;
  }
  async sendDataBreakpoints(dataBreakpoints) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "data breakpoints"));
    }
    if (this.raw.readyForBreakpoints) {
      const response = await this.raw.setDataBreakpoints({ breakpoints: dataBreakpoints });
      if (response && response.body) {
        const data = /* @__PURE__ */ new Map();
        for (let i = 0; i < dataBreakpoints.length; i++) {
          data.set(dataBreakpoints[i].getId(), response.body.breakpoints[i]);
        }
        this.model.setBreakpointSessionData(this.getId(), this.capabilities, data);
      }
    }
  }
  async sendInstructionBreakpoints(instructionBreakpoints) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "instruction breakpoints"));
    }
    if (this.raw.readyForBreakpoints) {
      const response = await this.raw.setInstructionBreakpoints({ breakpoints: instructionBreakpoints });
      if (response && response.body) {
        const data = /* @__PURE__ */ new Map();
        for (let i = 0; i < instructionBreakpoints.length; i++) {
          data.set(instructionBreakpoints[i].getId(), response.body.breakpoints[i]);
        }
        this.model.setBreakpointSessionData(this.getId(), this.capabilities, data);
      }
    }
  }
  async breakpointsLocations(uri, lineNumber) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "breakpoints locations"));
    }
    const source = this.getRawSource(uri);
    const response = await this.raw.breakpointLocations({ source, line: lineNumber });
    if (!response || !response.body || !response.body.breakpoints) {
      return [];
    }
    const positions = response.body.breakpoints.map((bp) => ({ lineNumber: bp.line, column: bp.column || 1 }));
    return distinct(positions, (p) => `${p.lineNumber}:${p.column}`);
  }
  getDebugProtocolBreakpoint(breakpointId) {
    return this.model.getDebugProtocolBreakpoint(breakpointId, this.getId());
  }
  customRequest(request, args) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", request));
    }
    return this.raw.custom(request, args);
  }
  stackTrace(threadId, startFrame, levels, token) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "stackTrace"));
    }
    const sessionToken = this.getNewCancellationToken(threadId, token);
    return this.raw.stackTrace({ threadId, startFrame, levels }, sessionToken);
  }
  async exceptionInfo(threadId) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "exceptionInfo"));
    }
    const response = await this.raw.exceptionInfo({ threadId });
    if (response) {
      return {
        id: response.body.exceptionId,
        description: response.body.description,
        breakMode: response.body.breakMode,
        details: response.body.details
      };
    }
    return void 0;
  }
  scopes(frameId, threadId) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "scopes"));
    }
    const token = this.getNewCancellationToken(threadId);
    return this.raw.scopes({ frameId }, token);
  }
  variables(variablesReference, threadId, filter2, start, count) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "variables"));
    }
    const token = threadId ? this.getNewCancellationToken(threadId) : void 0;
    return this.raw.variables({ variablesReference, filter: filter2, start, count }, token);
  }
  evaluate(expression, frameId, context) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "evaluate"));
    }
    return this.raw.evaluate({ expression, frameId, context });
  }
  async restartFrame(frameId, threadId) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "restartFrame"));
    }
    await this.raw.restartFrame({ frameId }, threadId);
  }
  setLastSteppingGranularity(threadId, granularity) {
    const thread = this.getThread(threadId);
    if (thread) {
      thread.lastSteppingGranularity = granularity;
    }
  }
  async next(threadId, granularity) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "next"));
    }
    this.setLastSteppingGranularity(threadId, granularity);
    await this.raw.next({ threadId, granularity });
  }
  async stepIn(threadId, targetId, granularity) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "stepIn"));
    }
    this.setLastSteppingGranularity(threadId, granularity);
    await this.raw.stepIn({ threadId, targetId, granularity });
  }
  async stepOut(threadId, granularity) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "stepOut"));
    }
    this.setLastSteppingGranularity(threadId, granularity);
    await this.raw.stepOut({ threadId, granularity });
  }
  async stepBack(threadId, granularity) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "stepBack"));
    }
    this.setLastSteppingGranularity(threadId, granularity);
    await this.raw.stepBack({ threadId, granularity });
  }
  async continue(threadId) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "continue"));
    }
    await this.raw.continue({ threadId });
  }
  async reverseContinue(threadId) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "reverse continue"));
    }
    await this.raw.reverseContinue({ threadId });
  }
  async pause(threadId) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "pause"));
    }
    await this.raw.pause({ threadId });
  }
  async terminateThreads(threadIds) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "terminateThreads"));
    }
    await this.raw.terminateThreads({ threadIds });
  }
  setVariable(variablesReference, name, value) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "setVariable"));
    }
    return this.raw.setVariable({ variablesReference, name, value });
  }
  setExpression(frameId, expression, value) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "setExpression"));
    }
    return this.raw.setExpression({ expression, value, frameId });
  }
  gotoTargets(source, line, column) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "gotoTargets"));
    }
    return this.raw.gotoTargets({ source, line, column });
  }
  goto(threadId, targetId) {
    if (!this.raw) {
      throw new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "goto"));
    }
    return this.raw.goto({ threadId, targetId });
  }
  loadSource(resource) {
    if (!this.raw) {
      return Promise.reject(new Error(localize(
        "noDebugAdapter",
        "No debugger available, can not send '{0}'",
        "loadSource"
      )));
    }
    const source = this.getSourceForUri(resource);
    let rawSource;
    if (source) {
      rawSource = source.raw;
    } else {
      const data = Source.getEncodedDebugData(resource);
      rawSource = { path: data.path, sourceReference: data.sourceReference };
    }
    return this.raw.source({ sourceReference: rawSource.sourceReference || 0, source: rawSource });
  }
  async getLoadedSources() {
    if (!this.raw) {
      return Promise.reject(new Error(localize(
        "noDebugAdapter",
        "No debugger available, can not send '{0}'",
        "getLoadedSources"
      )));
    }
    const response = await this.raw.loadedSources({});
    if (response && response.body && response.body.sources) {
      return response.body.sources.map((src) => this.getSource(src));
    } else {
      return [];
    }
  }
  async completions(frameId, threadId, text, position, overwriteBefore, token) {
    if (!this.raw) {
      return Promise.reject(new Error(localize(
        "noDebugAdapter",
        "No debugger available, can not send '{0}'",
        "completions"
      )));
    }
    const sessionCancelationToken = this.getNewCancellationToken(threadId, token);
    return this.raw.completions({
      frameId,
      text,
      column: position.column,
      line: position.lineNumber
    }, sessionCancelationToken);
  }
  async stepInTargets(frameId) {
    if (!this.raw) {
      return Promise.reject(new Error(localize(
        "noDebugAdapter",
        "No debugger available, can not send '{0}'",
        "stepInTargets"
      )));
    }
    const response = await this.raw.stepInTargets({ frameId });
    return response == null ? void 0 : response.body.targets;
  }
  async cancel(progressId) {
    if (!this.raw) {
      return Promise.reject(new Error(localize("noDebugAdapter", "No debugger available, can not send '{0}'", "cancel")));
    }
    return this.raw.cancel({ progressId });
  }
  async disassemble(memoryReference, offset, instructionOffset, instructionCount) {
    var _a2;
    if (!this.raw) {
      return Promise.reject(new Error(localize(
        "noDebugAdapter",
        "No debugger available, can not send '{0}'",
        "disassemble"
      )));
    }
    const response = await this.raw.disassemble({ memoryReference, offset, instructionOffset, instructionCount, resolveSymbols: true });
    return (_a2 = response == null ? void 0 : response.body) == null ? void 0 : _a2.instructions;
  }
  readMemory(memoryReference, offset, count) {
    if (!this.raw) {
      return Promise.reject(new Error(localize(
        "noDebugAdapter",
        "No debugger available, can not send '{0}'",
        "readMemory"
      )));
    }
    return this.raw.readMemory({ count, memoryReference, offset });
  }
  writeMemory(memoryReference, offset, data, allowPartial) {
    if (!this.raw) {
      return Promise.reject(new Error(localize(
        "noDebugAdapter",
        "No debugger available, can not send '{0}'",
        "disassemble"
      )));
    }
    return this.raw.writeMemory({ memoryReference, offset, allowPartial, data });
  }
  getThread(threadId) {
    return this.threads.get(threadId);
  }
  getAllThreads() {
    const result = [];
    this.threadIds.forEach((threadId) => {
      const thread = this.threads.get(threadId);
      if (thread) {
        result.push(thread);
      }
    });
    return result;
  }
  clearThreads(removeThreads, reference = void 0) {
    if (reference !== void 0 && reference !== null) {
      const thread = this.threads.get(reference);
      if (thread) {
        thread.clearCallStack();
        thread.stoppedDetails = void 0;
        thread.stopped = false;
        if (removeThreads) {
          this.threads.delete(reference);
        }
      }
    } else {
      this.threads.forEach((thread) => {
        thread.clearCallStack();
        thread.stoppedDetails = void 0;
        thread.stopped = false;
      });
      if (removeThreads) {
        this.threads.clear();
        this.threadIds = [];
        ExpressionContainer.allValues.clear();
      }
    }
  }
  getStoppedDetails() {
    return this.stoppedDetails.length >= 1 ? this.stoppedDetails[0] : void 0;
  }
  rawUpdate(data) {
    this.threadIds = [];
    data.threads.forEach((thread) => {
      this.threadIds.push(thread.id);
      if (!this.threads.has(thread.id)) {
        this.threads.set(thread.id, new Thread(this, thread.name, thread.id));
      } else if (thread.name) {
        const oldThread = this.threads.get(thread.id);
        if (oldThread) {
          oldThread.name = thread.name;
        }
      }
    });
    this.threads.forEach((t) => {
      if (this.threadIds.indexOf(t.threadId) === -1) {
        this.threads.delete(t.threadId);
      }
    });
    const stoppedDetails = data.stoppedDetails;
    if (stoppedDetails) {
      if (stoppedDetails.allThreadsStopped) {
        this.threads.forEach((thread) => {
          var _a2;
          thread.stoppedDetails = thread.threadId === stoppedDetails.threadId ? stoppedDetails : { reason: (_a2 = thread.stoppedDetails) == null ? void 0 : _a2.reason };
          thread.stopped = true;
          thread.clearCallStack();
        });
      } else {
        const thread = typeof stoppedDetails.threadId === "number" ? this.threads.get(stoppedDetails.threadId) : void 0;
        if (thread) {
          thread.stoppedDetails = stoppedDetails;
          thread.clearCallStack();
          thread.stopped = true;
        }
      }
    }
  }
  async fetchThreads(stoppedDetails) {
    if (this.raw) {
      const response = await this.raw.threads();
      if (response && response.body && response.body.threads) {
        this.model.rawUpdate({
          sessionId: this.getId(),
          threads: response.body.threads,
          stoppedDetails
        });
      }
    }
  }
  initializeForTest(raw) {
    this.raw = raw;
    this.registerListeners();
  }
  registerListeners() {
    if (!this.raw) {
      return;
    }
    this.rawListeners.push(this.raw.onDidInitialize(async () => {
      status(localize("debuggingStarted", "Debugging started."));
      const sendConfigurationDone = async () => {
        var _a2;
        if (this.raw && this.raw.capabilities.supportsConfigurationDoneRequest) {
          try {
            await this.raw.configurationDone();
          } catch (e) {
            this.notificationService.error(e);
            (_a2 = this.raw) == null ? void 0 : _a2.disconnect({});
          }
        }
        return void 0;
      };
      try {
        await this.debugService.sendAllBreakpoints(this);
      } finally {
        await sendConfigurationDone();
        await this.fetchThreads();
      }
    }));
    const statusQueue = new Queue();
    this.rawListeners.push(this.raw.onDidStop(async (event) => {
      statusQueue.queue(async () => {
        this.passFocusScheduler.cancel();
        this.stoppedDetails.push(event.body);
        await this.fetchThreads(event.body);
        const focusedThread = this.debugService.getViewModel().focusedThread;
        const focusedThreadDoesNotExist = focusedThread !== void 0 && focusedThread.session === this && !this.threads.has(focusedThread.threadId);
        if (focusedThreadDoesNotExist) {
          this.debugService.focusStackFrame(void 0, void 0);
        }
        const thread = typeof event.body.threadId === "number" ? this.getThread(event.body.threadId) : void 0;
        if (thread) {
          const promises = this.model.refreshTopOfCallstack(thread);
          const focus = async () => {
            if (focusedThreadDoesNotExist || !event.body.preserveFocusHint && thread.getCallStack().length) {
              const focusedStackFrame2 = this.debugService.getViewModel().focusedStackFrame;
              if (!focusedStackFrame2 || focusedStackFrame2.thread.session === this) {
                const preserveFocus = !this.configurationService.getValue("debug").focusEditorOnBreak;
                await this.debugService.focusStackFrame(void 0, thread, void 0, { preserveFocus });
              }
              if (thread.stoppedDetails) {
                if (thread.stoppedDetails.reason === "breakpoint" && this.configurationService.getValue("debug").openDebug === "openOnDebugBreak" && !this.suppressDebugView) {
                  await this.paneCompositeService.openPaneComposite(VIEWLET_ID, 0);
                }
                if (this.configurationService.getValue("debug").focusWindowOnBreak && !this.workbenchEnvironmentService.extensionTestsLocationURI) {
                  await this.hostService.focus({ force: true });
                }
              }
            }
          };
          await promises.topCallStack;
          focus();
          await promises.wholeCallStack;
          const focusedStackFrame = this.debugService.getViewModel().focusedStackFrame;
          if (!focusedStackFrame || !focusedStackFrame.source || focusedStackFrame.source.presentationHint === "deemphasize" || focusedStackFrame.presentationHint === "deemphasize") {
            focus();
          }
        }
        this._onDidChangeState.fire();
      });
    }));
    this.rawListeners.push(this.raw.onDidThread((event) => {
      statusQueue.queue(async () => {
        if (event.body.reason === "started") {
          if (!this.fetchThreadsScheduler) {
            this.fetchThreadsScheduler = new RunOnceScheduler(() => {
              this.fetchThreads();
            }, 100);
            this.rawListeners.push(this.fetchThreadsScheduler);
          }
          if (!this.fetchThreadsScheduler.isScheduled()) {
            this.fetchThreadsScheduler.schedule();
          }
        } else if (event.body.reason === "exited") {
          this.model.clearThreads(this.getId(), true, event.body.threadId);
          const viewModel = this.debugService.getViewModel();
          const focusedThread = viewModel.focusedThread;
          this.passFocusScheduler.cancel();
          if (focusedThread && event.body.threadId === focusedThread.threadId) {
            this.debugService.focusStackFrame(void 0, void 0, viewModel.focusedSession, { explicit: false });
          }
        }
      });
    }));
    this.rawListeners.push(this.raw.onDidTerminateDebugee(async (event) => {
      status(localize("debuggingStopped", "Debugging stopped."));
      if (event.body && event.body.restart) {
        await this.debugService.restartSession(this, event.body.restart);
      } else if (this.raw) {
        await this.raw.disconnect({ terminateDebuggee: false });
      }
    }));
    this.rawListeners.push(this.raw.onDidContinued((event) => {
      statusQueue.queue(async () => {
        const threadId = event.body.allThreadsContinued !== false ? void 0 : event.body.threadId;
        if (typeof threadId === "number") {
          this.stoppedDetails = this.stoppedDetails.filter((sd) => sd.threadId !== threadId);
          const tokens = this.cancellationMap.get(threadId);
          this.cancellationMap.delete(threadId);
          tokens == null ? void 0 : tokens.forEach((t) => t.cancel());
        } else {
          this.stoppedDetails = [];
          this.cancelAllRequests();
        }
        this.lastContinuedThreadId = threadId;
        this.passFocusScheduler.schedule();
        this.model.clearThreads(this.getId(), false, threadId);
        this._onDidChangeState.fire();
      });
    }));
    const outputQueue = new Queue();
    this.rawListeners.push(this.raw.onDidOutput(async (event) => {
      const outputSeverity = event.body.category === "stderr" ? Severity.Error : event.body.category === "console" ? Severity.Warning : Severity.Info;
      if (event.body.variablesReference) {
        const source = event.body.source && event.body.line ? {
          lineNumber: event.body.line,
          column: event.body.column ? event.body.column : 1,
          source: this.getSource(event.body.source)
        } : void 0;
        const container = new ExpressionContainer(this, void 0, event.body.variablesReference, generateUuid());
        const children = container.getChildren();
        outputQueue.queue(async () => {
          const resolved = await children;
          if (resolved.length === 1) {
            this.appendToRepl({ output: event.body.output, expression: resolved[0], sev: outputSeverity, source }, event.body.category === "important");
            return;
          }
          resolved.forEach((child) => {
            child.name = null;
            this.appendToRepl({ output: "", expression: child, sev: outputSeverity, source }, event.body.category === "important");
          });
        });
        return;
      }
      outputQueue.queue(async () => {
        if (!event.body || !this.raw) {
          return;
        }
        if (event.body.category === "telemetry") {
          const telemetryEndpoint = this.raw.dbgr.getCustomTelemetryEndpoint();
          if (telemetryEndpoint && this.telemetryService.telemetryLevel !== 0) {
            let data = event.body.data;
            if (!telemetryEndpoint.sendErrorTelemetry && event.body.data) {
              data = filterExceptionsFromTelemetry(event.body.data);
            }
            this.customEndpointTelemetryService.publicLog(telemetryEndpoint, event.body.output, data);
          }
          return;
        }
        const source = event.body.source && event.body.line ? {
          lineNumber: event.body.line,
          column: event.body.column ? event.body.column : 1,
          source: this.getSource(event.body.source)
        } : void 0;
        if (event.body.group === "start" || event.body.group === "startCollapsed") {
          const expanded = event.body.group === "start";
          this.repl.startGroup(event.body.output || "", expanded, source);
          return;
        }
        if (event.body.group === "end") {
          this.repl.endGroup();
          if (!event.body.output) {
            return;
          }
        }
        if (typeof event.body.output === "string") {
          this.appendToRepl({ output: event.body.output, sev: outputSeverity, source }, event.body.category === "important");
        }
      });
    }));
    this.rawListeners.push(this.raw.onDidBreakpoint((event) => {
      const id = event.body && event.body.breakpoint ? event.body.breakpoint.id : void 0;
      const breakpoint2 = this.model.getBreakpoints().find((bp) => bp.getIdFromAdapter(this.getId()) === id);
      const functionBreakpoint = this.model.getFunctionBreakpoints().find((bp) => bp.getIdFromAdapter(this.getId()) === id);
      const dataBreakpoint = this.model.getDataBreakpoints().find((dbp) => dbp.getIdFromAdapter(this.getId()) === id);
      const exceptionBreakpoint = this.model.getExceptionBreakpoints().find((excbp) => excbp.getIdFromAdapter(this.getId()) === id);
      if (event.body.reason === "new" && event.body.breakpoint.source && event.body.breakpoint.line) {
        const source = this.getSource(event.body.breakpoint.source);
        const bps = this.model.addBreakpoints(source.uri, [{
          column: event.body.breakpoint.column,
          enabled: true,
          lineNumber: event.body.breakpoint.line
        }], false);
        if (bps.length === 1) {
          const data = /* @__PURE__ */ new Map([[bps[0].getId(), event.body.breakpoint]]);
          this.model.setBreakpointSessionData(this.getId(), this.capabilities, data);
        }
      }
      if (event.body.reason === "removed") {
        if (breakpoint2) {
          this.model.removeBreakpoints([breakpoint2]);
        }
        if (functionBreakpoint) {
          this.model.removeFunctionBreakpoints(functionBreakpoint.getId());
        }
        if (dataBreakpoint) {
          this.model.removeDataBreakpoints(dataBreakpoint.getId());
        }
      }
      if (event.body.reason === "changed") {
        if (breakpoint2) {
          if (!breakpoint2.column) {
            event.body.breakpoint.column = void 0;
          }
          const data = /* @__PURE__ */ new Map([[breakpoint2.getId(), event.body.breakpoint]]);
          this.model.setBreakpointSessionData(this.getId(), this.capabilities, data);
        }
        if (functionBreakpoint) {
          const data = /* @__PURE__ */ new Map([[functionBreakpoint.getId(), event.body.breakpoint]]);
          this.model.setBreakpointSessionData(this.getId(), this.capabilities, data);
        }
        if (dataBreakpoint) {
          const data = /* @__PURE__ */ new Map([[dataBreakpoint.getId(), event.body.breakpoint]]);
          this.model.setBreakpointSessionData(this.getId(), this.capabilities, data);
        }
        if (exceptionBreakpoint) {
          const data = /* @__PURE__ */ new Map([[exceptionBreakpoint.getId(), event.body.breakpoint]]);
          this.model.setBreakpointSessionData(this.getId(), this.capabilities, data);
        }
      }
    }));
    this.rawListeners.push(this.raw.onDidLoadedSource((event) => {
      this._onDidLoadedSource.fire({
        reason: event.body.reason,
        source: this.getSource(event.body.source)
      });
    }));
    this.rawListeners.push(this.raw.onDidCustomEvent((event) => {
      this._onDidCustomEvent.fire(event);
    }));
    this.rawListeners.push(this.raw.onDidProgressStart((event) => {
      this._onDidProgressStart.fire(event);
    }));
    this.rawListeners.push(this.raw.onDidProgressUpdate((event) => {
      this._onDidProgressUpdate.fire(event);
    }));
    this.rawListeners.push(this.raw.onDidProgressEnd((event) => {
      this._onDidProgressEnd.fire(event);
    }));
    this.rawListeners.push(this.raw.onDidInvalidateMemory((event) => {
      this._onDidInvalidMemory.fire(event);
    }));
    this.rawListeners.push(this.raw.onDidInvalidated(async (event) => {
      if (!(event.body.areas && event.body.areas.length === 1 && (event.body.areas[0] === "variables" || event.body.areas[0] === "watch"))) {
        this.cancelAllRequests();
        this.model.clearThreads(this.getId(), true);
        await this.fetchThreads(this.getStoppedDetails());
      }
      const viewModel = this.debugService.getViewModel();
      if (viewModel.focusedSession === this) {
        viewModel.updateViews();
      }
    }));
    this.rawListeners.push(this.raw.onDidExitAdapter((event) => this.onDidExitAdapter(event)));
  }
  onDidExitAdapter(event) {
    this.initialized = true;
    this.model.setBreakpointSessionData(this.getId(), this.capabilities, void 0);
    this.shutdown();
    this._onDidEndAdapter.fire(event);
  }
  shutdown() {
    var _a2;
    dispose(this.rawListeners);
    if (this.raw) {
      this.raw.disconnect({});
      this.raw.dispose();
      this.raw = void 0;
    }
    (_a2 = this.fetchThreadsScheduler) == null ? void 0 : _a2.dispose();
    this.fetchThreadsScheduler = void 0;
    this.passFocusScheduler.cancel();
    this.passFocusScheduler.dispose();
    this.model.clearThreads(this.getId(), true);
    this._onDidChangeState.fire();
  }
  getSourceForUri(uri) {
    return this.sources.get(this.uriIdentityService.asCanonicalUri(uri).toString());
  }
  getSource(raw) {
    let source = new Source(raw, this.getId(), this.uriIdentityService, this.logService);
    const uriKey = source.uri.toString();
    const found = this.sources.get(uriKey);
    if (found) {
      source = found;
      source.raw = mixin(source.raw, raw);
      if (source.raw && raw) {
        source.raw.presentationHint = raw.presentationHint;
      }
    } else {
      this.sources.set(uriKey, source);
    }
    return source;
  }
  getRawSource(uri) {
    const source = this.getSourceForUri(uri);
    if (source) {
      return source.raw;
    } else {
      const data = Source.getEncodedDebugData(uri);
      return { name: data.name, path: data.path, sourceReference: data.sourceReference };
    }
  }
  getNewCancellationToken(threadId, token) {
    const tokenSource = new CancellationTokenSource(token);
    const tokens = this.cancellationMap.get(threadId) || [];
    tokens.push(tokenSource);
    this.cancellationMap.set(threadId, tokens);
    return tokenSource.token;
  }
  cancelAllRequests() {
    this.cancellationMap.forEach((tokens) => tokens.forEach((t) => t.cancel()));
    this.cancellationMap.clear();
  }
  getReplElements() {
    return this.repl.getReplElements();
  }
  hasSeparateRepl() {
    return !this.parentSession || this._options.repl !== "mergeWithParent";
  }
  removeReplExpressions() {
    this.repl.removeReplExpressions();
  }
  async addReplExpression(stackFrame, name) {
    await this.repl.addReplExpression(this, stackFrame, name);
    this.debugService.getViewModel().updateViews();
  }
  appendToRepl(data, isImportant) {
    this.repl.appendToRepl(this, data);
    if (isImportant) {
      this.notificationService.notify({ message: data.output.toString(), severity: data.sev, source: this.name });
    }
  }
};
DebugSession = __decorate([
  __param(5, IDebugService),
  __param(6, ITelemetryService),
  __param(7, IHostService),
  __param(8, IConfigurationService),
  __param(9, IPaneCompositePartService),
  __param(10, IWorkspaceContextService),
  __param(11, IProductService),
  __param(12, INotificationService),
  __param(13, ILifecycleService),
  __param(14, IUriIdentityService),
  __param(15, IInstantiationService),
  __param(16, ICustomEndpointTelemetryService),
  __param(17, IWorkbenchEnvironmentService),
  __param(18, ILogService)
], DebugSession);
function once(match, event) {
  return (listener, thisArgs = null, disposables) => {
    const result = event((e) => {
      if (match(e)) {
        result.dispose();
        return listener.call(thisArgs, e);
      }
    }, null, disposables);
    return result;
  };
}
const DEBUG_TASK_ERROR_CHOICE_KEY = "debug.taskerrorchoice";
let DebugTaskRunner = class DebugTaskRunner2 {
  constructor(taskService, markerService, configurationService, viewsService, dialogService, storageService, commandService) {
    this.taskService = taskService;
    this.markerService = markerService;
    this.configurationService = configurationService;
    this.viewsService = viewsService;
    this.dialogService = dialogService;
    this.storageService = storageService;
    this.commandService = commandService;
    this.canceled = false;
  }
  cancel() {
    this.canceled = true;
  }
  async runTaskAndCheckErrors(root, taskId) {
    try {
      this.canceled = false;
      const taskSummary = await this.runTask(root, taskId);
      if (this.canceled || taskSummary && taskSummary.exitCode === void 0) {
        return 0;
      }
      const errorCount = taskId ? this.markerService.read({ severities: MarkerSeverity.Error, take: 2 }).length : 0;
      const successExitCode = taskSummary && taskSummary.exitCode === 0;
      const failureExitCode = taskSummary && taskSummary.exitCode !== 0;
      const onTaskErrors = this.configurationService.getValue("debug").onTaskErrors;
      if (successExitCode || onTaskErrors === "debugAnyway" || errorCount === 0 && !failureExitCode) {
        return 1;
      }
      if (onTaskErrors === "showErrors") {
        await this.viewsService.openView(Markers.MARKERS_VIEW_ID, true);
        return Promise.resolve(0);
      }
      if (onTaskErrors === "abort") {
        return Promise.resolve(0);
      }
      const taskLabel = typeof taskId === "string" ? taskId : taskId ? taskId.name : "";
      const message = errorCount > 1 ? localize(
        "preLaunchTaskErrors",
        "Errors exist after running preLaunchTask '{0}'.",
        taskLabel
      ) : errorCount === 1 ? localize(
        "preLaunchTaskError",
        "Error exists after running preLaunchTask '{0}'.",
        taskLabel
      ) : taskSummary && typeof taskSummary.exitCode === "number" ? localize(
        "preLaunchTaskExitCode",
        "The preLaunchTask '{0}' terminated with exit code {1}.",
        taskLabel,
        taskSummary.exitCode
      ) : localize(
        "preLaunchTaskTerminated",
        "The preLaunchTask '{0}' terminated.",
        taskLabel
      );
      let DebugChoice;
      (function(DebugChoice2) {
        DebugChoice2[DebugChoice2["DebugAnyway"] = 1] = "DebugAnyway";
        DebugChoice2[DebugChoice2["ShowErrors"] = 2] = "ShowErrors";
        DebugChoice2[DebugChoice2["Cancel"] = 0] = "Cancel";
      })(DebugChoice || (DebugChoice = {}));
      const { result, checkboxChecked } = await this.dialogService.prompt({
        type: Severity.Warning,
        message,
        buttons: [
          {
            label: localize(
              { key: "debugAnyway", comment: ["&& denotes a mnemonic"] },
              "&&Debug Anyway"
            ),
            run: () => DebugChoice.DebugAnyway
          },
          {
            label: localize({ key: "showErrors", comment: ["&& denotes a mnemonic"] }, "&&Show Errors"),
            run: () => DebugChoice.ShowErrors
          }
        ],
        cancelButton: {
          label: localize("abort", "Abort"),
          run: () => DebugChoice.Cancel
        },
        checkbox: {
          label: localize("remember", "Remember my choice in user settings")
        }
      });
      const debugAnyway = result === DebugChoice.DebugAnyway;
      const abort = result === DebugChoice.Cancel;
      if (checkboxChecked) {
        this.configurationService.updateValue("debug.onTaskErrors", result === DebugChoice.DebugAnyway ? "debugAnyway" : abort ? "abort" : "showErrors");
      }
      if (abort) {
        return Promise.resolve(0);
      }
      if (debugAnyway) {
        return 1;
      }
      await this.viewsService.openView(Markers.MARKERS_VIEW_ID, true);
      return Promise.resolve(0);
    } catch (err) {
      const taskConfigureAction = this.taskService.configureAction();
      const choiceMap = JSON.parse(this.storageService.get(DEBUG_TASK_ERROR_CHOICE_KEY, 1, "{}"));
      let choice = -1;
      let DebugChoice;
      (function(DebugChoice2) {
        DebugChoice2[DebugChoice2["DebugAnyway"] = 0] = "DebugAnyway";
        DebugChoice2[DebugChoice2["ConfigureTask"] = 1] = "ConfigureTask";
        DebugChoice2[DebugChoice2["Cancel"] = 2] = "Cancel";
      })(DebugChoice || (DebugChoice = {}));
      if (choiceMap[err.message] !== void 0) {
        choice = choiceMap[err.message];
      } else {
        const { result, checkboxChecked } = await this.dialogService.prompt({
          type: Severity.Error,
          message: err.message,
          buttons: [
            {
              label: localize(
                { key: "debugAnyway", comment: ["&& denotes a mnemonic"] },
                "&&Debug Anyway"
              ),
              run: () => DebugChoice.DebugAnyway
            },
            {
              label: taskConfigureAction.label,
              run: () => DebugChoice.ConfigureTask
            }
          ],
          cancelButton: {
            run: () => DebugChoice.Cancel
          },
          checkbox: {
            label: localize("rememberTask", "Remember my choice for this task")
          }
        });
        choice = result;
        if (checkboxChecked) {
          choiceMap[err.message] = choice;
          this.storageService.store(DEBUG_TASK_ERROR_CHOICE_KEY, JSON.stringify(choiceMap), 1, 1);
        }
      }
      if (choice === DebugChoice.ConfigureTask) {
        await taskConfigureAction.run();
      }
      return choice === DebugChoice.DebugAnyway ? 1 : 0;
    }
  }
  async runTask(root, taskId) {
    if (!taskId) {
      return Promise.resolve(null);
    }
    if (!root) {
      return Promise.reject(new Error(localize(
        "invalidTaskReference",
        "Task '{0}' can not be referenced from a launch configuration that is in a different workspace folder.",
        typeof taskId === "string" ? taskId : taskId.type
      )));
    }
    const task = await this.taskService.getTask(root, taskId);
    if (!task) {
      const errorMessage = typeof taskId === "string" ? localize("DebugTaskNotFoundWithTaskId", "Could not find the task '{0}'.", taskId) : localize("DebugTaskNotFound", "Could not find the specified task.");
      return Promise.reject(createErrorWithActions(errorMessage, [new Action(
        DEBUG_CONFIGURE_COMMAND_ID,
        DEBUG_CONFIGURE_LABEL,
        void 0,
        true,
        () => this.commandService.executeCommand(DEBUG_CONFIGURE_COMMAND_ID)
      )]));
    }
    let taskStarted = false;
    const inactivePromise = new Promise((c, e) => once((e2) => {
      return (e2.kind === "inactive" || e2.kind === "processEnded" && e2.exitCode === void 0) && e2.taskId === task._id;
    }, this.taskService.onDidStateChange)((e2) => {
      taskStarted = true;
      c(e2.kind === "processEnded" ? { exitCode: e2.exitCode } : null);
    }));
    const promise = this.taskService.getActiveTasks().then(async (tasks) => {
      if (tasks.find((t) => t._id === task._id)) {
        const busyTasks = await this.taskService.getBusyTasks();
        if (busyTasks.find((t) => t._id === task._id)) {
          taskStarted = true;
          return inactivePromise;
        }
        return Promise.resolve(null);
      }
      once((e) => (e.kind === "active" || e.kind === "dependsOnStarted") && e.taskId === task._id, this.taskService.onDidStateChange)(() => {
        taskStarted = true;
      });
      const taskPromise = this.taskService.run(task);
      if (task.configurationProperties.isBackground) {
        return inactivePromise;
      }
      return taskPromise.then(withUndefinedAsNull);
    });
    return new Promise((c, e) => {
      const waitForInput = new Promise(
        (resolve) => once((e2) => e2.kind === "acquiredInput" && e2.taskId === task._id, this.taskService.onDidStateChange)(() => {
          resolve();
        })
      );
      promise.then((result) => {
        taskStarted = true;
        c(result);
      }, (error) => e(error));
      waitForInput.then(() => {
        const waitTime = task.configurationProperties.isBackground ? 5e3 : 1e4;
        setTimeout(() => {
          if (!taskStarted) {
            const errorMessage = typeof taskId === "string" ? localize(
              "taskNotTrackedWithTaskId",
              "The task '{0}' cannot be tracked. Make sure to have a problem matcher defined.",
              taskId
            ) : localize(
              "taskNotTracked",
              "The task '{0}' cannot be tracked. Make sure to have a problem matcher defined.",
              JSON.stringify(taskId)
            );
            e({ severity: Severity.Error, message: errorMessage });
          }
        }, waitTime);
      });
    });
  }
};
DebugTaskRunner = __decorate([
  __param(0, ITaskService),
  __param(1, IMarkerService),
  __param(2, IConfigurationService),
  __param(3, IViewsService),
  __param(4, IDialogService),
  __param(5, IStorageService),
  __param(6, ICommandService)
], DebugTaskRunner);
class DebugCompoundRoot {
  constructor() {
    this.stopped = false;
    this.stopEmitter = new Emitter();
    this.onDidSessionStop = this.stopEmitter.event;
  }
  sessionStopped() {
    if (!this.stopped) {
      this.stopped = true;
      this.stopEmitter.fire();
    }
  }
}
const DEBUG_BREAKPOINTS_KEY = "debug.breakpoint";
const DEBUG_FUNCTION_BREAKPOINTS_KEY = "debug.functionbreakpoint";
const DEBUG_DATA_BREAKPOINTS_KEY = "debug.databreakpoint";
const DEBUG_EXCEPTION_BREAKPOINTS_KEY = "debug.exceptionbreakpoint";
const DEBUG_WATCH_EXPRESSIONS_KEY = "debug.watchexpressions";
const DEBUG_CHOSEN_ENVIRONMENTS_KEY = "debug.chosenenvironment";
const DEBUG_UX_STATE_KEY = "debug.uxstate";
let DebugStorage = class DebugStorage2 {
  constructor(storageService, textFileService, uriIdentityService, logService) {
    this.storageService = storageService;
    this.textFileService = textFileService;
    this.uriIdentityService = uriIdentityService;
    this.logService = logService;
  }
  loadDebugUxState() {
    return this.storageService.get(DEBUG_UX_STATE_KEY, 1, "default");
  }
  storeDebugUxState(value) {
    this.storageService.store(DEBUG_UX_STATE_KEY, value, 1, 1);
  }
  loadBreakpoints() {
    let result;
    try {
      result = JSON.parse(this.storageService.get(DEBUG_BREAKPOINTS_KEY, 1, "[]")).map((breakpoint2) => {
        return new Breakpoint(URI.parse(breakpoint2.uri.external || breakpoint2.source.uri.external), breakpoint2.lineNumber, breakpoint2.column, breakpoint2.enabled, breakpoint2.condition, breakpoint2.hitCondition, breakpoint2.logMessage, breakpoint2.adapterData, this.textFileService, this.uriIdentityService, this.logService, breakpoint2.id);
      });
    } catch (e) {
    }
    return result || [];
  }
  loadFunctionBreakpoints() {
    let result;
    try {
      result = JSON.parse(this.storageService.get(DEBUG_FUNCTION_BREAKPOINTS_KEY, 1, "[]")).map((fb) => {
        return new FunctionBreakpoint(fb.name, fb.enabled, fb.hitCondition, fb.condition, fb.logMessage, fb.id);
      });
    } catch (e) {
    }
    return result || [];
  }
  loadExceptionBreakpoints() {
    let result;
    try {
      result = JSON.parse(this.storageService.get(DEBUG_EXCEPTION_BREAKPOINTS_KEY, 1, "[]")).map((exBreakpoint) => {
        return new ExceptionBreakpoint(
          exBreakpoint.filter,
          exBreakpoint.label,
          exBreakpoint.enabled,
          exBreakpoint.supportsCondition,
          exBreakpoint.condition,
          exBreakpoint.description,
          exBreakpoint.conditionDescription,
          !!exBreakpoint.fallback
        );
      });
    } catch (e) {
    }
    return result || [];
  }
  loadDataBreakpoints() {
    let result;
    try {
      result = JSON.parse(this.storageService.get(DEBUG_DATA_BREAKPOINTS_KEY, 1, "[]")).map((dbp) => {
        return new DataBreakpoint(
          dbp.description,
          dbp.dataId,
          true,
          dbp.enabled,
          dbp.hitCondition,
          dbp.condition,
          dbp.logMessage,
          dbp.accessTypes,
          dbp.accessType,
          dbp.id
        );
      });
    } catch (e) {
    }
    return result || [];
  }
  loadWatchExpressions() {
    let result;
    try {
      result = JSON.parse(this.storageService.get(DEBUG_WATCH_EXPRESSIONS_KEY, 1, "[]")).map((watchStoredData) => {
        return new Expression(watchStoredData.name, watchStoredData.id);
      });
    } catch (e) {
    }
    return result || [];
  }
  loadChosenEnvironments() {
    return JSON.parse(this.storageService.get(DEBUG_CHOSEN_ENVIRONMENTS_KEY, 1, "{}"));
  }
  storeChosenEnvironments(environments) {
    this.storageService.store(DEBUG_CHOSEN_ENVIRONMENTS_KEY, JSON.stringify(environments), 1, 1);
  }
  storeWatchExpressions(watchExpressions) {
    if (watchExpressions.length) {
      this.storageService.store(DEBUG_WATCH_EXPRESSIONS_KEY, JSON.stringify(watchExpressions.map((we) => ({ name: we.name, id: we.getId() }))), 1, 1);
    } else {
      this.storageService.remove(DEBUG_WATCH_EXPRESSIONS_KEY, 1);
    }
  }
  storeBreakpoints(debugModel) {
    const breakpoints = debugModel.getBreakpoints();
    if (breakpoints.length) {
      this.storageService.store(DEBUG_BREAKPOINTS_KEY, JSON.stringify(breakpoints), 1, 1);
    } else {
      this.storageService.remove(DEBUG_BREAKPOINTS_KEY, 1);
    }
    const functionBreakpoints = debugModel.getFunctionBreakpoints();
    if (functionBreakpoints.length) {
      this.storageService.store(DEBUG_FUNCTION_BREAKPOINTS_KEY, JSON.stringify(functionBreakpoints), 1, 1);
    } else {
      this.storageService.remove(DEBUG_FUNCTION_BREAKPOINTS_KEY, 1);
    }
    const dataBreakpoints = debugModel.getDataBreakpoints().filter((dbp) => dbp.canPersist);
    if (dataBreakpoints.length) {
      this.storageService.store(DEBUG_DATA_BREAKPOINTS_KEY, JSON.stringify(dataBreakpoints), 1, 1);
    } else {
      this.storageService.remove(DEBUG_DATA_BREAKPOINTS_KEY, 1);
    }
    const exceptionBreakpoints = debugModel.getExceptionBreakpoints();
    if (exceptionBreakpoints.length) {
      this.storageService.store(DEBUG_EXCEPTION_BREAKPOINTS_KEY, JSON.stringify(exceptionBreakpoints), 1, 1);
    } else {
      this.storageService.remove(DEBUG_EXCEPTION_BREAKPOINTS_KEY, 1);
    }
  }
};
DebugStorage = __decorate([
  __param(0, IStorageService),
  __param(1, ITextFileService),
  __param(2, IUriIdentityService),
  __param(3, ILogService)
], DebugStorage);
let DebugTelemetry = class DebugTelemetry2 {
  constructor(model, telemetryService) {
    this.model = model;
    this.telemetryService = telemetryService;
  }
  logDebugSessionStart(dbgr, launchJsonExists) {
    const extension = dbgr.getMainExtensionDescriptor();
    this.telemetryService.publicLog("debugSessionStart", {
      type: dbgr.type,
      breakpointCount: this.model.getBreakpoints().length,
      exceptionBreakpoints: this.model.getExceptionBreakpoints(),
      watchExpressionsCount: this.model.getWatchExpressions().length,
      extensionName: extension.identifier.value,
      isBuiltin: extension.isBuiltin,
      launchJsonExists
    });
  }
  logDebugSessionStop(session, adapterExitEvent) {
    const breakpoints = this.model.getBreakpoints();
    this.telemetryService.publicLog("debugSessionStop", {
      type: session && session.configuration.type,
      success: adapterExitEvent.emittedStopped || breakpoints.length === 0,
      sessionLengthInSeconds: adapterExitEvent.sessionLengthInSeconds,
      breakpointCount: breakpoints.length,
      watchExpressionsCount: this.model.getWatchExpressions().length
    });
  }
};
DebugTelemetry = __decorate([
  __param(1, ITelemetryService)
], DebugTelemetry);
class ViewModel {
  constructor(contextKeyService) {
    this.contextKeyService = contextKeyService;
    this.firstSessionStart = true;
    this._onDidFocusSession = new Emitter();
    this._onDidFocusThread = new Emitter();
    this._onDidFocusStackFrame = new Emitter();
    this._onDidSelectExpression = new Emitter();
    this._onDidEvaluateLazyExpression = new Emitter();
    this._onWillUpdateViews = new Emitter();
    contextKeyService.bufferChangeEvents(() => {
      this.expressionSelectedContextKey = CONTEXT_EXPRESSION_SELECTED.bindTo(contextKeyService);
      this.loadedScriptsSupportedContextKey = CONTEXT_LOADED_SCRIPTS_SUPPORTED.bindTo(contextKeyService);
      this.stepBackSupportedContextKey = CONTEXT_STEP_BACK_SUPPORTED.bindTo(contextKeyService);
      this.focusedSessionIsAttach = CONTEXT_FOCUSED_SESSION_IS_ATTACH.bindTo(contextKeyService);
      this.restartFrameSupportedContextKey = CONTEXT_RESTART_FRAME_SUPPORTED.bindTo(contextKeyService);
      this.stepIntoTargetsSupported = CONTEXT_STEP_INTO_TARGETS_SUPPORTED.bindTo(contextKeyService);
      this.jumpToCursorSupported = CONTEXT_JUMP_TO_CURSOR_SUPPORTED.bindTo(contextKeyService);
      this.setVariableSupported = CONTEXT_SET_VARIABLE_SUPPORTED.bindTo(contextKeyService);
      this.setExpressionSupported = CONTEXT_SET_EXPRESSION_SUPPORTED.bindTo(contextKeyService);
      this.multiSessionDebug = CONTEXT_MULTI_SESSION_DEBUG.bindTo(contextKeyService);
      this.terminateDebuggeeSupported = CONTEXT_TERMINATE_DEBUGGEE_SUPPORTED.bindTo(contextKeyService);
      this.suspendDebuggeeSupported = CONTEXT_SUSPEND_DEBUGGEE_SUPPORTED.bindTo(contextKeyService);
      this.disassembleRequestSupported = CONTEXT_DISASSEMBLE_REQUEST_SUPPORTED.bindTo(contextKeyService);
      this.focusedStackFrameHasInstructionPointerReference = CONTEXT_FOCUSED_STACK_FRAME_HAS_INSTRUCTION_POINTER_REFERENCE.bindTo(contextKeyService);
    });
  }
  getId() {
    return "root";
  }
  get focusedSession() {
    return this._focusedSession;
  }
  get focusedThread() {
    return this._focusedThread;
  }
  get focusedStackFrame() {
    return this._focusedStackFrame;
  }
  setFocus(stackFrame, thread, session, explicit) {
    const shouldEmitForStackFrame = this._focusedStackFrame !== stackFrame;
    const shouldEmitForSession = this._focusedSession !== session;
    const shouldEmitForThread = this._focusedThread !== thread;
    this._focusedStackFrame = stackFrame;
    this._focusedThread = thread;
    this._focusedSession = session;
    this.contextKeyService.bufferChangeEvents(() => {
      this.loadedScriptsSupportedContextKey.set(session ? !!session.capabilities.supportsLoadedSourcesRequest : false);
      this.stepBackSupportedContextKey.set(session ? !!session.capabilities.supportsStepBack : false);
      this.restartFrameSupportedContextKey.set(session ? !!session.capabilities.supportsRestartFrame : false);
      this.stepIntoTargetsSupported.set(session ? !!session.capabilities.supportsStepInTargetsRequest : false);
      this.jumpToCursorSupported.set(session ? !!session.capabilities.supportsGotoTargetsRequest : false);
      this.setVariableSupported.set(session ? !!session.capabilities.supportsSetVariable : false);
      this.setExpressionSupported.set(session ? !!session.capabilities.supportsSetExpression : false);
      this.terminateDebuggeeSupported.set(session ? !!session.capabilities.supportTerminateDebuggee : false);
      this.suspendDebuggeeSupported.set(session ? !!session.capabilities.supportSuspendDebuggee : false);
      this.disassembleRequestSupported.set(!!(session == null ? void 0 : session.capabilities.supportsDisassembleRequest));
      this.focusedStackFrameHasInstructionPointerReference.set(!!(stackFrame == null ? void 0 : stackFrame.instructionPointerReference));
      const attach = !!session && isSessionAttach(session);
      this.focusedSessionIsAttach.set(attach);
    });
    if (shouldEmitForSession) {
      this._onDidFocusSession.fire(session);
    }
    if (shouldEmitForStackFrame) {
      this._onDidFocusStackFrame.fire({ stackFrame, explicit, session });
    } else if (shouldEmitForThread) {
      this._onDidFocusThread.fire({ thread, explicit, session });
    }
  }
  get onDidFocusSession() {
    return this._onDidFocusSession.event;
  }
  get onDidFocusThread() {
    return this._onDidFocusThread.event;
  }
  get onDidFocusStackFrame() {
    return this._onDidFocusStackFrame.event;
  }
  getSelectedExpression() {
    return this.selectedExpression;
  }
  setSelectedExpression(expression, settingWatch) {
    this.selectedExpression = expression ? { expression, settingWatch } : void 0;
    this.expressionSelectedContextKey.set(!!expression);
    this._onDidSelectExpression.fire(this.selectedExpression);
  }
  get onDidSelectExpression() {
    return this._onDidSelectExpression.event;
  }
  get onDidEvaluateLazyExpression() {
    return this._onDidEvaluateLazyExpression.event;
  }
  updateViews() {
    this._onWillUpdateViews.fire();
  }
  get onWillUpdateViews() {
    return this._onWillUpdateViews.event;
  }
  isMultiSessionView() {
    return !!this.multiSessionDebug.get();
  }
  setMultiSessionView(isMultiSessionView) {
    this.multiSessionDebug.set(isMultiSessionView);
  }
  async evaluateLazyExpression(expression) {
    await expression.evaluateLazy();
    this._onDidEvaluateLazyExpression.fire(expression);
  }
}
let DebugService = class DebugService2 {
  constructor(editorService, paneCompositeService, viewsService, viewDescriptorService, notificationService, dialogService, layoutService, contextService, contextKeyService, lifecycleService, instantiationService, extensionService, fileService, configurationService, extensionHostDebugService, activityService, commandService, quickInputService, workspaceTrustRequestService, uriIdentityService) {
    this.editorService = editorService;
    this.paneCompositeService = paneCompositeService;
    this.viewsService = viewsService;
    this.viewDescriptorService = viewDescriptorService;
    this.notificationService = notificationService;
    this.dialogService = dialogService;
    this.layoutService = layoutService;
    this.contextService = contextService;
    this.contextKeyService = contextKeyService;
    this.lifecycleService = lifecycleService;
    this.instantiationService = instantiationService;
    this.extensionService = extensionService;
    this.fileService = fileService;
    this.configurationService = configurationService;
    this.extensionHostDebugService = extensionHostDebugService;
    this.activityService = activityService;
    this.commandService = commandService;
    this.quickInputService = quickInputService;
    this.workspaceTrustRequestService = workspaceTrustRequestService;
    this.uriIdentityService = uriIdentityService;
    this.disposables = new DisposableStore();
    this.initializing = false;
    this.sessionCancellationTokens = /* @__PURE__ */ new Map();
    this.haveDoneLazySetup = false;
    this.breakpointsToSendOnResourceSaved = /* @__PURE__ */ new Set();
    this._onDidChangeState = new Emitter();
    this._onDidNewSession = new Emitter();
    this._onWillNewSession = new Emitter();
    this._onDidEndSession = new Emitter();
    this.adapterManager = this.instantiationService.createInstance(AdapterManager, { onDidNewSession: this.onDidNewSession });
    this.disposables.add(this.adapterManager);
    this.configurationManager = this.instantiationService.createInstance(ConfigurationManager, this.adapterManager);
    this.disposables.add(this.configurationManager);
    this.debugStorage = this.instantiationService.createInstance(DebugStorage);
    this.chosenEnvironments = this.debugStorage.loadChosenEnvironments();
    this.model = this.instantiationService.createInstance(DebugModel, this.debugStorage);
    this.telemetry = this.instantiationService.createInstance(DebugTelemetry, this.model);
    this.viewModel = new ViewModel(contextKeyService);
    this.taskRunner = this.instantiationService.createInstance(DebugTaskRunner);
    this.disposables.add(this.fileService.onDidFilesChange((e) => this.onFileChanges(e)));
    this.disposables.add(this.lifecycleService.onWillShutdown(this.dispose, this));
    this.disposables.add(this.extensionHostDebugService.onAttachSession((event) => {
      const session = this.model.getSession(event.sessionId, true);
      if (session) {
        session.configuration.request = "attach";
        session.configuration.port = event.port;
        session.setSubId(event.subId);
        this.launchOrAttachToSession(session);
      }
    }));
    this.disposables.add(this.extensionHostDebugService.onTerminateSession((event) => {
      const session = this.model.getSession(event.sessionId);
      if (session && session.subId === event.subId) {
        session.disconnect();
      }
    }));
    this.disposables.add(this.viewModel.onDidFocusStackFrame(() => {
      this.onStateChange();
    }));
    this.disposables.add(this.viewModel.onDidFocusSession((session) => {
      this.onStateChange();
      if (session) {
        this.setExceptionBreakpointFallbackSession(session.getId());
      }
    }));
    this.disposables.add(Event.any(this.adapterManager.onDidRegisterDebugger, this.configurationManager.onDidSelectConfiguration)(() => {
      const debugUxValue = this.state !== 0 || this.configurationManager.getAllConfigurations().length > 0 && this.adapterManager.hasEnabledDebuggers() ? "default" : "simple";
      this.debugUx.set(debugUxValue);
      this.debugStorage.storeDebugUxState(debugUxValue);
    }));
    this.disposables.add(this.model.onDidChangeCallStack(() => {
      var _a2;
      const numberOfSessions = this.model.getSessions().filter((s) => !s.parentSession).length;
      (_a2 = this.activity) == null ? void 0 : _a2.dispose();
      if (numberOfSessions > 0) {
        const viewContainer2 = this.viewDescriptorService.getViewContainerByViewId(CALLSTACK_VIEW_ID);
        if (viewContainer2) {
          this.activity = this.activityService.showViewContainerActivity(viewContainer2.id, { badge: new NumberBadge(numberOfSessions, (n2) => n2 === 1 ? localize("1activeSession", "1 active session") : localize("nActiveSessions", "{0} active sessions", n2)) });
        }
      }
    }));
    this.disposables.add(editorService.onDidActiveEditorChange(() => {
      this.contextKeyService.bufferChangeEvents(() => {
        var _a2;
        if (editorService.activeEditor === DisassemblyViewInput.instance) {
          this.disassemblyViewFocus.set(true);
        } else {
          (_a2 = this.disassemblyViewFocus) == null ? void 0 : _a2.reset();
        }
      });
    }));
    this.disposables.add(this.lifecycleService.onBeforeShutdown(() => {
      var _a2;
      for (const editor of editorService.editors) {
        if (((_a2 = editor.resource) == null ? void 0 : _a2.scheme) === DEBUG_MEMORY_SCHEME) {
          editor.dispose();
        }
      }
    }));
    this.initContextKeys(contextKeyService);
  }
  initContextKeys(contextKeyService) {
    queueMicrotask(() => {
      contextKeyService.bufferChangeEvents(() => {
        this.debugType = CONTEXT_DEBUG_TYPE.bindTo(contextKeyService);
        this.debugState = CONTEXT_DEBUG_STATE.bindTo(contextKeyService);
        this.hasDebugged = CONTEXT_HAS_DEBUGGED.bindTo(contextKeyService);
        this.inDebugMode = CONTEXT_IN_DEBUG_MODE.bindTo(contextKeyService);
        this.debugUx = CONTEXT_DEBUG_UX.bindTo(contextKeyService);
        this.debugUx.set(this.debugStorage.loadDebugUxState());
        this.breakpointsExist = CONTEXT_BREAKPOINTS_EXIST.bindTo(contextKeyService);
        this.disassemblyViewFocus = CONTEXT_DISASSEMBLY_VIEW_FOCUS.bindTo(contextKeyService);
      });
      const setBreakpointsExistContext = () => this.breakpointsExist.set(!!(this.model.getBreakpoints().length || this.model.getDataBreakpoints().length || this.model.getFunctionBreakpoints().length));
      setBreakpointsExistContext();
      this.disposables.add(this.model.onDidChangeBreakpoints(() => setBreakpointsExistContext()));
    });
  }
  getModel() {
    return this.model;
  }
  getViewModel() {
    return this.viewModel;
  }
  getConfigurationManager() {
    return this.configurationManager;
  }
  getAdapterManager() {
    return this.adapterManager;
  }
  sourceIsNotAvailable(uri) {
    this.model.sourceIsNotAvailable(uri);
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    const focusedSession = this.viewModel.focusedSession;
    if (focusedSession) {
      return focusedSession.state;
    }
    return this.initializing ? 1 : 0;
  }
  get initializingOptions() {
    return this._initializingOptions;
  }
  startInitializingState(options) {
    if (!this.initializing) {
      this.initializing = true;
      this._initializingOptions = options;
      this.onStateChange();
    }
  }
  endInitializingState() {
    if (this.initializing) {
      this.initializing = false;
      this._initializingOptions = void 0;
      this.onStateChange();
    }
  }
  cancelTokens(id) {
    if (id) {
      const token = this.sessionCancellationTokens.get(id);
      if (token) {
        token.cancel();
        this.sessionCancellationTokens.delete(id);
      }
    } else {
      this.sessionCancellationTokens.forEach((t) => t.cancel());
      this.sessionCancellationTokens.clear();
    }
  }
  onStateChange() {
    const state = this.state;
    if (this.previousState !== state) {
      this.contextKeyService.bufferChangeEvents(() => {
        this.debugState.set(getStateLabel(state));
        this.inDebugMode.set(state !== 0);
        const debugUxValue = state !== 0 && state !== 1 || this.adapterManager.hasEnabledDebuggers() && this.configurationManager.selectedConfiguration.name ? "default" : "simple";
        this.debugUx.set(debugUxValue);
        this.debugStorage.storeDebugUxState(debugUxValue);
      });
      this.previousState = state;
      this._onDidChangeState.fire(state);
    }
  }
  get onDidChangeState() {
    return this._onDidChangeState.event;
  }
  get onDidNewSession() {
    return this._onDidNewSession.event;
  }
  get onWillNewSession() {
    return this._onWillNewSession.event;
  }
  get onDidEndSession() {
    return this._onDidEndSession.event;
  }
  lazySetup() {
    if (!this.haveDoneLazySetup) {
      this.disposables.add(this.fileService.registerProvider(DEBUG_MEMORY_SCHEME, new DebugMemoryFileSystemProvider(this)));
      this.haveDoneLazySetup = true;
    }
  }
  async startDebugging(launch, configOrName, options, saveBeforeStart = !(options == null ? void 0 : options.parentSession)) {
    const message = options && options.noDebug ? localize(
      "runTrust",
      "Running executes build tasks and program code from your workspace."
    ) : localize(
      "debugTrust",
      "Debugging executes build tasks and program code from your workspace."
    );
    const trust = await this.workspaceTrustRequestService.requestWorkspaceTrust({ message });
    if (!trust) {
      return false;
    }
    this.lazySetup();
    this.startInitializingState(options);
    this.hasDebugged.set(true);
    try {
      await this.extensionService.activateByEvent("onDebug");
      if (saveBeforeStart) {
        await saveAllBeforeDebugStart(this.configurationService, this.editorService);
      }
      await this.extensionService.whenInstalledExtensionsRegistered();
      let config;
      let compound;
      if (!configOrName) {
        configOrName = this.configurationManager.selectedConfiguration.name;
      }
      if (typeof configOrName === "string" && launch) {
        config = launch.getConfiguration(configOrName);
        compound = launch.getCompound(configOrName);
      } else if (typeof configOrName !== "string") {
        config = configOrName;
      }
      if (compound) {
        if (!compound.configurations) {
          throw new Error(localize({ key: "compoundMustHaveConfigurations", comment: ['compound indicates a "compounds" configuration item', '"configurations" is an attribute and should not be localized'] }, 'Compound must have "configurations" attribute set in order to start multiple configurations.'));
        }
        if (compound.preLaunchTask) {
          const taskResult = await this.taskRunner.runTaskAndCheckErrors((launch == null ? void 0 : launch.workspace) || this.contextService.getWorkspace(), compound.preLaunchTask);
          if (taskResult === 0) {
            this.endInitializingState();
            return false;
          }
        }
        if (compound.stopAll) {
          options = { ...options, compoundRoot: new DebugCompoundRoot() };
        }
        const values = await Promise.all(compound.configurations.map((configData) => {
          const name = typeof configData === "string" ? configData : configData.name;
          if (name === compound.name) {
            return Promise.resolve(false);
          }
          let launchForName;
          if (typeof configData === "string") {
            const launchesContainingName = this.configurationManager.getLaunches().filter((l) => !!l.getConfiguration(name));
            if (launchesContainingName.length === 1) {
              launchForName = launchesContainingName[0];
            } else if (launch && launchesContainingName.length > 1 && launchesContainingName.indexOf(launch) >= 0) {
              launchForName = launch;
            } else {
              throw new Error(launchesContainingName.length === 0 ? localize("noConfigurationNameInWorkspace", "Could not find launch configuration '{0}' in the workspace.", name) : localize("multipleConfigurationNamesInWorkspace", "There are multiple launch configurations '{0}' in the workspace. Use folder name to qualify the configuration.", name));
            }
          } else if (configData.folder) {
            const launchesMatchingConfigData = this.configurationManager.getLaunches().filter((l) => l.workspace && l.workspace.name === configData.folder && !!l.getConfiguration(configData.name));
            if (launchesMatchingConfigData.length === 1) {
              launchForName = launchesMatchingConfigData[0];
            } else {
              throw new Error(localize("noFolderWithName", "Can not find folder with name '{0}' for configuration '{1}' in compound '{2}'.", configData.folder, configData.name, compound.name));
            }
          }
          return this.createSession(launchForName, launchForName.getConfiguration(name), options);
        }));
        const result2 = values.every((success) => !!success);
        this.endInitializingState();
        return result2;
      }
      if (configOrName && !config) {
        const message2 = !!launch ? localize(
          "configMissing",
          "Configuration '{0}' is missing in 'launch.json'.",
          typeof configOrName === "string" ? configOrName : configOrName.name
        ) : localize(
          "launchJsonDoesNotExist",
          "'launch.json' does not exist for passed workspace folder."
        );
        throw new Error(message2);
      }
      const result = await this.createSession(launch, config, options);
      this.endInitializingState();
      return result;
    } catch (err) {
      this.notificationService.error(err);
      this.endInitializingState();
      return Promise.reject(err);
    }
  }
  async createSession(launch, config, options) {
    let type;
    if (config) {
      type = config.type;
    } else {
      config = /* @__PURE__ */ Object.create(null);
    }
    if (options && options.noDebug) {
      config.noDebug = true;
    } else if (options && typeof options.noDebug === "undefined" && options.parentSession && options.parentSession.configuration.noDebug) {
      config.noDebug = true;
    }
    const unresolvedConfig = deepClone(config);
    let guess;
    let activeEditor;
    if (!type) {
      activeEditor = this.editorService.activeEditor;
      if (activeEditor && activeEditor.resource) {
        type = this.chosenEnvironments[activeEditor.resource.toString()];
      }
      if (!type) {
        guess = await this.adapterManager.guessDebugger(false);
        if (guess) {
          type = guess.type;
        }
      }
    }
    const initCancellationToken = new CancellationTokenSource();
    const sessionId = generateUuid();
    this.sessionCancellationTokens.set(sessionId, initCancellationToken);
    const configByProviders = await this.configurationManager.resolveConfigurationByProviders(launch && launch.workspace ? launch.workspace.uri : void 0, type, config, initCancellationToken.token);
    if (configByProviders && configByProviders.type) {
      try {
        let resolvedConfig = await this.substituteVariables(launch, configByProviders);
        if (!resolvedConfig) {
          return false;
        }
        if (initCancellationToken.token.isCancellationRequested) {
          return false;
        }
        const workspace = (launch == null ? void 0 : launch.workspace) || this.contextService.getWorkspace();
        const taskResult = await this.taskRunner.runTaskAndCheckErrors(workspace, resolvedConfig.preLaunchTask);
        if (taskResult === 0) {
          return false;
        }
        const cfg = await this.configurationManager.resolveDebugConfigurationWithSubstitutedVariables(launch && launch.workspace ? launch.workspace.uri : void 0, type, resolvedConfig, initCancellationToken.token);
        if (!cfg) {
          if (launch && type && cfg === null && !initCancellationToken.token.isCancellationRequested) {
            await launch.openConfigFile({ preserveFocus: true, type }, initCancellationToken.token);
          }
          return false;
        }
        resolvedConfig = cfg;
        const dbg = this.adapterManager.getDebugger(resolvedConfig.type);
        if (!dbg || configByProviders.request !== "attach" && configByProviders.request !== "launch") {
          let message;
          if (configByProviders.request !== "attach" && configByProviders.request !== "launch") {
            message = configByProviders.request ? localize(
              "debugRequestNotSupported",
              "Attribute '{0}' has an unsupported value '{1}' in the chosen debug configuration.",
              "request",
              configByProviders.request
            ) : localize(
              "debugRequesMissing",
              "Attribute '{0}' is missing from the chosen debug configuration.",
              "request"
            );
          } else {
            message = resolvedConfig.type ? localize(
              "debugTypeNotSupported",
              "Configured debug type '{0}' is not supported.",
              resolvedConfig.type
            ) : localize(
              "debugTypeMissing",
              "Missing property 'type' for the chosen launch configuration."
            );
          }
          const actionList = [];
          actionList.push(new Action("installAdditionalDebuggers", localize(
            { key: "installAdditionalDebuggers", comment: ['Placeholder is the debug type, so for example "node", "python"'] },
            "Install {0} Extension",
            resolvedConfig.type
          ), void 0, true, async () => this.commandService.executeCommand("debug.installAdditionalDebuggers", resolvedConfig == null ? void 0 : resolvedConfig.type)));
          await this.showError(message, actionList);
          return false;
        }
        if (!dbg.enabled) {
          await this.showError(debuggerDisabledMessage(dbg.type), []);
          return false;
        }
        const result = await this.doCreateSession(sessionId, launch == null ? void 0 : launch.workspace, { resolved: resolvedConfig, unresolved: unresolvedConfig }, options);
        if (result && guess && activeEditor && activeEditor.resource) {
          this.chosenEnvironments[activeEditor.resource.toString()] = guess.type;
          this.debugStorage.storeChosenEnvironments(this.chosenEnvironments);
        }
        return result;
      } catch (err) {
        if (err && err.message) {
          await this.showError(err.message);
        } else if (this.contextService.getWorkbenchState() === 1) {
          await this.showError(localize(
            "noFolderWorkspaceDebugError",
            "The active file can not be debugged. Make sure it is saved and that you have a debug extension installed for that file type."
          ));
        }
        if (launch && !initCancellationToken.token.isCancellationRequested) {
          await launch.openConfigFile({ preserveFocus: true }, initCancellationToken.token);
        }
        return false;
      }
    }
    if (launch && type && configByProviders === null && !initCancellationToken.token.isCancellationRequested) {
      await launch.openConfigFile({ preserveFocus: true, type }, initCancellationToken.token);
    }
    return false;
  }
  async doCreateSession(sessionId, root, configuration, options) {
    const session = this.instantiationService.createInstance(DebugSession, sessionId, configuration, root, this.model, options);
    if ((options == null ? void 0 : options.startedByUser) && this.model.getSessions().some((s) => s.getLabel() === session.getLabel()) && configuration.resolved.suppressMultipleSessionWarning !== true) {
      const result = await this.dialogService.confirm({ message: localize(
        "multipleSession",
        "'{0}' is already running. Do you want to start another instance?",
        session.getLabel()
      ) });
      if (!result.confirmed) {
        return false;
      }
    }
    this.model.addSession(session);
    this.registerSessionListeners(session);
    this._onWillNewSession.fire(session);
    const openDebug = this.configurationService.getValue("debug").openDebug;
    if (!configuration.resolved.noDebug && (openDebug === "openOnSessionStart" || openDebug !== "neverOpen" && this.viewModel.firstSessionStart) && !session.suppressDebugView) {
      await this.paneCompositeService.openPaneComposite(VIEWLET_ID, 0);
    }
    try {
      await this.launchOrAttachToSession(session);
      const internalConsoleOptions = session.configuration.internalConsoleOptions || this.configurationService.getValue("debug").internalConsoleOptions;
      if (internalConsoleOptions === "openOnSessionStart" || this.viewModel.firstSessionStart && internalConsoleOptions === "openOnFirstSessionStart") {
        this.viewsService.openView(REPL_VIEW_ID, false);
      }
      this.viewModel.firstSessionStart = false;
      const showSubSessions = this.configurationService.getValue("debug").showSubSessionsInToolBar;
      const sessions = this.model.getSessions();
      const shownSessions = showSubSessions ? sessions : sessions.filter((s) => !s.parentSession);
      if (shownSessions.length > 1) {
        this.viewModel.setMultiSessionView(true);
      }
      this._onDidNewSession.fire(session);
      return true;
    } catch (error) {
      if (isCancellationError(error)) {
        return false;
      }
      if (session && session.getReplElements().length > 0) {
        this.viewsService.openView(REPL_VIEW_ID, false);
      }
      if (session.configuration && session.configuration.request === "attach" && session.configuration.__autoAttach) {
        return false;
      }
      const errorMessage = error instanceof Error ? error.message : error;
      if (error.showUser !== false) {
        await this.showError(errorMessage, isErrorWithActions(error) ? error.actions : []);
      }
      return false;
    }
  }
  async launchOrAttachToSession(session, forceFocus = false) {
    const dbgr = this.adapterManager.getDebugger(session.configuration.type);
    try {
      await session.initialize(dbgr);
      await session.launchOrAttach(session.configuration);
      const launchJsonExists = !!session.root && !!this.configurationService.getValue("launch", { resource: session.root.uri });
      await this.telemetry.logDebugSessionStart(dbgr, launchJsonExists);
      if (forceFocus || !this.viewModel.focusedSession || session.parentSession === this.viewModel.focusedSession && session.compact) {
        await this.focusStackFrame(void 0, void 0, session);
      }
    } catch (err) {
      if (this.viewModel.focusedSession === session) {
        await this.focusStackFrame(void 0);
      }
      return Promise.reject(err);
    }
  }
  registerSessionListeners(session) {
    const sessionRunningScheduler = new RunOnceScheduler(() => {
      if (session.state === 3 && this.viewModel.focusedSession === session) {
        this.viewModel.setFocus(void 0, this.viewModel.focusedThread, session, false);
      }
    }, 200);
    this.disposables.add(session.onDidChangeState(() => {
      if (session.state === 3 && this.viewModel.focusedSession === session) {
        sessionRunningScheduler.schedule();
      }
      if (session === this.viewModel.focusedSession) {
        this.onStateChange();
      }
    }));
    this.disposables.add(session.onDidEndAdapter(async (adapterExitEvent) => {
      if (adapterExitEvent) {
        if (adapterExitEvent.error) {
          this.notificationService.error(localize(
            "debugAdapterCrash",
            "Debug adapter process has terminated unexpectedly ({0})",
            adapterExitEvent.error.message || adapterExitEvent.error.toString()
          ));
        }
        this.telemetry.logDebugSessionStop(session, adapterExitEvent);
      }
      const extensionDebugSession = getExtensionHostDebugSession(session);
      if (extensionDebugSession && extensionDebugSession.state === 3 && extensionDebugSession.configuration.noDebug) {
        this.extensionHostDebugService.close(extensionDebugSession.getId());
      }
      if (session.configuration.postDebugTask) {
        const root = session.root ?? this.contextService.getWorkspace();
        try {
          await this.taskRunner.runTask(root, session.configuration.postDebugTask);
        } catch (err) {
          this.notificationService.error(err);
        }
      }
      this.endInitializingState();
      this.cancelTokens(session.getId());
      this._onDidEndSession.fire(session);
      const focusedSession = this.viewModel.focusedSession;
      if (focusedSession && focusedSession.getId() === session.getId()) {
        const { session: session2, thread, stackFrame } = getStackFrameThreadAndSessionToFocus(this.model, void 0, void 0, void 0, focusedSession);
        this.viewModel.setFocus(stackFrame, thread, session2, false);
      }
      if (this.model.getSessions().length === 0) {
        this.viewModel.setMultiSessionView(false);
        if (this.layoutService.isVisible("workbench.parts.sidebar") && this.configurationService.getValue("debug").openExplorerOnEnd) {
          this.paneCompositeService.openPaneComposite(VIEWLET_ID$1, 0);
        }
        const dataBreakpoints = this.model.getDataBreakpoints().filter((dbp) => !dbp.canPersist);
        dataBreakpoints.forEach((dbp) => this.model.removeDataBreakpoints(dbp.getId()));
        if (this.configurationService.getValue("debug").console.closeOnEnd) {
          const debugConsoleContainer = this.viewDescriptorService.getViewContainerByViewId(REPL_VIEW_ID);
          if (debugConsoleContainer && this.viewsService.isViewContainerVisible(debugConsoleContainer.id)) {
            this.viewsService.closeViewContainer(debugConsoleContainer.id);
          }
        }
      }
      this.model.removeExceptionBreakpointsForSession(session.getId());
    }));
  }
  async restartSession(session, restartData) {
    if (session.saveBeforeRestart) {
      await saveAllBeforeDebugStart(this.configurationService, this.editorService);
    }
    const isAutoRestart = !!restartData;
    const runTasks = async () => {
      if (isAutoRestart) {
        return Promise.resolve(1);
      }
      const root = session.root || this.contextService.getWorkspace();
      await this.taskRunner.runTask(root, session.configuration.preRestartTask);
      await this.taskRunner.runTask(root, session.configuration.postDebugTask);
      const taskResult1 = await this.taskRunner.runTaskAndCheckErrors(root, session.configuration.preLaunchTask);
      if (taskResult1 !== 1) {
        return taskResult1;
      }
      return this.taskRunner.runTaskAndCheckErrors(root, session.configuration.postRestartTask);
    };
    const extensionDebugSession = getExtensionHostDebugSession(session);
    if (extensionDebugSession) {
      const taskResult = await runTasks();
      if (taskResult === 1) {
        this.extensionHostDebugService.reload(extensionDebugSession.getId());
      }
      return;
    }
    let needsToSubstitute = false;
    let unresolved;
    const launch = session.root ? this.configurationManager.getLaunch(session.root.uri) : void 0;
    if (launch) {
      unresolved = launch.getConfiguration(session.configuration.name);
      if (unresolved && !equals(unresolved, session.unresolvedConfiguration)) {
        unresolved.type = session.configuration.type;
        unresolved.noDebug = session.configuration.noDebug;
        needsToSubstitute = true;
      }
    }
    let resolved = session.configuration;
    if (launch && needsToSubstitute && unresolved) {
      const initCancellationToken = new CancellationTokenSource();
      this.sessionCancellationTokens.set(session.getId(), initCancellationToken);
      const resolvedByProviders = await this.configurationManager.resolveConfigurationByProviders(launch.workspace ? launch.workspace.uri : void 0, unresolved.type, unresolved, initCancellationToken.token);
      if (resolvedByProviders) {
        resolved = await this.substituteVariables(launch, resolvedByProviders);
        if (resolved && !initCancellationToken.token.isCancellationRequested) {
          resolved = await this.configurationManager.resolveDebugConfigurationWithSubstitutedVariables(launch && launch.workspace ? launch.workspace.uri : void 0, unresolved.type, resolved, initCancellationToken.token);
        }
      } else {
        resolved = resolvedByProviders;
      }
    }
    if (resolved) {
      session.setConfiguration({ resolved, unresolved });
    }
    session.configuration.__restart = restartData;
    if (session.capabilities.supportsRestartRequest) {
      const taskResult = await runTasks();
      if (taskResult === 1) {
        await session.restart();
      }
      return;
    }
    const shouldFocus = !!this.viewModel.focusedSession && session.getId() === this.viewModel.focusedSession.getId();
    if (isAutoRestart) {
      await session.disconnect(true);
    } else {
      await session.terminate(true);
    }
    return new Promise((c, e) => {
      setTimeout(async () => {
        const taskResult = await runTasks();
        if (taskResult !== 1) {
          return;
        }
        if (!resolved) {
          return c(void 0);
        }
        try {
          await this.launchOrAttachToSession(session, shouldFocus);
          this._onDidNewSession.fire(session);
          c(void 0);
        } catch (error) {
          e(error);
        }
      }, 300);
    });
  }
  async stopSession(session, disconnect = false, suspend = false) {
    if (session) {
      return disconnect ? session.disconnect(void 0, suspend) : session.terminate();
    }
    const sessions = this.model.getSessions();
    if (sessions.length === 0) {
      this.taskRunner.cancel();
      await this.quickInputService.cancel();
      this.endInitializingState();
      this.cancelTokens(void 0);
    }
    return Promise.all(sessions.map((s) => disconnect ? s.disconnect(void 0, suspend) : s.terminate()));
  }
  async substituteVariables(launch, config) {
    const dbg = this.adapterManager.getDebugger(config.type);
    if (dbg) {
      let folder = void 0;
      if (launch && launch.workspace) {
        folder = launch.workspace;
      } else {
        const folders = this.contextService.getWorkspace().folders;
        if (folders.length === 1) {
          folder = folders[0];
        }
      }
      try {
        return await dbg.substituteVariables(folder, config);
      } catch (err) {
        this.showError(err.message, void 0, !!(launch == null ? void 0 : launch.getConfiguration(config.name)));
        return void 0;
      }
    }
    return Promise.resolve(config);
  }
  async showError(message, errorActions = [], promptLaunchJson = true) {
    const configureAction = new Action(
      DEBUG_CONFIGURE_COMMAND_ID,
      DEBUG_CONFIGURE_LABEL,
      void 0,
      true,
      () => this.commandService.executeCommand(DEBUG_CONFIGURE_COMMAND_ID)
    );
    const actions = errorActions.filter((action) => action.id.endsWith(".command")).length > 0 ? errorActions : [...errorActions, ...promptLaunchJson ? [configureAction] : []];
    await this.dialogService.prompt({
      type: Severity.Error,
      message,
      buttons: actions.map((action) => ({
        label: action.label,
        run: () => action.run()
      })),
      cancelButton: true
    });
  }
  async focusStackFrame(_stackFrame, _thread, _session, options) {
    const { stackFrame, thread, session } = getStackFrameThreadAndSessionToFocus(this.model, _stackFrame, _thread, _session);
    if (stackFrame) {
      const editor = await stackFrame.openInEditor(this.editorService, (options == null ? void 0 : options.preserveFocus) ?? true, options == null ? void 0 : options.sideBySide, options == null ? void 0 : options.pinned);
      if (editor) {
        if (editor.input === DisassemblyViewInput.instance)
          ;
        else {
          const control = editor.getControl();
          if (stackFrame && isCodeEditor(control) && control.hasModel()) {
            const model = control.getModel();
            const lineNumber = stackFrame.range.startLineNumber;
            if (lineNumber >= 1 && lineNumber <= model.getLineCount()) {
              const lineContent = control.getModel().getLineContent(lineNumber);
              alert(localize(
                { key: "debuggingPaused", comment: ['First placeholder is the file line content, second placeholder is the reason why debugging is stopped, for example "breakpoint", third is the stack frame name, and last is the line number.'] },
                "{0}, debugging paused {1}, {2}:{3}",
                lineContent,
                thread && thread.stoppedDetails ? `, reason ${thread.stoppedDetails.reason}` : "",
                stackFrame.source ? stackFrame.source.name : "",
                stackFrame.range.startLineNumber
              ));
            }
          }
        }
      }
    }
    if (session) {
      this.debugType.set(session.configuration.type);
    } else {
      this.debugType.reset();
    }
    this.viewModel.setFocus(stackFrame, thread, session, !!(options == null ? void 0 : options.explicit));
  }
  addWatchExpression(name) {
    const we = this.model.addWatchExpression(name);
    if (!name) {
      this.viewModel.setSelectedExpression(we, false);
    }
    this.debugStorage.storeWatchExpressions(this.model.getWatchExpressions());
  }
  renameWatchExpression(id, newName) {
    this.model.renameWatchExpression(id, newName);
    this.debugStorage.storeWatchExpressions(this.model.getWatchExpressions());
  }
  moveWatchExpression(id, position) {
    this.model.moveWatchExpression(id, position);
    this.debugStorage.storeWatchExpressions(this.model.getWatchExpressions());
  }
  removeWatchExpressions(id) {
    this.model.removeWatchExpressions(id);
    this.debugStorage.storeWatchExpressions(this.model.getWatchExpressions());
  }
  canSetBreakpointsIn(model) {
    return this.adapterManager.canSetBreakpointsIn(model);
  }
  async enableOrDisableBreakpoints(enable, breakpoint2) {
    if (breakpoint2) {
      this.model.setEnablement(breakpoint2, enable);
      this.debugStorage.storeBreakpoints(this.model);
      if (breakpoint2 instanceof Breakpoint) {
        await this.sendBreakpoints(breakpoint2.originalUri);
      } else if (breakpoint2 instanceof FunctionBreakpoint) {
        await this.sendFunctionBreakpoints();
      } else if (breakpoint2 instanceof DataBreakpoint) {
        await this.sendDataBreakpoints();
      } else if (breakpoint2 instanceof InstructionBreakpoint) {
        await this.sendInstructionBreakpoints();
      } else {
        await this.sendExceptionBreakpoints();
      }
    } else {
      this.model.enableOrDisableAllBreakpoints(enable);
      this.debugStorage.storeBreakpoints(this.model);
      await this.sendAllBreakpoints();
    }
    this.debugStorage.storeBreakpoints(this.model);
  }
  async addBreakpoints(uri, rawBreakpoints, ariaAnnounce = true) {
    const breakpoints = this.model.addBreakpoints(uri, rawBreakpoints);
    if (ariaAnnounce) {
      breakpoints.forEach((bp) => status(localize(
        "breakpointAdded",
        "Added breakpoint, line {0}, file {1}",
        bp.lineNumber,
        uri.fsPath
      )));
    }
    this.debugStorage.storeBreakpoints(this.model);
    await this.sendBreakpoints(uri);
    this.debugStorage.storeBreakpoints(this.model);
    return breakpoints;
  }
  async updateBreakpoints(uri, data, sendOnResourceSaved) {
    this.model.updateBreakpoints(data);
    this.debugStorage.storeBreakpoints(this.model);
    if (sendOnResourceSaved) {
      this.breakpointsToSendOnResourceSaved.add(uri);
    } else {
      await this.sendBreakpoints(uri);
      this.debugStorage.storeBreakpoints(this.model);
    }
  }
  async removeBreakpoints(id) {
    const toRemove = this.model.getBreakpoints().filter((bp) => !id || bp.getId() === id);
    toRemove.forEach((bp) => status(localize(
      "breakpointRemoved",
      "Removed breakpoint, line {0}, file {1}",
      bp.lineNumber,
      bp.uri.fsPath
    )));
    const urisToClear = distinct(toRemove, (bp) => bp.originalUri.toString()).map((bp) => bp.originalUri);
    this.model.removeBreakpoints(toRemove);
    this.debugStorage.storeBreakpoints(this.model);
    await Promise.all(urisToClear.map((uri) => this.sendBreakpoints(uri)));
  }
  setBreakpointsActivated(activated) {
    this.model.setBreakpointsActivated(activated);
    return this.sendAllBreakpoints();
  }
  addFunctionBreakpoint(name, id) {
    this.model.addFunctionBreakpoint(name || "", id);
  }
  async updateFunctionBreakpoint(id, update) {
    this.model.updateFunctionBreakpoint(id, update);
    this.debugStorage.storeBreakpoints(this.model);
    await this.sendFunctionBreakpoints();
  }
  async removeFunctionBreakpoints(id) {
    this.model.removeFunctionBreakpoints(id);
    this.debugStorage.storeBreakpoints(this.model);
    await this.sendFunctionBreakpoints();
  }
  async addDataBreakpoint(label, dataId, canPersist, accessTypes, accessType) {
    this.model.addDataBreakpoint(label, dataId, canPersist, accessTypes, accessType);
    this.debugStorage.storeBreakpoints(this.model);
    await this.sendDataBreakpoints();
    this.debugStorage.storeBreakpoints(this.model);
  }
  async removeDataBreakpoints(id) {
    this.model.removeDataBreakpoints(id);
    this.debugStorage.storeBreakpoints(this.model);
    await this.sendDataBreakpoints();
  }
  async addInstructionBreakpoint(address, offset, condition, hitCondition) {
    this.model.addInstructionBreakpoint(address, offset, condition, hitCondition);
    this.debugStorage.storeBreakpoints(this.model);
    await this.sendInstructionBreakpoints();
    this.debugStorage.storeBreakpoints(this.model);
  }
  async removeInstructionBreakpoints(address) {
    this.model.removeInstructionBreakpoints(address);
    this.debugStorage.storeBreakpoints(this.model);
    await this.sendInstructionBreakpoints();
  }
  setExceptionBreakpointFallbackSession(sessionId) {
    this.model.setExceptionBreakpointFallbackSession(sessionId);
    this.debugStorage.storeBreakpoints(this.model);
  }
  setExceptionBreakpointsForSession(session, data) {
    this.model.setExceptionBreakpointsForSession(session.getId(), data);
    this.debugStorage.storeBreakpoints(this.model);
  }
  async setExceptionBreakpointCondition(exceptionBreakpoint, condition) {
    this.model.setExceptionBreakpointCondition(exceptionBreakpoint, condition);
    this.debugStorage.storeBreakpoints(this.model);
    await this.sendExceptionBreakpoints();
  }
  async sendAllBreakpoints(session) {
    const setBreakpointsPromises = distinct(this.model.getBreakpoints(), (bp) => bp.originalUri.toString()).map((bp) => this.sendBreakpoints(bp.originalUri, false, session));
    if (session == null ? void 0 : session.capabilities.supportsConfigurationDoneRequest) {
      await Promise.all([
        ...setBreakpointsPromises,
        this.sendFunctionBreakpoints(session),
        this.sendDataBreakpoints(session),
        this.sendInstructionBreakpoints(session),
        this.sendExceptionBreakpoints(session)
      ]);
    } else {
      await Promise.all(setBreakpointsPromises);
      await this.sendFunctionBreakpoints(session);
      await this.sendDataBreakpoints(session);
      await this.sendInstructionBreakpoints(session);
      await this.sendExceptionBreakpoints(session);
    }
  }
  async sendBreakpoints(modelUri, sourceModified = false, session) {
    const breakpointsToSend = this.model.getBreakpoints({ originalUri: modelUri, enabledOnly: true });
    await sendToOneOrAllSessions(this.model, session, async (s) => {
      if (!s.configuration.noDebug) {
        await s.sendBreakpoints(modelUri, breakpointsToSend, sourceModified);
      }
    });
  }
  async sendFunctionBreakpoints(session) {
    const breakpointsToSend = this.model.getFunctionBreakpoints().filter((fbp) => fbp.enabled && this.model.areBreakpointsActivated());
    await sendToOneOrAllSessions(this.model, session, async (s) => {
      if (s.capabilities.supportsFunctionBreakpoints && !s.configuration.noDebug) {
        await s.sendFunctionBreakpoints(breakpointsToSend);
      }
    });
  }
  async sendDataBreakpoints(session) {
    const breakpointsToSend = this.model.getDataBreakpoints().filter((fbp) => fbp.enabled && this.model.areBreakpointsActivated());
    await sendToOneOrAllSessions(this.model, session, async (s) => {
      if (s.capabilities.supportsDataBreakpoints && !s.configuration.noDebug) {
        await s.sendDataBreakpoints(breakpointsToSend);
      }
    });
  }
  async sendInstructionBreakpoints(session) {
    const breakpointsToSend = this.model.getInstructionBreakpoints().filter((fbp) => fbp.enabled && this.model.areBreakpointsActivated());
    await sendToOneOrAllSessions(this.model, session, async (s) => {
      if (s.capabilities.supportsInstructionBreakpoints && !s.configuration.noDebug) {
        await s.sendInstructionBreakpoints(breakpointsToSend);
      }
    });
  }
  sendExceptionBreakpoints(session) {
    return sendToOneOrAllSessions(this.model, session, async (s) => {
      const enabledExceptionBps = this.model.getExceptionBreakpointsForSession(s.getId()).filter((exb) => exb.enabled);
      if (s.capabilities.supportsConfigurationDoneRequest && (!s.capabilities.exceptionBreakpointFilters || s.capabilities.exceptionBreakpointFilters.length === 0)) {
        return;
      }
      if (!s.configuration.noDebug) {
        await s.sendExceptionBreakpoints(enabledExceptionBps);
      }
    });
  }
  onFileChanges(fileChangesEvent) {
    const toRemove = this.model.getBreakpoints().filter((bp) => fileChangesEvent.contains(bp.originalUri, 2));
    if (toRemove.length) {
      this.model.removeBreakpoints(toRemove);
    }
    const toSend = [];
    for (const uri of this.breakpointsToSendOnResourceSaved) {
      if (fileChangesEvent.contains(uri, 0)) {
        toSend.push(uri);
      }
    }
    for (const uri of toSend) {
      this.breakpointsToSendOnResourceSaved.delete(uri);
      this.sendBreakpoints(uri, true);
    }
  }
  async runTo(uri, lineNumber, column) {
    let breakpointToRemove;
    let threadToContinue = this.getViewModel().focusedThread;
    const addTempBreakPoint = async () => {
      const bpExists = !!this.getModel().getBreakpoints({ column, lineNumber, uri }).length;
      if (!bpExists) {
        const addResult = await this.addAndValidateBreakpoints(uri, lineNumber, column);
        if (addResult.thread) {
          threadToContinue = addResult.thread;
        }
        if (addResult.breakpoint) {
          breakpointToRemove = addResult.breakpoint;
        }
      }
      return { threadToContinue, breakpointToRemove };
    };
    const removeTempBreakPoint = (state) => {
      if (state === 2 || state === 0) {
        if (breakpointToRemove) {
          this.removeBreakpoints(breakpointToRemove.getId());
        }
        return true;
      }
      return false;
    };
    await addTempBreakPoint();
    if (this.state === 0) {
      const { launch, name, getConfig } = this.getConfigurationManager().selectedConfiguration;
      const config = await getConfig();
      const configOrName = config ? Object.assign(deepClone(config), {}) : name;
      const listener = this.onDidChangeState((state) => {
        if (removeTempBreakPoint(state)) {
          listener.dispose();
        }
      });
      await this.startDebugging(launch, configOrName, void 0, true);
    }
    if (this.state === 2) {
      const focusedSession = this.getViewModel().focusedSession;
      if (!focusedSession || !threadToContinue) {
        return;
      }
      const listener = threadToContinue.session.onDidChangeState(() => {
        if (removeTempBreakPoint(focusedSession.state)) {
          listener.dispose();
        }
      });
      await threadToContinue.continue();
    }
  }
  async addAndValidateBreakpoints(uri, lineNumber, column) {
    const debugModel = this.getModel();
    const viewModel = this.getViewModel();
    const breakpoints = await this.addBreakpoints(uri, [{ lineNumber, column }], false);
    const breakpoint2 = breakpoints == null ? void 0 : breakpoints[0];
    if (!breakpoint2) {
      return { breakpoint: void 0, thread: viewModel.focusedThread };
    }
    if (!breakpoint2.verified) {
      let listener;
      await raceTimeout(new Promise((resolve) => {
        listener = debugModel.onDidChangeBreakpoints(() => {
          if (breakpoint2.verified) {
            resolve();
          }
        });
      }), 2e3);
      listener.dispose();
    }
    let bestThread = viewModel.focusedThread;
    let bestScore = 0;
    for (const sessionId of breakpoint2.sessionsThatVerified) {
      const session = debugModel.getSession(sessionId);
      if (!session) {
        continue;
      }
      const threads = session.getAllThreads().filter((t) => t.stopped);
      if (bestScore < 3) {
        if (viewModel.focusedThread && threads.includes(viewModel.focusedThread)) {
          bestThread = viewModel.focusedThread;
          bestScore = 3;
        }
      }
      if (bestScore < 2) {
        const pausedInThisFile = threads.find((t) => {
          const top = t.getTopStackFrame();
          return top && this.uriIdentityService.extUri.isEqual(top.source.uri, uri);
        });
        if (pausedInThisFile) {
          bestThread = pausedInThisFile;
          bestScore = 2;
        }
      }
      if (bestScore < 1) {
        bestThread = threads[0];
        bestScore = 2;
      }
    }
    return { thread: bestThread, breakpoint: breakpoint2 };
  }
};
DebugService = __decorate([
  __param(0, IEditorService),
  __param(1, IPaneCompositePartService),
  __param(2, IViewsService),
  __param(3, IViewDescriptorService),
  __param(4, INotificationService),
  __param(5, IDialogService),
  __param(6, IWorkbenchLayoutService),
  __param(7, IWorkspaceContextService),
  __param(8, IContextKeyService),
  __param(9, ILifecycleService),
  __param(10, IInstantiationService),
  __param(11, IExtensionService),
  __param(12, IFileService),
  __param(13, IConfigurationService),
  __param(14, IExtensionHostDebugService),
  __param(15, IActivityService),
  __param(16, ICommandService),
  __param(17, IQuickInputService),
  __param(18, IWorkspaceTrustRequestService),
  __param(19, IUriIdentityService)
], DebugService);
function getStackFrameThreadAndSessionToFocus(model, stackFrame, thread, session, avoidSession) {
  if (!session) {
    if (stackFrame || thread) {
      session = stackFrame ? stackFrame.thread.session : thread.session;
    } else {
      const sessions = model.getSessions();
      const stoppedSession = sessions.find((s) => s.state === 2);
      session = stoppedSession || sessions.find((s) => s !== avoidSession && s !== (avoidSession == null ? void 0 : avoidSession.parentSession)) || (sessions.length ? sessions[0] : void 0);
    }
  }
  if (!thread) {
    if (stackFrame) {
      thread = stackFrame.thread;
    } else {
      const threads = session ? session.getAllThreads() : void 0;
      const stoppedThread = threads && threads.find((t) => t.stopped);
      thread = stoppedThread || (threads && threads.length ? threads[0] : void 0);
    }
  }
  if (!stackFrame && thread) {
    stackFrame = thread.getTopStackFrame();
  }
  return { session, thread, stackFrame };
}
async function sendToOneOrAllSessions(model, session, send) {
  if (session) {
    await send(session);
  } else {
    await Promise.all(model.getSessions().map((s) => send(s)));
  }
}
class LanguageFeaturesService {
  constructor() {
    this.referenceProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.renameProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.codeActionProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.definitionProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.typeDefinitionProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.declarationProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.implementationProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.documentSymbolProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.inlayHintsProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.colorProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.codeLensProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.documentFormattingEditProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.documentRangeFormattingEditProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.onTypeFormattingEditProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.signatureHelpProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.hoverProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.documentHighlightProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.selectionRangeProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.foldingRangeProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.linkProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.inlineCompletionsProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.completionProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.linkedEditingRangeProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.inlineValuesProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.evaluatableExpressionProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.documentRangeSemanticTokensProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.documentSemanticTokensProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.documentOnDropEditProvider = new LanguageFeatureRegistry(this._score.bind(this));
    this.documentPasteEditProvider = new LanguageFeatureRegistry(this._score.bind(this));
  }
  setNotebookTypeResolver(resolver) {
    this._notebookTypeResolver = resolver;
  }
  _score(uri) {
    var _a2;
    return (_a2 = this._notebookTypeResolver) == null ? void 0 : _a2.call(this, uri);
  }
}
const _BaseConfigurationResolverService = class _BaseConfigurationResolverService extends AbstractVariableResolverService {
  constructor(context, envVariablesPromise, editorService, configurationService, commandService, workspaceContextService, quickInputService, labelService, pathService, extensionService) {
    super({
      getFolderUri: (folderName) => {
        const folder = workspaceContextService.getWorkspace().folders.filter((f) => f.name === folderName).pop();
        return folder ? folder.uri : void 0;
      },
      getWorkspaceFolderCount: () => {
        return workspaceContextService.getWorkspace().folders.length;
      },
      getConfigurationValue: (folderUri, suffix) => {
        return configurationService.getValue(suffix, folderUri ? { resource: folderUri } : {});
      },
      getAppRoot: () => {
        return context.getAppRoot();
      },
      getExecPath: () => {
        return context.getExecPath();
      },
      getFilePath: () => {
        const fileResource = EditorResourceAccessor.getOriginalUri(editorService.activeEditor, {
          supportSideBySide: SideBySideEditor.PRIMARY,
          filterByScheme: [Schemas.file, Schemas.vscodeUserData, this.pathService.defaultUriScheme]
        });
        if (!fileResource) {
          return void 0;
        }
        return this.labelService.getUriLabel(fileResource, { noPrefix: true });
      },
      getWorkspaceFolderPathForFile: () => {
        const fileResource = EditorResourceAccessor.getOriginalUri(editorService.activeEditor, {
          supportSideBySide: SideBySideEditor.PRIMARY,
          filterByScheme: [Schemas.file, Schemas.vscodeUserData, this.pathService.defaultUriScheme]
        });
        if (!fileResource) {
          return void 0;
        }
        const wsFolder = workspaceContextService.getWorkspaceFolder(fileResource);
        if (!wsFolder) {
          return void 0;
        }
        return this.labelService.getUriLabel(wsFolder.uri, { noPrefix: true });
      },
      getSelectedText: () => {
        const activeTextEditorControl = editorService.activeTextEditorControl;
        let activeControl = null;
        if (isCodeEditor(activeTextEditorControl)) {
          activeControl = activeTextEditorControl;
        } else if (isDiffEditor(activeTextEditorControl)) {
          const original2 = activeTextEditorControl.getOriginalEditor();
          const modified = activeTextEditorControl.getModifiedEditor();
          activeControl = original2.hasWidgetFocus() ? original2 : modified;
        }
        const activeModel = activeControl == null ? void 0 : activeControl.getModel();
        const activeSelection = activeControl == null ? void 0 : activeControl.getSelection();
        if (activeModel && activeSelection) {
          return activeModel.getValueInRange(activeSelection);
        }
        return void 0;
      },
      getLineNumber: () => {
        const activeTextEditorControl = editorService.activeTextEditorControl;
        if (isCodeEditor(activeTextEditorControl)) {
          const selection = activeTextEditorControl.getSelection();
          if (selection) {
            const lineNumber = selection.positionLineNumber;
            return String(lineNumber);
          }
        }
        return void 0;
      },
      getExtension: (id) => {
        return extensionService.getExtension(id);
      }
    }, labelService, pathService.userHome().then((home) => home.path), envVariablesPromise);
    this.configurationService = configurationService;
    this.commandService = commandService;
    this.workspaceContextService = workspaceContextService;
    this.quickInputService = quickInputService;
    this.labelService = labelService;
    this.pathService = pathService;
    this.userInputAccessQueue = new Queue();
  }
  async resolveWithInteractionReplace(folder, config, section, variables, target) {
    config = await this.resolveAnyAsync(folder, config);
    return this.resolveWithInteraction(folder, config, section, variables, target).then((mapping) => {
      if (!mapping) {
        return null;
      } else if (mapping.size > 0) {
        return this.resolveAnyAsync(folder, config, Object.fromEntries(mapping));
      } else {
        return config;
      }
    });
  }
  async resolveWithInteraction(folder, config, section, variables, target) {
    const resolved = await this.resolveAnyMap(folder, config);
    config = resolved.newConfig;
    const allVariableMapping = resolved.resolvedVariables;
    return this.resolveWithInputAndCommands(folder, config, variables, section, target).then((inputOrCommandMapping) => {
      if (this.updateMapping(inputOrCommandMapping, allVariableMapping)) {
        return allVariableMapping;
      }
      return void 0;
    });
  }
  updateMapping(newMapping, fullMapping) {
    if (!newMapping) {
      return false;
    }
    for (const [key, value] of Object.entries(newMapping)) {
      fullMapping.set(key, value);
    }
    return true;
  }
  async resolveWithInputAndCommands(folder, configuration, variableToCommandMap, section, target) {
    var _a2, _b2, _c2;
    if (!configuration) {
      return Promise.resolve(void 0);
    }
    let inputs = [];
    if (this.workspaceContextService.getWorkbenchState() !== 1 && section) {
      const overrides = folder ? { resource: folder.uri } : {};
      const result = this.configurationService.inspect(section, overrides);
      if (result && (result.userValue || result.workspaceValue || result.workspaceFolderValue)) {
        switch (target) {
          case 2:
            inputs = (_a2 = result.userValue) == null ? void 0 : _a2.inputs;
            break;
          case 5:
            inputs = (_b2 = result.workspaceValue) == null ? void 0 : _b2.inputs;
            break;
          default:
            inputs = (_c2 = result.workspaceFolderValue) == null ? void 0 : _c2.inputs;
        }
      } else {
        const valueResult = this.configurationService.getValue(section, overrides);
        if (valueResult) {
          inputs = valueResult.inputs;
        }
      }
    }
    const variables = [];
    this.findVariables(configuration, variables);
    const variableValues = /* @__PURE__ */ Object.create(null);
    for (const variable of variables) {
      const [type, name] = variable.split(":", 2);
      let result;
      switch (type) {
        case "input":
          result = await this.showUserInput(name, inputs);
          break;
        case "command": {
          const commandId = (variableToCommandMap ? variableToCommandMap[name] : void 0) || name;
          result = await this.commandService.executeCommand(commandId, configuration);
          if (typeof result !== "string" && !isUndefinedOrNull(result)) {
            throw new Error(localize("commandVariable.noStringType", "Cannot substitute command variable '{0}' because command did not return a result of type string.", commandId));
          }
          break;
        }
        default:
          if (this._contributedVariables.has(variable)) {
            result = await this._contributedVariables.get(variable)();
          }
      }
      if (typeof result === "string") {
        variableValues[variable] = result;
      } else {
        return void 0;
      }
    }
    return variableValues;
  }
  findVariables(object, variables) {
    if (typeof object === "string") {
      let matches;
      while ((matches = _BaseConfigurationResolverService.INPUT_OR_COMMAND_VARIABLES_PATTERN.exec(object)) !== null) {
        if (matches.length === 4) {
          const command = matches[1];
          if (variables.indexOf(command) < 0) {
            variables.push(command);
          }
        }
      }
      for (const contributed of this._contributedVariables.keys()) {
        if (variables.indexOf(contributed) < 0 && object.indexOf("${" + contributed + "}") >= 0) {
          variables.push(contributed);
        }
      }
    } else if (Array.isArray(object)) {
      for (const value of object) {
        this.findVariables(value, variables);
      }
    } else if (object) {
      for (const value of Object.values(object)) {
        this.findVariables(value, variables);
      }
    }
  }
  showUserInput(variable, inputInfos) {
    if (!inputInfos) {
      return Promise.reject(new Error(localize(
        "inputVariable.noInputSection",
        "Variable '{0}' must be defined in an '{1}' section of the debug or task configuration.",
        variable,
        "input"
      )));
    }
    const info = inputInfos.filter((item) => item.id === variable).pop();
    if (info) {
      const missingAttribute = (attrName) => {
        throw new Error(localize("inputVariable.missingAttribute", "Input variable '{0}' is of type '{1}' and must include '{2}'.", variable, info.type, attrName));
      };
      switch (info.type) {
        case "promptString": {
          if (!isString(info.description)) {
            missingAttribute("description");
          }
          const inputOptions = { prompt: info.description, ignoreFocusLost: true };
          if (info.default) {
            inputOptions.value = info.default;
          }
          if (info.password) {
            inputOptions.password = info.password;
          }
          return this.userInputAccessQueue.queue(() => this.quickInputService.input(inputOptions)).then((resolvedInput) => {
            return resolvedInput;
          });
        }
        case "pickString": {
          if (!isString(info.description)) {
            missingAttribute("description");
          }
          if (Array.isArray(info.options)) {
            for (const pickOption of info.options) {
              if (!isString(pickOption) && !isString(pickOption.value)) {
                missingAttribute("value");
              }
            }
          } else {
            missingAttribute("options");
          }
          const picks = new Array();
          for (const pickOption of info.options) {
            const value = isString(pickOption) ? pickOption : pickOption.value;
            const label = isString(pickOption) ? void 0 : pickOption.label;
            const item = {
              label: label ? `${label}: ${value}` : value,
              value
            };
            if (value === info.default) {
              item.description = localize("inputVariable.defaultInputValue", "(Default)");
              picks.unshift(item);
            } else {
              picks.push(item);
            }
          }
          const pickOptions = { placeHolder: info.description, matchOnDetail: true, ignoreFocusLost: true };
          return this.userInputAccessQueue.queue(() => this.quickInputService.pick(picks, pickOptions, void 0)).then((resolvedInput) => {
            if (resolvedInput) {
              return resolvedInput.value;
            }
            return void 0;
          });
        }
        case "command": {
          if (!isString(info.command)) {
            missingAttribute("command");
          }
          return this.userInputAccessQueue.queue(() => this.commandService.executeCommand(info.command, info.args)).then((result) => {
            if (typeof result === "string" || isUndefinedOrNull(result)) {
              return result;
            }
            throw new Error(localize("inputVariable.command.noStringType", "Cannot substitute input variable '{0}' because command '{1}' did not return a result of type string.", variable, info.command));
          });
        }
        default:
          throw new Error(localize("inputVariable.unknownType", "Input variable '{0}' can only be of type 'promptString', 'pickString', or 'command'.", variable));
      }
    }
    return Promise.reject(new Error(localize(
      "inputVariable.undefinedVariable",
      "Undefined input variable '{0}' encountered. Remove or define '{0}' to continue.",
      variable
    )));
  }
};
_BaseConfigurationResolverService.INPUT_OR_COMMAND_VARIABLES_PATTERN = /\${((input|command):(.*?))}/g;
let BaseConfigurationResolverService = _BaseConfigurationResolverService;
let ConfigurationResolverService = class ConfigurationResolverService2 extends BaseConfigurationResolverService {
  constructor(editorService, configurationService, commandService, workspaceContextService, quickInputService, labelService, pathService, extensionService) {
    super({ getAppRoot: () => void 0, getExecPath: () => void 0 }, Promise.resolve(/* @__PURE__ */ Object.create(null)), editorService, configurationService, commandService, workspaceContextService, quickInputService, labelService, pathService, extensionService);
  }
};
ConfigurationResolverService = __decorate([
  __param(0, IEditorService),
  __param(1, IConfigurationService),
  __param(2, ICommandService),
  __param(3, IWorkspaceContextService),
  __param(4, IQuickInputService),
  __param(5, ILabelService),
  __param(6, IPathService),
  __param(7, IExtensionService)
], ConfigurationResolverService);
var css$7 = '.codicon-debug-hint{cursor:pointer}.codicon-debug-hint:not([class*=codicon-debug-breakpoint]):not([class*=codicon-debug-stackframe]){opacity:.4!important}.inline-breakpoint-widget.codicon{align-items:center;display:flex!important}.inline-breakpoint-widget.codicon-debug-breakpoint-disabled{opacity:.7}.monaco-editor .inline-breakpoint-widget.line-start{left:-8px!important}.monaco-editor .debug-breakpoint-placeholder{display:inline-flex;margin-top:-1px;vertical-align:middle;width:.9em}.codicon-debug-breakpoint.codicon-debug-stackframe-focused:after,.codicon-debug-breakpoint.codicon-debug-stackframe:after{content:"\\eb8a";position:absolute}.monaco-editor .debug-top-stack-frame-column{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;display:inline-flex;font:normal normal normal 16px/1 codicon;margin-left:0;margin-right:4px;margin-top:-1px;text-rendering:auto;vertical-align:middle;width:.9em}.monaco-editor .debug-top-stack-frame-column.start-of-line{margin-top:0;position:absolute;top:50%;transform:translate(-17px,-50%)}.monaco-editor .inline-breakpoint-widget{cursor:pointer}.monaco-workbench .debug-view-content .monaco-list-row .monaco-tl-contents{overflow:hidden;text-overflow:ellipsis}.monaco-workbench .monaco-list-row .expression{display:flex}.monaco-workbench .debug-hover-widget .monaco-list-row .expression,.monaco-workbench .debug-pane .monaco-list-row .expression{font-family:var(--monaco-monospace-font);font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:pre}.monaco-workbench.mac .debug-hover-widget .monaco-list-row .expression,.monaco-workbench.mac .debug-pane .monaco-list-row .expression{font-size:11px}.monaco-workbench .monaco-list-row .expression .value{margin-left:6px}.monaco-workbench .monaco-list-row .expression .lazy-button{align-self:center;border-radius:5px;display:none;margin-left:3px}.monaco-workbench .monaco-list-row .expression.lazy .lazy-button{display:inline}.monaco-workbench .monaco-list-row .expression .value a.link:hover{text-decoration:underline}.monaco-workbench .monaco-list-row .expression .value a.link.pointer{cursor:pointer}.monaco-workbench .monaco-list:focus .monaco-list-row.selected .expression .name,.monaco-workbench .monaco-list:focus .monaco-list-row.selected .expression .value{color:inherit}.monaco-workbench .monaco-list-row .expression .name.internal,.monaco-workbench .monaco-list-row .expression .name.virtual{opacity:.5}.monaco-workbench .monaco-list-row .expression .unavailable{font-style:italic}.monaco-workbench .debug-inline-value{background-color:var(--vscode-editor-inlineValuesBackground);color:var(--vscode-editor-inlineValuesForeground)}';
n(css$7, {});
var css$6 = ".monaco-editor .debug-hover-widget{animation-duration:.15s;animation-name:fadeIn;position:absolute;user-select:text;-webkit-user-select:text;white-space:pre;word-break:break-all;z-index:50}.monaco-editor .debug-hover-widget .complex-value{max-width:550px}.monaco-editor .debug-hover-widget .complex-value .tip,.monaco-editor .debug-hover-widget .complex-value .title{font-size:11px;height:18px;line-height:18px;overflow:hidden;padding-left:15px;padding-right:2px;text-overflow:ellipsis;white-space:pre;word-break:normal}.monaco-editor .debug-hover-widget .complex-value .title{border-bottom:1px solid hsla(0,0%,50%,.35)}.monaco-editor .debug-hover-widget .complex-value .tip{border-top:1px solid hsla(0,0%,50%,.35);opacity:.5}.monaco-editor .debug-hover-widget .debug-hover-tree{cursor:pointer;line-height:18px}.monaco-editor .debug-hover-widget .debug-hover-tree .monaco-list-row .monaco-tl-contents{user-select:text;-webkit-user-select:text;white-space:pre}.monaco-editor .debug-hover-widget .debug-hover-tree .monaco-list-rows .monaco-list-row:hover:not(.highlighted):not(.selected):not(.focused){background-color:inherit}.monaco-editor .debug-hover-widget pre{margin-bottom:0;margin-top:0}.monaco-editor .debugHoverHighlight{background-color:rgba(173,214,255,.15)}.monaco-editor .debug-hover-widget>.monaco-scrollable-element>.value{color:hsla(0,0%,42%,.8);font-family:var(--monaco-monospace-font);max-height:500px;overflow:auto;padding:4px 5px;white-space:pre-wrap}.monaco-editor.hc-theme .debugHoverHighlight,.monaco-editor.vs-dark .debugHoverHighlight{background-color:rgba(38,79,120,.25)}";
n(css$6, {});
var css$5 = ".monaco-editor .zone-widget .zone-widget-container.breakpoint-widget{border-color:#007acc;display:flex}.monaco-editor .zone-widget .zone-widget-container.breakpoint-widget .breakpoint-select-container{display:flex;flex-direction:column;flex-shrink:0;justify-content:center;padding:0 10px}.monaco-editor .zone-widget .zone-widget-container.breakpoint-widget .breakpoint-select-container .monaco-select-box{min-height:18px;min-width:100px;padding:2px 20px 2px 8px}.monaco-editor .zone-widget .zone-widget-container.breakpoint-widget .breakpoint-select-container:after{right:14px}.monaco-editor .zone-widget .zone-widget-container.breakpoint-widget .inputContainer{flex:1}";
n(css$5, {});
const $$9 = $$a;
const IPrivateBreakpointWidgetService = createDecorator("privateBreakpointWidgetService");
const DECORATION_KEY$1 = "breakpointwidgetdecoration";
function isPositionInCurlyBracketBlock(input) {
  const model = input.getModel();
  const bracketPairs = model.bracketPairs.getBracketPairsInRange(Range.fromPositions(input.getPosition()));
  return bracketPairs.some((p) => p.openingBracketInfo.bracketText === "{");
}
function createDecorations(theme, placeHolder) {
  var _a2;
  const transparentForeground = (_a2 = theme.getColor(editorForeground)) == null ? void 0 : _a2.transparent(0.4);
  return [{
    range: {
      startLineNumber: 0,
      endLineNumber: 0,
      startColumn: 0,
      endColumn: 1
    },
    renderOptions: {
      after: {
        contentText: placeHolder,
        color: transparentForeground ? transparentForeground.toString() : void 0
      }
    }
  }];
}
let BreakpointWidget = class BreakpointWidget2 extends ZoneWidget {
  constructor(editor, lineNumber, column, context, contextViewService, debugService, themeService, contextKeyService, instantiationService, modelService, codeEditorService, _configurationService, languageFeaturesService, keybindingService) {
    super(editor, { showFrame: true, showArrow: false, frameWidth: 1, isAccessible: true });
    this.lineNumber = lineNumber;
    this.column = column;
    this.contextViewService = contextViewService;
    this.debugService = debugService;
    this.themeService = themeService;
    this.contextKeyService = contextKeyService;
    this.instantiationService = instantiationService;
    this.modelService = modelService;
    this.codeEditorService = codeEditorService;
    this._configurationService = _configurationService;
    this.languageFeaturesService = languageFeaturesService;
    this.keybindingService = keybindingService;
    this.conditionInput = "";
    this.hitCountInput = "";
    this.logMessageInput = "";
    this.toDispose = [];
    const model = this.editor.getModel();
    if (model) {
      const uri = model.uri;
      const breakpoints = this.debugService.getModel().getBreakpoints({ lineNumber: this.lineNumber, column: this.column, uri });
      this.breakpoint = breakpoints.length ? breakpoints[0] : void 0;
    }
    if (context === void 0) {
      if (this.breakpoint && !this.breakpoint.condition && !this.breakpoint.hitCondition && this.breakpoint.logMessage) {
        this.context = 2;
      } else if (this.breakpoint && !this.breakpoint.condition && this.breakpoint.hitCondition) {
        this.context = 1;
      } else {
        this.context = 0;
      }
    } else {
      this.context = context;
    }
    this.toDispose.push(this.debugService.getModel().onDidChangeBreakpoints((e) => {
      if (this.breakpoint && e && e.removed && e.removed.indexOf(this.breakpoint) >= 0) {
        this.dispose();
      }
    }));
    this.codeEditorService.registerDecorationType("breakpoint-widget", DECORATION_KEY$1, {});
    this.create();
  }
  get placeholder() {
    var _a2, _b2;
    const acceptString = ((_a2 = this.keybindingService.lookupKeybinding(AcceptBreakpointWidgetInputAction.ID)) == null ? void 0 : _a2.getLabel()) || "Enter";
    const closeString = ((_b2 = this.keybindingService.lookupKeybinding(CloseBreakpointWidgetCommand.ID)) == null ? void 0 : _b2.getLabel()) || "Escape";
    switch (this.context) {
      case 2:
        return localize(
          "breakpointWidgetLogMessagePlaceholder",
          "Message to log when breakpoint is hit. Expressions within {} are interpolated. '{0}' to accept, '{1}' to cancel.",
          acceptString,
          closeString
        );
      case 1:
        return localize(
          "breakpointWidgetHitCountPlaceholder",
          "Break when hit count condition is met. '{0}' to accept, '{1}' to cancel.",
          acceptString,
          closeString
        );
      default:
        return localize(
          "breakpointWidgetExpressionPlaceholder",
          "Break when expression evaluates to true. '{0}' to accept, '{1}' to cancel.",
          acceptString,
          closeString
        );
    }
  }
  getInputValue(breakpoint2) {
    switch (this.context) {
      case 2:
        return breakpoint2 && breakpoint2.logMessage ? breakpoint2.logMessage : this.logMessageInput;
      case 1:
        return breakpoint2 && breakpoint2.hitCondition ? breakpoint2.hitCondition : this.hitCountInput;
      default:
        return breakpoint2 && breakpoint2.condition ? breakpoint2.condition : this.conditionInput;
    }
  }
  rememberInput() {
    const value = this.input.getModel().getValue();
    switch (this.context) {
      case 2:
        this.logMessageInput = value;
        break;
      case 1:
        this.hitCountInput = value;
        break;
      default:
        this.conditionInput = value;
    }
  }
  setInputMode() {
    if (this.editor.hasModel()) {
      const languageId = this.context === 2 ? PLAINTEXT_LANGUAGE_ID : this.editor.getModel().getLanguageId();
      this.input.getModel().setLanguage(languageId);
    }
  }
  show(rangeOrPos) {
    const lineNum = this.input.getModel().getLineCount();
    super.show(rangeOrPos, lineNum + 1);
  }
  fitHeightToContent() {
    const lineNum = this.input.getModel().getLineCount();
    this._relayout(lineNum + 1);
  }
  _fillContainer(container) {
    this.setCssClass("breakpoint-widget");
    const selectBox = new SelectBox(
      [{ text: localize("expression", "Expression") }, { text: localize("hitCount", "Hit Count") }, { text: localize("logMessage", "Log Message") }],
      this.context,
      this.contextViewService,
      defaultSelectBoxStyles,
      { ariaLabel: localize("breakpointType", "Breakpoint Type") }
    );
    this.selectContainer = $$9(".breakpoint-select-container");
    selectBox.render(append(container, this.selectContainer));
    selectBox.onDidSelect((e) => {
      this.rememberInput();
      this.context = e.index;
      this.setInputMode();
      const value = this.getInputValue(this.breakpoint);
      this.input.getModel().setValue(value);
      this.input.focus();
    });
    this.inputContainer = $$9(".inputContainer");
    this.createBreakpointInput(append(container, this.inputContainer));
    this.input.getModel().setValue(this.getInputValue(this.breakpoint));
    this.toDispose.push(this.input.getModel().onDidChangeContent(() => {
      this.fitHeightToContent();
    }));
    this.input.setPosition({ lineNumber: 1, column: this.input.getModel().getLineMaxColumn(1) });
    setTimeout(() => this.input.focus(), 150);
  }
  _doLayout(heightInPixel, widthInPixel) {
    this.heightInPx = heightInPixel;
    this.input.layout({ height: heightInPixel, width: widthInPixel - 113 });
    this.centerInputVertically();
  }
  _onWidth(widthInPixel) {
    if (typeof this.heightInPx === "number") {
      this._doLayout(this.heightInPx, widthInPixel);
    }
  }
  createBreakpointInput(container) {
    const scopedContextKeyService = this.contextKeyService.createScoped(container);
    this.toDispose.push(scopedContextKeyService);
    const scopedInstatiationService = this.instantiationService.createChild(new ServiceCollection(
      [IContextKeyService, scopedContextKeyService],
      [IPrivateBreakpointWidgetService, this]
    ));
    const options = this.createEditorOptions();
    const codeEditorWidgetOptions = getSimpleCodeEditorWidgetOptions();
    this.input = scopedInstatiationService.createInstance(CodeEditorWidget, container, options, codeEditorWidgetOptions);
    CONTEXT_IN_BREAKPOINT_WIDGET.bindTo(scopedContextKeyService).set(true);
    const model = this.modelService.createModel("", null, URI.parse(`${DEBUG_SCHEME}:${this.editor.getId()}:breakpointinput`), true);
    if (this.editor.hasModel()) {
      model.setLanguage(this.editor.getModel().getLanguageId());
    }
    this.input.setModel(model);
    this.setInputMode();
    this.toDispose.push(model);
    const setDecorations = () => {
      const value = this.input.getModel().getValue();
      const decorations = !!value ? [] : createDecorations(this.themeService.getColorTheme(), this.placeholder);
      this.input.setDecorationsByType("breakpoint-widget", DECORATION_KEY$1, decorations);
    };
    this.input.getModel().onDidChangeContent(() => setDecorations());
    this.themeService.onDidColorThemeChange(() => setDecorations());
    this.toDispose.push(this.languageFeaturesService.completionProvider.register({ scheme: DEBUG_SCHEME, hasAccessToAllModels: true }, {
      _debugDisplayName: "breakpointWidget",
      provideCompletionItems: (model2, position, _context, token) => {
        let suggestionsPromise;
        const underlyingModel = this.editor.getModel();
        if (underlyingModel && (this.context === 0 || this.context === 2 && isPositionInCurlyBracketBlock(this.input))) {
          suggestionsPromise = provideSuggestionItems(this.languageFeaturesService.completionProvider, underlyingModel, new Position(this.lineNumber, 1), new CompletionOptions(
            void 0,
            (/* @__PURE__ */ new Set()).add(27)
          ), _context, token).then((suggestions) => {
            let overwriteBefore = 0;
            if (this.context === 0) {
              overwriteBefore = position.column - 1;
            } else {
              const value = this.input.getModel().getValue();
              while (position.column - 2 - overwriteBefore >= 0 && value[position.column - 2 - overwriteBefore] !== "{" && value[position.column - 2 - overwriteBefore] !== " ") {
                overwriteBefore++;
              }
            }
            return {
              suggestions: suggestions.items.map((s) => {
                s.completion.range = Range.fromPositions(position.delta(0, -overwriteBefore), position);
                return s.completion;
              })
            };
          });
        } else {
          suggestionsPromise = Promise.resolve({ suggestions: [] });
        }
        return suggestionsPromise;
      }
    }));
    this.toDispose.push(this._configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("editor.fontSize") || e.affectsConfiguration("editor.lineHeight")) {
        this.input.updateOptions(this.createEditorOptions());
        this.centerInputVertically();
      }
    }));
  }
  createEditorOptions() {
    const editorConfig = this._configurationService.getValue("editor");
    const options = getSimpleEditorOptions(this._configurationService);
    options.fontSize = editorConfig.fontSize;
    options.fontFamily = editorConfig.fontFamily;
    options.lineHeight = editorConfig.lineHeight;
    options.fontLigatures = editorConfig.fontLigatures;
    options.ariaLabel = this.placeholder;
    return options;
  }
  centerInputVertically() {
    if (this.container && typeof this.heightInPx === "number") {
      const lineHeight = this.input.getOption(65);
      const lineNum = this.input.getModel().getLineCount();
      const newTopMargin = (this.heightInPx - lineNum * lineHeight) / 2;
      this.inputContainer.style.marginTop = newTopMargin + "px";
    }
  }
  close(success) {
    if (success) {
      let condition = this.breakpoint && this.breakpoint.condition;
      let hitCondition = this.breakpoint && this.breakpoint.hitCondition;
      let logMessage = this.breakpoint && this.breakpoint.logMessage;
      this.rememberInput();
      if (this.conditionInput || this.context === 0) {
        condition = this.conditionInput;
      }
      if (this.hitCountInput || this.context === 1) {
        hitCondition = this.hitCountInput;
      }
      if (this.logMessageInput || this.context === 2) {
        logMessage = this.logMessageInput;
      }
      if (this.breakpoint) {
        const data = /* @__PURE__ */ new Map();
        data.set(this.breakpoint.getId(), {
          condition,
          hitCondition,
          logMessage
        });
        this.debugService.updateBreakpoints(this.breakpoint.originalUri, data, false).then(void 0, onUnexpectedError);
      } else {
        const model = this.editor.getModel();
        if (model) {
          this.debugService.addBreakpoints(model.uri, [{
            lineNumber: this.lineNumber,
            column: this.column,
            enabled: true,
            condition,
            hitCondition,
            logMessage
          }]);
        }
      }
    }
    this.dispose();
  }
  dispose() {
    super.dispose();
    this.input.dispose();
    dispose(this.toDispose);
    setTimeout(() => this.editor.focus(), 0);
  }
};
BreakpointWidget = __decorate([
  __param(4, IContextViewService),
  __param(5, IDebugService),
  __param(6, IThemeService),
  __param(7, IContextKeyService),
  __param(8, IInstantiationService),
  __param(9, IModelService),
  __param(10, ICodeEditorService),
  __param(11, IConfigurationService),
  __param(12, ILanguageFeaturesService),
  __param(13, IKeybindingService)
], BreakpointWidget);
const _AcceptBreakpointWidgetInputAction = class _AcceptBreakpointWidgetInputAction extends EditorCommand {
  constructor() {
    super({
      id: _AcceptBreakpointWidgetInputAction.ID,
      precondition: CONTEXT_BREAKPOINT_WIDGET_VISIBLE,
      kbOpts: {
        kbExpr: CONTEXT_IN_BREAKPOINT_WIDGET,
        primary: 3,
        weight: 100
      }
    });
  }
  runEditorCommand(accessor, editor) {
    accessor.get(IPrivateBreakpointWidgetService).close(true);
  }
};
_AcceptBreakpointWidgetInputAction.ID = "breakpointWidget.action.acceptInput";
let AcceptBreakpointWidgetInputAction = _AcceptBreakpointWidgetInputAction;
const _CloseBreakpointWidgetCommand = class _CloseBreakpointWidgetCommand extends EditorCommand {
  constructor() {
    super({
      id: _CloseBreakpointWidgetCommand.ID,
      precondition: CONTEXT_BREAKPOINT_WIDGET_VISIBLE,
      kbOpts: {
        kbExpr: EditorContextKeys.textInputFocus,
        primary: 9,
        secondary: [1024 | 9],
        weight: 100
      }
    });
  }
  runEditorCommand(accessor, editor, args) {
    const debugContribution = editor.getContribution(BREAKPOINT_EDITOR_CONTRIBUTION_ID);
    if (debugContribution) {
      return debugContribution.closeBreakpointWidget();
    }
    accessor.get(IPrivateBreakpointWidgetService).close(false);
  }
};
_CloseBreakpointWidgetCommand.ID = "closeBreakpointWidget";
let CloseBreakpointWidgetCommand = _CloseBreakpointWidgetCommand;
registerEditorCommand(new AcceptBreakpointWidgetInputAction());
registerEditorCommand(new CloseBreakpointWidgetCommand());
const $$8 = $$a;
const breakpointHelperDecoration = {
  description: "breakpoint-helper-decoration",
  glyphMarginClassName: ThemeIcon.asClassName(debugBreakpointHint),
  glyphMargin: { position: GlyphMarginLane.Right },
  stickiness: 1
};
function createBreakpointDecorations(accessor, model, breakpoints, state, breakpointsActivated, showBreakpointsInOverviewRuler) {
  const result = [];
  breakpoints.forEach((breakpoint2) => {
    if (breakpoint2.lineNumber > model.getLineCount()) {
      return;
    }
    const hasOtherBreakpointsOnLine = breakpoints.some((bp) => bp !== breakpoint2 && bp.lineNumber === breakpoint2.lineNumber);
    const column = model.getLineFirstNonWhitespaceColumn(breakpoint2.lineNumber);
    const range = model.validateRange(
      breakpoint2.column ? new Range(
        breakpoint2.lineNumber,
        breakpoint2.column,
        breakpoint2.lineNumber,
        breakpoint2.column + 1
      ) : new Range(breakpoint2.lineNumber, column, breakpoint2.lineNumber, column + 1)
    );
    result.push({
      options: getBreakpointDecorationOptions(accessor, model, breakpoint2, state, breakpointsActivated, showBreakpointsInOverviewRuler, hasOtherBreakpointsOnLine),
      range
    });
  });
  return result;
}
function getBreakpointDecorationOptions(accessor, model, breakpoint2, state, breakpointsActivated, showBreakpointsInOverviewRuler, hasOtherBreakpointsOnLine) {
  const debugService = accessor.get(IDebugService);
  const languageService = accessor.get(ILanguageService);
  const { icon, message, showAdapterUnverifiedMessage } = getBreakpointMessageAndIcon(state, breakpointsActivated, breakpoint2, void 0);
  let glyphMarginHoverMessage;
  let unverifiedMessage;
  if (showAdapterUnverifiedMessage) {
    let langId;
    unverifiedMessage = debugService.getModel().getSessions().map((s) => {
      var _a2;
      const dbg = debugService.getAdapterManager().getDebugger(s.configuration.type);
      const message2 = (_a2 = dbg == null ? void 0 : dbg.strings) == null ? void 0 : _a2[DebuggerString.UnverifiedBreakpoints];
      if (message2) {
        if (!langId) {
          langId = withNullAsUndefined(languageService.guessLanguageIdByFilepathOrFirstLine(breakpoint2.uri));
        }
        return langId && dbg.interestedInLanguage(langId) ? message2 : void 0;
      }
      return void 0;
    }).find((messages) => !!messages);
  }
  if (message) {
    glyphMarginHoverMessage = new MarkdownString(void 0, { isTrusted: true, supportThemeIcons: true });
    if (breakpoint2.condition || breakpoint2.hitCondition) {
      const languageId = model.getLanguageId();
      glyphMarginHoverMessage.appendCodeblock(languageId, message);
      if (unverifiedMessage) {
        glyphMarginHoverMessage.appendMarkdown("$(warning) " + unverifiedMessage);
      }
    } else {
      glyphMarginHoverMessage.appendText(message);
      if (unverifiedMessage) {
        glyphMarginHoverMessage.appendMarkdown("\n\n$(warning) " + unverifiedMessage);
      }
    }
  } else if (unverifiedMessage) {
    glyphMarginHoverMessage = new MarkdownString(void 0, { isTrusted: true, supportThemeIcons: true }).appendMarkdown(unverifiedMessage);
  }
  let overviewRulerDecoration = null;
  if (showBreakpointsInOverviewRuler) {
    overviewRulerDecoration = {
      color: themeColorFromId(debugIconBreakpointForeground),
      position: OverviewRulerLane.Left
    };
  }
  const renderInline = breakpoint2.column && (hasOtherBreakpointsOnLine || breakpoint2.column > model.getLineFirstNonWhitespaceColumn(breakpoint2.lineNumber));
  return {
    description: "breakpoint-decoration",
    glyphMargin: { position: GlyphMarginLane.Right },
    glyphMarginClassName: ThemeIcon.asClassName(icon),
    glyphMarginHoverMessage,
    stickiness: 1,
    before: renderInline ? {
      content: noBreakWhitespace,
      inlineClassName: `debug-breakpoint-placeholder`,
      inlineClassNameAffectsLetterSpacing: true
    } : void 0,
    overviewRuler: overviewRulerDecoration,
    zIndex: 9999
  };
}
async function requestBreakpointCandidateLocations(model, lineNumbers, session) {
  if (!session.capabilities.supportsBreakpointLocationsRequest) {
    return [];
  }
  return await Promise.all(distinct(lineNumbers, (l) => l).map(async (lineNumber) => {
    try {
      return { lineNumber, positions: await session.breakpointsLocations(model.uri, lineNumber) };
    } catch {
      return { lineNumber, positions: [] };
    }
  }));
}
function createCandidateDecorations(model, breakpointDecorations, lineBreakpoints) {
  const result = [];
  for (const { positions, lineNumber } of lineBreakpoints) {
    if (positions.length === 0) {
      continue;
    }
    const firstColumn = model.getLineFirstNonWhitespaceColumn(lineNumber);
    const lastColumn = model.getLineLastNonWhitespaceColumn(lineNumber);
    positions.forEach((p) => {
      const range = new Range(p.lineNumber, p.column, p.lineNumber, p.column + 1);
      if (p.column <= firstColumn && !breakpointDecorations.some(
        (bp) => bp.range.startColumn > firstColumn && bp.range.startLineNumber === p.lineNumber
      ) || p.column > lastColumn) {
        return;
      }
      const breakpointAtPosition = breakpointDecorations.find((bpd) => bpd.range.equalsRange(range));
      if (breakpointAtPosition && breakpointAtPosition.inlineWidget) {
        return;
      }
      result.push({
        range,
        options: {
          description: "breakpoint-placeholder-decoration",
          stickiness: 1,
          before: breakpointAtPosition ? void 0 : {
            content: noBreakWhitespace,
            inlineClassName: `debug-breakpoint-placeholder`,
            inlineClassNameAffectsLetterSpacing: true
          }
        },
        breakpoint: breakpointAtPosition ? breakpointAtPosition.breakpoint : void 0
      });
    });
  }
  return result;
}
let BreakpointEditorContribution = class BreakpointEditorContribution2 {
  constructor(editor, debugService, contextMenuService, instantiationService, contextKeyService, dialogService, configurationService, labelService) {
    this.editor = editor;
    this.debugService = debugService;
    this.contextMenuService = contextMenuService;
    this.instantiationService = instantiationService;
    this.dialogService = dialogService;
    this.configurationService = configurationService;
    this.labelService = labelService;
    this.breakpointHintDecoration = null;
    this.toDispose = [];
    this.ignoreDecorationsChangedEvent = false;
    this.ignoreBreakpointsChangeEvent = false;
    this.breakpointDecorations = [];
    this.candidateDecorations = [];
    this.breakpointWidgetVisible = CONTEXT_BREAKPOINT_WIDGET_VISIBLE.bindTo(contextKeyService);
    this.setDecorationsScheduler = new RunOnceScheduler(() => this.setDecorations(), 30);
    this.setDecorationsScheduler.schedule();
    this.registerListeners();
  }
  getContextMenuActionsAtPosition(lineNumber, model) {
    if (!this.debugService.getAdapterManager().hasEnabledDebuggers()) {
      return [];
    }
    if (!this.debugService.canSetBreakpointsIn(model)) {
      return [];
    }
    const breakpoints = this.debugService.getModel().getBreakpoints({ lineNumber, uri: model.uri });
    return this.getContextMenuActions(breakpoints, model.uri, lineNumber);
  }
  registerListeners() {
    this.toDispose.push(this.editor.onMouseDown(async (e) => {
      var _a2;
      if (!this.debugService.getAdapterManager().hasEnabledDebuggers()) {
        return;
      }
      const model = this.editor.getModel();
      if (!e.target.position || !model || e.target.type !== 2 || e.target.detail.isAfterLines || !this.marginFreeFromNonDebugDecorations(e.target.position.lineNumber) && !((_a2 = e.target.element) == null ? void 0 : _a2.className.includes("breakpoint"))) {
        return;
      }
      const canSetBreakpoints = this.debugService.canSetBreakpointsIn(model);
      const lineNumber = e.target.position.lineNumber;
      const uri = model.uri;
      if (e.event.rightButton || isMacintosh && e.event.leftButton && e.event.ctrlKey) {
        return;
      } else {
        const breakpoints = this.debugService.getModel().getBreakpoints({ uri, lineNumber });
        if (breakpoints.length) {
          const isShiftPressed = e.event.shiftKey;
          const enabled = breakpoints.some((bp) => bp.enabled);
          if (isShiftPressed) {
            breakpoints.forEach((bp) => this.debugService.enableOrDisableBreakpoints(!enabled, bp));
          } else if (!isLinux && breakpoints.some((bp) => !!bp.condition || !!bp.logMessage || !!bp.hitCondition)) {
            const logPoint = breakpoints.every((bp) => !!bp.logMessage);
            const breakpointType = logPoint ? localize("logPoint", "Logpoint") : localize("breakpoint", "Breakpoint");
            const disabledBreakpointDialogMessage = localize(
              "breakpointHasConditionDisabled",
              "This {0} has a {1} that will get lost on remove. Consider enabling the {0} instead.",
              breakpointType.toLowerCase(),
              logPoint ? localize("message", "message") : localize("condition", "condition")
            );
            const enabledBreakpointDialogMessage = localize(
              "breakpointHasConditionEnabled",
              "This {0} has a {1} that will get lost on remove. Consider disabling the {0} instead.",
              breakpointType.toLowerCase(),
              logPoint ? localize("message", "message") : localize("condition", "condition")
            );
            await this.dialogService.prompt({
              type: Severity.Info,
              message: enabled ? enabledBreakpointDialogMessage : disabledBreakpointDialogMessage,
              buttons: [
                {
                  label: localize(
                    { key: "removeLogPoint", comment: ["&& denotes a mnemonic"] },
                    "&&Remove {0}",
                    breakpointType
                  ),
                  run: () => breakpoints.forEach((bp) => this.debugService.removeBreakpoints(bp.getId()))
                },
                {
                  label: localize(
                    "disableLogPoint",
                    "{0} {1}",
                    enabled ? localize({ key: "disable", comment: ["&& denotes a mnemonic"] }, "&&Disable") : localize({ key: "enable", comment: ["&& denotes a mnemonic"] }, "&&Enable"),
                    breakpointType
                  ),
                  run: () => breakpoints.forEach((bp) => this.debugService.enableOrDisableBreakpoints(!enabled, bp))
                }
              ],
              cancelButton: true
            });
          } else {
            if (!enabled) {
              breakpoints.forEach((bp) => this.debugService.enableOrDisableBreakpoints(!enabled, bp));
            } else {
              breakpoints.forEach((bp) => this.debugService.removeBreakpoints(bp.getId()));
            }
          }
        } else if (canSetBreakpoints) {
          this.debugService.addBreakpoints(uri, [{ lineNumber }]);
        }
      }
    }));
    if (!(BrowserFeatures.pointerEvents && isSafari)) {
      this.toDispose.push(this.editor.onMouseMove((e) => {
        if (!this.debugService.getAdapterManager().hasEnabledDebuggers()) {
          return;
        }
        let showBreakpointHintAtLineNumber = -1;
        const model = this.editor.getModel();
        if (model && e.target.position && (e.target.type === 2 || e.target.type === 3) && this.debugService.canSetBreakpointsIn(model) && this.marginFreeFromNonDebugDecorations(e.target.position.lineNumber)) {
          const data = e.target.detail;
          if (!data.isAfterLines) {
            showBreakpointHintAtLineNumber = e.target.position.lineNumber;
          }
        }
        this.ensureBreakpointHintDecoration(showBreakpointHintAtLineNumber);
      }));
      this.toDispose.push(this.editor.onMouseLeave(() => {
        this.ensureBreakpointHintDecoration(-1);
      }));
    }
    this.toDispose.push(this.editor.onDidChangeModel(async () => {
      this.closeBreakpointWidget();
      await this.setDecorations();
    }));
    this.toDispose.push(this.debugService.getModel().onDidChangeBreakpoints(() => {
      if (!this.ignoreBreakpointsChangeEvent && !this.setDecorationsScheduler.isScheduled()) {
        this.setDecorationsScheduler.schedule();
      }
    }));
    this.toDispose.push(this.debugService.onDidChangeState(() => {
      if (!this.setDecorationsScheduler.isScheduled()) {
        this.setDecorationsScheduler.schedule();
      }
    }));
    this.toDispose.push(this.editor.onDidChangeModelDecorations(() => this.onModelDecorationsChanged()));
    this.toDispose.push(this.configurationService.onDidChangeConfiguration(async (e) => {
      if (e.affectsConfiguration("debug.showBreakpointsInOverviewRuler") || e.affectsConfiguration("debug.showInlineBreakpointCandidates")) {
        await this.setDecorations();
      }
    }));
  }
  getContextMenuActions(breakpoints, uri, lineNumber, column) {
    const actions = [];
    if (breakpoints.length === 1) {
      const breakpointType = breakpoints[0].logMessage ? localize("logPoint", "Logpoint") : localize("breakpoint", "Breakpoint");
      actions.push(new Action(
        "debug.removeBreakpoint",
        localize("removeBreakpoint", "Remove {0}", breakpointType),
        void 0,
        true,
        async () => {
          await this.debugService.removeBreakpoints(breakpoints[0].getId());
        }
      ));
      actions.push(new Action(
        "workbench.debug.action.editBreakpointAction",
        localize("editBreakpoint", "Edit {0}...", breakpointType),
        void 0,
        true,
        () => Promise.resolve(this.showBreakpointWidget(breakpoints[0].lineNumber, breakpoints[0].column))
      ));
      actions.push(new Action(
        `workbench.debug.viewlet.action.toggleBreakpoint`,
        breakpoints[0].enabled ? localize("disableBreakpoint", "Disable {0}", breakpointType) : localize("enableBreakpoint", "Enable {0}", breakpointType),
        void 0,
        true,
        () => this.debugService.enableOrDisableBreakpoints(!breakpoints[0].enabled, breakpoints[0])
      ));
    } else if (breakpoints.length > 1) {
      const sorted = breakpoints.slice().sort((first, second) => first.column && second.column ? first.column - second.column : 1);
      actions.push(new SubmenuAction(
        "debug.removeBreakpoints",
        localize("removeBreakpoints", "Remove Breakpoints"),
        sorted.map(
          (bp) => new Action("removeInlineBreakpoint", bp.column ? localize(
            "removeInlineBreakpointOnColumn",
            "Remove Inline Breakpoint on Column {0}",
            bp.column
          ) : localize("removeLineBreakpoint", "Remove Line Breakpoint"), void 0, true, () => this.debugService.removeBreakpoints(bp.getId()))
        )
      ));
      actions.push(new SubmenuAction(
        "debug.editBreakpoints",
        localize("editBreakpoints", "Edit Breakpoints"),
        sorted.map(
          (bp) => new Action("editBreakpoint", bp.column ? localize(
            "editInlineBreakpointOnColumn",
            "Edit Inline Breakpoint on Column {0}",
            bp.column
          ) : localize("editLineBreakpoint", "Edit Line Breakpoint"), void 0, true, () => Promise.resolve(this.showBreakpointWidget(bp.lineNumber, bp.column)))
        )
      ));
      actions.push(new SubmenuAction(
        "debug.enableDisableBreakpoints",
        localize("enableDisableBreakpoints", "Enable/Disable Breakpoints"),
        sorted.map((bp) => new Action(
          bp.enabled ? "disableColumnBreakpoint" : "enableColumnBreakpoint",
          bp.enabled ? bp.column ? localize(
            "disableInlineColumnBreakpoint",
            "Disable Inline Breakpoint on Column {0}",
            bp.column
          ) : localize("disableBreakpointOnLine", "Disable Line Breakpoint") : bp.column ? localize("enableBreakpoints", "Enable Inline Breakpoint on Column {0}", bp.column) : localize("enableBreakpointOnLine", "Enable Line Breakpoint"),
          void 0,
          true,
          () => this.debugService.enableOrDisableBreakpoints(!bp.enabled, bp)
        ))
      ));
    } else {
      actions.push(new Action(
        "addBreakpoint",
        localize("addBreakpoint", "Add Breakpoint"),
        void 0,
        true,
        () => this.debugService.addBreakpoints(uri, [{ lineNumber, column }])
      ));
      actions.push(new Action(
        "addConditionalBreakpoint",
        localize("addConditionalBreakpoint", "Add Conditional Breakpoint..."),
        void 0,
        true,
        () => Promise.resolve(this.showBreakpointWidget(lineNumber, column, 0))
      ));
      actions.push(new Action(
        "addLogPoint",
        localize("addLogPoint", "Add Logpoint..."),
        void 0,
        true,
        () => Promise.resolve(this.showBreakpointWidget(lineNumber, column, 2))
      ));
    }
    if (this.debugService.state === 2) {
      actions.push(new Separator());
      actions.push(new Action(
        "runToLine",
        localize("runToLine", "Run to Line"),
        void 0,
        true,
        () => this.debugService.runTo(uri, lineNumber).catch(onUnexpectedError)
      ));
    }
    return actions;
  }
  marginFreeFromNonDebugDecorations(line) {
    const decorations = this.editor.getLineDecorations(line);
    if (decorations) {
      for (const { options } of decorations) {
        const clz = options.glyphMarginClassName;
        if (clz && (!clz.includes("codicon-") || clz.includes("codicon-testing-") || clz.includes("codicon-merge-") || clz.includes("codicon-arrow-") || clz.includes("codicon-loading") || clz.includes("codicon-fold"))) {
          return false;
        }
      }
    }
    return true;
  }
  ensureBreakpointHintDecoration(showBreakpointHintAtLineNumber) {
    this.editor.changeDecorations((accessor) => {
      if (this.breakpointHintDecoration) {
        accessor.removeDecoration(this.breakpointHintDecoration);
        this.breakpointHintDecoration = null;
      }
      if (showBreakpointHintAtLineNumber !== -1) {
        this.breakpointHintDecoration = accessor.addDecoration({
          startLineNumber: showBreakpointHintAtLineNumber,
          startColumn: 1,
          endLineNumber: showBreakpointHintAtLineNumber,
          endColumn: 1
        }, breakpointHelperDecoration);
      }
    });
  }
  async setDecorations() {
    if (!this.editor.hasModel()) {
      return;
    }
    const setCandidateDecorations = (changeAccessor, desiredCandidatePositions2) => {
      const desiredCandidateDecorations = createCandidateDecorations(model, this.breakpointDecorations, desiredCandidatePositions2);
      const candidateDecorationIds = changeAccessor.deltaDecorations(this.candidateDecorations.map((c) => c.decorationId), desiredCandidateDecorations);
      this.candidateDecorations.forEach((candidate) => {
        candidate.inlineWidget.dispose();
      });
      this.candidateDecorations = candidateDecorationIds.map((decorationId, index) => {
        const candidate = desiredCandidateDecorations[index];
        const icon = candidate.breakpoint ? getBreakpointMessageAndIcon(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), candidate.breakpoint, this.labelService).icon : breakpoint.disabled;
        const contextMenuActions = () => this.getContextMenuActions(candidate.breakpoint ? [candidate.breakpoint] : [], activeCodeEditor.getModel().uri, candidate.range.startLineNumber, candidate.range.startColumn);
        const inlineWidget = new InlineBreakpointWidget(
          activeCodeEditor,
          decorationId,
          ThemeIcon.asClassName(icon),
          candidate.breakpoint,
          this.debugService,
          this.contextMenuService,
          contextMenuActions
        );
        return {
          decorationId,
          inlineWidget
        };
      });
    };
    const activeCodeEditor = this.editor;
    const model = activeCodeEditor.getModel();
    const breakpoints = this.debugService.getModel().getBreakpoints({ uri: model.uri });
    const debugSettings = this.configurationService.getValue("debug");
    const desiredBreakpointDecorations = this.instantiationService.invokeFunction((accessor) => createBreakpointDecorations(accessor, model, breakpoints, this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), debugSettings.showBreakpointsInOverviewRuler));
    const session = this.debugService.getViewModel().focusedSession;
    const desiredCandidatePositions = debugSettings.showInlineBreakpointCandidates && session ? requestBreakpointCandidateLocations(this.editor.getModel(), desiredBreakpointDecorations.map((bp) => bp.range.startLineNumber), session) : Promise.resolve([]);
    const desiredCandidatePositionsRaced = await Promise.race([desiredCandidatePositions, timeout(500).then(() => void 0)]);
    if (desiredCandidatePositionsRaced === void 0) {
      desiredCandidatePositions.then((v) => activeCodeEditor.changeDecorations((d) => setCandidateDecorations(d, v)));
    }
    try {
      this.ignoreDecorationsChangedEvent = true;
      activeCodeEditor.changeDecorations((changeAccessor) => {
        const decorationIds = changeAccessor.deltaDecorations(this.breakpointDecorations.map((bpd) => bpd.decorationId), desiredBreakpointDecorations);
        this.breakpointDecorations.forEach((bpd) => {
          var _a2;
          (_a2 = bpd.inlineWidget) == null ? void 0 : _a2.dispose();
        });
        this.breakpointDecorations = decorationIds.map((decorationId, index) => {
          let inlineWidget = void 0;
          const breakpoint2 = breakpoints[index];
          if (desiredBreakpointDecorations[index].options.before) {
            const contextMenuActions = () => this.getContextMenuActions([breakpoint2], activeCodeEditor.getModel().uri, breakpoint2.lineNumber, breakpoint2.column);
            inlineWidget = new InlineBreakpointWidget(
              activeCodeEditor,
              decorationId,
              desiredBreakpointDecorations[index].options.glyphMarginClassName,
              breakpoint2,
              this.debugService,
              this.contextMenuService,
              contextMenuActions
            );
          }
          return {
            decorationId,
            breakpoint: breakpoint2,
            range: desiredBreakpointDecorations[index].range,
            inlineWidget
          };
        });
        if (desiredCandidatePositionsRaced) {
          setCandidateDecorations(changeAccessor, desiredCandidatePositionsRaced);
        }
      });
    } finally {
      this.ignoreDecorationsChangedEvent = false;
    }
    for (const d of this.breakpointDecorations) {
      if (d.inlineWidget) {
        this.editor.layoutContentWidget(d.inlineWidget);
      }
    }
  }
  async onModelDecorationsChanged() {
    if (this.breakpointDecorations.length === 0 || this.ignoreDecorationsChangedEvent || !this.editor.hasModel()) {
      return;
    }
    let somethingChanged = false;
    const model = this.editor.getModel();
    this.breakpointDecorations.forEach((breakpointDecoration) => {
      if (somethingChanged) {
        return;
      }
      const newBreakpointRange = model.getDecorationRange(breakpointDecoration.decorationId);
      if (newBreakpointRange && !breakpointDecoration.range.equalsRange(newBreakpointRange)) {
        somethingChanged = true;
        breakpointDecoration.range = newBreakpointRange;
      }
    });
    if (!somethingChanged) {
      return;
    }
    const data = /* @__PURE__ */ new Map();
    for (let i = 0, len = this.breakpointDecorations.length; i < len; i++) {
      const breakpointDecoration = this.breakpointDecorations[i];
      const decorationRange = model.getDecorationRange(breakpointDecoration.decorationId);
      if (decorationRange) {
        if (breakpointDecoration.breakpoint) {
          data.set(breakpointDecoration.breakpoint.getId(), {
            lineNumber: decorationRange.startLineNumber,
            column: breakpointDecoration.breakpoint.column ? decorationRange.startColumn : void 0
          });
        }
      }
    }
    try {
      this.ignoreBreakpointsChangeEvent = true;
      await this.debugService.updateBreakpoints(model.uri, data, true);
    } finally {
      this.ignoreBreakpointsChangeEvent = false;
    }
  }
  showBreakpointWidget(lineNumber, column, context) {
    var _a2;
    (_a2 = this.breakpointWidget) == null ? void 0 : _a2.dispose();
    this.breakpointWidget = this.instantiationService.createInstance(BreakpointWidget, this.editor, lineNumber, column, context);
    this.breakpointWidget.show({ lineNumber, column: 1 });
    this.breakpointWidgetVisible.set(true);
  }
  closeBreakpointWidget() {
    if (this.breakpointWidget) {
      this.breakpointWidget.dispose();
      this.breakpointWidget = void 0;
      this.breakpointWidgetVisible.reset();
      this.editor.focus();
    }
  }
  dispose() {
    var _a2;
    (_a2 = this.breakpointWidget) == null ? void 0 : _a2.dispose();
    this.editor.removeDecorations(this.breakpointDecorations.map((bpd) => bpd.decorationId));
    dispose(this.toDispose);
  }
};
BreakpointEditorContribution = __decorate([
  __param(1, IDebugService),
  __param(2, IContextMenuService),
  __param(3, IInstantiationService),
  __param(4, IContextKeyService),
  __param(5, IDialogService),
  __param(6, IConfigurationService),
  __param(7, ILabelService)
], BreakpointEditorContribution);
GutterActionsRegistry.registerGutterActionsGenerator(({ lineNumber, editor, accessor }, result) => {
  const model = editor.getModel();
  const debugService = accessor.get(IDebugService);
  if (!model || !debugService.getAdapterManager().hasEnabledDebuggers() || !debugService.canSetBreakpointsIn(model)) {
    return;
  }
  const breakpointEditorContribution = editor.getContribution(BREAKPOINT_EDITOR_CONTRIBUTION_ID);
  if (!breakpointEditorContribution) {
    return;
  }
  const actions = breakpointEditorContribution.getContextMenuActionsAtPosition(lineNumber, model);
  for (const action of actions) {
    result.push(action, "2_debug");
  }
});
class InlineBreakpointWidget {
  constructor(editor, decorationId, cssClass, breakpoint2, debugService, contextMenuService, getContextMenuActions) {
    this.editor = editor;
    this.decorationId = decorationId;
    this.breakpoint = breakpoint2;
    this.debugService = debugService;
    this.contextMenuService = contextMenuService;
    this.getContextMenuActions = getContextMenuActions;
    this.allowEditorOverflow = false;
    this.suppressMouseDown = true;
    this.toDispose = [];
    this.range = this.editor.getModel().getDecorationRange(decorationId);
    this.toDispose.push(this.editor.onDidChangeModelDecorations(() => {
      const model = this.editor.getModel();
      const range = model.getDecorationRange(this.decorationId);
      if (this.range && !this.range.equalsRange(range)) {
        this.range = range;
        this.editor.layoutContentWidget(this);
      }
    }));
    this.create(cssClass);
    this.editor.addContentWidget(this);
    this.editor.layoutContentWidget(this);
  }
  create(cssClass) {
    this.domNode = $$8(".inline-breakpoint-widget");
    if (cssClass) {
      this.domNode.classList.add(...cssClass.split(" "));
    }
    this.toDispose.push(addDisposableListener(this.domNode, EventType.CLICK, async (e) => {
      var _a2;
      switch ((_a2 = this.breakpoint) == null ? void 0 : _a2.enabled) {
        case void 0:
          await this.debugService.addBreakpoints(this.editor.getModel().uri, [{ lineNumber: this.range.startLineNumber, column: this.range.startColumn }]);
          break;
        case true:
          await this.debugService.removeBreakpoints(this.breakpoint.getId());
          break;
        case false:
          this.debugService.enableOrDisableBreakpoints(true, this.breakpoint);
          break;
      }
    }));
    this.toDispose.push(addDisposableListener(this.domNode, EventType.CONTEXT_MENU, (e) => {
      const event = new StandardMouseEvent(e);
      const actions = this.getContextMenuActions();
      this.contextMenuService.showContextMenu({
        getAnchor: () => event,
        getActions: () => actions,
        getActionsContext: () => this.breakpoint,
        onHide: () => disposeIfDisposable(actions)
      });
    }));
    const updateSize = () => {
      const lineHeight = this.editor.getOption(65);
      this.domNode.style.height = `${lineHeight}px`;
      this.domNode.style.width = `${Math.ceil(0.8 * lineHeight)}px`;
      this.domNode.style.marginLeft = `4px`;
    };
    updateSize();
    this.toDispose.push(this.editor.onDidChangeConfiguration((c) => {
      if (c.hasChanged(51) || c.hasChanged(65)) {
        updateSize();
      }
    }));
  }
  getId() {
    return generateUuid();
  }
  getDomNode() {
    return this.domNode;
  }
  getPosition() {
    if (!this.range) {
      return null;
    }
    this.domNode.classList.toggle("line-start", this.range.startColumn === 1);
    return {
      position: { lineNumber: this.range.startLineNumber, column: this.range.startColumn - 1 },
      preference: [0]
    };
  }
  dispose() {
    this.editor.removeContentWidget(this);
    dispose(this.toDispose);
  }
}
InlineBreakpointWidget.__decorator = __decorate([
  memoize
], InlineBreakpointWidget.prototype, "getId", null);
registerThemingParticipant((theme, collector) => {
  const debugIconBreakpointColor = theme.getColor(debugIconBreakpointForeground);
  if (debugIconBreakpointColor) {
    collector.addRule(`
		${allBreakpoints.map((b) => `.monaco-workbench ${ThemeIcon.asCSSSelector(b.regular)}`).join(",\n		")},
		.monaco-workbench ${ThemeIcon.asCSSSelector(debugBreakpointUnsupported)},
		.monaco-workbench ${ThemeIcon.asCSSSelector(debugBreakpointHint)}:not([class*='codicon-debug-breakpoint']):not([class*='codicon-debug-stackframe']),
		.monaco-workbench ${ThemeIcon.asCSSSelector(breakpoint.regular)}${ThemeIcon.asCSSSelector(debugStackframeFocused)}::after,
		.monaco-workbench ${ThemeIcon.asCSSSelector(breakpoint.regular)}${ThemeIcon.asCSSSelector(debugStackframe)}::after {
			color: ${debugIconBreakpointColor} !important;
		}
		`);
  }
  const debugIconBreakpointDisabledColor = theme.getColor(debugIconBreakpointDisabledForeground);
  if (debugIconBreakpointDisabledColor) {
    collector.addRule(`
		${allBreakpoints.map((b) => `.monaco-workbench ${ThemeIcon.asCSSSelector(b.disabled)}`).join(",\n		")} {
			color: ${debugIconBreakpointDisabledColor};
		}
		`);
  }
  const debugIconBreakpointUnverifiedColor = theme.getColor(debugIconBreakpointUnverifiedForeground);
  if (debugIconBreakpointUnverifiedColor) {
    collector.addRule(`
		${allBreakpoints.map((b) => `.monaco-workbench ${ThemeIcon.asCSSSelector(b.unverified)}`).join(",\n		")} {
			color: ${debugIconBreakpointUnverifiedColor};
		}
		`);
  }
  const debugIconBreakpointCurrentStackframeForegroundColor = theme.getColor(debugIconBreakpointCurrentStackframeForeground);
  if (debugIconBreakpointCurrentStackframeForegroundColor) {
    collector.addRule(`
		.monaco-workbench ${ThemeIcon.asCSSSelector(debugStackframe)},
		.monaco-editor .debug-top-stack-frame-column {
			color: ${debugIconBreakpointCurrentStackframeForegroundColor} !important;
		}
		`);
  }
  const debugIconBreakpointStackframeFocusedColor = theme.getColor(debugIconBreakpointStackframeForeground);
  if (debugIconBreakpointStackframeFocusedColor) {
    collector.addRule(`
		.monaco-workbench ${ThemeIcon.asCSSSelector(debugStackframeFocused)} {
			color: ${debugIconBreakpointStackframeFocusedColor} !important;
		}
		`);
  }
});
const debugIconBreakpointForeground = registerColor("debugIcon.breakpointForeground", { dark: "#E51400", light: "#E51400", hcDark: "#E51400", hcLight: "#E51400" }, localize("debugIcon.breakpointForeground", "Icon color for breakpoints."));
const debugIconBreakpointDisabledForeground = registerColor("debugIcon.breakpointDisabledForeground", { dark: "#848484", light: "#848484", hcDark: "#848484", hcLight: "#848484" }, localize(
  "debugIcon.breakpointDisabledForeground",
  "Icon color for disabled breakpoints."
));
const debugIconBreakpointUnverifiedForeground = registerColor("debugIcon.breakpointUnverifiedForeground", { dark: "#848484", light: "#848484", hcDark: "#848484", hcLight: "#848484" }, localize(
  "debugIcon.breakpointUnverifiedForeground",
  "Icon color for unverified breakpoints."
));
const debugIconBreakpointCurrentStackframeForeground = registerColor("debugIcon.breakpointCurrentStackframeForeground", { dark: "#FFCC00", light: "#BE8700", hcDark: "#FFCC00", hcLight: "#BE8700" }, localize(
  "debugIcon.breakpointCurrentStackframeForeground",
  "Icon color for the current breakpoint stack frame."
));
const debugIconBreakpointStackframeForeground = registerColor("debugIcon.breakpointStackframeForeground", { dark: "#89D185", light: "#89D185", hcDark: "#89D185", hcLight: "#89D185" }, localize(
  "debugIcon.breakpointStackframeForeground",
  "Icon color for all breakpoint stack frames."
));
var css$4 = ".monaco-editor .view-overlays .debug-top-stack-frame-line{background-color:var(--vscode-editor-stackFrameHighlightBackground)}.monaco-editor .view-overlays .debug-focused-stack-frame-line{background-color:var(--vscode-editor-focusedStackFrameHighlightBackground)}";
n(css$4, {});
const topStackFrameColor = registerColor("editor.stackFrameHighlightBackground", { dark: "#ffff0033", light: "#ffff6673", hcDark: "#ffff0033", hcLight: "#ffff6673" }, localize(
  "topStackFrameLineHighlight",
  "Background color for the highlight of line at the top stack frame position."
));
const focusedStackFrameColor = registerColor("editor.focusedStackFrameHighlightBackground", { dark: "#7abd7a4d", light: "#cee7ce73", hcDark: "#7abd7a4d", hcLight: "#cee7ce73" }, localize(
  "focusedStackFrameLineHighlight",
  "Background color for the highlight of line at focused stack frame position."
));
const stickiness = 1;
const TOP_STACK_FRAME_MARGIN = {
  description: "top-stack-frame-margin",
  glyphMarginClassName: ThemeIcon.asClassName(debugStackframe),
  glyphMargin: { position: GlyphMarginLane.Right },
  zIndex: 9999,
  stickiness,
  overviewRuler: {
    position: OverviewRulerLane.Full,
    color: themeColorFromId(topStackFrameColor)
  }
};
const FOCUSED_STACK_FRAME_MARGIN = {
  description: "focused-stack-frame-margin",
  glyphMarginClassName: ThemeIcon.asClassName(debugStackframeFocused),
  glyphMargin: { position: GlyphMarginLane.Right },
  zIndex: 9999,
  stickiness,
  overviewRuler: {
    position: OverviewRulerLane.Full,
    color: themeColorFromId(focusedStackFrameColor)
  }
};
const TOP_STACK_FRAME_DECORATION = {
  description: "top-stack-frame-decoration",
  isWholeLine: true,
  className: "debug-top-stack-frame-line",
  stickiness
};
const FOCUSED_STACK_FRAME_DECORATION = {
  description: "focused-stack-frame-decoration",
  isWholeLine: true,
  className: "debug-focused-stack-frame-line",
  stickiness
};
function createDecorationsForStackFrame(stackFrame, isFocusedSession, noCharactersBefore) {
  const result = [];
  const columnUntilEOLRange = new Range(
    stackFrame.range.startLineNumber,
    stackFrame.range.startColumn,
    stackFrame.range.startLineNumber,
    1073741824
  );
  const range = new Range(
    stackFrame.range.startLineNumber,
    stackFrame.range.startColumn,
    stackFrame.range.startLineNumber,
    stackFrame.range.startColumn + 1
  );
  const topStackFrame = stackFrame.thread.getTopStackFrame();
  if (stackFrame.getId() === (topStackFrame == null ? void 0 : topStackFrame.getId())) {
    if (isFocusedSession) {
      result.push({
        options: TOP_STACK_FRAME_MARGIN,
        range
      });
    }
    result.push({
      options: TOP_STACK_FRAME_DECORATION,
      range: columnUntilEOLRange
    });
    if (stackFrame.range.startColumn > 1) {
      result.push({
        options: {
          description: "top-stack-frame-inline-decoration",
          before: {
            content: "",
            inlineClassName: noCharactersBefore ? "debug-top-stack-frame-column start-of-line" : "debug-top-stack-frame-column",
            inlineClassNameAffectsLetterSpacing: true
          }
        },
        range: columnUntilEOLRange
      });
    }
  } else {
    if (isFocusedSession) {
      result.push({
        options: FOCUSED_STACK_FRAME_MARGIN,
        range
      });
    }
    result.push({
      options: FOCUSED_STACK_FRAME_DECORATION,
      range: columnUntilEOLRange
    });
  }
  return result;
}
let CallStackEditorContribution = class CallStackEditorContribution2 extends Disposable {
  constructor(editor, debugService, uriIdentityService, logService) {
    super();
    this.editor = editor;
    this.debugService = debugService;
    this.uriIdentityService = uriIdentityService;
    this.logService = logService;
    this.decorations = this.editor.createDecorationsCollection();
    const setDecorations = () => this.decorations.set(this.createCallStackDecorations());
    this._register(Event.any(this.debugService.getViewModel().onDidFocusStackFrame, this.debugService.getModel().onDidChangeCallStack)(() => {
      setDecorations();
    }));
    this._register(this.editor.onDidChangeModel((e) => {
      if (e.newModelUrl) {
        setDecorations();
      }
    }));
    setDecorations();
  }
  createCallStackDecorations() {
    const editor = this.editor;
    if (!editor.hasModel()) {
      return [];
    }
    const focusedStackFrame = this.debugService.getViewModel().focusedStackFrame;
    const decorations = [];
    this.debugService.getModel().getSessions().forEach((s) => {
      const isSessionFocused = s === (focusedStackFrame == null ? void 0 : focusedStackFrame.thread.session);
      s.getAllThreads().forEach((t) => {
        if (t.stopped) {
          const callStack = t.getCallStack();
          const stackFrames = [];
          if (callStack.length > 0) {
            if (focusedStackFrame && !focusedStackFrame.equals(callStack[0])) {
              stackFrames.push(focusedStackFrame);
            }
            stackFrames.push(callStack[0]);
          }
          stackFrames.forEach((candidateStackFrame) => {
            var _a2, _b2;
            if (candidateStackFrame && this.uriIdentityService.extUri.isEqual(candidateStackFrame.source.uri, (_a2 = editor.getModel()) == null ? void 0 : _a2.uri)) {
              if (candidateStackFrame.range.startLineNumber > ((_b2 = editor.getModel()) == null ? void 0 : _b2.getLineCount()) || candidateStackFrame.range.startLineNumber < 1) {
                this.logService.warn(`CallStackEditorContribution: invalid stack frame line number: ${candidateStackFrame.range.startLineNumber}`);
                return;
              }
              const noCharactersBefore = editor.getModel().getLineFirstNonWhitespaceColumn(candidateStackFrame.range.startLineNumber) >= candidateStackFrame.range.startColumn;
              decorations.push(...createDecorationsForStackFrame(candidateStackFrame, isSessionFocused, noCharactersBefore));
            }
          });
        }
      });
    });
    return distinct(decorations, (d) => `${d.options.className} ${d.options.glyphMarginClassName} ${d.range.startLineNumber} ${d.range.startColumn}`);
  }
  dispose() {
    super.dispose();
    this.decorations.clear();
  }
};
CallStackEditorContribution = __decorate([
  __param(1, IDebugService),
  __param(2, IUriIdentityService),
  __param(3, ILogService)
], CallStackEditorContribution);
const MAX_VALUE_RENDER_LENGTH_IN_VIEWLET$1 = 1024;
const booleanRegex = /^(true|false)$/i;
const stringRegex = /^(['"]).*\1$/;
const $$7 = $$a;
function renderViewTree(container) {
  const treeContainer = $$7(".");
  treeContainer.classList.add("debug-view-content");
  container.appendChild(treeContainer);
  return treeContainer;
}
function renderExpressionValue(expressionOrValue, container, options) {
  let value = typeof expressionOrValue === "string" ? expressionOrValue : expressionOrValue.value;
  container.className = "value";
  if (value === null || (expressionOrValue instanceof Expression || expressionOrValue instanceof Variable || expressionOrValue instanceof ReplEvaluationResult) && !expressionOrValue.available) {
    container.classList.add("unavailable");
    if (value !== Expression.DEFAULT_VALUE) {
      container.classList.add("error");
    }
  } else {
    if (expressionOrValue instanceof ExpressionContainer && options.showChanged && expressionOrValue.valueChanged && value !== Expression.DEFAULT_VALUE) {
      container.className = "value changed";
      expressionOrValue.valueChanged = false;
    }
    if (options.colorize && typeof expressionOrValue !== "string") {
      if (expressionOrValue.type === "number" || expressionOrValue.type === "boolean" || expressionOrValue.type === "string") {
        container.classList.add(expressionOrValue.type);
      } else if (!isNaN(+value)) {
        container.classList.add("number");
      } else if (booleanRegex.test(value)) {
        container.classList.add("boolean");
      } else if (stringRegex.test(value)) {
        container.classList.add("string");
      }
    }
  }
  if (options.maxValueLength && value && value.length > options.maxValueLength) {
    value = value.substring(0, options.maxValueLength) + "...";
  }
  if (!value) {
    value = "";
  }
  if (options.linkDetector) {
    container.textContent = "";
    const session = expressionOrValue instanceof ExpressionContainer ? expressionOrValue.getSession() : void 0;
    container.appendChild(options.linkDetector.linkify(value, false, session ? session.root : void 0, true));
  } else {
    container.textContent = value;
  }
  if (options.showHover) {
    container.title = value || "";
  }
}
function renderVariable(variable, data, showChanged, highlights, linkDetector) {
  var _a2, _b2, _c2;
  if (variable.available) {
    let text = variable.name;
    if (variable.value && typeof variable.name === "string") {
      text += ":";
    }
    data.label.set(text, highlights, variable.type ? variable.type : variable.name);
    data.name.classList.toggle("virtual", ((_a2 = variable.presentationHint) == null ? void 0 : _a2.kind) === "virtual");
    data.name.classList.toggle("internal", ((_b2 = variable.presentationHint) == null ? void 0 : _b2.visibility) === "internal");
  } else if (variable.value && typeof variable.name === "string" && variable.name) {
    data.label.set(":");
  }
  data.expression.classList.toggle("lazy", !!((_c2 = variable.presentationHint) == null ? void 0 : _c2.lazy));
  renderExpressionValue(variable, data.value, {
    showChanged,
    maxValueLength: MAX_VALUE_RENDER_LENGTH_IN_VIEWLET$1,
    showHover: true,
    colorize: true,
    linkDetector
  });
}
let AbstractExpressionsRenderer = class AbstractExpressionsRenderer2 {
  constructor(debugService, contextViewService) {
    this.debugService = debugService;
    this.contextViewService = contextViewService;
  }
  renderTemplate(container) {
    const expression = append(container, $$7(".expression"));
    const name = append(expression, $$7("span.name"));
    const lazyButton = append(expression, $$7("span.lazy-button"));
    lazyButton.classList.add(...ThemeIcon.asClassNameArray(Codicon.eye));
    lazyButton.title = localize("debug.lazyButton.tooltip", "Click to expand");
    const value = append(expression, $$7("span.value"));
    const label = new HighlightedLabel(name);
    const inputBoxContainer = append(expression, $$7(".inputBoxContainer"));
    const templateDisposable = new DisposableStore();
    let actionBar;
    if (this.renderActionBar) {
      append(expression, $$7(".span.actionbar-spacer"));
      actionBar = templateDisposable.add(new ActionBar(expression));
    }
    const template = { expression, name, value, label, inputBoxContainer, actionBar, elementDisposable: [], templateDisposable, lazyButton, currentElement: void 0 };
    templateDisposable.add(addDisposableListener(lazyButton, EventType.CLICK, () => {
      if (template.currentElement) {
        this.debugService.getViewModel().evaluateLazyExpression(template.currentElement);
      }
    }));
    return template;
  }
  renderExpressionElement(element, node, data) {
    data.currentElement = element;
    this.renderExpression(node.element, data, createMatches(node.filterData));
    if (data.actionBar) {
      this.renderActionBar(data.actionBar, element, data);
    }
    const selectedExpression = this.debugService.getViewModel().getSelectedExpression();
    if (element === (selectedExpression == null ? void 0 : selectedExpression.expression) || element instanceof Variable && element.errorMessage) {
      const options = this.getInputBoxOptions(element, !!(selectedExpression == null ? void 0 : selectedExpression.settingWatch));
      if (options) {
        data.elementDisposable.push(this.renderInputBox(data.name, data.value, data.inputBoxContainer, options));
      }
    }
  }
  renderInputBox(nameElement, valueElement, inputBoxContainer, options) {
    nameElement.style.display = "none";
    valueElement.style.display = "none";
    inputBoxContainer.style.display = "initial";
    clearNode(inputBoxContainer);
    const inputBox = new InputBox(
      inputBoxContainer,
      this.contextViewService,
      { ...options, inputBoxStyles: defaultInputBoxStyles }
    );
    inputBox.value = options.initialValue;
    inputBox.focus();
    inputBox.select();
    const done = once$1((success, finishEditing) => {
      nameElement.style.display = "";
      valueElement.style.display = "";
      inputBoxContainer.style.display = "none";
      const value = inputBox.value;
      dispose(toDispose);
      if (finishEditing) {
        this.debugService.getViewModel().setSelectedExpression(void 0, false);
        options.onFinish(value, success);
      }
    });
    const toDispose = [
      inputBox,
      addStandardDisposableListener(inputBox.inputElement, EventType.KEY_DOWN, (e) => {
        const isEscape = e.equals(9);
        const isEnter = e.equals(3);
        if (isEscape || isEnter) {
          e.preventDefault();
          e.stopPropagation();
          done(isEnter, true);
        }
      }),
      addDisposableListener(inputBox.inputElement, EventType.BLUR, () => {
        done(true, true);
      }),
      addDisposableListener(inputBox.inputElement, EventType.CLICK, (e) => {
        e.preventDefault();
        e.stopPropagation();
      })
    ];
    return toDisposable(() => {
      done(false, false);
    });
  }
  disposeElement(node, index, templateData) {
    dispose(templateData.elementDisposable);
    templateData.elementDisposable = [];
  }
  disposeTemplate(templateData) {
    dispose(templateData.elementDisposable);
    templateData.templateDisposable.dispose();
  }
};
AbstractExpressionsRenderer = __decorate([
  __param(0, IDebugService),
  __param(1, IContextViewService)
], AbstractExpressionsRenderer);
var css$3 = ".monaco-workbench .debug-toolbar{border-radius:4px;display:flex;height:32px;padding-left:7px;position:absolute;z-index:39}.monaco-workbench .debug-toolbar .monaco-action-bar .action-item{margin-right:4px}.monaco-workbench .debug-toolbar .monaco-action-bar .action-item.select-container{margin-right:7px}.monaco-workbench .debug-toolbar .monaco-action-bar .action-item.select-container .monaco-select-box,.monaco-workbench .start-debug-action-item .select-container .monaco-select-box{padding:0 22px 0 6px}.monaco-workbench .debug-toolbar .drag-area{align-items:center;cursor:grab;display:flex;justify-content:center;opacity:.5;width:16px}.monaco-workbench .debug-toolbar .drag-area.dragged{cursor:grabbing}.monaco-workbench .debug-toolbar .monaco-action-bar .action-item .action-label{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:16px;display:flex;justify-content:center;margin-right:0}";
n(css$3, {});
const $$6 = $$a;
let StartDebugActionViewItem = (_a = class extends BaseActionViewItem {
  constructor(context, action, debugService, configurationService, commandService, contextService, contextViewService, keybindingService) {
    super(context, action);
    this.context = context;
    this.debugService = debugService;
    this.configurationService = configurationService;
    this.commandService = commandService;
    this.contextService = contextService;
    this.keybindingService = keybindingService;
    this.debugOptions = [];
    this.selected = 0;
    this.providers = [];
    this.toDispose = [];
    this.selectBox = new SelectBox(
      [],
      -1,
      contextViewService,
      defaultSelectBoxStyles,
      { ariaLabel: localize("debugLaunchConfigurations", "Debug Launch Configurations") }
    );
    this.selectBox.setFocusable(false);
    this.toDispose.push(this.selectBox);
    this.registerListeners();
  }
  registerListeners() {
    this.toDispose.push(this.configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("launch")) {
        this.updateOptions();
      }
    }));
    this.toDispose.push(this.debugService.getConfigurationManager().onDidSelectConfiguration(() => {
      this.updateOptions();
    }));
  }
  render(container) {
    var _a2;
    this.container = container;
    container.classList.add("start-debug-action-item");
    this.start = append(container, $$6(ThemeIcon.asCSSSelector(debugStart)));
    const keybinding = (_a2 = this.keybindingService.lookupKeybinding(this.action.id)) == null ? void 0 : _a2.getLabel();
    const keybindingLabel = keybinding ? ` (${keybinding})` : "";
    this.start.title = this.action.label + keybindingLabel;
    this.start.setAttribute("role", "button");
    this.start.ariaLabel = this.start.title;
    this.toDispose.push(addDisposableListener(this.start, EventType.CLICK, () => {
      this.start.blur();
      if (this.debugService.state !== 1) {
        this.actionRunner.run(this.action, this.context);
      }
    }));
    this.toDispose.push(addDisposableListener(this.start, EventType.MOUSE_DOWN, (e) => {
      if (this.action.enabled && e.button === 0) {
        this.start.classList.add("active");
      }
    }));
    this.toDispose.push(addDisposableListener(this.start, EventType.MOUSE_UP, () => {
      this.start.classList.remove("active");
    }));
    this.toDispose.push(addDisposableListener(this.start, EventType.MOUSE_OUT, () => {
      this.start.classList.remove("active");
    }));
    this.toDispose.push(addDisposableListener(this.start, EventType.KEY_DOWN, (e) => {
      const event = new StandardKeyboardEvent(e);
      if (event.equals(17)) {
        this.start.tabIndex = -1;
        this.selectBox.focus();
        event.stopPropagation();
      }
    }));
    this.toDispose.push(this.selectBox.onDidSelect(async (e) => {
      const target = this.debugOptions[e.index];
      const shouldBeSelected = target.handler ? await target.handler() : false;
      if (shouldBeSelected) {
        this.selected = e.index;
      } else {
        this.selectBox.select(this.selected);
      }
    }));
    const selectBoxContainer = $$6(".configuration");
    this.selectBox.render(append(container, selectBoxContainer));
    this.toDispose.push(addDisposableListener(selectBoxContainer, EventType.KEY_DOWN, (e) => {
      const event = new StandardKeyboardEvent(e);
      if (event.equals(15)) {
        this.selectBox.setFocusable(false);
        this.start.tabIndex = 0;
        this.start.focus();
        event.stopPropagation();
      }
    }));
    this.container.style.border = `1px solid ${asCssVariable(selectBorder)}`;
    selectBoxContainer.style.borderLeft = `1px solid ${asCssVariable(selectBorder)}`;
    this.container.style.backgroundColor = asCssVariable(selectBackground);
    this.debugService.getConfigurationManager().getDynamicProviders().then((providers) => {
      this.providers = providers;
      if (this.providers.length > 0) {
        this.updateOptions();
      }
    });
    this.updateOptions();
  }
  setActionContext(context) {
    this.context = context;
  }
  isEnabled() {
    return true;
  }
  focus(fromRight) {
    if (fromRight) {
      this.selectBox.focus();
    } else {
      this.start.tabIndex = 0;
      this.start.focus();
    }
  }
  blur() {
    this.start.tabIndex = -1;
    this.selectBox.blur();
    this.container.blur();
  }
  setFocusable(focusable) {
    if (focusable) {
      this.start.tabIndex = 0;
    } else {
      this.start.tabIndex = -1;
      this.selectBox.setFocusable(false);
    }
  }
  dispose() {
    this.toDispose = dispose(this.toDispose);
  }
  updateOptions() {
    this.selected = 0;
    this.debugOptions = [];
    const manager = this.debugService.getConfigurationManager();
    const inWorkspace = this.contextService.getWorkbenchState() === 3;
    let lastGroup;
    const disabledIdxs = [];
    manager.getAllConfigurations().forEach(({ launch, name, presentation }) => {
      if (lastGroup !== (presentation == null ? void 0 : presentation.group)) {
        lastGroup = presentation == null ? void 0 : presentation.group;
        if (this.debugOptions.length) {
          this.debugOptions.push({ label: _a.SEPARATOR, handler: () => Promise.resolve(false) });
          disabledIdxs.push(this.debugOptions.length - 1);
        }
      }
      if (name === manager.selectedConfiguration.name && launch === manager.selectedConfiguration.launch) {
        this.selected = this.debugOptions.length;
      }
      const label = inWorkspace ? `${name} (${launch.name})` : name;
      this.debugOptions.push({
        label,
        handler: async () => {
          await manager.selectConfiguration(launch, name);
          return true;
        }
      });
    });
    manager.getRecentDynamicConfigurations().slice(0, 3).forEach(({ name, type }) => {
      if (type === manager.selectedConfiguration.type && manager.selectedConfiguration.name === name) {
        this.selected = this.debugOptions.length;
      }
      this.debugOptions.push({
        label: name,
        handler: async () => {
          await manager.selectConfiguration(void 0, name, void 0, { type });
          return true;
        }
      });
    });
    if (this.debugOptions.length === 0) {
      this.debugOptions.push({ label: localize("noConfigurations", "No Configurations"), handler: async () => false });
    }
    this.debugOptions.push({ label: _a.SEPARATOR, handler: () => Promise.resolve(false) });
    disabledIdxs.push(this.debugOptions.length - 1);
    this.providers.forEach((p) => {
      this.debugOptions.push({
        label: `${p.label}...`,
        handler: async () => {
          const picked = await p.pick();
          if (picked) {
            await manager.selectConfiguration(picked.launch, picked.config.name, picked.config, { type: p.type });
            return true;
          }
          return false;
        }
      });
    });
    manager.getLaunches().filter((l) => !l.hidden).forEach((l) => {
      const label = inWorkspace ? localize("addConfigTo", "Add Config ({0})...", l.name) : localize("addConfiguration", "Add Configuration...");
      this.debugOptions.push({
        label,
        handler: async () => {
          await this.commandService.executeCommand(ADD_CONFIGURATION_ID, l.uri.toString());
          return false;
        }
      });
    });
    this.selectBox.setOptions(this.debugOptions.map(
      (data, index) => ({ text: data.label, isDisabled: disabledIdxs.indexOf(index) !== -1 })
    ), this.selected);
  }
}, _a.SEPARATOR = "─────────", _a);
StartDebugActionViewItem = __decorate([
  __param(2, IDebugService),
  __param(3, IConfigurationService),
  __param(4, ICommandService),
  __param(5, IWorkspaceContextService),
  __param(6, IContextViewService),
  __param(7, IKeybindingService)
], StartDebugActionViewItem);
let FocusSessionActionViewItem = class FocusSessionActionViewItem2 extends SelectActionViewItem {
  constructor(action, session, debugService, contextViewService, configurationService) {
    super(null, action, [], -1, contextViewService, defaultSelectBoxStyles, { ariaLabel: localize("debugSession", "Debug Session") });
    this.debugService = debugService;
    this.configurationService = configurationService;
    this._register(this.debugService.getViewModel().onDidFocusSession(() => {
      const session2 = this.getSelectedSession();
      if (session2) {
        const index = this.getSessions().indexOf(session2);
        this.select(index);
      }
    }));
    this._register(this.debugService.onDidNewSession((session2) => {
      const sessionListeners = [];
      sessionListeners.push(session2.onDidChangeName(() => this.update()));
      sessionListeners.push(session2.onDidEndAdapter(() => dispose(sessionListeners)));
      this.update();
    }));
    this.getSessions().forEach((session2) => {
      this._register(session2.onDidChangeName(() => this.update()));
    });
    this._register(this.debugService.onDidEndSession(() => this.update()));
    const selectedSession = session ? this.mapFocusedSessionToSelected(session) : void 0;
    this.update(selectedSession);
  }
  getActionContext(_, index) {
    return this.getSessions()[index];
  }
  update(session) {
    if (!session) {
      session = this.getSelectedSession();
    }
    const sessions = this.getSessions();
    const names = sessions.map((s) => {
      const label = s.getLabel();
      if (s.parentSession) {
        return `  ${label}`;
      }
      return label;
    });
    this.setOptions(names.map((data) => ({ text: data })), session ? sessions.indexOf(session) : void 0);
  }
  getSelectedSession() {
    const session = this.debugService.getViewModel().focusedSession;
    return session ? this.mapFocusedSessionToSelected(session) : void 0;
  }
  getSessions() {
    const showSubSessions = this.configurationService.getValue("debug").showSubSessionsInToolBar;
    const sessions = this.debugService.getModel().getSessions();
    return showSubSessions ? sessions : sessions.filter((s) => !s.parentSession);
  }
  mapFocusedSessionToSelected(focusedSession) {
    const showSubSessions = this.configurationService.getValue("debug").showSubSessionsInToolBar;
    while (focusedSession.parentSession && !showSubSessions) {
      focusedSession = focusedSession.parentSession;
    }
    return focusedSession;
  }
};
FocusSessionActionViewItem = __decorate([
  __param(2, IDebugService),
  __param(3, IContextViewService),
  __param(4, IConfigurationService)
], FocusSessionActionViewItem);
const debugToolBarBackground = registerColor("debugToolBar.background", {
  dark: "#333333",
  light: "#F3F3F3",
  hcDark: "#000000",
  hcLight: "#FFFFFF"
}, localize("debugToolBarBackground", "Debug toolbar background color."));
const debugToolBarBorder = registerColor("debugToolBar.border", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, localize("debugToolBarBorder", "Debug toolbar border color."));
const debugIconStartForeground = registerColor("debugIcon.startForeground", {
  dark: "#89D185",
  light: "#388A34",
  hcDark: "#89D185",
  hcLight: "#388A34"
}, localize("debugIcon.startForeground", "Debug toolbar icon for start debugging."));
function registerColors() {
  const debugTokenExpressionName = registerColor("debugTokenExpression.name", { dark: "#c586c0", light: "#9b46b0", hcDark: foreground, hcLight: foreground }, "Foreground color for the token names shown in the debug views (ie. the Variables or Watch view).");
  const debugTokenExpressionValue = registerColor("debugTokenExpression.value", { dark: "#cccccc99", light: "#6c6c6ccc", hcDark: foreground, hcLight: foreground }, "Foreground color for the token values shown in the debug views (ie. the Variables or Watch view).");
  const debugTokenExpressionString = registerColor("debugTokenExpression.string", { dark: "#ce9178", light: "#a31515", hcDark: "#f48771", hcLight: "#a31515" }, "Foreground color for strings in the debug views (ie. the Variables or Watch view).");
  const debugTokenExpressionBoolean = registerColor("debugTokenExpression.boolean", { dark: "#4e94ce", light: "#0000ff", hcDark: "#75bdfe", hcLight: "#0000ff" }, "Foreground color for booleans in the debug views (ie. the Variables or Watch view).");
  const debugTokenExpressionNumber = registerColor("debugTokenExpression.number", { dark: "#b5cea8", light: "#098658", hcDark: "#89d185", hcLight: "#098658" }, "Foreground color for numbers in the debug views (ie. the Variables or Watch view).");
  const debugTokenExpressionError = registerColor("debugTokenExpression.error", { dark: "#f48771", light: "#e51400", hcDark: "#f48771", hcLight: "#e51400" }, "Foreground color for expression errors in the debug views (ie. the Variables or Watch view) and for error logs shown in the debug console.");
  const debugViewExceptionLabelForeground = registerColor("debugView.exceptionLabelForeground", { dark: foreground, light: "#FFF", hcDark: foreground, hcLight: foreground }, "Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.");
  const debugViewExceptionLabelBackground = registerColor("debugView.exceptionLabelBackground", { dark: "#6C2022", light: "#A31515", hcDark: "#6C2022", hcLight: "#A31515" }, "Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.");
  const debugViewStateLabelForeground = registerColor("debugView.stateLabelForeground", { dark: foreground, light: foreground, hcDark: foreground, hcLight: foreground }, "Foreground color for a label in the CALL STACK view showing the current session's or thread's state.");
  const debugViewStateLabelBackground = registerColor("debugView.stateLabelBackground", { dark: "#88888844", light: "#88888844", hcDark: "#88888844", hcLight: "#88888844" }, "Background color for a label in the CALL STACK view showing the current session's or thread's state.");
  const debugViewValueChangedHighlight = registerColor("debugView.valueChangedHighlight", { dark: "#569CD6", light: "#569CD6", hcDark: "#569CD6", hcLight: "#569CD6" }, "Color used to highlight value changes in the debug views (ie. in the Variables view).");
  const debugConsoleInfoForeground = registerColor("debugConsole.infoForeground", { dark: editorInfoForeground, light: editorInfoForeground, hcDark: foreground, hcLight: foreground }, "Foreground color for info messages in debug REPL console.");
  const debugConsoleWarningForeground = registerColor("debugConsole.warningForeground", { dark: editorWarningForeground, light: editorWarningForeground, hcDark: "#008000", hcLight: editorWarningForeground }, "Foreground color for warning messages in debug REPL console.");
  const debugConsoleErrorForeground = registerColor("debugConsole.errorForeground", { dark: errorForeground, light: errorForeground, hcDark: errorForeground, hcLight: errorForeground }, "Foreground color for error messages in debug REPL console.");
  const debugConsoleSourceForeground = registerColor("debugConsole.sourceForeground", { dark: foreground, light: foreground, hcDark: foreground, hcLight: foreground }, "Foreground color for source filenames in debug REPL console.");
  const debugConsoleInputIconForeground = registerColor("debugConsoleInputIcon.foreground", { dark: foreground, light: foreground, hcDark: foreground, hcLight: foreground }, "Foreground color for debug console input marker icon.");
  const debugIconPauseForeground = registerColor("debugIcon.pauseForeground", {
    dark: "#75BEFF",
    light: "#007ACC",
    hcDark: "#75BEFF",
    hcLight: "#007ACC"
  }, localize("debugIcon.pauseForeground", "Debug toolbar icon for pause."));
  const debugIconStopForeground = registerColor("debugIcon.stopForeground", {
    dark: "#F48771",
    light: "#A1260D",
    hcDark: "#F48771",
    hcLight: "#A1260D"
  }, localize("debugIcon.stopForeground", "Debug toolbar icon for stop."));
  const debugIconDisconnectForeground = registerColor("debugIcon.disconnectForeground", {
    dark: "#F48771",
    light: "#A1260D",
    hcDark: "#F48771",
    hcLight: "#A1260D"
  }, localize("debugIcon.disconnectForeground", "Debug toolbar icon for disconnect."));
  const debugIconRestartForeground = registerColor("debugIcon.restartForeground", {
    dark: "#89D185",
    light: "#388A34",
    hcDark: "#89D185",
    hcLight: "#388A34"
  }, localize("debugIcon.restartForeground", "Debug toolbar icon for restart."));
  const debugIconStepOverForeground = registerColor("debugIcon.stepOverForeground", {
    dark: "#75BEFF",
    light: "#007ACC",
    hcDark: "#75BEFF",
    hcLight: "#007ACC"
  }, localize("debugIcon.stepOverForeground", "Debug toolbar icon for step over."));
  const debugIconStepIntoForeground = registerColor("debugIcon.stepIntoForeground", {
    dark: "#75BEFF",
    light: "#007ACC",
    hcDark: "#75BEFF",
    hcLight: "#007ACC"
  }, localize("debugIcon.stepIntoForeground", "Debug toolbar icon for step into."));
  const debugIconStepOutForeground = registerColor("debugIcon.stepOutForeground", {
    dark: "#75BEFF",
    light: "#007ACC",
    hcDark: "#75BEFF",
    hcLight: "#007ACC"
  }, localize("debugIcon.stepOutForeground", "Debug toolbar icon for step over."));
  const debugIconContinueForeground = registerColor("debugIcon.continueForeground", {
    dark: "#75BEFF",
    light: "#007ACC",
    hcDark: "#75BEFF",
    hcLight: "#007ACC"
  }, localize("debugIcon.continueForeground", "Debug toolbar icon for continue."));
  const debugIconStepBackForeground = registerColor("debugIcon.stepBackForeground", {
    dark: "#75BEFF",
    light: "#007ACC",
    hcDark: "#75BEFF",
    hcLight: "#007ACC"
  }, localize("debugIcon.stepBackForeground", "Debug toolbar icon for step back."));
  registerThemingParticipant((theme, collector) => {
    const badgeBackgroundColor = theme.getColor(badgeBackground);
    const badgeForegroundColor = theme.getColor(badgeForeground);
    const listDeemphasizedForegroundColor = theme.getColor(listDeemphasizedForeground);
    const debugViewExceptionLabelForegroundColor = theme.getColor(debugViewExceptionLabelForeground);
    const debugViewExceptionLabelBackgroundColor = theme.getColor(debugViewExceptionLabelBackground);
    const debugViewStateLabelForegroundColor = theme.getColor(debugViewStateLabelForeground);
    const debugViewStateLabelBackgroundColor = theme.getColor(debugViewStateLabelBackground);
    const debugViewValueChangedHighlightColor = theme.getColor(debugViewValueChangedHighlight);
    const toolbarHoverBackgroundColor = theme.getColor(toolbarHoverBackground);
    collector.addRule(`
			/* Text colour of the call stack row's filename */
			.debug-pane .debug-call-stack .monaco-list-row:not(.selected) .stack-frame > .file .file-name {
				color: ${listDeemphasizedForegroundColor}
			}

			/* Line & column number "badge" for selected call stack row */
			.debug-pane .monaco-list-row.selected .line-number {
				background-color: ${badgeBackgroundColor};
				color: ${badgeForegroundColor};
			}

			/* Line & column number "badge" for unselected call stack row (basically all other rows) */
			.debug-pane .line-number {
				background-color: ${badgeBackgroundColor.transparent(0.6)};
				color: ${badgeForegroundColor.transparent(0.6)};
			}

			/* State "badge" displaying the active session's current state.
			* Only visible when there are more active debug sessions/threads running.
			*/
			.debug-pane .debug-call-stack .thread > .state.label,
			.debug-pane .debug-call-stack .session > .state.label {
				background-color: ${debugViewStateLabelBackgroundColor};
				color: ${debugViewStateLabelForegroundColor};
			}

			/* State "badge" displaying the active session's current state.
			* Only visible when there are more active debug sessions/threads running
			* and thread paused due to a thrown exception.
			*/
			.debug-pane .debug-call-stack .thread > .state.label.exception,
			.debug-pane .debug-call-stack .session > .state.label.exception {
				background-color: ${debugViewExceptionLabelBackgroundColor};
				color: ${debugViewExceptionLabelForegroundColor};
			}

			/* Info "badge" shown when the debugger pauses due to a thrown exception. */
			.debug-pane .call-stack-state-message > .label.exception {
				background-color: ${debugViewExceptionLabelBackgroundColor};
				color: ${debugViewExceptionLabelForegroundColor};
			}

			/* Animation of changed values in Debug viewlet */
			@keyframes debugViewletValueChanged {
				0%   { background-color: ${debugViewValueChangedHighlightColor.transparent(0)} }
				5%   { background-color: ${debugViewValueChangedHighlightColor.transparent(0.9)} }
				100% { background-color: ${debugViewValueChangedHighlightColor.transparent(0.3)} }
			}

			.debug-pane .monaco-list-row .expression .value.changed {
				background-color: ${debugViewValueChangedHighlightColor.transparent(0.3)};
				animation-name: debugViewletValueChanged;
				animation-duration: 1s;
				animation-fill-mode: forwards;
			}

			.monaco-list-row .expression .lazy-button:hover {
				background-color: ${toolbarHoverBackgroundColor}
			}
		`);
    const contrastBorderColor = theme.getColor(contrastBorder);
    if (contrastBorderColor) {
      collector.addRule(`
			.debug-pane .line-number {
				border: 1px solid ${contrastBorderColor};
			}
			`);
    }
    if (isHighContrast(theme.type)) {
      collector.addRule(`
			.debug-pane .line-number {
				background-color: ${badgeBackgroundColor};
				color: ${badgeForegroundColor};
			}`);
    }
    const tokenNameColor = theme.getColor(debugTokenExpressionName);
    const tokenValueColor = theme.getColor(debugTokenExpressionValue);
    const tokenStringColor = theme.getColor(debugTokenExpressionString);
    const tokenBooleanColor = theme.getColor(debugTokenExpressionBoolean);
    const tokenErrorColor = theme.getColor(debugTokenExpressionError);
    const tokenNumberColor = theme.getColor(debugTokenExpressionNumber);
    collector.addRule(`
			.monaco-workbench .monaco-list-row .expression .name {
				color: ${tokenNameColor};
			}

			.monaco-workbench .monaco-list-row .expression .value,
			.monaco-workbench .debug-hover-widget .value {
				color: ${tokenValueColor};
			}

			.monaco-workbench .monaco-list-row .expression .value.string,
			.monaco-workbench .debug-hover-widget .value.string {
				color: ${tokenStringColor};
			}

			.monaco-workbench .monaco-list-row .expression .value.boolean,
			.monaco-workbench .debug-hover-widget .value.boolean {
				color: ${tokenBooleanColor};
			}

			.monaco-workbench .monaco-list-row .expression .error,
			.monaco-workbench .debug-hover-widget .error,
			.monaco-workbench .debug-pane .debug-variables .scope .error {
				color: ${tokenErrorColor};
			}

			.monaco-workbench .monaco-list-row .expression .value.number,
			.monaco-workbench .debug-hover-widget .value.number {
				color: ${tokenNumberColor};
			}
		`);
    const debugConsoleInputBorderColor = theme.getColor(inputBorder) || Color.fromHex("#80808060");
    const debugConsoleInfoForegroundColor = theme.getColor(debugConsoleInfoForeground);
    const debugConsoleWarningForegroundColor = theme.getColor(debugConsoleWarningForeground);
    const debugConsoleErrorForegroundColor = theme.getColor(debugConsoleErrorForeground);
    const debugConsoleSourceForegroundColor = theme.getColor(debugConsoleSourceForeground);
    const debugConsoleInputIconForegroundColor = theme.getColor(debugConsoleInputIconForeground);
    collector.addRule(`
			.repl .repl-input-wrapper {
				border-top: 1px solid ${debugConsoleInputBorderColor};
			}

			.monaco-workbench .repl .repl-tree .output .expression .value.info {
				color: ${debugConsoleInfoForegroundColor};
			}

			.monaco-workbench .repl .repl-tree .output .expression .value.warn {
				color: ${debugConsoleWarningForegroundColor};
			}

			.monaco-workbench .repl .repl-tree .output .expression .value.error {
				color: ${debugConsoleErrorForegroundColor};
			}

			.monaco-workbench .repl .repl-tree .output .expression .source {
				color: ${debugConsoleSourceForegroundColor};
			}

			.monaco-workbench .repl .repl-tree .monaco-tl-contents .arrow {
				color: ${debugConsoleInputIconForegroundColor};
			}
		`);
    if (!theme.defines(debugConsoleInputIconForeground)) {
      collector.addRule(`
				.monaco-workbench.vs .repl .repl-tree .monaco-tl-contents .arrow {
					opacity: 0.25;
				}

				.monaco-workbench.vs-dark .repl .repl-tree .monaco-tl-contents .arrow {
					opacity: 0.4;
				}

				.monaco-workbench.hc-black .repl .repl-tree .monaco-tl-contents .arrow,
				.monaco-workbench.hc-light .repl .repl-tree .monaco-tl-contents .arrow {
					opacity: 1;
				}
			`);
    }
    const debugIconStartColor = theme.getColor(debugIconStartForeground);
    if (debugIconStartColor) {
      collector.addRule(`.monaco-workbench ${ThemeIcon.asCSSSelector(debugStart)} { color: ${debugIconStartColor}; }`);
    }
    const debugIconPauseColor = theme.getColor(debugIconPauseForeground);
    if (debugIconPauseColor) {
      collector.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugPause)}, .monaco-workbench ${ThemeIcon.asCSSSelector(debugPause)} { color: ${debugIconPauseColor}; }`);
    }
    const debugIconStopColor = theme.getColor(debugIconStopForeground);
    if (debugIconStopColor) {
      collector.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugStop)},.monaco-workbench ${ThemeIcon.asCSSSelector(debugStop)} { color: ${debugIconStopColor}; }`);
    }
    const debugIconDisconnectColor = theme.getColor(debugIconDisconnectForeground);
    if (debugIconDisconnectColor) {
      collector.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugDisconnect)},.monaco-workbench .debug-view-content ${ThemeIcon.asCSSSelector(debugDisconnect)}, .monaco-workbench .debug-toolbar ${ThemeIcon.asCSSSelector(debugDisconnect)} { color: ${debugIconDisconnectColor}; }`);
    }
    const debugIconRestartColor = theme.getColor(debugIconRestartForeground);
    if (debugIconRestartColor) {
      collector.addRule(`.monaco-workbench ${ThemeIcon.asCSSSelector(debugRestart)}, .monaco-workbench ${ThemeIcon.asCSSSelector(debugRestartFrame)}, .monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugRestart)}, .monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugRestartFrame)} { color: ${debugIconRestartColor}; }`);
    }
    const debugIconStepOverColor = theme.getColor(debugIconStepOverForeground);
    if (debugIconStepOverColor) {
      collector.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugStepOver)}, .monaco-workbench ${ThemeIcon.asCSSSelector(debugStepOver)} { color: ${debugIconStepOverColor}; }`);
    }
    const debugIconStepIntoColor = theme.getColor(debugIconStepIntoForeground);
    if (debugIconStepIntoColor) {
      collector.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugStepInto)}, .monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugStepInto)}, .monaco-workbench ${ThemeIcon.asCSSSelector(debugStepInto)} { color: ${debugIconStepIntoColor}; }`);
    }
    const debugIconStepOutColor = theme.getColor(debugIconStepOutForeground);
    if (debugIconStepOutColor) {
      collector.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugStepOut)}, .monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugStepOut)}, .monaco-workbench ${ThemeIcon.asCSSSelector(debugStepOut)} { color: ${debugIconStepOutColor}; }`);
    }
    const debugIconContinueColor = theme.getColor(debugIconContinueForeground);
    if (debugIconContinueColor) {
      collector.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugContinue)}, .monaco-workbench ${ThemeIcon.asCSSSelector(debugContinue)}, .monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugReverseContinue)}, .monaco-workbench ${ThemeIcon.asCSSSelector(debugReverseContinue)} { color: ${debugIconContinueColor}; }`);
    }
    const debugIconStepBackColor = theme.getColor(debugIconStepBackForeground);
    if (debugIconStepBackColor) {
      collector.addRule(`.monaco-workbench .part > .title > .title-actions .action-label${ThemeIcon.asCSSSelector(debugStepBack)}, .monaco-workbench ${ThemeIcon.asCSSSelector(debugStepBack)} { color: ${debugIconStepBackColor}; }`);
    }
  });
}
const DEBUG_TOOLBAR_POSITION_KEY = "debug.actionswidgetposition";
const DEBUG_TOOLBAR_Y_KEY = "debug.actionswidgety";
let DebugToolBar = class DebugToolBar2 extends Themable {
  constructor(notificationService, telemetryService, debugService, layoutService, storageService, configurationService, themeService, instantiationService, menuService, contextKeyService) {
    super(themeService);
    this.notificationService = notificationService;
    this.telemetryService = telemetryService;
    this.debugService = debugService;
    this.layoutService = layoutService;
    this.storageService = storageService;
    this.configurationService = configurationService;
    this.instantiationService = instantiationService;
    this.yCoordinate = 0;
    this.isVisible = false;
    this.isBuilt = false;
    this.stopActionViewItemDisposables = this._register(new DisposableStore());
    this.$el = $$a("div.debug-toolbar");
    this.$el.style.top = `${layoutService.offset.top}px`;
    this.dragArea = append(this.$el, $$a("div.drag-area" + ThemeIcon.asCSSSelector(debugGripper)));
    const actionBarContainer = append(this.$el, $$a("div.action-bar-container"));
    this.debugToolBarMenu = menuService.createMenu(MenuId.DebugToolBar, contextKeyService);
    this._register(this.debugToolBarMenu);
    this.activeActions = [];
    this.actionBar = this._register(new ActionBar(actionBarContainer, {
      orientation: 0,
      actionViewItemProvider: (action) => {
        if (action.id === FOCUS_SESSION_ID) {
          return this.instantiationService.createInstance(FocusSessionActionViewItem, action, void 0);
        } else if (action.id === STOP_ID || action.id === DISCONNECT_ID) {
          this.stopActionViewItemDisposables.clear();
          const item = this.instantiationService.invokeFunction((accessor) => createDisconnectMenuItemAction(action, this.stopActionViewItemDisposables, accessor));
          if (item) {
            return item;
          }
        }
        return createActionViewItem(this.instantiationService, action);
      }
    }));
    this.updateScheduler = this._register(new RunOnceScheduler(() => {
      var _a2;
      const state = this.debugService.state;
      const toolBarLocation = this.configurationService.getValue("debug").toolBarLocation;
      if (state === 0 || toolBarLocation === "docked" || toolBarLocation === "hidden" || this.debugService.getModel().getSessions().every((s) => s.suppressDebugToolbar) || state === 1 && ((_a2 = this.debugService.initializingOptions) == null ? void 0 : _a2.suppressDebugToolbar)) {
        return this.hide();
      }
      const actions = [];
      createAndFillInActionBarActions(this.debugToolBarMenu, { shouldForwardArgs: true }, actions);
      if (!equals$1(actions, this.activeActions, (first, second) => first.id === second.id && first.enabled === second.enabled)) {
        this.actionBar.clear();
        this.actionBar.push(actions, { icon: true, label: false });
        this.activeActions = actions;
      }
      this.show();
    }, 20));
    this.updateStyles();
    this.registerListeners();
    this.hide();
  }
  registerListeners() {
    this._register(this.debugService.onDidChangeState(() => this.updateScheduler.schedule()));
    this._register(this.configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("debug.toolBarLocation")) {
        this.updateScheduler.schedule();
      }
    }));
    this._register(this.debugToolBarMenu.onDidChange(() => this.updateScheduler.schedule()));
    this._register(this.actionBar.actionRunner.onDidRun((e) => {
      if (e.error && !isCancellationError(e.error)) {
        this.notificationService.error(e.error);
      }
      this.telemetryService.publicLog2("workbenchActionExecuted", { id: e.action.id, from: "debugActionsWidget" });
    }));
    this._register(addDisposableListener(window, EventType.RESIZE, () => this.setCoordinates()));
    this._register(addDisposableGenericMouseUpListener(this.dragArea, (event) => {
      const mouseClickEvent = new StandardMouseEvent(event);
      if (mouseClickEvent.detail === 2) {
        const widgetWidth = this.$el.clientWidth;
        this.setCoordinates(0.5 * window.innerWidth - 0.5 * widgetWidth, 0);
        this.storePosition();
      }
    }));
    this._register(addDisposableGenericMouseDownListener(this.dragArea, (event) => {
      this.dragArea.classList.add("dragged");
      const mouseMoveListener = addDisposableGenericMouseMoveListener(window, (e) => {
        const mouseMoveEvent = new StandardMouseEvent(e);
        mouseMoveEvent.preventDefault();
        this.setCoordinates(mouseMoveEvent.posx - 14, mouseMoveEvent.posy - this.layoutService.offset.top);
      });
      const mouseUpListener = addDisposableGenericMouseUpListener(window, (e) => {
        this.storePosition();
        this.dragArea.classList.remove("dragged");
        mouseMoveListener.dispose();
        mouseUpListener.dispose();
      });
    }));
    this._register(this.layoutService.onDidChangePartVisibility(() => this.setYCoordinate()));
    this._register(PixelRatio.onDidChange(() => this.setYCoordinate()));
  }
  storePosition() {
    const left = getComputedStyle(this.$el).left;
    if (left) {
      const position = parseFloat(left) / window.innerWidth;
      this.storageService.store(DEBUG_TOOLBAR_POSITION_KEY, position, 0, 1);
    }
  }
  updateStyles() {
    super.updateStyles();
    if (this.$el) {
      this.$el.style.backgroundColor = this.getColor(debugToolBarBackground) || "";
      const widgetShadowColor = this.getColor(widgetShadow);
      this.$el.style.boxShadow = widgetShadowColor ? `0 0 8px 2px ${widgetShadowColor}` : "";
      const contrastBorderColor = this.getColor(widgetBorder);
      const borderColor = this.getColor(debugToolBarBorder);
      if (contrastBorderColor) {
        this.$el.style.border = `1px solid ${contrastBorderColor}`;
      } else {
        this.$el.style.border = borderColor ? `solid ${borderColor}` : "none";
        this.$el.style.border = "1px 0";
      }
    }
  }
  setYCoordinate(y = this.yCoordinate) {
    const titlebarOffset = this.layoutService.offset.top;
    this.$el.style.top = `${titlebarOffset + y}px`;
    this.yCoordinate = y;
  }
  setCoordinates(x, y) {
    if (!this.isVisible) {
      return;
    }
    const widgetWidth = this.$el.clientWidth;
    if (x === void 0) {
      const positionPercentage = this.storageService.get(DEBUG_TOOLBAR_POSITION_KEY, 0);
      x = positionPercentage !== void 0 ? parseFloat(positionPercentage) * window.innerWidth : 0.5 * window.innerWidth - 0.5 * widgetWidth;
    }
    x = Math.max(0, Math.min(x, window.innerWidth - widgetWidth));
    this.$el.style.left = `${x}px`;
    if (y === void 0) {
      y = this.storageService.getNumber(DEBUG_TOOLBAR_Y_KEY, 0, 0);
    }
    const titleAreaHeight = 35;
    if (y < titleAreaHeight / 2 || y > titleAreaHeight + titleAreaHeight / 2) {
      const moveToTop = y < titleAreaHeight;
      this.setYCoordinate(moveToTop ? 0 : titleAreaHeight);
      this.storageService.store(DEBUG_TOOLBAR_Y_KEY, moveToTop ? 0 : 2 * titleAreaHeight, 0, 1);
    }
  }
  show() {
    if (this.isVisible) {
      this.setCoordinates();
      return;
    }
    if (!this.isBuilt) {
      this.isBuilt = true;
      this.layoutService.container.appendChild(this.$el);
    }
    this.isVisible = true;
    show(this.$el);
    this.setCoordinates();
  }
  hide() {
    this.isVisible = false;
    hide(this.$el);
  }
  dispose() {
    var _a2;
    super.dispose();
    (_a2 = this.$el) == null ? void 0 : _a2.remove();
  }
};
DebugToolBar = __decorate([
  __param(0, INotificationService),
  __param(1, ITelemetryService),
  __param(2, IDebugService),
  __param(3, IWorkbenchLayoutService),
  __param(4, IStorageService),
  __param(5, IConfigurationService),
  __param(6, IThemeService),
  __param(7, IInstantiationService),
  __param(8, IMenuService),
  __param(9, IContextKeyService)
], DebugToolBar);
function createDisconnectMenuItemAction(action, disposables, accessor) {
  const menuService = accessor.get(IMenuService);
  const contextKeyService = accessor.get(IContextKeyService);
  const instantiationService = accessor.get(IInstantiationService);
  const contextMenuService = accessor.get(IContextMenuService);
  const menu = menuService.createMenu(MenuId.DebugToolBarStop, contextKeyService);
  const secondary = [];
  createAndFillInActionBarActions(menu, { shouldForwardArgs: true }, secondary);
  if (!secondary.length) {
    return void 0;
  }
  const dropdownAction = disposables.add(new Action("notebook.moreRunActions", localize("notebook.moreRunActionsLabel", "More..."), "codicon-chevron-down", true));
  const item = instantiationService.createInstance(DropdownWithPrimaryActionViewItem, action, dropdownAction, secondary, "debug-stop-actions", contextMenuService, {});
  return item;
}
const debugViewTitleItems = [];
const registerDebugToolBarItem = (id, title, order, icon, when, precondition, alt) => {
  MenuRegistry.appendMenuItem(MenuId.DebugToolBar, {
    group: "navigation",
    when,
    order,
    command: {
      id,
      title,
      icon,
      precondition
    },
    alt
  });
  debugViewTitleItems.push(MenuRegistry.appendMenuItem(MenuId.ViewContainerTitle, {
    group: "navigation",
    when: ContextKeyExpr.and(when, ContextKeyExpr.equals("viewContainer", VIEWLET_ID), CONTEXT_DEBUG_STATE.notEqualsTo("inactive"), ContextKeyExpr.equals("config.debug.toolBarLocation", "docked")),
    order,
    command: {
      id,
      title,
      icon,
      precondition
    }
  }));
};
MenuRegistry.onDidChangeMenu((e) => {
  if (e.has(MenuId.DebugToolBar)) {
    dispose(debugViewTitleItems);
    const items = MenuRegistry.getMenuItems(MenuId.DebugToolBar);
    for (const i of items) {
      debugViewTitleItems.push(MenuRegistry.appendMenuItem(MenuId.ViewContainerTitle, {
        ...i,
        when: ContextKeyExpr.and(i.when, ContextKeyExpr.equals("viewContainer", VIEWLET_ID), CONTEXT_DEBUG_STATE.notEqualsTo("inactive"), ContextKeyExpr.equals("config.debug.toolBarLocation", "docked"))
      }));
    }
  }
});
registerDebugToolBarItem(CONTINUE_ID, CONTINUE_LABEL, 10, debugContinue, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugToolBarItem(PAUSE_ID, PAUSE_LABEL, 10, debugPause, CONTEXT_DEBUG_STATE.notEqualsTo("stopped"), CONTEXT_DEBUG_STATE.isEqualTo("running"));
registerDebugToolBarItem(STOP_ID, STOP_LABEL, 70, debugStop, CONTEXT_FOCUSED_SESSION_IS_ATTACH.toNegated(), void 0, { id: DISCONNECT_ID, title: DISCONNECT_LABEL, icon: debugDisconnect, precondition: ContextKeyExpr.and(CONTEXT_FOCUSED_SESSION_IS_ATTACH.toNegated(), CONTEXT_TERMINATE_DEBUGGEE_SUPPORTED) });
registerDebugToolBarItem(DISCONNECT_ID, DISCONNECT_LABEL, 70, debugDisconnect, CONTEXT_FOCUSED_SESSION_IS_ATTACH, void 0, { id: STOP_ID, title: STOP_LABEL, icon: debugStop, precondition: ContextKeyExpr.and(CONTEXT_FOCUSED_SESSION_IS_ATTACH, CONTEXT_TERMINATE_DEBUGGEE_SUPPORTED) });
registerDebugToolBarItem(STEP_OVER_ID, STEP_OVER_LABEL, 20, debugStepOver, void 0, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugToolBarItem(STEP_INTO_ID, STEP_INTO_LABEL, 30, debugStepInto, void 0, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugToolBarItem(STEP_OUT_ID, STEP_OUT_LABEL, 40, debugStepOut, void 0, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugToolBarItem(RESTART_SESSION_ID, RESTART_LABEL, 60, debugRestart);
registerDebugToolBarItem(STEP_BACK_ID, localize("stepBackDebug", "Step Back"), 50, debugStepBack, CONTEXT_STEP_BACK_SUPPORTED, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugToolBarItem(REVERSE_CONTINUE_ID, localize("reverseContinue", "Reverse"), 55, debugReverseContinue, CONTEXT_STEP_BACK_SUPPORTED, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugToolBarItem(FOCUS_SESSION_ID, FOCUS_SESSION_LABEL, 100, void 0, CONTEXT_MULTI_SESSION_DEBUG);
MenuRegistry.appendMenuItem(MenuId.DebugToolBarStop, {
  group: "navigation",
  when: ContextKeyExpr.and(CONTEXT_FOCUSED_SESSION_IS_ATTACH.toNegated(), CONTEXT_TERMINATE_DEBUGGEE_SUPPORTED),
  order: 0,
  command: {
    id: DISCONNECT_ID,
    title: DISCONNECT_LABEL,
    icon: debugDisconnect
  }
});
MenuRegistry.appendMenuItem(MenuId.DebugToolBarStop, {
  group: "navigation",
  when: ContextKeyExpr.and(CONTEXT_FOCUSED_SESSION_IS_ATTACH, CONTEXT_TERMINATE_DEBUGGEE_SUPPORTED),
  order: 0,
  command: {
    id: STOP_ID,
    title: STOP_LABEL,
    icon: debugStop
  }
});
MenuRegistry.appendMenuItem(MenuId.DebugToolBarStop, {
  group: "navigation",
  when: ContextKeyExpr.or(ContextKeyExpr.and(CONTEXT_FOCUSED_SESSION_IS_ATTACH.toNegated(), CONTEXT_SUSPEND_DEBUGGEE_SUPPORTED, CONTEXT_TERMINATE_DEBUGGEE_SUPPORTED), ContextKeyExpr.and(CONTEXT_FOCUSED_SESSION_IS_ATTACH, CONTEXT_SUSPEND_DEBUGGEE_SUPPORTED)),
  order: 0,
  command: {
    id: DISCONNECT_AND_SUSPEND_ID,
    title: DISCONNECT_AND_SUSPEND_LABEL,
    icon: debugDisconnect
  }
});
const $$5 = $$a;
function assignSessionContext(element, context) {
  context.sessionId = element.getId();
  return context;
}
function assignThreadContext(element, context) {
  context.threadId = element.getId();
  assignSessionContext(element.session, context);
  return context;
}
function assignStackFrameContext(element, context) {
  context.frameId = element.getId();
  context.frameName = element.name;
  context.frameLocation = { range: element.range, source: element.source.raw };
  assignThreadContext(element.thread, context);
  return context;
}
function getContext(element) {
  if (element instanceof StackFrame) {
    return assignStackFrameContext(element, {});
  } else if (element instanceof Thread) {
    return assignThreadContext(element, {});
  } else if (isDebugSession$1(element)) {
    return assignSessionContext(element, {});
  } else {
    return void 0;
  }
}
function getContextForContributedActions(element) {
  if (element instanceof StackFrame) {
    if (element.source.inMemory) {
      return element.source.raw.path || element.source.reference || element.source.name;
    }
    return element.source.uri.toString();
  }
  if (element instanceof Thread) {
    return element.threadId;
  }
  if (isDebugSession$1(element)) {
    return element.getId();
  }
  return "";
}
function getSpecificSourceName(stackFrame) {
  let callStack = stackFrame.thread.getStaleCallStack();
  callStack = callStack.length > 0 ? callStack : stackFrame.thread.getCallStack();
  const otherSources = callStack.map((sf) => sf.source).filter((s) => s !== stackFrame.source);
  let suffixLength = 0;
  otherSources.forEach((s) => {
    if (s.name === stackFrame.source.name) {
      suffixLength = Math.max(suffixLength, commonSuffixLength(stackFrame.source.uri.path, s.uri.path));
    }
  });
  if (suffixLength === 0) {
    return stackFrame.source.name;
  }
  const from = Math.max(0, stackFrame.source.uri.path.lastIndexOf(posix.sep, stackFrame.source.uri.path.length - suffixLength - 1));
  return (from > 0 ? "..." : "") + stackFrame.source.uri.path.substring(from);
}
async function expandTo(session, tree) {
  if (session.parentSession) {
    await expandTo(session.parentSession, tree);
  }
  await tree.expand(session);
}
let CallStackView = class CallStackView2 extends ViewPane {
  constructor(options, contextMenuService, debugService, keybindingService, instantiationService, viewDescriptorService, configurationService, contextKeyService, openerService, themeService, telemetryService, menuService) {
    super(options, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, telemetryService);
    this.options = options;
    this.debugService = debugService;
    this.menuService = menuService;
    this.needsRefresh = false;
    this.ignoreSelectionChangedEvent = false;
    this.ignoreFocusStackFrameEvent = false;
    this.autoExpandedSessions = /* @__PURE__ */ new Set();
    this.selectionNeedsUpdate = false;
    this.onCallStackChangeScheduler = this._register(new RunOnceScheduler(async () => {
      const sessions = this.debugService.getModel().getSessions();
      if (sessions.length === 0) {
        this.autoExpandedSessions.clear();
      }
      const thread = sessions.length === 1 && sessions[0].getAllThreads().length === 1 ? sessions[0].getAllThreads()[0] : void 0;
      const stoppedDetails = sessions.length === 1 ? sessions[0].getStoppedDetails() : void 0;
      if (stoppedDetails && (thread || typeof stoppedDetails.threadId !== "number")) {
        this.stateMessageLabel.textContent = stoppedDescription(stoppedDetails);
        this.stateMessageLabel.title = stoppedText(stoppedDetails);
        this.stateMessageLabel.classList.toggle("exception", stoppedDetails.reason === "exception");
        this.stateMessage.hidden = false;
      } else if (sessions.length === 1 && sessions[0].state === 3) {
        this.stateMessageLabel.textContent = localize({ key: "running", comment: ["indicates state"] }, "Running");
        this.stateMessageLabel.title = sessions[0].getLabel();
        this.stateMessageLabel.classList.remove("exception");
        this.stateMessage.hidden = false;
      } else {
        this.stateMessage.hidden = true;
      }
      this.updateActions();
      this.needsRefresh = false;
      this.dataSource.deemphasizedStackFramesToShow = [];
      await this.tree.updateChildren();
      try {
        const toExpand = /* @__PURE__ */ new Set();
        sessions.forEach((s) => {
          if (s.parentSession && !this.autoExpandedSessions.has(s.parentSession)) {
            toExpand.add(s.parentSession);
          }
        });
        for (const session of toExpand) {
          await expandTo(session, this.tree);
          this.autoExpandedSessions.add(session);
        }
      } catch (e) {
      }
      if (this.selectionNeedsUpdate) {
        this.selectionNeedsUpdate = false;
        await this.updateTreeSelection();
      }
    }, 50));
  }
  renderHeaderTitle(container) {
    super.renderHeaderTitle(container, this.options.title);
    this.stateMessage = append(container, $$5("span.call-stack-state-message"));
    this.stateMessage.hidden = true;
    this.stateMessageLabel = append(this.stateMessage, $$5("span.label"));
  }
  renderBody(container) {
    super.renderBody(container);
    this.element.classList.add("debug-pane");
    container.classList.add("debug-call-stack");
    const treeContainer = renderViewTree(container);
    this.dataSource = new CallStackDataSource(this.debugService);
    this.tree = this.instantiationService.createInstance(WorkbenchCompressibleAsyncDataTree, "CallStackView", treeContainer, new CallStackDelegate(), new CallStackCompressionDelegate(this.debugService), [
      this.instantiationService.createInstance(SessionsRenderer),
      this.instantiationService.createInstance(ThreadsRenderer),
      this.instantiationService.createInstance(StackFramesRenderer),
      new ErrorsRenderer(),
      new LoadMoreRenderer(),
      new ShowMoreRenderer()
    ], this.dataSource, {
      accessibilityProvider: new CallStackAccessibilityProvider(),
      compressionEnabled: true,
      autoExpandSingleChildren: true,
      identityProvider: {
        getId: (element) => {
          if (typeof element === "string") {
            return element;
          }
          if (element instanceof Array) {
            return `showMore ${element[0].getId()}`;
          }
          return element.getId();
        }
      },
      keyboardNavigationLabelProvider: {
        getKeyboardNavigationLabel: (e) => {
          if (isDebugSession$1(e)) {
            return e.getLabel();
          }
          if (e instanceof Thread) {
            return `${e.name} ${e.stateLabel}`;
          }
          if (e instanceof StackFrame || typeof e === "string") {
            return e;
          }
          if (e instanceof ThreadAndSessionIds) {
            return LoadMoreRenderer.LABEL;
          }
          return localize("showMoreStackFrames2", "Show More Stack Frames");
        },
        getCompressedNodeKeyboardNavigationLabel: (e) => {
          const firstItem = e[0];
          if (isDebugSession$1(firstItem)) {
            return firstItem.getLabel();
          }
          return "";
        }
      },
      expandOnlyOnTwistieClick: true,
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      }
    });
    this.tree.setInput(this.debugService.getModel());
    this._register(this.tree.onDidOpen(async (e) => {
      var _a2;
      if (this.ignoreSelectionChangedEvent) {
        return;
      }
      const focusStackFrame = (stackFrame, thread, session, options = {}) => {
        this.ignoreFocusStackFrameEvent = true;
        try {
          this.debugService.focusStackFrame(stackFrame, thread, session, { ...options, ...{ explicit: true } });
        } finally {
          this.ignoreFocusStackFrameEvent = false;
        }
      };
      const element = e.element;
      if (element instanceof StackFrame) {
        const opts = {
          preserveFocus: e.editorOptions.preserveFocus,
          sideBySide: e.sideBySide,
          pinned: e.editorOptions.pinned
        };
        focusStackFrame(element, element.thread, element.thread.session, opts);
      }
      if (element instanceof Thread) {
        focusStackFrame(void 0, element, element.session);
      }
      if (isDebugSession$1(element)) {
        focusStackFrame(void 0, void 0, element);
      }
      if (element instanceof ThreadAndSessionIds) {
        const session = this.debugService.getModel().getSession(element.sessionId);
        const thread = session && session.getThread(element.threadId);
        if (thread) {
          const totalFrames = (_a2 = thread.stoppedDetails) == null ? void 0 : _a2.totalFrames;
          const remainingFramesCount = typeof totalFrames === "number" ? totalFrames - thread.getCallStack().length : void 0;
          await thread.fetchCallStack(remainingFramesCount);
          await this.tree.updateChildren();
        }
      }
      if (element instanceof Array) {
        this.dataSource.deemphasizedStackFramesToShow.push(...element);
        this.tree.updateChildren();
      }
    }));
    this._register(this.debugService.getModel().onDidChangeCallStack(() => {
      if (!this.isBodyVisible()) {
        this.needsRefresh = true;
        return;
      }
      if (!this.onCallStackChangeScheduler.isScheduled()) {
        this.onCallStackChangeScheduler.schedule();
      }
    }));
    const onFocusChange = Event.any(this.debugService.getViewModel().onDidFocusStackFrame, this.debugService.getViewModel().onDidFocusSession);
    this._register(onFocusChange(async () => {
      if (this.ignoreFocusStackFrameEvent) {
        return;
      }
      if (!this.isBodyVisible()) {
        this.needsRefresh = true;
        return;
      }
      if (this.onCallStackChangeScheduler.isScheduled()) {
        this.selectionNeedsUpdate = true;
        return;
      }
      await this.updateTreeSelection();
    }));
    this._register(this.tree.onContextMenu((e) => this.onContextMenu(e)));
    if (this.debugService.state === 2) {
      this.onCallStackChangeScheduler.schedule(0);
    }
    this._register(this.onDidChangeBodyVisibility((visible) => {
      if (visible && this.needsRefresh) {
        this.onCallStackChangeScheduler.schedule();
      }
    }));
    this._register(this.debugService.onDidNewSession((s) => {
      const sessionListeners = [];
      sessionListeners.push(s.onDidChangeName(() => {
        if (this.tree.hasNode(s)) {
          this.tree.rerender(s);
        }
      }));
      sessionListeners.push(s.onDidEndAdapter(() => dispose(sessionListeners)));
      if (s.parentSession) {
        this.autoExpandedSessions.delete(s.parentSession);
      }
    }));
  }
  layoutBody(height, width) {
    super.layoutBody(height, width);
    this.tree.layout(height, width);
  }
  focus() {
    this.tree.domFocus();
  }
  collapseAll() {
    this.tree.collapseAll();
  }
  async updateTreeSelection() {
    if (!this.tree || !this.tree.getInput()) {
      return;
    }
    const updateSelectionAndReveal = (element) => {
      this.ignoreSelectionChangedEvent = true;
      try {
        this.tree.setSelection([element]);
        if (this.tree.getRelativeTop(element) === null) {
          this.tree.reveal(element, 0.5);
        } else {
          this.tree.reveal(element);
        }
      } catch (e) {
      } finally {
        this.ignoreSelectionChangedEvent = false;
      }
    };
    const thread = this.debugService.getViewModel().focusedThread;
    const session = this.debugService.getViewModel().focusedSession;
    const stackFrame = this.debugService.getViewModel().focusedStackFrame;
    if (!thread) {
      if (!session) {
        this.tree.setSelection([]);
      } else {
        updateSelectionAndReveal(session);
      }
    } else {
      try {
        await expandTo(thread.session, this.tree);
      } catch (e) {
      }
      try {
        await this.tree.expand(thread);
      } catch (e) {
      }
      const toReveal = stackFrame || session;
      if (toReveal) {
        updateSelectionAndReveal(toReveal);
      }
    }
  }
  onContextMenu(e) {
    const element = e.element;
    let overlay = [];
    if (isDebugSession$1(element)) {
      overlay = getSessionContextOverlay(element);
    } else if (element instanceof Thread) {
      overlay = getThreadContextOverlay(element);
    } else if (element instanceof StackFrame) {
      overlay = getStackFrameContextOverlay(element);
    }
    const primary = [];
    const secondary = [];
    const result = { primary, secondary };
    const contextKeyService = this.contextKeyService.createOverlay(overlay);
    const menu = this.menuService.createMenu(MenuId.DebugCallStackContext, contextKeyService);
    createAndFillInContextMenuActions(menu, { arg: getContextForContributedActions(element), shouldForwardArgs: true }, result, "inline");
    this.contextMenuService.showContextMenu({
      getAnchor: () => e.anchor,
      getActions: () => result.secondary,
      getActionsContext: () => getContext(element)
    });
  }
};
CallStackView = __decorate([
  __param(1, IContextMenuService),
  __param(2, IDebugService),
  __param(3, IKeybindingService),
  __param(4, IInstantiationService),
  __param(5, IViewDescriptorService),
  __param(6, IConfigurationService),
  __param(7, IContextKeyService),
  __param(8, IOpenerService),
  __param(9, IThemeService),
  __param(10, ITelemetryService),
  __param(11, IMenuService)
], CallStackView);
function getSessionContextOverlay(session) {
  return [
    [CONTEXT_CALLSTACK_ITEM_TYPE.key, "session"],
    [CONTEXT_CALLSTACK_SESSION_IS_ATTACH.key, isSessionAttach(session)],
    [CONTEXT_CALLSTACK_ITEM_STOPPED.key, session.state === 2],
    [CONTEXT_CALLSTACK_SESSION_HAS_ONE_THREAD.key, session.getAllThreads().length === 1]
  ];
}
let SessionsRenderer = (_b = class {
  constructor(instantiationService, contextKeyService, menuService) {
    this.instantiationService = instantiationService;
    this.contextKeyService = contextKeyService;
    this.menuService = menuService;
  }
  get templateId() {
    return _b.ID;
  }
  renderTemplate(container) {
    const session = append(container, $$5(".session"));
    append(session, $$5(ThemeIcon.asCSSSelector(callstackViewSession)));
    const name = append(session, $$5(".name"));
    const stateLabel = append(session, $$5("span.state.label.monaco-count-badge.long"));
    const label = new HighlightedLabel(name);
    const templateDisposable = new DisposableStore();
    const stopActionViewItemDisposables = templateDisposable.add(new DisposableStore());
    const actionBar = templateDisposable.add(new ActionBar(session, {
      actionViewItemProvider: (action) => {
        if ((action.id === STOP_ID || action.id === DISCONNECT_ID) && action instanceof MenuItemAction) {
          stopActionViewItemDisposables.clear();
          const item = this.instantiationService.invokeFunction((accessor) => createDisconnectMenuItemAction(action, stopActionViewItemDisposables, accessor));
          if (item) {
            return item;
          }
        }
        if (action instanceof MenuItemAction) {
          return this.instantiationService.createInstance(MenuEntryActionViewItem, action, void 0);
        } else if (action instanceof SubmenuItemAction) {
          return this.instantiationService.createInstance(SubmenuEntryActionViewItem, action, void 0);
        }
        return void 0;
      }
    }));
    const elementDisposable = templateDisposable.add(new DisposableStore());
    return { session, name, stateLabel, label, actionBar, elementDisposable, templateDisposable };
  }
  renderElement(element, _, data) {
    this.doRenderElement(element.element, createMatches(element.filterData), data);
  }
  renderCompressedElements(node, _index, templateData) {
    const lastElement = node.element.elements[node.element.elements.length - 1];
    const matches = createMatches(node.filterData);
    this.doRenderElement(lastElement, matches, templateData);
  }
  doRenderElement(session, matches, data) {
    data.session.title = localize({ key: "session", comment: ["Session is a noun"] }, "Session");
    data.label.set(session.getLabel(), matches);
    const stoppedDetails = session.getStoppedDetails();
    const thread = session.getAllThreads().find((t) => t.stopped);
    const contextKeyService = this.contextKeyService.createOverlay(getSessionContextOverlay(session));
    const menu = data.elementDisposable.add(this.menuService.createMenu(MenuId.DebugCallStackContext, contextKeyService));
    const setupActionBar = () => {
      data.actionBar.clear();
      const primary = [];
      const secondary = [];
      const result = { primary, secondary };
      createAndFillInActionBarActions(menu, { arg: getContextForContributedActions(session), shouldForwardArgs: true }, result, "inline");
      data.actionBar.push(primary, { icon: true, label: false });
      data.actionBar.context = getContext(session);
    };
    data.elementDisposable.add(menu.onDidChange(() => setupActionBar()));
    setupActionBar();
    data.stateLabel.style.display = "";
    if (stoppedDetails) {
      data.stateLabel.textContent = stoppedDescription(stoppedDetails);
      data.session.title = `${session.getLabel()}: ${stoppedText(stoppedDetails)}`;
      data.stateLabel.classList.toggle("exception", stoppedDetails.reason === "exception");
    } else if (thread && thread.stoppedDetails) {
      data.stateLabel.textContent = stoppedDescription(thread.stoppedDetails);
      data.session.title = `${session.getLabel()}: ${stoppedText(thread.stoppedDetails)}`;
      data.stateLabel.classList.toggle("exception", thread.stoppedDetails.reason === "exception");
    } else {
      data.stateLabel.textContent = localize({ key: "running", comment: ["indicates state"] }, "Running");
      data.stateLabel.classList.remove("exception");
    }
  }
  disposeTemplate(templateData) {
    templateData.templateDisposable.dispose();
  }
  disposeElement(_element, _, templateData) {
    templateData.elementDisposable.clear();
  }
  disposeCompressedElements(node, index, templateData, height) {
    templateData.elementDisposable.clear();
  }
}, _b.ID = "session", _b);
SessionsRenderer = __decorate([
  __param(0, IInstantiationService),
  __param(1, IContextKeyService),
  __param(2, IMenuService)
], SessionsRenderer);
function getThreadContextOverlay(thread) {
  return [
    [CONTEXT_CALLSTACK_ITEM_TYPE.key, "thread"],
    [CONTEXT_CALLSTACK_ITEM_STOPPED.key, thread.stopped]
  ];
}
let ThreadsRenderer = (_c = class {
  constructor(contextKeyService, menuService) {
    this.contextKeyService = contextKeyService;
    this.menuService = menuService;
  }
  get templateId() {
    return _c.ID;
  }
  renderTemplate(container) {
    const thread = append(container, $$5(".thread"));
    const name = append(thread, $$5(".name"));
    const stateLabel = append(thread, $$5("span.state.label.monaco-count-badge.long"));
    const label = new HighlightedLabel(name);
    const templateDisposable = new DisposableStore();
    const actionBar = templateDisposable.add(new ActionBar(thread));
    const elementDisposable = templateDisposable.add(new DisposableStore());
    return { thread, name, stateLabel, label, actionBar, elementDisposable, templateDisposable };
  }
  renderElement(element, _index, data) {
    var _a2;
    const thread = element.element;
    data.thread.title = thread.name;
    data.label.set(thread.name, createMatches(element.filterData));
    data.stateLabel.textContent = thread.stateLabel;
    data.stateLabel.classList.toggle("exception", ((_a2 = thread.stoppedDetails) == null ? void 0 : _a2.reason) === "exception");
    const contextKeyService = this.contextKeyService.createOverlay(getThreadContextOverlay(thread));
    const menu = data.elementDisposable.add(this.menuService.createMenu(MenuId.DebugCallStackContext, contextKeyService));
    const setupActionBar = () => {
      data.actionBar.clear();
      const primary = [];
      const secondary = [];
      const result = { primary, secondary };
      createAndFillInActionBarActions(menu, { arg: getContextForContributedActions(thread), shouldForwardArgs: true }, result, "inline");
      data.actionBar.push(primary, { icon: true, label: false });
      data.actionBar.context = getContext(thread);
    };
    data.elementDisposable.add(menu.onDidChange(() => setupActionBar()));
    setupActionBar();
  }
  renderCompressedElements(_node, _index, _templateData, _height) {
    throw new Error("Method not implemented.");
  }
  disposeElement(_element, _index, templateData) {
    templateData.elementDisposable.clear();
  }
  disposeTemplate(templateData) {
    templateData.templateDisposable.dispose();
  }
}, _c.ID = "thread", _c);
ThreadsRenderer = __decorate([
  __param(0, IContextKeyService),
  __param(1, IMenuService)
], ThreadsRenderer);
function getStackFrameContextOverlay(stackFrame) {
  return [
    [CONTEXT_CALLSTACK_ITEM_TYPE.key, "stackFrame"],
    [CONTEXT_STACK_FRAME_SUPPORTS_RESTART.key, stackFrame.canRestart]
  ];
}
let StackFramesRenderer = (_d = class {
  constructor(labelService, notificationService) {
    this.labelService = labelService;
    this.notificationService = notificationService;
  }
  get templateId() {
    return _d.ID;
  }
  renderTemplate(container) {
    const stackFrame = append(container, $$5(".stack-frame"));
    const labelDiv = append(stackFrame, $$5("span.label.expression"));
    const file = append(stackFrame, $$5(".file"));
    const fileName = append(file, $$5("span.file-name"));
    const wrapper = append(file, $$5("span.line-number-wrapper"));
    const lineNumber = append(wrapper, $$5("span.line-number.monaco-count-badge"));
    const label = new HighlightedLabel(labelDiv);
    const templateDisposable = new DisposableStore();
    const actionBar = templateDisposable.add(new ActionBar(stackFrame));
    return { file, fileName, label, lineNumber, stackFrame, actionBar, templateDisposable };
  }
  renderElement(element, index, data) {
    const stackFrame = element.element;
    data.stackFrame.classList.toggle("disabled", !stackFrame.source || !stackFrame.source.available || isDeemphasized(stackFrame));
    data.stackFrame.classList.toggle("label", stackFrame.presentationHint === "label");
    data.stackFrame.classList.toggle("subtle", stackFrame.presentationHint === "subtle");
    const hasActions = !!stackFrame.thread.session.capabilities.supportsRestartFrame && stackFrame.presentationHint !== "label" && stackFrame.presentationHint !== "subtle" && stackFrame.canRestart;
    data.stackFrame.classList.toggle("has-actions", hasActions);
    data.file.title = stackFrame.source.inMemory ? stackFrame.source.uri.path : this.labelService.getUriLabel(stackFrame.source.uri);
    if (stackFrame.source.raw.origin) {
      data.file.title += `
${stackFrame.source.raw.origin}`;
    }
    data.label.set(stackFrame.name, createMatches(element.filterData), stackFrame.name);
    data.fileName.textContent = getSpecificSourceName(stackFrame);
    if (stackFrame.range.startLineNumber !== void 0) {
      data.lineNumber.textContent = `${stackFrame.range.startLineNumber}`;
      if (stackFrame.range.startColumn) {
        data.lineNumber.textContent += `:${stackFrame.range.startColumn}`;
      }
      data.lineNumber.classList.remove("unavailable");
    } else {
      data.lineNumber.classList.add("unavailable");
    }
    data.actionBar.clear();
    if (hasActions) {
      const action = new Action("debug.callStack.restartFrame", localize("restartFrame", "Restart Frame"), ThemeIcon.asClassName(debugRestartFrame), true, async () => {
        try {
          await stackFrame.restart();
        } catch (e) {
          this.notificationService.error(e);
        }
      });
      data.actionBar.push(action, { icon: true, label: false });
    }
  }
  renderCompressedElements(node, index, templateData, height) {
    throw new Error("Method not implemented.");
  }
  disposeTemplate(templateData) {
    templateData.actionBar.dispose();
  }
}, _d.ID = "stackFrame", _d);
StackFramesRenderer = __decorate([
  __param(0, ILabelService),
  __param(1, INotificationService)
], StackFramesRenderer);
const _ErrorsRenderer = class _ErrorsRenderer {
  get templateId() {
    return _ErrorsRenderer.ID;
  }
  renderTemplate(container) {
    const label = append(container, $$5(".error"));
    return { label };
  }
  renderElement(element, index, data) {
    const error = element.element;
    data.label.textContent = error;
    data.label.title = error;
  }
  renderCompressedElements(node, index, templateData, height) {
    throw new Error("Method not implemented.");
  }
  disposeTemplate(templateData) {
  }
};
_ErrorsRenderer.ID = "error";
let ErrorsRenderer = _ErrorsRenderer;
const _LoadMoreRenderer = class _LoadMoreRenderer {
  constructor() {
  }
  get templateId() {
    return _LoadMoreRenderer.ID;
  }
  renderTemplate(container) {
    const label = append(container, $$5(".load-all"));
    label.style.color = asCssVariable(textLinkForeground);
    return { label };
  }
  renderElement(element, index, data) {
    data.label.textContent = _LoadMoreRenderer.LABEL;
  }
  renderCompressedElements(node, index, templateData, height) {
    throw new Error("Method not implemented.");
  }
  disposeTemplate(templateData) {
  }
};
_LoadMoreRenderer.ID = "loadMore";
_LoadMoreRenderer.LABEL = localize("loadAllStackFrames", "Load More Stack Frames");
let LoadMoreRenderer = _LoadMoreRenderer;
const _ShowMoreRenderer = class _ShowMoreRenderer {
  constructor() {
  }
  get templateId() {
    return _ShowMoreRenderer.ID;
  }
  renderTemplate(container) {
    const label = append(container, $$5(".show-more"));
    label.style.color = asCssVariable(textLinkForeground);
    return { label };
  }
  renderElement(element, index, data) {
    const stackFrames = element.element;
    if (stackFrames.every((sf) => !!(sf.source && sf.source.origin && sf.source.origin === stackFrames[0].source.origin))) {
      data.label.textContent = localize(
        "showMoreAndOrigin",
        "Show {0} More: {1}",
        stackFrames.length,
        stackFrames[0].source.origin
      );
    } else {
      data.label.textContent = localize("showMoreStackFrames", "Show {0} More Stack Frames", stackFrames.length);
    }
  }
  renderCompressedElements(node, index, templateData, height) {
    throw new Error("Method not implemented.");
  }
  disposeTemplate(templateData) {
  }
};
_ShowMoreRenderer.ID = "showMore";
let ShowMoreRenderer = _ShowMoreRenderer;
class CallStackDelegate {
  getHeight(element) {
    if (element instanceof StackFrame && element.presentationHint === "label") {
      return 16;
    }
    if (element instanceof ThreadAndSessionIds || element instanceof Array) {
      return 16;
    }
    return 22;
  }
  getTemplateId(element) {
    if (isDebugSession$1(element)) {
      return SessionsRenderer.ID;
    }
    if (element instanceof Thread) {
      return ThreadsRenderer.ID;
    }
    if (element instanceof StackFrame) {
      return StackFramesRenderer.ID;
    }
    if (typeof element === "string") {
      return ErrorsRenderer.ID;
    }
    if (element instanceof ThreadAndSessionIds) {
      return LoadMoreRenderer.ID;
    }
    return ShowMoreRenderer.ID;
  }
}
function stoppedText(stoppedDetails) {
  return stoppedDetails.text ?? stoppedDescription(stoppedDetails);
}
function stoppedDescription(stoppedDetails) {
  return stoppedDetails.description || (stoppedDetails.reason ? localize(
    { key: "pausedOn", comment: ["indicates reason for program being paused"] },
    "Paused on {0}",
    stoppedDetails.reason
  ) : localize("paused", "Paused"));
}
function isDebugModel(obj) {
  return typeof obj.getSessions === "function";
}
function isDebugSession$1(obj) {
  return obj && typeof obj.getAllThreads === "function";
}
function isDeemphasized(frame) {
  return frame.source.presentationHint === "deemphasize" || frame.presentationHint === "deemphasize";
}
class CallStackDataSource {
  constructor(debugService) {
    this.debugService = debugService;
    this.deemphasizedStackFramesToShow = [];
  }
  hasChildren(element) {
    if (isDebugSession$1(element)) {
      const threads = element.getAllThreads();
      return threads.length > 1 || threads.length === 1 && threads[0].stopped || !!this.debugService.getModel().getSessions().find((s) => s.parentSession === element);
    }
    return isDebugModel(element) || element instanceof Thread && element.stopped;
  }
  async getChildren(element) {
    if (isDebugModel(element)) {
      const sessions = element.getSessions();
      if (sessions.length === 0) {
        return Promise.resolve([]);
      }
      if (sessions.length > 1 || this.debugService.getViewModel().isMultiSessionView()) {
        return Promise.resolve(sessions.filter((s) => !s.parentSession));
      }
      const threads = sessions[0].getAllThreads();
      return threads.length === 1 ? this.getThreadChildren(threads[0]) : Promise.resolve(threads);
    } else if (isDebugSession$1(element)) {
      const childSessions = this.debugService.getModel().getSessions().filter((s) => s.parentSession === element);
      const threads = element.getAllThreads();
      if (threads.length === 1) {
        const children = await this.getThreadChildren(threads[0]);
        return children.concat(childSessions);
      }
      return Promise.resolve(threads.concat(childSessions));
    } else {
      return this.getThreadChildren(element);
    }
  }
  getThreadChildren(thread) {
    return this.getThreadCallstack(thread).then((children) => {
      const result = [];
      children.forEach((child, index) => {
        if (child instanceof StackFrame && child.source && isDeemphasized(child)) {
          if (this.deemphasizedStackFramesToShow.indexOf(child) === -1) {
            if (result.length) {
              const last = result[result.length - 1];
              if (last instanceof Array) {
                last.push(child);
                return;
              }
            }
            const nextChild = index < children.length - 1 ? children[index + 1] : void 0;
            if (nextChild instanceof StackFrame && nextChild.source && isDeemphasized(nextChild)) {
              result.push([child]);
              return;
            }
          }
        }
        result.push(child);
      });
      return result;
    });
  }
  async getThreadCallstack(thread) {
    let callStack = thread.getCallStack();
    if (!callStack || !callStack.length) {
      await thread.fetchCallStack();
      callStack = thread.getCallStack();
    }
    if (callStack.length === 1 && thread.session.capabilities.supportsDelayedStackTraceLoading && thread.stoppedDetails && thread.stoppedDetails.totalFrames && thread.stoppedDetails.totalFrames > 1) {
      callStack = callStack.concat(thread.getStaleCallStack().slice(1));
    }
    if (thread.stoppedDetails && thread.stoppedDetails.framesErrorMessage) {
      callStack = callStack.concat([thread.stoppedDetails.framesErrorMessage]);
    }
    if (!thread.reachedEndOfCallStack && thread.stoppedDetails) {
      callStack = callStack.concat([new ThreadAndSessionIds(thread.session.getId(), thread.threadId)]);
    }
    return callStack;
  }
}
class CallStackAccessibilityProvider {
  getWidgetAriaLabel() {
    return localize(
      { comment: ["Debug is a noun in this context, not a verb."], key: "callStackAriaLabel" },
      "Debug Call Stack"
    );
  }
  getWidgetRole() {
    return "treegrid";
  }
  getRole(_element) {
    return "row";
  }
  getAriaLabel(element) {
    if (element instanceof Thread) {
      return localize(
        { key: "threadAriaLabel", comment: ['Placeholders stand for the thread name and the thread state.For example "Thread 1" and "Stopped'] },
        "Thread {0} {1}",
        element.name,
        element.stateLabel
      );
    }
    if (element instanceof StackFrame) {
      return localize(
        "stackFrameAriaLabel",
        "Stack Frame {0}, line {1}, {2}",
        element.name,
        element.range.startLineNumber,
        getSpecificSourceName(element)
      );
    }
    if (isDebugSession$1(element)) {
      const thread = element.getAllThreads().find((t) => t.stopped);
      const state = thread ? thread.stateLabel : localize({ key: "running", comment: ["indicates state"] }, "Running");
      return localize(
        { key: "sessionLabel", comment: ['Placeholders stand for the session name and the session state. For example "Launch Program" and "Running"'] },
        "Session {0} {1}",
        element.getLabel(),
        state
      );
    }
    if (typeof element === "string") {
      return element;
    }
    if (element instanceof Array) {
      return localize("showMoreStackFrames", "Show {0} More Stack Frames", element.length);
    }
    return LoadMoreRenderer.LABEL;
  }
}
class CallStackCompressionDelegate {
  constructor(debugService) {
    this.debugService = debugService;
  }
  isIncompressible(stat) {
    if (isDebugSession$1(stat)) {
      if (stat.compact) {
        return false;
      }
      const sessions = this.debugService.getModel().getSessions();
      if (sessions.some((s) => s.parentSession === stat && s.compact)) {
        return false;
      }
      return true;
    }
    return true;
  }
}
registerAction2(class Collapse extends ViewAction {
  constructor() {
    super({
      id: "callStack.collapse",
      viewId: CALLSTACK_VIEW_ID,
      title: localize("collapse", "Collapse All"),
      f1: false,
      icon: Codicon.collapseAll,
      precondition: CONTEXT_DEBUG_STATE.isEqualTo(getStateLabel(2)),
      menu: {
        id: MenuId.ViewTitle,
        order: 10,
        group: "navigation",
        when: ContextKeyExpr.equals("view", CALLSTACK_VIEW_ID)
      }
    });
  }
  runInView(_accessor, view) {
    view.collapseAll();
  }
});
function registerCallStackInlineMenuItem(id, title, icon, when, order, precondition) {
  MenuRegistry.appendMenuItem(MenuId.DebugCallStackContext, {
    group: "inline",
    order,
    when,
    command: { id, title, icon, precondition }
  });
}
const threadOrSessionWithOneThread = ContextKeyExpr.or(CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("thread"), ContextKeyExpr.and(CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("session"), CONTEXT_CALLSTACK_SESSION_HAS_ONE_THREAD));
registerCallStackInlineMenuItem(PAUSE_ID, PAUSE_LABEL, debugPause, ContextKeyExpr.and(threadOrSessionWithOneThread, CONTEXT_CALLSTACK_ITEM_STOPPED.toNegated()), 10);
registerCallStackInlineMenuItem(CONTINUE_ID, CONTINUE_LABEL, debugContinue, ContextKeyExpr.and(threadOrSessionWithOneThread, CONTEXT_CALLSTACK_ITEM_STOPPED), 10);
registerCallStackInlineMenuItem(STEP_OVER_ID, STEP_OVER_LABEL, debugStepOver, threadOrSessionWithOneThread, 20, CONTEXT_CALLSTACK_ITEM_STOPPED);
registerCallStackInlineMenuItem(STEP_INTO_ID, STEP_INTO_LABEL, debugStepInto, threadOrSessionWithOneThread, 30, CONTEXT_CALLSTACK_ITEM_STOPPED);
registerCallStackInlineMenuItem(STEP_OUT_ID, STEP_OUT_LABEL, debugStepOut, threadOrSessionWithOneThread, 40, CONTEXT_CALLSTACK_ITEM_STOPPED);
registerCallStackInlineMenuItem(RESTART_SESSION_ID, RESTART_LABEL, debugRestart, CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("session"), 50);
registerCallStackInlineMenuItem(STOP_ID, STOP_LABEL, debugStop, ContextKeyExpr.and(CONTEXT_CALLSTACK_SESSION_IS_ATTACH.toNegated(), CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("session")), 60);
registerCallStackInlineMenuItem(DISCONNECT_ID, DISCONNECT_LABEL, debugDisconnect, ContextKeyExpr.and(CONTEXT_CALLSTACK_SESSION_IS_ATTACH, CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("session")), 60);
let DebugConsoleQuickAccess = class DebugConsoleQuickAccess2 extends PickerQuickAccessProvider {
  constructor(_debugService, _viewsService, _commandService) {
    super(DEBUG_CONSOLE_QUICK_ACCESS_PREFIX, { canAcceptInBackground: true });
    this._debugService = _debugService;
    this._viewsService = _viewsService;
    this._commandService = _commandService;
  }
  _getPicks(filter2, disposables, token) {
    const debugConsolePicks = [];
    this._debugService.getModel().getSessions(true).filter((s) => s.hasSeparateRepl()).forEach((session, index) => {
      const pick = this._createPick(session, index, filter2);
      if (pick) {
        debugConsolePicks.push(pick);
      }
    });
    if (debugConsolePicks.length > 0) {
      debugConsolePicks.push({ type: "separator" });
    }
    const createTerminalLabel = localize("workbench.action.debug.startDebug", "Start a New Debug Session");
    debugConsolePicks.push({
      label: `$(plus) ${createTerminalLabel}`,
      ariaLabel: createTerminalLabel,
      accept: () => this._commandService.executeCommand(SELECT_AND_START_ID)
    });
    return debugConsolePicks;
  }
  _createPick(session, sessionIndex, filter2) {
    const label = session.name;
    const highlights = matchesFuzzy(filter2, label, true);
    if (highlights) {
      return {
        label,
        highlights: { label: highlights },
        accept: (keyMod, event) => {
          this._debugService.focusStackFrame(void 0, void 0, session, { explicit: true });
          if (!this._viewsService.isViewVisible(REPL_VIEW_ID)) {
            this._viewsService.openView(REPL_VIEW_ID, true);
          }
        }
      };
    }
    return void 0;
  }
};
DebugConsoleQuickAccess = __decorate([
  __param(0, IDebugService),
  __param(1, IViewsService),
  __param(2, ICommandService)
], DebugConsoleQuickAccess);
class ToggleBreakpointAction extends EditorAction {
  constructor() {
    super({
      id: "editor.debug.action.toggleBreakpoint",
      label: localize("toggleBreakpointAction", "Debug: Toggle Breakpoint"),
      alias: "Debug: Toggle Breakpoint",
      precondition: CONTEXT_DEBUGGERS_AVAILABLE,
      kbOpts: {
        kbExpr: EditorContextKeys.editorTextFocus,
        primary: 67,
        weight: 100
      },
      menuOpts: {
        when: CONTEXT_DEBUGGERS_AVAILABLE,
        title: localize(
          { key: "miToggleBreakpoint", comment: ["&& denotes a mnemonic"] },
          "Toggle &&Breakpoint"
        ),
        menuId: MenuId.MenubarDebugMenu,
        group: "4_new_breakpoint",
        order: 1
      }
    });
  }
  async run(accessor, editor) {
    if (editor.hasModel()) {
      const debugService = accessor.get(IDebugService);
      const modelUri = editor.getModel().uri;
      const canSet = debugService.canSetBreakpointsIn(editor.getModel());
      const lineNumbers = [...new Set(editor.getSelections().map((s) => s.getPosition().lineNumber))];
      await Promise.all(lineNumbers.map(async (line) => {
        const bps = debugService.getModel().getBreakpoints({ lineNumber: line, uri: modelUri });
        if (bps.length) {
          await Promise.all(bps.map((bp) => debugService.removeBreakpoints(bp.getId())));
        } else if (canSet) {
          await debugService.addBreakpoints(modelUri, [{ lineNumber: line }]);
        }
      }));
    }
  }
}
class ConditionalBreakpointAction extends EditorAction {
  constructor() {
    super({
      id: "editor.debug.action.conditionalBreakpoint",
      label: localize(
        "conditionalBreakpointEditorAction",
        "Debug: Add Conditional Breakpoint..."
      ),
      alias: "Debug: Add Conditional Breakpoint...",
      precondition: CONTEXT_DEBUGGERS_AVAILABLE,
      menuOpts: {
        menuId: MenuId.MenubarNewBreakpointMenu,
        title: localize(
          { key: "miConditionalBreakpoint", comment: ["&& denotes a mnemonic"] },
          "&&Conditional Breakpoint..."
        ),
        group: "1_breakpoints",
        order: 1,
        when: CONTEXT_DEBUGGERS_AVAILABLE
      }
    });
  }
  async run(accessor, editor) {
    var _a2;
    const debugService = accessor.get(IDebugService);
    const position = editor.getPosition();
    if (position && editor.hasModel() && debugService.canSetBreakpointsIn(editor.getModel())) {
      (_a2 = editor.getContribution(BREAKPOINT_EDITOR_CONTRIBUTION_ID)) == null ? void 0 : _a2.showBreakpointWidget(position.lineNumber, void 0, 0);
    }
  }
}
class LogPointAction extends EditorAction {
  constructor() {
    super({
      id: "editor.debug.action.addLogPoint",
      label: localize("logPointEditorAction", "Debug: Add Logpoint..."),
      precondition: CONTEXT_DEBUGGERS_AVAILABLE,
      alias: "Debug: Add Logpoint...",
      menuOpts: [
        {
          menuId: MenuId.MenubarNewBreakpointMenu,
          title: localize({ key: "miLogPoint", comment: ["&& denotes a mnemonic"] }, "&&Logpoint..."),
          group: "1_breakpoints",
          order: 4,
          when: CONTEXT_DEBUGGERS_AVAILABLE
        }
      ]
    });
  }
  async run(accessor, editor) {
    var _a2;
    const debugService = accessor.get(IDebugService);
    const position = editor.getPosition();
    if (position && editor.hasModel() && debugService.canSetBreakpointsIn(editor.getModel())) {
      (_a2 = editor.getContribution(BREAKPOINT_EDITOR_CONTRIBUTION_ID)) == null ? void 0 : _a2.showBreakpointWidget(position.lineNumber, position.column, 2);
    }
  }
}
class EditBreakpointAction extends EditorAction {
  constructor() {
    super({
      id: "editor.debug.action.editBreakpoint",
      label: localize("EditBreakpointEditorAction", "Debug: Edit Breakpoint"),
      alias: "Debug: Edit Existing Breakpoint",
      precondition: CONTEXT_DEBUGGERS_AVAILABLE,
      menuOpts: {
        menuId: MenuId.MenubarNewBreakpointMenu,
        title: localize(
          { key: "miEditBreakpoint", comment: ["&& denotes a mnemonic"] },
          "&&Edit Breakpoint"
        ),
        group: "1_breakpoints",
        order: 1,
        when: CONTEXT_DEBUGGERS_AVAILABLE
      }
    });
  }
  async run(accessor, editor) {
    var _a2;
    const debugService = accessor.get(IDebugService);
    const position = editor.getPosition();
    const debugModel = debugService.getModel();
    if (!(editor.hasModel() && position)) {
      return;
    }
    const lineBreakpoints = debugModel.getBreakpoints({ lineNumber: position.lineNumber });
    if (lineBreakpoints.length === 0) {
      return;
    }
    const breakpointDistances = lineBreakpoints.map((b) => {
      if (!b.column) {
        return position.column;
      }
      return Math.abs(b.column - position.column);
    });
    const closestBreakpointIndex = breakpointDistances.indexOf(Math.min(...breakpointDistances));
    const closestBreakpoint = lineBreakpoints[closestBreakpointIndex];
    (_a2 = editor.getContribution(BREAKPOINT_EDITOR_CONTRIBUTION_ID)) == null ? void 0 : _a2.showBreakpointWidget(closestBreakpoint.lineNumber, closestBreakpoint.column);
  }
}
const _OpenDisassemblyViewAction = class _OpenDisassemblyViewAction extends EditorAction2 {
  constructor() {
    super({
      id: _OpenDisassemblyViewAction.ID,
      title: {
        value: localize("openDisassemblyView", "Open Disassembly View"),
        original: "Open Disassembly View",
        mnemonicTitle: localize(
          { key: "miDisassemblyView", comment: ["&& denotes a mnemonic"] },
          "&&DisassemblyView"
        )
      },
      precondition: CONTEXT_FOCUSED_STACK_FRAME_HAS_INSTRUCTION_POINTER_REFERENCE,
      menu: [
        {
          id: MenuId.EditorContext,
          group: "debug",
          order: 5,
          when: ContextKeyExpr.and(CONTEXT_IN_DEBUG_MODE, PanelFocusContext.toNegated(), CONTEXT_DEBUG_STATE.isEqualTo("stopped"), EditorContextKeys.editorTextFocus, CONTEXT_DISASSEMBLE_REQUEST_SUPPORTED, CONTEXT_LANGUAGE_SUPPORTS_DISASSEMBLE_REQUEST)
        },
        {
          id: MenuId.DebugCallStackContext,
          group: "z_commands",
          order: 50,
          when: ContextKeyExpr.and(CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"), CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("stackFrame"), CONTEXT_DISASSEMBLE_REQUEST_SUPPORTED)
        },
        {
          id: MenuId.CommandPalette,
          when: ContextKeyExpr.and(CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"), CONTEXT_DISASSEMBLE_REQUEST_SUPPORTED)
        }
      ]
    });
  }
  runEditorCommand(accessor, editor, ...args) {
    if (editor.hasModel()) {
      const editorService = accessor.get(IEditorService);
      editorService.openEditor(DisassemblyViewInput.instance, { pinned: true });
    }
  }
};
_OpenDisassemblyViewAction.ID = "editor.debug.action.openDisassemblyView";
let OpenDisassemblyViewAction = _OpenDisassemblyViewAction;
const _ToggleDisassemblyViewSourceCodeAction = class _ToggleDisassemblyViewSourceCodeAction extends Action2 {
  constructor() {
    super({
      id: _ToggleDisassemblyViewSourceCodeAction.ID,
      title: {
        value: localize(
          "toggleDisassemblyViewSourceCode",
          "Toggle Source Code in Disassembly View"
        ),
        original: "Toggle Source Code in Disassembly View",
        mnemonicTitle: localize(
          { key: "mitogglesource", comment: ["&& denotes a mnemonic"] },
          "&&ToggleSource"
        )
      },
      f1: true
    });
  }
  run(accessor, editor, ...args) {
    const configService = accessor.get(IConfigurationService);
    if (configService) {
      const value = configService.getValue("debug").disassemblyView.showSourceCode;
      configService.updateValue(_ToggleDisassemblyViewSourceCodeAction.configID, !value);
    }
  }
};
_ToggleDisassemblyViewSourceCodeAction.ID = "debug.action.toggleDisassemblyViewSourceCode";
_ToggleDisassemblyViewSourceCodeAction.configID = "debug.disassemblyView.showSourceCode";
let ToggleDisassemblyViewSourceCodeAction = _ToggleDisassemblyViewSourceCodeAction;
const _RunToCursorAction = class _RunToCursorAction extends EditorAction {
  constructor() {
    super({
      id: _RunToCursorAction.ID,
      label: _RunToCursorAction.LABEL,
      alias: "Debug: Run to Cursor",
      precondition: ContextKeyExpr.and(CONTEXT_DEBUGGERS_AVAILABLE, PanelFocusContext.toNegated(), EditorContextKeys.editorTextFocus),
      contextMenuOpts: {
        group: "debug",
        order: 2,
        when: CONTEXT_IN_DEBUG_MODE
      }
    });
  }
  async run(accessor, editor) {
    const position = editor.getPosition();
    if (!(editor.hasModel() && position)) {
      return;
    }
    const uri = editor.getModel().uri;
    const debugService = accessor.get(IDebugService);
    const viewModel = debugService.getViewModel();
    const uriIdentityService = accessor.get(IUriIdentityService);
    let column = void 0;
    const focusedStackFrame = viewModel.focusedStackFrame;
    if (focusedStackFrame && uriIdentityService.extUri.isEqual(focusedStackFrame.source.uri, uri) && focusedStackFrame.range.startLineNumber === position.lineNumber) {
      column = position.column;
    }
    await debugService.runTo(uri, position.lineNumber, column);
  }
};
_RunToCursorAction.ID = "editor.debug.action.runToCursor";
_RunToCursorAction.LABEL = localize("runToCursor", "Run to Cursor");
let RunToCursorAction = _RunToCursorAction;
const _SelectionToReplAction = class _SelectionToReplAction extends EditorAction {
  constructor() {
    super({
      id: _SelectionToReplAction.ID,
      label: _SelectionToReplAction.LABEL,
      alias: "Debug: Evaluate in Console",
      precondition: ContextKeyExpr.and(CONTEXT_IN_DEBUG_MODE, EditorContextKeys.editorTextFocus),
      contextMenuOpts: {
        group: "debug",
        order: 0
      }
    });
  }
  async run(accessor, editor) {
    const debugService = accessor.get(IDebugService);
    const viewsService = accessor.get(IViewsService);
    const viewModel = debugService.getViewModel();
    const session = viewModel.focusedSession;
    if (!editor.hasModel() || !session) {
      return;
    }
    const selection = editor.getSelection();
    let text;
    if (selection.isEmpty()) {
      text = editor.getModel().getLineContent(selection.selectionStartLineNumber).trim();
    } else {
      text = editor.getModel().getValueInRange(selection);
    }
    await session.addReplExpression(viewModel.focusedStackFrame, text);
    await viewsService.openView(REPL_VIEW_ID, false);
  }
};
_SelectionToReplAction.ID = "editor.debug.action.selectionToRepl";
_SelectionToReplAction.LABEL = localize("evaluateInDebugConsole", "Evaluate in Debug Console");
let SelectionToReplAction = _SelectionToReplAction;
const _SelectionToWatchExpressionsAction = class _SelectionToWatchExpressionsAction extends EditorAction {
  constructor() {
    super({
      id: _SelectionToWatchExpressionsAction.ID,
      label: _SelectionToWatchExpressionsAction.LABEL,
      alias: "Debug: Add to Watch",
      precondition: ContextKeyExpr.and(CONTEXT_IN_DEBUG_MODE, EditorContextKeys.editorTextFocus),
      contextMenuOpts: {
        group: "debug",
        order: 1
      }
    });
  }
  async run(accessor, editor) {
    const debugService = accessor.get(IDebugService);
    const viewsService = accessor.get(IViewsService);
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    if (!editor.hasModel()) {
      return;
    }
    let expression = void 0;
    const model = editor.getModel();
    const selection = editor.getSelection();
    if (!selection.isEmpty()) {
      expression = model.getValueInRange(selection);
    } else {
      const position = editor.getPosition();
      const evaluatableExpression = await getEvaluatableExpressionAtPosition(languageFeaturesService, model, position);
      if (!evaluatableExpression) {
        return;
      }
      expression = evaluatableExpression.matchingExpression;
    }
    if (!expression) {
      return;
    }
    await viewsService.openView(WATCH_VIEW_ID);
    debugService.addWatchExpression(expression);
  }
};
_SelectionToWatchExpressionsAction.ID = "editor.debug.action.selectionToWatch";
_SelectionToWatchExpressionsAction.LABEL = localize("addToWatch", "Add to Watch");
let SelectionToWatchExpressionsAction = _SelectionToWatchExpressionsAction;
class ShowDebugHoverAction extends EditorAction {
  constructor() {
    super({
      id: "editor.debug.action.showDebugHover",
      label: localize("showDebugHover", "Debug: Show Hover"),
      alias: "Debug: Show Hover",
      precondition: CONTEXT_IN_DEBUG_MODE,
      kbOpts: {
        kbExpr: EditorContextKeys.editorTextFocus,
        primary: KeyChord(2048 | 41, 2048 | 39),
        weight: 100
      }
    });
  }
  async run(accessor, editor) {
    var _a2;
    const position = editor.getPosition();
    if (!position || !editor.hasModel()) {
      return;
    }
    return (_a2 = editor.getContribution(EDITOR_CONTRIBUTION_ID)) == null ? void 0 : _a2.showHover(position, true);
  }
}
const NO_TARGETS_MESSAGE = localize(
  "editor.debug.action.stepIntoTargets.notAvailable",
  "Step targets are not available here"
);
const _StepIntoTargetsAction = class _StepIntoTargetsAction extends EditorAction {
  constructor() {
    super({
      id: _StepIntoTargetsAction.ID,
      label: _StepIntoTargetsAction.LABEL,
      alias: "Debug: Step Into Target",
      precondition: ContextKeyExpr.and(CONTEXT_STEP_INTO_TARGETS_SUPPORTED, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"), EditorContextKeys.editorTextFocus),
      contextMenuOpts: {
        group: "debug",
        order: 1.5
      }
    });
  }
  async run(accessor, editor) {
    var _a2, _b2;
    const debugService = accessor.get(IDebugService);
    const contextMenuService = accessor.get(IContextMenuService);
    const uriIdentityService = accessor.get(IUriIdentityService);
    const session = debugService.getViewModel().focusedSession;
    const frame = debugService.getViewModel().focusedStackFrame;
    const selection = editor.getSelection();
    const targetPosition = (selection == null ? void 0 : selection.getPosition()) || frame && { lineNumber: frame.range.startLineNumber, column: frame.range.startColumn };
    if (!session || !frame || !editor.hasModel() || !uriIdentityService.extUri.isEqual(editor.getModel().uri, frame.source.uri)) {
      if (targetPosition) {
        (_a2 = MessageController.get(editor)) == null ? void 0 : _a2.showMessage(NO_TARGETS_MESSAGE, targetPosition);
      }
      return;
    }
    const targets = await session.stepInTargets(frame.frameId);
    if (!(targets == null ? void 0 : targets.length)) {
      (_b2 = MessageController.get(editor)) == null ? void 0 : _b2.showMessage(NO_TARGETS_MESSAGE, targetPosition);
      return;
    }
    if (selection) {
      const positionalTargets = [];
      for (const target of targets) {
        if (target.line) {
          positionalTargets.push({
            start: new Position(target.line, target.column || 1),
            end: target.endLine ? new Position(target.endLine, target.endColumn || 1) : void 0,
            target
          });
        }
      }
      positionalTargets.sort((a, b) => b.start.lineNumber - a.start.lineNumber || b.start.column - a.start.column);
      const needle = selection.getPosition();
      const best = positionalTargets.find((t) => t.end && needle.isBefore(t.end) && t.start.isBeforeOrEqual(needle)) || positionalTargets.find((t) => t.end === void 0 && t.start.isBeforeOrEqual(needle));
      if (best) {
        session.stepIn(frame.thread.threadId, best.target.id);
        return;
      }
    }
    editor.revealLineInCenterIfOutsideViewport(frame.range.startLineNumber);
    const cursorCoords = editor.getScrolledVisiblePosition(targetPosition);
    const editorCoords = getDomNodePagePosition(editor.getDomNode());
    const x = editorCoords.left + cursorCoords.left;
    const y = editorCoords.top + cursorCoords.top + cursorCoords.height;
    contextMenuService.showContextMenu({
      getAnchor: () => ({ x, y }),
      getActions: () => {
        return targets.map((t) => new Action(
          `stepIntoTarget:${t.id}`,
          t.label,
          void 0,
          true,
          () => session.stepIn(frame.thread.threadId, t.id)
        ));
      }
    });
  }
};
_StepIntoTargetsAction.ID = "editor.debug.action.stepIntoTargets";
_StepIntoTargetsAction.LABEL = localize(
  { key: "stepIntoTargets", comment: ["Step Into Targets lets the user step into an exact function he or she is interested in."] },
  "Step Into Target"
);
let StepIntoTargetsAction = _StepIntoTargetsAction;
class GoToBreakpointAction extends EditorAction {
  constructor(isNext, opts) {
    super(opts);
    this.isNext = isNext;
  }
  async run(accessor, editor) {
    const debugService = accessor.get(IDebugService);
    const editorService = accessor.get(IEditorService);
    const uriIdentityService = accessor.get(IUriIdentityService);
    if (editor.hasModel()) {
      const currentUri = editor.getModel().uri;
      const currentLine = editor.getPosition().lineNumber;
      const allEnabledBreakpoints = debugService.getModel().getBreakpoints({ enabledOnly: true });
      let moveBreakpoint = this.isNext ? allEnabledBreakpoints.filter((bp) => uriIdentityService.extUri.isEqual(bp.uri, currentUri) && bp.lineNumber > currentLine).shift() : allEnabledBreakpoints.filter((bp) => uriIdentityService.extUri.isEqual(bp.uri, currentUri) && bp.lineNumber < currentLine).pop();
      if (!moveBreakpoint) {
        moveBreakpoint = this.isNext ? allEnabledBreakpoints.filter((bp) => bp.uri.toString() > currentUri.toString()).shift() : allEnabledBreakpoints.filter((bp) => bp.uri.toString() < currentUri.toString()).pop();
      }
      if (!moveBreakpoint && allEnabledBreakpoints.length) {
        moveBreakpoint = this.isNext ? allEnabledBreakpoints[0] : allEnabledBreakpoints[allEnabledBreakpoints.length - 1];
      }
      if (moveBreakpoint) {
        return openBreakpointSource(moveBreakpoint, false, true, false, debugService, editorService);
      }
    }
  }
}
class GoToNextBreakpointAction extends GoToBreakpointAction {
  constructor() {
    super(true, {
      id: "editor.debug.action.goToNextBreakpoint",
      label: localize("goToNextBreakpoint", "Debug: Go to Next Breakpoint"),
      alias: "Debug: Go to Next Breakpoint",
      precondition: CONTEXT_DEBUGGERS_AVAILABLE
    });
  }
}
class GoToPreviousBreakpointAction extends GoToBreakpointAction {
  constructor() {
    super(false, {
      id: "editor.debug.action.goToPreviousBreakpoint",
      label: localize("goToPreviousBreakpoint", "Debug: Go to Previous Breakpoint"),
      alias: "Debug: Go to Previous Breakpoint",
      precondition: CONTEXT_DEBUGGERS_AVAILABLE
    });
  }
}
class CloseExceptionWidgetAction extends EditorAction {
  constructor() {
    super({
      id: "editor.debug.action.closeExceptionWidget",
      label: localize("closeExceptionWidget", "Close Exception Widget"),
      alias: "Close Exception Widget",
      precondition: CONTEXT_EXCEPTION_WIDGET_VISIBLE,
      kbOpts: {
        primary: 9,
        weight: 100
      }
    });
  }
  async run(_accessor, editor) {
    const contribution = editor.getContribution(EDITOR_CONTRIBUTION_ID);
    contribution == null ? void 0 : contribution.closeExceptionWidget();
  }
}
registerAction2(OpenDisassemblyViewAction);
registerAction2(ToggleDisassemblyViewSourceCodeAction);
registerEditorAction(ToggleBreakpointAction);
registerEditorAction(ConditionalBreakpointAction);
registerEditorAction(LogPointAction);
registerEditorAction(EditBreakpointAction);
registerEditorAction(RunToCursorAction);
registerEditorAction(StepIntoTargetsAction);
registerEditorAction(SelectionToReplAction);
registerEditorAction(SelectionToWatchExpressionsAction);
registerEditorAction(ShowDebugHoverAction);
registerEditorAction(GoToNextBreakpointAction);
registerEditorAction(GoToPreviousBreakpointAction);
registerEditorAction(CloseExceptionWidgetAction);
const CONTROL_CODES = "\\u0000-\\u0020\\u007f-\\u009f";
const WEB_LINK_REGEX = new RegExp(
  "(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|data:|www\\.)[^\\s" + CONTROL_CODES + '"]{2,}[^\\s' + CONTROL_CODES + `"')}\\],:;.!?]`,
  "ug"
);
const WIN_ABSOLUTE_PATH = /(?:[a-zA-Z]:(?:(?:\\|\/)[\w\.-]*)+)/;
const WIN_RELATIVE_PATH = /(?:(?:\~|\.)(?:(?:\\|\/)[\w\.-]*)+)/;
const WIN_PATH = new RegExp(`(${WIN_ABSOLUTE_PATH.source}|${WIN_RELATIVE_PATH.source})`);
const POSIX_PATH = /((?:\~|\.)?(?:\/[\w\.-]*)+)/;
const LINE_COLUMN = /(?:\:([\d]+))?(?:\:([\d]+))?/;
const PATH_LINK_REGEX = new RegExp(
  `${isWindows ? WIN_PATH.source : POSIX_PATH.source}${LINE_COLUMN.source}`,
  "g"
);
const LINE_COLUMN_REGEX = /:([\d]+)(?::([\d]+))?$/;
const MAX_LENGTH = 2e3;
let LinkDetector = class LinkDetector2 {
  constructor(editorService, fileService, openerService, pathService, tunnelService, environmentService, configurationService) {
    this.editorService = editorService;
    this.fileService = fileService;
    this.openerService = openerService;
    this.pathService = pathService;
    this.tunnelService = tunnelService;
    this.environmentService = environmentService;
    this.configurationService = configurationService;
  }
  linkify(text, splitLines, workspaceFolder, includeFulltext) {
    if (splitLines) {
      const lines = text.split("\n");
      for (let i = 0; i < lines.length - 1; i++) {
        lines[i] = lines[i] + "\n";
      }
      if (!lines[lines.length - 1]) {
        lines.pop();
      }
      const elements = lines.map((line) => this.linkify(line, false, workspaceFolder, includeFulltext));
      if (elements.length === 1) {
        return elements[0];
      }
      const container2 = document.createElement("span");
      elements.forEach((e) => container2.appendChild(e));
      return container2;
    }
    const container = document.createElement("span");
    for (const part of this.detectLinks(text)) {
      try {
        switch (part.kind) {
          case "text":
            container.appendChild(document.createTextNode(part.value));
            break;
          case "web":
            container.appendChild(this.createWebLink(includeFulltext ? text : void 0, part.value));
            break;
          case "path": {
            const path = part.captures[0];
            const lineNumber = part.captures[1] ? Number(part.captures[1]) : 0;
            const columnNumber = part.captures[2] ? Number(part.captures[2]) : 0;
            container.appendChild(this.createPathLink(includeFulltext ? text : void 0, part.value, path, lineNumber, columnNumber, workspaceFolder));
            break;
          }
        }
      } catch (e) {
        container.appendChild(document.createTextNode(part.value));
      }
    }
    return container;
  }
  createWebLink(fulltext, url) {
    const link = this.createLink(url);
    let uri = URI.parse(url);
    const lineCol = LINE_COLUMN_REGEX.exec(uri.path);
    if (lineCol) {
      uri = uri.with({
        path: uri.path.slice(0, lineCol.index),
        fragment: `L${lineCol[0].slice(1)}`
      });
    }
    this.decorateLink(link, uri, fulltext, async () => {
      if (uri.scheme === Schemas.file) {
        const fsPath = uri.fsPath;
        const path$1 = await this.pathService.path;
        const fileUrl = normalize(path$1.sep === posix.sep && isWindows ? fsPath.replace(/\\/g, posix.sep) : fsPath);
        const fileUri = URI.parse(fileUrl);
        const exists = await this.fileService.exists(fileUri);
        if (!exists) {
          return;
        }
        await this.editorService.openEditor({
          resource: fileUri,
          options: {
            pinned: true,
            selection: lineCol ? { startLineNumber: +lineCol[1], startColumn: +lineCol[2] } : void 0
          }
        });
        return;
      }
      this.openerService.open(url, { allowTunneling: !!this.environmentService.remoteAuthority && this.configurationService.getValue("remote.forwardOnOpen") });
    });
    return link;
  }
  createPathLink(fulltext, text, path$1, lineNumber, columnNumber, workspaceFolder) {
    if (path$1[0] === "/" && path$1[1] === "/") {
      return document.createTextNode(text);
    }
    const options = { selection: { startLineNumber: lineNumber, startColumn: columnNumber } };
    if (path$1[0] === ".") {
      if (!workspaceFolder) {
        return document.createTextNode(text);
      }
      const uri2 = workspaceFolder.toResource(path$1);
      const link2 = this.createLink(text);
      this.decorateLink(link2, uri2, fulltext, (preserveFocus) => this.editorService.openEditor({ resource: uri2, options: { ...options, preserveFocus } }));
      return link2;
    }
    if (path$1[0] === "~") {
      const userHome = this.pathService.resolvedUserHome;
      if (userHome) {
        path$1 = join(userHome.fsPath, path$1.substring(1));
      }
    }
    const link = this.createLink(text);
    link.tabIndex = 0;
    const uri = URI.file(normalize(path$1));
    this.fileService.stat(uri).then((stat) => {
      if (stat.isDirectory) {
        return;
      }
      this.decorateLink(link, uri, fulltext, (preserveFocus) => this.editorService.openEditor({ resource: uri, options: { ...options, preserveFocus } }));
    }).catch(() => {
    });
    return link;
  }
  createLink(text) {
    const link = document.createElement("a");
    link.textContent = text;
    return link;
  }
  decorateLink(link, uri, fulltext, onClick) {
    link.classList.add("link");
    const followLink = this.tunnelService.canTunnel(uri) ? localize("followForwardedLink", "follow link using forwarded port") : localize("followLink", "follow link");
    link.title = fulltext ? isMacintosh ? localize("fileLinkWithPathMac", "Cmd + click to {0}\n{1}", followLink, fulltext) : localize("fileLinkWithPath", "Ctrl + click to {0}\n{1}", followLink, fulltext) : isMacintosh ? localize("fileLinkMac", "Cmd + click to {0}", followLink) : localize("fileLink", "Ctrl + click to {0}", followLink);
    link.onmousemove = (event) => {
      link.classList.toggle("pointer", isMacintosh ? event.metaKey : event.ctrlKey);
    };
    link.onmouseleave = () => link.classList.remove("pointer");
    link.onclick = (event) => {
      const selection = window.getSelection();
      if (!selection || selection.type === "Range") {
        return;
      }
      if (!(isMacintosh ? event.metaKey : event.ctrlKey)) {
        return;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      onClick(false);
    };
    link.onkeydown = (e) => {
      const event = new StandardKeyboardEvent(e);
      if (event.keyCode === 3 || event.keyCode === 10) {
        event.preventDefault();
        event.stopPropagation();
        onClick(event.keyCode === 10);
      }
    };
  }
  detectLinks(text) {
    if (text.length > MAX_LENGTH) {
      return [{ kind: "text", value: text, captures: [] }];
    }
    const regexes = [WEB_LINK_REGEX, PATH_LINK_REGEX];
    const kinds = ["web", "path"];
    const result = [];
    const splitOne = (text2, regexIndex) => {
      if (regexIndex >= regexes.length) {
        result.push({ value: text2, kind: "text", captures: [] });
        return;
      }
      const regex = regexes[regexIndex];
      let currentIndex = 0;
      let match;
      regex.lastIndex = 0;
      while ((match = regex.exec(text2)) !== null) {
        const stringBeforeMatch = text2.substring(currentIndex, match.index);
        if (stringBeforeMatch) {
          splitOne(stringBeforeMatch, regexIndex + 1);
        }
        const value = match[0];
        result.push({
          value,
          kind: kinds[regexIndex],
          captures: match.slice(1)
        });
        currentIndex = match.index + value.length;
      }
      const stringAfterMatches = text2.substring(currentIndex);
      if (stringAfterMatches) {
        splitOne(stringAfterMatches, regexIndex + 1);
      }
    };
    splitOne(text, 0);
    return result;
  }
};
LinkDetector = __decorate([
  __param(0, IEditorService),
  __param(1, IFileService),
  __param(2, IOpenerService),
  __param(3, IPathService),
  __param(4, ITunnelService),
  __param(5, IWorkbenchEnvironmentService),
  __param(6, IConfigurationService)
], LinkDetector);
const $$4 = $$a;
let forgetScopes = true;
let variableInternalContext;
let dataBreakpointInfoResponse;
let VariablesView = class VariablesView2 extends ViewPane {
  constructor(options, contextMenuService, debugService, keybindingService, configurationService, instantiationService, viewDescriptorService, contextKeyService, openerService, themeService, telemetryService, menuService) {
    super(options, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, telemetryService);
    this.debugService = debugService;
    this.menuService = menuService;
    this.needsRefresh = false;
    this.savedViewState = /* @__PURE__ */ new Map();
    this.autoExpandedScopes = /* @__PURE__ */ new Set();
    this.updateTreeScheduler = new RunOnceScheduler(async () => {
      const stackFrame = this.debugService.getViewModel().focusedStackFrame;
      this.needsRefresh = false;
      const input = this.tree.getInput();
      if (input) {
        this.savedViewState.set(input.getId(), this.tree.getViewState());
      }
      if (!stackFrame) {
        await this.tree.setInput(null);
        return;
      }
      const viewState = this.savedViewState.get(stackFrame.getId());
      await this.tree.setInput(stackFrame, viewState);
      const scopes = await stackFrame.getScopes();
      const toExpand = scopes.find((s) => !s.expensive);
      if (toExpand && this.tree.hasNode(toExpand)) {
        this.autoExpandedScopes.add(toExpand.getId());
        await this.tree.expand(toExpand);
      }
    }, 400);
  }
  renderBody(container) {
    super.renderBody(container);
    this.element.classList.add("debug-pane");
    container.classList.add("debug-variables");
    const treeContainer = renderViewTree(container);
    const linkeDetector = this.instantiationService.createInstance(LinkDetector);
    this.tree = this.instantiationService.createInstance(WorkbenchAsyncDataTree, "VariablesView", treeContainer, new VariablesDelegate(), [this.instantiationService.createInstance(VariablesRenderer, linkeDetector), new ScopesRenderer(), new ScopeErrorRenderer()], new VariablesDataSource(), {
      accessibilityProvider: new VariablesAccessibilityProvider(),
      identityProvider: { getId: (element) => element.getId() },
      keyboardNavigationLabelProvider: { getKeyboardNavigationLabel: (e) => e.name },
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      }
    });
    this.tree.setInput(withUndefinedAsNull(this.debugService.getViewModel().focusedStackFrame));
    CONTEXT_VARIABLES_FOCUSED.bindTo(this.tree.contextKeyService);
    this._register(this.debugService.getViewModel().onDidFocusStackFrame((sf) => {
      if (!this.isBodyVisible()) {
        this.needsRefresh = true;
        return;
      }
      const timeout2 = sf.explicit ? 0 : void 0;
      this.updateTreeScheduler.schedule(timeout2);
    }));
    this._register(this.debugService.getViewModel().onWillUpdateViews(() => {
      const stackFrame = this.debugService.getViewModel().focusedStackFrame;
      if (stackFrame && forgetScopes) {
        stackFrame.forgetScopes();
      }
      forgetScopes = true;
      this.tree.updateChildren();
    }));
    this._register(this.tree.onMouseDblClick((e) => this.onMouseDblClick(e)));
    this._register(this.tree.onContextMenu(async (e) => await this.onContextMenu(e)));
    this._register(this.onDidChangeBodyVisibility((visible) => {
      if (visible && this.needsRefresh) {
        this.updateTreeScheduler.schedule();
      }
    }));
    let horizontalScrolling;
    this._register(this.debugService.getViewModel().onDidSelectExpression((e) => {
      const variable = e == null ? void 0 : e.expression;
      if (variable instanceof Variable && !(e == null ? void 0 : e.settingWatch)) {
        horizontalScrolling = this.tree.options.horizontalScrolling;
        if (horizontalScrolling) {
          this.tree.updateOptions({ horizontalScrolling: false });
        }
        this.tree.rerender(variable);
      } else if (!e && horizontalScrolling !== void 0) {
        this.tree.updateOptions({ horizontalScrolling });
        horizontalScrolling = void 0;
      }
    }));
    this._register(this.debugService.getViewModel().onDidEvaluateLazyExpression(async (e) => {
      if (e instanceof Variable && this.tree.hasNode(e)) {
        await this.tree.updateChildren(e, false, true);
        await this.tree.expand(e);
      }
    }));
    this._register(this.debugService.onDidEndSession(() => {
      this.savedViewState.clear();
      this.autoExpandedScopes.clear();
    }));
  }
  layoutBody(width, height) {
    super.layoutBody(height, width);
    this.tree.layout(width, height);
  }
  focus() {
    this.tree.domFocus();
  }
  collapseAll() {
    this.tree.collapseAll();
  }
  onMouseDblClick(e) {
    var _a2, _b2, _c2;
    const session = this.debugService.getViewModel().focusedSession;
    if (session && e.element instanceof Variable && session.capabilities.supportsSetVariable && !((_b2 = (_a2 = e.element.presentationHint) == null ? void 0 : _a2.attributes) == null ? void 0 : _b2.includes("readOnly")) && !((_c2 = e.element.presentationHint) == null ? void 0 : _c2.lazy)) {
      this.debugService.getViewModel().setSelectedExpression(e.element, false);
    }
  }
  async onContextMenu(e) {
    const variable = e.element;
    if (!(variable instanceof Variable) || !variable.value) {
      return;
    }
    const toDispose = new DisposableStore();
    try {
      const contextKeyService = await getContextForVariableMenuWithDataAccess(this.contextKeyService, variable);
      const menu = toDispose.add(this.menuService.createMenu(MenuId.DebugVariablesContext, contextKeyService));
      const context = getVariablesContext(variable);
      const secondary = [];
      createAndFillInContextMenuActions(menu, { arg: context, shouldForwardArgs: false }, { primary: [], secondary }, "inline");
      this.contextMenuService.showContextMenu({
        getAnchor: () => e.anchor,
        getActions: () => secondary
      });
    } finally {
      toDispose.dispose();
    }
  }
};
VariablesView = __decorate([
  __param(1, IContextMenuService),
  __param(2, IDebugService),
  __param(3, IKeybindingService),
  __param(4, IConfigurationService),
  __param(5, IInstantiationService),
  __param(6, IViewDescriptorService),
  __param(7, IContextKeyService),
  __param(8, IOpenerService),
  __param(9, IThemeService),
  __param(10, ITelemetryService),
  __param(11, IMenuService)
], VariablesView);
const getVariablesContext = (variable) => {
  var _a2;
  return {
    sessionId: (_a2 = variable.getSession()) == null ? void 0 : _a2.getId(),
    container: variable.parent instanceof Expression ? { expression: variable.parent.name } : variable.parent.toDebugProtocolObject(),
    variable: variable.toDebugProtocolObject()
  };
};
async function getContextForVariableMenuWithDataAccess(parentContext, variable) {
  const session = variable.getSession();
  if (!session || !session.capabilities.supportsDataBreakpoints) {
    return getContextForVariableMenu(parentContext, variable);
  }
  const contextKeys = [];
  dataBreakpointInfoResponse = await session.dataBreakpointInfo(variable.name, variable.parent.reference);
  const dataBreakpointId = dataBreakpointInfoResponse == null ? void 0 : dataBreakpointInfoResponse.dataId;
  const dataBreakpointAccessTypes = dataBreakpointInfoResponse == null ? void 0 : dataBreakpointInfoResponse.accessTypes;
  if (!dataBreakpointAccessTypes) {
    contextKeys.push([CONTEXT_BREAK_WHEN_VALUE_CHANGES_SUPPORTED.key, !!dataBreakpointId]);
  } else {
    for (const accessType of dataBreakpointAccessTypes) {
      switch (accessType) {
        case "read":
          contextKeys.push([CONTEXT_BREAK_WHEN_VALUE_IS_READ_SUPPORTED.key, !!dataBreakpointId]);
          break;
        case "write":
          contextKeys.push([CONTEXT_BREAK_WHEN_VALUE_CHANGES_SUPPORTED.key, !!dataBreakpointId]);
          break;
        case "readWrite":
          contextKeys.push([CONTEXT_BREAK_WHEN_VALUE_IS_ACCESSED_SUPPORTED.key, !!dataBreakpointId]);
          break;
      }
    }
  }
  return getContextForVariableMenu(parentContext, variable, contextKeys);
}
function getContextForVariableMenu(parentContext, variable, additionalContext = []) {
  var _a2, _b2, _c2;
  const session = variable.getSession();
  const contextKeys = [
    [CONTEXT_DEBUG_PROTOCOL_VARIABLE_MENU_CONTEXT.key, variable.variableMenuContext || ""],
    [CONTEXT_VARIABLE_EVALUATE_NAME_PRESENT.key, !!variable.evaluateName],
    [CONTEXT_CAN_VIEW_MEMORY.key, !!(session == null ? void 0 : session.capabilities.supportsReadMemoryRequest) && variable.memoryReference !== void 0],
    [CONTEXT_VARIABLE_IS_READONLY.key, !!((_b2 = (_a2 = variable.presentationHint) == null ? void 0 : _a2.attributes) == null ? void 0 : _b2.includes("readOnly")) || ((_c2 = variable.presentationHint) == null ? void 0 : _c2.lazy)],
    ...additionalContext
  ];
  variableInternalContext = variable;
  return parentContext.createOverlay(contextKeys);
}
function isStackFrame(obj) {
  return obj instanceof StackFrame;
}
class VariablesDataSource {
  hasChildren(element) {
    if (!element) {
      return false;
    }
    if (isStackFrame(element)) {
      return true;
    }
    return element.hasChildren;
  }
  getChildren(element) {
    if (isStackFrame(element)) {
      return element.getScopes();
    }
    return element.getChildren();
  }
}
class VariablesDelegate {
  getHeight(element) {
    return 22;
  }
  getTemplateId(element) {
    if (element instanceof ErrorScope) {
      return ScopeErrorRenderer.ID;
    }
    if (element instanceof Scope) {
      return ScopesRenderer.ID;
    }
    return VariablesRenderer.ID;
  }
}
const _ScopesRenderer = class _ScopesRenderer {
  get templateId() {
    return _ScopesRenderer.ID;
  }
  renderTemplate(container) {
    const name = append(container, $$4(".scope"));
    const label = new HighlightedLabel(name);
    return { name, label };
  }
  renderElement(element, index, templateData) {
    templateData.label.set(element.element.name, createMatches(element.filterData));
  }
  disposeTemplate(templateData) {
  }
};
_ScopesRenderer.ID = "scope";
let ScopesRenderer = _ScopesRenderer;
const _ScopeErrorRenderer = class _ScopeErrorRenderer {
  get templateId() {
    return _ScopeErrorRenderer.ID;
  }
  renderTemplate(container) {
    const wrapper = append(container, $$4(".scope"));
    const error = append(wrapper, $$4(".error"));
    return { error };
  }
  renderElement(element, index, templateData) {
    templateData.error.innerText = element.element.name;
  }
  disposeTemplate() {
  }
};
_ScopeErrorRenderer.ID = "scopeError";
let ScopeErrorRenderer = _ScopeErrorRenderer;
let VariablesRenderer = (_e = class extends AbstractExpressionsRenderer {
  constructor(linkDetector, menuService, contextKeyService, debugService, contextViewService) {
    super(debugService, contextViewService);
    this.linkDetector = linkDetector;
    this.menuService = menuService;
    this.contextKeyService = contextKeyService;
  }
  get templateId() {
    return _e.ID;
  }
  renderExpression(expression, data, highlights) {
    renderVariable(expression, data, true, highlights, this.linkDetector);
  }
  renderElement(node, index, data) {
    super.renderExpressionElement(node.element, node, data);
  }
  getInputBoxOptions(expression) {
    const variable = expression;
    return {
      initialValue: expression.value,
      ariaLabel: localize("variableValueAriaLabel", "Type new variable value"),
      validationOptions: {
        validation: () => variable.errorMessage ? { content: variable.errorMessage } : null
      },
      onFinish: (value, success) => {
        variable.errorMessage = void 0;
        const focusedStackFrame = this.debugService.getViewModel().focusedStackFrame;
        if (success && variable.value !== value && focusedStackFrame) {
          variable.setVariable(value, focusedStackFrame).then(() => {
            forgetScopes = false;
            this.debugService.getViewModel().updateViews();
          });
        }
      }
    };
  }
  renderActionBar(actionBar, expression) {
    const variable = expression;
    const contextKeyService = getContextForVariableMenu(this.contextKeyService, variable);
    const menu = this.menuService.createMenu(MenuId.DebugVariablesContext, contextKeyService);
    const primary = [];
    const context = getVariablesContext(variable);
    createAndFillInContextMenuActions(menu, { arg: context, shouldForwardArgs: false }, { primary, secondary: [] }, "inline");
    actionBar.clear();
    actionBar.context = context;
    actionBar.push(primary, { icon: true, label: false });
  }
}, _e.ID = "variable", _e);
VariablesRenderer = __decorate([
  __param(1, IMenuService),
  __param(2, IContextKeyService),
  __param(3, IDebugService),
  __param(4, IContextViewService)
], VariablesRenderer);
class VariablesAccessibilityProvider {
  getWidgetAriaLabel() {
    return localize("variablesAriaTreeLabel", "Debug Variables");
  }
  getAriaLabel(element) {
    if (element instanceof Scope) {
      return localize("variableScopeAriaLabel", "Scope {0}", element.name);
    }
    if (element instanceof Variable) {
      return localize(
        { key: "variableAriaLabel", comment: ["Placeholders are variable name and variable value respectivly. They should not be translated."] },
        "{0}, value {1}",
        element.name,
        element.value
      );
    }
    return null;
  }
}
const SET_VARIABLE_ID = "debug.setVariable";
CommandsRegistry.registerCommand({
  id: SET_VARIABLE_ID,
  handler: (accessor) => {
    const debugService = accessor.get(IDebugService);
    debugService.getViewModel().setSelectedExpression(variableInternalContext, false);
  }
});
const COPY_VALUE_ID = "workbench.debug.viewlet.action.copyValue";
CommandsRegistry.registerCommand({
  id: COPY_VALUE_ID,
  handler: async (accessor, arg, ctx) => {
    const debugService = accessor.get(IDebugService);
    const clipboardService = accessor.get(IClipboardService);
    let elementContext = "";
    let elements;
    if (arg instanceof Variable || arg instanceof Expression) {
      elementContext = "watch";
      elements = ctx ? ctx : [];
    } else {
      elementContext = "variables";
      elements = variableInternalContext ? [variableInternalContext] : [];
    }
    const stackFrame = debugService.getViewModel().focusedStackFrame;
    const session = debugService.getViewModel().focusedSession;
    if (!stackFrame || !session || elements.length === 0) {
      return;
    }
    const evalContext = session.capabilities.supportsClipboardContext ? "clipboard" : elementContext;
    const toEvaluate = elements.map(
      (element) => element instanceof Variable ? element.evaluateName || element.value : element.name
    );
    try {
      const evaluations = await Promise.all(toEvaluate.map((expr) => session.evaluate(expr, stackFrame.frameId, evalContext)));
      const result = coalesce(evaluations).map((evaluation) => evaluation.body.result);
      if (result.length) {
        clipboardService.writeText(result.join("\n"));
      }
    } catch (e) {
      const result = elements.map((element) => element.value);
      clipboardService.writeText(result.join("\n"));
    }
  }
});
const VIEW_MEMORY_ID = "workbench.debug.viewlet.action.viewMemory";
const HEX_EDITOR_EXTENSION_ID = "ms-vscode.hexeditor";
const HEX_EDITOR_EDITOR_ID = "hexEditor.hexedit";
CommandsRegistry.registerCommand({
  id: VIEW_MEMORY_ID,
  handler: async (accessor, arg, ctx) => {
    var _a2;
    const debugService = accessor.get(IDebugService);
    let sessionId;
    let memoryReference;
    if ("sessionId" in arg) {
      if (!arg.sessionId || !arg.variable.memoryReference) {
        return;
      }
      sessionId = arg.sessionId;
      memoryReference = arg.variable.memoryReference;
    } else {
      if (!arg.memoryReference) {
        return;
      }
      const focused = debugService.getViewModel().focusedSession;
      if (!focused) {
        return;
      }
      sessionId = focused.getId();
      memoryReference = arg.memoryReference;
    }
    const commandService = accessor.get(ICommandService);
    const editorService = accessor.get(IEditorService);
    const notifications = accessor.get(INotificationService);
    const progressService = accessor.get(IProgressService);
    const extensionService = accessor.get(IExtensionService);
    const telemetryService = accessor.get(ITelemetryService);
    const ext = await extensionService.getExtension(HEX_EDITOR_EXTENSION_ID);
    if (ext || await tryInstallHexEditor(notifications, progressService, extensionService, commandService)) {
      telemetryService.publicLog("debug/didViewMemory", {
        debugType: (_a2 = debugService.getModel().getSession(sessionId)) == null ? void 0 : _a2.configuration.type
      });
      await editorService.openEditor({
        resource: getUriForDebugMemory(sessionId, memoryReference),
        options: {
          revealIfOpened: true,
          override: HEX_EDITOR_EDITOR_ID
        }
      }, SIDE_GROUP);
    }
  }
});
function tryInstallHexEditor(notifications, progressService, extensionService, commandService) {
  return new Promise((resolve) => {
    let installing = false;
    const handle = notifications.prompt(Severity$1.Info, localize(
      "viewMemory.prompt",
      "Inspecting binary data requires the Hex Editor extension. Would you like to install it now?"
    ), [
      {
        label: localize("cancel", "Cancel"),
        run: () => resolve(false)
      },
      {
        label: localize("install", "Install"),
        run: async () => {
          installing = true;
          try {
            await progressService.withProgress({
              location: 15,
              title: localize("viewMemory.install.progress", "Installing the Hex Editor...")
            }, async () => {
              await commandService.executeCommand("workbench.extensions.installExtension", HEX_EDITOR_EXTENSION_ID);
              while (!await extensionService.getExtension(HEX_EDITOR_EXTENSION_ID)) {
                await timeout(30);
              }
            });
            resolve(true);
          } catch (e) {
            notifications.error(e);
            resolve(false);
          }
        }
      }
    ], { sticky: true });
    handle.onDidClose((e) => {
      if (!installing) {
        resolve(false);
      }
    });
  });
}
const BREAK_WHEN_VALUE_CHANGES_ID = "debug.breakWhenValueChanges";
CommandsRegistry.registerCommand({
  id: BREAK_WHEN_VALUE_CHANGES_ID,
  handler: async (accessor) => {
    const debugService = accessor.get(IDebugService);
    if (dataBreakpointInfoResponse) {
      await debugService.addDataBreakpoint(dataBreakpointInfoResponse.description, dataBreakpointInfoResponse.dataId, !!dataBreakpointInfoResponse.canPersist, dataBreakpointInfoResponse.accessTypes, "write");
    }
  }
});
const BREAK_WHEN_VALUE_IS_ACCESSED_ID = "debug.breakWhenValueIsAccessed";
CommandsRegistry.registerCommand({
  id: BREAK_WHEN_VALUE_IS_ACCESSED_ID,
  handler: async (accessor) => {
    const debugService = accessor.get(IDebugService);
    if (dataBreakpointInfoResponse) {
      await debugService.addDataBreakpoint(dataBreakpointInfoResponse.description, dataBreakpointInfoResponse.dataId, !!dataBreakpointInfoResponse.canPersist, dataBreakpointInfoResponse.accessTypes, "readWrite");
    }
  }
});
const BREAK_WHEN_VALUE_IS_READ_ID = "debug.breakWhenValueIsRead";
CommandsRegistry.registerCommand({
  id: BREAK_WHEN_VALUE_IS_READ_ID,
  handler: async (accessor) => {
    const debugService = accessor.get(IDebugService);
    if (dataBreakpointInfoResponse) {
      await debugService.addDataBreakpoint(dataBreakpointInfoResponse.description, dataBreakpointInfoResponse.dataId, !!dataBreakpointInfoResponse.canPersist, dataBreakpointInfoResponse.accessTypes, "read");
    }
  }
});
const COPY_EVALUATE_PATH_ID = "debug.copyEvaluatePath";
CommandsRegistry.registerCommand({
  id: COPY_EVALUATE_PATH_ID,
  handler: async (accessor, context) => {
    const clipboardService = accessor.get(IClipboardService);
    await clipboardService.writeText(context.variable.evaluateName);
  }
});
const ADD_TO_WATCH_ID = "debug.addToWatchExpressions";
CommandsRegistry.registerCommand({
  id: ADD_TO_WATCH_ID,
  handler: async (accessor, context) => {
    const debugService = accessor.get(IDebugService);
    debugService.addWatchExpression(context.variable.evaluateName);
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: "variables.collapse",
      viewId: VARIABLES_VIEW_ID,
      title: localize("collapse", "Collapse All"),
      f1: false,
      icon: Codicon.collapseAll,
      menu: {
        id: MenuId.ViewTitle,
        group: "navigation",
        when: ContextKeyExpr.equals("view", VARIABLES_VIEW_ID)
      }
    });
  }
  runInView(_accessor, view) {
    view.collapseAll();
  }
});
const $$3 = $$a;
async function doFindExpression(container, namesToFind) {
  if (!container) {
    return null;
  }
  const children = await container.getChildren();
  const filtered = children.filter((v) => namesToFind[0] === v.name);
  if (filtered.length !== 1) {
    return null;
  }
  if (namesToFind.length === 1) {
    return filtered[0];
  } else {
    return doFindExpression(filtered[0], namesToFind.slice(1));
  }
}
async function findExpressionInStackFrame(stackFrame, namesToFind) {
  const scopes = await stackFrame.getScopes();
  const nonExpensive = scopes.filter((s) => !s.expensive);
  const expressions = coalesce(await Promise.all(nonExpensive.map((scope) => doFindExpression(scope, namesToFind))));
  return expressions.length > 0 && expressions.every((e) => e.value === expressions[0].value) ? expressions[0] : void 0;
}
let DebugHoverWidget = (_f = class {
  constructor(editor, debugService, instantiationService) {
    this.editor = editor;
    this.debugService = debugService;
    this.instantiationService = instantiationService;
    this.allowEditorOverflow = true;
    this.highlightDecorations = this.editor.createDecorationsCollection();
    this.isUpdatingTree = false;
    this.toDispose = [];
    this._isVisible = false;
    this.showAtPosition = null;
    this.positionPreference = [1, 2];
    this.debugHoverComputer = this.instantiationService.createInstance(DebugHoverComputer, this.editor);
  }
  create() {
    this.domNode = $$3(".debug-hover-widget");
    this.complexValueContainer = append(this.domNode, $$3(".complex-value"));
    this.complexValueTitle = append(this.complexValueContainer, $$3(".title"));
    this.treeContainer = append(this.complexValueContainer, $$3(".debug-hover-tree"));
    this.treeContainer.setAttribute("role", "tree");
    const tip = append(this.complexValueContainer, $$3(".tip"));
    tip.textContent = localize(
      { key: "quickTip", comment: ['"switch to editor language hover" means to show the programming language hover widget instead of the debug hover'] },
      "Hold {0} key to switch to editor language hover",
      isMacintosh ? "Option" : "Alt"
    );
    const dataSource = new DebugHoverDataSource();
    const linkeDetector = this.instantiationService.createInstance(LinkDetector);
    this.tree = this.instantiationService.createInstance(WorkbenchAsyncDataTree, "DebugHover", this.treeContainer, new DebugHoverDelegate(), [this.instantiationService.createInstance(VariablesRenderer, linkeDetector)], dataSource, {
      accessibilityProvider: new DebugHoverAccessibilityProvider(),
      mouseSupport: false,
      horizontalScrolling: true,
      useShadows: false,
      keyboardNavigationLabelProvider: { getKeyboardNavigationLabel: (e) => e.name },
      overrideStyles: {
        listBackground: editorHoverBackground
      }
    });
    this.valueContainer = $$3(".value");
    this.valueContainer.tabIndex = 0;
    this.valueContainer.setAttribute("role", "tooltip");
    this.scrollbar = new DomScrollableElement(this.valueContainer, { horizontal: 2 });
    this.domNode.appendChild(this.scrollbar.getDomNode());
    this.toDispose.push(this.scrollbar);
    this.editor.applyFontInfo(this.domNode);
    this.domNode.style.backgroundColor = asCssVariable(editorHoverBackground);
    this.domNode.style.border = `1px solid ${asCssVariable(editorHoverBorder)}`;
    this.domNode.style.color = asCssVariable(editorHoverForeground);
    this.toDispose.push(this.tree.onDidChangeContentHeight(() => {
      if (!this.isUpdatingTree) {
        this.layoutTreeAndContainer();
      }
    }));
    this.toDispose.push(this.tree.onDidChangeContentWidth(() => {
      if (!this.isUpdatingTree) {
        this.layoutTreeAndContainer();
      }
    }));
    this.registerListeners();
    this.editor.addContentWidget(this);
  }
  registerListeners() {
    this.toDispose.push(addStandardDisposableListener(this.domNode, "keydown", (e) => {
      if (e.equals(9)) {
        this.hide();
      }
    }));
    this.toDispose.push(this.editor.onDidChangeConfiguration((e) => {
      if (e.hasChanged(49)) {
        this.editor.applyFontInfo(this.domNode);
      }
    }));
    this.toDispose.push(this.debugService.getViewModel().onDidEvaluateLazyExpression(async (e) => {
      if (e instanceof Variable && this.tree.hasNode(e)) {
        await this.tree.updateChildren(e, false, true);
        await this.tree.expand(e);
      }
    }));
  }
  isHovered() {
    var _a2;
    return !!((_a2 = this.domNode) == null ? void 0 : _a2.matches(":hover"));
  }
  isVisible() {
    return this._isVisible;
  }
  willBeVisible() {
    return !!this.showCancellationSource;
  }
  getId() {
    return _f.ID;
  }
  getDomNode() {
    return this.domNode;
  }
  async showAt(position, focus) {
    var _a2;
    (_a2 = this.showCancellationSource) == null ? void 0 : _a2.cancel();
    const cancellationSource = this.showCancellationSource = new CancellationTokenSource();
    const session = this.debugService.getViewModel().focusedSession;
    if (!session || !this.editor.hasModel()) {
      this.hide();
      return 1;
    }
    const result = await this.debugHoverComputer.compute(position, cancellationSource.token);
    if (cancellationSource.token.isCancellationRequested) {
      this.hide();
      return 2;
    }
    if (!result.range) {
      this.hide();
      return 1;
    }
    if (this.isVisible() && !result.rangeChanged) {
      return 0;
    }
    const expression = await this.debugHoverComputer.evaluate(session);
    if (cancellationSource.token.isCancellationRequested) {
      this.hide();
      return 2;
    }
    if (!expression || expression instanceof Expression && !expression.available) {
      this.hide();
      return 1;
    }
    this.highlightDecorations.set([{
      range: result.range,
      options: _f._HOVER_HIGHLIGHT_DECORATION_OPTIONS
    }]);
    return this.doShow(result.range.getStartPosition(), expression, focus);
  }
  async doShow(position, expression, focus, forceValueHover = false) {
    if (!this.domNode) {
      this.create();
    }
    this.showAtPosition = position;
    this._isVisible = true;
    if (!expression.hasChildren || forceValueHover) {
      this.complexValueContainer.hidden = true;
      this.valueContainer.hidden = false;
      renderExpressionValue(expression, this.valueContainer, {
        showChanged: false,
        colorize: true
      });
      this.valueContainer.title = "";
      this.editor.layoutContentWidget(this);
      this.scrollbar.scanDomNode();
      if (focus) {
        this.editor.render();
        this.valueContainer.focus();
      }
      return void 0;
    }
    this.valueContainer.hidden = true;
    this.expressionToRender = expression;
    this.complexValueTitle.textContent = expression.value;
    this.complexValueTitle.title = expression.value;
    this.editor.layoutContentWidget(this);
    this.tree.scrollTop = 0;
    this.tree.scrollLeft = 0;
    this.complexValueContainer.hidden = false;
    if (focus) {
      this.editor.render();
      this.tree.domFocus();
    }
  }
  layoutTreeAndContainer() {
    this.layoutTree();
    this.editor.layoutContentWidget(this);
  }
  layoutTree() {
    const scrollBarHeight = 10;
    const treeHeight = Math.min(Math.max(266, this.editor.getLayoutInfo().height * 0.55), this.tree.contentHeight + scrollBarHeight);
    const realTreeWidth = this.tree.contentWidth;
    const treeWidth = clamp(realTreeWidth, 400, 550);
    this.tree.layout(treeHeight, treeWidth);
    this.treeContainer.style.height = `${treeHeight}px`;
    this.scrollbar.scanDomNode();
  }
  beforeRender() {
    if (this.expressionToRender) {
      const expression = this.expressionToRender;
      this.expressionToRender = void 0;
      this.isUpdatingTree = true;
      this.tree.setInput(expression).finally(() => {
        this.isUpdatingTree = false;
      });
    }
    return null;
  }
  afterRender(positionPreference) {
    if (positionPreference) {
      this.positionPreference = [positionPreference];
    }
  }
  hide() {
    if (this.showCancellationSource) {
      this.showCancellationSource.cancel();
      this.showCancellationSource = void 0;
    }
    if (!this._isVisible) {
      return;
    }
    if (isAncestor(document.activeElement, this.domNode)) {
      this.editor.focus();
    }
    this._isVisible = false;
    this.highlightDecorations.clear();
    this.editor.layoutContentWidget(this);
    this.positionPreference = [1, 2];
  }
  getPosition() {
    return this._isVisible ? {
      position: this.showAtPosition,
      preference: this.positionPreference
    } : null;
  }
  dispose() {
    this.toDispose = dispose(this.toDispose);
  }
}, _f.ID = "debug.hoverWidget", _f._HOVER_HIGHLIGHT_DECORATION_OPTIONS = ModelDecorationOptions.register({
  description: "bdebug-hover-highlight",
  className: "hoverHighlight"
}), _f);
DebugHoverWidget = __decorate([
  __param(1, IDebugService),
  __param(2, IInstantiationService)
], DebugHoverWidget);
class DebugHoverAccessibilityProvider {
  getWidgetAriaLabel() {
    return localize("treeAriaLabel", "Debug Hover");
  }
  getAriaLabel(element) {
    return localize(
      { key: "variableAriaLabel", comment: ["Do not translate placeholders. Placeholders are name and value of a variable."] },
      "{0}, value {1}, variables, debug",
      element.name,
      element.value
    );
  }
}
class DebugHoverDataSource {
  hasChildren(element) {
    return element.hasChildren;
  }
  getChildren(element) {
    return element.getChildren();
  }
}
class DebugHoverDelegate {
  getHeight(element) {
    return 18;
  }
  getTemplateId(element) {
    return VariablesRenderer.ID;
  }
}
let DebugHoverComputer = class DebugHoverComputer2 {
  constructor(editor, debugService, languageFeaturesService, logService) {
    this.editor = editor;
    this.debugService = debugService;
    this.languageFeaturesService = languageFeaturesService;
    this.logService = logService;
  }
  async compute(position, token) {
    const session = this.debugService.getViewModel().focusedSession;
    if (!session || !this.editor.hasModel()) {
      return { rangeChanged: false };
    }
    const model = this.editor.getModel();
    const result = await getEvaluatableExpressionAtPosition(this.languageFeaturesService, model, position, token);
    if (!result) {
      return { rangeChanged: false };
    }
    const { range, matchingExpression } = result;
    const rangeChanged = this._currentRange ? !this._currentRange.equalsRange(range) : true;
    this._currentExpression = matchingExpression;
    this._currentRange = Range.lift(range);
    return { rangeChanged, range: this._currentRange };
  }
  async evaluate(session) {
    if (!this._currentExpression) {
      this.logService.error("No expression to evaluate");
      return;
    }
    if (session.capabilities.supportsEvaluateForHovers) {
      const expression = new Expression(this._currentExpression);
      await expression.evaluate(session, this.debugService.getViewModel().focusedStackFrame, "hover");
      return expression;
    } else {
      const focusedStackFrame = this.debugService.getViewModel().focusedStackFrame;
      if (focusedStackFrame) {
        return await findExpressionInStackFrame(focusedStackFrame, coalesce(this._currentExpression.split(".").map((word) => word.trim())));
      }
    }
    return void 0;
  }
};
DebugHoverComputer = __decorate([
  __param(1, IDebugService),
  __param(2, ILanguageFeaturesService),
  __param(3, ILogService)
], DebugHoverComputer);
var css$2 = ".monaco-editor .zone-widget.exception-widget-container{overflow:hidden}.monaco-editor .zone-widget .zone-widget-container.exception-widget{padding:6px 10px;user-select:text;-webkit-user-select:text;white-space:pre-wrap}.monaco-editor .zone-widget .zone-widget-container.exception-widget .title{display:flex}.monaco-editor .zone-widget .zone-widget-container.exception-widget .title .label{align-items:center;display:flex;font-weight:700}.monaco-editor .zone-widget .zone-widget-container.exception-widget .title .actions{flex:1}.monaco-editor .zone-widget .zone-widget-container.exception-widget .description,.monaco-editor .zone-widget .zone-widget-container.exception-widget .stack-trace{font-family:var(--monaco-monospace-font)}.monaco-editor .zone-widget .zone-widget-container.exception-widget .stack-trace{margin-top:.5em}.monaco-editor .zone-widget .zone-widget-container.exception-widget .stack-trace a{cursor:pointer;text-decoration:underline}.monaco-workbench.mac .zone-widget .zone-widget-container.exception-widget{font-size:11px}.monaco-workbench.linux .zone-widget .zone-widget-container.exception-widget,.monaco-workbench.windows .zone-widget .zone-widget-container.exception-widget{font-size:13px}";
n(css$2, {});
const $$2 = $$a;
const debugExceptionWidgetBorder = registerColor("debugExceptionWidget.border", { dark: "#a31515", light: "#a31515", hcDark: "#a31515", hcLight: "#a31515" }, localize("debugExceptionWidgetBorder", "Exception widget border color."));
const debugExceptionWidgetBackground = registerColor("debugExceptionWidget.background", { dark: "#420b0d", light: "#f1dfde", hcDark: "#420b0d", hcLight: "#f1dfde" }, localize("debugExceptionWidgetBackground", "Exception widget background color."));
let ExceptionWidget = class ExceptionWidget2 extends ZoneWidget {
  constructor(editor, exceptionInfo, debugSession, themeService, instantiationService) {
    super(editor, { showFrame: true, showArrow: true, isAccessible: true, frameWidth: 1, className: "exception-widget-container" });
    this.exceptionInfo = exceptionInfo;
    this.debugSession = debugSession;
    this.instantiationService = instantiationService;
    this.applyTheme(themeService.getColorTheme());
    this._disposables.add(themeService.onDidColorThemeChange(this.applyTheme.bind(this)));
    this.create();
    const onDidLayoutChangeScheduler = new RunOnceScheduler(() => this._doLayout(void 0, void 0), 50);
    this._disposables.add(this.editor.onDidLayoutChange(() => onDidLayoutChangeScheduler.schedule()));
    this._disposables.add(onDidLayoutChangeScheduler);
  }
  applyTheme(theme) {
    this.backgroundColor = theme.getColor(debugExceptionWidgetBackground);
    const frameColor = theme.getColor(debugExceptionWidgetBorder);
    this.style({
      arrowColor: frameColor,
      frameColor
    });
  }
  _applyStyles() {
    if (this.container) {
      this.container.style.backgroundColor = this.backgroundColor ? this.backgroundColor.toString() : "";
    }
    super._applyStyles();
  }
  _fillContainer(container) {
    this.setCssClass("exception-widget");
    const fontInfo = this.editor.getOption(49);
    container.style.fontSize = `${fontInfo.fontSize}px`;
    container.style.lineHeight = `${fontInfo.lineHeight}px`;
    container.tabIndex = 0;
    const title = $$2(".title");
    const label = $$2(".label");
    append(title, label);
    const actions = $$2(".actions");
    append(title, actions);
    label.textContent = this.exceptionInfo.id ? localize(
      "exceptionThrownWithId",
      "Exception has occurred: {0}",
      this.exceptionInfo.id
    ) : localize("exceptionThrown", "Exception has occurred.");
    let ariaLabel = label.textContent;
    const actionBar = new ActionBar(actions);
    actionBar.push(new Action("editor.closeExceptionWidget", localize("close", "Close"), ThemeIcon.asClassName(widgetClose), true, async () => {
      const contribution = this.editor.getContribution(EDITOR_CONTRIBUTION_ID);
      contribution == null ? void 0 : contribution.closeExceptionWidget();
    }), { label: false, icon: true });
    append(container, title);
    if (this.exceptionInfo.description) {
      const description = $$2(".description");
      description.textContent = this.exceptionInfo.description;
      ariaLabel += ", " + this.exceptionInfo.description;
      append(container, description);
    }
    if (this.exceptionInfo.details && this.exceptionInfo.details.stackTrace) {
      const stackTrace = $$2(".stack-trace");
      const linkDetector = this.instantiationService.createInstance(LinkDetector);
      const linkedStackTrace = linkDetector.linkify(this.exceptionInfo.details.stackTrace, true, this.debugSession ? this.debugSession.root : void 0);
      stackTrace.appendChild(linkedStackTrace);
      append(container, stackTrace);
      ariaLabel += ", " + this.exceptionInfo.details.stackTrace;
    }
    container.setAttribute("aria-label", ariaLabel);
  }
  _doLayout(_heightInPixel, _widthInPixel) {
    this.container.style.height = "initial";
    const lineHeight = this.editor.getOption(65);
    const arrowHeight = Math.round(lineHeight / 3);
    const computedLinesNumber = Math.ceil((this.container.offsetHeight + arrowHeight) / lineHeight);
    this._relayout(computedLinesNumber);
  }
  focus() {
    var _a2;
    (_a2 = this.container) == null ? void 0 : _a2.focus();
  }
  hasFocus() {
    return isAncestor(document.activeElement, this.container);
  }
};
ExceptionWidget = __decorate([
  __param(3, IThemeService),
  __param(4, IInstantiationService)
], ExceptionWidget);
const MAX_NUM_INLINE_VALUES = 100;
const MAX_INLINE_DECORATOR_LENGTH = 150;
const MAX_TOKENIZATION_LINE_LEN = 500;
const DEAFULT_INLINE_DEBOUNCE_DELAY = 200;
registerColor("editor.inlineValuesForeground", {
  dark: "#ffffff80",
  light: "#00000080",
  hcDark: "#ffffff80",
  hcLight: "#00000080"
}, localize("editor.inlineValuesForeground", "Color for the debug inline value text."));
registerColor("editor.inlineValuesBackground", {
  dark: "#ffc80033",
  light: "#ffc80033",
  hcDark: "#ffc80033",
  hcLight: "#ffc80033"
}, localize(
  "editor.inlineValuesBackground",
  "Color for the debug inline value background."
));
class InlineSegment {
  constructor(column, text) {
    this.column = column;
    this.text = text;
  }
}
function createInlineValueDecoration(lineNumber, contentText, column = 1073741824) {
  if (contentText.length > MAX_INLINE_DECORATOR_LENGTH) {
    contentText = contentText.substring(0, MAX_INLINE_DECORATOR_LENGTH) + "...";
  }
  return [
    {
      range: {
        startLineNumber: lineNumber,
        endLineNumber: lineNumber,
        startColumn: column,
        endColumn: column
      },
      options: {
        description: "debug-inline-value-decoration-spacer",
        after: {
          content: noBreakWhitespace,
          cursorStops: InjectedTextCursorStops.None
        },
        showIfCollapsed: true
      }
    },
    {
      range: {
        startLineNumber: lineNumber,
        endLineNumber: lineNumber,
        startColumn: column,
        endColumn: column
      },
      options: {
        description: "debug-inline-value-decoration",
        after: {
          content: replaceWsWithNoBreakWs(contentText),
          inlineClassName: "debug-inline-value",
          inlineClassNameAffectsLetterSpacing: true,
          cursorStops: InjectedTextCursorStops.None
        },
        showIfCollapsed: true
      }
    }
  ];
}
function replaceWsWithNoBreakWs(str) {
  return str.replace(/[ \t]/g, noBreakWhitespace);
}
function createInlineValueDecorationsInsideRange(expressions, range, model, wordToLineNumbersMap) {
  const nameValueMap = /* @__PURE__ */ new Map();
  for (const expr of expressions) {
    nameValueMap.set(expr.name, expr.value);
    if (nameValueMap.size >= MAX_NUM_INLINE_VALUES) {
      break;
    }
  }
  const lineToNamesMap = /* @__PURE__ */ new Map();
  nameValueMap.forEach((_value, name) => {
    const lineNumbers = wordToLineNumbersMap.get(name);
    if (lineNumbers) {
      for (const lineNumber of lineNumbers) {
        if (range.containsPosition(new Position(lineNumber, 0))) {
          if (!lineToNamesMap.has(lineNumber)) {
            lineToNamesMap.set(lineNumber, []);
          }
          if (lineToNamesMap.get(lineNumber).indexOf(name) === -1) {
            lineToNamesMap.get(lineNumber).push(name);
          }
        }
      }
    }
  });
  const decorations = [];
  lineToNamesMap.forEach((names, line) => {
    const contentText = names.sort((first, second) => {
      const content = model.getLineContent(line);
      return content.indexOf(first) - content.indexOf(second);
    }).map((name) => `${name} = ${nameValueMap.get(name)}`).join(", ");
    decorations.push(...createInlineValueDecoration(line, contentText));
  });
  return decorations;
}
function getWordToLineNumbersMap(model) {
  const result = /* @__PURE__ */ new Map();
  if (!model) {
    return result;
  }
  for (let lineNumber = 1, len = model.getLineCount(); lineNumber <= len; ++lineNumber) {
    const lineContent = model.getLineContent(lineNumber);
    if (lineContent.length > MAX_TOKENIZATION_LINE_LEN) {
      continue;
    }
    model.tokenization.forceTokenization(lineNumber);
    const lineTokens = model.tokenization.getLineTokens(lineNumber);
    for (let tokenIndex = 0, tokenCount = lineTokens.getCount(); tokenIndex < tokenCount; tokenIndex++) {
      const tokenType = lineTokens.getStandardTokenType(tokenIndex);
      if (tokenType === 0) {
        DEFAULT_WORD_REGEXP.lastIndex = 0;
        const tokenStartOffset = lineTokens.getStartOffset(tokenIndex);
        const tokenEndOffset = lineTokens.getEndOffset(tokenIndex);
        const tokenStr = lineContent.substring(tokenStartOffset, tokenEndOffset);
        const wordMatch = DEFAULT_WORD_REGEXP.exec(tokenStr);
        if (wordMatch) {
          const word = wordMatch[0];
          if (!result.has(word)) {
            result.set(word, []);
          }
          result.get(word).push(lineNumber);
        }
      }
    }
  }
  return result;
}
let DebugEditorContribution = class DebugEditorContribution2 {
  constructor(editor, debugService, instantiationService, commandService, configurationService, hostService, uriIdentityService, contextKeyService, languageFeaturesService, featureDebounceService) {
    this.editor = editor;
    this.debugService = debugService;
    this.instantiationService = instantiationService;
    this.commandService = commandService;
    this.configurationService = configurationService;
    this.hostService = hostService;
    this.uriIdentityService = uriIdentityService;
    this.languageFeaturesService = languageFeaturesService;
    this.hoverPosition = null;
    this.mouseDown = false;
    this.gutterIsHovered = false;
    this.altPressed = false;
    this.oldDecorations = this.editor.createDecorationsCollection();
    this._wordToLineNumbersMap = void 0;
    this.debounceInfo = featureDebounceService.for(languageFeaturesService.inlineValuesProvider, "InlineValues", { min: DEAFULT_INLINE_DEBOUNCE_DELAY });
    this.hoverWidget = this.instantiationService.createInstance(DebugHoverWidget, this.editor);
    this.toDispose = [];
    this.registerListeners();
    this.exceptionWidgetVisible = CONTEXT_EXCEPTION_WIDGET_VISIBLE.bindTo(contextKeyService);
    this.toggleExceptionWidget();
  }
  registerListeners() {
    this.toDispose.push(this.debugService.getViewModel().onDidFocusStackFrame((e) => this.onFocusStackFrame(e.stackFrame)));
    this.toDispose.push(this.editor.onMouseDown((e) => this.onEditorMouseDown(e)));
    this.toDispose.push(this.editor.onMouseUp(() => this.mouseDown = false));
    this.toDispose.push(this.editor.onMouseMove((e) => this.onEditorMouseMove(e)));
    this.toDispose.push(this.editor.onMouseLeave((e) => {
      const hoverDomNode = this.hoverWidget.getDomNode();
      if (!hoverDomNode) {
        return;
      }
      const rect = hoverDomNode.getBoundingClientRect();
      if (e.event.posx < rect.left || e.event.posx > rect.right || e.event.posy < rect.top || e.event.posy > rect.bottom) {
        this.hideHoverWidget();
      }
    }));
    this.toDispose.push(this.editor.onKeyDown((e) => this.onKeyDown(e)));
    this.toDispose.push(this.editor.onDidChangeModelContent(() => {
      this._wordToLineNumbersMap = void 0;
      this.updateInlineValuesScheduler.schedule();
    }));
    this.toDispose.push(this.debugService.getViewModel().onWillUpdateViews(() => this.updateInlineValuesScheduler.schedule()));
    this.toDispose.push(this.debugService.getViewModel().onDidEvaluateLazyExpression(() => this.updateInlineValuesScheduler.schedule()));
    this.toDispose.push(this.editor.onDidChangeModel(async () => {
      this.updateHoverConfiguration();
      this.toggleExceptionWidget();
      this.hideHoverWidget();
      this._wordToLineNumbersMap = void 0;
      const stackFrame = this.debugService.getViewModel().focusedStackFrame;
      await this.updateInlineValueDecorations(stackFrame);
    }));
    this.toDispose.push(this.editor.onDidScrollChange(() => {
      this.hideHoverWidget();
      const model = this.editor.getModel();
      if (model && this.languageFeaturesService.inlineValuesProvider.has(model)) {
        this.updateInlineValuesScheduler.schedule();
      }
    }));
    this.toDispose.push(this.debugService.onDidChangeState((state) => {
      if (state !== 2) {
        this.toggleExceptionWidget();
      }
    }));
  }
  get wordToLineNumbersMap() {
    if (!this._wordToLineNumbersMap) {
      this._wordToLineNumbersMap = getWordToLineNumbersMap(this.editor.getModel());
    }
    return this._wordToLineNumbersMap;
  }
  updateHoverConfiguration() {
    const stackFrame = this.debugService.getViewModel().focusedStackFrame;
    const model = this.editor.getModel();
    if (model) {
      this.applyHoverConfiguration(model, stackFrame);
    }
  }
  applyHoverConfiguration(model, stackFrame) {
    var _a2;
    if (stackFrame && this.uriIdentityService.extUri.isEqual(model.uri, stackFrame.source.uri)) {
      if (this.altListener) {
        this.altListener.dispose();
      }
      this.altListener = addDisposableListener(document, "keydown", (keydownEvent) => {
        const standardKeyboardEvent = new StandardKeyboardEvent(keydownEvent);
        if (standardKeyboardEvent.keyCode === 6) {
          this.altPressed = true;
          const debugHoverWasVisible = this.hoverWidget.isVisible();
          this.hoverWidget.hide();
          this.enableEditorHover();
          if (debugHoverWasVisible && this.hoverPosition) {
            this.showEditorHover(this.hoverPosition, false);
          }
          const onKeyUp = new DomEmitter(document, "keyup");
          const listener = Event.any(this.hostService.onDidChangeFocus, onKeyUp.event)((keyupEvent) => {
            let standardKeyboardEvent2 = void 0;
            if (keyupEvent instanceof KeyboardEvent) {
              standardKeyboardEvent2 = new StandardKeyboardEvent(keyupEvent);
            }
            if (!standardKeyboardEvent2 || standardKeyboardEvent2.keyCode === 6) {
              this.altPressed = false;
              this.editor.updateOptions({ hover: { enabled: false } });
              listener.dispose();
              onKeyUp.dispose();
            }
          });
        }
      });
      this.editor.updateOptions({ hover: { enabled: false } });
    } else {
      (_a2 = this.altListener) == null ? void 0 : _a2.dispose();
      this.enableEditorHover();
    }
  }
  enableEditorHover() {
    if (this.editor.hasModel()) {
      const model = this.editor.getModel();
      const overrides = {
        resource: model.uri,
        overrideIdentifier: model.getLanguageId()
      };
      const defaultConfiguration = this.configurationService.getValue("editor.hover", overrides);
      this.editor.updateOptions({
        hover: {
          enabled: defaultConfiguration.enabled,
          delay: defaultConfiguration.delay,
          sticky: defaultConfiguration.sticky
        }
      });
    }
  }
  async showHover(position, focus) {
    const sf = this.debugService.getViewModel().focusedStackFrame;
    const model = this.editor.getModel();
    if (sf && model && this.uriIdentityService.extUri.isEqual(sf.source.uri, model.uri)) {
      const result = await this.hoverWidget.showAt(position, focus);
      if (result === 1) {
        this.showEditorHover(position, focus);
      }
    } else {
      this.showEditorHover(position, focus);
    }
  }
  showEditorHover(position, focus) {
    const hoverController = this.editor.getContribution(ModesHoverController.ID);
    const range = new Range(position.lineNumber, position.column, position.lineNumber, position.column);
    hoverController == null ? void 0 : hoverController.showContentHover(range, 1, 0, focus);
  }
  async onFocusStackFrame(sf) {
    const model = this.editor.getModel();
    if (model) {
      this.applyHoverConfiguration(model, sf);
      if (sf && this.uriIdentityService.extUri.isEqual(sf.source.uri, model.uri)) {
        await this.toggleExceptionWidget();
      } else {
        this.hideHoverWidget();
      }
    }
    await this.updateInlineValueDecorations(sf);
  }
  get showHoverScheduler() {
    const hoverOption = this.editor.getOption(59);
    const scheduler = new RunOnceScheduler(() => {
      if (this.hoverPosition && !this.altPressed) {
        this.showHover(this.hoverPosition, false);
      }
    }, hoverOption.delay * 2);
    this.toDispose.push(scheduler);
    return scheduler;
  }
  get hideHoverScheduler() {
    const scheduler = new RunOnceScheduler(() => {
      if (!this.hoverWidget.isHovered()) {
        this.hoverWidget.hide();
      }
    }, 0);
    this.toDispose.push(scheduler);
    return scheduler;
  }
  hideHoverWidget() {
    if (!this.hideHoverScheduler.isScheduled() && this.hoverWidget.willBeVisible()) {
      this.hideHoverScheduler.schedule();
    }
    this.showHoverScheduler.cancel();
  }
  onEditorMouseDown(mouseEvent) {
    this.mouseDown = true;
    if (mouseEvent.target.type === 9 && mouseEvent.target.detail === DebugHoverWidget.ID) {
      return;
    }
    this.hideHoverWidget();
  }
  onEditorMouseMove(mouseEvent) {
    if (this.debugService.state !== 2) {
      return;
    }
    const target = mouseEvent.target;
    const stopKey = isMacintosh ? "metaKey" : "ctrlKey";
    if (!this.altPressed) {
      if (target.type === 2) {
        this.editor.updateOptions({ hover: { enabled: true } });
        this.gutterIsHovered = true;
      } else if (this.gutterIsHovered) {
        this.gutterIsHovered = false;
        this.updateHoverConfiguration();
      }
    }
    if (target.type === 9 && target.detail === DebugHoverWidget.ID && !mouseEvent.event[stopKey]) {
      return;
    }
    if (target.type === 6) {
      if (target.position && !Position.equals(target.position, this.hoverPosition)) {
        this.hoverPosition = target.position;
        this.hideHoverScheduler.cancel();
        this.showHoverScheduler.schedule();
      }
    } else if (!this.mouseDown) {
      this.hideHoverWidget();
    }
  }
  onKeyDown(e) {
    const stopKey = isMacintosh ? 57 : 5;
    if (e.keyCode !== stopKey) {
      this.hideHoverWidget();
    }
  }
  async toggleExceptionWidget() {
    const model = this.editor.getModel();
    const focusedSf = this.debugService.getViewModel().focusedStackFrame;
    const callStack = focusedSf ? focusedSf.thread.getCallStack() : null;
    if (!model || !focusedSf || !callStack || callStack.length === 0) {
      this.closeExceptionWidget();
      return;
    }
    const exceptionSf = callStack.find((sf) => !!(sf && sf.source && sf.source.available && sf.source.presentationHint !== "deemphasize"));
    if (!exceptionSf || exceptionSf !== focusedSf) {
      this.closeExceptionWidget();
      return;
    }
    const sameUri = this.uriIdentityService.extUri.isEqual(exceptionSf.source.uri, model.uri);
    if (this.exceptionWidget && !sameUri) {
      this.closeExceptionWidget();
    } else if (sameUri) {
      const exceptionInfo = await focusedSf.thread.exceptionInfo;
      if (exceptionInfo) {
        this.showExceptionWidget(exceptionInfo, this.debugService.getViewModel().focusedSession, exceptionSf.range.startLineNumber, exceptionSf.range.startColumn);
      }
    }
  }
  showExceptionWidget(exceptionInfo, debugSession, lineNumber, column) {
    if (this.exceptionWidget) {
      this.exceptionWidget.dispose();
    }
    this.exceptionWidget = this.instantiationService.createInstance(ExceptionWidget, this.editor, exceptionInfo, debugSession);
    this.exceptionWidget.show({ lineNumber, column }, 0);
    this.exceptionWidget.focus();
    this.editor.revealRangeInCenter({
      startLineNumber: lineNumber,
      startColumn: column,
      endLineNumber: lineNumber,
      endColumn: column
    });
    this.exceptionWidgetVisible.set(true);
  }
  closeExceptionWidget() {
    if (this.exceptionWidget) {
      const shouldFocusEditor = this.exceptionWidget.hasFocus();
      this.exceptionWidget.dispose();
      this.exceptionWidget = void 0;
      this.exceptionWidgetVisible.set(false);
      if (shouldFocusEditor) {
        this.editor.focus();
      }
    }
  }
  async addLaunchConfiguration() {
    const model = this.editor.getModel();
    if (!model) {
      return;
    }
    let configurationsArrayPosition;
    let lastProperty;
    const getConfigurationPosition = () => {
      let depthInArray = 0;
      visit(model.getValue(), {
        onObjectProperty: (property) => {
          lastProperty = property;
        },
        onArrayBegin: (offset) => {
          if (lastProperty === "configurations" && depthInArray === 0) {
            configurationsArrayPosition = model.getPositionAt(offset + 1);
          }
          depthInArray++;
        },
        onArrayEnd: () => {
          depthInArray--;
        }
      });
    };
    getConfigurationPosition();
    if (!configurationsArrayPosition) {
      const { tabSize, insertSpaces } = model.getOptions();
      const eol = model.getEOL();
      const edit = basename(model.uri.fsPath) === "launch.json" ? setProperty(model.getValue(), ["configurations"], [], { tabSize, insertSpaces, eol })[0] : setProperty(model.getValue(), ["launch"], { "configurations": [] }, { tabSize, insertSpaces, eol })[0];
      const startPosition = model.getPositionAt(edit.offset);
      const lineNumber = startPosition.lineNumber;
      const range = new Range(
        lineNumber,
        startPosition.column,
        lineNumber,
        model.getLineMaxColumn(lineNumber)
      );
      model.pushEditOperations(null, [EditOperation.replace(range, edit.content)], () => null);
      getConfigurationPosition();
    }
    if (!configurationsArrayPosition) {
      return;
    }
    this.editor.focus();
    const insertLine = (position) => {
      if (model.getLineLastNonWhitespaceColumn(position.lineNumber) > position.column) {
        this.editor.setPosition(position);
        CoreEditingCommands.LineBreakInsert.runEditorCommand(null, this.editor, null);
      }
      this.editor.setPosition(position);
      return this.commandService.executeCommand("editor.action.insertLineAfter");
    };
    await insertLine(configurationsArrayPosition);
    await this.commandService.executeCommand("editor.action.triggerSuggest");
  }
  get removeInlineValuesScheduler() {
    return new RunOnceScheduler(() => {
      this.oldDecorations.clear();
    }, 100);
  }
  get updateInlineValuesScheduler() {
    const model = this.editor.getModel();
    return new RunOnceScheduler(
      async () => await this.updateInlineValueDecorations(this.debugService.getViewModel().focusedStackFrame),
      model ? this.debounceInfo.get(model) : DEAFULT_INLINE_DEBOUNCE_DELAY
    );
  }
  async updateInlineValueDecorations(stackFrame) {
    const var_value_format = "{0} = {1}";
    const separator = ", ";
    const model = this.editor.getModel();
    const inlineValuesSetting = this.configurationService.getValue("debug").inlineValues;
    const inlineValuesTurnedOn = inlineValuesSetting === true || inlineValuesSetting === "on" || inlineValuesSetting === "auto" && model && this.languageFeaturesService.inlineValuesProvider.has(model);
    if (!inlineValuesTurnedOn || !model || !stackFrame || model.uri.toString() !== stackFrame.source.uri.toString()) {
      if (!this.removeInlineValuesScheduler.isScheduled()) {
        this.removeInlineValuesScheduler.schedule();
      }
      return;
    }
    this.removeInlineValuesScheduler.cancel();
    let allDecorations;
    if (this.languageFeaturesService.inlineValuesProvider.has(model)) {
      const findVariable = async (_key, caseSensitiveLookup) => {
        const scopes = await stackFrame.getMostSpecificScopes(stackFrame.range);
        const key = caseSensitiveLookup ? _key : _key.toLowerCase();
        for (const scope of scopes) {
          const variables = await scope.getChildren();
          const found = variables.find((v) => caseSensitiveLookup ? v.name === key : v.name.toLowerCase() === key);
          if (found) {
            return found.value;
          }
        }
        return void 0;
      };
      const ctx = {
        frameId: stackFrame.frameId,
        stoppedLocation: new Range(
          stackFrame.range.startLineNumber,
          stackFrame.range.startColumn + 1,
          stackFrame.range.endLineNumber,
          stackFrame.range.endColumn + 1
        )
      };
      const token = new CancellationTokenSource().token;
      const ranges = this.editor.getVisibleRangesPlusViewportAboveBelow();
      const providers = this.languageFeaturesService.inlineValuesProvider.ordered(model).reverse();
      allDecorations = [];
      const lineDecorations = /* @__PURE__ */ new Map();
      const promises = flatten(providers.map((provider) => ranges.map(
        (range) => Promise.resolve(provider.provideInlineValues(model, range, ctx, token)).then(async (result) => {
          if (result) {
            for (const iv of result) {
              let text = void 0;
              switch (iv.type) {
                case "text":
                  text = iv.text;
                  break;
                case "variable": {
                  let va = iv.variableName;
                  if (!va) {
                    const lineContent = model.getLineContent(iv.range.startLineNumber);
                    va = lineContent.substring(iv.range.startColumn - 1, iv.range.endColumn - 1);
                  }
                  const value = await findVariable(va, iv.caseSensitiveLookup);
                  if (value) {
                    text = format(var_value_format, va, value);
                  }
                  break;
                }
                case "expression": {
                  let expr = iv.expression;
                  if (!expr) {
                    const lineContent = model.getLineContent(iv.range.startLineNumber);
                    expr = lineContent.substring(iv.range.startColumn - 1, iv.range.endColumn - 1);
                  }
                  if (expr) {
                    const expression = new Expression(expr);
                    await expression.evaluate(stackFrame.thread.session, stackFrame, "watch", true);
                    if (expression.available) {
                      text = format(var_value_format, expr, expression.value);
                    }
                  }
                  break;
                }
              }
              if (text) {
                const line = iv.range.startLineNumber;
                let lineSegments = lineDecorations.get(line);
                if (!lineSegments) {
                  lineSegments = [];
                  lineDecorations.set(line, lineSegments);
                }
                if (!lineSegments.some((iv2) => iv2.text === text)) {
                  lineSegments.push(new InlineSegment(iv.range.startColumn, text));
                }
              }
            }
          }
        }, (err) => {
          onUnexpectedExternalError(err);
        })
      )));
      const startTime = Date.now();
      await Promise.all(promises);
      this.updateInlineValuesScheduler.delay = this.debounceInfo.update(model, Date.now() - startTime);
      lineDecorations.forEach((segments, line) => {
        if (segments.length > 0) {
          segments = segments.sort((a, b) => a.column - b.column);
          const text = segments.map((s) => s.text).join(separator);
          allDecorations.push(...createInlineValueDecoration(line, text));
        }
      });
    } else {
      const scopes = await stackFrame.getMostSpecificScopes(stackFrame.range);
      const decorationsPerScope = await Promise.all(scopes.map(async (scope) => {
        const variables = await scope.getChildren();
        let range = new Range(0, 0, stackFrame.range.startLineNumber, stackFrame.range.startColumn);
        if (scope.range) {
          range = range.setStartPosition(scope.range.startLineNumber, scope.range.startColumn);
        }
        return createInlineValueDecorationsInsideRange(variables, range, model, this.wordToLineNumbersMap);
      }));
      allDecorations = distinct(
        decorationsPerScope.reduce((previous, current) => previous.concat(current), []),
        (decoration) => {
          var _a2;
          return `${decoration.range.startLineNumber}:${(_a2 = decoration == null ? void 0 : decoration.options.after) == null ? void 0 : _a2.content}`;
        }
      );
    }
    this.oldDecorations.set(allDecorations);
  }
  dispose() {
    if (this.hoverWidget) {
      this.hoverWidget.dispose();
    }
    if (this.configurationWidget) {
      this.configurationWidget.dispose();
    }
    this.toDispose = dispose(this.toDispose);
    this.oldDecorations.clear();
  }
};
DebugEditorContribution.__decorator = __decorate([
  memoize
], DebugEditorContribution.prototype, "showHoverScheduler", null);
DebugEditorContribution.__decorator = __decorate([
  memoize
], DebugEditorContribution.prototype, "hideHoverScheduler", null);
DebugEditorContribution.__decorator = __decorate([
  memoize
], DebugEditorContribution.prototype, "removeInlineValuesScheduler", null);
DebugEditorContribution.__decorator = __decorate([
  memoize
], DebugEditorContribution.prototype, "updateInlineValuesScheduler", null);
DebugEditorContribution = __decorate([
  __param(1, IDebugService),
  __param(2, IInstantiationService),
  __param(3, ICommandService),
  __param(4, IConfigurationService),
  __param(5, IHostService),
  __param(6, IUriIdentityService),
  __param(7, IContextKeyService),
  __param(8, ILanguageFeaturesService),
  __param(9, ILanguageFeatureDebounceService)
], DebugEditorContribution);
let DebugProgressContribution = class DebugProgressContribution2 {
  constructor(debugService, progressService, viewsService) {
    this.toDispose = [];
    let progressListener;
    const listenOnProgress = (session) => {
      if (progressListener) {
        progressListener.dispose();
        progressListener = void 0;
      }
      if (session) {
        progressListener = session.onDidProgressStart(async (progressStartEvent) => {
          const promise = new Promise((r) => {
            const listener = Event.any(Event.filter(session.onDidProgressEnd, (e) => e.body.progressId === progressStartEvent.body.progressId), session.onDidEndAdapter)(() => {
              listener.dispose();
              r();
            });
          });
          if (viewsService.isViewContainerVisible(VIEWLET_ID)) {
            progressService.withProgress({ location: VIEWLET_ID }, () => promise);
          }
          const source = debugService.getAdapterManager().getDebuggerLabel(session.configuration.type);
          progressService.withProgress({
            location: 15,
            title: progressStartEvent.body.title,
            cancellable: progressStartEvent.body.cancellable,
            priority: NotificationPriority.SILENT,
            source,
            delay: 500
          }, (progressStep) => {
            let total = 0;
            const reportProgress = (progress) => {
              let increment = void 0;
              if (typeof progress.percentage === "number") {
                increment = progress.percentage - total;
                total += increment;
              }
              progressStep.report({
                message: progress.message,
                increment,
                total: typeof increment === "number" ? 100 : void 0
              });
            };
            if (progressStartEvent.body.message) {
              reportProgress(progressStartEvent.body);
            }
            const progressUpdateListener = session.onDidProgressUpdate((e) => {
              if (e.body.progressId === progressStartEvent.body.progressId) {
                reportProgress(e.body);
              }
            });
            return promise.then(() => progressUpdateListener.dispose());
          }, () => session.cancel(progressStartEvent.body.progressId));
        });
      }
    };
    this.toDispose.push(debugService.getViewModel().onDidFocusSession(listenOnProgress));
    listenOnProgress(debugService.getViewModel().focusedSession);
    this.toDispose.push(debugService.onWillNewSession((session) => {
      if (!progressListener) {
        listenOnProgress(session);
      }
    }));
  }
  dispose() {
    dispose(this.toDispose);
  }
};
DebugProgressContribution = __decorate([
  __param(0, IDebugService),
  __param(1, IProgressService),
  __param(2, IViewsService)
], DebugProgressContribution);
let StartDebugQuickAccessProvider = class StartDebugQuickAccessProvider2 extends PickerQuickAccessProvider {
  constructor(debugService, contextService, commandService, notificationService) {
    super(DEBUG_QUICK_ACCESS_PREFIX, {
      noResultsPick: {
        label: localize("noDebugResults", "No matching launch configurations")
      }
    });
    this.debugService = debugService;
    this.contextService = contextService;
    this.commandService = commandService;
    this.notificationService = notificationService;
  }
  async _getPicks(filter2) {
    var _a2, _b2;
    const picks = [];
    if (!this.debugService.getAdapterManager().hasEnabledDebuggers()) {
      return [];
    }
    picks.push({ type: "separator", label: "launch.json" });
    const configManager = this.debugService.getConfigurationManager();
    let lastGroup;
    for (const config of configManager.getAllConfigurations()) {
      const highlights = matchesFuzzy(filter2, config.name, true);
      if (highlights) {
        if (lastGroup !== ((_a2 = config.presentation) == null ? void 0 : _a2.group)) {
          picks.push({ type: "separator" });
          lastGroup = (_b2 = config.presentation) == null ? void 0 : _b2.group;
        }
        picks.push({
          label: config.name,
          description: this.contextService.getWorkbenchState() === 3 ? config.launch.name : "",
          highlights: { label: highlights },
          buttons: [{
            iconClass: ThemeIcon.asClassName(debugConfigure),
            tooltip: localize("customizeLaunchConfig", "Configure Launch Configuration")
          }],
          trigger: () => {
            config.launch.openConfigFile({ preserveFocus: false });
            return TriggerAction.CLOSE_PICKER;
          },
          accept: async () => {
            await configManager.selectConfiguration(config.launch, config.name);
            try {
              await this.debugService.startDebugging(config.launch, void 0, { startedByUser: true });
            } catch (error) {
              this.notificationService.error(error);
            }
          }
        });
      }
    }
    const dynamicProviders = await configManager.getDynamicProviders();
    if (dynamicProviders.length > 0) {
      picks.push({
        type: "separator",
        label: localize({
          key: "contributed",
          comment: ["contributed is lower case because it looks better like that in UI. Nothing preceeds it. It is a name of the grouping of debug configurations."]
        }, "contributed")
      });
    }
    configManager.getRecentDynamicConfigurations().forEach(({ name, type }) => {
      const highlights = matchesFuzzy(filter2, name, true);
      if (highlights) {
        picks.push({
          label: name,
          highlights: { label: highlights },
          buttons: [{
            iconClass: ThemeIcon.asClassName(debugRemoveConfig),
            tooltip: localize("removeLaunchConfig", "Remove Launch Configuration")
          }],
          trigger: () => {
            configManager.removeRecentDynamicConfigurations(name, type);
            return TriggerAction.CLOSE_PICKER;
          },
          accept: async () => {
            await configManager.selectConfiguration(void 0, name, void 0, { type });
            try {
              const { launch, getConfig } = configManager.selectedConfiguration;
              const config = await getConfig();
              await this.debugService.startDebugging(launch, config, { startedByUser: true });
            } catch (error) {
              this.notificationService.error(error);
            }
          }
        });
      }
    });
    dynamicProviders.forEach((provider) => {
      picks.push({
        label: `$(folder) ${provider.label}...`,
        ariaLabel: localize(
          { key: "providerAriaLabel", comment: ['Placeholder stands for the provider label. For example "NodeJS".'] },
          "{0} contributed configurations",
          provider.label
        ),
        accept: async () => {
          const pick = await provider.pick();
          if (pick) {
            await configManager.selectConfiguration(pick.launch, pick.config.name, pick.config, { type: provider.type });
            this.debugService.startDebugging(pick.launch, pick.config, { startedByUser: true });
          }
        }
      });
    });
    const visibleLaunches = configManager.getLaunches().filter((launch) => !launch.hidden);
    if (visibleLaunches.length > 0) {
      picks.push({ type: "separator", label: localize("configure", "configure") });
    }
    for (const launch of visibleLaunches) {
      const label = this.contextService.getWorkbenchState() === 3 ? localize("addConfigTo", "Add Config ({0})...", launch.name) : localize("addConfiguration", "Add Configuration...");
      picks.push({
        label,
        description: this.contextService.getWorkbenchState() === 3 ? launch.name : "",
        highlights: { label: withNullAsUndefined(matchesFuzzy(filter2, label, true)) },
        accept: () => this.commandService.executeCommand(ADD_CONFIGURATION_ID, launch.uri.toString())
      });
    }
    return picks;
  }
};
StartDebugQuickAccessProvider = __decorate([
  __param(0, IDebugService),
  __param(1, IWorkspaceContextService),
  __param(2, ICommandService),
  __param(3, INotificationService)
], StartDebugQuickAccessProvider);
var css$1 = '.debug-pane,.debug-view-content{height:100%}.monaco-workbench .debug-action.notification:after{background-color:#c63;border:1px solid #fff;border-radius:10px;content:"";height:6px;position:absolute;right:6px;top:10px;width:6px}.monaco-workbench .part>.title>.title-actions .start-debug-action-item{align-items:center;display:flex;flex-shrink:1;line-height:20px}.monaco-workbench.mac .part>.title>.title-actions .start-debug-action-item{border-radius:4px}.monaco-workbench .part>.title>.title-actions .start-debug-action-item .codicon{flex-shrink:0;line-height:inherit}.monaco-workbench .part>.title>.title-actions .start-debug-action-item .codicon-debug-start{height:21px;padding-left:2px;width:18px}.monaco-workbench .monaco-action-bar .start-debug-action-item .configuration .monaco-select-box{border:none;cursor:pointer;line-height:inherit;margin-top:0;min-width:90px;padding-bottom:0;padding-top:0}.monaco-workbench.safari .monaco-action-bar .start-debug-action-item .configuration .monaco-select-box{margin-bottom:0}.monaco-workbench .monaco-action-bar .start-debug-action-item .configuration.disabled .monaco-select-box{cursor:auto;font-style:italic;opacity:.7}.debug-pane .line-number{padding-left:4px;padding-right:4px}.debug-pane .disabled{cursor:auto;opacity:.65}.debug-pane .monaco-list:focus .monaco-list-row.selected .load-all,.debug-pane .monaco-list:focus .monaco-list-row.selected .state.label,.debug-pane .monaco-list:focus .monaco-list-row.selected.focused .state.label{color:inherit}.debug-pane .call-stack-state-message{flex:1;margin:0 10px;overflow:hidden;text-align:right;text-overflow:ellipsis;white-space:nowrap}.debug-pane .call-stack-state-message>.label{border-radius:3px;font-size:9px;padding:1px 2px}.debug-pane .debug-call-stack .session,.debug-pane .debug-call-stack .thread{align-items:center;display:flex}.debug-pane .debug-call-stack .session>.name,.debug-pane .debug-call-stack .thread>.name{flex:1;overflow:hidden;text-overflow:ellipsis}.debug-pane .debug-call-stack .session>.state.label,.debug-pane .debug-call-stack .thread>.state.label{align-self:center;font-size:.8em;margin:0 10px;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase}.debug-pane .debug-call-stack .monaco-list-row:hover .stack-frame.has-actions .file .line-number,.debug-pane .debug-call-stack .monaco-list-row:hover .state.label{display:none}.debug-pane .monaco-list-row .monaco-action-bar{display:none;flex-shrink:0;margin-right:6px}.debug-pane .monaco-list-row.focused .monaco-action-bar,.debug-pane .monaco-list-row:hover .monaco-action-bar{display:initial}.debug-pane .monaco-list-row .monaco-action-bar .action-label{padding:2px}.debug-pane .session .codicon{line-height:22px;margin-right:2px}.debug-pane .debug-call-stack .stack-frame{display:flex;overflow:hidden;padding-right:.8em;text-overflow:ellipsis}.debug-pane .debug-call-stack .stack-frame.label{font-style:italic;text-align:center}.debug-pane .debug-call-stack .stack-frame .label{flex:1;flex-shrink:0;min-width:fit-content}.debug-pane .debug-call-stack .stack-frame.subtle{font-style:italic}.debug-pane .debug-call-stack .stack-frame.label>.file{display:none}.debug-pane .debug-call-stack .stack-frame>.file{display:flex;flex-wrap:wrap;justify-content:flex-end;overflow:hidden}.debug-pane .debug-call-stack .stack-frame>.file>.line-number.unavailable{display:none}.debug-pane .debug-call-stack .stack-frame>.file>.file-name{margin-right:.8em;overflow:hidden;text-overflow:ellipsis}.debug-pane .debug-call-stack .stack-frame>.file:not(:first-child){margin-left:.8em}.debug-pane .debug-call-stack .load-all{text-align:center}.debug-pane .debug-call-stack .show-more{opacity:.5;text-align:center}.debug-pane .debug-call-stack .error{font-style:italic;overflow:hidden;text-overflow:ellipsis}.debug-pane .scope{font-size:11px;font-weight:700}.debug-pane .monaco-list-row .expression .actionbar-spacer{flex-grow:1}.debug-pane .monaco-list-row .expression .value{overflow:hidden;text-overflow:ellipsis;white-space:pre}.debug-pane .monaco-list-row .expression .value.changed{border-radius:4px}.debug-pane .monaco-inputbox{line-height:normal;width:100%}.debug-pane .inputBoxContainer{box-sizing:border-box;flex-grow:1}.debug-pane .debug-watch .monaco-inputbox{font-family:var(--monaco-monospace-font)}.debug-pane .monaco-inputbox>.ibwrapper{height:19px}.debug-pane .monaco-inputbox>.ibwrapper>.input{color:initial;padding:0}.debug-pane .watch-expression{display:flex}.debug-pane .watch-expression .expression{flex:1}.debug-pane .debug-variables .scope .error{font-family:var(--monaco-monospace-font);font-style:italic;font-weight:400;overflow:hidden;text-overflow:ellipsis}.debug-pane .monaco-list-row{line-height:22px}.debug-pane .debug-breakpoints .monaco-list-row .breakpoint{padding-left:2px}.debug-pane .debug-breakpoints .breakpoint.exception{padding-left:21px}.debug-pane .debug-breakpoints .breakpoint{align-items:center;display:flex;flex:1;padding-right:.8em}.debug-pane .debug-breakpoints .breakpoint input{flex-shrink:0}.debug-pane .debug-breakpoints .breakpoint>.codicon{align-items:center;display:flex;height:19px;justify-content:center;min-width:19px;width:19px}.debug-pane .debug-breakpoints .breakpoint>.access-type,.debug-pane .debug-breakpoints .breakpoint>.condition,.debug-pane .debug-breakpoints .breakpoint>.file-path{flex:1;margin-left:.9em;opacity:.7;overflow:hidden;text-overflow:ellipsis}.debug-pane .debug-breakpoints .breakpoint .name{overflow:hidden;text-overflow:ellipsis}.debug-pane .pane-header .breakpoint-warning{margin-left:3px}.debug-pane .pane-header .breakpoint-warning .monaco-icon-label .codicon{align-items:center;display:flex}';
n(css$1, {});
const debugStartLanguageKey = "debugStartLanguage";
const CONTEXT_DEBUG_START_LANGUAGE = new RawContextKey(debugStartLanguageKey, void 0);
const CONTEXT_DEBUGGER_INTERESTED_IN_ACTIVE_EDITOR = new RawContextKey("debuggerInterestedInActiveEditor", false);
let WelcomeView = (_g = class extends ViewPane {
  constructor(options, themeService, keybindingService, contextMenuService, configurationService, contextKeyService, debugService, editorService, instantiationService, viewDescriptorService, openerService, storageSevice, telemetryService) {
    super(options, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, telemetryService);
    this.debugService = debugService;
    this.editorService = editorService;
    this.debugStartLanguageContext = CONTEXT_DEBUG_START_LANGUAGE.bindTo(contextKeyService);
    this.debuggerInterestedContext = CONTEXT_DEBUGGER_INTERESTED_IN_ACTIVE_EDITOR.bindTo(contextKeyService);
    const lastSetLanguage = storageSevice.get(debugStartLanguageKey, 1);
    this.debugStartLanguageContext.set(lastSetLanguage);
    const setContextKey = () => {
      const editorControl = this.editorService.activeTextEditorControl;
      if (isCodeEditor(editorControl)) {
        const model = editorControl.getModel();
        const language2 = model ? model.getLanguageId() : void 0;
        if (language2 && this.debugService.getAdapterManager().someDebuggerInterestedInLanguage(language2)) {
          this.debugStartLanguageContext.set(language2);
          this.debuggerInterestedContext.set(true);
          storageSevice.store(debugStartLanguageKey, language2, 1, 1);
          return;
        }
      }
      this.debuggerInterestedContext.set(false);
    };
    const disposables = new DisposableStore();
    this._register(disposables);
    this._register(editorService.onDidActiveEditorChange(() => {
      disposables.clear();
      const editorControl = this.editorService.activeTextEditorControl;
      if (isCodeEditor(editorControl)) {
        disposables.add(editorControl.onDidChangeModelLanguage(setContextKey));
      }
      setContextKey();
    }));
    this._register(this.debugService.getAdapterManager().onDidRegisterDebugger(setContextKey));
    this._register(this.onDidChangeBodyVisibility((visible) => {
      if (visible) {
        setContextKey();
      }
    }));
    setContextKey();
    const debugKeybinding = this.keybindingService.lookupKeybinding(DEBUG_START_COMMAND_ID);
    debugKeybindingLabel = debugKeybinding ? ` (${debugKeybinding.getLabel()})` : "";
  }
  shouldShowWelcome() {
    return true;
  }
}, _g.ID = "workbench.debug.welcome", _g.LABEL = localize("run", "Run"), _g);
WelcomeView = __decorate([
  __param(1, IThemeService),
  __param(2, IKeybindingService),
  __param(3, IContextMenuService),
  __param(4, IConfigurationService),
  __param(5, IContextKeyService),
  __param(6, IDebugService),
  __param(7, IEditorService),
  __param(8, IInstantiationService),
  __param(9, IViewDescriptorService),
  __param(10, IOpenerService),
  __param(11, IStorageService),
  __param(12, ITelemetryService)
], WelcomeView);
const viewsRegistry$1 = Registry.as(Extensions$1.ViewsRegistry);
let debugKeybindingLabel = "";
viewsRegistry$1.registerViewWelcomeContent(WelcomeView.ID, {
  content: `[${localize("runAndDebugAction", "Run and Debug")}${debugKeybindingLabel}](command:${DEBUG_START_COMMAND_ID})`,
  when: CONTEXT_DEBUGGERS_AVAILABLE,
  group: ViewContentGroups.Debug,
  order: 1
});
viewsRegistry$1.registerViewWelcomeContent(WelcomeView.ID, {
  content: `[${localize("detectThenRunAndDebug", "Show all automatic debug configurations")}](command:${SELECT_AND_START_ID}).`,
  when: CONTEXT_DEBUGGERS_AVAILABLE,
  group: ViewContentGroups.Debug,
  order: 10
});
let DebugViewPaneContainer = class DebugViewPaneContainer2 extends ViewPaneContainer {
  constructor(layoutService, telemetryService, progressService, debugService, instantiationService, contextService, storageService, themeService, contextMenuService, extensionService, configurationService, contextViewService, contextKeyService, viewDescriptorService) {
    super(VIEWLET_ID, { mergeViewWithContainerWhenSingleView: true }, instantiationService, configurationService, layoutService, contextMenuService, telemetryService, extensionService, themeService, storageService, contextService, viewDescriptorService);
    this.progressService = progressService;
    this.debugService = debugService;
    this.contextViewService = contextViewService;
    this.contextKeyService = contextKeyService;
    this.paneListeners = /* @__PURE__ */ new Map();
    this.stopActionViewItemDisposables = this._register(new DisposableStore());
    this._register(this.debugService.onDidChangeState((state) => this.onDebugServiceStateChange(state)));
    this._register(this.contextKeyService.onDidChangeContext((e) => {
      if (e.affectsSome(/* @__PURE__ */ new Set([CONTEXT_DEBUG_UX_KEY]))) {
        this.updateTitleArea();
      }
    }));
    this._register(this.contextService.onDidChangeWorkbenchState(() => this.updateTitleArea()));
    this._register(this.configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("debug.toolBarLocation")) {
        this.updateTitleArea();
      }
    }));
  }
  create(parent) {
    super.create(parent);
    parent.classList.add("debug-viewlet");
  }
  focus() {
    super.focus();
    if (this.startDebugActionViewItem) {
      this.startDebugActionViewItem.focus();
    } else {
      this.focusView(WelcomeView.ID);
    }
  }
  getActionViewItem(action) {
    if (action.id === DEBUG_START_COMMAND_ID) {
      this.startDebugActionViewItem = this.instantiationService.createInstance(StartDebugActionViewItem, null, action);
      return this.startDebugActionViewItem;
    }
    if (action.id === FOCUS_SESSION_ID) {
      return new FocusSessionActionViewItem(
        action,
        void 0,
        this.debugService,
        this.contextViewService,
        this.configurationService
      );
    }
    if (action.id === STOP_ID || action.id === DISCONNECT_ID) {
      this.stopActionViewItemDisposables.clear();
      const item = this.instantiationService.invokeFunction((accessor) => createDisconnectMenuItemAction(action, this.stopActionViewItemDisposables, accessor));
      if (item) {
        return item;
      }
    }
    return createActionViewItem(this.instantiationService, action);
  }
  focusView(id) {
    const view = this.getView(id);
    if (view) {
      view.focus();
    }
  }
  onDebugServiceStateChange(state) {
    if (this.progressResolve) {
      this.progressResolve();
      this.progressResolve = void 0;
    }
    if (state === 1) {
      this.progressService.withProgress({ location: VIEWLET_ID }, (_progress) => {
        return new Promise((resolve) => this.progressResolve = resolve);
      });
    }
  }
  addPanes(panes) {
    super.addPanes(panes);
    for (const { pane } of panes) {
      if (pane.id === BREAKPOINTS_VIEW_ID) {
        this.breakpointView = pane;
        this.updateBreakpointsMaxSize();
      } else {
        this.paneListeners.set(pane.id, pane.onDidChange(() => this.updateBreakpointsMaxSize()));
      }
    }
  }
  removePanes(panes) {
    super.removePanes(panes);
    for (const pane of panes) {
      dispose(this.paneListeners.get(pane.id));
      this.paneListeners.delete(pane.id);
    }
  }
  updateBreakpointsMaxSize() {
    if (this.breakpointView) {
      const allOtherCollapsed = this.panes.every((view) => !view.isExpanded() || view === this.breakpointView);
      this.breakpointView.maximumBodySize = allOtherCollapsed ? Number.POSITIVE_INFINITY : this.breakpointView.minimumBodySize;
    }
  }
};
DebugViewPaneContainer = __decorate([
  __param(0, IWorkbenchLayoutService),
  __param(1, ITelemetryService),
  __param(2, IProgressService),
  __param(3, IDebugService),
  __param(4, IInstantiationService),
  __param(5, IWorkspaceContextService),
  __param(6, IStorageService),
  __param(7, IThemeService),
  __param(8, IContextMenuService),
  __param(9, IExtensionService),
  __param(10, IConfigurationService),
  __param(11, IContextViewService),
  __param(12, IContextKeyService),
  __param(13, IViewDescriptorService)
], DebugViewPaneContainer);
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "debug.toggleReplIgnoreFocus",
      title: localize("debugPanel", "Debug Console"),
      toggled: ContextKeyExpr.has(`view.${REPL_VIEW_ID}.visible`),
      menu: [{
        id: ViewsSubMenu,
        group: "3_toggleRepl",
        order: 30,
        when: ContextKeyExpr.and(ContextKeyExpr.equals("viewContainer", VIEWLET_ID))
      }]
    });
  }
  async run(accessor) {
    const viewsService = accessor.get(IViewsService);
    if (viewsService.isViewVisible(REPL_VIEW_ID)) {
      viewsService.closeView(REPL_VIEW_ID);
    } else {
      await viewsService.openView(REPL_VIEW_ID);
    }
  }
});
const disassemblyNotAvailable = {
  allowBreakpoint: false,
  isBreakpointSet: false,
  isBreakpointEnabled: false,
  instruction: {
    address: "-1",
    instruction: localize("instructionNotAvailable", "Disassembly not available.")
  },
  instructionAddress: BigInt(-1)
};
let DisassemblyView = (_h = class extends EditorPane {
  constructor(telemetryService, themeService, storageService, _configurationService, _instantiationService, _debugService) {
    super(DISASSEMBLY_VIEW_ID, telemetryService, themeService, storageService);
    this._configurationService = _configurationService;
    this._instantiationService = _instantiationService;
    this._debugService = _debugService;
    this._instructionBpList = [];
    this._enableSourceCodeRender = true;
    this._loadingLock = false;
    this._disassembledInstructions = void 0;
    this._onDidChangeStackFrame = new Emitter();
    this._previousDebuggingState = _debugService.state;
    this._fontInfo = BareFontInfo.createFromRawSettings(_configurationService.getValue("editor"), PixelRatio.value);
    this._register(_configurationService.onDidChangeConfiguration((e) => {
      var _a2;
      if (e.affectsConfiguration("editor")) {
        this._fontInfo = BareFontInfo.createFromRawSettings(_configurationService.getValue("editor"), PixelRatio.value);
      }
      if (e.affectsConfiguration("debug")) {
        const newValue = this._configurationService.getValue("debug").disassemblyView.showSourceCode;
        if (this._enableSourceCodeRender !== newValue) {
          this._enableSourceCodeRender = newValue;
          this.reloadDisassembly(void 0);
        } else {
          (_a2 = this._disassembledInstructions) == null ? void 0 : _a2.rerender();
        }
      }
    }));
  }
  get fontInfo() {
    return this._fontInfo;
  }
  get currentInstructionAddresses() {
    return this._debugService.getModel().getSessions(false).map((session) => session.getAllThreads()).reduce((prev, curr) => prev.concat(curr), []).map((thread) => thread.getTopStackFrame()).map((frame) => frame == null ? void 0 : frame.instructionPointerReference);
  }
  get focusedCurrentInstructionAddress() {
    var _a2, _b2;
    return (_b2 = (_a2 = this._debugService.getViewModel().focusedStackFrame) == null ? void 0 : _a2.thread.getTopStackFrame()) == null ? void 0 : _b2.instructionPointerReference;
  }
  get focusedInstructionAddress() {
    var _a2;
    return (_a2 = this._debugService.getViewModel().focusedStackFrame) == null ? void 0 : _a2.instructionPointerReference;
  }
  get isSourceCodeRender() {
    return this._enableSourceCodeRender;
  }
  get debugSession() {
    return this._debugService.getViewModel().focusedSession;
  }
  get onDidChangeStackFrame() {
    return this._onDidChangeStackFrame.event;
  }
  createEditor(parent) {
    this._enableSourceCodeRender = this._configurationService.getValue("debug").disassemblyView.showSourceCode;
    const lineHeight = this.fontInfo.lineHeight;
    const thisOM = this;
    const delegate = new class {
      constructor() {
        this.headerRowHeight = 0;
      }
      getHeight(row) {
        var _a2;
        if (thisOM.isSourceCodeRender && ((_a2 = row.instruction.location) == null ? void 0 : _a2.path) && row.instruction.line) {
          if (row.instruction.endLine) {
            return lineHeight * (row.instruction.endLine - row.instruction.line + 2);
          } else {
            return lineHeight * 2;
          }
        }
        return lineHeight;
      }
    }();
    const instructionRenderer = this._register(this._instantiationService.createInstance(InstructionRenderer, this));
    this._disassembledInstructions = this._register(this._instantiationService.createInstance(WorkbenchTable, "DisassemblyView", parent, delegate, [
      {
        label: "",
        tooltip: "",
        weight: 0,
        minimumWidth: this.fontInfo.lineHeight,
        maximumWidth: this.fontInfo.lineHeight,
        templateId: BreakpointRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      },
      {
        label: localize("disassemblyTableColumnLabel", "instructions"),
        tooltip: "",
        weight: 0.3,
        templateId: InstructionRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      }
    ], [
      this._instantiationService.createInstance(BreakpointRenderer, this),
      instructionRenderer
    ], {
      identityProvider: { getId: (e) => e.instruction.address },
      horizontalScrolling: false,
      overrideStyles: {
        listBackground: editorBackground
      },
      multipleSelectionSupport: false,
      setRowLineHeight: false,
      openOnSingleClick: false,
      accessibilityProvider: new AccessibilityProvider(),
      mouseSupport: false
    }));
    this.reloadDisassembly();
    this._register(this._disassembledInstructions.onDidScroll((e) => {
      if (this._loadingLock) {
        return;
      }
      if (e.oldScrollTop > e.scrollTop && e.scrollTop < e.height) {
        this._loadingLock = true;
        const topElement = Math.floor(e.scrollTop / this.fontInfo.lineHeight) + _h.NUM_INSTRUCTIONS_TO_LOAD;
        this.scrollUp_LoadDisassembledInstructions(_h.NUM_INSTRUCTIONS_TO_LOAD).then((success) => {
          if (success) {
            this._disassembledInstructions.reveal(topElement, 0);
          }
          this._loadingLock = false;
        });
      } else if (e.oldScrollTop < e.scrollTop && e.scrollTop + e.height > e.scrollHeight - e.height) {
        this._loadingLock = true;
        this.scrollDown_LoadDisassembledInstructions(_h.NUM_INSTRUCTIONS_TO_LOAD).then(() => {
          this._loadingLock = false;
        });
      }
    }));
    this._register(this._debugService.getViewModel().onDidFocusStackFrame((stackFrame) => {
      if (this._disassembledInstructions) {
        this.goToAddress();
        this._onDidChangeStackFrame.fire();
      }
    }));
    this._register(this._debugService.getModel().onDidChangeBreakpoints((bpEvent) => {
      var _a2, _b2, _c2;
      if (bpEvent && this._disassembledInstructions) {
        let changed = false;
        (_a2 = bpEvent.added) == null ? void 0 : _a2.forEach((bp) => {
          if (bp instanceof InstructionBreakpoint) {
            const index = this.getIndexFromAddress(bp.instructionReference);
            if (index >= 0) {
              this._disassembledInstructions.row(index).isBreakpointSet = true;
              this._disassembledInstructions.row(index).isBreakpointEnabled = bp.enabled;
              changed = true;
            }
          }
        });
        (_b2 = bpEvent.removed) == null ? void 0 : _b2.forEach((bp) => {
          if (bp instanceof InstructionBreakpoint) {
            const index = this.getIndexFromAddress(bp.instructionReference);
            if (index >= 0) {
              this._disassembledInstructions.row(index).isBreakpointSet = false;
              changed = true;
            }
          }
        });
        (_c2 = bpEvent.changed) == null ? void 0 : _c2.forEach((bp) => {
          if (bp instanceof InstructionBreakpoint) {
            const index = this.getIndexFromAddress(bp.instructionReference);
            if (index >= 0) {
              if (this._disassembledInstructions.row(index).isBreakpointEnabled !== bp.enabled) {
                this._disassembledInstructions.row(index).isBreakpointEnabled = bp.enabled;
                changed = true;
              }
            }
          }
        });
        this._instructionBpList = this._debugService.getModel().getInstructionBreakpoints();
        if (changed) {
          this._onDidChangeStackFrame.fire();
        }
      }
    }));
    this._register(this._debugService.onDidChangeState((e) => {
      var _a2;
      if ((e === 3 || e === 2) && (this._previousDebuggingState !== 3 && this._previousDebuggingState !== 2)) {
        (_a2 = this._disassembledInstructions) == null ? void 0 : _a2.splice(0, this._disassembledInstructions.length, [disassemblyNotAvailable]);
        this._enableSourceCodeRender = this._configurationService.getValue("debug").disassemblyView.showSourceCode;
      }
      this._previousDebuggingState = e;
    }));
  }
  layout(dimension) {
    var _a2;
    (_a2 = this._disassembledInstructions) == null ? void 0 : _a2.layout(dimension.height);
  }
  goToAddress(address, focus) {
    if (!this._disassembledInstructions) {
      return;
    }
    if (!address) {
      address = this.focusedInstructionAddress;
    }
    if (!address) {
      return;
    }
    const index = this.getIndexFromAddress(address);
    if (index >= 0) {
      this._disassembledInstructions.reveal(index);
      if (focus) {
        this._disassembledInstructions.domFocus();
        this._disassembledInstructions.setFocus([index]);
      }
    } else if (this._debugService.state === 2) {
      this.reloadDisassembly(address);
    }
  }
  async scrollUp_LoadDisassembledInstructions(instructionCount) {
    var _a2;
    if (this._disassembledInstructions && this._disassembledInstructions.length > 0) {
      const address = (_a2 = this._disassembledInstructions) == null ? void 0 : _a2.row(0).instruction.address;
      return this.loadDisassembledInstructions(address, -instructionCount, instructionCount);
    }
    return false;
  }
  async scrollDown_LoadDisassembledInstructions(instructionCount) {
    var _a2, _b2;
    if (this._disassembledInstructions && this._disassembledInstructions.length > 0) {
      const address = (_b2 = this._disassembledInstructions) == null ? void 0 : _b2.row(((_a2 = this._disassembledInstructions) == null ? void 0 : _a2.length) - 1).instruction.address;
      return this.loadDisassembledInstructions(address, 1, instructionCount);
    }
    return false;
  }
  async loadDisassembledInstructions(address, instructionOffset, instructionCount) {
    if (!address || address === "-1") {
      address = this.focusedInstructionAddress;
    }
    if (!address) {
      return false;
    }
    const session = this.debugSession;
    const resultEntries = await (session == null ? void 0 : session.disassemble(address, 0, instructionOffset, instructionCount));
    if (session && resultEntries && this._disassembledInstructions) {
      const newEntries = [];
      let lastLocation;
      let lastLine;
      for (let i = 0; i < resultEntries.length; i++) {
        const found = this._instructionBpList.find((p) => p.instructionReference === resultEntries[i].address);
        const instruction = resultEntries[i];
        if (instruction.location) {
          lastLocation = instruction.location;
          lastLine = void 0;
        }
        if (instruction.line) {
          const currentLine = {
            startLineNumber: instruction.line,
            startColumn: instruction.column ?? 0,
            endLineNumber: instruction.endLine ?? instruction.line,
            endColumn: instruction.endColumn ?? 0
          };
          if (!Range.equalsRange(currentLine, lastLine ?? null)) {
            lastLine = currentLine;
            instruction.location = lastLocation;
          }
        }
        newEntries.push({ allowBreakpoint: true, isBreakpointSet: found !== void 0, isBreakpointEnabled: !!(found == null ? void 0 : found.enabled), instruction });
      }
      const specialEntriesToRemove = this._disassembledInstructions.length === 1 ? 1 : 0;
      if (instructionOffset >= 0) {
        this._disassembledInstructions.splice(this._disassembledInstructions.length, specialEntriesToRemove, newEntries);
      } else {
        this._disassembledInstructions.splice(0, specialEntriesToRemove, newEntries);
      }
      return true;
    }
    return false;
  }
  getIndexFromAddress(instructionAddress) {
    const disassembledInstructions = this._disassembledInstructions;
    if (disassembledInstructions && disassembledInstructions.length > 0) {
      const address = BigInt(instructionAddress);
      if (address) {
        return binarySearch2(disassembledInstructions.length, (index) => {
          const row = disassembledInstructions.row(index);
          this.ensureAddressParsed(row);
          if (row.instructionAddress > address) {
            return 1;
          } else if (row.instructionAddress < address) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    }
    return -1;
  }
  ensureAddressParsed(entry) {
    if (entry.instructionAddress !== void 0) {
      return;
    } else {
      entry.instructionAddress = BigInt(entry.instruction.address);
    }
  }
  reloadDisassembly(targetAddress) {
    if (this._disassembledInstructions) {
      this._loadingLock = true;
      this._disassembledInstructions.splice(0, this._disassembledInstructions.length, [disassemblyNotAvailable]);
      this._instructionBpList = this._debugService.getModel().getInstructionBreakpoints();
      this.loadDisassembledInstructions(targetAddress, -_h.NUM_INSTRUCTIONS_TO_LOAD * 4, _h.NUM_INSTRUCTIONS_TO_LOAD * 8).then(() => {
        if (this._disassembledInstructions.length > 0) {
          const targetIndex = Math.floor(this._disassembledInstructions.length / 2);
          this._disassembledInstructions.reveal(targetIndex, 0.5);
          this._disassembledInstructions.domFocus();
          this._disassembledInstructions.setFocus([targetIndex]);
        }
        this._loadingLock = false;
      });
    }
  }
}, _h.NUM_INSTRUCTIONS_TO_LOAD = 50, _h);
DisassemblyView = __decorate([
  __param(0, ITelemetryService),
  __param(1, IThemeService),
  __param(2, IStorageService),
  __param(3, IConfigurationService),
  __param(4, IInstantiationService),
  __param(5, IDebugService)
], DisassemblyView);
let BreakpointRenderer = (_i = class {
  constructor(_disassemblyView, _debugService) {
    this._disassemblyView = _disassemblyView;
    this._debugService = _debugService;
    this.templateId = _i.TEMPLATE_ID;
    this._breakpointIcon = "codicon-" + breakpoint.regular.id;
    this._breakpointDisabledIcon = "codicon-" + breakpoint.disabled.id;
    this._breakpointHintIcon = "codicon-" + debugBreakpointHint.id;
    this._debugStackframe = "codicon-" + debugStackframe.id;
    this._debugStackframeFocused = "codicon-" + debugStackframeFocused.id;
  }
  renderTemplate(container) {
    container.style.alignSelf = "flex-end";
    const icon = append(container, $$a(".disassembly-view"));
    icon.classList.add("codicon");
    icon.style.display = "flex";
    icon.style.alignItems = "center";
    icon.style.justifyContent = "center";
    icon.style.height = this._disassemblyView.fontInfo.lineHeight + "px";
    const currentElement = { element: void 0 };
    const disposables = [
      this._disassemblyView.onDidChangeStackFrame(() => this.rerenderDebugStackframe(icon, currentElement.element)),
      addStandardDisposableListener(container, "mouseover", () => {
        var _a2;
        if ((_a2 = currentElement.element) == null ? void 0 : _a2.allowBreakpoint) {
          icon.classList.add(this._breakpointHintIcon);
        }
      }),
      addStandardDisposableListener(container, "mouseout", () => {
        var _a2;
        if ((_a2 = currentElement.element) == null ? void 0 : _a2.allowBreakpoint) {
          icon.classList.remove(this._breakpointHintIcon);
        }
      }),
      addStandardDisposableListener(container, "click", () => {
        var _a2;
        if ((_a2 = currentElement.element) == null ? void 0 : _a2.allowBreakpoint) {
          icon.classList.add(this._breakpointHintIcon);
          if (currentElement.element.isBreakpointSet) {
            this._debugService.removeInstructionBreakpoints(currentElement.element.instruction.address);
          } else if (currentElement.element.allowBreakpoint && !currentElement.element.isBreakpointSet) {
            this._debugService.addInstructionBreakpoint(currentElement.element.instruction.address, 0);
          }
        }
      })
    ];
    return { currentElement, icon, disposables };
  }
  renderElement(element, index, templateData, height) {
    templateData.currentElement.element = element;
    this.rerenderDebugStackframe(templateData.icon, element);
  }
  disposeTemplate(templateData) {
    dispose(templateData.disposables);
    templateData.disposables = [];
  }
  rerenderDebugStackframe(icon, element) {
    if ((element == null ? void 0 : element.instruction.address) === this._disassemblyView.focusedCurrentInstructionAddress) {
      icon.classList.add(this._debugStackframe);
    } else if ((element == null ? void 0 : element.instruction.address) === this._disassemblyView.focusedInstructionAddress) {
      icon.classList.add(this._debugStackframeFocused);
    } else {
      icon.classList.remove(this._debugStackframe);
      icon.classList.remove(this._debugStackframeFocused);
    }
    icon.classList.remove(this._breakpointHintIcon);
    if (element == null ? void 0 : element.isBreakpointSet) {
      if (element.isBreakpointEnabled) {
        icon.classList.add(this._breakpointIcon);
        icon.classList.remove(this._breakpointDisabledIcon);
      } else {
        icon.classList.remove(this._breakpointIcon);
        icon.classList.add(this._breakpointDisabledIcon);
      }
    } else {
      icon.classList.remove(this._breakpointIcon);
      icon.classList.remove(this._breakpointDisabledIcon);
    }
  }
}, _i.TEMPLATE_ID = "breakpoint", _i);
BreakpointRenderer = __decorate([
  __param(1, IDebugService)
], BreakpointRenderer);
let InstructionRenderer = (_j = class extends Disposable {
  constructor(_disassemblyView, themeService, editorService, textModelService, uriService, logService) {
    super();
    this._disassemblyView = _disassemblyView;
    this.editorService = editorService;
    this.textModelService = textModelService;
    this.uriService = uriService;
    this.logService = logService;
    this.templateId = _j.TEMPLATE_ID;
    this._topStackFrameColor = themeService.getColorTheme().getColor(topStackFrameColor);
    this._focusedStackFrameColor = themeService.getColorTheme().getColor(focusedStackFrameColor);
    this._register(themeService.onDidColorThemeChange((e) => {
      this._topStackFrameColor = e.getColor(topStackFrameColor);
      this._focusedStackFrameColor = e.getColor(focusedStackFrameColor);
    }));
  }
  renderTemplate(container) {
    const sourcecode = append(container, $$a(".sourcecode"));
    const instruction = append(container, $$a(".instruction"));
    this.applyFontInfo(sourcecode);
    this.applyFontInfo(instruction);
    const currentElement = { element: void 0 };
    const cellDisposable = [];
    const disposables = [
      this._disassemblyView.onDidChangeStackFrame(() => this.rerenderBackground(instruction, sourcecode, currentElement.element)),
      addStandardDisposableListener(sourcecode, "dblclick", () => {
        var _a2;
        return this.openSourceCode((_a2 = currentElement.element) == null ? void 0 : _a2.instruction);
      })
    ];
    return { currentElement, instruction, sourcecode, cellDisposable, disposables };
  }
  renderElement(element, index, templateData, height) {
    this.renderElementInner(element, index, templateData, height);
  }
  async renderElementInner(element, index, templateData, height) {
    var _a2;
    templateData.currentElement.element = element;
    const instruction = element.instruction;
    templateData.sourcecode.innerText = "";
    const sb = new StringBuilder(1e3);
    if (this._disassemblyView.isSourceCodeRender && ((_a2 = instruction.location) == null ? void 0 : _a2.path) && instruction.line) {
      const sourceURI = this.getUriFromSource(instruction);
      if (sourceURI) {
        let textModel = void 0;
        const sourceSB = new StringBuilder(1e4);
        const ref = await this.textModelService.createModelReference(sourceURI);
        textModel = ref.object.textEditorModel;
        templateData.cellDisposable.push(ref);
        if (textModel && templateData.currentElement.element === element) {
          let lineNumber = instruction.line;
          while (lineNumber && lineNumber >= 1 && lineNumber <= textModel.getLineCount()) {
            const lineContent = textModel.getLineContent(lineNumber);
            sourceSB.appendString(`  ${lineNumber}: `);
            sourceSB.appendString(lineContent + "\n");
            if (instruction.endLine && lineNumber < instruction.endLine) {
              lineNumber++;
              continue;
            }
            break;
          }
          templateData.sourcecode.innerText = sourceSB.build();
        }
      }
    }
    let spacesToAppend = 10;
    if (instruction.address !== "-1") {
      sb.appendString(instruction.address);
      if (instruction.address.length < _j.INSTRUCTION_ADDR_MIN_LENGTH) {
        spacesToAppend = _j.INSTRUCTION_ADDR_MIN_LENGTH - instruction.address.length;
      }
      for (let i = 0; i < spacesToAppend; i++) {
        sb.appendString(" ");
      }
    }
    if (instruction.instructionBytes) {
      sb.appendString(instruction.instructionBytes);
      spacesToAppend = 10;
      if (instruction.instructionBytes.length < _j.INSTRUCTION_BYTES_MIN_LENGTH) {
        spacesToAppend = _j.INSTRUCTION_BYTES_MIN_LENGTH - instruction.instructionBytes.length;
      }
      for (let i = 0; i < spacesToAppend; i++) {
        sb.appendString(" ");
      }
    }
    sb.appendString(instruction.instruction);
    templateData.instruction.innerText = sb.build();
    this.rerenderBackground(templateData.instruction, templateData.sourcecode, element);
  }
  disposeElement(element, index, templateData, height) {
    dispose(templateData.cellDisposable);
    templateData.cellDisposable = [];
  }
  disposeTemplate(templateData) {
    dispose(templateData.disposables);
    templateData.disposables = [];
  }
  rerenderBackground(instruction, sourceCode, element) {
    var _a2, _b2;
    if (element && this._disassemblyView.currentInstructionAddresses.includes(element.instruction.address)) {
      instruction.style.background = ((_a2 = this._topStackFrameColor) == null ? void 0 : _a2.toString()) || "transparent";
    } else if ((element == null ? void 0 : element.instruction.address) === this._disassemblyView.focusedInstructionAddress) {
      instruction.style.background = ((_b2 = this._focusedStackFrameColor) == null ? void 0 : _b2.toString()) || "transparent";
    } else {
      instruction.style.background = "transparent";
    }
  }
  openSourceCode(instruction) {
    if (instruction) {
      const sourceURI = this.getUriFromSource(instruction);
      const selection = instruction.endLine ? {
        startLineNumber: instruction.line,
        endLineNumber: instruction.endLine,
        startColumn: instruction.column || 1,
        endColumn: instruction.endColumn || 1073741824
      } : {
        startLineNumber: instruction.line,
        endLineNumber: instruction.line,
        startColumn: instruction.column || 1,
        endColumn: instruction.endColumn || 1073741824
      };
      this.editorService.openEditor({
        resource: sourceURI,
        description: localize("editorOpenedFromDisassemblyDescription", "from disassembly"),
        options: {
          preserveFocus: false,
          selection,
          revealIfOpened: true,
          selectionRevealType: 1,
          pinned: false
        }
      });
    }
  }
  getUriFromSource(instruction) {
    const path = instruction.location.path;
    if (path && isUri(path)) {
      return this.uriService.asCanonicalUri(URI.parse(path));
    }
    if (path && isAbsolute(path)) {
      return this.uriService.asCanonicalUri(URI.file(path));
    }
    return getUriFromSource(instruction.location, instruction.location.path, this._disassemblyView.debugSession.getId(), this.uriService, this.logService);
  }
  applyFontInfo(element) {
    applyFontInfo(element, this._disassemblyView.fontInfo);
    element.style.whiteSpace = "pre";
  }
}, _j.TEMPLATE_ID = "instruction", _j.INSTRUCTION_ADDR_MIN_LENGTH = 25, _j.INSTRUCTION_BYTES_MIN_LENGTH = 30, _j);
InstructionRenderer = __decorate([
  __param(1, IThemeService),
  __param(2, IEditorService),
  __param(3, ITextModelService),
  __param(4, IUriIdentityService),
  __param(5, ILogService)
], InstructionRenderer);
class AccessibilityProvider {
  getWidgetAriaLabel() {
    return localize("disassemblyView", "Disassembly View");
  }
  getAriaLabel(element) {
    let label = "";
    const instruction = element.instruction;
    if (instruction.address !== "-1") {
      label += `${localize("instructionAddress", "Address")}: ${instruction.address}`;
    }
    if (instruction.instructionBytes) {
      label += `, ${localize("instructionBytes", "Bytes")}: ${instruction.instructionBytes}`;
    }
    label += `, ${localize(`instructionText`, "Instruction")}: ${instruction.instruction}`;
    return label;
  }
}
let DisassemblyViewContribution = class DisassemblyViewContribution2 {
  constructor(editorService, debugService, contextKeyService) {
    contextKeyService.bufferChangeEvents(() => {
      this._languageSupportsDisassemleRequest = CONTEXT_LANGUAGE_SUPPORTS_DISASSEMBLE_REQUEST.bindTo(contextKeyService);
    });
    const onDidActiveEditorChangeListener = () => {
      var _a2, _b2, _c2;
      if (this._onDidChangeModelLanguage) {
        this._onDidChangeModelLanguage.dispose();
        this._onDidChangeModelLanguage = void 0;
      }
      const activeTextEditorControl = editorService.activeTextEditorControl;
      if (isCodeEditor(activeTextEditorControl)) {
        const language2 = (_a2 = activeTextEditorControl.getModel()) == null ? void 0 : _a2.getLanguageId();
        (_b2 = this._languageSupportsDisassemleRequest) == null ? void 0 : _b2.set(!!language2 && debugService.getAdapterManager().someDebuggerInterestedInLanguage(language2));
        this._onDidChangeModelLanguage = activeTextEditorControl.onDidChangeModelLanguage((e) => {
          var _a3;
          (_a3 = this._languageSupportsDisassemleRequest) == null ? void 0 : _a3.set(debugService.getAdapterManager().someDebuggerInterestedInLanguage(e.newLanguage));
        });
      } else {
        (_c2 = this._languageSupportsDisassemleRequest) == null ? void 0 : _c2.set(false);
      }
    };
    onDidActiveEditorChangeListener();
    this._onDidActiveEditorChangeListener = editorService.onDidActiveEditorChange(onDidActiveEditorChangeListener);
  }
  dispose() {
    var _a2;
    this._onDidActiveEditorChangeListener.dispose();
    (_a2 = this._onDidChangeModelLanguage) == null ? void 0 : _a2.dispose();
  }
};
DisassemblyViewContribution = __decorate([
  __param(0, IEditorService),
  __param(1, IDebugService),
  __param(2, IContextKeyService)
], DisassemblyViewContribution);
let DebugContentProvider = class DebugContentProvider2 {
  constructor(textModelResolverService, debugService, modelService, languageService, editorWorkerService) {
    this.debugService = debugService;
    this.modelService = modelService;
    this.languageService = languageService;
    this.editorWorkerService = editorWorkerService;
    this.pendingUpdates = /* @__PURE__ */ new Map();
    textModelResolverService.registerTextModelContentProvider(DEBUG_SCHEME, this);
    DebugContentProvider2.INSTANCE = this;
  }
  dispose() {
    this.pendingUpdates.forEach((cancellationSource) => cancellationSource.dispose());
  }
  provideTextContent(resource) {
    return this.createOrUpdateContentModel(resource, true);
  }
  static refreshDebugContent(resource) {
    var _a2;
    (_a2 = DebugContentProvider2.INSTANCE) == null ? void 0 : _a2.createOrUpdateContentModel(resource, false);
  }
  createOrUpdateContentModel(resource, createIfNotExists) {
    const model = this.modelService.getModel(resource);
    if (!model && !createIfNotExists) {
      return null;
    }
    let session;
    if (resource.query) {
      const data = Source.getEncodedDebugData(resource);
      session = this.debugService.getModel().getSession(data.sessionId);
    }
    if (!session) {
      session = this.debugService.getViewModel().focusedSession;
    }
    if (!session) {
      return Promise.reject(new ErrorNoTelemetry(localize("unable", "Unable to resolve the resource without a debug session")));
    }
    const createErrModel = (errMsg) => {
      this.debugService.sourceIsNotAvailable(resource);
      const languageSelection = this.languageService.createById(PLAINTEXT_LANGUAGE_ID);
      const message = errMsg ? localize(
        "canNotResolveSourceWithError",
        "Could not load source '{0}': {1}.",
        resource.path,
        errMsg
      ) : localize("canNotResolveSource", "Could not load source '{0}'.", resource.path);
      return this.modelService.createModel(message, languageSelection, resource);
    };
    return session.loadSource(resource).then((response) => {
      if (response && response.body) {
        if (model) {
          const newContent = response.body.content;
          const cancellationSource = this.pendingUpdates.get(model.id);
          cancellationSource == null ? void 0 : cancellationSource.cancel();
          const myToken = new CancellationTokenSource();
          this.pendingUpdates.set(model.id, myToken);
          return this.editorWorkerService.computeMoreMinimalEdits(model.uri, [{ text: newContent, range: model.getFullModelRange() }]).then((edits) => {
            this.pendingUpdates.delete(model.id);
            if (!myToken.token.isCancellationRequested && edits && edits.length > 0) {
              model.applyEdits(edits.map((edit) => EditOperation.replace(Range.lift(edit.range), edit.text)));
            }
            return model;
          });
        } else {
          const mime = response.body.mimeType || getMimeTypes(resource)[0];
          const languageSelection = this.languageService.createByMimeType(mime);
          return this.modelService.createModel(response.body.content, languageSelection, resource);
        }
      }
      return createErrModel();
    }, (err) => createErrModel(err.message));
  }
};
DebugContentProvider = __decorate([
  __param(0, ITextModelService),
  __param(1, IDebugService),
  __param(2, IModelService),
  __param(3, ILanguageService),
  __param(4, IEditorWorkerService)
], DebugContentProvider);
const NEW_STYLE_COMPRESS = true;
const URI_SCHEMA_PATTERN = /^[a-zA-Z][a-zA-Z0-9\+\-\.]+:/;
class BaseTreeItem {
  constructor(_parent, _label, isIncompressible = false) {
    this._parent = _parent;
    this._label = _label;
    this.isIncompressible = isIncompressible;
    this._children = /* @__PURE__ */ new Map();
    this._showedMoreThanOne = false;
  }
  updateLabel(label) {
    this._label = label;
  }
  isLeaf() {
    return this._children.size === 0;
  }
  getSession() {
    if (this._parent) {
      return this._parent.getSession();
    }
    return void 0;
  }
  setSource(session, source) {
    this._source = source;
    this._children.clear();
    if (source.raw && source.raw.sources) {
      for (const src of source.raw.sources) {
        if (src.name && src.path) {
          const s = new BaseTreeItem(this, src.name);
          this._children.set(src.path, s);
          const ss = session.getSource(src);
          s.setSource(session, ss);
        }
      }
    }
  }
  createIfNeeded(key, factory) {
    let child = this._children.get(key);
    if (!child) {
      child = factory(this, key);
      this._children.set(key, child);
    }
    return child;
  }
  getChild(key) {
    return this._children.get(key);
  }
  remove(key) {
    this._children.delete(key);
  }
  removeFromParent() {
    if (this._parent) {
      this._parent.remove(this._label);
      if (this._parent._children.size === 0) {
        this._parent.removeFromParent();
      }
    }
  }
  getTemplateId() {
    return "id";
  }
  getId() {
    const parent = this.getParent();
    return parent ? `${parent.getId()}/${this.getInternalId()}` : this.getInternalId();
  }
  getInternalId() {
    return this._label;
  }
  getParent() {
    if (this._parent) {
      if (this._parent.isSkipped()) {
        return this._parent.getParent();
      }
      return this._parent;
    }
    return void 0;
  }
  isSkipped() {
    if (this._parent) {
      if (this._parent.oneChild()) {
        return true;
      }
      return false;
    }
    return true;
  }
  hasChildren() {
    const child = this.oneChild();
    if (child) {
      return child.hasChildren();
    }
    return this._children.size > 0;
  }
  getChildren() {
    const child = this.oneChild();
    if (child) {
      return child.getChildren();
    }
    const array = [];
    for (const child2 of this._children.values()) {
      array.push(child2);
    }
    return array.sort((a, b) => this.compare(a, b));
  }
  getLabel(separateRootFolder = true) {
    const child = this.oneChild();
    if (child) {
      const sep = this instanceof RootFolderTreeItem && separateRootFolder ? " • " : posix.sep;
      return `${this._label}${sep}${child.getLabel()}`;
    }
    return this._label;
  }
  getHoverLabel() {
    if (this._source && this._parent && this._parent._source) {
      return this._source.raw.path || this._source.raw.name;
    }
    const label = this.getLabel(false);
    const parent = this.getParent();
    if (parent) {
      const hover = parent.getHoverLabel();
      if (hover) {
        return `${hover}/${label}`;
      }
    }
    return label;
  }
  getSource() {
    const child = this.oneChild();
    if (child) {
      return child.getSource();
    }
    return this._source;
  }
  compare(a, b) {
    if (a._label && b._label) {
      return a._label.localeCompare(b._label);
    }
    return 0;
  }
  oneChild() {
    if (!this._source && !this._showedMoreThanOne && this.skipOneChild()) {
      if (this._children.size === 1) {
        return this._children.values().next().value;
      }
      if (this._children.size > 1) {
        this._showedMoreThanOne = true;
      }
    }
    return void 0;
  }
  skipOneChild() {
    {
      return this instanceof RootTreeItem;
    }
  }
}
class RootFolderTreeItem extends BaseTreeItem {
  constructor(parent, folder) {
    super(parent, folder.name, true);
    this.folder = folder;
  }
}
class RootTreeItem extends BaseTreeItem {
  constructor(_pathService, _contextService, _labelService) {
    super(void 0, "Root");
    this._pathService = _pathService;
    this._contextService = _contextService;
    this._labelService = _labelService;
  }
  add(session) {
    return this.createIfNeeded(session.getId(), () => new SessionTreeItem(this._labelService, this, session, this._pathService, this._contextService));
  }
  find(session) {
    return this.getChild(session.getId());
  }
}
const _SessionTreeItem = class _SessionTreeItem extends BaseTreeItem {
  constructor(labelService, parent, session, _pathService, rootProvider) {
    super(parent, session.getLabel(), true);
    this._pathService = _pathService;
    this.rootProvider = rootProvider;
    this._map = /* @__PURE__ */ new Map();
    this._labelService = labelService;
    this._session = session;
  }
  getInternalId() {
    return this._session.getId();
  }
  getSession() {
    return this._session;
  }
  getHoverLabel() {
    return void 0;
  }
  hasChildren() {
    return true;
  }
  compare(a, b) {
    const acat = this.category(a);
    const bcat = this.category(b);
    if (acat !== bcat) {
      return acat - bcat;
    }
    return super.compare(a, b);
  }
  category(item) {
    if (item instanceof RootFolderTreeItem) {
      return item.folder.index;
    }
    const l = item.getLabel();
    if (l && /^<.+>$/.test(l)) {
      return 1e3;
    }
    return 999;
  }
  async addPath(source) {
    let folder;
    let url;
    let path = source.raw.path;
    if (!path) {
      return;
    }
    if (this._labelService && URI_SCHEMA_PATTERN.test(path)) {
      path = this._labelService.getUriLabel(URI.parse(path));
    }
    const match = _SessionTreeItem.URL_REGEXP.exec(path);
    if (match && match.length === 3) {
      url = match[1];
      path = decodeURI(match[2]);
    } else {
      if (isAbsolute(path)) {
        const resource = URI.file(path);
        folder = this.rootProvider ? this.rootProvider.getWorkspaceFolder(resource) : null;
        if (folder) {
          path = normalize(ltrim(resource.path.substring(folder.uri.path.length), posix.sep));
          const hasMultipleRoots = this.rootProvider.getWorkspace().folders.length > 1;
          if (hasMultipleRoots) {
            path = posix.sep + path;
          } else {
            folder = null;
          }
        } else {
          path = normalize(path);
          if (isWindows) {
            path = normalizeDriveLetter(path);
          } else {
            path = tildify(path, (await this._pathService.userHome()).fsPath);
          }
        }
      }
    }
    let leaf = this;
    path.split(/[\/\\]/).forEach((segment, i) => {
      if (i === 0 && folder) {
        const f = folder;
        leaf = leaf.createIfNeeded(folder.name, (parent) => new RootFolderTreeItem(parent, f));
      } else if (i === 0 && url) {
        leaf = leaf.createIfNeeded(url, (parent) => new BaseTreeItem(parent, url));
      } else {
        leaf = leaf.createIfNeeded(segment, (parent) => new BaseTreeItem(parent, segment));
      }
    });
    leaf.setSource(this._session, source);
    if (source.raw.path) {
      this._map.set(source.raw.path, leaf);
    }
  }
  removePath(source) {
    if (source.raw.path) {
      const leaf = this._map.get(source.raw.path);
      if (leaf) {
        leaf.removeFromParent();
        return true;
      }
    }
    return false;
  }
};
_SessionTreeItem.URL_REGEXP = /^(https?:\/\/[^/]+)(\/.*)$/;
let SessionTreeItem = _SessionTreeItem;
function asTreeElement(item, viewState) {
  const children = item.getChildren();
  const collapsed = viewState ? !viewState.expanded.has(item.getId()) : !(item instanceof SessionTreeItem);
  return {
    element: item,
    collapsed,
    collapsible: item.hasChildren(),
    children: children.map((i) => asTreeElement(i, viewState))
  };
}
let LoadedScriptsView = class LoadedScriptsView2 extends ViewPane {
  constructor(options, contextMenuService, keybindingService, instantiationService, viewDescriptorService, configurationService, editorService, contextKeyService, contextService, debugService, labelService, pathService, openerService, themeService, telemetryService) {
    super(options, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, telemetryService);
    this.editorService = editorService;
    this.contextService = contextService;
    this.debugService = debugService;
    this.labelService = labelService;
    this.pathService = pathService;
    this.treeNeedsRefreshOnVisible = false;
    this.loadedScriptsItemType = CONTEXT_LOADED_SCRIPTS_ITEM_TYPE.bindTo(contextKeyService);
  }
  renderBody(container) {
    super.renderBody(container);
    this.element.classList.add("debug-pane");
    container.classList.add("debug-loaded-scripts");
    container.classList.add("show-file-icons");
    this.treeContainer = renderViewTree(container);
    this.filter = new LoadedScriptsFilter();
    const root = new RootTreeItem(this.pathService, this.contextService, this.labelService);
    this.treeLabels = this.instantiationService.createInstance(ResourceLabels, { onDidChangeVisibility: this.onDidChangeBodyVisibility });
    this._register(this.treeLabels);
    this.tree = this.instantiationService.createInstance(WorkbenchCompressibleObjectTree, "LoadedScriptsView", this.treeContainer, new LoadedScriptsDelegate(), [new LoadedScriptsRenderer(this.treeLabels)], {
      compressionEnabled: NEW_STYLE_COMPRESS,
      collapseByDefault: true,
      hideTwistiesOfChildlessElements: true,
      identityProvider: {
        getId: (element) => element.getId()
      },
      keyboardNavigationLabelProvider: {
        getKeyboardNavigationLabel: (element) => {
          return element.getLabel();
        },
        getCompressedNodeKeyboardNavigationLabel: (elements) => {
          return elements.map((e) => e.getLabel()).join("/");
        }
      },
      filter: this.filter,
      accessibilityProvider: new LoadedSciptsAccessibilityProvider(),
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      }
    });
    const updateView = (viewState2) => this.tree.setChildren(null, asTreeElement(root, viewState2).children);
    updateView();
    this.changeScheduler = new RunOnceScheduler(() => {
      this.treeNeedsRefreshOnVisible = false;
      if (this.tree) {
        updateView();
      }
    }, 300);
    this._register(this.changeScheduler);
    this._register(this.tree.onDidOpen((e) => {
      if (e.element instanceof BaseTreeItem) {
        const source = e.element.getSource();
        if (source && source.available) {
          const nullRange = { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 };
          source.openInEditor(this.editorService, nullRange, e.editorOptions.preserveFocus, e.sideBySide, e.editorOptions.pinned);
        }
      }
    }));
    this._register(this.tree.onDidChangeFocus(() => {
      const focus = this.tree.getFocus();
      if (focus instanceof SessionTreeItem) {
        this.loadedScriptsItemType.set("session");
      } else {
        this.loadedScriptsItemType.reset();
      }
    }));
    const scheduleRefreshOnVisible = () => {
      if (this.isBodyVisible()) {
        this.changeScheduler.schedule();
      } else {
        this.treeNeedsRefreshOnVisible = true;
      }
    };
    const addSourcePathsToSession = async (session) => {
      if (session.capabilities.supportsLoadedSourcesRequest) {
        const sessionNode = root.add(session);
        const paths = await session.getLoadedSources();
        for (const path of paths) {
          await sessionNode.addPath(path);
        }
        scheduleRefreshOnVisible();
      }
    };
    const registerSessionListeners = (session) => {
      this._register(session.onDidChangeName(async () => {
        const sessionRoot = root.find(session);
        if (sessionRoot) {
          sessionRoot.updateLabel(session.getLabel());
          scheduleRefreshOnVisible();
        }
      }));
      this._register(session.onDidLoadedSource(async (event) => {
        let sessionRoot;
        switch (event.reason) {
          case "new":
          case "changed":
            sessionRoot = root.add(session);
            await sessionRoot.addPath(event.source);
            scheduleRefreshOnVisible();
            if (event.reason === "changed") {
              DebugContentProvider.refreshDebugContent(event.source.uri);
            }
            break;
          case "removed":
            sessionRoot = root.find(session);
            if (sessionRoot && sessionRoot.removePath(event.source)) {
              scheduleRefreshOnVisible();
            }
            break;
          default:
            this.filter.setFilter(event.source.name);
            this.tree.refilter();
            break;
        }
      }));
    };
    this._register(this.debugService.onDidNewSession(registerSessionListeners));
    this.debugService.getModel().getSessions().forEach(registerSessionListeners);
    this._register(this.debugService.onDidEndSession((session) => {
      root.remove(session.getId());
      this.changeScheduler.schedule();
    }));
    this.changeScheduler.schedule(0);
    this._register(this.onDidChangeBodyVisibility((visible) => {
      if (visible && this.treeNeedsRefreshOnVisible) {
        this.changeScheduler.schedule();
      }
    }));
    let viewState;
    this._register(this.tree.onDidChangeFindPattern((pattern) => {
      if (this.tree.findMode === TreeFindMode.Highlight) {
        return;
      }
      if (!viewState && pattern) {
        const expanded = /* @__PURE__ */ new Set();
        const visit2 = (node) => {
          if (node.element && !node.collapsed) {
            expanded.add(node.element.getId());
          }
          for (const child of node.children) {
            visit2(child);
          }
        };
        visit2(this.tree.getNode());
        viewState = { expanded };
        this.tree.expandAll();
      } else if (!pattern && viewState) {
        this.tree.setFocus([]);
        updateView(viewState);
        viewState = void 0;
      }
    }));
    this.debugService.getModel().getSessions().forEach((session) => addSourcePathsToSession(session));
  }
  layoutBody(height, width) {
    super.layoutBody(height, width);
    this.tree.layout(height, width);
  }
  dispose() {
    dispose(this.tree);
    dispose(this.treeLabels);
    super.dispose();
  }
};
LoadedScriptsView = __decorate([
  __param(1, IContextMenuService),
  __param(2, IKeybindingService),
  __param(3, IInstantiationService),
  __param(4, IViewDescriptorService),
  __param(5, IConfigurationService),
  __param(6, IEditorService),
  __param(7, IContextKeyService),
  __param(8, IWorkspaceContextService),
  __param(9, IDebugService),
  __param(10, ILabelService),
  __param(11, IPathService),
  __param(12, IOpenerService),
  __param(13, IThemeService),
  __param(14, ITelemetryService)
], LoadedScriptsView);
class LoadedScriptsDelegate {
  getHeight(element) {
    return 22;
  }
  getTemplateId(element) {
    return LoadedScriptsRenderer.ID;
  }
}
const _LoadedScriptsRenderer = class _LoadedScriptsRenderer {
  constructor(labels) {
    this.labels = labels;
  }
  get templateId() {
    return _LoadedScriptsRenderer.ID;
  }
  renderTemplate(container) {
    const label = this.labels.create(container, { supportHighlights: true });
    return { label };
  }
  renderElement(node, index, data) {
    const element = node.element;
    const label = element.getLabel();
    this.render(element, label, data, node.filterData);
  }
  renderCompressedElements(node, index, data, height) {
    const element = node.element.elements[node.element.elements.length - 1];
    const labels = node.element.elements.map((e) => e.getLabel());
    this.render(element, labels, data, node.filterData);
  }
  render(element, labels, data, filterData) {
    const label = {
      name: labels
    };
    const options = {
      title: element.getHoverLabel()
    };
    if (element instanceof RootFolderTreeItem) {
      options.fileKind = FileKind.ROOT_FOLDER;
    } else if (element instanceof SessionTreeItem) {
      options.title = localize("loadedScriptsSession", "Debug Session");
      options.hideIcon = true;
    } else if (element instanceof BaseTreeItem) {
      const src = element.getSource();
      if (src && src.uri) {
        label.resource = src.uri;
        options.fileKind = FileKind.FILE;
      } else {
        options.fileKind = FileKind.FOLDER;
      }
    }
    options.matches = createMatches(filterData);
    data.label.setResource(label, options);
  }
  disposeTemplate(templateData) {
    templateData.label.dispose();
  }
};
_LoadedScriptsRenderer.ID = "lsrenderer";
let LoadedScriptsRenderer = _LoadedScriptsRenderer;
class LoadedSciptsAccessibilityProvider {
  getWidgetAriaLabel() {
    return localize(
      { comment: ["Debug is a noun in this context, not a verb."], key: "loadedScriptsAriaLabel" },
      "Debug Loaded Scripts"
    );
  }
  getAriaLabel(element) {
    if (element instanceof RootFolderTreeItem) {
      return localize(
        "loadedScriptsRootFolderAriaLabel",
        "Workspace folder {0}, loaded script, debug",
        element.getLabel()
      );
    }
    if (element instanceof SessionTreeItem) {
      return localize(
        "loadedScriptsSessionAriaLabel",
        "Session {0}, loaded script, debug",
        element.getLabel()
      );
    }
    if (element.hasChildren()) {
      return localize(
        "loadedScriptsFolderAriaLabel",
        "Folder {0}, loaded script, debug",
        element.getLabel()
      );
    } else {
      return localize(
        "loadedScriptsSourceAriaLabel",
        "{0}, loaded script, debug",
        element.getLabel()
      );
    }
  }
}
class LoadedScriptsFilter {
  setFilter(filterText) {
    this.filterText = filterText;
  }
  filter(element, parentVisibility) {
    if (!this.filterText) {
      return 1;
    }
    if (element.isLeaf()) {
      const name = element.getLabel();
      if (name.indexOf(this.filterText) >= 0) {
        return 1;
      }
      return 0;
    }
    return 2;
  }
}
var css = ".monaco-workbench .repl{box-sizing:border-box;height:100%;overflow:hidden}.monaco-workbench .repl .repl-tree .monaco-tl-contents{user-select:text;-webkit-user-select:text;white-space:pre}.monaco-workbench .repl .repl-tree .monaco-tl-contents .expression{font-family:var(--vscode-repl-font-family);font-size:var(--vscode-repl-font-size);line-height:var(--vscode-repl-line-height)}.monaco-workbench .repl .repl-tree .monaco-tl-contents .expression .lazy-button{cursor:pointer}.monaco-workbench .repl .repl-tree .monaco-tl-twistie{background-position-y:calc(100% - var(--vscode-repl-font-size-for-twistie))}.monaco-workbench .repl .repl-tree.word-wrap .monaco-tl-contents{word-wrap:break-word;white-space:pre-wrap;word-break:break-all}.monaco-workbench .repl .repl-tree.word-wrap .monaco-tl-contents .expression.nested-variable{white-space:pre}.monaco-workbench .repl .repl-tree .monaco-tl-twistie,.monaco-workbench .repl .repl-tree .monaco-tl-twistie.collapsible+.monaco-tl-contents{cursor:pointer}.monaco-workbench .repl .repl-tree .output.expression.value-and-source{display:flex}.monaco-workbench .repl .repl-tree .output.expression.value-and-source .count-badge-wrapper,.monaco-workbench .repl .repl-tree .output.expression.value-and-source .value{margin-right:4px}.monaco-workbench .repl .repl-tree .output.expression.value-and-source .count-badge-wrapper .monaco-count-badge{min-height:16px;word-break:keep-all}.monaco-workbench .repl .repl-tree .monaco-tl-contents .arrow{left:2px;position:absolute}.monaco-workbench .repl .repl-tree .output.expression.value-and-source .source{cursor:pointer;direction:rtl;margin-left:auto;margin-right:8px;max-width:400px;overflow:hidden;text-align:right;text-decoration:underline;text-overflow:ellipsis;white-space:nowrap}.monaco-workbench .repl .repl-tree .evaluation-result.expression>.value,.monaco-workbench .repl .repl-tree .output.expression>.value{margin-left:0}.monaco-workbench .repl .repl-tree .output.expression .name:not(:empty){margin-right:6px}.monaco-workbench .repl .repl-input-wrapper{align-items:center;display:flex}.monaco-workbench .repl .repl-input-wrapper .suggest-status-bar .monaco-action-bar.right{display:none}.monaco-workbench .repl .repl-input-wrapper .repl-input-chevron{display:flex;flex-shrink:0;font-weight:600;height:100%;justify-content:center;padding:0 6px 0 8px;width:16px}.monaco-workbench .repl .repl-tree .output.expression>.ignore{font-style:italic}.monaco-workbench .repl .repl-tree .output.expression .code-bold{font-weight:700}.monaco-workbench .repl .repl-tree .output.expression .code-italic{font-style:italic}.monaco-workbench .repl .repl-tree .output.expression .code-underline{text-decoration:underline;text-decoration-style:solid}.monaco-workbench .repl .repl-tree .output.expression .code-double-underline{text-decoration:underline;text-decoration-style:double}.monaco-workbench .repl .repl-tree .output.expression .code-strike-through{text-decoration:line-through;text-decoration-style:solid}.monaco-workbench .repl .repl-tree .output.expression .code-overline{text-decoration:overline;text-decoration-style:solid}.monaco-workbench .repl .repl-tree .output.expression .code-overline.code-underline.code-strike-through{text-decoration:overline underline line-through;text-decoration-style:solid}.monaco-workbench .repl .repl-tree .output.expression .code-overline.code-underline{text-decoration:overline underline;text-decoration-style:solid}.monaco-workbench .repl .repl-tree .output.expression .code-overline.code-strike-through{text-decoration:overline line-through;text-decoration-style:solid}.monaco-workbench .repl .repl-tree .output.expression .code-underline.code-strike-through{text-decoration:underline line-through;text-decoration-style:solid}.monaco-workbench .repl .repl-tree .output.expression .code-overline.code-double-underline.code-strike-through{text-decoration:overline underline line-through;text-decoration-style:double}.monaco-workbench .repl .repl-tree .output.expression .code-overline.code-double-underline{text-decoration:overline underline;text-decoration-style:double}.monaco-workbench .repl .repl-tree .output.expression .code-double-underline.code-strike-through{text-decoration:underline line-through;text-decoration-style:double}.monaco-workbench .repl .repl-tree .output.expression .code-dim{opacity:.4}.monaco-workbench .repl .repl-tree .output.expression .code-hidden{opacity:0}.monaco-workbench .repl .repl-tree .output.expression .code-blink{animation:code-blink-key 1s cubic-bezier(1,0,0,1) infinite alternate}.monaco-workbench .repl .repl-tree .output.expression .code-rapid-blink{animation:code-blink-key .3s cubic-bezier(1,0,0,1) infinite alternate}@keyframes code-blink-key{to{opacity:.4}}.monaco-workbench .repl .repl-tree .output.expression .code-subscript{font-size:smaller;line-height:normal;vertical-align:sub}.monaco-workbench .repl .repl-tree .output.expression .code-superscript{font-size:smaller;line-height:normal;vertical-align:super}";
n(css, {});
const _ReplFilter = class _ReplFilter {
  constructor() {
    this._parsedQueries = [];
  }
  set filterQuery(query) {
    this._parsedQueries = [];
    query = query.trim();
    if (query && query !== "") {
      const filters = splitGlobAware(query, ",").map((s) => s.trim()).filter((s) => !!s.length);
      for (const f of filters) {
        if (f.startsWith("!")) {
          this._parsedQueries.push({ type: "exclude", query: f.slice(1) });
        } else {
          this._parsedQueries.push({ type: "include", query: f });
        }
      }
    }
  }
  filter(element, parentVisibility) {
    if (element instanceof ReplEvaluationInput || element instanceof ReplEvaluationResult || element instanceof Variable) {
      return 1;
    }
    let includeQueryPresent = false;
    let includeQueryMatched = false;
    const text = element.toString(true);
    for (const { type, query } of this._parsedQueries) {
      if (type === "exclude" && _ReplFilter.matchQuery(query, text)) {
        return false;
      } else if (type === "include") {
        includeQueryPresent = true;
        if (_ReplFilter.matchQuery(query, text)) {
          includeQueryMatched = true;
        }
      }
    }
    return includeQueryPresent ? includeQueryMatched : typeof parentVisibility !== "undefined" ? parentVisibility : 1;
  }
};
_ReplFilter.matchQuery = matchesFuzzy;
let ReplFilter = _ReplFilter;
function handleANSIOutput(text, linkDetector, themeService, workspaceFolder) {
  const root = document.createElement("span");
  const textLength = text.length;
  let styleNames = [];
  let customFgColor;
  let customBgColor;
  let customUnderlineColor;
  let colorsInverted = false;
  let currentPos = 0;
  let buffer = "";
  while (currentPos < textLength) {
    let sequenceFound = false;
    if (text.charCodeAt(currentPos) === 27 && text.charAt(currentPos + 1) === "[") {
      const startPos = currentPos;
      currentPos += 2;
      let ansiSequence = "";
      while (currentPos < textLength) {
        const char = text.charAt(currentPos);
        ansiSequence += char;
        currentPos++;
        if (char.match(/^[ABCDHIJKfhmpsu]$/)) {
          sequenceFound = true;
          break;
        }
      }
      if (sequenceFound) {
        appendStylizedStringToContainer(root, buffer, styleNames, linkDetector, workspaceFolder, customFgColor, customBgColor, customUnderlineColor);
        buffer = "";
        if (ansiSequence.match(/^(?:[34][0-8]|9[0-7]|10[0-7]|[0-9]|2[1-5,7-9]|[34]9|5[8,9]|1[0-9])(?:;[349][0-7]|10[0-7]|[013]|[245]|[34]9)?(?:;[012]?[0-9]?[0-9])*;?m$/)) {
          const styleCodes = ansiSequence.slice(0, -1).split(";").filter((elem) => elem !== "").map((elem) => parseInt(elem, 10));
          if (styleCodes[0] === 38 || styleCodes[0] === 48 || styleCodes[0] === 58) {
            const colorType = styleCodes[0] === 38 ? "foreground" : styleCodes[0] === 48 ? "background" : "underline";
            if (styleCodes[1] === 5) {
              set8BitColor(styleCodes, colorType);
            } else if (styleCodes[1] === 2) {
              set24BitColor(styleCodes, colorType);
            }
          } else {
            setBasicFormatters(styleCodes);
          }
        }
      } else {
        currentPos = startPos;
      }
    }
    if (sequenceFound === false) {
      buffer += text.charAt(currentPos);
      currentPos++;
    }
  }
  if (buffer) {
    appendStylizedStringToContainer(root, buffer, styleNames, linkDetector, workspaceFolder, customFgColor, customBgColor, customUnderlineColor);
  }
  return root;
  function changeColor(colorType, color) {
    if (colorType === "foreground") {
      customFgColor = color;
    } else if (colorType === "background") {
      customBgColor = color;
    } else if (colorType === "underline") {
      customUnderlineColor = color;
    }
    styleNames = styleNames.filter((style) => style !== `code-${colorType}-colored`);
    if (color !== void 0) {
      styleNames.push(`code-${colorType}-colored`);
    }
  }
  function reverseForegroundAndBackgroundColors() {
    const oldFgColor = customFgColor;
    changeColor("foreground", customBgColor);
    changeColor("background", oldFgColor);
  }
  function setBasicFormatters(styleCodes) {
    for (const code of styleCodes) {
      switch (code) {
        case 0: {
          styleNames = [];
          customFgColor = void 0;
          customBgColor = void 0;
          break;
        }
        case 1: {
          styleNames = styleNames.filter((style) => style !== `code-bold`);
          styleNames.push("code-bold");
          break;
        }
        case 2: {
          styleNames = styleNames.filter((style) => style !== `code-dim`);
          styleNames.push("code-dim");
          break;
        }
        case 3: {
          styleNames = styleNames.filter((style) => style !== `code-italic`);
          styleNames.push("code-italic");
          break;
        }
        case 4: {
          styleNames = styleNames.filter((style) => style !== `code-underline` && style !== `code-double-underline`);
          styleNames.push("code-underline");
          break;
        }
        case 5: {
          styleNames = styleNames.filter((style) => style !== `code-blink`);
          styleNames.push("code-blink");
          break;
        }
        case 6: {
          styleNames = styleNames.filter((style) => style !== `code-rapid-blink`);
          styleNames.push("code-rapid-blink");
          break;
        }
        case 7: {
          if (!colorsInverted) {
            colorsInverted = true;
            reverseForegroundAndBackgroundColors();
          }
          break;
        }
        case 8: {
          styleNames = styleNames.filter((style) => style !== `code-hidden`);
          styleNames.push("code-hidden");
          break;
        }
        case 9: {
          styleNames = styleNames.filter((style) => style !== `code-strike-through`);
          styleNames.push("code-strike-through");
          break;
        }
        case 10: {
          styleNames = styleNames.filter((style) => !style.startsWith("code-font"));
          break;
        }
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20: {
          styleNames = styleNames.filter((style) => !style.startsWith("code-font"));
          styleNames.push(`code-font-${code - 10}`);
          break;
        }
        case 21: {
          styleNames = styleNames.filter((style) => style !== `code-underline` && style !== `code-double-underline`);
          styleNames.push("code-double-underline");
          break;
        }
        case 22: {
          styleNames = styleNames.filter((style) => style !== `code-bold` && style !== `code-dim`);
          break;
        }
        case 23: {
          styleNames = styleNames.filter((style) => style !== `code-italic` && style !== `code-font-10`);
          break;
        }
        case 24: {
          styleNames = styleNames.filter((style) => style !== `code-underline` && style !== `code-double-underline`);
          break;
        }
        case 25: {
          styleNames = styleNames.filter((style) => style !== `code-blink` && style !== `code-rapid-blink`);
          break;
        }
        case 27: {
          if (colorsInverted) {
            colorsInverted = false;
            reverseForegroundAndBackgroundColors();
          }
          break;
        }
        case 28: {
          styleNames = styleNames.filter((style) => style !== `code-hidden`);
          break;
        }
        case 29: {
          styleNames = styleNames.filter((style) => style !== `code-strike-through`);
          break;
        }
        case 53: {
          styleNames = styleNames.filter((style) => style !== `code-overline`);
          styleNames.push("code-overline");
          break;
        }
        case 55: {
          styleNames = styleNames.filter((style) => style !== `code-overline`);
          break;
        }
        case 39: {
          changeColor("foreground", void 0);
          break;
        }
        case 49: {
          changeColor("background", void 0);
          break;
        }
        case 59: {
          changeColor("underline", void 0);
          break;
        }
        case 73: {
          styleNames = styleNames.filter((style) => style !== `code-superscript` && style !== `code-subscript`);
          styleNames.push("code-superscript");
          break;
        }
        case 74: {
          styleNames = styleNames.filter((style) => style !== `code-superscript` && style !== `code-subscript`);
          styleNames.push("code-subscript");
          break;
        }
        case 75: {
          styleNames = styleNames.filter((style) => style !== `code-superscript` && style !== `code-subscript`);
          break;
        }
        default: {
          setBasicColor(code);
          break;
        }
      }
    }
  }
  function set24BitColor(styleCodes, colorType) {
    if (styleCodes.length >= 5 && styleCodes[2] >= 0 && styleCodes[2] <= 255 && styleCodes[3] >= 0 && styleCodes[3] <= 255 && styleCodes[4] >= 0 && styleCodes[4] <= 255) {
      const customColor = new RGBA(styleCodes[2], styleCodes[3], styleCodes[4]);
      changeColor(colorType, customColor);
    }
  }
  function set8BitColor(styleCodes, colorType) {
    let colorNumber = styleCodes[2];
    const color = calcANSI8bitColor(colorNumber);
    if (color) {
      changeColor(colorType, color);
    } else if (colorNumber >= 0 && colorNumber <= 15) {
      if (colorType === "underline") {
        const theme = themeService.getColorTheme();
        const colorName = ansiColorIdentifiers[colorNumber];
        const color2 = theme.getColor(colorName);
        if (color2) {
          changeColor(colorType, color2.rgba);
        }
        return;
      }
      colorNumber += 30;
      if (colorNumber >= 38) {
        colorNumber += 52;
      }
      if (colorType === "background") {
        colorNumber += 10;
      }
      setBasicColor(colorNumber);
    }
  }
  function setBasicColor(styleCode) {
    const theme = themeService.getColorTheme();
    let colorType;
    let colorIndex;
    if (styleCode >= 30 && styleCode <= 37) {
      colorIndex = styleCode - 30;
      colorType = "foreground";
    } else if (styleCode >= 90 && styleCode <= 97) {
      colorIndex = styleCode - 90 + 8;
      colorType = "foreground";
    } else if (styleCode >= 40 && styleCode <= 47) {
      colorIndex = styleCode - 40;
      colorType = "background";
    } else if (styleCode >= 100 && styleCode <= 107) {
      colorIndex = styleCode - 100 + 8;
      colorType = "background";
    }
    if (colorIndex !== void 0 && colorType) {
      const colorName = ansiColorIdentifiers[colorIndex];
      const color = theme.getColor(colorName);
      if (color) {
        changeColor(colorType, color.rgba);
      }
    }
  }
}
function appendStylizedStringToContainer(root, stringContent, cssClasses, linkDetector, workspaceFolder, customTextColor, customBackgroundColor, customUnderlineColor) {
  if (!root || !stringContent) {
    return;
  }
  const container = linkDetector.linkify(stringContent, true, workspaceFolder);
  container.className = cssClasses.join(" ");
  if (customTextColor) {
    container.style.color = Color.Format.CSS.formatRGB(new Color(customTextColor));
  }
  if (customBackgroundColor) {
    container.style.backgroundColor = Color.Format.CSS.formatRGB(new Color(customBackgroundColor));
  }
  if (customUnderlineColor) {
    container.style.textDecorationColor = Color.Format.CSS.formatRGB(new Color(customUnderlineColor));
  }
  root.appendChild(container);
}
function calcANSI8bitColor(colorNumber) {
  if (colorNumber % 1 !== 0) {
    return;
  }
  if (colorNumber >= 16 && colorNumber <= 231) {
    colorNumber -= 16;
    let blue = colorNumber % 6;
    colorNumber = (colorNumber - blue) / 6;
    let green = colorNumber % 6;
    colorNumber = (colorNumber - green) / 6;
    let red = colorNumber;
    const convFactor = 255 / 5;
    blue = Math.round(blue * convFactor);
    green = Math.round(green * convFactor);
    red = Math.round(red * convFactor);
    return new RGBA(red, green, blue);
  } else if (colorNumber >= 232 && colorNumber <= 255) {
    colorNumber -= 232;
    const colorLevel = Math.round(colorNumber / 23 * 255);
    return new RGBA(colorLevel, colorLevel, colorLevel);
  } else {
    return;
  }
}
const $$1 = $$a;
const _ReplEvaluationInputsRenderer = class _ReplEvaluationInputsRenderer {
  get templateId() {
    return _ReplEvaluationInputsRenderer.ID;
  }
  renderTemplate(container) {
    append(container, $$1("span.arrow" + ThemeIcon.asCSSSelector(debugConsoleEvaluationInput)));
    const input = append(container, $$1(".expression"));
    const label = new HighlightedLabel(input);
    return { label };
  }
  renderElement(element, index, templateData) {
    const evaluation = element.element;
    templateData.label.set(evaluation.value, createMatches(element.filterData));
  }
  disposeTemplate(templateData) {
  }
};
_ReplEvaluationInputsRenderer.ID = "replEvaluationInput";
let ReplEvaluationInputsRenderer = _ReplEvaluationInputsRenderer;
let ReplGroupRenderer = (_k = class {
  constructor(linkDetector, themeService) {
    this.linkDetector = linkDetector;
    this.themeService = themeService;
  }
  get templateId() {
    return _k.ID;
  }
  renderTemplate(container) {
    const label = append(container, $$1(".expression"));
    return { label };
  }
  renderElement(element, _index, templateData) {
    const replGroup = element.element;
    clearNode(templateData.label);
    const result = handleANSIOutput(replGroup.name, this.linkDetector, this.themeService, void 0);
    templateData.label.appendChild(result);
  }
  disposeTemplate(_templateData) {
  }
}, _k.ID = "replGroup", _k);
ReplGroupRenderer = __decorate([
  __param(1, IThemeService)
], ReplGroupRenderer);
const _ReplEvaluationResultsRenderer = class _ReplEvaluationResultsRenderer {
  get templateId() {
    return _ReplEvaluationResultsRenderer.ID;
  }
  constructor(linkDetector) {
    this.linkDetector = linkDetector;
  }
  renderTemplate(container) {
    const output = append(container, $$1(".evaluation-result.expression"));
    const value = append(output, $$1("span.value"));
    return { value };
  }
  renderElement(element, index, templateData) {
    const expression = element.element;
    renderExpressionValue(expression, templateData.value, {
      showHover: false,
      colorize: true,
      linkDetector: this.linkDetector
    });
  }
  disposeTemplate(templateData) {
  }
};
_ReplEvaluationResultsRenderer.ID = "replEvaluationResult";
let ReplEvaluationResultsRenderer = _ReplEvaluationResultsRenderer;
let ReplOutputElementRenderer = (_l = class {
  constructor(linkDetector, editorService, labelService, themeService) {
    this.linkDetector = linkDetector;
    this.editorService = editorService;
    this.labelService = labelService;
    this.themeService = themeService;
  }
  get templateId() {
    return _l.ID;
  }
  renderTemplate(container) {
    const data = /* @__PURE__ */ Object.create(null);
    container.classList.add("output");
    const expression = append(container, $$1(".output.expression.value-and-source"));
    data.container = container;
    data.countContainer = append(expression, $$1(".count-badge-wrapper"));
    data.count = new CountBadge(data.countContainer, {}, defaultCountBadgeStyles);
    data.value = append(expression, $$1("span.value"));
    data.source = append(expression, $$1(".source"));
    data.toDispose = [];
    data.toDispose.push(addDisposableListener(data.source, "click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const source = data.getReplElementSource();
      if (source) {
        source.source.openInEditor(this.editorService, {
          startLineNumber: source.lineNumber,
          startColumn: source.column,
          endLineNumber: source.lineNumber,
          endColumn: source.column
        });
      }
    }));
    return data;
  }
  renderElement({ element }, index, templateData) {
    this.setElementCount(element, templateData);
    templateData.elementListener = element.onDidChangeCount(() => this.setElementCount(element, templateData));
    clearNode(templateData.value);
    templateData.value.className = "value";
    templateData.value.appendChild(handleANSIOutput(element.value, this.linkDetector, this.themeService, element.session.root));
    templateData.value.classList.add(element.severity === Severity.Warning ? "warn" : element.severity === Severity.Error ? "error" : element.severity === Severity.Ignore ? "ignore" : "info");
    templateData.source.textContent = element.sourceData ? `${basename(element.sourceData.source.name)}:${element.sourceData.lineNumber}` : "";
    templateData.source.title = element.sourceData ? `${this.labelService.getUriLabel(element.sourceData.source.uri)}:${element.sourceData.lineNumber}` : "";
    templateData.getReplElementSource = () => element.sourceData;
  }
  setElementCount(element, templateData) {
    if (element.count >= 2) {
      templateData.count.setCount(element.count);
      templateData.countContainer.hidden = false;
    } else {
      templateData.countContainer.hidden = true;
    }
  }
  disposeTemplate(templateData) {
    dispose(templateData.toDispose);
  }
  disposeElement(_element, _index, templateData) {
    templateData.elementListener.dispose();
  }
}, _l.ID = "outputReplElement", _l);
ReplOutputElementRenderer = __decorate([
  __param(1, IEditorService),
  __param(2, ILabelService),
  __param(3, IThemeService)
], ReplOutputElementRenderer);
let ReplVariablesRenderer = (_m = class extends AbstractExpressionsRenderer {
  get templateId() {
    return _m.ID;
  }
  constructor(linkDetector, debugService, contextViewService) {
    super(debugService, contextViewService);
    this.linkDetector = linkDetector;
  }
  renderElement(node, _index, data) {
    const element = node.element;
    super.renderExpressionElement(element instanceof ReplVariableElement ? element.expression : element, node, data);
  }
  renderExpression(expression, data, highlights) {
    const isReplVariable = expression instanceof ReplVariableElement;
    if (isReplVariable || !expression.name) {
      data.label.set("");
      renderExpressionValue(isReplVariable ? expression.expression : expression, data.value, { showHover: false, colorize: true, linkDetector: this.linkDetector });
      data.expression.classList.remove("nested-variable");
    } else {
      renderVariable(expression, data, true, highlights, this.linkDetector);
      data.expression.classList.toggle("nested-variable", isNestedVariable(expression));
    }
  }
  getInputBoxOptions(expression) {
    return void 0;
  }
}, _m.ID = "replVariable", _m);
ReplVariablesRenderer = __decorate([
  __param(1, IDebugService),
  __param(2, IContextViewService)
], ReplVariablesRenderer);
const _ReplRawObjectsRenderer = class _ReplRawObjectsRenderer {
  constructor(linkDetector) {
    this.linkDetector = linkDetector;
  }
  get templateId() {
    return _ReplRawObjectsRenderer.ID;
  }
  renderTemplate(container) {
    container.classList.add("output");
    const expression = append(container, $$1(".output.expression"));
    const name = append(expression, $$1("span.name"));
    const label = new HighlightedLabel(name);
    const value = append(expression, $$1("span.value"));
    return { container, expression, name, label, value };
  }
  renderElement(node, index, templateData) {
    const element = node.element;
    templateData.label.set(element.name ? `${element.name}:` : "", createMatches(node.filterData));
    if (element.name) {
      templateData.name.textContent = `${element.name}:`;
    } else {
      templateData.name.textContent = "";
    }
    renderExpressionValue(element.value, templateData.value, {
      showHover: false,
      linkDetector: this.linkDetector
    });
  }
  disposeTemplate(templateData) {
  }
};
_ReplRawObjectsRenderer.ID = "rawObject";
let ReplRawObjectsRenderer = _ReplRawObjectsRenderer;
function isNestedVariable(element) {
  return element instanceof Variable && (element.parent instanceof ReplEvaluationResult || element.parent instanceof Variable);
}
class ReplDelegate extends CachedListVirtualDelegate {
  constructor(configurationService, replOptions) {
    super();
    this.configurationService = configurationService;
    this.replOptions = replOptions;
  }
  getHeight(element) {
    const config = this.configurationService.getValue("debug");
    if (!config.console.wordWrap) {
      return this.estimateHeight(element, true);
    }
    return super.getHeight(element);
  }
  estimateHeight(element, ignoreValueLength = false) {
    const lineHeight = this.replOptions.replConfiguration.lineHeight;
    const countNumberOfLines = (str) => {
      var _a2;
      return ((_a2 = str.match(/\n/g)) == null ? void 0 : _a2.length) ?? 0;
    };
    const hasValue = (e) => typeof e.value === "string";
    if (hasValue(element) && !isNestedVariable(element)) {
      const value = element.value;
      const valueRows = countNumberOfLines(value) + (ignoreValueLength ? 0 : Math.floor(value.length / 70)) + (element instanceof ReplOutputElement ? 0 : 1);
      return Math.max(valueRows, 1) * lineHeight;
    }
    return lineHeight;
  }
  getTemplateId(element) {
    if (element instanceof Variable || element instanceof ReplVariableElement) {
      return ReplVariablesRenderer.ID;
    }
    if (element instanceof ReplEvaluationResult) {
      return ReplEvaluationResultsRenderer.ID;
    }
    if (element instanceof ReplEvaluationInput) {
      return ReplEvaluationInputsRenderer.ID;
    }
    if (element instanceof ReplOutputElement) {
      return ReplOutputElementRenderer.ID;
    }
    if (element instanceof ReplGroup) {
      return ReplGroupRenderer.ID;
    }
    return ReplRawObjectsRenderer.ID;
  }
  hasDynamicHeight(element) {
    if (isNestedVariable(element)) {
      return false;
    }
    return element.toString().length > 0;
  }
}
function isDebugSession(obj) {
  return typeof obj.getReplElements === "function";
}
class ReplDataSource {
  hasChildren(element) {
    if (isDebugSession(element)) {
      return true;
    }
    return !!element.hasChildren;
  }
  getChildren(element) {
    if (isDebugSession(element)) {
      return Promise.resolve(element.getReplElements());
    }
    return Promise.resolve(element.getChildren());
  }
}
class ReplAccessibilityProvider {
  getWidgetAriaLabel() {
    return localize("debugConsole", "Debug Console");
  }
  getAriaLabel(element) {
    if (element instanceof Variable) {
      return localize(
        "replVariableAriaLabel",
        "Variable {0}, value {1}",
        element.name,
        element.value
      );
    }
    if (element instanceof ReplOutputElement || element instanceof ReplEvaluationInput || element instanceof ReplEvaluationResult) {
      return element.value + (element instanceof ReplOutputElement && element.count > 1 ? localize(
        { key: "occurred", comment: ["Front will the value of the debug console element. Placeholder will be replaced by a number which represents occurrance count."] },
        ", occurred {0} times",
        element.count
      ) : "");
    }
    if (element instanceof RawObjectReplElement) {
      return localize(
        "replRawObjectAriaLabel",
        "Debug console variable {0}, value {1}",
        element.name,
        element.value
      );
    }
    if (element instanceof ReplGroup) {
      return localize("replGroup", "Debug console group {0}", element.name);
    }
    return "";
  }
}
const $ = $$a;
const HISTORY_STORAGE_KEY = "debug.repl.history";
const FILTER_HISTORY_STORAGE_KEY = "debug.repl.filterHistory";
const FILTER_VALUE_STORAGE_KEY = "debug.repl.filterValue";
const DECORATION_KEY = "replinputdecoration";
function revealLastElement(tree) {
  tree.scrollTop = tree.scrollHeight - tree.renderHeight;
}
const sessionsToIgnore = /* @__PURE__ */ new Set();
const identityProvider = { getId: (element) => element.getId() };
let Repl = (_n = class extends FilterViewPane {
  constructor(options, debugService, instantiationService, storageService, themeService, modelService, contextKeyService, codeEditorService, viewDescriptorService, contextMenuService, configurationService, textResourcePropertiesService, editorService, keybindingService, openerService, telemetryService, menuService, languageFeaturesService, logService) {
    const filterText = storageService.get(FILTER_VALUE_STORAGE_KEY, 1, "");
    super({
      ...options,
      filterOptions: {
        placeholder: localize(
          { key: "workbench.debug.filter.placeholder", comment: ["Text in the brackets after e.g. is not localizable"] },
          "Filter (e.g. text, !exclude)"
        ),
        text: filterText,
        history: JSON.parse(storageService.get(FILTER_HISTORY_STORAGE_KEY, 1, "[]"))
      }
    }, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, telemetryService);
    this.debugService = debugService;
    this.storageService = storageService;
    this.modelService = modelService;
    this.textResourcePropertiesService = textResourcePropertiesService;
    this.editorService = editorService;
    this.languageFeaturesService = languageFeaturesService;
    this.logService = logService;
    this.previousTreeScrollHeight = 0;
    this.replInputLineCount = 1;
    this.modelChangeListener = Disposable.None;
    this.menu = menuService.createMenu(MenuId.DebugConsoleContext, contextKeyService);
    this._register(this.menu);
    this.history = new HistoryNavigator(
      JSON.parse(this.storageService.get(HISTORY_STORAGE_KEY, 1, "[]")),
      50
    );
    this.filter = new ReplFilter();
    this.filter.filterQuery = filterText;
    this.multiSessionRepl = CONTEXT_MULTI_SESSION_REPL.bindTo(contextKeyService);
    this.replOptions = this._register(this.instantiationService.createInstance(ReplOptions, this.id, () => this.getBackgroundColor()));
    this._register(this.replOptions.onDidChange(() => this.onDidStyleChange()));
    codeEditorService.registerDecorationType("repl-decoration", DECORATION_KEY, {});
    this.multiSessionRepl.set(this.isMultiSessionView);
    this.registerListeners();
  }
  registerListeners() {
    if (this.debugService.getViewModel().focusedSession) {
      this.onDidFocusSession(this.debugService.getViewModel().focusedSession);
    }
    this._register(this.debugService.getViewModel().onDidFocusSession(async (session) => this.onDidFocusSession(session)));
    this._register(this.debugService.getViewModel().onDidEvaluateLazyExpression(async (e) => {
      var _a2;
      if (e instanceof Variable && ((_a2 = this.tree) == null ? void 0 : _a2.hasNode(e))) {
        await this.tree.updateChildren(e, false, true);
        await this.tree.expand(e);
      }
    }));
    this._register(this.debugService.onWillNewSession(async (newSession) => {
      var _a2;
      const input = (_a2 = this.tree) == null ? void 0 : _a2.getInput();
      if (!input || input.state === 0) {
        await this.selectSession(newSession);
      }
      this.multiSessionRepl.set(this.isMultiSessionView);
    }));
    this._register(this.debugService.onDidEndSession(async (session) => {
      await Promise.resolve();
      this.multiSessionRepl.set(this.isMultiSessionView);
    }));
    this._register(this.themeService.onDidColorThemeChange(() => {
      this.refreshReplElements(false);
      if (this.isVisible()) {
        this.updateInputDecoration();
      }
    }));
    this._register(this.onDidChangeBodyVisibility((visible) => {
      if (visible) {
        if (!this.model) {
          this.model = this.modelService.getModel(_n.URI) || this.modelService.createModel("", null, _n.URI, true);
        }
        this.setMode();
        this.replInput.setModel(this.model);
        this.updateInputDecoration();
        this.refreshReplElements(true);
      }
    }));
    this._register(this.configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("debug.console.wordWrap") && this.tree) {
        this.tree.dispose();
        this.treeContainer.innerText = "";
        clearNode(this.treeContainer);
        this.createReplTree();
      }
      if (e.affectsConfiguration("debug.console.acceptSuggestionOnEnter")) {
        const config = this.configurationService.getValue("debug");
        this.replInput.updateOptions({
          acceptSuggestionOnEnter: config.console.acceptSuggestionOnEnter === "on" ? "on" : "off"
        });
      }
    }));
    this._register(this.editorService.onDidActiveEditorChange(() => {
      this.setMode();
    }));
    this._register(this.filterWidget.onDidChangeFilterText(() => {
      this.filter.filterQuery = this.filterWidget.getFilterText();
      if (this.tree) {
        this.tree.refilter();
        revealLastElement(this.tree);
      }
    }));
  }
  async onDidFocusSession(session) {
    var _a2;
    if (session) {
      sessionsToIgnore.delete(session);
      (_a2 = this.completionItemProvider) == null ? void 0 : _a2.dispose();
      if (session.capabilities.supportsCompletionsRequest) {
        this.completionItemProvider = this.languageFeaturesService.completionProvider.register({ scheme: DEBUG_SCHEME, pattern: "**/replinput", hasAccessToAllModels: true }, {
          _debugDisplayName: "debugConsole",
          triggerCharacters: session.capabilities.completionTriggerCharacters || ["."],
          provideCompletionItems: async (_, position, _context, token) => {
            this.setHistoryNavigationEnablement(false);
            const model = this.replInput.getModel();
            if (model) {
              const word = model.getWordAtPosition(position);
              const overwriteBefore = word ? word.word.length : 0;
              const text = model.getValue();
              const focusedStackFrame = this.debugService.getViewModel().focusedStackFrame;
              const frameId = focusedStackFrame ? focusedStackFrame.frameId : void 0;
              const response = await session.completions(frameId, (focusedStackFrame == null ? void 0 : focusedStackFrame.thread.threadId) || 0, text, position, overwriteBefore, token);
              const suggestions = [];
              const computeRange = (length) => Range.fromPositions(position.delta(0, -length), position);
              if (response && response.body && response.body.targets) {
                response.body.targets.forEach((item) => {
                  if (item && item.label) {
                    let insertTextRules = void 0;
                    let insertText = item.text || item.label;
                    if (typeof item.selectionStart === "number") {
                      insertTextRules = 4;
                      const selectionLength = typeof item.selectionLength === "number" ? item.selectionLength : 0;
                      const placeholder = selectionLength > 0 ? "${1:" + insertText.substring(item.selectionStart, item.selectionStart + selectionLength) + "}$0" : "$0";
                      insertText = insertText.substring(0, item.selectionStart) + placeholder + insertText.substring(item.selectionStart + selectionLength);
                    }
                    suggestions.push({
                      label: item.label,
                      insertText,
                      detail: item.detail,
                      kind: CompletionItemKinds.fromString(item.type || "property"),
                      filterText: item.start && item.length ? text.substring(item.start, item.start + item.length).concat(item.label) : void 0,
                      range: computeRange(item.length || overwriteBefore),
                      sortText: item.sortText,
                      insertTextRules
                    });
                  }
                });
              }
              if (this.configurationService.getValue("debug").console.historySuggestions) {
                const history = this.history.getHistory();
                const idxLength = String(history.length).length;
                history.forEach((h, i) => suggestions.push({
                  label: h,
                  insertText: h,
                  kind: 18,
                  range: computeRange(h.length),
                  sortText: "ZZZ" + String(history.length - i).padStart(idxLength, "0")
                }));
              }
              return { suggestions };
            }
            return Promise.resolve({ suggestions: [] });
          }
        });
      }
    }
    await this.selectSession();
  }
  getFilterStats() {
    var _a2, _b2;
    return {
      total: ((_a2 = this.tree) == null ? void 0 : _a2.getNode().children.length) ?? 0,
      filtered: ((_b2 = this.tree) == null ? void 0 : _b2.getNode().children.filter((c) => c.visible).length) ?? 0
    };
  }
  get isReadonly() {
    var _a2;
    const session = (_a2 = this.tree) == null ? void 0 : _a2.getInput();
    if (session && session.state !== 0) {
      return false;
    }
    return true;
  }
  showPreviousValue() {
    if (!this.isReadonly) {
      this.navigateHistory(true);
    }
  }
  showNextValue() {
    if (!this.isReadonly) {
      this.navigateHistory(false);
    }
  }
  focusFilter() {
    this.filterWidget.focus();
  }
  setMode() {
    if (!this.isVisible()) {
      return;
    }
    const activeEditorControl = this.editorService.activeTextEditorControl;
    if (isCodeEditor(activeEditorControl)) {
      this.modelChangeListener.dispose();
      this.modelChangeListener = activeEditorControl.onDidChangeModelLanguage(() => this.setMode());
      if (this.model && activeEditorControl.hasModel()) {
        this.model.setLanguage(activeEditorControl.getModel().getLanguageId());
      }
    }
  }
  onDidStyleChange() {
    var _a2;
    if (this.styleElement) {
      this.replInput.updateOptions({
        fontSize: this.replOptions.replConfiguration.fontSize,
        lineHeight: this.replOptions.replConfiguration.lineHeight,
        fontFamily: this.replOptions.replConfiguration.fontFamily === "default" ? EDITOR_FONT_DEFAULTS.fontFamily : this.replOptions.replConfiguration.fontFamily
      });
      const replInputLineHeight = this.replInput.getOption(65);
      this.styleElement.textContent = `
				.repl .repl-input-wrapper .repl-input-chevron {
					line-height: ${replInputLineHeight}px
				}

				.repl .repl-input-wrapper .monaco-editor .lines-content {
					background-color: ${this.replOptions.replConfiguration.backgroundColor};
				}
			`;
      const cssFontFamily = this.replOptions.replConfiguration.fontFamily === "default" ? "var(--monaco-monospace-font)" : this.replOptions.replConfiguration.fontFamily;
      this.container.style.setProperty(`--vscode-repl-font-family`, cssFontFamily);
      this.container.style.setProperty(`--vscode-repl-font-size`, `${this.replOptions.replConfiguration.fontSize}px`);
      this.container.style.setProperty(`--vscode-repl-font-size-for-twistie`, `${this.replOptions.replConfiguration.fontSizeForTwistie}px`);
      this.container.style.setProperty(`--vscode-repl-line-height`, this.replOptions.replConfiguration.cssLineHeight);
      (_a2 = this.tree) == null ? void 0 : _a2.rerender();
      if (this.bodyContentDimension) {
        this.layoutBodyContent(this.bodyContentDimension.height, this.bodyContentDimension.width);
      }
    }
  }
  navigateHistory(previous) {
    const historyInput = (previous ? this.history.previous() ?? this.history.first() : this.history.next()) ?? "";
    this.replInput.setValue(historyInput);
    status(historyInput);
    this.replInput.setPosition({ lineNumber: 1, column: historyInput.length + 1 });
    this.setHistoryNavigationEnablement(true);
  }
  async selectSession(session) {
    var _a2, _b2, _c2;
    const treeInput = (_a2 = this.tree) == null ? void 0 : _a2.getInput();
    if (!session) {
      const focusedSession = this.debugService.getViewModel().focusedSession;
      if (focusedSession) {
        session = focusedSession;
      } else if (!treeInput || sessionsToIgnore.has(treeInput)) {
        session = this.debugService.getModel().getSessions(true).find((s) => !sessionsToIgnore.has(s));
      }
    }
    if (session) {
      (_b2 = this.replElementsChangeListener) == null ? void 0 : _b2.dispose();
      this.replElementsChangeListener = session.onDidChangeReplElements(() => {
        this.refreshReplElements(session.getReplElements().length === 0);
      });
      if (this.tree && treeInput !== session) {
        try {
          await this.tree.setInput(session);
        } catch (err) {
          this.logService.error(err);
        }
        revealLastElement(this.tree);
      }
    }
    (_c2 = this.replInput) == null ? void 0 : _c2.updateOptions({ readOnly: this.isReadonly });
    this.updateInputDecoration();
  }
  async clearRepl() {
    var _a2;
    const session = (_a2 = this.tree) == null ? void 0 : _a2.getInput();
    if (session) {
      session.removeReplExpressions();
      if (session.state === 0) {
        sessionsToIgnore.add(session);
        await this.selectSession();
        this.multiSessionRepl.set(this.isMultiSessionView);
      }
    }
    this.replInput.focus();
  }
  acceptReplInput() {
    var _a2;
    const session = (_a2 = this.tree) == null ? void 0 : _a2.getInput();
    if (session && !this.isReadonly) {
      session.addReplExpression(this.debugService.getViewModel().focusedStackFrame, this.replInput.getValue());
      revealLastElement(this.tree);
      this.history.add(this.replInput.getValue());
      this.replInput.setValue("");
      const shouldRelayout = this.replInputLineCount > 1;
      this.replInputLineCount = 1;
      if (shouldRelayout && this.bodyContentDimension) {
        this.layoutBodyContent(this.bodyContentDimension.height, this.bodyContentDimension.width);
      }
    }
  }
  getVisibleContent() {
    let text = "";
    if (this.model && this.tree) {
      const lineDelimiter = this.textResourcePropertiesService.getEOL(this.model.uri);
      const traverseAndAppend = (node) => {
        node.children.forEach((child) => {
          if (child.visible) {
            text += child.element.toString().trimRight() + lineDelimiter;
            if (!child.collapsed && child.children.length) {
              traverseAndAppend(child);
            }
          }
        });
      };
      traverseAndAppend(this.tree.getNode());
    }
    return removeAnsiEscapeCodes(text);
  }
  layoutBodyContent(height, width) {
    this.bodyContentDimension = new Dimension(width, height);
    const replInputHeight = Math.min(this.replInput.getContentHeight(), height);
    if (this.tree) {
      const lastElementVisible = this.tree.scrollTop + this.tree.renderHeight >= this.tree.scrollHeight;
      const treeHeight = height - replInputHeight;
      this.tree.getHTMLElement().style.height = `${treeHeight}px`;
      this.tree.layout(treeHeight, width);
      if (lastElementVisible) {
        revealLastElement(this.tree);
      }
    }
    this.replInputContainer.style.height = `${replInputHeight}px`;
    this.replInput.layout({ width: width - 30, height: replInputHeight });
  }
  collapseAll() {
    var _a2;
    (_a2 = this.tree) == null ? void 0 : _a2.collapseAll();
  }
  getReplInput() {
    return this.replInput;
  }
  focus() {
    setTimeout(() => this.replInput.focus(), 0);
  }
  getActionViewItem(action) {
    if (action.id === selectReplCommandId) {
      const session = (this.tree ? this.tree.getInput() : void 0) ?? this.debugService.getViewModel().focusedSession;
      return this.instantiationService.createInstance(SelectReplActionViewItem, action, session);
    }
    return super.getActionViewItem(action);
  }
  get isMultiSessionView() {
    return this.debugService.getModel().getSessions(true).filter((s) => s.hasSeparateRepl() && !sessionsToIgnore.has(s)).length > 1;
  }
  get refreshScheduler() {
    const autoExpanded = /* @__PURE__ */ new Set();
    return new RunOnceScheduler(async () => {
      if (!this.tree) {
        return;
      }
      if (!this.tree.getInput()) {
        return;
      }
      await this.tree.updateChildren(void 0, true, false, { diffIdentityProvider: identityProvider });
      const session = this.tree.getInput();
      if (session) {
        const autoExpandElements = async (elements) => {
          for (const element of elements) {
            if (element instanceof ReplGroup) {
              if (element.autoExpand && !autoExpanded.has(element.getId())) {
                autoExpanded.add(element.getId());
                await this.tree.expand(element);
              }
              if (!this.tree.isCollapsed(element)) {
                await autoExpandElements(element.getChildren());
              }
            }
          }
        };
        await autoExpandElements(session.getReplElements());
      }
      const { total, filtered } = this.getFilterStats();
      this.filterWidget.updateBadge(total === filtered || total === 0 ? void 0 : localize("showing filtered repl lines", "Showing {0} of {1}", filtered, total));
    }, _n.REFRESH_DELAY);
  }
  render() {
    super.render();
    this._register(registerNavigableContainer({
      focusNotifiers: [this, this.filterWidget],
      focusNextWidget: () => {
        var _a2, _b2;
        if (this.filterWidget.hasFocus()) {
          (_a2 = this.tree) == null ? void 0 : _a2.domFocus();
        } else if (((_b2 = this.tree) == null ? void 0 : _b2.getHTMLElement()) === document.activeElement) {
          this.focus();
        }
      },
      focusPreviousWidget: () => {
        var _a2, _b2;
        if (this.replInput.hasTextFocus()) {
          (_a2 = this.tree) == null ? void 0 : _a2.domFocus();
        } else if (((_b2 = this.tree) == null ? void 0 : _b2.getHTMLElement()) === document.activeElement) {
          this.focusFilter();
        }
      }
    }));
  }
  renderBody(parent) {
    super.renderBody(parent);
    this.container = append(parent, $(".repl"));
    this.treeContainer = append(this.container, $(`.repl-tree.${MOUSE_CURSOR_TEXT_CSS_CLASS_NAME}`));
    this.createReplInput(this.container);
    this.createReplTree();
  }
  createReplTree() {
    this.replDelegate = new ReplDelegate(this.configurationService, this.replOptions);
    const wordWrap = this.configurationService.getValue("debug").console.wordWrap;
    this.treeContainer.classList.toggle("word-wrap", wordWrap);
    const linkDetector = this.instantiationService.createInstance(LinkDetector);
    const tree = this.tree = this.instantiationService.createInstance(
      WorkbenchAsyncDataTree,
      "DebugRepl",
      this.treeContainer,
      this.replDelegate,
      [
        this.instantiationService.createInstance(ReplVariablesRenderer, linkDetector),
        this.instantiationService.createInstance(ReplOutputElementRenderer, linkDetector),
        new ReplEvaluationInputsRenderer(),
        this.instantiationService.createInstance(ReplGroupRenderer, linkDetector),
        new ReplEvaluationResultsRenderer(linkDetector),
        new ReplRawObjectsRenderer(linkDetector)
      ],
      new ReplDataSource(),
      {
        filter: this.filter,
        accessibilityProvider: new ReplAccessibilityProvider(),
        identityProvider,
        mouseSupport: false,
        findWidgetEnabled: false,
        keyboardNavigationLabelProvider: { getKeyboardNavigationLabel: (e) => e.toString(true) },
        horizontalScrolling: !wordWrap,
        setRowLineHeight: false,
        supportDynamicHeights: wordWrap,
        overrideStyles: {
          listBackground: this.getBackgroundColor()
        }
      }
    );
    this._register(tree.onDidChangeContentHeight(() => {
      if (tree.scrollHeight !== this.previousTreeScrollHeight) {
        const lastElementWasVisible = tree.scrollTop + tree.renderHeight >= this.previousTreeScrollHeight - 2;
        if (lastElementWasVisible) {
          setTimeout(() => {
            revealLastElement(tree);
          }, 0);
        }
      }
      this.previousTreeScrollHeight = tree.scrollHeight;
    }));
    this._register(tree.onContextMenu((e) => this.onContextMenu(e)));
    let lastSelectedString;
    this._register(tree.onMouseClick(() => {
      const selection = window.getSelection();
      if (!selection || selection.type !== "Range" || lastSelectedString === selection.toString()) {
        this.replInput.focus();
      }
      lastSelectedString = selection ? selection.toString() : "";
    }));
    this.selectSession();
    this.styleElement = createStyleSheet(this.container);
    this.onDidStyleChange();
  }
  createReplInput(container) {
    this.replInputContainer = append(container, $(".repl-input-wrapper"));
    append(this.replInputContainer, $(".repl-input-chevron" + ThemeIcon.asCSSSelector(debugConsoleEvaluationPrompt)));
    const { historyNavigationBackwardsEnablement, historyNavigationForwardsEnablement } = this._register(registerAndCreateHistoryNavigationContext(this.scopedContextKeyService, this));
    this.setHistoryNavigationEnablement = (enabled) => {
      historyNavigationBackwardsEnablement.set(enabled);
      historyNavigationForwardsEnablement.set(enabled);
    };
    CONTEXT_IN_DEBUG_REPL.bindTo(this.scopedContextKeyService).set(true);
    this.scopedInstantiationService = this.instantiationService.createChild(new ServiceCollection([IContextKeyService, this.scopedContextKeyService]));
    const options = getSimpleEditorOptions(this.configurationService);
    options.readOnly = true;
    options.suggest = { showStatusBar: true };
    const config = this.configurationService.getValue("debug");
    options.acceptSuggestionOnEnter = config.console.acceptSuggestionOnEnter === "on" ? "on" : "off";
    options.ariaLabel = localize("debugConsole", "Debug Console");
    this.replInput = this.scopedInstantiationService.createInstance(CodeEditorWidget, this.replInputContainer, options, getSimpleCodeEditorWidgetOptions());
    this._register(this.replInput.onDidChangeModelContent(() => {
      const model = this.replInput.getModel();
      this.setHistoryNavigationEnablement(!!model && model.getValue() === "");
      const lineCount = model ? Math.min(10, model.getLineCount()) : 1;
      if (lineCount !== this.replInputLineCount) {
        this.replInputLineCount = lineCount;
        if (this.bodyContentDimension) {
          this.layoutBodyContent(this.bodyContentDimension.height, this.bodyContentDimension.width);
        }
      }
    }));
    this._register(this.replInput.onDidFocusEditorText(() => this.updateInputDecoration()));
    this._register(this.replInput.onDidBlurEditorText(() => this.updateInputDecoration()));
    this._register(addStandardDisposableListener(this.replInputContainer, EventType.FOCUS, () => this.replInputContainer.classList.add("synthetic-focus")));
    this._register(addStandardDisposableListener(this.replInputContainer, EventType.BLUR, () => this.replInputContainer.classList.remove("synthetic-focus")));
  }
  onContextMenu(e) {
    const actions = [];
    createAndFillInContextMenuActions(this.menu, { arg: e.element, shouldForwardArgs: false }, actions);
    this.contextMenuService.showContextMenu({
      getAnchor: () => e.anchor,
      getActions: () => actions,
      getActionsContext: () => e.element
    });
  }
  refreshReplElements(noDelay) {
    if (this.tree && this.isVisible()) {
      if (this.refreshScheduler.isScheduled()) {
        return;
      }
      this.refreshScheduler.schedule(noDelay ? 0 : void 0);
    }
  }
  updateInputDecoration() {
    var _a2;
    if (!this.replInput) {
      return;
    }
    const decorations = [];
    if (this.isReadonly && this.replInput.hasTextFocus() && !this.replInput.getValue()) {
      const transparentForeground = (_a2 = resolveColorValue(editorForeground, this.themeService.getColorTheme())) == null ? void 0 : _a2.transparent(0.4);
      decorations.push({
        range: {
          startLineNumber: 0,
          endLineNumber: 0,
          startColumn: 0,
          endColumn: 1
        },
        renderOptions: {
          after: {
            contentText: localize("startDebugFirst", "Please start a debug session to evaluate expressions"),
            color: transparentForeground ? transparentForeground.toString() : void 0
          }
        }
      });
    }
    this.replInput.setDecorationsByType("repl-decoration", DECORATION_KEY, decorations);
  }
  saveState() {
    const replHistory = this.history.getHistory();
    if (replHistory.length) {
      this.storageService.store(HISTORY_STORAGE_KEY, JSON.stringify(replHistory), 1, 1);
    } else {
      this.storageService.remove(HISTORY_STORAGE_KEY, 1);
    }
    const filterHistory = this.filterWidget.getHistory();
    if (filterHistory.length) {
      this.storageService.store(FILTER_HISTORY_STORAGE_KEY, JSON.stringify(filterHistory), 1, 1);
    } else {
      this.storageService.remove(FILTER_HISTORY_STORAGE_KEY, 1);
    }
    const filterValue = this.filterWidget.getFilterText();
    if (filterValue) {
      this.storageService.store(FILTER_VALUE_STORAGE_KEY, filterValue, 1, 1);
    } else {
      this.storageService.remove(FILTER_VALUE_STORAGE_KEY, 1);
    }
    super.saveState();
  }
  dispose() {
    var _a2, _b2;
    (_a2 = this.replInput) == null ? void 0 : _a2.dispose();
    (_b2 = this.replElementsChangeListener) == null ? void 0 : _b2.dispose();
    this.refreshScheduler.dispose();
    this.modelChangeListener.dispose();
    super.dispose();
  }
}, _n.REFRESH_DELAY = 50, _n.URI = URI.parse(`${DEBUG_SCHEME}:replinput`), _n);
Repl.__decorator = __decorate([
  memoize
], Repl.prototype, "refreshScheduler", null);
Repl = __decorate([
  __param(1, IDebugService),
  __param(2, IInstantiationService),
  __param(3, IStorageService),
  __param(4, IThemeService),
  __param(5, IModelService),
  __param(6, IContextKeyService),
  __param(7, ICodeEditorService),
  __param(8, IViewDescriptorService),
  __param(9, IContextMenuService),
  __param(10, IConfigurationService),
  __param(11, ITextResourcePropertiesService),
  __param(12, IEditorService),
  __param(13, IKeybindingService),
  __param(14, IOpenerService),
  __param(15, ITelemetryService),
  __param(16, IMenuService),
  __param(17, ILanguageFeaturesService),
  __param(18, ILogService)
], Repl);
let ReplOptions = (_o = class extends Disposable {
  get replConfiguration() {
    return this._replConfig;
  }
  constructor(viewId, backgroundColorDelegate, configurationService, themeService, viewDescriptorService) {
    super();
    this.backgroundColorDelegate = backgroundColorDelegate;
    this.configurationService = configurationService;
    this.themeService = themeService;
    this.viewDescriptorService = viewDescriptorService;
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this._register(this.themeService.onDidColorThemeChange((e) => this.update()));
    this._register(this.viewDescriptorService.onDidChangeLocation((e) => {
      if (e.views.some((v) => v.id === viewId)) {
        this.update();
      }
    }));
    this._register(this.configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("debug.console.lineHeight") || e.affectsConfiguration("debug.console.fontSize") || e.affectsConfiguration("debug.console.fontFamily")) {
        this.update();
      }
    }));
    this.update();
  }
  update() {
    const debugConsole = this.configurationService.getValue("debug").console;
    this._replConfig = {
      fontSize: debugConsole.fontSize,
      fontFamily: debugConsole.fontFamily,
      lineHeight: debugConsole.lineHeight ? debugConsole.lineHeight : _o.lineHeightEm * debugConsole.fontSize,
      cssLineHeight: debugConsole.lineHeight ? `${debugConsole.lineHeight}px` : `${_o.lineHeightEm}em`,
      backgroundColor: this.themeService.getColorTheme().getColor(this.backgroundColorDelegate()),
      fontSizeForTwistie: debugConsole.fontSize * _o.lineHeightEm / 2 - 8
    };
    this._onDidChange.fire();
  }
}, _o.lineHeightEm = 1.4, _o);
ReplOptions = __decorate([
  __param(2, IConfigurationService),
  __param(3, IThemeService),
  __param(4, IViewDescriptorService)
], ReplOptions);
class AcceptReplInputAction extends EditorAction {
  constructor() {
    super({
      id: "repl.action.acceptInput",
      label: localize(
        { key: "actions.repl.acceptInput", comment: ["Apply input from the debug console input box"] },
        "REPL Accept Input"
      ),
      alias: "REPL Accept Input",
      precondition: CONTEXT_IN_DEBUG_REPL,
      kbOpts: {
        kbExpr: EditorContextKeys.textInputFocus,
        primary: 3,
        weight: 100
      }
    });
  }
  run(accessor, editor) {
    var _a2;
    (_a2 = SuggestController.get(editor)) == null ? void 0 : _a2.cancelSuggestWidget();
    const repl = getReplView(accessor.get(IViewsService));
    repl == null ? void 0 : repl.acceptReplInput();
  }
}
class FilterReplAction extends EditorAction {
  constructor() {
    super({
      id: "repl.action.filter",
      label: localize("repl.action.filter", "REPL Focus Content to Filter"),
      alias: "REPL Filter",
      precondition: CONTEXT_IN_DEBUG_REPL,
      kbOpts: {
        kbExpr: EditorContextKeys.textInputFocus,
        primary: 2048 | 36,
        weight: 100
      }
    });
  }
  run(accessor, editor) {
    const repl = getReplView(accessor.get(IViewsService));
    repl == null ? void 0 : repl.focusFilter();
  }
}
class ReplCopyAllAction extends EditorAction {
  constructor() {
    super({
      id: "repl.action.copyAll",
      label: localize("actions.repl.copyAll", "Debug: Console Copy All"),
      alias: "Debug Console Copy All",
      precondition: CONTEXT_IN_DEBUG_REPL
    });
  }
  run(accessor, editor) {
    const clipboardService = accessor.get(IClipboardService);
    const repl = getReplView(accessor.get(IViewsService));
    if (repl) {
      return clipboardService.writeText(repl.getVisibleContent());
    }
  }
}
registerEditorAction(AcceptReplInputAction);
registerEditorAction(ReplCopyAllAction);
registerEditorAction(FilterReplAction);
class SelectReplActionViewItem extends FocusSessionActionViewItem {
  getSessions() {
    return this.debugService.getModel().getSessions(true).filter((s) => s.hasSeparateRepl() && !sessionsToIgnore.has(s));
  }
  mapFocusedSessionToSelected(focusedSession) {
    while (focusedSession.parentSession && !focusedSession.hasSeparateRepl()) {
      focusedSession = focusedSession.parentSession;
    }
    return focusedSession;
  }
}
function getReplView(viewsService) {
  return viewsService.getActiveViewWithId(REPL_VIEW_ID) ?? void 0;
}
const selectReplCommandId = "workbench.action.debug.selectRepl";
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: selectReplCommandId,
      viewId: REPL_VIEW_ID,
      title: localize("selectRepl", "Select Debug Console"),
      f1: false,
      menu: {
        id: MenuId.ViewTitle,
        group: "navigation",
        when: ContextKeyExpr.and(
          ContextKeyExpr.equals("view", REPL_VIEW_ID),
          CONTEXT_MULTI_SESSION_REPL
        ),
        order: 20
      }
    });
  }
  async runInView(accessor, view, session) {
    const debugService = accessor.get(IDebugService);
    if (session && session.state !== 0 && session !== debugService.getViewModel().focusedSession) {
      if (session.state !== 2) {
        const stopppedChildSession = debugService.getModel().getSessions().find((s) => s.parentSession === session && s.state === 2);
        if (stopppedChildSession) {
          session = stopppedChildSession;
        }
      }
      await debugService.focusStackFrame(void 0, void 0, session, { explicit: true });
    }
    await view.selectSession(session);
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: "workbench.debug.panel.action.clearReplAction",
      viewId: REPL_VIEW_ID,
      title: { value: localize("clearRepl", "Clear Console"), original: "Clear Console" },
      f1: true,
      icon: debugConsoleClearAll,
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        when: ContextKeyExpr.equals("view", REPL_VIEW_ID),
        order: 30
      }, {
        id: MenuId.DebugConsoleContext,
        group: "z_commands",
        order: 20
      }]
    });
  }
  runInView(_accessor, view) {
    view.clearRepl();
    status(localize("debugConsoleCleared", "Debug console was cleared"));
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: "debug.collapseRepl",
      title: localize("collapse", "Collapse All"),
      viewId: REPL_VIEW_ID,
      menu: {
        id: MenuId.DebugConsoleContext,
        group: "z_commands",
        order: 10
      }
    });
  }
  runInView(_accessor, view) {
    view.collapseAll();
    view.focus();
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: "debug.replPaste",
      title: localize("paste", "Paste"),
      viewId: REPL_VIEW_ID,
      precondition: CONTEXT_DEBUG_STATE.notEqualsTo(getStateLabel(0)),
      menu: {
        id: MenuId.DebugConsoleContext,
        group: "2_cutcopypaste",
        order: 30
      }
    });
  }
  async runInView(accessor, view) {
    const clipboardService = accessor.get(IClipboardService);
    const clipboardText = await clipboardService.readText();
    if (clipboardText) {
      const replInput = view.getReplInput();
      replInput.setValue(replInput.getValue().concat(clipboardText));
      view.focus();
      const model = replInput.getModel();
      const lineNumber = model ? model.getLineCount() : 0;
      const column = model == null ? void 0 : model.getLineMaxColumn(lineNumber);
      if (typeof lineNumber === "number" && typeof column === "number") {
        replInput.setPosition({ lineNumber, column });
      }
    }
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: "workbench.debug.action.copyAll",
      title: localize("copyAll", "Copy All"),
      viewId: REPL_VIEW_ID,
      menu: {
        id: MenuId.DebugConsoleContext,
        group: "2_cutcopypaste",
        order: 20
      }
    });
  }
  async runInView(accessor, view) {
    const clipboardService = accessor.get(IClipboardService);
    await clipboardService.writeText(view.getVisibleContent());
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "debug.replCopy",
      title: localize("copy", "Copy"),
      menu: {
        id: MenuId.DebugConsoleContext,
        group: "2_cutcopypaste",
        order: 10
      }
    });
  }
  async run(accessor, element) {
    const clipboardService = accessor.get(IClipboardService);
    const debugService = accessor.get(IDebugService);
    const nativeSelection = window.getSelection();
    const selectedText = nativeSelection == null ? void 0 : nativeSelection.toString();
    if (selectedText && selectedText.length > 0) {
      return clipboardService.writeText(selectedText);
    } else if (element) {
      return clipboardService.writeText(await this.tryEvaluateAndCopy(debugService, element) || element.toString());
    }
  }
  async tryEvaluateAndCopy(debugService, element) {
    if (!(element instanceof ReplEvaluationResult)) {
      return;
    }
    const stackFrame = debugService.getViewModel().focusedStackFrame;
    const session = debugService.getViewModel().focusedSession;
    if (!stackFrame || !session || !session.capabilities.supportsClipboardContext) {
      return;
    }
    try {
      const evaluation = await session.evaluate(element.originalExpression, stackFrame.frameId, "clipboard");
      return evaluation == null ? void 0 : evaluation.body.result;
    } catch (e) {
      return;
    }
  }
});
const STATUS_BAR_DEBUGGING_BACKGROUND = registerColor("statusBar.debuggingBackground", {
  dark: "#CC6633",
  light: "#CC6633",
  hcDark: "#BA592C",
  hcLight: "#B5200D"
}, localize(
  "statusBarDebuggingBackground",
  "Status bar background color when a program is being debugged. The status bar is shown in the bottom of the window"
));
const STATUS_BAR_DEBUGGING_FOREGROUND = registerColor("statusBar.debuggingForeground", {
  dark: STATUS_BAR_FOREGROUND,
  light: STATUS_BAR_FOREGROUND,
  hcDark: STATUS_BAR_FOREGROUND,
  hcLight: "#FFFFFF"
}, localize(
  "statusBarDebuggingForeground",
  "Status bar foreground color when a program is being debugged. The status bar is shown in the bottom of the window"
));
const STATUS_BAR_DEBUGGING_BORDER = registerColor("statusBar.debuggingBorder", {
  dark: STATUS_BAR_BORDER,
  light: STATUS_BAR_BORDER,
  hcDark: STATUS_BAR_BORDER,
  hcLight: STATUS_BAR_BORDER
}, localize(
  "statusBarDebuggingBorder",
  "Status bar border color separating to the sidebar and editor when a program is being debugged. The status bar is shown in the bottom of the window"
));
let StatusBarColorProvider = class StatusBarColorProvider2 {
  set enabled(enabled) {
    if (enabled === !!this.disposable) {
      return;
    }
    if (enabled) {
      this.disposable = this.statusbarService.overrideStyle({
        priority: 10,
        foreground: STATUS_BAR_DEBUGGING_FOREGROUND,
        background: STATUS_BAR_DEBUGGING_BACKGROUND,
        border: STATUS_BAR_DEBUGGING_BORDER
      });
    } else {
      this.disposable.dispose();
      this.disposable = void 0;
    }
  }
  constructor(debugService, contextService, statusbarService, configurationService) {
    this.debugService = debugService;
    this.contextService = contextService;
    this.statusbarService = statusbarService;
    this.configurationService = configurationService;
    this.disposables = new DisposableStore();
    this.debugService.onDidChangeState(this.update, this, this.disposables);
    this.contextService.onDidChangeWorkbenchState(this.update, this, this.disposables);
    this.configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("debug.enableStatusBarColor")) {
        this.update();
      }
    });
    this.update();
  }
  update() {
    const decorateStatusBar = this.configurationService.getValue("debug").enableStatusBarColor;
    if (!decorateStatusBar) {
      this.enabled = false;
    } else {
      this.enabled = isStatusbarInDebugMode(this.debugService.state, this.debugService.getModel().getSessions());
    }
  }
  dispose() {
    var _a2;
    (_a2 = this.disposable) == null ? void 0 : _a2.dispose();
    this.disposables.dispose();
  }
};
StatusBarColorProvider = __decorate([
  __param(0, IDebugService),
  __param(1, IWorkspaceContextService),
  __param(2, IStatusbarService),
  __param(3, IConfigurationService)
], StatusBarColorProvider);
function isStatusbarInDebugMode(state, sessions) {
  if (state === 0 || state === 1 || sessions.every((s) => {
    var _a2;
    return s.suppressDebugStatusbar || ((_a2 = s.configuration) == null ? void 0 : _a2.noDebug);
  })) {
    return false;
  }
  return true;
}
const MAX_VALUE_RENDER_LENGTH_IN_VIEWLET = 1024;
let ignoreViewUpdates = false;
let useCachedEvaluation = false;
let WatchExpressionsView = class WatchExpressionsView2 extends ViewPane {
  constructor(options, contextMenuService, debugService, keybindingService, instantiationService, viewDescriptorService, configurationService, contextKeyService, openerService, themeService, telemetryService, menuService) {
    super(options, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, telemetryService);
    this.debugService = debugService;
    this.needsRefresh = false;
    this.menu = menuService.createMenu(MenuId.DebugWatchContext, contextKeyService);
    this._register(this.menu);
    this.watchExpressionsUpdatedScheduler = new RunOnceScheduler(() => {
      this.needsRefresh = false;
      this.tree.updateChildren();
    }, 50);
    this.watchExpressionsExist = CONTEXT_WATCH_EXPRESSIONS_EXIST.bindTo(contextKeyService);
    this.variableReadonly = CONTEXT_VARIABLE_IS_READONLY.bindTo(contextKeyService);
    this.watchExpressionsExist.set(this.debugService.getModel().getWatchExpressions().length > 0);
    this.watchItemType = CONTEXT_WATCH_ITEM_TYPE.bindTo(contextKeyService);
  }
  renderBody(container) {
    super.renderBody(container);
    this.element.classList.add("debug-pane");
    container.classList.add("debug-watch");
    const treeContainer = renderViewTree(container);
    const expressionsRenderer = this.instantiationService.createInstance(WatchExpressionsRenderer);
    const linkeDetector = this.instantiationService.createInstance(LinkDetector);
    this.tree = this.instantiationService.createInstance(WorkbenchAsyncDataTree, "WatchExpressions", treeContainer, new WatchExpressionsDelegate(), [expressionsRenderer, this.instantiationService.createInstance(VariablesRenderer, linkeDetector)], new WatchExpressionsDataSource(), {
      accessibilityProvider: new WatchExpressionsAccessibilityProvider(),
      identityProvider: { getId: (element) => element.getId() },
      keyboardNavigationLabelProvider: {
        getKeyboardNavigationLabel: (e) => {
          var _a2;
          if (e === ((_a2 = this.debugService.getViewModel().getSelectedExpression()) == null ? void 0 : _a2.expression)) {
            return void 0;
          }
          return e.name;
        }
      },
      dnd: new WatchExpressionsDragAndDrop(this.debugService),
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      }
    });
    this.tree.setInput(this.debugService);
    CONTEXT_WATCH_EXPRESSIONS_FOCUSED.bindTo(this.tree.contextKeyService);
    this._register(this.tree.onContextMenu((e) => this.onContextMenu(e)));
    this._register(this.tree.onMouseDblClick((e) => this.onMouseDblClick(e)));
    this._register(this.debugService.getModel().onDidChangeWatchExpressions(async (we) => {
      this.watchExpressionsExist.set(this.debugService.getModel().getWatchExpressions().length > 0);
      if (!this.isBodyVisible()) {
        this.needsRefresh = true;
      } else {
        if (we && !we.name) {
          useCachedEvaluation = true;
        }
        await this.tree.updateChildren();
        useCachedEvaluation = false;
        if (we instanceof Expression) {
          this.tree.reveal(we);
        }
      }
    }));
    this._register(this.debugService.getViewModel().onDidFocusStackFrame(() => {
      if (!this.isBodyVisible()) {
        this.needsRefresh = true;
        return;
      }
      if (!this.watchExpressionsUpdatedScheduler.isScheduled()) {
        this.watchExpressionsUpdatedScheduler.schedule();
      }
    }));
    this._register(this.debugService.getViewModel().onWillUpdateViews(() => {
      if (!ignoreViewUpdates) {
        this.tree.updateChildren();
      }
    }));
    this._register(this.onDidChangeBodyVisibility((visible) => {
      if (visible && this.needsRefresh) {
        this.watchExpressionsUpdatedScheduler.schedule();
      }
    }));
    let horizontalScrolling;
    this._register(this.debugService.getViewModel().onDidSelectExpression((e) => {
      const expression = e == null ? void 0 : e.expression;
      if (expression instanceof Expression || expression instanceof Variable && (e == null ? void 0 : e.settingWatch)) {
        horizontalScrolling = this.tree.options.horizontalScrolling;
        if (horizontalScrolling) {
          this.tree.updateOptions({ horizontalScrolling: false });
        }
        if (expression.name) {
          this.tree.rerender(expression);
        }
      } else if (!expression && horizontalScrolling !== void 0) {
        this.tree.updateOptions({ horizontalScrolling });
        horizontalScrolling = void 0;
      }
    }));
    this._register(this.debugService.getViewModel().onDidEvaluateLazyExpression(async (e) => {
      if (e instanceof Variable && this.tree.hasNode(e)) {
        await this.tree.updateChildren(e, false, true);
        await this.tree.expand(e);
      }
    }));
  }
  layoutBody(height, width) {
    super.layoutBody(height, width);
    this.tree.layout(height, width);
  }
  focus() {
    this.tree.domFocus();
  }
  collapseAll() {
    this.tree.collapseAll();
  }
  onMouseDblClick(e) {
    if (e.browserEvent.target.className.indexOf("twistie") >= 0) {
      return;
    }
    const element = e.element;
    const selectedExpression = this.debugService.getViewModel().getSelectedExpression();
    if (element instanceof Expression && element !== (selectedExpression == null ? void 0 : selectedExpression.expression)) {
      this.debugService.getViewModel().setSelectedExpression(element, false);
    } else if (!element) {
      this.debugService.addWatchExpression();
    }
  }
  onContextMenu(e) {
    var _a2, _b2;
    const element = e.element;
    const selection = this.tree.getSelection();
    this.watchItemType.set(element instanceof Expression ? "expression" : element instanceof Variable ? "variable" : void 0);
    const actions = [];
    const attributes = element instanceof Variable ? (_a2 = element.presentationHint) == null ? void 0 : _a2.attributes : void 0;
    this.variableReadonly.set(!!attributes && attributes.indexOf("readOnly") >= 0 || !!((_b2 = element == null ? void 0 : element.presentationHint) == null ? void 0 : _b2.lazy));
    createAndFillInContextMenuActions(this.menu, { arg: element, shouldForwardArgs: true }, actions);
    this.contextMenuService.showContextMenu({
      getAnchor: () => e.anchor,
      getActions: () => actions,
      getActionsContext: () => element && selection.includes(element) ? selection : element ? [element] : []
    });
  }
};
WatchExpressionsView = __decorate([
  __param(1, IContextMenuService),
  __param(2, IDebugService),
  __param(3, IKeybindingService),
  __param(4, IInstantiationService),
  __param(5, IViewDescriptorService),
  __param(6, IConfigurationService),
  __param(7, IContextKeyService),
  __param(8, IOpenerService),
  __param(9, IThemeService),
  __param(10, ITelemetryService),
  __param(11, IMenuService)
], WatchExpressionsView);
class WatchExpressionsDelegate {
  getHeight(_element) {
    return 22;
  }
  getTemplateId(element) {
    if (element instanceof Expression) {
      return WatchExpressionsRenderer.ID;
    }
    return VariablesRenderer.ID;
  }
}
function isDebugService(element) {
  return typeof element.getConfigurationManager === "function";
}
class WatchExpressionsDataSource {
  hasChildren(element) {
    return isDebugService(element) || element.hasChildren;
  }
  getChildren(element) {
    if (isDebugService(element)) {
      const debugService = element;
      const watchExpressions = debugService.getModel().getWatchExpressions();
      const viewModel = debugService.getViewModel();
      return Promise.all(watchExpressions.map((we) => !!we.name && !useCachedEvaluation ? we.evaluate(viewModel.focusedSession, viewModel.focusedStackFrame, "watch").then(() => we) : Promise.resolve(we)));
    }
    return element.getChildren();
  }
}
let WatchExpressionsRenderer = (_p = class extends AbstractExpressionsRenderer {
  constructor(menuService, contextKeyService, debugService, contextViewService) {
    super(debugService, contextViewService);
    this.menuService = menuService;
    this.contextKeyService = contextKeyService;
  }
  get templateId() {
    return _p.ID;
  }
  renderElement(node, index, data) {
    super.renderExpressionElement(node.element, node, data);
  }
  renderExpression(expression, data, highlights) {
    const text = typeof expression.value === "string" ? `${expression.name}:` : expression.name;
    let title;
    if (expression.type) {
      title = expression.type === expression.value ? expression.type : `${expression.type}: ${expression.value}`;
    } else {
      title = expression.value;
    }
    data.label.set(text, highlights, title);
    renderExpressionValue(expression, data.value, {
      showChanged: true,
      maxValueLength: MAX_VALUE_RENDER_LENGTH_IN_VIEWLET,
      showHover: true,
      colorize: true
    });
  }
  getInputBoxOptions(expression, settingValue) {
    if (settingValue) {
      return {
        initialValue: expression.value,
        ariaLabel: localize("typeNewValue", "Type new value"),
        onFinish: async (value, success) => {
          if (success && value) {
            const focusedFrame = this.debugService.getViewModel().focusedStackFrame;
            if (focusedFrame && (expression instanceof Variable || expression instanceof Expression)) {
              await expression.setExpression(value, focusedFrame);
              this.debugService.getViewModel().updateViews();
            }
          }
        }
      };
    }
    return {
      initialValue: expression.name ? expression.name : "",
      ariaLabel: localize("watchExpressionInputAriaLabel", "Type watch expression"),
      placeholder: localize("watchExpressionPlaceholder", "Expression to watch"),
      onFinish: (value, success) => {
        if (success && value) {
          this.debugService.renameWatchExpression(expression.getId(), value);
          ignoreViewUpdates = true;
          this.debugService.getViewModel().updateViews();
          ignoreViewUpdates = false;
        } else if (!expression.name) {
          this.debugService.removeWatchExpressions(expression.getId());
        }
      }
    };
  }
  renderActionBar(actionBar, expression) {
    const contextKeyService = getContextForWatchExpressionMenu(this.contextKeyService, expression);
    const menu = this.menuService.createMenu(MenuId.DebugWatchContext, contextKeyService);
    const primary = [];
    const context = expression;
    createAndFillInContextMenuActions(menu, { arg: context, shouldForwardArgs: false }, { primary, secondary: [] }, "inline");
    actionBar.clear();
    actionBar.context = context;
    actionBar.push(primary, { icon: true, label: false });
  }
}, _p.ID = "watchexpression", _p);
WatchExpressionsRenderer = __decorate([
  __param(0, IMenuService),
  __param(1, IContextKeyService),
  __param(2, IDebugService),
  __param(3, IContextViewService)
], WatchExpressionsRenderer);
function getContextForWatchExpressionMenu(parentContext, expression) {
  return parentContext.createOverlay([
    [CONTEXT_CAN_VIEW_MEMORY.key, expression.memoryReference !== void 0],
    [CONTEXT_WATCH_ITEM_TYPE.key, "expression"]
  ]);
}
class WatchExpressionsAccessibilityProvider {
  getWidgetAriaLabel() {
    return localize(
      { comment: ["Debug is a noun in this context, not a verb."], key: "watchAriaTreeLabel" },
      "Debug Watch Expressions"
    );
  }
  getAriaLabel(element) {
    if (element instanceof Expression) {
      return localize("watchExpressionAriaLabel", "{0}, value {1}", element.name, element.value);
    }
    return localize("watchVariableAriaLabel", "{0}, value {1}", element.name, element.value);
  }
}
class WatchExpressionsDragAndDrop {
  constructor(debugService) {
    this.debugService = debugService;
  }
  onDragOver(data) {
    if (!(data instanceof ElementsDragAndDropData)) {
      return false;
    }
    const expressions = data.elements;
    return expressions.length > 0 && expressions[0] instanceof Expression;
  }
  getDragURI(element) {
    var _a2;
    if (!(element instanceof Expression) || element === ((_a2 = this.debugService.getViewModel().getSelectedExpression()) == null ? void 0 : _a2.expression)) {
      return null;
    }
    return element.getId();
  }
  getDragLabel(elements) {
    if (elements.length === 1) {
      return elements[0].name;
    }
    return void 0;
  }
  drop(data, targetElement) {
    if (!(data instanceof ElementsDragAndDropData)) {
      return;
    }
    const draggedElement = data.elements[0];
    const watches = this.debugService.getModel().getWatchExpressions();
    const position = targetElement instanceof Expression ? watches.indexOf(targetElement) : watches.length - 1;
    this.debugService.moveWatchExpression(draggedElement.getId(), position);
  }
}
registerAction2(class Collapse2 extends ViewAction {
  constructor() {
    super({
      id: "watch.collapse",
      viewId: WATCH_VIEW_ID,
      title: localize("collapse", "Collapse All"),
      f1: false,
      icon: Codicon.collapseAll,
      precondition: CONTEXT_WATCH_EXPRESSIONS_EXIST,
      menu: {
        id: MenuId.ViewTitle,
        order: 30,
        group: "navigation",
        when: ContextKeyExpr.equals("view", WATCH_VIEW_ID)
      }
    });
  }
  runInView(_accessor, view) {
    view.collapseAll();
  }
});
const ADD_WATCH_ID = "workbench.debug.viewlet.action.addWatchExpression";
const ADD_WATCH_LABEL = localize("addWatchExpression", "Add Expression");
registerAction2(class AddWatchExpressionAction extends Action2 {
  constructor() {
    super({
      id: ADD_WATCH_ID,
      title: ADD_WATCH_LABEL,
      f1: false,
      icon: watchExpressionsAdd,
      menu: {
        id: MenuId.ViewTitle,
        group: "navigation",
        when: ContextKeyExpr.equals("view", WATCH_VIEW_ID)
      }
    });
  }
  run(accessor) {
    const debugService = accessor.get(IDebugService);
    debugService.addWatchExpression();
  }
});
const REMOVE_WATCH_EXPRESSIONS_COMMAND_ID = "workbench.debug.viewlet.action.removeAllWatchExpressions";
const REMOVE_WATCH_EXPRESSIONS_LABEL = localize("removeAllWatchExpressions", "Remove All Expressions");
registerAction2(class RemoveAllWatchExpressionsAction extends Action2 {
  constructor() {
    super({
      id: REMOVE_WATCH_EXPRESSIONS_COMMAND_ID,
      title: REMOVE_WATCH_EXPRESSIONS_LABEL,
      f1: false,
      icon: watchExpressionsRemoveAll,
      precondition: CONTEXT_WATCH_EXPRESSIONS_EXIST,
      menu: {
        id: MenuId.ViewTitle,
        order: 20,
        group: "navigation",
        when: ContextKeyExpr.equals("view", WATCH_VIEW_ID)
      }
    });
  }
  run(accessor) {
    const debugService = accessor.get(IDebugService);
    debugService.removeWatchExpressions();
  }
});
let DebugLifecycle = class DebugLifecycle2 {
  constructor(lifecycleService, debugService, configurationService, dialogService) {
    this.debugService = debugService;
    this.configurationService = configurationService;
    this.dialogService = dialogService;
    lifecycleService.onBeforeShutdown(async (e) => e.veto(this.shouldVetoShutdown(e.reason), "veto.debug"));
  }
  shouldVetoShutdown(_reason) {
    const rootSessions = this.debugService.getModel().getSessions().filter((s) => s.parentSession === void 0);
    if (rootSessions.length === 0) {
      return false;
    }
    const shouldConfirmOnExit = this.configurationService.getValue("debug").confirmOnExit;
    if (shouldConfirmOnExit === "never") {
      return false;
    }
    return this.showWindowCloseConfirmation(rootSessions.length);
  }
  async showWindowCloseConfirmation(numSessions) {
    let message;
    if (numSessions === 1) {
      message = localize(
        "debug.debugSessionCloseConfirmationSingular",
        "There is an active debug session, are you sure you want to stop it?"
      );
    } else {
      message = localize(
        "debug.debugSessionCloseConfirmationPlural",
        "There are active debug sessions, are you sure you want to stop them?"
      );
    }
    const res = await this.dialogService.confirm({
      message,
      type: "warning",
      primaryButton: localize(
        { key: "debug.stop", comment: ["&& denotes a mnemonic"] },
        "&&Stop Debugging"
      )
    });
    return !res.confirmed;
  }
};
DebugLifecycle = __decorate([
  __param(0, ILifecycleService),
  __param(1, IDebugService),
  __param(2, IConfigurationService),
  __param(3, IDialogService)
], DebugLifecycle);
const debugCategory = localize("debugCategory", "Debug");
registerColors();
Registry.as(Extensions$2.Workbench).registerWorkbenchContribution(DebugProgressContribution, 4);
Registry.as(Extensions$2.Workbench).registerWorkbenchContribution(DebugToolBar, 3);
Registry.as(Extensions$2.Workbench).registerWorkbenchContribution(DebugContentProvider, 4);
Registry.as(Extensions$2.Workbench).registerWorkbenchContribution(StatusBarColorProvider, 4);
Registry.as(Extensions$2.Workbench).registerWorkbenchContribution(DisassemblyViewContribution, 4);
Registry.as(Extensions$2.Workbench).registerWorkbenchContribution(DebugLifecycle, 4);
Registry.as(Extensions$3.Quickaccess).registerQuickAccessProvider({
  ctor: StartDebugQuickAccessProvider,
  prefix: DEBUG_QUICK_ACCESS_PREFIX,
  contextKey: "inLaunchConfigurationsPicker",
  placeholder: localize("startDebugPlaceholder", "Type the name of a launch configuration to run."),
  helpEntries: [{ description: localize("startDebuggingHelp", "Start Debugging"), commandId: SELECT_AND_START_ID }]
});
Registry.as(Extensions$3.Quickaccess).registerQuickAccessProvider({
  ctor: DebugConsoleQuickAccess,
  prefix: DEBUG_CONSOLE_QUICK_ACCESS_PREFIX,
  contextKey: "inDebugConsolePicker",
  placeholder: localize("tasksQuickAccessPlaceholder", "Type the name of a debug console to open."),
  helpEntries: [{ description: localize("tasksQuickAccessHelp", "Show All Debug Consoles"), commandId: SELECT_DEBUG_CONSOLE_ID }]
});
registerEditorContribution("editor.contrib.callStack", CallStackEditorContribution, 1);
registerEditorContribution(BREAKPOINT_EDITOR_CONTRIBUTION_ID, BreakpointEditorContribution, 1);
registerEditorContribution(EDITOR_CONTRIBUTION_ID, DebugEditorContribution, 2);
const registerDebugCommandPaletteItem = (id, title, when, precondition) => {
  MenuRegistry.appendMenuItem(MenuId.CommandPalette, {
    when: ContextKeyExpr.and(CONTEXT_DEBUGGERS_AVAILABLE, when),
    group: debugCategory,
    command: {
      id,
      title,
      category: DEBUG_COMMAND_CATEGORY,
      precondition
    }
  });
};
registerDebugCommandPaletteItem(TERMINATE_THREAD_ID, { value: localize("terminateThread", "Terminate Thread"), original: "Terminate Thread" }, CONTEXT_IN_DEBUG_MODE);
registerDebugCommandPaletteItem(STEP_OVER_ID, STEP_OVER_LABEL, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugCommandPaletteItem(STEP_INTO_ID, STEP_INTO_LABEL, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugCommandPaletteItem(STEP_INTO_TARGET_ID, STEP_INTO_TARGET_LABEL, CONTEXT_IN_DEBUG_MODE, ContextKeyExpr.and(CONTEXT_STEP_INTO_TARGETS_SUPPORTED, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped")));
registerDebugCommandPaletteItem(STEP_OUT_ID, STEP_OUT_LABEL, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugCommandPaletteItem(PAUSE_ID, PAUSE_LABEL, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("running"));
registerDebugCommandPaletteItem(STOP_ID, STOP_LABEL, CONTEXT_IN_DEBUG_MODE, ContextKeyExpr.or(CONTEXT_FOCUSED_SESSION_IS_ATTACH.toNegated(), CONTEXT_TERMINATE_DEBUGGEE_SUPPORTED));
registerDebugCommandPaletteItem(CONTINUE_ID, CONTINUE_LABEL, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugCommandPaletteItem(FOCUS_REPL_ID, { value: localize(
  { comment: ["Debug is a noun in this context, not a verb."], key: "debugFocusConsole" },
  "Focus on Debug Console View"
), original: "Focus on Debug Console View" });
registerDebugCommandPaletteItem(JUMP_TO_CURSOR_ID, { value: localize("jumpToCursor", "Jump to Cursor"), original: "Jump to Cursor" }, CONTEXT_JUMP_TO_CURSOR_SUPPORTED);
registerDebugCommandPaletteItem(JUMP_TO_CURSOR_ID, { value: localize("SetNextStatement", "Set Next Statement"), original: "Set Next Statement" }, CONTEXT_JUMP_TO_CURSOR_SUPPORTED);
registerDebugCommandPaletteItem(RunToCursorAction.ID, { value: RunToCursorAction.LABEL, original: "Run to Cursor" }, CONTEXT_DEBUGGERS_AVAILABLE);
registerDebugCommandPaletteItem(SelectionToReplAction.ID, { value: SelectionToReplAction.LABEL, original: "Evaluate in Debug Console" }, CONTEXT_IN_DEBUG_MODE);
registerDebugCommandPaletteItem(SelectionToWatchExpressionsAction.ID, { value: SelectionToWatchExpressionsAction.LABEL, original: "Add to Watch" });
registerDebugCommandPaletteItem(TOGGLE_INLINE_BREAKPOINT_ID, { value: localize("inlineBreakpoint", "Inline Breakpoint"), original: "Inline Breakpoint" });
registerDebugCommandPaletteItem(SELECT_AND_START_ID, SELECT_AND_START_LABEL, ContextKeyExpr.and(CONTEXT_DEBUGGERS_AVAILABLE, CONTEXT_DEBUG_STATE.notEqualsTo(getStateLabel(1))));
registerDebugCommandPaletteItem(NEXT_DEBUG_CONSOLE_ID, NEXT_DEBUG_CONSOLE_LABEL);
registerDebugCommandPaletteItem(PREV_DEBUG_CONSOLE_ID, PREV_DEBUG_CONSOLE_LABEL);
registerDebugCommandPaletteItem(SHOW_LOADED_SCRIPTS_ID, OPEN_LOADED_SCRIPTS_LABEL, CONTEXT_IN_DEBUG_MODE);
registerDebugCommandPaletteItem(SELECT_DEBUG_CONSOLE_ID, SELECT_DEBUG_CONSOLE_LABEL);
registerDebugCommandPaletteItem(SELECT_DEBUG_SESSION_ID, SELECT_DEBUG_SESSION_LABEL);
registerDebugCommandPaletteItem(CALLSTACK_TOP_ID, CALLSTACK_TOP_LABEL, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugCommandPaletteItem(CALLSTACK_BOTTOM_ID, CALLSTACK_BOTTOM_LABEL, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugCommandPaletteItem(CALLSTACK_UP_ID, CALLSTACK_UP_LABEL, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugCommandPaletteItem(CALLSTACK_DOWN_ID, CALLSTACK_DOWN_LABEL, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
const registerDebugViewMenuItem = (menuId, id, title, order, when, precondition, group = "navigation", icon) => {
  MenuRegistry.appendMenuItem(menuId, {
    group,
    when,
    order,
    icon,
    command: {
      id,
      title,
      icon,
      precondition
    }
  });
};
registerDebugViewMenuItem(MenuId.DebugCallStackContext, RESTART_SESSION_ID, RESTART_LABEL, 10, CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("session"), void 0, "3_modification");
registerDebugViewMenuItem(MenuId.DebugCallStackContext, DISCONNECT_ID, DISCONNECT_LABEL, 20, CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("session"), void 0, "3_modification");
registerDebugViewMenuItem(MenuId.DebugCallStackContext, DISCONNECT_AND_SUSPEND_ID, DISCONNECT_AND_SUSPEND_LABEL, 21, ContextKeyExpr.and(CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("session"), CONTEXT_SUSPEND_DEBUGGEE_SUPPORTED, CONTEXT_TERMINATE_DEBUGGEE_SUPPORTED), void 0, "3_modification");
registerDebugViewMenuItem(MenuId.DebugCallStackContext, STOP_ID, STOP_LABEL, 30, CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("session"), void 0, "3_modification");
registerDebugViewMenuItem(MenuId.DebugCallStackContext, PAUSE_ID, PAUSE_LABEL, 10, ContextKeyExpr.and(CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("thread"), CONTEXT_DEBUG_STATE.isEqualTo("running")));
registerDebugViewMenuItem(MenuId.DebugCallStackContext, CONTINUE_ID, CONTINUE_LABEL, 10, ContextKeyExpr.and(CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("thread"), CONTEXT_DEBUG_STATE.isEqualTo("stopped")));
registerDebugViewMenuItem(MenuId.DebugCallStackContext, STEP_OVER_ID, STEP_OVER_LABEL, 20, CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("thread"), CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugViewMenuItem(MenuId.DebugCallStackContext, STEP_INTO_ID, STEP_INTO_LABEL, 30, CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("thread"), CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugViewMenuItem(MenuId.DebugCallStackContext, STEP_OUT_ID, STEP_OUT_LABEL, 40, CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("thread"), CONTEXT_DEBUG_STATE.isEqualTo("stopped"));
registerDebugViewMenuItem(MenuId.DebugCallStackContext, TERMINATE_THREAD_ID, localize("terminateThread", "Terminate Thread"), 10, CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("thread"), void 0, "termination");
registerDebugViewMenuItem(MenuId.DebugCallStackContext, RESTART_FRAME_ID, localize("restartFrame", "Restart Frame"), 10, ContextKeyExpr.and(CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("stackFrame"), CONTEXT_RESTART_FRAME_SUPPORTED), CONTEXT_STACK_FRAME_SUPPORTS_RESTART);
registerDebugViewMenuItem(MenuId.DebugCallStackContext, COPY_STACK_TRACE_ID, localize("copyStackTrace", "Copy Call Stack"), 20, CONTEXT_CALLSTACK_ITEM_TYPE.isEqualTo("stackFrame"), void 0, "3_modification");
registerDebugViewMenuItem(MenuId.DebugVariablesContext, VIEW_MEMORY_ID, localize("viewMemory", "View Binary Data"), 15, CONTEXT_CAN_VIEW_MEMORY, CONTEXT_IN_DEBUG_MODE, "inline", debugInspectMemory);
registerDebugViewMenuItem(MenuId.DebugVariablesContext, SET_VARIABLE_ID, localize("setValue", "Set Value"), 10, ContextKeyExpr.or(CONTEXT_SET_VARIABLE_SUPPORTED, ContextKeyExpr.and(CONTEXT_VARIABLE_EVALUATE_NAME_PRESENT, CONTEXT_SET_EXPRESSION_SUPPORTED)), CONTEXT_VARIABLE_IS_READONLY.toNegated(), "3_modification");
registerDebugViewMenuItem(MenuId.DebugVariablesContext, COPY_VALUE_ID, localize("copyValue", "Copy Value"), 10, void 0, void 0, "5_cutcopypaste");
registerDebugViewMenuItem(MenuId.DebugVariablesContext, COPY_EVALUATE_PATH_ID, localize("copyAsExpression", "Copy as Expression"), 20, CONTEXT_VARIABLE_EVALUATE_NAME_PRESENT, void 0, "5_cutcopypaste");
registerDebugViewMenuItem(MenuId.DebugVariablesContext, ADD_TO_WATCH_ID, localize("addToWatchExpressions", "Add to Watch"), 100, CONTEXT_VARIABLE_EVALUATE_NAME_PRESENT, void 0, "z_commands");
registerDebugViewMenuItem(MenuId.DebugVariablesContext, BREAK_WHEN_VALUE_IS_READ_ID, localize("breakWhenValueIsRead", "Break on Value Read"), 200, CONTEXT_BREAK_WHEN_VALUE_IS_READ_SUPPORTED, void 0, "z_commands");
registerDebugViewMenuItem(MenuId.DebugVariablesContext, BREAK_WHEN_VALUE_CHANGES_ID, localize("breakWhenValueChanges", "Break on Value Change"), 210, CONTEXT_BREAK_WHEN_VALUE_CHANGES_SUPPORTED, void 0, "z_commands");
registerDebugViewMenuItem(MenuId.DebugVariablesContext, BREAK_WHEN_VALUE_IS_ACCESSED_ID, localize("breakWhenValueIsAccessed", "Break on Value Access"), 220, CONTEXT_BREAK_WHEN_VALUE_IS_ACCESSED_SUPPORTED, void 0, "z_commands");
registerDebugViewMenuItem(MenuId.DebugWatchContext, ADD_WATCH_ID, ADD_WATCH_LABEL, 10, void 0, void 0, "3_modification");
registerDebugViewMenuItem(MenuId.DebugWatchContext, EDIT_EXPRESSION_COMMAND_ID, localize("editWatchExpression", "Edit Expression"), 20, CONTEXT_WATCH_ITEM_TYPE.isEqualTo("expression"), void 0, "3_modification");
registerDebugViewMenuItem(MenuId.DebugWatchContext, SET_EXPRESSION_COMMAND_ID, localize("setValue", "Set Value"), 30, ContextKeyExpr.or(ContextKeyExpr.and(CONTEXT_WATCH_ITEM_TYPE.isEqualTo("expression"), CONTEXT_SET_EXPRESSION_SUPPORTED), ContextKeyExpr.and(CONTEXT_WATCH_ITEM_TYPE.isEqualTo("variable"), CONTEXT_SET_VARIABLE_SUPPORTED)), CONTEXT_VARIABLE_IS_READONLY.toNegated(), "3_modification");
registerDebugViewMenuItem(MenuId.DebugWatchContext, COPY_VALUE_ID, localize("copyValue", "Copy Value"), 40, ContextKeyExpr.or(CONTEXT_WATCH_ITEM_TYPE.isEqualTo("expression"), CONTEXT_WATCH_ITEM_TYPE.isEqualTo("variable")), CONTEXT_IN_DEBUG_MODE, "3_modification");
registerDebugViewMenuItem(MenuId.DebugWatchContext, VIEW_MEMORY_ID, localize("viewMemory", "View Binary Data"), 10, CONTEXT_CAN_VIEW_MEMORY, void 0, "inline", debugInspectMemory);
registerDebugViewMenuItem(MenuId.DebugWatchContext, REMOVE_EXPRESSION_COMMAND_ID, localize("removeWatchExpression", "Remove Expression"), 20, CONTEXT_WATCH_ITEM_TYPE.isEqualTo("expression"), void 0, "inline", watchExpressionRemove);
registerDebugViewMenuItem(MenuId.DebugWatchContext, REMOVE_WATCH_EXPRESSIONS_COMMAND_ID, REMOVE_WATCH_EXPRESSIONS_LABEL, 20, void 0, void 0, "z_commands");
MenuRegistry.appendMenuItem(MenuId.EditorTitle, { submenu: MenuId.EditorTitleRun, rememberDefaultAction: true, title: { value: localize("run", "Run or Debug..."), original: "Run or Debug..." }, icon: debugRun, group: "navigation", order: -1 });
MenuRegistry.appendMenuItem(MenuId.MenubarMainMenu, {
  submenu: MenuId.MenubarDebugMenu,
  title: {
    value: "Run",
    original: "Run",
    mnemonicTitle: localize({ key: "mRun", comment: ["&& denotes a mnemonic"] }, "&&Run")
  },
  order: 6
});
MenuRegistry.appendMenuItem(MenuId.MenubarNewBreakpointMenu, {
  group: "1_breakpoints",
  command: {
    id: TOGGLE_INLINE_BREAKPOINT_ID,
    title: localize(
      { key: "miInlineBreakpoint", comment: ["&& denotes a mnemonic"] },
      "Inline Breakp&&oint"
    )
  },
  order: 2,
  when: CONTEXT_DEBUGGERS_AVAILABLE
});
const VIEW_CONTAINER = Registry.as(Extensions$1.ViewContainersRegistry).registerViewContainer({
  id: DEBUG_PANEL_ID,
  title: localize(
    { comment: ["Debug is a noun in this context, not a verb."], key: "debugPanel" },
    "Debug Console"
  ),
  icon: debugConsoleViewIcon,
  ctorDescriptor: new SyncDescriptor(
    ViewPaneContainer,
    [DEBUG_PANEL_ID, { mergeViewWithContainerWhenSingleView: true }]
  ),
  storageId: DEBUG_PANEL_ID,
  hideIfEmpty: true,
  order: 2
}, 1, { doNotRegisterOpenCommand: true });
Registry.as(Extensions$1.ViewsRegistry).registerViews([{
  id: REPL_VIEW_ID,
  name: localize(
    { comment: ["Debug is a noun in this context, not a verb."], key: "debugPanel" },
    "Debug Console"
  ),
  containerIcon: debugConsoleViewIcon,
  canToggleVisibility: false,
  canMoveView: true,
  when: CONTEXT_DEBUGGERS_AVAILABLE,
  ctorDescriptor: new SyncDescriptor(Repl),
  openCommandActionDescriptor: {
    id: "workbench.debug.action.toggleRepl",
    mnemonicTitle: localize(
      { key: "miToggleDebugConsole", comment: ["&& denotes a mnemonic"] },
      "De&&bug Console"
    ),
    keybindings: { primary: 2048 | 1024 | 55 },
    order: 2
  }
}], VIEW_CONTAINER);
const viewContainer = Registry.as(Extensions$1.ViewContainersRegistry).registerViewContainer({
  id: VIEWLET_ID,
  title: { value: localize("run and debug", "Run and Debug"), original: "Run and Debug" },
  openCommandActionDescriptor: {
    id: VIEWLET_ID,
    mnemonicTitle: localize({ key: "miViewRun", comment: ["&& denotes a mnemonic"] }, "&&Run"),
    keybindings: { primary: 2048 | 1024 | 34 },
    order: 3
  },
  ctorDescriptor: new SyncDescriptor(DebugViewPaneContainer),
  icon: runViewIcon,
  alwaysUseContainerInfo: true,
  order: 3
}, 0);
const viewsRegistry = Registry.as(Extensions$1.ViewsRegistry);
viewsRegistry.registerViews([{ id: VARIABLES_VIEW_ID, name: localize("variables", "Variables"), containerIcon: variablesViewIcon, ctorDescriptor: new SyncDescriptor(VariablesView), order: 10, weight: 40, canToggleVisibility: true, canMoveView: true, focusCommand: { id: "workbench.debug.action.focusVariablesView" }, when: CONTEXT_DEBUG_UX.isEqualTo("default") }], viewContainer);
viewsRegistry.registerViews([{ id: WATCH_VIEW_ID, name: localize("watch", "Watch"), containerIcon: watchViewIcon, ctorDescriptor: new SyncDescriptor(WatchExpressionsView), order: 20, weight: 10, canToggleVisibility: true, canMoveView: true, focusCommand: { id: "workbench.debug.action.focusWatchView" }, when: CONTEXT_DEBUG_UX.isEqualTo("default") }], viewContainer);
viewsRegistry.registerViews([{ id: CALLSTACK_VIEW_ID, name: localize("callStack", "Call Stack"), containerIcon: callStackViewIcon, ctorDescriptor: new SyncDescriptor(CallStackView), order: 30, weight: 30, canToggleVisibility: true, canMoveView: true, focusCommand: { id: "workbench.debug.action.focusCallStackView" }, when: CONTEXT_DEBUG_UX.isEqualTo("default") }], viewContainer);
viewsRegistry.registerViews([{ id: BREAKPOINTS_VIEW_ID, name: localize("breakpoints", "Breakpoints"), containerIcon: breakpointsViewIcon, ctorDescriptor: new SyncDescriptor(BreakpointsView), order: 40, weight: 20, canToggleVisibility: true, canMoveView: true, focusCommand: { id: "workbench.debug.action.focusBreakpointsView" }, when: ContextKeyExpr.or(CONTEXT_BREAKPOINTS_EXIST, CONTEXT_DEBUG_UX.isEqualTo("default"), CONTEXT_HAS_DEBUGGED) }], viewContainer);
viewsRegistry.registerViews([{ id: LOADED_SCRIPTS_VIEW_ID, name: localize("loadedScripts", "Loaded Scripts"), containerIcon: loadedScriptsViewIcon, ctorDescriptor: new SyncDescriptor(LoadedScriptsView), order: 35, weight: 5, canToggleVisibility: true, canMoveView: true, collapsed: true, when: ContextKeyExpr.and(CONTEXT_LOADED_SCRIPTS_SUPPORTED, CONTEXT_DEBUG_UX.isEqualTo("default")) }], viewContainer);
Registry.as(EditorExtensions.EditorPane).registerEditorPane(EditorPaneDescriptor.create(DisassemblyView, DISASSEMBLY_VIEW_ID, localize("disassembly", "Disassembly")), [new SyncDescriptor(DisassemblyViewInput)]);
const configurationRegistry = Registry.as(Extensions$4.Configuration);
configurationRegistry.registerConfiguration({
  id: "debug",
  order: 20,
  title: localize("debugConfigurationTitle", "Debug"),
  type: "object",
  properties: {
    "debug.allowBreakpointsEverywhere": {
      type: "boolean",
      description: localize(
        { comment: ["This is the description for a setting"], key: "allowBreakpointsEverywhere" },
        "Allow setting breakpoints in any file."
      ),
      default: false
    },
    "debug.openExplorerOnEnd": {
      type: "boolean",
      description: localize(
        { comment: ["This is the description for a setting"], key: "openExplorerOnEnd" },
        "Automatically open the explorer view at the end of a debug session."
      ),
      default: false
    },
    "debug.inlineValues": {
      type: "string",
      "enum": ["on", "off", "auto"],
      description: localize(
        { comment: ["This is the description for a setting"], key: "inlineValues" },
        "Show variable values inline in editor while debugging."
      ),
      "enumDescriptions": [
        localize(
          "inlineValues.on",
          "Always show variable values inline in editor while debugging."
        ),
        localize(
          "inlineValues.off",
          "Never show variable values inline in editor while debugging."
        ),
        localize(
          "inlineValues.focusNoScroll",
          "Show variable values inline in editor while debugging when the language supports inline value locations."
        )
      ],
      default: "auto"
    },
    "debug.toolBarLocation": {
      enum: ["floating", "docked", "hidden"],
      markdownDescription: localize(
        { comment: ["This is the description for a setting"], key: "toolBarLocation" },
        "Controls the location of the debug toolbar. Either `floating` in all views, `docked` in the debug view, or `hidden`."
      ),
      default: "floating"
    },
    "debug.showInStatusBar": {
      enum: ["never", "always", "onFirstSessionStart"],
      enumDescriptions: [localize("never", "Never show debug in Status bar"), localize("always", "Always show debug in Status bar"), localize(
        "onFirstSessionStart",
        "Show debug in Status bar only after debug was started for the first time"
      )],
      description: localize(
        { comment: ["This is the description for a setting"], key: "showInStatusBar" },
        "Controls when the debug Status bar should be visible."
      ),
      default: "onFirstSessionStart"
    },
    "debug.internalConsoleOptions": INTERNAL_CONSOLE_OPTIONS_SCHEMA,
    "debug.console.closeOnEnd": {
      type: "boolean",
      description: localize(
        "debug.console.closeOnEnd",
        "Controls if the Debug Console should be automatically closed when the debug session ends."
      ),
      default: false
    },
    "debug.terminal.clearBeforeReusing": {
      type: "boolean",
      description: localize(
        { comment: ["This is the description for a setting"], key: "debug.terminal.clearBeforeReusing" },
        "Before starting a new debug session in an integrated or external terminal, clear the terminal."
      ),
      default: false
    },
    "debug.openDebug": {
      enum: ["neverOpen", "openOnSessionStart", "openOnFirstSessionStart", "openOnDebugBreak"],
      default: "openOnDebugBreak",
      description: localize("openDebug", "Controls when the debug view should open.")
    },
    "debug.showSubSessionsInToolBar": {
      type: "boolean",
      description: localize(
        { comment: ["This is the description for a setting"], key: "showSubSessionsInToolBar" },
        "Controls whether the debug sub-sessions are shown in the debug tool bar. When this setting is false the stop command on a sub-session will also stop the parent session."
      ),
      default: false
    },
    "debug.console.fontSize": {
      type: "number",
      description: localize(
        "debug.console.fontSize",
        "Controls the font size in pixels in the Debug Console."
      ),
      default: isMacintosh ? 12 : 14
    },
    "debug.console.fontFamily": {
      type: "string",
      description: localize(
        "debug.console.fontFamily",
        "Controls the font family in the Debug Console."
      ),
      default: "default"
    },
    "debug.console.lineHeight": {
      type: "number",
      description: localize(
        "debug.console.lineHeight",
        "Controls the line height in pixels in the Debug Console. Use 0 to compute the line height from the font size."
      ),
      default: 0
    },
    "debug.console.wordWrap": {
      type: "boolean",
      description: localize(
        "debug.console.wordWrap",
        "Controls if the lines should wrap in the Debug Console."
      ),
      default: true
    },
    "debug.console.historySuggestions": {
      type: "boolean",
      description: localize(
        "debug.console.historySuggestions",
        "Controls if the Debug Console should suggest previously typed input."
      ),
      default: true
    },
    "debug.console.collapseIdenticalLines": {
      type: "boolean",
      description: localize(
        "debug.console.collapseIdenticalLines",
        "Controls if the Debug Console should collapse identical lines and show a number of occurrences with a badge."
      ),
      default: true
    },
    "debug.console.acceptSuggestionOnEnter": {
      enum: ["off", "on"],
      description: localize(
        "debug.console.acceptSuggestionOnEnter",
        "Controls whether suggestions should be accepted on Enter in the Debug Console. Enter is also used to evaluate whatever is typed in the Debug Console."
      ),
      default: "off"
    },
    "launch": {
      type: "object",
      description: localize(
        { comment: ["This is the description for a setting"], key: "launch" },
        "Global debug launch configuration. Should be used as an alternative to 'launch.json' that is shared across workspaces."
      ),
      default: { configurations: [], compounds: [] },
      $ref: launchSchemaId
    },
    "debug.focusWindowOnBreak": {
      type: "boolean",
      description: localize(
        "debug.focusWindowOnBreak",
        "Controls whether the workbench window should be focused when the debugger breaks."
      ),
      default: true
    },
    "debug.focusEditorOnBreak": {
      type: "boolean",
      description: localize(
        "debug.focusEditorOnBreak",
        "Controls whether the editor should be focused when the debugger breaks."
      ),
      default: true
    },
    "debug.onTaskErrors": {
      enum: ["debugAnyway", "showErrors", "prompt", "abort"],
      enumDescriptions: [localize("debugAnyway", "Ignore task errors and start debugging."), localize("showErrors", "Show the Problems view and do not start debugging."), localize("prompt", "Prompt user."), localize("cancel", "Cancel debugging.")],
      description: localize(
        "debug.onTaskErrors",
        "Controls what to do when errors are encountered after running a preLaunchTask."
      ),
      default: "prompt"
    },
    "debug.showBreakpointsInOverviewRuler": {
      type: "boolean",
      description: localize(
        { comment: ["This is the description for a setting"], key: "showBreakpointsInOverviewRuler" },
        "Controls whether breakpoints should be shown in the overview ruler."
      ),
      default: false
    },
    "debug.showInlineBreakpointCandidates": {
      type: "boolean",
      description: localize(
        { comment: ["This is the description for a setting"], key: "showInlineBreakpointCandidates" },
        "Controls whether inline breakpoints candidate decorations should be shown in the editor while debugging."
      ),
      default: true
    },
    "debug.saveBeforeStart": {
      description: localize(
        "debug.saveBeforeStart",
        "Controls what editors to save before starting a debug session."
      ),
      enum: ["allEditorsInActiveGroup", "nonUntitledEditorsInActiveGroup", "none"],
      enumDescriptions: [
        localize(
          "debug.saveBeforeStart.allEditorsInActiveGroup",
          "Save all editors in the active group before starting a debug session."
        ),
        localize(
          "debug.saveBeforeStart.nonUntitledEditorsInActiveGroup",
          "Save all editors in the active group except untitled ones before starting a debug session."
        ),
        localize(
          "debug.saveBeforeStart.none",
          "Don't save any editors before starting a debug session."
        )
      ],
      default: "allEditorsInActiveGroup",
      scope: 5
    },
    "debug.confirmOnExit": {
      description: localize(
        "debug.confirmOnExit",
        "Controls whether to confirm when the window closes if there are active debug sessions."
      ),
      type: "string",
      enum: ["never", "always"],
      enumDescriptions: [
        localize("debug.confirmOnExit.never", "Never confirm."),
        localize(
          "debug.confirmOnExit.always",
          "Always confirm if there are debug sessions."
        )
      ],
      default: "never"
    },
    "debug.disassemblyView.showSourceCode": {
      type: "boolean",
      default: true,
      description: localize(
        "debug.disassemblyView.showSourceCode",
        "Show Source Code in Disassembly View."
      )
    },
    "debug.autoExpandLazyVariables": {
      type: "boolean",
      default: false,
      description: localize(
        "debug.autoExpandLazyVariables",
        "Automatically show values for variables that are lazily resolved by the debugger, such as getters."
      )
    },
    "debug.enableStatusBarColor": {
      type: "boolean",
      description: localize("debug.enableStatusBarColor", "Color status bar when debugger is active"),
      default: true
    }
  }
});
const original = DebugService.prototype["showError"];
DebugService.prototype["showError"] = function(message, errorActions) {
  return original.call(this, message, errorActions, false);
};
function getServiceOverride() {
  return {
    ...getServiceOverride$1(),
    [ILanguageFeaturesService.toString()]: new SyncDescriptor(LanguageFeaturesService, [], true),
    [IDebugService.toString()]: new SyncDescriptor(DebugService, [], true),
    [IConfigurationResolverService.toString()]: new SyncDescriptor(ConfigurationResolverService, [], true)
  };
}
export {
  getServiceOverride as default
};
