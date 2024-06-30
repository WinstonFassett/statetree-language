var _a, _b;
import { c as localize, f6 as Action2, bI as EditorAction2, a2 as URI, i as MenuId, zG as ISnippetsService, as as IQuickInputService, c2 as IOpenerService, bb as ILanguageService, hw as IUserDataProfileService, d7 as IWorkspaceContextService, he as IFileService, h4 as ITextFileService, b0 as ILabelService, aV as basename, fz as joinPath, qJ as extname, uj as isValidBasename, gx as IEditorService, pt as getCodeEditor, eT as SnippetController2, zH as isFalsyOrEmpty, zI as groupBy, c7 as compare, bo as Event, aK as ThemeIcon, aM as Codicon, e as EditorContextKeys, v as IClipboardService, b1 as IInstantiationService, zJ as Snippet, C as ContextKeyExpr, F as CodeActionKind, S as Selection, gu as __decorate, gv as __param, a6 as DisposableStore, a3 as ILanguageFeaturesService, ay as IConfigurationService, bF as registerAction2, a0 as CommandsRegistry, Z as Registry, h1 as Extensions, _ as Extensions$1, $ as editorConfigurationBaseNode, hP as Extensions$2, iQ as getServiceOverride$1, hh as SyncDescriptor, zK as SnippetsService, vi as registerServiceInitializeParticipant, hS as ILifecycleService, hb as StandaloneServices } from "./theme-defaults-1df7f429.js";
import "./index-3bddf13b.js";
const defaultOptions = {
  category: {
    value: localize("snippets", "Snippets"),
    original: "Snippets"
  }
};
class SnippetsAction extends Action2 {
  constructor(desc) {
    super({ ...defaultOptions, ...desc });
  }
}
class SnippetEditorAction extends EditorAction2 {
  constructor(desc) {
    super({ ...defaultOptions, ...desc });
  }
}
var ISnippetPick;
(function(ISnippetPick2) {
  function is(thing) {
    return !!thing && URI.isUri(thing.filepath);
  }
  ISnippetPick2.is = is;
})(ISnippetPick || (ISnippetPick = {}));
async function computePicks(snippetService, userDataProfileService, languageService, labelService) {
  const existing = [];
  const future = [];
  const seen = /* @__PURE__ */ new Set();
  const added = /* @__PURE__ */ new Map();
  for (const file of await snippetService.getSnippetFiles()) {
    if (file.source === 3) {
      continue;
    }
    if (file.isGlobalSnippets) {
      await file.load();
      const names = /* @__PURE__ */ new Set();
      let source;
      outer:
        for (const snippet2 of file.data) {
          if (!source) {
            source = snippet2.source;
          }
          for (const scope of snippet2.scopes) {
            const name = languageService.getLanguageName(scope);
            if (name) {
              if (names.size >= 4) {
                names.add(`${name}...`);
                break outer;
              } else {
                names.add(name);
              }
            }
          }
        }
      const snippet = {
        label: basename(file.location),
        filepath: file.location,
        description: names.size === 0 ? localize("global.scope", "(global)") : localize("global.1", "({0})", [...names].join(", "))
      };
      existing.push(snippet);
      if (!source) {
        continue;
      }
      const detail = localize(
        "detail.label",
        "({0}) {1}",
        source,
        labelService.getUriLabel(file.location, { relative: true })
      );
      const lastItem = added.get(basename(file.location));
      if (lastItem) {
        snippet.detail = detail;
        lastItem.snippet.detail = lastItem.detail;
      }
      added.set(basename(file.location), { snippet, detail });
    } else {
      const mode = basename(file.location).replace(/\.json$/, "");
      existing.push({
        label: basename(file.location),
        description: `(${languageService.getLanguageName(mode)})`,
        filepath: file.location
      });
      seen.add(mode);
    }
  }
  const dir = userDataProfileService.currentProfile.snippetsHome;
  for (const languageId of languageService.getRegisteredLanguageIds()) {
    const label = languageService.getLanguageName(languageId);
    if (label && !seen.has(languageId)) {
      future.push({
        label: languageId,
        description: `(${label})`,
        filepath: joinPath(dir, `${languageId}.json`),
        hint: true
      });
    }
  }
  existing.sort((a, b) => {
    const a_ext = extname(a.filepath.path);
    const b_ext = extname(b.filepath.path);
    if (a_ext === b_ext) {
      return a.label.localeCompare(b.label);
    } else if (a_ext === ".code-snippets") {
      return -1;
    } else {
      return 1;
    }
  });
  future.sort((a, b) => {
    return a.label.localeCompare(b.label);
  });
  return { existing, future };
}
async function createSnippetFile(scope, defaultPath, quickInputService, fileService, textFileService, opener) {
  function createSnippetUri(input2) {
    const filename = extname(input2) !== ".code-snippets" ? `${input2}.code-snippets` : input2;
    return joinPath(defaultPath, filename);
  }
  await fileService.createFolder(defaultPath);
  const input = await quickInputService.input({
    placeHolder: localize("name", "Type snippet file name"),
    async validateInput(input2) {
      if (!input2) {
        return localize("bad_name1", "Invalid file name");
      }
      if (!isValidBasename(input2)) {
        return localize("bad_name2", "'{0}' is not a valid file name", input2);
      }
      if (await fileService.exists(createSnippetUri(input2))) {
        return localize("bad_name3", "'{0}' already exists", input2);
      }
      return void 0;
    }
  });
  if (!input) {
    return void 0;
  }
  const resource = createSnippetUri(input);
  await textFileService.write(resource, [
    "{",
    "	// Place your " + scope + " snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and ",
    "	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope ",
    "	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is ",
    "	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: ",
    "	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. ",
    "	// Placeholders with the same ids are connected.",
    "	// Example:",
    '	// "Print to console": {',
    '	// 	"scope": "javascript,typescript",',
    '	// 	"prefix": "log",',
    '	// 	"body": [',
    `	// 		"console.log('$1');",`,
    '	// 		"$2"',
    "	// 	],",
    '	// 	"description": "Log output to console"',
    "	// }",
    "}"
  ].join("\n"));
  await opener.open(resource);
  return void 0;
}
async function createLanguageSnippetFile(pick, fileService, textFileService) {
  if (await fileService.exists(pick.filepath)) {
    return;
  }
  const contents = [
    "{",
    "	// Place your snippets for " + pick.label + " here. Each snippet is defined under a snippet name and has a prefix, body and ",
    "	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:",
    "	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the ",
    "	// same ids are connected.",
    "	// Example:",
    '	// "Print to console": {',
    '	// 	"prefix": "log",',
    '	// 	"body": [',
    `	// 		"console.log('$1');",`,
    '	// 		"$2"',
    "	// 	],",
    '	// 	"description": "Log output to console"',
    "	// }",
    "}"
  ].join("\n");
  await textFileService.write(pick.filepath, contents);
}
class ConfigureSnippetsAction extends SnippetsAction {
  constructor() {
    super({
      id: "workbench.action.openSnippets",
      title: {
        value: localize("openSnippet.label", "Configure User Snippets"),
        original: "Configure User Snippets"
      },
      shortTitle: {
        value: localize("userSnippets", "User Snippets"),
        mnemonicTitle: localize(
          { key: "miOpenSnippets", comment: ["&& denotes a mnemonic"] },
          "User &&Snippets"
        ),
        original: "User Snippets"
      },
      f1: true,
      menu: [
        { id: MenuId.MenubarPreferencesMenu, group: "2_configuration", order: 4 },
        { id: MenuId.GlobalActivity, group: "2_configuration", order: 4 }
      ]
    });
  }
  async run(accessor) {
    const snippetService = accessor.get(ISnippetsService);
    const quickInputService = accessor.get(IQuickInputService);
    const opener = accessor.get(IOpenerService);
    const languageService = accessor.get(ILanguageService);
    const userDataProfileService = accessor.get(IUserDataProfileService);
    const workspaceService = accessor.get(IWorkspaceContextService);
    const fileService = accessor.get(IFileService);
    const textFileService = accessor.get(ITextFileService);
    const labelService = accessor.get(ILabelService);
    const picks = await computePicks(snippetService, userDataProfileService, languageService, labelService);
    const existing = picks.existing;
    const globalSnippetPicks = [{
      scope: localize("new.global_scope", "global"),
      label: localize("new.global", "New Global Snippets file..."),
      uri: userDataProfileService.currentProfile.snippetsHome
    }];
    const workspaceSnippetPicks = [];
    for (const folder of workspaceService.getWorkspace().folders) {
      workspaceSnippetPicks.push({
        scope: localize("new.workspace_scope", "{0} workspace", folder.name),
        label: localize("new.folder", "New Snippets file for '{0}'...", folder.name),
        uri: folder.toResource(".vscode")
      });
    }
    if (existing.length > 0) {
      existing.unshift({ type: "separator", label: localize("group.global", "Existing Snippets") });
      existing.push({ type: "separator", label: localize("new.global.sep", "New Snippets") });
    } else {
      existing.push({ type: "separator", label: localize("new.global.sep", "New Snippets") });
    }
    const pick = await quickInputService.pick([].concat(existing, globalSnippetPicks, workspaceSnippetPicks, picks.future), {
      placeHolder: localize("openSnippet.pickLanguage", "Select Snippets File or Create Snippets"),
      matchOnDescription: true
    });
    if (globalSnippetPicks.indexOf(pick) >= 0) {
      return createSnippetFile(pick.scope, pick.uri, quickInputService, fileService, textFileService, opener);
    } else if (workspaceSnippetPicks.indexOf(pick) >= 0) {
      return createSnippetFile(pick.scope, pick.uri, quickInputService, fileService, textFileService, opener);
    } else if (ISnippetPick.is(pick)) {
      if (pick.hint) {
        await createLanguageSnippetFile(pick, fileService, textFileService);
      }
      return opener.open(pick.filepath);
    }
  }
}
const _ApplyFileSnippetAction = class _ApplyFileSnippetAction extends SnippetsAction {
  constructor() {
    super({
      id: _ApplyFileSnippetAction.Id,
      title: {
        value: localize("label", "Fill File with Snippet"),
        original: "Fill File with Snippet"
      },
      f1: true
    });
  }
  async run(accessor) {
    var _a2;
    const snippetService = accessor.get(ISnippetsService);
    const quickInputService = accessor.get(IQuickInputService);
    const editorService = accessor.get(IEditorService);
    const langService = accessor.get(ILanguageService);
    const editor = getCodeEditor(editorService.activeTextEditorControl);
    if (!editor || !editor.hasModel()) {
      return;
    }
    const snippets = await snippetService.getSnippets(void 0, { fileTemplateSnippets: true, noRecencySort: true, includeNoPrefixSnippets: true });
    if (snippets.length === 0) {
      return;
    }
    const selection = await this._pick(quickInputService, langService, snippets);
    if (!selection) {
      return;
    }
    if (editor.hasModel()) {
      (_a2 = SnippetController2.get(editor)) == null ? void 0 : _a2.apply([{
        range: editor.getModel().getFullModelRange(),
        template: selection.snippet.body
      }]);
      editor.getModel().setLanguage(langService.createById(selection.langId), _ApplyFileSnippetAction.Id);
      editor.focus();
    }
  }
  async _pick(quickInputService, langService, snippets) {
    const all = [];
    for (const snippet of snippets) {
      if (isFalsyOrEmpty(snippet.scopes)) {
        all.push({ langId: "", snippet });
      } else {
        for (const langId of snippet.scopes) {
          all.push({ langId, snippet });
        }
      }
    }
    const picks = [];
    const groups = groupBy(all, (a, b) => compare(a.langId, b.langId));
    for (const group of groups) {
      let first = true;
      for (const item of group) {
        if (first) {
          picks.push({
            type: "separator",
            label: langService.getLanguageName(item.langId) ?? item.langId
          });
          first = false;
        }
        picks.push({
          snippet: item,
          label: item.snippet.prefix || item.snippet.name,
          detail: item.snippet.description
        });
      }
    }
    const pick = await quickInputService.pick(picks, {
      placeHolder: localize("placeholder", "Select a snippet"),
      matchOnDetail: true
    });
    return pick == null ? void 0 : pick.snippet;
  }
};
_ApplyFileSnippetAction.Id = "workbench.action.populateFileFromSnippet";
let ApplyFileSnippetAction = _ApplyFileSnippetAction;
async function pickSnippet(accessor, languageIdOrSnippets) {
  var _a2;
  const snippetService = accessor.get(ISnippetsService);
  const quickInputService = accessor.get(IQuickInputService);
  let snippets;
  if (Array.isArray(languageIdOrSnippets)) {
    snippets = languageIdOrSnippets;
  } else {
    snippets = await snippetService.getSnippets(languageIdOrSnippets, { includeDisabledSnippets: true, includeNoPrefixSnippets: true });
  }
  snippets.sort((a, b) => a.snippetSource - b.snippetSource);
  const makeSnippetPicks = () => {
    const result2 = [];
    let prevSnippet;
    for (const snippet of snippets) {
      const pick = {
        label: snippet.prefix || snippet.name,
        detail: snippet.description || snippet.body,
        snippet
      };
      if (!prevSnippet || prevSnippet.snippetSource !== snippet.snippetSource || prevSnippet.source !== snippet.source) {
        let label = "";
        switch (snippet.snippetSource) {
          case 1:
            label = localize("sep.userSnippet", "User Snippets");
            break;
          case 3:
            label = snippet.source;
            break;
          case 2:
            label = localize("sep.workspaceSnippet", "Workspace Snippets");
            break;
        }
        result2.push({ type: "separator", label });
      }
      if (snippet.snippetSource === 3) {
        const isEnabled = snippetService.isEnabled(snippet);
        if (isEnabled) {
          pick.buttons = [{
            iconClass: ThemeIcon.asClassName(Codicon.eyeClosed),
            tooltip: localize("disableSnippet", "Hide from IntelliSense")
          }];
        } else {
          pick.description = localize("isDisabled", "(hidden from IntelliSense)");
          pick.buttons = [{
            iconClass: ThemeIcon.asClassName(Codicon.eye),
            tooltip: localize("enable.snippet", "Show in IntelliSense")
          }];
        }
      }
      result2.push(pick);
      prevSnippet = snippet;
    }
    return result2;
  };
  const picker = quickInputService.createQuickPick();
  picker.placeholder = localize("pick.placeholder", "Select a snippet");
  picker.matchOnDetail = true;
  picker.ignoreFocusOut = false;
  picker.keepScrollPosition = true;
  picker.onDidTriggerItemButton((ctx) => {
    const isEnabled = snippetService.isEnabled(ctx.item.snippet);
    snippetService.updateEnablement(ctx.item.snippet, !isEnabled);
    picker.items = makeSnippetPicks();
  });
  picker.items = makeSnippetPicks();
  if (!picker.items.length) {
    picker.validationMessage = localize("pick.noSnippetAvailable", "No snippet available");
  }
  picker.show();
  await Promise.race([Event.toPromise(picker.onDidAccept), Event.toPromise(picker.onDidHide)]);
  const result = (_a2 = picker.selectedItems[0]) == null ? void 0 : _a2.snippet;
  picker.dispose();
  return result;
}
const _Args = class _Args {
  static fromUser(arg) {
    if (!arg || typeof arg !== "object") {
      return _Args._empty;
    }
    let { snippet, name, langId } = arg;
    if (typeof snippet !== "string") {
      snippet = void 0;
    }
    if (typeof name !== "string") {
      name = void 0;
    }
    if (typeof langId !== "string") {
      langId = void 0;
    }
    return new _Args(snippet, name, langId);
  }
  constructor(snippet, name, langId) {
    this.snippet = snippet;
    this.name = name;
    this.langId = langId;
  }
};
_Args._empty = new _Args(void 0, void 0, void 0);
let Args = _Args;
class InsertSnippetAction extends SnippetEditorAction {
  constructor() {
    super({
      id: "editor.action.insertSnippet",
      title: {
        value: localize("snippet.suggestions.label", "Insert Snippet"),
        original: "Insert Snippet"
      },
      f1: true,
      precondition: EditorContextKeys.writable,
      description: {
        description: `Insert Snippet`,
        args: [{
          name: "args",
          schema: {
            "type": "object",
            "properties": {
              "snippet": {
                "type": "string"
              },
              "langId": {
                "type": "string"
              },
              "name": {
                "type": "string"
              }
            }
          }
        }]
      }
    });
  }
  async runEditorCommand(accessor, editor, arg) {
    var _a2;
    const languageService = accessor.get(ILanguageService);
    const snippetService = accessor.get(ISnippetsService);
    if (!editor.hasModel()) {
      return;
    }
    const clipboardService = accessor.get(IClipboardService);
    const instaService = accessor.get(IInstantiationService);
    const snippet = await new Promise((resolve, reject) => {
      const { lineNumber, column } = editor.getPosition();
      const { snippet: snippet2, name, langId } = Args.fromUser(arg);
      if (snippet2) {
        return resolve(new Snippet(
          false,
          [],
          "",
          "",
          "",
          snippet2,
          "",
          1,
          `random/${Math.random()}`
        ));
      }
      let languageId;
      if (langId) {
        if (!languageService.isRegisteredLanguageId(langId)) {
          return resolve(void 0);
        }
        languageId = langId;
      } else {
        editor.getModel().tokenization.tokenizeIfCheap(lineNumber);
        languageId = editor.getModel().getLanguageIdAtPosition(lineNumber, column);
        if (!languageService.getLanguageName(languageId)) {
          languageId = editor.getModel().getLanguageId();
        }
      }
      if (name) {
        snippetService.getSnippets(languageId, { includeNoPrefixSnippets: true }).then((snippets) => snippets.find((snippet3) => snippet3.name === name)).then(resolve, reject);
      } else {
        resolve(instaService.invokeFunction(pickSnippet, languageId));
      }
    });
    if (!snippet) {
      return;
    }
    let clipboardText;
    if (snippet.needsClipboard) {
      clipboardText = await clipboardService.readText();
    }
    editor.focus();
    (_a2 = SnippetController2.get(editor)) == null ? void 0 : _a2.insert(snippet.codeSnippet, { clipboardText });
    snippetService.updateUsageTimestamp(snippet);
  }
}
async function getSurroundableSnippets(snippetsService, model, position, includeDisabledSnippets) {
  const { lineNumber, column } = position;
  model.tokenization.tokenizeIfCheap(lineNumber);
  const languageId = model.getLanguageIdAtPosition(lineNumber, column);
  const allSnippets = await snippetsService.getSnippets(languageId, { includeNoPrefixSnippets: true, includeDisabledSnippets });
  return allSnippets.filter((snippet) => snippet.usesSelection);
}
const _SurroundWithSnippetEditorAction = class _SurroundWithSnippetEditorAction extends SnippetEditorAction {
  constructor() {
    super({
      ..._SurroundWithSnippetEditorAction.options,
      precondition: ContextKeyExpr.and(EditorContextKeys.writable, EditorContextKeys.hasNonEmptySelection),
      f1: true
    });
  }
  async runEditorCommand(accessor, editor) {
    var _a2;
    if (!editor.hasModel()) {
      return;
    }
    const instaService = accessor.get(IInstantiationService);
    const snippetsService = accessor.get(ISnippetsService);
    const clipboardService = accessor.get(IClipboardService);
    const snippets = await getSurroundableSnippets(snippetsService, editor.getModel(), editor.getPosition(), true);
    if (!snippets.length) {
      return;
    }
    const snippet = await instaService.invokeFunction(pickSnippet, snippets);
    if (!snippet) {
      return;
    }
    let clipboardText;
    if (snippet.needsClipboard) {
      clipboardText = await clipboardService.readText();
    }
    editor.focus();
    (_a2 = SnippetController2.get(editor)) == null ? void 0 : _a2.insert(snippet.codeSnippet, { clipboardText });
    snippetsService.updateUsageTimestamp(snippet);
  }
};
_SurroundWithSnippetEditorAction.options = {
  id: "editor.action.surroundWithSnippet",
  title: {
    value: localize("label", "Surround With Snippet..."),
    original: "Surround With Snippet..."
  }
};
let SurroundWithSnippetEditorAction = _SurroundWithSnippetEditorAction;
let SurroundWithSnippetCodeActionProvider = (_a = class {
  constructor(_snippetService) {
    this._snippetService = _snippetService;
  }
  async provideCodeActions(model, range) {
    if (range.isEmpty()) {
      return void 0;
    }
    const position = Selection.isISelection(range) ? range.getPosition() : range.getStartPosition();
    const snippets = await getSurroundableSnippets(this._snippetService, model, position, false);
    if (!snippets.length) {
      return void 0;
    }
    const actions = [];
    for (const snippet of snippets) {
      if (actions.length >= _a._MAX_CODE_ACTIONS) {
        actions.push(_a._overflowCommandCodeAction);
        break;
      }
      actions.push({
        title: localize("codeAction", "Surround With: {0}", snippet.name),
        kind: CodeActionKind.SurroundWith.value,
        edit: asWorkspaceEdit(model, range, snippet)
      });
    }
    return {
      actions,
      dispose() {
      }
    };
  }
}, _a._MAX_CODE_ACTIONS = 4, _a._overflowCommandCodeAction = {
  kind: CodeActionKind.SurroundWith.value,
  title: SurroundWithSnippetEditorAction.options.title.value,
  command: {
    id: SurroundWithSnippetEditorAction.options.id,
    title: SurroundWithSnippetEditorAction.options.title.value
  }
}, _a);
SurroundWithSnippetCodeActionProvider = __decorate([
  __param(0, ISnippetsService)
], SurroundWithSnippetCodeActionProvider);
let FileTemplateCodeActionProvider = (_b = class {
  constructor(_snippetService) {
    this._snippetService = _snippetService;
    this.providedCodeActionKinds = [CodeActionKind.SurroundWith.value];
  }
  async provideCodeActions(model) {
    if (model.getValueLength() !== 0) {
      return void 0;
    }
    const snippets = await this._snippetService.getSnippets(model.getLanguageId(), { fileTemplateSnippets: true, includeNoPrefixSnippets: true });
    const actions = [];
    for (const snippet of snippets) {
      if (actions.length >= _b._MAX_CODE_ACTIONS) {
        actions.push(_b._overflowCommandCodeAction);
        break;
      }
      actions.push({
        title: localize("title", "Start with: {0}", snippet.name),
        kind: CodeActionKind.SurroundWith.value,
        edit: asWorkspaceEdit(model, model.getFullModelRange(), snippet)
      });
    }
    return {
      actions,
      dispose() {
      }
    };
  }
}, _b._MAX_CODE_ACTIONS = 4, _b._overflowCommandCodeAction = {
  title: localize("overflow.start.title", "Start with Snippet"),
  kind: CodeActionKind.SurroundWith.value,
  command: {
    id: ApplyFileSnippetAction.Id,
    title: ""
  }
}, _b);
FileTemplateCodeActionProvider = __decorate([
  __param(0, ISnippetsService)
], FileTemplateCodeActionProvider);
function asWorkspaceEdit(model, range, snippet) {
  return {
    edits: [{
      versionId: model.getVersionId(),
      resource: model.uri,
      textEdit: {
        range,
        text: snippet.body,
        insertAsSnippet: true
      }
    }]
  };
}
let SnippetCodeActions = class SnippetCodeActions2 {
  constructor(instantiationService, languageFeaturesService, configService) {
    this._store = new DisposableStore();
    const setting = "editor.snippets.codeActions.enabled";
    const sessionStore = new DisposableStore();
    const update = () => {
      sessionStore.clear();
      if (configService.getValue(setting)) {
        sessionStore.add(languageFeaturesService.codeActionProvider.register("*", instantiationService.createInstance(SurroundWithSnippetCodeActionProvider)));
        sessionStore.add(languageFeaturesService.codeActionProvider.register("*", instantiationService.createInstance(FileTemplateCodeActionProvider)));
      }
    };
    update();
    this._store.add(configService.onDidChangeConfiguration((e) => e.affectsConfiguration(setting) && update()));
    this._store.add(sessionStore);
  }
  dispose() {
    this._store.dispose();
  }
};
SnippetCodeActions = __decorate([
  __param(0, IInstantiationService),
  __param(1, ILanguageFeaturesService),
  __param(2, IConfigurationService)
], SnippetCodeActions);
registerAction2(InsertSnippetAction);
CommandsRegistry.registerCommandAlias("editor.action.showSnippets", "editor.action.insertSnippet");
registerAction2(SurroundWithSnippetEditorAction);
registerAction2(ApplyFileSnippetAction);
registerAction2(ConfigureSnippetsAction);
const workbenchContribRegistry = Registry.as(Extensions.Workbench);
workbenchContribRegistry.registerWorkbenchContribution(SnippetCodeActions, 3);
Registry.as(Extensions$1.Configuration).registerConfiguration({
  ...editorConfigurationBaseNode,
  "properties": {
    "editor.snippets.codeActions.enabled": {
      "description": localize(
        "editor.snippets.codeActions.enabled",
        "Controls if surround-with-snippets or file template snippets show as Code Actions."
      ),
      "type": "boolean",
      "default": true
    }
  }
});
const languageScopeSchemaId = "vscode://schemas/snippets";
const snippetSchemaProperties = {
  prefix: {
    description: localize(
      "snippetSchema.json.prefix",
      "The prefix to use when selecting the snippet in intellisense"
    ),
    type: ["string", "array"]
  },
  isFileTemplate: {
    description: localize(
      "snippetSchema.json.isFileTemplate",
      "The snippet is meant to populate or replace a whole file"
    ),
    type: "boolean"
  },
  body: {
    markdownDescription: localize(
      "snippetSchema.json.body",
      "The snippet content. Use `$1`, `${1:defaultText}` to define cursor positions, use `$0` for the final cursor position. Insert variable values with `${varName}` and `${varName:defaultText}`, e.g. `This is file: $TM_FILENAME`."
    ),
    type: ["string", "array"],
    items: {
      type: "string"
    }
  },
  description: {
    description: localize("snippetSchema.json.description", "The snippet description."),
    type: ["string", "array"]
  }
};
const languageScopeSchema = {
  id: languageScopeSchemaId,
  allowComments: true,
  allowTrailingCommas: true,
  defaultSnippets: [{
    label: localize("snippetSchema.json.default", "Empty snippet"),
    body: { "${1:snippetName}": { "prefix": "${2:prefix}", "body": "${3:snippet}", "description": "${4:description}" } }
  }],
  type: "object",
  description: localize("snippetSchema.json", "User snippet configuration"),
  additionalProperties: {
    type: "object",
    required: ["body"],
    properties: snippetSchemaProperties,
    additionalProperties: false
  }
};
const globalSchemaId = "vscode://schemas/global-snippets";
const globalSchema = {
  id: globalSchemaId,
  allowComments: true,
  allowTrailingCommas: true,
  defaultSnippets: [{
    label: localize("snippetSchema.json.default", "Empty snippet"),
    body: { "${1:snippetName}": { "scope": "${2:scope}", "prefix": "${3:prefix}", "body": "${4:snippet}", "description": "${5:description}" } }
  }],
  type: "object",
  description: localize("snippetSchema.json", "User snippet configuration"),
  additionalProperties: {
    type: "object",
    required: ["body"],
    properties: {
      ...snippetSchemaProperties,
      scope: {
        description: localize(
          "snippetSchema.json.scope",
          "A list of language names to which this snippet applies, e.g. 'typescript,javascript'."
        ),
        type: "string"
      }
    },
    additionalProperties: false
  }
};
const reg = Registry.as(Extensions$2.JSONContribution);
reg.registerSchema(languageScopeSchemaId, languageScopeSchema);
reg.registerSchema(globalSchemaId, globalSchema);
registerServiceInitializeParticipant(async (accessor) => {
  void accessor.get(ILifecycleService).when(2).then(() => {
    StandaloneServices.get(ISnippetsService);
  });
});
function getServiceOverride() {
  return {
    ...getServiceOverride$1(),
    [ISnippetsService.toString()]: new SyncDescriptor(SnippetsService, [], true)
  };
}
export {
  getServiceOverride as default
};
