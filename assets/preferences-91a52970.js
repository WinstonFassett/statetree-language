var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { c as localize, gu as __decorate, gv as __param, rH as EditorModel, vB as UILabelProvider, xY as AriaLabelProvider, vs as UserSettingsLabelProvider, e9 as isString, pd as ExtensionIdentifier, bE as coalesce, vu as ResolvedKeybindingItem, hm as distinct, h as MenuRegistry, rO as Language, a$ as IKeybindingService, h5 as IExtensionService, xZ as or, x_ as matchesCamelCase, x$ as matchesWords, y0 as compareIgnoreCase, hC as isEmptyObject, y1 as matchesContiguousSubString, ue as equalsIgnoreCase, y2 as matchesPrefix, iM as ExtensionIdentifierMap, rk as EditorInput, cH as OS, b1 as IInstantiationService, a2 as URI, br as Schemas, hy as IPreferencesService, y3 as isStringArray, av as Color, e7 as isObject, js as isUndefinedOrNull, aD as Emitter, Z as Registry, _ as Extensions, ay as IConfigurationService, xu as visit, y4 as SettingMatchType, bP as withNullAsUndefined, hu as OVERRIDE_PROPERTY_REGEX, D as Disposable, l5 as tail, S as Selection, k as Range, q4 as flatten, y5 as FOLDER_SETTINGS_PATH, y6 as validateSettingsEditorOptions, kX as SIDE_GROUP, ls as DEFAULT_EDITOR_ASSOCIATION, y7 as USE_SPLIT_JSON_SETTING, y8 as DEFAULT_SETTINGS_EDITOR_SETTING, rY as TextResourceEditorInput, li as SideBySideEditorInput, ht as parse$1, hF as getErrorMessage, pt as getCodeEditor, eW as SuggestController, y9 as getDefaultValue, f3 as CoreEditingCommands, gx as IEditorService, l3 as IEditorGroupsService, h4 as ITextFileService, al as INotificationService, d7 as IWorkspaceContextService, hw as IUserDataProfileService, hx as IUserDataProfilesService, a_ as ITextModelService, a4 as IModelService, i1 as IJSONEditingService, bb as ILanguageService, b0 as ILabelService, iv as IRemoteAgentService, pO as ITextEditorService, ya as createRegExp, jI as IProductService, yb as IExtensionManagementService, yc as IWorkbenchExtensionEnablementService, W as escapeRegExpCharacters, gM as n, aL as registerIcon, aM as Codicon, r4 as BaseActionViewItem, ah as $$6, aK as ThemeIcon, aI as addDisposableListener, fH as EventHelper, aJ as EventType, aG as append, bT as StandardKeyboardEvent, bB as isEqual, ct as IContextMenuService, aE as Widget, cA as ActionBar, cy as Action, i5 as isWorkspaceFolder, hR as IWorkbenchEnvironmentService, dj as asCssVariable, kr as badgeBackground, ks as badgeForeground, ca as contrastBorder, bY as trackFocus, yd as ContextScopedHistoryInputBox, b_ as getTotalWidth, dW as IContextViewService, I as IContextKeyService, dw as showHistoryKeybindingHint, M as MarkdownString, ye as createFastDomNode, dx as defaultInputBoxStyles, i4 as Promises, cn as clearNode, fn as timeout, cG as KeybindingLabel, yf as defaultKeybindingLabelStyles, aS as Dimension, a6 as DisposableStore, aq as toDisposable, dJ as editorWidgetBackground, dQ as editorWidgetForeground, dK as widgetShadow, d as alert, cL as registerThemingParticipant, yg as selectionBackground, fK as inputBackground, fJ as inputForeground, e2 as editorSelectionBackground, wb as mixin, wU as getSimpleEditorOptions, hg as ServiceCollection, wS as CodeEditorWidget, yh as EditorExtensionsRegistry, eT as SnippetController2, yi as ContextMenuController, yj as MenuPreventer, yk as SelectionClipboardContributionID, bo as Event, aT as isMacintosh, yl as ensureValidWordDefinition, ym as getWordAtText, cP as EditOperation, P as Position, yn as inputPlaceholderForeground, gy as asCssVariableWithDefault, fL as inputBorder, a3 as ILanguageFeaturesService, f as registerColor, cb as transparent, aw as RGBA, kA as PANEL_BORDER, wZ as selectBackground, yo as selectForeground, wY as selectBorder, dT as editorWidgetBorder, yp as checkboxBackground, yq as checkboxForeground, yr as checkboxBorder, ys as listHoverBackground, dV as focusBorder, lg as EditorPane, dr as Delayer, yt as CONTEXT_KEYBINDINGS_EDITOR, yu as CONTEXT_KEYBINDINGS_SEARCH_FOCUS, yv as CONTEXT_KEYBINDING_FOCUS, yw as KEYBINDINGS_EDITOR_COMMAND_RECORD_SEARCH_KEYS, yx as KEYBINDINGS_EDITOR_COMMAND_SORTBY_PRECEDENCE, xN as registerNavigableContainer, go as isIOS, yy as KEYBINDINGS_EDITOR_COMMAND_CLEAR_SEARCH_RESULTS, yz as getInputBoxStyle, kw as ToolBar, yA as ToggleActionViewItem, dy as defaultToggleStyles, xB as WorkbenchTable, cc as editorBackground, i as MenuId, fc as isIMenuItem, aP as getDomNodePagePosition, cE as Separator, yB as KEYBINDINGS_EDITOR_COMMAND_DEFINE, yC as KEYBINDINGS_EDITOR_COMMAND_ADD, yD as KEYBINDINGS_EDITOR_COMMAND_DEFINE_WHEN, yE as KEYBINDINGS_EDITOR_COMMAND_REMOVE, yF as KEYBINDINGS_EDITOR_COMMAND_RESET, yG as KEYBINDINGS_EDITOR_COMMAND_SHOW_SIMILAR, yH as KEYBINDINGS_EDITOR_COMMAND_COPY, yI as KEYBINDINGS_EDITOR_COMMAND_COPY_COMMAND, yJ as KEYBINDINGS_EDITOR_COMMAND_COPY_COMMAND_TITLE, b7 as HighlightedLabel, yK as tableOddRowsBackgroundColor, w_ as foreground, m1 as WORKBENCH_BACKGROUND, ll as listActiveSelectionForeground, lm as listActiveSelectionBackground, yL as listInactiveSelectionForeground, yM as listInactiveSelectionBackground, yN as listFocusForeground, yO as listFocusBackground, yP as listHoverForeground, cu as ITelemetryService, aQ as IThemeService, yQ as IKeybindingEditingService, v as IClipboardService, aa as IStorageService, yR as finalHandler, yS as IExtensionsWorkbenchService, yT as CONTEXT_WHEN_FOCUS, R as RawContextKey, k0 as getIconClasses, a0 as CommandsRegistry, as as IQuickInputService, c6 as MarkerSeverity, g as ModelDecorationOptions, yU as overrideIdentifiersFromKey, jC as SubmenuAction, aW as ResourceMap, F as CodeActionKind, c3 as IMarkerService, g7 as IWorkspaceTrustManagementService, hz as IUriIdentityService, d2 as isWindows, yV as getExperimentalExtensionToggleData, yW as getDisallowedIgnoredSettings, j as RunOnceScheduler, jG as IHoverService, yX as IUserDataSyncEnablementService, ak as ICommandService, yY as POLICY_SETTING_TAG, yZ as MODIFIED_SETTING_TAG, y_ as REQUIRE_TRUSTED_WORKSPACE_SETTING_TAG, y$ as SettingValueType, z0 as EditPresentationTypes, d6 as withUndefinedAsNull, oW as isFalsyOrWhitespace, bn as addStandardDisposableListener, jL as isAncestor, z1 as getSelectBoxStyles, wQ as SelectBox, k9 as BrowserFeatures, an as disposableTimeout, c$ as Button, rF as defaultButtonStyles, lT as findParentWithClass, u7 as InputBox, eU as isDefined, dB as Toggle, z2 as unthemedToggleStyles, b$ as MarkdownRenderer, z3 as getDefaultIgnoredSettings, z4 as SETTINGS_EDITOR_COMMAND_SHOW_CONTEXT_MENU, fx as isDisposable, ap as onUnexpectedError, z5 as getLanguageTagSettingPlainKey, c2 as IOpenerService, aX as dispose, z6 as LANGUAGE_SETTING_TAG, z7 as WorkbenchObjectTree, z8 as DefaultStyleController, gU as createStyleSheet, z9 as RenderIndentGuides, za as getListStyles, bz as IListService, cO as status, xH as CachedListVirtualDelegate, zb as ObjectTreeModel, oN as renderMarkdownAsPlaintext, bJ as Iterable, up as DropdownMenuActionViewItem, zc as EXTENSION_SETTING_TAG, zd as FEATURE_SETTING_TAG, ze as GENERAL_TAG_SETTING_TAG, zf as WORKSPACE_TRUST_SETTING_TAG, zg as ID_SETTING_TAG, pC as ThrottledDelayer, zh as CONTEXT_SETTINGS_EDITOR, zi as CONTEXT_SETTINGS_SEARCH_FOCUS, zj as CONTEXT_TOC_ROW_FOCUS, zk as CONTEXT_SETTINGS_ROW_FOCUS, zl as SETTINGS_EDITOR_COMMAND_CLEAR_SEARCH_RESULTS, zm as SETTINGS_EDITOR_COMMAND_SUGGEST_FILTERS, bi as SplitView, bp as Sizing, a7 as CancellationToken, ed as CancellationTokenSource, fv as isCancellationError, bh as hide, zn as IntervalTimer, ud as fromNow, bq as show, gA as editorForeground, fN as ITextResourceConfigurationService, zo as IPreferencesSearchService, fM as ILogService, zp as IUserDataSyncWorkbenchService, hT as IWorkbenchAssignmentService, vb as IEnvironmentService, rS as IExtensionGalleryService, zq as IUserDataSyncService, hP as Extensions$1, hG as workbenchConfigurationNodeBase, q5 as RegisteredEditorPriority, lo as IEditorResolverService, m7 as EditorExtensions, pn as EditorPaneDescriptor, hh as SyncDescriptor, h1 as Extensions$2, a as registerEditorContribution, bF as registerAction2, f6 as Action2, cZ as MutableDisposable, C as ContextKeyExpr, l7 as ResourceContextKey, zr as CONTEXT_SETTINGS_JSON_EDITOR, o6 as WorkbenchStateContext, zs as PICK_WORKSPACE_FOLDER_COMMAND_ID, nu as ExplorerRootContext, mI as ExplorerFolderContext, f5 as Context, K as KeyChord, zt as KEYBINDINGS_EDITOR_SHOW_DEFAULT_KEYBINDINGS, zu as KEYBINDINGS_EDITOR_SHOW_EXTENSION_KEYBINDINGS, zv as KEYBINDINGS_EDITOR_SHOW_USER_KEYBINDINGS, zw as KEYBINDINGS_EDITOR_COMMAND_CLEAR_SEARCH_HISTORY, bu as KeybindingsRegistry, zx as InputFocusedContext, zy as KEYBINDINGS_EDITOR_COMMAND_SEARCH, zz as KEYBINDINGS_EDITOR_COMMAND_FOCUS_KEYBINDINGS, zA as KEYBINDINGS_EDITOR_COMMAND_REJECT_WHEN, zB as KEYBINDINGS_EDITOR_COMMAND_ACCEPT_WHEN, bG as isCodeEditor, zC as DEFINE_KEYBINDING_EDITOR_CONTRIB_ID, gN as isBoolean, zD as KeybindingsEditingService } from "./theme-defaults-1df7f429.js";
import { g as getAllUnboundCommands } from "./unboundCommands-0fd8d661.js";
import { x as FOLDER_SCOPES, W as WORKSPACE_SCOPES, R as RangeHighlightDecorations, A as APPLY_ALL_PROFILES_SETTING, y as IWorkbenchConfigurationService, z as APPLICATION_SCOPES, B as REMOTE_MACHINE_SCOPES, L as LOCAL_MACHINE_SCOPES } from "./index-ca8d23e0.js";
import { D as DEFAULT_FONT_FAMILY } from "./style-4f366664.js";
import { S as SimpleIconLabel } from "./simpleIconLabel-ea6a3011.js";
import "./index-3bddf13b.js";
const KEYBINDING_ENTRY_TEMPLATE_ID = "keybinding.entry.template";
const SOURCE_SYSTEM = localize("default", "System");
const SOURCE_EXTENSION = localize("extension", "Extension");
const SOURCE_USER = localize("user", "User");
const wordFilter = or(matchesPrefix, matchesWords, matchesContiguousSubString);
const SOURCE_REGEX = /@source:\s*(user|default|system|extension)/i;
const EXTENSION_REGEX = /@ext:\s*((".+")|([^\s]+))/i;
let KeybindingsEditorModel = class KeybindingsEditorModel2 extends EditorModel {
  constructor(os, keybindingsService, extensionService) {
    super();
    this.keybindingsService = keybindingsService;
    this.extensionService = extensionService;
    this._keybindingItems = [];
    this._keybindingItemsSortedByPrecedence = [];
    this.modifierLabels = {
      ui: UILabelProvider.modifierLabels[os],
      aria: AriaLabelProvider.modifierLabels[os],
      user: UserSettingsLabelProvider.modifierLabels[os]
    };
  }
  fetch(searchValue, sortByPrecedence = false) {
    let keybindingItems = sortByPrecedence ? this._keybindingItemsSortedByPrecedence : this._keybindingItems;
    const commandIdMatches = /@command:\s*(.+)/i.exec(searchValue);
    if (commandIdMatches && commandIdMatches[1]) {
      return keybindingItems.filter((k) => k.command === commandIdMatches[1]).map(
        (keybindingItem) => ({ id: KeybindingsEditorModel2.getId(keybindingItem), keybindingItem, templateId: KEYBINDING_ENTRY_TEMPLATE_ID })
      );
    }
    if (SOURCE_REGEX.test(searchValue)) {
      keybindingItems = this.filterBySource(keybindingItems, searchValue);
      searchValue = searchValue.replace(SOURCE_REGEX, "");
    } else {
      const extensionMatches = EXTENSION_REGEX.exec(searchValue);
      if (extensionMatches && (extensionMatches[2] || extensionMatches[3])) {
        const extensionId = extensionMatches[2] ? extensionMatches[2].substring(1, extensionMatches[2].length - 1) : extensionMatches[3];
        keybindingItems = this.filterByExtension(keybindingItems, extensionId);
        searchValue = searchValue.replace(EXTENSION_REGEX, "");
      } else {
        const keybindingMatches = /@keybinding:\s*((\".+\")|(\S+))/i.exec(searchValue);
        if (keybindingMatches && (keybindingMatches[2] || keybindingMatches[3])) {
          searchValue = keybindingMatches[2] || `"${keybindingMatches[3]}"`;
        }
      }
    }
    searchValue = searchValue.trim();
    if (!searchValue) {
      return keybindingItems.map(
        (keybindingItem) => ({ id: KeybindingsEditorModel2.getId(keybindingItem), keybindingItem, templateId: KEYBINDING_ENTRY_TEMPLATE_ID })
      );
    }
    return this.filterByText(keybindingItems, searchValue);
  }
  filterBySource(keybindingItems, searchValue) {
    if (/@source:\s*default/i.test(searchValue) || /@source:\s*system/i.test(searchValue)) {
      return keybindingItems.filter((k) => k.source === SOURCE_SYSTEM);
    }
    if (/@source:\s*user/i.test(searchValue)) {
      return keybindingItems.filter((k) => k.source === SOURCE_USER);
    }
    if (/@source:\s*extension/i.test(searchValue)) {
      return keybindingItems.filter((k) => !isString(k.source) || k.source === SOURCE_EXTENSION);
    }
    return keybindingItems;
  }
  filterByExtension(keybindingItems, extension) {
    extension = extension.toLowerCase().trim();
    return keybindingItems.filter((k) => {
      var _a2;
      return !isString(k.source) && (ExtensionIdentifier.equals(k.source.identifier, extension) || ((_a2 = k.source.displayName) == null ? void 0 : _a2.toLowerCase()) === extension.toLowerCase());
    });
  }
  filterByText(keybindingItems, searchValue) {
    const quoteAtFirstChar = searchValue.charAt(0) === '"';
    const quoteAtLastChar = searchValue.charAt(searchValue.length - 1) === '"';
    const completeMatch = quoteAtFirstChar && quoteAtLastChar;
    if (quoteAtFirstChar) {
      searchValue = searchValue.substring(1);
    }
    if (quoteAtLastChar) {
      searchValue = searchValue.substring(0, searchValue.length - 1);
    }
    searchValue = searchValue.trim();
    const result = [];
    const words = searchValue.split(" ");
    const keybindingWords = this.splitKeybindingWords(words);
    for (const keybindingItem of keybindingItems) {
      const keybindingMatches = new KeybindingItemMatches(
        this.modifierLabels,
        keybindingItem,
        searchValue,
        words,
        keybindingWords,
        completeMatch
      );
      if (keybindingMatches.commandIdMatches || keybindingMatches.commandLabelMatches || keybindingMatches.commandDefaultLabelMatches || keybindingMatches.sourceMatches || keybindingMatches.whenMatches || keybindingMatches.keybindingMatches || keybindingMatches.extensionIdMatches || keybindingMatches.extensionLabelMatches) {
        result.push({
          id: KeybindingsEditorModel2.getId(keybindingItem),
          templateId: KEYBINDING_ENTRY_TEMPLATE_ID,
          commandLabelMatches: keybindingMatches.commandLabelMatches || void 0,
          commandDefaultLabelMatches: keybindingMatches.commandDefaultLabelMatches || void 0,
          keybindingItem,
          keybindingMatches: keybindingMatches.keybindingMatches || void 0,
          commandIdMatches: keybindingMatches.commandIdMatches || void 0,
          sourceMatches: keybindingMatches.sourceMatches || void 0,
          whenMatches: keybindingMatches.whenMatches || void 0,
          extensionIdMatches: keybindingMatches.extensionIdMatches || void 0,
          extensionLabelMatches: keybindingMatches.extensionLabelMatches || void 0
        });
      }
    }
    return result;
  }
  splitKeybindingWords(wordsSeparatedBySpaces) {
    const result = [];
    for (const word of wordsSeparatedBySpaces) {
      result.push(...coalesce(word.split("+")));
    }
    return result;
  }
  async resolve(actionLabels = /* @__PURE__ */ new Map()) {
    const extensions = new ExtensionIdentifierMap();
    for (const extension of this.extensionService.extensions) {
      extensions.set(extension.identifier, extension);
    }
    this._keybindingItemsSortedByPrecedence = [];
    const boundCommands = /* @__PURE__ */ new Map();
    for (const keybinding of this.keybindingsService.getKeybindings()) {
      if (keybinding.command) {
        this._keybindingItemsSortedByPrecedence.push(KeybindingsEditorModel2.toKeybindingEntry(keybinding.command, keybinding, actionLabels, extensions));
        boundCommands.set(keybinding.command, true);
      }
    }
    const commandsWithDefaultKeybindings = this.keybindingsService.getDefaultKeybindings().map((keybinding) => keybinding.command);
    for (const command of getAllUnboundCommands(boundCommands)) {
      const keybindingItem = new ResolvedKeybindingItem(
        void 0,
        command,
        null,
        void 0,
        commandsWithDefaultKeybindings.indexOf(command) === -1,
        null,
        false
      );
      this._keybindingItemsSortedByPrecedence.push(KeybindingsEditorModel2.toKeybindingEntry(command, keybindingItem, actionLabels, extensions));
    }
    this._keybindingItemsSortedByPrecedence = distinct(this._keybindingItemsSortedByPrecedence, (keybindingItem) => KeybindingsEditorModel2.getId(keybindingItem));
    this._keybindingItems = this._keybindingItemsSortedByPrecedence.slice(0).sort((a, b) => KeybindingsEditorModel2.compareKeybindingData(a, b));
    return super.resolve();
  }
  static getId(keybindingItem) {
    var _a2;
    return keybindingItem.command + (((_a2 = keybindingItem == null ? void 0 : keybindingItem.keybinding) == null ? void 0 : _a2.getAriaLabel()) ?? "") + keybindingItem.when + (isString(keybindingItem.source) ? keybindingItem.source : keybindingItem.source.identifier.value);
  }
  static compareKeybindingData(a, b) {
    if (a.keybinding && !b.keybinding) {
      return -1;
    }
    if (b.keybinding && !a.keybinding) {
      return 1;
    }
    if (a.commandLabel && !b.commandLabel) {
      return -1;
    }
    if (b.commandLabel && !a.commandLabel) {
      return 1;
    }
    if (a.commandLabel && b.commandLabel) {
      if (a.commandLabel !== b.commandLabel) {
        return a.commandLabel.localeCompare(b.commandLabel);
      }
    }
    if (a.command === b.command) {
      return a.keybindingItem.isDefault ? 1 : -1;
    }
    return a.command.localeCompare(b.command);
  }
  static toKeybindingEntry(command, keybindingItem, actions, extensions) {
    var _a2;
    const menuCommand = MenuRegistry.getCommand(command);
    const editorActionLabel = actions.get(command);
    let source = SOURCE_USER;
    if (keybindingItem.isDefault) {
      const extensionId = keybindingItem.extensionId ?? (keybindingItem.resolvedKeybinding ? void 0 : (_a2 = menuCommand == null ? void 0 : menuCommand.source) == null ? void 0 : _a2.id);
      source = extensionId ? extensions.get(extensionId) ?? SOURCE_EXTENSION : SOURCE_SYSTEM;
    }
    return {
      keybinding: keybindingItem.resolvedKeybinding,
      keybindingItem,
      command,
      commandLabel: KeybindingsEditorModel2.getCommandLabel(menuCommand, editorActionLabel),
      commandDefaultLabel: KeybindingsEditorModel2.getCommandDefaultLabel(menuCommand),
      when: keybindingItem.when ? keybindingItem.when.serialize() : "",
      source
    };
  }
  static getCommandDefaultLabel(menuCommand) {
    if (!Language.isDefaultVariant()) {
      if (menuCommand && menuCommand.title && menuCommand.title.original) {
        const category2 = menuCommand.category ? menuCommand.category.original : void 0;
        const title = menuCommand.title.original;
        return category2 ? localize("cat.title", "{0}: {1}", category2, title) : title;
      }
    }
    return null;
  }
  static getCommandLabel(menuCommand, editorActionLabel) {
    if (menuCommand) {
      const category2 = menuCommand.category ? typeof menuCommand.category === "string" ? menuCommand.category : menuCommand.category.value : void 0;
      const title = typeof menuCommand.title === "string" ? menuCommand.title : menuCommand.title.value;
      return category2 ? localize("cat.title", "{0}: {1}", category2, title) : title;
    }
    if (editorActionLabel) {
      return editorActionLabel;
    }
    return "";
  }
};
KeybindingsEditorModel = __decorate([
  __param(1, IKeybindingService),
  __param(2, IExtensionService)
], KeybindingsEditorModel);
class KeybindingItemMatches {
  constructor(modifierLabels, keybindingItem, searchValue, words, keybindingWords, completeMatch) {
    this.modifierLabels = modifierLabels;
    this.commandIdMatches = null;
    this.commandLabelMatches = null;
    this.commandDefaultLabelMatches = null;
    this.sourceMatches = null;
    this.whenMatches = null;
    this.keybindingMatches = null;
    this.extensionIdMatches = null;
    this.extensionLabelMatches = null;
    if (!completeMatch) {
      this.commandIdMatches = this.matches(searchValue, keybindingItem.command, or(matchesWords, matchesCamelCase), words);
      this.commandLabelMatches = keybindingItem.commandLabel ? this.matches(searchValue, keybindingItem.commandLabel, (word, wordToMatchAgainst) => matchesWords(word, keybindingItem.commandLabel, true), words) : null;
      this.commandDefaultLabelMatches = keybindingItem.commandDefaultLabel ? this.matches(searchValue, keybindingItem.commandDefaultLabel, (word, wordToMatchAgainst) => matchesWords(word, keybindingItem.commandDefaultLabel, true), words) : null;
      this.whenMatches = keybindingItem.when ? this.matches(null, keybindingItem.when, or(matchesWords, matchesCamelCase), words) : null;
      if (isString(keybindingItem.source)) {
        this.sourceMatches = this.matches(searchValue, keybindingItem.source, (word, wordToMatchAgainst) => matchesWords(word, keybindingItem.source, true), words);
      } else {
        this.extensionLabelMatches = keybindingItem.source.displayName ? this.matches(searchValue, keybindingItem.source.displayName, (word, wordToMatchAgainst) => matchesWords(word, keybindingItem.commandLabel, true), words) : null;
      }
    }
    this.keybindingMatches = keybindingItem.keybinding ? this.matchesKeybinding(keybindingItem.keybinding, searchValue, keybindingWords, completeMatch) : null;
  }
  matches(searchValue, wordToMatchAgainst, wordMatchesFilter, words) {
    let matches = searchValue ? wordFilter(searchValue, wordToMatchAgainst) : null;
    if (!matches) {
      matches = this.matchesWords(words, wordToMatchAgainst, wordMatchesFilter);
    }
    if (matches) {
      matches = this.filterAndSort(matches);
    }
    return matches;
  }
  matchesWords(words, wordToMatchAgainst, wordMatchesFilter) {
    let matches = [];
    for (const word of words) {
      const wordMatches = wordMatchesFilter(word, wordToMatchAgainst);
      if (wordMatches) {
        matches = [...matches || [], ...wordMatches];
      } else {
        matches = null;
        break;
      }
    }
    return matches;
  }
  filterAndSort(matches) {
    return distinct(matches, (a) => a.start + "." + a.end).filter((match) => !matches.some(
      (m) => !(m.start === match.start && m.end === match.end) && (m.start <= match.start && m.end >= match.end)
    )).sort((a, b) => a.start - b.start);
  }
  matchesKeybinding(keybinding, searchValue, words, completeMatch) {
    const [firstPart, chordPart] = keybinding.getChords();
    const userSettingsLabel = keybinding.getUserSettingsLabel();
    const ariaLabel = keybinding.getAriaLabel();
    const label = keybinding.getLabel();
    if (userSettingsLabel && compareIgnoreCase(searchValue, userSettingsLabel) === 0 || ariaLabel && compareIgnoreCase(searchValue, ariaLabel) === 0 || label && compareIgnoreCase(searchValue, label) === 0) {
      return {
        firstPart: this.createCompleteMatch(firstPart),
        chordPart: this.createCompleteMatch(chordPart)
      };
    }
    const firstPartMatch = {};
    let chordPartMatch = {};
    const matchedWords = [];
    const firstPartMatchedWords = [];
    let chordPartMatchedWords = [];
    let matchFirstPart = true;
    for (let index = 0; index < words.length; index++) {
      const word = words[index];
      let firstPartMatched = false;
      let chordPartMatched = false;
      matchFirstPart = matchFirstPart && !firstPartMatch.keyCode;
      let matchChordPart = !chordPartMatch.keyCode;
      if (matchFirstPart) {
        firstPartMatched = this.matchPart(firstPart, firstPartMatch, word, completeMatch);
        if (firstPartMatch.keyCode) {
          for (const cordPartMatchedWordIndex of chordPartMatchedWords) {
            if (firstPartMatchedWords.indexOf(cordPartMatchedWordIndex) === -1) {
              matchedWords.splice(matchedWords.indexOf(cordPartMatchedWordIndex), 1);
            }
          }
          chordPartMatch = {};
          chordPartMatchedWords = [];
          matchChordPart = false;
        }
      }
      if (matchChordPart) {
        chordPartMatched = this.matchPart(chordPart, chordPartMatch, word, completeMatch);
      }
      if (firstPartMatched) {
        firstPartMatchedWords.push(index);
      }
      if (chordPartMatched) {
        chordPartMatchedWords.push(index);
      }
      if (firstPartMatched || chordPartMatched) {
        matchedWords.push(index);
      }
      matchFirstPart = matchFirstPart && this.isModifier(word);
    }
    if (matchedWords.length !== words.length) {
      return null;
    }
    if (completeMatch) {
      if (!this.isCompleteMatch(firstPart, firstPartMatch)) {
        return null;
      }
      if (!isEmptyObject(chordPartMatch) && !this.isCompleteMatch(chordPart, chordPartMatch)) {
        return null;
      }
    }
    return this.hasAnyMatch(firstPartMatch) || this.hasAnyMatch(chordPartMatch) ? { firstPart: firstPartMatch, chordPart: chordPartMatch } : null;
  }
  matchPart(chord, match, word, completeMatch) {
    let matched = false;
    if (this.matchesMetaModifier(chord, word)) {
      matched = true;
      match.metaKey = true;
    }
    if (this.matchesCtrlModifier(chord, word)) {
      matched = true;
      match.ctrlKey = true;
    }
    if (this.matchesShiftModifier(chord, word)) {
      matched = true;
      match.shiftKey = true;
    }
    if (this.matchesAltModifier(chord, word)) {
      matched = true;
      match.altKey = true;
    }
    if (this.matchesKeyCode(chord, word, completeMatch)) {
      match.keyCode = true;
      matched = true;
    }
    return matched;
  }
  matchesKeyCode(chord, word, completeMatch) {
    if (!chord) {
      return false;
    }
    const ariaLabel = chord.keyAriaLabel || "";
    if (completeMatch || ariaLabel.length === 1 || word.length === 1) {
      if (compareIgnoreCase(ariaLabel, word) === 0) {
        return true;
      }
    } else {
      if (matchesContiguousSubString(word, ariaLabel)) {
        return true;
      }
    }
    return false;
  }
  matchesMetaModifier(chord, word) {
    if (!chord) {
      return false;
    }
    if (!chord.metaKey) {
      return false;
    }
    return this.wordMatchesMetaModifier(word);
  }
  matchesCtrlModifier(chord, word) {
    if (!chord) {
      return false;
    }
    if (!chord.ctrlKey) {
      return false;
    }
    return this.wordMatchesCtrlModifier(word);
  }
  matchesShiftModifier(chord, word) {
    if (!chord) {
      return false;
    }
    if (!chord.shiftKey) {
      return false;
    }
    return this.wordMatchesShiftModifier(word);
  }
  matchesAltModifier(chord, word) {
    if (!chord) {
      return false;
    }
    if (!chord.altKey) {
      return false;
    }
    return this.wordMatchesAltModifier(word);
  }
  hasAnyMatch(keybindingMatch) {
    return !!keybindingMatch.altKey || !!keybindingMatch.ctrlKey || !!keybindingMatch.metaKey || !!keybindingMatch.shiftKey || !!keybindingMatch.keyCode;
  }
  isCompleteMatch(chord, match) {
    if (!chord) {
      return true;
    }
    if (!match.keyCode) {
      return false;
    }
    if (chord.metaKey && !match.metaKey) {
      return false;
    }
    if (chord.altKey && !match.altKey) {
      return false;
    }
    if (chord.ctrlKey && !match.ctrlKey) {
      return false;
    }
    if (chord.shiftKey && !match.shiftKey) {
      return false;
    }
    return true;
  }
  createCompleteMatch(chord) {
    const match = {};
    if (chord) {
      match.keyCode = true;
      if (chord.metaKey) {
        match.metaKey = true;
      }
      if (chord.altKey) {
        match.altKey = true;
      }
      if (chord.ctrlKey) {
        match.ctrlKey = true;
      }
      if (chord.shiftKey) {
        match.shiftKey = true;
      }
    }
    return match;
  }
  isModifier(word) {
    if (this.wordMatchesAltModifier(word)) {
      return true;
    }
    if (this.wordMatchesCtrlModifier(word)) {
      return true;
    }
    if (this.wordMatchesMetaModifier(word)) {
      return true;
    }
    if (this.wordMatchesShiftModifier(word)) {
      return true;
    }
    return false;
  }
  wordMatchesAltModifier(word) {
    if (equalsIgnoreCase(this.modifierLabels.ui.altKey, word)) {
      return true;
    }
    if (equalsIgnoreCase(this.modifierLabels.aria.altKey, word)) {
      return true;
    }
    if (equalsIgnoreCase(this.modifierLabels.user.altKey, word)) {
      return true;
    }
    if (equalsIgnoreCase(localize("option", "option"), word)) {
      return true;
    }
    return false;
  }
  wordMatchesCtrlModifier(word) {
    if (equalsIgnoreCase(this.modifierLabels.ui.ctrlKey, word)) {
      return true;
    }
    if (equalsIgnoreCase(this.modifierLabels.aria.ctrlKey, word)) {
      return true;
    }
    if (equalsIgnoreCase(this.modifierLabels.user.ctrlKey, word)) {
      return true;
    }
    return false;
  }
  wordMatchesMetaModifier(word) {
    if (equalsIgnoreCase(this.modifierLabels.ui.metaKey, word)) {
      return true;
    }
    if (equalsIgnoreCase(this.modifierLabels.aria.metaKey, word)) {
      return true;
    }
    if (equalsIgnoreCase(this.modifierLabels.user.metaKey, word)) {
      return true;
    }
    if (equalsIgnoreCase(localize("meta", "meta"), word)) {
      return true;
    }
    return false;
  }
  wordMatchesShiftModifier(word) {
    if (equalsIgnoreCase(this.modifierLabels.ui.shiftKey, word)) {
      return true;
    }
    if (equalsIgnoreCase(this.modifierLabels.aria.shiftKey, word)) {
      return true;
    }
    if (equalsIgnoreCase(this.modifierLabels.user.shiftKey, word)) {
      return true;
    }
    return false;
  }
}
let KeybindingsEditorInput = (_a = class extends EditorInput {
  constructor(instantiationService) {
    super();
    this.searchOptions = null;
    this.resource = void 0;
    this.keybindingsModel = instantiationService.createInstance(KeybindingsEditorModel, OS);
  }
  get typeId() {
    return _a.ID;
  }
  getName() {
    return localize("keybindingsInputName", "Keyboard Shortcuts");
  }
  async resolve() {
    return this.keybindingsModel;
  }
  matches(otherInput) {
    return otherInput instanceof _a;
  }
  dispose() {
    this.keybindingsModel.dispose();
    super.dispose();
  }
}, _a.ID = "workbench.input.keybindings", _a);
KeybindingsEditorInput = __decorate([
  __param(0, IInstantiationService)
], KeybindingsEditorInput);
let SettingsEditor2Input = (_b = class extends EditorInput {
  constructor(_preferencesService) {
    super();
    this.resource = URI.from({
      scheme: Schemas.vscodeSettings,
      path: `settingseditor`
    });
    this._settingsModel = _preferencesService.createSettings2EditorModel();
  }
  matches(otherInput) {
    return super.matches(otherInput) || otherInput instanceof _b;
  }
  get typeId() {
    return _b.ID;
  }
  getName() {
    return localize("settingsEditor2InputName", "Settings");
  }
  async resolve() {
    return this._settingsModel;
  }
  dispose() {
    this._settingsModel.dispose();
    super.dispose();
  }
}, _b.ID = "workbench.input.settings2", _b);
SettingsEditor2Input = __decorate([
  __param(0, IPreferencesService)
], SettingsEditor2Input);
function canBeType(propTypes, ...types) {
  return types.some((t) => propTypes.includes(t));
}
function isNullOrEmpty(value) {
  return value === "" || isUndefinedOrNull(value);
}
function createValidator(prop) {
  const type = Array.isArray(prop.type) ? prop.type : [prop.type];
  const isNullable = canBeType(type, "null");
  const isNumeric = (canBeType(type, "number") || canBeType(type, "integer")) && (type.length === 1 || type.length === 2 && isNullable);
  const numericValidations = getNumericValidators(prop);
  const stringValidations = getStringValidators(prop);
  const arrayValidator = getArrayValidator(prop);
  const objectValidator = getObjectValidator(prop);
  return (value) => {
    if (isNullable && isNullOrEmpty(value)) {
      return "";
    }
    const errors = [];
    if (arrayValidator) {
      const err = arrayValidator(value);
      if (err) {
        errors.push(err);
      }
    }
    if (objectValidator) {
      const err = objectValidator(value);
      if (err) {
        errors.push(err);
      }
    }
    if (prop.type === "boolean" && value !== true && value !== false) {
      errors.push(localize("validations.booleanIncorrectType", 'Incorrect type. Expected "boolean".'));
    }
    if (isNumeric) {
      if (isNullOrEmpty(value) || typeof value === "boolean" || Array.isArray(value) || isNaN(+value)) {
        errors.push(localize("validations.expectedNumeric", "Value must be a number."));
      } else {
        errors.push(...numericValidations.filter((validator) => !validator.isValid(+value)).map((validator) => validator.message));
      }
    }
    if (prop.type === "string") {
      if (prop.enum && !isStringArray(prop.enum)) {
        errors.push(localize(
          "validations.stringIncorrectEnumOptions",
          "The enum options should be strings, but there is a non-string option. Please file an issue with the extension author."
        ));
      } else if (!isString(value)) {
        errors.push(localize("validations.stringIncorrectType", 'Incorrect type. Expected "string".'));
      } else {
        errors.push(...stringValidations.filter((validator) => !validator.isValid(value)).map((validator) => validator.message));
      }
    }
    if (errors.length) {
      return prop.errorMessage ? [prop.errorMessage, ...errors].join(" ") : errors.join(" ");
    }
    return "";
  };
}
function getInvalidTypeError(value, type) {
  if (typeof type === "undefined") {
    return;
  }
  const typeArr = Array.isArray(type) ? type : [type];
  if (!typeArr.some((_type) => valueValidatesAsType(value, _type))) {
    return localize(
      "invalidTypeError",
      "Setting has an invalid type, expected {0}. Fix in JSON.",
      JSON.stringify(type)
    );
  }
  return;
}
function valueValidatesAsType(value, type) {
  const valueType = typeof value;
  if (type === "boolean") {
    return valueType === "boolean";
  } else if (type === "object") {
    return value && !Array.isArray(value) && valueType === "object";
  } else if (type === "null") {
    return value === null;
  } else if (type === "array") {
    return Array.isArray(value);
  } else if (type === "string") {
    return valueType === "string";
  } else if (type === "number" || type === "integer") {
    return valueType === "number";
  }
  return true;
}
function getStringValidators(prop) {
  const uriRegex = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  let patternRegex;
  if (typeof prop.pattern === "string") {
    patternRegex = new RegExp(prop.pattern);
  }
  return [
    {
      enabled: prop.maxLength !== void 0,
      isValid: (value) => value.length <= prop.maxLength,
      message: localize(
        "validations.maxLength",
        "Value must be {0} or fewer characters long.",
        prop.maxLength
      )
    },
    {
      enabled: prop.minLength !== void 0,
      isValid: (value) => value.length >= prop.minLength,
      message: localize(
        "validations.minLength",
        "Value must be {0} or more characters long.",
        prop.minLength
      )
    },
    {
      enabled: patternRegex !== void 0,
      isValid: (value) => patternRegex.test(value),
      message: prop.patternErrorMessage || localize("validations.regex", "Value must match regex `{0}`.", prop.pattern)
    },
    {
      enabled: prop.format === "color-hex",
      isValid: (value) => Color.Format.CSS.parseHex(value),
      message: localize(
        "validations.colorFormat",
        "Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."
      )
    },
    {
      enabled: prop.format === "uri" || prop.format === "uri-reference",
      isValid: (value) => !!value.length,
      message: localize("validations.uriEmpty", "URI expected.")
    },
    {
      enabled: prop.format === "uri" || prop.format === "uri-reference",
      isValid: (value) => uriRegex.test(value),
      message: localize("validations.uriMissing", "URI is expected.")
    },
    {
      enabled: prop.format === "uri",
      isValid: (value) => {
        const matches = value.match(uriRegex);
        return !!(matches && matches[2]);
      },
      message: localize("validations.uriSchemeMissing", "URI with a scheme is expected.")
    },
    {
      enabled: prop.enum !== void 0,
      isValid: (value) => {
        return prop.enum.includes(value);
      },
      message: localize(
        "validations.invalidStringEnumValue",
        "Value is not accepted. Valid values: {0}.",
        prop.enum ? prop.enum.map((key) => `"${key}"`).join(", ") : "[]"
      )
    }
  ].filter((validation) => validation.enabled);
}
function getNumericValidators(prop) {
  const type = Array.isArray(prop.type) ? prop.type : [prop.type];
  const isNullable = canBeType(type, "null");
  const isIntegral = canBeType(type, "integer") && (type.length === 1 || type.length === 2 && isNullable);
  const isNumeric = canBeType(type, "number", "integer") && (type.length === 1 || type.length === 2 && isNullable);
  if (!isNumeric) {
    return [];
  }
  let exclusiveMax;
  let exclusiveMin;
  if (typeof prop.exclusiveMaximum === "boolean") {
    exclusiveMax = prop.exclusiveMaximum ? prop.maximum : void 0;
  } else {
    exclusiveMax = prop.exclusiveMaximum;
  }
  if (typeof prop.exclusiveMinimum === "boolean") {
    exclusiveMin = prop.exclusiveMinimum ? prop.minimum : void 0;
  } else {
    exclusiveMin = prop.exclusiveMinimum;
  }
  return [
    {
      enabled: exclusiveMax !== void 0 && (prop.maximum === void 0 || exclusiveMax <= prop.maximum),
      isValid: (value) => value < exclusiveMax,
      message: localize(
        "validations.exclusiveMax",
        "Value must be strictly less than {0}.",
        exclusiveMax
      )
    },
    {
      enabled: exclusiveMin !== void 0 && (prop.minimum === void 0 || exclusiveMin >= prop.minimum),
      isValid: (value) => value > exclusiveMin,
      message: localize(
        "validations.exclusiveMin",
        "Value must be strictly greater than {0}.",
        exclusiveMin
      )
    },
    {
      enabled: prop.maximum !== void 0 && (exclusiveMax === void 0 || exclusiveMax > prop.maximum),
      isValid: (value) => value <= prop.maximum,
      message: localize(
        "validations.max",
        "Value must be less than or equal to {0}.",
        prop.maximum
      )
    },
    {
      enabled: prop.minimum !== void 0 && (exclusiveMin === void 0 || exclusiveMin < prop.minimum),
      isValid: (value) => value >= prop.minimum,
      message: localize(
        "validations.min",
        "Value must be greater than or equal to {0}.",
        prop.minimum
      )
    },
    {
      enabled: prop.multipleOf !== void 0,
      isValid: (value) => value % prop.multipleOf === 0,
      message: localize(
        "validations.multipleOf",
        "Value must be a multiple of {0}.",
        prop.multipleOf
      )
    },
    {
      enabled: isIntegral,
      isValid: (value) => value % 1 === 0,
      message: localize("validations.expectedInteger", "Value must be an integer.")
    }
  ].filter((validation) => validation.enabled);
}
function getArrayValidator(prop) {
  if (prop.type === "array" && prop.items && !Array.isArray(prop.items)) {
    const propItems = prop.items;
    if (propItems && !Array.isArray(propItems.type)) {
      const withQuotes = (s) => `'` + s + `'`;
      return (value) => {
        if (!value) {
          return null;
        }
        let message = "";
        if (!Array.isArray(value)) {
          message += localize("validations.arrayIncorrectType", "Incorrect type. Expected an array.");
          message += "\n";
          return message;
        }
        const arrayValue = value;
        if (prop.uniqueItems) {
          if (new Set(arrayValue).size < arrayValue.length) {
            message += localize("validations.stringArrayUniqueItems", "Array has duplicate items");
            message += "\n";
          }
        }
        if (prop.minItems && arrayValue.length < prop.minItems) {
          message += localize(
            "validations.stringArrayMinItem",
            "Array must have at least {0} items",
            prop.minItems
          );
          message += "\n";
        }
        if (prop.maxItems && arrayValue.length > prop.maxItems) {
          message += localize(
            "validations.stringArrayMaxItem",
            "Array must have at most {0} items",
            prop.maxItems
          );
          message += "\n";
        }
        if (propItems.type === "string") {
          if (!isStringArray(arrayValue)) {
            message += localize(
              "validations.stringArrayIncorrectType",
              "Incorrect type. Expected a string array."
            );
            message += "\n";
            return message;
          }
          if (typeof propItems.pattern === "string") {
            const patternRegex = new RegExp(propItems.pattern);
            arrayValue.forEach((v) => {
              if (!patternRegex.test(v)) {
                message += propItems.patternErrorMessage || localize(
                  "validations.stringArrayItemPattern",
                  "Value {0} must match regex {1}.",
                  withQuotes(v),
                  withQuotes(propItems.pattern)
                );
              }
            });
          }
          const propItemsEnum = propItems.enum;
          if (propItemsEnum) {
            arrayValue.forEach((v) => {
              if (propItemsEnum.indexOf(v) === -1) {
                message += localize(
                  "validations.stringArrayItemEnum",
                  "Value {0} is not one of {1}",
                  withQuotes(v),
                  "[" + propItemsEnum.map(withQuotes).join(", ") + "]"
                );
                message += "\n";
              }
            });
          }
        } else if (propItems.type === "integer" || propItems.type === "number") {
          arrayValue.forEach((v) => {
            const errorMessage = getErrorsForSchema(propItems, v);
            if (errorMessage) {
              message += `${v}: ${errorMessage}
`;
            }
          });
        }
        return message;
      };
    }
  }
  return null;
}
function getObjectValidator(prop) {
  if (prop.type === "object") {
    const { properties, patternProperties, additionalProperties } = prop;
    return (value) => {
      if (!value) {
        return null;
      }
      const errors = [];
      if (!isObject(value)) {
        errors.push(localize("validations.objectIncorrectType", "Incorrect type. Expected an object."));
      } else {
        Object.keys(value).forEach((key) => {
          const data = value[key];
          if (properties && key in properties) {
            const errorMessage = getErrorsForSchema(properties[key], data);
            if (errorMessage) {
              errors.push(`${key}: ${errorMessage}
`);
            }
            return;
          }
          if (patternProperties) {
            for (const pattern in patternProperties) {
              if (RegExp(pattern).test(key)) {
                const errorMessage = getErrorsForSchema(patternProperties[pattern], data);
                if (errorMessage) {
                  errors.push(`${key}: ${errorMessage}
`);
                }
                return;
              }
            }
          }
          if (additionalProperties === false) {
            errors.push(localize("validations.objectPattern", "Property {0} is not allowed.\n", key));
          } else if (typeof additionalProperties === "object") {
            const errorMessage = getErrorsForSchema(additionalProperties, data);
            if (errorMessage) {
              errors.push(`${key}: ${errorMessage}
`);
            }
          }
        });
      }
      if (errors.length) {
        return prop.errorMessage ? [prop.errorMessage, ...errors].join(" ") : errors.join(" ");
      }
      return "";
    };
  }
  return null;
}
function getErrorsForSchema(propertySchema, data) {
  const validator = createValidator(propertySchema);
  const errorMessage = validator(data);
  return errorMessage;
}
const nullRange = { startLineNumber: -1, startColumn: -1, endLineNumber: -1, endColumn: -1 };
function isNullRange(range) {
  return range.startLineNumber === -1 && range.startColumn === -1 && range.endLineNumber === -1 && range.endColumn === -1;
}
class AbstractSettingsModel extends EditorModel {
  constructor() {
    super(...arguments);
    this._currentResultGroups = /* @__PURE__ */ new Map();
  }
  updateResultGroup(id, resultGroup) {
    if (resultGroup) {
      this._currentResultGroups.set(id, resultGroup);
    } else {
      this._currentResultGroups.delete(id);
    }
    this.removeDuplicateResults();
    return this.update();
  }
  removeDuplicateResults() {
    const settingKeys = /* @__PURE__ */ new Set();
    [...this._currentResultGroups.keys()].sort((a, b) => this._currentResultGroups.get(a).order - this._currentResultGroups.get(b).order).forEach((groupId) => {
      const group = this._currentResultGroups.get(groupId);
      group.result.filterMatches = group.result.filterMatches.filter((s) => !settingKeys.has(s.setting.key));
      group.result.filterMatches.forEach((s) => settingKeys.add(s.setting.key));
    });
  }
  compareTwoNullableNumbers(a, b) {
    const aOrMax = a ?? Number.MAX_SAFE_INTEGER;
    const bOrMax = b ?? Number.MAX_SAFE_INTEGER;
    if (aOrMax < bOrMax) {
      return -1;
    } else if (aOrMax > bOrMax) {
      return 1;
    } else {
      return 0;
    }
  }
  filterSettings(filter, groupFilter, settingMatcher) {
    const allGroups = this.filterGroups;
    const filterMatches = [];
    for (const group of allGroups) {
      const groupMatched = groupFilter(group);
      for (const section of group.sections) {
        for (const setting of section.settings) {
          const settingMatchResult = settingMatcher(setting, group);
          if (groupMatched || settingMatchResult) {
            filterMatches.push({
              setting,
              matches: settingMatchResult && settingMatchResult.matches,
              matchType: (settingMatchResult == null ? void 0 : settingMatchResult.matchType) ?? SettingMatchType.None,
              score: (settingMatchResult == null ? void 0 : settingMatchResult.score) ?? 0
            });
          }
        }
      }
    }
    filterMatches.sort((a, b) => {
      if (a.matchType !== b.matchType) {
        return b.matchType - a.matchType;
      } else {
        if (a.setting.extensionInfo && b.setting.extensionInfo && a.setting.extensionInfo.id === b.setting.extensionInfo.id) {
          if (a.setting.categoryLabel !== b.setting.categoryLabel && (a.setting.categoryOrder !== void 0 || b.setting.categoryOrder !== void 0) && a.setting.categoryOrder !== b.setting.categoryOrder) {
            return this.compareTwoNullableNumbers(a.setting.categoryOrder, b.setting.categoryOrder);
          } else if (a.setting.categoryLabel === b.setting.categoryLabel && (a.setting.order !== void 0 || b.setting.order !== void 0) && a.setting.order !== b.setting.order) {
            return this.compareTwoNullableNumbers(a.setting.order, b.setting.order);
          }
        }
        return b.score - a.score;
      }
    });
    return filterMatches;
  }
  getPreference(key) {
    for (const group of this.settingsGroups) {
      for (const section of group.sections) {
        for (const setting of section.settings) {
          if (key === setting.key) {
            return setting;
          }
        }
      }
    }
    return void 0;
  }
  collectMetadata(groups) {
    const metadata = /* @__PURE__ */ Object.create(null);
    let hasMetadata = false;
    groups.forEach((g) => {
      if (g.result.metadata) {
        metadata[g.id] = g.result.metadata;
        hasMetadata = true;
      }
    });
    return hasMetadata ? metadata : null;
  }
  get filterGroups() {
    return this.settingsGroups;
  }
}
class SettingsEditorModel extends AbstractSettingsModel {
  constructor(reference, _configurationTarget) {
    super();
    this._configurationTarget = _configurationTarget;
    this._onDidChangeGroups = this._register(new Emitter());
    this.onDidChangeGroups = this._onDidChangeGroups.event;
    this.settingsModel = reference.object.textEditorModel;
    this._register(this.onWillDispose(() => reference.dispose()));
    this._register(this.settingsModel.onDidChangeContent(() => {
      this._settingsGroups = void 0;
      this._onDidChangeGroups.fire();
    }));
  }
  get uri() {
    return this.settingsModel.uri;
  }
  get configurationTarget() {
    return this._configurationTarget;
  }
  get settingsGroups() {
    if (!this._settingsGroups) {
      this.parse();
    }
    return this._settingsGroups;
  }
  get content() {
    return this.settingsModel.getValue();
  }
  findValueMatches(filter, setting) {
    return this.settingsModel.findMatches(filter, setting.valueRange, false, false, null, false).map((match) => match.range);
  }
  isSettingsProperty(property, previousParents) {
    return previousParents.length === 0;
  }
  parse() {
    this._settingsGroups = parse(this.settingsModel, (property, previousParents) => this.isSettingsProperty(property, previousParents));
  }
  update() {
    const resultGroups = [...this._currentResultGroups.values()];
    if (!resultGroups.length) {
      return void 0;
    }
    const filteredSettings = [];
    const matches = [];
    resultGroups.forEach((group) => {
      group.result.filterMatches.forEach((filterMatch) => {
        filteredSettings.push(filterMatch.setting);
        if (filterMatch.matches) {
          matches.push(...filterMatch.matches);
        }
      });
    });
    let filteredGroup;
    const modelGroup = this.settingsGroups[0];
    if (modelGroup) {
      filteredGroup = {
        id: modelGroup.id,
        range: modelGroup.range,
        sections: [{
          settings: filteredSettings
        }],
        title: modelGroup.title,
        titleRange: modelGroup.titleRange,
        order: modelGroup.order,
        extensionInfo: modelGroup.extensionInfo
      };
    }
    const metadata = this.collectMetadata(resultGroups);
    return {
      allGroups: this.settingsGroups,
      filteredGroups: filteredGroup ? [filteredGroup] : [],
      matches,
      metadata
    };
  }
}
let Settings2EditorModel = class Settings2EditorModel2 extends AbstractSettingsModel {
  constructor(_defaultSettings, configurationService) {
    super();
    this._defaultSettings = _defaultSettings;
    this._onDidChangeGroups = this._register(new Emitter());
    this.onDidChangeGroups = this._onDidChangeGroups.event;
    this.dirty = false;
    this._register(configurationService.onDidChangeConfiguration((e) => {
      if (e.source === 7) {
        this.dirty = true;
        this._onDidChangeGroups.fire();
      }
    }));
    this._register(Registry.as(Extensions.Configuration).onDidSchemaChange((e) => {
      this.dirty = true;
      this._onDidChangeGroups.fire();
    }));
  }
  get filterGroups() {
    return this.settingsGroups.slice(1);
  }
  get settingsGroups() {
    var _a2;
    const groups = this._defaultSettings.getSettingsGroups(this.dirty);
    if ((_a2 = this.additionalGroups) == null ? void 0 : _a2.length) {
      groups.push(...this.additionalGroups);
    }
    this.dirty = false;
    return groups;
  }
  setAdditionalGroups(groups) {
    this.additionalGroups = groups;
  }
  findValueMatches(filter, setting) {
    return [];
  }
  update() {
    throw new Error("Not supported");
  }
};
Settings2EditorModel = __decorate([
  __param(1, IConfigurationService)
], Settings2EditorModel);
function parse(model, isSettingsProperty) {
  const settings = [];
  let overrideSetting = null;
  let currentProperty = null;
  let currentParent = [];
  const previousParents = [];
  let settingsPropertyIndex = -1;
  const range = {
    startLineNumber: 0,
    startColumn: 0,
    endLineNumber: 0,
    endColumn: 0
  };
  function onValue(value, offset, length) {
    if (Array.isArray(currentParent)) {
      currentParent.push(value);
    } else if (currentProperty) {
      currentParent[currentProperty] = value;
    }
    if (previousParents.length === settingsPropertyIndex + 1 || previousParents.length === settingsPropertyIndex + 2 && overrideSetting !== null) {
      const setting = previousParents.length === settingsPropertyIndex + 1 ? settings[settings.length - 1] : overrideSetting.overrides[overrideSetting.overrides.length - 1];
      if (setting) {
        const valueStartPosition = model.getPositionAt(offset);
        const valueEndPosition = model.getPositionAt(offset + length);
        setting.value = value;
        setting.valueRange = {
          startLineNumber: valueStartPosition.lineNumber,
          startColumn: valueStartPosition.column,
          endLineNumber: valueEndPosition.lineNumber,
          endColumn: valueEndPosition.column
        };
        setting.range = Object.assign(setting.range, {
          endLineNumber: valueEndPosition.lineNumber,
          endColumn: valueEndPosition.column
        });
      }
    }
  }
  const visitor = {
    onObjectBegin: (offset, length) => {
      if (isSettingsProperty(currentProperty, previousParents)) {
        settingsPropertyIndex = previousParents.length;
        const position = model.getPositionAt(offset);
        range.startLineNumber = position.lineNumber;
        range.startColumn = position.column;
      }
      const object = {};
      onValue(object, offset, length);
      currentParent = object;
      currentProperty = null;
      previousParents.push(currentParent);
    },
    onObjectProperty: (name, offset, length) => {
      currentProperty = name;
      if (previousParents.length === settingsPropertyIndex + 1 || previousParents.length === settingsPropertyIndex + 2 && overrideSetting !== null) {
        const settingStartPosition = model.getPositionAt(offset);
        const setting = {
          description: [],
          descriptionIsMarkdown: false,
          key: name,
          keyRange: {
            startLineNumber: settingStartPosition.lineNumber,
            startColumn: settingStartPosition.column + 1,
            endLineNumber: settingStartPosition.lineNumber,
            endColumn: settingStartPosition.column + length
          },
          range: {
            startLineNumber: settingStartPosition.lineNumber,
            startColumn: settingStartPosition.column,
            endLineNumber: 0,
            endColumn: 0
          },
          value: null,
          valueRange: nullRange,
          descriptionRanges: [],
          overrides: [],
          overrideOf: withNullAsUndefined(overrideSetting)
        };
        if (previousParents.length === settingsPropertyIndex + 1) {
          settings.push(setting);
          if (OVERRIDE_PROPERTY_REGEX.test(name)) {
            overrideSetting = setting;
          }
        } else {
          overrideSetting.overrides.push(setting);
        }
      }
    },
    onObjectEnd: (offset, length) => {
      currentParent = previousParents.pop();
      if (settingsPropertyIndex !== -1 && (previousParents.length === settingsPropertyIndex + 1 || previousParents.length === settingsPropertyIndex + 2 && overrideSetting !== null)) {
        const setting = previousParents.length === settingsPropertyIndex + 1 ? settings[settings.length - 1] : overrideSetting.overrides[overrideSetting.overrides.length - 1];
        if (setting) {
          const valueEndPosition = model.getPositionAt(offset + length);
          setting.valueRange = Object.assign(setting.valueRange, {
            endLineNumber: valueEndPosition.lineNumber,
            endColumn: valueEndPosition.column
          });
          setting.range = Object.assign(setting.range, {
            endLineNumber: valueEndPosition.lineNumber,
            endColumn: valueEndPosition.column
          });
        }
        if (previousParents.length === settingsPropertyIndex + 1) {
          overrideSetting = null;
        }
      }
      if (previousParents.length === settingsPropertyIndex) {
        const position = model.getPositionAt(offset);
        range.endLineNumber = position.lineNumber;
        range.endColumn = position.column;
        settingsPropertyIndex = -1;
      }
    },
    onArrayBegin: (offset, length) => {
      const array = [];
      onValue(array, offset, length);
      previousParents.push(currentParent);
      currentParent = array;
      currentProperty = null;
    },
    onArrayEnd: (offset, length) => {
      currentParent = previousParents.pop();
      if (previousParents.length === settingsPropertyIndex + 1 || previousParents.length === settingsPropertyIndex + 2 && overrideSetting !== null) {
        const setting = previousParents.length === settingsPropertyIndex + 1 ? settings[settings.length - 1] : overrideSetting.overrides[overrideSetting.overrides.length - 1];
        if (setting) {
          const valueEndPosition = model.getPositionAt(offset + length);
          setting.valueRange = Object.assign(setting.valueRange, {
            endLineNumber: valueEndPosition.lineNumber,
            endColumn: valueEndPosition.column
          });
          setting.range = Object.assign(setting.range, {
            endLineNumber: valueEndPosition.lineNumber,
            endColumn: valueEndPosition.column
          });
        }
      }
    },
    onLiteralValue: onValue,
    onError: (error) => {
      const setting = settings[settings.length - 1];
      if (setting && (isNullRange(setting.range) || isNullRange(setting.keyRange) || isNullRange(setting.valueRange))) {
        settings.pop();
      }
    }
  };
  if (!model.isDisposed()) {
    visit(model.getValue(), visitor);
  }
  return settings.length > 0 ? [{
    sections: [
      {
        settings
      }
    ],
    title: "",
    titleRange: nullRange,
    range
  }] : [];
}
class WorkspaceConfigurationEditorModel extends SettingsEditorModel {
  constructor() {
    super(...arguments);
    this._configurationGroups = [];
  }
  get configurationGroups() {
    return this._configurationGroups;
  }
  parse() {
    super.parse();
    this._configurationGroups = parse(this.settingsModel, (property, previousParents) => previousParents.length === 0);
  }
  isSettingsProperty(property, previousParents) {
    return property === "settings" && previousParents.length === 1;
  }
}
class DefaultSettings extends Disposable {
  constructor(_mostCommonlyUsedSettingsKeys, target) {
    super();
    this._mostCommonlyUsedSettingsKeys = _mostCommonlyUsedSettingsKeys;
    this.target = target;
    this._settingsByName = /* @__PURE__ */ new Map();
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
  }
  getContent(forceUpdate = false) {
    if (!this._content || forceUpdate) {
      this.initialize();
    }
    return this._content;
  }
  getContentWithoutMostCommonlyUsed(forceUpdate = false) {
    if (!this._contentWithoutMostCommonlyUsed || forceUpdate) {
      this.initialize();
    }
    return this._contentWithoutMostCommonlyUsed;
  }
  getSettingsGroups(forceUpdate = false) {
    if (!this._allSettingsGroups || forceUpdate) {
      this.initialize();
    }
    return this._allSettingsGroups;
  }
  initialize() {
    this._allSettingsGroups = this.parse();
    this._content = this.toContent(this._allSettingsGroups, 0);
    this._contentWithoutMostCommonlyUsed = this.toContent(this._allSettingsGroups, 1);
  }
  parse() {
    const settingsGroups = this.getRegisteredGroups();
    this.initAllSettingsMap(settingsGroups);
    const mostCommonlyUsed = this.getMostCommonlyUsedSettings(settingsGroups);
    return [mostCommonlyUsed, ...settingsGroups];
  }
  getRegisteredGroups() {
    const configurations = Registry.as(Extensions.Configuration).getConfigurations().slice();
    const groups = this.removeEmptySettingsGroups(configurations.sort(this.compareConfigurationNodes).reduce((result, config, index, array) => this.parseConfig(config, result, array), []));
    return this.sortGroups(groups);
  }
  sortGroups(groups) {
    groups.forEach((group) => {
      group.sections.forEach((section) => {
        section.settings.sort((a, b) => a.key.localeCompare(b.key));
      });
    });
    return groups;
  }
  initAllSettingsMap(allSettingsGroups) {
    this._settingsByName = /* @__PURE__ */ new Map();
    for (const group of allSettingsGroups) {
      for (const section of group.sections) {
        for (const setting of section.settings) {
          this._settingsByName.set(setting.key, setting);
        }
      }
    }
  }
  getMostCommonlyUsedSettings(allSettingsGroups) {
    const settings = coalesce(this._mostCommonlyUsedSettingsKeys.map((key) => {
      const setting = this._settingsByName.get(key);
      if (setting) {
        return {
          description: setting.description,
          key: setting.key,
          value: setting.value,
          keyRange: nullRange,
          range: nullRange,
          valueRange: nullRange,
          overrides: [],
          scope: 4,
          type: setting.type,
          enum: setting.enum,
          enumDescriptions: setting.enumDescriptions,
          descriptionRanges: []
        };
      }
      return null;
    }));
    return {
      id: "mostCommonlyUsed",
      range: nullRange,
      title: localize("commonlyUsed", "Commonly Used"),
      titleRange: nullRange,
      sections: [
        {
          settings
        }
      ]
    };
  }
  parseConfig(config, result, configurations, settingsGroup, seenSettings) {
    var _a2;
    seenSettings = seenSettings ? seenSettings : {};
    let title = config.title;
    if (!title) {
      const configWithTitleAndSameId = configurations.find((c) => c.id === config.id && c.title);
      if (configWithTitleAndSameId) {
        title = configWithTitleAndSameId.title;
      }
    }
    if (title) {
      if (!settingsGroup) {
        settingsGroup = result.find((g) => {
          var _a3, _b2;
          return g.title === title && ((_a3 = g.extensionInfo) == null ? void 0 : _a3.id) === ((_b2 = config.extensionInfo) == null ? void 0 : _b2.id);
        });
        if (!settingsGroup) {
          settingsGroup = { sections: [{ settings: [] }], id: config.id || "", title: title || "", titleRange: nullRange, order: config.order, range: nullRange, extensionInfo: config.extensionInfo };
          result.push(settingsGroup);
        }
      } else {
        settingsGroup.sections[settingsGroup.sections.length - 1].title = title;
      }
    }
    if (config.properties) {
      if (!settingsGroup) {
        settingsGroup = { sections: [{ settings: [] }], id: config.id || "", title: config.id || "", titleRange: nullRange, order: config.order, range: nullRange, extensionInfo: config.extensionInfo };
        result.push(settingsGroup);
      }
      const configurationSettings = [];
      for (const setting of [...settingsGroup.sections[settingsGroup.sections.length - 1].settings, ...this.parseSettings(config)]) {
        if (!seenSettings[setting.key]) {
          configurationSettings.push(setting);
          seenSettings[setting.key] = true;
        }
      }
      if (configurationSettings.length) {
        settingsGroup.sections[settingsGroup.sections.length - 1].settings = configurationSettings;
      }
    }
    (_a2 = config.allOf) == null ? void 0 : _a2.forEach((c) => this.parseConfig(c, result, configurations, settingsGroup, seenSettings));
    return result;
  }
  removeEmptySettingsGroups(settingsGroups) {
    const result = [];
    for (const settingsGroup of settingsGroups) {
      settingsGroup.sections = settingsGroup.sections.filter((section) => section.settings.length > 0);
      if (settingsGroup.sections.length) {
        result.push(settingsGroup);
      }
    }
    return result;
  }
  parseSettings(config) {
    var _a2;
    const result = [];
    const settingsObject = config.properties;
    const extensionInfo = config.extensionInfo;
    const categoryLabel = ((_a2 = config.extensionInfo) == null ? void 0 : _a2.id) === config.id ? config.title : config.id;
    const categoryOrder = config.order;
    for (const key in settingsObject) {
      const prop = settingsObject[key];
      if (this.matchesScope(prop)) {
        const value = prop.default;
        let description = prop.markdownDescription || prop.description || "";
        if (typeof description !== "string") {
          description = "";
        }
        const descriptionLines = description.split("\n");
        const overrides = OVERRIDE_PROPERTY_REGEX.test(key) ? this.parseOverrideSettings(prop.default) : [];
        let listItemType;
        if (prop.type === "array" && prop.items && !Array.isArray(prop.items) && prop.items.type) {
          if (prop.items.enum) {
            listItemType = "enum";
          } else if (!Array.isArray(prop.items.type)) {
            listItemType = prop.items.type;
          }
        }
        const objectProperties = prop.type === "object" ? prop.properties : void 0;
        const objectPatternProperties = prop.type === "object" ? prop.patternProperties : void 0;
        const objectAdditionalProperties = prop.type === "object" ? prop.additionalProperties : void 0;
        let enumToUse = prop.enum;
        let enumDescriptions = prop.markdownEnumDescriptions ?? prop.enumDescriptions;
        let enumDescriptionsAreMarkdown = !!prop.markdownEnumDescriptions;
        if (listItemType === "enum" && !Array.isArray(prop.items)) {
          enumToUse = prop.items.enum;
          enumDescriptions = prop.items.markdownEnumDescriptions ?? prop.items.enumDescriptions;
          enumDescriptionsAreMarkdown = !!prop.items.markdownEnumDescriptions;
        }
        let allKeysAreBoolean = false;
        if (prop.type === "object" && !prop.additionalProperties && prop.properties && Object.keys(prop.properties).length) {
          allKeysAreBoolean = Object.keys(prop.properties).every((key2) => {
            return prop.properties[key2].type === "boolean";
          });
        }
        let isLanguageTagSetting = false;
        if (OVERRIDE_PROPERTY_REGEX.test(key)) {
          isLanguageTagSetting = true;
        }
        let defaultValueSource;
        if (!isLanguageTagSetting) {
          const registeredConfigurationProp = prop;
          if (registeredConfigurationProp && registeredConfigurationProp.defaultValueSource) {
            defaultValueSource = registeredConfigurationProp.defaultValueSource;
          }
        }
        result.push({
          key,
          value,
          description: descriptionLines,
          descriptionIsMarkdown: !!prop.markdownDescription,
          range: nullRange,
          keyRange: nullRange,
          valueRange: nullRange,
          descriptionRanges: [],
          overrides,
          scope: prop.scope,
          type: prop.type,
          arrayItemType: listItemType,
          objectProperties,
          objectPatternProperties,
          objectAdditionalProperties,
          enum: enumToUse,
          enumDescriptions,
          enumDescriptionsAreMarkdown,
          uniqueItems: prop.uniqueItems,
          tags: prop.tags,
          disallowSyncIgnore: prop.disallowSyncIgnore,
          restricted: prop.restricted,
          extensionInfo,
          deprecationMessage: prop.markdownDeprecationMessage || prop.deprecationMessage,
          deprecationMessageIsMarkdown: !!prop.markdownDeprecationMessage,
          validator: createValidator(prop),
          enumItemLabels: prop.enumItemLabels,
          allKeysAreBoolean,
          editPresentation: prop.editPresentation,
          order: prop.order,
          nonLanguageSpecificDefaultValueSource: defaultValueSource,
          isLanguageTagSetting,
          categoryLabel,
          categoryOrder
        });
      }
    }
    return result;
  }
  parseOverrideSettings(overrideSettings) {
    return Object.keys(overrideSettings).map((key) => ({
      key,
      value: overrideSettings[key],
      description: [],
      descriptionIsMarkdown: false,
      range: nullRange,
      keyRange: nullRange,
      valueRange: nullRange,
      descriptionRanges: [],
      overrides: []
    }));
  }
  matchesScope(property) {
    if (!property.scope) {
      return true;
    }
    if (this.target === 6) {
      return FOLDER_SCOPES.indexOf(property.scope) !== -1;
    }
    if (this.target === 5) {
      return WORKSPACE_SCOPES.indexOf(property.scope) !== -1;
    }
    return true;
  }
  compareConfigurationNodes(c1, c2) {
    if (typeof c1.order !== "number") {
      return 1;
    }
    if (typeof c2.order !== "number") {
      return -1;
    }
    if (c1.order === c2.order) {
      const title1 = c1.title || "";
      const title2 = c2.title || "";
      return title1.localeCompare(title2);
    }
    return c1.order - c2.order;
  }
  toContent(settingsGroups, startIndex) {
    const builder = new SettingsContentBuilder();
    for (let i = startIndex; i < settingsGroups.length; i++) {
      builder.pushGroup(settingsGroups[i], i === startIndex, i === settingsGroups.length - 1);
    }
    return builder.getContent();
  }
}
class DefaultSettingsEditorModel extends AbstractSettingsModel {
  constructor(_uri, reference, defaultSettings) {
    super();
    this._uri = _uri;
    this.defaultSettings = defaultSettings;
    this._onDidChangeGroups = this._register(new Emitter());
    this.onDidChangeGroups = this._onDidChangeGroups.event;
    this._register(defaultSettings.onDidChange(() => this._onDidChangeGroups.fire()));
    this._model = reference.object.textEditorModel;
    this._register(this.onWillDispose(() => reference.dispose()));
  }
  get uri() {
    return this._uri;
  }
  get target() {
    return this.defaultSettings.target;
  }
  get settingsGroups() {
    return this.defaultSettings.getSettingsGroups();
  }
  get filterGroups() {
    return this.settingsGroups.slice(1);
  }
  update() {
    if (this._model.isDisposed()) {
      return void 0;
    }
    const resultGroups = [...this._currentResultGroups.values()].sort((a, b) => a.order - b.order);
    const nonEmptyResultGroups = resultGroups.filter((group) => group.result.filterMatches.length);
    const startLine = tail(this.settingsGroups).range.endLineNumber + 2;
    const { settingsGroups: filteredGroups, matches } = this.writeResultGroups(nonEmptyResultGroups, startLine);
    const metadata = this.collectMetadata(resultGroups);
    return resultGroups.length ? {
      allGroups: this.settingsGroups,
      filteredGroups,
      matches,
      metadata
    } : void 0;
  }
  writeResultGroups(groups, startLine) {
    const contentBuilderOffset = startLine - 1;
    const builder = new SettingsContentBuilder(contentBuilderOffset);
    const settingsGroups = [];
    const matches = [];
    if (groups.length) {
      builder.pushLine(",");
      groups.forEach((resultGroup) => {
        const settingsGroup = this.getGroup(resultGroup);
        settingsGroups.push(settingsGroup);
        matches.push(...this.writeSettingsGroupToBuilder(builder, settingsGroup, resultGroup.result.filterMatches));
      });
    }
    const groupContent = builder.getContent() + "\n";
    const groupEndLine = this._model.getLineCount();
    const cursorPosition = new Selection(startLine, 1, startLine, 1);
    const edit = {
      text: groupContent,
      forceMoveMarkers: true,
      range: new Range(startLine, 1, groupEndLine, 1)
    };
    this._model.pushEditOperations([cursorPosition], [edit], () => [cursorPosition]);
    const tokenizeTo = Math.min(startLine + 60, this._model.getLineCount());
    this._model.tokenization.forceTokenization(tokenizeTo);
    return { matches, settingsGroups };
  }
  writeSettingsGroupToBuilder(builder, settingsGroup, filterMatches) {
    filterMatches = filterMatches.map((filteredMatch) => {
      return {
        setting: filteredMatch.setting,
        score: filteredMatch.score,
        matches: filteredMatch.matches && filteredMatch.matches.map((match) => {
          return new Range(
            match.startLineNumber - filteredMatch.setting.range.startLineNumber,
            match.startColumn,
            match.endLineNumber - filteredMatch.setting.range.startLineNumber,
            match.endColumn
          );
        })
      };
    });
    builder.pushGroup(settingsGroup);
    const fixedMatches = flatten(filterMatches.map((m) => m.matches || []).map((settingMatches2, i) => {
      const setting = settingsGroup.sections[0].settings[i];
      return settingMatches2.map((range) => {
        return new Range(
          range.startLineNumber + setting.range.startLineNumber,
          range.startColumn,
          range.endLineNumber + setting.range.startLineNumber,
          range.endColumn
        );
      });
    }));
    return fixedMatches;
  }
  copySetting(setting) {
    return {
      description: setting.description,
      scope: setting.scope,
      type: setting.type,
      enum: setting.enum,
      enumDescriptions: setting.enumDescriptions,
      key: setting.key,
      value: setting.value,
      range: setting.range,
      overrides: [],
      overrideOf: setting.overrideOf,
      tags: setting.tags,
      deprecationMessage: setting.deprecationMessage,
      keyRange: nullRange,
      valueRange: nullRange,
      descriptionIsMarkdown: void 0,
      descriptionRanges: []
    };
  }
  findValueMatches(filter, setting) {
    return [];
  }
  getPreference(key) {
    for (const group of this.settingsGroups) {
      for (const section of group.sections) {
        for (const setting of section.settings) {
          if (setting.key === key) {
            return setting;
          }
        }
      }
    }
    return void 0;
  }
  getGroup(resultGroup) {
    return {
      id: resultGroup.id,
      range: nullRange,
      title: resultGroup.label,
      titleRange: nullRange,
      sections: [
        {
          settings: resultGroup.result.filterMatches.map((m) => this.copySetting(m.setting))
        }
      ]
    };
  }
}
class SettingsContentBuilder {
  get lineCountWithOffset() {
    return this._contentByLines.length + this._rangeOffset;
  }
  get lastLine() {
    return this._contentByLines[this._contentByLines.length - 1] || "";
  }
  constructor(_rangeOffset = 0) {
    this._rangeOffset = _rangeOffset;
    this._contentByLines = [];
  }
  pushLine(...lineText) {
    this._contentByLines.push(...lineText);
  }
  pushGroup(settingsGroups, isFirst, isLast) {
    this._contentByLines.push(isFirst ? "[{" : "{");
    const lastSetting = this._pushGroup(settingsGroups, "  ");
    if (lastSetting) {
      const lineIdx = lastSetting.range.endLineNumber - this._rangeOffset;
      const content = this._contentByLines[lineIdx - 2];
      this._contentByLines[lineIdx - 2] = content.substring(0, content.length - 1);
    }
    this._contentByLines.push(isLast ? "}]" : "},");
  }
  _pushGroup(group, indent) {
    let lastSetting = null;
    const groupStart = this.lineCountWithOffset + 1;
    for (const section of group.sections) {
      if (section.title) {
        const sectionTitleStart = this.lineCountWithOffset + 1;
        this.addDescription([section.title], indent, this._contentByLines);
        section.titleRange = { startLineNumber: sectionTitleStart, startColumn: 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length };
      }
      if (section.settings.length) {
        for (const setting of section.settings) {
          this.pushSetting(setting, indent);
          lastSetting = setting;
        }
      }
    }
    group.range = { startLineNumber: groupStart, startColumn: 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length };
    return lastSetting;
  }
  getContent() {
    return this._contentByLines.join("\n");
  }
  pushSetting(setting, indent) {
    const settingStart = this.lineCountWithOffset + 1;
    this.pushSettingDescription(setting, indent);
    let preValueContent = indent;
    const keyString = JSON.stringify(setting.key);
    preValueContent += keyString;
    setting.keyRange = { startLineNumber: this.lineCountWithOffset + 1, startColumn: preValueContent.indexOf(setting.key) + 1, endLineNumber: this.lineCountWithOffset + 1, endColumn: setting.key.length };
    preValueContent += ": ";
    const valueStart = this.lineCountWithOffset + 1;
    this.pushValue(setting, preValueContent, indent);
    setting.valueRange = { startLineNumber: valueStart, startColumn: preValueContent.length + 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length + 1 };
    this._contentByLines[this._contentByLines.length - 1] += ",";
    this._contentByLines.push("");
    setting.range = { startLineNumber: settingStart, startColumn: 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length };
  }
  pushSettingDescription(setting, indent) {
    var _a2;
    const fixSettingLink = (line) => line.replace(/`#(.*)#`/g, (match, settingName) => `\`${settingName}\``);
    setting.descriptionRanges = [];
    const descriptionPreValue = indent + "// ";
    const deprecationMessageLines = ((_a2 = setting.deprecationMessage) == null ? void 0 : _a2.split(/\n/g)) ?? [];
    for (let line of [...deprecationMessageLines, ...setting.description]) {
      line = fixSettingLink(line);
      this._contentByLines.push(descriptionPreValue + line);
      setting.descriptionRanges.push({ startLineNumber: this.lineCountWithOffset, startColumn: this.lastLine.indexOf(line) + 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length });
    }
    if (setting.enumDescriptions && setting.enumDescriptions.some((desc) => !!desc)) {
      setting.enumDescriptions.forEach((desc, i) => {
        const displayEnum = escapeInvisibleChars$1(String(setting.enum[i]));
        const line = desc ? `${displayEnum}: ${fixSettingLink(desc)}` : displayEnum;
        const lines = line.split(/\n/g);
        lines[0] = " - " + lines[0];
        this._contentByLines.push(...lines.map((l) => `${indent}// ${l}`));
        setting.descriptionRanges.push({ startLineNumber: this.lineCountWithOffset, startColumn: this.lastLine.indexOf(line) + 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length });
      });
    }
  }
  pushValue(setting, preValueConent, indent) {
    const valueString = JSON.stringify(setting.value, null, indent);
    if (valueString && typeof setting.value === "object") {
      if (setting.overrides && setting.overrides.length) {
        this._contentByLines.push(preValueConent + " {");
        for (const subSetting of setting.overrides) {
          this.pushSetting(subSetting, indent + indent);
          this._contentByLines.pop();
        }
        const lastSetting = setting.overrides[setting.overrides.length - 1];
        const content = this._contentByLines[lastSetting.range.endLineNumber - 2];
        this._contentByLines[lastSetting.range.endLineNumber - 2] = content.substring(0, content.length - 1);
        this._contentByLines.push(indent + "}");
      } else {
        const mulitLineValue = valueString.split("\n");
        this._contentByLines.push(preValueConent + mulitLineValue[0]);
        for (let i = 1; i < mulitLineValue.length; i++) {
          this._contentByLines.push(indent + mulitLineValue[i]);
        }
      }
    } else {
      this._contentByLines.push(preValueConent + valueString);
    }
  }
  addDescription(description, indent, result) {
    for (const line of description) {
      result.push(indent + "// " + line);
    }
  }
}
class RawSettingsContentBuilder extends SettingsContentBuilder {
  constructor(indent = "	") {
    super(0);
    this.indent = indent;
  }
  pushGroup(settingsGroups) {
    this._pushGroup(settingsGroups, this.indent);
  }
}
class DefaultRawSettingsEditorModel extends Disposable {
  constructor(defaultSettings) {
    super();
    this.defaultSettings = defaultSettings;
    this._content = null;
    this._register(defaultSettings.onDidChange(() => this._content = null));
  }
  get content() {
    if (this._content === null) {
      const builder = new RawSettingsContentBuilder();
      builder.pushLine("{");
      for (const settingsGroup of this.defaultSettings.getRegisteredGroups()) {
        builder.pushGroup(settingsGroup);
      }
      builder.pushLine("}");
      this._content = builder.getContent();
    }
    return this._content;
  }
}
function escapeInvisibleChars$1(enumValue) {
  return enumValue && enumValue.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
}
function defaultKeybindingsContents(keybindingService) {
  const defaultsHeader = "// " + localize(
    "defaultKeybindingsHeader",
    "Override key bindings by placing them into your key bindings file."
  );
  return defaultsHeader + "\n" + keybindingService.getDefaultKeybindingsContent();
}
let DefaultKeybindingsEditorModel = class DefaultKeybindingsEditorModel2 {
  constructor(_uri, keybindingService) {
    this._uri = _uri;
    this.keybindingService = keybindingService;
  }
  get uri() {
    return this._uri;
  }
  get content() {
    if (!this._content) {
      this._content = defaultKeybindingsContents(this.keybindingService);
    }
    return this._content;
  }
  getPreference() {
    return null;
  }
  dispose() {
  }
};
DefaultKeybindingsEditorModel = __decorate([
  __param(1, IKeybindingService)
], DefaultKeybindingsEditorModel);
const emptyEditableSettingsContent = "{\n}";
let PreferencesService = class PreferencesService2 extends Disposable {
  constructor(editorService, editorGroupService, textFileService, configurationService, notificationService, contextService, instantiationService, userDataProfileService, userDataProfilesService, textModelResolverService, keybindingService, modelService, jsonEditingService, languageService, labelService, remoteAgentService, textEditorService) {
    super();
    this.editorService = editorService;
    this.editorGroupService = editorGroupService;
    this.textFileService = textFileService;
    this.configurationService = configurationService;
    this.notificationService = notificationService;
    this.contextService = contextService;
    this.instantiationService = instantiationService;
    this.userDataProfileService = userDataProfileService;
    this.userDataProfilesService = userDataProfilesService;
    this.textModelResolverService = textModelResolverService;
    this.modelService = modelService;
    this.jsonEditingService = jsonEditingService;
    this.languageService = languageService;
    this.labelService = labelService;
    this.remoteAgentService = remoteAgentService;
    this.textEditorService = textEditorService;
    this._onDispose = this._register(new Emitter());
    this.defaultKeybindingsResource = URI.from(
      { scheme: Schemas.vscode, authority: "defaultsettings", path: "/keybindings.json" }
    );
    this.defaultSettingsRawResource = URI.from(
      { scheme: Schemas.vscode, authority: "defaultsettings", path: "/defaultSettings.json" }
    );
    this._register(keybindingService.onDidUpdateKeybindings(() => {
      const model = modelService.getModel(this.defaultKeybindingsResource);
      if (!model) {
        return;
      }
      modelService.updateModel(model, defaultKeybindingsContents(keybindingService));
    }));
  }
  get userSettingsResource() {
    return this.userDataProfileService.currentProfile.settingsResource;
  }
  get workspaceSettingsResource() {
    if (this.contextService.getWorkbenchState() === 1) {
      return null;
    }
    const workspace = this.contextService.getWorkspace();
    return workspace.configuration || workspace.folders[0].toResource(FOLDER_SETTINGS_PATH);
  }
  get settingsEditor2Input() {
    return this.instantiationService.createInstance(SettingsEditor2Input);
  }
  getFolderSettingsResource(resource) {
    const folder = this.contextService.getWorkspaceFolder(resource);
    return folder ? folder.toResource(FOLDER_SETTINGS_PATH) : null;
  }
  resolveModel(uri) {
    if (this.isDefaultSettingsResource(uri)) {
      const target = this.getConfigurationTargetFromDefaultSettingsResource(uri);
      const languageSelection = this.languageService.createById("jsonc");
      const model = this._register(this.modelService.createModel("", languageSelection, uri));
      let defaultSettings;
      this.configurationService.onDidChangeConfiguration((e) => {
        if (e.source === 7) {
          const model2 = this.modelService.getModel(uri);
          if (!model2) {
            return;
          }
          defaultSettings = this.getDefaultSettings(target);
          this.modelService.updateModel(model2, defaultSettings.getContentWithoutMostCommonlyUsed(true));
          defaultSettings._onDidChange.fire();
        }
      });
      if (!defaultSettings) {
        defaultSettings = this.getDefaultSettings(target);
        this.modelService.updateModel(model, defaultSettings.getContentWithoutMostCommonlyUsed(true));
      }
      return model;
    }
    if (this.defaultSettingsRawResource.toString() === uri.toString()) {
      const defaultRawSettingsEditorModel = this.instantiationService.createInstance(DefaultRawSettingsEditorModel, this.getDefaultSettings(3));
      const languageSelection = this.languageService.createById("jsonc");
      const model = this._register(this.modelService.createModel(defaultRawSettingsEditorModel.content, languageSelection, uri));
      return model;
    }
    if (this.defaultKeybindingsResource.toString() === uri.toString()) {
      const defaultKeybindingsEditorModel = this.instantiationService.createInstance(DefaultKeybindingsEditorModel, uri);
      const languageSelection = this.languageService.createById("jsonc");
      const model = this._register(this.modelService.createModel(defaultKeybindingsEditorModel.content, languageSelection, uri));
      return model;
    }
    return null;
  }
  async createPreferencesEditorModel(uri) {
    if (this.isDefaultSettingsResource(uri)) {
      return this.createDefaultSettingsEditorModel(uri);
    }
    if (this.userSettingsResource.toString() === uri.toString() || this.userDataProfilesService.defaultProfile.settingsResource.toString() === uri.toString()) {
      return this.createEditableSettingsEditorModel(3, uri);
    }
    const workspaceSettingsUri = await this.getEditableSettingsURI(5);
    if (workspaceSettingsUri && workspaceSettingsUri.toString() === uri.toString()) {
      return this.createEditableSettingsEditorModel(5, workspaceSettingsUri);
    }
    if (this.contextService.getWorkbenchState() === 3) {
      const settingsUri = await this.getEditableSettingsURI(6, uri);
      if (settingsUri && settingsUri.toString() === uri.toString()) {
        return this.createEditableSettingsEditorModel(6, uri);
      }
    }
    const remoteEnvironment = await this.remoteAgentService.getEnvironment();
    const remoteSettingsUri = remoteEnvironment ? remoteEnvironment.settingsPath : null;
    if (remoteSettingsUri && remoteSettingsUri.toString() === uri.toString()) {
      return this.createEditableSettingsEditorModel(4, uri);
    }
    return null;
  }
  openRawDefaultSettings() {
    return this.editorService.openEditor({ resource: this.defaultSettingsRawResource });
  }
  openRawUserSettings() {
    return this.editorService.openEditor({ resource: this.userSettingsResource });
  }
  shouldOpenJsonByDefault() {
    return this.configurationService.getValue("workbench.settings.editor") === "json";
  }
  openSettings(options = {}) {
    options = {
      ...options,
      target: 3
    };
    if (options.query) {
      options.jsonEditor = false;
    }
    return this.open(this.userSettingsResource, options);
  }
  openLanguageSpecificSettings(languageId, options = {}) {
    if (this.shouldOpenJsonByDefault()) {
      options.query = void 0;
      options.revealSetting = { key: `[${languageId}]`, edit: true };
    } else {
      options.query = `@lang:${languageId}${options.query ? ` ${options.query}` : ""}`;
    }
    options.target = options.target ?? 3;
    return this.open(this.userSettingsResource, options);
  }
  open(settingsResource, options) {
    options = {
      ...options,
      jsonEditor: options.jsonEditor ?? this.shouldOpenJsonByDefault()
    };
    return options.jsonEditor ? this.openSettingsJson(settingsResource, options) : this.openSettings2(options);
  }
  async openSettings2(options) {
    const input = this.settingsEditor2Input;
    options = {
      ...options,
      focusSearch: true
    };
    await this.editorService.openEditor(input, validateSettingsEditorOptions(options), options.openToSide ? SIDE_GROUP : void 0);
    return this.editorGroupService.activeGroup.activeEditorPane;
  }
  openApplicationSettings(options = {}) {
    options = {
      ...options,
      target: 3
    };
    return this.open(this.userDataProfilesService.defaultProfile.settingsResource, options);
  }
  openUserSettings(options = {}) {
    options = {
      ...options,
      target: 3
    };
    return this.open(this.userSettingsResource, options);
  }
  async openRemoteSettings(options = {}) {
    const environment = await this.remoteAgentService.getEnvironment();
    if (environment) {
      options = {
        ...options,
        target: 4
      };
      this.open(environment.settingsPath, options);
    }
    return void 0;
  }
  openWorkspaceSettings(options = {}) {
    if (!this.workspaceSettingsResource) {
      this.notificationService.info(localize(
        "openFolderFirst",
        "Open a folder or workspace first to create workspace or folder settings."
      ));
      return Promise.reject(null);
    }
    options = {
      ...options,
      target: 5
    };
    return this.open(this.workspaceSettingsResource, options);
  }
  async openFolderSettings(options = {}) {
    options = {
      ...options,
      target: 6
    };
    if (!options.folderUri) {
      throw new Error(`Missing folder URI`);
    }
    const folderSettingsUri = await this.getEditableSettingsURI(6, options.folderUri);
    if (!folderSettingsUri) {
      throw new Error(`Invalid folder URI - ${options.folderUri.toString()}`);
    }
    return this.open(folderSettingsUri, options);
  }
  async openGlobalKeybindingSettings(textual, options) {
    options = { pinned: true, revealIfOpened: true, ...options };
    if (textual) {
      const emptyContents = "// " + localize(
        "emptyKeybindingsHeader",
        "Place your key bindings in this file to override the defaults"
      ) + "\n[\n]";
      const editableKeybindings = this.userDataProfileService.currentProfile.keybindingsResource;
      const openDefaultKeybindings = !!this.configurationService.getValue("workbench.settings.openDefaultKeybindings");
      await this.createIfNotExists(editableKeybindings, emptyContents);
      if (openDefaultKeybindings) {
        const activeEditorGroup = this.editorGroupService.activeGroup;
        const sideEditorGroup = this.editorGroupService.addGroup(activeEditorGroup.id, 3);
        await Promise.all([
          this.editorService.openEditor({ resource: this.defaultKeybindingsResource, options: { pinned: true, preserveFocus: true, revealIfOpened: true, override: DEFAULT_EDITOR_ASSOCIATION.id }, label: localize("defaultKeybindings", "Default Keybindings"), description: "" }),
          this.editorService.openEditor({ resource: editableKeybindings, options }, sideEditorGroup.id)
        ]);
      } else {
        await this.editorService.openEditor({ resource: editableKeybindings, options });
      }
    } else {
      const editor = await this.editorService.openEditor(this.instantiationService.createInstance(KeybindingsEditorInput), { ...options });
      if (options.query) {
        editor.search(options.query);
      }
    }
  }
  openDefaultKeybindingsFile() {
    return this.editorService.openEditor({ resource: this.defaultKeybindingsResource, label: localize("defaultKeybindings", "Default Keybindings") });
  }
  async openSettingsJson(resource, options) {
    const group = (options == null ? void 0 : options.openToSide) ? SIDE_GROUP : void 0;
    const editor = await this.doOpenSettingsJson(resource, options, group);
    if (editor && (options == null ? void 0 : options.revealSetting)) {
      await this.revealSetting(options.revealSetting.key, !!options.revealSetting.edit, editor, resource);
    }
    return editor;
  }
  async doOpenSettingsJson(resource, options, group) {
    const openSplitJSON = !!this.configurationService.getValue(USE_SPLIT_JSON_SETTING);
    const openDefaultSettings = !!this.configurationService.getValue(DEFAULT_SETTINGS_EDITOR_SETTING);
    if (openSplitJSON || openDefaultSettings) {
      return this.doOpenSplitJSON(resource, options, group);
    }
    const configurationTarget = (options == null ? void 0 : options.target) ?? 2;
    const editableSettingsEditorInput = await this.getOrCreateEditableSettingsEditorInput(configurationTarget, resource);
    options = { ...options, pinned: true };
    return await this.editorService.openEditor(editableSettingsEditorInput, validateSettingsEditorOptions(options), group);
  }
  async doOpenSplitJSON(resource, options = {}, group) {
    const configurationTarget = options.target ?? 2;
    await this.createSettingsIfNotExists(configurationTarget, resource);
    const preferencesEditorInput = this.createSplitJsonEditorInput(configurationTarget, resource);
    options = { ...options, pinned: true };
    return this.editorService.openEditor(preferencesEditorInput, validateSettingsEditorOptions(options), group);
  }
  createSplitJsonEditorInput(configurationTarget, resource) {
    const editableSettingsEditorInput = this.textEditorService.createTextEditor({ resource });
    const defaultPreferencesEditorInput = this.instantiationService.createInstance(TextResourceEditorInput, this.getDefaultSettingsResource(configurationTarget), void 0, void 0, void 0, void 0);
    return this.instantiationService.createInstance(SideBySideEditorInput, editableSettingsEditorInput.getName(), void 0, defaultPreferencesEditorInput, editableSettingsEditorInput);
  }
  createSettings2EditorModel() {
    return this.instantiationService.createInstance(Settings2EditorModel, this.getDefaultSettings(3));
  }
  getConfigurationTargetFromDefaultSettingsResource(uri) {
    return this.isDefaultWorkspaceSettingsResource(uri) ? 5 : this.isDefaultFolderSettingsResource(uri) ? 6 : 3;
  }
  isDefaultSettingsResource(uri) {
    return this.isDefaultUserSettingsResource(uri) || this.isDefaultWorkspaceSettingsResource(uri) || this.isDefaultFolderSettingsResource(uri);
  }
  isDefaultUserSettingsResource(uri) {
    return uri.authority === "defaultsettings" && uri.scheme === Schemas.vscode && !!uri.path.match(/\/(\d+\/)?settings\.json$/);
  }
  isDefaultWorkspaceSettingsResource(uri) {
    return uri.authority === "defaultsettings" && uri.scheme === Schemas.vscode && !!uri.path.match(/\/(\d+\/)?workspaceSettings\.json$/);
  }
  isDefaultFolderSettingsResource(uri) {
    return uri.authority === "defaultsettings" && uri.scheme === Schemas.vscode && !!uri.path.match(/\/(\d+\/)?resourceSettings\.json$/);
  }
  getDefaultSettingsResource(configurationTarget) {
    switch (configurationTarget) {
      case 5:
        return URI.from(
          { scheme: Schemas.vscode, authority: "defaultsettings", path: `/workspaceSettings.json` }
        );
      case 6:
        return URI.from(
          { scheme: Schemas.vscode, authority: "defaultsettings", path: `/resourceSettings.json` }
        );
    }
    return URI.from(
      { scheme: Schemas.vscode, authority: "defaultsettings", path: `/settings.json` }
    );
  }
  async getOrCreateEditableSettingsEditorInput(target, resource) {
    await this.createSettingsIfNotExists(target, resource);
    return this.textEditorService.createTextEditor({ resource });
  }
  async createEditableSettingsEditorModel(configurationTarget, settingsUri) {
    const workspace = this.contextService.getWorkspace();
    if (workspace.configuration && workspace.configuration.toString() === settingsUri.toString()) {
      const reference2 = await this.textModelResolverService.createModelReference(settingsUri);
      return this.instantiationService.createInstance(WorkspaceConfigurationEditorModel, reference2, configurationTarget);
    }
    const reference = await this.textModelResolverService.createModelReference(settingsUri);
    return this.instantiationService.createInstance(SettingsEditorModel, reference, configurationTarget);
  }
  async createDefaultSettingsEditorModel(defaultSettingsUri) {
    const reference = await this.textModelResolverService.createModelReference(defaultSettingsUri);
    const target = this.getConfigurationTargetFromDefaultSettingsResource(defaultSettingsUri);
    return this.instantiationService.createInstance(DefaultSettingsEditorModel, defaultSettingsUri, reference, this.getDefaultSettings(target));
  }
  getDefaultSettings(target) {
    if (target === 5) {
      if (!this._defaultWorkspaceSettingsContentModel) {
        this._defaultWorkspaceSettingsContentModel = new DefaultSettings(this.getMostCommonlyUsedSettings(), target);
      }
      return this._defaultWorkspaceSettingsContentModel;
    }
    if (target === 6) {
      if (!this._defaultFolderSettingsContentModel) {
        this._defaultFolderSettingsContentModel = new DefaultSettings(this.getMostCommonlyUsedSettings(), target);
      }
      return this._defaultFolderSettingsContentModel;
    }
    if (!this._defaultUserSettingsContentModel) {
      this._defaultUserSettingsContentModel = new DefaultSettings(this.getMostCommonlyUsedSettings(), target);
    }
    return this._defaultUserSettingsContentModel;
  }
  async getEditableSettingsURI(configurationTarget, resource) {
    switch (configurationTarget) {
      case 1:
        return this.userDataProfilesService.defaultProfile.settingsResource;
      case 2:
      case 3:
        return this.userSettingsResource;
      case 4: {
        const remoteEnvironment = await this.remoteAgentService.getEnvironment();
        return remoteEnvironment ? remoteEnvironment.settingsPath : null;
      }
      case 5:
        return this.workspaceSettingsResource;
      case 6:
        if (resource) {
          return this.getFolderSettingsResource(resource);
        }
    }
    return null;
  }
  async createSettingsIfNotExists(target, resource) {
    if (this.contextService.getWorkbenchState() === 3 && target === 5) {
      const workspaceConfig = this.contextService.getWorkspace().configuration;
      if (!workspaceConfig) {
        return;
      }
      const content = await this.textFileService.read(workspaceConfig);
      if (Object.keys(parse$1(content.value)).indexOf("settings") === -1) {
        await this.jsonEditingService.write(resource, [{ path: ["settings"], value: {} }], true);
      }
      return void 0;
    }
    await this.createIfNotExists(resource, emptyEditableSettingsContent);
  }
  async createIfNotExists(resource, contents) {
    try {
      await this.textFileService.read(resource, { acceptTextOnly: true });
    } catch (error) {
      if (error.fileOperationResult === 1) {
        try {
          await this.textFileService.write(resource, contents);
          return;
        } catch (error2) {
          throw new Error(localize("fail.createSettings", "Unable to create '{0}' ({1}).", this.labelService.getUriLabel(resource, { relative: true }), getErrorMessage(error2)));
        }
      } else {
        throw error;
      }
    }
  }
  getMostCommonlyUsedSettings() {
    return [
      "files.autoSave",
      "editor.fontSize",
      "editor.fontFamily",
      "editor.tabSize",
      "editor.renderWhitespace",
      "editor.cursorStyle",
      "editor.multiCursorModifier",
      "editor.insertSpaces",
      "editor.wordWrap",
      "files.exclude",
      "files.associations",
      "workbench.editor.enablePreview"
    ];
  }
  async revealSetting(settingKey, edit, editor, settingsResource) {
    var _a2;
    const codeEditor = editor ? getCodeEditor(editor.getControl()) : null;
    if (!codeEditor) {
      return;
    }
    const settingsModel = await this.createPreferencesEditorModel(settingsResource);
    if (!settingsModel) {
      return;
    }
    const position = await this.getPositionToReveal(settingKey, edit, settingsModel, codeEditor);
    if (position) {
      codeEditor.setPosition(position);
      codeEditor.revealPositionNearTop(position);
      codeEditor.focus();
      if (edit) {
        (_a2 = SuggestController.get(codeEditor)) == null ? void 0 : _a2.triggerSuggest();
      }
    }
  }
  async getPositionToReveal(settingKey, edit, settingsModel, codeEditor) {
    const model = codeEditor.getModel();
    if (!model) {
      return null;
    }
    const schema = Registry.as(Extensions.Configuration).getConfigurationProperties()[settingKey];
    const isOverrideProperty = OVERRIDE_PROPERTY_REGEX.test(settingKey);
    if (!schema && !isOverrideProperty) {
      return null;
    }
    let position = null;
    const type = (schema == null ? void 0 : schema.type) ?? "object";
    let setting = settingsModel.getPreference(settingKey);
    if (!setting && edit) {
      let defaultValue = type === "object" || type === "array" ? this.configurationService.inspect(settingKey).defaultValue : getDefaultValue(type);
      defaultValue = defaultValue === void 0 && isOverrideProperty ? {} : defaultValue;
      if (defaultValue !== void 0) {
        const key = settingsModel instanceof WorkspaceConfigurationEditorModel ? ["settings", settingKey] : [settingKey];
        await this.jsonEditingService.write(settingsModel.uri, [{ path: key, value: defaultValue }], false);
        setting = settingsModel.getPreference(settingKey);
      }
    }
    if (setting) {
      if (edit) {
        if (isObject(setting.value) || Array.isArray(setting.value)) {
          position = { lineNumber: setting.valueRange.startLineNumber, column: setting.valueRange.startColumn + 1 };
          codeEditor.setPosition(position);
          await CoreEditingCommands.LineBreakInsert.runEditorCommand(null, codeEditor, null);
          position = { lineNumber: position.lineNumber + 1, column: model.getLineMaxColumn(position.lineNumber + 1) };
          const firstNonWhiteSpaceColumn = model.getLineFirstNonWhitespaceColumn(position.lineNumber);
          if (firstNonWhiteSpaceColumn) {
            codeEditor.setPosition({ lineNumber: position.lineNumber, column: firstNonWhiteSpaceColumn });
            await CoreEditingCommands.LineBreakInsert.runEditorCommand(null, codeEditor, null);
            position = { lineNumber: position.lineNumber, column: model.getLineMaxColumn(position.lineNumber) };
          }
        } else {
          position = { lineNumber: setting.valueRange.startLineNumber, column: setting.valueRange.endColumn };
        }
      } else {
        position = { lineNumber: setting.keyRange.startLineNumber, column: setting.keyRange.startColumn };
      }
    }
    return position;
  }
  dispose() {
    this._onDispose.fire();
    super.dispose();
  }
};
PreferencesService = __decorate([
  __param(0, IEditorService),
  __param(1, IEditorGroupsService),
  __param(2, ITextFileService),
  __param(3, IConfigurationService),
  __param(4, INotificationService),
  __param(5, IWorkspaceContextService),
  __param(6, IInstantiationService),
  __param(7, IUserDataProfileService),
  __param(8, IUserDataProfilesService),
  __param(9, ITextModelService),
  __param(10, IKeybindingService),
  __param(11, IModelService),
  __param(12, IJSONEditingService),
  __param(13, ILanguageService),
  __param(14, ILabelService),
  __param(15, IRemoteAgentService),
  __param(16, ITextEditorService)
], PreferencesService);
let PreferencesSearchService = class PreferencesSearchService2 extends Disposable {
  constructor(instantiationService, configurationService, productService, extensionManagementService, extensionEnablementService) {
    super();
    this.instantiationService = instantiationService;
    this.configurationService = configurationService;
    this.productService = productService;
    this.extensionManagementService = extensionManagementService;
    this.extensionEnablementService = extensionEnablementService;
    this._installedExtensions = this.extensionManagementService.getInstalled(1).then((exts) => {
      return exts.filter((ext) => this.extensionEnablementService.isEnabled(ext)).filter((ext) => ext.manifest && ext.manifest.contributes && ext.manifest.contributes.configuration).filter((ext) => !!ext.identifier.uuid);
    });
  }
  get remoteSearchAllowed() {
    const workbenchSettings = this.configurationService.getValue().workbench.settings;
    if (!workbenchSettings.enableNaturalLanguageSearch) {
      return false;
    }
    return !!this._endpoint.urlBase;
  }
  get _endpoint() {
    const workbenchSettings = this.configurationService.getValue().workbench.settings;
    if (workbenchSettings.naturalLanguageSearchEndpoint) {
      return {
        urlBase: workbenchSettings.naturalLanguageSearchEndpoint,
        key: workbenchSettings.naturalLanguageSearchKey
      };
    } else {
      return {
        urlBase: this.productService.settingsSearchUrl
      };
    }
  }
  getRemoteSearchProvider(filter, newExtensionsOnly = false) {
    return void 0;
  }
  getLocalSearchProvider(filter) {
    return this.instantiationService.createInstance(LocalSearchProvider, filter);
  }
};
PreferencesSearchService = __decorate([
  __param(0, IInstantiationService),
  __param(1, IConfigurationService),
  __param(2, IProductService),
  __param(3, IExtensionManagementService),
  __param(4, IWorkbenchExtensionEnablementService)
], PreferencesSearchService);
let LocalSearchProvider = (_c = class {
  constructor(_filter, configurationService) {
    this._filter = _filter;
    this.configurationService = configurationService;
    this._filter = this._filter.replace(/[":]/g, " ").replace(/  /g, " ").trim();
  }
  searchModel(preferencesModel, token) {
    if (!this._filter) {
      return Promise.resolve(null);
    }
    let orderedScore = _c.START_SCORE;
    const settingMatcher = (setting) => {
      const { matches, matchType } = new SettingMatches(
        this._filter,
        setting,
        true,
        true,
        (filter, setting2) => preferencesModel.findValueMatches(filter, setting2),
        this.configurationService
      );
      const score = this._filter === setting.key ? _c.EXACT_MATCH_SCORE : orderedScore--;
      return matches && matches.length ? {
        matches,
        matchType,
        score
      } : null;
    };
    const filterMatches = preferencesModel.filterSettings(this._filter, this.getGroupFilter(this._filter), settingMatcher);
    if (filterMatches[0] && filterMatches[0].score === _c.EXACT_MATCH_SCORE) {
      return Promise.resolve({
        filterMatches: filterMatches.slice(0, 1),
        exactMatch: true
      });
    } else {
      return Promise.resolve({
        filterMatches
      });
    }
  }
  getGroupFilter(filter) {
    const regex = createRegExp(filter, false, { global: true });
    return (group) => {
      return regex.test(group.title);
    };
  }
}, _c.EXACT_MATCH_SCORE = 1e4, _c.START_SCORE = 1e3, _c);
LocalSearchProvider = __decorate([
  __param(1, IConfigurationService)
], LocalSearchProvider);
let SettingMatches = class SettingMatches2 {
  constructor(searchString, setting, requireFullQueryMatch, searchDescription, valuesMatcher, configurationService) {
    this.requireFullQueryMatch = requireFullQueryMatch;
    this.searchDescription = searchDescription;
    this.valuesMatcher = valuesMatcher;
    this.configurationService = configurationService;
    this.descriptionMatchingWords = /* @__PURE__ */ new Map();
    this.keyMatchingWords = /* @__PURE__ */ new Map();
    this.valueMatchingWords = /* @__PURE__ */ new Map();
    this.matchType = SettingMatchType.None;
    this.matches = distinct(this._findMatchesInSetting(searchString, setting), (match) => `${match.startLineNumber}_${match.startColumn}_${match.endLineNumber}_${match.endColumn}_`);
  }
  _findMatchesInSetting(searchString, setting) {
    const result = this._doFindMatchesInSetting(searchString, setting);
    if (setting.overrides && setting.overrides.length) {
      for (const subSetting of setting.overrides) {
        const subSettingMatches = new SettingMatches2(
          searchString,
          subSetting,
          this.requireFullQueryMatch,
          this.searchDescription,
          this.valuesMatcher,
          this.configurationService
        );
        const words = searchString.split(" ");
        const descriptionRanges = this.getRangesForWords(words, this.descriptionMatchingWords, [subSettingMatches.descriptionMatchingWords, subSettingMatches.keyMatchingWords, subSettingMatches.valueMatchingWords]);
        const keyRanges = this.getRangesForWords(words, this.keyMatchingWords, [subSettingMatches.descriptionMatchingWords, subSettingMatches.keyMatchingWords, subSettingMatches.valueMatchingWords]);
        const subSettingKeyRanges = this.getRangesForWords(words, subSettingMatches.keyMatchingWords, [this.descriptionMatchingWords, this.keyMatchingWords, subSettingMatches.valueMatchingWords]);
        const subSettingValueRanges = this.getRangesForWords(words, subSettingMatches.valueMatchingWords, [this.descriptionMatchingWords, this.keyMatchingWords, subSettingMatches.keyMatchingWords]);
        result.push(...descriptionRanges, ...keyRanges, ...subSettingKeyRanges, ...subSettingValueRanges);
        result.push(...subSettingMatches.matches);
        this.refreshMatchType(keyRanges.length + subSettingKeyRanges.length);
        this.matchType |= subSettingMatches.matchType;
      }
    }
    return result;
  }
  _doFindMatchesInSetting(searchString, setting) {
    const registry2 = Registry.as(Extensions.Configuration).getConfigurationProperties();
    const schema = registry2[setting.key];
    const words = searchString.split(" ");
    const settingKeyAsWords = setting.key.split(".").join(" ");
    const settingValue = this.configurationService.getValue(setting.key);
    for (const word of words) {
      if (this.searchDescription) {
        for (let lineIndex = 0; lineIndex < setting.description.length; lineIndex++) {
          const descriptionMatches = matchesWords(word, setting.description[lineIndex], true);
          if (descriptionMatches) {
            this.descriptionMatchingWords.set(word, descriptionMatches.map((match) => this.toDescriptionRange(setting, match, lineIndex)));
          }
          this.checkForWholeWordMatchType(word, setting.description[lineIndex]);
        }
      }
      const keyMatches2 = or(matchesWords, matchesCamelCase)(word, settingKeyAsWords);
      if (keyMatches2) {
        this.keyMatchingWords.set(word, keyMatches2.map((match) => this.toKeyRange(setting, match)));
      }
      this.checkForWholeWordMatchType(word, settingKeyAsWords);
      const valueMatches = typeof settingValue === "string" ? matchesContiguousSubString(word, settingValue) : null;
      if (valueMatches) {
        this.valueMatchingWords.set(word, valueMatches.map((match) => this.toValueRange(setting, match)));
      } else if (schema && schema.enum && schema.enum.some(
        (enumValue) => typeof enumValue === "string" && !!matchesContiguousSubString(word, enumValue)
      )) {
        this.valueMatchingWords.set(word, []);
      }
      if (typeof settingValue === "string") {
        this.checkForWholeWordMatchType(word, settingValue);
      }
    }
    const descriptionRanges = [];
    if (this.searchDescription) {
      for (let lineIndex = 0; lineIndex < setting.description.length; lineIndex++) {
        const matches = or(matchesContiguousSubString)(searchString, setting.description[lineIndex] || "") || [];
        descriptionRanges.push(...matches.map((match) => this.toDescriptionRange(setting, match, lineIndex)));
      }
      if (descriptionRanges.length === 0) {
        descriptionRanges.push(...this.getRangesForWords(words, this.descriptionMatchingWords, [this.keyMatchingWords, this.valueMatchingWords]));
      }
    }
    const keyMatches = or(matchesPrefix, matchesContiguousSubString)(searchString, setting.key);
    const keyRanges = keyMatches ? keyMatches.map((match) => this.toKeyRange(setting, match)) : this.getRangesForWords(words, this.keyMatchingWords, [this.descriptionMatchingWords, this.valueMatchingWords]);
    let valueRanges = [];
    if (typeof settingValue === "string" && settingValue) {
      const valueMatches = or(matchesPrefix, matchesContiguousSubString)(searchString, settingValue);
      valueRanges = valueMatches ? valueMatches.map((match) => this.toValueRange(setting, match)) : this.getRangesForWords(words, this.valueMatchingWords, [this.keyMatchingWords, this.descriptionMatchingWords]);
    } else {
      valueRanges = this.valuesMatcher(searchString, setting);
    }
    this.refreshMatchType(keyRanges.length);
    return [...descriptionRanges, ...keyRanges, ...valueRanges];
  }
  checkForWholeWordMatchType(singleWordQuery, lineToSearch) {
    singleWordQuery = singleWordQuery.toLowerCase().replace(/[\s-\._]+$/, "");
    lineToSearch = lineToSearch.toLowerCase();
    const singleWordRegex = new RegExp(`\\b${escapeRegExpCharacters(singleWordQuery)}\\b`);
    if (singleWordRegex.test(lineToSearch)) {
      this.matchType |= SettingMatchType.WholeWordMatch;
    }
  }
  refreshMatchType(keyRangesLength) {
    if (keyRangesLength) {
      this.matchType |= SettingMatchType.KeyMatch;
    }
  }
  getRangesForWords(words, from, others) {
    const result = [];
    for (const word of words) {
      const ranges = from.get(word);
      if (ranges) {
        result.push(...ranges);
      } else if (this.requireFullQueryMatch && others.every((o) => !o.has(word))) {
        return [];
      }
    }
    return result;
  }
  toKeyRange(setting, match) {
    return {
      startLineNumber: setting.keyRange.startLineNumber,
      startColumn: setting.keyRange.startColumn + match.start,
      endLineNumber: setting.keyRange.startLineNumber,
      endColumn: setting.keyRange.startColumn + match.end
    };
  }
  toDescriptionRange(setting, match, lineIndex) {
    return {
      startLineNumber: setting.descriptionRanges[lineIndex].startLineNumber,
      startColumn: setting.descriptionRanges[lineIndex].startColumn + match.start,
      endLineNumber: setting.descriptionRanges[lineIndex].endLineNumber,
      endColumn: setting.descriptionRanges[lineIndex].startColumn + match.end
    };
  }
  toValueRange(setting, match) {
    return {
      startLineNumber: setting.valueRange.startLineNumber,
      startColumn: setting.valueRange.startColumn + match.start + 1,
      endLineNumber: setting.valueRange.startLineNumber,
      endColumn: setting.valueRange.startColumn + match.end + 1
    };
  }
};
SettingMatches = __decorate([
  __param(5, IConfigurationService)
], SettingMatches);
var css$5 = ".preferences-editor{display:flex;flex-direction:column}.preferences-editor>.preferences-header{padding:11px 32px 11px 27px}.preferences-editor .deprecation-warning{display:flex;margin-top:4px}.preferences-editor .deprecation-warning .icon{margin-right:3px}.preferences-editor .deprecation-warning .learnMore-button{margin-left:3px;text-decoration:underline}.preferences-editor>.preferences-editors-container.side-by-side-preferences-editor{flex:1}.preferences-editor>.preferences-editors-container.side-by-side-preferences-editor .preferences-header-container{line-height:28px}.settings-tabs-widget>.monaco-action-bar .action-item.disabled{display:none}.settings-tabs-widget>.monaco-action-bar .action-item{max-width:300px;overflow:hidden;text-overflow:ellipsis}.default-preferences-editor-container>.preferences-header-container>.default-preferences-header,.settings-tabs-widget>.monaco-action-bar .action-item .action-label{cursor:pointer;display:flex;font-size:11px;margin-right:5px;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase}.default-preferences-editor-container>.preferences-header-container>.default-preferences-header,.preferences-editor .settings-tabs-widget>.monaco-action-bar .action-item .action-label{margin-left:33px}.settings-tabs-widget>.monaco-action-bar .action-item .action-label{background:none!important;border-radius:initial;display:block;padding:0}.settings-tabs-widget>.monaco-action-bar .action-item .action-label.folder-settings{display:flex}.default-preferences-editor-container>.preferences-header-container>.default-preferences-header,.settings-tabs-widget>.monaco-action-bar .action-item{padding:3px 0}.settings-tabs-widget>.monaco-action-bar .action-item .action-title{overflow:hidden;text-overflow:ellipsis}.settings-tabs-widget>.monaco-action-bar .action-item .action-details{font-size:10px;margin-left:.5em;opacity:.7;text-transform:none}.settings-tabs-widget .monaco-action-bar .action-item .dropdown-icon{font-size:12px;padding-left:.3em;padding-top:8px}.settings-tabs-widget .monaco-action-bar .action-item .dropdown-icon.hide{display:none}.settings-tabs-widget>.monaco-action-bar .action-item .action-label{color:var(--vscode-panelTitle-inactiveForeground)}.settings-tabs-widget>.monaco-action-bar .action-item .action-label.checked,.settings-tabs-widget>.monaco-action-bar .action-item .action-label:hover{border-bottom:1px solid var(--vscode-panelTitle-activeBorder);color:var(--vscode-panelTitle-activeForeground);outline:1px solid var(--vscode-contrastActiveBorder,transparent);outline-offset:-1px}.settings-tabs-widget>.monaco-action-bar .action-item .action-label:focus{border-bottom:1px solid var(--vscode-focusBorder);outline:1px solid transparent;outline-offset:-1px}.settings-tabs-widget>.monaco-action-bar .action-item .action-label:not(.checked):hover{outline-style:dashed}.preferences-header>.settings-header-widget{align-self:stretch;display:flex;flex:1;position:relative}.settings-header-widget>.settings-search-controls>.settings-count-widget{border-radius:2px;float:left;margin:6px 0;padding:0 8px}.settings-header-widget>.settings-search-controls{position:absolute;right:10px}.settings-header-widget>.settings-search-controls>.settings-count-widget.hide{display:none}.settings-header-widget>.settings-search-container{flex:1}.settings-header-widget>.settings-search-container>.settings-search-input{vertical-align:middle}.settings-header-widget>.settings-search-container>.settings-search-input>.monaco-inputbox{height:30px}.monaco-workbench.vs .settings-header-widget>.settings-search-container>.settings-search-input>.monaco-inputbox{border:1px solid #ddd}.settings-header-widget>.settings-search-container>.settings-search-input>.monaco-inputbox .input{font-size:14px;padding-left:10px}.monaco-editor .view-zones>.settings-header-widget{z-index:1}.monaco-editor .settings-header-widget .title-container{display:flex;user-select:none;-webkit-user-select:none}.monaco-editor .settings-header-widget .title-container .title{font-weight:700;text-transform:uppercase;white-space:nowrap}.monaco-editor .settings-header-widget .title-container .message{white-space:nowrap}.monaco-editor .settings-group-title-widget{z-index:1}.monaco-editor .settings-group-title-widget .title-container{cursor:pointer;display:flex;font-weight:700;user-select:none;-webkit-user-select:none;width:100%}.monaco-editor .settings-group-title-widget .title-container .title{overflow:hidden;white-space:nowrap}.monaco-editor.vs .settings-group-title-widget .title-container.focused,.monaco-editor.vs-dark .settings-group-title-widget .title-container.focused{outline:none!important}.monaco-editor .settings-group-title-widget .title-container.focused,.monaco-editor .settings-group-title-widget .title-container:hover{background-color:hsla(0,0%,60%,.2)}.monaco-editor.hc-black .settings-group-title-widget .title-container.focused{outline:1px dotted #f38518}.monaco-editor.hc-light .settings-group-title-widget .title-container.focused{outline:1px dotted #0f4a85}.monaco-editor .settings-group-title-widget .title-container .codicon{align-items:center;display:flex;height:100%;justify-content:center;margin:0 2px;width:16px}.monaco-editor .dim-configuration{color:#b1b1b1}.codicon-settings-edit:hover{cursor:pointer}";
n(css$5, {});
var css$4 = '.keybindings-editor{padding:11px 0 0 27px}.keybindings-overflow-widgets-container{height:0;left:0;overflow:visible;position:absolute;top:0;width:0;z-index:5000}.keybindings-editor>.keybindings-header{padding:0 10px 11px 0}.keybindings-editor>.keybindings-header>.search-container{position:relative}.keybindings-editor>.keybindings-header>.search-container>.keybindings-search-actions-container{display:flex;margin-top:4px;position:absolute;right:10px;top:0}.keybindings-editor>.keybindings-header>.search-container>.keybindings-search-actions-container>.recording-badge{margin-right:8px;padding:4px}.keybindings-editor>.keybindings-header.small>.search-container>.keybindings-search-actions-container>.recording-badge,.keybindings-editor>.keybindings-header>.search-container>.keybindings-search-actions-container>.recording-badge.disabled{display:none}.keybindings-editor>.keybindings-header>.search-container>.keybindings-search-actions-container .monaco-action-bar .action-item>.icon{height:18px;width:16px}.keybindings-editor>.keybindings-header>.search-container>.keybindings-search-actions-container .monaco-action-bar .action-item{margin-right:4px}.keybindings-editor .monaco-action-bar .action-item .monaco-custom-toggle{margin:0;padding:2px}.keybindings-editor .monaco-action-bar .action-item>.codicon{align-items:center;box-sizing:content-box;color:inherit;display:flex;justify-content:center}.keybindings-editor>.keybindings-header .open-keybindings-container{display:flex;margin-top:10px}.keybindings-editor>.keybindings-header .open-keybindings-container>div{opacity:.7}.keybindings-editor>.keybindings-header .open-keybindings-container>.file-name{cursor:pointer;margin-left:4px;text-decoration:underline}.keybindings-editor>.keybindings-header .open-keybindings-container>.file-name:focus{opacity:1}.keybindings-editor>.keybindings-body .keybindings-table-container{border-collapse:separate;border-spacing:0;width:100%}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr{cursor:default}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td{align-items:center;display:flex;overflow:hidden}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .actions .monaco-action-bar{display:none;flex:1}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-list-row.selected .monaco-table-tr .monaco-table-td .actions .monaco-action-bar,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-list-row:hover .monaco-table-tr .monaco-table-td .actions .monaco-action-bar,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table.focused .monaco-list-row.focused .monaco-table-tr .monaco-table-td .actions .monaco-action-bar{display:flex}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .monaco-action-bar .action-item>.icon{cursor:pointer;height:16px;margin-top:3px;width:16px}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command.vertical-align-column{align-items:flex-start;flex-direction:column;justify-content:center}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command .command-default-label{margin-top:2px;opacity:.8}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .keybinding .monaco-highlighted-label{padding-left:10px}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .when{width:100%}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .when .empty{padding-left:4px}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .when.input-mode .when-label{display:none}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .when .suggest-input-container{padding-left:10px}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .source a{cursor:pointer}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-list-row:not(.focused):not(.selected) .monaco-table-tr .monaco-table-td .source a{color:var(--vscode-textLink-foreground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .source a:hover{text-decoration:underline}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-list-row:not(.focused):not(.selected) .monaco-table-tr .monaco-table-td .source a:active,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-list-row:not(.focused):not(.selected) .monaco-table-tr .monaco-table-td .source a:hover{color:var(--vscode-textLink-activeForeground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command .monaco-highlighted-label,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command>.command-default-label,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command>.command-id-label,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .command>.command-label,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .source .monaco-highlighted-label,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .when .monaco-highlighted-label{overflow:hidden;text-overflow:ellipsis}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .hide{display:none}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .code{display:flex;font-family:var(--monaco-monospace-font);font-size:90%;overflow:hidden}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .code.strong{background-color:hsla(0,0%,50%,.17);border-radius:4px;padding:1px 4px}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-tr .monaco-table-td .highlight{color:var(--vscode-list-highlightForeground);font-weight:700}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table.focused .monaco-list-row.selected .monaco-table-td .highlight,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table.focused .monaco-list-row.selected.focused .monaco-table-td .highlight{color:inherit}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list-row.selected .monaco-table-tr .monaco-table-td .monaco-keybinding-key,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list-row.selected.focused .monaco-table-tr .monaco-table-td .monaco-keybinding-key{color:var(--vscode-list-inactiveSelectionForeground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list-row.focused .monaco-table-tr .monaco-table-td .monaco-keybinding-key{color:var(--vscode-list-focusForeground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table.focused .monaco-list-row.selected .monaco-table-tr .monaco-table-td .monaco-keybinding-key{color:var(--vscode-list-activeSelectionForeground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list-row:hover:not(.selected):not(.focused) .monaco-table-tr .monaco-table-td .monaco-keybinding-key{color:var(--vscode-list-hoverForeground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr{background-color:var(--vscode-keybindingTable-rowsBackground)}.keybindings-editor>.keybindings-body>.keybindings-table-container .monaco-table-th{background-color:var(--vscode-keybindingTable-headerBackground)}.keybindings-editor .monaco-table-td,.keybindings-editor .monaco-table-th{padding-left:10px}.keybindings-editor .monaco-table-td[data-col-index="0"],.keybindings-editor .monaco-table-th[data-col-index="0"]{padding-left:20px}';
n(css$4, {});
var css$3 = ".defineKeybindingWidget{padding:10px;position:absolute}.defineKeybindingWidget .message{text-align:center;width:400px}.defineKeybindingWidget .existing,.defineKeybindingWidget .monaco-inputbox,.defineKeybindingWidget .output{display:block;margin-top:10px;text-align:center;width:400px}.defineKeybindingWidget .input{text-align:center}.defineKeybindingWidget .output{display:flex;justify-content:center}.defineKeybindingWidget .existing .existingText{cursor:pointer;text-decoration:underline}.defineKeybindingWidget .output .monaco-keybinding{margin:0 4px}.monaco-editor .keybindingInfo{background-color:rgba(100,100,250,.2);box-shadow:inset 0 0 0 1px #b9b9b9}.monaco-editor .keybindingError{background-color:hsla(0,94%,69%,.2);box-shadow:inset 0 0 0 1px #b9b9b9}";
n(css$3, {});
const settingsScopeDropDownIcon = registerIcon("settings-folder-dropdown", Codicon.triangleDown, localize(
  "settingsScopeDropDownIcon",
  "Icon for the folder dropdown button in the split JSON Settings editor."
));
const settingsMoreActionIcon = registerIcon("settings-more-action", Codicon.gear, localize(
  "settingsMoreActionIcon",
  "Icon for the 'more actions' action in the Settings UI."
));
const keybindingsRecordKeysIcon = registerIcon("keybindings-record-keys", Codicon.recordKeys, localize(
  "keybindingsRecordKeysIcon",
  "Icon for the 'record keys' action in the keybinding UI."
));
const keybindingsSortIcon = registerIcon("keybindings-sort", Codicon.sortPrecedence, localize(
  "keybindingsSortIcon",
  "Icon for the 'sort by precedence' toggle in the keybinding UI."
));
const keybindingsEditIcon = registerIcon("keybindings-edit", Codicon.edit, localize("keybindingsEditIcon", "Icon for the edit action in the keybinding UI."));
const keybindingsAddIcon = registerIcon("keybindings-add", Codicon.add, localize("keybindingsAddIcon", "Icon for the add action in the keybinding UI."));
const settingsEditIcon = registerIcon("settings-edit", Codicon.edit, localize("settingsEditIcon", "Icon for the edit action in the Settings UI."));
const settingsRemoveIcon = registerIcon("settings-remove", Codicon.close, localize("settingsRemoveIcon", "Icon for the remove action in the Settings UI."));
const settingsDiscardIcon = registerIcon("settings-discard", Codicon.discard, localize(
  "preferencesDiscardIcon",
  "Icon for the discard action in the Settings UI."
));
const preferencesClearInputIcon = registerIcon("preferences-clear-input", Codicon.clearAll, localize(
  "preferencesClearInput",
  "Icon for clear input in the Settings and keybinding UI."
));
const preferencesFilterIcon = registerIcon("preferences-filter", Codicon.filter, localize(
  "settingsFilter",
  "Icon for the button that suggests filters for the Settings UI."
));
const preferencesOpenSettingsIcon = registerIcon("preferences-open-settings", Codicon.goToFile, localize("preferencesOpenSettings", "Icon for open settings commands."));
let FolderSettingsActionViewItem = class FolderSettingsActionViewItem2 extends BaseActionViewItem {
  constructor(action, contextService, contextMenuService) {
    super(null, action);
    this.contextService = contextService;
    this.contextMenuService = contextMenuService;
    this._folderSettingCounts = /* @__PURE__ */ new Map();
    const workspace = this.contextService.getWorkspace();
    this._folder = workspace.folders.length === 1 ? workspace.folders[0] : null;
    this._register(this.contextService.onDidChangeWorkspaceFolders(() => this.onWorkspaceFoldersChanged()));
  }
  get folder() {
    return this._folder;
  }
  set folder(folder) {
    this._folder = folder;
    this.update();
  }
  setCount(settingsTarget, count) {
    const workspaceFolder = this.contextService.getWorkspaceFolder(settingsTarget);
    if (!workspaceFolder) {
      throw new Error("unknown folder");
    }
    const folder = workspaceFolder.uri;
    this._folderSettingCounts.set(folder.toString(), count);
    this.update();
  }
  render(container) {
    this.element = container;
    this.container = container;
    this.labelElement = $$6(".action-title");
    this.detailsElement = $$6(".action-details");
    this.dropDownElement = $$6(".dropdown-icon.hide" + ThemeIcon.asCSSSelector(settingsScopeDropDownIcon));
    this.anchorElement = $$6("a.action-label.folder-settings", {
      role: "button",
      "aria-haspopup": "true",
      "tabindex": "0"
    }, this.labelElement, this.detailsElement, this.dropDownElement);
    this._register(addDisposableListener(this.anchorElement, EventType.MOUSE_DOWN, (e) => EventHelper.stop(e)));
    this._register(addDisposableListener(this.anchorElement, EventType.CLICK, (e) => this.onClick(e)));
    this._register(addDisposableListener(this.container, EventType.KEY_UP, (e) => this.onKeyUp(e)));
    append(this.container, this.anchorElement);
    this.update();
  }
  onKeyUp(event) {
    const keyboardEvent = new StandardKeyboardEvent(event);
    switch (keyboardEvent.keyCode) {
      case 3:
      case 10:
        this.onClick(event);
        return;
    }
  }
  onClick(event) {
    EventHelper.stop(event, true);
    if (!this.folder || this._action.checked) {
      this.showMenu();
    } else {
      this._action.run(this._folder);
    }
  }
  updateEnabled() {
    this.update();
  }
  updateChecked() {
    this.update();
  }
  onWorkspaceFoldersChanged() {
    const oldFolder = this._folder;
    const workspace = this.contextService.getWorkspace();
    if (oldFolder) {
      this._folder = workspace.folders.filter((folder) => isEqual(folder.uri, oldFolder.uri))[0] || workspace.folders[0];
    }
    this._folder = this._folder ? this._folder : workspace.folders.length === 1 ? workspace.folders[0] : null;
    this.update();
    if (this._action.checked) {
      this._action.run(this._folder);
    }
  }
  update() {
    let total = 0;
    this._folderSettingCounts.forEach((n2) => total += n2);
    const workspace = this.contextService.getWorkspace();
    if (this._folder) {
      this.labelElement.textContent = this._folder.name;
      this.anchorElement.title = this._folder.name;
      const detailsText = this.labelWithCount(this._action.label, total);
      this.detailsElement.textContent = detailsText;
      this.dropDownElement.classList.toggle("hide", workspace.folders.length === 1 || !this._action.checked);
    } else {
      const labelText = this.labelWithCount(this._action.label, total);
      this.labelElement.textContent = labelText;
      this.detailsElement.textContent = "";
      this.anchorElement.title = this._action.label;
      this.dropDownElement.classList.remove("hide");
    }
    this.anchorElement.classList.toggle("checked", this._action.checked);
    this.container.classList.toggle("disabled", !this._action.enabled);
  }
  showMenu() {
    this.contextMenuService.showContextMenu({
      getAnchor: () => this.container,
      getActions: () => this.getDropdownMenuActions(),
      getActionViewItem: () => void 0,
      onHide: () => {
        this.anchorElement.blur();
      }
    });
  }
  getDropdownMenuActions() {
    const actions = [];
    const workspaceFolders = this.contextService.getWorkspace().folders;
    if (this.contextService.getWorkbenchState() === 3 && workspaceFolders.length > 0) {
      actions.push(...workspaceFolders.map((folder, index) => {
        const folderCount = this._folderSettingCounts.get(folder.uri.toString());
        return {
          id: "folderSettingsTarget" + index,
          label: this.labelWithCount(folder.name, folderCount),
          checked: this.folder && isEqual(this.folder.uri, folder.uri),
          enabled: true,
          run: () => this._action.run(folder)
        };
      }));
    }
    return actions;
  }
  labelWithCount(label, count) {
    if (count) {
      label += ` (${count})`;
    }
    return label;
  }
};
FolderSettingsActionViewItem = __decorate([
  __param(1, IWorkspaceContextService),
  __param(2, IContextMenuService)
], FolderSettingsActionViewItem);
let SettingsTargetsWidget = class SettingsTargetsWidget2 extends Widget {
  constructor(parent, options, contextService, instantiationService, environmentService, labelService, languageService) {
    super();
    this.contextService = contextService;
    this.instantiationService = instantiationService;
    this.environmentService = environmentService;
    this.labelService = labelService;
    this.languageService = languageService;
    this._settingsTarget = null;
    this._onDidTargetChange = this._register(new Emitter());
    this.onDidTargetChange = this._onDidTargetChange.event;
    this.options = options ?? {};
    this.create(parent);
    this._register(this.contextService.onDidChangeWorkbenchState(() => this.onWorkbenchStateChanged()));
    this._register(this.contextService.onDidChangeWorkspaceFolders(() => this.update()));
  }
  resetLabels() {
    const remoteAuthority = this.environmentService.remoteAuthority;
    const hostLabel = remoteAuthority && this.labelService.getHostLabel(Schemas.vscodeRemote, remoteAuthority);
    this.userLocalSettings.label = localize("userSettings", "User");
    this.userRemoteSettings.label = localize("userSettingsRemote", "Remote") + (hostLabel ? ` [${hostLabel}]` : "");
    this.workspaceSettings.label = localize("workspaceSettings", "Workspace");
    this.folderSettingsAction.label = localize("folderSettings", "Folder");
  }
  create(parent) {
    const settingsTabsWidget = append(parent, $$6(".settings-tabs-widget"));
    this.settingsSwitcherBar = this._register(new ActionBar(settingsTabsWidget, {
      orientation: 0,
      focusOnlyEnabledItems: true,
      ariaLabel: localize("settingsSwitcherBarAriaLabel", "Settings Switcher"),
      animated: false,
      actionViewItemProvider: (action) => action.id === "folderSettings" ? this.folderSettings : void 0
    }));
    this.userLocalSettings = new Action(
      "userSettings",
      "",
      ".settings-tab",
      true,
      () => this.updateTarget(3)
    );
    this.userLocalSettings.tooltip = localize("userSettings", "User");
    this.userRemoteSettings = new Action(
      "userSettingsRemote",
      "",
      ".settings-tab",
      true,
      () => this.updateTarget(4)
    );
    const remoteAuthority = this.environmentService.remoteAuthority;
    const hostLabel = remoteAuthority && this.labelService.getHostLabel(Schemas.vscodeRemote, remoteAuthority);
    this.userRemoteSettings.tooltip = localize("userSettingsRemote", "Remote") + (hostLabel ? ` [${hostLabel}]` : "");
    this.workspaceSettings = new Action(
      "workspaceSettings",
      "",
      ".settings-tab",
      false,
      () => this.updateTarget(5)
    );
    this.folderSettingsAction = new Action("folderSettings", "", ".settings-tab", false, async (folder) => {
      this.updateTarget(isWorkspaceFolder(folder) ? folder.uri : 3);
    });
    this.folderSettings = this.instantiationService.createInstance(FolderSettingsActionViewItem, this.folderSettingsAction);
    this.resetLabels();
    this.update();
    this.settingsSwitcherBar.push([this.userLocalSettings, this.userRemoteSettings, this.workspaceSettings, this.folderSettingsAction]);
  }
  get settingsTarget() {
    return this._settingsTarget;
  }
  set settingsTarget(settingsTarget) {
    this._settingsTarget = settingsTarget;
    this.userLocalSettings.checked = 3 === this.settingsTarget;
    this.userRemoteSettings.checked = 4 === this.settingsTarget;
    this.workspaceSettings.checked = 5 === this.settingsTarget;
    if (this.settingsTarget instanceof URI) {
      this.folderSettings.action.checked = true;
      this.folderSettings.folder = this.contextService.getWorkspaceFolder(this.settingsTarget);
    } else {
      this.folderSettings.action.checked = false;
    }
  }
  setResultCount(settingsTarget, count) {
    if (settingsTarget === 5) {
      let label = localize("workspaceSettings", "Workspace");
      if (count) {
        label += ` (${count})`;
      }
      this.workspaceSettings.label = label;
    } else if (settingsTarget === 3) {
      let label = localize("userSettings", "User");
      if (count) {
        label += ` (${count})`;
      }
      this.userLocalSettings.label = label;
    } else if (settingsTarget instanceof URI) {
      this.folderSettings.setCount(settingsTarget, count);
    }
  }
  updateLanguageFilterIndicators(filter) {
    this.resetLabels();
    if (filter) {
      const languageToUse = this.languageService.getLanguageName(filter);
      if (languageToUse) {
        const languageSuffix = ` [${languageToUse}]`;
        this.userLocalSettings.label += languageSuffix;
        this.userRemoteSettings.label += languageSuffix;
        this.workspaceSettings.label += languageSuffix;
        this.folderSettingsAction.label += languageSuffix;
      }
    }
  }
  onWorkbenchStateChanged() {
    this.folderSettings.folder = null;
    this.update();
    if (this.settingsTarget === 5 && this.contextService.getWorkbenchState() === 3) {
      this.updateTarget(3);
    }
  }
  updateTarget(settingsTarget) {
    const isSameTarget = this.settingsTarget === settingsTarget || settingsTarget instanceof URI && this.settingsTarget instanceof URI && isEqual(this.settingsTarget, settingsTarget);
    if (!isSameTarget) {
      this.settingsTarget = settingsTarget;
      this._onDidTargetChange.fire(this.settingsTarget);
    }
    return Promise.resolve(void 0);
  }
  async update() {
    this.settingsSwitcherBar.domNode.classList.toggle("empty-workbench", this.contextService.getWorkbenchState() === 1);
    this.userRemoteSettings.enabled = !!(this.options.enableRemoteSettings && this.environmentService.remoteAuthority);
    this.workspaceSettings.enabled = this.contextService.getWorkbenchState() !== 1;
    this.folderSettings.action.enabled = this.contextService.getWorkbenchState() === 3 && this.contextService.getWorkspace().folders.length > 0;
    this.workspaceSettings.tooltip = localize("workspaceSettings", "Workspace");
  }
};
SettingsTargetsWidget = __decorate([
  __param(2, IWorkspaceContextService),
  __param(3, IInstantiationService),
  __param(4, IWorkbenchEnvironmentService),
  __param(5, ILabelService),
  __param(6, ILanguageService)
], SettingsTargetsWidget);
let SearchWidget = class SearchWidget2 extends Widget {
  constructor(parent, options, contextViewService, instantiationService, contextKeyService, keybindingService) {
    super();
    this.options = options;
    this.contextViewService = contextViewService;
    this.instantiationService = instantiationService;
    this.contextKeyService = contextKeyService;
    this.keybindingService = keybindingService;
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this._onFocus = this._register(new Emitter());
    this.onFocus = this._onFocus.event;
    this.create(parent);
  }
  create(parent) {
    this.domNode = append(parent, $$6("div.settings-header-widget"));
    this.createSearchContainer(append(this.domNode, $$6("div.settings-search-container")));
    this.controlsDiv = append(this.domNode, $$6("div.settings-search-controls"));
    if (this.options.showResultCount) {
      this.countElement = append(this.controlsDiv, $$6(".settings-count-widget"));
      this.countElement.style.backgroundColor = asCssVariable(badgeBackground);
      this.countElement.style.color = asCssVariable(badgeForeground);
      this.countElement.style.border = `1px solid ${asCssVariable(contrastBorder)}`;
    }
    this.inputBox.inputElement.setAttribute("aria-live", this.options.ariaLive || "off");
    if (this.options.ariaLabelledBy) {
      this.inputBox.inputElement.setAttribute("aria-labelledBy", this.options.ariaLabelledBy);
    }
    const focusTracker = this._register(trackFocus(this.inputBox.inputElement));
    this._register(focusTracker.onDidFocus(() => this._onFocus.fire()));
    const focusKey = this.options.focusKey;
    if (focusKey) {
      this._register(focusTracker.onDidFocus(() => focusKey.set(true)));
      this._register(focusTracker.onDidBlur(() => focusKey.set(false)));
    }
  }
  createSearchContainer(searchContainer) {
    this.searchContainer = searchContainer;
    const searchInput = append(this.searchContainer, $$6("div.settings-search-input"));
    this.inputBox = this._register(this.createInputBox(searchInput));
    this._register(this.inputBox.onDidChange((value) => this._onDidChange.fire(value)));
  }
  createInputBox(parent) {
    const showHistoryHint = () => showHistoryKeybindingHint(this.keybindingService);
    const box = this._register(new ContextScopedHistoryInputBox(
      parent,
      this.contextViewService,
      { ...this.options, showHistoryHint },
      this.contextKeyService
    ));
    return box;
  }
  showMessage(message) {
    if (this.countElement && message !== this.countElement.textContent) {
      this.countElement.textContent = message;
      this.inputBox.inputElement.setAttribute("aria-label", message);
      this.inputBox.inputElement.style.paddingRight = this.getControlsWidth() + "px";
    }
  }
  layout(dimension) {
    var _a2, _b2;
    if (dimension.width < 400) {
      (_a2 = this.countElement) == null ? void 0 : _a2.classList.add("hide");
      this.inputBox.inputElement.style.paddingRight = "0px";
    } else {
      (_b2 = this.countElement) == null ? void 0 : _b2.classList.remove("hide");
      this.inputBox.inputElement.style.paddingRight = this.getControlsWidth() + "px";
    }
  }
  getControlsWidth() {
    const countWidth = this.countElement ? getTotalWidth(this.countElement) : 0;
    return countWidth + 20;
  }
  focus() {
    this.inputBox.focus();
    if (this.getValue()) {
      this.inputBox.select();
    }
  }
  hasFocus() {
    return this.inputBox.hasFocus();
  }
  clear() {
    this.inputBox.value = "";
  }
  getValue() {
    return this.inputBox.value;
  }
  setValue(value) {
    return this.inputBox.value = value;
  }
  dispose() {
    var _a2;
    (_a2 = this.options.focusKey) == null ? void 0 : _a2.set(false);
    super.dispose();
  }
};
SearchWidget = __decorate([
  __param(2, IContextViewService),
  __param(3, IInstantiationService),
  __param(4, IContextKeyService),
  __param(5, IKeybindingService)
], SearchWidget);
class EditPreferenceWidget extends Disposable {
  constructor(editor) {
    super();
    this.editor = editor;
    this._line = -1;
    this._preferences = [];
    this._editPreferenceDecoration = this.editor.createDecorationsCollection();
    this._onClick = this._register(new Emitter());
    this.onClick = this._onClick.event;
    this._register(this.editor.onMouseDown((e) => {
      if (e.target.type !== 2 || e.target.detail.isAfterLines || !this.isVisible()) {
        return;
      }
      this._onClick.fire(e);
    }));
  }
  get preferences() {
    return this._preferences;
  }
  getLine() {
    return this._line;
  }
  show(line, hoverMessage, preferences) {
    this._preferences = preferences;
    const newDecoration = [];
    this._line = line;
    newDecoration.push({
      options: {
        description: "edit-preference-widget-decoration",
        glyphMarginClassName: ThemeIcon.asClassName(settingsEditIcon),
        glyphMarginHoverMessage: new MarkdownString().appendText(hoverMessage),
        stickiness: 1
      },
      range: {
        startLineNumber: line,
        startColumn: 1,
        endLineNumber: line,
        endColumn: 1
      }
    });
    this._editPreferenceDecoration.set(newDecoration);
  }
  hide() {
    this._editPreferenceDecoration.clear();
  }
  isVisible() {
    return this._editPreferenceDecoration.length > 0;
  }
  dispose() {
    this.hide();
    super.dispose();
  }
}
let KeybindingsSearchWidget = class KeybindingsSearchWidget2 extends SearchWidget {
  constructor(parent, options, contextViewService, instantiationService, contextKeyService, keybindingService) {
    super(parent, options, contextViewService, instantiationService, contextKeyService, keybindingService);
    this.recordDisposables = this._register(new DisposableStore());
    this._onKeybinding = this._register(new Emitter());
    this.onKeybinding = this._onKeybinding.event;
    this._onEnter = this._register(new Emitter());
    this.onEnter = this._onEnter.event;
    this._onEscape = this._register(new Emitter());
    this.onEscape = this._onEscape.event;
    this._onBlur = this._register(new Emitter());
    this.onBlur = this._onBlur.event;
    this._register(toDisposable(() => this.stopRecordingKeys()));
    this._chords = null;
    this._inputValue = "";
  }
  clear() {
    this._chords = null;
    super.clear();
  }
  startRecordingKeys() {
    this.recordDisposables.add(addDisposableListener(this.inputBox.inputElement, EventType.KEY_DOWN, (e) => this._onKeyDown(new StandardKeyboardEvent(e))));
    this.recordDisposables.add(addDisposableListener(this.inputBox.inputElement, EventType.BLUR, () => this._onBlur.fire()));
    this.recordDisposables.add(addDisposableListener(this.inputBox.inputElement, EventType.INPUT, () => {
      this.setInputValue(this._inputValue);
    }));
  }
  stopRecordingKeys() {
    this._chords = null;
    this.recordDisposables.clear();
  }
  setInputValue(value) {
    this._inputValue = value;
    this.inputBox.value = this._inputValue;
  }
  _onKeyDown(keyboardEvent) {
    keyboardEvent.preventDefault();
    keyboardEvent.stopPropagation();
    const options = this.options;
    if (!options.recordEnter && keyboardEvent.equals(3)) {
      this._onEnter.fire();
      return;
    }
    if (keyboardEvent.equals(9)) {
      this._onEscape.fire();
      return;
    }
    this.printKeybinding(keyboardEvent);
  }
  printKeybinding(keyboardEvent) {
    const keybinding = this.keybindingService.resolveKeyboardEvent(keyboardEvent);
    const info = `code: ${keyboardEvent.browserEvent.code}, keyCode: ${keyboardEvent.browserEvent.keyCode}, key: ${keyboardEvent.browserEvent.key} => UI: ${keybinding.getAriaLabel()}, user settings: ${keybinding.getUserSettingsLabel()}, dispatch: ${keybinding.getDispatchChords()[0]}`;
    const options = this.options;
    if (!this._chords) {
      this._chords = [];
    }
    const hasIncompleteChord = this._chords.length > 0 && this._chords[this._chords.length - 1].getDispatchChords()[0] === null;
    if (hasIncompleteChord) {
      this._chords[this._chords.length - 1] = keybinding;
    } else {
      if (this._chords.length === 2) {
        this._chords = [];
      }
      this._chords.push(keybinding);
    }
    const value = this._chords.map((keybinding2) => keybinding2.getUserSettingsLabel() || "").join(" ");
    this.setInputValue(options.quoteRecordedKeys ? `"${value}"` : value);
    this.inputBox.inputElement.title = info;
    this._onKeybinding.fire(this._chords);
  }
};
KeybindingsSearchWidget = __decorate([
  __param(2, IContextViewService),
  __param(3, IInstantiationService),
  __param(4, IContextKeyService),
  __param(5, IKeybindingService)
], KeybindingsSearchWidget);
let DefineKeybindingWidget = (_d = class extends Widget {
  constructor(parent, instantiationService) {
    super();
    this.instantiationService = instantiationService;
    this._chords = null;
    this._isVisible = false;
    this._onHide = this._register(new Emitter());
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this._onShowExistingKeybindings = this._register(new Emitter());
    this.onShowExistingKeybidings = this._onShowExistingKeybindings.event;
    this._domNode = createFastDomNode(document.createElement("div"));
    this._domNode.setDisplay("none");
    this._domNode.setClassName("defineKeybindingWidget");
    this._domNode.setWidth(_d.WIDTH);
    this._domNode.setHeight(_d.HEIGHT);
    const message = localize(
      "defineKeybinding.initial",
      "Press desired key combination and then press ENTER."
    );
    append(this._domNode.domNode, $$6(".message", void 0, message));
    this._domNode.domNode.style.backgroundColor = asCssVariable(editorWidgetBackground);
    this._domNode.domNode.style.color = asCssVariable(editorWidgetForeground);
    this._domNode.domNode.style.boxShadow = `0 2px 8px ${asCssVariable(widgetShadow)}`;
    this._keybindingInputWidget = this._register(this.instantiationService.createInstance(KeybindingsSearchWidget, this._domNode.domNode, { ariaLabel: message, history: [], inputBoxStyles: defaultInputBoxStyles }));
    this._keybindingInputWidget.startRecordingKeys();
    this._register(this._keybindingInputWidget.onKeybinding((keybinding) => this.onKeybinding(keybinding)));
    this._register(this._keybindingInputWidget.onEnter(() => this.hide()));
    this._register(this._keybindingInputWidget.onEscape(() => this.clearOrHide()));
    this._register(this._keybindingInputWidget.onBlur(() => this.onCancel()));
    this._outputNode = append(this._domNode.domNode, $$6(".output"));
    this._showExistingKeybindingsNode = append(this._domNode.domNode, $$6(".existing"));
    if (parent) {
      append(parent, this._domNode.domNode);
    }
  }
  get domNode() {
    return this._domNode.domNode;
  }
  define() {
    this._keybindingInputWidget.clear();
    return Promises.withAsyncBody(async (c) => {
      if (!this._isVisible) {
        this._isVisible = true;
        this._domNode.setDisplay("block");
        this._chords = null;
        this._keybindingInputWidget.setInputValue("");
        clearNode(this._outputNode);
        clearNode(this._showExistingKeybindingsNode);
        await timeout(0);
        this._keybindingInputWidget.focus();
      }
      const disposable = this._onHide.event(() => {
        c(this.getUserSettingsLabel());
        disposable.dispose();
      });
    });
  }
  layout(layout) {
    const top = Math.round((layout.height - _d.HEIGHT) / 2);
    this._domNode.setTop(top);
    const left = Math.round((layout.width - _d.WIDTH) / 2);
    this._domNode.setLeft(left);
  }
  printExisting(numberOfExisting) {
    if (numberOfExisting > 0) {
      const existingElement = $$6("span.existingText");
      const text = numberOfExisting === 1 ? localize(
        "defineKeybinding.oneExists",
        "1 existing command has this keybinding",
        numberOfExisting
      ) : localize(
        "defineKeybinding.existing",
        "{0} existing commands have this keybinding",
        numberOfExisting
      );
      append(existingElement, document.createTextNode(text));
      alert(text);
      this._showExistingKeybindingsNode.appendChild(existingElement);
      existingElement.onmousedown = (e) => {
        e.preventDefault();
      };
      existingElement.onmouseup = (e) => {
        e.preventDefault();
      };
      existingElement.onclick = () => {
        this._onShowExistingKeybindings.fire(this.getUserSettingsLabel());
      };
    }
  }
  onKeybinding(keybinding) {
    var _a2;
    this._chords = keybinding;
    clearNode(this._outputNode);
    clearNode(this._showExistingKeybindingsNode);
    const firstLabel = new KeybindingLabel(this._outputNode, OS, defaultKeybindingLabelStyles);
    firstLabel.set(withNullAsUndefined((_a2 = this._chords) == null ? void 0 : _a2[0]));
    if (this._chords) {
      for (let i = 1; i < this._chords.length; i++) {
        this._outputNode.appendChild(document.createTextNode(localize("defineKeybinding.chordsTo", "chord to")));
        const chordLabel = new KeybindingLabel(this._outputNode, OS, defaultKeybindingLabelStyles);
        chordLabel.set(this._chords[i]);
      }
    }
    const label = this.getUserSettingsLabel();
    if (label) {
      this._onDidChange.fire(label);
    }
  }
  getUserSettingsLabel() {
    let label = null;
    if (this._chords) {
      label = this._chords.map((keybinding) => keybinding.getUserSettingsLabel()).join(" ");
    }
    return label;
  }
  onCancel() {
    this._chords = null;
    this.hide();
  }
  clearOrHide() {
    if (this._chords === null) {
      this.hide();
    } else {
      this._chords = null;
      this._keybindingInputWidget.clear();
      clearNode(this._outputNode);
      clearNode(this._showExistingKeybindingsNode);
    }
  }
  hide() {
    this._domNode.setDisplay("none");
    this._isVisible = false;
    this._onHide.fire();
  }
}, _d.WIDTH = 400, _d.HEIGHT = 110, _d);
DefineKeybindingWidget = __decorate([
  __param(1, IInstantiationService)
], DefineKeybindingWidget);
_e = class extends Disposable {
  constructor(_editor, instantiationService) {
    super();
    this._editor = _editor;
    this._widget = instantiationService.createInstance(DefineKeybindingWidget, null);
    this._editor.addOverlayWidget(this);
  }
  getId() {
    return _e.ID;
  }
  getDomNode() {
    return this._widget.domNode;
  }
  getPosition() {
    return {
      preference: null
    };
  }
  dispose() {
    this._editor.removeOverlayWidget(this);
    super.dispose();
  }
  start() {
    if (this._editor.hasModel()) {
      this._editor.revealPositionInCenterIfOutsideViewport(this._editor.getPosition(), 0);
    }
    const layoutInfo = this._editor.getLayoutInfo();
    this._widget.layout(new Dimension(layoutInfo.width, layoutInfo.height));
    return this._widget.define();
  }
}, _e.ID = "editor.contrib.defineKeybindingWidget", _e;
var css$2 = ".suggest-input-container{border-radius:2px;padding:2px 6px}.suggest-input-container .monaco-editor,.suggest-input-container .monaco-editor-background,.suggest-input-container .mtk1{color:inherit}.suggest-input-container .suggest-input-placeholder{margin-top:1px;overflow:hidden;pointer-events:none;position:absolute;text-overflow:ellipsis;white-space:nowrap;z-index:1}.suggest-input-container .monaco-editor,.suggest-input-container .monaco-editor .lines-content{background:none}";
n(css$2, {});
let SuggestEnabledInput = class SuggestEnabledInput2 extends Widget {
  constructor(id, parent, suggestionProvider, ariaLabel, resourceHandle, options, defaultInstantiationService, modelService, contextKeyService, languageFeaturesService, configurationService) {
    super();
    this._onShouldFocusResults = new Emitter();
    this.onShouldFocusResults = this._onShouldFocusResults.event;
    this._onInputDidChange = new Emitter();
    this.onInputDidChange = this._onInputDidChange.event;
    this._onDidFocus = this._register(new Emitter());
    this.onDidFocus = this._onDidFocus.event;
    this._onDidBlur = this._register(new Emitter());
    this.onDidBlur = this._onDidBlur.event;
    this.stylingContainer = append(parent, $$6(".suggest-input-container"));
    this.element = parent;
    this.placeholderText = append(this.stylingContainer, $$6(".suggest-input-placeholder", void 0, options.placeholderText || ""));
    const editorOptions = mixin(getSimpleEditorOptions(configurationService), getSuggestEnabledInputOptions(ariaLabel));
    editorOptions.overflowWidgetsDomNode = options.overflowWidgetsDomNode;
    const scopedContextKeyService = this.getScopedContextKeyService(contextKeyService);
    const instantiationService = scopedContextKeyService ? defaultInstantiationService.createChild(new ServiceCollection([IContextKeyService, scopedContextKeyService])) : defaultInstantiationService;
    this.inputWidget = this._register(instantiationService.createInstance(CodeEditorWidget, this.stylingContainer, editorOptions, {
      contributions: EditorExtensionsRegistry.getSomeEditorContributions([
        SuggestController.ID,
        SnippetController2.ID,
        ContextMenuController.ID,
        MenuPreventer.ID,
        SelectionClipboardContributionID
      ]),
      isSimpleWidget: true
    }));
    this._register(configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("editor.accessibilitySupport") || e.affectsConfiguration("editor.cursorBlinking")) {
        const accessibilitySupport = configurationService.getValue("editor.accessibilitySupport");
        const cursorBlinking = configurationService.getValue("editor.cursorBlinking");
        this.inputWidget.updateOptions({
          accessibilitySupport,
          cursorBlinking
        });
      }
    }));
    this._register(this.inputWidget.onDidFocusEditorText(() => this._onDidFocus.fire()));
    this._register(this.inputWidget.onDidBlurEditorText(() => this._onDidBlur.fire()));
    const scopeHandle = URI.parse(resourceHandle);
    this.inputModel = modelService.createModel("", null, scopeHandle, true);
    this._register(this.inputModel);
    this.inputWidget.setModel(this.inputModel);
    this._register(this.inputWidget.onDidPaste(() => this.setValue(this.getValue())));
    this._register(this.inputWidget.onDidFocusEditorText(() => {
      if (options.focusContextKey) {
        options.focusContextKey.set(true);
      }
      this.stylingContainer.classList.add("synthetic-focus");
    }));
    this._register(this.inputWidget.onDidBlurEditorText(() => {
      if (options.focusContextKey) {
        options.focusContextKey.set(false);
      }
      this.stylingContainer.classList.remove("synthetic-focus");
    }));
    const onKeyDownMonaco = Event.chain(this.inputWidget.onKeyDown);
    this._register(onKeyDownMonaco.filter((e) => e.keyCode === 3).on((e) => {
      e.preventDefault();
    }, this));
    this._register(onKeyDownMonaco.filter((e) => e.keyCode === 18 && (isMacintosh ? e.metaKey : e.ctrlKey)).on(() => this._onShouldFocusResults.fire(), this));
    let preexistingContent = this.getValue();
    const inputWidgetModel = this.inputWidget.getModel();
    if (inputWidgetModel) {
      this._register(inputWidgetModel.onDidChangeContent(() => {
        const content = this.getValue();
        this.placeholderText.style.visibility = content ? "hidden" : "visible";
        if (preexistingContent.trim() === content.trim()) {
          return;
        }
        this._onInputDidChange.fire(void 0);
        preexistingContent = content;
      }));
    }
    const validatedSuggestProvider = {
      provideResults: suggestionProvider.provideResults,
      sortKey: suggestionProvider.sortKey || ((a) => a),
      triggerCharacters: suggestionProvider.triggerCharacters || [],
      wordDefinition: suggestionProvider.wordDefinition ? ensureValidWordDefinition(suggestionProvider.wordDefinition) : void 0,
      alwaysShowSuggestions: !!suggestionProvider.alwaysShowSuggestions
    };
    this.setValue(options.value || "");
    this._register(languageFeaturesService.completionProvider.register({ scheme: scopeHandle.scheme, pattern: "**/" + scopeHandle.path, hasAccessToAllModels: true }, {
      _debugDisplayName: `suggestEnabledInput/${id}`,
      triggerCharacters: validatedSuggestProvider.triggerCharacters,
      provideCompletionItems: (model, position, _context) => {
        var _a2;
        const query = model.getValue();
        const zeroIndexedColumn = position.column - 1;
        let alreadyTypedCount = 0, zeroIndexedWordStart = 0;
        if (validatedSuggestProvider.wordDefinition) {
          const wordAtText = getWordAtText(position.column, validatedSuggestProvider.wordDefinition, query, 0);
          alreadyTypedCount = (wordAtText == null ? void 0 : wordAtText.word.length) ?? 0;
          zeroIndexedWordStart = wordAtText ? wordAtText.startColumn - 1 : 0;
        } else {
          zeroIndexedWordStart = query.lastIndexOf(" ", zeroIndexedColumn - 1) + 1;
          alreadyTypedCount = zeroIndexedColumn - zeroIndexedWordStart;
        }
        if (!validatedSuggestProvider.alwaysShowSuggestions && alreadyTypedCount > 0 && ((_a2 = validatedSuggestProvider.triggerCharacters) == null ? void 0 : _a2.indexOf(query[zeroIndexedWordStart])) === -1) {
          return { suggestions: [] };
        }
        return {
          suggestions: suggestionProvider.provideResults(query).map((result) => {
            let label;
            let rest;
            if (typeof result === "string") {
              label = result;
            } else {
              label = result.label;
              rest = result;
            }
            return {
              label,
              insertText: label,
              range: Range.fromPositions(position.delta(0, -alreadyTypedCount), position),
              sortText: validatedSuggestProvider.sortKey(label),
              kind: 17,
              ...rest
            };
          })
        };
      }
    }));
    this.style(options.styleOverrides || {});
  }
  getScopedContextKeyService(_contextKeyService) {
    return void 0;
  }
  updateAriaLabel(label) {
    this.inputWidget.updateOptions({ ariaLabel: label });
  }
  setValue(val) {
    val = val.replace(/\s/g, " ");
    const fullRange = this.inputModel.getFullModelRange();
    this.inputWidget.executeEdits("suggestEnabledInput.setValue", [EditOperation.replace(fullRange, val)]);
    this.inputWidget.setScrollTop(0);
    this.inputWidget.setPosition(new Position(1, val.length + 1));
  }
  getValue() {
    return this.inputWidget.getValue();
  }
  style(styleOverrides) {
    this.stylingContainer.style.backgroundColor = asCssVariable(styleOverrides.inputBackground ?? inputBackground);
    this.stylingContainer.style.color = asCssVariable(styleOverrides.inputForeground ?? inputForeground);
    this.placeholderText.style.color = asCssVariable(styleOverrides.inputPlaceholderForeground ?? inputPlaceholderForeground);
    this.stylingContainer.style.borderWidth = "1px";
    this.stylingContainer.style.borderStyle = "solid";
    this.stylingContainer.style.borderColor = asCssVariableWithDefault(styleOverrides.inputBorder ?? inputBorder, "transparent");
    const cursor = this.stylingContainer.getElementsByClassName("cursor")[0];
    if (cursor) {
      cursor.style.backgroundColor = asCssVariable(styleOverrides.inputForeground ?? inputForeground);
    }
  }
  focus(selectAll) {
    this.inputWidget.focus();
    if (selectAll && this.inputWidget.getValue()) {
      this.selectAll();
    }
  }
  onHide() {
    this.inputWidget.onHide();
  }
  layout(dimension) {
    this.inputWidget.layout(dimension);
    this.placeholderText.style.width = `${dimension.width - 2}px`;
  }
  selectAll() {
    this.inputWidget.setSelection(new Range(1, 1, 1, this.getValue().length + 1));
  }
};
SuggestEnabledInput = __decorate([
  __param(6, IInstantiationService),
  __param(7, IModelService),
  __param(8, IContextKeyService),
  __param(9, ILanguageFeaturesService),
  __param(10, IConfigurationService)
], SuggestEnabledInput);
registerThemingParticipant((theme, collector) => {
  const selectionBackgroundColor = theme.getColor(selectionBackground);
  if (selectionBackgroundColor) {
    const inputBackgroundColor = theme.getColor(inputBackground);
    if (inputBackgroundColor) {
      collector.addRule(`.suggest-input-container .monaco-editor .selected-text { background-color: ${inputBackgroundColor.transparent(0.4)}; }`);
    }
    const inputForegroundColor = theme.getColor(inputForeground);
    if (inputForegroundColor) {
      collector.addRule(`.suggest-input-container .monaco-editor .view-line span.inline-selected-text { color: ${inputForegroundColor}; }`);
    }
    const backgroundColor = theme.getColor(inputBackground);
    if (backgroundColor) {
      collector.addRule(`.suggest-input-container .monaco-editor-background { background-color: ${backgroundColor}; } `);
    }
    collector.addRule(`.suggest-input-container .monaco-editor .focused .selected-text { background-color: ${selectionBackgroundColor}; }`);
  } else {
    collector.addRule(`.suggest-input-container .monaco-editor .focused .selected-text { background-color: ${theme.getColor(editorSelectionBackground)}; }`);
  }
});
function getSuggestEnabledInputOptions(ariaLabel) {
  return {
    fontSize: 13,
    lineHeight: 20,
    wordWrap: "off",
    scrollbar: { vertical: "hidden" },
    roundedSelection: false,
    guides: {
      indentation: false
    },
    cursorWidth: 1,
    fontFamily: DEFAULT_FONT_FAMILY,
    ariaLabel: ariaLabel || "",
    snippetSuggestions: "none",
    suggest: { filterGraceful: false, showIcons: false },
    autoClosingBrackets: "never"
  };
}
const settingsHeaderForeground = registerColor("settings.headerForeground", { light: "#444444", dark: "#e7e7e7", hcDark: "#ffffff", hcLight: "#292929" }, localize(
  "headerForeground",
  "The foreground color for a section header or active title."
));
const settingsHeaderHoverForeground = registerColor("settings.settingsHeaderHoverForeground", { light: transparent(settingsHeaderForeground, 0.7), dark: transparent(settingsHeaderForeground, 0.7), hcDark: transparent(settingsHeaderForeground, 0.7), hcLight: transparent(settingsHeaderForeground, 0.7) }, localize(
  "settingsHeaderHoverForeground",
  "The foreground color for a section header or hovered title."
));
registerColor("settings.modifiedItemIndicator", {
  light: new Color(new RGBA(102, 175, 224)),
  dark: new Color(new RGBA(12, 125, 157)),
  hcDark: new Color(new RGBA(0, 73, 122)),
  hcLight: new Color(new RGBA(102, 175, 224))
}, localize("modifiedItemForeground", "The color of the modified setting indicator."));
const settingsHeaderBorder = registerColor("settings.headerBorder", { dark: PANEL_BORDER, light: PANEL_BORDER, hcDark: PANEL_BORDER, hcLight: PANEL_BORDER }, localize("settingsHeaderBorder", "The color of the header container border."));
const settingsSashBorder = registerColor("settings.sashBorder", { dark: PANEL_BORDER, light: PANEL_BORDER, hcDark: PANEL_BORDER, hcLight: PANEL_BORDER }, localize(
  "settingsSashBorder",
  "The color of the Settings editor splitview sash border."
));
const settingsSelectBackground = registerColor(`settings.dropdownBackground`, { dark: selectBackground, light: selectBackground, hcDark: selectBackground, hcLight: selectBackground }, localize("settingsDropdownBackground", "Settings editor dropdown background."));
const settingsSelectForeground = registerColor("settings.dropdownForeground", { dark: selectForeground, light: selectForeground, hcDark: selectForeground, hcLight: selectForeground }, localize("settingsDropdownForeground", "Settings editor dropdown foreground."));
const settingsSelectBorder = registerColor("settings.dropdownBorder", { dark: selectBorder, light: selectBorder, hcDark: selectBorder, hcLight: selectBorder }, localize("settingsDropdownBorder", "Settings editor dropdown border."));
const settingsSelectListBorder = registerColor("settings.dropdownListBorder", { dark: editorWidgetBorder, light: editorWidgetBorder, hcDark: editorWidgetBorder, hcLight: editorWidgetBorder }, localize(
  "settingsDropdownListBorder",
  "Settings editor dropdown list border. This surrounds the options and separates the options from the description."
));
registerColor("settings.checkboxBackground", { dark: checkboxBackground, light: checkboxBackground, hcDark: checkboxBackground, hcLight: checkboxBackground }, localize("settingsCheckboxBackground", "Settings editor checkbox background."));
registerColor("settings.checkboxForeground", { dark: checkboxForeground, light: checkboxForeground, hcDark: checkboxForeground, hcLight: checkboxForeground }, localize("settingsCheckboxForeground", "Settings editor checkbox foreground."));
registerColor("settings.checkboxBorder", { dark: checkboxBorder, light: checkboxBorder, hcDark: checkboxBorder, hcLight: checkboxBorder }, localize("settingsCheckboxBorder", "Settings editor checkbox border."));
const settingsTextInputBackground = registerColor("settings.textInputBackground", { dark: inputBackground, light: inputBackground, hcDark: inputBackground, hcLight: inputBackground }, localize("textInputBoxBackground", "Settings editor text input box background."));
const settingsTextInputForeground = registerColor("settings.textInputForeground", { dark: inputForeground, light: inputForeground, hcDark: inputForeground, hcLight: inputForeground }, localize("textInputBoxForeground", "Settings editor text input box foreground."));
const settingsTextInputBorder = registerColor("settings.textInputBorder", { dark: inputBorder, light: inputBorder, hcDark: inputBorder, hcLight: inputBorder }, localize("textInputBoxBorder", "Settings editor text input box border."));
const settingsNumberInputBackground = registerColor("settings.numberInputBackground", { dark: inputBackground, light: inputBackground, hcDark: inputBackground, hcLight: inputBackground }, localize("numberInputBoxBackground", "Settings editor number input box background."));
const settingsNumberInputForeground = registerColor("settings.numberInputForeground", { dark: inputForeground, light: inputForeground, hcDark: inputForeground, hcLight: inputForeground }, localize("numberInputBoxForeground", "Settings editor number input box foreground."));
const settingsNumberInputBorder = registerColor("settings.numberInputBorder", { dark: inputBorder, light: inputBorder, hcDark: inputBorder, hcLight: inputBorder }, localize("numberInputBoxBorder", "Settings editor number input box border."));
registerColor("settings.focusedRowBackground", {
  dark: transparent(listHoverBackground, 0.6),
  light: transparent(listHoverBackground, 0.6),
  hcDark: null,
  hcLight: null
}, localize(
  "focusedRowBackground",
  "The background color of a settings row when focused."
));
registerColor("settings.rowHoverBackground", {
  dark: transparent(listHoverBackground, 0.3),
  light: transparent(listHoverBackground, 0.3),
  hcDark: null,
  hcLight: null
}, localize(
  "settings.rowHoverBackground",
  "The background color of a settings row when hovered."
));
registerColor("settings.focusedRowBorder", {
  dark: focusBorder,
  light: focusBorder,
  hcDark: focusBorder,
  hcLight: focusBorder
}, localize(
  "settings.focusedRowBorder",
  "The color of the row's top and bottom border when the row is focused."
));
const $$5 = $$6;
let KeybindingsEditor = (_f = class extends EditorPane {
  constructor(telemetryService, themeService, keybindingsService, contextMenuService, keybindingEditingService, contextKeyService, notificationService, clipboardService, instantiationService, editorService, storageService, configurationService) {
    super(_f.ID, telemetryService, themeService, storageService);
    this.keybindingsService = keybindingsService;
    this.contextMenuService = contextMenuService;
    this.keybindingEditingService = keybindingEditingService;
    this.contextKeyService = contextKeyService;
    this.notificationService = notificationService;
    this.clipboardService = clipboardService;
    this.instantiationService = instantiationService;
    this.editorService = editorService;
    this.configurationService = configurationService;
    this._onDefineWhenExpression = this._register(new Emitter());
    this.onDefineWhenExpression = this._onDefineWhenExpression.event;
    this._onRejectWhenExpression = this._register(new Emitter());
    this.onRejectWhenExpression = this._onRejectWhenExpression.event;
    this._onAcceptWhenExpression = this._register(new Emitter());
    this.onAcceptWhenExpression = this._onAcceptWhenExpression.event;
    this._onLayout = this._register(new Emitter());
    this.onLayout = this._onLayout.event;
    this.keybindingsEditorModel = null;
    this.unAssignedKeybindingItemToRevealAndFocus = null;
    this.tableEntries = [];
    this.dimension = null;
    this.latestEmptyFilters = [];
    this.delayedFiltering = new Delayer(300);
    this._register(keybindingsService.onDidUpdateKeybindings(() => this.render(!!this.keybindingFocusContextKey.get())));
    this.keybindingsEditorContextKey = CONTEXT_KEYBINDINGS_EDITOR.bindTo(this.contextKeyService);
    this.searchFocusContextKey = CONTEXT_KEYBINDINGS_SEARCH_FOCUS.bindTo(this.contextKeyService);
    this.keybindingFocusContextKey = CONTEXT_KEYBINDING_FOCUS.bindTo(this.contextKeyService);
    this.searchHistoryDelayer = new Delayer(500);
    this.recordKeysAction = new Action(KEYBINDINGS_EDITOR_COMMAND_RECORD_SEARCH_KEYS, localize("recordKeysLabel", "Record Keys"), ThemeIcon.asClassName(keybindingsRecordKeysIcon));
    this.recordKeysAction.checked = false;
    this.sortByPrecedenceAction = new Action(KEYBINDINGS_EDITOR_COMMAND_SORTBY_PRECEDENCE, localize("sortByPrecedeneLabel", "Sort by Precedence (Highest first)"), ThemeIcon.asClassName(keybindingsSortIcon));
    this.sortByPrecedenceAction.checked = false;
    this.overflowWidgetsDomNode = $$5(".keybindings-overflow-widgets-container.monaco-editor");
  }
  create(parent) {
    super.create(parent);
    this._register(registerNavigableContainer({
      focusNotifiers: [this],
      focusNextWidget: () => {
        if (this.searchWidget.hasFocus()) {
          this.focusKeybindings();
        }
      },
      focusPreviousWidget: () => {
        if (!this.searchWidget.hasFocus()) {
          this.focusSearch();
        }
      }
    }));
  }
  createEditor(parent) {
    const keybindingsEditorElement = append(parent, $$5("div", { class: "keybindings-editor" }));
    this.createAriaLabelElement(keybindingsEditorElement);
    this.createOverlayContainer(keybindingsEditorElement);
    this.createHeader(keybindingsEditorElement);
    this.createBody(keybindingsEditorElement);
  }
  setInput(input, options, context, token) {
    this.keybindingsEditorContextKey.set(true);
    return super.setInput(input, options, context, token).then(() => this.render(!!(options && options.preserveFocus)));
  }
  clearInput() {
    super.clearInput();
    this.keybindingsEditorContextKey.reset();
    this.keybindingFocusContextKey.reset();
  }
  layout(dimension) {
    this.dimension = dimension;
    this.layoutSearchWidget(dimension);
    this.overlayContainer.style.width = dimension.width + "px";
    this.overlayContainer.style.height = dimension.height + "px";
    this.defineKeybindingWidget.layout(this.dimension);
    this.layoutKeybindingsTable();
    this._onLayout.fire();
  }
  focus() {
    const activeKeybindingEntry = this.activeKeybindingEntry;
    if (activeKeybindingEntry) {
      this.selectEntry(activeKeybindingEntry);
    } else if (!isIOS) {
      this.searchWidget.focus();
    }
  }
  get activeKeybindingEntry() {
    const focusedElement = this.keybindingsTable.getFocusedElements()[0];
    return focusedElement && focusedElement.templateId === KEYBINDING_ENTRY_TEMPLATE_ID ? focusedElement : null;
  }
  async defineKeybinding(keybindingEntry, add) {
    this.selectEntry(keybindingEntry);
    this.showOverlayContainer();
    try {
      const key = await this.defineKeybindingWidget.define();
      if (key) {
        await this.updateKeybinding(keybindingEntry, key, keybindingEntry.keybindingItem.when, add);
      }
    } catch (error) {
      this.onKeybindingEditingError(error);
    } finally {
      this.hideOverlayContainer();
      this.selectEntry(keybindingEntry);
    }
  }
  defineWhenExpression(keybindingEntry) {
    if (keybindingEntry.keybindingItem.keybinding) {
      this.selectEntry(keybindingEntry);
      this._onDefineWhenExpression.fire(keybindingEntry);
    }
  }
  rejectWhenExpression(keybindingEntry) {
    this._onRejectWhenExpression.fire(keybindingEntry);
  }
  acceptWhenExpression(keybindingEntry) {
    this._onAcceptWhenExpression.fire(keybindingEntry);
  }
  async updateKeybinding(keybindingEntry, key, when, add) {
    const currentKey = keybindingEntry.keybindingItem.keybinding ? keybindingEntry.keybindingItem.keybinding.getUserSettingsLabel() : "";
    if (currentKey !== key || keybindingEntry.keybindingItem.when !== when) {
      if (add) {
        await this.keybindingEditingService.addKeybinding(keybindingEntry.keybindingItem.keybindingItem, key, when || void 0);
      } else {
        await this.keybindingEditingService.editKeybinding(keybindingEntry.keybindingItem.keybindingItem, key, when || void 0);
      }
      if (!keybindingEntry.keybindingItem.keybinding) {
        this.unAssignedKeybindingItemToRevealAndFocus = keybindingEntry;
      }
    }
  }
  async removeKeybinding(keybindingEntry) {
    this.selectEntry(keybindingEntry);
    if (keybindingEntry.keybindingItem.keybinding) {
      try {
        await this.keybindingEditingService.removeKeybinding(keybindingEntry.keybindingItem.keybindingItem);
        this.focus();
      } catch (error) {
        this.onKeybindingEditingError(error);
        this.selectEntry(keybindingEntry);
      }
    }
  }
  async resetKeybinding(keybindingEntry) {
    this.selectEntry(keybindingEntry);
    try {
      await this.keybindingEditingService.resetKeybinding(keybindingEntry.keybindingItem.keybindingItem);
      if (!keybindingEntry.keybindingItem.keybinding) {
        this.unAssignedKeybindingItemToRevealAndFocus = keybindingEntry;
      }
      this.selectEntry(keybindingEntry);
    } catch (error) {
      this.onKeybindingEditingError(error);
      this.selectEntry(keybindingEntry);
    }
  }
  async copyKeybinding(keybinding) {
    this.selectEntry(keybinding);
    const userFriendlyKeybinding = {
      key: keybinding.keybindingItem.keybinding ? keybinding.keybindingItem.keybinding.getUserSettingsLabel() || "" : "",
      command: keybinding.keybindingItem.command
    };
    if (keybinding.keybindingItem.when) {
      userFriendlyKeybinding.when = keybinding.keybindingItem.when;
    }
    await this.clipboardService.writeText(JSON.stringify(userFriendlyKeybinding, null, "  "));
  }
  async copyKeybindingCommand(keybinding) {
    this.selectEntry(keybinding);
    await this.clipboardService.writeText(keybinding.keybindingItem.command);
  }
  async copyKeybindingCommandTitle(keybinding) {
    this.selectEntry(keybinding);
    await this.clipboardService.writeText(keybinding.keybindingItem.commandLabel);
  }
  focusSearch() {
    this.searchWidget.focus();
  }
  search(filter) {
    this.focusSearch();
    this.searchWidget.setValue(filter);
    this.selectEntry(0);
  }
  clearSearchResults() {
    this.searchWidget.clear();
  }
  showSimilarKeybindings(keybindingEntry) {
    const value = `"${keybindingEntry.keybindingItem.keybinding.getAriaLabel()}"`;
    if (value !== this.searchWidget.getValue()) {
      this.searchWidget.setValue(value);
    }
  }
  createAriaLabelElement(parent) {
    this.ariaLabelElement = append(parent, $$6(""));
    this.ariaLabelElement.setAttribute("id", "keybindings-editor-aria-label-element");
    this.ariaLabelElement.setAttribute("aria-live", "assertive");
  }
  createOverlayContainer(parent) {
    this.overlayContainer = append(parent, $$5(".overlay-container"));
    this.overlayContainer.style.position = "absolute";
    this.overlayContainer.style.zIndex = "40";
    this.defineKeybindingWidget = this._register(this.instantiationService.createInstance(DefineKeybindingWidget, this.overlayContainer));
    this._register(this.defineKeybindingWidget.onDidChange((keybindingStr) => this.defineKeybindingWidget.printExisting(this.keybindingsEditorModel.fetch(`"${keybindingStr}"`).length)));
    this._register(this.defineKeybindingWidget.onShowExistingKeybidings((keybindingStr) => this.searchWidget.setValue(`"${keybindingStr}"`)));
    this.hideOverlayContainer();
  }
  showOverlayContainer() {
    this.overlayContainer.style.display = "block";
  }
  hideOverlayContainer() {
    this.overlayContainer.style.display = "none";
  }
  createHeader(parent) {
    this.headerContainer = append(parent, $$5(".keybindings-header"));
    const fullTextSearchPlaceholder = localize(
      "SearchKeybindings.FullTextSearchPlaceholder",
      "Type to search in keybindings"
    );
    const keybindingsSearchPlaceholder = localize(
      "SearchKeybindings.KeybindingsSearchPlaceholder",
      "Recording Keys. Press Escape to exit"
    );
    const clearInputAction = new Action(KEYBINDINGS_EDITOR_COMMAND_CLEAR_SEARCH_RESULTS, localize("clearInput", "Clear Keybindings Search Input"), ThemeIcon.asClassName(preferencesClearInputIcon), false, async () => this.clearSearchResults());
    const searchContainer = append(this.headerContainer, $$5(".search-container"));
    this.searchWidget = this._register(this.instantiationService.createInstance(KeybindingsSearchWidget, searchContainer, {
      ariaLabel: fullTextSearchPlaceholder,
      placeholder: fullTextSearchPlaceholder,
      focusKey: this.searchFocusContextKey,
      ariaLabelledBy: "keybindings-editor-aria-label-element",
      recordEnter: true,
      quoteRecordedKeys: true,
      history: this.getMemento(0, 0)["searchHistory"] || [],
      inputBoxStyles: getInputBoxStyle({
        inputBorder: settingsTextInputBorder
      })
    }));
    this._register(this.searchWidget.onDidChange((searchValue) => {
      clearInputAction.enabled = !!searchValue;
      this.delayedFiltering.trigger(() => this.filterKeybindings());
      this.updateSearchOptions();
    }));
    this._register(this.searchWidget.onEscape(() => this.recordKeysAction.checked = false));
    this.actionsContainer = append(searchContainer, $$6(".keybindings-search-actions-container"));
    const recordingBadge = this.createRecordingBadge(this.actionsContainer);
    this._register(this.sortByPrecedenceAction.onDidChange((e) => {
      if (e.checked !== void 0) {
        this.renderKeybindingsEntries(false);
      }
      this.updateSearchOptions();
    }));
    this._register(this.recordKeysAction.onDidChange((e) => {
      if (e.checked !== void 0) {
        recordingBadge.classList.toggle("disabled", !e.checked);
        if (e.checked) {
          this.searchWidget.inputBox.setPlaceHolder(keybindingsSearchPlaceholder);
          this.searchWidget.inputBox.setAriaLabel(keybindingsSearchPlaceholder);
          this.searchWidget.startRecordingKeys();
          this.searchWidget.focus();
        } else {
          this.searchWidget.inputBox.setPlaceHolder(fullTextSearchPlaceholder);
          this.searchWidget.inputBox.setAriaLabel(fullTextSearchPlaceholder);
          this.searchWidget.stopRecordingKeys();
          this.searchWidget.focus();
        }
        this.updateSearchOptions();
      }
    }));
    const actions = [this.recordKeysAction, this.sortByPrecedenceAction, clearInputAction];
    const toolBar = this._register(new ToolBar(this.actionsContainer, this.contextMenuService, {
      actionViewItemProvider: (action) => {
        var _a2;
        if (action.id === this.sortByPrecedenceAction.id || action.id === this.recordKeysAction.id) {
          return new ToggleActionViewItem(
            null,
            action,
            { keybinding: (_a2 = this.keybindingsService.lookupKeybinding(action.id)) == null ? void 0 : _a2.getLabel(), toggleStyles: defaultToggleStyles }
          );
        }
        return void 0;
      },
      getKeyBinding: (action) => this.keybindingsService.lookupKeybinding(action.id)
    }));
    toolBar.setActions(actions);
    this._register(this.keybindingsService.onDidUpdateKeybindings(() => toolBar.setActions(actions)));
  }
  updateSearchOptions() {
    const keybindingsEditorInput = this.input;
    if (keybindingsEditorInput) {
      keybindingsEditorInput.searchOptions = {
        searchValue: this.searchWidget.getValue(),
        recordKeybindings: !!this.recordKeysAction.checked,
        sortByPrecedence: !!this.sortByPrecedenceAction.checked
      };
    }
  }
  createRecordingBadge(container) {
    const recordingBadge = append(container, $$6(".recording-badge.monaco-count-badge.long.disabled"));
    recordingBadge.textContent = localize("recording", "Recording Keys");
    recordingBadge.style.backgroundColor = asCssVariable(badgeBackground);
    recordingBadge.style.color = asCssVariable(badgeForeground);
    recordingBadge.style.border = `1px solid ${asCssVariable(contrastBorder)}`;
    return recordingBadge;
  }
  layoutSearchWidget(dimension) {
    this.searchWidget.layout(dimension);
    this.headerContainer.classList.toggle("small", dimension.width < 400);
    this.searchWidget.inputBox.inputElement.style.paddingRight = `${getTotalWidth(this.actionsContainer) + 12}px`;
  }
  createBody(parent) {
    const bodyContainer = append(parent, $$5(".keybindings-body"));
    this.createTable(bodyContainer);
  }
  createTable(parent) {
    this.keybindingsTableContainer = append(parent, $$5(".keybindings-table-container"));
    this.keybindingsTable = this._register(this.instantiationService.createInstance(WorkbenchTable, "KeybindingsEditor", this.keybindingsTableContainer, new Delegate(), [
      {
        label: "",
        tooltip: "",
        weight: 0,
        minimumWidth: 40,
        maximumWidth: 40,
        templateId: ActionsColumnRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      },
      {
        label: localize("command", "Command"),
        tooltip: "",
        weight: 0.3,
        templateId: CommandColumnRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      },
      {
        label: localize("keybinding", "Keybinding"),
        tooltip: "",
        weight: 0.2,
        templateId: KeybindingColumnRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      },
      {
        label: localize("when", "When"),
        tooltip: "",
        weight: 0.35,
        templateId: WhenColumnRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      },
      {
        label: localize("source", "Source"),
        tooltip: "",
        weight: 0.15,
        templateId: SourceColumnRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      }
    ], [
      this.instantiationService.createInstance(ActionsColumnRenderer, this),
      this.instantiationService.createInstance(CommandColumnRenderer),
      this.instantiationService.createInstance(KeybindingColumnRenderer),
      this.instantiationService.createInstance(WhenColumnRenderer, this),
      this.instantiationService.createInstance(SourceColumnRenderer)
    ], {
      identityProvider: { getId: (e) => e.id },
      horizontalScrolling: false,
      accessibilityProvider: new AccessibilityProvider(this.configurationService),
      keyboardNavigationLabelProvider: { getKeyboardNavigationLabel: (e) => e.keybindingItem.commandLabel || e.keybindingItem.command },
      overrideStyles: {
        listBackground: editorBackground
      },
      multipleSelectionSupport: false,
      setRowLineHeight: false,
      openOnSingleClick: false,
      transformOptimization: false
    }));
    this._register(this.keybindingsTable.onContextMenu((e) => this.onContextMenu(e)));
    this._register(this.keybindingsTable.onDidChangeFocus((e) => this.onFocusChange()));
    this._register(this.keybindingsTable.onDidFocus(() => {
      this.keybindingsTable.getHTMLElement().classList.add("focused");
      this.onFocusChange();
    }));
    this._register(this.keybindingsTable.onDidBlur(() => {
      this.keybindingsTable.getHTMLElement().classList.remove("focused");
      this.keybindingFocusContextKey.reset();
    }));
    this._register(this.keybindingsTable.onDidOpen((e) => {
      var _a2;
      if ((_a2 = e.browserEvent) == null ? void 0 : _a2.defaultPrevented) {
        return;
      }
      const activeKeybindingEntry = this.activeKeybindingEntry;
      if (activeKeybindingEntry) {
        this.defineKeybinding(activeKeybindingEntry, false);
      }
    }));
    append(this.keybindingsTableContainer, this.overflowWidgetsDomNode);
  }
  async render(preserveFocus) {
    if (this.input) {
      const input = this.input;
      this.keybindingsEditorModel = await input.resolve();
      await this.keybindingsEditorModel.resolve(this.getActionsLabels());
      this.renderKeybindingsEntries(false, preserveFocus);
      if (input.searchOptions) {
        this.recordKeysAction.checked = input.searchOptions.recordKeybindings;
        this.sortByPrecedenceAction.checked = input.searchOptions.sortByPrecedence;
        this.searchWidget.setValue(input.searchOptions.searchValue);
      } else {
        this.updateSearchOptions();
      }
    }
  }
  getActionsLabels() {
    const actionsLabels = /* @__PURE__ */ new Map();
    for (const editorAction of EditorExtensionsRegistry.getEditorActions()) {
      actionsLabels.set(editorAction.id, editorAction.label);
    }
    for (const menuItem of MenuRegistry.getMenuItems(MenuId.CommandPalette)) {
      if (isIMenuItem(menuItem)) {
        const title = typeof menuItem.command.title === "string" ? menuItem.command.title : menuItem.command.title.value;
        const category2 = menuItem.command.category ? typeof menuItem.command.category === "string" ? menuItem.command.category : menuItem.command.category.value : void 0;
        actionsLabels.set(menuItem.command.id, category2 ? `${category2}: ${title}` : title);
      }
    }
    return actionsLabels;
  }
  filterKeybindings() {
    this.renderKeybindingsEntries(this.searchWidget.hasFocus());
    this.searchHistoryDelayer.trigger(() => {
      this.searchWidget.inputBox.addToHistory();
      this.getMemento(0, 0)["searchHistory"] = this.searchWidget.inputBox.getHistory();
      this.saveState();
    });
  }
  clearKeyboardShortcutSearchHistory() {
    this.searchWidget.inputBox.clearHistory();
    this.getMemento(0, 0)["searchHistory"] = this.searchWidget.inputBox.getHistory();
    this.saveState();
  }
  renderKeybindingsEntries(reset, preserveFocus) {
    if (this.keybindingsEditorModel) {
      const filter = this.searchWidget.getValue();
      const keybindingsEntries = this.keybindingsEditorModel.fetch(filter, this.sortByPrecedenceAction.checked);
      this.ariaLabelElement.setAttribute("aria-label", this.getAriaLabel(keybindingsEntries));
      if (keybindingsEntries.length === 0) {
        this.latestEmptyFilters.push(filter);
      }
      const currentSelectedIndex = this.keybindingsTable.getSelection()[0];
      this.tableEntries = keybindingsEntries;
      this.keybindingsTable.splice(0, this.keybindingsTable.length, this.tableEntries);
      this.layoutKeybindingsTable();
      if (reset) {
        this.keybindingsTable.setSelection([]);
        this.keybindingsTable.setFocus([]);
      } else {
        if (this.unAssignedKeybindingItemToRevealAndFocus) {
          const index = this.getNewIndexOfUnassignedKeybinding(this.unAssignedKeybindingItemToRevealAndFocus);
          if (index !== -1) {
            this.keybindingsTable.reveal(index, 0.2);
            this.selectEntry(index);
          }
          this.unAssignedKeybindingItemToRevealAndFocus = null;
        } else if (currentSelectedIndex !== -1 && currentSelectedIndex < this.tableEntries.length) {
          this.selectEntry(currentSelectedIndex, preserveFocus);
        } else if (this.editorService.activeEditorPane === this && !preserveFocus) {
          this.focus();
        }
      }
    }
  }
  getAriaLabel(keybindingsEntries) {
    if (this.sortByPrecedenceAction.checked) {
      return localize(
        "show sorted keybindings",
        "Showing {0} Keybindings in precedence order",
        keybindingsEntries.length
      );
    } else {
      return localize(
        "show keybindings",
        "Showing {0} Keybindings in alphabetical order",
        keybindingsEntries.length
      );
    }
  }
  layoutKeybindingsTable() {
    if (!this.dimension) {
      return;
    }
    const tableHeight = this.dimension.height - (getDomNodePagePosition(this.headerContainer).height + 12);
    this.keybindingsTableContainer.style.height = `${tableHeight}px`;
    this.keybindingsTable.layout(tableHeight);
  }
  getIndexOf(listEntry) {
    const index = this.tableEntries.indexOf(listEntry);
    if (index === -1) {
      for (let i = 0; i < this.tableEntries.length; i++) {
        if (this.tableEntries[i].id === listEntry.id) {
          return i;
        }
      }
    }
    return index;
  }
  getNewIndexOfUnassignedKeybinding(unassignedKeybinding) {
    for (let index = 0; index < this.tableEntries.length; index++) {
      const entry = this.tableEntries[index];
      if (entry.templateId === KEYBINDING_ENTRY_TEMPLATE_ID) {
        const keybindingItemEntry = entry;
        if (keybindingItemEntry.keybindingItem.command === unassignedKeybinding.keybindingItem.command) {
          return index;
        }
      }
    }
    return -1;
  }
  selectEntry(keybindingItemEntry, focus = true) {
    const index = typeof keybindingItemEntry === "number" ? keybindingItemEntry : this.getIndexOf(keybindingItemEntry);
    if (index !== -1 && index < this.keybindingsTable.length) {
      if (focus) {
        this.keybindingsTable.domFocus();
        this.keybindingsTable.setFocus([index]);
      }
      this.keybindingsTable.setSelection([index]);
    }
  }
  focusKeybindings() {
    this.keybindingsTable.domFocus();
    const currentFocusIndices = this.keybindingsTable.getFocus();
    this.keybindingsTable.setFocus([currentFocusIndices.length ? currentFocusIndices[0] : 0]);
  }
  selectKeybinding(keybindingItemEntry) {
    this.selectEntry(keybindingItemEntry);
  }
  recordSearchKeys() {
    this.recordKeysAction.checked = true;
  }
  toggleSortByPrecedence() {
    this.sortByPrecedenceAction.checked = !this.sortByPrecedenceAction.checked;
  }
  onContextMenu(e) {
    if (!e.element) {
      return;
    }
    if (e.element.templateId === KEYBINDING_ENTRY_TEMPLATE_ID) {
      const keybindingItemEntry = e.element;
      this.selectEntry(keybindingItemEntry);
      this.contextMenuService.showContextMenu({
        getAnchor: () => e.anchor,
        getActions: () => [
          this.createCopyAction(keybindingItemEntry),
          this.createCopyCommandAction(keybindingItemEntry),
          this.createCopyCommandTitleAction(keybindingItemEntry),
          new Separator(),
          ...keybindingItemEntry.keybindingItem.keybinding ? [this.createDefineKeybindingAction(keybindingItemEntry), this.createAddKeybindingAction(keybindingItemEntry)] : [this.createDefineKeybindingAction(keybindingItemEntry)],
          new Separator(),
          this.createRemoveAction(keybindingItemEntry),
          this.createResetAction(keybindingItemEntry),
          new Separator(),
          this.createDefineWhenExpressionAction(keybindingItemEntry),
          new Separator(),
          this.createShowConflictsAction(keybindingItemEntry)
        ]
      });
    }
  }
  onFocusChange() {
    this.keybindingFocusContextKey.reset();
    const element = this.keybindingsTable.getFocusedElements()[0];
    if (!element) {
      return;
    }
    if (element.templateId === KEYBINDING_ENTRY_TEMPLATE_ID) {
      this.keybindingFocusContextKey.set(true);
    }
  }
  createDefineKeybindingAction(keybindingItemEntry) {
    return {
      label: keybindingItemEntry.keybindingItem.keybinding ? localize("changeLabel", "Change Keybinding...") : localize("addLabel", "Add Keybinding..."),
      enabled: true,
      id: KEYBINDINGS_EDITOR_COMMAND_DEFINE,
      run: () => this.defineKeybinding(keybindingItemEntry, false)
    };
  }
  createAddKeybindingAction(keybindingItemEntry) {
    return {
      label: localize("addLabel", "Add Keybinding..."),
      enabled: true,
      id: KEYBINDINGS_EDITOR_COMMAND_ADD,
      run: () => this.defineKeybinding(keybindingItemEntry, true)
    };
  }
  createDefineWhenExpressionAction(keybindingItemEntry) {
    return {
      label: localize("editWhen", "Change When Expression"),
      enabled: !!keybindingItemEntry.keybindingItem.keybinding,
      id: KEYBINDINGS_EDITOR_COMMAND_DEFINE_WHEN,
      run: () => this.defineWhenExpression(keybindingItemEntry)
    };
  }
  createRemoveAction(keybindingItem) {
    return {
      label: localize("removeLabel", "Remove Keybinding"),
      enabled: !!keybindingItem.keybindingItem.keybinding,
      id: KEYBINDINGS_EDITOR_COMMAND_REMOVE,
      run: () => this.removeKeybinding(keybindingItem)
    };
  }
  createResetAction(keybindingItem) {
    return {
      label: localize("resetLabel", "Reset Keybinding"),
      enabled: !keybindingItem.keybindingItem.keybindingItem.isDefault,
      id: KEYBINDINGS_EDITOR_COMMAND_RESET,
      run: () => this.resetKeybinding(keybindingItem)
    };
  }
  createShowConflictsAction(keybindingItem) {
    return {
      label: localize("showSameKeybindings", "Show Same Keybindings"),
      enabled: !!keybindingItem.keybindingItem.keybinding,
      id: KEYBINDINGS_EDITOR_COMMAND_SHOW_SIMILAR,
      run: () => this.showSimilarKeybindings(keybindingItem)
    };
  }
  createCopyAction(keybindingItem) {
    return {
      label: localize("copyLabel", "Copy"),
      enabled: true,
      id: KEYBINDINGS_EDITOR_COMMAND_COPY,
      run: () => this.copyKeybinding(keybindingItem)
    };
  }
  createCopyCommandAction(keybinding) {
    return {
      label: localize("copyCommandLabel", "Copy Command ID"),
      enabled: true,
      id: KEYBINDINGS_EDITOR_COMMAND_COPY_COMMAND,
      run: () => this.copyKeybindingCommand(keybinding)
    };
  }
  createCopyCommandTitleAction(keybinding) {
    return {
      label: localize("copyCommandTitleLabel", "Copy Command Title"),
      enabled: !!keybinding.keybindingItem.commandLabel,
      id: KEYBINDINGS_EDITOR_COMMAND_COPY_COMMAND_TITLE,
      run: () => this.copyKeybindingCommandTitle(keybinding)
    };
  }
  onKeybindingEditingError(error) {
    this.notificationService.error(typeof error === "string" ? error : localize(
      "error",
      "Error '{0}' while editing the keybinding. Please open 'keybindings.json' file and check for errors.",
      `${error}`
    ));
  }
}, _f.ID = "workbench.editor.keybindings", _f);
KeybindingsEditor = __decorate([
  __param(0, ITelemetryService),
  __param(1, IThemeService),
  __param(2, IKeybindingService),
  __param(3, IContextMenuService),
  __param(4, IKeybindingEditingService),
  __param(5, IContextKeyService),
  __param(6, INotificationService),
  __param(7, IClipboardService),
  __param(8, IInstantiationService),
  __param(9, IEditorService),
  __param(10, IStorageService),
  __param(11, IConfigurationService)
], KeybindingsEditor);
class Delegate {
  constructor() {
    this.headerRowHeight = 30;
  }
  getHeight(element) {
    if (element.templateId === KEYBINDING_ENTRY_TEMPLATE_ID) {
      const commandIdMatched = element.keybindingItem.commandLabel && element.commandIdMatches;
      const commandDefaultLabelMatched = !!element.commandDefaultLabelMatches;
      const extensionIdMatched = !!element.extensionIdMatches;
      if (commandIdMatched && commandDefaultLabelMatched) {
        return 60;
      }
      if (extensionIdMatched || commandIdMatched || commandDefaultLabelMatched) {
        return 40;
      }
    }
    return 24;
  }
}
let ActionsColumnRenderer = (_g = class {
  constructor(keybindingsEditor, keybindingsService) {
    this.keybindingsEditor = keybindingsEditor;
    this.keybindingsService = keybindingsService;
    this.templateId = _g.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const element = append(container, $$5(".actions"));
    const actionBar = new ActionBar(element, { animated: false });
    return { actionBar };
  }
  renderElement(keybindingItemEntry, index, templateData, height) {
    templateData.actionBar.clear();
    const actions = [];
    if (keybindingItemEntry.keybindingItem.keybinding) {
      actions.push(this.createEditAction(keybindingItemEntry));
    } else {
      actions.push(this.createAddAction(keybindingItemEntry));
    }
    templateData.actionBar.push(actions, { icon: true });
  }
  createEditAction(keybindingItemEntry) {
    const keybinding = this.keybindingsService.lookupKeybinding(KEYBINDINGS_EDITOR_COMMAND_DEFINE);
    return {
      class: ThemeIcon.asClassName(keybindingsEditIcon),
      enabled: true,
      id: "editKeybinding",
      tooltip: keybinding ? localize(
        "editKeybindingLabelWithKey",
        "Change Keybinding {0}",
        `(${keybinding.getLabel()})`
      ) : localize("editKeybindingLabel", "Change Keybinding"),
      run: () => this.keybindingsEditor.defineKeybinding(keybindingItemEntry, false)
    };
  }
  createAddAction(keybindingItemEntry) {
    const keybinding = this.keybindingsService.lookupKeybinding(KEYBINDINGS_EDITOR_COMMAND_DEFINE);
    return {
      class: ThemeIcon.asClassName(keybindingsAddIcon),
      enabled: true,
      id: "addKeybinding",
      tooltip: keybinding ? localize(
        "addKeybindingLabelWithKey",
        "Add Keybinding {0}",
        `(${keybinding.getLabel()})`
      ) : localize("addKeybindingLabel", "Add Keybinding"),
      run: () => this.keybindingsEditor.defineKeybinding(keybindingItemEntry, false)
    };
  }
  disposeTemplate(templateData) {
    templateData.actionBar.dispose();
  }
}, _g.TEMPLATE_ID = "actions", _g);
ActionsColumnRenderer = __decorate([
  __param(1, IKeybindingService)
], ActionsColumnRenderer);
const _CommandColumnRenderer = class _CommandColumnRenderer {
  constructor() {
    this.templateId = _CommandColumnRenderer.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const commandColumn = append(container, $$5(".command"));
    const commandLabelContainer = append(commandColumn, $$5(".command-label"));
    const commandLabel = new HighlightedLabel(commandLabelContainer);
    const commandDefaultLabelContainer = append(commandColumn, $$5(".command-default-label"));
    const commandDefaultLabel = new HighlightedLabel(commandDefaultLabelContainer);
    const commandIdLabelContainer = append(commandColumn, $$5(".command-id.code"));
    const commandIdLabel = new HighlightedLabel(commandIdLabelContainer);
    return { commandColumn, commandLabelContainer, commandLabel, commandDefaultLabelContainer, commandDefaultLabel, commandIdLabelContainer, commandIdLabel };
  }
  renderElement(keybindingItemEntry, index, templateData, height) {
    const keybindingItem = keybindingItemEntry.keybindingItem;
    const commandIdMatched = !!(keybindingItem.commandLabel && keybindingItemEntry.commandIdMatches);
    const commandDefaultLabelMatched = !!keybindingItemEntry.commandDefaultLabelMatches;
    templateData.commandColumn.classList.toggle("vertical-align-column", commandIdMatched || commandDefaultLabelMatched);
    templateData.commandColumn.title = keybindingItem.commandLabel ? localize("title", "{0} ({1})", keybindingItem.commandLabel, keybindingItem.command) : keybindingItem.command;
    if (keybindingItem.commandLabel) {
      templateData.commandLabelContainer.classList.remove("hide");
      templateData.commandLabel.set(keybindingItem.commandLabel, keybindingItemEntry.commandLabelMatches);
    } else {
      templateData.commandLabelContainer.classList.add("hide");
      templateData.commandLabel.set(void 0);
    }
    if (keybindingItemEntry.commandDefaultLabelMatches) {
      templateData.commandDefaultLabelContainer.classList.remove("hide");
      templateData.commandDefaultLabel.set(keybindingItem.commandDefaultLabel, keybindingItemEntry.commandDefaultLabelMatches);
    } else {
      templateData.commandDefaultLabelContainer.classList.add("hide");
      templateData.commandDefaultLabel.set(void 0);
    }
    if (keybindingItemEntry.commandIdMatches || !keybindingItem.commandLabel) {
      templateData.commandIdLabelContainer.classList.remove("hide");
      templateData.commandIdLabel.set(keybindingItem.command, keybindingItemEntry.commandIdMatches);
    } else {
      templateData.commandIdLabelContainer.classList.add("hide");
      templateData.commandIdLabel.set(void 0);
    }
  }
  disposeTemplate(templateData) {
  }
};
_CommandColumnRenderer.TEMPLATE_ID = "commands";
let CommandColumnRenderer = _CommandColumnRenderer;
const _KeybindingColumnRenderer = class _KeybindingColumnRenderer {
  constructor() {
    this.templateId = _KeybindingColumnRenderer.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const element = append(container, $$5(".keybinding"));
    const keybindingLabel = new KeybindingLabel(
      append(element, $$5("div.keybinding-label")),
      OS,
      defaultKeybindingLabelStyles
    );
    return { keybindingLabel };
  }
  renderElement(keybindingItemEntry, index, templateData, height) {
    if (keybindingItemEntry.keybindingItem.keybinding) {
      templateData.keybindingLabel.set(keybindingItemEntry.keybindingItem.keybinding, keybindingItemEntry.keybindingMatches);
    } else {
      templateData.keybindingLabel.set(void 0, void 0);
    }
  }
  disposeTemplate(templateData) {
  }
};
_KeybindingColumnRenderer.TEMPLATE_ID = "keybindings";
let KeybindingColumnRenderer = _KeybindingColumnRenderer;
function onClick(element, callback) {
  const disposables = new DisposableStore();
  disposables.add(addDisposableListener(element, EventType.CLICK, finalHandler(callback)));
  disposables.add(addDisposableListener(element, EventType.KEY_UP, (e) => {
    const keyboardEvent = new StandardKeyboardEvent(e);
    if (keyboardEvent.equals(10) || keyboardEvent.equals(3)) {
      e.preventDefault();
      e.stopPropagation();
      callback();
    }
  }));
  return disposables;
}
let SourceColumnRenderer = (_h = class {
  constructor(extensionsWorkbenchService) {
    this.extensionsWorkbenchService = extensionsWorkbenchService;
    this.templateId = _h.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const sourceColumn = append(container, $$5(".source"));
    const sourceLabel = new HighlightedLabel(append(sourceColumn, $$5(".source-label")));
    const extensionContainer = append(sourceColumn, $$5(".extension-container"));
    const extensionLabel = append(extensionContainer, $$5("a.extension-label", { tabindex: 0 }));
    const extensionId = new HighlightedLabel(append(extensionContainer, $$5(".extension-id-container.code")));
    return { sourceColumn, sourceLabel, extensionLabel, extensionContainer, extensionId, disposables: new DisposableStore() };
  }
  renderElement(keybindingItemEntry, index, templateData, height) {
    if (isString(keybindingItemEntry.keybindingItem.source)) {
      templateData.extensionContainer.classList.add("hide");
      templateData.sourceLabel.element.classList.remove("hide");
      templateData.sourceColumn.title = "";
      templateData.sourceLabel.set(keybindingItemEntry.keybindingItem.source || "-", keybindingItemEntry.sourceMatches);
    } else {
      templateData.extensionContainer.classList.remove("hide");
      templateData.sourceLabel.element.classList.add("hide");
      const extension = keybindingItemEntry.keybindingItem.source;
      const extensionLabel = extension.displayName ?? extension.identifier.value;
      templateData.sourceColumn.title = localize("extension label", "Extension ({0})", extensionLabel);
      templateData.extensionLabel.textContent = extensionLabel;
      templateData.disposables.add(onClick(templateData.extensionLabel, () => {
        this.extensionsWorkbenchService.open(extension.identifier.value);
      }));
      if (keybindingItemEntry.extensionIdMatches) {
        templateData.extensionId.element.classList.remove("hide");
        templateData.extensionId.set(extension.identifier.value, keybindingItemEntry.extensionIdMatches);
      } else {
        templateData.extensionId.element.classList.add("hide");
        templateData.extensionId.set(void 0);
      }
    }
  }
  disposeTemplate(templateData) {
    templateData.disposables.dispose();
  }
}, _h.TEMPLATE_ID = "source", _h);
SourceColumnRenderer = __decorate([
  __param(0, IExtensionsWorkbenchService)
], SourceColumnRenderer);
let WhenInputWidget = class WhenInputWidget2 extends Disposable {
  constructor(parent, keybindingsEditor, instantiationService, contextKeyService) {
    super();
    this._onDidAccept = this._register(new Emitter());
    this.onDidAccept = this._onDidAccept.event;
    this._onDidReject = this._register(new Emitter());
    this.onDidReject = this._onDidReject.event;
    const focusContextKey = CONTEXT_WHEN_FOCUS.bindTo(contextKeyService);
    this.input = this._register(instantiationService.createInstance(SuggestEnabledInput, "keyboardshortcutseditor#wheninput", parent, {
      provideResults: () => {
        const result = [];
        for (const contextKey of RawContextKey.all()) {
          result.push({ label: contextKey.key, documentation: contextKey.description, detail: contextKey.type, kind: 14 });
        }
        return result;
      },
      triggerCharacters: ["!", " "],
      wordDefinition: /[a-zA-Z.]+/,
      alwaysShowSuggestions: true
    }, "", `keyboardshortcutseditor#wheninput`, { focusContextKey, overflowWidgetsDomNode: keybindingsEditor.overflowWidgetsDomNode }));
    this._register(addDisposableListener(this.input.element, EventType.DBLCLICK, (e) => EventHelper.stop(e)));
    this._register(toDisposable(() => focusContextKey.reset()));
    this._register(keybindingsEditor.onAcceptWhenExpression(() => this._onDidAccept.fire(this.input.getValue())));
    this._register(Event.any(keybindingsEditor.onRejectWhenExpression, this.input.onDidBlur)(() => this._onDidReject.fire()));
  }
  layout(dimension) {
    this.input.layout(dimension);
  }
  show(value) {
    this.input.setValue(value);
    this.input.focus(true);
  }
};
WhenInputWidget = __decorate([
  __param(2, IInstantiationService),
  __param(3, IContextKeyService)
], WhenInputWidget);
let WhenColumnRenderer = (_i = class {
  constructor(keybindingsEditor, instantiationService) {
    this.keybindingsEditor = keybindingsEditor;
    this.instantiationService = instantiationService;
    this.templateId = _i.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const element = append(container, $$5(".when"));
    const whenLabelContainer = append(element, $$5("div.when-label"));
    const whenLabel = new HighlightedLabel(whenLabelContainer);
    const whenInputContainer = append(element, $$5("div.when-input-container"));
    return {
      element,
      whenLabelContainer,
      whenLabel,
      whenInputContainer,
      disposables: new DisposableStore()
    };
  }
  renderElement(keybindingItemEntry, index, templateData, height) {
    templateData.disposables.clear();
    const whenInputDisposables = templateData.disposables.add(new DisposableStore());
    templateData.disposables.add(this.keybindingsEditor.onDefineWhenExpression((e) => {
      if (keybindingItemEntry === e) {
        templateData.element.classList.add("input-mode");
        const inputWidget = whenInputDisposables.add(this.instantiationService.createInstance(WhenInputWidget, templateData.whenInputContainer, this.keybindingsEditor));
        inputWidget.layout(new Dimension(templateData.element.parentElement.clientWidth, 18));
        inputWidget.show(keybindingItemEntry.keybindingItem.when || "");
        const hideInputWidget = () => {
          whenInputDisposables.clear();
          templateData.element.classList.remove("input-mode");
          templateData.element.parentElement.style.paddingLeft = "10px";
          clearNode(templateData.whenInputContainer);
        };
        whenInputDisposables.add(inputWidget.onDidAccept((value) => {
          hideInputWidget();
          this.keybindingsEditor.updateKeybinding(keybindingItemEntry, keybindingItemEntry.keybindingItem.keybinding ? keybindingItemEntry.keybindingItem.keybinding.getUserSettingsLabel() || "" : "", value);
          this.keybindingsEditor.selectKeybinding(keybindingItemEntry);
        }));
        whenInputDisposables.add(inputWidget.onDidReject(() => {
          hideInputWidget();
          this.keybindingsEditor.selectKeybinding(keybindingItemEntry);
        }));
        templateData.element.parentElement.style.paddingLeft = "0px";
      }
    }));
    templateData.whenLabelContainer.classList.toggle("code", !!keybindingItemEntry.keybindingItem.when);
    templateData.whenLabelContainer.classList.toggle("empty", !keybindingItemEntry.keybindingItem.when);
    if (keybindingItemEntry.keybindingItem.when) {
      templateData.whenLabel.set(keybindingItemEntry.keybindingItem.when, keybindingItemEntry.whenMatches);
      templateData.whenLabel.element.title = keybindingItemEntry.keybindingItem.when;
      templateData.element.title = keybindingItemEntry.keybindingItem.when;
    } else {
      templateData.whenLabel.set("-");
      templateData.whenLabel.element.title = "";
      templateData.element.title = "";
    }
  }
  disposeTemplate(templateData) {
    templateData.disposables.dispose();
  }
}, _i.TEMPLATE_ID = "when", _i);
WhenColumnRenderer = __decorate([
  __param(1, IInstantiationService)
], WhenColumnRenderer);
class AccessibilityProvider {
  constructor(configurationService) {
    this.configurationService = configurationService;
  }
  getWidgetAriaLabel() {
    return localize("keybindingsLabel", "Keybindings");
  }
  getAriaLabel({ keybindingItem }) {
    var _a2;
    const ariaLabel = [
      keybindingItem.commandLabel ? keybindingItem.commandLabel : keybindingItem.command,
      ((_a2 = keybindingItem.keybinding) == null ? void 0 : _a2.getAriaLabel()) || localize("noKeybinding", "No keybinding assigned"),
      keybindingItem.when ? keybindingItem.when : localize("noWhen", "No when context"),
      isString(keybindingItem.source) ? keybindingItem.source : keybindingItem.source.description ?? keybindingItem.source.identifier.value
    ];
    if (this.configurationService.getValue("accessibility.verbosity.keybindingsEditor")) {
      const kbEditorAriaLabel = localize(
        "keyboard shortcuts aria label",
        "use space or enter to change the keybinding."
      );
      ariaLabel.push(kbEditorAriaLabel);
    }
    return ariaLabel.join(", ");
  }
}
registerColor("keybindingTable.headerBackground", { dark: tableOddRowsBackgroundColor, light: tableOddRowsBackgroundColor, hcDark: tableOddRowsBackgroundColor, hcLight: tableOddRowsBackgroundColor }, "Background color for the keyboard shortcuts table header.");
registerColor("keybindingTable.rowsBackground", { light: tableOddRowsBackgroundColor, dark: tableOddRowsBackgroundColor, hcDark: tableOddRowsBackgroundColor, hcLight: tableOddRowsBackgroundColor }, "Background color for the keyboard shortcuts table alternating rows.");
registerThemingParticipant((theme, collector) => {
  const foregroundColor = theme.getColor(foreground);
  if (foregroundColor) {
    const whenForegroundColor = foregroundColor.transparent(0.8).makeOpaque(WORKBENCH_BACKGROUND(theme));
    collector.addRule(`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table .monaco-table-tr .monaco-table-td .code { color: ${whenForegroundColor}; }`);
  }
  const listActiveSelectionForegroundColor = theme.getColor(listActiveSelectionForeground);
  const listActiveSelectionBackgroundColor = theme.getColor(listActiveSelectionBackground);
  if (listActiveSelectionForegroundColor && listActiveSelectionBackgroundColor) {
    const whenForegroundColor = listActiveSelectionForegroundColor.transparent(0.8).makeOpaque(listActiveSelectionBackgroundColor);
    collector.addRule(`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row.selected .monaco-table-tr .monaco-table-td .code { color: ${whenForegroundColor}; }`);
  }
  const listInactiveSelectionForegroundColor = theme.getColor(listInactiveSelectionForeground);
  const listInactiveSelectionBackgroundColor = theme.getColor(listInactiveSelectionBackground);
  if (listInactiveSelectionForegroundColor && listInactiveSelectionBackgroundColor) {
    const whenForegroundColor = listInactiveSelectionForegroundColor.transparent(0.8).makeOpaque(listInactiveSelectionBackgroundColor);
    collector.addRule(`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table .monaco-list-row.selected .monaco-table-tr .monaco-table-td .code { color: ${whenForegroundColor}; }`);
  }
  const listFocusForegroundColor = theme.getColor(listFocusForeground);
  const listFocusBackgroundColor = theme.getColor(listFocusBackground);
  if (listFocusForegroundColor && listFocusBackgroundColor) {
    const whenForegroundColor = listFocusForegroundColor.transparent(0.8).makeOpaque(listFocusBackgroundColor);
    collector.addRule(`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row.focused .monaco-table-tr .monaco-table-td .code { color: ${whenForegroundColor}; }`);
  }
  const listHoverForegroundColor = theme.getColor(listHoverForeground);
  const listHoverBackgroundColor = theme.getColor(listHoverBackground);
  if (listHoverForegroundColor && listHoverBackgroundColor) {
    const whenForegroundColor = listHoverForegroundColor.transparent(0.8).makeOpaque(listHoverBackgroundColor);
    collector.addRule(`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row:hover:not(.focused):not(.selected) .monaco-table-tr .monaco-table-td .code { color: ${whenForegroundColor}; }`);
  }
});
let ConfigureLanguageBasedSettingsAction = (_j = class extends Action {
  constructor(id, label, modelService, languageService, quickInputService, preferencesService) {
    super(id, label);
    this.modelService = modelService;
    this.languageService = languageService;
    this.quickInputService = quickInputService;
    this.preferencesService = preferencesService;
  }
  async run() {
    const languages = this.languageService.getSortedRegisteredLanguageNames();
    const picks = languages.map(({ languageName, languageId }) => {
      const description = localize("languageDescriptionConfigured", "({0})", languageId);
      let fakeResource;
      const extensions = this.languageService.getExtensions(languageId);
      if (extensions.length) {
        fakeResource = URI.file(extensions[0]);
      } else {
        const filenames = this.languageService.getFilenames(languageId);
        if (filenames.length) {
          fakeResource = URI.file(filenames[0]);
        }
      }
      return {
        label: languageName,
        iconClasses: getIconClasses(this.modelService, this.languageService, fakeResource),
        description
      };
    });
    await this.quickInputService.pick(picks, { placeHolder: localize("pickLanguage", "Select Language") }).then((pick) => {
      if (pick) {
        const languageId = this.languageService.getLanguageIdByLanguageName(pick.label);
        if (typeof languageId === "string") {
          return this.preferencesService.openLanguageSpecificSettings(languageId);
        }
      }
      return void 0;
    });
  }
}, _j.ID = "workbench.action.configureLanguageBasedSettings", _j.LABEL = { value: localize(
  "configureLanguageBasedSettings",
  "Configure Language Specific Settings..."
), original: "Configure Language Specific Settings..." }, _j);
ConfigureLanguageBasedSettingsAction = __decorate([
  __param(2, IModelService),
  __param(3, ILanguageService),
  __param(4, IQuickInputService),
  __param(5, IPreferencesService)
], ConfigureLanguageBasedSettingsAction);
CommandsRegistry.registerCommand({
  id: "_getAllSettings",
  handler: () => {
    const configRegistry = Registry.as(Extensions.Configuration);
    const allSettings = configRegistry.getConfigurationProperties();
    return allSettings;
  }
});
CommandsRegistry.registerCommand("_getAllCommands", function(accessor) {
  var _a2, _b2;
  const keybindingService = accessor.get(IKeybindingService);
  const actions = [];
  for (const editorAction of EditorExtensionsRegistry.getEditorActions()) {
    const keybinding = keybindingService.lookupKeybinding(editorAction.id);
    actions.push({ command: editorAction.id, label: editorAction.label, precondition: (_a2 = editorAction.precondition) == null ? void 0 : _a2.serialize(), keybinding: (keybinding == null ? void 0 : keybinding.getLabel()) ?? "Not set" });
  }
  for (const menuItem of MenuRegistry.getMenuItems(MenuId.CommandPalette)) {
    if (isIMenuItem(menuItem)) {
      const title = typeof menuItem.command.title === "string" ? menuItem.command.title : menuItem.command.title.value;
      const category2 = menuItem.command.category ? typeof menuItem.command.category === "string" ? menuItem.command.category : menuItem.command.category.value : void 0;
      const label = category2 ? `${category2}: ${title}` : title;
      const keybinding = keybindingService.lookupKeybinding(menuItem.command.id);
      actions.push({ command: menuItem.command.id, label, precondition: (_b2 = menuItem.when) == null ? void 0 : _b2.serialize(), keybinding: (keybinding == null ? void 0 : keybinding.getLabel()) ?? "Not set" });
    }
  }
  return actions;
});
let UserSettingsRenderer = class UserSettingsRenderer2 extends Disposable {
  constructor(editor, preferencesModel, preferencesService, configurationService, instantiationService) {
    super();
    this.editor = editor;
    this.preferencesModel = preferencesModel;
    this.preferencesService = preferencesService;
    this.configurationService = configurationService;
    this.instantiationService = instantiationService;
    this.modelChangeDelayer = new Delayer(200);
    this.settingHighlighter = this._register(instantiationService.createInstance(SettingHighlighter, editor));
    this.editSettingActionRenderer = this._register(this.instantiationService.createInstance(EditSettingRenderer, this.editor, this.preferencesModel, this.settingHighlighter));
    this._register(this.editSettingActionRenderer.onUpdateSetting(({ key, value, source }) => this.updatePreference(key, value, source)));
    this._register(this.editor.getModel().onDidChangeContent(() => this.modelChangeDelayer.trigger(() => this.onModelChanged())));
    this.unsupportedSettingsRenderer = this._register(instantiationService.createInstance(UnsupportedSettingsRenderer, editor, preferencesModel));
  }
  render() {
    this.editSettingActionRenderer.render(this.preferencesModel.settingsGroups, this.associatedPreferencesModel);
    this.unsupportedSettingsRenderer.render();
  }
  updatePreference(key, value, source) {
    const overrideIdentifiers = source.overrideOf ? overrideIdentifiersFromKey(source.overrideOf.key) : null;
    const resource = this.preferencesModel.uri;
    this.configurationService.updateValue(key, value, { overrideIdentifiers, resource }, this.preferencesModel.configurationTarget).then(() => this.onSettingUpdated(source));
  }
  onModelChanged() {
    if (!this.editor.hasModel()) {
      return;
    }
    this.render();
  }
  onSettingUpdated(setting) {
    this.editor.focus();
    setting = this.getSetting(setting);
    if (setting) {
      this.editor.setSelection(setting.valueRange);
      this.settingHighlighter.highlight(setting, true);
    }
  }
  getSetting(setting) {
    const { key, overrideOf } = setting;
    if (overrideOf) {
      const setting2 = this.getSetting(overrideOf);
      for (const override of setting2.overrides) {
        if (override.key === key) {
          return override;
        }
      }
      return void 0;
    }
    return this.preferencesModel.getPreference(key);
  }
  focusPreference(setting) {
    const s = this.getSetting(setting);
    if (s) {
      this.settingHighlighter.highlight(s, true);
      this.editor.setPosition({ lineNumber: s.keyRange.startLineNumber, column: s.keyRange.startColumn });
    } else {
      this.settingHighlighter.clear(true);
    }
  }
  clearFocus(setting) {
    this.settingHighlighter.clear(true);
  }
  editPreference(setting) {
    const editableSetting = this.getSetting(setting);
    return !!(editableSetting && this.editSettingActionRenderer.activateOnSetting(editableSetting));
  }
};
UserSettingsRenderer = __decorate([
  __param(2, IPreferencesService),
  __param(3, IConfigurationService),
  __param(4, IInstantiationService)
], UserSettingsRenderer);
let WorkspaceSettingsRenderer = class WorkspaceSettingsRenderer2 extends UserSettingsRenderer {
  constructor(editor, preferencesModel, preferencesService, configurationService, instantiationService) {
    super(editor, preferencesModel, preferencesService, configurationService, instantiationService);
    this.workspaceConfigurationRenderer = this._register(instantiationService.createInstance(WorkspaceConfigurationRenderer, editor, preferencesModel));
  }
  render() {
    super.render();
    this.workspaceConfigurationRenderer.render();
  }
};
WorkspaceSettingsRenderer = __decorate([
  __param(2, IPreferencesService),
  __param(3, IConfigurationService),
  __param(4, IInstantiationService)
], WorkspaceSettingsRenderer);
let EditSettingRenderer = class EditSettingRenderer2 extends Disposable {
  constructor(editor, primarySettingsModel, settingHighlighter, configurationService, instantiationService, contextMenuService) {
    super();
    this.editor = editor;
    this.primarySettingsModel = primarySettingsModel;
    this.settingHighlighter = settingHighlighter;
    this.configurationService = configurationService;
    this.instantiationService = instantiationService;
    this.contextMenuService = contextMenuService;
    this.settingsGroups = [];
    this._onUpdateSetting = new Emitter();
    this.onUpdateSetting = this._onUpdateSetting.event;
    this.editPreferenceWidgetForCursorPosition = this._register(this.instantiationService.createInstance(EditPreferenceWidget, editor));
    this.editPreferenceWidgetForMouseMove = this._register(this.instantiationService.createInstance(EditPreferenceWidget, editor));
    this.toggleEditPreferencesForMouseMoveDelayer = new Delayer(75);
    this._register(this.editPreferenceWidgetForCursorPosition.onClick((e) => this.onEditSettingClicked(this.editPreferenceWidgetForCursorPosition, e)));
    this._register(this.editPreferenceWidgetForMouseMove.onClick((e) => this.onEditSettingClicked(this.editPreferenceWidgetForMouseMove, e)));
    this._register(this.editor.onDidChangeCursorPosition((positionChangeEvent) => this.onPositionChanged(positionChangeEvent)));
    this._register(this.editor.onMouseMove((mouseMoveEvent) => this.onMouseMoved(mouseMoveEvent)));
    this._register(this.editor.onDidChangeConfiguration(() => this.onConfigurationChanged()));
  }
  render(settingsGroups, associatedPreferencesModel) {
    this.editPreferenceWidgetForCursorPosition.hide();
    this.editPreferenceWidgetForMouseMove.hide();
    this.settingsGroups = settingsGroups;
    this.associatedPreferencesModel = associatedPreferencesModel;
    const settings = this.getSettings(this.editor.getPosition().lineNumber);
    if (settings.length) {
      this.showEditPreferencesWidget(this.editPreferenceWidgetForCursorPosition, settings);
    }
  }
  isDefaultSettings() {
    return this.primarySettingsModel instanceof DefaultSettingsEditorModel;
  }
  onConfigurationChanged() {
    if (!this.editor.getOption(56)) {
      this.editPreferenceWidgetForCursorPosition.hide();
      this.editPreferenceWidgetForMouseMove.hide();
    }
  }
  onPositionChanged(positionChangeEvent) {
    this.editPreferenceWidgetForMouseMove.hide();
    const settings = this.getSettings(positionChangeEvent.position.lineNumber);
    if (settings.length) {
      this.showEditPreferencesWidget(this.editPreferenceWidgetForCursorPosition, settings);
    } else {
      this.editPreferenceWidgetForCursorPosition.hide();
    }
  }
  onMouseMoved(mouseMoveEvent) {
    const editPreferenceWidget = this.getEditPreferenceWidgetUnderMouse(mouseMoveEvent);
    if (editPreferenceWidget) {
      this.onMouseOver(editPreferenceWidget);
      return;
    }
    this.settingHighlighter.clear();
    this.toggleEditPreferencesForMouseMoveDelayer.trigger(() => this.toggleEditPreferenceWidgetForMouseMove(mouseMoveEvent));
  }
  getEditPreferenceWidgetUnderMouse(mouseMoveEvent) {
    if (mouseMoveEvent.target.type === 2) {
      const line = mouseMoveEvent.target.position.lineNumber;
      if (this.editPreferenceWidgetForMouseMove.getLine() === line && this.editPreferenceWidgetForMouseMove.isVisible()) {
        return this.editPreferenceWidgetForMouseMove;
      }
      if (this.editPreferenceWidgetForCursorPosition.getLine() === line && this.editPreferenceWidgetForCursorPosition.isVisible()) {
        return this.editPreferenceWidgetForCursorPosition;
      }
    }
    return void 0;
  }
  toggleEditPreferenceWidgetForMouseMove(mouseMoveEvent) {
    const settings = mouseMoveEvent.target.position ? this.getSettings(mouseMoveEvent.target.position.lineNumber) : null;
    if (settings && settings.length) {
      this.showEditPreferencesWidget(this.editPreferenceWidgetForMouseMove, settings);
    } else {
      this.editPreferenceWidgetForMouseMove.hide();
    }
  }
  showEditPreferencesWidget(editPreferencesWidget, settings) {
    const line = settings[0].valueRange.startLineNumber;
    if (this.editor.getOption(56) && this.marginFreeFromOtherDecorations(line)) {
      editPreferencesWidget.show(line, localize("editTtile", "Edit"), settings);
      const editPreferenceWidgetToHide = editPreferencesWidget === this.editPreferenceWidgetForCursorPosition ? this.editPreferenceWidgetForMouseMove : this.editPreferenceWidgetForCursorPosition;
      editPreferenceWidgetToHide.hide();
    }
  }
  marginFreeFromOtherDecorations(line) {
    const decorations = this.editor.getLineDecorations(line);
    if (decorations) {
      for (const { options } of decorations) {
        if (options.glyphMarginClassName && options.glyphMarginClassName.indexOf(ThemeIcon.asClassName(settingsEditIcon)) === -1) {
          return false;
        }
      }
    }
    return true;
  }
  getSettings(lineNumber) {
    const configurationMap = this.getConfigurationsMap();
    return this.getSettingsAtLineNumber(lineNumber).filter((setting) => {
      const configurationNode = configurationMap[setting.key];
      if (configurationNode) {
        if (configurationNode.policy && this.configurationService.inspect(setting.key).policyValue !== void 0) {
          return false;
        }
        if (this.isDefaultSettings()) {
          if (setting.key === "launch") {
            return false;
          }
          return true;
        }
        if (configurationNode.type === "boolean" || configurationNode.enum) {
          if (this.primarySettingsModel.configurationTarget !== 6) {
            return true;
          }
          if (configurationNode.scope === 4 || configurationNode.scope === 5) {
            return true;
          }
        }
      }
      return false;
    });
  }
  getSettingsAtLineNumber(lineNumber) {
    let index = 0;
    const settings = [];
    for (const group of this.settingsGroups) {
      if (group.range.startLineNumber > lineNumber) {
        break;
      }
      if (lineNumber >= group.range.startLineNumber && lineNumber <= group.range.endLineNumber) {
        for (const section of group.sections) {
          for (const setting of section.settings) {
            if (setting.range.startLineNumber > lineNumber) {
              break;
            }
            if (lineNumber >= setting.range.startLineNumber && lineNumber <= setting.range.endLineNumber) {
              if (!this.isDefaultSettings() && setting.overrides.length) {
                for (const overrideSetting of setting.overrides) {
                  if (lineNumber >= overrideSetting.range.startLineNumber && lineNumber <= overrideSetting.range.endLineNumber) {
                    settings.push({ ...overrideSetting, index, groupId: group.id });
                  }
                }
              } else {
                settings.push({ ...setting, index, groupId: group.id });
              }
            }
            index++;
          }
        }
      }
    }
    return settings;
  }
  onMouseOver(editPreferenceWidget) {
    this.settingHighlighter.highlight(editPreferenceWidget.preferences[0]);
  }
  onEditSettingClicked(editPreferenceWidget, e) {
    EventHelper.stop(e.event, true);
    const actions = this.getSettings(editPreferenceWidget.getLine()).length === 1 ? this.getActions(editPreferenceWidget.preferences[0], this.getConfigurationsMap()[editPreferenceWidget.preferences[0].key]) : editPreferenceWidget.preferences.map((setting) => new SubmenuAction(
      `preferences.submenu.${setting.key}`,
      setting.key,
      this.getActions(setting, this.getConfigurationsMap()[setting.key])
    ));
    this.contextMenuService.showContextMenu({
      getAnchor: () => e.event,
      getActions: () => actions
    });
  }
  activateOnSetting(setting) {
    const startLine = setting.keyRange.startLineNumber;
    const settings = this.getSettings(startLine);
    if (!settings.length) {
      return false;
    }
    this.editPreferenceWidgetForMouseMove.show(startLine, "", settings);
    const actions = this.getActions(this.editPreferenceWidgetForMouseMove.preferences[0], this.getConfigurationsMap()[this.editPreferenceWidgetForMouseMove.preferences[0].key]);
    this.contextMenuService.showContextMenu({
      getAnchor: () => this.toAbsoluteCoords(new Position(startLine, 1)),
      getActions: () => actions
    });
    return true;
  }
  toAbsoluteCoords(position) {
    const positionCoords = this.editor.getScrolledVisiblePosition(position);
    const editorCoords = getDomNodePagePosition(this.editor.getDomNode());
    const x = editorCoords.left + positionCoords.left;
    const y = editorCoords.top + positionCoords.top + positionCoords.height;
    return { x, y: y + 10 };
  }
  getConfigurationsMap() {
    return Registry.as(Extensions.Configuration).getConfigurationProperties();
  }
  getActions(setting, jsonSchema) {
    if (jsonSchema.type === "boolean") {
      return [{
        id: "truthyValue",
        label: "true",
        enabled: true,
        run: () => this.updateSetting(setting.key, true, setting)
      }, {
        id: "falsyValue",
        label: "false",
        enabled: true,
        run: () => this.updateSetting(setting.key, false, setting)
      }];
    }
    if (jsonSchema.enum) {
      return jsonSchema.enum.map((value) => {
        return {
          id: value,
          label: JSON.stringify(value),
          enabled: true,
          run: () => this.updateSetting(setting.key, value, setting)
        };
      });
    }
    return this.getDefaultActions(setting);
  }
  getDefaultActions(setting) {
    if (this.isDefaultSettings()) {
      const settingInOtherModel = this.associatedPreferencesModel.getPreference(setting.key);
      return [{
        id: "setDefaultValue",
        label: settingInOtherModel ? localize("replaceDefaultValue", "Replace in Settings") : localize("copyDefaultValue", "Copy to Settings"),
        enabled: true,
        run: () => this.updateSetting(setting.key, setting.value, setting)
      }];
    }
    return [];
  }
  updateSetting(key, value, source) {
    this._onUpdateSetting.fire({ key, value, source });
  }
};
EditSettingRenderer = __decorate([
  __param(3, IConfigurationService),
  __param(4, IInstantiationService),
  __param(5, IContextMenuService)
], EditSettingRenderer);
let SettingHighlighter = class SettingHighlighter2 extends Disposable {
  constructor(editor, instantiationService) {
    super();
    this.editor = editor;
    this.fixedHighlighter = this._register(instantiationService.createInstance(RangeHighlightDecorations));
    this.volatileHighlighter = this._register(instantiationService.createInstance(RangeHighlightDecorations));
  }
  highlight(setting, fix = false) {
    this.volatileHighlighter.removeHighlightRange();
    this.fixedHighlighter.removeHighlightRange();
    const highlighter = fix ? this.fixedHighlighter : this.volatileHighlighter;
    highlighter.highlightRange({
      range: setting.valueRange,
      resource: this.editor.getModel().uri
    }, this.editor);
    this.editor.revealLineInCenterIfOutsideViewport(setting.valueRange.startLineNumber, 0);
  }
  clear(fix = false) {
    this.volatileHighlighter.removeHighlightRange();
    if (fix) {
      this.fixedHighlighter.removeHighlightRange();
    }
  }
};
SettingHighlighter = __decorate([
  __param(1, IInstantiationService)
], SettingHighlighter);
let UnsupportedSettingsRenderer = class UnsupportedSettingsRenderer2 extends Disposable {
  constructor(editor, settingsEditorModel, markerService, environmentService, configurationService, workspaceTrustManagementService, uriIdentityService, languageFeaturesService, userDataProfileService, userDataProfilesService) {
    super();
    this.editor = editor;
    this.settingsEditorModel = settingsEditorModel;
    this.markerService = markerService;
    this.environmentService = environmentService;
    this.configurationService = configurationService;
    this.workspaceTrustManagementService = workspaceTrustManagementService;
    this.uriIdentityService = uriIdentityService;
    this.userDataProfileService = userDataProfileService;
    this.userDataProfilesService = userDataProfilesService;
    this.renderingDelayer = new Delayer(200);
    this.codeActions = new ResourceMap((uri) => this.uriIdentityService.extUri.getComparisonKey(uri));
    this._register(this.editor.getModel().onDidChangeContent(() => this.delayedRender()));
    this._register(Event.filter(this.configurationService.onDidChangeConfiguration, (e) => e.source === 7)(() => this.delayedRender()));
    this._register(languageFeaturesService.codeActionProvider.register({ pattern: settingsEditorModel.uri.path }, this));
  }
  delayedRender() {
    this.renderingDelayer.trigger(() => this.render());
  }
  render() {
    this.codeActions.clear();
    const markerData = this.generateMarkerData();
    if (markerData.length) {
      this.markerService.changeOne("UnsupportedSettingsRenderer", this.settingsEditorModel.uri, markerData);
    } else {
      this.markerService.remove("UnsupportedSettingsRenderer", [this.settingsEditorModel.uri]);
    }
  }
  async provideCodeActions(model, range, context, token) {
    const actions = [];
    const codeActionsByRange = this.codeActions.get(model.uri);
    if (codeActionsByRange) {
      for (const [codeActionsRange, codeActions] of codeActionsByRange) {
        if (codeActionsRange.containsRange(range)) {
          actions.push(...codeActions);
        }
      }
    }
    return {
      actions,
      dispose: () => {
      }
    };
  }
  generateMarkerData() {
    const markerData = [];
    const configurationRegistry = Registry.as(Extensions.Configuration).getConfigurationProperties();
    for (const settingsGroup of this.settingsEditorModel.settingsGroups) {
      for (const section of settingsGroup.sections) {
        for (const setting of section.settings) {
          if (OVERRIDE_PROPERTY_REGEX.test(setting.key)) {
            if (setting.overrides) {
              this.handleOverrides(setting.overrides, configurationRegistry, markerData);
            }
            continue;
          }
          const configuration = configurationRegistry[setting.key];
          if (configuration) {
            if (this.handlePolicyConfiguration(setting, configuration, markerData)) {
              continue;
            }
            switch (this.settingsEditorModel.configurationTarget) {
              case 3:
                this.handleLocalUserConfiguration(setting, configuration, markerData);
                break;
              case 4:
                this.handleRemoteUserConfiguration(setting, configuration, markerData);
                break;
              case 5:
                this.handleWorkspaceConfiguration(setting, configuration, markerData);
                break;
              case 6:
                this.handleWorkspaceFolderConfiguration(setting, configuration, markerData);
                break;
            }
          } else {
            markerData.push(this.gemerateUnknownConfigurationMarker(setting));
          }
        }
      }
    }
    return markerData;
  }
  handlePolicyConfiguration(setting, configuration, markerData) {
    if (!configuration.policy) {
      return false;
    }
    if (this.configurationService.inspect(setting.key).policyValue === void 0) {
      return false;
    }
    if (this.settingsEditorModel.configurationTarget === 7) {
      return false;
    }
    markerData.push({
      severity: MarkerSeverity.Hint,
      tags: [1],
      ...setting.range,
      message: localize(
        "unsupportedPolicySetting",
        "This setting cannot be applied because it is configured in the system policy."
      )
    });
    return true;
  }
  handleOverrides(overrides, configurationRegistry, markerData) {
    for (const setting of overrides || []) {
      const configuration = configurationRegistry[setting.key];
      if (configuration) {
        if (configuration.scope !== 5) {
          markerData.push({
            severity: MarkerSeverity.Hint,
            tags: [1],
            ...setting.range,
            message: localize(
              "unsupportLanguageOverrideSetting",
              "This setting cannot be applied because it is not registered as language override setting."
            )
          });
        }
      } else {
        markerData.push(this.gemerateUnknownConfigurationMarker(setting));
      }
    }
  }
  handleLocalUserConfiguration(setting, configuration, markerData) {
    var _a2;
    if (!this.userDataProfileService.currentProfile.isDefault && !((_a2 = this.userDataProfileService.currentProfile.useDefaultFlags) == null ? void 0 : _a2.settings)) {
      if (isEqual(this.userDataProfilesService.defaultProfile.settingsResource, this.settingsEditorModel.uri) && !this.configurationService.isSettingAppliedForAllProfiles(setting.key)) {
        markerData.push({
          severity: MarkerSeverity.Hint,
          tags: [1],
          ...setting.range,
          message: localize(
            "defaultProfileSettingWhileNonDefaultActive",
            "This setting cannot be applied while a non-default profile is active. It will be applied when the default profile is active."
          )
        });
      } else if (isEqual(this.userDataProfileService.currentProfile.settingsResource, this.settingsEditorModel.uri)) {
        if (configuration.scope === 1) {
          markerData.push(this.generateUnsupportedApplicationSettingMarker(setting));
        } else if (this.configurationService.isSettingAppliedForAllProfiles(setting.key)) {
          markerData.push({
            severity: MarkerSeverity.Hint,
            tags: [1],
            ...setting.range,
            message: localize(
              "allProfileSettingWhileInNonDefaultProfileSetting",
              "This setting cannot be applied because it is configured to be applied in all profiles using setting {0}. Value from the default profile will be used instead.",
              APPLY_ALL_PROFILES_SETTING
            )
          });
        }
      }
    }
    if (this.environmentService.remoteAuthority && (configuration.scope === 2 || configuration.scope === 6)) {
      markerData.push({
        severity: MarkerSeverity.Hint,
        tags: [1],
        ...setting.range,
        message: localize(
          "unsupportedRemoteMachineSetting",
          "This setting cannot be applied in this window. It will be applied when you open a local window."
        )
      });
    }
  }
  handleRemoteUserConfiguration(setting, configuration, markerData) {
    if (configuration.scope === 1) {
      markerData.push(this.generateUnsupportedApplicationSettingMarker(setting));
    }
  }
  handleWorkspaceConfiguration(setting, configuration, markerData) {
    if (configuration.scope === 1) {
      markerData.push(this.generateUnsupportedApplicationSettingMarker(setting));
    }
    if (configuration.scope === 2) {
      markerData.push(this.generateUnsupportedMachineSettingMarker(setting));
    }
    if (!this.workspaceTrustManagementService.isWorkspaceTrusted() && configuration.restricted) {
      const marker = this.generateUntrustedSettingMarker(setting);
      markerData.push(marker);
      const codeActions = this.generateUntrustedSettingCodeActions([marker]);
      this.addCodeActions(marker, codeActions);
    }
  }
  handleWorkspaceFolderConfiguration(setting, configuration, markerData) {
    if (configuration.scope === 1) {
      markerData.push(this.generateUnsupportedApplicationSettingMarker(setting));
    }
    if (configuration.scope === 2) {
      markerData.push(this.generateUnsupportedMachineSettingMarker(setting));
    }
    if (configuration.scope === 3) {
      markerData.push({
        severity: MarkerSeverity.Hint,
        tags: [1],
        ...setting.range,
        message: localize(
          "unsupportedWindowSetting",
          "This setting cannot be applied in this workspace. It will be applied when you open the containing workspace folder directly."
        )
      });
    }
    if (!this.workspaceTrustManagementService.isWorkspaceTrusted() && configuration.restricted) {
      const marker = this.generateUntrustedSettingMarker(setting);
      markerData.push(marker);
      const codeActions = this.generateUntrustedSettingCodeActions([marker]);
      this.addCodeActions(marker, codeActions);
    }
  }
  generateUnsupportedApplicationSettingMarker(setting) {
    return {
      severity: MarkerSeverity.Hint,
      tags: [1],
      ...setting.range,
      message: localize(
        "unsupportedApplicationSetting",
        "This setting has an application scope and can be set only in the user settings file."
      )
    };
  }
  generateUnsupportedMachineSettingMarker(setting) {
    return {
      severity: MarkerSeverity.Hint,
      tags: [1],
      ...setting.range,
      message: localize(
        "unsupportedMachineSetting",
        "This setting can only be applied in user settings in local window or in remote settings in remote window."
      )
    };
  }
  generateUntrustedSettingMarker(setting) {
    return {
      severity: MarkerSeverity.Warning,
      ...setting.range,
      message: localize(
        "untrustedSetting",
        "This setting can only be applied in a trusted workspace."
      )
    };
  }
  gemerateUnknownConfigurationMarker(setting) {
    return {
      severity: MarkerSeverity.Hint,
      tags: [1],
      ...setting.range,
      message: localize("unknown configuration setting", "Unknown Configuration Setting")
    };
  }
  generateUntrustedSettingCodeActions(diagnostics) {
    return [{
      title: localize("manage workspace trust", "Manage Workspace Trust"),
      command: {
        id: "workbench.trust.manage",
        title: localize("manage workspace trust", "Manage Workspace Trust")
      },
      diagnostics,
      kind: CodeActionKind.QuickFix.value
    }];
  }
  addCodeActions(range, codeActions) {
    let actions = this.codeActions.get(this.settingsEditorModel.uri);
    if (!actions) {
      actions = [];
      this.codeActions.set(this.settingsEditorModel.uri, actions);
    }
    actions.push([Range.lift(range), codeActions]);
  }
  dispose() {
    this.markerService.remove("UnsupportedSettingsRenderer", [this.settingsEditorModel.uri]);
    this.codeActions.clear();
    super.dispose();
  }
};
UnsupportedSettingsRenderer = __decorate([
  __param(2, IMarkerService),
  __param(3, IWorkbenchEnvironmentService),
  __param(4, IWorkbenchConfigurationService),
  __param(5, IWorkspaceTrustManagementService),
  __param(6, IUriIdentityService),
  __param(7, ILanguageFeaturesService),
  __param(8, IUserDataProfileService),
  __param(9, IUserDataProfilesService)
], UnsupportedSettingsRenderer);
let WorkspaceConfigurationRenderer = (_k = class extends Disposable {
  constructor(editor, workspaceSettingsEditorModel, workspaceContextService, markerService) {
    super();
    this.editor = editor;
    this.workspaceSettingsEditorModel = workspaceSettingsEditorModel;
    this.workspaceContextService = workspaceContextService;
    this.markerService = markerService;
    this.decorations = this.editor.createDecorationsCollection();
    this.renderingDelayer = new Delayer(200);
    this._register(this.editor.getModel().onDidChangeContent(() => this.renderingDelayer.trigger(() => this.render())));
  }
  render() {
    const markerData = [];
    if (this.workspaceContextService.getWorkbenchState() === 3 && this.workspaceSettingsEditorModel instanceof WorkspaceConfigurationEditorModel) {
      const ranges = [];
      for (const settingsGroup of this.workspaceSettingsEditorModel.configurationGroups) {
        for (const section of settingsGroup.sections) {
          for (const setting of section.settings) {
            if (!_k.supportedKeys.includes(setting.key)) {
              markerData.push({
                severity: MarkerSeverity.Hint,
                tags: [1],
                ...setting.range,
                message: localize("unsupportedProperty", "Unsupported Property")
              });
            }
          }
        }
      }
      this.decorations.set(ranges.map((range) => this.createDecoration(range)));
    }
    if (markerData.length) {
      this.markerService.changeOne("WorkspaceConfigurationRenderer", this.workspaceSettingsEditorModel.uri, markerData);
    } else {
      this.markerService.remove("WorkspaceConfigurationRenderer", [this.workspaceSettingsEditorModel.uri]);
    }
  }
  createDecoration(range) {
    return {
      range,
      options: _k._DIM_CONFIGURATION_
    };
  }
  dispose() {
    this.markerService.remove("WorkspaceConfigurationRenderer", [this.workspaceSettingsEditorModel.uri]);
    this.decorations.clear();
    super.dispose();
  }
}, _k.supportedKeys = ["folders", "tasks", "launch", "extensions", "settings", "remoteAuthority", "transient"], _k._DIM_CONFIGURATION_ = ModelDecorationOptions.register({
  description: "dim-configuration",
  stickiness: 1,
  inlineClassName: "dim-configuration"
}), _k);
WorkspaceConfigurationRenderer = __decorate([
  __param(2, IWorkspaceContextService),
  __param(3, IMarkerService)
], WorkspaceConfigurationRenderer);
let SettingsEditorContribution = (_l = class extends Disposable {
  constructor(editor, instantiationService, preferencesService, workspaceContextService) {
    super();
    this.editor = editor;
    this.instantiationService = instantiationService;
    this.preferencesService = preferencesService;
    this.workspaceContextService = workspaceContextService;
    this.disposables = this._register(new DisposableStore());
    this._createPreferencesRenderer();
    this._register(this.editor.onDidChangeModel((e) => this._createPreferencesRenderer()));
    this._register(this.workspaceContextService.onDidChangeWorkbenchState(() => this._createPreferencesRenderer()));
  }
  async _createPreferencesRenderer() {
    var _a2;
    this.disposables.clear();
    this.currentRenderer = void 0;
    const model = this.editor.getModel();
    if (model && /\.(json|code-workspace)$/.test(model.uri.path)) {
      const settingsModel = await this.preferencesService.createPreferencesEditorModel(model.uri);
      if (settingsModel instanceof SettingsEditorModel && this.editor.getModel()) {
        this.disposables.add(settingsModel);
        switch (settingsModel.configurationTarget) {
          case 5:
            this.currentRenderer = this.disposables.add(this.instantiationService.createInstance(WorkspaceSettingsRenderer, this.editor, settingsModel));
            break;
          default:
            this.currentRenderer = this.disposables.add(this.instantiationService.createInstance(UserSettingsRenderer, this.editor, settingsModel));
            break;
        }
      }
      (_a2 = this.currentRenderer) == null ? void 0 : _a2.render();
    }
  }
}, _l.ID = "editor.contrib.settings", _l);
SettingsEditorContribution = __decorate([
  __param(1, IInstantiationService),
  __param(2, IPreferencesService),
  __param(3, IWorkspaceContextService)
], SettingsEditorContribution);
var css$1 = '.editor-instance#workbench\\.editor\\.settings2:focus{outline:none}.settings-editor{margin:auto;max-width:1200px;overflow:hidden}.settings-editor:focus{outline:none!important}.settings-editor>.settings-header{box-sizing:border-box;margin:11px auto auto;max-width:1200px;overflow:hidden;padding-left:24px;padding-right:24px;padding-top:3px}.settings-editor>.settings-header>.search-container{position:relative}.monaco-workbench.vs .settings-editor>.settings-header>.search-container>.suggest-input-container{border:1px solid #ddd}.settings-editor>.settings-header>.search-container>.settings-count-widget{margin:4px 0;position:absolute;right:46px;top:0}.settings-editor>.settings-header>.search-container>.settings-count-widget:empty{visibility:hidden}.settings-editor>.settings-header>.search-container>.settings-clear-widget{align-items:center;display:flex;height:100%;position:absolute;right:0;top:0;width:43px}.settings-editor>.settings-header>.search-container>.settings-clear-widget .action-label{padding:2px}.settings-editor>.settings-header>.settings-header-controls{border-bottom:1px solid;display:flex;height:32px;margin-top:10px}.settings-editor>.settings-header>.settings-header-controls .settings-target-container{flex:auto}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget .action-label{border-radius:0;color:var(--vscode-foreground);opacity:.9}.settings-editor>.settings-header>.settings-header-controls .last-synced-label{opacity:.9;padding-top:7px}.settings-editor .settings-tabs-widget>.monaco-action-bar .action-item .action-details{opacity:.9}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget .action-label:hover{opacity:1}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget .action-label.checked{color:var(--vscode-settings-headerForeground);opacity:1}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget .action-label.checked:not(:focus){border-bottom-color:var(--vscode-settings-headerForeground)}.settings-editor>.settings-header .settings-tabs-widget>.monaco-action-bar .action-item .action-label{margin-right:0}.settings-editor>.settings-header .settings-tabs-widget .monaco-action-bar .action-item .dropdown-icon{padding-top:3px}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget>.monaco-action-bar .action-item{padding:0}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget>.monaco-action-bar .action-item .action-label{font-size:13px;padding:7px 8px 6.5px;text-transform:none}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget>.monaco-action-bar .action-item .action-label .dropdown-icon{padding-top:2px}.settings-editor>.settings-header>.settings-header-controls .settings-tabs-widget>.monaco-action-bar .action-item .action-label:not(.checked):not(:focus){border-bottom:1px solid transparent}.settings-editor>.settings-body{position:relative}.settings-editor>.settings-body>.no-results-message{box-sizing:border-box;display:none;margin:20px auto auto;max-width:1200px;padding-left:24px;padding-right:24px}.settings-editor>.settings-body>.monaco-split-view2{margin-top:14px}.settings-editor>.settings-body .settings-toc-container,.settings-editor>.settings-body .settings-tree-container{height:100%}.settings-editor>.settings-body .settings-tree-container .setting-item-label,.settings-editor>.settings-body .settings-tree-container .settings-group-title-label{color:var(--vscode-settings-headerForeground)}.settings-editor>.settings-body .settings-tree-container .setting-item-extension-toggle .setting-item-extension-toggle-button{display:block;width:fit-content}.settings-editor.no-results>.settings-body .settings-toc-container,.settings-editor.no-results>.settings-body .settings-tree-container{display:none}.settings-editor.no-results>.settings-body>.no-results-message{display:block}.settings-editor>.settings-body>.no-results-message a.prominent{text-decoration:underline}.settings-editor.narrow-width>.settings-body .settings-tree-container .monaco-list-row .monaco-tl-contents,.settings-editor.no-toc-search>.settings-body .settings-tree-container .monaco-list-row .monaco-tl-contents{padding-left:33px}.settings-editor>.settings-body .settings-tree-container .monaco-list-row{outline:none!important}.settings-editor>.settings-body .settings-tree-container .monaco-list-row .monaco-tl-twistie{display:none!important}.settings-editor>.settings-body .settings-tree-container .monaco-list-row.focused .settings-row-inner-container{background-color:var(--vscode-settings-focusedRowBackground)}.settings-editor>.settings-body .settings-tree-container .monaco-list-row:not(.focused) .settings-row-inner-container:hover{background-color:var(--vscode-settings-rowHoverBackground)}.settings-editor>.settings-body .settings-tree-container .monaco-list:focus-within .monaco-list-row.focused .setting-item-contents,.settings-editor>.settings-body .settings-tree-container .monaco-list:focus-within .monaco-list-row.focused .settings-group-title-label{outline:1px solid var(--vscode-settings-focusedRowBorder)}.settings-editor>.settings-body .settings-tree-container .settings-editor-tree>.monaco-scrollable-element>.shadow.top{z-index:11}.settings-editor>.settings-body .settings-tree-container .setting-toolbar-container{bottom:0;height:22px;left:-22px;position:absolute;top:8px;width:22px}.settings-editor>.settings-body .settings-tree-container .monaco-list-row .mouseover .setting-toolbar-container>.monaco-toolbar .codicon,.settings-editor>.settings-body .settings-tree-container .monaco-list-row .setting-toolbar-container:hover>.monaco-toolbar .codicon,.settings-editor>.settings-body .settings-tree-container .monaco-list-row .setting-toolbar-container>.monaco-toolbar .active .codicon,.settings-editor>.settings-body .settings-tree-container .monaco-list-row.focused .setting-item-contents .setting-toolbar-container>.monaco-toolbar .codicon{opacity:1}.settings-editor>.settings-body .settings-tree-container .setting-toolbar-container>.monaco-toolbar .codicon{align-items:center;display:flex;justify-content:center;opacity:0}.monaco-workbench:not(.reduce-motion) .settings-editor>.settings-body .settings-tree-container .setting-toolbar-container>.monaco-toolbar .codicon{transition:opacity .3s}.settings-editor>.settings-body .settings-toc-container{pointer-events:none;position:absolute;width:100%;z-index:10}.settings-editor>.settings-body .settings-toc-container .monaco-list{pointer-events:auto}.settings-editor.narrow-width>.settings-body .settings-toc-container,.settings-editor.no-toc-search>.settings-body .settings-toc-container{display:none}.settings-editor>.settings-body .settings-toc-container .monaco-list-row:not(.selected){color:var(--vscode-foreground);opacity:.9}.settings-editor>.settings-body .settings-toc-container .monaco-list-row .monaco-tl-contents{display:flex}.settings-editor>.settings-body .settings-toc-container .monaco-list-row .settings-toc-entry{flex-shrink:1;line-height:22px;overflow:hidden;text-overflow:ellipsis}.settings-editor>.settings-body .settings-toc-container .monaco-list-row .settings-toc-count{display:none;line-height:22px;margin-left:3px;opacity:.8}.settings-editor>.settings-body .settings-toc-container .monaco-list-row.selected .settings-toc-entry{font-weight:700}.settings-editor>.settings-body .settings-tree-container{border-collapse:separate;border-spacing:0;position:relative}.settings-editor>.settings-body .settings-toc-container .monaco-scrollable-element,.settings-editor>.settings-body .settings-tree-container .monaco-scrollable-element{padding-top:0}.settings-editor>.settings-body .settings-toc-wrapper{height:100%;margin:auto;max-width:1200px;padding-left:24px}.settings-editor.narrow-width>.settings-body .settings-tree-container,.settings-editor.no-toc-search>.settings-body .settings-tree-container{margin-left:0}.settings-editor>.settings-body .settings-tree-container .monaco-list-row{cursor:default;line-height:1.4em!important;overflow:visible}.settings-editor>.settings-body .settings-tree-container .monaco-list-rows{min-height:100%;overflow:visible!important}.settings-editor>.settings-body .settings-tree-container .monaco-list-row .monaco-tl-contents{box-sizing:border-box;margin:auto;max-width:min(100%,1200px);overflow:visible;padding-left:24px;padding-right:24px}.settings-editor>.settings-body .settings-tree-container .monaco-list-row .monaco-tl-contents.group-title{max-width:min(100%,1200px)}.settings-editor>.settings-body .settings-tree-container .setting-item-contents,.settings-editor>.settings-body .settings-tree-container .settings-group-title-label{outline-offset:-1px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents{padding:12px 14px 18px;position:relative;white-space:normal}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title{display:inline-block;overflow:hidden;padding-bottom:2px;text-overflow:ellipsis}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-modified-indicator{border-color:var(--vscode-settings-modifiedItemIndicator);display:none}.settings-editor>.settings-body .settings-tree-container .setting-item-contents.is-configured .setting-item-modified-indicator{border-left-style:solid;border-left-width:2px;bottom:18px;content:" ";display:block;left:5px;position:absolute;top:15px;width:6px}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-item-contents.is-configured .setting-item-modified-indicator,.settings-editor>.settings-body .settings-tree-container .setting-item-list .setting-item-contents.is-configured .setting-item-modified-indicator{bottom:23px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title>.setting-indicators-container{font-style:italic}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title .setting-item-ignored,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title .setting-item-overrides{color:var(--vscode-foreground);opacity:.9}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title>.setting-indicators-container .setting-indicator{padding-bottom:2px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title .codicon{padding-left:1px;vertical-align:middle}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title .setting-item-label .codicon{vertical-align:middle}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-title .setting-item-overrides a.modified-scope{cursor:pointer;text-decoration:underline}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-label{margin-right:7px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-cat-label-container{float:left}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-category,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-label{font-weight:600;user-select:text;-webkit-user-select:text}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-category{opacity:.9}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-deprecation-message{color:var(--vscode-errorForeground);display:none;margin-top:3px;user-select:text;-webkit-user-select:text}.settings-editor>.settings-body .settings-tree-container .setting-item-contents.is-deprecated .setting-item-deprecation-message{display:flex}.settings-editor>.settings-body .settings-tree-container .setting-item-contents.is-deprecated .setting-item-deprecation-message .codicon{color:inherit;margin-right:4px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-description{color:var(--vscode-foreground);margin-top:-1px;opacity:.9;user-select:text;-webkit-user-select:text}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-validation-message{background-color:var(--vscode-inputValidation-errorBackground);border:1px solid var(--vscode-inputValidation-errorBorder);color:var(--vscode-inputValidation-errorForeground);display:none}.settings-editor>.settings-body .settings-tree-container .setting-item .setting-item-contents.invalid-input .setting-item-validation-message{box-sizing:border-box;display:block;margin-top:-1px;padding:5px;position:absolute;z-index:1}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-item-contents.invalid-input .setting-item-validation-message{margin-top:1rem;position:static}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-text .setting-item-validation-message{width:420px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-number .setting-item-validation-message{width:200px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-number input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none!important}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-number input[type=number]{-moz-appearance:textfield!important;appearance:textfield!important}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown *{margin:0}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown :not(:last-child){margin-bottom:8px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .edit-in-settings-button{opacity:.9}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .edit-in-settings-button,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a>code{color:var(--vscode-textLink-foreground)}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .edit-in-settings-button:focus,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:focus{outline:1px solid -webkit-focus-ring-color;outline-color:var(--vscode-focusBorder);outline-offset:-1px;text-decoration:underline}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .edit-in-settings-button:active,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .edit-in-settings-button:hover,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:active,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:active>code,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:hover,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:hover>code{color:var(--vscode-textLink-activeForeground)}.settings-editor>.settings-body .settings-tree-container .edit-in-settings-button:hover,.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown a:hover{cursor:pointer;text-decoration:underline}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown code{color:var(--vscode-textPreformat-foreground);font-family:var(--monaco-monospace-font);line-height:15px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-markdown .monaco-tokenized-source{font-family:var(--monaco-monospace-font);white-space:pre}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-enumDescription{display:block}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-item-contents,.settings-editor>.settings-body .settings-tree-container .setting-item-list .setting-item-contents{padding-bottom:26px}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-item-value-description{cursor:pointer;display:flex}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-value-checkbox{border:1px solid transparent;border-radius:3px;height:18px;margin-left:0;margin-right:9px;padding:0;width:18px}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-value-checkbox.codicon:not(.checked):before{opacity:0}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .setting-item-value{display:flex;margin-top:9px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-number .setting-item-value>.setting-item-control{min-width:200px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-text .setting-item-control{width:420px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-enum .setting-item-value>.setting-item-control,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-text .setting-item-value>.setting-item-control{min-width:auto}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-enum .setting-item-value>.setting-item-control>select{width:320px}.settings-editor>.settings-body .settings-tree-container .setting-item-contents .monaco-select-box{font:inherit;height:26px;padding:2px 6px;width:auto}.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown code{color:var(--vscode-textPreformat-foreground)}.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a,.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a>code{color:var(--vscode-textLink-foreground)}.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a:active,.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a:active>code,.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a:hover,.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a:hover>code{color:var(--vscode-textLink-activeForeground)}.settings-editor>.settings-body .settings-tree-container .setting-item-new-extensions{display:flex}.settings-editor>.settings-body .settings-tree-container .setting-item-new-extensions .settings-new-extensions-button{margin:auto auto 15px;padding:4px 10px;width:auto}.settings-editor>.settings-body .settings-tree-container .group-title{cursor:default}.settings-editor>.settings-body .settings-tree-container .settings-group-title-label{box-sizing:border-box;display:inline-block;font-weight:600;height:100%;margin:0;overflow:hidden;padding:10px 10px 10px 15px;position:relative;text-overflow:ellipsis;width:100%}.settings-editor>.settings-body .settings-tree-container .settings-group-title-label.settings-group-level-1{font-size:26px}.settings-editor>.settings-body .settings-tree-container .settings-group-title-label.settings-group-level-2{font-size:22px}.settings-editor>.settings-body .settings-tree-container .settings-group-title-label.settings-group-level-3{font-size:18px}.settings-editor.search-mode>.settings-body .settings-toc-container .monaco-list-row .settings-toc-count{display:block}.settings-editor>.settings-body .settings-tree-container .setting-list-widget .setting-list-object-list-row.select-container{width:320px}.settings-editor>.settings-body .settings-tree-container .setting-list-widget .setting-list-object-list-row.select-container>select{width:inherit}.settings-editor>.settings-body .settings-toc-container .monaco-list-row.focused .codicon,.settings-editor>.settings-body .settings-tree-container .monaco-list-row.focused .setting-item-contents .codicon,.settings-editor>.settings-body .settings-tree-container .setting-item-bool .codicon{color:inherit!important}';
n(css$1, {});
const defaultCommonlyUsedSettings = [
  "files.autoSave",
  "editor.fontSize",
  "editor.fontFamily",
  "editor.tabSize",
  "editor.renderWhitespace",
  "editor.cursorStyle",
  "editor.multiCursorModifier",
  "editor.insertSpaces",
  "editor.wordWrap",
  "files.exclude",
  "files.associations",
  "workbench.editor.enablePreview"
];
async function getCommonlyUsedData(workbenchAssignmentService, environmentService, productService) {
  const toggleData = await getExperimentalExtensionToggleData(workbenchAssignmentService, environmentService, productService);
  return {
    id: "commonlyUsed",
    label: localize("commonlyUsed", "Commonly Used"),
    settings: toggleData ? toggleData.commonlyUsed : defaultCommonlyUsedSettings
  };
}
const tocData = {
  id: "root",
  label: "root",
  children: [
    {
      id: "editor",
      label: localize("textEditor", "Text Editor"),
      settings: ["editor.*"],
      children: [
        {
          id: "editor/cursor",
          label: localize("cursor", "Cursor"),
          settings: ["editor.cursor*"]
        },
        {
          id: "editor/find",
          label: localize("find", "Find"),
          settings: ["editor.find.*"]
        },
        {
          id: "editor/font",
          label: localize("font", "Font"),
          settings: ["editor.font*"]
        },
        {
          id: "editor/format",
          label: localize("formatting", "Formatting"),
          settings: ["editor.format*"]
        },
        {
          id: "editor/diffEditor",
          label: localize("diffEditor", "Diff Editor"),
          settings: ["diffEditor.*"]
        },
        {
          id: "editor/minimap",
          label: localize("minimap", "Minimap"),
          settings: ["editor.minimap.*"]
        },
        {
          id: "editor/suggestions",
          label: localize("suggestions", "Suggestions"),
          settings: ["editor.*suggest*"]
        },
        {
          id: "editor/files",
          label: localize("files", "Files"),
          settings: ["files.*"]
        }
      ]
    },
    {
      id: "workbench",
      label: localize("workbench", "Workbench"),
      settings: ["workbench.*"],
      children: [
        {
          id: "workbench/appearance",
          label: localize("appearance", "Appearance"),
          settings: ["workbench.activityBar.*", "workbench.*color*", "workbench.fontAliasing", "workbench.iconTheme", "workbench.sidebar.location", "workbench.*.visible", "workbench.tips.enabled", "workbench.tree.*", "workbench.view.*"]
        },
        {
          id: "workbench/breadcrumbs",
          label: localize("breadcrumbs", "Breadcrumbs"),
          settings: ["breadcrumbs.*"]
        },
        {
          id: "workbench/editor",
          label: localize("editorManagement", "Editor Management"),
          settings: ["workbench.editor.*"]
        },
        {
          id: "workbench/settings",
          label: localize("settings", "Settings Editor"),
          settings: ["workbench.settings.*"]
        },
        {
          id: "workbench/zenmode",
          label: localize("zenMode", "Zen Mode"),
          settings: ["zenmode.*"]
        },
        {
          id: "workbench/screencastmode",
          label: localize("screencastMode", "Screencast Mode"),
          settings: ["screencastMode.*"]
        }
      ]
    },
    {
      id: "window",
      label: localize("window", "Window"),
      settings: ["window.*"],
      children: [
        {
          id: "window/newWindow",
          label: localize("newWindow", "New Window"),
          settings: ["window.*newwindow*"]
        }
      ]
    },
    {
      id: "features",
      label: localize("features", "Features"),
      children: [
        {
          id: "features/accessibility",
          label: localize("accessibility", "Accessibility"),
          settings: ["accessibility.*"]
        },
        {
          id: "features/explorer",
          label: localize("fileExplorer", "Explorer"),
          settings: ["explorer.*", "outline.*"]
        },
        {
          id: "features/search",
          label: localize("search", "Search"),
          settings: ["search.*"]
        },
        {
          id: "features/debug",
          label: localize("debug", "Debug"),
          settings: ["debug.*", "launch"]
        },
        {
          id: "features/testing",
          label: localize("testing", "Testing"),
          settings: ["testing.*"]
        },
        {
          id: "features/scm",
          label: localize("scm", "Source Control"),
          settings: ["scm.*"]
        },
        {
          id: "features/extensions",
          label: localize("extensions", "Extensions"),
          settings: ["extensions.*"]
        },
        {
          id: "features/terminal",
          label: localize("terminal", "Terminal"),
          settings: ["terminal.*"]
        },
        {
          id: "features/task",
          label: localize("task", "Task"),
          settings: ["task.*"]
        },
        {
          id: "features/problems",
          label: localize("problems", "Problems"),
          settings: ["problems.*"]
        },
        {
          id: "features/output",
          label: localize("output", "Output"),
          settings: ["output.*"]
        },
        {
          id: "features/comments",
          label: localize("comments", "Comments"),
          settings: ["comments.*"]
        },
        {
          id: "features/remote",
          label: localize("remote", "Remote"),
          settings: ["remote.*"]
        },
        {
          id: "features/timeline",
          label: localize("timeline", "Timeline"),
          settings: ["timeline.*"]
        },
        {
          id: "features/notebook",
          label: localize("notebook", "Notebook"),
          settings: ["notebook.*", "interactiveWindow.*"]
        },
        {
          id: "features/audioCues",
          label: localize("audioCues", "Audio Cues"),
          settings: ["audioCues.*"]
        },
        {
          id: "features/mergeEditor",
          label: localize("mergeEditor", "Merge Editor"),
          settings: ["mergeEditor.*"]
        },
        {
          id: "features/chat",
          label: localize("chat", "Chat"),
          settings: ["chat.*", "inlineChat.*"]
        }
      ]
    },
    {
      id: "application",
      label: localize("application", "Application"),
      children: [
        {
          id: "application/http",
          label: localize("proxy", "Proxy"),
          settings: ["http.*"]
        },
        {
          id: "application/keyboard",
          label: localize("keyboard", "Keyboard"),
          settings: ["keyboard.*"]
        },
        {
          id: "application/update",
          label: localize("update", "Update"),
          settings: ["update.*"]
        },
        {
          id: "application/telemetry",
          label: localize("telemetry", "Telemetry"),
          settings: ["telemetry.*"]
        },
        {
          id: "application/settingsSync",
          label: localize("settingsSync", "Settings Sync"),
          settings: ["settingsSync.*"]
        },
        {
          id: "application/experimental",
          label: localize("experimental", "Experimental"),
          settings: ["application.experimental.*"]
        },
        {
          id: "application/other",
          label: localize("other", "Other"),
          settings: ["application.*"]
        }
      ]
    },
    {
      id: "security",
      label: localize("security", "Security"),
      settings: isWindows ? ["security.*"] : void 0,
      children: [
        {
          id: "security/workspace",
          label: localize("workspace", "Workspace"),
          settings: ["security.workspace.*"]
        }
      ]
    }
  ]
};
const knownAcronyms = /* @__PURE__ */ new Set();
[
  "css",
  "html",
  "scss",
  "less",
  "json",
  "js",
  "ts",
  "ie",
  "id",
  "php",
  "scm"
].forEach((str) => knownAcronyms.add(str));
const knownTermMappings = /* @__PURE__ */ new Map();
knownTermMappings.set("power shell", "PowerShell");
knownTermMappings.set("powershell", "PowerShell");
knownTermMappings.set("javascript", "JavaScript");
knownTermMappings.set("typescript", "TypeScript");
function getIgnoredSettings(defaultIgnoredSettings, configurationService, settingsContent) {
  let value = [];
  if (settingsContent) {
    value = getIgnoredSettingsFromContent(settingsContent);
  } else {
    value = getIgnoredSettingsFromConfig(configurationService);
  }
  const added = [], removed = [...getDisallowedIgnoredSettings()];
  if (Array.isArray(value)) {
    for (const key of value) {
      if (key.startsWith("-")) {
        removed.push(key.substring(1));
      } else {
        added.push(key);
      }
    }
  }
  return distinct([...defaultIgnoredSettings, ...added].filter((setting) => !removed.includes(setting)));
}
function getIgnoredSettingsFromConfig(configurationService) {
  let userValue = configurationService.inspect("settingsSync.ignoredSettings").userValue;
  if (userValue !== void 0) {
    return userValue;
  }
  userValue = configurationService.inspect("sync.ignoredSettings").userValue;
  if (userValue !== void 0) {
    return userValue;
  }
  return configurationService.getValue("settingsSync.ignoredSettings") || [];
}
function getIgnoredSettingsFromContent(settingsContent) {
  const parsed = parse$1(settingsContent);
  return parsed ? parsed["settingsSync.ignoredSettings"] || parsed["sync.ignoredSettings"] || [] : [];
}
const $$4 = $$6;
let cachedSyncIgnoredSettingsSet = /* @__PURE__ */ new Set();
let cachedSyncIgnoredSettings = [];
let SettingsTreeIndicatorsLabel = class SettingsTreeIndicatorsLabel2 {
  constructor(container, configurationService, hoverService, userDataSyncEnablementService, languageService, userDataProfilesService, commandService) {
    this.configurationService = configurationService;
    this.hoverService = hoverService;
    this.userDataSyncEnablementService = userDataSyncEnablementService;
    this.languageService = languageService;
    this.userDataProfilesService = userDataProfilesService;
    this.commandService = commandService;
    this.keybindingListeners = new DisposableStore();
    this.focusedIndex = 0;
    this.defaultHoverOptions = {
      hoverPosition: 2,
      showPointer: true,
      compact: false,
      trapFocus: true
    };
    this.indicatorsContainerElement = append(container, $$4(".setting-indicators-container"));
    this.indicatorsContainerElement.style.display = "inline";
    this.profilesEnabled = this.userDataProfilesService.isEnabled();
    this.workspaceTrustIndicator = this.createWorkspaceTrustIndicator();
    this.scopeOverridesIndicator = this.createScopeOverridesIndicator();
    this.syncIgnoredIndicator = this.createSyncIgnoredIndicator();
    this.defaultOverrideIndicator = this.createDefaultOverrideIndicator();
    this.allIndicators = [this.workspaceTrustIndicator, this.scopeOverridesIndicator, this.syncIgnoredIndicator, this.defaultOverrideIndicator];
  }
  addHoverDisposables(disposables, element, showHover) {
    disposables.clear();
    const scheduler = disposables.add(new RunOnceScheduler(() => {
      const hover = showHover(false);
      if (hover) {
        disposables.add(hover);
      }
    }, this.configurationService.getValue("workbench.hover.delay")));
    disposables.add(addDisposableListener(element, EventType.MOUSE_OVER, () => {
      if (!scheduler.isScheduled()) {
        scheduler.schedule();
      }
    }));
    disposables.add(addDisposableListener(element, EventType.MOUSE_LEAVE, () => {
      scheduler.cancel();
    }));
    disposables.add(addDisposableListener(element, EventType.KEY_DOWN, (e) => {
      const evt = new StandardKeyboardEvent(e);
      if (evt.equals(10) || evt.equals(3)) {
        const hover = showHover(true);
        if (hover) {
          disposables.add(hover);
        }
        e.preventDefault();
      }
    }));
  }
  createWorkspaceTrustIndicator() {
    const workspaceTrustElement = $$4("span.setting-indicator.setting-item-workspace-trust");
    const workspaceTrustLabel = new SimpleIconLabel(workspaceTrustElement);
    workspaceTrustLabel.text = "$(warning) " + localize("workspaceUntrustedLabel", "Setting value not applied");
    const content = localize(
      "trustLabel",
      "The setting value can only be applied in a trusted workspace."
    );
    const disposables = new DisposableStore();
    const showHover = (focus) => {
      return this.hoverService.showHover({
        ...this.defaultHoverOptions,
        content,
        target: workspaceTrustElement,
        actions: [{
          label: localize("manageWorkspaceTrust", "Manage Workspace Trust"),
          commandId: "workbench.trust.manage",
          run: (target) => {
            this.commandService.executeCommand("workbench.trust.manage");
          }
        }]
      }, focus);
    };
    this.addHoverDisposables(disposables, workspaceTrustElement, showHover);
    return {
      element: workspaceTrustElement,
      label: workspaceTrustLabel,
      disposables
    };
  }
  createScopeOverridesIndicator() {
    const otherOverridesElement = $$4("span.setting-item-overrides");
    const otherOverridesLabel = new SimpleIconLabel(otherOverridesElement);
    return {
      element: otherOverridesElement,
      label: otherOverridesLabel,
      disposables: new DisposableStore()
    };
  }
  createSyncIgnoredIndicator() {
    const syncIgnoredElement = $$4("span.setting-indicator.setting-item-ignored");
    const syncIgnoredLabel = new SimpleIconLabel(syncIgnoredElement);
    syncIgnoredLabel.text = localize("extensionSyncIgnoredLabel", "Not synced");
    const syncIgnoredHoverContent = localize("syncIgnoredTitle", "This setting is ignored during sync");
    const disposables = new DisposableStore();
    const showHover = (focus) => {
      return this.hoverService.showHover({
        ...this.defaultHoverOptions,
        content: syncIgnoredHoverContent,
        target: syncIgnoredElement
      }, focus);
    };
    this.addHoverDisposables(disposables, syncIgnoredElement, showHover);
    return {
      element: syncIgnoredElement,
      label: syncIgnoredLabel,
      disposables: new DisposableStore()
    };
  }
  createDefaultOverrideIndicator() {
    const defaultOverrideIndicator = $$4("span.setting-indicator.setting-item-default-overridden");
    const defaultOverrideLabel = new SimpleIconLabel(defaultOverrideIndicator);
    defaultOverrideLabel.text = localize("defaultOverriddenLabel", "Default value changed");
    return {
      element: defaultOverrideIndicator,
      label: defaultOverrideLabel,
      disposables: new DisposableStore()
    };
  }
  render() {
    const indicatorsToShow = this.allIndicators.filter((indicator) => {
      return indicator.element.style.display !== "none";
    });
    this.indicatorsContainerElement.innerText = "";
    this.indicatorsContainerElement.style.display = "none";
    if (indicatorsToShow.length) {
      this.indicatorsContainerElement.style.display = "inline";
      append(this.indicatorsContainerElement, $$4("span", void 0, "("));
      for (let i = 0; i < indicatorsToShow.length - 1; i++) {
        append(this.indicatorsContainerElement, indicatorsToShow[i].element);
        append(this.indicatorsContainerElement, $$4("span.comma", void 0, " • "));
      }
      append(this.indicatorsContainerElement, indicatorsToShow[indicatorsToShow.length - 1].element);
      append(this.indicatorsContainerElement, $$4("span", void 0, ")"));
      this.resetIndicatorNavigationKeyBindings(indicatorsToShow);
    }
  }
  resetIndicatorNavigationKeyBindings(indicators) {
    this.keybindingListeners.clear();
    this.indicatorsContainerElement.role = indicators.length >= 1 ? "toolbar" : "button";
    if (!indicators.length) {
      return;
    }
    const firstElement = indicators[0].focusElement ?? indicators[0].element;
    firstElement.tabIndex = 0;
    this.keybindingListeners.add(addDisposableListener(this.indicatorsContainerElement, "keydown", (e) => {
      const ev = new StandardKeyboardEvent(e);
      let handled = true;
      if (ev.equals(14)) {
        this.focusIndicatorAt(indicators, 0);
      } else if (ev.equals(13)) {
        this.focusIndicatorAt(indicators, indicators.length - 1);
      } else if (ev.equals(17)) {
        const indexToFocus = (this.focusedIndex + 1) % indicators.length;
        this.focusIndicatorAt(indicators, indexToFocus);
      } else if (ev.equals(15)) {
        const indexToFocus = this.focusedIndex ? this.focusedIndex - 1 : indicators.length - 1;
        this.focusIndicatorAt(indicators, indexToFocus);
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        e.stopPropagation();
      }
    }));
  }
  focusIndicatorAt(indicators, index) {
    if (index === this.focusedIndex) {
      return;
    }
    const indicator = indicators[index];
    const elementToFocus = indicator.focusElement ?? indicator.element;
    elementToFocus.tabIndex = 0;
    elementToFocus.focus();
    const currentlyFocusedIndicator = indicators[this.focusedIndex];
    const previousFocusedElement = currentlyFocusedIndicator.focusElement ?? currentlyFocusedIndicator.element;
    previousFocusedElement.tabIndex = -1;
    this.focusedIndex = index;
  }
  updateWorkspaceTrust(element) {
    this.workspaceTrustIndicator.element.style.display = element.isUntrusted ? "inline" : "none";
    this.render();
  }
  updateSyncIgnored(element, ignoredSettings) {
    this.syncIgnoredIndicator.element.style.display = this.userDataSyncEnablementService.isEnabled() && ignoredSettings.includes(element.setting.key) ? "inline" : "none";
    this.render();
    if (cachedSyncIgnoredSettings !== ignoredSettings) {
      cachedSyncIgnoredSettings = ignoredSettings;
      cachedSyncIgnoredSettingsSet = new Set(cachedSyncIgnoredSettings);
    }
  }
  getInlineScopeDisplayText(completeScope) {
    const [scope, language] = completeScope.split(":");
    const localizedScope = scope === "user" ? localize("user", "User") : scope === "workspace" ? localize("workspace", "Workspace") : localize("remote", "Remote");
    if (language) {
      return `${this.languageService.getLanguageName(language)} > ${localizedScope}`;
    }
    return localizedScope;
  }
  dispose() {
    this.keybindingListeners.dispose();
    for (const indicator of this.allIndicators) {
      indicator.disposables.dispose();
    }
  }
  updateScopeOverrides(element, onDidClickOverrideElement, onApplyFilter) {
    this.scopeOverridesIndicator.element.innerText = "";
    this.scopeOverridesIndicator.element.style.display = "none";
    this.scopeOverridesIndicator.focusElement = this.scopeOverridesIndicator.element;
    if (element.hasPolicyValue) {
      this.scopeOverridesIndicator.element.style.display = "inline";
      this.scopeOverridesIndicator.element.classList.add("setting-indicator");
      this.scopeOverridesIndicator.label.text = "$(warning) " + localize("policyLabelText", "Setting value not applied");
      const content = localize(
        "policyDescription",
        "This setting is managed by your organization and its applied value cannot be changed."
      );
      const showHover = (focus) => {
        return this.hoverService.showHover({
          ...this.defaultHoverOptions,
          content,
          actions: [{
            label: localize("policyFilterLink", "View policy settings"),
            commandId: "_settings.action.viewPolicySettings",
            run: (_) => {
              onApplyFilter.fire(`@${POLICY_SETTING_TAG}`);
            }
          }],
          target: this.scopeOverridesIndicator.element
        }, focus);
      };
      this.addHoverDisposables(this.scopeOverridesIndicator.disposables, this.scopeOverridesIndicator.element, showHover);
    } else if (this.profilesEnabled && element.settingsTarget === 3 && this.configurationService.isSettingAppliedForAllProfiles(element.setting.key)) {
      this.scopeOverridesIndicator.element.style.display = "inline";
      this.scopeOverridesIndicator.element.classList.add("setting-indicator");
      this.scopeOverridesIndicator.label.text = localize("applicationSetting", "Applies to all profiles");
      const content = localize(
        "applicationSettingDescription",
        "The setting is not specific to the current profile, and will retain its value when switching profiles."
      );
      const showHover = (focus) => {
        return this.hoverService.showHover({
          ...this.defaultHoverOptions,
          content,
          target: this.scopeOverridesIndicator.element
        }, focus);
      };
      this.addHoverDisposables(this.scopeOverridesIndicator.disposables, this.scopeOverridesIndicator.element, showHover);
    } else if (element.overriddenScopeList.length || element.overriddenDefaultsLanguageList.length) {
      if (element.overriddenScopeList.length === 1 && !element.overriddenDefaultsLanguageList.length) {
        this.scopeOverridesIndicator.element.style.display = "inline";
        this.scopeOverridesIndicator.element.classList.remove("setting-indicator");
        this.scopeOverridesIndicator.disposables.clear();
        const prefaceText = element.isConfigured ? localize("alsoConfiguredIn", "Also modified in") : localize("configuredIn", "Modified in");
        this.scopeOverridesIndicator.label.text = `${prefaceText} `;
        const overriddenScope = element.overriddenScopeList[0];
        const view = append(this.scopeOverridesIndicator.element, $$4("a.modified-scope", void 0, this.getInlineScopeDisplayText(overriddenScope)));
        view.tabIndex = -1;
        this.scopeOverridesIndicator.focusElement = view;
        const onClickOrKeydown = (e) => {
          const [scope, language] = overriddenScope.split(":");
          onDidClickOverrideElement.fire({
            settingKey: element.setting.key,
            scope,
            language
          });
          e.preventDefault();
          e.stopPropagation();
        };
        this.scopeOverridesIndicator.disposables.add(addDisposableListener(view, EventType.CLICK, (e) => {
          onClickOrKeydown(e);
        }));
        this.scopeOverridesIndicator.disposables.add(addDisposableListener(view, EventType.KEY_DOWN, (e) => {
          const ev = new StandardKeyboardEvent(e);
          if (ev.equals(10) || ev.equals(3)) {
            onClickOrKeydown(e);
          }
        }));
      } else {
        this.scopeOverridesIndicator.element.style.display = "inline";
        this.scopeOverridesIndicator.element.classList.add("setting-indicator");
        const scopeOverridesLabelText = element.isConfigured ? localize("alsoConfiguredElsewhere", "Also modified elsewhere") : localize("configuredElsewhere", "Modified elsewhere");
        this.scopeOverridesIndicator.label.text = scopeOverridesLabelText;
        let contentMarkdownString = "";
        if (element.overriddenScopeList.length) {
          const prefaceText = element.isConfigured ? localize(
            "alsoModifiedInScopes",
            "The setting has also been modified in the following scopes:"
          ) : localize(
            "modifiedInScopes",
            "The setting has been modified in the following scopes:"
          );
          contentMarkdownString = prefaceText;
          for (const scope of element.overriddenScopeList) {
            const scopeDisplayText = this.getInlineScopeDisplayText(scope);
            contentMarkdownString += `
- [${scopeDisplayText}](${encodeURIComponent(scope)} "${getAccessibleScopeDisplayText(scope, this.languageService)}")`;
          }
        }
        if (element.overriddenDefaultsLanguageList.length) {
          if (contentMarkdownString) {
            contentMarkdownString += `

`;
          }
          const prefaceText = localize(
            "hasDefaultOverridesForLanguages",
            "The following languages have default overrides:"
          );
          contentMarkdownString += prefaceText;
          for (const language of element.overriddenDefaultsLanguageList) {
            const scopeDisplayText = this.languageService.getLanguageName(language);
            contentMarkdownString += `
- [${scopeDisplayText}](${encodeURIComponent(`default:${language}`)} "${scopeDisplayText}")`;
          }
        }
        const content = {
          value: contentMarkdownString,
          isTrusted: false,
          supportHtml: false
        };
        const showHover = (focus) => {
          return this.hoverService.showHover({
            ...this.defaultHoverOptions,
            content,
            linkHandler: (url) => {
              const [scope, language] = decodeURIComponent(url).split(":");
              onDidClickOverrideElement.fire({
                settingKey: element.setting.key,
                scope,
                language
              });
            },
            target: this.scopeOverridesIndicator.element
          }, focus);
        };
        this.addHoverDisposables(this.scopeOverridesIndicator.disposables, this.scopeOverridesIndicator.element, showHover);
      }
    }
    this.render();
  }
  updateDefaultOverrideIndicator(element) {
    this.defaultOverrideIndicator.element.style.display = "none";
    const sourceToDisplay = getDefaultValueSourceToDisplay(element);
    if (sourceToDisplay !== void 0) {
      this.defaultOverrideIndicator.element.style.display = "inline";
      this.defaultOverrideIndicator.disposables.clear();
      const defaultOverrideHoverContent = localize(
        "defaultOverriddenDetails",
        "Default setting value overridden by {0}",
        sourceToDisplay
      );
      const showHover = (focus) => {
        return this.hoverService.showHover({
          content: defaultOverrideHoverContent,
          target: this.defaultOverrideIndicator.element,
          hoverPosition: 2,
          showPointer: true,
          compact: false
        }, focus);
      };
      this.addHoverDisposables(this.defaultOverrideIndicator.disposables, this.defaultOverrideIndicator.element, showHover);
    }
    this.render();
  }
};
SettingsTreeIndicatorsLabel = __decorate([
  __param(1, IWorkbenchConfigurationService),
  __param(2, IHoverService),
  __param(3, IUserDataSyncEnablementService),
  __param(4, ILanguageService),
  __param(5, IUserDataProfilesService),
  __param(6, ICommandService)
], SettingsTreeIndicatorsLabel);
function getDefaultValueSourceToDisplay(element) {
  let sourceToDisplay;
  const defaultValueSource = element.defaultValueSource;
  if (defaultValueSource) {
    if (typeof defaultValueSource !== "string") {
      sourceToDisplay = defaultValueSource.displayName ?? defaultValueSource.id;
    } else if (typeof defaultValueSource === "string") {
      sourceToDisplay = defaultValueSource;
    }
  }
  return sourceToDisplay;
}
function getAccessibleScopeDisplayText(completeScope, languageService) {
  const [scope, language] = completeScope.split(":");
  const localizedScope = scope === "user" ? localize("user", "User") : scope === "workspace" ? localize("workspace", "Workspace") : localize("remote", "Remote");
  if (language) {
    return localize(
      "modifiedInScopeForLanguage",
      "The {0} scope for {1}",
      localizedScope,
      languageService.getLanguageName(language)
    );
  }
  return localizedScope;
}
function getAccessibleScopeDisplayMidSentenceText(completeScope, languageService) {
  const [scope, language] = completeScope.split(":");
  const localizedScope = scope === "user" ? localize("user", "User") : scope === "workspace" ? localize("workspace", "Workspace") : localize("remote", "Remote");
  if (language) {
    return localize(
      "modifiedInScopeForLanguageMidSentence",
      "the {0} scope for {1}",
      localizedScope.toLowerCase(),
      languageService.getLanguageName(language)
    );
  }
  return localizedScope;
}
function getIndicatorsLabelAriaLabel(element, configurationService, userDataProfilesService, languageService) {
  const ariaLabelSections = [];
  if (element.isUntrusted) {
    ariaLabelSections.push(localize(
      "workspaceUntrustedAriaLabel",
      "Workspace untrusted; setting value not applied"
    ));
  }
  if (element.hasPolicyValue) {
    ariaLabelSections.push(localize(
      "policyDescriptionAccessible",
      "Managed by organization policy; setting value not applied"
    ));
  } else if (userDataProfilesService.isEnabled() && element.settingsTarget === 3 && configurationService.isSettingAppliedForAllProfiles(element.setting.key)) {
    ariaLabelSections.push(localize(
      "applicationSettingDescriptionAccessible",
      "Setting value retained when switching profiles"
    ));
  } else {
    const otherOverridesStart = element.isConfigured ? localize("alsoConfiguredIn", "Also modified in") : localize("configuredIn", "Modified in");
    const otherOverridesList = element.overriddenScopeList.map((scope) => getAccessibleScopeDisplayMidSentenceText(scope, languageService)).join(", ");
    if (element.overriddenScopeList.length) {
      ariaLabelSections.push(`${otherOverridesStart} ${otherOverridesList}`);
    }
  }
  if (cachedSyncIgnoredSettingsSet.has(element.setting.key)) {
    ariaLabelSections.push(localize("syncIgnoredAriaLabel", "Setting ignored during sync"));
  }
  const sourceToDisplay = getDefaultValueSourceToDisplay(element);
  if (sourceToDisplay !== void 0) {
    ariaLabelSections.push(localize(
      "defaultOverriddenDetailsAriaLabel",
      "{0} overrides the default value",
      sourceToDisplay
    ));
  }
  const otherLanguageOverridesList = element.overriddenDefaultsLanguageList.map((language) => languageService.getLanguageName(language)).join(", ");
  if (element.overriddenDefaultsLanguageList.length) {
    const otherLanguageOverridesText = localize(
      "defaultOverriddenLanguagesList",
      "Language-specific default values exist for {0}",
      otherLanguageOverridesList
    );
    ariaLabelSections.push(otherLanguageOverridesText);
  }
  const ariaLabel = ariaLabelSections.join(". ");
  return ariaLabel;
}
class SettingsTreeElement extends Disposable {
  constructor(_id) {
    super();
    this._tabbable = false;
    this._onDidChangeTabbable = new Emitter();
    this.onDidChangeTabbable = this._onDidChangeTabbable.event;
    this.id = _id;
  }
  get tabbable() {
    return this._tabbable;
  }
  set tabbable(value) {
    this._tabbable = value;
    this._onDidChangeTabbable.fire();
  }
}
class SettingsTreeGroupElement extends SettingsTreeElement {
  get children() {
    return this._children;
  }
  set children(newChildren) {
    this._children = newChildren;
    this._childSettingKeys = /* @__PURE__ */ new Set();
    this._children.forEach((child) => {
      if (child instanceof SettingsTreeSettingElement) {
        this._childSettingKeys.add(child.setting.key);
      }
    });
  }
  constructor(_id, count, label, level, isFirstGroup) {
    super(_id);
    this._childSettingKeys = /* @__PURE__ */ new Set();
    this._children = [];
    this.count = count;
    this.label = label;
    this.level = level;
    this.isFirstGroup = isFirstGroup;
  }
  containsSetting(key) {
    return this._childSettingKeys.has(key);
  }
}
class SettingsTreeNewExtensionsElement extends SettingsTreeElement {
  constructor(_id, extensionIds) {
    super(_id);
    this.extensionIds = extensionIds;
  }
}
const _SettingsTreeSettingElement = class _SettingsTreeSettingElement extends SettingsTreeElement {
  constructor(setting, parent, inspectResult, isWorkspaceTrusted, settingsTarget, languageService, productService) {
    super(sanitizeId(parent.id + "_" + setting.key));
    this.settingsTarget = settingsTarget;
    this.languageService = languageService;
    this.productService = productService;
    this._displayCategory = null;
    this._displayLabel = null;
    this.isConfigured = false;
    this.isUntrusted = false;
    this.hasPolicyValue = false;
    this.overriddenScopeList = [];
    this.overriddenDefaultsLanguageList = [];
    this.languageOverrideValues = /* @__PURE__ */ new Map();
    this.setting = setting;
    this.parent = parent;
    this.update(inspectResult, isWorkspaceTrusted);
  }
  get displayCategory() {
    if (!this._displayCategory) {
      this.initLabels();
    }
    return this._displayCategory;
  }
  get displayLabel() {
    if (!this._displayLabel) {
      this.initLabels();
    }
    return this._displayLabel;
  }
  initLabels() {
    if (this.setting.title) {
      this._displayLabel = this.setting.title;
      this._displayCategory = "";
      return;
    }
    const displayKeyFormat = settingKeyToDisplayFormat(this.setting.key, this.parent.id, this.setting.isLanguageTagSetting);
    this._displayLabel = displayKeyFormat.label;
    this._displayCategory = displayKeyFormat.category;
  }
  update(inspectResult, isWorkspaceTrusted) {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
    let { isConfigured, inspected, targetSelector, inspectedLanguageOverrides, languageSelector } = inspectResult;
    switch (targetSelector) {
      case "workspaceFolderValue":
      case "workspaceValue":
        this.isUntrusted = !!this.setting.restricted && !isWorkspaceTrusted;
        break;
    }
    let displayValue = isConfigured ? inspected[targetSelector] : inspected.defaultValue;
    const overriddenScopeList = [];
    const overriddenDefaultsLanguageList = [];
    if ((languageSelector || targetSelector !== "workspaceValue") && typeof inspected.workspaceValue !== "undefined") {
      overriddenScopeList.push("workspace:");
    }
    if ((languageSelector || targetSelector !== "userRemoteValue") && typeof inspected.userRemoteValue !== "undefined") {
      overriddenScopeList.push("remote:");
    }
    if ((languageSelector || targetSelector !== "userLocalValue") && typeof inspected.userLocalValue !== "undefined") {
      overriddenScopeList.push("user:");
    }
    if (inspected.overrideIdentifiers) {
      for (const overrideIdentifier of inspected.overrideIdentifiers) {
        const inspectedOverride = inspectedLanguageOverrides.get(overrideIdentifier);
        if (inspectedOverride) {
          if (this.languageService.isRegisteredLanguageId(overrideIdentifier)) {
            if (languageSelector !== overrideIdentifier && typeof ((_a2 = inspectedOverride.default) == null ? void 0 : _a2.override) !== "undefined") {
              overriddenDefaultsLanguageList.push(overrideIdentifier);
            }
            if ((languageSelector !== overrideIdentifier || targetSelector !== "workspaceValue") && typeof ((_b2 = inspectedOverride.workspace) == null ? void 0 : _b2.override) !== "undefined") {
              overriddenScopeList.push(`workspace:${overrideIdentifier}`);
            }
            if ((languageSelector !== overrideIdentifier || targetSelector !== "userRemoteValue") && typeof ((_c2 = inspectedOverride.userRemote) == null ? void 0 : _c2.override) !== "undefined") {
              overriddenScopeList.push(`remote:${overrideIdentifier}`);
            }
            if ((languageSelector !== overrideIdentifier || targetSelector !== "userLocalValue") && typeof ((_d2 = inspectedOverride.userLocal) == null ? void 0 : _d2.override) !== "undefined") {
              overriddenScopeList.push(`user:${overrideIdentifier}`);
            }
          }
          this.languageOverrideValues.set(overrideIdentifier, inspectedOverride);
        }
      }
    }
    this.overriddenScopeList = overriddenScopeList;
    this.overriddenDefaultsLanguageList = overriddenDefaultsLanguageList;
    this.defaultValueSource = this.setting.nonLanguageSpecificDefaultValueSource;
    if (inspected.policyValue) {
      this.hasPolicyValue = true;
      isConfigured = false;
      displayValue = inspected.policyValue;
      this.scopeValue = inspected.policyValue;
      this.defaultValue = inspected.defaultValue;
    } else if (languageSelector && this.languageOverrideValues.has(languageSelector)) {
      const overrideValues = this.languageOverrideValues.get(languageSelector);
      displayValue = (isConfigured ? overrideValues[targetSelector] : overrideValues.defaultValue) ?? displayValue;
      this.scopeValue = isConfigured && overrideValues[targetSelector];
      this.defaultValue = overrideValues.defaultValue ?? inspected.defaultValue;
      const registryValues = Registry.as(Extensions.Configuration).getConfigurationDefaultsOverrides();
      const overrideValueSource = (_f2 = (_e2 = registryValues.get(`[${languageSelector}]`)) == null ? void 0 : _e2.valuesSources) == null ? void 0 : _f2.get(this.setting.key);
      if (overrideValueSource) {
        this.defaultValueSource = overrideValueSource;
      }
    } else {
      this.scopeValue = isConfigured && inspected[targetSelector];
      this.defaultValue = inspected.defaultValue;
    }
    this.value = displayValue;
    this.isConfigured = isConfigured;
    if (isConfigured || this.setting.tags || this.tags || this.setting.restricted || this.hasPolicyValue) {
      this.tags = /* @__PURE__ */ new Set();
      if (isConfigured) {
        this.tags.add(MODIFIED_SETTING_TAG);
      }
      (_g2 = this.setting.tags) == null ? void 0 : _g2.forEach((tag) => this.tags.add(tag));
      if (this.setting.restricted) {
        this.tags.add(REQUIRE_TRUSTED_WORKSPACE_SETTING_TAG);
      }
      if (this.hasPolicyValue) {
        this.tags.add(POLICY_SETTING_TAG);
      }
    }
    if (this.setting.description.length > _SettingsTreeSettingElement.MAX_DESC_LINES) {
      const truncatedDescLines = this.setting.description.slice(0, _SettingsTreeSettingElement.MAX_DESC_LINES);
      truncatedDescLines.push("[...]");
      this.description = truncatedDescLines.join("\n");
    } else {
      this.description = this.setting.description.join("\n");
    }
    if (isExtensionToggleSetting(this.setting, this.productService)) {
      this.valueType = SettingValueType.ExtensionToggle;
    } else if (this.setting.enum && (!this.setting.type || settingTypeEnumRenderable(this.setting.type))) {
      this.valueType = SettingValueType.Enum;
    } else if (this.setting.type === "string") {
      if (this.setting.editPresentation === EditPresentationTypes.Multiline) {
        this.valueType = SettingValueType.MultilineString;
      } else {
        this.valueType = SettingValueType.String;
      }
    } else if (isExcludeSetting(this.setting)) {
      this.valueType = SettingValueType.Exclude;
    } else if (isIncludeSetting(this.setting)) {
      this.valueType = SettingValueType.Include;
    } else if (this.setting.type === "integer") {
      this.valueType = SettingValueType.Integer;
    } else if (this.setting.type === "number") {
      this.valueType = SettingValueType.Number;
    } else if (this.setting.type === "boolean") {
      this.valueType = SettingValueType.Boolean;
    } else if (this.setting.type === "array" && this.setting.arrayItemType && ["string", "enum", "number", "integer"].includes(this.setting.arrayItemType)) {
      this.valueType = SettingValueType.Array;
    } else if (Array.isArray(this.setting.type) && this.setting.type.includes(SettingValueType.Null) && this.setting.type.length === 2) {
      if (this.setting.type.includes(SettingValueType.Integer)) {
        this.valueType = SettingValueType.NullableInteger;
      } else if (this.setting.type.includes(SettingValueType.Number)) {
        this.valueType = SettingValueType.NullableNumber;
      } else {
        this.valueType = SettingValueType.Complex;
      }
    } else if (isObjectSetting(this.setting)) {
      if (this.setting.allKeysAreBoolean) {
        this.valueType = SettingValueType.BooleanObject;
      } else {
        this.valueType = SettingValueType.Object;
      }
    } else if (this.setting.isLanguageTagSetting) {
      this.valueType = SettingValueType.LanguageTag;
    } else {
      this.valueType = SettingValueType.Complex;
    }
  }
  matchesAllTags(tagFilters) {
    if (!tagFilters || !tagFilters.size) {
      return true;
    }
    if (this.tags) {
      let hasFilteredTag = true;
      tagFilters.forEach((tag) => {
        hasFilteredTag = hasFilteredTag && this.tags.has(tag);
      });
      return hasFilteredTag;
    } else {
      return false;
    }
  }
  matchesScope(scope, isRemote) {
    const configTarget = URI.isUri(scope) ? 6 : scope;
    if (!this.setting.scope) {
      return true;
    }
    if (configTarget === 1) {
      return APPLICATION_SCOPES.includes(this.setting.scope);
    }
    if (configTarget === 6) {
      return FOLDER_SCOPES.includes(this.setting.scope);
    }
    if (configTarget === 5) {
      return WORKSPACE_SCOPES.includes(this.setting.scope);
    }
    if (configTarget === 4) {
      return REMOTE_MACHINE_SCOPES.includes(this.setting.scope);
    }
    if (configTarget === 3) {
      if (isRemote) {
        return LOCAL_MACHINE_SCOPES.includes(this.setting.scope);
      }
    }
    return true;
  }
  matchesAnyExtension(extensionFilters) {
    if (!extensionFilters || !extensionFilters.size) {
      return true;
    }
    if (!this.setting.extensionInfo) {
      return false;
    }
    return Array.from(extensionFilters).some(
      (extensionId) => extensionId.toLowerCase() === this.setting.extensionInfo.id.toLowerCase()
    );
  }
  matchesAnyFeature(featureFilters) {
    if (!featureFilters || !featureFilters.size) {
      return true;
    }
    const features = tocData.children.find((child) => child.id === "features");
    return Array.from(featureFilters).some((filter) => {
      var _a2;
      if (features && features.children) {
        const feature = features.children.find((feature2) => "features/" + filter === feature2.id);
        if (feature) {
          const patterns = (_a2 = feature.settings) == null ? void 0 : _a2.map((setting) => createSettingMatchRegExp$1(setting));
          return patterns && !this.setting.extensionInfo && patterns.some((pattern) => pattern.test(this.setting.key.toLowerCase()));
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
  }
  matchesAnyId(idFilters) {
    if (!idFilters || !idFilters.size) {
      return true;
    }
    return idFilters.has(this.setting.key);
  }
  matchesAllLanguages(languageFilter) {
    if (!languageFilter) {
      return true;
    }
    if (!this.languageService.isRegisteredLanguageId(languageFilter)) {
      return false;
    }
    if (this.setting.scope === 5) {
      return true;
    }
    return false;
  }
};
_SettingsTreeSettingElement.MAX_DESC_LINES = 20;
let SettingsTreeSettingElement = _SettingsTreeSettingElement;
function createSettingMatchRegExp$1(pattern) {
  pattern = escapeRegExpCharacters(pattern).replace(/\\\*/g, ".*");
  return new RegExp(`^${pattern}$`, "i");
}
let SettingsTreeModel = class SettingsTreeModel2 {
  constructor(_viewState, _isWorkspaceTrusted, _configurationService, _languageService, _userDataProfileService, _productService) {
    this._viewState = _viewState;
    this._isWorkspaceTrusted = _isWorkspaceTrusted;
    this._configurationService = _configurationService;
    this._languageService = _languageService;
    this._userDataProfileService = _userDataProfileService;
    this._productService = _productService;
    this._treeElementsBySettingName = /* @__PURE__ */ new Map();
  }
  get root() {
    return this._root;
  }
  update(newTocRoot = this._tocRoot) {
    this._treeElementsBySettingName.clear();
    const newRoot = this.createSettingsTreeGroupElement(newTocRoot);
    if (newRoot.children[0] instanceof SettingsTreeGroupElement) {
      newRoot.children[0].isFirstGroup = true;
    }
    if (this._root) {
      this.disposeChildren(this._root.children);
      this._root.children = newRoot.children;
    } else {
      this._root = newRoot;
    }
  }
  updateWorkspaceTrust(workspaceTrusted) {
    this._isWorkspaceTrusted = workspaceTrusted;
    this.updateRequireTrustedTargetElements();
  }
  disposeChildren(children) {
    for (const child of children) {
      this.recursiveDispose(child);
    }
  }
  recursiveDispose(element) {
    if (element instanceof SettingsTreeGroupElement) {
      this.disposeChildren(element.children);
    }
    element.dispose();
  }
  getElementsByName(name) {
    return withUndefinedAsNull(this._treeElementsBySettingName.get(name));
  }
  updateElementsByName(name) {
    if (!this._treeElementsBySettingName.has(name)) {
      return;
    }
    this.updateSettings(this._treeElementsBySettingName.get(name));
  }
  updateRequireTrustedTargetElements() {
    this.updateSettings([...this._treeElementsBySettingName.values()].flat().filter((s) => s.isUntrusted));
  }
  getTargetToInspect(setting) {
    if (!this._userDataProfileService.currentProfile.isDefault) {
      if (setting.scope === 1) {
        return 1;
      }
      if (this._configurationService.isSettingAppliedForAllProfiles(setting.key) && this._viewState.settingsTarget === 3) {
        return 1;
      }
    }
    return this._viewState.settingsTarget;
  }
  updateSettings(settings) {
    for (const element of settings) {
      const target = this.getTargetToInspect(element.setting);
      const inspectResult = inspectSetting(element.setting.key, target, this._viewState.languageFilter, this._configurationService);
      element.update(inspectResult, this._isWorkspaceTrusted);
    }
  }
  createSettingsTreeGroupElement(tocEntry, parent) {
    const depth = parent ? this.getDepth(parent) + 1 : 0;
    const element = new SettingsTreeGroupElement(tocEntry.id, void 0, tocEntry.label, depth, false);
    element.parent = parent;
    const children = [];
    if (tocEntry.settings) {
      const settingChildren = tocEntry.settings.map((s) => this.createSettingsTreeSettingElement(s, element)).filter((el) => el.setting.deprecationMessage ? el.isConfigured : true);
      children.push(...settingChildren);
    }
    if (tocEntry.children) {
      const groupChildren = tocEntry.children.map((child) => this.createSettingsTreeGroupElement(child, element));
      children.push(...groupChildren);
    }
    element.children = children;
    return element;
  }
  getDepth(element) {
    if (element.parent) {
      return 1 + this.getDepth(element.parent);
    } else {
      return 0;
    }
  }
  createSettingsTreeSettingElement(setting, parent) {
    const target = this.getTargetToInspect(setting);
    const inspectResult = inspectSetting(setting.key, target, this._viewState.languageFilter, this._configurationService);
    const element = new SettingsTreeSettingElement(
      setting,
      parent,
      inspectResult,
      this._isWorkspaceTrusted,
      this._viewState.settingsTarget,
      this._languageService,
      this._productService
    );
    const nameElements = this._treeElementsBySettingName.get(setting.key) || [];
    nameElements.push(element);
    this._treeElementsBySettingName.set(setting.key, nameElements);
    return element;
  }
};
SettingsTreeModel = __decorate([
  __param(2, IWorkbenchConfigurationService),
  __param(3, ILanguageService),
  __param(4, IUserDataProfileService),
  __param(5, IProductService)
], SettingsTreeModel);
function inspectSetting(key, target, languageFilter, configurationService) {
  var _a2;
  const inspectOverrides = URI.isUri(target) ? { resource: target } : void 0;
  const inspected = configurationService.inspect(key, inspectOverrides);
  const targetSelector = target === 1 ? "applicationValue" : target === 3 ? "userLocalValue" : target === 4 ? "userRemoteValue" : target === 5 ? "workspaceValue" : "workspaceFolderValue";
  const targetOverrideSelector = target === 1 ? "application" : target === 3 ? "userLocal" : target === 4 ? "userRemote" : target === 5 ? "workspace" : "workspaceFolder";
  let isConfigured = typeof inspected[targetSelector] !== "undefined";
  const overrideIdentifiers = inspected.overrideIdentifiers;
  const inspectedLanguageOverrides = /* @__PURE__ */ new Map();
  if (languageFilter) {
    isConfigured = false;
  }
  if (overrideIdentifiers) {
    for (const overrideIdentifier of overrideIdentifiers) {
      inspectedLanguageOverrides.set(overrideIdentifier, configurationService.inspect(key, { overrideIdentifier }));
    }
    if (languageFilter) {
      if (inspectedLanguageOverrides.has(languageFilter)) {
        const overrideValue = (_a2 = inspectedLanguageOverrides.get(languageFilter)[targetOverrideSelector]) == null ? void 0 : _a2.override;
        if (typeof overrideValue !== "undefined") {
          isConfigured = true;
        }
      }
    }
  }
  return { isConfigured, inspected, targetSelector, inspectedLanguageOverrides, languageSelector: languageFilter };
}
function sanitizeId(id) {
  return id.replace(/[\.\/]/, "_");
}
function settingKeyToDisplayFormat(key, groupId = "", isLanguageTagSetting = false) {
  const lastDotIdx = key.lastIndexOf(".");
  let category2 = "";
  if (lastDotIdx >= 0) {
    category2 = key.substring(0, lastDotIdx);
    key = key.substring(lastDotIdx + 1);
  }
  groupId = groupId.replace(/\//g, ".");
  category2 = trimCategoryForGroup(category2, groupId);
  category2 = wordifyKey(category2);
  if (isLanguageTagSetting) {
    key = key.replace(/[\[\]]/g, "");
    key = "$(bracket) " + key;
  }
  const label = wordifyKey(key);
  return { category: category2, label };
}
function wordifyKey(key) {
  key = key.replace(/\.([a-z0-9])/g, (_, p1) => ` › ${p1.toUpperCase()}`).replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/^[a-z]/g, (match) => match.toUpperCase()).replace(/\b\w+\b/g, (match) => {
    return knownAcronyms.has(match.toLowerCase()) ? match.toUpperCase() : match;
  });
  for (const [k, v] of knownTermMappings) {
    key = key.replace(new RegExp(`\\b${k}\\b`, "gi"), v);
  }
  return key;
}
function trimCategoryForGroup(category2, groupId) {
  const doTrim = (forward) => {
    if (!/insiders$/i.test(category2)) {
      groupId = groupId.replace(/-?insiders$/i, "");
    }
    const parts = groupId.split(".").map((part) => {
      if (part.replace(/-/g, "").toLowerCase() === category2.toLowerCase()) {
        return part.replace(/-/g, "");
      } else {
        return part;
      }
    });
    while (parts.length) {
      const reg = new RegExp(`^${parts.join("\\.")}(\\.|$)`, "i");
      if (reg.test(category2)) {
        return category2.replace(reg, "");
      }
      if (forward) {
        parts.pop();
      } else {
        parts.shift();
      }
    }
    return null;
  };
  let trimmed = doTrim(true);
  if (trimmed === null) {
    trimmed = doTrim(false);
  }
  if (trimmed === null) {
    trimmed = category2;
  }
  return trimmed;
}
function isExtensionToggleSetting(setting, productService) {
  return !!productService.extensionRecommendations && !!setting.displayExtensionId;
}
function isExcludeSetting(setting) {
  return setting.key === "files.exclude" || setting.key === "search.exclude" || setting.key === "workbench.localHistory.exclude" || setting.key === "explorer.autoRevealExclude" || setting.key === "files.readonlyExclude" || setting.key === "files.watcherExclude";
}
function isIncludeSetting(setting) {
  return setting.key === "files.readonlyInclude";
}
function isObjectRenderableSchema({ type }) {
  return type === "string" || type === "boolean" || type === "integer" || type === "number";
}
function isObjectSetting({ type, objectProperties, objectPatternProperties, objectAdditionalProperties }) {
  if (type !== "object") {
    return false;
  }
  if (isUndefinedOrNull(objectProperties) && isUndefinedOrNull(objectPatternProperties) && isUndefinedOrNull(objectAdditionalProperties)) {
    return false;
  }
  if ((objectAdditionalProperties === true || objectAdditionalProperties === void 0) && !Object.keys(objectPatternProperties ?? {}).includes(".*")) {
    return false;
  }
  const schemas = [...Object.values(objectProperties ?? {}), ...Object.values(objectPatternProperties ?? {})];
  if (objectAdditionalProperties && typeof objectAdditionalProperties === "object") {
    schemas.push(objectAdditionalProperties);
  }
  const flatSchemas = flatten(schemas.map((schema) => {
    if (Array.isArray(schema.anyOf)) {
      return schema.anyOf;
    }
    return [schema];
  }));
  return flatSchemas.every(isObjectRenderableSchema);
}
function settingTypeEnumRenderable(_type) {
  const enumRenderableSettingTypes = ["string", "boolean", "null", "integer", "number"];
  const type = Array.isArray(_type) ? _type : [_type];
  return type.every((type2) => enumRenderableSettingTypes.includes(type2));
}
let SearchResultModel = class SearchResultModel2 extends SettingsTreeModel {
  constructor(viewState, isWorkspaceTrusted, configurationService, environmentService, languageService, userDataProfileService, productService) {
    super(viewState, isWorkspaceTrusted, configurationService, languageService, userDataProfileService, productService);
    this.environmentService = environmentService;
    this.rawSearchResults = null;
    this.cachedUniqueSearchResults = null;
    this.newExtensionSearchResults = null;
    this.searchResultCount = null;
    this.id = "searchResultModel";
    this.update({ id: "searchResultModel", label: "" });
  }
  getUniqueResults() {
    if (this.cachedUniqueSearchResults) {
      return this.cachedUniqueSearchResults;
    }
    if (!this.rawSearchResults) {
      return [];
    }
    const localMatchKeys = /* @__PURE__ */ new Set();
    const localResult = this.rawSearchResults[0];
    localResult == null ? void 0 : localResult.filterMatches.forEach((m) => localMatchKeys.add(m.setting.key));
    const remoteResult = this.rawSearchResults[1];
    if (remoteResult) {
      remoteResult.filterMatches = remoteResult.filterMatches.filter((m) => !localMatchKeys.has(m.setting.key));
    }
    if (remoteResult) {
      this.newExtensionSearchResults = this.rawSearchResults[2];
    }
    this.cachedUniqueSearchResults = [localResult, remoteResult];
    return this.cachedUniqueSearchResults;
  }
  getRawResults() {
    return this.rawSearchResults || [];
  }
  setResult(order, result) {
    this.cachedUniqueSearchResults = null;
    this.newExtensionSearchResults = null;
    this.rawSearchResults = this.rawSearchResults || [];
    if (!result) {
      delete this.rawSearchResults[order];
      return;
    }
    if (result.exactMatch) {
      this.rawSearchResults = [];
    }
    this.rawSearchResults[order] = result;
    this.updateChildren();
  }
  updateChildren() {
    var _a2;
    this.update({
      id: "searchResultModel",
      label: "searchResultModel",
      settings: this.getFlatSettings()
    });
    const isRemote = !!this.environmentService.remoteAuthority;
    this.root.children = this.root.children.filter((child) => child instanceof SettingsTreeSettingElement && child.matchesAllTags(this._viewState.tagFilters) && child.matchesScope(this._viewState.settingsTarget, isRemote) && child.matchesAnyExtension(this._viewState.extensionFilters) && child.matchesAnyId(this._viewState.idFilters) && child.matchesAnyFeature(this._viewState.featureFilters) && child.matchesAllLanguages(this._viewState.languageFilter));
    this.searchResultCount = this.root.children.length;
    if ((_a2 = this.newExtensionSearchResults) == null ? void 0 : _a2.filterMatches.length) {
      let resultExtensionIds = this.newExtensionSearchResults.filterMatches.map((result) => result.setting).filter((setting) => setting.extensionName && setting.extensionPublisher).map((setting) => `${setting.extensionPublisher}.${setting.extensionName}`);
      resultExtensionIds = distinct(resultExtensionIds);
      if (resultExtensionIds.length) {
        const newExtElement = new SettingsTreeNewExtensionsElement("newExtensions", resultExtensionIds);
        newExtElement.parent = this._root;
        this._root.children.push(newExtElement);
      }
    }
  }
  getUniqueResultsCount() {
    return this.searchResultCount ?? 0;
  }
  getFlatSettings() {
    const flatSettings = [];
    coalesce(this.getUniqueResults()).forEach((r) => {
      flatSettings.push(...r.filterMatches.map((m) => m.setting));
    });
    return flatSettings;
  }
};
SearchResultModel = __decorate([
  __param(2, IWorkbenchConfigurationService),
  __param(3, IWorkbenchEnvironmentService),
  __param(4, ILanguageService),
  __param(5, IUserDataProfileService),
  __param(6, IProductService)
], SearchResultModel);
const tagRegex = /(^|\s)@tag:("([^"]*)"|[^"]\S*)/g;
const extensionRegex = /(^|\s)@ext:("([^"]*)"|[^"]\S*)?/g;
const featureRegex = /(^|\s)@feature:("([^"]*)"|[^"]\S*)?/g;
const idRegex = /(^|\s)@id:("([^"]*)"|[^"]\S*)?/g;
const languageRegex = /(^|\s)@lang:("([^"]*)"|[^"]\S*)?/g;
function parseQuery(query) {
  function getTagsForType(query2, filterRegex, parsedParts) {
    return query2.replace(filterRegex, (_, __, quotedParsedElement, unquotedParsedElement) => {
      const parsedElement = unquotedParsedElement || quotedParsedElement;
      if (parsedElement) {
        parsedParts.push(...parsedElement.split(",").map((s) => s.trim()).filter((s) => !isFalsyOrWhitespace(s)));
      }
      return "";
    });
  }
  const tags = [];
  query = query.replace(tagRegex, (_, __, quotedTag, tag) => {
    tags.push(tag || quotedTag);
    return "";
  });
  query = query.replace(`@${MODIFIED_SETTING_TAG}`, () => {
    tags.push(MODIFIED_SETTING_TAG);
    return "";
  });
  query = query.replace(`@${POLICY_SETTING_TAG}`, () => {
    tags.push(POLICY_SETTING_TAG);
    return "";
  });
  const extensions = [];
  const features = [];
  const ids = [];
  const langs = [];
  query = getTagsForType(query, extensionRegex, extensions);
  query = getTagsForType(query, featureRegex, features);
  query = getTagsForType(query, idRegex, ids);
  {
    query = getTagsForType(query, languageRegex, langs);
  }
  query = query.trim();
  return {
    tags,
    extensionFilters: extensions,
    featureFilters: features,
    idFilters: ids,
    languageFilter: langs.length ? langs[0] : void 0,
    query
  };
}
var css = ".settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-item-value>.setting-item-control{width:100%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-key,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-value{margin-left:2px;margin-right:3px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-key,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-sibling,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-value{overflow-wrap:normal;white-space:normal}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-value-checkbox{background-color:var(--vscode-settings-checkboxBackground)!important;border-color:var(--vscode-settings-checkboxBorder)!important;color:var(--vscode-settings-checkboxForeground)!important}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-list-object-input-key-checkbox{height:24px;margin-left:4px}.settings-editor>.settings-body .settings-tree-container .setting-item-bool .setting-list-object-input-key-checkbox .setting-value-checkbox{margin-top:3px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-item-bool .setting-list-object-value{cursor:pointer;width:100%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-key{margin-left:4px;width:40%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-input-key{margin-left:0;min-width:40%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-input-value,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value{width:100%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-row .setting-list-object-value,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-value{box-sizing:border-box;padding-right:40px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value{width:60%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-key,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-sibling,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-value{display:inline-block;line-height:24px;min-height:24px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-include-exclude-widget .setting-list-sibling,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-include-exclude-widget .setting-list-value{font-family:var(--monaco-monospace-font)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-sibling{font-size:.9em;margin-left:.5em;opacity:.7;white-space:pre}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row .monaco-action-bar{display:none;position:absolute;right:0;top:0}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row{display:flex}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row:hover{background-color:var(--vscode-list-hoverBackground);color:var(--vscode-list-hoverForeground)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.selected:focus{background-color:var(--vscode-list-activeSelectionBackground);color:var(--vscode-list-activeSelectionForeground)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.selected:not(:focus){background-color:var(--vscode-list-inactiveSelectionBackground);color:var(--vscode-list-inactiveSelectionForeground)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.draggable{cursor:pointer;user-select:none}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.drag-hover{background-color:var(--vscode-list-dropBackground)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.drag-hover *{pointer-events:none}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row-header{max-height:24px;position:relative}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row-header{font-weight:700}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-row,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-row-header{display:flex;padding-right:4px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-edit-row.setting-list-object-row:nth-child(odd):hover,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-row:nth-child(odd):not(:hover):not(:focus):not(.selected),.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-row-header{background-color:hsla(0,0%,51%,.04)}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row.selected .monaco-action-bar,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row:hover .monaco-action-bar{display:block}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row .monaco-action-bar .action-label{align-items:center;color:inherit;display:flex;height:20px;justify-content:center;margin-right:2px;padding:2px;width:16px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row .monaco-action-bar .setting-listAction-edit{margin-right:4px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .monaco-text-button{padding:2px 14px;white-space:nowrap;width:auto}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-item-control.setting-list-hide-add-button .setting-list-new-row{display:none}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .monaco-text-button.setting-list-addButton{display:inline-block;margin-right:4px;margin-top:4px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-edit-row,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-row{display:flex}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-input,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-siblingInput,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-valueInput{height:24px;margin-right:4px;max-width:320px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-input,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-valueInput.no-sibling{max-width:unset}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-valueInput.no-sibling{width:100%}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value-container .setting-list-object-input{margin-right:0}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-ok-button{margin:0 4px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-include-exclude-widget,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-widget{margin-bottom:1px;padding:1px}.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-input select,.settings-editor>.settings-body .settings-tree-container .setting-item.setting-item-list .setting-list-object-widget .setting-list-object-value-container{height:24px;width:100%}.settings-editor>.settings-body .settings-tree-container .setting-list-widget .setting-list-object-list-row.select-container{width:320px}.settings-editor>.settings-body .settings-tree-container .setting-list-widget .setting-list-object-list-row.select-container>select{width:inherit}";
n(css, {});
const $$3 = $$6;
class ListSettingListModel {
  get items() {
    const items = this._dataItems.map((item, i) => {
      const editing = typeof this._editKey === "number" && this._editKey === i;
      return {
        ...item,
        editing,
        selected: i === this._selectedIdx || editing
      };
    });
    if (this._editKey === "create") {
      items.push({
        editing: true,
        selected: true,
        ...this._newDataItem
      });
    }
    return items;
  }
  constructor(newItem) {
    this._dataItems = [];
    this._editKey = null;
    this._selectedIdx = null;
    this._newDataItem = newItem;
  }
  setEditKey(key) {
    this._editKey = key;
  }
  setValue(listData) {
    this._dataItems = listData;
  }
  select(idx) {
    this._selectedIdx = idx;
  }
  getSelected() {
    return this._selectedIdx;
  }
  selectNext() {
    if (typeof this._selectedIdx === "number") {
      this._selectedIdx = Math.min(this._selectedIdx + 1, this._dataItems.length - 1);
    } else {
      this._selectedIdx = 0;
    }
  }
  selectPrevious() {
    if (typeof this._selectedIdx === "number") {
      this._selectedIdx = Math.max(this._selectedIdx - 1, 0);
    } else {
      this._selectedIdx = 0;
    }
  }
}
let AbstractListSettingWidget = class AbstractListSettingWidget2 extends Disposable {
  get domNode() {
    return this.listElement;
  }
  get items() {
    return this.model.items;
  }
  get inReadMode() {
    return this.model.items.every((item) => !item.editing);
  }
  constructor(container, themeService, contextViewService) {
    super();
    this.container = container;
    this.themeService = themeService;
    this.contextViewService = contextViewService;
    this.rowElements = [];
    this._onDidChangeList = this._register(new Emitter());
    this.model = new ListSettingListModel(this.getEmptyItem());
    this.listDisposables = this._register(new DisposableStore());
    this.onDidChangeList = this._onDidChangeList.event;
    this.listElement = append(container, $$3("div"));
    this.listElement.setAttribute("role", "list");
    this.getContainerClasses().forEach((c) => this.listElement.classList.add(c));
    append(container, this.renderAddButton());
    this.renderList();
    this._register(addDisposableListener(this.listElement, EventType.POINTER_DOWN, (e) => this.onListClick(e)));
    this._register(addDisposableListener(this.listElement, EventType.DBLCLICK, (e) => this.onListDoubleClick(e)));
    this._register(addStandardDisposableListener(this.listElement, "keydown", (e) => {
      if (e.equals(16)) {
        this.selectPreviousRow();
      } else if (e.equals(18)) {
        this.selectNextRow();
      } else {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
    }));
  }
  setValue(listData) {
    this.model.setValue(listData);
    this.renderList();
  }
  renderHeader() {
    return;
  }
  isAddButtonVisible() {
    return true;
  }
  renderList() {
    const focused = isAncestor(document.activeElement, this.listElement);
    clearNode(this.listElement);
    this.listDisposables.clear();
    const newMode = this.model.items.some((item) => !!(item.editing && this.isItemNew(item)));
    this.container.classList.toggle("setting-list-hide-add-button", !this.isAddButtonVisible() || newMode);
    if (this.model.items.length) {
      this.listElement.tabIndex = 0;
    } else {
      this.listElement.removeAttribute("tabIndex");
    }
    const header = this.renderHeader();
    const ITEM_HEIGHT = 24;
    let listHeight = ITEM_HEIGHT * this.model.items.length;
    if (header) {
      listHeight += ITEM_HEIGHT;
      this.listElement.appendChild(header);
    }
    this.rowElements = this.model.items.map((item, i) => this.renderDataOrEditItem(item, i, focused));
    this.rowElements.forEach((rowElement) => this.listElement.appendChild(rowElement));
    this.listElement.style.height = listHeight + "px";
  }
  createBasicSelectBox(value) {
    const selectBoxOptions = value.options.map(({ value: value2, description }) => ({ text: value2, description }));
    const selected = value.options.findIndex((option) => value.data === option.value);
    const styles = getSelectBoxStyles({
      selectBackground: settingsSelectBackground,
      selectForeground: settingsSelectForeground,
      selectBorder: settingsSelectBorder,
      selectListBorder: settingsSelectListBorder
    });
    const selectBox = new SelectBox(selectBoxOptions, selected, this.contextViewService, styles, {
      useCustomDrawn: !(isIOS && BrowserFeatures.pointerEvents)
    });
    return selectBox;
  }
  editSetting(idx) {
    this.model.setEditKey(idx);
    this.renderList();
  }
  cancelEdit() {
    this.model.setEditKey("none");
    this.renderList();
  }
  handleItemChange(originalItem, changedItem, idx) {
    this.model.setEditKey("none");
    this._onDidChangeList.fire({
      originalItem,
      item: changedItem,
      targetIndex: idx
    });
    this.renderList();
  }
  renderDataOrEditItem(item, idx, listFocused) {
    const rowElement = item.editing ? this.renderEdit(item, idx) : this.renderDataItem(item, idx, listFocused);
    rowElement.setAttribute("role", "listitem");
    return rowElement;
  }
  renderDataItem(item, idx, listFocused) {
    const rowElementGroup = this.renderItem(item, idx);
    const rowElement = rowElementGroup.rowElement;
    rowElement.setAttribute("data-index", idx + "");
    rowElement.setAttribute("tabindex", item.selected ? "0" : "-1");
    rowElement.classList.toggle("selected", item.selected);
    const actionBar = new ActionBar(rowElement);
    this.listDisposables.add(actionBar);
    actionBar.push(this.getActionsForItem(item, idx), { icon: true, label: true });
    this.addTooltipsToRow(rowElementGroup, item);
    if (item.selected && listFocused) {
      this.listDisposables.add(disposableTimeout(() => rowElement.focus()));
    }
    this.listDisposables.add(addDisposableListener(rowElement, "click", (e) => {
      e.stopPropagation();
    }));
    return rowElement;
  }
  renderAddButton() {
    const rowElement = $$3(".setting-list-new-row");
    const startAddButton = this._register(new Button(rowElement, defaultButtonStyles));
    startAddButton.label = this.getLocalizedStrings().addButtonLabel;
    startAddButton.element.classList.add("setting-list-addButton");
    this._register(startAddButton.onDidClick(() => {
      this.model.setEditKey("create");
      this.renderList();
    }));
    return rowElement;
  }
  onListClick(e) {
    const targetIdx = this.getClickedItemIndex(e);
    if (targetIdx < 0) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
    if (this.model.getSelected() === targetIdx) {
      return;
    }
    this.selectRow(targetIdx);
  }
  onListDoubleClick(e) {
    const targetIdx = this.getClickedItemIndex(e);
    if (targetIdx < 0) {
      return;
    }
    const item = this.model.items[targetIdx];
    if (item) {
      this.editSetting(targetIdx);
      e.preventDefault();
      e.stopPropagation();
    }
  }
  getClickedItemIndex(e) {
    if (!e.target) {
      return -1;
    }
    const actionbar = findParentWithClass(e.target, "monaco-action-bar");
    if (actionbar) {
      return -1;
    }
    const element = findParentWithClass(e.target, "setting-list-row");
    if (!element) {
      return -1;
    }
    const targetIdxStr = element.getAttribute("data-index");
    if (!targetIdxStr) {
      return -1;
    }
    const targetIdx = parseInt(targetIdxStr);
    return targetIdx;
  }
  selectRow(idx) {
    this.model.select(idx);
    this.rowElements.forEach((row) => row.classList.remove("selected"));
    const selectedRow = this.rowElements[this.model.getSelected()];
    selectedRow.classList.add("selected");
    selectedRow.focus();
  }
  selectNextRow() {
    this.model.selectNext();
    this.selectRow(this.model.getSelected());
  }
  selectPreviousRow() {
    this.model.selectPrevious();
    this.selectRow(this.model.getSelected());
  }
};
AbstractListSettingWidget = __decorate([
  __param(1, IThemeService),
  __param(2, IContextViewService)
], AbstractListSettingWidget);
class ListSettingWidget extends AbstractListSettingWidget {
  constructor() {
    super(...arguments);
    this.showAddButton = true;
  }
  setValue(listData, options) {
    this.keyValueSuggester = options == null ? void 0 : options.keySuggester;
    this.showAddButton = (options == null ? void 0 : options.showAddButton) ?? true;
    super.setValue(listData);
  }
  getEmptyItem() {
    return {
      value: {
        type: "string",
        data: ""
      }
    };
  }
  isAddButtonVisible() {
    return this.showAddButton;
  }
  getContainerClasses() {
    return ["setting-list-widget"];
  }
  getActionsForItem(item, idx) {
    return [
      {
        class: ThemeIcon.asClassName(settingsEditIcon),
        enabled: true,
        id: "workbench.action.editListItem",
        tooltip: this.getLocalizedStrings().editActionTooltip,
        run: () => this.editSetting(idx)
      },
      {
        class: ThemeIcon.asClassName(settingsRemoveIcon),
        enabled: true,
        id: "workbench.action.removeListItem",
        tooltip: this.getLocalizedStrings().deleteActionTooltip,
        run: () => this._onDidChangeList.fire({ originalItem: item, item: void 0, targetIndex: idx })
      }
    ];
  }
  getDragImage(item) {
    const dragImage = $$3(".monaco-drag-image");
    dragImage.textContent = item.value.data;
    return dragImage;
  }
  renderItem(item, idx) {
    const rowElement = $$3(".setting-list-row");
    const valueElement = append(rowElement, $$3(".setting-list-value"));
    const siblingElement = append(rowElement, $$3(".setting-list-sibling"));
    valueElement.textContent = item.value.data.toString();
    siblingElement.textContent = item.sibling ? `when: ${item.sibling}` : null;
    this.addDragAndDrop(rowElement, item, idx);
    return { rowElement, keyElement: valueElement, valueElement: siblingElement };
  }
  addDragAndDrop(rowElement, item, idx) {
    if (this.inReadMode) {
      rowElement.draggable = true;
      rowElement.classList.add("draggable");
    } else {
      rowElement.draggable = false;
      rowElement.classList.remove("draggable");
    }
    this.listDisposables.add(addDisposableListener(rowElement, EventType.DRAG_START, (ev) => {
      this.dragDetails = {
        element: rowElement,
        item,
        itemIndex: idx
      };
      if (ev.dataTransfer) {
        ev.dataTransfer.dropEffect = "move";
        const dragImage = this.getDragImage(item);
        document.body.appendChild(dragImage);
        ev.dataTransfer.setDragImage(dragImage, -10, -10);
        setTimeout(() => document.body.removeChild(dragImage), 0);
      }
    }));
    this.listDisposables.add(addDisposableListener(rowElement, EventType.DRAG_OVER, (ev) => {
      if (!this.dragDetails) {
        return false;
      }
      ev.preventDefault();
      if (ev.dataTransfer) {
        ev.dataTransfer.dropEffect = "move";
      }
      return true;
    }));
    let counter = 0;
    this.listDisposables.add(addDisposableListener(rowElement, EventType.DRAG_ENTER, (ev) => {
      counter++;
      rowElement.classList.add("drag-hover");
    }));
    this.listDisposables.add(addDisposableListener(rowElement, EventType.DRAG_LEAVE, (ev) => {
      counter--;
      if (!counter) {
        rowElement.classList.remove("drag-hover");
      }
    }));
    this.listDisposables.add(addDisposableListener(rowElement, EventType.DROP, (ev) => {
      if (!this.dragDetails) {
        return false;
      }
      ev.preventDefault();
      counter = 0;
      if (this.dragDetails.element !== rowElement) {
        this._onDidChangeList.fire({
          originalItem: this.dragDetails.item,
          sourceIndex: this.dragDetails.itemIndex,
          item,
          targetIndex: idx
        });
      }
      return true;
    }));
    this.listDisposables.add(addDisposableListener(rowElement, EventType.DRAG_END, (ev) => {
      var _a2;
      counter = 0;
      rowElement.classList.remove("drag-hover");
      (_a2 = ev.dataTransfer) == null ? void 0 : _a2.clearData();
      if (this.dragDetails) {
        this.dragDetails = void 0;
      }
    }));
  }
  renderEdit(item, idx) {
    const rowElement = $$3(".setting-list-edit-row");
    let valueInput;
    let currentDisplayValue;
    let currentEnumOptions;
    if (this.keyValueSuggester) {
      const enumData = this.keyValueSuggester(this.model.items.map(({ value: { data } }) => data), idx);
      item = {
        ...item,
        value: {
          type: "enum",
          data: item.value.data,
          options: enumData ? enumData.options : []
        }
      };
    }
    switch (item.value.type) {
      case "string":
        valueInput = this.renderInputBox(item.value, rowElement);
        break;
      case "enum":
        valueInput = this.renderDropdown(item.value, rowElement);
        currentEnumOptions = item.value.options;
        if (item.value.options.length) {
          currentDisplayValue = this.isItemNew(item) ? currentEnumOptions[0].value : item.value.data;
        }
        break;
    }
    const updatedInputBoxItem = () => {
      const inputBox = valueInput;
      return {
        value: {
          type: "string",
          data: inputBox.value
        },
        sibling: siblingInput == null ? void 0 : siblingInput.value
      };
    };
    const updatedSelectBoxItem = (selectedValue) => {
      return {
        value: {
          type: "enum",
          data: selectedValue,
          options: currentEnumOptions ?? []
        }
      };
    };
    const onKeyDown = (e) => {
      if (e.equals(3)) {
        this.handleItemChange(item, updatedInputBoxItem(), idx);
      } else if (e.equals(9)) {
        this.cancelEdit();
        e.preventDefault();
      }
      rowElement == null ? void 0 : rowElement.focus();
    };
    if (item.value.type !== "string") {
      const selectBox = valueInput;
      this.listDisposables.add(selectBox.onDidSelect(({ selected }) => {
        currentDisplayValue = selected;
      }));
    } else {
      const inputBox = valueInput;
      this.listDisposables.add(addStandardDisposableListener(inputBox.inputElement, EventType.KEY_DOWN, onKeyDown));
    }
    let siblingInput;
    if (!isUndefinedOrNull(item.sibling)) {
      siblingInput = new InputBox(rowElement, this.contextViewService, {
        placeholder: this.getLocalizedStrings().siblingInputPlaceholder,
        inputBoxStyles: getInputBoxStyle({
          inputBackground: settingsTextInputBackground,
          inputForeground: settingsTextInputForeground,
          inputBorder: settingsTextInputBorder
        })
      });
      siblingInput.element.classList.add("setting-list-siblingInput");
      this.listDisposables.add(siblingInput);
      siblingInput.value = item.sibling;
      this.listDisposables.add(addStandardDisposableListener(siblingInput.inputElement, EventType.KEY_DOWN, onKeyDown));
    } else if (valueInput instanceof InputBox) {
      valueInput.element.classList.add("no-sibling");
    }
    const okButton = this._register(new Button(rowElement, defaultButtonStyles));
    okButton.label = localize("okButton", "OK");
    okButton.element.classList.add("setting-list-ok-button");
    this.listDisposables.add(okButton.onDidClick(() => {
      if (item.value.type === "string") {
        this.handleItemChange(item, updatedInputBoxItem(), idx);
      } else {
        this.handleItemChange(item, updatedSelectBoxItem(currentDisplayValue), idx);
      }
    }));
    const cancelButton = this._register(new Button(rowElement, { secondary: true, ...defaultButtonStyles }));
    cancelButton.label = localize("cancelButton", "Cancel");
    cancelButton.element.classList.add("setting-list-cancel-button");
    this.listDisposables.add(cancelButton.onDidClick(() => this.cancelEdit()));
    this.listDisposables.add(disposableTimeout(() => {
      valueInput.focus();
      if (valueInput instanceof InputBox) {
        valueInput.select();
      }
    }));
    return rowElement;
  }
  isItemNew(item) {
    return item.value.data === "";
  }
  addTooltipsToRow(rowElementGroup, { value, sibling }) {
    const title = isUndefinedOrNull(sibling) ? localize("listValueHintLabel", "List item `{0}`", value.data) : localize(
      "listSiblingHintLabel",
      "List item `{0}` with sibling `${1}`",
      value.data,
      sibling
    );
    const { rowElement } = rowElementGroup;
    rowElement.title = title;
    rowElement.setAttribute("aria-label", rowElement.title);
  }
  getLocalizedStrings() {
    return {
      deleteActionTooltip: localize("removeItem", "Remove Item"),
      editActionTooltip: localize("editItem", "Edit Item"),
      addButtonLabel: localize("addItem", "Add Item"),
      inputPlaceholder: localize("itemInputPlaceholder", "Item..."),
      siblingInputPlaceholder: localize("listSiblingInputPlaceholder", "Sibling...")
    };
  }
  renderInputBox(value, rowElement) {
    const valueInput = new InputBox(rowElement, this.contextViewService, {
      placeholder: this.getLocalizedStrings().inputPlaceholder,
      inputBoxStyles: getInputBoxStyle({
        inputBackground: settingsTextInputBackground,
        inputForeground: settingsTextInputForeground,
        inputBorder: settingsTextInputBorder
      })
    });
    valueInput.element.classList.add("setting-list-valueInput");
    this.listDisposables.add(valueInput);
    valueInput.value = value.data.toString();
    return valueInput;
  }
  renderDropdown(value, rowElement) {
    if (value.type !== "enum") {
      throw new Error("Valuetype must be enum.");
    }
    const selectBox = this.createBasicSelectBox(value);
    const wrapper = $$3(".setting-list-object-list-row");
    selectBox.render(wrapper);
    rowElement.appendChild(wrapper);
    return selectBox;
  }
}
class ExcludeSettingWidget extends ListSettingWidget {
  getContainerClasses() {
    return ["setting-list-include-exclude-widget"];
  }
  addDragAndDrop(rowElement, item, idx) {
    return;
  }
  addTooltipsToRow(rowElementGroup, { value, sibling }) {
    const title = isUndefinedOrNull(sibling) ? localize("excludePatternHintLabel", "Exclude files matching `{0}`", value.data) : localize(
      "excludeSiblingHintLabel",
      "Exclude files matching `{0}`, only when a file matching `{1}` is present",
      value.data,
      sibling
    );
    const { rowElement } = rowElementGroup;
    rowElement.title = title;
    rowElement.setAttribute("aria-label", rowElement.title);
  }
  getLocalizedStrings() {
    return {
      deleteActionTooltip: localize("removeExcludeItem", "Remove Exclude Item"),
      editActionTooltip: localize("editExcludeItem", "Edit Exclude Item"),
      addButtonLabel: localize("addPattern", "Add Pattern"),
      inputPlaceholder: localize("excludePatternInputPlaceholder", "Exclude Pattern..."),
      siblingInputPlaceholder: localize("excludeSiblingInputPlaceholder", "When Pattern Is Present...")
    };
  }
}
class IncludeSettingWidget extends ListSettingWidget {
  getContainerClasses() {
    return ["setting-list-include-exclude-widget"];
  }
  addDragAndDrop(rowElement, item, idx) {
    return;
  }
  addTooltipsToRow(rowElementGroup, { value, sibling }) {
    const title = isUndefinedOrNull(sibling) ? localize("includePatternHintLabel", "Include files matching `{0}`", value.data) : localize(
      "includeSiblingHintLabel",
      "Include files matching `{0}`, only when a file matching `{1}` is present",
      value.data,
      sibling
    );
    const { rowElement } = rowElementGroup;
    rowElement.title = title;
    rowElement.setAttribute("aria-label", rowElement.title);
  }
  getLocalizedStrings() {
    return {
      deleteActionTooltip: localize("removeIncludeItem", "Remove Include Item"),
      editActionTooltip: localize("editIncludeItem", "Edit Include Item"),
      addButtonLabel: localize("addPattern", "Add Pattern"),
      inputPlaceholder: localize("includePatternInputPlaceholder", "Include Pattern..."),
      siblingInputPlaceholder: localize("includeSiblingInputPlaceholder", "When Pattern Is Present...")
    };
  }
}
class ObjectSettingDropdownWidget extends AbstractListSettingWidget {
  constructor() {
    super(...arguments);
    this.currentSettingKey = "";
    this.showAddButton = true;
    this.keySuggester = () => void 0;
    this.valueSuggester = () => void 0;
  }
  setValue(listData, options) {
    this.showAddButton = (options == null ? void 0 : options.showAddButton) ?? this.showAddButton;
    this.keySuggester = (options == null ? void 0 : options.keySuggester) ?? this.keySuggester;
    this.valueSuggester = (options == null ? void 0 : options.valueSuggester) ?? this.valueSuggester;
    if (isDefined(options) && options.settingKey !== this.currentSettingKey) {
      this.model.setEditKey("none");
      this.model.select(null);
      this.currentSettingKey = options.settingKey;
    }
    super.setValue(listData);
  }
  isItemNew(item) {
    return item.key.data === "" && item.value.data === "";
  }
  isAddButtonVisible() {
    return this.showAddButton;
  }
  getEmptyItem() {
    return {
      key: { type: "string", data: "" },
      value: { type: "string", data: "" },
      removable: true
    };
  }
  getContainerClasses() {
    return ["setting-list-object-widget"];
  }
  getActionsForItem(item, idx) {
    const actions = [
      {
        class: ThemeIcon.asClassName(settingsEditIcon),
        enabled: true,
        id: "workbench.action.editListItem",
        tooltip: this.getLocalizedStrings().editActionTooltip,
        run: () => this.editSetting(idx)
      }
    ];
    if (item.removable) {
      actions.push({
        class: ThemeIcon.asClassName(settingsRemoveIcon),
        enabled: true,
        id: "workbench.action.removeListItem",
        tooltip: this.getLocalizedStrings().deleteActionTooltip,
        run: () => this._onDidChangeList.fire({ originalItem: item, item: void 0, targetIndex: idx })
      });
    } else {
      actions.push({
        class: ThemeIcon.asClassName(settingsDiscardIcon),
        enabled: true,
        id: "workbench.action.resetListItem",
        tooltip: this.getLocalizedStrings().resetActionTooltip,
        run: () => this._onDidChangeList.fire({ originalItem: item, item: void 0, targetIndex: idx })
      });
    }
    return actions;
  }
  renderHeader() {
    const header = $$3(".setting-list-row-header");
    const keyHeader = append(header, $$3(".setting-list-object-key"));
    const valueHeader = append(header, $$3(".setting-list-object-value"));
    const { keyHeaderText, valueHeaderText } = this.getLocalizedStrings();
    keyHeader.textContent = keyHeaderText;
    valueHeader.textContent = valueHeaderText;
    return header;
  }
  renderItem(item, idx) {
    const rowElement = $$3(".setting-list-row");
    rowElement.classList.add("setting-list-object-row");
    const keyElement = append(rowElement, $$3(".setting-list-object-key"));
    const valueElement = append(rowElement, $$3(".setting-list-object-value"));
    keyElement.textContent = item.key.data;
    valueElement.textContent = item.value.data.toString();
    return { rowElement, keyElement, valueElement };
  }
  renderEdit(item, idx) {
    const rowElement = $$3(".setting-list-edit-row.setting-list-object-row");
    const changedItem = { ...item };
    const onKeyChange = (key) => {
      changedItem.key = key;
      okButton.enabled = key.data !== "";
      const suggestedValue = this.valueSuggester(key.data) ?? item.value;
      if (this.shouldUseSuggestion(item.value, changedItem.value, suggestedValue)) {
        onValueChange(suggestedValue);
        renderLatestValue();
      }
    };
    const onValueChange = (value) => {
      changedItem.value = value;
    };
    let keyWidget;
    let keyElement;
    if (this.showAddButton) {
      if (this.isItemNew(item)) {
        const suggestedKey = this.keySuggester(this.model.items.map(({ key: { data } }) => data));
        if (isDefined(suggestedKey)) {
          changedItem.key = suggestedKey;
          const suggestedValue = this.valueSuggester(changedItem.key.data);
          onValueChange(suggestedValue ?? changedItem.value);
        }
      }
      const { widget, element } = this.renderEditWidget(changedItem.key, {
        idx,
        isKey: true,
        originalItem: item,
        changedItem,
        update: onKeyChange
      });
      keyWidget = widget;
      keyElement = element;
    } else {
      keyElement = $$3(".setting-list-object-key");
      keyElement.textContent = item.key.data;
    }
    let valueWidget;
    const valueContainer = $$3(".setting-list-object-value-container");
    const renderLatestValue = () => {
      const { widget, element } = this.renderEditWidget(changedItem.value, {
        idx,
        isKey: false,
        originalItem: item,
        changedItem,
        update: onValueChange
      });
      valueWidget = widget;
      clearNode(valueContainer);
      valueContainer.append(element);
    };
    renderLatestValue();
    rowElement.append(keyElement, valueContainer);
    const okButton = this._register(new Button(rowElement, defaultButtonStyles));
    okButton.enabled = changedItem.key.data !== "";
    okButton.label = localize("okButton", "OK");
    okButton.element.classList.add("setting-list-ok-button");
    this.listDisposables.add(okButton.onDidClick(() => this.handleItemChange(item, changedItem, idx)));
    const cancelButton = this._register(new Button(rowElement, { secondary: true, ...defaultButtonStyles }));
    cancelButton.label = localize("cancelButton", "Cancel");
    cancelButton.element.classList.add("setting-list-cancel-button");
    this.listDisposables.add(cancelButton.onDidClick(() => this.cancelEdit()));
    this.listDisposables.add(disposableTimeout(() => {
      const widget = keyWidget ?? valueWidget;
      widget.focus();
      if (widget instanceof InputBox) {
        widget.select();
      }
    }));
    return rowElement;
  }
  renderEditWidget(keyOrValue, options) {
    switch (keyOrValue.type) {
      case "string":
        return this.renderStringEditWidget(keyOrValue, options);
      case "enum":
        return this.renderEnumEditWidget(keyOrValue, options);
      case "boolean":
        return this.renderEnumEditWidget({
          type: "enum",
          data: keyOrValue.data.toString(),
          options: [{ value: "true" }, { value: "false" }]
        }, options);
    }
  }
  renderStringEditWidget(keyOrValue, { idx, isKey, originalItem, changedItem, update }) {
    const wrapper = $$3(isKey ? ".setting-list-object-input-key" : ".setting-list-object-input-value");
    const inputBox = new InputBox(wrapper, this.contextViewService, {
      placeholder: isKey ? localize("objectKeyInputPlaceholder", "Key") : localize("objectValueInputPlaceholder", "Value"),
      inputBoxStyles: getInputBoxStyle({
        inputBackground: settingsTextInputBackground,
        inputForeground: settingsTextInputForeground,
        inputBorder: settingsTextInputBorder
      })
    });
    inputBox.element.classList.add("setting-list-object-input");
    this.listDisposables.add(inputBox);
    inputBox.value = keyOrValue.data;
    this.listDisposables.add(inputBox.onDidChange((value) => update({ ...keyOrValue, data: value })));
    const onKeyDown = (e) => {
      if (e.equals(3)) {
        this.handleItemChange(originalItem, changedItem, idx);
      } else if (e.equals(9)) {
        this.cancelEdit();
        e.preventDefault();
      }
    };
    this.listDisposables.add(addStandardDisposableListener(inputBox.inputElement, EventType.KEY_DOWN, onKeyDown));
    return { widget: inputBox, element: wrapper };
  }
  renderEnumEditWidget(keyOrValue, { isKey, changedItem, update }) {
    const selectBox = this.createBasicSelectBox(keyOrValue);
    const changedKeyOrValue = isKey ? changedItem.key : changedItem.value;
    this.listDisposables.add(selectBox.onDidSelect(({ selected: selected2 }) => update(changedKeyOrValue.type === "boolean" ? { ...changedKeyOrValue, data: selected2 === "true" ? true : false } : { ...changedKeyOrValue, data: selected2 })));
    const wrapper = $$3(".setting-list-object-input");
    wrapper.classList.add(isKey ? "setting-list-object-input-key" : "setting-list-object-input-value");
    selectBox.render(wrapper);
    const selected = keyOrValue.options.findIndex((option) => keyOrValue.data === option.value);
    if (selected === -1 && keyOrValue.options.length) {
      update(changedKeyOrValue.type === "boolean" ? { ...changedKeyOrValue, data: true } : { ...changedKeyOrValue, data: keyOrValue.options[0].value });
    } else if (changedKeyOrValue.type === "boolean") {
      update({ ...changedKeyOrValue, data: keyOrValue.data === "true" });
    }
    return { widget: selectBox, element: wrapper };
  }
  shouldUseSuggestion(originalValue, previousValue, newValue) {
    if (newValue.type !== "enum" && newValue.type === previousValue.type && newValue.data === previousValue.data) {
      return false;
    }
    if (originalValue.data === "") {
      return true;
    }
    if (previousValue.type === newValue.type && newValue.type !== "enum") {
      return false;
    }
    if (previousValue.type === "enum" && newValue.type === "enum") {
      const previousEnums = new Set(previousValue.options.map(({ value }) => value));
      newValue.options.forEach(({ value }) => previousEnums.delete(value));
      if (previousEnums.size === 0) {
        return false;
      }
    }
    return true;
  }
  addTooltipsToRow(rowElementGroup, item) {
    const { keyElement, valueElement, rowElement } = rowElementGroup;
    const accessibleDescription = localize(
      "objectPairHintLabel",
      "The property `{0}` is set to `{1}`.",
      item.key.data,
      item.value.data
    );
    const keyDescription = this.getEnumDescription(item.key) ?? item.keyDescription ?? accessibleDescription;
    keyElement.title = keyDescription;
    const valueDescription = this.getEnumDescription(item.value) ?? accessibleDescription;
    valueElement.title = valueDescription;
    rowElement.setAttribute("aria-label", accessibleDescription);
  }
  getEnumDescription(keyOrValue) {
    var _a2;
    const enumDescription = keyOrValue.type === "enum" ? (_a2 = keyOrValue.options.find(({ value }) => keyOrValue.data === value)) == null ? void 0 : _a2.description : void 0;
    return enumDescription;
  }
  getLocalizedStrings() {
    return {
      deleteActionTooltip: localize("removeItem", "Remove Item"),
      resetActionTooltip: localize("resetItem", "Reset Item"),
      editActionTooltip: localize("editItem", "Edit Item"),
      addButtonLabel: localize("addItem", "Add Item"),
      keyHeaderText: localize("objectKeyHeader", "Item"),
      valueHeaderText: localize("objectValueHeader", "Value")
    };
  }
}
class ObjectSettingCheckboxWidget extends AbstractListSettingWidget {
  constructor() {
    super(...arguments);
    this.currentSettingKey = "";
  }
  setValue(listData, options) {
    if (isDefined(options) && options.settingKey !== this.currentSettingKey) {
      this.model.setEditKey("none");
      this.model.select(null);
      this.currentSettingKey = options.settingKey;
    }
    super.setValue(listData);
  }
  isItemNew(item) {
    return !item.key.data && !item.value.data;
  }
  getEmptyItem() {
    return {
      key: { type: "string", data: "" },
      value: { type: "boolean", data: false },
      removable: false
    };
  }
  getContainerClasses() {
    return ["setting-list-object-widget"];
  }
  getActionsForItem(item, idx) {
    return [];
  }
  isAddButtonVisible() {
    return false;
  }
  renderHeader() {
    return void 0;
  }
  renderDataOrEditItem(item, idx, listFocused) {
    const rowElement = this.renderEdit(item, idx);
    rowElement.setAttribute("role", "listitem");
    return rowElement;
  }
  renderItem(item, idx) {
    const rowElement = $$3(".blank-row");
    const keyElement = $$3(".blank-row-key");
    return { rowElement, keyElement };
  }
  renderEdit(item, idx) {
    const rowElement = $$3(".setting-list-edit-row.setting-list-object-row.setting-item-bool");
    const changedItem = { ...item };
    const onValueChange = (newValue) => {
      changedItem.value.data = newValue;
      this.handleItemChange(item, changedItem, idx);
    };
    const checkboxDescription = item.keyDescription ? `${item.keyDescription} (${item.key.data})` : item.key.data;
    const { element, widget: checkbox } = this.renderEditWidget(changedItem.value.data, checkboxDescription, onValueChange);
    rowElement.appendChild(element);
    const valueElement = append(rowElement, $$3(".setting-list-object-value"));
    valueElement.textContent = checkboxDescription;
    const rowElementGroup = { rowElement, keyElement: valueElement, valueElement: checkbox.domNode };
    this.addTooltipsToRow(rowElementGroup, item);
    this._register(addDisposableListener(valueElement, EventType.MOUSE_DOWN, (e) => {
      const targetElement = e.target;
      if (targetElement.tagName.toLowerCase() !== "a") {
        checkbox.checked = !checkbox.checked;
        onValueChange(checkbox.checked);
      }
      EventHelper.stop(e);
    }));
    return rowElement;
  }
  renderEditWidget(value, checkboxDescription, onValueChange) {
    const checkbox = new Toggle({
      icon: Codicon.check,
      actionClassName: "setting-value-checkbox",
      isChecked: value,
      title: checkboxDescription,
      ...unthemedToggleStyles
    });
    this.listDisposables.add(checkbox);
    const wrapper = $$3(".setting-list-object-input");
    wrapper.classList.add("setting-list-object-input-key-checkbox");
    checkbox.domNode.classList.add("setting-value-checkbox");
    wrapper.appendChild(checkbox.domNode);
    this._register(addDisposableListener(wrapper, EventType.MOUSE_DOWN, (e) => {
      checkbox.checked = !checkbox.checked;
      onValueChange(checkbox.checked);
      e.stopImmediatePropagation();
    }));
    return { widget: checkbox, element: wrapper };
  }
  addTooltipsToRow(rowElementGroup, item) {
    const accessibleDescription = localize(
      "objectPairHintLabel",
      "The property `{0}` is set to `{1}`.",
      item.key.data,
      item.value.data
    );
    const title = item.keyDescription ?? accessibleDescription;
    const { rowElement, keyElement, valueElement } = rowElementGroup;
    keyElement.title = title;
    valueElement.setAttribute("aria-label", accessibleDescription);
    rowElement.setAttribute("aria-label", accessibleDescription);
  }
  getLocalizedStrings() {
    return {
      deleteActionTooltip: localize("removeItem", "Remove Item"),
      resetActionTooltip: localize("resetItem", "Reset Item"),
      editActionTooltip: localize("editItem", "Edit Item"),
      addButtonLabel: localize("addItem", "Add Item"),
      keyHeaderText: localize("objectKeyHeader", "Item"),
      valueHeaderText: localize("objectValueHeader", "Value")
    };
  }
}
const $$2 = $$6;
function getIncludeExcludeDisplayValue(element) {
  const data = element.isConfigured ? { ...element.defaultValue, ...element.scopeValue } : element.defaultValue;
  return Object.keys(data).filter((key) => !!data[key]).map((key) => {
    const value = data[key];
    const sibling = typeof value === "boolean" ? void 0 : value.when;
    return {
      value: {
        type: "string",
        data: key
      },
      sibling,
      elementType: element.valueType
    };
  });
}
function areAllPropertiesDefined(properties, itemsToDisplay) {
  const staticProperties = new Set(properties);
  itemsToDisplay.forEach(({ key }) => staticProperties.delete(key.data));
  return staticProperties.size === 0;
}
function getEnumOptionsFromSchema(schema) {
  if (schema.anyOf) {
    return schema.anyOf.map(getEnumOptionsFromSchema).flat();
  }
  const enumDescriptions = schema.enumDescriptions ?? [];
  return (schema.enum ?? []).map((value, idx) => {
    const description = idx < enumDescriptions.length ? enumDescriptions[idx] : void 0;
    return { value, description };
  });
}
function getObjectValueType(schema) {
  if (schema.anyOf) {
    const subTypes = schema.anyOf.map(getObjectValueType);
    if (subTypes.some((type) => type === "enum")) {
      return "enum";
    }
    return "string";
  }
  if (schema.type === "boolean") {
    return "boolean";
  } else if (schema.type === "string" && isDefined(schema.enum) && schema.enum.length > 0) {
    return "enum";
  } else {
    return "string";
  }
}
function getObjectDisplayValue(element) {
  const elementDefaultValue = typeof element.defaultValue === "object" ? element.defaultValue ?? {} : {};
  const elementScopeValue = typeof element.scopeValue === "object" ? element.scopeValue ?? {} : {};
  const data = element.isConfigured ? { ...elementDefaultValue, ...elementScopeValue } : elementDefaultValue;
  const { objectProperties, objectPatternProperties, objectAdditionalProperties } = element.setting;
  const patternsAndSchemas = Object.entries(objectPatternProperties ?? {}).map(([pattern, schema]) => ({
    pattern: new RegExp(pattern),
    schema
  }));
  const wellDefinedKeyEnumOptions = Object.entries(objectProperties ?? {}).map(([key, schema]) => ({ value: key, description: schema.description }));
  return Object.keys(data).map((key) => {
    var _a2;
    const defaultValue = elementDefaultValue[key];
    if (isDefined(objectProperties) && key in objectProperties) {
      if (element.setting.allKeysAreBoolean) {
        return {
          key: {
            type: "string",
            data: key
          },
          value: {
            type: "boolean",
            data: data[key]
          },
          keyDescription: objectProperties[key].description,
          removable: false
        };
      }
      const valueEnumOptions = getEnumOptionsFromSchema(objectProperties[key]);
      return {
        key: {
          type: "enum",
          data: key,
          options: wellDefinedKeyEnumOptions
        },
        value: {
          type: getObjectValueType(objectProperties[key]),
          data: data[key],
          options: valueEnumOptions
        },
        keyDescription: objectProperties[key].description,
        removable: isUndefinedOrNull(defaultValue)
      };
    }
    const removable = !defaultValue;
    const schema = (_a2 = patternsAndSchemas.find(({ pattern }) => pattern.test(key))) == null ? void 0 : _a2.schema;
    if (schema) {
      const valueEnumOptions = getEnumOptionsFromSchema(schema);
      return {
        key: { type: "string", data: key },
        value: {
          type: getObjectValueType(schema),
          data: data[key],
          options: valueEnumOptions
        },
        keyDescription: schema.description,
        removable
      };
    }
    const additionalValueEnums = getEnumOptionsFromSchema(typeof objectAdditionalProperties === "boolean" ? {} : objectAdditionalProperties ?? {});
    return {
      key: { type: "string", data: key },
      value: {
        type: typeof objectAdditionalProperties === "object" ? getObjectValueType(objectAdditionalProperties) : "string",
        data: data[key],
        options: additionalValueEnums
      },
      keyDescription: typeof objectAdditionalProperties === "object" ? objectAdditionalProperties.description : void 0,
      removable
    };
  }).filter((item) => !isUndefinedOrNull(item.value.data));
}
function createArraySuggester(element) {
  return (keys, idx) => {
    const enumOptions = [];
    if (element.setting.enum) {
      element.setting.enum.forEach((key, i) => {
        var _a2;
        if (!element.setting.uniqueItems || idx !== void 0 && key === keys[idx] || !keys.includes(key)) {
          const description = (_a2 = element.setting.enumDescriptions) == null ? void 0 : _a2[i];
          enumOptions.push({ value: key, description });
        }
      });
    }
    return enumOptions.length > 0 ? { type: "enum", data: enumOptions[0].value, options: enumOptions } : void 0;
  };
}
function createObjectKeySuggester(element) {
  const { objectProperties } = element.setting;
  const allStaticKeys = Object.keys(objectProperties ?? {});
  return (keys) => {
    const existingKeys = new Set(keys);
    const enumOptions = [];
    allStaticKeys.forEach((staticKey) => {
      if (!existingKeys.has(staticKey)) {
        enumOptions.push({ value: staticKey, description: objectProperties[staticKey].description });
      }
    });
    return enumOptions.length > 0 ? { type: "enum", data: enumOptions[0].value, options: enumOptions } : void 0;
  };
}
function createObjectValueSuggester(element) {
  const { objectProperties, objectPatternProperties, objectAdditionalProperties } = element.setting;
  const patternsAndSchemas = Object.entries(objectPatternProperties ?? {}).map(([pattern, schema]) => ({
    pattern: new RegExp(pattern),
    schema
  }));
  return (key) => {
    var _a2;
    let suggestedSchema;
    if (isDefined(objectProperties) && key in objectProperties) {
      suggestedSchema = objectProperties[key];
    }
    const patternSchema = suggestedSchema ?? ((_a2 = patternsAndSchemas.find(({ pattern }) => pattern.test(key))) == null ? void 0 : _a2.schema);
    if (isDefined(patternSchema)) {
      suggestedSchema = patternSchema;
    } else if (isDefined(objectAdditionalProperties) && typeof objectAdditionalProperties === "object") {
      suggestedSchema = objectAdditionalProperties;
    }
    if (isDefined(suggestedSchema)) {
      const type = getObjectValueType(suggestedSchema);
      if (type === "boolean") {
        return { type, data: suggestedSchema.default ?? true };
      } else if (type === "enum") {
        const options = getEnumOptionsFromSchema(suggestedSchema);
        return { type, data: suggestedSchema.default ?? options[0].value, options };
      } else {
        return { type, data: suggestedSchema.default ?? "" };
      }
    }
    return;
  };
}
function isNonNullableNumericType(type) {
  return type === "number" || type === "integer";
}
function parseNumericObjectValues(dataElement, v) {
  const newRecord = {};
  for (const key in v) {
    let keyMatchesNumericProperty;
    const patternProperties = dataElement.setting.objectPatternProperties;
    const properties = dataElement.setting.objectProperties;
    const additionalProperties = dataElement.setting.objectAdditionalProperties;
    if (properties) {
      for (const propKey in properties) {
        if (propKey === key) {
          keyMatchesNumericProperty = isNonNullableNumericType(properties[propKey].type);
          break;
        }
      }
    }
    if (keyMatchesNumericProperty === void 0 && patternProperties) {
      for (const patternKey in patternProperties) {
        if (key.match(patternKey)) {
          keyMatchesNumericProperty = isNonNullableNumericType(patternProperties[patternKey].type);
          break;
        }
      }
    }
    if (keyMatchesNumericProperty === void 0 && additionalProperties && typeof additionalProperties !== "boolean") {
      if (isNonNullableNumericType(additionalProperties.type)) {
        keyMatchesNumericProperty = true;
      }
    }
    newRecord[key] = keyMatchesNumericProperty ? Number(v[key]) : v[key];
  }
  return newRecord;
}
function getListDisplayValue(element) {
  if (!element.value || !Array.isArray(element.value)) {
    return [];
  }
  if (element.setting.arrayItemType === "enum") {
    let enumOptions = [];
    if (element.setting.enum) {
      enumOptions = element.setting.enum.map((setting, i) => {
        var _a2;
        return {
          value: setting,
          description: (_a2 = element.setting.enumDescriptions) == null ? void 0 : _a2[i]
        };
      });
    }
    return element.value.map((key) => {
      return {
        value: {
          type: "enum",
          data: key,
          options: enumOptions
        }
      };
    });
  } else {
    return element.value.map((key) => {
      return {
        value: {
          type: "string",
          data: key
        }
      };
    });
  }
}
function getShowAddButtonList(dataElement, listDisplayValue) {
  if (dataElement.setting.enum && dataElement.setting.uniqueItems) {
    return dataElement.setting.enum.length - listDisplayValue.length > 0;
  } else {
    return true;
  }
}
function resolveSettingsTree(tocData2, coreSettingsGroups, logService) {
  const allSettings = getFlatSettings(coreSettingsGroups);
  return {
    tree: _resolveSettingsTree(tocData2, allSettings, logService),
    leftoverSettings: allSettings
  };
}
function resolveConfiguredUntrustedSettings(groups, target, languageFilter, configurationService) {
  const allSettings = getFlatSettings(groups);
  return [...allSettings].filter((setting) => setting.restricted && inspectSetting(setting.key, target, languageFilter, configurationService).isConfigured);
}
function compareNullableIntegers(a, b) {
  const firstElem = a ?? Number.MAX_SAFE_INTEGER;
  const secondElem = b ?? Number.MAX_SAFE_INTEGER;
  return firstElem - secondElem;
}
async function createTocTreeForExtensionSettings(extensionService, groups) {
  const extGroupTree = /* @__PURE__ */ new Map();
  const addEntryToTree = (extensionId, extensionName, childEntry) => {
    if (!extGroupTree.has(extensionId)) {
      const rootEntry = {
        id: extensionId,
        label: extensionName,
        children: []
      };
      extGroupTree.set(extensionId, rootEntry);
    }
    extGroupTree.get(extensionId).children.push(childEntry);
  };
  const processGroupEntry = async (group) => {
    const flatSettings = group.sections.map((section) => section.settings).flat();
    const extensionId = group.extensionInfo.id;
    const extension = await extensionService.getExtension(extensionId);
    const extensionName = (extension == null ? void 0 : extension.displayName) ?? (extension == null ? void 0 : extension.name) ?? extensionId;
    const childEntry = {
      id: group.id || group.title,
      label: group.title,
      order: group.order,
      settings: flatSettings
    };
    addEntryToTree(extensionId, extensionName, childEntry);
  };
  const processPromises = groups.map((g) => processGroupEntry(g));
  return Promise.all(processPromises).then(() => {
    var _a2;
    const extGroups = [];
    for (const extensionRootEntry of extGroupTree.values()) {
      for (const child of extensionRootEntry.children) {
        (_a2 = child.settings) == null ? void 0 : _a2.sort((a, b) => {
          return compareNullableIntegers(a.order, b.order);
        });
      }
      if (extensionRootEntry.children.length === 1) {
        extGroups.push({
          id: extensionRootEntry.id,
          label: extensionRootEntry.children[0].label,
          settings: extensionRootEntry.children[0].settings
        });
      } else {
        extensionRootEntry.children.sort((a, b) => {
          return compareNullableIntegers(a.order, b.order);
        });
        const ungroupedChild = extensionRootEntry.children.find((child) => child.label === extensionRootEntry.label);
        if (ungroupedChild && !ungroupedChild.children) {
          const groupedChildren = extensionRootEntry.children.filter((child) => child !== ungroupedChild);
          extGroups.push({
            id: extensionRootEntry.id,
            label: extensionRootEntry.label,
            settings: ungroupedChild.settings,
            children: groupedChildren
          });
        } else {
          extGroups.push(extensionRootEntry);
        }
      }
    }
    extGroups.sort((a, b) => a.label.localeCompare(b.label));
    return {
      id: "extensions",
      label: localize("extensions", "Extensions"),
      children: extGroups
    };
  });
}
function _resolveSettingsTree(tocData2, allSettings, logService) {
  let children;
  if (tocData2.children) {
    children = tocData2.children.map((child) => _resolveSettingsTree(child, allSettings, logService)).filter((child) => {
      var _a2, _b2;
      return ((_a2 = child.children) == null ? void 0 : _a2.length) || ((_b2 = child.settings) == null ? void 0 : _b2.length);
    });
  }
  let settings;
  if (tocData2.settings) {
    settings = tocData2.settings.map((pattern) => getMatchingSettings(allSettings, pattern, logService)).flat();
  }
  if (!children && !settings) {
    throw new Error(`TOC node has no child groups or settings: ${tocData2.id}`);
  }
  return {
    id: tocData2.id,
    label: tocData2.label,
    children,
    settings
  };
}
const knownDynamicSettingGroups = [
  /^settingsSync\..*/,
  /^sync\..*/,
  /^workbench.fontAliasing$/
];
function getMatchingSettings(allSettings, pattern, logService) {
  const result = [];
  allSettings.forEach((s) => {
    if (settingMatches(s, pattern)) {
      result.push(s);
      allSettings.delete(s);
    }
  });
  if (!result.length && !knownDynamicSettingGroups.some((r) => r.test(pattern))) {
    logService.warn(`Settings pattern "${pattern}" doesn't match any settings`);
  }
  return result.sort((a, b) => a.key.localeCompare(b.key));
}
const settingPatternCache = /* @__PURE__ */ new Map();
function createSettingMatchRegExp(pattern) {
  pattern = escapeRegExpCharacters(pattern).replace(/\\\*/g, ".*");
  return new RegExp(`^${pattern}$`, "i");
}
function settingMatches(s, pattern) {
  let regExp = settingPatternCache.get(pattern);
  if (!regExp) {
    regExp = createSettingMatchRegExp(pattern);
    settingPatternCache.set(pattern, regExp);
  }
  return regExp.test(s.key);
}
function getFlatSettings(settingsGroups) {
  const result = /* @__PURE__ */ new Set();
  for (const group of settingsGroups) {
    for (const section of group.sections) {
      for (const s of section.settings) {
        if (!s.overrides || !s.overrides.length) {
          result.add(s);
        }
      }
    }
  }
  return result;
}
const SETTINGS_TEXT_TEMPLATE_ID = "settings.text.template";
const SETTINGS_MULTILINE_TEXT_TEMPLATE_ID = "settings.multilineText.template";
const SETTINGS_NUMBER_TEMPLATE_ID = "settings.number.template";
const SETTINGS_ENUM_TEMPLATE_ID = "settings.enum.template";
const SETTINGS_BOOL_TEMPLATE_ID = "settings.bool.template";
const SETTINGS_ARRAY_TEMPLATE_ID = "settings.array.template";
const SETTINGS_EXCLUDE_TEMPLATE_ID = "settings.exclude.template";
const SETTINGS_INCLUDE_TEMPLATE_ID = "settings.include.template";
const SETTINGS_OBJECT_TEMPLATE_ID = "settings.object.template";
const SETTINGS_BOOL_OBJECT_TEMPLATE_ID = "settings.boolObject.template";
const SETTINGS_COMPLEX_TEMPLATE_ID = "settings.complex.template";
const SETTINGS_NEW_EXTENSIONS_TEMPLATE_ID = "settings.newExtensions.template";
const SETTINGS_ELEMENT_TEMPLATE_ID = "settings.group.template";
const SETTINGS_EXTENSION_TOGGLE_TEMPLATE_ID = "settings.extensionToggle.template";
function removeChildrenFromTabOrder(node) {
  const focusableElements = node.querySelectorAll(`
		[tabindex="0"],
		input:not([tabindex="-1"]),
		select:not([tabindex="-1"]),
		textarea:not([tabindex="-1"]),
		a:not([tabindex="-1"]),
		button:not([tabindex="-1"]),
		area:not([tabindex="-1"])
	`);
  focusableElements.forEach((element) => {
    element.setAttribute(AbstractSettingRenderer.ELEMENT_FOCUSABLE_ATTR, "true");
    element.setAttribute("tabindex", "-1");
  });
}
function addChildrenToTabOrder(node) {
  const focusableElements = node.querySelectorAll(`[${AbstractSettingRenderer.ELEMENT_FOCUSABLE_ATTR}="true"]`);
  focusableElements.forEach((element) => {
    element.removeAttribute(AbstractSettingRenderer.ELEMENT_FOCUSABLE_ATTR);
    element.setAttribute("tabindex", "0");
  });
}
let AbstractSettingRenderer = (_m = class extends Disposable {
  constructor(settingActions, disposableActionFactory, _themeService, _contextViewService, _openerService, _instantiationService, _commandService, _contextMenuService, _keybindingService, _configService, _extensionsService, _extensionsWorkbenchService, _productService, _telemetryService) {
    super();
    this.settingActions = settingActions;
    this.disposableActionFactory = disposableActionFactory;
    this._themeService = _themeService;
    this._contextViewService = _contextViewService;
    this._openerService = _openerService;
    this._instantiationService = _instantiationService;
    this._commandService = _commandService;
    this._contextMenuService = _contextMenuService;
    this._keybindingService = _keybindingService;
    this._configService = _configService;
    this._extensionsService = _extensionsService;
    this._extensionsWorkbenchService = _extensionsWorkbenchService;
    this._productService = _productService;
    this._telemetryService = _telemetryService;
    this._onDidClickOverrideElement = this._register(new Emitter());
    this.onDidClickOverrideElement = this._onDidClickOverrideElement.event;
    this._onDidChangeSetting = this._register(new Emitter());
    this.onDidChangeSetting = this._onDidChangeSetting.event;
    this._onDidOpenSettings = this._register(new Emitter());
    this.onDidOpenSettings = this._onDidOpenSettings.event;
    this._onDidClickSettingLink = this._register(new Emitter());
    this.onDidClickSettingLink = this._onDidClickSettingLink.event;
    this._onDidFocusSetting = this._register(new Emitter());
    this.onDidFocusSetting = this._onDidFocusSetting.event;
    this._onDidChangeIgnoredSettings = this._register(new Emitter());
    this.onDidChangeIgnoredSettings = this._onDidChangeIgnoredSettings.event;
    this._onDidChangeSettingHeight = this._register(new Emitter());
    this.onDidChangeSettingHeight = this._onDidChangeSettingHeight.event;
    this._onApplyFilter = this._register(new Emitter());
    this.onApplyFilter = this._onApplyFilter.event;
    this.markdownRenderer = this._register(_instantiationService.createInstance(MarkdownRenderer, {}));
    this.ignoredSettings = getIgnoredSettings(getDefaultIgnoredSettings(), this._configService);
    this._register(this._configService.onDidChangeConfiguration((e) => {
      this.ignoredSettings = getIgnoredSettings(getDefaultIgnoredSettings(), this._configService);
      this._onDidChangeIgnoredSettings.fire();
    }));
  }
  renderCommonTemplate(tree, _container, typeClass) {
    _container.classList.add("setting-item");
    _container.classList.add("setting-item-" + typeClass);
    const toDispose = new DisposableStore();
    const container = append(_container, $$2(_m.CONTENTS_SELECTOR));
    container.classList.add("settings-row-inner-container");
    const titleElement = append(container, $$2(".setting-item-title"));
    const labelCategoryContainer = append(titleElement, $$2(".setting-item-cat-label-container"));
    const categoryElement = append(labelCategoryContainer, $$2("span.setting-item-category"));
    const labelElementContainer = append(labelCategoryContainer, $$2("span.setting-item-label"));
    const labelElement = new SimpleIconLabel(labelElementContainer);
    const indicatorsLabel = this._instantiationService.createInstance(SettingsTreeIndicatorsLabel, titleElement);
    toDispose.add(indicatorsLabel);
    const descriptionElement = append(container, $$2(".setting-item-description"));
    const modifiedIndicatorElement = append(container, $$2(".setting-item-modified-indicator"));
    modifiedIndicatorElement.title = localize("modified", "The setting has been configured in the current scope.");
    const valueElement = append(container, $$2(".setting-item-value"));
    const controlElement = append(valueElement, $$2("div.setting-item-control"));
    const deprecationWarningElement = append(container, $$2(".setting-item-deprecation-message"));
    const toolbarContainer = append(container, $$2(".setting-toolbar-container"));
    const toolbar = this.renderSettingToolbar(toolbarContainer);
    const template = {
      toDispose,
      elementDisposables: toDispose.add(new DisposableStore()),
      containerElement: container,
      categoryElement,
      labelElement,
      descriptionElement,
      controlElement,
      deprecationWarningElement,
      indicatorsLabel,
      toolbar
    };
    toDispose.add(addDisposableListener(controlElement, EventType.MOUSE_DOWN, (e) => e.stopPropagation()));
    toDispose.add(addDisposableListener(titleElement, EventType.MOUSE_ENTER, (e) => container.classList.add("mouseover")));
    toDispose.add(addDisposableListener(titleElement, EventType.MOUSE_LEAVE, (e) => container.classList.remove("mouseover")));
    return template;
  }
  addSettingElementFocusHandler(template) {
    const focusTracker = trackFocus(template.containerElement);
    template.toDispose.add(focusTracker);
    focusTracker.onDidBlur(() => {
      if (template.containerElement.classList.contains("focused")) {
        template.containerElement.classList.remove("focused");
      }
    });
    focusTracker.onDidFocus(() => {
      template.containerElement.classList.add("focused");
      if (template.context) {
        this._onDidFocusSetting.fire(template.context);
      }
    });
  }
  renderSettingToolbar(container) {
    const toggleMenuKeybinding = this._keybindingService.lookupKeybinding(SETTINGS_EDITOR_COMMAND_SHOW_CONTEXT_MENU);
    let toggleMenuTitle = localize("settingsContextMenuTitle", "More Actions... ");
    if (toggleMenuKeybinding) {
      toggleMenuTitle += ` (${toggleMenuKeybinding && toggleMenuKeybinding.getLabel()})`;
    }
    const toolbar = new ToolBar(container, this._contextMenuService, {
      toggleMenuTitle,
      renderDropdownAsChildElement: !isIOS,
      moreIcon: settingsMoreActionIcon
    });
    return toolbar;
  }
  renderSettingElement(node, index, template) {
    const element = node.element;
    template.context = element;
    template.toolbar.context = element;
    const actions = this.disposableActionFactory(element.setting, element.settingsTarget);
    actions.forEach((a) => isDisposable(a) && template.elementDisposables.add(a));
    template.toolbar.setActions([], [...this.settingActions, ...actions]);
    const setting = element.setting;
    template.containerElement.classList.toggle("is-configured", element.isConfigured);
    template.containerElement.setAttribute(_m.SETTING_KEY_ATTR, element.setting.key);
    template.containerElement.setAttribute(_m.SETTING_ID_ATTR, element.id);
    const titleTooltip = setting.key + (element.isConfigured ? " - Modified" : "");
    template.categoryElement.textContent = element.displayCategory ? element.displayCategory + ": " : "";
    template.categoryElement.title = titleTooltip;
    template.labelElement.text = element.displayLabel;
    template.labelElement.title = titleTooltip;
    template.descriptionElement.innerText = "";
    if (element.setting.descriptionIsMarkdown) {
      const renderedDescription = this.renderSettingMarkdown(element, template.containerElement, element.description, template.elementDisposables);
      template.descriptionElement.appendChild(renderedDescription);
    } else {
      template.descriptionElement.innerText = element.description;
    }
    template.indicatorsLabel.updateScopeOverrides(element, this._onDidClickOverrideElement, this._onApplyFilter);
    template.elementDisposables.add(this._configService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration(APPLY_ALL_PROFILES_SETTING)) {
        template.indicatorsLabel.updateScopeOverrides(element, this._onDidClickOverrideElement, this._onApplyFilter);
      }
    }));
    const onChange = (value) => this._onDidChangeSetting.fire({
      key: element.setting.key,
      value,
      type: template.context.valueType,
      manualReset: false,
      scope: element.setting.scope
    });
    const deprecationText = element.setting.deprecationMessage || "";
    if (deprecationText && element.setting.deprecationMessageIsMarkdown) {
      template.deprecationWarningElement.innerText = "";
      template.deprecationWarningElement.appendChild(this.renderSettingMarkdown(element, template.containerElement, element.setting.deprecationMessage, template.elementDisposables));
    } else {
      template.deprecationWarningElement.innerText = deprecationText;
    }
    template.deprecationWarningElement.prepend($$2(".codicon.codicon-error"));
    template.containerElement.classList.toggle("is-deprecated", !!deprecationText);
    this.renderValue(element, template, onChange);
    template.indicatorsLabel.updateWorkspaceTrust(element);
    template.indicatorsLabel.updateSyncIgnored(element, this.ignoredSettings);
    template.indicatorsLabel.updateDefaultOverrideIndicator(element);
    template.elementDisposables.add(this.onDidChangeIgnoredSettings(() => {
      template.indicatorsLabel.updateSyncIgnored(element, this.ignoredSettings);
    }));
    this.updateSettingTabbable(element, template);
    template.elementDisposables.add(element.onDidChangeTabbable(() => {
      this.updateSettingTabbable(element, template);
    }));
  }
  updateSettingTabbable(element, template) {
    if (element.tabbable) {
      addChildrenToTabOrder(template.containerElement);
    } else {
      removeChildrenFromTabOrder(template.containerElement);
    }
  }
  renderSettingMarkdown(element, container, text, disposables) {
    text = fixSettingLinks(text);
    const renderedMarkdown = this.markdownRenderer.render({ value: text, isTrusted: true }, {
      actionHandler: {
        callback: (content) => {
          if (content.startsWith("#")) {
            const e = {
              source: element,
              targetKey: content.substring(1)
            };
            this._onDidClickSettingLink.fire(e);
          } else {
            this._openerService.open(content, { allowCommands: true }).catch(onUnexpectedError);
          }
        },
        disposables
      },
      asyncRenderCallback: () => {
        const height = container.clientHeight;
        if (height) {
          this._onDidChangeSettingHeight.fire({ element, height });
        }
      }
    });
    disposables.add(renderedMarkdown);
    renderedMarkdown.element.classList.add("setting-item-markdown");
    cleanRenderedMarkdown(renderedMarkdown.element);
    return renderedMarkdown.element;
  }
  disposeTemplate(template) {
    template.toDispose.dispose();
  }
  disposeElement(_element, _index, template, _height) {
    var _a2;
    (_a2 = template.elementDisposables) == null ? void 0 : _a2.clear();
  }
}, _m.CONTROL_CLASS = "setting-control-focus-target", _m.CONTROL_SELECTOR = "." + _m.CONTROL_CLASS, _m.CONTENTS_CLASS = "setting-item-contents", _m.CONTENTS_SELECTOR = "." + _m.CONTENTS_CLASS, _m.ALL_ROWS_SELECTOR = ".monaco-list-row", _m.SETTING_KEY_ATTR = "data-key", _m.SETTING_ID_ATTR = "data-id", _m.ELEMENT_FOCUSABLE_ATTR = "data-focusable", _m);
AbstractSettingRenderer = __decorate([
  __param(2, IThemeService),
  __param(3, IContextViewService),
  __param(4, IOpenerService),
  __param(5, IInstantiationService),
  __param(6, ICommandService),
  __param(7, IContextMenuService),
  __param(8, IKeybindingService),
  __param(9, IConfigurationService),
  __param(10, IExtensionService),
  __param(11, IExtensionsWorkbenchService),
  __param(12, IProductService),
  __param(13, ITelemetryService)
], AbstractSettingRenderer);
class SettingGroupRenderer {
  constructor() {
    this.templateId = SETTINGS_ELEMENT_TEMPLATE_ID;
  }
  renderTemplate(container) {
    container.classList.add("group-title");
    const template = {
      parent: container,
      toDispose: new DisposableStore()
    };
    return template;
  }
  renderElement(element, index, templateData) {
    templateData.parent.innerText = "";
    const labelElement = append(templateData.parent, $$2("div.settings-group-title-label.settings-row-inner-container"));
    labelElement.classList.add(`settings-group-level-${element.element.level}`);
    labelElement.textContent = element.element.label;
    if (element.element.isFirstGroup) {
      labelElement.classList.add("settings-group-first");
    }
  }
  disposeTemplate(templateData) {
  }
}
let SettingNewExtensionsRenderer = class SettingNewExtensionsRenderer2 {
  constructor(_commandService) {
    this._commandService = _commandService;
    this.templateId = SETTINGS_NEW_EXTENSIONS_TEMPLATE_ID;
  }
  renderTemplate(container) {
    const toDispose = new DisposableStore();
    container.classList.add("setting-item-new-extensions");
    const button = new Button(container, { title: true, ...defaultButtonStyles });
    toDispose.add(button);
    toDispose.add(button.onDidClick(() => {
      if (template.context) {
        this._commandService.executeCommand("workbench.extensions.action.showExtensionsWithIds", template.context.extensionIds);
      }
    }));
    button.label = localize("newExtensionsButtonLabel", "Show matching extensions");
    button.element.classList.add("settings-new-extensions-button");
    const template = {
      button,
      toDispose
    };
    return template;
  }
  renderElement(element, index, templateData) {
    templateData.context = element.element;
  }
  disposeTemplate(template) {
    dispose(template.toDispose);
  }
};
SettingNewExtensionsRenderer = __decorate([
  __param(0, ICommandService)
], SettingNewExtensionsRenderer);
const _SettingComplexRenderer = class _SettingComplexRenderer extends AbstractSettingRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_COMPLEX_TEMPLATE_ID;
  }
  renderTemplate(container) {
    const common = this.renderCommonTemplate(null, container, "complex");
    const openSettingsButton = append(common.controlElement, $$2("a.edit-in-settings-button"));
    openSettingsButton.classList.add(AbstractSettingRenderer.CONTROL_CLASS);
    openSettingsButton.role = "button";
    const validationErrorMessageElement = $$2(".setting-item-validation-message");
    common.containerElement.appendChild(validationErrorMessageElement);
    const template = {
      ...common,
      button: openSettingsButton,
      validationErrorMessageElement
    };
    this.addSettingElementFocusHandler(template);
    return template;
  }
  renderElement(element, index, templateData) {
    super.renderSettingElement(element, index, templateData);
  }
  renderValue(dataElement, template, onChange) {
    const plainKey = getLanguageTagSettingPlainKey(dataElement.setting.key);
    const editLanguageSettingLabel = localize("editLanguageSettingLabel", "Edit settings for {0}", plainKey);
    const isLanguageTagSetting = dataElement.setting.isLanguageTagSetting;
    template.button.textContent = isLanguageTagSetting ? editLanguageSettingLabel : _SettingComplexRenderer.EDIT_IN_JSON_LABEL;
    const onClickOrKeydown = (e) => {
      if (isLanguageTagSetting) {
        this._onApplyFilter.fire(`@${LANGUAGE_SETTING_TAG}${plainKey}`);
      } else {
        this._onDidOpenSettings.fire(dataElement.setting.key);
      }
      e.preventDefault();
      e.stopPropagation();
    };
    template.elementDisposables.add(addDisposableListener(template.button, EventType.CLICK, (e) => {
      onClickOrKeydown(e);
    }));
    template.elementDisposables.add(addDisposableListener(template.button, EventType.KEY_DOWN, (e) => {
      const ev = new StandardKeyboardEvent(e);
      if (ev.equals(10) || ev.equals(3)) {
        onClickOrKeydown(e);
      }
    }));
    this.renderValidations(dataElement, template);
    if (isLanguageTagSetting) {
      template.button.setAttribute("aria-label", editLanguageSettingLabel);
    } else {
      template.button.setAttribute("aria-label", `${_SettingComplexRenderer.EDIT_IN_JSON_LABEL}: ${dataElement.setting.key}`);
    }
  }
  renderValidations(dataElement, template) {
    const errMsg = dataElement.isConfigured && getInvalidTypeError(dataElement.value, dataElement.setting.type);
    if (errMsg) {
      template.containerElement.classList.add("invalid-input");
      template.validationErrorMessageElement.innerText = errMsg;
      return;
    }
    template.containerElement.classList.remove("invalid-input");
  }
};
_SettingComplexRenderer.EDIT_IN_JSON_LABEL = localize("editInSettingsJson", "Edit in settings.json");
let SettingComplexRenderer = _SettingComplexRenderer;
class SettingArrayRenderer extends AbstractSettingRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_ARRAY_TEMPLATE_ID;
  }
  renderTemplate(container) {
    const common = this.renderCommonTemplate(null, container, "list");
    const descriptionElement = common.containerElement.querySelector(".setting-item-description");
    const validationErrorMessageElement = $$2(".setting-item-validation-message");
    descriptionElement.after(validationErrorMessageElement);
    const listWidget = this._instantiationService.createInstance(ListSettingWidget, common.controlElement);
    listWidget.domNode.classList.add(AbstractSettingRenderer.CONTROL_CLASS);
    common.toDispose.add(listWidget);
    const template = {
      ...common,
      listWidget,
      validationErrorMessageElement
    };
    this.addSettingElementFocusHandler(template);
    common.toDispose.add(listWidget.onDidChangeList((e) => {
      var _a2;
      const newList = this.computeNewList(template, e);
      (_a2 = template.onChange) == null ? void 0 : _a2.call(template, newList);
    }));
    return template;
  }
  computeNewList(template, e) {
    var _a2, _b2, _c2, _d2;
    if (template.context) {
      let newValue = [];
      if (Array.isArray(template.context.scopeValue)) {
        newValue = [...template.context.scopeValue];
      } else if (Array.isArray(template.context.value)) {
        newValue = [...template.context.value];
      }
      if (e.sourceIndex !== void 0) {
        const sourceIndex = e.sourceIndex;
        const targetIndex = e.targetIndex;
        const splicedElem = newValue.splice(sourceIndex, 1)[0];
        newValue.splice(targetIndex, 0, splicedElem);
      } else if (e.targetIndex !== void 0) {
        const itemValueData = ((_a2 = e.item) == null ? void 0 : _a2.value.data.toString()) ?? "";
        if (!((_b2 = e.item) == null ? void 0 : _b2.value.data) && e.originalItem.value.data && e.targetIndex > -1) {
          newValue.splice(e.targetIndex, 1);
        } else if (((_c2 = e.item) == null ? void 0 : _c2.value.data) && e.originalItem.value.data) {
          if (e.targetIndex > -1) {
            newValue[e.targetIndex] = itemValueData;
          } else {
            newValue.push(itemValueData);
          }
        } else if (((_d2 = e.item) == null ? void 0 : _d2.value.data) && !e.originalItem.value.data && e.targetIndex >= newValue.length) {
          newValue.push(itemValueData);
        }
      }
      if (template.context.defaultValue && Array.isArray(template.context.defaultValue) && template.context.defaultValue.length === newValue.length && template.context.defaultValue.join() === newValue.join()) {
        return void 0;
      }
      return newValue;
    }
    return void 0;
  }
  renderElement(element, index, templateData) {
    super.renderSettingElement(element, index, templateData);
  }
  renderValue(dataElement, template, onChange) {
    const value = getListDisplayValue(dataElement);
    const keySuggester = dataElement.setting.enum ? createArraySuggester(dataElement) : void 0;
    template.listWidget.setValue(value, {
      showAddButton: getShowAddButtonList(dataElement, value),
      keySuggester
    });
    template.context = dataElement;
    template.elementDisposables.add(toDisposable(() => {
      template.listWidget.cancelEdit();
    }));
    template.onChange = (v) => {
      if (v && !renderArrayValidations(dataElement, template, v, false)) {
        const itemType = dataElement.setting.arrayItemType;
        const arrToSave = isNonNullableNumericType(itemType) ? v.map((a) => +a) : v;
        onChange(arrToSave);
      } else {
        onChange(v);
      }
    };
    renderArrayValidations(dataElement, template, value.map((v) => v.value.data.toString()), true);
  }
}
class AbstractSettingObjectRenderer extends AbstractSettingRenderer {
  renderTemplateWithWidget(common, widget) {
    widget.domNode.classList.add(AbstractSettingRenderer.CONTROL_CLASS);
    common.toDispose.add(widget);
    const descriptionElement = common.containerElement.querySelector(".setting-item-description");
    const validationErrorMessageElement = $$2(".setting-item-validation-message");
    descriptionElement.after(validationErrorMessageElement);
    const template = {
      ...common,
      validationErrorMessageElement
    };
    if (widget instanceof ObjectSettingCheckboxWidget) {
      template.objectCheckboxWidget = widget;
    } else {
      template.objectDropdownWidget = widget;
    }
    this.addSettingElementFocusHandler(template);
    common.toDispose.add(widget.onDidChangeList((e) => {
      this.onDidChangeObject(template, e);
    }));
    return template;
  }
  onDidChangeObject(template, e) {
    var _a2;
    const widget = template.objectCheckboxWidget ?? template.objectDropdownWidget;
    if (template.context) {
      const defaultValue = typeof template.context.defaultValue === "object" ? template.context.defaultValue ?? {} : {};
      const scopeValue = typeof template.context.scopeValue === "object" ? template.context.scopeValue ?? {} : {};
      const newValue = {};
      const newItems = [];
      widget.items.forEach((item, idx) => {
        if (isDefined(e.item) && e.targetIndex === idx) {
          newValue[e.item.key.data] = e.item.value.data;
          newItems.push(e.item);
        } else if (isUndefinedOrNull(e.item) || e.item.key.data !== item.key.data) {
          newValue[item.key.data] = item.value.data;
          newItems.push(item);
        }
      });
      if (isUndefinedOrNull(e.item)) {
        delete newValue[e.originalItem.key.data];
        const itemToDelete = newItems.findIndex((item) => item.key.data === e.originalItem.key.data);
        const defaultItemValue = defaultValue[e.originalItem.key.data];
        if (isUndefinedOrNull(defaultValue[e.originalItem.key.data]) && itemToDelete > -1) {
          newItems.splice(itemToDelete, 1);
        } else if (itemToDelete > -1) {
          newItems[itemToDelete].value.data = defaultItemValue;
        }
      } else if (widget.isItemNew(e.originalItem) && e.item.key.data !== "") {
        newValue[e.item.key.data] = e.item.value.data;
        newItems.push(e.item);
      }
      Object.entries(newValue).forEach(([key, value]) => {
        if (scopeValue[key] !== value && defaultValue[key] === value) {
          delete newValue[key];
        }
      });
      const newObject = Object.keys(newValue).length === 0 ? void 0 : newValue;
      if (template.objectCheckboxWidget) {
        template.objectCheckboxWidget.setValue(newItems);
      } else {
        template.objectDropdownWidget.setValue(newItems);
      }
      (_a2 = template.onChange) == null ? void 0 : _a2.call(template, newObject);
    }
  }
  renderElement(element, index, templateData) {
    super.renderSettingElement(element, index, templateData);
  }
}
class SettingObjectRenderer extends AbstractSettingObjectRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_OBJECT_TEMPLATE_ID;
  }
  renderTemplate(container) {
    const common = this.renderCommonTemplate(null, container, "list");
    const widget = this._instantiationService.createInstance(ObjectSettingDropdownWidget, common.controlElement);
    return this.renderTemplateWithWidget(common, widget);
  }
  renderValue(dataElement, template, onChange) {
    const items = getObjectDisplayValue(dataElement);
    const { key, objectProperties, objectPatternProperties, objectAdditionalProperties } = dataElement.setting;
    template.objectDropdownWidget.setValue(items, {
      settingKey: key,
      showAddButton: objectAdditionalProperties === false ? !areAllPropertiesDefined(Object.keys(objectProperties ?? {}), items) || isDefined(objectPatternProperties) : true,
      keySuggester: createObjectKeySuggester(dataElement),
      valueSuggester: createObjectValueSuggester(dataElement)
    });
    template.context = dataElement;
    template.elementDisposables.add(toDisposable(() => {
      template.objectDropdownWidget.cancelEdit();
    }));
    template.onChange = (v) => {
      if (v && !renderArrayValidations(dataElement, template, v, false)) {
        const parsedRecord = parseNumericObjectValues(dataElement, v);
        onChange(parsedRecord);
      } else {
        onChange(v);
      }
    };
    renderArrayValidations(dataElement, template, dataElement.value, true);
  }
}
class SettingBoolObjectRenderer extends AbstractSettingObjectRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_BOOL_OBJECT_TEMPLATE_ID;
  }
  renderTemplate(container) {
    const common = this.renderCommonTemplate(null, container, "list");
    const widget = this._instantiationService.createInstance(ObjectSettingCheckboxWidget, common.controlElement);
    return this.renderTemplateWithWidget(common, widget);
  }
  onDidChangeObject(template, e) {
    if (template.context) {
      super.onDidChangeObject(template, e);
      this._onDidFocusSetting.fire(template.context);
    }
  }
  renderValue(dataElement, template, onChange) {
    const items = getObjectDisplayValue(dataElement);
    const { key } = dataElement.setting;
    template.objectCheckboxWidget.setValue(items, {
      settingKey: key
    });
    template.context = dataElement;
    template.onChange = (v) => {
      onChange(v);
    };
  }
}
class SettingIncludeExcludeRenderer extends AbstractSettingRenderer {
  renderTemplate(container) {
    const common = this.renderCommonTemplate(null, container, "list");
    const includeExcludeWidget = this._instantiationService.createInstance(this.isExclude() ? ExcludeSettingWidget : IncludeSettingWidget, common.controlElement);
    includeExcludeWidget.domNode.classList.add(AbstractSettingRenderer.CONTROL_CLASS);
    common.toDispose.add(includeExcludeWidget);
    const template = {
      ...common,
      includeExcludeWidget
    };
    this.addSettingElementFocusHandler(template);
    common.toDispose.add(includeExcludeWidget.onDidChangeList((e) => this.onDidChangeIncludeExclude(template, e)));
    return template;
  }
  onDidChangeIncludeExclude(template, e) {
    var _a2;
    if (template.context) {
      let sortKeys = function(obj) {
        const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
        const retVal = {};
        for (const key of sortedKeys) {
          retVal[key] = obj[key];
        }
        return retVal;
      };
      const newValue = { ...template.context.scopeValue };
      if (e.originalItem.value.data.toString() in template.context.defaultValue) {
        newValue[e.originalItem.value.data.toString()] = false;
      } else {
        delete newValue[e.originalItem.value.data.toString()];
      }
      if ((_a2 = e.item) == null ? void 0 : _a2.value) {
        if (e.item.value.data.toString() in template.context.defaultValue && !e.item.sibling) {
          delete newValue[e.item.value.data.toString()];
        } else {
          newValue[e.item.value.data.toString()] = e.item.sibling ? { when: e.item.sibling } : true;
        }
      }
      this._onDidChangeSetting.fire({
        key: template.context.setting.key,
        value: Object.keys(newValue).length === 0 ? void 0 : sortKeys(newValue),
        type: template.context.valueType,
        manualReset: false,
        scope: template.context.setting.scope
      });
    }
  }
  renderElement(element, index, templateData) {
    super.renderSettingElement(element, index, templateData);
  }
  renderValue(dataElement, template, onChange) {
    const value = getIncludeExcludeDisplayValue(dataElement);
    template.includeExcludeWidget.setValue(value);
    template.context = dataElement;
    template.elementDisposables.add(toDisposable(() => {
      template.includeExcludeWidget.cancelEdit();
    }));
  }
}
class SettingExcludeRenderer extends SettingIncludeExcludeRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_EXCLUDE_TEMPLATE_ID;
  }
  isExclude() {
    return true;
  }
}
class SettingIncludeRenderer extends SettingIncludeExcludeRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_INCLUDE_TEMPLATE_ID;
  }
  isExclude() {
    return false;
  }
}
const settingsInputBoxStyles = getInputBoxStyle({
  inputBackground: settingsTextInputBackground,
  inputForeground: settingsTextInputForeground,
  inputBorder: settingsTextInputBorder
});
class AbstractSettingTextRenderer extends AbstractSettingRenderer {
  constructor() {
    super(...arguments);
    this.MULTILINE_MAX_HEIGHT = 150;
  }
  renderTemplate(_container, useMultiline) {
    const common = this.renderCommonTemplate(null, _container, "text");
    const validationErrorMessageElement = append(common.containerElement, $$2(".setting-item-validation-message"));
    const inputBoxOptions = {
      flexibleHeight: useMultiline,
      flexibleWidth: false,
      flexibleMaxHeight: this.MULTILINE_MAX_HEIGHT,
      inputBoxStyles: settingsInputBoxStyles
    };
    const inputBox = new InputBox(common.controlElement, this._contextViewService, inputBoxOptions);
    common.toDispose.add(inputBox);
    common.toDispose.add(inputBox.onDidChange((e) => {
      var _a2;
      (_a2 = template.onChange) == null ? void 0 : _a2.call(template, e);
    }));
    common.toDispose.add(inputBox);
    inputBox.inputElement.classList.add(AbstractSettingRenderer.CONTROL_CLASS);
    inputBox.inputElement.tabIndex = 0;
    const template = {
      ...common,
      inputBox,
      validationErrorMessageElement
    };
    this.addSettingElementFocusHandler(template);
    return template;
  }
  renderElement(element, index, templateData) {
    super.renderSettingElement(element, index, templateData);
  }
  renderValue(dataElement, template, onChange) {
    template.onChange = void 0;
    template.inputBox.value = dataElement.value;
    template.inputBox.setAriaLabel(dataElement.setting.key);
    template.onChange = (value) => {
      if (!renderValidations(dataElement, template, false)) {
        onChange(value);
      }
    };
    renderValidations(dataElement, template, true);
  }
}
class SettingTextRenderer extends AbstractSettingTextRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_TEXT_TEMPLATE_ID;
  }
  renderTemplate(_container) {
    const template = super.renderTemplate(_container, false);
    template.toDispose.add(addStandardDisposableListener(template.inputBox.inputElement, EventType.KEY_DOWN, (e) => {
      if (e.equals(16) || e.equals(18)) {
        e.preventDefault();
      }
    }));
    return template;
  }
}
class SettingMultilineTextRenderer extends AbstractSettingTextRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_MULTILINE_TEXT_TEMPLATE_ID;
  }
  renderTemplate(_container) {
    return super.renderTemplate(_container, true);
  }
  renderValue(dataElement, template, onChange) {
    const onChangeOverride = (value) => {
      dataElement.value = value;
      onChange(value);
    };
    super.renderValue(dataElement, template, onChangeOverride);
    template.elementDisposables.add(template.inputBox.onDidHeightChange((e) => {
      const height = template.containerElement.clientHeight;
      if (height) {
        this._onDidChangeSettingHeight.fire({
          element: dataElement,
          height: template.containerElement.clientHeight
        });
      }
    }));
    template.inputBox.layout();
  }
}
class SettingEnumRenderer extends AbstractSettingRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_ENUM_TEMPLATE_ID;
  }
  renderTemplate(container) {
    const common = this.renderCommonTemplate(null, container, "enum");
    const styles = getSelectBoxStyles({
      selectBackground: settingsSelectBackground,
      selectForeground: settingsSelectForeground,
      selectBorder: settingsSelectBorder,
      selectListBorder: settingsSelectListBorder
    });
    const selectBox = new SelectBox([], 0, this._contextViewService, styles, {
      useCustomDrawn: !(isIOS && BrowserFeatures.pointerEvents)
    });
    common.toDispose.add(selectBox);
    selectBox.render(common.controlElement);
    const selectElement = common.controlElement.querySelector("select");
    if (selectElement) {
      selectElement.classList.add(AbstractSettingRenderer.CONTROL_CLASS);
      selectElement.tabIndex = 0;
    }
    common.toDispose.add(selectBox.onDidSelect((e) => {
      var _a2;
      (_a2 = template.onChange) == null ? void 0 : _a2.call(template, e.index);
    }));
    const enumDescriptionElement = common.containerElement.insertBefore($$2(".setting-item-enumDescription"), common.descriptionElement.nextSibling);
    const template = {
      ...common,
      selectBox,
      selectElement,
      enumDescriptionElement
    };
    this.addSettingElementFocusHandler(template);
    return template;
  }
  renderElement(element, index, templateData) {
    super.renderSettingElement(element, index, templateData);
  }
  renderValue(dataElement, template, onChange) {
    const enumItemLabels = dataElement.setting.enumItemLabels ? [...dataElement.setting.enumItemLabels] : [];
    const enumDescriptions = dataElement.setting.enumDescriptions ? [...dataElement.setting.enumDescriptions] : [];
    const settingEnum = [...dataElement.setting.enum];
    const enumDescriptionsAreMarkdown = dataElement.setting.enumDescriptionsAreMarkdown;
    const disposables = new DisposableStore();
    template.toDispose.add(disposables);
    let createdDefault = false;
    if (!settingEnum.includes(dataElement.defaultValue)) {
      settingEnum.unshift(dataElement.defaultValue);
      enumDescriptions.unshift("");
      enumItemLabels.unshift("");
      createdDefault = true;
    }
    const stringifiedDefaultValue = escapeInvisibleChars(String(dataElement.defaultValue));
    const displayOptions = settingEnum.map(String).map(escapeInvisibleChars).map((data, index) => {
      const description = enumDescriptions[index] && (enumDescriptionsAreMarkdown ? fixSettingLinks(enumDescriptions[index], false) : enumDescriptions[index]);
      return {
        text: enumItemLabels[index] ? enumItemLabels[index] : data,
        detail: enumItemLabels[index] ? data : "",
        description,
        descriptionIsMarkdown: enumDescriptionsAreMarkdown,
        descriptionMarkdownActionHandler: {
          callback: (content) => {
            this._openerService.open(content).catch(onUnexpectedError);
          },
          disposables
        },
        decoratorRight: data === stringifiedDefaultValue || createdDefault && index === 0 ? localize("settings.Default", "default") : ""
      };
    });
    template.selectBox.setOptions(displayOptions);
    template.selectBox.setAriaLabel(dataElement.setting.key);
    let idx = settingEnum.indexOf(dataElement.value);
    if (idx === -1) {
      idx = 0;
    }
    template.onChange = void 0;
    template.selectBox.select(idx);
    template.onChange = (idx2) => {
      if (createdDefault && idx2 === 0) {
        onChange(dataElement.defaultValue);
      } else {
        onChange(settingEnum[idx2]);
      }
    };
    template.enumDescriptionElement.innerText = "";
  }
}
const settingsNumberInputBoxStyles = getInputBoxStyle({
  inputBackground: settingsNumberInputBackground,
  inputForeground: settingsNumberInputForeground,
  inputBorder: settingsNumberInputBorder
});
class SettingNumberRenderer extends AbstractSettingRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_NUMBER_TEMPLATE_ID;
  }
  renderTemplate(_container) {
    const common = super.renderCommonTemplate(null, _container, "number");
    const validationErrorMessageElement = append(common.containerElement, $$2(".setting-item-validation-message"));
    const inputBox = new InputBox(
      common.controlElement,
      this._contextViewService,
      { type: "number", inputBoxStyles: settingsNumberInputBoxStyles }
    );
    common.toDispose.add(inputBox);
    common.toDispose.add(inputBox.onDidChange((e) => {
      var _a2;
      (_a2 = template.onChange) == null ? void 0 : _a2.call(template, e);
    }));
    common.toDispose.add(inputBox);
    inputBox.inputElement.classList.add(AbstractSettingRenderer.CONTROL_CLASS);
    inputBox.inputElement.tabIndex = 0;
    const template = {
      ...common,
      inputBox,
      validationErrorMessageElement
    };
    this.addSettingElementFocusHandler(template);
    return template;
  }
  renderElement(element, index, templateData) {
    super.renderSettingElement(element, index, templateData);
  }
  renderValue(dataElement, template, onChange) {
    const numParseFn = dataElement.valueType === "integer" || dataElement.valueType === "nullable-integer" ? parseInt : parseFloat;
    const nullNumParseFn = dataElement.valueType === "nullable-integer" || dataElement.valueType === "nullable-number" ? (v) => v === "" ? null : numParseFn(v) : numParseFn;
    template.onChange = void 0;
    template.inputBox.value = typeof dataElement.value === "number" ? dataElement.value.toString() : "";
    template.inputBox.step = dataElement.valueType.includes("integer") ? "1" : "any";
    template.inputBox.setAriaLabel(dataElement.setting.key);
    template.onChange = (value) => {
      if (!renderValidations(dataElement, template, false)) {
        onChange(nullNumParseFn(value));
      }
    };
    renderValidations(dataElement, template, true);
  }
}
class SettingBoolRenderer extends AbstractSettingRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_BOOL_TEMPLATE_ID;
  }
  renderTemplate(_container) {
    _container.classList.add("setting-item");
    _container.classList.add("setting-item-bool");
    const container = append(_container, $$2(AbstractSettingRenderer.CONTENTS_SELECTOR));
    container.classList.add("settings-row-inner-container");
    const titleElement = append(container, $$2(".setting-item-title"));
    const categoryElement = append(titleElement, $$2("span.setting-item-category"));
    const labelElementContainer = append(titleElement, $$2("span.setting-item-label"));
    const labelElement = new SimpleIconLabel(labelElementContainer);
    const indicatorsLabel = this._instantiationService.createInstance(SettingsTreeIndicatorsLabel, titleElement);
    const descriptionAndValueElement = append(container, $$2(".setting-item-value-description"));
    const controlElement = append(descriptionAndValueElement, $$2(".setting-item-bool-control"));
    const descriptionElement = append(descriptionAndValueElement, $$2(".setting-item-description"));
    const modifiedIndicatorElement = append(container, $$2(".setting-item-modified-indicator"));
    modifiedIndicatorElement.title = localize("modified", "The setting has been configured in the current scope.");
    const deprecationWarningElement = append(container, $$2(".setting-item-deprecation-message"));
    const toDispose = new DisposableStore();
    const checkbox = new Toggle(
      { icon: Codicon.check, actionClassName: "setting-value-checkbox", isChecked: true, title: "", ...unthemedToggleStyles }
    );
    controlElement.appendChild(checkbox.domNode);
    toDispose.add(checkbox);
    toDispose.add(checkbox.onChange(() => {
      template.onChange(checkbox.checked);
    }));
    toDispose.add(addDisposableListener(descriptionElement, EventType.MOUSE_DOWN, (e) => {
      const targetElement = e.target;
      if (targetElement.tagName.toLowerCase() !== "a") {
        template.checkbox.checked = !template.checkbox.checked;
        template.onChange(checkbox.checked);
      }
      EventHelper.stop(e);
    }));
    checkbox.domNode.classList.add(AbstractSettingRenderer.CONTROL_CLASS);
    const toolbarContainer = append(container, $$2(".setting-toolbar-container"));
    const toolbar = this.renderSettingToolbar(toolbarContainer);
    toDispose.add(toolbar);
    const template = {
      toDispose,
      elementDisposables: toDispose.add(new DisposableStore()),
      containerElement: container,
      categoryElement,
      labelElement,
      controlElement,
      checkbox,
      descriptionElement,
      deprecationWarningElement,
      indicatorsLabel,
      toolbar
    };
    this.addSettingElementFocusHandler(template);
    toDispose.add(addDisposableListener(controlElement, "mousedown", (e) => e.stopPropagation()));
    toDispose.add(addDisposableListener(titleElement, EventType.MOUSE_ENTER, (e) => container.classList.add("mouseover")));
    toDispose.add(addDisposableListener(titleElement, EventType.MOUSE_LEAVE, (e) => container.classList.remove("mouseover")));
    return template;
  }
  renderElement(element, index, templateData) {
    super.renderSettingElement(element, index, templateData);
  }
  renderValue(dataElement, template, onChange) {
    template.onChange = void 0;
    template.checkbox.checked = dataElement.value;
    template.checkbox.setTitle(dataElement.setting.key);
    template.onChange = onChange;
  }
}
class SettingsExtensionToggleRenderer extends AbstractSettingRenderer {
  constructor() {
    super(...arguments);
    this.templateId = SETTINGS_EXTENSION_TOGGLE_TEMPLATE_ID;
  }
  renderTemplate(_container) {
    const common = super.renderCommonTemplate(null, _container, "extension-toggle");
    const actionButton = new Button(common.containerElement, {
      title: false,
      ...defaultButtonStyles
    });
    actionButton.element.classList.add("setting-item-extension-toggle-button");
    actionButton.label = localize("showExtension", "Show Extension");
    const template = {
      ...common,
      actionButton
    };
    this.addSettingElementFocusHandler(template);
    return template;
  }
  renderElement(element, index, templateData) {
    super.renderSettingElement(element, index, templateData);
  }
  renderValue(dataElement, template, onChange) {
    template.elementDisposables.clear();
    const extensionId = dataElement.setting.displayExtensionId;
    template.elementDisposables.add(template.actionButton.onDidClick(async () => {
      this._telemetryService.publicLog2("ManageExtensionClick", { extensionId });
      this._commandService.executeCommand("extension.open", extensionId);
    }));
  }
}
let SettingTreeRenderers = class SettingTreeRenderers2 {
  constructor(_instantiationService, _contextMenuService, _contextViewService, _userDataProfilesService, _userDataSyncEnablementService) {
    this._instantiationService = _instantiationService;
    this._contextMenuService = _contextMenuService;
    this._contextViewService = _contextViewService;
    this._userDataProfilesService = _userDataProfilesService;
    this._userDataSyncEnablementService = _userDataSyncEnablementService;
    this._onDidChangeSetting = new Emitter();
    this.settingActions = [
      new Action("settings.resetSetting", localize("resetSettingLabel", "Reset Setting"), void 0, void 0, async (context) => {
        if (context instanceof SettingsTreeSettingElement) {
          if (!context.isUntrusted) {
            this._onDidChangeSetting.fire({
              key: context.setting.key,
              value: void 0,
              type: context.setting.type,
              manualReset: true,
              scope: context.setting.scope
            });
          }
        }
      }),
      new Separator(),
      this._instantiationService.createInstance(CopySettingIdAction),
      this._instantiationService.createInstance(CopySettingAsJSONAction)
    ];
    const actionFactory = (setting, settingTarget) => this.getActionsForSetting(setting, settingTarget);
    const emptyActionFactory = (_) => [];
    const settingRenderers = [
      this._instantiationService.createInstance(SettingBoolRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingNumberRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingArrayRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingComplexRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingTextRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingMultilineTextRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingExcludeRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingIncludeRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingEnumRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingObjectRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingBoolObjectRenderer, this.settingActions, actionFactory),
      this._instantiationService.createInstance(SettingsExtensionToggleRenderer, [], emptyActionFactory)
    ];
    this.onDidClickOverrideElement = Event.any(...settingRenderers.map((r) => r.onDidClickOverrideElement));
    this.onDidChangeSetting = Event.any(...settingRenderers.map((r) => r.onDidChangeSetting), this._onDidChangeSetting.event);
    this.onDidOpenSettings = Event.any(...settingRenderers.map((r) => r.onDidOpenSettings));
    this.onDidClickSettingLink = Event.any(...settingRenderers.map((r) => r.onDidClickSettingLink));
    this.onDidFocusSetting = Event.any(...settingRenderers.map((r) => r.onDidFocusSetting));
    this.onDidChangeSettingHeight = Event.any(...settingRenderers.map((r) => r.onDidChangeSettingHeight));
    this.onApplyFilter = Event.any(...settingRenderers.map((r) => r.onApplyFilter));
    this.allRenderers = [
      ...settingRenderers,
      this._instantiationService.createInstance(SettingGroupRenderer),
      this._instantiationService.createInstance(SettingNewExtensionsRenderer)
    ];
  }
  getActionsForSetting(setting, settingTarget) {
    const actions = [];
    if (this._userDataProfilesService.isEnabled() && setting.scope !== 1 && settingTarget === 3) {
      actions.push(this._instantiationService.createInstance(ApplySettingToAllProfilesAction, setting));
    }
    if (this._userDataSyncEnablementService.isEnabled() && !setting.disallowSyncIgnore) {
      actions.push(this._instantiationService.createInstance(SyncSettingAction, setting));
    }
    if (actions.length) {
      actions.splice(0, 0, new Separator());
    }
    return actions;
  }
  cancelSuggesters() {
    this._contextViewService.hideContextView();
  }
  showContextMenu(element, settingDOMElement) {
    const toolbarElement = settingDOMElement.querySelector(".monaco-toolbar");
    if (toolbarElement) {
      this._contextMenuService.showContextMenu({
        getActions: () => this.settingActions,
        getAnchor: () => toolbarElement,
        getActionsContext: () => element
      });
    }
  }
  getSettingDOMElementForDOMElement(domElement) {
    const parent = findParentWithClass(domElement, AbstractSettingRenderer.CONTENTS_CLASS);
    if (parent) {
      return parent;
    }
    return null;
  }
  getDOMElementsForSettingKey(treeContainer, key) {
    return treeContainer.querySelectorAll(`[${AbstractSettingRenderer.SETTING_KEY_ATTR}="${key}"]`);
  }
  getKeyForDOMElementInSetting(element) {
    const settingElement = this.getSettingDOMElementForDOMElement(element);
    return settingElement && settingElement.getAttribute(AbstractSettingRenderer.SETTING_KEY_ATTR);
  }
  getIdForDOMElementInSetting(element) {
    const settingElement = this.getSettingDOMElementForDOMElement(element);
    return settingElement && settingElement.getAttribute(AbstractSettingRenderer.SETTING_ID_ATTR);
  }
};
SettingTreeRenderers = __decorate([
  __param(0, IInstantiationService),
  __param(1, IContextMenuService),
  __param(2, IContextViewService),
  __param(3, IUserDataProfilesService),
  __param(4, IUserDataSyncEnablementService)
], SettingTreeRenderers);
function renderValidations(dataElement, template, calledOnStartup) {
  if (dataElement.setting.validator) {
    const errMsg = dataElement.setting.validator(template.inputBox.value);
    if (errMsg) {
      template.containerElement.classList.add("invalid-input");
      template.validationErrorMessageElement.innerText = errMsg;
      const validationError = localize("validationError", "Validation Error.");
      template.inputBox.inputElement.parentElement.setAttribute("aria-label", [validationError, errMsg].join(" "));
      if (!calledOnStartup) {
        status(validationError + " " + errMsg);
      }
      return true;
    } else {
      template.inputBox.inputElement.parentElement.removeAttribute("aria-label");
    }
  }
  template.containerElement.classList.remove("invalid-input");
  return false;
}
function renderArrayValidations(dataElement, template, value, calledOnStartup) {
  template.containerElement.classList.add("invalid-input");
  if (dataElement.setting.validator) {
    const errMsg = dataElement.setting.validator(value);
    if (errMsg && errMsg !== "") {
      template.containerElement.classList.add("invalid-input");
      template.validationErrorMessageElement.innerText = errMsg;
      const validationError = localize("validationError", "Validation Error.");
      template.containerElement.setAttribute("aria-label", [dataElement.setting.key, validationError, errMsg].join(" "));
      if (!calledOnStartup) {
        status(validationError + " " + errMsg);
      }
      return true;
    } else {
      template.containerElement.setAttribute("aria-label", dataElement.setting.key);
      template.containerElement.classList.remove("invalid-input");
    }
  }
  return false;
}
function cleanRenderedMarkdown(element) {
  for (let i = 0; i < element.childNodes.length; i++) {
    const child = element.childNodes.item(i);
    const tagName = child.tagName && child.tagName.toLowerCase();
    if (tagName === "img") {
      element.removeChild(child);
    } else {
      cleanRenderedMarkdown(child);
    }
  }
}
function fixSettingLinks(text, linkify = true) {
  return text.replace(/`#([^#\s`]+)#`|'#([^#\s']+)#'/g, (match, backticksGroup, quotesGroup) => {
    const settingKey = backticksGroup ?? quotesGroup;
    const targetDisplayFormat = settingKeyToDisplayFormat(settingKey);
    const targetName = `${targetDisplayFormat.category}: ${targetDisplayFormat.label}`;
    return linkify ? `[${targetName}](#${settingKey} "${settingKey}")` : `"${targetName}"`;
  });
}
function escapeInvisibleChars(enumValue) {
  return enumValue && enumValue.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
}
let SettingsTreeFilter = class SettingsTreeFilter2 {
  constructor(viewState, environmentService) {
    this.viewState = viewState;
    this.environmentService = environmentService;
  }
  filter(element, parentVisibility) {
    var _a2;
    if (this.viewState.filterToCategory && element instanceof SettingsTreeSettingElement) {
      if (!this.settingContainedInGroup(element.setting, this.viewState.filterToCategory)) {
        return false;
      }
    }
    if (element instanceof SettingsTreeSettingElement && this.viewState.settingsTarget !== 3) {
      const isRemote = !!this.environmentService.remoteAuthority;
      if (!element.matchesScope(this.viewState.settingsTarget, isRemote)) {
        return false;
      }
    }
    if (element instanceof SettingsTreeGroupElement) {
      if (typeof element.count === "number") {
        return element.count > 0;
      }
      return 2;
    }
    if (element instanceof SettingsTreeNewExtensionsElement) {
      if (((_a2 = this.viewState.tagFilters) == null ? void 0 : _a2.size) || this.viewState.filterToCategory) {
        return false;
      }
    }
    return true;
  }
  settingContainedInGroup(setting, group) {
    return group.children.some((child) => {
      if (child instanceof SettingsTreeGroupElement) {
        return this.settingContainedInGroup(setting, child);
      } else if (child instanceof SettingsTreeSettingElement) {
        return child.setting.key === setting.key;
      } else {
        return false;
      }
    });
  }
};
SettingsTreeFilter = __decorate([
  __param(1, IWorkbenchEnvironmentService)
], SettingsTreeFilter);
class SettingsTreeDelegate extends CachedListVirtualDelegate {
  getTemplateId(element) {
    if (element instanceof SettingsTreeGroupElement) {
      return SETTINGS_ELEMENT_TEMPLATE_ID;
    }
    if (element instanceof SettingsTreeSettingElement) {
      if (element.valueType === SettingValueType.ExtensionToggle) {
        return SETTINGS_EXTENSION_TOGGLE_TEMPLATE_ID;
      }
      const invalidTypeError = element.isConfigured && getInvalidTypeError(element.value, element.setting.type);
      if (invalidTypeError) {
        return SETTINGS_COMPLEX_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.Boolean) {
        return SETTINGS_BOOL_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.Integer || element.valueType === SettingValueType.Number || element.valueType === SettingValueType.NullableInteger || element.valueType === SettingValueType.NullableNumber) {
        return SETTINGS_NUMBER_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.MultilineString) {
        return SETTINGS_MULTILINE_TEXT_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.String) {
        return SETTINGS_TEXT_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.Enum) {
        return SETTINGS_ENUM_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.Array) {
        return SETTINGS_ARRAY_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.Exclude) {
        return SETTINGS_EXCLUDE_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.Include) {
        return SETTINGS_INCLUDE_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.Object) {
        return SETTINGS_OBJECT_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.BooleanObject) {
        return SETTINGS_BOOL_OBJECT_TEMPLATE_ID;
      }
      if (element.valueType === SettingValueType.LanguageTag) {
        return SETTINGS_COMPLEX_TEMPLATE_ID;
      }
      return SETTINGS_COMPLEX_TEMPLATE_ID;
    }
    if (element instanceof SettingsTreeNewExtensionsElement) {
      return SETTINGS_NEW_EXTENSIONS_TEMPLATE_ID;
    }
    throw new Error("unknown element type: " + element);
  }
  hasDynamicHeight(element) {
    return !(element instanceof SettingsTreeGroupElement);
  }
  estimateHeight(element) {
    if (element instanceof SettingsTreeGroupElement) {
      return 42;
    }
    return element instanceof SettingsTreeSettingElement && element.valueType === SettingValueType.Boolean ? 78 : 104;
  }
}
class NonCollapsibleObjectTreeModel extends ObjectTreeModel {
  isCollapsible(element) {
    return false;
  }
  setCollapsed(element, collapsed, recursive) {
    return false;
  }
}
class SettingsTreeAccessibilityProvider {
  constructor(configurationService, languageService, userDataProfilesService) {
    this.configurationService = configurationService;
    this.languageService = languageService;
    this.userDataProfilesService = userDataProfilesService;
  }
  getAriaLabel(element) {
    if (element instanceof SettingsTreeSettingElement) {
      const ariaLabelSections = [];
      ariaLabelSections.push(`${element.displayCategory} ${element.displayLabel}.`);
      if (element.isConfigured) {
        const modifiedText = localize("settings.Modified", "Modified.");
        ariaLabelSections.push(modifiedText);
      }
      const indicatorsLabelAriaLabel = getIndicatorsLabelAriaLabel(element, this.configurationService, this.userDataProfilesService, this.languageService);
      if (indicatorsLabelAriaLabel.length) {
        ariaLabelSections.push(`${indicatorsLabelAriaLabel}.`);
      }
      const descriptionWithoutSettingLinks = renderMarkdownAsPlaintext({ value: fixSettingLinks(element.description, false) });
      if (descriptionWithoutSettingLinks.length) {
        ariaLabelSections.push(descriptionWithoutSettingLinks);
      }
      return ariaLabelSections.join(" ");
    } else if (element instanceof SettingsTreeGroupElement) {
      return element.label;
    } else {
      return element.id;
    }
  }
  getWidgetAriaLabel() {
    return localize("settings", "Settings");
  }
}
let SettingsTree = class SettingsTree2 extends WorkbenchObjectTree {
  constructor(container, viewState, renderers, contextKeyService, listService, configurationService, instantiationService, languageService, userDataProfilesService) {
    super("SettingsTree", container, new SettingsTreeDelegate(), renderers, {
      horizontalScrolling: false,
      supportDynamicHeights: true,
      identityProvider: {
        getId(e) {
          return e.id;
        }
      },
      accessibilityProvider: new SettingsTreeAccessibilityProvider(configurationService, languageService, userDataProfilesService),
      styleController: (id) => new DefaultStyleController(createStyleSheet(container), id),
      filter: instantiationService.createInstance(SettingsTreeFilter, viewState),
      smoothScrolling: configurationService.getValue("workbench.list.smoothScrolling"),
      multipleSelectionSupport: false,
      findWidgetEnabled: false,
      renderIndentGuides: RenderIndentGuides.None
    }, instantiationService, contextKeyService, listService, configurationService);
    this.getHTMLElement().classList.add("settings-editor-tree");
    this.style(getListStyles({
      listBackground: editorBackground,
      listActiveSelectionBackground: editorBackground,
      listActiveSelectionForeground: foreground,
      listFocusAndSelectionBackground: editorBackground,
      listFocusAndSelectionForeground: foreground,
      listFocusBackground: editorBackground,
      listFocusForeground: foreground,
      listHoverForeground: foreground,
      listHoverBackground: editorBackground,
      listHoverOutline: editorBackground,
      listFocusOutline: editorBackground,
      listInactiveSelectionBackground: editorBackground,
      listInactiveSelectionForeground: foreground,
      listInactiveFocusBackground: editorBackground,
      listInactiveFocusOutline: editorBackground,
      treeIndentGuidesStroke: void 0,
      treeInactiveIndentGuidesStroke: void 0
    }));
    this.disposables.add(configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("workbench.list.smoothScrolling")) {
        this.updateOptions({
          smoothScrolling: configurationService.getValue("workbench.list.smoothScrolling")
        });
      }
    }));
  }
  createModel(user, view, options) {
    return new NonCollapsibleObjectTreeModel(user, view, options);
  }
};
SettingsTree = __decorate([
  __param(3, IContextKeyService),
  __param(4, IListService),
  __param(5, IWorkbenchConfigurationService),
  __param(6, IInstantiationService),
  __param(7, ILanguageService),
  __param(8, IUserDataProfilesService)
], SettingsTree);
let CopySettingIdAction = (_n = class extends Action {
  constructor(clipboardService) {
    super(_n.ID, _n.LABEL);
    this.clipboardService = clipboardService;
  }
  async run(context) {
    if (context) {
      await this.clipboardService.writeText(context.setting.key);
    }
    return Promise.resolve(void 0);
  }
}, _n.ID = "settings.copySettingId", _n.LABEL = localize("copySettingIdLabel", "Copy Setting ID"), _n);
CopySettingIdAction = __decorate([
  __param(0, IClipboardService)
], CopySettingIdAction);
let CopySettingAsJSONAction = (_o = class extends Action {
  constructor(clipboardService) {
    super(_o.ID, _o.LABEL);
    this.clipboardService = clipboardService;
  }
  async run(context) {
    if (context) {
      const jsonResult = `"${context.setting.key}": ${JSON.stringify(context.value, void 0, "  ")}`;
      await this.clipboardService.writeText(jsonResult);
    }
    return Promise.resolve(void 0);
  }
}, _o.ID = "settings.copySettingAsJSON", _o.LABEL = localize("copySettingAsJSONLabel", "Copy Setting as JSON"), _o);
CopySettingAsJSONAction = __decorate([
  __param(0, IClipboardService)
], CopySettingAsJSONAction);
let SyncSettingAction = (_p = class extends Action {
  constructor(setting, configService) {
    super(_p.ID, _p.LABEL);
    this.setting = setting;
    this.configService = configService;
    this._register(Event.filter(configService.onDidChangeConfiguration, (e) => e.affectsConfiguration("settingsSync.ignoredSettings"))(() => this.update()));
    this.update();
  }
  async update() {
    const ignoredSettings = getIgnoredSettings(getDefaultIgnoredSettings(), this.configService);
    this.checked = !ignoredSettings.includes(this.setting.key);
  }
  async run() {
    let currentValue = [...this.configService.getValue("settingsSync.ignoredSettings")];
    currentValue = currentValue.filter((v) => v !== this.setting.key && v !== `-${this.setting.key}`);
    const defaultIgnoredSettings = getDefaultIgnoredSettings();
    const isDefaultIgnored = defaultIgnoredSettings.includes(this.setting.key);
    const askedToSync = !this.checked;
    if (askedToSync && isDefaultIgnored) {
      currentValue.push(`-${this.setting.key}`);
    }
    if (!askedToSync && !isDefaultIgnored) {
      currentValue.push(this.setting.key);
    }
    this.configService.updateValue("settingsSync.ignoredSettings", currentValue.length ? currentValue : void 0, 2);
    return Promise.resolve(void 0);
  }
}, _p.ID = "settings.stopSyncingSetting", _p.LABEL = localize("stopSyncingSetting", "Sync This Setting"), _p);
SyncSettingAction = __decorate([
  __param(1, IConfigurationService)
], SyncSettingAction);
let ApplySettingToAllProfilesAction = (_q = class extends Action {
  constructor(setting, configService) {
    super(_q.ID, _q.LABEL);
    this.setting = setting;
    this.configService = configService;
    this._register(Event.filter(configService.onDidChangeConfiguration, (e) => e.affectsConfiguration(APPLY_ALL_PROFILES_SETTING))(() => this.update()));
    this.update();
  }
  update() {
    const allProfilesSettings = this.configService.getValue(APPLY_ALL_PROFILES_SETTING);
    this.checked = allProfilesSettings.includes(this.setting.key);
  }
  async run() {
    var _a2, _b2;
    const value = this.configService.getValue(APPLY_ALL_PROFILES_SETTING) ?? [];
    if (this.checked) {
      value.splice(value.indexOf(this.setting.key), 1);
    } else {
      value.push(this.setting.key);
    }
    const newValue = distinct(value);
    if (this.checked) {
      await this.configService.updateValue(this.setting.key, (_a2 = this.configService.inspect(this.setting.key).application) == null ? void 0 : _a2.value, 3);
      await this.configService.updateValue(APPLY_ALL_PROFILES_SETTING, newValue.length ? newValue : void 0, 3);
    } else {
      await this.configService.updateValue(APPLY_ALL_PROFILES_SETTING, newValue.length ? newValue : void 0, 3);
      await this.configService.updateValue(this.setting.key, (_b2 = this.configService.inspect(this.setting.key).userLocal) == null ? void 0 : _b2.value, 3);
    }
  }
}, _q.ID = "settings.applyToAllProfiles", _q.LABEL = localize("applyToAllProfiles", "Apply Setting to all Profiles"), _q);
ApplySettingToAllProfilesAction = __decorate([
  __param(1, IWorkbenchConfigurationService)
], ApplySettingToAllProfilesAction);
const $$1 = $$6;
let TOCTreeModel = class TOCTreeModel2 {
  constructor(_viewState, environmentService) {
    this._viewState = _viewState;
    this.environmentService = environmentService;
    this._currentSearchModel = null;
  }
  get settingsTreeRoot() {
    return this._settingsTreeRoot;
  }
  set settingsTreeRoot(value) {
    this._settingsTreeRoot = value;
    this.update();
  }
  get currentSearchModel() {
    return this._currentSearchModel;
  }
  set currentSearchModel(model) {
    this._currentSearchModel = model;
    this.update();
  }
  get children() {
    return this._settingsTreeRoot.children;
  }
  update() {
    if (this._settingsTreeRoot) {
      this.updateGroupCount(this._settingsTreeRoot);
    }
  }
  updateGroupCount(group) {
    group.children.forEach((child) => {
      if (child instanceof SettingsTreeGroupElement) {
        this.updateGroupCount(child);
      }
    });
    const childCount = group.children.filter((child) => child instanceof SettingsTreeGroupElement).reduce((acc, cur) => acc + cur.count, 0);
    group.count = childCount + this.getGroupCount(group);
  }
  getGroupCount(group) {
    return group.children.filter((child) => {
      if (!(child instanceof SettingsTreeSettingElement)) {
        return false;
      }
      if (this._currentSearchModel && !this._currentSearchModel.root.containsSetting(child.setting.key)) {
        return false;
      }
      const isRemote = !!this.environmentService.remoteAuthority;
      return child.matchesScope(this._viewState.settingsTarget, isRemote) && child.matchesAllTags(this._viewState.tagFilters) && child.matchesAnyFeature(this._viewState.featureFilters) && child.matchesAnyExtension(this._viewState.extensionFilters) && child.matchesAnyId(this._viewState.idFilters);
    }).length;
  }
};
TOCTreeModel = __decorate([
  __param(1, IWorkbenchEnvironmentService)
], TOCTreeModel);
const TOC_ENTRY_TEMPLATE_ID = "settings.toc.entry";
class TOCRenderer {
  constructor() {
    this.templateId = TOC_ENTRY_TEMPLATE_ID;
  }
  renderTemplate(container) {
    return {
      labelElement: append(container, $$1(".settings-toc-entry")),
      countElement: append(container, $$1(".settings-toc-count"))
    };
  }
  renderElement(node, index, template) {
    const element = node.element;
    const count = element.count;
    const label = element.label;
    template.labelElement.textContent = label;
    template.labelElement.title = label;
    if (count) {
      template.countElement.textContent = ` (${count})`;
    } else {
      template.countElement.textContent = "";
    }
  }
  disposeTemplate(templateData) {
  }
}
class TOCTreeDelegate {
  getTemplateId(element) {
    return TOC_ENTRY_TEMPLATE_ID;
  }
  getHeight(element) {
    return 22;
  }
}
function createTOCIterator(model, tree) {
  const groupChildren = model.children.filter((c) => c instanceof SettingsTreeGroupElement);
  return Iterable.map(groupChildren, (g) => {
    const hasGroupChildren = g.children.some((c) => c instanceof SettingsTreeGroupElement);
    return {
      element: g,
      collapsed: void 0,
      collapsible: hasGroupChildren,
      children: g instanceof SettingsTreeGroupElement ? createTOCIterator(g) : void 0
    };
  });
}
class SettingsAccessibilityProvider {
  getWidgetAriaLabel() {
    return localize({
      key: "settingsTOC",
      comment: ["A label for the table of contents for the full settings list"]
    }, "Settings Table of Contents");
  }
  getAriaLabel(element) {
    if (!element) {
      return "";
    }
    if (element instanceof SettingsTreeGroupElement) {
      return localize("groupRowAriaLabel", "{0}, group", element.label);
    }
    return "";
  }
  getAriaLevel(element) {
    let i = 1;
    while (element instanceof SettingsTreeGroupElement && element.parent) {
      i++;
      element = element.parent;
    }
    return i;
  }
}
let TOCTree = class TOCTree2 extends WorkbenchObjectTree {
  constructor(container, viewState, contextKeyService, listService, configurationService, instantiationService) {
    const filter = instantiationService.createInstance(SettingsTreeFilter, viewState);
    const options = {
      filter,
      multipleSelectionSupport: false,
      identityProvider: {
        getId(e) {
          return e.id;
        }
      },
      styleController: (id) => new DefaultStyleController(createStyleSheet(container), id),
      accessibilityProvider: instantiationService.createInstance(SettingsAccessibilityProvider),
      collapseByDefault: true,
      horizontalScrolling: false,
      hideTwistiesOfChildlessElements: true,
      renderIndentGuides: RenderIndentGuides.None
    };
    super("SettingsTOC", container, new TOCTreeDelegate(), [new TOCRenderer()], options, instantiationService, contextKeyService, listService, configurationService);
    this.style(getListStyles({
      listBackground: editorBackground,
      listFocusOutline: focusBorder,
      listActiveSelectionBackground: editorBackground,
      listActiveSelectionForeground: settingsHeaderForeground,
      listFocusAndSelectionBackground: editorBackground,
      listFocusAndSelectionForeground: settingsHeaderForeground,
      listFocusBackground: editorBackground,
      listFocusForeground: settingsHeaderHoverForeground,
      listHoverForeground: settingsHeaderHoverForeground,
      listHoverBackground: editorBackground,
      listInactiveSelectionBackground: editorBackground,
      listInactiveSelectionForeground: settingsHeaderForeground,
      listInactiveFocusBackground: editorBackground,
      listInactiveFocusOutline: editorBackground,
      treeIndentGuidesStroke: void 0,
      treeInactiveIndentGuidesStroke: void 0
    }));
  }
};
TOCTree = __decorate([
  __param(2, IContextKeyService),
  __param(3, IListService),
  __param(4, IConfigurationService),
  __param(5, IInstantiationService)
], TOCTree);
let SettingsSearchFilterDropdownMenuActionViewItem = class SettingsSearchFilterDropdownMenuActionViewItem2 extends DropdownMenuActionViewItem {
  constructor(action, actionRunner, searchWidget, contextMenuService) {
    super(action, { getActions: () => this.getActions() }, contextMenuService, {
      actionRunner,
      classNames: action.class,
      anchorAlignmentProvider: () => 1,
      menuAsChild: true
    });
    this.searchWidget = searchWidget;
    this.suggestController = SuggestController.get(this.searchWidget.inputWidget);
  }
  render(container) {
    super.render(container);
  }
  doSearchWidgetAction(queryToAppend, triggerSuggest) {
    this.searchWidget.setValue(this.searchWidget.getValue().trimEnd() + " " + queryToAppend);
    this.searchWidget.focus();
    if (triggerSuggest && this.suggestController) {
      this.suggestController.triggerSuggest();
    }
  }
  createAction(id, label, tooltip, queryToAppend, triggerSuggest) {
    return {
      id,
      label,
      tooltip,
      class: void 0,
      enabled: true,
      checked: false,
      run: () => {
        this.doSearchWidgetAction(queryToAppend, triggerSuggest);
      }
    };
  }
  createToggleAction(id, label, tooltip, queryToAppend) {
    const splitCurrentQuery = this.searchWidget.getValue().split(" ");
    const queryContainsQueryToAppend = splitCurrentQuery.includes(queryToAppend);
    return {
      id,
      label,
      tooltip,
      class: void 0,
      enabled: true,
      checked: queryContainsQueryToAppend,
      run: () => {
        if (!queryContainsQueryToAppend) {
          const trimmedCurrentQuery = this.searchWidget.getValue().trimEnd();
          const newQuery = trimmedCurrentQuery ? trimmedCurrentQuery + " " + queryToAppend : queryToAppend;
          this.searchWidget.setValue(newQuery);
        } else {
          const queryWithRemovedTags = this.searchWidget.getValue().split(" ").filter((word) => word !== queryToAppend).join(" ");
          this.searchWidget.setValue(queryWithRemovedTags);
        }
        this.searchWidget.focus();
      }
    };
  }
  getActions() {
    return [
      this.createToggleAction("modifiedSettingsSearch", localize("modifiedSettingsSearch", "Modified"), localize("modifiedSettingsSearchTooltip", "Add or remove modified settings filter"), `@${MODIFIED_SETTING_TAG}`),
      this.createAction("extSettingsSearch", localize("extSettingsSearch", "Extension ID..."), localize("extSettingsSearchTooltip", "Add extension ID filter"), `@${EXTENSION_SETTING_TAG}`, true),
      this.createAction("featuresSettingsSearch", localize("featureSettingsSearch", "Feature..."), localize("featureSettingsSearchTooltip", "Add feature filter"), `@${FEATURE_SETTING_TAG}`, true),
      this.createAction("tagSettingsSearch", localize("tagSettingsSearch", "Tag..."), localize("tagSettingsSearchTooltip", "Add tag filter"), `@${GENERAL_TAG_SETTING_TAG}`, true),
      this.createAction("langSettingsSearch", localize("langSettingsSearch", "Language..."), localize("langSettingsSearchTooltip", "Add language ID filter"), `@${LANGUAGE_SETTING_TAG}`, true),
      this.createToggleAction("onlineSettingsSearch", localize("onlineSettingsSearch", "Online services"), localize("onlineSettingsSearchTooltip", "Show settings for online services"), "@tag:usesOnlineServices"),
      this.createToggleAction("policySettingsSearch", localize("policySettingsSearch", "Policy services"), localize("policySettingsSearchTooltip", "Show settings for policy services"), `@${POLICY_SETTING_TAG}`)
    ];
  }
};
SettingsSearchFilterDropdownMenuActionViewItem = __decorate([
  __param(3, IContextMenuService)
], SettingsSearchFilterDropdownMenuActionViewItem);
function createGroupIterator(group) {
  return Iterable.map(group.children, (g) => {
    return {
      element: g,
      children: g instanceof SettingsTreeGroupElement ? createGroupIterator(g) : void 0
    };
  });
}
const $ = $$6;
const searchBoxLabel = localize("SearchSettings.AriaLabel", "Search settings");
const SETTINGS_EDITOR_STATE_KEY = "settingsEditorState";
let SettingsEditor2 = (_r = class extends EditorPane {
  static shouldSettingUpdateFast(type) {
    if (Array.isArray(type)) {
      return false;
    }
    return type === SettingValueType.Enum || type === SettingValueType.Array || type === SettingValueType.BooleanObject || type === SettingValueType.Object || type === SettingValueType.Complex || type === SettingValueType.Boolean || type === SettingValueType.Exclude || type === SettingValueType.Include;
  }
  constructor(telemetryService, configurationService, textResourceConfigurationService, themeService, preferencesService, instantiationService, preferencesSearchService, logService, contextKeyService, storageService, editorGroupService, userDataSyncWorkbenchService, userDataSyncEnablementService, workspaceTrustManagementService, extensionService, languageService, extensionManagementService, workbenchAssignmentService, productService, environmentService, extensionGalleryService) {
    super(_r.ID, telemetryService, themeService, storageService);
    this.configurationService = configurationService;
    this.preferencesService = preferencesService;
    this.instantiationService = instantiationService;
    this.preferencesSearchService = preferencesSearchService;
    this.logService = logService;
    this.storageService = storageService;
    this.editorGroupService = editorGroupService;
    this.userDataSyncWorkbenchService = userDataSyncWorkbenchService;
    this.userDataSyncEnablementService = userDataSyncEnablementService;
    this.workspaceTrustManagementService = workspaceTrustManagementService;
    this.extensionService = extensionService;
    this.languageService = languageService;
    this.workbenchAssignmentService = workbenchAssignmentService;
    this.productService = productService;
    this.environmentService = environmentService;
    this.extensionGalleryService = extensionGalleryService;
    this.searchInProgress = null;
    this.pendingSettingUpdate = null;
    this._searchResultModel = null;
    this.searchResultLabel = null;
    this.lastSyncedLabel = null;
    this._currentFocusContext = 0;
    this.hasWarnedMissingSettings = false;
    this.tocFocusedElement = null;
    this.treeFocusedElement = null;
    this.settingsTreeScrollTop = 0;
    this.installedExtensionIds = [];
    this.delayedFilterLogging = new Delayer(1e3);
    this.localSearchDelayer = new Delayer(300);
    this.remoteSearchThrottle = new ThrottledDelayer(200);
    this.viewState = { settingsTarget: 3 };
    this.settingFastUpdateDelayer = new Delayer(_r.SETTING_UPDATE_FAST_DEBOUNCE);
    this.settingSlowUpdateDelayer = new Delayer(_r.SETTING_UPDATE_SLOW_DEBOUNCE);
    this.searchInputDelayer = new Delayer(_r.SEARCH_DEBOUNCE);
    this.updatedConfigSchemaDelayer = new Delayer(_r.CONFIG_SCHEMA_UPDATE_DELAYER);
    this.inSettingsEditorContextKey = CONTEXT_SETTINGS_EDITOR.bindTo(contextKeyService);
    this.searchFocusContextKey = CONTEXT_SETTINGS_SEARCH_FOCUS.bindTo(contextKeyService);
    this.tocRowFocused = CONTEXT_TOC_ROW_FOCUS.bindTo(contextKeyService);
    this.settingRowFocused = CONTEXT_SETTINGS_ROW_FOCUS.bindTo(contextKeyService);
    this.scheduledRefreshes = /* @__PURE__ */ new Map();
    this.editorMemento = this.getEditorMemento(editorGroupService, textResourceConfigurationService, SETTINGS_EDITOR_STATE_KEY);
    this._register(configurationService.onDidChangeConfiguration((e) => {
      if (e.source !== 7) {
        this.onConfigUpdate(e.affectedKeys);
      }
    }));
    this._register(workspaceTrustManagementService.onDidChangeTrust(() => {
      var _a2;
      (_a2 = this.searchResultModel) == null ? void 0 : _a2.updateWorkspaceTrust(workspaceTrustManagementService.isWorkspaceTrusted());
      if (this.settingsTreeModel) {
        this.settingsTreeModel.updateWorkspaceTrust(workspaceTrustManagementService.isWorkspaceTrusted());
        this.renderTree();
      }
    }));
    this._register(configurationService.onDidChangeRestrictedSettings((e) => {
      if (e.default.length && this.currentSettingsModel) {
        this.updateElementsByKey(new Set(e.default));
      }
    }));
    this.modelDisposables = this._register(new DisposableStore());
    if (!_r.SUGGESTIONS.includes(`@${LANGUAGE_SETTING_TAG}`)) {
      _r.SUGGESTIONS.push(`@${LANGUAGE_SETTING_TAG}`);
    }
    extensionManagementService.getInstalled().then((extensions) => {
      this.installedExtensionIds = extensions.filter((ext) => ext.manifest && ext.manifest.contributes && ext.manifest.contributes.configuration).map((ext) => ext.identifier.id);
    });
  }
  get minimumWidth() {
    return _r.EDITOR_MIN_WIDTH;
  }
  get maximumWidth() {
    return Number.POSITIVE_INFINITY;
  }
  get minimumHeight() {
    return 180;
  }
  set minimumWidth(value) {
  }
  set maximumWidth(value) {
  }
  get currentSettingsModel() {
    return this.searchResultModel || this.settingsTreeModel;
  }
  get searchResultModel() {
    return this._searchResultModel;
  }
  set searchResultModel(value) {
    this._searchResultModel = value;
    this.rootElement.classList.toggle("search-mode", !!this._searchResultModel);
  }
  get focusedSettingDOMElement() {
    const focused = this.settingsTree.getFocus()[0];
    if (!(focused instanceof SettingsTreeSettingElement)) {
      return;
    }
    return this.settingRenderers.getDOMElementsForSettingKey(this.settingsTree.getHTMLElement(), focused.setting.key)[0];
  }
  get currentFocusContext() {
    return this._currentFocusContext;
  }
  createEditor(parent) {
    parent.setAttribute("tabindex", "-1");
    this.rootElement = append(parent, $(".settings-editor", { tabindex: "-1" }));
    this.createHeader(this.rootElement);
    this.createBody(this.rootElement);
    this.addCtrlAInterceptor(this.rootElement);
    this.updateStyles();
  }
  async setInput(input, options, context, token) {
    this.inSettingsEditorContextKey.set(true);
    await super.setInput(input, options, context, token);
    await timeout(0);
    if (!this.input) {
      return;
    }
    const model = await this.input.resolve(options);
    if (token.isCancellationRequested || !(model instanceof Settings2EditorModel)) {
      return;
    }
    this.modelDisposables.clear();
    this.modelDisposables.add(model.onDidChangeGroups(() => {
      this.updatedConfigSchemaDelayer.trigger(() => {
        this.onConfigUpdate(void 0, false, true);
      });
    }));
    this.defaultSettingsEditorModel = model;
    options = options || validateSettingsEditorOptions({});
    if (!this.viewState.settingsTarget || !this.settingsTargetsWidget.settingsTarget) {
      const optionsHasViewStateTarget = options.viewState && options.viewState.settingsTarget;
      if (!options.target && !optionsHasViewStateTarget) {
        options.target = 3;
      }
    }
    this._setOptions(options);
    this.onConfigUpdate(void 0, true).then(() => {
      this._register(input.onWillDispose(() => {
        this.searchWidget.setValue("");
      }));
      this.updateTreeScrollSync();
    });
  }
  restoreCachedState() {
    const cachedState = this.group && this.input && this.editorMemento.loadEditorState(this.group, this.input);
    if (cachedState && typeof cachedState.target === "object") {
      cachedState.target = URI.revive(cachedState.target);
    }
    if (cachedState) {
      const settingsTarget = cachedState.target;
      this.settingsTargetsWidget.settingsTarget = settingsTarget;
      this.viewState.settingsTarget = settingsTarget;
      this.searchWidget.setValue(cachedState.searchQuery);
    }
    if (this.input) {
      this.editorMemento.clearEditorState(this.input, this.group);
    }
    return withUndefinedAsNull(cachedState);
  }
  getViewState() {
    return this.viewState;
  }
  setOptions(options) {
    super.setOptions(options);
    if (options) {
      this._setOptions(options);
    }
  }
  _setOptions(options) {
    if (options.focusSearch && !isIOS) {
      this.focusSearch();
    }
    const recoveredViewState = options.viewState ? options.viewState : void 0;
    const query = (recoveredViewState == null ? void 0 : recoveredViewState.query) ?? options.query;
    if (query !== void 0) {
      this.searchWidget.setValue(query);
      this.viewState.query = query;
    }
    const target = options.folderUri ?? (recoveredViewState == null ? void 0 : recoveredViewState.settingsTarget) ?? options.target;
    if (target) {
      this.settingsTargetsWidget.settingsTarget = target;
      this.viewState.settingsTarget = target;
    }
  }
  clearInput() {
    this.inSettingsEditorContextKey.set(false);
    super.clearInput();
  }
  layout(dimension) {
    this.dimension = dimension;
    if (!this.isVisible()) {
      return;
    }
    this.layoutSplitView(dimension);
    const innerWidth = Math.min(this.headerContainer.clientWidth, dimension.width) - 24 * 2;
    const monacoWidth = innerWidth - 10 - this.countElement.clientWidth - this.controlsElement.clientWidth - 12;
    this.searchWidget.layout(new Dimension(monacoWidth, 20));
    this.rootElement.classList.toggle("narrow-width", dimension.width < _r.NARROW_TOTAL_WIDTH);
  }
  focus() {
    if (this._currentFocusContext === 0) {
      if (!isIOS) {
        this.focusSearch();
      }
    } else if (this._currentFocusContext === 3) {
      const element = this.focusedSettingDOMElement;
      if (element) {
        const control = element.querySelector(AbstractSettingRenderer.CONTROL_SELECTOR);
        if (control) {
          control.focus();
          return;
        }
      }
    } else if (this._currentFocusContext === 2) {
      this.settingsTree.domFocus();
    } else if (this._currentFocusContext === 1) {
      this.tocTree.domFocus();
    }
  }
  setEditorVisible(visible, group) {
    super.setEditorVisible(visible, group);
    if (!visible) {
      setTimeout(() => {
        this.searchWidget.onHide();
      }, 0);
    }
  }
  focusSettings(focusSettingInput = false) {
    const focused = this.settingsTree.getFocus();
    if (!focused.length) {
      this.settingsTree.focusFirst();
    }
    this.settingsTree.domFocus();
    if (focusSettingInput) {
      const controlInFocusedRow = this.settingsTree.getHTMLElement().querySelector(`.focused ${AbstractSettingRenderer.CONTROL_SELECTOR}`);
      if (controlInFocusedRow) {
        controlInFocusedRow.focus();
      }
    }
  }
  focusTOC() {
    this.tocTree.domFocus();
  }
  showContextMenu() {
    const focused = this.settingsTree.getFocus()[0];
    const rowElement = this.focusedSettingDOMElement;
    if (rowElement && focused instanceof SettingsTreeSettingElement) {
      this.settingRenderers.showContextMenu(focused, rowElement);
    }
  }
  focusSearch(filter, selectAll = true) {
    if (filter && this.searchWidget) {
      this.searchWidget.setValue(filter);
    }
    this.searchWidget.focus(selectAll);
  }
  clearSearchResults() {
    this.searchWidget.setValue("");
    this.focusSearch();
  }
  clearSearchFilters() {
    const query = this.searchWidget.getValue();
    const splitQuery = query.split(" ").filter((word) => {
      return word.length && !_r.SUGGESTIONS.some((suggestion) => word.startsWith(suggestion));
    });
    this.searchWidget.setValue(splitQuery.join(" "));
  }
  updateInputAriaLabel() {
    let label = searchBoxLabel;
    if (this.searchResultLabel) {
      label += `. ${this.searchResultLabel}`;
    }
    if (this.lastSyncedLabel) {
      label += `. ${this.lastSyncedLabel}`;
    }
    this.searchWidget.updateAriaLabel(label);
  }
  createHeader(parent) {
    this.headerContainer = append(parent, $(".settings-header"));
    const searchContainer = append(this.headerContainer, $(".search-container"));
    const clearInputAction = new Action(SETTINGS_EDITOR_COMMAND_CLEAR_SEARCH_RESULTS, localize("clearInput", "Clear Settings Search Input"), ThemeIcon.asClassName(preferencesClearInputIcon), false, async () => this.clearSearchResults());
    const filterAction = new Action(SETTINGS_EDITOR_COMMAND_SUGGEST_FILTERS, localize("filterInput", "Filter Settings"), ThemeIcon.asClassName(preferencesFilterIcon));
    this.searchWidget = this._register(this.instantiationService.createInstance(SuggestEnabledInput, `${_r.ID}.searchbox`, searchContainer, {
      triggerCharacters: ["@", ":"],
      provideResults: (query) => {
        const queryParts = query.split(/\s/g);
        if (queryParts[queryParts.length - 1].startsWith(`@${LANGUAGE_SETTING_TAG}`)) {
          const sortedLanguages = this.languageService.getRegisteredLanguageIds().map((languageId) => {
            return `@${LANGUAGE_SETTING_TAG}${languageId} `;
          }).sort();
          return sortedLanguages.filter((langFilter) => !query.includes(langFilter));
        } else if (queryParts[queryParts.length - 1].startsWith(`@${EXTENSION_SETTING_TAG}`)) {
          const installedExtensionsTags = this.installedExtensionIds.map((extensionId) => {
            return `@${EXTENSION_SETTING_TAG}${extensionId} `;
          }).sort();
          return installedExtensionsTags.filter((extFilter) => !query.includes(extFilter));
        } else if (queryParts[queryParts.length - 1].startsWith("@")) {
          return _r.SUGGESTIONS.filter((tag) => !query.includes(tag)).map((tag) => tag.endsWith(":") ? tag : tag + " ");
        }
        return [];
      }
    }, searchBoxLabel, "settingseditor:searchinput" + _r.NUM_INSTANCES++, {
      placeholderText: searchBoxLabel,
      focusContextKey: this.searchFocusContextKey,
      styleOverrides: {
        inputBorder: settingsTextInputBorder
      }
    }));
    this._register(this.searchWidget.onDidFocus(() => {
      this._currentFocusContext = 0;
    }));
    this.countElement = append(searchContainer, $$6(".settings-count-widget.monaco-count-badge.long"));
    this.countElement.style.backgroundColor = asCssVariable(badgeBackground);
    this.countElement.style.color = asCssVariable(badgeForeground);
    this.countElement.style.border = `1px solid ${asCssVariable(contrastBorder)}`;
    this._register(this.searchWidget.onInputDidChange(() => {
      const searchVal = this.searchWidget.getValue();
      clearInputAction.enabled = !!searchVal;
      this.searchInputDelayer.trigger(() => this.onSearchInputChanged());
    }));
    const headerControlsContainer = append(this.headerContainer, $(".settings-header-controls"));
    headerControlsContainer.style.borderColor = asCssVariable(settingsHeaderBorder);
    const targetWidgetContainer = append(headerControlsContainer, $(".settings-target-container"));
    this.settingsTargetsWidget = this._register(this.instantiationService.createInstance(SettingsTargetsWidget, targetWidgetContainer, { enableRemoteSettings: true }));
    this.settingsTargetsWidget.settingsTarget = 3;
    this.settingsTargetsWidget.onDidTargetChange((target) => this.onDidSettingsTargetChange(target));
    this._register(addDisposableListener(targetWidgetContainer, EventType.KEY_DOWN, (e) => {
      const event = new StandardKeyboardEvent(e);
      if (event.keyCode === 18) {
        this.focusSettings();
      }
    }));
    if (this.userDataSyncWorkbenchService.enabled && this.userDataSyncEnablementService.canToggleEnablement()) {
      const syncControls = this._register(this.instantiationService.createInstance(SyncControls, headerControlsContainer));
      this._register(syncControls.onDidChangeLastSyncedLabel((lastSyncedLabel) => {
        this.lastSyncedLabel = lastSyncedLabel;
        this.updateInputAriaLabel();
      }));
    }
    this.controlsElement = append(searchContainer, $$6(".settings-clear-widget"));
    const actionBar = this._register(new ActionBar(this.controlsElement, {
      animated: false,
      actionViewItemProvider: (action) => {
        if (action.id === filterAction.id) {
          return this.instantiationService.createInstance(SettingsSearchFilterDropdownMenuActionViewItem, action, this.actionRunner, this.searchWidget);
        }
        return void 0;
      }
    }));
    actionBar.push([clearInputAction, filterAction], { label: false, icon: true });
  }
  onDidSettingsTargetChange(target) {
    this.viewState.settingsTarget = target;
    this.onConfigUpdate(void 0, true);
  }
  onDidClickSetting(evt, recursed) {
    var _a2;
    const targetElement = (_a2 = this.currentSettingsModel.getElementsByName(evt.targetKey)) == null ? void 0 : _a2[0];
    let revealFailed = false;
    if (targetElement) {
      let sourceTop = 0.5;
      try {
        const _sourceTop = this.settingsTree.getRelativeTop(evt.source);
        if (_sourceTop !== null) {
          sourceTop = _sourceTop;
        }
      } catch {
      }
      if (this.viewState.filterToCategory && evt.source.displayCategory !== targetElement.displayCategory) {
        this.tocTree.setFocus([]);
      }
      try {
        this.settingsTree.reveal(targetElement, sourceTop);
      } catch (_) {
        revealFailed = true;
      }
      if (!revealFailed) {
        setTimeout(() => {
          this.settingsTree.setFocus([targetElement]);
        }, 50);
        const domElements = this.settingRenderers.getDOMElementsForSettingKey(this.settingsTree.getHTMLElement(), evt.targetKey);
        if (domElements && domElements[0]) {
          const control = domElements[0].querySelector(AbstractSettingRenderer.CONTROL_SELECTOR);
          if (control) {
            control.focus();
          }
        }
      }
    }
    if (!recursed && (!targetElement || revealFailed)) {
      const p = this.triggerSearch("");
      p.then(() => {
        this.searchWidget.setValue("");
        this.onDidClickSetting(evt, true);
      });
    }
  }
  switchToSettingsFile() {
    const query = parseQuery(this.searchWidget.getValue()).query;
    return this.openSettingsFile({ query });
  }
  async openSettingsFile(options) {
    var _a2;
    const currentSettingsTarget = this.settingsTargetsWidget.settingsTarget;
    const openOptions = { jsonEditor: true, ...options };
    if (currentSettingsTarget === 3) {
      if (options == null ? void 0 : options.revealSetting) {
        const configurationProperties = Registry.as(Extensions.Configuration).getConfigurationProperties();
        const configurationScope = (_a2 = configurationProperties[options == null ? void 0 : options.revealSetting.key]) == null ? void 0 : _a2.scope;
        if (configurationScope === 1) {
          return this.preferencesService.openApplicationSettings(openOptions);
        }
      }
      return this.preferencesService.openUserSettings(openOptions);
    } else if (currentSettingsTarget === 4) {
      return this.preferencesService.openRemoteSettings(openOptions);
    } else if (currentSettingsTarget === 5) {
      return this.preferencesService.openWorkspaceSettings(openOptions);
    } else if (URI.isUri(currentSettingsTarget)) {
      return this.preferencesService.openFolderSettings({ folderUri: currentSettingsTarget, ...openOptions });
    }
    return void 0;
  }
  createBody(parent) {
    this.bodyContainer = append(parent, $(".settings-body"));
    this.noResultsMessage = append(this.bodyContainer, $(".no-results-message"));
    this.noResultsMessage.innerText = localize("noResults", "No Settings Found");
    this.clearFilterLinkContainer = $("span.clear-search-filters");
    this.clearFilterLinkContainer.textContent = " - ";
    const clearFilterLink = append(this.clearFilterLinkContainer, $("a.pointer.prominent", { tabindex: 0 }, localize("clearSearchFilters", "Clear Filters")));
    this._register(addDisposableListener(clearFilterLink, EventType.CLICK, (e) => {
      EventHelper.stop(e, false);
      this.clearSearchFilters();
    }));
    append(this.noResultsMessage, this.clearFilterLinkContainer);
    this.noResultsMessage.style.color = asCssVariable(editorForeground);
    this.tocTreeContainer = $(".settings-toc-container");
    this.settingsTreeContainer = $(".settings-tree-container");
    this.createTOC(this.tocTreeContainer);
    this.createSettingsTree(this.settingsTreeContainer);
    this.splitView = new SplitView(this.bodyContainer, {
      orientation: 1,
      proportionalLayout: true
    });
    const startingWidth = this.storageService.getNumber("settingsEditor2.splitViewWidth", 0, _r.TOC_RESET_WIDTH);
    this.splitView.addView({
      onDidChange: Event.None,
      element: this.tocTreeContainer,
      minimumSize: _r.TOC_MIN_WIDTH,
      maximumSize: Number.POSITIVE_INFINITY,
      layout: (width, _, height) => {
        this.tocTreeContainer.style.width = `${width}px`;
        this.tocTree.layout(height, width);
      }
    }, startingWidth, void 0, true);
    this.splitView.addView({
      onDidChange: Event.None,
      element: this.settingsTreeContainer,
      minimumSize: _r.EDITOR_MIN_WIDTH,
      maximumSize: Number.POSITIVE_INFINITY,
      layout: (width, _, height) => {
        this.settingsTreeContainer.style.width = `${width}px`;
        this.settingsTree.layout(height, width);
      }
    }, Sizing.Distribute, void 0, true);
    this._register(this.splitView.onDidSashReset(() => {
      const totalSize = this.splitView.getViewSize(0) + this.splitView.getViewSize(1);
      this.splitView.resizeView(0, _r.TOC_RESET_WIDTH);
      this.splitView.resizeView(1, totalSize - _r.TOC_RESET_WIDTH);
    }));
    this._register(this.splitView.onDidSashChange(() => {
      const width = this.splitView.getViewSize(0);
      this.storageService.store("settingsEditor2.splitViewWidth", width, 0, 0);
    }));
    const borderColor = this.theme.getColor(settingsSashBorder);
    this.splitView.style({ separatorBorder: borderColor });
  }
  addCtrlAInterceptor(container) {
    this._register(addStandardDisposableListener(container, EventType.KEY_DOWN, (e) => {
      if (e.keyCode === 31 && (isMacintosh ? e.metaKey : e.ctrlKey) && e.target.tagName !== "TEXTAREA" && e.target.tagName !== "INPUT") {
        e.browserEvent.stopPropagation();
        e.browserEvent.preventDefault();
      }
    }));
  }
  createTOC(container) {
    this.tocTreeModel = this.instantiationService.createInstance(TOCTreeModel, this.viewState);
    this.tocTree = this._register(this.instantiationService.createInstance(TOCTree, append(container, $(".settings-toc-wrapper", {
      "role": "navigation",
      "aria-label": localize("settings", "Settings")
    })), this.viewState));
    this._register(this.tocTree.onDidFocus(() => {
      this._currentFocusContext = 1;
    }));
    this._register(this.tocTree.onDidChangeFocus((e) => {
      var _a2;
      const element = withUndefinedAsNull((_a2 = e.elements) == null ? void 0 : _a2[0]);
      if (this.tocFocusedElement === element) {
        return;
      }
      this.tocFocusedElement = element;
      this.tocTree.setSelection(element ? [element] : []);
      if (this.searchResultModel) {
        if (this.viewState.filterToCategory !== element) {
          this.viewState.filterToCategory = withNullAsUndefined(element);
          this.renderTree(void 0, true);
          this.settingsTree.scrollTop = 0;
        }
      } else if (element && (!e.browserEvent || !e.browserEvent.fromScroll)) {
        this.settingsTree.reveal(element, 0);
        this.settingsTree.setFocus([element]);
      }
    }));
    this._register(this.tocTree.onDidFocus(() => {
      this.tocRowFocused.set(true);
    }));
    this._register(this.tocTree.onDidBlur(() => {
      this.tocRowFocused.set(false);
    }));
  }
  applyFilter(filter) {
    if (this.searchWidget && !this.searchWidget.getValue().includes(filter)) {
      const newQuery = `${filter} ${this.searchWidget.getValue().trimStart()}`;
      this.focusSearch(newQuery, false);
    }
  }
  removeLanguageFilters() {
    if (this.searchWidget && this.searchWidget.getValue().includes(`@${LANGUAGE_SETTING_TAG}`)) {
      const query = this.searchWidget.getValue().split(" ");
      const newQuery = query.filter((word) => !word.startsWith(`@${LANGUAGE_SETTING_TAG}`)).join(" ");
      this.focusSearch(newQuery, false);
    }
  }
  createSettingsTree(container) {
    this.settingRenderers = this.instantiationService.createInstance(SettingTreeRenderers);
    this._register(this.settingRenderers.onDidChangeSetting((e) => this.onDidChangeSetting(e.key, e.value, e.type, e.manualReset, e.scope)));
    this._register(this.settingRenderers.onDidOpenSettings((settingKey) => {
      this.openSettingsFile({ revealSetting: { key: settingKey, edit: true } });
    }));
    this._register(this.settingRenderers.onDidClickSettingLink((settingName) => this.onDidClickSetting(settingName)));
    this._register(this.settingRenderers.onDidFocusSetting((element) => {
      this.settingsTree.setFocus([element]);
      this._currentFocusContext = 3;
      this.settingRowFocused.set(false);
    }));
    this._register(this.settingRenderers.onDidChangeSettingHeight((params) => {
      const { element, height } = params;
      try {
        this.settingsTree.updateElementHeight(element, height);
      } catch (e) {
      }
    }));
    this._register(this.settingRenderers.onApplyFilter((filter) => this.applyFilter(filter)));
    this._register(this.settingRenderers.onDidClickOverrideElement((element) => {
      this.removeLanguageFilters();
      if (element.language) {
        this.applyFilter(`@${LANGUAGE_SETTING_TAG}${element.language}`);
      }
      if (element.scope === "workspace") {
        this.settingsTargetsWidget.updateTarget(5);
      } else if (element.scope === "user") {
        this.settingsTargetsWidget.updateTarget(3);
      } else if (element.scope === "remote") {
        this.settingsTargetsWidget.updateTarget(4);
      }
      this.applyFilter(`@${ID_SETTING_TAG}${element.settingKey}`);
    }));
    this.settingsTree = this._register(this.instantiationService.createInstance(SettingsTree, container, this.viewState, this.settingRenderers.allRenderers));
    this._register(this.settingsTree.onDidScroll(() => {
      if (this.settingsTree.scrollTop === this.settingsTreeScrollTop) {
        return;
      }
      this.settingsTreeScrollTop = this.settingsTree.scrollTop;
      setTimeout(() => {
        this.updateTreeScrollSync();
      }, 0);
    }));
    this._register(this.settingsTree.onDidFocus(() => {
      var _a2;
      const classList = (_a2 = document.activeElement) == null ? void 0 : _a2.classList;
      if (classList && classList.contains("monaco-list") && classList.contains("settings-editor-tree")) {
        this._currentFocusContext = 2;
        this.settingRowFocused.set(true);
        this.treeFocusedElement ?? (this.treeFocusedElement = withUndefinedAsNull(this.settingsTree.firstVisibleElement));
        if (this.treeFocusedElement) {
          this.treeFocusedElement.tabbable = true;
        }
      }
    }));
    this._register(this.settingsTree.onDidBlur(() => {
      this.settingRowFocused.set(false);
      this.treeFocusedElement = null;
    }));
    this._register(this.settingsTree.onDidChangeFocus((e) => {
      const element = e.elements[0];
      if (this.treeFocusedElement === element) {
        return;
      }
      if (this.treeFocusedElement) {
        this.treeFocusedElement.tabbable = false;
      }
      this.treeFocusedElement = element;
      if (this.treeFocusedElement) {
        this.treeFocusedElement.tabbable = true;
      }
      this.settingsTree.setSelection(element ? [element] : []);
    }));
  }
  onDidChangeSetting(key, value, type, manualReset, scope) {
    const parsedQuery = parseQuery(this.searchWidget.getValue());
    const languageFilter = parsedQuery.languageFilter;
    if (manualReset || this.pendingSettingUpdate && this.pendingSettingUpdate.key !== key) {
      this.updateChangedSetting(key, value, manualReset, languageFilter, scope);
    }
    this.pendingSettingUpdate = { key, value, languageFilter };
    if (_r.shouldSettingUpdateFast(type)) {
      this.settingFastUpdateDelayer.trigger(() => this.updateChangedSetting(key, value, manualReset, languageFilter, scope));
    } else {
      this.settingSlowUpdateDelayer.trigger(() => this.updateChangedSetting(key, value, manualReset, languageFilter, scope));
    }
  }
  updateTreeScrollSync() {
    this.settingRenderers.cancelSuggesters();
    if (this.searchResultModel) {
      return;
    }
    if (!this.tocTreeModel) {
      return;
    }
    const elementToSync = this.settingsTree.firstVisibleElement;
    const element = elementToSync instanceof SettingsTreeSettingElement ? elementToSync.parent : elementToSync instanceof SettingsTreeGroupElement ? elementToSync : null;
    let nodeExists = true;
    try {
      this.tocTree.getNode(element);
    } catch (e) {
      nodeExists = false;
    }
    if (!nodeExists) {
      return;
    }
    if (element && this.tocTree.getSelection()[0] !== element) {
      const ancestors = this.getAncestors(element);
      ancestors.forEach((e) => this.tocTree.expand(e));
      this.tocTree.reveal(element);
      const elementTop = this.tocTree.getRelativeTop(element);
      if (typeof elementTop !== "number") {
        return;
      }
      this.tocTree.collapseAll();
      ancestors.forEach((e) => this.tocTree.expand(e));
      if (elementTop < 0 || elementTop > 1) {
        this.tocTree.reveal(element);
      } else {
        this.tocTree.reveal(element, elementTop);
      }
      this.tocTree.expand(element);
      this.tocTree.setSelection([element]);
      const fakeKeyboardEvent = new KeyboardEvent("keydown");
      fakeKeyboardEvent.fromScroll = true;
      this.tocTree.setFocus([element], fakeKeyboardEvent);
    }
  }
  getAncestors(element) {
    const ancestors = [];
    while (element.parent) {
      if (element.parent.id !== "root") {
        ancestors.push(element.parent);
      }
      element = element.parent;
    }
    return ancestors.reverse();
  }
  updateChangedSetting(key, value, manualReset, languageFilter, scope) {
    const settingsTarget = this.settingsTargetsWidget.settingsTarget;
    const resource = URI.isUri(settingsTarget) ? settingsTarget : void 0;
    const configurationTarget = (resource ? 6 : settingsTarget) ?? 3;
    const overrides = { resource, overrideIdentifiers: languageFilter ? [languageFilter] : void 0 };
    const configurationTargetIsWorkspace = configurationTarget === 5 || configurationTarget === 6;
    const userPassedInManualReset = configurationTargetIsWorkspace || !!languageFilter;
    const isManualReset = userPassedInManualReset ? manualReset : value === void 0;
    const inspected = this.configurationService.inspect(key, overrides);
    if (!userPassedInManualReset && inspected.defaultValue === value) {
      value = void 0;
    }
    return this.configurationService.updateValue(key, value, overrides, configurationTarget, { handleDirtyFile: "save" }).then(() => {
      const query = this.searchWidget.getValue();
      if (query.includes(`@${MODIFIED_SETTING_TAG}`)) {
        this.refreshTOCTree();
      }
      this.renderTree(key, isManualReset);
      const reportModifiedProps = {
        key,
        query,
        searchResults: this.searchResultModel && this.searchResultModel.getUniqueResults(),
        rawResults: this.searchResultModel && this.searchResultModel.getRawResults(),
        showConfiguredOnly: !!this.viewState.tagFilters && this.viewState.tagFilters.has(MODIFIED_SETTING_TAG),
        isReset: typeof value === "undefined",
        settingsTarget: this.settingsTargetsWidget.settingsTarget
      };
      return this.reportModifiedSetting(reportModifiedProps);
    });
  }
  reportModifiedSetting(props) {
    this.pendingSettingUpdate = null;
    let groupId = void 0;
    let nlpIndex = void 0;
    let displayIndex = void 0;
    if (props.searchResults) {
      const remoteResult = props.searchResults[1];
      const localResult = props.searchResults[0];
      const localIndex = localResult.filterMatches.findIndex((m) => m.setting.key === props.key);
      groupId = localIndex >= 0 ? "local" : "remote";
      displayIndex = localIndex >= 0 ? localIndex : remoteResult && remoteResult.filterMatches.findIndex((m) => m.setting.key === props.key) + localResult.filterMatches.length;
      if (this.searchResultModel) {
        const rawResults = this.searchResultModel.getRawResults();
        if (rawResults[1]) {
          const _nlpIndex = rawResults[1].filterMatches.findIndex((m) => m.setting.key === props.key);
          nlpIndex = _nlpIndex >= 0 ? _nlpIndex : void 0;
        }
      }
    }
    const reportedTarget = props.settingsTarget === 3 ? "user" : props.settingsTarget === 4 ? "user_remote" : props.settingsTarget === 5 ? "workspace" : "folder";
    const data = {
      key: props.key,
      groupId,
      nlpIndex,
      displayIndex,
      showConfiguredOnly: props.showConfiguredOnly,
      isReset: props.isReset,
      target: reportedTarget
    };
    this.telemetryService.publicLog2("settingsEditor.settingModified", data);
  }
  onSearchModeToggled() {
    this.rootElement.classList.remove("no-toc-search");
    if (this.configurationService.getValue("workbench.settings.settingsSearchTocBehavior") === "hide") {
      this.rootElement.classList.toggle("no-toc-search", !!this.searchResultModel);
    }
  }
  scheduleRefresh(element, key = "") {
    if (key && this.scheduledRefreshes.has(key)) {
      return;
    }
    if (!key) {
      dispose(this.scheduledRefreshes.values());
      this.scheduledRefreshes.clear();
    }
    const scheduledRefreshTracker = trackFocus(element);
    this.scheduledRefreshes.set(key, scheduledRefreshTracker);
    scheduledRefreshTracker.onDidBlur(() => {
      scheduledRefreshTracker.dispose();
      this.scheduledRefreshes.delete(key);
      this.onConfigUpdate(/* @__PURE__ */ new Set([key]));
    });
  }
  addOrRemoveManageExtensionSetting(setting, extension, groups) {
    const matchingGroups = groups.filter((g) => {
      var _a2;
      const lowerCaseId = (_a2 = g.extensionInfo) == null ? void 0 : _a2.id.toLowerCase();
      return lowerCaseId === setting.stableExtensionId.toLowerCase() || lowerCaseId === setting.prereleaseExtensionId.toLowerCase();
    });
    const extensionId = setting.displayExtensionId;
    if (!matchingGroups.length) {
      const newGroup = {
        sections: [{
          settings: [setting]
        }],
        id: extensionId,
        title: setting.extensionGroupTitle,
        titleRange: nullRange,
        range: nullRange,
        extensionInfo: {
          id: extensionId,
          displayName: extension == null ? void 0 : extension.displayName
        }
      };
      groups.push(newGroup);
      return newGroup;
    } else if (matchingGroups.length >= 2) {
      const matchingGroupIndex = matchingGroups.findIndex((group) => group.sections.length === 1 && group.sections[0].settings.length === 1 && group.sections[0].settings[0].displayExtensionId);
      if (matchingGroupIndex !== -1) {
        groups.splice(matchingGroupIndex, 1);
      }
    }
    return void 0;
  }
  async onConfigUpdate(keys, forceRefresh = false, schemaChange = false) {
    var _a2, _b2;
    if (keys && this.settingsTreeModel) {
      return this.updateElementsByKey(keys);
    }
    if (!this.defaultSettingsEditorModel) {
      return;
    }
    const groups = this.defaultSettingsEditorModel.settingsGroups.slice(1);
    const coreSettings = groups.filter((g) => !g.extensionInfo);
    const settingsResult = resolveSettingsTree(tocData, coreSettings, this.logService);
    const resolvedSettingsRoot = settingsResult.tree;
    if (settingsResult.leftoverSettings.size && !this.hasWarnedMissingSettings) {
      const settingKeyList = [];
      settingsResult.leftoverSettings.forEach((s) => {
        settingKeyList.push(s.key);
      });
      this.logService.warn(`SettingsEditor2: Settings not included in settingsLayout.ts: ${settingKeyList.join(", ")}`);
      this.hasWarnedMissingSettings = true;
    }
    const additionalGroups = [];
    const toggleData = await getExperimentalExtensionToggleData(this.workbenchAssignmentService, this.environmentService, this.productService);
    if (toggleData && groups.filter((g) => g.extensionInfo).length) {
      for (const key in toggleData.settingsEditorRecommendedExtensions) {
        const prerelease = toggleData.settingsEditorRecommendedExtensions[key].onSettingsEditorOpen.prerelease;
        const extensionId = typeof prerelease === "string" && this.productService.quality !== "stable" ? prerelease : key;
        const [extension] = await this.extensionGalleryService.getExtensions([{ id: extensionId }], CancellationToken.None);
        if (!extension) {
          continue;
        }
        let groupTitle;
        const manifest = await this.extensionGalleryService.getManifest(extension, CancellationToken.None);
        const contributesConfiguration = (_a2 = manifest == null ? void 0 : manifest.contributes) == null ? void 0 : _a2.configuration;
        if (!Array.isArray(contributesConfiguration)) {
          groupTitle = contributesConfiguration == null ? void 0 : contributesConfiguration.title;
        } else if (contributesConfiguration.length === 1) {
          groupTitle = contributesConfiguration[0].title;
        }
        const extensionName = (extension == null ? void 0 : extension.displayName) ?? (extension == null ? void 0 : extension.name) ?? extensionId;
        const settingKey = `${key}.manageExtension`;
        const setting = {
          range: nullRange,
          key: settingKey,
          keyRange: nullRange,
          value: null,
          valueRange: nullRange,
          description: [(extension == null ? void 0 : extension.description) || ""],
          descriptionIsMarkdown: false,
          descriptionRanges: [],
          title: extensionName,
          scope: 3,
          type: "null",
          displayExtensionId: extensionId,
          stableExtensionId: key,
          prereleaseExtensionId: typeof prerelease === "string" ? prerelease : key,
          extensionGroupTitle: groupTitle ?? extensionName
        };
        const additionalGroup = this.addOrRemoveManageExtensionSetting(setting, extension, groups);
        if (additionalGroup) {
          additionalGroups.push(additionalGroup);
        }
      }
    }
    resolvedSettingsRoot.children.push(await createTocTreeForExtensionSettings(this.extensionService, groups.filter((g) => g.extensionInfo)));
    const commonlyUsedDataToUse = await getCommonlyUsedData(this.workbenchAssignmentService, this.environmentService, this.productService);
    const commonlyUsed = resolveSettingsTree(commonlyUsedDataToUse, groups, this.logService);
    resolvedSettingsRoot.children.unshift(commonlyUsed.tree);
    if (toggleData) {
      this.defaultSettingsEditorModel.setAdditionalGroups(additionalGroups);
    }
    if (!this.workspaceTrustManagementService.isWorkspaceTrusted() && (this.viewState.settingsTarget instanceof URI || this.viewState.settingsTarget === 5)) {
      const configuredUntrustedWorkspaceSettings = resolveConfiguredUntrustedSettings(groups, this.viewState.settingsTarget, this.viewState.languageFilter, this.configurationService);
      if (configuredUntrustedWorkspaceSettings.length) {
        resolvedSettingsRoot.children.unshift({
          id: "workspaceTrust",
          label: localize("settings require trust", "Workspace Trust"),
          settings: configuredUntrustedWorkspaceSettings
        });
      }
    }
    (_b2 = this.searchResultModel) == null ? void 0 : _b2.updateChildren();
    if (this.settingsTreeModel) {
      this.settingsTreeModel.update(resolvedSettingsRoot);
      if (schemaChange && !!this.searchResultModel) {
        return await this.onSearchInputChanged();
      }
      this.refreshTOCTree();
      this.renderTree(void 0, forceRefresh);
    } else {
      this.settingsTreeModel = this.instantiationService.createInstance(SettingsTreeModel, this.viewState, this.workspaceTrustManagementService.isWorkspaceTrusted());
      this.settingsTreeModel.update(resolvedSettingsRoot);
      this.tocTreeModel.settingsTreeRoot = this.settingsTreeModel.root;
      const cachedState = !this.viewState.query ? this.restoreCachedState() : void 0;
      if ((cachedState == null ? void 0 : cachedState.searchQuery) || this.searchWidget.getValue()) {
        await this.onSearchInputChanged();
      } else {
        this.refreshTOCTree();
        this.refreshTree();
        this.tocTree.collapseAll();
      }
    }
  }
  updateElementsByKey(keys) {
    if (keys.size) {
      if (this.searchResultModel) {
        keys.forEach((key) => this.searchResultModel.updateElementsByName(key));
      }
      if (this.settingsTreeModel) {
        keys.forEach((key) => this.settingsTreeModel.updateElementsByName(key));
      }
      this.renderTree();
    } else {
      this.renderTree();
    }
  }
  getActiveControlInSettingsTree() {
    return document.activeElement && isAncestor(document.activeElement, this.settingsTree.getHTMLElement()) ? document.activeElement : null;
  }
  renderTree(key, force = false) {
    if (!force && key && this.scheduledRefreshes.has(key)) {
      this.updateModifiedLabelForKey(key);
      return;
    }
    if (this.contextViewFocused()) {
      const element = document.querySelector(".context-view");
      if (element) {
        this.scheduleRefresh(element, key);
      }
      return;
    }
    const activeElement = this.getActiveControlInSettingsTree();
    const focusedSetting = activeElement && this.settingRenderers.getSettingDOMElementForDOMElement(activeElement);
    if (focusedSetting && !force) {
      if (key) {
        const focusedKey = focusedSetting.getAttribute(AbstractSettingRenderer.SETTING_KEY_ATTR);
        if (focusedKey === key && (focusedSetting.parentElement && !focusedSetting.parentElement.classList.contains("setting-item-list"))) {
          this.updateModifiedLabelForKey(key);
          this.scheduleRefresh(focusedSetting, key);
          return;
        }
      } else {
        this.scheduleRefresh(focusedSetting);
        return;
      }
    }
    this.renderResultCountMessages();
    if (key) {
      const elements = this.currentSettingsModel.getElementsByName(key);
      if (elements && elements.length) {
        this.refreshTree();
      } else {
        return;
      }
    } else {
      this.refreshTree();
    }
    return;
  }
  contextViewFocused() {
    return !!findParentWithClass(document.activeElement, "context-view");
  }
  refreshTree() {
    if (this.isVisible()) {
      this.settingsTree.setChildren(null, createGroupIterator(this.currentSettingsModel.root));
    }
  }
  refreshTOCTree() {
    if (this.isVisible()) {
      this.tocTreeModel.update();
      this.tocTree.setChildren(null, createTOCIterator(this.tocTreeModel));
    }
  }
  updateModifiedLabelForKey(key) {
    const dataElements = this.currentSettingsModel.getElementsByName(key);
    const isModified = dataElements && dataElements[0] && dataElements[0].isConfigured;
    const elements = this.settingRenderers.getDOMElementsForSettingKey(this.settingsTree.getHTMLElement(), key);
    if (elements && elements[0]) {
      elements[0].classList.toggle("is-configured", !!isModified);
    }
  }
  async onSearchInputChanged() {
    if (!this.currentSettingsModel) {
      return;
    }
    const query = this.searchWidget.getValue().trim();
    this.viewState.query = query;
    this.delayedFilterLogging.cancel();
    await this.triggerSearch(query.replace(/\u203A/g, " "));
    if (query && this.searchResultModel) {
      this.delayedFilterLogging.trigger(() => this.reportFilteringUsed(this.searchResultModel.getUniqueResults()));
    }
  }
  parseSettingFromJSON(query) {
    const match = query.match(/"([a-zA-Z.]+)": /);
    return match && match[1];
  }
  triggerSearch(query) {
    this.viewState.tagFilters = /* @__PURE__ */ new Set();
    this.viewState.extensionFilters = /* @__PURE__ */ new Set();
    this.viewState.featureFilters = /* @__PURE__ */ new Set();
    this.viewState.idFilters = /* @__PURE__ */ new Set();
    this.viewState.languageFilter = void 0;
    if (query) {
      const parsedQuery = parseQuery(query);
      query = parsedQuery.query;
      parsedQuery.tags.forEach((tag) => this.viewState.tagFilters.add(tag));
      parsedQuery.extensionFilters.forEach((extensionId) => this.viewState.extensionFilters.add(extensionId));
      parsedQuery.featureFilters.forEach((feature) => this.viewState.featureFilters.add(feature));
      parsedQuery.idFilters.forEach((id) => this.viewState.idFilters.add(id));
      this.viewState.languageFilter = parsedQuery.languageFilter;
    }
    this.settingsTargetsWidget.updateLanguageFilterIndicators(this.viewState.languageFilter);
    if (query && query !== "@") {
      query = this.parseSettingFromJSON(query) || query;
      return this.triggerFilterPreferences(query);
    } else {
      if (this.viewState.tagFilters.size || this.viewState.extensionFilters.size || this.viewState.featureFilters.size || this.viewState.idFilters.size || this.viewState.languageFilter) {
        this.searchResultModel = this.createFilterModel();
      } else {
        this.searchResultModel = null;
      }
      this.localSearchDelayer.cancel();
      this.remoteSearchThrottle.cancel();
      if (this.searchInProgress) {
        this.searchInProgress.cancel();
        this.searchInProgress.dispose();
        this.searchInProgress = null;
      }
      this.tocTree.setFocus([]);
      this.viewState.filterToCategory = void 0;
      this.tocTreeModel.currentSearchModel = this.searchResultModel;
      this.onSearchModeToggled();
      if (this.searchResultModel) {
        this.tocTree.setSelection([]);
        this.tocTree.expandAll();
        this.refreshTOCTree();
        this.renderResultCountMessages();
        this.refreshTree();
      } else {
        this.tocTree.collapseAll();
        this.refreshTOCTree();
        this.renderResultCountMessages();
        this.refreshTree();
      }
    }
    return Promise.resolve();
  }
  createFilterModel() {
    const filterModel = this.instantiationService.createInstance(SearchResultModel, this.viewState, this.workspaceTrustManagementService.isWorkspaceTrusted());
    const fullResult = {
      filterMatches: []
    };
    for (const g of this.defaultSettingsEditorModel.settingsGroups.slice(1)) {
      for (const sect of g.sections) {
        for (const setting of sect.settings) {
          fullResult.filterMatches.push({ setting, matches: [], matchType: SettingMatchType.None, score: 0 });
        }
      }
    }
    filterModel.setResult(0, fullResult);
    return filterModel;
  }
  reportFilteringUsed(results) {
    const nlpResult = results[1];
    const nlpMetadata = nlpResult == null ? void 0 : nlpResult.metadata;
    const duration = {
      nlpResult: nlpMetadata == null ? void 0 : nlpMetadata.duration
    };
    const counts = {};
    const filterResult = results[0];
    if (filterResult) {
      counts["filterResult"] = filterResult.filterMatches.length;
    }
    if (nlpResult) {
      counts["nlpResult"] = nlpResult.filterMatches.length;
    }
    const requestCount = nlpMetadata == null ? void 0 : nlpMetadata.requestCount;
    const data = {
      "durations.nlpResult": duration.nlpResult,
      "counts.nlpResult": counts["nlpResult"],
      "counts.filterResult": counts["filterResult"],
      requestCount
    };
    this.telemetryService.publicLog2("settingsEditor.filter", data);
  }
  triggerFilterPreferences(query) {
    if (this.searchInProgress) {
      this.searchInProgress.cancel();
      this.searchInProgress = null;
    }
    const searchInProgress = this.searchInProgress = new CancellationTokenSource();
    return this.localSearchDelayer.trigger(() => {
      if (searchInProgress && !searchInProgress.token.isCancellationRequested) {
        return this.localFilterPreferences(query).then((result) => {
          if (result && !result.exactMatch) {
            this.remoteSearchThrottle.trigger(() => {
              return searchInProgress && !searchInProgress.token.isCancellationRequested ? this.remoteSearchPreferences(query, this.searchInProgress.token) : Promise.resolve();
            });
          }
        });
      } else {
        return Promise.resolve();
      }
    });
  }
  localFilterPreferences(query, token) {
    const localSearchProvider = this.preferencesSearchService.getLocalSearchProvider(query);
    return this.filterOrSearchPreferences(query, 0, localSearchProvider, token);
  }
  remoteSearchPreferences(query, token) {
    const remoteSearchProvider = this.preferencesSearchService.getRemoteSearchProvider(query);
    const newExtSearchProvider = this.preferencesSearchService.getRemoteSearchProvider(query, true);
    return Promise.all([
      this.filterOrSearchPreferences(query, 1, remoteSearchProvider, token),
      this.filterOrSearchPreferences(query, 2, newExtSearchProvider, token)
    ]).then(() => {
    });
  }
  filterOrSearchPreferences(query, type, searchProvider, token) {
    return this._filterOrSearchPreferencesModel(query, this.defaultSettingsEditorModel, searchProvider, token).then((result) => {
      if (token && token.isCancellationRequested) {
        return null;
      }
      if (!this.searchResultModel) {
        this.searchResultModel = this.instantiationService.createInstance(SearchResultModel, this.viewState, this.workspaceTrustManagementService.isWorkspaceTrusted());
        this.searchResultModel.setResult(type, result);
        this.tocTreeModel.currentSearchModel = this.searchResultModel;
        this.onSearchModeToggled();
      } else {
        this.searchResultModel.setResult(type, result);
        this.tocTreeModel.update();
      }
      if (type === 0) {
        this.tocTree.setFocus([]);
        this.viewState.filterToCategory = void 0;
        this.tocTree.expandAll();
      }
      this.settingsTree.scrollTop = 0;
      this.refreshTOCTree();
      this.renderTree(void 0, true);
      return result;
    });
  }
  renderResultCountMessages() {
    if (!this.currentSettingsModel) {
      return;
    }
    this.clearFilterLinkContainer.style.display = this.viewState.tagFilters && this.viewState.tagFilters.size > 0 ? "initial" : "none";
    if (!this.searchResultModel) {
      if (this.countElement.style.display !== "none") {
        this.searchResultLabel = null;
        this.updateInputAriaLabel();
        this.countElement.style.display = "none";
        this.layout(this.dimension);
      }
      this.rootElement.classList.remove("no-results");
      this.splitView.el.style.visibility = "visible";
      return;
    } else {
      const count = this.searchResultModel.getUniqueResultsCount();
      let resultString;
      switch (count) {
        case 0:
          resultString = localize("noResults", "No Settings Found");
          break;
        case 1:
          resultString = localize("oneResult", "1 Setting Found");
          break;
        default:
          resultString = localize("moreThanOneResult", "{0} Settings Found", count);
      }
      this.searchResultLabel = resultString;
      this.updateInputAriaLabel();
      this.countElement.innerText = resultString;
      status(resultString);
      if (this.countElement.style.display !== "block") {
        this.countElement.style.display = "block";
        this.layout(this.dimension);
      }
      this.rootElement.classList.toggle("no-results", count === 0);
      this.splitView.el.style.visibility = count === 0 ? "hidden" : "visible";
    }
  }
  _filterOrSearchPreferencesModel(filter, model, provider, token) {
    const searchP = provider ? provider.searchModel(model, token) : Promise.resolve(null);
    return searchP.then(void 0, (err) => {
      if (isCancellationError(err)) {
        return Promise.reject(err);
      } else {
        return null;
      }
    });
  }
  layoutSplitView(dimension) {
    const listHeight = dimension.height - (72 + 11 + 14);
    this.splitView.el.style.height = `${listHeight}px`;
    this.splitView.layout(this.bodyContainer.clientWidth, listHeight);
    const firstViewWasVisible = this.splitView.isViewVisible(0);
    const firstViewVisible = this.bodyContainer.clientWidth >= _r.NARROW_TOTAL_WIDTH;
    this.splitView.setViewVisible(0, firstViewVisible);
    if (!firstViewWasVisible && firstViewVisible && this.bodyContainer.clientWidth >= _r.EDITOR_MIN_WIDTH + _r.TOC_RESET_WIDTH) {
      this.splitView.resizeView(0, _r.TOC_RESET_WIDTH);
    }
    this.splitView.style({
      separatorBorder: firstViewVisible ? this.theme.getColor(settingsSashBorder) : Color.transparent
    });
  }
  saveState() {
    if (this.isVisible()) {
      const searchQuery = this.searchWidget.getValue().trim();
      const target = this.settingsTargetsWidget.settingsTarget;
      if (this.group && this.input) {
        this.editorMemento.saveEditorState(this.group, this.input, { searchQuery, target });
      }
    } else if (this.group && this.input) {
      this.editorMemento.clearEditorState(this.input, this.group);
    }
    super.saveState();
  }
}, _r.ID = "workbench.editor.settings2", _r.NUM_INSTANCES = 0, _r.SEARCH_DEBOUNCE = 200, _r.SETTING_UPDATE_FAST_DEBOUNCE = 200, _r.SETTING_UPDATE_SLOW_DEBOUNCE = 1e3, _r.CONFIG_SCHEMA_UPDATE_DELAYER = 500, _r.TOC_MIN_WIDTH = 100, _r.TOC_RESET_WIDTH = 200, _r.EDITOR_MIN_WIDTH = 500, _r.NARROW_TOTAL_WIDTH = _r.TOC_RESET_WIDTH + _r.EDITOR_MIN_WIDTH, _r.SUGGESTIONS = [
  `@${MODIFIED_SETTING_TAG}`,
  "@tag:notebookLayout",
  "@tag:notebookOutputLayout",
  `@tag:${REQUIRE_TRUSTED_WORKSPACE_SETTING_TAG}`,
  `@tag:${WORKSPACE_TRUST_SETTING_TAG}`,
  "@tag:sync",
  "@tag:usesOnlineServices",
  "@tag:telemetry",
  "@tag:accessibility",
  `@${ID_SETTING_TAG}`,
  `@${EXTENSION_SETTING_TAG}`,
  `@${FEATURE_SETTING_TAG}scm`,
  `@${FEATURE_SETTING_TAG}explorer`,
  `@${FEATURE_SETTING_TAG}search`,
  `@${FEATURE_SETTING_TAG}debug`,
  `@${FEATURE_SETTING_TAG}extensions`,
  `@${FEATURE_SETTING_TAG}terminal`,
  `@${FEATURE_SETTING_TAG}task`,
  `@${FEATURE_SETTING_TAG}problems`,
  `@${FEATURE_SETTING_TAG}output`,
  `@${FEATURE_SETTING_TAG}comments`,
  `@${FEATURE_SETTING_TAG}remote`,
  `@${FEATURE_SETTING_TAG}timeline`,
  `@${FEATURE_SETTING_TAG}notebook`,
  `@${POLICY_SETTING_TAG}`
], _r);
SettingsEditor2 = __decorate([
  __param(0, ITelemetryService),
  __param(1, IWorkbenchConfigurationService),
  __param(2, ITextResourceConfigurationService),
  __param(3, IThemeService),
  __param(4, IPreferencesService),
  __param(5, IInstantiationService),
  __param(6, IPreferencesSearchService),
  __param(7, ILogService),
  __param(8, IContextKeyService),
  __param(9, IStorageService),
  __param(10, IEditorGroupsService),
  __param(11, IUserDataSyncWorkbenchService),
  __param(12, IUserDataSyncEnablementService),
  __param(13, IWorkspaceTrustManagementService),
  __param(14, IExtensionService),
  __param(15, ILanguageService),
  __param(16, IExtensionManagementService),
  __param(17, IWorkbenchAssignmentService),
  __param(18, IProductService),
  __param(19, IEnvironmentService),
  __param(20, IExtensionGalleryService)
], SettingsEditor2);
let SyncControls = class SyncControls2 extends Disposable {
  constructor(container, commandService, userDataSyncService, userDataSyncEnablementService) {
    super();
    this.commandService = commandService;
    this.userDataSyncService = userDataSyncService;
    this.userDataSyncEnablementService = userDataSyncEnablementService;
    this._onDidChangeLastSyncedLabel = this._register(new Emitter());
    this.onDidChangeLastSyncedLabel = this._onDidChangeLastSyncedLabel.event;
    const headerRightControlsContainer = append(container, $(".settings-right-controls"));
    const turnOnSyncButtonContainer = append(headerRightControlsContainer, $(".turn-on-sync"));
    this.turnOnSyncButton = this._register(new Button(turnOnSyncButtonContainer, { title: true, ...defaultButtonStyles }));
    this.lastSyncedLabel = append(headerRightControlsContainer, $(".last-synced-label"));
    hide(this.lastSyncedLabel);
    this.turnOnSyncButton.enabled = true;
    this.turnOnSyncButton.label = localize("turnOnSyncButton", "Turn on Settings Sync");
    hide(this.turnOnSyncButton.element);
    this._register(this.turnOnSyncButton.onDidClick(async () => {
      await this.commandService.executeCommand("workbench.userDataSync.actions.turnOn");
    }));
    this.updateLastSyncedTime();
    this._register(this.userDataSyncService.onDidChangeLastSyncTime(() => {
      this.updateLastSyncedTime();
    }));
    const updateLastSyncedTimer = this._register(new IntervalTimer());
    updateLastSyncedTimer.cancelAndSet(() => this.updateLastSyncedTime(), 60 * 1e3);
    this.update();
    this._register(this.userDataSyncService.onDidChangeStatus(() => {
      this.update();
    }));
    this._register(this.userDataSyncEnablementService.onDidChangeEnablement(() => {
      this.update();
    }));
  }
  updateLastSyncedTime() {
    const last = this.userDataSyncService.lastSyncTime;
    let label;
    if (typeof last === "number") {
      const d = fromNow(last, true, void 0, true);
      label = localize("lastSyncedLabel", "Last synced: {0}", d);
    } else {
      label = "";
    }
    this.lastSyncedLabel.textContent = label;
    this._onDidChangeLastSyncedLabel.fire(label);
  }
  update() {
    if (this.userDataSyncService.status === "uninitialized") {
      return;
    }
    if (this.userDataSyncEnablementService.isEnabled() || this.userDataSyncService.status !== "idle") {
      show(this.lastSyncedLabel);
      hide(this.turnOnSyncButton.element);
    } else {
      hide(this.lastSyncedLabel);
      show(this.turnOnSyncButton.element);
    }
  }
};
SyncControls = __decorate([
  __param(1, ICommandService),
  __param(2, IUserDataSyncService),
  __param(3, IUserDataSyncEnablementService)
], SyncControls);
const schemaRegistry = Registry.as(Extensions$1.JSONContribution);
let PreferencesContribution = class PreferencesContribution2 {
  constructor(modelService, textModelResolverService, preferencesService, languageService, userDataProfileService, workspaceService, configurationService, editorResolverService, textEditorService) {
    this.modelService = modelService;
    this.textModelResolverService = textModelResolverService;
    this.preferencesService = preferencesService;
    this.languageService = languageService;
    this.userDataProfileService = userDataProfileService;
    this.workspaceService = workspaceService;
    this.configurationService = configurationService;
    this.editorResolverService = editorResolverService;
    this.textEditorService = textEditorService;
    this.settingsListener = this.configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration(USE_SPLIT_JSON_SETTING) || e.affectsConfiguration(DEFAULT_SETTINGS_EDITOR_SETTING)) {
        this.handleSettingsEditorRegistration();
      }
    });
    this.handleSettingsEditorRegistration();
    this.start();
  }
  handleSettingsEditorRegistration() {
    dispose(this.editorOpeningListener);
    if (!!this.configurationService.getValue(USE_SPLIT_JSON_SETTING) || !!this.configurationService.getValue(DEFAULT_SETTINGS_EDITOR_SETTING)) {
      this.editorOpeningListener = this.editorResolverService.registerEditor("**/settings.json", {
        id: SideBySideEditorInput.ID,
        label: localize("splitSettingsEditorLabel", "Split Settings Editor"),
        priority: RegisteredEditorPriority.builtin
      }, {}, {
        createEditorInput: ({ resource, options }) => {
          if (isEqual(resource, this.userDataProfileService.currentProfile.settingsResource)) {
            return { editor: this.preferencesService.createSplitJsonEditorInput(3, resource), options };
          }
          const state = this.workspaceService.getWorkbenchState();
          if (state === 2) {
            const folders = this.workspaceService.getWorkspace().folders;
            if (isEqual(resource, folders[0].toResource(FOLDER_SETTINGS_PATH))) {
              return { editor: this.preferencesService.createSplitJsonEditorInput(5, resource), options };
            }
          } else if (state === 3) {
            const folders = this.workspaceService.getWorkspace().folders;
            for (const folder of folders) {
              if (isEqual(resource, folder.toResource(FOLDER_SETTINGS_PATH))) {
                return { editor: this.preferencesService.createSplitJsonEditorInput(6, resource), options };
              }
            }
          }
          return { editor: this.textEditorService.createTextEditor({ resource }), options };
        }
      });
    }
  }
  start() {
    this.textModelResolverService.registerTextModelContentProvider("vscode", {
      provideTextContent: async (uri) => {
        if (uri.scheme !== "vscode") {
          return null;
        }
        if (uri.authority === "schemas") {
          return this.getSchemaModel(uri);
        }
        return this.preferencesService.resolveModel(uri);
      }
    });
  }
  getSchemaModel(uri) {
    let schema = schemaRegistry.getSchemaContributions().schemas[uri.toString()] ?? {};
    const modelContent = JSON.stringify(schema);
    const languageSelection = this.languageService.createById("jsonc");
    const model = this.modelService.createModel(modelContent, languageSelection, uri);
    const disposables = new DisposableStore();
    disposables.add(schemaRegistry.onDidChangeSchema((schemaUri) => {
      if (schemaUri === uri.toString()) {
        schema = schemaRegistry.getSchemaContributions().schemas[uri.toString()];
        model.setValue(JSON.stringify(schema));
      }
    }));
    disposables.add(model.onWillDispose(() => disposables.dispose()));
    return model;
  }
  dispose() {
    dispose(this.editorOpeningListener);
    dispose(this.settingsListener);
  }
};
PreferencesContribution = __decorate([
  __param(0, IModelService),
  __param(1, ITextModelService),
  __param(2, IPreferencesService),
  __param(3, ILanguageService),
  __param(4, IUserDataProfileService),
  __param(5, IWorkspaceContextService),
  __param(6, IConfigurationService),
  __param(7, IEditorResolverService),
  __param(8, ITextEditorService)
], PreferencesContribution);
const registry = Registry.as(Extensions.Configuration);
registry.registerConfiguration({
  ...workbenchConfigurationNodeBase,
  "properties": {
    "workbench.settings.enableNaturalLanguageSearch": {
      "type": "boolean",
      "description": localize(
        "enableNaturalLanguageSettingsSearch",
        "Controls whether to enable the natural language search mode for settings. The natural language search is provided by a Microsoft online service."
      ),
      "default": true,
      "scope": 3,
      "tags": ["usesOnlineServices"]
    },
    "workbench.settings.settingsSearchTocBehavior": {
      "type": "string",
      "enum": ["hide", "filter"],
      "enumDescriptions": [
        localize(
          "settingsSearchTocBehavior.hide",
          "Hide the Table of Contents while searching."
        ),
        localize(
          "settingsSearchTocBehavior.filter",
          "Filter the Table of Contents to just categories that have matching settings. Clicking a category will filter the results to that category."
        )
      ],
      "description": localize(
        "settingsSearchTocBehavior",
        "Controls the behavior of the settings editor Table of Contents while searching."
      ),
      "default": "filter",
      "scope": 3
    }
  }
});
const SETTINGS_EDITOR_COMMAND_SEARCH = "settings.action.search";
const SETTINGS_EDITOR_COMMAND_FOCUS_FILE = "settings.action.focusSettingsFile";
const SETTINGS_EDITOR_COMMAND_FOCUS_SETTINGS_FROM_SEARCH = "settings.action.focusSettingsFromSearch";
const SETTINGS_EDITOR_COMMAND_FOCUS_SETTINGS_LIST = "settings.action.focusSettingsList";
const SETTINGS_EDITOR_COMMAND_FOCUS_TOC = "settings.action.focusTOC";
const SETTINGS_EDITOR_COMMAND_FOCUS_CONTROL = "settings.action.focusSettingControl";
const SETTINGS_EDITOR_COMMAND_FOCUS_UP = "settings.action.focusLevelUp";
const SETTINGS_EDITOR_COMMAND_SWITCH_TO_JSON = "settings.switchToJSON";
const SETTINGS_EDITOR_COMMAND_FILTER_ONLINE = "settings.filterByOnline";
const SETTINGS_COMMAND_OPEN_SETTINGS = "workbench.action.openSettings";
const SETTINGS_COMMAND_FILTER_TELEMETRY = "settings.filterByTelemetry";
Registry.as(EditorExtensions.EditorPane).registerEditorPane(EditorPaneDescriptor.create(SettingsEditor2, SettingsEditor2.ID, localize("settingsEditor2", "Settings Editor 2")), [
  new SyncDescriptor(SettingsEditor2Input)
]);
Registry.as(EditorExtensions.EditorPane).registerEditorPane(EditorPaneDescriptor.create(KeybindingsEditor, KeybindingsEditor.ID, localize("keybindingsEditor", "Keybindings Editor")), [
  new SyncDescriptor(KeybindingsEditorInput)
]);
const OPEN_USER_SETTINGS_UI_TITLE = { value: localize("openSettings2", "Open Settings (UI)"), original: "Open Settings (UI)" };
const OPEN_USER_SETTINGS_JSON_TITLE = { value: localize("openUserSettingsJson", "Open User Settings (JSON)"), original: "Open User Settings (JSON)" };
const category = { value: localize("preferences", "Preferences"), original: "Preferences" };
function sanitizeBoolean(arg) {
  return isBoolean(arg) ? arg : void 0;
}
function sanitizeString(arg) {
  return isString(arg) ? arg : void 0;
}
function sanitizeOpenSettingsArgs(args) {
  var _a2, _b2;
  if (!isObject(args)) {
    args = {};
  }
  let sanitizedObject = {
    focusSearch: sanitizeBoolean(args == null ? void 0 : args.focusSearch),
    openToSide: sanitizeBoolean(args == null ? void 0 : args.openToSide),
    query: sanitizeString(args == null ? void 0 : args.query)
  };
  if (isString((_a2 = args == null ? void 0 : args.revealSetting) == null ? void 0 : _a2.key)) {
    sanitizedObject = {
      ...sanitizedObject,
      revealSetting: {
        key: args.revealSetting.key,
        edit: sanitizeBoolean((_b2 = args.revealSetting) == null ? void 0 : _b2.edit)
      }
    };
  }
  return sanitizedObject;
}
let PreferencesActionsContribution = class PreferencesActionsContribution2 extends Disposable {
  constructor(environmentService, userDataProfileService, preferencesService, workspaceContextService, labelService, extensionService, userDataProfilesService) {
    super();
    this.environmentService = environmentService;
    this.userDataProfileService = userDataProfileService;
    this.preferencesService = preferencesService;
    this.workspaceContextService = workspaceContextService;
    this.labelService = labelService;
    this.extensionService = extensionService;
    this.userDataProfilesService = userDataProfilesService;
    this.registerSettingsActions();
    this.registerKeybindingsActions();
    this.updatePreferencesEditorMenuItem();
    this._register(workspaceContextService.onDidChangeWorkbenchState(() => this.updatePreferencesEditorMenuItem()));
    this._register(workspaceContextService.onDidChangeWorkspaceFolders(() => this.updatePreferencesEditorMenuItemForWorkspaceFolders()));
  }
  registerSettingsActions() {
    this._register(registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_COMMAND_OPEN_SETTINGS,
          title: {
            value: localize("settings", "Settings"),
            mnemonicTitle: localize(
              { key: "miOpenSettings", comment: ["&& denotes a mnemonic"] },
              "&&Settings"
            ),
            original: "Settings"
          },
          keybinding: {
            weight: 200,
            when: null,
            primary: 2048 | 87
          },
          menu: [{
            id: MenuId.GlobalActivity,
            group: "2_configuration",
            order: 1
          }, {
            id: MenuId.MenubarPreferencesMenu,
            group: "2_configuration",
            order: 1
          }]
        });
      }
      run(accessor, args) {
        const opts = typeof args === "string" ? { query: args } : sanitizeOpenSettingsArgs(args);
        return accessor.get(IPreferencesService).openSettings(opts);
      }
    }));
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: "workbench.action.openSettings2",
          title: { value: localize("openSettings2", "Open Settings (UI)"), original: "Open Settings (UI)" },
          category,
          f1: true
        });
      }
      run(accessor, args) {
        args = sanitizeOpenSettingsArgs(args);
        return accessor.get(IPreferencesService).openSettings({ jsonEditor: false, ...args });
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: "workbench.action.openSettingsJson",
          title: OPEN_USER_SETTINGS_JSON_TITLE,
          category,
          f1: true
        });
      }
      run(accessor, args) {
        args = sanitizeOpenSettingsArgs(args);
        return accessor.get(IPreferencesService).openSettings({ jsonEditor: true, ...args });
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: "workbench.action.openGlobalSettings",
          title: { value: localize("openGlobalSettings", "Open User Settings"), original: "Open User Settings" },
          category,
          f1: true
        });
      }
      run(accessor, args) {
        args = sanitizeOpenSettingsArgs(args);
        return accessor.get(IPreferencesService).openUserSettings(args);
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: "workbench.action.openRawDefaultSettings",
          title: { value: localize("openRawDefaultSettings", "Open Default Settings (JSON)"), original: "Open Default Settings (JSON)" },
          category,
          f1: true
        });
      }
      run(accessor) {
        return accessor.get(IPreferencesService).openRawDefaultSettings();
      }
    });
    const registerOpenUserSettingsEditorFromJsonActionDisposables = this._register(new MutableDisposable());
    const openUserSettingsEditorWhen = ContextKeyExpr.and(
      ContextKeyExpr.or(ResourceContextKey.Resource.isEqualTo(
        this.userDataProfileService.currentProfile.settingsResource.toString()
      ), ResourceContextKey.Resource.isEqualTo(
        this.userDataProfilesService.defaultProfile.settingsResource.toString()
      )),
      ContextKeyExpr.not("isInDiffEditor")
    );
    const registerOpenUserSettingsEditorFromJsonAction = () => {
      registerOpenUserSettingsEditorFromJsonActionDisposables.value = registerAction2(class extends Action2 {
        constructor() {
          super({
            id: "_workbench.openUserSettingsEditor",
            title: OPEN_USER_SETTINGS_UI_TITLE,
            icon: preferencesOpenSettingsIcon,
            menu: [{
              id: MenuId.EditorTitle,
              when: openUserSettingsEditorWhen,
              group: "navigation",
              order: 1
            }]
          });
        }
        run(accessor, args) {
          args = sanitizeOpenSettingsArgs(args);
          return accessor.get(IPreferencesService).openUserSettings({ jsonEditor: false, ...args });
        }
      });
    };
    const openSettingsJsonWhen = ContextKeyExpr.and(
      CONTEXT_SETTINGS_EDITOR,
      CONTEXT_SETTINGS_JSON_EDITOR.toNegated()
    );
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_SWITCH_TO_JSON,
          title: { value: localize("openSettingsJson", "Open Settings (JSON)"), original: "Open Settings (JSON)" },
          icon: preferencesOpenSettingsIcon,
          menu: [{
            id: MenuId.EditorTitle,
            when: openSettingsJsonWhen,
            group: "navigation",
            order: 1
          }]
        });
      }
      run(accessor) {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof SettingsEditor2) {
          return editorPane.switchToSettingsFile();
        }
        return null;
      }
    });
    registerOpenUserSettingsEditorFromJsonAction();
    this._register(this.userDataProfileService.onDidChangeCurrentProfile(() => {
      registerOpenUserSettingsEditorFromJsonAction();
    }));
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: ConfigureLanguageBasedSettingsAction.ID,
          title: ConfigureLanguageBasedSettingsAction.LABEL,
          category,
          f1: true
        });
      }
      run(accessor) {
        return accessor.get(IInstantiationService).createInstance(ConfigureLanguageBasedSettingsAction, ConfigureLanguageBasedSettingsAction.ID, ConfigureLanguageBasedSettingsAction.LABEL.value).run();
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: "workbench.action.openAccessibilitySettings",
          title: { value: localize("openAccessibilitySettings", "Open Accessibility Settings"), original: "Open Accessibility Settings" },
          category,
          menu: {
            id: MenuId.CommandPalette,
            when: WorkbenchStateContext.notEqualsTo("empty")
          }
        });
      }
      async run(accessor) {
        await accessor.get(IPreferencesService).openSettings({ jsonEditor: false, query: "@tag:accessibility" });
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: "workbench.action.openFolderSettings",
          title: { value: localize("openFolderSettings", "Open Folder Settings"), original: "Open Folder Settings" },
          category,
          menu: {
            id: MenuId.CommandPalette,
            when: WorkbenchStateContext.isEqualTo("workspace")
          }
        });
      }
      async run(accessor, args) {
        const commandService = accessor.get(ICommandService);
        const preferencesService = accessor.get(IPreferencesService);
        const workspaceFolder = await commandService.executeCommand(PICK_WORKSPACE_FOLDER_COMMAND_ID);
        if (workspaceFolder) {
          args = sanitizeOpenSettingsArgs(args);
          await preferencesService.openFolderSettings({ folderUri: workspaceFolder.uri, ...args });
        }
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: "workbench.action.openFolderSettingsFile",
          title: { value: localize("openFolderSettingsFile", "Open Folder Settings (JSON)"), original: "Open Folder Settings (JSON)" },
          category,
          menu: {
            id: MenuId.CommandPalette,
            when: WorkbenchStateContext.isEqualTo("workspace")
          }
        });
      }
      async run(accessor, args) {
        const commandService = accessor.get(ICommandService);
        const preferencesService = accessor.get(IPreferencesService);
        const workspaceFolder = await commandService.executeCommand(PICK_WORKSPACE_FOLDER_COMMAND_ID);
        if (workspaceFolder) {
          args = sanitizeOpenSettingsArgs(args);
          await preferencesService.openFolderSettings({ folderUri: workspaceFolder.uri, jsonEditor: true, ...args });
        }
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: "_workbench.action.openFolderSettings",
          title: { value: localize("openFolderSettings", "Open Folder Settings"), original: "Open Folder Settings" },
          category,
          menu: {
            id: MenuId.ExplorerContext,
            group: "2_workspace",
            order: 20,
            when: ContextKeyExpr.and(ExplorerRootContext, ExplorerFolderContext)
          }
        });
      }
      run(accessor, resource) {
        return accessor.get(IPreferencesService).openFolderSettings({ folderUri: resource });
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_FILTER_ONLINE,
          title: localize(
            { key: "miOpenOnlineSettings", comment: ["&& denotes a mnemonic"] },
            "&&Online Services Settings"
          ),
          menu: {
            id: MenuId.MenubarPreferencesMenu,
            group: "3_settings",
            order: 1
          }
        });
      }
      run(accessor) {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof SettingsEditor2) {
          editorPane.focusSearch(`@tag:usesOnlineServices`);
        } else {
          accessor.get(IPreferencesService).openSettings({ jsonEditor: false, query: "@tag:usesOnlineServices" });
        }
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_COMMAND_FILTER_TELEMETRY,
          title: localize(
            { key: "miOpenTelemetrySettings", comment: ["&& denotes a mnemonic"] },
            "&&Telemetry Settings"
          )
        });
      }
      run(accessor) {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof SettingsEditor2) {
          editorPane.focusSearch(`@tag:telemetry`);
        } else {
          accessor.get(IPreferencesService).openSettings({ jsonEditor: false, query: "@tag:telemetry" });
        }
      }
    });
    this.registerSettingsEditorActions();
    this.extensionService.whenInstalledExtensionsRegistered().then(() => {
      const remoteAuthority = this.environmentService.remoteAuthority;
      this.labelService.getHostLabel(Schemas.vscodeRemote, remoteAuthority) || remoteAuthority;
    });
  }
  registerSettingsEditorActions() {
    function getPreferencesEditor(accessor) {
      const activeEditorPane = accessor.get(IEditorService).activeEditorPane;
      if (activeEditorPane instanceof SettingsEditor2) {
        return activeEditorPane;
      }
      return null;
    }
    function settingsEditorFocusSearch(accessor) {
      const preferencesEditor = getPreferencesEditor(accessor);
      preferencesEditor == null ? void 0 : preferencesEditor.focusSearch();
    }
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_SEARCH,
          precondition: CONTEXT_SETTINGS_EDITOR,
          keybinding: {
            primary: 2048 | 36,
            weight: 100,
            when: null
          },
          category,
          f1: true,
          title: { value: localize("settings.focusSearch", "Focus Settings Search"), original: "Focus Settings Search" }
        });
      }
      run(accessor) {
        settingsEditorFocusSearch(accessor);
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_CLEAR_SEARCH_RESULTS,
          precondition: CONTEXT_SETTINGS_EDITOR,
          keybinding: {
            primary: 9,
            weight: 100,
            when: CONTEXT_SETTINGS_SEARCH_FOCUS
          },
          category,
          f1: true,
          title: { value: localize("settings.clearResults", "Clear Settings Search Results"), original: "Clear Settings Search Results" }
        });
      }
      run(accessor) {
        const preferencesEditor = getPreferencesEditor(accessor);
        preferencesEditor == null ? void 0 : preferencesEditor.clearSearchResults();
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_FOCUS_FILE,
          precondition: ContextKeyExpr.and(CONTEXT_SETTINGS_SEARCH_FOCUS, Context.Visible.toNegated()),
          keybinding: {
            primary: 18,
            weight: 100,
            when: null
          },
          title: localize("settings.focusFile", "Focus settings file")
        });
      }
      run(accessor, args) {
        const preferencesEditor = getPreferencesEditor(accessor);
        preferencesEditor == null ? void 0 : preferencesEditor.focusSettings();
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_FOCUS_SETTINGS_FROM_SEARCH,
          precondition: ContextKeyExpr.and(CONTEXT_SETTINGS_SEARCH_FOCUS, Context.Visible.toNegated()),
          keybinding: {
            primary: 18,
            weight: 200,
            when: null
          },
          title: localize("settings.focusFile", "Focus settings file")
        });
      }
      run(accessor, args) {
        const preferencesEditor = getPreferencesEditor(accessor);
        preferencesEditor == null ? void 0 : preferencesEditor.focusSettings();
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_FOCUS_SETTINGS_LIST,
          precondition: ContextKeyExpr.and(CONTEXT_SETTINGS_EDITOR, CONTEXT_TOC_ROW_FOCUS),
          keybinding: {
            primary: 3,
            weight: 200,
            when: null
          },
          title: localize("settings.focusSettingsList", "Focus settings list")
        });
      }
      run(accessor) {
        const preferencesEditor = getPreferencesEditor(accessor);
        if (preferencesEditor instanceof SettingsEditor2) {
          preferencesEditor.focusSettings();
        }
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_FOCUS_TOC,
          precondition: CONTEXT_SETTINGS_EDITOR,
          f1: true,
          keybinding: [
            {
              primary: 15,
              weight: 200,
              when: CONTEXT_SETTINGS_ROW_FOCUS
            }
          ],
          category,
          title: { value: localize("settings.focusSettingsTOC", "Focus Settings Table of Contents"), original: "Focus Settings Table of Contents" }
        });
      }
      run(accessor) {
        const preferencesEditor = getPreferencesEditor(accessor);
        if (!(preferencesEditor instanceof SettingsEditor2)) {
          return;
        }
        preferencesEditor.focusTOC();
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_FOCUS_CONTROL,
          precondition: ContextKeyExpr.and(CONTEXT_SETTINGS_EDITOR, CONTEXT_SETTINGS_ROW_FOCUS),
          keybinding: {
            primary: 3,
            weight: 200
          },
          title: localize("settings.focusSettingControl", "Focus Setting Control")
        });
      }
      run(accessor) {
        var _a2;
        const preferencesEditor = getPreferencesEditor(accessor);
        if (!(preferencesEditor instanceof SettingsEditor2)) {
          return;
        }
        if ((_a2 = document.activeElement) == null ? void 0 : _a2.classList.contains("monaco-list")) {
          preferencesEditor.focusSettings(true);
        }
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_SHOW_CONTEXT_MENU,
          precondition: CONTEXT_SETTINGS_EDITOR,
          keybinding: {
            primary: 1024 | 67,
            weight: 200,
            when: null
          },
          f1: true,
          category,
          title: { value: localize("settings.showContextMenu", "Show Setting Context Menu"), original: "Show Setting Context Menu" }
        });
      }
      run(accessor) {
        const preferencesEditor = getPreferencesEditor(accessor);
        if (preferencesEditor instanceof SettingsEditor2) {
          preferencesEditor.showContextMenu();
        }
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: SETTINGS_EDITOR_COMMAND_FOCUS_UP,
          precondition: ContextKeyExpr.and(
            CONTEXT_SETTINGS_EDITOR,
            CONTEXT_SETTINGS_SEARCH_FOCUS.toNegated(),
            CONTEXT_SETTINGS_JSON_EDITOR.toNegated()
          ),
          keybinding: {
            primary: 9,
            weight: 200,
            when: null
          },
          f1: true,
          category,
          title: { value: localize("settings.focusLevelUp", "Move Focus Up One Level"), original: "Move Focus Up One Level" }
        });
      }
      run(accessor) {
        const preferencesEditor = getPreferencesEditor(accessor);
        if (!(preferencesEditor instanceof SettingsEditor2)) {
          return;
        }
        if (preferencesEditor.currentFocusContext === 3) {
          preferencesEditor.focusSettings();
        } else if (preferencesEditor.currentFocusContext === 2) {
          preferencesEditor.focusTOC();
        } else if (preferencesEditor.currentFocusContext === 1) {
          preferencesEditor.focusSearch();
        }
      }
    });
  }
  registerKeybindingsActions() {
    const that = this;
    const category2 = { value: localize("preferences", "Preferences"), original: "Preferences" };
    const id = "workbench.action.openGlobalKeybindings";
    this._register(registerAction2(class extends Action2 {
      constructor() {
        super({
          id,
          title: { value: localize("openGlobalKeybindings", "Open Keyboard Shortcuts"), original: "Open Keyboard Shortcuts" },
          shortTitle: localize("keyboardShortcuts", "Keyboard Shortcuts"),
          category: category2,
          icon: preferencesOpenSettingsIcon,
          keybinding: {
            when: null,
            weight: 200,
            primary: KeyChord(2048 | 41, 2048 | 49)
          },
          menu: [
            { id: MenuId.CommandPalette },
            {
              id: MenuId.EditorTitle,
              when: ResourceContextKey.Resource.isEqualTo(
                that.userDataProfileService.currentProfile.keybindingsResource.toString()
              ),
              group: "navigation",
              order: 1
            },
            {
              id: MenuId.GlobalActivity,
              group: "2_configuration",
              order: 3
            }
          ]
        });
      }
      run(accessor, args) {
        const query = typeof args === "string" ? args : void 0;
        return accessor.get(IPreferencesService).openGlobalKeybindingSettings(false, { query });
      }
    }));
    this._register(MenuRegistry.appendMenuItem(MenuId.MenubarPreferencesMenu, {
      command: {
        id,
        title: localize("keyboardShortcuts", "Keyboard Shortcuts")
      },
      group: "2_configuration",
      order: 3
    }));
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: "workbench.action.openDefaultKeybindingsFile",
          title: { value: localize("openDefaultKeybindingsFile", "Open Default Keyboard Shortcuts (JSON)"), original: "Open Default Keyboard Shortcuts (JSON)" },
          category: category2,
          menu: { id: MenuId.CommandPalette }
        });
      }
      run(accessor) {
        return accessor.get(IPreferencesService).openDefaultKeybindingsFile();
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: "workbench.action.openGlobalKeybindingsFile",
          title: { value: localize("openGlobalKeybindingsFile", "Open Keyboard Shortcuts (JSON)"), original: "Open Keyboard Shortcuts (JSON)" },
          category: category2,
          icon: preferencesOpenSettingsIcon,
          menu: [
            { id: MenuId.CommandPalette },
            {
              id: MenuId.EditorTitle,
              when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR),
              group: "navigation"
            }
          ]
        });
      }
      run(accessor) {
        return accessor.get(IPreferencesService).openGlobalKeybindingSettings(true);
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: KEYBINDINGS_EDITOR_SHOW_DEFAULT_KEYBINDINGS,
          title: { value: localize("showDefaultKeybindings", "Show System Keybindings"), original: "Show System Keyboard Shortcuts" },
          menu: [
            {
              id: MenuId.EditorTitle,
              when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR),
              group: "1_keyboard_preferences_actions"
            }
          ]
        });
      }
      run(accessor) {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.search("@source:system");
        }
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: KEYBINDINGS_EDITOR_SHOW_EXTENSION_KEYBINDINGS,
          title: { value: localize("showExtensionKeybindings", "Show Extension Keybindings"), original: "Show Extension Keyboard Shortcuts" },
          menu: [
            {
              id: MenuId.EditorTitle,
              when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR),
              group: "1_keyboard_preferences_actions"
            }
          ]
        });
      }
      run(accessor) {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.search("@source:extension");
        }
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: KEYBINDINGS_EDITOR_SHOW_USER_KEYBINDINGS,
          title: { value: localize("showUserKeybindings", "Show User Keybindings"), original: "Show User Keyboard Shortcuts" },
          menu: [
            {
              id: MenuId.EditorTitle,
              when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR),
              group: "1_keyboard_preferences_actions"
            }
          ]
        });
      }
      run(accessor) {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.search("@source:user");
        }
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: KEYBINDINGS_EDITOR_COMMAND_CLEAR_SEARCH_RESULTS,
          title: localize("clear", "Clear Search Results"),
          keybinding: {
            weight: 200,
            when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR, CONTEXT_KEYBINDINGS_SEARCH_FOCUS),
            primary: 9
          }
        });
      }
      run(accessor) {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.clearSearchResults();
        }
      }
    });
    registerAction2(class extends Action2 {
      constructor() {
        super({
          id: KEYBINDINGS_EDITOR_COMMAND_CLEAR_SEARCH_HISTORY,
          title: localize("clearHistory", "Clear Keyboard Shortcuts Search History"),
          category: category2,
          menu: [
            {
              id: MenuId.CommandPalette,
              when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR)
            }
          ]
        });
      }
      run(accessor) {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.clearKeyboardShortcutSearchHistory();
        }
      }
    });
    this.registerKeybindingEditorActions();
  }
  registerKeybindingEditorActions() {
    const that = this;
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_DEFINE,
      weight: 200,
      when: ContextKeyExpr.and(
        CONTEXT_KEYBINDINGS_EDITOR,
        CONTEXT_KEYBINDING_FOCUS,
        CONTEXT_WHEN_FOCUS.toNegated()
      ),
      primary: 3,
      handler: (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.defineKeybinding(editorPane.activeKeybindingEntry, false);
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_ADD,
      weight: 200,
      when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR, CONTEXT_KEYBINDING_FOCUS),
      primary: KeyChord(2048 | 41, 2048 | 31),
      handler: (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.defineKeybinding(editorPane.activeKeybindingEntry, true);
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_DEFINE_WHEN,
      weight: 200,
      when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR, CONTEXT_KEYBINDING_FOCUS),
      primary: KeyChord(2048 | 41, 2048 | 35),
      handler: (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor && editorPane.activeKeybindingEntry.keybindingItem.keybinding) {
          editorPane.defineWhenExpression(editorPane.activeKeybindingEntry);
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_REMOVE,
      weight: 200,
      when: ContextKeyExpr.and(
        CONTEXT_KEYBINDINGS_EDITOR,
        CONTEXT_KEYBINDING_FOCUS,
        InputFocusedContext.toNegated()
      ),
      primary: 20,
      mac: {
        primary: 2048 | 1
      },
      handler: (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.removeKeybinding(editorPane.activeKeybindingEntry);
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_RESET,
      weight: 200,
      when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR, CONTEXT_KEYBINDING_FOCUS),
      primary: 0,
      handler: (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.resetKeybinding(editorPane.activeKeybindingEntry);
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_SEARCH,
      weight: 200,
      when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR),
      primary: 2048 | 36,
      handler: (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.focusSearch();
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_RECORD_SEARCH_KEYS,
      weight: 200,
      when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR, CONTEXT_KEYBINDINGS_SEARCH_FOCUS),
      primary: 512 | 41,
      mac: { primary: 2048 | 512 | 41 },
      handler: (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.recordSearchKeys();
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_SORTBY_PRECEDENCE,
      weight: 200,
      when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR),
      primary: 512 | 46,
      mac: { primary: 2048 | 512 | 46 },
      handler: (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.toggleSortByPrecedence();
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_SHOW_SIMILAR,
      weight: 200,
      when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR, CONTEXT_KEYBINDING_FOCUS),
      primary: 0,
      handler: (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.showSimilarKeybindings(editorPane.activeKeybindingEntry);
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_COPY,
      weight: 200,
      when: ContextKeyExpr.and(
        CONTEXT_KEYBINDINGS_EDITOR,
        CONTEXT_KEYBINDING_FOCUS,
        CONTEXT_WHEN_FOCUS.negate()
      ),
      primary: 2048 | 33,
      handler: async (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          await editorPane.copyKeybinding(editorPane.activeKeybindingEntry);
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_COPY_COMMAND,
      weight: 200,
      when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR, CONTEXT_KEYBINDING_FOCUS),
      primary: 0,
      handler: async (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          await editorPane.copyKeybindingCommand(editorPane.activeKeybindingEntry);
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_COPY_COMMAND_TITLE,
      weight: 200,
      when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR, CONTEXT_KEYBINDING_FOCUS),
      primary: 0,
      handler: async (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          await editorPane.copyKeybindingCommandTitle(editorPane.activeKeybindingEntry);
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_FOCUS_KEYBINDINGS,
      weight: 200,
      when: ContextKeyExpr.and(CONTEXT_KEYBINDINGS_EDITOR, CONTEXT_KEYBINDINGS_SEARCH_FOCUS),
      primary: 2048 | 18,
      handler: (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.focusKeybindings();
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_REJECT_WHEN,
      weight: 200,
      when: ContextKeyExpr.and(
        CONTEXT_KEYBINDINGS_EDITOR,
        CONTEXT_WHEN_FOCUS,
        Context.Visible.toNegated()
      ),
      primary: 9,
      handler: async (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.rejectWhenExpression(editorPane.activeKeybindingEntry);
        }
      }
    });
    KeybindingsRegistry.registerCommandAndKeybindingRule({
      id: KEYBINDINGS_EDITOR_COMMAND_ACCEPT_WHEN,
      weight: 200,
      when: ContextKeyExpr.and(
        CONTEXT_KEYBINDINGS_EDITOR,
        CONTEXT_WHEN_FOCUS,
        Context.Visible.toNegated()
      ),
      primary: 3,
      handler: async (accessor, args) => {
        const editorPane = accessor.get(IEditorService).activeEditorPane;
        if (editorPane instanceof KeybindingsEditor) {
          editorPane.acceptWhenExpression(editorPane.activeKeybindingEntry);
        }
      }
    });
    const profileScopedActionDisposables = this._register(new DisposableStore());
    const registerProfileScopedActions = () => {
      profileScopedActionDisposables.clear();
      profileScopedActionDisposables.add(registerAction2(class DefineKeybindingAction extends Action2 {
        constructor() {
          const when = ResourceContextKey.Resource.isEqualTo(
            that.userDataProfileService.currentProfile.keybindingsResource.toString()
          );
          super({
            id: "editor.action.defineKeybinding",
            title: { value: localize("defineKeybinding.start", "Define Keybinding"), original: "Define Keybinding" },
            f1: true,
            precondition: when,
            keybinding: {
              weight: 200,
              when,
              primary: KeyChord(2048 | 41, 2048 | 41)
            },
            menu: {
              id: MenuId.EditorContent,
              when
            }
          });
        }
        async run(accessor) {
          var _a2;
          const codeEditor = accessor.get(IEditorService).activeTextEditorControl;
          if (isCodeEditor(codeEditor)) {
            (_a2 = codeEditor.getContribution(DEFINE_KEYBINDING_EDITOR_CONTRIB_ID)) == null ? void 0 : _a2.showDefineKeybindingWidget();
          }
        }
      }));
    };
    registerProfileScopedActions();
    this._register(this.userDataProfileService.onDidChangeCurrentProfile(() => registerProfileScopedActions()));
  }
  updatePreferencesEditorMenuItem() {
    const commandId = "_workbench.openWorkspaceSettingsEditor";
    if (this.workspaceContextService.getWorkbenchState() === 3 && !CommandsRegistry.getCommand(commandId)) {
      CommandsRegistry.registerCommand(commandId, () => this.preferencesService.openWorkspaceSettings({ jsonEditor: false }));
      MenuRegistry.appendMenuItem(MenuId.EditorTitle, {
        command: {
          id: commandId,
          title: OPEN_USER_SETTINGS_UI_TITLE,
          icon: preferencesOpenSettingsIcon
        },
        when: ContextKeyExpr.and(ResourceContextKey.Resource.isEqualTo(
          this.preferencesService.workspaceSettingsResource.toString()
        ), WorkbenchStateContext.isEqualTo("workspace"), ContextKeyExpr.not("isInDiffEditor")),
        group: "navigation",
        order: 1
      });
    }
    this.updatePreferencesEditorMenuItemForWorkspaceFolders();
  }
  updatePreferencesEditorMenuItemForWorkspaceFolders() {
    for (const folder of this.workspaceContextService.getWorkspace().folders) {
      const commandId = `_workbench.openFolderSettings.${folder.uri.toString()}`;
      if (!CommandsRegistry.getCommand(commandId)) {
        CommandsRegistry.registerCommand(commandId, () => {
          if (this.workspaceContextService.getWorkbenchState() === 2) {
            return this.preferencesService.openWorkspaceSettings({ jsonEditor: false });
          } else {
            return this.preferencesService.openFolderSettings({ folderUri: folder.uri, jsonEditor: false });
          }
        });
        MenuRegistry.appendMenuItem(MenuId.EditorTitle, {
          command: {
            id: commandId,
            title: OPEN_USER_SETTINGS_UI_TITLE,
            icon: preferencesOpenSettingsIcon
          },
          when: ContextKeyExpr.and(ResourceContextKey.Resource.isEqualTo(
            this.preferencesService.getFolderSettingsResource(folder.uri).toString()
          ), ContextKeyExpr.not("isInDiffEditor")),
          group: "navigation",
          order: 1
        });
      }
    }
  }
};
PreferencesActionsContribution = __decorate([
  __param(0, IWorkbenchEnvironmentService),
  __param(1, IUserDataProfileService),
  __param(2, IPreferencesService),
  __param(3, IWorkspaceContextService),
  __param(4, ILabelService),
  __param(5, IExtensionService),
  __param(6, IUserDataProfilesService)
], PreferencesActionsContribution);
const workbenchContributionsRegistry = Registry.as(Extensions$2.Workbench);
workbenchContributionsRegistry.registerWorkbenchContribution(PreferencesActionsContribution, 1);
workbenchContributionsRegistry.registerWorkbenchContribution(PreferencesContribution, 1);
registerEditorContribution(SettingsEditorContribution.ID, SettingsEditorContribution, 1);
function getServiceOverride() {
  return {
    [IPreferencesService.toString()]: new SyncDescriptor(PreferencesService, [], true),
    [IPreferencesSearchService.toString()]: new SyncDescriptor(PreferencesSearchService, [], true),
    [IKeybindingEditingService.toString()]: new SyncDescriptor(KeybindingsEditingService, [], true)
  };
}
export {
  getServiceOverride as default
};
