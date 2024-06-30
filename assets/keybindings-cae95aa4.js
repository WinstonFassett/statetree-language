import { jW as ScanCodeUtils, vj as ScanCodeChord, vk as KeyCodeUtils, vl as KeyCodeChord, vm as Keybinding, i as MenuId, c as localize, vn as index, a6 as DisposableStore, gr as ExtensionsRegistry, aK as ThemeIcon, fz as joinPath, ig as isProposedApiEnabled, h as MenuRegistry, C as ContextKeyExpr, oW as isFalsyOrWhitespace, gu as __decorate, gv as __param, Z as Registry, hP as Extensions, a0 as CommandsRegistry, vo as AbstractKeybindingService, bu as KeybindingsRegistry, aI as addDisposableListener, bT as StandardKeyboardEvent, vp as printKeyboardEvent, vq as printStandardKeyboardEvent, aJ as EventType, vr as onDidChangeFullscreen, k9 as BrowserFeatures, jV as isFullscreen, vs as UserSettingsLabelProvider, cH as OS, vt as KeybindingResolver, vu as ResolvedKeybindingItem, vv as IMMUTABLE_CODE_TO_KEY_CODE, aT as isMacintosh, I as IContextKeyService, ak as ICommandService, cu as ITelemetryService, al as INotificationService, hw as IUserDataProfileService, iL as IHostService, h5 as IExtensionService, he as IFileService, hz as IUriIdentityService, fM as ILogService, vw as IKeyboardLayoutService, D as Disposable, aD as Emitter, j as RunOnceScheduler, bo as Event, b5 as dirname, hq as equals, ht as parse, d2 as isWindows, dz as isLinux, vx as getKeyboardLayoutId, _ as Extensions$1, vy as NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE, vz as toEmptyArrayIfContainsNull, vA as BaseResolvedKeybinding, vB as UILabelProvider, vC as IMMUTABLE_KEY_CODE_TO_CODE, vb as IEnvironmentService, aa as IStorageService, ay as IConfigurationService, uR as getNodeType, vD as FallbackKeyboardMapper, fn as timeout, b1 as IInstantiationService, bF as registerAction2, f6 as Action2, fY as Categories, a$ as IKeybindingService, hb as StandaloneServices, hx as IUserDataProfilesService, hf as VSBuffer, iQ as getServiceOverride$1, hh as SyncDescriptor, aq as toDisposable } from "./theme-defaults-1df7f429.js";
import { g as getAllUnboundCommands } from "./unboundCommands-0fd8d661.js";
import { q as __vitePreload } from "./index-3bddf13b.js";
import "./workbench.contribution-0151a633.js";
import { s as showWindowLogActionId } from "./logConstants-8dfc303d.js";
class KeybindingParser {
  static _readModifiers(input) {
    input = input.toLowerCase().trim();
    let ctrl = false;
    let shift = false;
    let alt = false;
    let meta = false;
    let matchedModifier;
    do {
      matchedModifier = false;
      if (/^ctrl(\+|\-)/.test(input)) {
        ctrl = true;
        input = input.substr("ctrl-".length);
        matchedModifier = true;
      }
      if (/^shift(\+|\-)/.test(input)) {
        shift = true;
        input = input.substr("shift-".length);
        matchedModifier = true;
      }
      if (/^alt(\+|\-)/.test(input)) {
        alt = true;
        input = input.substr("alt-".length);
        matchedModifier = true;
      }
      if (/^meta(\+|\-)/.test(input)) {
        meta = true;
        input = input.substr("meta-".length);
        matchedModifier = true;
      }
      if (/^win(\+|\-)/.test(input)) {
        meta = true;
        input = input.substr("win-".length);
        matchedModifier = true;
      }
      if (/^cmd(\+|\-)/.test(input)) {
        meta = true;
        input = input.substr("cmd-".length);
        matchedModifier = true;
      }
    } while (matchedModifier);
    let key;
    const firstSpaceIdx = input.indexOf(" ");
    if (firstSpaceIdx > 0) {
      key = input.substring(0, firstSpaceIdx);
      input = input.substring(firstSpaceIdx);
    } else {
      key = input;
      input = "";
    }
    return {
      remains: input,
      ctrl,
      shift,
      alt,
      meta,
      key
    };
  }
  static parseChord(input) {
    const mods = this._readModifiers(input);
    const scanCodeMatch = mods.key.match(/^\[([^\]]+)\]$/);
    if (scanCodeMatch) {
      const strScanCode = scanCodeMatch[1];
      const scanCode = ScanCodeUtils.lowerCaseToEnum(strScanCode);
      return [new ScanCodeChord(mods.ctrl, mods.shift, mods.alt, mods.meta, scanCode), mods.remains];
    }
    const keyCode = KeyCodeUtils.fromUserSettings(mods.key);
    return [new KeyCodeChord(mods.ctrl, mods.shift, mods.alt, mods.meta, keyCode), mods.remains];
  }
  static parseKeybinding(input) {
    if (!input) {
      return null;
    }
    const chords = [];
    let chord;
    while (input.length > 0) {
      [chord, input] = this.parseChord(input);
      chords.push(chord);
    }
    return chords.length > 0 ? new Keybinding(chords) : null;
  }
}
const apiMenus = [
  {
    key: "commandPalette",
    id: MenuId.CommandPalette,
    description: localize("menus.commandPalette", "The Command Palette"),
    supportsSubmenus: false
  },
  {
    key: "touchBar",
    id: MenuId.TouchBarContext,
    description: localize("menus.touchBar", "The touch bar (macOS only)"),
    supportsSubmenus: false
  },
  {
    key: "editor/title",
    id: MenuId.EditorTitle,
    description: localize("menus.editorTitle", "The editor title menu")
  },
  {
    key: "editor/title/run",
    id: MenuId.EditorTitleRun,
    description: localize("menus.editorTitleRun", "Run submenu inside the editor title menu")
  },
  {
    key: "editor/context",
    id: MenuId.EditorContext,
    description: localize("menus.editorContext", "The editor context menu")
  },
  {
    key: "editor/context/copy",
    id: MenuId.EditorContextCopy,
    description: localize(
      "menus.editorContextCopyAs",
      "'Copy as' submenu in the editor context menu"
    )
  },
  {
    key: "editor/context/share",
    id: MenuId.EditorContextShare,
    description: localize("menus.editorContextShare", "'Share' submenu in the editor context menu"),
    proposed: "contribShareMenu"
  },
  {
    key: "explorer/context",
    id: MenuId.ExplorerContext,
    description: localize("menus.explorerContext", "The file explorer context menu")
  },
  {
    key: "explorer/context/share",
    id: MenuId.ExplorerContextShare,
    description: localize(
      "menus.explorerContextShare",
      "'Share' submenu in the file explorer context menu"
    ),
    proposed: "contribShareMenu"
  },
  {
    key: "editor/title/context",
    id: MenuId.EditorTitleContext,
    description: localize("menus.editorTabContext", "The editor tabs context menu")
  },
  {
    key: "editor/title/context/share",
    id: MenuId.EditorTitleContextShare,
    description: localize(
      "menus.editorTitleContextShare",
      "'Share' submenu inside the editor title context menu"
    ),
    proposed: "contribShareMenu"
  },
  {
    key: "debug/callstack/context",
    id: MenuId.DebugCallStackContext,
    description: localize("menus.debugCallstackContext", "The debug callstack view context menu")
  },
  {
    key: "debug/variables/context",
    id: MenuId.DebugVariablesContext,
    description: localize("menus.debugVariablesContext", "The debug variables view context menu")
  },
  {
    key: "debug/toolBar",
    id: MenuId.DebugToolBar,
    description: localize("menus.debugToolBar", "The debug toolbar menu")
  },
  {
    key: "menuBar/home",
    id: MenuId.MenubarHomeMenu,
    description: localize("menus.home", "The home indicator context menu (web only)"),
    proposed: "contribMenuBarHome",
    supportsSubmenus: false
  },
  {
    key: "menuBar/edit/copy",
    id: MenuId.MenubarCopy,
    description: localize("menus.opy", "'Copy as' submenu in the top level Edit menu")
  },
  {
    key: "scm/title",
    id: MenuId.SCMTitle,
    description: localize("menus.scmTitle", "The Source Control title menu")
  },
  {
    key: "scm/sourceControl",
    id: MenuId.SCMSourceControl,
    description: localize("menus.scmSourceControl", "The Source Control menu")
  },
  {
    key: "scm/resourceState/context",
    id: MenuId.SCMResourceContext,
    description: localize(
      "menus.resourceStateContext",
      "The Source Control resource state context menu"
    )
  },
  {
    key: "scm/resourceFolder/context",
    id: MenuId.SCMResourceFolderContext,
    description: localize(
      "menus.resourceFolderContext",
      "The Source Control resource folder context menu"
    )
  },
  {
    key: "scm/resourceGroup/context",
    id: MenuId.SCMResourceGroupContext,
    description: localize(
      "menus.resourceGroupContext",
      "The Source Control resource group context menu"
    )
  },
  {
    key: "scm/change/title",
    id: MenuId.SCMChangeContext,
    description: localize("menus.changeTitle", "The Source Control inline change menu")
  },
  {
    key: "statusBar/remoteIndicator",
    id: MenuId.StatusBarRemoteIndicatorMenu,
    description: localize(
      "menus.statusBarRemoteIndicator",
      "The remote indicator menu in the status bar"
    ),
    supportsSubmenus: false
  },
  {
    key: "view/title",
    id: MenuId.ViewTitle,
    description: localize("view.viewTitle", "The contributed view title menu")
  },
  {
    key: "view/item/context",
    id: MenuId.ViewItemContext,
    description: localize("view.itemContext", "The contributed view item context menu")
  },
  {
    key: "comments/comment/editorActions",
    id: MenuId.CommentEditorActions,
    description: localize("commentThread.editorActions", "The contributed comment editor actions"),
    proposed: "contribCommentEditorActionsMenu"
  },
  {
    key: "comments/commentThread/title",
    id: MenuId.CommentThreadTitle,
    description: localize("commentThread.title", "The contributed comment thread title menu")
  },
  {
    key: "comments/commentThread/context",
    id: MenuId.CommentThreadActions,
    description: localize(
      "commentThread.actions",
      "The contributed comment thread context menu, rendered as buttons below the comment editor"
    ),
    supportsSubmenus: false
  },
  {
    key: "comments/commentThread/additionalActions",
    id: MenuId.CommentThreadAdditionalActions,
    description: localize(
      "commentThread.actions",
      "The contributed comment thread context menu, rendered as buttons below the comment editor"
    ),
    supportsSubmenus: false,
    proposed: "contribCommentThreadAdditionalMenu"
  },
  {
    key: "comments/commentThread/title/context",
    id: MenuId.CommentThreadTitleContext,
    description: localize(
      "commentThread.titleContext",
      "The contributed comment thread title's peek context menu, rendered as a right click menu on the comment thread's peek title."
    ),
    proposed: "contribCommentPeekContext"
  },
  {
    key: "comments/comment/title",
    id: MenuId.CommentTitle,
    description: localize("comment.title", "The contributed comment title menu")
  },
  {
    key: "comments/comment/context",
    id: MenuId.CommentActions,
    description: localize(
      "comment.actions",
      "The contributed comment context menu, rendered as buttons below the comment editor"
    ),
    supportsSubmenus: false
  },
  {
    key: "comments/commentThread/comment/context",
    id: MenuId.CommentThreadCommentContext,
    description: localize(
      "comment.commentContext",
      "The contributed comment context menu, rendered as a right click menu on the an individual comment in the comment thread's peek view."
    ),
    proposed: "contribCommentPeekContext"
  },
  {
    key: "notebook/toolbar",
    id: MenuId.NotebookToolbar,
    description: localize("notebook.toolbar", "The contributed notebook toolbar menu")
  },
  {
    key: "notebook/kernelSource",
    id: MenuId.NotebookKernelSource,
    description: localize("notebook.kernelSource", "The contributed notebook kernel sources menu"),
    proposed: "notebookKernelSource"
  },
  {
    key: "notebook/cell/title",
    id: MenuId.NotebookCellTitle,
    description: localize("notebook.cell.title", "The contributed notebook cell title menu")
  },
  {
    key: "notebook/cell/execute",
    id: MenuId.NotebookCellExecute,
    description: localize("notebook.cell.execute", "The contributed notebook cell execution menu")
  },
  {
    key: "interactive/toolbar",
    id: MenuId.InteractiveToolbar,
    description: localize("interactive.toolbar", "The contributed interactive toolbar menu")
  },
  {
    key: "interactive/cell/title",
    id: MenuId.InteractiveCellTitle,
    description: localize("interactive.cell.title", "The contributed interactive cell title menu")
  },
  {
    key: "testing/item/context",
    id: MenuId.TestItem,
    description: localize("testing.item.context", "The contributed test item menu")
  },
  {
    key: "testing/item/gutter",
    id: MenuId.TestItemGutter,
    description: localize(
      "testing.item.gutter.title",
      "The menu for a gutter decoration for a test item"
    )
  },
  {
    key: "extension/context",
    id: MenuId.ExtensionContext,
    description: localize("menus.extensionContext", "The extension context menu")
  },
  {
    key: "timeline/title",
    id: MenuId.TimelineTitle,
    description: localize("view.timelineTitle", "The Timeline view title menu")
  },
  {
    key: "timeline/item/context",
    id: MenuId.TimelineItemContext,
    description: localize("view.timelineContext", "The Timeline view item context menu")
  },
  {
    key: "ports/item/context",
    id: MenuId.TunnelContext,
    description: localize("view.tunnelContext", "The Ports view item context menu")
  },
  {
    key: "ports/item/origin/inline",
    id: MenuId.TunnelOriginInline,
    description: localize("view.tunnelOriginInline", "The Ports view item origin inline menu")
  },
  {
    key: "ports/item/port/inline",
    id: MenuId.TunnelPortInline,
    description: localize("view.tunnelPortInline", "The Ports view item port inline menu")
  },
  {
    key: "file/newFile",
    id: MenuId.NewFile,
    description: localize(
      "file.newFile",
      "The 'New File...' quick pick, shown on welcome page and File menu."
    ),
    supportsSubmenus: false
  },
  {
    key: "webview/context",
    id: MenuId.WebviewContext,
    description: localize("webview.context", "The webview context menu")
  },
  {
    key: "file/share",
    id: MenuId.MenubarShare,
    description: localize("menus.share", "Share submenu shown in the top level File menu."),
    proposed: "contribShareMenu"
  },
  {
    key: "editor/inlineCompletions/actions",
    id: MenuId.InlineCompletionsActions,
    description: localize(
      "inlineCompletions.actions",
      "The actions shown when hovering on an inline completion"
    ),
    supportsSubmenus: false,
    proposed: "inlineCompletionsAdditions"
  },
  {
    key: "editor/content",
    id: MenuId.EditorContent,
    description: localize("merge.toolbar", "The prominent button in an editor, overlays its content"),
    proposed: "contribEditorContentMenu"
  },
  {
    key: "editor/lineNumber/context",
    id: MenuId.EditorLineNumberContext,
    description: localize(
      "editorLineNumberContext",
      "The contributed editor line number context menu"
    )
  },
  {
    key: "mergeEditor/result/title",
    id: MenuId.MergeInputResultToolbar,
    description: localize("menus.mergeEditorResult", "The result toolbar of the merge editor"),
    proposed: "contribMergeEditorMenus"
  }
];
var schema;
(function(schema2) {
  function isMenuItem(item) {
    return typeof item.command === "string";
  }
  schema2.isMenuItem = isMenuItem;
  function isValidMenuItem(item, collector) {
    if (typeof item.command !== "string") {
      collector.error(localize(
        "requirestring",
        "property `{0}` is mandatory and must be of type `string`",
        "command"
      ));
      return false;
    }
    if (item.alt && typeof item.alt !== "string") {
      collector.error(localize(
        "optstring",
        "property `{0}` can be omitted or must be of type `string`",
        "alt"
      ));
      return false;
    }
    if (item.when && typeof item.when !== "string") {
      collector.error(localize(
        "optstring",
        "property `{0}` can be omitted or must be of type `string`",
        "when"
      ));
      return false;
    }
    if (item.group && typeof item.group !== "string") {
      collector.error(localize(
        "optstring",
        "property `{0}` can be omitted or must be of type `string`",
        "group"
      ));
      return false;
    }
    return true;
  }
  schema2.isValidMenuItem = isValidMenuItem;
  function isValidSubmenuItem(item, collector) {
    if (typeof item.submenu !== "string") {
      collector.error(localize(
        "requirestring",
        "property `{0}` is mandatory and must be of type `string`",
        "submenu"
      ));
      return false;
    }
    if (item.when && typeof item.when !== "string") {
      collector.error(localize(
        "optstring",
        "property `{0}` can be omitted or must be of type `string`",
        "when"
      ));
      return false;
    }
    if (item.group && typeof item.group !== "string") {
      collector.error(localize(
        "optstring",
        "property `{0}` can be omitted or must be of type `string`",
        "group"
      ));
      return false;
    }
    return true;
  }
  schema2.isValidSubmenuItem = isValidSubmenuItem;
  function isValidItems(items, collector) {
    if (!Array.isArray(items)) {
      collector.error(localize("requirearray", "submenu items must be an array"));
      return false;
    }
    for (const item of items) {
      if (isMenuItem(item)) {
        if (!isValidMenuItem(item, collector)) {
          return false;
        }
      } else {
        if (!isValidSubmenuItem(item, collector)) {
          return false;
        }
      }
    }
    return true;
  }
  schema2.isValidItems = isValidItems;
  function isValidSubmenu(submenu2, collector) {
    if (typeof submenu2 !== "object") {
      collector.error(localize("require", "submenu items must be an object"));
      return false;
    }
    if (typeof submenu2.id !== "string") {
      collector.error(localize(
        "requirestring",
        "property `{0}` is mandatory and must be of type `string`",
        "id"
      ));
      return false;
    }
    if (typeof submenu2.label !== "string") {
      collector.error(localize(
        "requirestring",
        "property `{0}` is mandatory and must be of type `string`",
        "label"
      ));
      return false;
    }
    return true;
  }
  schema2.isValidSubmenu = isValidSubmenu;
  const menuItem = {
    type: "object",
    required: ["command"],
    properties: {
      command: {
        description: localize(
          "vscode.extension.contributes.menuItem.command",
          "Identifier of the command to execute. The command must be declared in the 'commands'-section"
        ),
        type: "string"
      },
      alt: {
        description: localize(
          "vscode.extension.contributes.menuItem.alt",
          "Identifier of an alternative command to execute. The command must be declared in the 'commands'-section"
        ),
        type: "string"
      },
      when: {
        description: localize(
          "vscode.extension.contributes.menuItem.when",
          "Condition which must be true to show this item"
        ),
        type: "string"
      },
      group: {
        description: localize(
          "vscode.extension.contributes.menuItem.group",
          "Group into which this item belongs"
        ),
        type: "string"
      }
    }
  };
  const submenuItem = {
    type: "object",
    required: ["submenu"],
    properties: {
      submenu: {
        description: localize(
          "vscode.extension.contributes.menuItem.submenu",
          "Identifier of the submenu to display in this item."
        ),
        type: "string"
      },
      when: {
        description: localize(
          "vscode.extension.contributes.menuItem.when",
          "Condition which must be true to show this item"
        ),
        type: "string"
      },
      group: {
        description: localize(
          "vscode.extension.contributes.menuItem.group",
          "Group into which this item belongs"
        ),
        type: "string"
      }
    }
  };
  const submenu = {
    type: "object",
    required: ["id", "label"],
    properties: {
      id: {
        description: localize(
          "vscode.extension.contributes.submenu.id",
          "Identifier of the menu to display as a submenu."
        ),
        type: "string"
      },
      label: {
        description: localize(
          "vscode.extension.contributes.submenu.label",
          "The label of the menu item which leads to this submenu."
        ),
        type: "string"
      },
      icon: {
        description: localize(
          { key: "vscode.extension.contributes.submenu.icon", comment: ["do not translate or change `\\$(zap)`, \\ in front of $ is important."] },
          "(Optional) Icon which is used to represent the submenu in the UI. Either a file path, an object with file paths for dark and light themes, or a theme icon references, like `\\$(zap)`"
        ),
        anyOf: [
          {
            type: "string"
          },
          {
            type: "object",
            properties: {
              light: {
                description: localize(
                  "vscode.extension.contributes.submenu.icon.light",
                  "Icon path when a light theme is used"
                ),
                type: "string"
              },
              dark: {
                description: localize(
                  "vscode.extension.contributes.submenu.icon.dark",
                  "Icon path when a dark theme is used"
                ),
                type: "string"
              }
            }
          }
        ]
      }
    }
  };
  schema2.menusContribution = {
    description: localize(
      "vscode.extension.contributes.menus",
      "Contributes menu items to the editor"
    ),
    type: "object",
    properties: index(apiMenus, (menu) => menu.key, (menu) => ({
      markdownDescription: menu.proposed ? localize(
        "proposed",
        'Proposed API, requires `enabledApiProposal: ["{0}"]` - {1}',
        menu.proposed,
        menu.description
      ) : menu.description,
      type: "array",
      items: menu.supportsSubmenus === false ? menuItem : { oneOf: [menuItem, submenuItem] }
    })),
    additionalProperties: {
      description: "Submenu",
      type: "array",
      items: { oneOf: [menuItem, submenuItem] }
    }
  };
  schema2.submenusContribution = {
    description: localize(
      "vscode.extension.contributes.submenus",
      "Contributes submenu items to the editor"
    ),
    type: "array",
    items: submenu
  };
  function isValidCommand(command, collector) {
    if (!command) {
      collector.error(localize("nonempty", "expected non-empty value."));
      return false;
    }
    if (isFalsyOrWhitespace(command.command)) {
      collector.error(localize(
        "requirestring",
        "property `{0}` is mandatory and must be of type `string`",
        "command"
      ));
      return false;
    }
    if (!isValidLocalizedString(command.title, collector, "title")) {
      return false;
    }
    if (command.shortTitle && !isValidLocalizedString(command.shortTitle, collector, "shortTitle")) {
      return false;
    }
    if (command.enablement && typeof command.enablement !== "string") {
      collector.error(localize(
        "optstring",
        "property `{0}` can be omitted or must be of type `string`",
        "precondition"
      ));
      return false;
    }
    if (command.category && !isValidLocalizedString(command.category, collector, "category")) {
      return false;
    }
    if (!isValidIcon(command.icon, collector)) {
      return false;
    }
    return true;
  }
  schema2.isValidCommand = isValidCommand;
  function isValidIcon(icon, collector) {
    if (typeof icon === "undefined") {
      return true;
    }
    if (typeof icon === "string") {
      return true;
    } else if (typeof icon.dark === "string" && typeof icon.light === "string") {
      return true;
    }
    collector.error(localize(
      "opticon",
      "property `icon` can be omitted or must be either a string or a literal like `{dark, light}`"
    ));
    return false;
  }
  function isValidLocalizedString(localized, collector, propertyName) {
    if (typeof localized === "undefined") {
      collector.error(localize(
        "requireStringOrObject",
        "property `{0}` is mandatory and must be of type `string` or `object`",
        propertyName
      ));
      return false;
    } else if (typeof localized === "string" && isFalsyOrWhitespace(localized)) {
      collector.error(localize(
        "requirestring",
        "property `{0}` is mandatory and must be of type `string`",
        propertyName
      ));
      return false;
    } else if (typeof localized !== "string" && (isFalsyOrWhitespace(localized.original) || isFalsyOrWhitespace(localized.value))) {
      collector.error(localize(
        "requirestrings",
        "properties `{0}` and `{1}` are mandatory and must be of type `string`",
        `${propertyName}.value`,
        `${propertyName}.original`
      ));
      return false;
    }
    return true;
  }
  const commandType = {
    type: "object",
    required: ["command", "title"],
    properties: {
      command: {
        description: localize(
          "vscode.extension.contributes.commandType.command",
          "Identifier of the command to execute"
        ),
        type: "string"
      },
      title: {
        description: localize(
          "vscode.extension.contributes.commandType.title",
          "Title by which the command is represented in the UI"
        ),
        type: "string"
      },
      shortTitle: {
        markdownDescription: localize(
          "vscode.extension.contributes.commandType.shortTitle",
          "(Optional) Short title by which the command is represented in the UI. Menus pick either `title` or `shortTitle` depending on the context in which they show commands."
        ),
        type: "string"
      },
      category: {
        description: localize(
          "vscode.extension.contributes.commandType.category",
          "(Optional) Category string by which the command is grouped in the UI"
        ),
        type: "string"
      },
      enablement: {
        description: localize(
          "vscode.extension.contributes.commandType.precondition",
          "(Optional) Condition which must be true to enable the command in the UI (menu and keybindings). Does not prevent executing the command by other means, like the `executeCommand`-api."
        ),
        type: "string"
      },
      icon: {
        description: localize(
          { key: "vscode.extension.contributes.commandType.icon", comment: ["do not translate or change `\\$(zap)`, \\ in front of $ is important."] },
          "(Optional) Icon which is used to represent the command in the UI. Either a file path, an object with file paths for dark and light themes, or a theme icon references, like `\\$(zap)`"
        ),
        anyOf: [
          {
            type: "string"
          },
          {
            type: "object",
            properties: {
              light: {
                description: localize(
                  "vscode.extension.contributes.commandType.icon.light",
                  "Icon path when a light theme is used"
                ),
                type: "string"
              },
              dark: {
                description: localize(
                  "vscode.extension.contributes.commandType.icon.dark",
                  "Icon path when a dark theme is used"
                ),
                type: "string"
              }
            }
          }
        ]
      }
    }
  };
  schema2.commandsContribution = {
    description: localize(
      "vscode.extension.contributes.commands",
      "Contributes commands to the command palette."
    ),
    oneOf: [
      commandType,
      {
        type: "array",
        items: commandType
      }
    ]
  };
})(schema || (schema = {}));
const _commandRegistrations = new DisposableStore();
const commandsExtensionPoint = ExtensionsRegistry.registerExtensionPoint({
  extensionPoint: "commands",
  jsonSchema: schema.commandsContribution,
  activationEventsGenerator: (contribs, result) => {
    for (const contrib of contribs) {
      if (contrib.command) {
        result.push(`onCommand:${contrib.command}`);
      }
    }
  }
});
commandsExtensionPoint.setHandler((extensions) => {
  function handleCommand(userFriendlyCommand, extension) {
    if (!schema.isValidCommand(userFriendlyCommand, extension.collector)) {
      return;
    }
    const { icon, enablement, category, title, shortTitle, command } = userFriendlyCommand;
    let absoluteIcon;
    if (icon) {
      if (typeof icon === "string") {
        absoluteIcon = ThemeIcon.fromString(icon) ?? { dark: joinPath(extension.description.extensionLocation, icon), light: joinPath(extension.description.extensionLocation, icon) };
      } else {
        absoluteIcon = {
          dark: joinPath(extension.description.extensionLocation, icon.dark),
          light: joinPath(extension.description.extensionLocation, icon.light)
        };
      }
    }
    const existingCmd = MenuRegistry.getCommand(command);
    if (existingCmd) {
      if (existingCmd.source) {
        extension.collector.info(localize(
          "dup1",
          "Command `{0}` already registered by {1} ({2})",
          userFriendlyCommand.command,
          existingCmd.source.title,
          existingCmd.source.id
        ));
      } else {
        extension.collector.info(localize("dup0", "Command `{0}` already registered", userFriendlyCommand.command));
      }
    }
    _commandRegistrations.add(MenuRegistry.addCommand({
      id: command,
      title,
      source: { id: extension.description.identifier.value, title: extension.description.displayName ?? extension.description.name },
      shortTitle,
      tooltip: title,
      category,
      precondition: ContextKeyExpr.deserialize(enablement),
      icon: absoluteIcon
    }));
  }
  _commandRegistrations.clear();
  for (const extension of extensions) {
    const { value } = extension;
    if (Array.isArray(value)) {
      for (const command of value) {
        handleCommand(command, extension);
      }
    } else {
      handleCommand(value, extension);
    }
  }
});
const _submenus = /* @__PURE__ */ new Map();
const submenusExtensionPoint = ExtensionsRegistry.registerExtensionPoint({
  extensionPoint: "submenus",
  jsonSchema: schema.submenusContribution
});
submenusExtensionPoint.setHandler((extensions) => {
  _submenus.clear();
  for (const extension of extensions) {
    const { value, collector } = extension;
    for (const [, submenuInfo] of Object.entries(value)) {
      if (!schema.isValidSubmenu(submenuInfo, collector)) {
        continue;
      }
      if (!submenuInfo.id) {
        collector.warn(localize(
          "submenuId.invalid.id",
          "`{0}` is not a valid submenu identifier",
          submenuInfo.id
        ));
        continue;
      }
      if (_submenus.has(submenuInfo.id)) {
        collector.info(localize(
          "submenuId.duplicate.id",
          "The `{0}` submenu was already previously registered.",
          submenuInfo.id
        ));
        continue;
      }
      if (!submenuInfo.label) {
        collector.warn(localize(
          "submenuId.invalid.label",
          "`{0}` is not a valid submenu label",
          submenuInfo.label
        ));
        continue;
      }
      let absoluteIcon;
      if (submenuInfo.icon) {
        if (typeof submenuInfo.icon === "string") {
          absoluteIcon = ThemeIcon.fromString(submenuInfo.icon) || { dark: joinPath(extension.description.extensionLocation, submenuInfo.icon) };
        } else {
          absoluteIcon = {
            dark: joinPath(extension.description.extensionLocation, submenuInfo.icon.dark),
            light: joinPath(extension.description.extensionLocation, submenuInfo.icon.light)
          };
        }
      }
      const item = {
        id: MenuId.for(`api:${submenuInfo.id}`),
        label: submenuInfo.label,
        icon: absoluteIcon
      };
      _submenus.set(submenuInfo.id, item);
    }
  }
});
const _apiMenusByKey = new Map(apiMenus.map((menu) => [menu.key, menu]));
const _menuRegistrations = new DisposableStore();
const _submenuMenuItems = /* @__PURE__ */ new Map();
const menusExtensionPoint = ExtensionsRegistry.registerExtensionPoint({
  extensionPoint: "menus",
  jsonSchema: schema.menusContribution,
  deps: [submenusExtensionPoint]
});
menusExtensionPoint.setHandler((extensions) => {
  _menuRegistrations.clear();
  _submenuMenuItems.clear();
  for (const extension of extensions) {
    const { value, collector } = extension;
    for (const entry of Object.entries(value)) {
      if (!schema.isValidItems(entry[1], collector)) {
        continue;
      }
      let menu = _apiMenusByKey.get(entry[0]);
      if (!menu) {
        const submenu = _submenus.get(entry[0]);
        if (submenu) {
          menu = {
            key: entry[0],
            id: submenu.id,
            description: ""
          };
        }
      }
      if (!menu) {
        continue;
      }
      if (menu.proposed && !isProposedApiEnabled(extension.description, menu.proposed)) {
        collector.error(localize(
          "proposedAPI.invalid",
          `{0} is a proposed menu identifier. It requires 'package.json#enabledApiProposals: ["{1}"]' and is only available when running out of dev or with the following command line switch: --enable-proposed-api {2}`,
          entry[0],
          menu.proposed,
          extension.description.identifier.value
        ));
        continue;
      }
      for (const menuItem of entry[1]) {
        let item;
        if (schema.isMenuItem(menuItem)) {
          const command = MenuRegistry.getCommand(menuItem.command);
          const alt = menuItem.alt && MenuRegistry.getCommand(menuItem.alt) || void 0;
          if (!command) {
            collector.error(localize(
              "missing.command",
              "Menu item references a command `{0}` which is not defined in the 'commands' section.",
              menuItem.command
            ));
            continue;
          }
          if (menuItem.alt && !alt) {
            collector.warn(localize(
              "missing.altCommand",
              "Menu item references an alt-command `{0}` which is not defined in the 'commands' section.",
              menuItem.alt
            ));
          }
          if (menuItem.command === menuItem.alt) {
            collector.info(localize(
              "dupe.command",
              "Menu item references the same command as default and alt-command"
            ));
          }
          item = { command, alt, group: void 0, order: void 0, when: void 0 };
        } else {
          if (menu.supportsSubmenus === false) {
            collector.error(localize(
              "unsupported.submenureference",
              "Menu item references a submenu for a menu which doesn't have submenu support."
            ));
            continue;
          }
          const submenu = _submenus.get(menuItem.submenu);
          if (!submenu) {
            collector.error(localize(
              "missing.submenu",
              "Menu item references a submenu `{0}` which is not defined in the 'submenus' section.",
              menuItem.submenu
            ));
            continue;
          }
          let submenuRegistrations = _submenuMenuItems.get(menu.id.id);
          if (!submenuRegistrations) {
            submenuRegistrations = /* @__PURE__ */ new Set();
            _submenuMenuItems.set(menu.id.id, submenuRegistrations);
          }
          if (submenuRegistrations.has(submenu.id.id)) {
            collector.warn(localize(
              "submenuItem.duplicate",
              "The `{0}` submenu was already contributed to the `{1}` menu.",
              menuItem.submenu,
              entry[0]
            ));
            continue;
          }
          submenuRegistrations.add(submenu.id.id);
          item = { submenu: submenu.id, icon: submenu.icon, title: submenu.label, group: void 0, order: void 0, when: void 0 };
        }
        if (menuItem.group) {
          const idx = menuItem.group.lastIndexOf("@");
          if (idx > 0) {
            item.group = menuItem.group.substr(0, idx);
            item.order = Number(menuItem.group.substr(idx + 1)) || void 0;
          } else {
            item.group = menuItem.group;
          }
        }
        item.when = ContextKeyExpr.deserialize(menuItem.when);
        _menuRegistrations.add(MenuRegistry.appendMenuItem(menu.id, item));
      }
    }
  }
});
class KeybindingIO {
  static writeKeybindingItem(out, item) {
    if (!item.resolvedKeybinding) {
      return;
    }
    const quotedSerializedKeybinding = JSON.stringify(item.resolvedKeybinding.getUserSettingsLabel());
    out.write(`{ "key": ${rightPaddedString(quotedSerializedKeybinding + ",", 25)} "command": `);
    const quotedSerializedWhen = item.when ? JSON.stringify(item.when.serialize()) : "";
    const quotedSerializeCommand = JSON.stringify(item.command);
    if (quotedSerializedWhen.length > 0) {
      out.write(`${quotedSerializeCommand},`);
      out.writeLine();
      out.write(`                                     "when": ${quotedSerializedWhen}`);
    } else {
      out.write(`${quotedSerializeCommand}`);
    }
    if (item.commandArgs) {
      out.write(",");
      out.writeLine();
      out.write(`                                     "args": ${JSON.stringify(item.commandArgs)}`);
    }
    out.write(" }");
  }
  static readUserKeybindingItem(input) {
    const keybinding = "key" in input && typeof input.key === "string" ? KeybindingParser.parseKeybinding(input.key) : null;
    const when = "when" in input && typeof input.when === "string" ? ContextKeyExpr.deserialize(input.when) : void 0;
    const command = "command" in input && typeof input.command === "string" ? input.command : null;
    const commandArgs = "args" in input && typeof input.args !== "undefined" ? input.args : void 0;
    return {
      keybinding,
      command,
      commandArgs,
      when,
      _sourceKey: "key" in input && typeof input.key === "string" ? input.key : void 0
    };
  }
}
function rightPaddedString(str, minChars) {
  if (str.length < minChars) {
    return str + new Array(minChars - str.length).join(" ");
  }
  return str;
}
class OutputBuilder {
  constructor() {
    this._lines = [];
    this._currentLine = "";
  }
  write(str) {
    this._currentLine += str;
  }
  writeLine(str = "") {
    this._lines.push(this._currentLine + str);
    this._currentLine = "";
  }
  toString() {
    this.writeLine();
    return this._lines.join("\n");
  }
}
function isValidContributedKeyBinding(keyBinding, rejects) {
  if (!keyBinding) {
    rejects.push(localize("nonempty", "expected non-empty value."));
    return false;
  }
  if (typeof keyBinding.command !== "string") {
    rejects.push(localize(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "command"
    ));
    return false;
  }
  if (keyBinding.key && typeof keyBinding.key !== "string") {
    rejects.push(localize(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "key"
    ));
    return false;
  }
  if (keyBinding.when && typeof keyBinding.when !== "string") {
    rejects.push(localize(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "when"
    ));
    return false;
  }
  if (keyBinding.mac && typeof keyBinding.mac !== "string") {
    rejects.push(localize(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "mac"
    ));
    return false;
  }
  if (keyBinding.linux && typeof keyBinding.linux !== "string") {
    rejects.push(localize(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "linux"
    ));
    return false;
  }
  if (keyBinding.win && typeof keyBinding.win !== "string") {
    rejects.push(localize(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "win"
    ));
    return false;
  }
  return true;
}
const keybindingType = {
  type: "object",
  default: { command: "", key: "" },
  properties: {
    command: {
      description: localize(
        "vscode.extension.contributes.keybindings.command",
        "Identifier of the command to run when keybinding is triggered."
      ),
      type: "string"
    },
    args: {
      description: localize(
        "vscode.extension.contributes.keybindings.args",
        "Arguments to pass to the command to execute."
      )
    },
    key: {
      description: localize(
        "vscode.extension.contributes.keybindings.key",
        "Key or key sequence (separate keys with plus-sign and sequences with space, e.g. Ctrl+O and Ctrl+L L for a chord)."
      ),
      type: "string"
    },
    mac: {
      description: localize(
        "vscode.extension.contributes.keybindings.mac",
        "Mac specific key or key sequence."
      ),
      type: "string"
    },
    linux: {
      description: localize(
        "vscode.extension.contributes.keybindings.linux",
        "Linux specific key or key sequence."
      ),
      type: "string"
    },
    win: {
      description: localize(
        "vscode.extension.contributes.keybindings.win",
        "Windows specific key or key sequence."
      ),
      type: "string"
    },
    when: {
      description: localize(
        "vscode.extension.contributes.keybindings.when",
        "Condition when the key is active."
      ),
      type: "string"
    }
  }
};
const keybindingsExtPoint = ExtensionsRegistry.registerExtensionPoint({
  extensionPoint: "keybindings",
  deps: [commandsExtensionPoint],
  jsonSchema: {
    description: localize("vscode.extension.contributes.keybindings", "Contributes keybindings."),
    oneOf: [
      keybindingType,
      {
        type: "array",
        items: keybindingType
      }
    ]
  }
});
const NUMPAD_PRINTABLE_SCANCODES = [
  90,
  91,
  92,
  93,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105
];
const otherMacNumpadMapping = /* @__PURE__ */ new Map();
otherMacNumpadMapping.set(95, 22);
otherMacNumpadMapping.set(96, 23);
otherMacNumpadMapping.set(97, 24);
otherMacNumpadMapping.set(98, 25);
otherMacNumpadMapping.set(99, 26);
otherMacNumpadMapping.set(100, 27);
otherMacNumpadMapping.set(101, 28);
otherMacNumpadMapping.set(102, 29);
otherMacNumpadMapping.set(103, 30);
otherMacNumpadMapping.set(104, 21);
let WorkbenchKeybindingService = class WorkbenchKeybindingService2 extends AbstractKeybindingService {
  constructor(contextKeyService, commandService, telemetryService, notificationService, userDataProfileService, hostService, extensionService, fileService, uriIdentityService, logService, keyboardLayoutService) {
    super(contextKeyService, commandService, telemetryService, notificationService, logService);
    this.hostService = hostService;
    this.keyboardLayoutService = keyboardLayoutService;
    this._contributions = [];
    this.isComposingGlobalContextKey = contextKeyService.createKey("isComposing", false);
    this.kbsJsonSchema = new KeybindingsJsonSchema();
    this.updateKeybindingsJsonSchema();
    this._keyboardMapper = this.keyboardLayoutService.getKeyboardMapper();
    this.keyboardLayoutService.onDidChangeKeyboardLayout(() => {
      this._keyboardMapper = this.keyboardLayoutService.getKeyboardMapper();
      this.updateResolver();
    });
    this._cachedResolver = null;
    this.userKeybindings = this._register(new UserKeybindings(userDataProfileService, uriIdentityService, fileService, logService));
    this.userKeybindings.initialize().then(() => {
      if (this.userKeybindings.keybindings.length) {
        this.updateResolver();
      }
    });
    this._register(this.userKeybindings.onDidChange(() => {
      logService.debug("User keybindings changed");
      this.updateResolver();
    }));
    keybindingsExtPoint.setHandler((extensions) => {
      const keybindings = [];
      for (const extension of extensions) {
        this._handleKeybindingsExtensionPointUser(extension.description.identifier, extension.description.isBuiltin, extension.value, extension.collector, keybindings);
      }
      KeybindingsRegistry.setExtensionKeybindings(keybindings);
      this.updateResolver();
    });
    this.updateKeybindingsJsonSchema();
    this._register(extensionService.onDidRegisterExtensions(() => this.updateKeybindingsJsonSchema()));
    this._register(addDisposableListener(window, EventType.KEY_DOWN, (e) => {
      this.isComposingGlobalContextKey.set(e.isComposing);
      const keyEvent = new StandardKeyboardEvent(e);
      this._log(`/ Received  keydown event - ${printKeyboardEvent(e)}`);
      this._log(`| Converted keydown event - ${printStandardKeyboardEvent(keyEvent)}`);
      const shouldPreventDefault = this._dispatch(keyEvent, keyEvent.target);
      if (shouldPreventDefault) {
        keyEvent.preventDefault();
      }
      this.isComposingGlobalContextKey.set(false);
    }));
    this._register(addDisposableListener(window, EventType.KEY_UP, (e) => {
      this.isComposingGlobalContextKey.set(e.isComposing);
      const keyEvent = new StandardKeyboardEvent(e);
      const shouldPreventDefault = this._singleModifierDispatch(keyEvent, keyEvent.target);
      if (shouldPreventDefault) {
        keyEvent.preventDefault();
      }
      this.isComposingGlobalContextKey.set(false);
    }));
    this._register(onDidChangeFullscreen(() => {
      const keyboard = navigator.keyboard;
      if (BrowserFeatures.keyboard === 2) {
        return;
      }
      if (isFullscreen()) {
        keyboard == null ? void 0 : keyboard.lock(["Escape"]);
      } else {
        keyboard == null ? void 0 : keyboard.unlock();
      }
      this._cachedResolver = null;
      this._onDidUpdateKeybindings.fire();
    }));
  }
  registerSchemaContribution(contribution) {
    this._contributions.push(contribution);
    if (contribution.onDidChange) {
      this._register(contribution.onDidChange(() => this.updateKeybindingsJsonSchema()));
    }
    this.updateKeybindingsJsonSchema();
  }
  updateKeybindingsJsonSchema() {
    this.kbsJsonSchema.updateSchema(this._contributions.flatMap((x) => x.getSchemaAdditions()));
  }
  _printKeybinding(keybinding) {
    return UserSettingsLabelProvider.toLabel(OS, keybinding.chords, (chord) => {
      if (chord instanceof KeyCodeChord) {
        return KeyCodeUtils.toString(chord.keyCode);
      }
      return ScanCodeUtils.toString(chord.scanCode);
    }) || "[null]";
  }
  _printResolvedKeybinding(resolvedKeybinding) {
    return resolvedKeybinding.getDispatchChords().map((x) => x || "[null]").join(" ");
  }
  _printResolvedKeybindings(output, input, resolvedKeybindings) {
    const padLength = 35;
    const firstRow = `${input.padStart(padLength, " ")} => `;
    if (resolvedKeybindings.length === 0) {
      output.push(`${firstRow}${"[NO BINDING]".padStart(padLength, " ")}`);
      return;
    }
    for (const resolvedKeybinding of resolvedKeybindings) {
      {
        output.push(`${firstRow}${this._printResolvedKeybinding(resolvedKeybinding).padStart(padLength, " ")}`);
      }
    }
  }
  _dumpResolveKeybindingDebugInfo() {
    const seenBindings = /* @__PURE__ */ new Set();
    const result = [];
    result.push(`Default Resolved Keybindings (unique only):`);
    for (const item of KeybindingsRegistry.getDefaultKeybindings()) {
      if (!item.keybinding) {
        continue;
      }
      const input = this._printKeybinding(item.keybinding);
      if (seenBindings.has(input)) {
        continue;
      }
      seenBindings.add(input);
      const resolvedKeybindings = this._keyboardMapper.resolveKeybinding(item.keybinding);
      this._printResolvedKeybindings(result, input, resolvedKeybindings);
    }
    result.push(`User Resolved Keybindings (unique only):`);
    for (const item of this.userKeybindings.keybindings) {
      if (!item.keybinding) {
        continue;
      }
      const input = item._sourceKey ?? "Impossible: missing source key, but has keybinding";
      if (seenBindings.has(input)) {
        continue;
      }
      seenBindings.add(input);
      const resolvedKeybindings = this._keyboardMapper.resolveKeybinding(item.keybinding);
      this._printResolvedKeybindings(result, input, resolvedKeybindings);
    }
    return result.join("\n");
  }
  _dumpDebugInfo() {
    const layoutInfo = JSON.stringify(this.keyboardLayoutService.getCurrentKeyboardLayout(), null, "	");
    const mapperInfo = this._keyboardMapper.dumpDebugInfo();
    const resolvedKeybindings = this._dumpResolveKeybindingDebugInfo();
    const rawMapping = JSON.stringify(this.keyboardLayoutService.getRawKeyboardMapping(), null, "	");
    return `Layout info:
${layoutInfo}

${resolvedKeybindings}

${mapperInfo}

Raw mapping:
${rawMapping}`;
  }
  _dumpDebugInfoJSON() {
    const info = {
      layout: this.keyboardLayoutService.getCurrentKeyboardLayout(),
      rawMapping: this.keyboardLayoutService.getRawKeyboardMapping()
    };
    return JSON.stringify(info, null, "	");
  }
  customKeybindingsCount() {
    return this.userKeybindings.keybindings.length;
  }
  updateResolver() {
    this._cachedResolver = null;
    this._onDidUpdateKeybindings.fire();
  }
  getUserKeybindingItems() {
    return this._resolveUserKeybindingItems(this.userKeybindings.keybindings, false);
  }
  _getResolver() {
    if (!this._cachedResolver) {
      const defaults = this._resolveKeybindingItems(KeybindingsRegistry.getDefaultKeybindings(), true);
      const overrides = this.getUserKeybindingItems();
      this._cachedResolver = new KeybindingResolver(defaults, overrides, (str) => this._log(str));
    }
    return this._cachedResolver;
  }
  _documentHasFocus() {
    return this.hostService.hasFocus;
  }
  _resolveKeybindingItems(items, isDefault) {
    const result = [];
    let resultLen = 0;
    for (const item of items) {
      const when = item.when || void 0;
      const keybinding = item.keybinding;
      if (!keybinding) {
        result[resultLen++] = new ResolvedKeybindingItem(
          void 0,
          item.command,
          item.commandArgs,
          when,
          isDefault,
          item.extensionId,
          item.isBuiltinExtension
        );
      } else {
        if (this._assertBrowserConflicts(keybinding)) {
          continue;
        }
        const resolvedKeybindings = this._keyboardMapper.resolveKeybinding(keybinding);
        for (let i = resolvedKeybindings.length - 1; i >= 0; i--) {
          const resolvedKeybinding = resolvedKeybindings[i];
          result[resultLen++] = new ResolvedKeybindingItem(
            resolvedKeybinding,
            item.command,
            item.commandArgs,
            when,
            isDefault,
            item.extensionId,
            item.isBuiltinExtension
          );
        }
      }
    }
    return result;
  }
  _resolveUserKeybindingItems(items, isDefault) {
    const result = [];
    let resultLen = 0;
    for (const item of items) {
      const when = item.when || void 0;
      if (!item.keybinding) {
        result[resultLen++] = new ResolvedKeybindingItem(void 0, item.command, item.commandArgs, when, isDefault, null, false);
      } else {
        const resolvedKeybindings = this._keyboardMapper.resolveKeybinding(item.keybinding);
        for (const resolvedKeybinding of resolvedKeybindings) {
          result[resultLen++] = new ResolvedKeybindingItem(
            resolvedKeybinding,
            item.command,
            item.commandArgs,
            when,
            isDefault,
            null,
            false
          );
        }
      }
    }
    return result;
  }
  _assertBrowserConflicts(keybinding) {
    if (BrowserFeatures.keyboard === 0) {
      return false;
    }
    if (BrowserFeatures.keyboard === 1 && isFullscreen()) {
      return false;
    }
    for (const chord of keybinding.chords) {
      if (!chord.metaKey && !chord.altKey && !chord.ctrlKey && !chord.shiftKey) {
        continue;
      }
      const modifiersMask = 2048 | 512 | 1024;
      let partModifiersMask = 0;
      if (chord.metaKey) {
        partModifiersMask |= 2048;
      }
      if (chord.shiftKey) {
        partModifiersMask |= 1024;
      }
      if (chord.altKey) {
        partModifiersMask |= 512;
      }
      if (chord.ctrlKey && OS === 2) {
        partModifiersMask |= 256;
      }
      if ((partModifiersMask & modifiersMask) === (2048 | 512)) {
        if (chord instanceof ScanCodeChord && (chord.scanCode === 86 || chord.scanCode === 85)) {
          return true;
        }
        if (chord instanceof KeyCodeChord && (chord.keyCode === 15 || chord.keyCode === 17)) {
          return true;
        }
      }
      if ((partModifiersMask & modifiersMask) === 2048) {
        if (chord instanceof ScanCodeChord && (chord.scanCode >= 36 && chord.scanCode <= 45)) {
          return true;
        }
        if (chord instanceof KeyCodeChord && (chord.keyCode >= 21 && chord.keyCode <= 30)) {
          return true;
        }
      }
    }
    return false;
  }
  resolveKeybinding(kb) {
    return this._keyboardMapper.resolveKeybinding(kb);
  }
  resolveKeyboardEvent(keyboardEvent) {
    this.keyboardLayoutService.validateCurrentKeyboardMapping(keyboardEvent);
    return this._keyboardMapper.resolveKeyboardEvent(keyboardEvent);
  }
  resolveUserBinding(userBinding) {
    const keybinding = KeybindingParser.parseKeybinding(userBinding);
    return keybinding ? this._keyboardMapper.resolveKeybinding(keybinding) : [];
  }
  _handleKeybindingsExtensionPointUser(extensionId, isBuiltin, keybindings, collector, result) {
    if (Array.isArray(keybindings)) {
      for (let i = 0, len = keybindings.length; i < len; i++) {
        this._handleKeybinding(extensionId, isBuiltin, i + 1, keybindings[i], collector, result);
      }
    } else {
      this._handleKeybinding(extensionId, isBuiltin, 1, keybindings, collector, result);
    }
  }
  _handleKeybinding(extensionId, isBuiltin, idx, keybindings, collector, result) {
    const rejects = [];
    if (isValidContributedKeyBinding(keybindings, rejects)) {
      const rule = this._asCommandRule(extensionId, isBuiltin, idx++, keybindings);
      if (rule) {
        result.push(rule);
      }
    }
    if (rejects.length > 0) {
      collector.error(localize(
        "invalid.keybindings",
        "Invalid `contributes.{0}`: {1}",
        keybindingsExtPoint.name,
        rejects.join("\n")
      ));
    }
  }
  static bindToCurrentPlatform(key, mac, linux, win) {
    if (OS === 1 && win) {
      if (win) {
        return win;
      }
    } else if (OS === 2) {
      if (mac) {
        return mac;
      }
    } else {
      if (linux) {
        return linux;
      }
    }
    return key;
  }
  _asCommandRule(extensionId, isBuiltin, idx, binding) {
    const { command, args, when, key, mac, linux, win } = binding;
    const keybinding = WorkbenchKeybindingService2.bindToCurrentPlatform(key, mac, linux, win);
    if (!keybinding) {
      return void 0;
    }
    let weight;
    if (isBuiltin) {
      weight = 300 + idx;
    } else {
      weight = 400 + idx;
    }
    const commandAction = MenuRegistry.getCommand(command);
    const precondition = commandAction && commandAction.precondition;
    let fullWhen;
    if (when && precondition) {
      fullWhen = ContextKeyExpr.and(precondition, ContextKeyExpr.deserialize(when));
    } else if (when) {
      fullWhen = ContextKeyExpr.deserialize(when);
    } else if (precondition) {
      fullWhen = precondition;
    }
    const desc = {
      id: command,
      args,
      when: fullWhen,
      weight,
      keybinding: KeybindingParser.parseKeybinding(keybinding),
      extensionId: extensionId.value,
      isBuiltinExtension: isBuiltin
    };
    return desc;
  }
  getDefaultKeybindingsContent() {
    const resolver = this._getResolver();
    const defaultKeybindings = resolver.getDefaultKeybindings();
    const boundCommands = resolver.getDefaultBoundCommands();
    return WorkbenchKeybindingService2._getDefaultKeybindings(defaultKeybindings) + "\n\n" + WorkbenchKeybindingService2._getAllCommandsAsComment(boundCommands);
  }
  static _getDefaultKeybindings(defaultKeybindings) {
    const out = new OutputBuilder();
    out.writeLine("[");
    const lastIndex = defaultKeybindings.length - 1;
    defaultKeybindings.forEach((k, index2) => {
      KeybindingIO.writeKeybindingItem(out, k);
      if (index2 !== lastIndex) {
        out.writeLine(",");
      } else {
        out.writeLine();
      }
    });
    out.writeLine("]");
    return out.toString();
  }
  static _getAllCommandsAsComment(boundCommands) {
    const unboundCommands = getAllUnboundCommands(boundCommands);
    const pretty = unboundCommands.sort().join("\n// - ");
    return "// " + localize("unboundCommands", "Here are other available commands: ") + "\n// - " + pretty;
  }
  mightProducePrintableCharacter(event) {
    if (event.ctrlKey || event.metaKey || event.altKey) {
      return false;
    }
    const code = ScanCodeUtils.toEnum(event.code);
    if (NUMPAD_PRINTABLE_SCANCODES.indexOf(code) !== -1) {
      if (event.keyCode === IMMUTABLE_CODE_TO_KEY_CODE[code]) {
        return true;
      }
      if (isMacintosh && event.keyCode === otherMacNumpadMapping.get(code)) {
        return true;
      }
      return false;
    }
    const keycode = IMMUTABLE_CODE_TO_KEY_CODE[code];
    if (keycode !== -1) {
      return false;
    }
    const mapping = this.keyboardLayoutService.getRawKeyboardMapping();
    if (!mapping) {
      return false;
    }
    const keyInfo = mapping[event.code];
    if (!keyInfo) {
      return false;
    }
    if (!keyInfo.value || /\s/.test(keyInfo.value)) {
      return false;
    }
    return true;
  }
};
WorkbenchKeybindingService = __decorate([
  __param(0, IContextKeyService),
  __param(1, ICommandService),
  __param(2, ITelemetryService),
  __param(3, INotificationService),
  __param(4, IUserDataProfileService),
  __param(5, IHostService),
  __param(6, IExtensionService),
  __param(7, IFileService),
  __param(8, IUriIdentityService),
  __param(9, ILogService),
  __param(10, IKeyboardLayoutService)
], WorkbenchKeybindingService);
class UserKeybindings extends Disposable {
  get keybindings() {
    return this._keybindings;
  }
  constructor(userDataProfileService, uriIdentityService, fileService, logService) {
    super();
    this.userDataProfileService = userDataProfileService;
    this.uriIdentityService = uriIdentityService;
    this.fileService = fileService;
    this._rawKeybindings = [];
    this._keybindings = [];
    this.watchDisposables = this._register(new DisposableStore());
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this.watch();
    this.reloadConfigurationScheduler = this._register(new RunOnceScheduler(() => this.reload().then((changed) => {
      if (changed) {
        this._onDidChange.fire();
      }
    }), 50));
    this._register(Event.filter(this.fileService.onDidFilesChange, (e) => e.contains(this.userDataProfileService.currentProfile.keybindingsResource))(() => {
      logService.debug("Keybindings file changed");
      this.reloadConfigurationScheduler.schedule();
    }));
    this._register(this.fileService.onDidRunOperation((e) => {
      if (e.operation === 4 && e.resource.toString() === this.userDataProfileService.currentProfile.keybindingsResource.toString()) {
        logService.debug("Keybindings file written");
        this.reloadConfigurationScheduler.schedule();
      }
    }));
    this._register(userDataProfileService.onDidChangeCurrentProfile((e) => {
      if (!this.uriIdentityService.extUri.isEqual(e.previous.keybindingsResource, e.profile.keybindingsResource)) {
        e.join(this.whenCurrentProfileChanged());
      }
    }));
  }
  async whenCurrentProfileChanged() {
    this.watch();
    this.reloadConfigurationScheduler.schedule();
  }
  watch() {
    this.watchDisposables.clear();
    this.watchDisposables.add(this.fileService.watch(dirname(this.userDataProfileService.currentProfile.keybindingsResource)));
    this.watchDisposables.add(this.fileService.watch(this.userDataProfileService.currentProfile.keybindingsResource));
  }
  async initialize() {
    await this.reload();
  }
  async reload() {
    const newKeybindings = await this.readUserKeybindings();
    if (equals(this._rawKeybindings, newKeybindings)) {
      return false;
    }
    this._rawKeybindings = newKeybindings;
    this._keybindings = this._rawKeybindings.map((k) => KeybindingIO.readUserKeybindingItem(k));
    return true;
  }
  async readUserKeybindings() {
    try {
      const content = await this.fileService.readFile(this.userDataProfileService.currentProfile.keybindingsResource);
      const value = parse(content.value.toString());
      return Array.isArray(value) ? value.filter((v) => v && typeof v === "object") : [];
    } catch (e) {
      return [];
    }
  }
}
const _KeybindingsJsonSchema = class _KeybindingsJsonSchema {
  constructor() {
    this.commandsSchemas = [];
    this.commandsEnum = [];
    this.removalCommandsEnum = [];
    this.commandsEnumDescriptions = [];
    this.schema = {
      id: _KeybindingsJsonSchema.schemaId,
      type: "array",
      title: localize("keybindings.json.title", "Keybindings configuration"),
      allowTrailingCommas: true,
      allowComments: true,
      definitions: {
        "editorGroupsSchema": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "groups": {
                "$ref": "#/definitions/editorGroupsSchema",
                "default": [{}, {}]
              },
              "size": {
                "type": "number",
                "default": 0.5
              }
            }
          }
        },
        "commandNames": {
          "type": "string",
          "enum": this.commandsEnum,
          "enumDescriptions": this.commandsEnumDescriptions,
          "description": localize("keybindings.json.command", "Name of the command to execute")
        },
        "commandType": {
          "anyOf": [
            {
              $ref: "#/definitions/commandNames"
            },
            {
              "type": "string",
              "enum": this.removalCommandsEnum,
              "enumDescriptions": this.commandsEnumDescriptions,
              "description": localize(
                "keybindings.json.removalCommand",
                "Name of the command to remove keyboard shortcut for"
              )
            },
            {
              "type": "string"
            }
          ]
        },
        "commandsSchemas": {
          "allOf": this.commandsSchemas
        }
      },
      items: {
        "required": ["key"],
        "type": "object",
        "defaultSnippets": [{ "body": { "key": "$1", "command": "$2", "when": "$3" } }],
        "properties": {
          "key": {
            "type": "string",
            "description": localize("keybindings.json.key", "Key or key sequence (separated by space)")
          },
          "command": {
            "anyOf": [
              {
                "if": {
                  "type": "array"
                },
                "then": {
                  "not": {
                    "type": "array"
                  },
                  "errorMessage": localize(
                    "keybindings.commandsIsArray",
                    `Incorrect type. Expected "{0}". The field 'command' does not support running multiple commands. Use command 'runCommands' to pass it multiple commands to run.`,
                    "string"
                  )
                },
                "else": {
                  "$ref": "#/definitions/commandType"
                }
              },
              {
                "$ref": "#/definitions/commandType"
              }
            ]
          },
          "when": {
            "type": "string",
            "description": localize("keybindings.json.when", "Condition when the key is active.")
          },
          "args": {
            "description": localize("keybindings.json.args", "Arguments to pass to the command to execute.")
          }
        },
        "$ref": "#/definitions/commandsSchemas"
      }
    };
    this.schemaRegistry = Registry.as(Extensions.JSONContribution);
    this.schemaRegistry.registerSchema(_KeybindingsJsonSchema.schemaId, this.schema);
  }
  updateSchema(additionalContributions) {
    this.commandsSchemas.length = 0;
    this.commandsEnum.length = 0;
    this.removalCommandsEnum.length = 0;
    this.commandsEnumDescriptions.length = 0;
    const knownCommands = /* @__PURE__ */ new Set();
    const addKnownCommand = (commandId, description) => {
      if (!/^_/.test(commandId)) {
        if (!knownCommands.has(commandId)) {
          knownCommands.add(commandId);
          this.commandsEnum.push(commandId);
          this.commandsEnumDescriptions.push(description);
          this.removalCommandsEnum.push(`-${commandId}`);
        }
      }
    };
    const allCommands = CommandsRegistry.getCommands();
    for (const [commandId, command] of allCommands) {
      const commandDescription = command.description;
      addKnownCommand(commandId, commandDescription ? commandDescription.description : void 0);
      if (!commandDescription || !commandDescription.args || commandDescription.args.length !== 1 || !commandDescription.args[0].schema) {
        continue;
      }
      const argsSchema = commandDescription.args[0].schema;
      const argsRequired = typeof commandDescription.args[0].isOptional !== "undefined" ? !commandDescription.args[0].isOptional : Array.isArray(argsSchema.required) && argsSchema.required.length > 0;
      const addition = {
        "if": {
          "required": ["command"],
          "properties": {
            "command": { "const": commandId }
          }
        },
        "then": {
          "required": [].concat(argsRequired ? ["args"] : []),
          "properties": {
            "args": argsSchema
          }
        }
      };
      this.commandsSchemas.push(addition);
    }
    const menuCommands = MenuRegistry.getCommands();
    for (const commandId of menuCommands.keys()) {
      addKnownCommand(commandId);
    }
    this.commandsSchemas.push(...additionalContributions);
    this.schemaRegistry.notifySchemaChanged(_KeybindingsJsonSchema.schemaId);
  }
};
_KeybindingsJsonSchema.schemaId = "vscode://schemas/keybindings";
let KeybindingsJsonSchema = _KeybindingsJsonSchema;
function deserializeMapping(serializedMapping) {
  const mapping = serializedMapping;
  const ret = {};
  for (const key in mapping) {
    const result = mapping[key];
    if (result.length) {
      const value = result[0];
      const withShift = result[1];
      const withAltGr = result[2];
      const withShiftAltGr = result[3];
      const mask = Number(result[4]);
      const vkey = result.length === 6 ? result[5] : void 0;
      ret[key] = {
        "value": value,
        "vkey": vkey,
        "withShift": withShift,
        "withAltGr": withAltGr,
        "withShiftAltGr": withShiftAltGr,
        "valueIsDeadKey": (mask & 1) > 0,
        "withShiftIsDeadKey": (mask & 2) > 0,
        "withAltGrIsDeadKey": (mask & 4) > 0,
        "withShiftAltGrIsDeadKey": (mask & 8) > 0
      };
    } else {
      ret[key] = {
        "value": "",
        "valueIsDeadKey": false,
        "withShift": "",
        "withShiftIsDeadKey": false,
        "withAltGr": "",
        "withAltGrIsDeadKey": false,
        "withShiftAltGr": "",
        "withShiftAltGrIsDeadKey": false
      };
    }
  }
  return ret;
}
class KeymapInfo {
  constructor(layout, secondaryLayouts, keyboardMapping, isUserKeyboardLayout) {
    this.layout = layout;
    this.secondaryLayouts = secondaryLayouts;
    this.mapping = deserializeMapping(keyboardMapping);
    this.isUserKeyboardLayout = !!isUserKeyboardLayout;
    this.layout.isUserKeyboardLayout = !!isUserKeyboardLayout;
  }
  static createKeyboardLayoutFromDebugInfo(layout, value, isUserKeyboardLayout) {
    const keyboardLayoutInfo = new KeymapInfo(layout, [], {}, true);
    keyboardLayoutInfo.mapping = value;
    return keyboardLayoutInfo;
  }
  update(other) {
    this.layout = other.layout;
    this.secondaryLayouts = other.secondaryLayouts;
    this.mapping = other.mapping;
    this.isUserKeyboardLayout = other.isUserKeyboardLayout;
    this.layout.isUserKeyboardLayout = other.isUserKeyboardLayout;
  }
  getScore(other) {
    let score = 0;
    for (const key in other) {
      if (isWindows && (key === "Backslash" || key === "KeyQ")) {
        continue;
      }
      if (isLinux && (key === "Backspace" || key === "Escape")) {
        continue;
      }
      const currentMapping = this.mapping[key];
      if (currentMapping === void 0) {
        score -= 1;
      }
      const otherMapping = other[key];
      if (currentMapping && otherMapping && currentMapping.value !== otherMapping.value) {
        score -= 1;
      }
    }
    return score;
  }
  equal(other) {
    if (this.isUserKeyboardLayout !== other.isUserKeyboardLayout) {
      return false;
    }
    if (getKeyboardLayoutId(this.layout) !== getKeyboardLayoutId(other.layout)) {
      return false;
    }
    return this.fuzzyEqual(other.mapping);
  }
  fuzzyEqual(other) {
    for (const key in other) {
      if (isWindows && (key === "Backslash" || key === "KeyQ")) {
        continue;
      }
      if (this.mapping[key] === void 0) {
        return false;
      }
      const currentMapping = this.mapping[key];
      const otherMapping = other[key];
      if (currentMapping.value !== otherMapping.value) {
        return false;
      }
    }
    return true;
  }
}
function readKeyboardConfig(configurationService) {
  const keyboard = configurationService.getValue("keyboard");
  const dispatch = (keyboard == null ? void 0 : keyboard.dispatch) === "keyCode" ? 1 : 0;
  const mapAltGrToCtrlAlt = Boolean(keyboard == null ? void 0 : keyboard.mapAltGrToCtrlAlt);
  return { dispatch, mapAltGrToCtrlAlt };
}
const configurationRegistry$1 = Registry.as(Extensions$1.Configuration);
const keyboardConfiguration$1 = {
  "id": "keyboard",
  "order": 15,
  "type": "object",
  "title": localize("keyboardConfigurationTitle", "Keyboard"),
  "properties": {
    "keyboard.dispatch": {
      scope: 1,
      type: "string",
      enum: ["code", "keyCode"],
      default: "code",
      markdownDescription: localize(
        "dispatch",
        "Controls the dispatching logic for key presses to use either `code` (recommended) or `keyCode`."
      ),
      included: OS === 2 || OS === 3
    },
    "keyboard.mapAltGrToCtrlAlt": {
      scope: 1,
      type: "boolean",
      default: false,
      markdownDescription: localize(
        "mapAltGrToCtrlAlt",
        "Controls if the AltGraph+ modifier should be treated as Ctrl+Alt+."
      ),
      included: OS === 1
    }
  }
};
configurationRegistry$1.registerConfiguration(keyboardConfiguration$1);
class CachedKeyboardMapper {
  constructor(actual) {
    this._actual = actual;
    this._cache = /* @__PURE__ */ new Map();
  }
  dumpDebugInfo() {
    return this._actual.dumpDebugInfo();
  }
  resolveKeyboardEvent(keyboardEvent) {
    return this._actual.resolveKeyboardEvent(keyboardEvent);
  }
  resolveKeybinding(keybinding) {
    const hashCode = keybinding.getHashCode();
    const resolved = this._cache.get(hashCode);
    if (!resolved) {
      const r = this._actual.resolveKeybinding(keybinding);
      this._cache.set(hashCode, r);
      return r;
    }
    return resolved;
  }
}
class WindowsNativeResolvedKeybinding extends BaseResolvedKeybinding {
  constructor(mapper, chords) {
    super(1, chords);
    this._mapper = mapper;
  }
  _getLabel(chord) {
    if (chord.isDuplicateModifierCase()) {
      return "";
    }
    return this._mapper.getUILabelForKeyCode(chord.keyCode);
  }
  _getUSLabelForKeybinding(chord) {
    if (chord.isDuplicateModifierCase()) {
      return "";
    }
    return KeyCodeUtils.toString(chord.keyCode);
  }
  getUSLabel() {
    return UILabelProvider.toLabel(this._os, this._chords, (keybinding) => this._getUSLabelForKeybinding(keybinding));
  }
  _getAriaLabel(chord) {
    if (chord.isDuplicateModifierCase()) {
      return "";
    }
    return this._mapper.getAriaLabelForKeyCode(chord.keyCode);
  }
  _getElectronAccelerator(chord) {
    return this._mapper.getElectronAcceleratorForKeyBinding(chord);
  }
  _getUserSettingsLabel(chord) {
    if (chord.isDuplicateModifierCase()) {
      return "";
    }
    const result = this._mapper.getUserSettingsLabelForKeyCode(chord.keyCode);
    return result ? result.toLowerCase() : result;
  }
  _isWYSIWYG(chord) {
    return this.__isWYSIWYG(chord.keyCode);
  }
  __isWYSIWYG(keyCode) {
    if (keyCode === 15 || keyCode === 16 || keyCode === 17 || keyCode === 18) {
      return true;
    }
    const ariaLabel = this._mapper.getAriaLabelForKeyCode(keyCode);
    const userSettingsLabel = this._mapper.getUserSettingsLabelForKeyCode(keyCode);
    return ariaLabel === userSettingsLabel;
  }
  _getChordDispatch(chord) {
    if (chord.isModifierKey()) {
      return null;
    }
    let result = "";
    if (chord.ctrlKey) {
      result += "ctrl+";
    }
    if (chord.shiftKey) {
      result += "shift+";
    }
    if (chord.altKey) {
      result += "alt+";
    }
    if (chord.metaKey) {
      result += "meta+";
    }
    result += KeyCodeUtils.toString(chord.keyCode);
    return result;
  }
  _getSingleModifierChordDispatch(chord) {
    if (chord.keyCode === 5 && !chord.shiftKey && !chord.altKey && !chord.metaKey) {
      return "ctrl";
    }
    if (chord.keyCode === 4 && !chord.ctrlKey && !chord.altKey && !chord.metaKey) {
      return "shift";
    }
    if (chord.keyCode === 6 && !chord.ctrlKey && !chord.shiftKey && !chord.metaKey) {
      return "alt";
    }
    if (chord.keyCode === 57 && !chord.ctrlKey && !chord.shiftKey && !chord.altKey) {
      return "meta";
    }
    return null;
  }
  static getProducedCharCode(chord, mapping) {
    if (!mapping) {
      return null;
    }
    if (chord.ctrlKey && chord.shiftKey && chord.altKey) {
      return mapping.withShiftAltGr;
    }
    if (chord.ctrlKey && chord.altKey) {
      return mapping.withAltGr;
    }
    if (chord.shiftKey) {
      return mapping.withShift;
    }
    return mapping.value;
  }
  static getProducedChar(chord, mapping) {
    const char = this.getProducedCharCode(chord, mapping);
    if (char === null || char.length === 0) {
      return " --- ";
    }
    return "  " + char + "  ";
  }
}
class WindowsKeyboardMapper {
  constructor(_isUSStandard, rawMappings, _mapAltGrToCtrlAlt) {
    this._isUSStandard = _isUSStandard;
    this._mapAltGrToCtrlAlt = _mapAltGrToCtrlAlt;
    this._keyCodeToLabel = [];
    this._scanCodeToKeyCode = [];
    this._keyCodeToLabel = [];
    this._keyCodeExists = [];
    this._keyCodeToLabel[0] = KeyCodeUtils.toString(0);
    for (let scanCode = 0; scanCode < 193; scanCode++) {
      const immutableKeyCode = IMMUTABLE_CODE_TO_KEY_CODE[scanCode];
      if (immutableKeyCode !== -1) {
        this._scanCodeToKeyCode[scanCode] = immutableKeyCode;
        this._keyCodeToLabel[immutableKeyCode] = KeyCodeUtils.toString(immutableKeyCode);
        this._keyCodeExists[immutableKeyCode] = true;
      }
    }
    const producesLetter = [];
    let producesLetters = false;
    this._codeInfo = [];
    for (const strCode in rawMappings) {
      if (rawMappings.hasOwnProperty(strCode)) {
        const scanCode = ScanCodeUtils.toEnum(strCode);
        if (scanCode === 0) {
          continue;
        }
        const rawMapping = rawMappings[strCode];
        const immutableKeyCode = IMMUTABLE_CODE_TO_KEY_CODE[scanCode];
        if (immutableKeyCode !== -1) {
          const keyCode2 = NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE[rawMapping.vkey] || 0;
          if (keyCode2 === 0 || immutableKeyCode === keyCode2) {
            continue;
          }
          if (scanCode !== 134) {
            continue;
          }
        }
        const value = rawMapping.value;
        const withShift = rawMapping.withShift;
        const withAltGr = rawMapping.withAltGr;
        const withShiftAltGr = rawMapping.withShiftAltGr;
        const keyCode = NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE[rawMapping.vkey] || 0;
        const mapping = {
          scanCode,
          keyCode,
          value,
          withShift,
          withAltGr,
          withShiftAltGr
        };
        this._codeInfo[scanCode] = mapping;
        this._scanCodeToKeyCode[scanCode] = keyCode;
        if (keyCode === 0) {
          continue;
        }
        this._keyCodeExists[keyCode] = true;
        if (value.length === 0) {
          this._keyCodeToLabel[keyCode] = null;
        } else if (value.length > 1) {
          this._keyCodeToLabel[keyCode] = value;
        } else {
          const charCode = value.charCodeAt(0);
          if (charCode >= 97 && charCode <= 122) {
            const upperCaseValue = 65 + (charCode - 97);
            producesLetter[upperCaseValue] = true;
            producesLetters = true;
            this._keyCodeToLabel[keyCode] = String.fromCharCode(65 + (charCode - 97));
          } else if (charCode >= 65 && charCode <= 90) {
            producesLetter[charCode] = true;
            producesLetters = true;
            this._keyCodeToLabel[keyCode] = value;
          } else {
            this._keyCodeToLabel[keyCode] = value;
          }
        }
      }
    }
    const _registerLetterIfMissing = (charCode, keyCode) => {
      if (!producesLetter[charCode]) {
        this._keyCodeToLabel[keyCode] = String.fromCharCode(charCode);
      }
    };
    _registerLetterIfMissing(65, 31);
    _registerLetterIfMissing(66, 32);
    _registerLetterIfMissing(67, 33);
    _registerLetterIfMissing(68, 34);
    _registerLetterIfMissing(69, 35);
    _registerLetterIfMissing(70, 36);
    _registerLetterIfMissing(71, 37);
    _registerLetterIfMissing(72, 38);
    _registerLetterIfMissing(73, 39);
    _registerLetterIfMissing(74, 40);
    _registerLetterIfMissing(75, 41);
    _registerLetterIfMissing(76, 42);
    _registerLetterIfMissing(77, 43);
    _registerLetterIfMissing(78, 44);
    _registerLetterIfMissing(79, 45);
    _registerLetterIfMissing(80, 46);
    _registerLetterIfMissing(81, 47);
    _registerLetterIfMissing(82, 48);
    _registerLetterIfMissing(83, 49);
    _registerLetterIfMissing(84, 50);
    _registerLetterIfMissing(85, 51);
    _registerLetterIfMissing(86, 52);
    _registerLetterIfMissing(87, 53);
    _registerLetterIfMissing(88, 54);
    _registerLetterIfMissing(89, 55);
    _registerLetterIfMissing(90, 56);
    if (!producesLetters) {
      const _registerLabel = (keyCode, charCode) => {
        this._keyCodeToLabel[keyCode] = String.fromCharCode(charCode);
      };
      _registerLabel(85, 59);
      _registerLabel(86, 61);
      _registerLabel(87, 44);
      _registerLabel(88, 45);
      _registerLabel(89, 46);
      _registerLabel(90, 47);
      _registerLabel(91, 96);
      _registerLabel(92, 91);
      _registerLabel(93, 92);
      _registerLabel(94, 93);
      _registerLabel(95, 39);
    }
  }
  dumpDebugInfo() {
    const result = [];
    const immutableSamples = [
      88,
      104
    ];
    let cnt = 0;
    result.push(`-----------------------------------------------------------------------------------------------------------------------------------------`);
    for (let scanCode = 0; scanCode < 193; scanCode++) {
      if (IMMUTABLE_CODE_TO_KEY_CODE[scanCode] !== -1) {
        if (immutableSamples.indexOf(scanCode) === -1) {
          continue;
        }
      }
      if (cnt % 6 === 0) {
        result.push(`|       HW Code combination      |  Key  |    KeyCode combination    |          UI label         |        User settings       | WYSIWYG |`);
        result.push(`-----------------------------------------------------------------------------------------------------------------------------------------`);
      }
      cnt++;
      const mapping = this._codeInfo[scanCode];
      const strCode = ScanCodeUtils.toString(scanCode);
      const mods = [0, 2, 5, 7];
      for (const mod of mods) {
        const ctrlKey = mod & 1 ? true : false;
        const shiftKey = mod & 2 ? true : false;
        const altKey = mod & 4 ? true : false;
        const scanCodeChord = new ScanCodeChord(ctrlKey, shiftKey, altKey, false, scanCode);
        const keyCodeChord = this._resolveChord(scanCodeChord);
        const strKeyCode = keyCodeChord ? KeyCodeUtils.toString(keyCodeChord.keyCode) : null;
        const resolvedKb = keyCodeChord ? new WindowsNativeResolvedKeybinding(this, [keyCodeChord]) : null;
        const outScanCode = `${ctrlKey ? "Ctrl+" : ""}${shiftKey ? "Shift+" : ""}${altKey ? "Alt+" : ""}${strCode}`;
        const ariaLabel = resolvedKb ? resolvedKb.getAriaLabel() : null;
        const outUILabel = ariaLabel ? ariaLabel.replace(/Control\+/, "Ctrl+") : null;
        const outUserSettings = resolvedKb ? resolvedKb.getUserSettingsLabel() : null;
        const outKey = WindowsNativeResolvedKeybinding.getProducedChar(scanCodeChord, mapping);
        const outKb = strKeyCode ? `${ctrlKey ? "Ctrl+" : ""}${shiftKey ? "Shift+" : ""}${altKey ? "Alt+" : ""}${strKeyCode}` : null;
        const isWYSIWYG = resolvedKb ? resolvedKb.isWYSIWYG() : false;
        const outWYSIWYG = isWYSIWYG ? "       " : "   NO  ";
        result.push(`| ${this._leftPad(outScanCode, 30)} | ${outKey} | ${this._leftPad(outKb, 25)} | ${this._leftPad(outUILabel, 25)} |  ${this._leftPad(outUserSettings, 25)} | ${outWYSIWYG} |`);
      }
      result.push(`-----------------------------------------------------------------------------------------------------------------------------------------`);
    }
    return result.join("\n");
  }
  _leftPad(str, cnt) {
    if (str === null) {
      str = "null";
    }
    while (str.length < cnt) {
      str = " " + str;
    }
    return str;
  }
  getUILabelForKeyCode(keyCode) {
    return this._getLabelForKeyCode(keyCode);
  }
  getAriaLabelForKeyCode(keyCode) {
    return this._getLabelForKeyCode(keyCode);
  }
  getUserSettingsLabelForKeyCode(keyCode) {
    if (this._isUSStandard) {
      return KeyCodeUtils.toUserSettingsUS(keyCode);
    }
    return KeyCodeUtils.toUserSettingsGeneral(keyCode);
  }
  getElectronAcceleratorForKeyBinding(chord) {
    return KeyCodeUtils.toElectronAccelerator(chord.keyCode);
  }
  _getLabelForKeyCode(keyCode) {
    return this._keyCodeToLabel[keyCode] || KeyCodeUtils.toString(0);
  }
  resolveKeyboardEvent(keyboardEvent) {
    const ctrlKey = keyboardEvent.ctrlKey || this._mapAltGrToCtrlAlt && keyboardEvent.altGraphKey;
    const altKey = keyboardEvent.altKey || this._mapAltGrToCtrlAlt && keyboardEvent.altGraphKey;
    const chord = new KeyCodeChord(
      ctrlKey,
      keyboardEvent.shiftKey,
      altKey,
      keyboardEvent.metaKey,
      keyboardEvent.keyCode
    );
    return new WindowsNativeResolvedKeybinding(this, [chord]);
  }
  _resolveChord(chord) {
    if (!chord) {
      return null;
    }
    if (chord instanceof KeyCodeChord) {
      if (!this._keyCodeExists[chord.keyCode]) {
        return null;
      }
      return chord;
    }
    const keyCode = this._scanCodeToKeyCode[chord.scanCode] || 0;
    if (keyCode === 0 || !this._keyCodeExists[keyCode]) {
      return null;
    }
    return new KeyCodeChord(chord.ctrlKey, chord.shiftKey, chord.altKey, chord.metaKey, keyCode);
  }
  resolveKeybinding(keybinding) {
    const chords = toEmptyArrayIfContainsNull(keybinding.chords.map((chord) => this._resolveChord(chord)));
    if (chords.length > 0) {
      return [new WindowsNativeResolvedKeybinding(this, chords)];
    }
    return [];
  }
}
const CHAR_CODE_TO_KEY_CODE = [];
class NativeResolvedKeybinding extends BaseResolvedKeybinding {
  constructor(mapper, os, chords) {
    super(os, chords);
    this._mapper = mapper;
  }
  _getLabel(chord) {
    return this._mapper.getUILabelForScanCodeChord(chord);
  }
  _getAriaLabel(chord) {
    return this._mapper.getAriaLabelForScanCodeChord(chord);
  }
  _getElectronAccelerator(chord) {
    return this._mapper.getElectronAcceleratorLabelForScanCodeChord(chord);
  }
  _getUserSettingsLabel(chord) {
    return this._mapper.getUserSettingsLabelForScanCodeChord(chord);
  }
  _isWYSIWYG(binding) {
    if (!binding) {
      return true;
    }
    if (IMMUTABLE_CODE_TO_KEY_CODE[binding.scanCode] !== -1) {
      return true;
    }
    const a = this._mapper.getAriaLabelForScanCodeChord(binding);
    const b = this._mapper.getUserSettingsLabelForScanCodeChord(binding);
    if (!a && !b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return a.toLowerCase() === b.toLowerCase();
  }
  _getChordDispatch(chord) {
    return this._mapper.getDispatchStrForScanCodeChord(chord);
  }
  _getSingleModifierChordDispatch(chord) {
    if ((chord.scanCode === 157 || chord.scanCode === 161) && !chord.shiftKey && !chord.altKey && !chord.metaKey) {
      return "ctrl";
    }
    if ((chord.scanCode === 159 || chord.scanCode === 163) && !chord.ctrlKey && !chord.shiftKey && !chord.metaKey) {
      return "alt";
    }
    if ((chord.scanCode === 158 || chord.scanCode === 162) && !chord.ctrlKey && !chord.altKey && !chord.metaKey) {
      return "shift";
    }
    if ((chord.scanCode === 160 || chord.scanCode === 164) && !chord.ctrlKey && !chord.shiftKey && !chord.altKey) {
      return "meta";
    }
    return null;
  }
}
class ScanCodeCombo {
  constructor(ctrlKey, shiftKey, altKey, scanCode) {
    this.ctrlKey = ctrlKey;
    this.shiftKey = shiftKey;
    this.altKey = altKey;
    this.scanCode = scanCode;
  }
  toString() {
    return `${this.ctrlKey ? "Ctrl+" : ""}${this.shiftKey ? "Shift+" : ""}${this.altKey ? "Alt+" : ""}${ScanCodeUtils.toString(this.scanCode)}`;
  }
  equals(other) {
    return this.ctrlKey === other.ctrlKey && this.shiftKey === other.shiftKey && this.altKey === other.altKey && this.scanCode === other.scanCode;
  }
  getProducedCharCode(mapping) {
    if (!mapping) {
      return "";
    }
    if (this.ctrlKey && this.shiftKey && this.altKey) {
      return mapping.withShiftAltGr;
    }
    if (this.ctrlKey && this.altKey) {
      return mapping.withAltGr;
    }
    if (this.shiftKey) {
      return mapping.withShift;
    }
    return mapping.value;
  }
  getProducedChar(mapping) {
    const charCode = MacLinuxKeyboardMapper.getCharCode(this.getProducedCharCode(mapping));
    if (charCode === 0) {
      return " --- ";
    }
    if (charCode >= 768 && charCode <= 879) {
      return "U+" + charCode.toString(16);
    }
    return "  " + String.fromCharCode(charCode) + "  ";
  }
}
class KeyCodeCombo {
  constructor(ctrlKey, shiftKey, altKey, keyCode) {
    this.ctrlKey = ctrlKey;
    this.shiftKey = shiftKey;
    this.altKey = altKey;
    this.keyCode = keyCode;
  }
  toString() {
    return `${this.ctrlKey ? "Ctrl+" : ""}${this.shiftKey ? "Shift+" : ""}${this.altKey ? "Alt+" : ""}${KeyCodeUtils.toString(this.keyCode)}`;
  }
}
class ScanCodeKeyCodeMapper {
  constructor() {
    this._scanCodeToKeyCode = [];
    this._keyCodeToScanCode = [];
    this._scanCodeToKeyCode = [];
    this._keyCodeToScanCode = [];
  }
  registrationComplete() {
    this._moveToEnd(56);
    this._moveToEnd(106);
  }
  _moveToEnd(scanCode) {
    for (let mod = 0; mod < 8; mod++) {
      const encodedKeyCodeCombos = this._scanCodeToKeyCode[(scanCode << 3) + mod];
      if (!encodedKeyCodeCombos) {
        continue;
      }
      for (let i = 0, len = encodedKeyCodeCombos.length; i < len; i++) {
        const encodedScanCodeCombos = this._keyCodeToScanCode[encodedKeyCodeCombos[i]];
        if (encodedScanCodeCombos.length === 1) {
          continue;
        }
        for (let j = 0, len2 = encodedScanCodeCombos.length; j < len2; j++) {
          const entry = encodedScanCodeCombos[j];
          const entryScanCode = entry >>> 3;
          if (entryScanCode === scanCode) {
            for (let k = j + 1; k < len2; k++) {
              encodedScanCodeCombos[k - 1] = encodedScanCodeCombos[k];
            }
            encodedScanCodeCombos[len2 - 1] = entry;
          }
        }
      }
    }
  }
  registerIfUnknown(scanCodeCombo, keyCodeCombo) {
    if (keyCodeCombo.keyCode === 0) {
      return;
    }
    const scanCodeComboEncoded = this._encodeScanCodeCombo(scanCodeCombo);
    const keyCodeComboEncoded = this._encodeKeyCodeCombo(keyCodeCombo);
    const keyCodeIsDigit = keyCodeCombo.keyCode >= 21 && keyCodeCombo.keyCode <= 30;
    const keyCodeIsLetter = keyCodeCombo.keyCode >= 31 && keyCodeCombo.keyCode <= 56;
    const existingKeyCodeCombos = this._scanCodeToKeyCode[scanCodeComboEncoded];
    if (keyCodeIsDigit || keyCodeIsLetter) {
      if (existingKeyCodeCombos) {
        for (let i = 0, len = existingKeyCodeCombos.length; i < len; i++) {
          if (existingKeyCodeCombos[i] === keyCodeComboEncoded) {
            return;
          }
        }
      }
    } else {
      if (existingKeyCodeCombos && existingKeyCodeCombos.length !== 0) {
        return;
      }
    }
    this._scanCodeToKeyCode[scanCodeComboEncoded] = this._scanCodeToKeyCode[scanCodeComboEncoded] || [];
    this._scanCodeToKeyCode[scanCodeComboEncoded].unshift(keyCodeComboEncoded);
    this._keyCodeToScanCode[keyCodeComboEncoded] = this._keyCodeToScanCode[keyCodeComboEncoded] || [];
    this._keyCodeToScanCode[keyCodeComboEncoded].unshift(scanCodeComboEncoded);
  }
  lookupKeyCodeCombo(keyCodeCombo) {
    const keyCodeComboEncoded = this._encodeKeyCodeCombo(keyCodeCombo);
    const scanCodeCombosEncoded = this._keyCodeToScanCode[keyCodeComboEncoded];
    if (!scanCodeCombosEncoded || scanCodeCombosEncoded.length === 0) {
      return [];
    }
    const result = [];
    for (let i = 0, len = scanCodeCombosEncoded.length; i < len; i++) {
      const scanCodeComboEncoded = scanCodeCombosEncoded[i];
      const ctrlKey = scanCodeComboEncoded & 1 ? true : false;
      const shiftKey = scanCodeComboEncoded & 2 ? true : false;
      const altKey = scanCodeComboEncoded & 4 ? true : false;
      const scanCode = scanCodeComboEncoded >>> 3;
      result[i] = new ScanCodeCombo(ctrlKey, shiftKey, altKey, scanCode);
    }
    return result;
  }
  lookupScanCodeCombo(scanCodeCombo) {
    const scanCodeComboEncoded = this._encodeScanCodeCombo(scanCodeCombo);
    const keyCodeCombosEncoded = this._scanCodeToKeyCode[scanCodeComboEncoded];
    if (!keyCodeCombosEncoded || keyCodeCombosEncoded.length === 0) {
      return [];
    }
    const result = [];
    for (let i = 0, len = keyCodeCombosEncoded.length; i < len; i++) {
      const keyCodeComboEncoded = keyCodeCombosEncoded[i];
      const ctrlKey = keyCodeComboEncoded & 1 ? true : false;
      const shiftKey = keyCodeComboEncoded & 2 ? true : false;
      const altKey = keyCodeComboEncoded & 4 ? true : false;
      const keyCode = keyCodeComboEncoded >>> 3;
      result[i] = new KeyCodeCombo(ctrlKey, shiftKey, altKey, keyCode);
    }
    return result;
  }
  guessStableKeyCode(scanCode) {
    if (scanCode >= 36 && scanCode <= 45) {
      switch (scanCode) {
        case 36:
          return 22;
        case 37:
          return 23;
        case 38:
          return 24;
        case 39:
          return 25;
        case 40:
          return 26;
        case 41:
          return 27;
        case 42:
          return 28;
        case 43:
          return 29;
        case 44:
          return 30;
        case 45:
          return 21;
      }
    }
    const keyCodeCombos1 = this.lookupScanCodeCombo(new ScanCodeCombo(false, false, false, scanCode));
    const keyCodeCombos2 = this.lookupScanCodeCombo(new ScanCodeCombo(false, true, false, scanCode));
    if (keyCodeCombos1.length === 1 && keyCodeCombos2.length === 1) {
      const shiftKey1 = keyCodeCombos1[0].shiftKey;
      const keyCode1 = keyCodeCombos1[0].keyCode;
      const shiftKey2 = keyCodeCombos2[0].shiftKey;
      const keyCode2 = keyCodeCombos2[0].keyCode;
      if (keyCode1 === keyCode2 && shiftKey1 !== shiftKey2) {
        return keyCode1;
      }
    }
    return -1;
  }
  _encodeScanCodeCombo(scanCodeCombo) {
    return this._encode(scanCodeCombo.ctrlKey, scanCodeCombo.shiftKey, scanCodeCombo.altKey, scanCodeCombo.scanCode);
  }
  _encodeKeyCodeCombo(keyCodeCombo) {
    return this._encode(keyCodeCombo.ctrlKey, keyCodeCombo.shiftKey, keyCodeCombo.altKey, keyCodeCombo.keyCode);
  }
  _encode(ctrlKey, shiftKey, altKey, principal) {
    return ((ctrlKey ? 1 : 0) << 0 | (shiftKey ? 1 : 0) << 1 | (altKey ? 1 : 0) << 2 | principal << 3) >>> 0;
  }
}
class MacLinuxKeyboardMapper {
  constructor(_isUSStandard, rawMappings, _mapAltGrToCtrlAlt, _OS) {
    this._isUSStandard = _isUSStandard;
    this._mapAltGrToCtrlAlt = _mapAltGrToCtrlAlt;
    this._OS = _OS;
    this._scanCodeToLabel = [];
    this._scanCodeToDispatch = [];
    this._codeInfo = [];
    this._scanCodeKeyCodeMapper = new ScanCodeKeyCodeMapper();
    this._scanCodeToLabel = [];
    this._scanCodeToDispatch = [];
    const _registerIfUnknown = (hwCtrlKey, hwShiftKey, hwAltKey, scanCode, kbCtrlKey, kbShiftKey, kbAltKey, keyCode) => {
      this._scanCodeKeyCodeMapper.registerIfUnknown(new ScanCodeCombo(
        hwCtrlKey ? true : false,
        hwShiftKey ? true : false,
        hwAltKey ? true : false,
        scanCode
      ), new KeyCodeCombo(
        kbCtrlKey ? true : false,
        kbShiftKey ? true : false,
        kbAltKey ? true : false,
        keyCode
      ));
    };
    const _registerAllCombos = (_ctrlKey, _shiftKey, _altKey, scanCode, keyCode) => {
      for (let ctrlKey = _ctrlKey; ctrlKey <= 1; ctrlKey++) {
        for (let shiftKey = _shiftKey; shiftKey <= 1; shiftKey++) {
          for (let altKey = _altKey; altKey <= 1; altKey++) {
            _registerIfUnknown(ctrlKey, shiftKey, altKey, scanCode, ctrlKey, shiftKey, altKey, keyCode);
          }
        }
      }
    };
    for (let scanCode = 0; scanCode < 193; scanCode++) {
      this._scanCodeToLabel[scanCode] = null;
    }
    for (let scanCode = 0; scanCode < 193; scanCode++) {
      this._scanCodeToDispatch[scanCode] = null;
    }
    for (let scanCode = 0; scanCode < 193; scanCode++) {
      const keyCode = IMMUTABLE_CODE_TO_KEY_CODE[scanCode];
      if (keyCode !== -1) {
        _registerAllCombos(0, 0, 0, scanCode, keyCode);
        this._scanCodeToLabel[scanCode] = KeyCodeUtils.toString(keyCode);
        if (keyCode === 0 || keyCode === 5 || keyCode === 57 || keyCode === 6 || keyCode === 4) {
          this._scanCodeToDispatch[scanCode] = null;
        } else {
          this._scanCodeToDispatch[scanCode] = `[${ScanCodeUtils.toString(scanCode)}]`;
        }
      }
    }
    const missingLatinLettersOverride = {};
    {
      const producesLatinLetter = [];
      for (const strScanCode in rawMappings) {
        if (rawMappings.hasOwnProperty(strScanCode)) {
          const scanCode = ScanCodeUtils.toEnum(strScanCode);
          if (scanCode === 0) {
            continue;
          }
          if (IMMUTABLE_CODE_TO_KEY_CODE[scanCode] !== -1) {
            continue;
          }
          const rawMapping = rawMappings[strScanCode];
          const value = MacLinuxKeyboardMapper.getCharCode(rawMapping.value);
          if (value >= 97 && value <= 122) {
            const upperCaseValue = 65 + (value - 97);
            producesLatinLetter[upperCaseValue] = true;
          }
        }
      }
      const _registerLetterIfMissing = (charCode, scanCode, value, withShift) => {
        if (!producesLatinLetter[charCode]) {
          missingLatinLettersOverride[ScanCodeUtils.toString(scanCode)] = {
            value,
            withShift,
            withAltGr: "",
            withShiftAltGr: ""
          };
        }
      };
      _registerLetterIfMissing(65, 10, "a", "A");
      _registerLetterIfMissing(66, 11, "b", "B");
      _registerLetterIfMissing(67, 12, "c", "C");
      _registerLetterIfMissing(68, 13, "d", "D");
      _registerLetterIfMissing(69, 14, "e", "E");
      _registerLetterIfMissing(70, 15, "f", "F");
      _registerLetterIfMissing(71, 16, "g", "G");
      _registerLetterIfMissing(72, 17, "h", "H");
      _registerLetterIfMissing(73, 18, "i", "I");
      _registerLetterIfMissing(74, 19, "j", "J");
      _registerLetterIfMissing(75, 20, "k", "K");
      _registerLetterIfMissing(76, 21, "l", "L");
      _registerLetterIfMissing(77, 22, "m", "M");
      _registerLetterIfMissing(78, 23, "n", "N");
      _registerLetterIfMissing(79, 24, "o", "O");
      _registerLetterIfMissing(80, 25, "p", "P");
      _registerLetterIfMissing(81, 26, "q", "Q");
      _registerLetterIfMissing(82, 27, "r", "R");
      _registerLetterIfMissing(83, 28, "s", "S");
      _registerLetterIfMissing(84, 29, "t", "T");
      _registerLetterIfMissing(85, 30, "u", "U");
      _registerLetterIfMissing(86, 31, "v", "V");
      _registerLetterIfMissing(87, 32, "w", "W");
      _registerLetterIfMissing(88, 33, "x", "X");
      _registerLetterIfMissing(89, 34, "y", "Y");
      _registerLetterIfMissing(90, 35, "z", "Z");
    }
    const mappings = [];
    let mappingsLen = 0;
    for (const strScanCode in rawMappings) {
      if (rawMappings.hasOwnProperty(strScanCode)) {
        const scanCode = ScanCodeUtils.toEnum(strScanCode);
        if (scanCode === 0) {
          continue;
        }
        if (IMMUTABLE_CODE_TO_KEY_CODE[scanCode] !== -1) {
          continue;
        }
        this._codeInfo[scanCode] = rawMappings[strScanCode];
        const rawMapping = missingLatinLettersOverride[strScanCode] || rawMappings[strScanCode];
        const value = MacLinuxKeyboardMapper.getCharCode(rawMapping.value);
        const withShift = MacLinuxKeyboardMapper.getCharCode(rawMapping.withShift);
        const withAltGr = MacLinuxKeyboardMapper.getCharCode(rawMapping.withAltGr);
        const withShiftAltGr = MacLinuxKeyboardMapper.getCharCode(rawMapping.withShiftAltGr);
        const mapping = {
          scanCode,
          value,
          withShift,
          withAltGr,
          withShiftAltGr
        };
        mappings[mappingsLen++] = mapping;
        this._scanCodeToDispatch[scanCode] = `[${ScanCodeUtils.toString(scanCode)}]`;
        if (value >= 97 && value <= 122) {
          const upperCaseValue = 65 + (value - 97);
          this._scanCodeToLabel[scanCode] = String.fromCharCode(upperCaseValue);
        } else if (value >= 65 && value <= 90) {
          this._scanCodeToLabel[scanCode] = String.fromCharCode(value);
        } else if (value) {
          this._scanCodeToLabel[scanCode] = String.fromCharCode(value);
        } else {
          this._scanCodeToLabel[scanCode] = null;
        }
      }
    }
    for (let i = mappings.length - 1; i >= 0; i--) {
      const mapping = mappings[i];
      const scanCode = mapping.scanCode;
      const withShiftAltGr = mapping.withShiftAltGr;
      if (withShiftAltGr === mapping.withAltGr || withShiftAltGr === mapping.withShift || withShiftAltGr === mapping.value) {
        continue;
      }
      const kb = MacLinuxKeyboardMapper._charCodeToKb(withShiftAltGr);
      if (!kb) {
        continue;
      }
      const kbShiftKey = kb.shiftKey;
      const keyCode = kb.keyCode;
      if (kbShiftKey) {
        _registerIfUnknown(1, 1, 1, scanCode, 0, 1, 0, keyCode);
      } else {
        _registerIfUnknown(1, 1, 1, scanCode, 0, 0, 0, keyCode);
      }
    }
    for (let i = mappings.length - 1; i >= 0; i--) {
      const mapping = mappings[i];
      const scanCode = mapping.scanCode;
      const withAltGr = mapping.withAltGr;
      if (withAltGr === mapping.withShift || withAltGr === mapping.value) {
        continue;
      }
      const kb = MacLinuxKeyboardMapper._charCodeToKb(withAltGr);
      if (!kb) {
        continue;
      }
      const kbShiftKey = kb.shiftKey;
      const keyCode = kb.keyCode;
      if (kbShiftKey) {
        _registerIfUnknown(1, 0, 1, scanCode, 0, 1, 0, keyCode);
      } else {
        _registerIfUnknown(1, 0, 1, scanCode, 0, 0, 0, keyCode);
      }
    }
    for (let i = mappings.length - 1; i >= 0; i--) {
      const mapping = mappings[i];
      const scanCode = mapping.scanCode;
      const withShift = mapping.withShift;
      if (withShift === mapping.value) {
        continue;
      }
      const kb = MacLinuxKeyboardMapper._charCodeToKb(withShift);
      if (!kb) {
        continue;
      }
      const kbShiftKey = kb.shiftKey;
      const keyCode = kb.keyCode;
      if (kbShiftKey) {
        _registerIfUnknown(0, 1, 0, scanCode, 0, 1, 0, keyCode);
        _registerIfUnknown(0, 1, 1, scanCode, 0, 1, 1, keyCode);
        _registerIfUnknown(1, 1, 0, scanCode, 1, 1, 0, keyCode);
        _registerIfUnknown(1, 1, 1, scanCode, 1, 1, 1, keyCode);
      } else {
        _registerIfUnknown(0, 1, 0, scanCode, 0, 0, 0, keyCode);
        _registerIfUnknown(0, 1, 0, scanCode, 0, 1, 0, keyCode);
        _registerIfUnknown(0, 1, 1, scanCode, 0, 0, 1, keyCode);
        _registerIfUnknown(0, 1, 1, scanCode, 0, 1, 1, keyCode);
        _registerIfUnknown(1, 1, 0, scanCode, 1, 0, 0, keyCode);
        _registerIfUnknown(1, 1, 0, scanCode, 1, 1, 0, keyCode);
        _registerIfUnknown(1, 1, 1, scanCode, 1, 0, 1, keyCode);
        _registerIfUnknown(1, 1, 1, scanCode, 1, 1, 1, keyCode);
      }
    }
    for (let i = mappings.length - 1; i >= 0; i--) {
      const mapping = mappings[i];
      const scanCode = mapping.scanCode;
      const kb = MacLinuxKeyboardMapper._charCodeToKb(mapping.value);
      if (!kb) {
        continue;
      }
      const kbShiftKey = kb.shiftKey;
      const keyCode = kb.keyCode;
      if (kbShiftKey) {
        _registerIfUnknown(0, 0, 0, scanCode, 0, 1, 0, keyCode);
        _registerIfUnknown(0, 0, 1, scanCode, 0, 1, 1, keyCode);
        _registerIfUnknown(1, 0, 0, scanCode, 1, 1, 0, keyCode);
        _registerIfUnknown(1, 0, 1, scanCode, 1, 1, 1, keyCode);
      } else {
        _registerIfUnknown(0, 0, 0, scanCode, 0, 0, 0, keyCode);
        _registerIfUnknown(0, 0, 1, scanCode, 0, 0, 1, keyCode);
        _registerIfUnknown(0, 1, 0, scanCode, 0, 1, 0, keyCode);
        _registerIfUnknown(0, 1, 1, scanCode, 0, 1, 1, keyCode);
        _registerIfUnknown(1, 0, 0, scanCode, 1, 0, 0, keyCode);
        _registerIfUnknown(1, 0, 1, scanCode, 1, 0, 1, keyCode);
        _registerIfUnknown(1, 1, 0, scanCode, 1, 1, 0, keyCode);
        _registerIfUnknown(1, 1, 1, scanCode, 1, 1, 1, keyCode);
      }
    }
    _registerAllCombos(0, 0, 0, 36, 22);
    _registerAllCombos(0, 0, 0, 37, 23);
    _registerAllCombos(0, 0, 0, 38, 24);
    _registerAllCombos(0, 0, 0, 39, 25);
    _registerAllCombos(0, 0, 0, 40, 26);
    _registerAllCombos(0, 0, 0, 41, 27);
    _registerAllCombos(0, 0, 0, 42, 28);
    _registerAllCombos(0, 0, 0, 43, 29);
    _registerAllCombos(0, 0, 0, 44, 30);
    _registerAllCombos(0, 0, 0, 45, 21);
    this._scanCodeKeyCodeMapper.registrationComplete();
  }
  dumpDebugInfo() {
    const result = [];
    const immutableSamples = [
      88,
      104
    ];
    let cnt = 0;
    result.push(`isUSStandard: ${this._isUSStandard}`);
    result.push(`----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);
    for (let scanCode = 0; scanCode < 193; scanCode++) {
      if (IMMUTABLE_CODE_TO_KEY_CODE[scanCode] !== -1) {
        if (immutableSamples.indexOf(scanCode) === -1) {
          continue;
        }
      }
      if (cnt % 4 === 0) {
        result.push(`|       HW Code combination      |  Key  |    KeyCode combination    | Pri |          UI label         |         User settings          |    Electron accelerator   |       Dispatching string       | WYSIWYG |`);
        result.push(`----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);
      }
      cnt++;
      const mapping = this._codeInfo[scanCode];
      for (let mod = 0; mod < 8; mod++) {
        const hwCtrlKey = mod & 1 ? true : false;
        const hwShiftKey = mod & 2 ? true : false;
        const hwAltKey = mod & 4 ? true : false;
        const scanCodeCombo = new ScanCodeCombo(hwCtrlKey, hwShiftKey, hwAltKey, scanCode);
        const resolvedKb = this.resolveKeyboardEvent({
          _standardKeyboardEventBrand: true,
          ctrlKey: scanCodeCombo.ctrlKey,
          shiftKey: scanCodeCombo.shiftKey,
          altKey: scanCodeCombo.altKey,
          metaKey: false,
          altGraphKey: false,
          keyCode: -1,
          code: ScanCodeUtils.toString(scanCode)
        });
        const outScanCodeCombo = scanCodeCombo.toString();
        const outKey = scanCodeCombo.getProducedChar(mapping);
        const ariaLabel = resolvedKb.getAriaLabel();
        const outUILabel = ariaLabel ? ariaLabel.replace(/Control\+/, "Ctrl+") : null;
        const outUserSettings = resolvedKb.getUserSettingsLabel();
        const outElectronAccelerator = resolvedKb.getElectronAccelerator();
        const outDispatchStr = resolvedKb.getDispatchChords()[0];
        const isWYSIWYG = resolvedKb ? resolvedKb.isWYSIWYG() : false;
        const outWYSIWYG = isWYSIWYG ? "       " : "   NO  ";
        const kbCombos = this._scanCodeKeyCodeMapper.lookupScanCodeCombo(scanCodeCombo);
        if (kbCombos.length === 0) {
          result.push(`| ${this._leftPad(outScanCodeCombo, 30)} | ${outKey} | ${this._leftPad("", 25)} | ${this._leftPad("", 3)} | ${this._leftPad(outUILabel, 25)} | ${this._leftPad(outUserSettings, 30)} | ${this._leftPad(outElectronAccelerator, 25)} | ${this._leftPad(outDispatchStr, 30)} | ${outWYSIWYG} |`);
        } else {
          for (let i = 0, len = kbCombos.length; i < len; i++) {
            const kbCombo = kbCombos[i];
            let colPriority;
            const scanCodeCombos = this._scanCodeKeyCodeMapper.lookupKeyCodeCombo(kbCombo);
            if (scanCodeCombos.length === 1) {
              colPriority = "";
            } else {
              let priority = -1;
              for (let j = 0; j < scanCodeCombos.length; j++) {
                if (scanCodeCombos[j].equals(scanCodeCombo)) {
                  priority = j + 1;
                  break;
                }
              }
              colPriority = String(priority);
            }
            const outKeybinding = kbCombo.toString();
            if (i === 0) {
              result.push(`| ${this._leftPad(outScanCodeCombo, 30)} | ${outKey} | ${this._leftPad(outKeybinding, 25)} | ${this._leftPad(colPriority, 3)} | ${this._leftPad(outUILabel, 25)} | ${this._leftPad(outUserSettings, 30)} | ${this._leftPad(outElectronAccelerator, 25)} | ${this._leftPad(outDispatchStr, 30)} | ${outWYSIWYG} |`);
            } else {
              result.push(`| ${this._leftPad("", 30)} |       | ${this._leftPad(outKeybinding, 25)} | ${this._leftPad(colPriority, 3)} | ${this._leftPad("", 25)} | ${this._leftPad("", 30)} | ${this._leftPad("", 25)} | ${this._leftPad("", 30)} |         |`);
            }
          }
        }
      }
      result.push(`----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);
    }
    return result.join("\n");
  }
  _leftPad(str, cnt) {
    if (str === null) {
      str = "null";
    }
    while (str.length < cnt) {
      str = " " + str;
    }
    return str;
  }
  keyCodeChordToScanCodeChord(chord) {
    if (chord.keyCode === 3) {
      return [new ScanCodeChord(
        chord.ctrlKey,
        chord.shiftKey,
        chord.altKey,
        chord.metaKey,
        46
      )];
    }
    const scanCodeCombos = this._scanCodeKeyCodeMapper.lookupKeyCodeCombo(new KeyCodeCombo(chord.ctrlKey, chord.shiftKey, chord.altKey, chord.keyCode));
    const result = [];
    for (let i = 0, len = scanCodeCombos.length; i < len; i++) {
      const scanCodeCombo = scanCodeCombos[i];
      result[i] = new ScanCodeChord(
        scanCodeCombo.ctrlKey,
        scanCodeCombo.shiftKey,
        scanCodeCombo.altKey,
        chord.metaKey,
        scanCodeCombo.scanCode
      );
    }
    return result;
  }
  getUILabelForScanCodeChord(chord) {
    if (!chord) {
      return null;
    }
    if (chord.isDuplicateModifierCase()) {
      return "";
    }
    if (this._OS === 2) {
      switch (chord.scanCode) {
        case 86:
          return "←";
        case 88:
          return "↑";
        case 85:
          return "→";
        case 87:
          return "↓";
      }
    }
    return this._scanCodeToLabel[chord.scanCode];
  }
  getAriaLabelForScanCodeChord(chord) {
    if (!chord) {
      return null;
    }
    if (chord.isDuplicateModifierCase()) {
      return "";
    }
    return this._scanCodeToLabel[chord.scanCode];
  }
  getDispatchStrForScanCodeChord(chord) {
    const codeDispatch = this._scanCodeToDispatch[chord.scanCode];
    if (!codeDispatch) {
      return null;
    }
    let result = "";
    if (chord.ctrlKey) {
      result += "ctrl+";
    }
    if (chord.shiftKey) {
      result += "shift+";
    }
    if (chord.altKey) {
      result += "alt+";
    }
    if (chord.metaKey) {
      result += "meta+";
    }
    result += codeDispatch;
    return result;
  }
  getUserSettingsLabelForScanCodeChord(chord) {
    if (!chord) {
      return null;
    }
    if (chord.isDuplicateModifierCase()) {
      return "";
    }
    const immutableKeyCode = IMMUTABLE_CODE_TO_KEY_CODE[chord.scanCode];
    if (immutableKeyCode !== -1) {
      return KeyCodeUtils.toUserSettingsUS(immutableKeyCode).toLowerCase();
    }
    const constantKeyCode = this._scanCodeKeyCodeMapper.guessStableKeyCode(chord.scanCode);
    if (constantKeyCode !== -1) {
      const reverseChords = this.keyCodeChordToScanCodeChord(new KeyCodeChord(
        chord.ctrlKey,
        chord.shiftKey,
        chord.altKey,
        chord.metaKey,
        constantKeyCode
      ));
      for (let i = 0, len = reverseChords.length; i < len; i++) {
        const reverseChord = reverseChords[i];
        if (reverseChord.scanCode === chord.scanCode) {
          return KeyCodeUtils.toUserSettingsUS(constantKeyCode).toLowerCase();
        }
      }
    }
    return this._scanCodeToDispatch[chord.scanCode];
  }
  getElectronAcceleratorLabelForScanCodeChord(chord) {
    if (!chord) {
      return null;
    }
    const immutableKeyCode = IMMUTABLE_CODE_TO_KEY_CODE[chord.scanCode];
    if (immutableKeyCode !== -1) {
      return KeyCodeUtils.toElectronAccelerator(immutableKeyCode);
    }
    const constantKeyCode = this._scanCodeKeyCodeMapper.guessStableKeyCode(chord.scanCode);
    if (this._OS === 3 && !this._isUSStandard) {
      const isOEMKey = constantKeyCode === 85 || constantKeyCode === 86 || constantKeyCode === 87 || constantKeyCode === 88 || constantKeyCode === 89 || constantKeyCode === 90 || constantKeyCode === 91 || constantKeyCode === 92 || constantKeyCode === 93 || constantKeyCode === 94;
      if (isOEMKey) {
        return null;
      }
    }
    if (constantKeyCode !== -1) {
      return KeyCodeUtils.toElectronAccelerator(constantKeyCode);
    }
    return null;
  }
  _toResolvedKeybinding(chordParts) {
    if (chordParts.length === 0) {
      return [];
    }
    const result = [];
    this._generateResolvedKeybindings(chordParts, 0, [], result);
    return result;
  }
  _generateResolvedKeybindings(chordParts, currentIndex, previousParts, result) {
    const chordPart = chordParts[currentIndex];
    const isFinalIndex = currentIndex === chordParts.length - 1;
    for (let i = 0, len = chordPart.length; i < len; i++) {
      const chords = [...previousParts, chordPart[i]];
      if (isFinalIndex) {
        result.push(new NativeResolvedKeybinding(this, this._OS, chords));
      } else {
        this._generateResolvedKeybindings(chordParts, currentIndex + 1, chords, result);
      }
    }
  }
  resolveKeyboardEvent(keyboardEvent) {
    let code = ScanCodeUtils.toEnum(keyboardEvent.code);
    if (code === 94) {
      code = 46;
    }
    const keyCode = keyboardEvent.keyCode;
    if (keyCode === 15 || keyCode === 16 || keyCode === 17 || keyCode === 18 || keyCode === 20 || keyCode === 19 || keyCode === 14 || keyCode === 13 || keyCode === 12 || keyCode === 11 || keyCode === 1) {
      const immutableScanCode = IMMUTABLE_KEY_CODE_TO_CODE[keyCode];
      if (immutableScanCode !== -1) {
        code = immutableScanCode;
      }
    } else {
      if (code === 95 || code === 96 || code === 97 || code === 98 || code === 99 || code === 100 || code === 101 || code === 102 || code === 103 || code === 104 || code === 105) {
        if (keyCode >= 0) {
          const immutableScanCode = IMMUTABLE_KEY_CODE_TO_CODE[keyCode];
          if (immutableScanCode !== -1) {
            code = immutableScanCode;
          }
        }
      }
    }
    const ctrlKey = keyboardEvent.ctrlKey || this._mapAltGrToCtrlAlt && keyboardEvent.altGraphKey;
    const altKey = keyboardEvent.altKey || this._mapAltGrToCtrlAlt && keyboardEvent.altGraphKey;
    const chord = new ScanCodeChord(ctrlKey, keyboardEvent.shiftKey, altKey, keyboardEvent.metaKey, code);
    return new NativeResolvedKeybinding(this, this._OS, [chord]);
  }
  _resolveChord(chord) {
    if (!chord) {
      return [];
    }
    if (chord instanceof ScanCodeChord) {
      return [chord];
    }
    return this.keyCodeChordToScanCodeChord(chord);
  }
  resolveKeybinding(keybinding) {
    const chords = keybinding.chords.map((chord) => this._resolveChord(chord));
    return this._toResolvedKeybinding(chords);
  }
  static _redirectCharCode(charCode) {
    switch (charCode) {
      case 12290:
        return 46;
      case 12300:
        return 91;
      case 12301:
        return 93;
      case 12304:
        return 91;
      case 12305:
        return 93;
      case 65307:
        return 59;
      case 65292:
        return 44;
    }
    return charCode;
  }
  static _charCodeToKb(charCode) {
    charCode = this._redirectCharCode(charCode);
    if (charCode < CHAR_CODE_TO_KEY_CODE.length) {
      return CHAR_CODE_TO_KEY_CODE[charCode];
    }
    return null;
  }
  static getCharCode(char) {
    if (char.length === 0) {
      return 0;
    }
    const charCode = char.charCodeAt(0);
    switch (charCode) {
      case 768:
        return 96;
      case 769:
        return 180;
      case 770:
        return 94;
      case 771:
        return 732;
      case 772:
        return 175;
      case 773:
        return 8254;
      case 774:
        return 728;
      case 775:
        return 729;
      case 776:
        return 168;
      case 778:
        return 730;
      case 779:
        return 733;
    }
    return charCode;
  }
}
(function() {
  function define(charCode, keyCode, shiftKey) {
    for (let i = CHAR_CODE_TO_KEY_CODE.length; i < charCode; i++) {
      CHAR_CODE_TO_KEY_CODE[i] = null;
    }
    CHAR_CODE_TO_KEY_CODE[charCode] = { keyCode, shiftKey };
  }
  for (let chCode = 65; chCode <= 90; chCode++) {
    define(chCode, 31 + (chCode - 65), true);
  }
  for (let chCode = 97; chCode <= 122; chCode++) {
    define(chCode, 31 + (chCode - 97), false);
  }
  define(59, 85, false);
  define(58, 85, true);
  define(61, 86, false);
  define(43, 86, true);
  define(44, 87, false);
  define(60, 87, true);
  define(45, 88, false);
  define(95, 88, true);
  define(46, 89, false);
  define(62, 89, true);
  define(47, 90, false);
  define(63, 90, true);
  define(96, 91, false);
  define(126, 91, true);
  define(91, 92, false);
  define(123, 92, true);
  define(92, 93, false);
  define(124, 93, true);
  define(93, 94, false);
  define(125, 94, true);
  define(39, 95, false);
  define(34, 95, true);
})();
function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case "./keyboardLayouts/layout.contribution.darwin.js":
      return __vitePreload(() => import("./layout.contribution.darwin-256fbeff.js"), true ? ["assets/layout.contribution.darwin-256fbeff.js","assets/_.contribution-c13253ff.js"] : void 0).then((module) => module.default ?? module);
    case "./keyboardLayouts/layout.contribution.linux.js":
      return __vitePreload(() => import("./layout.contribution.linux-7bf6fcce.js"), true ? ["assets/layout.contribution.linux-7bf6fcce.js","assets/_.contribution-c13253ff.js"] : void 0).then((module) => module.default ?? module);
    case "./keyboardLayouts/layout.contribution.win.js":
      return __vitePreload(() => import("./layout.contribution.win-7e8beba7.js"), true ? ["assets/layout.contribution.win-7e8beba7.js","assets/_.contribution-c13253ff.js"] : void 0).then((module) => module.default ?? module);
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
          reject.bind(null, new Error("Unknown variable dynamic import: " + path))
        );
      });
  }
}
class BrowserKeyboardMapperFactoryBase extends Disposable {
  get activeKeymap() {
    return this._activeKeymapInfo;
  }
  get keymapInfos() {
    return this._keymapInfos;
  }
  get activeKeyboardLayout() {
    var _a;
    if (!this._initialized) {
      return null;
    }
    return ((_a = this._activeKeymapInfo) == null ? void 0 : _a.layout) ?? null;
  }
  get activeKeyMapping() {
    var _a;
    if (!this._initialized) {
      return null;
    }
    return ((_a = this._activeKeymapInfo) == null ? void 0 : _a.mapping) ?? null;
  }
  get keyboardLayouts() {
    return this._keymapInfos.map((keymapInfo) => keymapInfo.layout);
  }
  constructor(_configurationService) {
    super();
    this._configurationService = _configurationService;
    this._onDidChangeKeyboardMapper = new Emitter();
    this.onDidChangeKeyboardMapper = this._onDidChangeKeyboardMapper.event;
    this._keyboardMapper = null;
    this._initialized = false;
    this._keymapInfos = [];
    this._mru = [];
    this._activeKeymapInfo = null;
    if (navigator.keyboard && navigator.keyboard.addEventListener) {
      navigator.keyboard.addEventListener("layoutchange", () => {
        this._getBrowserKeyMapping().then((mapping) => {
          if (this.isKeyMappingActive(mapping)) {
            return;
          }
          this.setLayoutFromBrowserAPI();
        });
      });
    }
    this._register(this._configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("keyboard")) {
        this._keyboardMapper = null;
        this._onDidChangeKeyboardMapper.fire();
      }
    }));
  }
  registerKeyboardLayout(layout) {
    this._keymapInfos.push(layout);
    this._mru = this._keymapInfos;
  }
  removeKeyboardLayout(layout) {
    let index2 = this._mru.indexOf(layout);
    this._mru.splice(index2, 1);
    index2 = this._keymapInfos.indexOf(layout);
    this._keymapInfos.splice(index2, 1);
  }
  getMatchedKeymapInfo(keyMapping) {
    if (!keyMapping) {
      return null;
    }
    const usStandard = this.getUSStandardLayout();
    if (usStandard) {
      let maxScore = usStandard.getScore(keyMapping);
      if (maxScore === 0) {
        return {
          result: usStandard,
          score: 0
        };
      }
      let result = usStandard;
      for (let i = 0; i < this._mru.length; i++) {
        const score = this._mru[i].getScore(keyMapping);
        if (score > maxScore) {
          if (score === 0) {
            return {
              result: this._mru[i],
              score: 0
            };
          }
          maxScore = score;
          result = this._mru[i];
        }
      }
      return {
        result,
        score: maxScore
      };
    }
    for (let i = 0; i < this._mru.length; i++) {
      if (this._mru[i].fuzzyEqual(keyMapping)) {
        return {
          result: this._mru[i],
          score: 0
        };
      }
    }
    return null;
  }
  getUSStandardLayout() {
    const usStandardLayouts = this._mru.filter((layout) => layout.layout.isUSStandard);
    if (usStandardLayouts.length) {
      return usStandardLayouts[0];
    }
    return null;
  }
  isKeyMappingActive(keymap) {
    return this._activeKeymapInfo && keymap && this._activeKeymapInfo.fuzzyEqual(keymap);
  }
  setUSKeyboardLayout() {
    this._activeKeymapInfo = this.getUSStandardLayout();
  }
  setActiveKeyMapping(keymap) {
    let keymapUpdated = false;
    const matchedKeyboardLayout = this.getMatchedKeymapInfo(keymap);
    if (matchedKeyboardLayout) {
      if (!this._activeKeymapInfo) {
        this._activeKeymapInfo = matchedKeyboardLayout.result;
        keymapUpdated = true;
      } else if (keymap) {
        if (matchedKeyboardLayout.result.getScore(keymap) > this._activeKeymapInfo.getScore(keymap)) {
          this._activeKeymapInfo = matchedKeyboardLayout.result;
          keymapUpdated = true;
        }
      }
    }
    if (!this._activeKeymapInfo) {
      this._activeKeymapInfo = this.getUSStandardLayout();
      keymapUpdated = true;
    }
    if (!this._activeKeymapInfo || !keymapUpdated) {
      return;
    }
    const index2 = this._mru.indexOf(this._activeKeymapInfo);
    this._mru.splice(index2, 1);
    this._mru.unshift(this._activeKeymapInfo);
    this._setKeyboardData(this._activeKeymapInfo);
  }
  setActiveKeymapInfo(keymapInfo) {
    this._activeKeymapInfo = keymapInfo;
    const index2 = this._mru.indexOf(this._activeKeymapInfo);
    if (index2 === 0) {
      return;
    }
    this._mru.splice(index2, 1);
    this._mru.unshift(this._activeKeymapInfo);
    this._setKeyboardData(this._activeKeymapInfo);
  }
  setLayoutFromBrowserAPI() {
    this._updateKeyboardLayoutAsync(this._initialized);
  }
  _updateKeyboardLayoutAsync(initialized, keyboardEvent) {
    if (!initialized) {
      return;
    }
    this._getBrowserKeyMapping(keyboardEvent).then((keyMap) => {
      if (this.isKeyMappingActive(keyMap)) {
        return;
      }
      this.setActiveKeyMapping(keyMap);
    });
  }
  getKeyboardMapper() {
    const config = readKeyboardConfig(this._configurationService);
    if (config.dispatch === 1 || !this._initialized || !this._activeKeymapInfo) {
      return new FallbackKeyboardMapper(config.mapAltGrToCtrlAlt, OS);
    }
    if (!this._keyboardMapper) {
      this._keyboardMapper = new CachedKeyboardMapper(
        BrowserKeyboardMapperFactory._createKeyboardMapper(this._activeKeymapInfo, config.mapAltGrToCtrlAlt)
      );
    }
    return this._keyboardMapper;
  }
  validateCurrentKeyboardMapping(keyboardEvent) {
    if (!this._initialized) {
      return;
    }
    const isCurrentKeyboard = this._validateCurrentKeyboardMapping(keyboardEvent);
    if (isCurrentKeyboard) {
      return;
    }
    this._updateKeyboardLayoutAsync(true, keyboardEvent);
  }
  setKeyboardLayout(layoutName) {
    const matchedLayouts = this.keymapInfos.filter((keymapInfo) => getKeyboardLayoutId(keymapInfo.layout) === layoutName);
    if (matchedLayouts.length > 0) {
      this.setActiveKeymapInfo(matchedLayouts[0]);
    }
  }
  _setKeyboardData(keymapInfo) {
    this._initialized = true;
    this._keyboardMapper = null;
    this._onDidChangeKeyboardMapper.fire();
  }
  static _createKeyboardMapper(keymapInfo, mapAltGrToCtrlAlt) {
    const rawMapping = keymapInfo.mapping;
    const isUSStandard = !!keymapInfo.layout.isUSStandard;
    if (OS === 1) {
      return new WindowsKeyboardMapper(isUSStandard, rawMapping, mapAltGrToCtrlAlt);
    }
    if (Object.keys(rawMapping).length === 0) {
      return new FallbackKeyboardMapper(mapAltGrToCtrlAlt, OS);
    }
    return new MacLinuxKeyboardMapper(isUSStandard, rawMapping, mapAltGrToCtrlAlt, OS);
  }
  _validateCurrentKeyboardMapping(keyboardEvent) {
    if (!this._initialized) {
      return true;
    }
    const standardKeyboardEvent = keyboardEvent;
    const currentKeymap = this._activeKeymapInfo;
    if (!currentKeymap) {
      return true;
    }
    if (standardKeyboardEvent.browserEvent.key === "Dead" || standardKeyboardEvent.browserEvent.isComposing) {
      return true;
    }
    const mapping = currentKeymap.mapping[standardKeyboardEvent.code];
    if (!mapping) {
      return false;
    }
    if (mapping.value === "") {
      if (keyboardEvent.ctrlKey || keyboardEvent.metaKey) {
        setTimeout(() => {
          this._getBrowserKeyMapping().then((keymap) => {
            if (this.isKeyMappingActive(keymap)) {
              return;
            }
            this.setLayoutFromBrowserAPI();
          });
        }, 350);
      }
      return true;
    }
    const expectedValue = standardKeyboardEvent.altKey && standardKeyboardEvent.shiftKey ? mapping.withShiftAltGr : standardKeyboardEvent.altKey ? mapping.withAltGr : standardKeyboardEvent.shiftKey ? mapping.withShift : mapping.value;
    const isDead = standardKeyboardEvent.altKey && standardKeyboardEvent.shiftKey && mapping.withShiftAltGrIsDeadKey || standardKeyboardEvent.altKey && mapping.withAltGrIsDeadKey || standardKeyboardEvent.shiftKey && mapping.withShiftIsDeadKey || mapping.valueIsDeadKey;
    if (isDead && standardKeyboardEvent.browserEvent.key !== "Dead") {
      return false;
    }
    if (!isDead && standardKeyboardEvent.browserEvent.key !== expectedValue) {
      return false;
    }
    return true;
  }
  async _getBrowserKeyMapping(keyboardEvent) {
    if (navigator.keyboard) {
      try {
        return navigator.keyboard.getLayoutMap().then((e) => {
          const ret = {};
          for (const key of e) {
            ret[key[0]] = {
              "value": key[1],
              "withShift": "",
              "withAltGr": "",
              "withShiftAltGr": ""
            };
          }
          return ret;
        });
      } catch {
      }
    } else if (keyboardEvent && !keyboardEvent.shiftKey && !keyboardEvent.altKey && !keyboardEvent.metaKey && !keyboardEvent.metaKey) {
      const ret = {};
      const standardKeyboardEvent = keyboardEvent;
      ret[standardKeyboardEvent.browserEvent.code] = {
        "value": standardKeyboardEvent.browserEvent.key,
        "withShift": "",
        "withAltGr": "",
        "withShiftAltGr": ""
      };
      const matchedKeyboardLayout = this.getMatchedKeymapInfo(ret);
      if (matchedKeyboardLayout) {
        return ret;
      }
      return null;
    }
    return null;
  }
}
class BrowserKeyboardMapperFactory extends BrowserKeyboardMapperFactoryBase {
  constructor(configurationService, notificationService, storageService, commandService) {
    super(configurationService);
    const platform = isWindows ? "win" : isMacintosh ? "darwin" : "linux";
    __variableDynamicImportRuntime0__("./keyboardLayouts/layout.contribution." + platform + ".js").then((m) => {
      const keymapInfos = m.KeyboardLayoutContribution.INSTANCE.layoutInfos;
      this._keymapInfos.push(...keymapInfos.map((info) => new KeymapInfo(
        info.layout,
        info.secondaryLayouts,
        info.mapping,
        info.isUserKeyboardLayout
      )));
      this._mru = this._keymapInfos;
      this._initialized = true;
      this.setLayoutFromBrowserAPI();
    });
  }
}
class UserKeyboardLayout extends Disposable {
  get keyboardLayout() {
    return this._keyboardLayout;
  }
  constructor(keyboardLayoutResource, fileService) {
    super();
    this.keyboardLayoutResource = keyboardLayoutResource;
    this.fileService = fileService;
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this._keyboardLayout = null;
    this.reloadConfigurationScheduler = this._register(new RunOnceScheduler(() => this.reload().then((changed) => {
      if (changed) {
        this._onDidChange.fire();
      }
    }), 50));
    this._register(Event.filter(this.fileService.onDidFilesChange, (e) => e.contains(this.keyboardLayoutResource))(() => this.reloadConfigurationScheduler.schedule()));
  }
  async initialize() {
    await this.reload();
  }
  async reload() {
    const existing = this._keyboardLayout;
    try {
      const content = await this.fileService.readFile(this.keyboardLayoutResource);
      const value = parse(content.value.toString());
      if (getNodeType(value) === "object") {
        const layoutInfo = value.layout;
        const mappings = value.rawMapping;
        this._keyboardLayout = KeymapInfo.createKeyboardLayoutFromDebugInfo(layoutInfo, mappings, true);
      } else {
        this._keyboardLayout = null;
      }
    } catch (e) {
      this._keyboardLayout = null;
    }
    return existing ? !equals(existing, this._keyboardLayout) : true;
  }
}
let BrowserKeyboardLayoutService = class BrowserKeyboardLayoutService2 extends Disposable {
  constructor(environmentService, fileService, notificationService, storageService, commandService, configurationService) {
    super();
    this.configurationService = configurationService;
    this._onDidChangeKeyboardLayout = new Emitter();
    this.onDidChangeKeyboardLayout = this._onDidChangeKeyboardLayout.event;
    const keyboardConfig = configurationService.getValue("keyboard");
    const layout = keyboardConfig.layout;
    this._keyboardLayoutMode = layout ?? "autodetect";
    this._factory = new BrowserKeyboardMapperFactory(configurationService, notificationService, storageService, commandService);
    this._register(this._factory.onDidChangeKeyboardMapper(() => {
      this._onDidChangeKeyboardLayout.fire();
    }));
    if (layout && layout !== "autodetect") {
      this._factory.setKeyboardLayout(layout);
    }
    this._register(configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("keyboard.layout")) {
        const keyboardConfig2 = configurationService.getValue("keyboard");
        const layout2 = keyboardConfig2.layout;
        this._keyboardLayoutMode = layout2;
        if (layout2 === "autodetect") {
          this._factory.setLayoutFromBrowserAPI();
        } else {
          this._factory.setKeyboardLayout(layout2);
        }
      }
    }));
    this._userKeyboardLayout = new UserKeyboardLayout(environmentService.keyboardLayoutResource, fileService);
    this._userKeyboardLayout.initialize().then(() => {
      if (this._userKeyboardLayout.keyboardLayout) {
        this._factory.registerKeyboardLayout(this._userKeyboardLayout.keyboardLayout);
        this.setUserKeyboardLayoutIfMatched();
      }
    });
    this._register(this._userKeyboardLayout.onDidChange(() => {
      const userKeyboardLayouts = this._factory.keymapInfos.filter((layout2) => layout2.isUserKeyboardLayout);
      if (userKeyboardLayouts.length) {
        if (this._userKeyboardLayout.keyboardLayout) {
          userKeyboardLayouts[0].update(this._userKeyboardLayout.keyboardLayout);
        } else {
          this._factory.removeKeyboardLayout(userKeyboardLayouts[0]);
        }
      } else {
        if (this._userKeyboardLayout.keyboardLayout) {
          this._factory.registerKeyboardLayout(this._userKeyboardLayout.keyboardLayout);
        }
      }
      this.setUserKeyboardLayoutIfMatched();
    }));
  }
  setUserKeyboardLayoutIfMatched() {
    const keyboardConfig = this.configurationService.getValue("keyboard");
    const layout = keyboardConfig.layout;
    if (layout && this._userKeyboardLayout.keyboardLayout) {
      if (getKeyboardLayoutId(this._userKeyboardLayout.keyboardLayout.layout) === layout && this._factory.activeKeymap) {
        if (!this._userKeyboardLayout.keyboardLayout.equal(this._factory.activeKeymap)) {
          this._factory.setActiveKeymapInfo(this._userKeyboardLayout.keyboardLayout);
        }
      }
    }
  }
  getKeyboardMapper() {
    return this._factory.getKeyboardMapper();
  }
  getCurrentKeyboardLayout() {
    return this._factory.activeKeyboardLayout;
  }
  getAllKeyboardLayouts() {
    return this._factory.keyboardLayouts;
  }
  getRawKeyboardMapping() {
    return this._factory.activeKeyMapping;
  }
  validateCurrentKeyboardMapping(keyboardEvent) {
    if (this._keyboardLayoutMode !== "autodetect") {
      return;
    }
    this._factory.validateCurrentKeyboardMapping(keyboardEvent);
  }
};
BrowserKeyboardLayoutService = __decorate([
  __param(0, IEnvironmentService),
  __param(1, IFileService),
  __param(2, INotificationService),
  __param(3, IStorageService),
  __param(4, ICommandService),
  __param(5, IConfigurationService)
], BrowserKeyboardLayoutService);
const configurationRegistry = Registry.as(Extensions$1.Configuration);
const keyboardConfiguration = {
  "id": "keyboard",
  "order": 15,
  "type": "object",
  "title": localize("keyboardConfigurationTitle", "Keyboard"),
  "properties": {
    "keyboard.layout": {
      "type": "string",
      "default": "autodetect",
      "description": localize("keyboard.layout.config", "Control the keyboard layout used in web.")
    }
  }
};
configurationRegistry.registerConfiguration(keyboardConfiguration);
let CommandService = class CommandService2 extends Disposable {
  constructor(_instantiationService, _extensionService, _logService) {
    super();
    this._instantiationService = _instantiationService;
    this._extensionService = _extensionService;
    this._logService = _logService;
    this._extensionHostIsReady = false;
    this._onWillExecuteCommand = this._register(new Emitter());
    this.onWillExecuteCommand = this._onWillExecuteCommand.event;
    this._onDidExecuteCommand = new Emitter();
    this.onDidExecuteCommand = this._onDidExecuteCommand.event;
    this._extensionService.whenInstalledExtensionsRegistered().then((value) => this._extensionHostIsReady = value);
    this._starActivation = null;
  }
  _activateStar() {
    if (!this._starActivation) {
      this._starActivation = Promise.race([
        this._extensionService.activateByEvent(`*`),
        timeout(3e4)
      ]);
    }
    return this._starActivation;
  }
  async executeCommand(id, ...args) {
    this._logService.trace("CommandService#executeCommand", id);
    const activationEvent = `onCommand:${id}`;
    const commandIsRegistered = !!CommandsRegistry.getCommand(id);
    if (commandIsRegistered) {
      if (this._extensionService.activationEventIsDone(activationEvent)) {
        return this._tryExecuteCommand(id, args);
      }
      if (!this._extensionHostIsReady) {
        this._extensionService.activateByEvent(activationEvent);
        return this._tryExecuteCommand(id, args);
      }
      await this._extensionService.activateByEvent(activationEvent);
      return this._tryExecuteCommand(id, args);
    }
    await Promise.all([
      this._extensionService.activateByEvent(activationEvent),
      Promise.race([
        this._activateStar(),
        Event.toPromise(Event.filter(CommandsRegistry.onDidRegisterCommand, (e) => e === id))
      ])
    ]);
    return this._tryExecuteCommand(id, args);
  }
  _tryExecuteCommand(id, args) {
    const command = CommandsRegistry.getCommand(id);
    if (!command) {
      return Promise.reject(new Error(`command '${id}' not found`));
    }
    try {
      this._onWillExecuteCommand.fire({ commandId: id, args });
      const result = this._instantiationService.invokeFunction(command.handler, ...args);
      this._onDidExecuteCommand.fire({ commandId: id, args });
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }
};
CommandService = __decorate([
  __param(0, IInstantiationService),
  __param(1, IExtensionService),
  __param(2, ILogService)
], CommandService);
class ToggleKeybindingsLogAction extends Action2 {
  constructor() {
    super({
      id: "workbench.action.toggleKeybindingsLog",
      title: { value: localize("toggleKeybindingsLog", "Toggle Keyboard Shortcuts Troubleshooting"), original: "Toggle Keyboard Shortcuts Troubleshooting" },
      category: Categories.Developer,
      f1: true
    });
  }
  run(accessor) {
    const logging = accessor.get(IKeybindingService).toggleLogging();
    if (logging) {
      const commandService = accessor.get(ICommandService);
      commandService.executeCommand(showWindowLogActionId);
    }
  }
}
registerAction2(ToggleKeybindingsLogAction);
async function updateUserKeybindings(keybindingsJson) {
  const userDataProfilesService = StandaloneServices.get(IUserDataProfilesService);
  await StandaloneServices.get(IFileService).writeFile(userDataProfilesService.defaultProfile.keybindingsResource, VSBuffer.fromString(keybindingsJson));
}
class DynamicWorkbenchKeybindingService extends WorkbenchKeybindingService {
  constructor() {
    super(...arguments);
    this.keybindingProviders = [];
  }
  registerKeybindingProvider(provider) {
    this.keybindingProviders.push(provider);
    this.updateResolver();
    return toDisposable(() => {
      const idx = this.keybindingProviders.indexOf(provider);
      if (idx >= 0) {
        this.keybindingProviders.splice(idx, 1);
        this.updateResolver();
      }
    });
  }
  _getResolver() {
    return super._getResolver();
  }
  getUserKeybindingItems() {
    return [...super.getUserKeybindingItems(), ...this.keybindingProviders.flatMap((provider) => provider())];
  }
}
function getServiceOverride() {
  return {
    ...getServiceOverride$1(),
    [IKeybindingService.toString()]: new SyncDescriptor(DynamicWorkbenchKeybindingService, [], false),
    [IKeyboardLayoutService.toString()]: new SyncDescriptor(BrowserKeyboardLayoutService, void 0, true),
    [ICommandService.toString()]: new SyncDescriptor(CommandService, [], true)
  };
}
export {
  getServiceOverride as default,
  updateUserKeybindings
};
