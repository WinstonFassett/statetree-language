var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
import { r4 as BaseActionViewItem, cZ as MutableDisposable, a6 as DisposableStore, j as RunOnceScheduler, bo as Event, aq as toDisposable, ca as contrastBorder, aI as addDisposableListener, aJ as EventType, aG as append, ah as $, bh as hide, cn as clearNode, kc as NumberBadge, bq as show, rr as TextBadge, rs as IconBadge, aK as ThemeIcon, rt as ProgressBadge, c as localize, gu as __decorate, gv as __param, cy as Action, aD as Emitter, aQ as IThemeService, jG as IHoverService, ay as IConfigurationService, a$ as IKeybindingService, qk as disposeIfDisposable, ct as IContextMenuService, ak as ICommandService, fH as EventHelper, jg as CompositeDragAndDropObserver, jM as toggleDropEffect, ru as DelayedDragHandler, cE as Separator, aP as getDomNodePagePosition, b1 as IInstantiationService, aM as Codicon, aL as registerIcon, f6 as Action2, rv as AuxiliaryBarVisibleContext, fY as Categories, i as MenuId, jk as IWorkbenchLayoutService, bF as registerAction2, jA as IPaneCompositePartService, h as MenuRegistry, C as ContextKeyExpr, jw as ViewContainerLocationToString, gM as n, rw as PanelVisibleContext, rx as PanelPositionContext, rm as positionToString, ry as PanelAlignmentContext, jl as IViewDescriptorService, mT as IViewsService, rz as SideBarVisibleContext, bu as KeybindingsRegistry, I as IContextKeyService, rA as InEditorZenModeContext, K as KeyChord, k3 as IsMacNativeContext, aT as isMacintosh, p as isNative, rB as IsFullscreenContext, rC as IsCenteredLayoutContext, lg as EditorPane, bS as DomScrollableElement, lr as assertAllDefined, rD as truncate, ly as computeEditorAriaLabel, rE as ButtonBar, rF as defaultButtonStyles, j2 as size, dA as assertIsDefined, pn as EditorPaneDescriptor, hZ as isSingleFolderWorkspaceIdentifier, ip as toWorkspaceIdentifier, m9 as isEditorOpenError, ia as toErrorMessage, c8 as Severity, m8 as EditorOpenSource, cu as ITelemetryService, aa as IStorageService, d7 as IWorkspaceContextService, he as IFileService, iK as IDialogService, l3 as IEditorGroupsService, kX as SIDE_GROUP, m3 as EditorActivation, pG as isEditorInputWithOptions, rG as preferredSideBySideGroupDirection, qy as isEditorInput, rH as EditorModel, cU as Mimes, np as ByteSize, rI as SideBySideEditor, rJ as BINARY_DIFF_EDITOR_ID, fN as ITextResourceConfigurationService, gx as IEditorService, R as RawContextKey, D as Disposable, rK as terminalTabFocusModeContextKey, g5 as TabFocus, as as IQuickInputService, bb as ILanguageService, pD as ILanguageDetectionService, h4 as ITextFileService, hy as IPreferencesService, pt as getCodeEditor, l0 as EditorResourceAccessor, l1 as SideBySideEditor$1, bP as withNullAsUndefined, br as Schemas, rL as getIconClassesForLanguageId, ml as extname, aV as basename, d6 as withUndefinedAsNull, rM as AutomaticLanguageDetectionLikelyWrongId, a2 as URI, rN as FILES_ASSOCIATIONS_CONFIG, ha as deepClone, pF as UntitledTextEditorInput, li as SideBySideEditorInput, a0 as CommandsRegistry, rO as Language, t as themeColorFromId, rP as STATUS_BAR_PROMINENT_ITEM_BACKGROUND, rQ as STATUS_BAR_PROMINENT_ITEM_FOREGROUND, rR as runAtThisOrScheduleAtNextAnimationFrame, ds as format, k as Range, S as Selection, bB as isEqual, pB as IStatusbarService, cm as splitLines, cq as IMarkerData, c6 as MarkerSeverity, c3 as IMarkerService, c7 as compare, rS as IExtensionGalleryService, fn as timeout, rT as SUPPORTED_ENCODINGS, rU as areFunctions, i4 as Promises, aX as dispose, kK as IFilesConfigurationService, iL as IHostService, pM as IWorkingCopyService, fM as ILogService, pN as NO_TYPE_ID, rV as toLocalResource, pk as IWorkingCopyEditorService, hR as IWorkbenchEnvironmentService, iu as IPathService, pO as ITextEditorService, rd as IUntitledTextEditorService, q5 as RegisteredEditorPriority, Z as Registry, _ as Extensions, hG as workbenchConfigurationNodeBase, nn as getLargeFileConfirmationLimit, bE as coalesce, lo as IEditorResolverService, h5 as IExtensionService, pJ as NotificationPriority, al as INotificationService, cN as IAccessibilityService, gJ as ContextKeyEqualsExpr, bI as EditorAction2, rW as findFocusedDiffEditor, gI as DiffEditorWidget2, m7 as EditorExtensions, rX as TextResourceEditor, hh as SyncDescriptor, rY as TextResourceEditorInput, rZ as TextDiffEditor, ns as DiffEditorInput, h1 as Extensions$1, a as registerEditorContribution, r_ as Extensions$2, j_ as inQuickPickContext, r$ as ActiveGroupEditorsByMostRecentlyUsedQuickAccess, s0 as ShowEditorsInActiveGroupByMostRecentlyUsedAction, s1 as AllEditorsByAppearanceQuickAccess, s2 as ShowAllEditorsByAppearanceAction, s3 as AllEditorsByMostRecentlyUsedQuickAccess, s4 as ShowAllEditorsByMostRecentlyUsedAction, s5 as NavigateForwardAction, s6 as NavigateBackwardsAction, s7 as OpenNextEditor, s8 as OpenPreviousEditor, s9 as OpenNextEditorInGroup, sa as OpenPreviousEditorInGroup, sb as OpenFirstEditorInGroup, sc as OpenLastEditorInGroup, sd as OpenNextRecentlyUsedEditorAction, se as OpenPreviousRecentlyUsedEditorAction, sf as OpenNextRecentlyUsedEditorInGroupAction, sg as OpenPreviousRecentlyUsedEditorInGroupAction, sh as ReopenClosedEditorAction, si as ClearRecentFilesAction, sj as CloseAllEditorsAction, sk as CloseAllEditorGroupsAction, sl as CloseLeftEditorsInGroupAction, sm as CloseEditorsInOtherGroupsAction, sn as CloseEditorInAllGroupsAction, so as RevertAndCloseEditorAction, sp as SplitEditorAction, sq as SplitEditorOrthogonalAction, sr as SplitEditorLeftAction, ss as SplitEditorRightAction, st as SplitEditorUpAction, su as SplitEditorDownAction, sv as JoinTwoGroupsAction, sw as JoinAllGroupsAction, sx as NavigateBetweenGroupsAction, sy as ResetGroupSizesAction, sz as ToggleGroupSizesAction, sA as MaximizeGroupAction, sB as MinimizeOtherGroupsAction, sC as MoveEditorLeftInGroupAction, sD as MoveEditorRightInGroupAction, sE as MoveGroupLeftAction, sF as MoveGroupRightAction, sG as MoveGroupUpAction, sH as MoveGroupDownAction, sI as DuplicateGroupLeftAction, sJ as DuplicateGroupRightAction, sK as DuplicateGroupUpAction, sL as DuplicateGroupDownAction, sM as MoveEditorToPreviousGroupAction, sN as MoveEditorToNextGroupAction, sO as MoveEditorToFirstGroupAction, sP as MoveEditorToLastGroupAction, sQ as MoveEditorToLeftGroupAction, sR as MoveEditorToRightGroupAction, sS as MoveEditorToAboveGroupAction, sT as MoveEditorToBelowGroupAction, sU as SplitEditorToPreviousGroupAction, sV as SplitEditorToNextGroupAction, sW as SplitEditorToFirstGroupAction, sX as SplitEditorToLastGroupAction, sY as SplitEditorToLeftGroupAction, sZ as SplitEditorToRightGroupAction, s_ as SplitEditorToAboveGroupAction, s$ as SplitEditorToBelowGroupAction, t0 as FocusActiveGroupAction, t1 as FocusFirstGroupAction, t2 as FocusLastGroupAction, t3 as FocusPreviousGroup, t4 as FocusNextGroup, t5 as FocusLeftGroup, t6 as FocusRightGroup, t7 as FocusAboveGroup, t8 as FocusBelowGroup, t9 as NewEditorGroupLeftAction, ta as NewEditorGroupRightAction, tb as NewEditorGroupAboveAction, tc as NewEditorGroupBelowAction, td as NavigatePreviousAction, te as NavigateForwardInEditsAction, tf as NavigateBackwardsInEditsAction, tg as NavigatePreviousInEditsAction, th as NavigateToLastEditLocationAction, ti as NavigateForwardInNavigationsAction, tj as NavigateBackwardsInNavigationsAction, tk as NavigatePreviousInNavigationsAction, tl as NavigateToLastNavigationLocationAction, tm as ClearEditorHistoryAction, tn as EditorLayoutSingleAction, to as EditorLayoutTwoColumnsAction, tp as EditorLayoutThreeColumnsAction, tq as EditorLayoutTwoRowsAction, tr as EditorLayoutThreeRowsAction, ts as EditorLayoutTwoByTwoGridAction, tt as EditorLayoutTwoRowsRightAction, tu as EditorLayoutTwoColumnsBottomAction, tv as ToggleEditorTypeAction, tw as ReOpenInTextEditorAction, tx as QuickAccessPreviousRecentlyUsedEditorAction, ty as QuickAccessLeastRecentlyUsedEditorAction, tz as QuickAccessPreviousRecentlyUsedEditorInGroupAction, tA as QuickAccessLeastRecentlyUsedEditorInGroupAction, tB as QuickAccessPreviousEditorFromHistoryAction, j$ as getQuickNavigateHandler, tC as setup, lS as UNLOCK_GROUP_COMMAND_ID, lf as ActiveEditorGroupLockedContext, tD as CLOSE_EDITOR_GROUP_COMMAND_ID, tE as SPLIT_EDITOR_UP, tF as SPLIT_EDITOR_DOWN, tG as SPLIT_EDITOR_LEFT, tH as SPLIT_EDITOR_RIGHT, tI as TOGGLE_LOCK_GROUP_COMMAND_ID, tJ as MultipleEditorGroupsContext, mb as CLOSE_EDITOR_COMMAND_ID, nT as CLOSE_OTHER_EDITORS_IN_GROUP_COMMAND_ID, mh as EditorGroupEditorsCountContext, tK as CLOSE_EDITORS_TO_THE_RIGHT_COMMAND_ID, la as ActiveEditorLastInGroupContext, tL as EditorTabsVisibleContext, nU as CLOSE_SAVED_EDITORS_COMMAND_ID, nV as CLOSE_EDITORS_IN_GROUP_COMMAND_ID, nM as REOPEN_WITH_COMMAND_ID, lc as ActiveEditorAvailableEditorIdsContext, tM as KEEP_EDITOR_COMMAND_ID, l8 as ActiveEditorPinnedContext, tN as PIN_EDITOR_COMMAND_ID, lb as ActiveEditorStickyContext, tO as UNPIN_EDITOR_COMMAND_ID, tP as SPLIT_EDITOR_IN_GROUP, ld as ActiveEditorCanSplitInGroupContext, tQ as JOIN_EDITOR_IN_GROUP, le as SideBySideEditorActiveContext, tR as TOGGLE_DIFF_SIDE_BY_SIDE, tS as SHOW_EDITORS_IN_GROUP, tT as TOGGLE_KEEP_EDITORS_COMMAND_ID, tU as TOGGLE_SPLIT_EDITOR_IN_GROUP_LAYOUT, mg as ActiveEditorDirtyContext, tV as GOTO_PREVIOUS_CHANGE, tW as GOTO_NEXT_CHANGE, gZ as TextCompareEditorActiveContext, tX as TOGGLE_DIFF_IGNORE_TRIM_WHITESPACE, tY as CLOSE_PINNED_EDITOR_COMMAND_ID, tZ as CLOSE_EDITORS_AND_GROUP_COMMAND_ID, t_ as FOCUS_FIRST_SIDE_EDITOR, t$ as FOCUS_SECOND_SIDE_EDITOR, u0 as AbstractCodeEditorService, bG as isCodeEditor, on as isDiffEditor, gw as isCompositeEditor, pR as applyTextEditorOptions, l2 as ACTIVE_GROUP, u1 as LinkedMap, aW as ResourceMap, hq as equals, r3 as ResourceSet, hm as distinct, u2 as indexOfPath, fz as joinPath, qx as FileChangesEvent, u3 as isPreferredGroup, q1 as isEditorInputWithOptionsAndGroup, q7 as isResourceMergeEditorInput, q0 as isResourceDiffEditorInput, nr as isResourceEditorInput, e6 as isUndefined, u4 as isEditorReplacement, rk as EditorInput, hz as IUriIdentityService, u5 as IWorkspaceTrustRequestService, hb as StandaloneServices, u as ICodeEditorService, u6 as StandaloneCodeEditor, a_ as ITextModelService, iS as unsupported, hc as StandaloneEditor, mo as EditorCloseContext, m4 as DEFAULT_EDITOR_MIN_DIMENSIONS, m5 as DEFAULT_EDITOR_MAX_DIMENSIONS } from "./theme-defaults-1df7f429.js";
import { S as SimpleIconLabel } from "./simpleIconLabel-ea6a3011.js";
import { d as IndentUsingSpaces, e as IndentUsingTabs, C as ChangeTabDisplaySize, D as DetectIndentation, g as IndentationToSpacesAction, h as IndentationToTabsAction, T as TrimTrailingWhitespaceAction, i as FloatingClickMenu } from "./index-ca8d23e0.js";
class ActivityAction extends Action {
  constructor(_activity) {
    var _a2;
    super(_activity.id, _activity.name, (_a2 = _activity.classNames) == null ? void 0 : _a2.join(" "), true);
    this._activity = _activity;
    this._onDidChangeActivity = this._register(new Emitter());
    this.onDidChangeActivity = this._onDidChangeActivity.event;
    this._onDidChangeBadge = this._register(new Emitter());
    this.onDidChangeBadge = this._onDidChangeBadge.event;
  }
  get activity() {
    return this._activity;
  }
  set activity(activity) {
    this._label = activity.name;
    this._activity = activity;
    this._onDidChangeActivity.fire(this);
  }
  activate() {
    if (!this.checked) {
      this._setChecked(true);
    }
  }
  deactivate() {
    if (this.checked) {
      this._setChecked(false);
    }
  }
  getBadge() {
    return this.badge;
  }
  getClass() {
    return this.clazz;
  }
  setBadge(badge, clazz) {
    this.badge = badge;
    this.clazz = clazz;
    this._onDidChangeBadge.fire(this);
  }
  dispose() {
    this._onDidChangeActivity.dispose();
    this._onDidChangeBadge.dispose();
    super.dispose();
  }
}
let ActivityActionViewItem = (_a = class extends BaseActionViewItem {
  constructor(action, options, badgesEnabled, themeService, hoverService, configurationService, keybindingService) {
    super(null, action, options);
    this.badgesEnabled = badgesEnabled;
    this.themeService = themeService;
    this.hoverService = hoverService;
    this.configurationService = configurationService;
    this.keybindingService = keybindingService;
    this.badgeDisposable = this._register(new MutableDisposable());
    this.hoverDisposables = this._register(new DisposableStore());
    this.showHoverScheduler = new RunOnceScheduler(() => this.showHover(), 0);
    this.options = options;
    this._register(this.themeService.onDidColorThemeChange(this.onThemeChange, this));
    this._register(action.onDidChangeActivity(this.updateActivity, this));
    this._register(Event.filter(keybindingService.onDidUpdateKeybindings, () => this.keybindingLabel !== this.computeKeybindingLabel())(() => this.updateTitle()));
    this._register(action.onDidChangeBadge(this.updateBadge, this));
    this._register(toDisposable(() => this.showHoverScheduler.cancel()));
  }
  get activity() {
    return this._action.activity;
  }
  updateStyles() {
    const theme = this.themeService.getColorTheme();
    const colors = this.options.colors(theme);
    if (this.label) {
      if (this.options.icon) {
        const foreground = this._action.checked ? colors.activeForegroundColor : colors.inactiveForegroundColor;
        if (this.activity.iconUrl) {
          this.label.style.backgroundColor = foreground ? foreground.toString() : "";
          this.label.style.color = "";
        } else {
          this.label.style.color = foreground ? foreground.toString() : "";
          this.label.style.backgroundColor = "";
        }
      } else {
        const foreground = this._action.checked ? colors.activeForegroundColor : colors.inactiveForegroundColor;
        const borderBottomColor = this._action.checked ? colors.activeBorderBottomColor : null;
        this.label.style.color = foreground ? foreground.toString() : "";
        this.label.style.borderBottomColor = borderBottomColor ? borderBottomColor.toString() : "";
      }
      this.container.style.setProperty("--insert-border-color", colors.dragAndDropBorder ? colors.dragAndDropBorder.toString() : "");
    }
    if (this.badgeContent) {
      const badgeForeground = colors.badgeForeground;
      const badgeBackground = colors.badgeBackground;
      const contrastBorderColor = theme.getColor(contrastBorder);
      this.badgeContent.style.color = badgeForeground ? badgeForeground.toString() : "";
      this.badgeContent.style.backgroundColor = badgeBackground ? badgeBackground.toString() : "";
      this.badgeContent.style.borderStyle = contrastBorderColor ? "solid" : "";
      this.badgeContent.style.borderWidth = contrastBorderColor ? "1px" : "";
      this.badgeContent.style.borderColor = contrastBorderColor ? contrastBorderColor.toString() : "";
    }
  }
  render(container) {
    super.render(container);
    this.container = container;
    if (this.options.icon) {
      this.container.classList.add("icon");
    }
    if (this.options.hasPopup) {
      this.container.setAttribute("role", "button");
      this.container.setAttribute("aria-haspopup", "true");
    } else {
      this.container.setAttribute("role", "tab");
    }
    this._register(addDisposableListener(this.container, EventType.MOUSE_DOWN, () => {
      this.container.classList.add("clicked");
    }));
    this._register(addDisposableListener(this.container, EventType.MOUSE_UP, () => {
      if (this.mouseUpTimeout) {
        clearTimeout(this.mouseUpTimeout);
      }
      this.mouseUpTimeout = setTimeout(() => {
        this.container.classList.remove("clicked");
      }, 800);
    }));
    this.label = append(container, $("a"));
    this.badge = append(container, $(".badge"));
    this.badgeContent = append(this.badge, $(".badge-content"));
    append(container, $(".active-item-indicator"));
    hide(this.badge);
    this.updateActivity();
    this.updateStyles();
    this.updateHover();
  }
  onThemeChange(theme) {
    this.updateStyles();
  }
  updateActivity() {
    this.updateLabel();
    this.updateTitle();
    this.updateBadge();
    this.updateStyles();
  }
  updateBadge() {
    const action = this.action;
    if (!this.badge || !this.badgeContent || !(action instanceof ActivityAction)) {
      return;
    }
    const badge = action.getBadge();
    const clazz = action.getClass();
    this.badgeDisposable.clear();
    clearNode(this.badgeContent);
    hide(this.badge);
    const shouldRenderBadges = this.badgesEnabled(this.activity.id);
    if (badge && shouldRenderBadges) {
      if (badge instanceof NumberBadge) {
        if (badge.number) {
          let number = badge.number.toString();
          if (badge.number > 999) {
            const noOfThousands = badge.number / 1e3;
            const floor = Math.floor(noOfThousands);
            if (noOfThousands > floor) {
              number = `${floor}K+`;
            } else {
              number = `${noOfThousands}K`;
            }
          }
          this.badgeContent.textContent = number;
          show(this.badge);
        }
      } else if (badge instanceof TextBadge) {
        this.badgeContent.textContent = badge.text;
        show(this.badge);
      } else if (badge instanceof IconBadge) {
        const clazzList = ThemeIcon.asClassNameArray(badge.icon);
        this.badgeContent.classList.add(...clazzList);
        show(this.badge);
      } else if (badge instanceof ProgressBadge) {
        show(this.badge);
      }
      if (clazz) {
        const classNames = clazz.split(" ");
        this.badge.classList.add(...classNames);
        this.badgeDisposable.value = toDisposable(() => this.badge.classList.remove(...classNames));
      }
    }
    this.updateTitle();
  }
  updateLabel() {
    this.label.className = "action-label";
    if (this.activity.classNames) {
      this.label.classList.add(...this.activity.classNames);
    }
    if (!this.options.icon) {
      this.label.textContent = this.action.label;
    }
  }
  updateTitle() {
    const title = this.computeTitle();
    [this.label, this.badge, this.container].forEach((element) => {
      if (element) {
        element.setAttribute("aria-label", title);
        element.setAttribute("title", "");
        element.removeAttribute("title");
      }
    });
  }
  computeTitle() {
    this.keybindingLabel = this.computeKeybindingLabel();
    let title = this.keybindingLabel ? localize("titleKeybinding", "{0} ({1})", this.activity.name, this.keybindingLabel) : this.activity.name;
    const badge = this.action.getBadge();
    if (badge == null ? void 0 : badge.getDescription()) {
      title = localize("badgeTitle", "{0} - {1}", title, badge.getDescription());
    }
    return title;
  }
  computeKeybindingLabel() {
    const keybinding = this.activity.keybindingId ? this.keybindingService.lookupKeybinding(this.activity.keybindingId) : null;
    return keybinding == null ? void 0 : keybinding.getLabel();
  }
  updateHover() {
    this.hoverDisposables.clear();
    this.updateTitle();
    this.hoverDisposables.add(addDisposableListener(this.container, EventType.MOUSE_OVER, () => {
      if (!this.showHoverScheduler.isScheduled()) {
        if (Date.now() - _a.hoverLeaveTime < 200) {
          this.showHover(true);
        } else {
          this.showHoverScheduler.schedule(this.configurationService.getValue("workbench.hover.delay"));
        }
      }
    }, true));
    this.hoverDisposables.add(addDisposableListener(this.container, EventType.MOUSE_LEAVE, (e) => {
      if (e.target === this.container) {
        _a.hoverLeaveTime = Date.now();
        this.hoverService.hideHover();
        this.showHoverScheduler.cancel();
      }
    }, true));
    this.hoverDisposables.add(toDisposable(() => {
      this.hoverService.hideHover();
      this.showHoverScheduler.cancel();
    }));
  }
  showHover(skipFadeInAnimation = false) {
    if (this.lastHover && !this.lastHover.isDisposed) {
      return;
    }
    const hoverPosition = this.options.hoverOptions.position();
    this.lastHover = this.hoverService.showHover({
      target: this.container,
      hoverPosition,
      content: this.computeTitle(),
      showPointer: true,
      compact: true,
      hideOnKeyDown: true,
      skipFadeInAnimation
    });
  }
  dispose() {
    super.dispose();
    if (this.mouseUpTimeout) {
      clearTimeout(this.mouseUpTimeout);
    }
    this.badge.remove();
  }
}, _a.hoverLeaveTime = 0, _a);
ActivityActionViewItem = __decorate([
  __param(3, IThemeService),
  __param(4, IHoverService),
  __param(5, IConfigurationService),
  __param(6, IKeybindingService)
], ActivityActionViewItem);
class CompositeOverflowActivityAction extends ActivityAction {
  constructor(showMenu) {
    super({
      id: "additionalComposites.action",
      name: localize("additionalViews", "Additional Views"),
      classNames: ThemeIcon.asClassNameArray(Codicon.more)
    });
    this.showMenu = showMenu;
  }
  async run() {
    this.showMenu();
  }
}
let CompositeOverflowActivityActionViewItem = class CompositeOverflowActivityActionViewItem2 extends ActivityActionViewItem {
  constructor(action, getOverflowingComposites, getActiveCompositeId, getBadge, getCompositeOpenAction, colors, hoverOptions, contextMenuService, themeService, hoverService, configurationService, keybindingService) {
    super(action, { icon: true, colors, hasPopup: true, hoverOptions }, () => true, themeService, hoverService, configurationService, keybindingService);
    this.getOverflowingComposites = getOverflowingComposites;
    this.getActiveCompositeId = getActiveCompositeId;
    this.getBadge = getBadge;
    this.getCompositeOpenAction = getCompositeOpenAction;
    this.contextMenuService = contextMenuService;
    this.actions = [];
  }
  showMenu() {
    if (this.actions) {
      disposeIfDisposable(this.actions);
    }
    this.actions = this.getActions();
    this.contextMenuService.showContextMenu({
      getAnchor: () => this.container,
      getActions: () => this.actions,
      getCheckedActionsRepresentation: () => "radio",
      onHide: () => disposeIfDisposable(this.actions)
    });
  }
  getActions() {
    return this.getOverflowingComposites().map((composite) => {
      const action = this.getCompositeOpenAction(composite.id);
      action.checked = this.getActiveCompositeId() === action.id;
      const badge = this.getBadge(composite.id);
      let suffix;
      if (badge instanceof NumberBadge) {
        suffix = badge.number;
      } else if (badge instanceof TextBadge) {
        suffix = badge.text;
      }
      if (suffix) {
        action.label = localize("numberBadge", "{0} ({1})", composite.name, suffix);
      } else {
        action.label = composite.name || "";
      }
      return action;
    });
  }
  dispose() {
    super.dispose();
    if (this.actions) {
      this.actions = disposeIfDisposable(this.actions);
    }
  }
};
CompositeOverflowActivityActionViewItem = __decorate([
  __param(7, IContextMenuService),
  __param(8, IThemeService),
  __param(9, IHoverService),
  __param(10, IConfigurationService),
  __param(11, IKeybindingService)
], CompositeOverflowActivityActionViewItem);
let ManageExtensionAction = class ManageExtensionAction2 extends Action {
  constructor(commandService) {
    super("activitybar.manage.extension", localize("manageExtension", "Manage Extension"));
    this.commandService = commandService;
  }
  run(id) {
    return this.commandService.executeCommand("_extensions.manage", id);
  }
};
ManageExtensionAction = __decorate([
  __param(0, ICommandService)
], ManageExtensionAction);
let CompositeActionViewItem = class CompositeActionViewItem2 extends ActivityActionViewItem {
  constructor(options, compositeActivityAction, toggleCompositePinnedAction, toggleCompositeBadgeAction, compositeContextMenuActionsProvider, contextMenuActionsProvider, dndHandler, compositeBar, contextMenuService, keybindingService, instantiationService, themeService, hoverService, configurationService) {
    super(compositeActivityAction, options, compositeBar.areBadgesEnabled.bind(compositeBar), themeService, hoverService, configurationService, keybindingService);
    this.compositeActivityAction = compositeActivityAction;
    this.toggleCompositePinnedAction = toggleCompositePinnedAction;
    this.toggleCompositeBadgeAction = toggleCompositeBadgeAction;
    this.compositeContextMenuActionsProvider = compositeContextMenuActionsProvider;
    this.contextMenuActionsProvider = contextMenuActionsProvider;
    this.dndHandler = dndHandler;
    this.compositeBar = compositeBar;
    this.contextMenuService = contextMenuService;
    if (!CompositeActionViewItem2.manageExtensionAction) {
      CompositeActionViewItem2.manageExtensionAction = instantiationService.createInstance(ManageExtensionAction);
    }
  }
  render(container) {
    super.render(container);
    this.updateChecked();
    this.updateEnabled();
    this._register(addDisposableListener(this.container, EventType.CONTEXT_MENU, (e) => {
      EventHelper.stop(e, true);
      this.showContextMenu(container);
    }));
    let insertDropBefore = void 0;
    this._register(CompositeDragAndDropObserver.INSTANCE.registerDraggable(this.container, () => {
      return { type: "composite", id: this.activity.id };
    }, {
      onDragOver: (e) => {
        const isValidMove = e.dragAndDropData.getData().id !== this.activity.id && this.dndHandler.onDragOver(e.dragAndDropData, this.activity.id, e.eventData);
        toggleDropEffect(e.eventData.dataTransfer, "move", isValidMove);
        insertDropBefore = this.updateFromDragging(container, isValidMove, e.eventData);
      },
      onDragLeave: (e) => {
        insertDropBefore = this.updateFromDragging(container, false, e.eventData);
      },
      onDragEnd: (e) => {
        insertDropBefore = this.updateFromDragging(container, false, e.eventData);
      },
      onDrop: (e) => {
        EventHelper.stop(e.eventData, true);
        this.dndHandler.drop(e.dragAndDropData, this.activity.id, e.eventData, insertDropBefore);
        insertDropBefore = this.updateFromDragging(container, false, e.eventData);
      },
      onDragStart: (e) => {
        if (e.dragAndDropData.getData().id !== this.activity.id) {
          return;
        }
        if (e.eventData.dataTransfer) {
          e.eventData.dataTransfer.effectAllowed = "move";
        }
        this.blur();
      }
    }));
    [this.badge, this.label].forEach((element) => this._register(new DelayedDragHandler(element, () => {
      if (!this.action.checked) {
        this.action.run();
      }
    })));
    this.updateStyles();
  }
  updateFromDragging(element, showFeedback, event) {
    const rect = element.getBoundingClientRect();
    const posX = event.clientX;
    const posY = event.clientY;
    const height = rect.bottom - rect.top;
    const width = rect.right - rect.left;
    const forceTop = posY <= rect.top + height * 0.4;
    const forceBottom = posY > rect.bottom - height * 0.4;
    const preferTop = posY <= rect.top + height * 0.5;
    const forceLeft = posX <= rect.left + width * 0.4;
    const forceRight = posX > rect.right - width * 0.4;
    const preferLeft = posX <= rect.left + width * 0.5;
    const classes = element.classList;
    const lastClasses = {
      vertical: classes.contains("top") ? "top" : classes.contains("bottom") ? "bottom" : void 0,
      horizontal: classes.contains("left") ? "left" : classes.contains("right") ? "right" : void 0
    };
    const top = forceTop || preferTop && !lastClasses.vertical || !forceBottom && lastClasses.vertical === "top";
    const bottom = forceBottom || !preferTop && !lastClasses.vertical || !forceTop && lastClasses.vertical === "bottom";
    const left = forceLeft || preferLeft && !lastClasses.horizontal || !forceRight && lastClasses.horizontal === "left";
    const right = forceRight || !preferLeft && !lastClasses.horizontal || !forceLeft && lastClasses.horizontal === "right";
    element.classList.toggle("top", showFeedback && top);
    element.classList.toggle("bottom", showFeedback && bottom);
    element.classList.toggle("left", showFeedback && left);
    element.classList.toggle("right", showFeedback && right);
    if (!showFeedback) {
      return void 0;
    }
    return { verticallyBefore: top, horizontallyBefore: left };
  }
  showContextMenu(container) {
    const actions = [this.toggleCompositePinnedAction, this.toggleCompositeBadgeAction];
    const compositeContextMenuActions = this.compositeContextMenuActionsProvider(this.activity.id);
    if (compositeContextMenuActions.length) {
      actions.push(...compositeContextMenuActions);
    }
    if (this.compositeActivityAction.activity.extensionId) {
      actions.push(new Separator());
      actions.push(CompositeActionViewItem2.manageExtensionAction);
    }
    const isPinned = this.compositeBar.isPinned(this.activity.id);
    if (isPinned) {
      this.toggleCompositePinnedAction.label = localize("hide", "Hide '{0}'", this.activity.name);
      this.toggleCompositePinnedAction.checked = false;
    } else {
      this.toggleCompositePinnedAction.label = localize("keep", "Keep '{0}'", this.activity.name);
    }
    const isBadgeEnabled = this.compositeBar.areBadgesEnabled(this.activity.id);
    if (isBadgeEnabled) {
      this.toggleCompositeBadgeAction.label = localize("hideBadge", "Hide Badge");
    } else {
      this.toggleCompositeBadgeAction.label = localize("showBadge", "Show Badge");
    }
    const otherActions = this.contextMenuActionsProvider();
    if (otherActions.length) {
      actions.push(new Separator());
      actions.push(...otherActions);
    }
    const elementPosition = getDomNodePagePosition(container);
    const anchor = {
      x: Math.floor(elementPosition.left + elementPosition.width / 2),
      y: elementPosition.top + elementPosition.height
    };
    this.contextMenuService.showContextMenu({
      getAnchor: () => anchor,
      getActions: () => actions,
      getActionsContext: () => this.activity.id
    });
  }
  updateChecked() {
    if (this.action.checked) {
      this.container.classList.add("checked");
      this.container.setAttribute("aria-label", this.container.title);
      this.container.setAttribute("aria-expanded", "true");
      this.container.setAttribute("aria-selected", "true");
    } else {
      this.container.classList.remove("checked");
      this.container.setAttribute("aria-label", this.container.title);
      this.container.setAttribute("aria-expanded", "false");
      this.container.setAttribute("aria-selected", "false");
    }
    this.updateStyles();
  }
  updateEnabled() {
    if (!this.element) {
      return;
    }
    if (this.action.enabled) {
      this.element.classList.remove("disabled");
    } else {
      this.element.classList.add("disabled");
    }
  }
  dispose() {
    super.dispose();
    this.label.remove();
  }
};
CompositeActionViewItem = __decorate([
  __param(8, IContextMenuService),
  __param(9, IKeybindingService),
  __param(10, IInstantiationService),
  __param(11, IThemeService),
  __param(12, IHoverService),
  __param(13, IConfigurationService)
], CompositeActionViewItem);
class ToggleCompositePinnedAction extends Action {
  constructor(activity, compositeBar) {
    super("show.toggleCompositePinned", activity ? activity.name : localize("toggle", "Toggle View Pinned"));
    this.activity = activity;
    this.compositeBar = compositeBar;
    this.checked = !!this.activity && this.compositeBar.isPinned(this.activity.id);
  }
  async run(context) {
    const id = this.activity ? this.activity.id : context;
    if (this.compositeBar.isPinned(id)) {
      this.compositeBar.unpin(id);
    } else {
      this.compositeBar.pin(id);
    }
  }
}
class ToggleCompositeBadgeAction extends Action {
  constructor(activity, compositeBar) {
    super("show.toggleCompositeBadge", activity ? activity.name : localize("toggleBadge", "Toggle View Badge"));
    this.activity = activity;
    this.compositeBar = compositeBar;
    this.checked = false;
  }
  async run(context) {
    const id = this.activity ? this.activity.id : context;
    this.compositeBar.toggleBadgeEnablement(id);
  }
}
const auxiliaryBarRightIcon = registerIcon("auxiliarybar-right-layout-icon", Codicon.layoutSidebarRight, localize(
  "toggleAuxiliaryIconRight",
  "Icon to toggle the auxiliary bar off in its right position."
));
const auxiliaryBarRightOffIcon = registerIcon("auxiliarybar-right-off-layout-icon", Codicon.layoutSidebarRightOff, localize(
  "toggleAuxiliaryIconRightOn",
  "Icon to toggle the auxiliary bar on in its right position."
));
const auxiliaryBarLeftIcon = registerIcon("auxiliarybar-left-layout-icon", Codicon.layoutSidebarLeft, localize(
  "toggleAuxiliaryIconLeft",
  "Icon to toggle the auxiliary bar in its left position."
));
const auxiliaryBarLeftOffIcon = registerIcon("auxiliarybar-left-off-layout-icon", Codicon.layoutSidebarLeftOff, localize(
  "toggleAuxiliaryIconLeftOn",
  "Icon to toggle the auxiliary bar on in its left position."
));
const _ToggleAuxiliaryBarAction = class _ToggleAuxiliaryBarAction extends Action2 {
  constructor() {
    super({
      id: _ToggleAuxiliaryBarAction.ID,
      title: { value: _ToggleAuxiliaryBarAction.LABEL, original: "Toggle Secondary Side Bar Visibility" },
      toggled: {
        condition: AuxiliaryBarVisibleContext,
        title: localize("secondary sidebar", "Secondary Side Bar"),
        mnemonicTitle: localize(
          { key: "secondary sidebar mnemonic", comment: ["&& denotes a mnemonic"] },
          "Secondary Si&&de Bar"
        )
      },
      category: Categories.View,
      f1: true,
      keybinding: {
        weight: 200,
        primary: 2048 | 512 | 32
      },
      menu: [
        {
          id: MenuId.LayoutControlMenuSubmenu,
          group: "0_workbench_layout",
          order: 1
        },
        {
          id: MenuId.MenubarAppearanceMenu,
          group: "2_workbench_layout",
          order: 2
        }
      ]
    });
  }
  async run(accessor) {
    const layoutService = accessor.get(IWorkbenchLayoutService);
    layoutService.setPartHidden(layoutService.isVisible("workbench.parts.auxiliarybar"), "workbench.parts.auxiliarybar");
  }
};
_ToggleAuxiliaryBarAction.ID = "workbench.action.toggleAuxiliaryBar";
_ToggleAuxiliaryBarAction.LABEL = localize("toggleAuxiliaryBar", "Toggle Secondary Side Bar Visibility");
let ToggleAuxiliaryBarAction = _ToggleAuxiliaryBarAction;
registerAction2(ToggleAuxiliaryBarAction);
registerAction2((_b = class extends Action2 {
  constructor() {
    super({
      id: _b.ID,
      title: { value: _b.LABEL, original: "Focus into Secondary Side Bar" },
      category: Categories.View,
      f1: true
    });
  }
  async run(accessor) {
    const paneCompositeService = accessor.get(IPaneCompositePartService);
    const layoutService = accessor.get(IWorkbenchLayoutService);
    if (!layoutService.isVisible("workbench.parts.auxiliarybar")) {
      layoutService.setPartHidden(false, "workbench.parts.auxiliarybar");
    }
    const composite = paneCompositeService.getActivePaneComposite(2);
    composite == null ? void 0 : composite.focus();
  }
}, _b.ID = "workbench.action.focusAuxiliaryBar", _b.LABEL = localize("focusAuxiliaryBar", "Focus into Secondary Side Bar"), _b));
MenuRegistry.appendMenuItems([
  {
    id: MenuId.LayoutControlMenu,
    item: {
      group: "0_workbench_toggles",
      command: {
        id: ToggleAuxiliaryBarAction.ID,
        title: localize("toggleSecondarySideBar", "Toggle Secondary Side Bar"),
        toggled: { condition: AuxiliaryBarVisibleContext, icon: auxiliaryBarLeftIcon },
        icon: auxiliaryBarLeftOffIcon
      },
      when: ContextKeyExpr.and(ContextKeyExpr.or(ContextKeyExpr.equals("config.workbench.layoutControl.type", "toggles"), ContextKeyExpr.equals("config.workbench.layoutControl.type", "both")), ContextKeyExpr.equals("config.workbench.sideBar.location", "right")),
      order: 0
    }
  },
  {
    id: MenuId.LayoutControlMenu,
    item: {
      group: "0_workbench_toggles",
      command: {
        id: ToggleAuxiliaryBarAction.ID,
        title: localize("toggleSecondarySideBar", "Toggle Secondary Side Bar"),
        toggled: { condition: AuxiliaryBarVisibleContext, icon: auxiliaryBarRightIcon },
        icon: auxiliaryBarRightOffIcon
      },
      when: ContextKeyExpr.and(ContextKeyExpr.or(ContextKeyExpr.equals("config.workbench.layoutControl.type", "toggles"), ContextKeyExpr.equals("config.workbench.layoutControl.type", "both")), ContextKeyExpr.equals("config.workbench.sideBar.location", "left")),
      order: 2
    }
  },
  {
    id: MenuId.ViewTitleContext,
    item: {
      group: "3_workbench_layout_move",
      command: {
        id: ToggleAuxiliaryBarAction.ID,
        title: { value: localize("hideAuxiliaryBar", "Hide Secondary Side Bar"), original: "Hide Secondary Side Bar" }
      },
      when: ContextKeyExpr.and(AuxiliaryBarVisibleContext, ContextKeyExpr.equals(
        "viewLocation",
        ViewContainerLocationToString(2)
      )),
      order: 2
    }
  }
]);
var css$2 = ".monaco-workbench.nopanel .part.panel{display:none!important;visibility:hidden!important}.monaco-workbench .part.panel.bottom .composite.title{border-top-style:solid;border-top-width:1px}.monaco-workbench.noeditorarea .part.panel.bottom .composite.title{border-top-width:0}.monaco-workbench .part.panel.right{border-left-style:solid;border-left-width:1px}.monaco-workbench.noeditorarea .part.panel.right{border-left-width:0}.monaco-workbench .part.panel.left{border-right-style:solid;border-right-width:1px}.monaco-workbench.noeditorarea .part.panel.left{border-right-width:0}.monaco-workbench .part.panel>.content .monaco-editor,.monaco-workbench .part.panel>.content .monaco-editor .margin,.monaco-workbench .part.panel>.content .monaco-editor .monaco-editor-background{background-color:var(--vscode-panel-background)}.monaco-workbench .part.panel>.title>.panel-switcher-container>.monaco-action-bar .action-item:focus .action-label,.monaco-workbench .part.panel>.title>.panel-switcher-container>.monaco-action-bar .action-item:hover .action-label{color:var(--vscode-panelTitle-activeForeground)!important}.monaco-workbench .part.panel .monaco-inputbox{border-color:var(--vscode-panelInput-border,transparent)!important}.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item:focus .active-item-indicator:before{border-top-color:var(--vscode-focusBorder)!important}.monaco-workbench .part.panel>.title>.panel-switcher-container>.monaco-action-bar .action-item:focus{outline:none}.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item.checked.clicked:focus .active-item-indicator:before,.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item.checked:not(:focus) .active-item-indicator:before{border-top-color:var(--vscode-panelTitle-activeBorder)!important}.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item.checked .action-label,.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item:hover .action-label{outline:var(--vscode-contrastActiveBorder,unset) solid 1px!important}.monaco-workbench .part.basepanel>.title>.panel-switcher-container>.monaco-action-bar .action-item:not(.checked):hover .action-label{outline:var(--vscode-contrastActiveBorder,unset) dashed 1px!important}";
n(css$2, {});
registerIcon("panel-maximize", Codicon.chevronUp, localize("maximizeIcon", "Icon to maximize a panel."));
registerIcon("panel-restore", Codicon.chevronDown, localize("restoreIcon", "Icon to restore a panel."));
const closeIcon = registerIcon("panel-close", Codicon.close, localize("closeIcon", "Icon to close a panel."));
const panelIcon$1 = registerIcon("panel-layout-icon", Codicon.layoutPanel, localize("togglePanelOffIcon", "Icon to toggle the panel off when it is on."));
const panelOffIcon = registerIcon("panel-layout-icon-off", Codicon.layoutPanelOff, localize("togglePanelOnIcon", "Icon to toggle the panel on when it is off."));
const _TogglePanelAction = class _TogglePanelAction extends Action2 {
  constructor() {
    super({
      id: _TogglePanelAction.ID,
      title: { value: _TogglePanelAction.LABEL, original: "Toggle Panel Visibility" },
      toggled: {
        condition: PanelVisibleContext,
        title: localize("toggle panel", "Panel"),
        mnemonicTitle: localize(
          { key: "toggle panel mnemonic", comment: ["&& denotes a mnemonic"] },
          "&&Panel"
        )
      },
      f1: true,
      category: Categories.View,
      keybinding: { primary: 2048 | 40, weight: 200 },
      menu: [
        {
          id: MenuId.MenubarAppearanceMenu,
          group: "2_workbench_layout",
          order: 5
        },
        {
          id: MenuId.LayoutControlMenuSubmenu,
          group: "0_workbench_layout",
          order: 4
        }
      ]
    });
  }
  async run(accessor) {
    const layoutService = accessor.get(IWorkbenchLayoutService);
    layoutService.setPartHidden(layoutService.isVisible("workbench.parts.panel"), "workbench.parts.panel");
  }
};
_TogglePanelAction.ID = "workbench.action.togglePanel";
_TogglePanelAction.LABEL = localize("togglePanelVisibility", "Toggle Panel Visibility");
let TogglePanelAction = _TogglePanelAction;
registerAction2(TogglePanelAction);
registerAction2((_c = class extends Action2 {
  constructor() {
    super({
      id: "workbench.action.focusPanel",
      title: { value: localize("focusPanel", "Focus into Panel"), original: "Focus into Panel" },
      category: Categories.View,
      f1: true
    });
  }
  async run(accessor) {
    const layoutService = accessor.get(IWorkbenchLayoutService);
    const paneCompositeService = accessor.get(IPaneCompositePartService);
    if (!layoutService.isVisible("workbench.parts.panel")) {
      layoutService.setPartHidden(false, "workbench.parts.panel");
    }
    const panel = paneCompositeService.getActivePaneComposite(1);
    panel == null ? void 0 : panel.focus();
  }
}, _c.ID = "workbench.action.focusPanel", _c.LABEL = localize("focusPanel", "Focus into Panel"), _c));
const PositionPanelActionId = {
  LEFT: "workbench.action.positionPanelLeft",
  RIGHT: "workbench.action.positionPanelRight",
  BOTTOM: "workbench.action.positionPanelBottom"
};
const AlignPanelActionId = {
  LEFT: "workbench.action.alignPanelLeft",
  RIGHT: "workbench.action.alignPanelRight",
  CENTER: "workbench.action.alignPanelCenter",
  JUSTIFY: "workbench.action.alignPanelJustify"
};
function createPanelActionConfig(id, title, shortLabel, value, when) {
  return {
    id,
    title,
    shortLabel,
    value,
    when
  };
}
function createPositionPanelActionConfig(id, title, shortLabel, position) {
  return createPanelActionConfig(id, title, shortLabel, position, PanelPositionContext.notEqualsTo(positionToString(position)));
}
function createAlignmentPanelActionConfig(id, title, shortLabel, alignment) {
  return createPanelActionConfig(id, title, shortLabel, alignment, PanelAlignmentContext.notEqualsTo(alignment));
}
const PositionPanelActionConfigs = [
  createPositionPanelActionConfig(PositionPanelActionId.LEFT, { value: localize("positionPanelLeft", "Move Panel Left"), original: "Move Panel Left" }, localize("positionPanelLeftShort", "Left"), 0),
  createPositionPanelActionConfig(PositionPanelActionId.RIGHT, { value: localize("positionPanelRight", "Move Panel Right"), original: "Move Panel Right" }, localize("positionPanelRightShort", "Right"), 1),
  createPositionPanelActionConfig(PositionPanelActionId.BOTTOM, { value: localize("positionPanelBottom", "Move Panel To Bottom"), original: "Move Panel To Bottom" }, localize("positionPanelBottomShort", "Bottom"), 2)
];
const AlignPanelActionConfigs = [
  createAlignmentPanelActionConfig(AlignPanelActionId.LEFT, { value: localize("alignPanelLeft", "Set Panel Alignment to Left"), original: "Set Panel Alignment to Left" }, localize("alignPanelLeftShort", "Left"), "left"),
  createAlignmentPanelActionConfig(AlignPanelActionId.RIGHT, { value: localize("alignPanelRight", "Set Panel Alignment to Right"), original: "Set Panel Alignment to Right" }, localize("alignPanelRightShort", "Right"), "right"),
  createAlignmentPanelActionConfig(AlignPanelActionId.CENTER, { value: localize("alignPanelCenter", "Set Panel Alignment to Center"), original: "Set Panel Alignment to Center" }, localize("alignPanelCenterShort", "Center"), "center"),
  createAlignmentPanelActionConfig(AlignPanelActionId.JUSTIFY, { value: localize("alignPanelJustify", "Set Panel Alignment to Justify"), original: "Set Panel Alignment to Justify" }, localize("alignPanelJustifyShort", "Justify"), "justify")
];
MenuRegistry.appendMenuItem(MenuId.MenubarAppearanceMenu, {
  submenu: MenuId.PanelPositionMenu,
  title: localize("positionPanel", "Panel Position"),
  group: "3_workbench_layout_move",
  order: 4
});
PositionPanelActionConfigs.forEach((positionPanelAction) => {
  const { id, title, shortLabel, value, when } = positionPanelAction;
  registerAction2(class extends Action2 {
    constructor() {
      super({
        id,
        title,
        category: Categories.View,
        f1: true
      });
    }
    run(accessor) {
      const layoutService = accessor.get(IWorkbenchLayoutService);
      layoutService.setPanelPosition(value === void 0 ? 2 : value);
    }
  });
  MenuRegistry.appendMenuItem(MenuId.PanelPositionMenu, {
    command: {
      id,
      title: shortLabel,
      toggled: when.negate()
    },
    order: 5
  });
});
MenuRegistry.appendMenuItem(MenuId.MenubarAppearanceMenu, {
  submenu: MenuId.PanelAlignmentMenu,
  title: localize("alignPanel", "Align Panel"),
  group: "3_workbench_layout_move",
  order: 5
});
AlignPanelActionConfigs.forEach((alignPanelAction) => {
  const { id, title, shortLabel, value, when } = alignPanelAction;
  registerAction2(class extends Action2 {
    constructor() {
      super({
        id,
        title,
        category: Categories.View,
        toggled: when.negate(),
        f1: true
      });
    }
    run(accessor) {
      const layoutService = accessor.get(IWorkbenchLayoutService);
      layoutService.setPanelAlignment(value === void 0 ? "center" : value);
    }
  });
  MenuRegistry.appendMenuItem(MenuId.PanelAlignmentMenu, {
    command: {
      id,
      title: shortLabel,
      toggled: when.negate()
    },
    order: 5
  });
});
let PanelActivityAction = class PanelActivityAction2 extends ActivityAction {
  constructor(activity, viewContainerLocation, paneCompositeService) {
    super(activity);
    this.viewContainerLocation = viewContainerLocation;
    this.paneCompositeService = paneCompositeService;
  }
  async run() {
    await this.paneCompositeService.openPaneComposite(this.activity.id, this.viewContainerLocation, true);
    this.activate();
  }
  setActivity(activity) {
    this.activity = activity;
  }
};
PanelActivityAction = __decorate([
  __param(2, IPaneCompositePartService)
], PanelActivityAction);
let PlaceHolderPanelActivityAction = class PlaceHolderPanelActivityAction2 extends PanelActivityAction {
  constructor(id, viewContainerLocation, paneCompositeService) {
    super({ id, name: id }, viewContainerLocation, paneCompositeService);
  }
};
PlaceHolderPanelActivityAction = __decorate([
  __param(2, IPaneCompositePartService)
], PlaceHolderPanelActivityAction);
class PlaceHolderToggleCompositePinnedAction extends ToggleCompositePinnedAction {
  constructor(id, compositeBar) {
    super({ id, name: id, classNames: void 0 }, compositeBar);
  }
  setActivity(activity) {
    this.label = activity.name;
  }
}
class SwitchPanelViewAction extends Action2 {
  constructor(id, title) {
    super({
      id,
      title,
      category: Categories.View,
      f1: true
    });
  }
  async run(accessor, offset) {
    const paneCompositeService = accessor.get(IPaneCompositePartService);
    const pinnedPanels = paneCompositeService.getPinnedPaneCompositeIds(1);
    const activePanel = paneCompositeService.getActivePaneComposite(1);
    if (!activePanel) {
      return;
    }
    let targetPanelId;
    for (let i = 0; i < pinnedPanels.length; i++) {
      if (pinnedPanels[i] === activePanel.getId()) {
        targetPanelId = pinnedPanels[(i + pinnedPanels.length + offset) % pinnedPanels.length];
        break;
      }
    }
    if (typeof targetPanelId === "string") {
      await paneCompositeService.openPaneComposite(targetPanelId, 1, true);
    }
  }
}
registerAction2(class extends SwitchPanelViewAction {
  constructor() {
    super("workbench.action.previousPanelView", {
      value: localize("previousPanelView", "Previous Panel View"),
      original: "Previous Panel View"
    });
  }
  run(accessor) {
    return super.run(accessor, -1);
  }
});
registerAction2(class extends SwitchPanelViewAction {
  constructor() {
    super("workbench.action.nextPanelView", {
      value: localize("nextPanelView", "Next Panel View"),
      original: "Next Panel View"
    });
  }
  run(accessor) {
    return super.run(accessor, 1);
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "workbench.action.closeAuxiliaryBar",
      title: { value: localize("closeSecondarySideBar", "Close Secondary Side Bar"), original: "Close Secondary Side Bar" },
      category: Categories.View,
      icon: closeIcon,
      menu: [{
        id: MenuId.CommandPalette,
        when: AuxiliaryBarVisibleContext
      }, {
        id: MenuId.AuxiliaryBarTitle,
        group: "navigation",
        order: 2
      }]
    });
  }
  run(accessor) {
    accessor.get(IWorkbenchLayoutService).setPartHidden(true, "workbench.parts.auxiliarybar");
  }
});
MenuRegistry.appendMenuItems([
  {
    id: MenuId.LayoutControlMenu,
    item: {
      group: "0_workbench_toggles",
      command: {
        id: TogglePanelAction.ID,
        title: localize("togglePanel", "Toggle Panel"),
        icon: panelOffIcon,
        toggled: { condition: PanelVisibleContext, icon: panelIcon$1 }
      },
      when: ContextKeyExpr.or(ContextKeyExpr.equals("config.workbench.layoutControl.type", "toggles"), ContextKeyExpr.equals("config.workbench.layoutControl.type", "both")),
      order: 1
    }
  },
  {
    id: MenuId.ViewTitleContext,
    item: {
      group: "3_workbench_layout_move",
      command: {
        id: TogglePanelAction.ID,
        title: { value: localize("hidePanel", "Hide Panel"), original: "Hide Panel" }
      },
      when: ContextKeyExpr.and(PanelVisibleContext, ContextKeyExpr.equals(
        "viewLocation",
        ViewContainerLocationToString(1)
      )),
      order: 2
    }
  }
]);
class MoveViewsBetweenPanelsAction extends Action2 {
  constructor(source, destination, desc) {
    super(desc);
    this.source = source;
    this.destination = destination;
  }
  run(accessor, ...args) {
    const viewDescriptorService = accessor.get(IViewDescriptorService);
    const layoutService = accessor.get(IWorkbenchLayoutService);
    const viewsService = accessor.get(IViewsService);
    const srcContainers = viewDescriptorService.getViewContainersByLocation(this.source);
    const destContainers = viewDescriptorService.getViewContainersByLocation(this.destination);
    if (srcContainers.length) {
      const activeViewContainer = viewsService.getVisibleViewContainer(this.source);
      srcContainers.forEach((viewContainer) => viewDescriptorService.moveViewContainerToLocation(viewContainer, this.destination));
      layoutService.setPartHidden(false, this.destination === 1 ? "workbench.parts.panel" : "workbench.parts.auxiliarybar");
      if (activeViewContainer && destContainers.length === 0) {
        viewsService.openViewContainer(activeViewContainer.id, true);
      }
    }
  }
}
const _MovePanelToSidePanelAction = class _MovePanelToSidePanelAction extends MoveViewsBetweenPanelsAction {
  constructor() {
    super(1, 2, {
      id: _MovePanelToSidePanelAction.ID,
      title: {
        value: localize("movePanelToSecondarySideBar", "Move Panel Views To Secondary Side Bar"),
        original: "Move Panel Views To Secondary Side Bar"
      },
      category: Categories.View,
      f1: false
    });
  }
};
_MovePanelToSidePanelAction.ID = "workbench.action.movePanelToSidePanel";
let MovePanelToSidePanelAction = _MovePanelToSidePanelAction;
const _MovePanelToSecondarySideBarAction = class _MovePanelToSecondarySideBarAction extends MoveViewsBetweenPanelsAction {
  constructor() {
    super(1, 2, {
      id: _MovePanelToSecondarySideBarAction.ID,
      title: {
        value: localize("movePanelToSecondarySideBar", "Move Panel Views To Secondary Side Bar"),
        original: "Move Panel Views To Secondary Side Bar"
      },
      category: Categories.View,
      f1: true
    });
  }
};
_MovePanelToSecondarySideBarAction.ID = "workbench.action.movePanelToSecondarySideBar";
let MovePanelToSecondarySideBarAction = _MovePanelToSecondarySideBarAction;
registerAction2(MovePanelToSidePanelAction);
registerAction2(MovePanelToSecondarySideBarAction);
const _MoveSidePanelToPanelAction = class _MoveSidePanelToPanelAction extends MoveViewsBetweenPanelsAction {
  constructor() {
    super(2, 1, {
      id: _MoveSidePanelToPanelAction.ID,
      title: {
        value: localize("moveSidePanelToPanel", "Move Secondary Side Bar Views To Panel"),
        original: "Move Secondary Side Bar Views To Panel"
      },
      category: Categories.View,
      f1: false
    });
  }
};
_MoveSidePanelToPanelAction.ID = "workbench.action.moveSidePanelToPanel";
let MoveSidePanelToPanelAction = _MoveSidePanelToPanelAction;
const _MoveSecondarySideBarToPanelAction = class _MoveSecondarySideBarToPanelAction extends MoveViewsBetweenPanelsAction {
  constructor() {
    super(2, 1, {
      id: _MoveSecondarySideBarToPanelAction.ID,
      title: {
        value: localize("moveSidePanelToPanel", "Move Secondary Side Bar Views To Panel"),
        original: "Move Secondary Side Bar Views To Panel"
      },
      category: Categories.View,
      f1: true
    });
  }
};
_MoveSecondarySideBarToPanelAction.ID = "workbench.action.moveSecondarySideBarToPanel";
let MoveSecondarySideBarToPanelAction = _MoveSecondarySideBarToPanelAction;
registerAction2(MoveSidePanelToPanelAction);
registerAction2(MoveSecondarySideBarToPanelAction);
const menubarIcon = registerIcon("menuBar", Codicon.layoutMenubar, localize("menuBarIcon", "Represents the menu bar"));
const activityBarLeftIcon = registerIcon("activity-bar-left", Codicon.layoutActivitybarLeft, localize("activityBarLeft", "Represents the activity bar in the left position"));
const activityBarRightIcon = registerIcon("activity-bar-right", Codicon.layoutActivitybarRight, localize("activityBarRight", "Represents the activity bar in the right position"));
const panelLeftIcon = registerIcon("panel-left", Codicon.layoutSidebarLeft, localize("panelLeft", "Represents a side bar in the left position"));
registerIcon("panel-left-off", Codicon.layoutSidebarLeftOff, localize("panelLeftOff", "Represents a side bar in the left position toggled off"));
const panelRightIcon = registerIcon("panel-right", Codicon.layoutSidebarRight, localize("panelRight", "Represents side bar in the right position"));
registerIcon("panel-right-off", Codicon.layoutSidebarRightOff, localize("panelRightOff", "Represents side bar in the right position toggled off"));
const panelIcon = registerIcon("panel-bottom", Codicon.layoutPanel, localize("panelBottom", "Represents the bottom panel"));
const statusBarIcon = registerIcon("statusBar", Codicon.layoutStatusbar, localize("statusBarIcon", "Represents the status bar"));
const panelAlignmentLeftIcon = registerIcon("panel-align-left", Codicon.layoutPanelLeft, localize("panelBottomLeft", "Represents the bottom panel alignment set to the left"));
const panelAlignmentRightIcon = registerIcon("panel-align-right", Codicon.layoutPanelRight, localize(
  "panelBottomRight",
  "Represents the bottom panel alignment set to the right"
));
const panelAlignmentCenterIcon = registerIcon("panel-align-center", Codicon.layoutPanelCenter, localize(
  "panelBottomCenter",
  "Represents the bottom panel alignment set to the center"
));
const panelAlignmentJustifyIcon = registerIcon("panel-align-justify", Codicon.layoutPanelJustify, localize(
  "panelBottomJustify",
  "Represents the bottom panel alignment set to justified"
));
const fullscreenIcon = registerIcon("fullscreen", Codicon.screenFull, localize("fullScreenIcon", "Represents full screen"));
const centerLayoutIcon = registerIcon("centerLayoutIcon", Codicon.layoutCentered, localize("centerLayoutIcon", "Represents centered layout mode"));
const zenModeIcon = registerIcon("zenMode", Codicon.target, localize("zenModeIcon", "Represents zen mode"));
const _ToggleActivityBarVisibilityAction = class _ToggleActivityBarVisibilityAction extends Action2 {
  constructor() {
    super({
      id: _ToggleActivityBarVisibilityAction.ID,
      title: {
        value: localize("toggleActivityBar", "Toggle Activity Bar Visibility"),
        mnemonicTitle: localize(
          { key: "miActivityBar", comment: ["&& denotes a mnemonic"] },
          "&&Activity Bar"
        ),
        original: "Toggle Activity Bar Visibility"
      },
      category: Categories.View,
      f1: true,
      toggled: ContextKeyExpr.equals("config.workbench.activityBar.visible", true),
      menu: [{
        id: MenuId.MenubarAppearanceMenu,
        group: "2_workbench_layout",
        order: 4
      }]
    });
  }
  run(accessor) {
    const layoutService = accessor.get(IWorkbenchLayoutService);
    const configurationService = accessor.get(IConfigurationService);
    const visibility = layoutService.isVisible("workbench.parts.activitybar");
    const newVisibilityValue = !visibility;
    configurationService.updateValue(_ToggleActivityBarVisibilityAction.activityBarVisibleKey, newVisibilityValue);
  }
};
_ToggleActivityBarVisibilityAction.ID = "workbench.action.toggleActivityBarVisibility";
_ToggleActivityBarVisibilityAction.activityBarVisibleKey = "workbench.activityBar.visible";
let ToggleActivityBarVisibilityAction = _ToggleActivityBarVisibilityAction;
const sidebarPositionConfigurationKey = "workbench.sideBar.location";
class MoveSidebarPositionAction extends Action2 {
  constructor(id, title, position) {
    super({
      id,
      title,
      f1: false
    });
    this.position = position;
  }
  async run(accessor) {
    const layoutService = accessor.get(IWorkbenchLayoutService);
    const configurationService = accessor.get(IConfigurationService);
    const position = layoutService.getSideBarPosition();
    if (position !== this.position) {
      return configurationService.updateValue(sidebarPositionConfigurationKey, positionToString(this.position));
    }
  }
}
const _MoveSidebarRightAction = class _MoveSidebarRightAction extends MoveSidebarPositionAction {
  constructor() {
    super(_MoveSidebarRightAction.ID, {
      value: localize("moveSidebarRight", "Move Primary Side Bar Right"),
      original: "Move Primary Side Bar Right"
    }, 1);
  }
};
_MoveSidebarRightAction.ID = "workbench.action.moveSideBarRight";
let MoveSidebarRightAction = _MoveSidebarRightAction;
const _MoveSidebarLeftAction = class _MoveSidebarLeftAction extends MoveSidebarPositionAction {
  constructor() {
    super(_MoveSidebarLeftAction.ID, {
      value: localize("moveSidebarLeft", "Move Primary Side Bar Left"),
      original: "Move Primary Side Bar Left"
    }, 0);
  }
};
_MoveSidebarLeftAction.ID = "workbench.action.moveSideBarLeft";
let MoveSidebarLeftAction = _MoveSidebarLeftAction;
const _ToggleSidebarPositionAction = class _ToggleSidebarPositionAction extends Action2 {
  static getLabel(layoutService) {
    return layoutService.getSideBarPosition() === 0 ? localize("moveSidebarRight", "Move Primary Side Bar Right") : localize("moveSidebarLeft", "Move Primary Side Bar Left");
  }
  constructor() {
    super({
      id: _ToggleSidebarPositionAction.ID,
      title: { value: localize("toggleSidebarPosition", "Toggle Primary Side Bar Position"), original: "Toggle Primary Side Bar Position" },
      category: Categories.View,
      f1: true
    });
  }
  run(accessor) {
    const layoutService = accessor.get(IWorkbenchLayoutService);
    const configurationService = accessor.get(IConfigurationService);
    const position = layoutService.getSideBarPosition();
    const newPositionValue = position === 0 ? "right" : "left";
    return configurationService.updateValue(sidebarPositionConfigurationKey, newPositionValue);
  }
};
_ToggleSidebarPositionAction.ID = "workbench.action.toggleSidebarPosition";
_ToggleSidebarPositionAction.LABEL = localize("toggleSidebarPosition", "Toggle Primary Side Bar Position");
let ToggleSidebarPositionAction = _ToggleSidebarPositionAction;
registerIcon("configure-layout-icon", Codicon.layout, localize("cofigureLayoutIcon", "Icon represents workbench layout configuration."));
const _ToggleSidebarVisibilityAction = class _ToggleSidebarVisibilityAction extends Action2 {
  constructor() {
    super({
      id: _ToggleSidebarVisibilityAction.ID,
      title: { value: localize("toggleSidebar", "Toggle Primary Side Bar Visibility"), original: "Toggle Primary Side Bar Visibility" },
      toggled: {
        condition: SideBarVisibleContext,
        title: localize("primary sidebar", "Primary Side Bar"),
        mnemonicTitle: localize(
          { key: "primary sidebar mnemonic", comment: ["&& denotes a mnemonic"] },
          "&&Primary Side Bar"
        )
      },
      category: Categories.View,
      f1: true,
      keybinding: {
        weight: 200,
        primary: 2048 | 32
      },
      menu: [
        {
          id: MenuId.LayoutControlMenuSubmenu,
          group: "0_workbench_layout",
          order: 0
        },
        {
          id: MenuId.MenubarAppearanceMenu,
          group: "2_workbench_layout",
          order: 1
        }
      ]
    });
  }
  run(accessor) {
    const layoutService = accessor.get(IWorkbenchLayoutService);
    layoutService.setPartHidden(layoutService.isVisible("workbench.parts.sidebar"), "workbench.parts.sidebar");
  }
};
_ToggleSidebarVisibilityAction.ID = "workbench.action.toggleSidebarVisibility";
let ToggleSidebarVisibilityAction = _ToggleSidebarVisibilityAction;
const _ToggleStatusbarVisibilityAction = class _ToggleStatusbarVisibilityAction extends Action2 {
  constructor() {
    super({
      id: _ToggleStatusbarVisibilityAction.ID,
      title: {
        value: localize("toggleStatusbar", "Toggle Status Bar Visibility"),
        mnemonicTitle: localize({ key: "miStatusbar", comment: ["&& denotes a mnemonic"] }, "S&&tatus Bar"),
        original: "Toggle Status Bar Visibility"
      },
      category: Categories.View,
      f1: true,
      toggled: ContextKeyExpr.equals("config.workbench.statusBar.visible", true),
      menu: [{
        id: MenuId.MenubarAppearanceMenu,
        group: "2_workbench_layout",
        order: 3
      }]
    });
  }
  run(accessor) {
    const layoutService = accessor.get(IWorkbenchLayoutService);
    const configurationService = accessor.get(IConfigurationService);
    const visibility = layoutService.isVisible("workbench.parts.statusbar");
    const newVisibilityValue = !visibility;
    return configurationService.updateValue(_ToggleStatusbarVisibilityAction.statusbarVisibleKey, newVisibilityValue);
  }
};
_ToggleStatusbarVisibilityAction.ID = "workbench.action.toggleStatusbarVisibility";
_ToggleStatusbarVisibilityAction.statusbarVisibleKey = "workbench.statusBar.visible";
let ToggleStatusbarVisibilityAction = _ToggleStatusbarVisibilityAction;
const _ToggleTabsVisibilityAction = class _ToggleTabsVisibilityAction extends Action2 {
  constructor() {
    super({
      id: _ToggleTabsVisibilityAction.ID,
      title: {
        value: localize("toggleTabs", "Toggle Tab Visibility"),
        original: "Toggle Tab Visibility"
      },
      category: Categories.View,
      f1: true
    });
  }
  run(accessor) {
    const configurationService = accessor.get(IConfigurationService);
    const visibility = configurationService.getValue("workbench.editor.showTabs");
    const newVisibilityValue = !visibility;
    return configurationService.updateValue("workbench.editor.showTabs", newVisibilityValue);
  }
};
_ToggleTabsVisibilityAction.ID = "workbench.action.toggleTabsVisibility";
let ToggleTabsVisibilityAction = _ToggleTabsVisibilityAction;
registerAction2(ToggleTabsVisibilityAction);
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: "workbench.action.exitZenMode",
  weight: 100 - 1e3,
  handler(accessor) {
    const layoutService = accessor.get(IWorkbenchLayoutService);
    const contextKeyService = accessor.get(IContextKeyService);
    if (InEditorZenModeContext.getValue(contextKeyService)) {
      layoutService.toggleZenMode();
    }
  },
  when: InEditorZenModeContext,
  primary: KeyChord(9, 9)
});
const _BaseResizeViewAction = class _BaseResizeViewAction extends Action2 {
  resizePart(widthChange, heightChange, layoutService, partToResize) {
    let part;
    if (partToResize === void 0) {
      const isEditorFocus = layoutService.hasFocus("workbench.parts.editor");
      const isSidebarFocus = layoutService.hasFocus("workbench.parts.sidebar");
      const isPanelFocus = layoutService.hasFocus("workbench.parts.panel");
      const isAuxiliaryBarFocus = layoutService.hasFocus("workbench.parts.auxiliarybar");
      if (isSidebarFocus) {
        part = "workbench.parts.sidebar";
      } else if (isPanelFocus) {
        part = "workbench.parts.panel";
      } else if (isEditorFocus) {
        part = "workbench.parts.editor";
      } else if (isAuxiliaryBarFocus) {
        part = "workbench.parts.auxiliarybar";
      }
    } else {
      part = partToResize;
    }
    if (part) {
      layoutService.resizePart(part, widthChange, heightChange);
    }
  }
};
_BaseResizeViewAction.RESIZE_INCREMENT = 60;
let BaseResizeViewAction = _BaseResizeViewAction;
const CreateToggleLayoutItem = (id, active, label, visualIcon) => {
  return {
    id,
    active,
    label,
    visualIcon,
    activeIcon: Codicon.eye,
    inactiveIcon: Codicon.eyeClosed,
    activeAriaLabel: localize("selectToHide", "Select to Hide"),
    inactiveAriaLabel: localize("selectToShow", "Select to Show"),
    useButtons: true
  };
};
const CreateOptionLayoutItem = (id, active, label, visualIcon) => {
  return {
    id,
    active,
    label,
    visualIcon,
    activeIcon: Codicon.check,
    activeAriaLabel: localize("active", "Active"),
    useButtons: false
  };
};
const MenuBarToggledContext = ContextKeyExpr.and(IsMacNativeContext.toNegated(), ContextKeyExpr.notEquals("config.window.menuBarVisibility", "hidden"), ContextKeyExpr.notEquals("config.window.menuBarVisibility", "toggle"), ContextKeyExpr.notEquals("config.window.menuBarVisibility", "compact"));
const ToggleVisibilityActions = [];
if (!isMacintosh || !isNative) {
  ToggleVisibilityActions.push(CreateToggleLayoutItem("workbench.action.toggleMenuBar", MenuBarToggledContext, localize("menuBar", "Menu Bar"), menubarIcon));
}
ToggleVisibilityActions.push(...[
  CreateToggleLayoutItem(ToggleActivityBarVisibilityAction.ID, ContextKeyExpr.equals("config.workbench.activityBar.visible", true), localize("activityBar", "Activity Bar"), { whenA: ContextKeyExpr.equals("config.workbench.sideBar.location", "left"), iconA: activityBarLeftIcon, iconB: activityBarRightIcon }),
  CreateToggleLayoutItem(ToggleSidebarVisibilityAction.ID, SideBarVisibleContext, localize("sideBar", "Primary Side Bar"), { whenA: ContextKeyExpr.equals("config.workbench.sideBar.location", "left"), iconA: panelLeftIcon, iconB: panelRightIcon }),
  CreateToggleLayoutItem(ToggleAuxiliaryBarAction.ID, AuxiliaryBarVisibleContext, localize("secondarySideBar", "Secondary Side Bar"), { whenA: ContextKeyExpr.equals("config.workbench.sideBar.location", "left"), iconA: panelRightIcon, iconB: panelLeftIcon }),
  CreateToggleLayoutItem(TogglePanelAction.ID, PanelVisibleContext, localize("panel", "Panel"), panelIcon),
  CreateToggleLayoutItem(ToggleStatusbarVisibilityAction.ID, ContextKeyExpr.equals("config.workbench.statusBar.visible", true), localize("statusBar", "Status Bar"), statusBarIcon)
]);
const MoveSideBarActions = [
  CreateOptionLayoutItem(MoveSidebarLeftAction.ID, ContextKeyExpr.equals("config.workbench.sideBar.location", "left"), localize("leftSideBar", "Left"), panelLeftIcon),
  CreateOptionLayoutItem(MoveSidebarRightAction.ID, ContextKeyExpr.equals("config.workbench.sideBar.location", "right"), localize("rightSideBar", "Right"), panelRightIcon)
];
const AlignPanelActions = [
  CreateOptionLayoutItem("workbench.action.alignPanelLeft", PanelAlignmentContext.isEqualTo("left"), localize("leftPanel", "Left"), panelAlignmentLeftIcon),
  CreateOptionLayoutItem("workbench.action.alignPanelRight", PanelAlignmentContext.isEqualTo("right"), localize("rightPanel", "Right"), panelAlignmentRightIcon),
  CreateOptionLayoutItem("workbench.action.alignPanelCenter", PanelAlignmentContext.isEqualTo("center"), localize("centerPanel", "Center"), panelAlignmentCenterIcon),
  CreateOptionLayoutItem("workbench.action.alignPanelJustify", PanelAlignmentContext.isEqualTo("justify"), localize("justifyPanel", "Justify"), panelAlignmentJustifyIcon)
];
const MiscLayoutOptions = [
  CreateOptionLayoutItem("workbench.action.toggleFullScreen", IsFullscreenContext, localize("fullscreen", "Full Screen"), fullscreenIcon),
  CreateOptionLayoutItem("workbench.action.toggleZenMode", InEditorZenModeContext, localize("zenMode", "Zen Mode"), zenModeIcon),
  CreateOptionLayoutItem("workbench.action.toggleCenteredLayout", IsCenteredLayoutContext, localize("centeredLayout", "Centered Layout"), centerLayoutIcon)
];
const LayoutContextKeySet = /* @__PURE__ */ new Set();
for (const { active } of [...ToggleVisibilityActions, ...MoveSideBarActions, ...AlignPanelActions, ...MiscLayoutOptions]) {
  for (const key of active.keys()) {
    LayoutContextKeySet.add(key);
  }
}
var css$1 = ".monaco-editor-pane-placeholder{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;gap:10px;justify-content:center;padding:0 16px}.monaco-editor-pane-placeholder:focus{outline:none!important}.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon{font-size:48px}.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-error{color:var(--vscode-editorError-foreground)}.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-warning{color:var(--vscode-editorWarning-foreground)}.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-info,.monaco-editor-pane-placeholder .editor-placeholder-icon-container .codicon.codicon-workspace-untrusted{color:var(--vscode-editorInfo-foreground)}.monaco-editor-pane-placeholder.max-height-200px .editor-placeholder-icon-container{display:none}.monaco-editor-pane-placeholder .editor-placeholder-label-container{font-size:14px;max-width:450px;text-align:center;word-break:break-word}.monaco-editor-pane-placeholder .editor-placeholder-buttons-container{display:flex}.monaco-editor-pane-placeholder .editor-placeholder-buttons-container>.monaco-button{font-size:14px;margin:4px 5px;outline-offset:2px!important;padding:6px 11px;width:fit-content}";
n(css$1, {});
let EditorPlaceholder = (_d = class extends EditorPane {
  constructor(id, telemetryService, themeService, storageService) {
    super(id, telemetryService, themeService, storageService);
    this.inputDisposable = this._register(new MutableDisposable());
  }
  createEditor(parent) {
    this.container = document.createElement("div");
    this.container.className = "monaco-editor-pane-placeholder";
    this.container.style.outline = "none";
    this.container.tabIndex = 0;
    this.scrollbar = this._register(new DomScrollableElement(
      this.container,
      { horizontal: 1, vertical: 1 }
    ));
    parent.appendChild(this.scrollbar.getDomNode());
  }
  async setInput(input, options, context, token) {
    await super.setInput(input, options, context, token);
    if (token.isCancellationRequested) {
      return;
    }
    this.inputDisposable.value = await this.renderInput(input, options);
  }
  async renderInput(input, options) {
    const [container, scrollbar] = assertAllDefined(this.container, this.scrollbar);
    clearNode(container);
    const disposables = new DisposableStore();
    const { icon, label, actions } = await this.getContents(input, options, disposables);
    const truncatedLabel = truncate(label, _d.PLACEHOLDER_LABEL_MAX_LENGTH);
    const iconContainer = container.appendChild($(".editor-placeholder-icon-container"));
    const iconWidget = new SimpleIconLabel(iconContainer);
    iconWidget.text = icon;
    const labelContainer = container.appendChild($(".editor-placeholder-label-container"));
    const labelWidget = document.createElement("span");
    labelWidget.textContent = truncatedLabel;
    labelContainer.appendChild(labelWidget);
    container.setAttribute("aria-label", `${computeEditorAriaLabel(input, void 0, this.group, void 0)}, ${truncatedLabel}`);
    if (actions.length) {
      const actionsContainer = container.appendChild($(".editor-placeholder-buttons-container"));
      const buttons = disposables.add(new ButtonBar(actionsContainer));
      for (let i = 0; i < actions.length; i++) {
        const button = disposables.add(buttons.addButton({
          ...defaultButtonStyles,
          secondary: i !== 0
        }));
        button.label = actions[i].label;
        disposables.add(button.onDidClick((e) => {
          if (e) {
            EventHelper.stop(e, true);
          }
          actions[i].run();
        }));
      }
    }
    scrollbar.scanDomNode();
    return disposables;
  }
  clearInput() {
    if (this.container) {
      clearNode(this.container);
    }
    this.inputDisposable.clear();
    super.clearInput();
  }
  layout(dimension) {
    const [container, scrollbar] = assertAllDefined(this.container, this.scrollbar);
    size(container, dimension.width, dimension.height);
    scrollbar.scanDomNode();
    container.classList.toggle("max-height-200px", dimension.height <= 200);
  }
  focus() {
    const container = assertIsDefined(this.container);
    container.focus();
  }
  dispose() {
    var _a2;
    (_a2 = this.container) == null ? void 0 : _a2.remove();
    super.dispose();
  }
}, _d.PLACEHOLDER_LABEL_MAX_LENGTH = 1024, _d);
EditorPlaceholder = __decorate([
  __param(1, ITelemetryService),
  __param(2, IThemeService),
  __param(3, IStorageService)
], EditorPlaceholder);
let WorkspaceTrustRequiredPlaceholderEditor = (_e = class extends EditorPlaceholder {
  constructor(telemetryService, themeService, commandService, workspaceService, storageService) {
    super(_e.ID, telemetryService, themeService, storageService);
    this.commandService = commandService;
    this.workspaceService = workspaceService;
  }
  getTitle() {
    return _e.LABEL;
  }
  async getContents() {
    return {
      icon: "$(workspace-untrusted)",
      label: isSingleFolderWorkspaceIdentifier(toWorkspaceIdentifier(this.workspaceService.getWorkspace())) ? localize(
        "requiresFolderTrustText",
        "The file is not displayed in the editor because trust has not been granted to the folder."
      ) : localize(
        "requiresWorkspaceTrustText",
        "The file is not displayed in the editor because trust has not been granted to the workspace."
      ),
      actions: [
        {
          label: localize("manageTrust", "Manage Workspace Trust"),
          run: () => this.commandService.executeCommand("workbench.trust.manage")
        }
      ]
    };
  }
}, _e.ID = "workbench.editors.workspaceTrustRequiredEditor", _e.LABEL = localize("trustRequiredEditor", "Workspace Trust Required"), _e.DESCRIPTOR = EditorPaneDescriptor.create(_e, _e.ID, _e.LABEL), _e);
WorkspaceTrustRequiredPlaceholderEditor = __decorate([
  __param(0, ITelemetryService),
  __param(1, IThemeService),
  __param(2, ICommandService),
  __param(3, IWorkspaceContextService),
  __param(4, IStorageService)
], WorkspaceTrustRequiredPlaceholderEditor);
let ErrorPlaceholderEditor = (_f = class extends EditorPlaceholder {
  constructor(telemetryService, themeService, storageService, fileService, dialogService) {
    super(_f.ID, telemetryService, themeService, storageService);
    this.fileService = fileService;
    this.dialogService = dialogService;
  }
  async getContents(input, options, disposables) {
    const resource = input.resource;
    const group = this.group;
    const error = options.error;
    const isFileNotFound = (error == null ? void 0 : error.fileOperationResult) === 1;
    let label;
    if (isFileNotFound) {
      label = localize(
        "unavailableResourceErrorEditorText",
        "The editor could not be opened because the file was not found."
      );
    } else if (isEditorOpenError(error) && error.forceMessage) {
      label = error.message;
    } else if (error) {
      label = localize(
        "unknownErrorEditorTextWithError",
        "The editor could not be opened due to an unexpected error: {0}",
        toErrorMessage(error)
      );
    } else {
      label = localize(
        "unknownErrorEditorTextWithoutError",
        "The editor could not be opened due to an unexpected error."
      );
    }
    let icon = "$(error)";
    if (isEditorOpenError(error)) {
      if (error.forceSeverity === Severity.Info) {
        icon = "$(info)";
      } else if (error.forceSeverity === Severity.Warning) {
        icon = "$(warning)";
      }
    }
    let actions = void 0;
    if (isEditorOpenError(error) && error.actions.length > 0) {
      actions = error.actions.map((action) => {
        return {
          label: action.label,
          run: () => {
            const result = action.run();
            if (result instanceof Promise) {
              result.catch((error2) => this.dialogService.error(toErrorMessage(error2)));
            }
          }
        };
      });
    } else if (group) {
      actions = [
        {
          label: localize("retry", "Try Again"),
          run: () => group.openEditor(input, { ...options, source: EditorOpenSource.USER })
        }
      ];
    }
    if (group && isFileNotFound && resource && this.fileService.hasProvider(resource)) {
      disposables.add(this.fileService.onDidFilesChange((e) => {
        if (e.contains(resource, 1, 0)) {
          group.openEditor(input, options);
        }
      }));
    }
    return { icon, label, actions: actions ?? [] };
  }
}, _f.ID = "workbench.editors.errorEditor", _f.LABEL = localize("errorEditor", "Error Editor"), _f.DESCRIPTOR = EditorPaneDescriptor.create(_f, _f.ID, _f.LABEL), _f);
ErrorPlaceholderEditor = __decorate([
  __param(0, ITelemetryService),
  __param(1, IThemeService),
  __param(2, IStorageService),
  __param(3, IFileService),
  __param(4, IDialogService)
], ErrorPlaceholderEditor);
function findGroup(accessor, editor, preferredGroup) {
  const editorGroupService = accessor.get(IEditorGroupsService);
  const configurationService = accessor.get(IConfigurationService);
  const group = doFindGroup(editor, preferredGroup, editorGroupService, configurationService);
  let activation = void 0;
  if (editorGroupService.activeGroup !== group && editor.options && !editor.options.inactive && editor.options.preserveFocus && typeof editor.options.activation !== "number" && preferredGroup !== SIDE_GROUP) {
    activation = EditorActivation.ACTIVATE;
  }
  return [group, activation];
}
function doFindGroup(input, preferredGroup, editorGroupService, configurationService) {
  let group;
  const editor = isEditorInputWithOptions(input) ? input.editor : input;
  const options = input.options;
  if (preferredGroup && typeof preferredGroup !== "number") {
    group = preferredGroup;
  } else if (typeof preferredGroup === "number" && preferredGroup >= 0) {
    group = editorGroupService.getGroup(preferredGroup);
  } else if (preferredGroup === SIDE_GROUP) {
    const direction = preferredSideBySideGroupDirection(configurationService);
    let candidateGroup = editorGroupService.findGroup({ direction });
    if (!candidateGroup || isGroupLockedForEditor(candidateGroup, editor)) {
      candidateGroup = editorGroupService.addGroup(editorGroupService.activeGroup, direction);
    }
    group = candidateGroup;
  } else if (!options || typeof options.index !== "number") {
    const groupsByLastActive = editorGroupService.getGroups(1);
    if (options == null ? void 0 : options.revealIfVisible) {
      for (const lastActiveGroup of groupsByLastActive) {
        if (isActive(lastActiveGroup, editor)) {
          group = lastActiveGroup;
          break;
        }
      }
    }
    if (!group) {
      if ((options == null ? void 0 : options.revealIfOpened) || configurationService.getValue("workbench.editor.revealIfOpen") || isEditorInput(editor) && editor.hasCapability(8)) {
        let groupWithInputActive = void 0;
        let groupWithInputOpened = void 0;
        for (const group2 of groupsByLastActive) {
          if (isOpened(group2, editor)) {
            if (!groupWithInputOpened) {
              groupWithInputOpened = group2;
            }
            if (!groupWithInputActive && group2.isActive(editor)) {
              groupWithInputActive = group2;
            }
          }
          if (groupWithInputOpened && groupWithInputActive) {
            break;
          }
        }
        group = groupWithInputActive || groupWithInputOpened;
      }
    }
  }
  if (!group) {
    let candidateGroup = editorGroupService.activeGroup;
    if (isGroupLockedForEditor(candidateGroup, editor)) {
      for (const group2 of editorGroupService.getGroups(1)) {
        if (isGroupLockedForEditor(group2, editor)) {
          continue;
        }
        candidateGroup = group2;
        break;
      }
      if (isGroupLockedForEditor(candidateGroup, editor)) {
        group = editorGroupService.addGroup(candidateGroup, preferredSideBySideGroupDirection(configurationService));
      } else {
        group = candidateGroup;
      }
    } else {
      group = candidateGroup;
    }
  }
  return group;
}
function isGroupLockedForEditor(group, editor) {
  if (!group.isLocked) {
    return false;
  }
  if (isOpened(group, editor)) {
    return false;
  }
  return true;
}
function isActive(group, editor) {
  if (!group.activeEditor) {
    return false;
  }
  return group.activeEditor.matches(editor);
}
function isOpened(group, editor) {
  for (const typedEditor of group.editors) {
    if (typedEditor.matches(editor)) {
      return true;
    }
  }
  return false;
}
let BinaryEditorModel = class BinaryEditorModel2 extends EditorModel {
  constructor(resource, name, fileService) {
    super();
    this.resource = resource;
    this.name = name;
    this.fileService = fileService;
    this.mime = Mimes.binary;
  }
  getName() {
    return this.name;
  }
  getSize() {
    return this.size;
  }
  getMime() {
    return this.mime;
  }
  getETag() {
    return this.etag;
  }
  async resolve() {
    if (this.fileService.hasProvider(this.resource)) {
      const stat = await this.fileService.stat(this.resource);
      this.etag = stat.etag;
      if (typeof stat.size === "number") {
        this.size = stat.size;
      }
    }
    return super.resolve();
  }
};
BinaryEditorModel = __decorate([
  __param(2, IFileService)
], BinaryEditorModel);
let BaseBinaryResourceEditor = class BaseBinaryResourceEditor2 extends EditorPlaceholder {
  constructor(id, callbacks, telemetryService, themeService, storageService) {
    super(id, telemetryService, themeService, storageService);
    this.callbacks = callbacks;
    this._onDidChangeMetadata = this._register(new Emitter());
    this.onDidChangeMetadata = this._onDidChangeMetadata.event;
    this._onDidOpenInPlace = this._register(new Emitter());
    this.onDidOpenInPlace = this._onDidOpenInPlace.event;
  }
  getTitle() {
    return this.input ? this.input.getName() : localize("binaryEditor", "Binary Viewer");
  }
  async getContents(input, options) {
    const model = await input.resolve(options);
    if (!(model instanceof BinaryEditorModel)) {
      throw new Error("Unable to open file as binary");
    }
    const size2 = model.getSize();
    this.handleMetadataChanged(typeof size2 === "number" ? ByteSize.formatSize(size2) : "");
    return {
      icon: "$(warning)",
      label: localize(
        "binaryError",
        "The file is not displayed in the text editor because it is either binary or uses an unsupported text encoding."
      ),
      actions: [
        {
          label: localize("openAnyway", "Open Anyway"),
          run: async () => {
            await this.callbacks.openInternal(input, options);
            this._onDidOpenInPlace.fire();
          }
        }
      ]
    };
  }
  handleMetadataChanged(meta) {
    this.metadata = meta;
    this._onDidChangeMetadata.fire();
  }
  getMetadata() {
    return this.metadata;
  }
};
BaseBinaryResourceEditor = __decorate([
  __param(4, IStorageService)
], BaseBinaryResourceEditor);
let BinaryResourceDiffEditor = (_g = class extends SideBySideEditor {
  constructor(telemetryService, instantiationService, themeService, storageService, configurationService, textResourceConfigurationService, editorService, editorGroupService) {
    super(telemetryService, instantiationService, themeService, storageService, configurationService, textResourceConfigurationService, editorService, editorGroupService);
  }
  getMetadata() {
    const primary = this.getPrimaryEditorPane();
    const secondary = this.getSecondaryEditorPane();
    if (primary instanceof BaseBinaryResourceEditor && secondary instanceof BaseBinaryResourceEditor) {
      return localize(
        "metadataDiff",
        "{0} ↔ {1}",
        secondary.getMetadata(),
        primary.getMetadata()
      );
    }
    return void 0;
  }
}, _g.ID = BINARY_DIFF_EDITOR_ID, _g);
BinaryResourceDiffEditor = __decorate([
  __param(0, ITelemetryService),
  __param(1, IInstantiationService),
  __param(2, IThemeService),
  __param(3, IStorageService),
  __param(4, IConfigurationService),
  __param(5, ITextResourceConfigurationService),
  __param(6, IEditorService),
  __param(7, IEditorGroupsService)
], BinaryResourceDiffEditor);
var css = ".monaco-workbench .screen-reader-detected-explanation{cursor:default;padding:1em;right:6px;top:30px;width:420px}.monaco-workbench .screen-reader-detected-explanation .cancel{border:none;cursor:pointer;height:22px;padding:.5em;position:absolute;right:0;top:0;width:22px}.monaco-workbench .screen-reader-detected-explanation h2{font-size:1.8em;font-weight:400;margin:0;padding:0}.monaco-workbench .screen-reader-detected-explanation p{font-size:1.2em}.monaco-workbench .screen-reader-detected-explanation hr{border:0;height:2px}.monaco-workbench .screen-reader-detected-explanation .buttons{display:flex}.monaco-workbench .screen-reader-detected-explanation .buttons a{font-size:13px;margin-right:5px;max-width:fit-content;padding-left:12px;padding-right:12px}";
n(css, {});
const editorTabFocusContextKey = new RawContextKey("editorTabFocusMode", false, true);
let TabFocusMode = class TabFocusMode2 extends Disposable {
  constructor(contextKeyService, configurationService) {
    super();
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this._editorContext = editorTabFocusContextKey.bindTo(contextKeyService);
    this._terminalContext = terminalTabFocusModeContextKey.bindTo(contextKeyService);
    const editorConfig = configurationService.getValue("editor.tabFocusMode");
    const terminalConfig = configurationService.getValue("terminal.integrated.tabFocusMode") ?? editorConfig;
    this._editorContext.set(editorConfig);
    this._terminalContext.set(terminalConfig);
    TabFocus.setTabFocusMode(editorConfig, "editorFocus");
    TabFocus.setTabFocusMode(terminalConfig, "terminalFocus");
    const viewKey = /* @__PURE__ */ new Set();
    viewKey.add("focusedView");
    this._register(contextKeyService.onDidChangeContext((c) => {
      if (c.affectsSome(viewKey)) {
        const terminalFocus = contextKeyService.getContextKeyValue("focusedView") === "terminal";
        const context = terminalFocus ? "terminalFocus" : "editorFocus";
        if (this._previousViewContext === context) {
          return;
        }
        if (terminalFocus) {
          this._editorContext.reset();
        } else {
          this._terminalContext.reset();
        }
        this._previousViewContext = context;
        this._onDidChange.fire();
      }
    }));
    this._register(configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("editor.tabFocusMode")) {
        const editorConfig2 = configurationService.getValue("editor.tabFocusMode");
        TabFocus.setTabFocusMode(editorConfig2, "editorFocus");
        this._editorContext.set(editorConfig2);
        const terminalConfig2 = configurationService.getValue("terminal.integrated.tabFocusMode");
        if (terminalConfig2 === null) {
          configurationService.updateValue("terminal.integrated.tabFocusMode", editorConfig2);
          TabFocus.setTabFocusMode(editorConfig2, "terminalFocus");
          this._terminalContext.set(editorConfig2);
        }
        this._onDidChange.fire();
      } else if (e.affectsConfiguration("terminal.integrated.tabFocusMode")) {
        const terminalConfig2 = configurationService.getValue("terminal.integrated.tabFocusMode") ?? configurationService.getValue("editor.tabFocusMode");
        configurationService.updateValue("terminal.integrated.tabFocusMode", terminalConfig2);
        TabFocus.setTabFocusMode(terminalConfig2, "terminalFocus");
        this._terminalContext.set(terminalConfig2);
        this._onDidChange.fire();
      }
    }));
    TabFocus.onDidChangeTabFocus(() => {
      const focusedView = contextKeyService.getContextKeyValue("focusedView") === "terminal" ? "terminalFocus" : "editorFocus";
      if (focusedView === "terminalFocus") {
        this._terminalContext.set(TabFocus.getTabFocusMode(focusedView));
      } else {
        this._editorContext.set(TabFocus.getTabFocusMode(focusedView));
      }
    });
  }
};
TabFocusMode = __decorate([
  __param(0, IContextKeyService),
  __param(1, IConfigurationService)
], TabFocusMode);
class SideBySideEditorEncodingSupport {
  constructor(primary, secondary) {
    this.primary = primary;
    this.secondary = secondary;
  }
  getEncoding() {
    return this.primary.getEncoding();
  }
  async setEncoding(encoding, mode) {
    await Promises.settled([this.primary, this.secondary].map((editor) => editor.setEncoding(encoding, mode)));
  }
}
class SideBySideEditorLanguageSupport {
  constructor(primary, secondary) {
    this.primary = primary;
    this.secondary = secondary;
  }
  setLanguageId(languageId, source) {
    [this.primary, this.secondary].forEach((editor) => editor.setLanguageId(languageId, source));
  }
}
function toEditorWithEncodingSupport(input) {
  if (input instanceof UntitledTextEditorInput) {
    return input;
  }
  if (input instanceof SideBySideEditorInput) {
    const primaryEncodingSupport = toEditorWithEncodingSupport(input.primary);
    const secondaryEncodingSupport = toEditorWithEncodingSupport(input.secondary);
    if (primaryEncodingSupport && secondaryEncodingSupport) {
      return new SideBySideEditorEncodingSupport(primaryEncodingSupport, secondaryEncodingSupport);
    }
    return primaryEncodingSupport;
  }
  const encodingSupport = input;
  if (areFunctions(encodingSupport.setEncoding, encodingSupport.getEncoding)) {
    return encodingSupport;
  }
  return null;
}
function toEditorWithLanguageSupport(input) {
  if (input instanceof UntitledTextEditorInput) {
    return input;
  }
  if (input instanceof SideBySideEditorInput) {
    const primaryLanguageSupport = toEditorWithLanguageSupport(input.primary);
    const secondaryLanguageSupport = toEditorWithLanguageSupport(input.secondary);
    if (primaryLanguageSupport && secondaryLanguageSupport) {
      return new SideBySideEditorLanguageSupport(primaryLanguageSupport, secondaryLanguageSupport);
    }
    return primaryLanguageSupport;
  }
  const languageSupport = input;
  if (typeof languageSupport.setLanguageId === "function") {
    return languageSupport;
  }
  return null;
}
class StateChange {
  constructor() {
    this.indentation = false;
    this.selectionStatus = false;
    this.languageId = false;
    this.languageStatus = false;
    this.encoding = false;
    this.EOL = false;
    this.tabFocusMode = false;
    this.columnSelectionMode = false;
    this.metadata = false;
  }
  combine(other) {
    this.indentation = this.indentation || other.indentation;
    this.selectionStatus = this.selectionStatus || other.selectionStatus;
    this.languageId = this.languageId || other.languageId;
    this.languageStatus = this.languageStatus || other.languageStatus;
    this.encoding = this.encoding || other.encoding;
    this.EOL = this.EOL || other.EOL;
    this.tabFocusMode = this.tabFocusMode || other.tabFocusMode;
    this.columnSelectionMode = this.columnSelectionMode || other.columnSelectionMode;
    this.metadata = this.metadata || other.metadata;
  }
  hasChanges() {
    return this.indentation || this.selectionStatus || this.languageId || this.languageStatus || this.encoding || this.EOL || this.tabFocusMode || this.columnSelectionMode || this.metadata;
  }
}
class State {
  get selectionStatus() {
    return this._selectionStatus;
  }
  get languageId() {
    return this._languageId;
  }
  get encoding() {
    return this._encoding;
  }
  get EOL() {
    return this._EOL;
  }
  get indentation() {
    return this._indentation;
  }
  get tabFocusMode() {
    return this._tabFocusMode;
  }
  get columnSelectionMode() {
    return this._columnSelectionMode;
  }
  get metadata() {
    return this._metadata;
  }
  update(update) {
    const change = new StateChange();
    switch (update.type) {
      case "selectionStatus":
        if (this._selectionStatus !== update.selectionStatus) {
          this._selectionStatus = update.selectionStatus;
          change.selectionStatus = true;
        }
        break;
      case "indentation":
        if (this._indentation !== update.indentation) {
          this._indentation = update.indentation;
          change.indentation = true;
        }
        break;
      case "languageId":
        if (this._languageId !== update.languageId) {
          this._languageId = update.languageId;
          change.languageId = true;
        }
        break;
      case "encoding":
        if (this._encoding !== update.encoding) {
          this._encoding = update.encoding;
          change.encoding = true;
        }
        break;
      case "EOL":
        if (this._EOL !== update.EOL) {
          this._EOL = update.EOL;
          change.EOL = true;
        }
        break;
      case "tabFocusMode":
        if (this._tabFocusMode !== update.tabFocusMode) {
          this._tabFocusMode = update.tabFocusMode;
          change.tabFocusMode = true;
        }
        break;
      case "columnSelectionMode":
        if (this._columnSelectionMode !== update.columnSelectionMode) {
          this._columnSelectionMode = update.columnSelectionMode;
          change.columnSelectionMode = true;
        }
        break;
      case "metadata":
        if (this._metadata !== update.metadata) {
          this._metadata = update.metadata;
          change.metadata = true;
        }
        break;
    }
    return change;
  }
}
const nlsSingleSelectionRange = localize("singleSelectionRange", "Ln {0}, Col {1} ({2} selected)");
const nlsSingleSelection = localize("singleSelection", "Ln {0}, Col {1}");
const nlsMultiSelectionRange = localize("multiSelectionRange", "{0} selections ({1} characters selected)");
const nlsMultiSelection = localize("multiSelection", "{0} selections");
const nlsEOLLF = localize("endOfLineLineFeed", "LF");
const nlsEOLCRLF = localize("endOfLineCarriageReturnLineFeed", "CRLF");
let EditorStatus = class EditorStatus2 extends Disposable {
  constructor(editorService, quickInputService, languageService, textFileService, statusbarService, instantiationService, contextKeyService) {
    super();
    this.editorService = editorService;
    this.quickInputService = quickInputService;
    this.languageService = languageService;
    this.textFileService = textFileService;
    this.statusbarService = statusbarService;
    this.instantiationService = instantiationService;
    this.contextKeyService = contextKeyService;
    this.tabFocusModeElement = this._register(new MutableDisposable());
    this.columnSelectionModeElement = this._register(new MutableDisposable());
    this.indentationElement = this._register(new MutableDisposable());
    this.selectionElement = this._register(new MutableDisposable());
    this.encodingElement = this._register(new MutableDisposable());
    this.eolElement = this._register(new MutableDisposable());
    this.languageElement = this._register(new MutableDisposable());
    this.metadataElement = this._register(new MutableDisposable());
    this.currentProblemStatus = this._register(this.instantiationService.createInstance(ShowCurrentMarkerInStatusbarContribution));
    this.state = new State();
    this.activeEditorListeners = this._register(new DisposableStore());
    this.delayedRender = this._register(new MutableDisposable());
    this.toRender = null;
    this.tabFocusMode = instantiationService.createInstance(TabFocusMode);
    this.registerCommands();
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.editorService.onDidActiveEditorChange(() => this.updateStatusBar()));
    this._register(this.textFileService.untitled.onDidChangeEncoding((model) => this.onResourceEncodingChange(model.resource)));
    this._register(this.textFileService.files.onDidChangeEncoding((model) => this.onResourceEncodingChange(model.resource)));
    this._register(Event.runAndSubscribe(TabFocus.onDidChangeTabFocus, () => this.onTabFocusModeChange()));
    this._register(this.tabFocusMode.onDidChange(() => this.onTabFocusModeChange()));
  }
  registerCommands() {
    CommandsRegistry.registerCommand({ id: "changeEditorIndentation", handler: () => this.showIndentationPicker() });
  }
  async showIndentationPicker() {
    var _a2;
    const activeTextEditorControl = getCodeEditor(this.editorService.activeTextEditorControl);
    if (!activeTextEditorControl) {
      return this.quickInputService.pick([{ label: localize("noEditor", "No text editor active at this time") }]);
    }
    if ((_a2 = this.editorService.activeEditor) == null ? void 0 : _a2.isReadonly()) {
      return this.quickInputService.pick([{ label: localize("noWritableCodeEditor", "The active code editor is read-only.") }]);
    }
    const picks = [
      assertIsDefined(activeTextEditorControl.getAction(IndentUsingSpaces.ID)),
      assertIsDefined(activeTextEditorControl.getAction(IndentUsingTabs.ID)),
      assertIsDefined(activeTextEditorControl.getAction(ChangeTabDisplaySize.ID)),
      assertIsDefined(activeTextEditorControl.getAction(DetectIndentation.ID)),
      assertIsDefined(activeTextEditorControl.getAction(IndentationToSpacesAction.ID)),
      assertIsDefined(activeTextEditorControl.getAction(IndentationToTabsAction.ID)),
      assertIsDefined(activeTextEditorControl.getAction(TrimTrailingWhitespaceAction.ID))
    ].map((a) => {
      return {
        id: a.id,
        label: a.label,
        detail: Language.isDefaultVariant() || a.label === a.alias ? void 0 : a.alias,
        run: () => {
          activeTextEditorControl.focus();
          a.run();
        }
      };
    });
    picks.splice(3, 0, { type: "separator", label: localize("indentConvert", "convert file") });
    picks.unshift({ type: "separator", label: localize("indentView", "change view") });
    const action = await this.quickInputService.pick(picks, { placeHolder: localize("pickAction", "Select Action"), matchOnDetail: true });
    return action == null ? void 0 : action.run();
  }
  updateTabFocusModeElement(visible) {
    if (visible) {
      if (!this.tabFocusModeElement.value) {
        const text = localize("tabFocusModeEnabled", "Tab Moves Focus");
        this.tabFocusModeElement.value = this.statusbarService.addEntry({
          name: localize("status.editor.tabFocusMode", "Accessibility Mode"),
          text,
          ariaLabel: text,
          tooltip: localize("disableTabMode", "Disable Accessibility Mode"),
          command: "editor.action.toggleTabFocusMode",
          backgroundColor: themeColorFromId(STATUS_BAR_PROMINENT_ITEM_BACKGROUND),
          color: themeColorFromId(STATUS_BAR_PROMINENT_ITEM_FOREGROUND)
        }, "status.editor.tabFocusMode", 1, 100.7);
      }
    } else {
      this.tabFocusModeElement.clear();
    }
  }
  updateColumnSelectionModeElement(visible) {
    if (visible) {
      if (!this.columnSelectionModeElement.value) {
        const text = localize("columnSelectionModeEnabled", "Column Selection");
        this.columnSelectionModeElement.value = this.statusbarService.addEntry({
          name: localize("status.editor.columnSelectionMode", "Column Selection Mode"),
          text,
          ariaLabel: text,
          tooltip: localize("disableColumnSelectionMode", "Disable Column Selection Mode"),
          command: "editor.action.toggleColumnSelection",
          backgroundColor: themeColorFromId(STATUS_BAR_PROMINENT_ITEM_BACKGROUND),
          color: themeColorFromId(STATUS_BAR_PROMINENT_ITEM_FOREGROUND)
        }, "status.editor.columnSelectionMode", 1, 100.8);
      }
    } else {
      this.columnSelectionModeElement.clear();
    }
  }
  updateSelectionElement(text) {
    if (!text) {
      this.selectionElement.clear();
      return;
    }
    const props = {
      name: localize("status.editor.selection", "Editor Selection"),
      text,
      ariaLabel: text,
      tooltip: localize("gotoLine", "Go to Line/Column"),
      command: "workbench.action.gotoLine"
    };
    this.updateElement(this.selectionElement, props, "status.editor.selection", 1, 100.5);
  }
  updateIndentationElement(text) {
    if (!text) {
      this.indentationElement.clear();
      return;
    }
    const props = {
      name: localize("status.editor.indentation", "Editor Indentation"),
      text,
      ariaLabel: text,
      tooltip: localize("selectIndentation", "Select Indentation"),
      command: "changeEditorIndentation"
    };
    this.updateElement(this.indentationElement, props, "status.editor.indentation", 1, 100.4);
  }
  updateEncodingElement(text) {
    if (!text) {
      this.encodingElement.clear();
      return;
    }
    const props = {
      name: localize("status.editor.encoding", "Editor Encoding"),
      text,
      ariaLabel: text,
      tooltip: localize("selectEncoding", "Select Encoding"),
      command: "workbench.action.editor.changeEncoding"
    };
    this.updateElement(this.encodingElement, props, "status.editor.encoding", 1, 100.3);
  }
  updateEOLElement(text) {
    if (!text) {
      this.eolElement.clear();
      return;
    }
    const props = {
      name: localize("status.editor.eol", "Editor End of Line"),
      text,
      ariaLabel: text,
      tooltip: localize("selectEOL", "Select End of Line Sequence"),
      command: "workbench.action.editor.changeEOL"
    };
    this.updateElement(this.eolElement, props, "status.editor.eol", 1, 100.2);
  }
  updateLanguageIdElement(text) {
    if (!text) {
      this.languageElement.clear();
      return;
    }
    const props = {
      name: localize("status.editor.mode", "Editor Language"),
      text,
      ariaLabel: text,
      tooltip: localize("selectLanguageMode", "Select Language Mode"),
      command: "workbench.action.editor.changeLanguageMode"
    };
    this.updateElement(this.languageElement, props, "status.editor.mode", 1, 100.1);
  }
  updateMetadataElement(text) {
    if (!text) {
      this.metadataElement.clear();
      return;
    }
    const props = {
      name: localize("status.editor.info", "File Information"),
      text,
      ariaLabel: text,
      tooltip: localize("fileInfo", "File Information")
    };
    this.updateElement(this.metadataElement, props, "status.editor.info", 1, 100);
  }
  updateElement(element, props, id, alignment, priority) {
    if (!element.value) {
      element.value = this.statusbarService.addEntry(props, id, alignment, priority);
    } else {
      element.value.update(props);
    }
  }
  updateState(update) {
    const changed = this.state.update(update);
    if (!changed.hasChanges()) {
      return;
    }
    if (!this.toRender) {
      this.toRender = changed;
      this.delayedRender.value = runAtThisOrScheduleAtNextAnimationFrame(() => {
        this.delayedRender.clear();
        const toRender = this.toRender;
        this.toRender = null;
        if (toRender) {
          this.doRenderNow(toRender);
        }
      });
    } else {
      this.toRender.combine(changed);
    }
  }
  doRenderNow(changed) {
    this.updateTabFocusModeElement(!!this.state.tabFocusMode);
    this.updateColumnSelectionModeElement(!!this.state.columnSelectionMode);
    this.updateIndentationElement(this.state.indentation);
    this.updateSelectionElement(this.state.selectionStatus);
    this.updateEncodingElement(this.state.encoding);
    this.updateEOLElement(this.state.EOL ? this.state.EOL === "\r\n" ? nlsEOLCRLF : nlsEOLLF : void 0);
    this.updateLanguageIdElement(this.state.languageId);
    this.updateMetadataElement(this.state.metadata);
  }
  getSelectionLabel(info) {
    if (!info || !info.selections) {
      return void 0;
    }
    if (info.selections.length === 1) {
      if (info.charactersSelected) {
        return format(nlsSingleSelectionRange, info.selections[0].positionLineNumber, info.selections[0].positionColumn, info.charactersSelected);
      }
      return format(nlsSingleSelection, info.selections[0].positionLineNumber, info.selections[0].positionColumn);
    }
    if (info.charactersSelected) {
      return format(nlsMultiSelectionRange, info.selections.length, info.charactersSelected);
    }
    if (info.selections.length > 0) {
      return format(nlsMultiSelection, info.selections.length);
    }
    return void 0;
  }
  updateStatusBar() {
    const activeInput = this.editorService.activeEditor;
    const activeEditorPane = this.editorService.activeEditorPane;
    const activeCodeEditor = activeEditorPane ? withNullAsUndefined(getCodeEditor(activeEditorPane.getControl())) : void 0;
    this.onColumnSelectionModeChange(activeCodeEditor);
    this.onSelectionChange(activeCodeEditor);
    this.onLanguageChange(activeCodeEditor, activeInput);
    this.onEOLChange(activeCodeEditor);
    this.onEncodingChange(activeEditorPane, activeCodeEditor);
    this.onIndentationChange(activeCodeEditor);
    this.onMetadataChange(activeEditorPane);
    this.currentProblemStatus.update(activeCodeEditor);
    this.activeEditorListeners.clear();
    if (activeEditorPane) {
      this.activeEditorListeners.add(activeEditorPane.onDidChangeControl(() => {
        this.updateStatusBar();
      }));
    }
    if (activeCodeEditor) {
      this.activeEditorListeners.add(activeCodeEditor.onDidChangeConfiguration((event) => {
        if (event.hasChanged(21)) {
          this.onColumnSelectionModeChange(activeCodeEditor);
        }
      }));
      this.activeEditorListeners.add(Event.defer(activeCodeEditor.onDidChangeCursorPosition)(() => {
        this.onSelectionChange(activeCodeEditor);
        this.currentProblemStatus.update(activeCodeEditor);
      }));
      this.activeEditorListeners.add(activeCodeEditor.onDidChangeModelLanguage(() => {
        this.onLanguageChange(activeCodeEditor, activeInput);
      }));
      this.activeEditorListeners.add(Event.accumulate(activeCodeEditor.onDidChangeModelContent)((e) => {
        this.onEOLChange(activeCodeEditor);
        this.currentProblemStatus.update(activeCodeEditor);
        const selections = activeCodeEditor.getSelections();
        if (selections) {
          for (const inner of e) {
            for (const change of inner.changes) {
              if (selections.some((selection) => Range.areIntersecting(selection, change.range))) {
                this.onSelectionChange(activeCodeEditor);
                break;
              }
            }
          }
        }
      }));
      this.activeEditorListeners.add(activeCodeEditor.onDidChangeModelOptions(() => {
        this.onIndentationChange(activeCodeEditor);
      }));
    } else if (activeEditorPane instanceof BaseBinaryResourceEditor || activeEditorPane instanceof BinaryResourceDiffEditor) {
      const binaryEditors = [];
      if (activeEditorPane instanceof BinaryResourceDiffEditor) {
        const primary = activeEditorPane.getPrimaryEditorPane();
        if (primary instanceof BaseBinaryResourceEditor) {
          binaryEditors.push(primary);
        }
        const secondary = activeEditorPane.getSecondaryEditorPane();
        if (secondary instanceof BaseBinaryResourceEditor) {
          binaryEditors.push(secondary);
        }
      } else {
        binaryEditors.push(activeEditorPane);
      }
      for (const editor of binaryEditors) {
        this.activeEditorListeners.add(editor.onDidChangeMetadata(() => {
          this.onMetadataChange(activeEditorPane);
        }));
        this.activeEditorListeners.add(editor.onDidOpenInPlace(() => {
          this.updateStatusBar();
        }));
      }
    }
  }
  onLanguageChange(editorWidget, editorInput) {
    const info = { type: "languageId", languageId: void 0 };
    if (editorWidget && editorInput && toEditorWithLanguageSupport(editorInput)) {
      const textModel = editorWidget.getModel();
      if (textModel) {
        const languageId = textModel.getLanguageId();
        info.languageId = withNullAsUndefined(this.languageService.getLanguageName(languageId));
      }
    }
    this.updateState(info);
  }
  onIndentationChange(editorWidget) {
    const update = { type: "indentation", indentation: void 0 };
    if (editorWidget) {
      const model = editorWidget.getModel();
      if (model) {
        const modelOpts = model.getOptions();
        update.indentation = modelOpts.insertSpaces ? modelOpts.tabSize === modelOpts.indentSize ? localize("spacesSize", "Spaces: {0}", modelOpts.indentSize) : localize(
          "spacesAndTabsSize",
          "Spaces: {0} (Tab Size: {1})",
          modelOpts.indentSize,
          modelOpts.tabSize
        ) : localize(
          { key: "tabSize", comment: ["Tab corresponds to the tab key"] },
          "Tab Size: {0}",
          modelOpts.tabSize
        );
      }
    }
    this.updateState(update);
  }
  onMetadataChange(editor) {
    const update = { type: "metadata", metadata: void 0 };
    if (editor instanceof BaseBinaryResourceEditor || editor instanceof BinaryResourceDiffEditor) {
      update.metadata = editor.getMetadata();
    }
    this.updateState(update);
  }
  onColumnSelectionModeChange(editorWidget) {
    const info = { type: "columnSelectionMode", columnSelectionMode: false };
    if (editorWidget == null ? void 0 : editorWidget.getOption(21)) {
      info.columnSelectionMode = true;
    }
    this.updateState(info);
  }
  onSelectionChange(editorWidget) {
    const info = /* @__PURE__ */ Object.create(null);
    if (editorWidget) {
      info.selections = editorWidget.getSelections() || [];
      info.charactersSelected = 0;
      const textModel = editorWidget.getModel();
      if (textModel) {
        for (const selection of info.selections) {
          if (typeof info.charactersSelected !== "number") {
            info.charactersSelected = 0;
          }
          info.charactersSelected += textModel.getCharacterCountInRange(selection);
        }
      }
      if (info.selections.length === 1) {
        const editorPosition = editorWidget.getPosition();
        const selectionClone = new Selection(
          info.selections[0].selectionStartLineNumber,
          info.selections[0].selectionStartColumn,
          info.selections[0].positionLineNumber,
          editorPosition ? editorWidget.getStatusbarColumn(editorPosition) : info.selections[0].positionColumn
        );
        info.selections[0] = selectionClone;
      }
    }
    this.updateState({ type: "selectionStatus", selectionStatus: this.getSelectionLabel(info) });
  }
  onEOLChange(editorWidget) {
    const info = { type: "EOL", EOL: void 0 };
    if (editorWidget && !editorWidget.getOption(89)) {
      const codeEditorModel = editorWidget.getModel();
      if (codeEditorModel) {
        info.EOL = codeEditorModel.getEOL();
      }
    }
    this.updateState(info);
  }
  onEncodingChange(editor, editorWidget) {
    if (editor && !this.isActiveEditor(editor)) {
      return;
    }
    const info = { type: "encoding", encoding: void 0 };
    if (editor && (editorWidget == null ? void 0 : editorWidget.hasModel())) {
      const encodingSupport = editor.input ? toEditorWithEncodingSupport(editor.input) : null;
      if (encodingSupport) {
        const rawEncoding = encodingSupport.getEncoding();
        const encodingInfo = typeof rawEncoding === "string" ? SUPPORTED_ENCODINGS[rawEncoding] : void 0;
        if (encodingInfo) {
          info.encoding = encodingInfo.labelShort;
        } else {
          info.encoding = rawEncoding;
        }
      }
    }
    this.updateState(info);
  }
  onResourceEncodingChange(resource) {
    const activeEditorPane = this.editorService.activeEditorPane;
    if (activeEditorPane) {
      const activeResource = EditorResourceAccessor.getCanonicalUri(activeEditorPane.input, { supportSideBySide: SideBySideEditor$1.PRIMARY });
      if (activeResource && isEqual(activeResource, resource)) {
        const activeCodeEditor = withNullAsUndefined(getCodeEditor(activeEditorPane.getControl()));
        return this.onEncodingChange(activeEditorPane, activeCodeEditor);
      }
    }
  }
  onTabFocusModeChange() {
    const info = { type: "tabFocusMode", tabFocusMode: TabFocus.getTabFocusMode(this.contextKeyService.getContextKeyValue("focusedView") === "terminal" ? "terminalFocus" : "editorFocus") };
    this.updateState(info);
  }
  isActiveEditor(control) {
    const activeEditorPane = this.editorService.activeEditorPane;
    return !!activeEditorPane && activeEditorPane === control;
  }
};
EditorStatus = __decorate([
  __param(0, IEditorService),
  __param(1, IQuickInputService),
  __param(2, ILanguageService),
  __param(3, ITextFileService),
  __param(4, IStatusbarService),
  __param(5, IInstantiationService),
  __param(6, IContextKeyService)
], EditorStatus);
let ShowCurrentMarkerInStatusbarContribution = class ShowCurrentMarkerInStatusbarContribution2 extends Disposable {
  constructor(statusbarService, markerService, configurationService) {
    super();
    this.statusbarService = statusbarService;
    this.markerService = markerService;
    this.configurationService = configurationService;
    this.editor = void 0;
    this.markers = [];
    this.currentMarker = null;
    this.statusBarEntryAccessor = this._register(new MutableDisposable());
    this._register(markerService.onMarkerChanged((changedResources) => this.onMarkerChanged(changedResources)));
    this._register(Event.filter(configurationService.onDidChangeConfiguration, (e) => e.affectsConfiguration("problems.showCurrentInStatus"))(() => this.updateStatus()));
  }
  update(editor) {
    this.editor = editor;
    this.updateMarkers();
    this.updateStatus();
  }
  updateStatus() {
    const previousMarker = this.currentMarker;
    this.currentMarker = this.getMarker();
    if (this.hasToUpdateStatus(previousMarker, this.currentMarker)) {
      if (this.currentMarker) {
        const line = splitLines(this.currentMarker.message)[0];
        const text = `${this.getType(this.currentMarker)} ${line}`;
        if (!this.statusBarEntryAccessor.value) {
          this.statusBarEntryAccessor.value = this.statusbarService.addEntry({ name: localize("currentProblem", "Current Problem"), text: "", ariaLabel: "" }, "statusbar.currentProblem", 0);
        }
        this.statusBarEntryAccessor.value.update({ name: localize("currentProblem", "Current Problem"), text, ariaLabel: text });
      } else {
        this.statusBarEntryAccessor.clear();
      }
    }
  }
  hasToUpdateStatus(previousMarker, currentMarker) {
    if (!currentMarker) {
      return true;
    }
    if (!previousMarker) {
      return true;
    }
    return IMarkerData.makeKey(previousMarker) !== IMarkerData.makeKey(currentMarker);
  }
  getType(marker) {
    switch (marker.severity) {
      case MarkerSeverity.Error:
        return "$(error)";
      case MarkerSeverity.Warning:
        return "$(warning)";
      case MarkerSeverity.Info:
        return "$(info)";
    }
    return "";
  }
  getMarker() {
    if (!this.configurationService.getValue("problems.showCurrentInStatus")) {
      return null;
    }
    if (!this.editor) {
      return null;
    }
    const model = this.editor.getModel();
    if (!model) {
      return null;
    }
    const position = this.editor.getPosition();
    if (!position) {
      return null;
    }
    return this.markers.find((marker) => Range.containsPosition(marker, position)) || null;
  }
  onMarkerChanged(changedResources) {
    if (!this.editor) {
      return;
    }
    const model = this.editor.getModel();
    if (!model) {
      return;
    }
    if (model && !changedResources.some((r) => isEqual(model.uri, r))) {
      return;
    }
    this.updateMarkers();
  }
  updateMarkers() {
    if (!this.editor) {
      return;
    }
    const model = this.editor.getModel();
    if (!model) {
      return;
    }
    if (model) {
      this.markers = this.markerService.read({
        resource: model.uri,
        severities: MarkerSeverity.Error | MarkerSeverity.Warning | MarkerSeverity.Info
      });
      this.markers.sort(compareMarker);
    } else {
      this.markers = [];
    }
    this.updateStatus();
  }
};
ShowCurrentMarkerInStatusbarContribution = __decorate([
  __param(0, IStatusbarService),
  __param(1, IMarkerService),
  __param(2, IConfigurationService)
], ShowCurrentMarkerInStatusbarContribution);
function compareMarker(a, b) {
  let res = compare(a.resource.toString(), b.resource.toString());
  if (res === 0) {
    res = MarkerSeverity.compare(a.severity, b.severity);
  }
  if (res === 0) {
    res = Range.compareRangesUsingStarts(a, b);
  }
  return res;
}
let ShowLanguageExtensionsAction = (_h = class extends Action {
  constructor(fileExtension, commandService, galleryService) {
    super(_h.ID, localize(
      "showLanguageExtensions",
      "Search Marketplace Extensions for '{0}'...",
      fileExtension
    ));
    this.fileExtension = fileExtension;
    this.commandService = commandService;
    this.enabled = galleryService.isEnabled();
  }
  async run() {
    await this.commandService.executeCommand("workbench.extensions.action.showExtensionsForLanguage", this.fileExtension);
  }
}, _h.ID = "workbench.action.showLanguageExtensions", _h);
ShowLanguageExtensionsAction = __decorate([
  __param(1, ICommandService),
  __param(2, IExtensionGalleryService)
], ShowLanguageExtensionsAction);
const _ChangeLanguageAction = class _ChangeLanguageAction extends Action2 {
  constructor() {
    super({
      id: _ChangeLanguageAction.ID,
      title: { value: localize("changeMode", "Change Language Mode"), original: "Change Language Mode" },
      f1: true,
      keybinding: {
        weight: 200,
        primary: KeyChord(2048 | 41, 43)
      },
      precondition: ContextKeyExpr.not("notebookEditorFocused")
    });
  }
  async run(accessor) {
    var _a2;
    const quickInputService = accessor.get(IQuickInputService);
    const editorService = accessor.get(IEditorService);
    const languageService = accessor.get(ILanguageService);
    const languageDetectionService = accessor.get(ILanguageDetectionService);
    const textFileService = accessor.get(ITextFileService);
    const preferencesService = accessor.get(IPreferencesService);
    const instantiationService = accessor.get(IInstantiationService);
    const configurationService = accessor.get(IConfigurationService);
    const telemetryService = accessor.get(ITelemetryService);
    const activeTextEditorControl = getCodeEditor(editorService.activeTextEditorControl);
    if (!activeTextEditorControl) {
      await quickInputService.pick([{ label: localize("noEditor", "No text editor active at this time") }]);
      return;
    }
    const textModel = activeTextEditorControl.getModel();
    const resource = EditorResourceAccessor.getOriginalUri(editorService.activeEditor, { supportSideBySide: SideBySideEditor$1.PRIMARY });
    let currentLanguageName;
    let currentLanguageId;
    if (textModel) {
      currentLanguageId = textModel.getLanguageId();
      currentLanguageName = withNullAsUndefined(languageService.getLanguageName(currentLanguageId));
    }
    let hasLanguageSupport = !!resource;
    if ((resource == null ? void 0 : resource.scheme) === Schemas.untitled && !((_a2 = textFileService.untitled.get(resource)) == null ? void 0 : _a2.hasAssociatedFilePath)) {
      hasLanguageSupport = false;
    }
    const languages = languageService.getSortedRegisteredLanguageNames();
    const picks = languages.map(({ languageName, languageId }) => {
      const extensions = languageService.getExtensions(languageId).join(" ");
      let description;
      if (currentLanguageName === languageName) {
        description = localize("languageDescription", "({0}) - Configured Language", languageId);
      } else {
        description = localize("languageDescriptionConfigured", "({0})", languageId);
      }
      return {
        label: languageName,
        meta: extensions,
        iconClasses: getIconClassesForLanguageId(languageId),
        description
      };
    });
    picks.unshift({ type: "separator", label: localize("languagesPicks", "languages (identifier)") });
    let configureLanguageAssociations;
    let configureLanguageSettings;
    let galleryAction;
    if (hasLanguageSupport && resource) {
      const ext = extname(resource) || basename(resource);
      galleryAction = instantiationService.createInstance(ShowLanguageExtensionsAction, ext);
      if (galleryAction.enabled) {
        picks.unshift(galleryAction);
      }
      configureLanguageSettings = { label: localize(
        "configureModeSettings",
        "Configure '{0}' language based settings...",
        currentLanguageName
      ) };
      picks.unshift(configureLanguageSettings);
      configureLanguageAssociations = { label: localize("configureAssociationsExt", "Configure File Association for '{0}'...", ext) };
      picks.unshift(configureLanguageAssociations);
    }
    const autoDetectLanguage = {
      label: localize("autoDetect", "Auto Detect")
    };
    picks.unshift(autoDetectLanguage);
    const pick = await quickInputService.pick(picks, { placeHolder: localize("pickLanguage", "Select Language Mode"), matchOnDescription: true });
    if (!pick) {
      return;
    }
    if (pick === galleryAction) {
      galleryAction.run();
      return;
    }
    if (pick === configureLanguageAssociations) {
      if (resource) {
        this.configureFileAssociation(resource, languageService, quickInputService, configurationService);
      }
      return;
    }
    if (pick === configureLanguageSettings) {
      preferencesService.openUserSettings({ jsonEditor: true, revealSetting: { key: `[${withUndefinedAsNull(currentLanguageId)}]`, edit: true } });
      return;
    }
    const activeEditor = editorService.activeEditor;
    if (activeEditor) {
      const languageSupport = toEditorWithLanguageSupport(activeEditor);
      if (languageSupport) {
        let languageSelection;
        let detectedLanguage;
        if (pick === autoDetectLanguage) {
          if (textModel) {
            const resource2 = EditorResourceAccessor.getOriginalUri(activeEditor, { supportSideBySide: SideBySideEditor$1.PRIMARY });
            if (resource2) {
              let languageId = withNullAsUndefined(languageService.guessLanguageIdByFilepathOrFirstLine(resource2, textModel.getLineContent(1)));
              if (!languageId || languageId === "unknown") {
                detectedLanguage = await languageDetectionService.detectLanguage(resource2);
                languageId = detectedLanguage;
              }
              if (languageId) {
                languageSelection = languageService.createById(languageId);
              }
            }
          }
        } else {
          const languageId = languageService.getLanguageIdByLanguageName(pick.label);
          languageSelection = languageService.createById(languageId);
          if (resource) {
            languageDetectionService.detectLanguage(resource).then((detectedLanguageId) => {
              const chosenLanguageId = languageService.getLanguageIdByLanguageName(pick.label) || "unknown";
              if (detectedLanguageId === currentLanguageId && currentLanguageId !== chosenLanguageId) {
                const modelPreference = configurationService.getValue("workbench.editor.preferHistoryBasedLanguageDetection") ? "history" : "classic";
                telemetryService.publicLog2(AutomaticLanguageDetectionLikelyWrongId, {
                  currentLanguageId: currentLanguageName ?? "unknown",
                  nextLanguageId: pick.label,
                  lineCount: (textModel == null ? void 0 : textModel.getLineCount()) ?? -1,
                  modelPreference
                });
              }
            });
          }
        }
        if (typeof languageSelection !== "undefined") {
          languageSupport.setLanguageId(languageSelection.languageId, _ChangeLanguageAction.ID);
          if ((resource == null ? void 0 : resource.scheme) === Schemas.untitled) {
            const modelPreference = configurationService.getValue("workbench.editor.preferHistoryBasedLanguageDetection") ? "history" : "classic";
            telemetryService.publicLog2("setUntitledDocumentLanguage", {
              to: languageSelection.languageId,
              from: currentLanguageId ?? "none",
              modelPreference
            });
          }
        }
      }
      activeTextEditorControl.focus();
    }
  }
  configureFileAssociation(resource, languageService, quickInputService, configurationService) {
    const extension = extname(resource);
    const base = basename(resource);
    const currentAssociation = languageService.guessLanguageIdByFilepathOrFirstLine(URI.file(base));
    const languages = languageService.getSortedRegisteredLanguageNames();
    const picks = languages.map(({ languageName, languageId }) => {
      return {
        id: languageId,
        label: languageName,
        iconClasses: getIconClassesForLanguageId(languageId),
        description: languageId === currentAssociation ? localize("currentAssociation", "Current Association") : void 0
      };
    });
    setTimeout(async () => {
      const language = await quickInputService.pick(picks, { placeHolder: localize(
        "pickLanguageToConfigure",
        "Select Language Mode to Associate with '{0}'",
        extension || base
      ) });
      if (language) {
        const fileAssociationsConfig = configurationService.inspect(FILES_ASSOCIATIONS_CONFIG);
        let associationKey;
        if (extension && base[0] !== ".") {
          associationKey = `*${extension}`;
        } else {
          associationKey = base;
        }
        let target = 2;
        if (fileAssociationsConfig.workspaceValue && !!fileAssociationsConfig.workspaceValue[associationKey]) {
          target = 5;
        }
        const currentAssociations = deepClone(target === 5 ? fileAssociationsConfig.workspaceValue : fileAssociationsConfig.userValue) || /* @__PURE__ */ Object.create(null);
        currentAssociations[associationKey] = language.id;
        configurationService.updateValue(FILES_ASSOCIATIONS_CONFIG, currentAssociations, target);
      }
    }, 50);
  }
};
_ChangeLanguageAction.ID = "workbench.action.editor.changeLanguageMode";
let ChangeLanguageAction = _ChangeLanguageAction;
class ChangeEOLAction extends Action2 {
  constructor() {
    super({
      id: "workbench.action.editor.changeEOL",
      title: { value: localize("changeEndOfLine", "Change End of Line Sequence"), original: "Change End of Line Sequence" },
      f1: true
    });
  }
  async run(accessor) {
    var _a2, _b2;
    const editorService = accessor.get(IEditorService);
    const quickInputService = accessor.get(IQuickInputService);
    const activeTextEditorControl = getCodeEditor(editorService.activeTextEditorControl);
    if (!activeTextEditorControl) {
      await quickInputService.pick([{ label: localize("noEditor", "No text editor active at this time") }]);
      return;
    }
    if ((_a2 = editorService.activeEditor) == null ? void 0 : _a2.isReadonly()) {
      await quickInputService.pick([{ label: localize("noWritableCodeEditor", "The active code editor is read-only.") }]);
      return;
    }
    let textModel = activeTextEditorControl.getModel();
    const EOLOptions = [
      { label: nlsEOLLF, eol: 0 },
      { label: nlsEOLCRLF, eol: 1 }
    ];
    const selectedIndex = (textModel == null ? void 0 : textModel.getEOL()) === "\n" ? 0 : 1;
    const eol = await quickInputService.pick(EOLOptions, { placeHolder: localize("pickEndOfLine", "Select End of Line Sequence"), activeItem: EOLOptions[selectedIndex] });
    if (eol) {
      const activeCodeEditor = getCodeEditor(editorService.activeTextEditorControl);
      if ((activeCodeEditor == null ? void 0 : activeCodeEditor.hasModel()) && !((_b2 = editorService.activeEditor) == null ? void 0 : _b2.isReadonly())) {
        textModel = activeCodeEditor.getModel();
        textModel.pushStackElement();
        textModel.pushEOL(eol.eol);
        textModel.pushStackElement();
      }
    }
    activeTextEditorControl.focus();
  }
}
class ChangeEncodingAction extends Action2 {
  constructor() {
    super({
      id: "workbench.action.editor.changeEncoding",
      title: { value: localize("changeEncoding", "Change File Encoding"), original: "Change File Encoding" },
      f1: true
    });
  }
  async run(accessor) {
    const editorService = accessor.get(IEditorService);
    const quickInputService = accessor.get(IQuickInputService);
    const fileService = accessor.get(IFileService);
    const textFileService = accessor.get(ITextFileService);
    const textResourceConfigurationService = accessor.get(ITextResourceConfigurationService);
    const activeTextEditorControl = getCodeEditor(editorService.activeTextEditorControl);
    if (!activeTextEditorControl) {
      await quickInputService.pick([{ label: localize("noEditor", "No text editor active at this time") }]);
      return;
    }
    const activeEditorPane = editorService.activeEditorPane;
    if (!activeEditorPane) {
      await quickInputService.pick([{ label: localize("noEditor", "No text editor active at this time") }]);
      return;
    }
    const encodingSupport = toEditorWithEncodingSupport(activeEditorPane.input);
    if (!encodingSupport) {
      await quickInputService.pick([{ label: localize("noFileEditor", "No file active at this time") }]);
      return;
    }
    const saveWithEncodingPick = { label: localize("saveWithEncoding", "Save with Encoding") };
    const reopenWithEncodingPick = { label: localize("reopenWithEncoding", "Reopen with Encoding") };
    if (!Language.isDefaultVariant()) {
      const saveWithEncodingAlias = "Save with Encoding";
      if (saveWithEncodingAlias !== saveWithEncodingPick.label) {
        saveWithEncodingPick.detail = saveWithEncodingAlias;
      }
      const reopenWithEncodingAlias = "Reopen with Encoding";
      if (reopenWithEncodingAlias !== reopenWithEncodingPick.label) {
        reopenWithEncodingPick.detail = reopenWithEncodingAlias;
      }
    }
    let action;
    if (encodingSupport instanceof UntitledTextEditorInput) {
      action = saveWithEncodingPick;
    } else if (activeEditorPane.input.isReadonly()) {
      action = reopenWithEncodingPick;
    } else {
      action = await quickInputService.pick([reopenWithEncodingPick, saveWithEncodingPick], { placeHolder: localize("pickAction", "Select Action"), matchOnDetail: true });
    }
    if (!action) {
      return;
    }
    await timeout(50);
    const resource = EditorResourceAccessor.getOriginalUri(activeEditorPane.input, { supportSideBySide: SideBySideEditor$1.PRIMARY });
    if (!resource || !fileService.hasProvider(resource) && resource.scheme !== Schemas.untitled) {
      return;
    }
    let guessedEncoding = void 0;
    if (fileService.hasProvider(resource)) {
      const content = await textFileService.readStream(resource, { autoGuessEncoding: true });
      guessedEncoding = content.encoding;
    }
    const isReopenWithEncoding = action === reopenWithEncodingPick;
    const configuredEncoding = textResourceConfigurationService.getValue(withNullAsUndefined(resource), "files.encoding");
    let directMatchIndex;
    let aliasMatchIndex;
    const picks = Object.keys(SUPPORTED_ENCODINGS).sort((k1, k2) => {
      if (k1 === configuredEncoding) {
        return -1;
      } else if (k2 === configuredEncoding) {
        return 1;
      }
      return SUPPORTED_ENCODINGS[k1].order - SUPPORTED_ENCODINGS[k2].order;
    }).filter((k) => {
      if (k === guessedEncoding && guessedEncoding !== configuredEncoding) {
        return false;
      }
      return !isReopenWithEncoding || !SUPPORTED_ENCODINGS[k].encodeOnly;
    }).map((key, index) => {
      if (key === encodingSupport.getEncoding()) {
        directMatchIndex = index;
      } else if (SUPPORTED_ENCODINGS[key].alias === encodingSupport.getEncoding()) {
        aliasMatchIndex = index;
      }
      return { id: key, label: SUPPORTED_ENCODINGS[key].labelLong, description: key };
    });
    const items = picks.slice();
    if (guessedEncoding && configuredEncoding !== guessedEncoding && SUPPORTED_ENCODINGS[guessedEncoding]) {
      picks.unshift({ type: "separator" });
      picks.unshift({ id: guessedEncoding, label: SUPPORTED_ENCODINGS[guessedEncoding].labelLong, description: localize("guessedEncoding", "Guessed from content") });
    }
    const encoding = await quickInputService.pick(picks, {
      placeHolder: isReopenWithEncoding ? localize("pickEncodingForReopen", "Select File Encoding to Reopen File") : localize("pickEncodingForSave", "Select File Encoding to Save with"),
      activeItem: items[typeof directMatchIndex === "number" ? directMatchIndex : typeof aliasMatchIndex === "number" ? aliasMatchIndex : -1]
    });
    if (!encoding) {
      return;
    }
    if (!editorService.activeEditorPane) {
      return;
    }
    const activeEncodingSupport = toEditorWithEncodingSupport(editorService.activeEditorPane.input);
    if (typeof encoding.id !== "undefined" && activeEncodingSupport) {
      await activeEncodingSupport.setEncoding(encoding.id, isReopenWithEncoding ? 1 : 0);
    }
    activeTextEditorControl.focus();
  }
}
let EditorAutoSave = class EditorAutoSave2 extends Disposable {
  constructor(filesConfigurationService, hostService, editorService, editorGroupService, workingCopyService, logService) {
    super();
    this.filesConfigurationService = filesConfigurationService;
    this.hostService = hostService;
    this.editorService = editorService;
    this.editorGroupService = editorGroupService;
    this.workingCopyService = workingCopyService;
    this.logService = logService;
    this.pendingAutoSavesAfterDelay = /* @__PURE__ */ new Map();
    this.lastActiveEditor = void 0;
    this.lastActiveGroupId = void 0;
    this.lastActiveEditorControlDisposable = this._register(new DisposableStore());
    this.onAutoSaveConfigurationChange(filesConfigurationService.getAutoSaveConfiguration(), false);
    for (const dirtyWorkingCopy of this.workingCopyService.dirtyWorkingCopies) {
      this.onDidRegister(dirtyWorkingCopy);
    }
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.hostService.onDidChangeFocus((focused) => this.onWindowFocusChange(focused)));
    this._register(this.editorService.onDidActiveEditorChange(() => this.onDidActiveEditorChange()));
    this._register(this.filesConfigurationService.onAutoSaveConfigurationChange((config) => this.onAutoSaveConfigurationChange(config, true)));
    this._register(this.workingCopyService.onDidRegister((workingCopy) => this.onDidRegister(workingCopy)));
    this._register(this.workingCopyService.onDidUnregister((workingCopy) => this.onDidUnregister(workingCopy)));
    this._register(this.workingCopyService.onDidChangeDirty((workingCopy) => this.onDidChangeDirty(workingCopy)));
    this._register(this.workingCopyService.onDidChangeContent((workingCopy) => this.onDidChangeContent(workingCopy)));
  }
  onWindowFocusChange(focused) {
    if (!focused) {
      this.maybeTriggerAutoSave(4);
    }
  }
  onDidActiveEditorChange() {
    if (this.lastActiveEditor && typeof this.lastActiveGroupId === "number") {
      this.maybeTriggerAutoSave(3, { groupId: this.lastActiveGroupId, editor: this.lastActiveEditor });
    }
    const activeGroup = this.editorGroupService.activeGroup;
    const activeEditor = this.lastActiveEditor = withNullAsUndefined(activeGroup.activeEditor);
    this.lastActiveGroupId = activeGroup.id;
    this.lastActiveEditorControlDisposable.clear();
    const activeEditorPane = this.editorService.activeEditorPane;
    if (activeEditor && activeEditorPane) {
      this.lastActiveEditorControlDisposable.add(activeEditorPane.onDidBlur(() => {
        this.maybeTriggerAutoSave(3, { groupId: activeGroup.id, editor: activeEditor });
      }));
    }
  }
  maybeTriggerAutoSave(reason, editorIdentifier) {
    if ((editorIdentifier == null ? void 0 : editorIdentifier.editor.isReadonly()) || (editorIdentifier == null ? void 0 : editorIdentifier.editor.hasCapability(4))) {
      return;
    }
    const mode = this.filesConfigurationService.getAutoSaveMode();
    if (reason === 4 && (mode === 3 || mode === 4) || reason === 3 && mode === 3) {
      this.logService.trace(`[editor auto save] triggering auto save with reason ${reason}`);
      if (editorIdentifier) {
        this.editorService.save(editorIdentifier, { reason });
      } else {
        this.saveAllDirty({ reason });
      }
    }
  }
  onAutoSaveConfigurationChange(config, fromEvent) {
    this.autoSaveAfterDelay = typeof config.autoSaveDelay === "number" && config.autoSaveDelay >= 0 ? config.autoSaveDelay : void 0;
    if (fromEvent) {
      let reason = void 0;
      switch (this.filesConfigurationService.getAutoSaveMode()) {
        case 3:
          reason = 3;
          break;
        case 4:
          reason = 4;
          break;
        case 1:
        case 2:
          reason = 2;
          break;
      }
      if (reason) {
        this.saveAllDirty({ reason });
      }
    }
  }
  saveAllDirty(options) {
    for (const workingCopy of this.workingCopyService.dirtyWorkingCopies) {
      if (!(workingCopy.capabilities & 2)) {
        workingCopy.save(options);
      }
    }
  }
  onDidRegister(workingCopy) {
    if (workingCopy.isDirty()) {
      this.scheduleAutoSave(workingCopy);
    }
  }
  onDidUnregister(workingCopy) {
    this.discardAutoSave(workingCopy);
  }
  onDidChangeDirty(workingCopy) {
    if (workingCopy.isDirty()) {
      this.scheduleAutoSave(workingCopy);
    } else {
      this.discardAutoSave(workingCopy);
    }
  }
  onDidChangeContent(workingCopy) {
    if (workingCopy.isDirty()) {
      this.scheduleAutoSave(workingCopy);
    }
  }
  scheduleAutoSave(workingCopy) {
    if (typeof this.autoSaveAfterDelay !== "number") {
      return;
    }
    if (workingCopy.capabilities & 2) {
      return;
    }
    this.discardAutoSave(workingCopy);
    this.logService.trace(`[editor auto save] scheduling auto save after ${this.autoSaveAfterDelay}ms`, workingCopy.resource.toString(), workingCopy.typeId);
    const handle = setTimeout(() => {
      this.pendingAutoSavesAfterDelay.delete(workingCopy);
      if (workingCopy.isDirty()) {
        this.logService.trace(`[editor auto save] running auto save`, workingCopy.resource.toString(), workingCopy.typeId);
        workingCopy.save({ reason: 2 });
      }
    }, this.autoSaveAfterDelay);
    this.pendingAutoSavesAfterDelay.set(workingCopy, toDisposable(() => {
      this.logService.trace(`[editor auto save] clearing pending auto save`, workingCopy.resource.toString(), workingCopy.typeId);
      clearTimeout(handle);
    }));
  }
  discardAutoSave(workingCopy) {
    dispose(this.pendingAutoSavesAfterDelay.get(workingCopy));
    this.pendingAutoSavesAfterDelay.delete(workingCopy);
  }
};
EditorAutoSave = __decorate([
  __param(0, IFilesConfigurationService),
  __param(1, IHostService),
  __param(2, IEditorService),
  __param(3, IEditorGroupsService),
  __param(4, IWorkingCopyService),
  __param(5, ILogService)
], EditorAutoSave);
let UntitledTextEditorWorkingCopyEditorHandler = class UntitledTextEditorWorkingCopyEditorHandler2 extends Disposable {
  constructor(workingCopyEditorService, environmentService, pathService, textEditorService, untitledTextEditorService) {
    super();
    this.environmentService = environmentService;
    this.pathService = pathService;
    this.textEditorService = textEditorService;
    this.untitledTextEditorService = untitledTextEditorService;
    this._register(workingCopyEditorService.registerHandler(this));
  }
  handles(workingCopy) {
    return workingCopy.resource.scheme === Schemas.untitled && workingCopy.typeId === NO_TYPE_ID;
  }
  isOpen(workingCopy, editor) {
    if (!this.handles(workingCopy)) {
      return false;
    }
    return editor instanceof UntitledTextEditorInput && isEqual(workingCopy.resource, editor.resource);
  }
  createEditor(workingCopy) {
    let editorInputResource;
    if (this.untitledTextEditorService.isUntitledWithAssociatedResource(workingCopy.resource)) {
      editorInputResource = toLocalResource(workingCopy.resource, this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
    } else {
      editorInputResource = workingCopy.resource;
    }
    return this.textEditorService.createTextEditor({ resource: editorInputResource, forceUntitled: true });
  }
};
UntitledTextEditorWorkingCopyEditorHandler = __decorate([
  __param(0, IWorkingCopyEditorService),
  __param(1, IWorkbenchEnvironmentService),
  __param(2, IPathService),
  __param(3, ITextEditorService),
  __param(4, IUntitledTextEditorService)
], UntitledTextEditorWorkingCopyEditorHandler);
let DynamicEditorConfigurations = (_i = class extends Disposable {
  constructor(editorResolverService, extensionService, environmentService) {
    super();
    this.editorResolverService = editorResolverService;
    this.environmentService = environmentService;
    this.configurationRegistry = Registry.as(Extensions.Configuration);
    (async () => {
      await extensionService.whenInstalledExtensionsRegistered();
      this.updateDynamicEditorConfigurations();
      this.registerListeners();
    })();
  }
  registerListeners() {
    Event.debounce(this.editorResolverService.onDidChangeEditorRegistrations, (_, e) => e)(() => this.updateDynamicEditorConfigurations());
  }
  updateDynamicEditorConfigurations() {
    const lockableEditors = [...this.editorResolverService.getEditors(), ..._i.AUTO_LOCK_EXTRA_EDITORS].filter((e) => !_i.AUTO_LOCK_REMOVE_EDITORS.has(e.id));
    const binaryEditorCandidates = this.editorResolverService.getEditors().filter((e) => e.priority !== RegisteredEditorPriority.exclusive).map((e) => e.id);
    const autoLockGroupConfiguration = /* @__PURE__ */ Object.create(null);
    for (const editor of lockableEditors) {
      autoLockGroupConfiguration[editor.id] = {
        type: "boolean",
        default: _i.AUTO_LOCK_DEFAULT_ENABLED.has(editor.id),
        description: editor.label
      };
    }
    const defaultAutoLockGroupConfiguration = /* @__PURE__ */ Object.create(null);
    for (const editor of lockableEditors) {
      defaultAutoLockGroupConfiguration[editor.id] = _i.AUTO_LOCK_DEFAULT_ENABLED.has(editor.id);
    }
    const oldAutoLockConfigurationNode = this.autoLockConfigurationNode;
    this.autoLockConfigurationNode = {
      ...workbenchConfigurationNodeBase,
      properties: {
        "workbench.editor.autoLockGroups": {
          type: "object",
          description: localize(
            "workbench.editor.autoLockGroups",
            "If an editor matching one of the listed types is opened as the first in an editor group and more than one group is open, the group is automatically locked. Locked groups will only be used for opening editors when explicitly chosen by a user gesture (for example drag and drop), but not by default. Consequently, the active editor in a locked group is less likely to be replaced accidentally with a different editor."
          ),
          properties: autoLockGroupConfiguration,
          default: defaultAutoLockGroupConfiguration,
          additionalProperties: false
        }
      }
    };
    const oldDefaultBinaryEditorConfigurationNode = this.defaultBinaryEditorConfigurationNode;
    this.defaultBinaryEditorConfigurationNode = {
      ...workbenchConfigurationNodeBase,
      properties: {
        "workbench.editor.defaultBinaryEditor": {
          type: "string",
          default: "",
          enum: [...binaryEditorCandidates, ""],
          description: localize(
            "workbench.editor.defaultBinaryEditor",
            "The default editor for files detected as binary. If undefined, the user will be presented with a picker."
          )
        }
      }
    };
    const oldEditorAssociationsConfigurationNode = this.editorAssociationsConfigurationNode;
    this.editorAssociationsConfigurationNode = {
      ...workbenchConfigurationNodeBase,
      properties: {
        "workbench.editorAssociations": {
          type: "object",
          markdownDescription: localize(
            "editor.editorAssociations",
            'Configure [glob patterns](https://aka.ms/vscode-glob-patterns) to editors (for example `"*.hex": "hexEditor.hexedit"`). These have precedence over the default behavior.'
          ),
          patternProperties: {
            ".*": {
              type: "string",
              enum: binaryEditorCandidates
            }
          }
        }
      }
    };
    const oldEditorLargeFileConfirmationConfigurationNode = this.editorLargeFileConfirmationConfigurationNode;
    this.editorLargeFileConfirmationConfigurationNode = {
      ...workbenchConfigurationNodeBase,
      properties: {
        "workbench.editorLargeFileConfirmation": {
          type: "number",
          default: getLargeFileConfirmationLimit(this.environmentService.remoteAuthority) / ByteSize.MB,
          minimum: 1,
          scope: 4,
          markdownDescription: localize(
            "editorLargeFileSizeConfirmation",
            "Controls the minimum size of a file in MB before asking for confirmation when opening in the editor. Note that this setting may not apply to all editor types and environments."
          )
        }
      }
    };
    this.configurationRegistry.updateConfigurations({
      add: [
        this.autoLockConfigurationNode,
        this.defaultBinaryEditorConfigurationNode,
        this.editorAssociationsConfigurationNode,
        this.editorLargeFileConfirmationConfigurationNode
      ],
      remove: coalesce([
        oldAutoLockConfigurationNode,
        oldDefaultBinaryEditorConfigurationNode,
        oldEditorAssociationsConfigurationNode,
        oldEditorLargeFileConfirmationConfigurationNode
      ])
    });
  }
}, _i.AUTO_LOCK_DEFAULT_ENABLED = /* @__PURE__ */ new Set(["terminalEditor"]), _i.AUTO_LOCK_EXTRA_EDITORS = [
  {
    id: "workbench.input.interactive",
    label: localize("interactiveWindow", "Interactive Window"),
    priority: RegisteredEditorPriority.builtin
  },
  {
    id: "mainThreadWebview-markdown.preview",
    label: localize("markdownPreview", "Markdown Preview"),
    priority: RegisteredEditorPriority.builtin
  }
], _i.AUTO_LOCK_REMOVE_EDITORS = /* @__PURE__ */ new Set([
  "vscode-interactive-input",
  "interactive",
  "vscode.markdown.preview.editor"
]), _i);
DynamicEditorConfigurations = __decorate([
  __param(0, IEditorResolverService),
  __param(1, IExtensionService),
  __param(2, IWorkbenchEnvironmentService)
], DynamicEditorConfigurations);
let AccessibilityStatus = class AccessibilityStatus2 extends Disposable {
  constructor(configurationService, notificationService, _accessibilityService, statusbarService) {
    super();
    this.configurationService = configurationService;
    this.notificationService = notificationService;
    this._accessibilityService = _accessibilityService;
    this.statusbarService = statusbarService;
    this.screenReaderNotification = null;
    this.promptedScreenReader = false;
    this.screenReaderModeElement = this._register(new MutableDisposable());
    this._register(this._accessibilityService.onDidChangeScreenReaderOptimized(() => this.onScreenReaderModeChange()));
    this._register(configurationService.onDidChangeConfiguration((c) => {
      if (c.affectsConfiguration("editor.accessibilitySupport")) {
        this.onScreenReaderModeChange();
      }
    }));
    CommandsRegistry.registerCommand({ id: "showEditorScreenReaderNotification", handler: () => this.showScreenReaderNotification() });
    this.updateScreenReaderModeElement(this._accessibilityService.isScreenReaderOptimized());
  }
  showScreenReaderNotification() {
    if (!this.screenReaderNotification) {
      this.screenReaderNotification = this.notificationService.prompt(Severity.Info, localize(
        "screenReaderDetectedExplanation.question",
        "Are you using a screen reader to operate VS Code?"
      ), [{
        label: localize("screenReaderDetectedExplanation.answerYes", "Yes"),
        run: () => {
          this.configurationService.updateValue("editor.accessibilitySupport", "on", 2);
        }
      }, {
        label: localize("screenReaderDetectedExplanation.answerNo", "No"),
        run: () => {
          this.configurationService.updateValue("editor.accessibilitySupport", "off", 2);
        }
      }], {
        sticky: true,
        priority: NotificationPriority.URGENT
      });
      Event.once(this.screenReaderNotification.onDidClose)(() => this.screenReaderNotification = null);
    }
  }
  updateScreenReaderModeElement(visible) {
    if (visible) {
      if (!this.screenReaderModeElement.value) {
        const text = localize("screenReaderDetected", "Screen Reader Optimized");
        this.screenReaderModeElement.value = this.statusbarService.addEntry({
          name: localize("status.editor.screenReaderMode", "Screen Reader Mode"),
          text,
          ariaLabel: text,
          command: "showEditorScreenReaderNotification",
          backgroundColor: themeColorFromId(STATUS_BAR_PROMINENT_ITEM_BACKGROUND),
          color: themeColorFromId(STATUS_BAR_PROMINENT_ITEM_FOREGROUND)
        }, "status.editor.screenReaderMode", 1, 100.6);
      }
    } else {
      this.screenReaderModeElement.clear();
    }
  }
  onScreenReaderModeChange() {
    const screenReaderDetected = this._accessibilityService.isScreenReaderOptimized();
    if (screenReaderDetected) {
      const screenReaderConfiguration = this.configurationService.getValue("editor.accessibilitySupport");
      if (screenReaderConfiguration === "auto") {
        if (!this.promptedScreenReader) {
          this.promptedScreenReader = true;
          setTimeout(() => this.showScreenReaderNotification(), 100);
        }
      }
    }
    if (this.screenReaderNotification) {
      this.screenReaderNotification.close();
    }
    this.updateScreenReaderModeElement(this._accessibilityService.isScreenReaderOptimized());
  }
};
AccessibilityStatus = __decorate([
  __param(0, IConfigurationService),
  __param(1, INotificationService),
  __param(2, IAccessibilityService),
  __param(3, IStatusbarService)
], AccessibilityStatus);
class ToggleCollapseUnchangedRegions extends Action2 {
  constructor() {
    super({
      id: "diffEditor.toggleCollapseUnchangedRegions",
      title: { value: localize("toggleCollapseUnchangedRegions", "Toggle Collapse Unchanged Regions"), original: "Toggle Collapse Unchanged Regions" },
      icon: Codicon.map,
      precondition: ContextKeyEqualsExpr.create("diffEditorVersion", 2)
    });
  }
  run(accessor, ...args) {
    const configurationService = accessor.get(IConfigurationService);
    const newValue = !configurationService.getValue("diffEditor.experimental.collapseUnchangedRegions");
    configurationService.updateValue("diffEditor.experimental.collapseUnchangedRegions", newValue);
  }
}
registerAction2(ToggleCollapseUnchangedRegions);
MenuRegistry.appendMenuItem(MenuId.EditorTitle, {
  command: {
    id: new ToggleCollapseUnchangedRegions().desc.id,
    title: localize("collapseUnchangedRegions", "Show Unchanged Regions"),
    icon: Codicon.map
  },
  order: 22,
  group: "navigation",
  when: ContextKeyExpr.and(ContextKeyExpr.has("config.diffEditor.experimental.collapseUnchangedRegions"), ContextKeyEqualsExpr.create("diffEditorVersion", 2))
});
MenuRegistry.appendMenuItem(MenuId.EditorTitle, {
  command: {
    id: new ToggleCollapseUnchangedRegions().desc.id,
    title: localize("showUnchangedRegions", "Collapse Unchanged Regions"),
    icon: ThemeIcon.modify(Codicon.map, "disabled")
  },
  order: 22,
  group: "navigation",
  when: ContextKeyExpr.and(ContextKeyExpr.has("config.diffEditor.experimental.collapseUnchangedRegions").negate(), ContextKeyEqualsExpr.create("diffEditorVersion", 2))
});
class ToggleShowMovedCodeBlocks extends Action2 {
  constructor() {
    super({
      id: "diffEditor.toggleShowMovedCodeBlocks",
      title: { value: localize("toggleShowMovedCodeBlocks", "Toggle Show Moved Code Blocks"), original: "Toggle Show Moved Code Blocks" },
      precondition: ContextKeyEqualsExpr.create("diffEditorVersion", 2)
    });
  }
  run(accessor, ...args) {
    const configurationService = accessor.get(IConfigurationService);
    const newValue = !configurationService.getValue("diffEditor.experimental.showMoves");
    configurationService.updateValue("diffEditor.experimental.showMoves", newValue);
  }
}
registerAction2(ToggleShowMovedCodeBlocks);
const diffEditorCategory = {
  value: localize("diffEditor", "Diff Editor"),
  original: "Diff Editor"
};
class SwitchSide extends EditorAction2 {
  constructor() {
    super({
      id: "diffEditor.switchSide",
      title: { value: localize("switchSide", "Switch Side"), original: "Switch Side" },
      icon: Codicon.arrowSwap,
      precondition: ContextKeyExpr.and(ContextKeyEqualsExpr.create("diffEditorVersion", 2), ContextKeyExpr.has("isInDiffEditor")),
      f1: true,
      category: diffEditorCategory
    });
  }
  runEditorCommand(accessor, editor, ...args) {
    const diffEditor = findFocusedDiffEditor(accessor);
    if (diffEditor instanceof DiffEditorWidget2) {
      diffEditor.switchSide();
    }
  }
}
registerAction2(SwitchSide);
Registry.as(EditorExtensions.EditorPane).registerEditorPane(EditorPaneDescriptor.create(TextResourceEditor, TextResourceEditor.ID, localize("textEditor", "Text Editor")), [
  new SyncDescriptor(UntitledTextEditorInput),
  new SyncDescriptor(TextResourceEditorInput)
]);
Registry.as(EditorExtensions.EditorPane).registerEditorPane(EditorPaneDescriptor.create(TextDiffEditor, TextDiffEditor.ID, localize("textDiffEditor", "Text Diff Editor")), [
  new SyncDescriptor(DiffEditorInput)
]);
Registry.as(EditorExtensions.EditorPane).registerEditorPane(EditorPaneDescriptor.create(BinaryResourceDiffEditor, BinaryResourceDiffEditor.ID, localize("binaryDiffEditor", "Binary Diff Editor")), [
  new SyncDescriptor(DiffEditorInput)
]);
Registry.as(EditorExtensions.EditorPane).registerEditorPane(EditorPaneDescriptor.create(SideBySideEditor, SideBySideEditor.ID, localize("sideBySideEditor", "Side by Side Editor")), [
  new SyncDescriptor(SideBySideEditorInput)
]);
Registry.as(Extensions$1.Workbench).registerWorkbenchContribution(EditorAutoSave, 2);
Registry.as(Extensions$1.Workbench).registerWorkbenchContribution(EditorStatus, 2);
Registry.as(Extensions$1.Workbench).registerWorkbenchContribution(AccessibilityStatus, 2);
Registry.as(Extensions$1.Workbench).registerWorkbenchContribution(UntitledTextEditorWorkingCopyEditorHandler, 2);
Registry.as(Extensions$1.Workbench).registerWorkbenchContribution(DynamicEditorConfigurations, 2);
registerEditorContribution(FloatingClickMenu.ID, FloatingClickMenu, 1);
const quickAccessRegistry = Registry.as(Extensions$2.Quickaccess);
const editorPickerContextKey = "inEditorsPicker";
const editorPickerContext = ContextKeyExpr.and(inQuickPickContext, ContextKeyExpr.has(editorPickerContextKey));
quickAccessRegistry.registerQuickAccessProvider({
  ctor: ActiveGroupEditorsByMostRecentlyUsedQuickAccess,
  prefix: ActiveGroupEditorsByMostRecentlyUsedQuickAccess.PREFIX,
  contextKey: editorPickerContextKey,
  placeholder: localize("editorQuickAccessPlaceholder", "Type the name of an editor to open it."),
  helpEntries: [{ description: localize(
    "activeGroupEditorsByMostRecentlyUsedQuickAccess",
    "Show Editors in Active Group by Most Recently Used"
  ), commandId: ShowEditorsInActiveGroupByMostRecentlyUsedAction.ID }]
});
quickAccessRegistry.registerQuickAccessProvider({
  ctor: AllEditorsByAppearanceQuickAccess,
  prefix: AllEditorsByAppearanceQuickAccess.PREFIX,
  contextKey: editorPickerContextKey,
  placeholder: localize("editorQuickAccessPlaceholder", "Type the name of an editor to open it."),
  helpEntries: [{ description: localize(
    "allEditorsByAppearanceQuickAccess",
    "Show All Opened Editors By Appearance"
  ), commandId: ShowAllEditorsByAppearanceAction.ID }]
});
quickAccessRegistry.registerQuickAccessProvider({
  ctor: AllEditorsByMostRecentlyUsedQuickAccess,
  prefix: AllEditorsByMostRecentlyUsedQuickAccess.PREFIX,
  contextKey: editorPickerContextKey,
  placeholder: localize("editorQuickAccessPlaceholder", "Type the name of an editor to open it."),
  helpEntries: [{ description: localize(
    "allEditorsByMostRecentlyUsedQuickAccess",
    "Show All Opened Editors By Most Recently Used"
  ), commandId: ShowAllEditorsByMostRecentlyUsedAction.ID }]
});
registerAction2(ChangeLanguageAction);
registerAction2(ChangeEOLAction);
registerAction2(ChangeEncodingAction);
registerAction2(NavigateForwardAction);
registerAction2(NavigateBackwardsAction);
registerAction2(OpenNextEditor);
registerAction2(OpenPreviousEditor);
registerAction2(OpenNextEditorInGroup);
registerAction2(OpenPreviousEditorInGroup);
registerAction2(OpenFirstEditorInGroup);
registerAction2(OpenLastEditorInGroup);
registerAction2(OpenNextRecentlyUsedEditorAction);
registerAction2(OpenPreviousRecentlyUsedEditorAction);
registerAction2(OpenNextRecentlyUsedEditorInGroupAction);
registerAction2(OpenPreviousRecentlyUsedEditorInGroupAction);
registerAction2(ReopenClosedEditorAction);
registerAction2(ClearRecentFilesAction);
registerAction2(ShowAllEditorsByAppearanceAction);
registerAction2(ShowAllEditorsByMostRecentlyUsedAction);
registerAction2(ShowEditorsInActiveGroupByMostRecentlyUsedAction);
registerAction2(CloseAllEditorsAction);
registerAction2(CloseAllEditorGroupsAction);
registerAction2(CloseLeftEditorsInGroupAction);
registerAction2(CloseEditorsInOtherGroupsAction);
registerAction2(CloseEditorInAllGroupsAction);
registerAction2(RevertAndCloseEditorAction);
registerAction2(SplitEditorAction);
registerAction2(SplitEditorOrthogonalAction);
registerAction2(SplitEditorLeftAction);
registerAction2(SplitEditorRightAction);
registerAction2(SplitEditorUpAction);
registerAction2(SplitEditorDownAction);
registerAction2(JoinTwoGroupsAction);
registerAction2(JoinAllGroupsAction);
registerAction2(NavigateBetweenGroupsAction);
registerAction2(ResetGroupSizesAction);
registerAction2(ToggleGroupSizesAction);
registerAction2(MaximizeGroupAction);
registerAction2(MinimizeOtherGroupsAction);
registerAction2(MoveEditorLeftInGroupAction);
registerAction2(MoveEditorRightInGroupAction);
registerAction2(MoveGroupLeftAction);
registerAction2(MoveGroupRightAction);
registerAction2(MoveGroupUpAction);
registerAction2(MoveGroupDownAction);
registerAction2(DuplicateGroupLeftAction);
registerAction2(DuplicateGroupRightAction);
registerAction2(DuplicateGroupUpAction);
registerAction2(DuplicateGroupDownAction);
registerAction2(MoveEditorToPreviousGroupAction);
registerAction2(MoveEditorToNextGroupAction);
registerAction2(MoveEditorToFirstGroupAction);
registerAction2(MoveEditorToLastGroupAction);
registerAction2(MoveEditorToLeftGroupAction);
registerAction2(MoveEditorToRightGroupAction);
registerAction2(MoveEditorToAboveGroupAction);
registerAction2(MoveEditorToBelowGroupAction);
registerAction2(SplitEditorToPreviousGroupAction);
registerAction2(SplitEditorToNextGroupAction);
registerAction2(SplitEditorToFirstGroupAction);
registerAction2(SplitEditorToLastGroupAction);
registerAction2(SplitEditorToLeftGroupAction);
registerAction2(SplitEditorToRightGroupAction);
registerAction2(SplitEditorToAboveGroupAction);
registerAction2(SplitEditorToBelowGroupAction);
registerAction2(FocusActiveGroupAction);
registerAction2(FocusFirstGroupAction);
registerAction2(FocusLastGroupAction);
registerAction2(FocusPreviousGroup);
registerAction2(FocusNextGroup);
registerAction2(FocusLeftGroup);
registerAction2(FocusRightGroup);
registerAction2(FocusAboveGroup);
registerAction2(FocusBelowGroup);
registerAction2(NewEditorGroupLeftAction);
registerAction2(NewEditorGroupRightAction);
registerAction2(NewEditorGroupAboveAction);
registerAction2(NewEditorGroupBelowAction);
registerAction2(NavigatePreviousAction);
registerAction2(NavigateForwardInEditsAction);
registerAction2(NavigateBackwardsInEditsAction);
registerAction2(NavigatePreviousInEditsAction);
registerAction2(NavigateToLastEditLocationAction);
registerAction2(NavigateForwardInNavigationsAction);
registerAction2(NavigateBackwardsInNavigationsAction);
registerAction2(NavigatePreviousInNavigationsAction);
registerAction2(NavigateToLastNavigationLocationAction);
registerAction2(ClearEditorHistoryAction);
registerAction2(EditorLayoutSingleAction);
registerAction2(EditorLayoutTwoColumnsAction);
registerAction2(EditorLayoutThreeColumnsAction);
registerAction2(EditorLayoutTwoRowsAction);
registerAction2(EditorLayoutThreeRowsAction);
registerAction2(EditorLayoutTwoByTwoGridAction);
registerAction2(EditorLayoutTwoRowsRightAction);
registerAction2(EditorLayoutTwoColumnsBottomAction);
registerAction2(ToggleEditorTypeAction);
registerAction2(ReOpenInTextEditorAction);
registerAction2(QuickAccessPreviousRecentlyUsedEditorAction);
registerAction2(QuickAccessLeastRecentlyUsedEditorAction);
registerAction2(QuickAccessPreviousRecentlyUsedEditorInGroupAction);
registerAction2(QuickAccessLeastRecentlyUsedEditorInGroupAction);
registerAction2(QuickAccessPreviousEditorFromHistoryAction);
const quickAccessNavigateNextInEditorPickerId = "workbench.action.quickOpenNavigateNextInEditorPicker";
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: quickAccessNavigateNextInEditorPickerId,
  weight: 200 + 50,
  handler: getQuickNavigateHandler(quickAccessNavigateNextInEditorPickerId, true),
  when: editorPickerContext,
  primary: 2048 | 2,
  mac: { primary: 256 | 2 }
});
const quickAccessNavigatePreviousInEditorPickerId = "workbench.action.quickOpenNavigatePreviousInEditorPicker";
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: quickAccessNavigatePreviousInEditorPickerId,
  weight: 200 + 50,
  handler: getQuickNavigateHandler(quickAccessNavigatePreviousInEditorPickerId, false),
  when: editorPickerContext,
  primary: 2048 | 1024 | 2,
  mac: { primary: 256 | 1024 | 2 }
});
setup();
MenuRegistry.appendMenuItem(MenuId.EmptyEditorGroup, { command: { id: UNLOCK_GROUP_COMMAND_ID, title: localize("unlockGroupAction", "Unlock Group"), icon: Codicon.lock }, group: "navigation", order: 10, when: ActiveEditorGroupLockedContext });
MenuRegistry.appendMenuItem(MenuId.EmptyEditorGroup, { command: { id: CLOSE_EDITOR_GROUP_COMMAND_ID, title: localize("closeGroupAction", "Close Group"), icon: Codicon.close }, group: "navigation", order: 20 });
MenuRegistry.appendMenuItem(MenuId.EmptyEditorGroupContext, { command: { id: SPLIT_EDITOR_UP, title: localize("splitUp", "Split Up") }, group: "2_split", order: 10 });
MenuRegistry.appendMenuItem(MenuId.EmptyEditorGroupContext, { command: { id: SPLIT_EDITOR_DOWN, title: localize("splitDown", "Split Down") }, group: "2_split", order: 20 });
MenuRegistry.appendMenuItem(MenuId.EmptyEditorGroupContext, { command: { id: SPLIT_EDITOR_LEFT, title: localize("splitLeft", "Split Left") }, group: "2_split", order: 30 });
MenuRegistry.appendMenuItem(MenuId.EmptyEditorGroupContext, { command: { id: SPLIT_EDITOR_RIGHT, title: localize("splitRight", "Split Right") }, group: "2_split", order: 40 });
MenuRegistry.appendMenuItem(MenuId.EmptyEditorGroupContext, { command: { id: TOGGLE_LOCK_GROUP_COMMAND_ID, title: localize("toggleLockGroup", "Lock Group"), toggled: ActiveEditorGroupLockedContext }, group: "3_lock", order: 10, when: MultipleEditorGroupsContext });
MenuRegistry.appendMenuItem(MenuId.EmptyEditorGroupContext, { command: { id: CLOSE_EDITOR_GROUP_COMMAND_ID, title: localize("close", "Close") }, group: "4_close", order: 10, when: MultipleEditorGroupsContext });
MenuRegistry.appendMenuItem(MenuId.EditorTabsBarContext, { command: { id: SPLIT_EDITOR_UP, title: localize("splitUp", "Split Up") }, group: "2_split", order: 10 });
MenuRegistry.appendMenuItem(MenuId.EditorTabsBarContext, { command: { id: SPLIT_EDITOR_DOWN, title: localize("splitDown", "Split Down") }, group: "2_split", order: 20 });
MenuRegistry.appendMenuItem(MenuId.EditorTabsBarContext, { command: { id: SPLIT_EDITOR_LEFT, title: localize("splitLeft", "Split Left") }, group: "2_split", order: 30 });
MenuRegistry.appendMenuItem(MenuId.EditorTabsBarContext, { command: { id: SPLIT_EDITOR_RIGHT, title: localize("splitRight", "Split Right") }, group: "2_split", order: 40 });
MenuRegistry.appendMenuItem(MenuId.EditorTabsBarContext, { command: { id: ToggleTabsVisibilityAction.ID, title: localize("toggleTabs", "Enable Tabs"), toggled: ContextKeyExpr.has("config.workbench.editor.showTabs") }, group: "3_config", order: 10 });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: CLOSE_EDITOR_COMMAND_ID, title: localize("close", "Close") }, group: "1_close", order: 10 });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: CLOSE_OTHER_EDITORS_IN_GROUP_COMMAND_ID, title: localize("closeOthers", "Close Others"), precondition: EditorGroupEditorsCountContext.notEqualsTo("1") }, group: "1_close", order: 20 });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: CLOSE_EDITORS_TO_THE_RIGHT_COMMAND_ID, title: localize("closeRight", "Close to the Right"), precondition: ActiveEditorLastInGroupContext.toNegated() }, group: "1_close", order: 30, when: EditorTabsVisibleContext });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: CLOSE_SAVED_EDITORS_COMMAND_ID, title: localize("closeAllSaved", "Close Saved") }, group: "1_close", order: 40 });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: CLOSE_EDITORS_IN_GROUP_COMMAND_ID, title: localize("closeAll", "Close All") }, group: "1_close", order: 50 });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: REOPEN_WITH_COMMAND_ID, title: localize("reopenWith", "Reopen Editor With...") }, group: "1_open", order: 10, when: ActiveEditorAvailableEditorIdsContext });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: KEEP_EDITOR_COMMAND_ID, title: localize("keepOpen", "Keep Open"), precondition: ActiveEditorPinnedContext.toNegated() }, group: "3_preview", order: 10, when: ContextKeyExpr.has("config.workbench.editor.enablePreview") });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: PIN_EDITOR_COMMAND_ID, title: localize("pin", "Pin") }, group: "3_preview", order: 20, when: ActiveEditorStickyContext.toNegated() });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: UNPIN_EDITOR_COMMAND_ID, title: localize("unpin", "Unpin") }, group: "3_preview", order: 20, when: ActiveEditorStickyContext });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: SPLIT_EDITOR_UP, title: localize("splitUp", "Split Up") }, group: "5_split", order: 10 });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: SPLIT_EDITOR_DOWN, title: localize("splitDown", "Split Down") }, group: "5_split", order: 20 });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: SPLIT_EDITOR_LEFT, title: localize("splitLeft", "Split Left") }, group: "5_split", order: 30 });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: SPLIT_EDITOR_RIGHT, title: localize("splitRight", "Split Right") }, group: "5_split", order: 40 });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: SPLIT_EDITOR_IN_GROUP, title: localize("splitInGroup", "Split in Group") }, group: "6_split_in_group", order: 10, when: ActiveEditorCanSplitInGroupContext });
MenuRegistry.appendMenuItem(MenuId.EditorTitleContext, { command: { id: JOIN_EDITOR_IN_GROUP, title: localize("joinInGroup", "Join in Group") }, group: "6_split_in_group", order: 10, when: SideBySideEditorActiveContext });
MenuRegistry.appendMenuItem(MenuId.EditorTitle, { command: { id: TOGGLE_DIFF_SIDE_BY_SIDE, title: localize("inlineView", "Inline View"), toggled: ContextKeyExpr.equals("config.diffEditor.renderSideBySide", false) }, group: "1_diff", order: 10, when: ContextKeyExpr.has("isInDiffEditor") });
MenuRegistry.appendMenuItem(MenuId.EditorTitle, { command: { id: SHOW_EDITORS_IN_GROUP, title: localize("showOpenedEditors", "Show Opened Editors") }, group: "3_open", order: 10 });
MenuRegistry.appendMenuItem(MenuId.EditorTitle, { command: { id: CLOSE_EDITORS_IN_GROUP_COMMAND_ID, title: localize("closeAll", "Close All") }, group: "5_close", order: 10 });
MenuRegistry.appendMenuItem(MenuId.EditorTitle, { command: { id: CLOSE_SAVED_EDITORS_COMMAND_ID, title: localize("closeAllSaved", "Close Saved") }, group: "5_close", order: 20 });
MenuRegistry.appendMenuItem(MenuId.EditorTitle, { command: { id: ToggleTabsVisibilityAction.ID, title: localize("toggleTabs", "Enable Tabs"), toggled: ContextKeyExpr.has("config.workbench.editor.showTabs") }, group: "7_settings", order: 5, when: ContextKeyExpr.has("config.workbench.editor.showTabs").negate() });
MenuRegistry.appendMenuItem(MenuId.EditorTitle, { command: { id: TOGGLE_KEEP_EDITORS_COMMAND_ID, title: localize("togglePreviewMode", "Enable Preview Editors"), toggled: ContextKeyExpr.has("config.workbench.editor.enablePreview") }, group: "7_settings", order: 10 });
MenuRegistry.appendMenuItem(MenuId.EditorTitle, { command: { id: TOGGLE_LOCK_GROUP_COMMAND_ID, title: localize("lockGroup", "Lock Group"), toggled: ActiveEditorGroupLockedContext }, group: "8_lock", order: 10, when: MultipleEditorGroupsContext });
function appendEditorToolItem(primary, when, order, alternative, precondition) {
  const item = {
    command: {
      id: primary.id,
      title: primary.title,
      icon: primary.icon,
      precondition
    },
    group: "navigation",
    when,
    order
  };
  if (alternative) {
    item.alt = {
      id: alternative.id,
      title: alternative.title,
      icon: alternative.icon
    };
  }
  MenuRegistry.appendMenuItem(MenuId.EditorTitle, item);
}
const SPLIT_ORDER = 1e5;
const CLOSE_ORDER = 1e6;
appendEditorToolItem({
  id: SplitEditorAction.ID,
  title: localize("splitEditorRight", "Split Editor Right"),
  icon: Codicon.splitHorizontal
}, ContextKeyExpr.not("splitEditorsVertically"), SPLIT_ORDER, {
  id: SPLIT_EDITOR_DOWN,
  title: localize("splitEditorDown", "Split Editor Down"),
  icon: Codicon.splitVertical
});
appendEditorToolItem({
  id: SplitEditorAction.ID,
  title: localize("splitEditorDown", "Split Editor Down"),
  icon: Codicon.splitVertical
}, ContextKeyExpr.has("splitEditorsVertically"), SPLIT_ORDER, {
  id: SPLIT_EDITOR_RIGHT,
  title: localize("splitEditorRight", "Split Editor Right"),
  icon: Codicon.splitHorizontal
});
appendEditorToolItem({
  id: TOGGLE_SPLIT_EDITOR_IN_GROUP_LAYOUT,
  title: localize("toggleSplitEditorInGroupLayout", "Toggle Layout"),
  icon: Codicon.editorLayout
}, SideBySideEditorActiveContext, SPLIT_ORDER - 1);
appendEditorToolItem({
  id: CLOSE_EDITOR_COMMAND_ID,
  title: localize("close", "Close"),
  icon: Codicon.close
}, ContextKeyExpr.and(EditorTabsVisibleContext.toNegated(), ActiveEditorDirtyContext.toNegated(), ActiveEditorStickyContext.toNegated()), CLOSE_ORDER, {
  id: CLOSE_EDITORS_IN_GROUP_COMMAND_ID,
  title: localize("closeAll", "Close All"),
  icon: Codicon.closeAll
});
appendEditorToolItem({
  id: CLOSE_EDITOR_COMMAND_ID,
  title: localize("close", "Close"),
  icon: Codicon.closeDirty
}, ContextKeyExpr.and(EditorTabsVisibleContext.toNegated(), ActiveEditorDirtyContext, ActiveEditorStickyContext.toNegated()), CLOSE_ORDER, {
  id: CLOSE_EDITORS_IN_GROUP_COMMAND_ID,
  title: localize("closeAll", "Close All"),
  icon: Codicon.closeAll
});
appendEditorToolItem({
  id: UNPIN_EDITOR_COMMAND_ID,
  title: localize("unpin", "Unpin"),
  icon: Codicon.pinned
}, ContextKeyExpr.and(EditorTabsVisibleContext.toNegated(), ActiveEditorDirtyContext.toNegated(), ActiveEditorStickyContext), CLOSE_ORDER, {
  id: CLOSE_EDITOR_COMMAND_ID,
  title: localize("close", "Close"),
  icon: Codicon.close
});
appendEditorToolItem({
  id: UNPIN_EDITOR_COMMAND_ID,
  title: localize("unpin", "Unpin"),
  icon: Codicon.pinnedDirty
}, ContextKeyExpr.and(EditorTabsVisibleContext.toNegated(), ActiveEditorDirtyContext, ActiveEditorStickyContext), CLOSE_ORDER, {
  id: CLOSE_EDITOR_COMMAND_ID,
  title: localize("close", "Close"),
  icon: Codicon.close
});
appendEditorToolItem({
  id: UNLOCK_GROUP_COMMAND_ID,
  title: localize("unlockEditorGroup", "Unlock Group"),
  icon: Codicon.lock
}, ActiveEditorGroupLockedContext, CLOSE_ORDER - 1);
const previousChangeIcon = registerIcon("diff-editor-previous-change", Codicon.arrowUp, localize(
  "previousChangeIcon",
  "Icon for the previous change action in the diff editor."
));
const nextChangeIcon = registerIcon("diff-editor-next-change", Codicon.arrowDown, localize("nextChangeIcon", "Icon for the next change action in the diff editor."));
const toggleWhitespace = registerIcon("diff-editor-toggle-whitespace", Codicon.whitespace, localize(
  "toggleWhitespace",
  "Icon for the toggle whitespace action in the diff editor."
));
appendEditorToolItem({
  id: GOTO_PREVIOUS_CHANGE,
  title: localize("navigate.prev.label", "Previous Change"),
  icon: previousChangeIcon
}, TextCompareEditorActiveContext, 10);
appendEditorToolItem({
  id: GOTO_NEXT_CHANGE,
  title: localize("navigate.next.label", "Next Change"),
  icon: nextChangeIcon
}, TextCompareEditorActiveContext, 11);
appendEditorToolItem({
  id: TOGGLE_DIFF_IGNORE_TRIM_WHITESPACE,
  title: localize(
    "ignoreTrimWhitespace.label",
    "Ignore Leading/Trailing Whitespace Differences"
  ),
  icon: toggleWhitespace
}, ContextKeyExpr.and(TextCompareEditorActiveContext, ContextKeyExpr.notEquals("config.diffEditor.ignoreTrimWhitespace", true)), 20);
appendEditorToolItem({
  id: TOGGLE_DIFF_IGNORE_TRIM_WHITESPACE,
  title: localize("showTrimWhitespace.label", "Show Leading/Trailing Whitespace Differences"),
  icon: ThemeIcon.modify(toggleWhitespace, "disabled")
}, ContextKeyExpr.and(TextCompareEditorActiveContext, ContextKeyExpr.notEquals("config.diffEditor.ignoreTrimWhitespace", false)), 20);
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: KEEP_EDITOR_COMMAND_ID, title: { value: localize("keepEditor", "Keep Editor"), original: "Keep Editor" }, category: Categories.View }, when: ContextKeyExpr.has("config.workbench.editor.enablePreview") });
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: PIN_EDITOR_COMMAND_ID, title: { value: localize("pinEditor", "Pin Editor"), original: "Pin Editor" }, category: Categories.View } });
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: UNPIN_EDITOR_COMMAND_ID, title: { value: localize("unpinEditor", "Unpin Editor"), original: "Unpin Editor" }, category: Categories.View } });
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: CLOSE_EDITOR_COMMAND_ID, title: { value: localize("closeEditor", "Close Editor"), original: "Close Editor" }, category: Categories.View } });
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: CLOSE_PINNED_EDITOR_COMMAND_ID, title: { value: localize("closePinnedEditor", "Close Pinned Editor"), original: "Close Pinned Editor" }, category: Categories.View } });
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: CLOSE_EDITORS_IN_GROUP_COMMAND_ID, title: { value: localize("closeEditorsInGroup", "Close All Editors in Group"), original: "Close All Editors in Group" }, category: Categories.View } });
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: CLOSE_SAVED_EDITORS_COMMAND_ID, title: { value: localize("closeSavedEditors", "Close Saved Editors in Group"), original: "Close Saved Editors in Group" }, category: Categories.View } });
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: CLOSE_OTHER_EDITORS_IN_GROUP_COMMAND_ID, title: { value: localize("closeOtherEditors", "Close Other Editors in Group"), original: "Close Other Editors in Group" }, category: Categories.View } });
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: CLOSE_EDITORS_TO_THE_RIGHT_COMMAND_ID, title: { value: localize("closeRightEditors", "Close Editors to the Right in Group"), original: "Close Editors to the Right in Group" }, category: Categories.View }, when: ActiveEditorLastInGroupContext.toNegated() });
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: CLOSE_EDITORS_AND_GROUP_COMMAND_ID, title: { value: localize("closeEditorGroup", "Close Editor Group"), original: "Close Editor Group" }, category: Categories.View }, when: MultipleEditorGroupsContext });
MenuRegistry.appendMenuItem(MenuId.CommandPalette, { command: { id: REOPEN_WITH_COMMAND_ID, title: { value: localize("reopenWith", "Reopen Editor With..."), original: "Reopen Editor With..." }, category: Categories.View }, when: ActiveEditorAvailableEditorIdsContext });
MenuRegistry.appendMenuItem(MenuId.MenubarRecentMenu, {
  group: "1_editor",
  command: {
    id: ReopenClosedEditorAction.ID,
    title: localize(
      { key: "miReopenClosedEditor", comment: ["&& denotes a mnemonic"] },
      "&&Reopen Closed Editor"
    ),
    precondition: ContextKeyExpr.has("canReopenClosedEditor")
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarRecentMenu, {
  group: "z_clear",
  command: {
    id: ClearRecentFilesAction.ID,
    title: localize(
      { key: "miClearRecentOpen", comment: ["&& denotes a mnemonic"] },
      "&&Clear Recently Opened"
    )
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarViewMenu, {
  group: "2_appearance",
  title: localize(
    { key: "miEditorLayout", comment: ["&& denotes a mnemonic"] },
    "Editor &&Layout"
  ),
  submenu: MenuId.MenubarLayoutMenu,
  order: 2
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "1_split",
  command: {
    id: SPLIT_EDITOR_UP,
    title: {
      original: "Split Up",
      value: localize("miSplitEditorUpWithoutMnemonic", "Split Up"),
      mnemonicTitle: localize(
        { key: "miSplitEditorUp", comment: ["&& denotes a mnemonic"] },
        "Split &&Up"
      )
    }
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "1_split",
  command: {
    id: SPLIT_EDITOR_DOWN,
    title: {
      original: "Split Down",
      value: localize("miSplitEditorDownWithoutMnemonic", "Split Down"),
      mnemonicTitle: localize(
        { key: "miSplitEditorDown", comment: ["&& denotes a mnemonic"] },
        "Split &&Down"
      )
    }
  },
  order: 2
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "1_split",
  command: {
    id: SPLIT_EDITOR_LEFT,
    title: {
      original: "Split Left",
      value: localize("miSplitEditorLeftWithoutMnemonic", "Split Left"),
      mnemonicTitle: localize(
        { key: "miSplitEditorLeft", comment: ["&& denotes a mnemonic"] },
        "Split &&Left"
      )
    }
  },
  order: 3
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "1_split",
  command: {
    id: SPLIT_EDITOR_RIGHT,
    title: {
      original: "Split Right",
      value: localize("miSplitEditorRightWithoutMnemonic", "Split Right"),
      mnemonicTitle: localize(
        { key: "miSplitEditorRight", comment: ["&& denotes a mnemonic"] },
        "Split &&Right"
      )
    }
  },
  order: 4
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "2_split_in_group",
  command: {
    id: SPLIT_EDITOR_IN_GROUP,
    title: {
      original: "Split in Group",
      value: localize("miSplitEditorInGroupWithoutMnemonic", "Split in Group"),
      mnemonicTitle: localize(
        { key: "miSplitEditorInGroup", comment: ["&& denotes a mnemonic"] },
        "Split in &&Group"
      )
    }
  },
  when: ActiveEditorCanSplitInGroupContext,
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "2_split_in_group",
  command: {
    id: JOIN_EDITOR_IN_GROUP,
    title: {
      original: "Join in Group",
      value: localize("miJoinEditorInGroupWithoutMnemonic", "Join in Group"),
      mnemonicTitle: localize(
        { key: "miJoinEditorInGroup", comment: ["&& denotes a mnemonic"] },
        "Join in &&Group"
      )
    }
  },
  when: SideBySideEditorActiveContext,
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: EditorLayoutSingleAction.ID,
    title: {
      original: "Single",
      value: localize("miSingleColumnEditorLayoutWithoutMnemonic", "Single"),
      mnemonicTitle: localize(
        { key: "miSingleColumnEditorLayout", comment: ["&& denotes a mnemonic"] },
        "&&Single"
      )
    }
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: EditorLayoutTwoColumnsAction.ID,
    title: {
      original: "Two Columns",
      value: localize("miTwoColumnsEditorLayoutWithoutMnemonic", "Two Columns"),
      mnemonicTitle: localize(
        { key: "miTwoColumnsEditorLayout", comment: ["&& denotes a mnemonic"] },
        "&&Two Columns"
      )
    }
  },
  order: 3
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: EditorLayoutThreeColumnsAction.ID,
    title: {
      original: "Three Columns",
      value: localize("miThreeColumnsEditorLayoutWithoutMnemonic", "Three Columns"),
      mnemonicTitle: localize(
        { key: "miThreeColumnsEditorLayout", comment: ["&& denotes a mnemonic"] },
        "T&&hree Columns"
      )
    }
  },
  order: 4
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: EditorLayoutTwoRowsAction.ID,
    title: {
      original: "Two Rows",
      value: localize("miTwoRowsEditorLayoutWithoutMnemonic", "Two Rows"),
      mnemonicTitle: localize(
        { key: "miTwoRowsEditorLayout", comment: ["&& denotes a mnemonic"] },
        "T&&wo Rows"
      )
    }
  },
  order: 5
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: EditorLayoutThreeRowsAction.ID,
    title: {
      original: "Three Rows",
      value: localize("miThreeRowsEditorLayoutWithoutMnemonic", "Three Rows"),
      mnemonicTitle: localize(
        { key: "miThreeRowsEditorLayout", comment: ["&& denotes a mnemonic"] },
        "Three &&Rows"
      )
    }
  },
  order: 6
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: EditorLayoutTwoByTwoGridAction.ID,
    title: {
      original: "Grid (2x2)",
      value: localize("miTwoByTwoGridEditorLayoutWithoutMnemonic", "Grid (2x2)"),
      mnemonicTitle: localize(
        { key: "miTwoByTwoGridEditorLayout", comment: ["&& denotes a mnemonic"] },
        "&&Grid (2x2)"
      )
    }
  },
  order: 7
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: EditorLayoutTwoRowsRightAction.ID,
    title: {
      original: "Two Rows Right",
      value: localize("miTwoRowsRightEditorLayoutWithoutMnemonic", "Two Rows Right"),
      mnemonicTitle: localize(
        { key: "miTwoRowsRightEditorLayout", comment: ["&& denotes a mnemonic"] },
        "Two R&&ows Right"
      )
    }
  },
  order: 8
});
MenuRegistry.appendMenuItem(MenuId.MenubarLayoutMenu, {
  group: "3_layouts",
  command: {
    id: EditorLayoutTwoColumnsBottomAction.ID,
    title: {
      original: "Two Columns Bottom",
      value: localize("miTwoColumnsBottomEditorLayoutWithoutMnemonic", "Two Columns Bottom"),
      mnemonicTitle: localize(
        { key: "miTwoColumnsBottomEditorLayout", comment: ["&& denotes a mnemonic"] },
        "Two &&Columns Bottom"
      )
    }
  },
  order: 9
});
MenuRegistry.appendMenuItem(MenuId.MenubarGoMenu, {
  group: "1_history_nav",
  command: {
    id: "workbench.action.navigateToLastEditLocation",
    title: localize(
      { key: "miLastEditLocation", comment: ["&& denotes a mnemonic"] },
      "&&Last Edit Location"
    ),
    precondition: ContextKeyExpr.has("canNavigateToLastEditLocation")
  },
  order: 3
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchEditorMenu, {
  group: "1_sideBySide",
  command: {
    id: FOCUS_FIRST_SIDE_EDITOR,
    title: localize(
      { key: "miFirstSideEditor", comment: ["&& denotes a mnemonic"] },
      "&&First Side in Editor"
    )
  },
  when: ContextKeyExpr.or(SideBySideEditorActiveContext, TextCompareEditorActiveContext),
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchEditorMenu, {
  group: "1_sideBySide",
  command: {
    id: FOCUS_SECOND_SIDE_EDITOR,
    title: localize(
      { key: "miSecondSideEditor", comment: ["&& denotes a mnemonic"] },
      "&&Second Side in Editor"
    )
  },
  when: ContextKeyExpr.or(SideBySideEditorActiveContext, TextCompareEditorActiveContext),
  order: 2
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchEditorMenu, {
  group: "2_any",
  command: {
    id: "workbench.action.nextEditor",
    title: localize(
      { key: "miNextEditor", comment: ["&& denotes a mnemonic"] },
      "&&Next Editor"
    )
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchEditorMenu, {
  group: "2_any",
  command: {
    id: "workbench.action.previousEditor",
    title: localize(
      { key: "miPreviousEditor", comment: ["&& denotes a mnemonic"] },
      "&&Previous Editor"
    )
  },
  order: 2
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchEditorMenu, {
  group: "3_any_used",
  command: {
    id: "workbench.action.openNextRecentlyUsedEditor",
    title: localize(
      { key: "miNextRecentlyUsedEditor", comment: ["&& denotes a mnemonic"] },
      "&&Next Used Editor"
    )
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchEditorMenu, {
  group: "3_any_used",
  command: {
    id: "workbench.action.openPreviousRecentlyUsedEditor",
    title: localize(
      { key: "miPreviousRecentlyUsedEditor", comment: ["&& denotes a mnemonic"] },
      "&&Previous Used Editor"
    )
  },
  order: 2
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchEditorMenu, {
  group: "4_group",
  command: {
    id: "workbench.action.nextEditorInGroup",
    title: localize(
      { key: "miNextEditorInGroup", comment: ["&& denotes a mnemonic"] },
      "&&Next Editor in Group"
    )
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchEditorMenu, {
  group: "4_group",
  command: {
    id: "workbench.action.previousEditorInGroup",
    title: localize(
      { key: "miPreviousEditorInGroup", comment: ["&& denotes a mnemonic"] },
      "&&Previous Editor in Group"
    )
  },
  order: 2
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchEditorMenu, {
  group: "5_group_used",
  command: {
    id: "workbench.action.openNextRecentlyUsedEditorInGroup",
    title: localize(
      { key: "miNextUsedEditorInGroup", comment: ["&& denotes a mnemonic"] },
      "&&Next Used Editor in Group"
    )
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchEditorMenu, {
  group: "5_group_used",
  command: {
    id: "workbench.action.openPreviousRecentlyUsedEditorInGroup",
    title: localize(
      { key: "miPreviousUsedEditorInGroup", comment: ["&& denotes a mnemonic"] },
      "&&Previous Used Editor in Group"
    )
  },
  order: 2
});
MenuRegistry.appendMenuItem(MenuId.MenubarGoMenu, {
  group: "2_editor_nav",
  title: localize(
    { key: "miSwitchEditor", comment: ["&& denotes a mnemonic"] },
    "Switch &&Editor"
  ),
  submenu: MenuId.MenubarSwitchEditorMenu,
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "1_focus_index",
  command: {
    id: "workbench.action.focusFirstEditorGroup",
    title: localize(
      { key: "miFocusFirstGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&1"
    )
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "1_focus_index",
  command: {
    id: "workbench.action.focusSecondEditorGroup",
    title: localize(
      { key: "miFocusSecondGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&2"
    )
  },
  order: 2
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "1_focus_index",
  command: {
    id: "workbench.action.focusThirdEditorGroup",
    title: localize(
      { key: "miFocusThirdGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&3"
    ),
    precondition: MultipleEditorGroupsContext
  },
  order: 3
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "1_focus_index",
  command: {
    id: "workbench.action.focusFourthEditorGroup",
    title: localize(
      { key: "miFocusFourthGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&4"
    ),
    precondition: MultipleEditorGroupsContext
  },
  order: 4
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "1_focus_index",
  command: {
    id: "workbench.action.focusFifthEditorGroup",
    title: localize(
      { key: "miFocusFifthGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&5"
    ),
    precondition: MultipleEditorGroupsContext
  },
  order: 5
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "2_next_prev",
  command: {
    id: "workbench.action.focusNextGroup",
    title: localize({ key: "miNextGroup", comment: ["&& denotes a mnemonic"] }, "&&Next Group"),
    precondition: MultipleEditorGroupsContext
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "2_next_prev",
  command: {
    id: "workbench.action.focusPreviousGroup",
    title: localize(
      { key: "miPreviousGroup", comment: ["&& denotes a mnemonic"] },
      "&&Previous Group"
    ),
    precondition: MultipleEditorGroupsContext
  },
  order: 2
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "3_directional",
  command: {
    id: "workbench.action.focusLeftGroup",
    title: localize(
      { key: "miFocusLeftGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&Left"
    ),
    precondition: MultipleEditorGroupsContext
  },
  order: 1
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "3_directional",
  command: {
    id: "workbench.action.focusRightGroup",
    title: localize(
      { key: "miFocusRightGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&Right"
    ),
    precondition: MultipleEditorGroupsContext
  },
  order: 2
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "3_directional",
  command: {
    id: "workbench.action.focusAboveGroup",
    title: localize(
      { key: "miFocusAboveGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&Above"
    ),
    precondition: MultipleEditorGroupsContext
  },
  order: 3
});
MenuRegistry.appendMenuItem(MenuId.MenubarSwitchGroupMenu, {
  group: "3_directional",
  command: {
    id: "workbench.action.focusBelowGroup",
    title: localize(
      { key: "miFocusBelowGroup", comment: ["&& denotes a mnemonic"] },
      "Group &&Below"
    ),
    precondition: MultipleEditorGroupsContext
  },
  order: 4
});
MenuRegistry.appendMenuItem(MenuId.MenubarGoMenu, {
  group: "2_editor_nav",
  title: localize(
    { key: "miSwitchGroup", comment: ["&& denotes a mnemonic"] },
    "Switch &&Group"
  ),
  submenu: MenuId.MenubarSwitchGroupMenu,
  order: 2
});
let CodeEditorService = class CodeEditorService2 extends AbstractCodeEditorService {
  constructor(editorService, themeService, configurationService) {
    super(themeService);
    this.editorService = editorService;
    this.configurationService = configurationService;
    this.registerCodeEditorOpenHandler(this.doOpenCodeEditor.bind(this));
    this.registerCodeEditorOpenHandler(this.doOpenCodeEditorFromDiff.bind(this));
  }
  getActiveCodeEditor() {
    var _a2;
    const activeTextEditorControl = this.editorService.activeTextEditorControl;
    if (isCodeEditor(activeTextEditorControl)) {
      return activeTextEditorControl;
    }
    if (isDiffEditor(activeTextEditorControl)) {
      return activeTextEditorControl.getModifiedEditor();
    }
    const activeControl = (_a2 = this.editorService.activeEditorPane) == null ? void 0 : _a2.getControl();
    if (isCompositeEditor(activeControl) && isCodeEditor(activeControl.activeCodeEditor)) {
      return activeControl.activeCodeEditor;
    }
    return null;
  }
  async doOpenCodeEditorFromDiff(input, source, sideBySide) {
    var _a2;
    const activeTextEditorControl = this.editorService.activeTextEditorControl;
    if (!sideBySide && isDiffEditor(activeTextEditorControl) && input.options && input.resource && source === activeTextEditorControl.getModifiedEditor() && activeTextEditorControl.getModel() && isEqual(input.resource, (_a2 = activeTextEditorControl.getModel()) == null ? void 0 : _a2.modified.uri)) {
      const targetEditor = activeTextEditorControl.getModifiedEditor();
      applyTextEditorOptions(input.options, targetEditor, 0);
      return targetEditor;
    }
    return null;
  }
  async doOpenCodeEditor(input, source, sideBySide) {
    var _a2, _b2, _c2, _d2;
    const enablePreviewFromCodeNavigation = (_b2 = (_a2 = this.configurationService.getValue().workbench) == null ? void 0 : _a2.editor) == null ? void 0 : _b2.enablePreviewFromCodeNavigation;
    if (!enablePreviewFromCodeNavigation && source && !((_c2 = input.options) == null ? void 0 : _c2.pinned) && !sideBySide && !isEqual((_d2 = source.getModel()) == null ? void 0 : _d2.uri, input.resource)) {
      for (const visiblePane of this.editorService.visibleEditorPanes) {
        if (getCodeEditor(visiblePane.getControl()) === source) {
          visiblePane.group.pinEditor();
          break;
        }
      }
    }
    const control = await this.editorService.openEditor(input, sideBySide ? SIDE_GROUP : ACTIVE_GROUP);
    if (control) {
      const widget = control.getControl();
      if (isCodeEditor(widget)) {
        return widget;
      }
      if (isCompositeEditor(widget) && isCodeEditor(widget.activeCodeEditor)) {
        return widget.activeCodeEditor;
      }
    }
    return null;
  }
};
CodeEditorService = __decorate([
  __param(0, IEditorService),
  __param(1, IThemeService),
  __param(2, IConfigurationService)
], CodeEditorService);
let EditorsObserver = (_j = class extends Disposable {
  get count() {
    return this.mostRecentEditorsMap.size;
  }
  get editors() {
    return [...this.mostRecentEditorsMap.values()];
  }
  hasEditor(editor) {
    const editors = this.editorsPerResourceCounter.get(editor.resource);
    return (editors == null ? void 0 : editors.has(this.toIdentifier(editor))) ?? false;
  }
  hasEditors(resource) {
    return this.editorsPerResourceCounter.has(resource);
  }
  toIdentifier(arg1, editorId) {
    if (typeof arg1 !== "string") {
      return this.toIdentifier(arg1.typeId, arg1.editorId);
    }
    if (editorId) {
      return `${arg1}/${editorId}`;
    }
    return arg1;
  }
  constructor(editorGroupsService, storageService) {
    super();
    this.editorGroupsService = editorGroupsService;
    this.storageService = storageService;
    this.keyMap = /* @__PURE__ */ new Map();
    this.mostRecentEditorsMap = new LinkedMap();
    this.editorsPerResourceCounter = new ResourceMap();
    this._onDidMostRecentlyActiveEditorsChange = this._register(new Emitter());
    this.onDidMostRecentlyActiveEditorsChange = this._onDidMostRecentlyActiveEditorsChange.event;
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.storageService.onWillSaveState(() => this.saveState()));
    this._register(this.editorGroupsService.onDidAddGroup((group) => this.onGroupAdded(group)));
    this._register(this.editorGroupsService.onDidChangeEditorPartOptions((e) => this.onDidChangeEditorPartOptions(e)));
    this.editorGroupsService.whenReady.then(() => this.loadState());
  }
  onGroupAdded(group) {
    const groupEditorsMru = group.getEditors(0);
    for (let i = groupEditorsMru.length - 1; i >= 0; i--) {
      this.addMostRecentEditor(group, groupEditorsMru[i], false, true);
    }
    if (this.editorGroupsService.activeGroup === group && group.activeEditor) {
      this.addMostRecentEditor(group, group.activeEditor, true, false);
    }
    this.registerGroupListeners(group);
  }
  registerGroupListeners(group) {
    const groupDisposables = new DisposableStore();
    groupDisposables.add(group.onDidModelChange((e) => {
      switch (e.kind) {
        case 0: {
          if (this.editorGroupsService.activeGroup === group && group.activeEditor) {
            this.addMostRecentEditor(group, group.activeEditor, true, false);
          }
          break;
        }
        case 3: {
          if (e.editor) {
            this.addMostRecentEditor(group, e.editor, false, true);
            this.ensureOpenedEditorsLimit({ groupId: group.id, editor: e.editor }, group.id);
          }
          break;
        }
      }
    }));
    groupDisposables.add(group.onDidCloseEditor((e) => {
      this.removeMostRecentEditor(group, e.editor);
    }));
    groupDisposables.add(group.onDidActiveEditorChange((e) => {
      if (e.editor) {
        this.addMostRecentEditor(group, e.editor, this.editorGroupsService.activeGroup === group, false);
      }
    }));
    Event.once(group.onWillDispose)(() => dispose(groupDisposables));
  }
  onDidChangeEditorPartOptions(event) {
    if (!equals(event.newPartOptions.limit, event.oldPartOptions.limit)) {
      const activeGroup = this.editorGroupsService.activeGroup;
      let exclude = void 0;
      if (activeGroup.activeEditor) {
        exclude = { editor: activeGroup.activeEditor, groupId: activeGroup.id };
      }
      this.ensureOpenedEditorsLimit(exclude);
    }
  }
  addMostRecentEditor(group, editor, isActive2, isNew) {
    const key = this.ensureKey(group, editor);
    const mostRecentEditor = this.mostRecentEditorsMap.first;
    if (isActive2 || !mostRecentEditor) {
      this.mostRecentEditorsMap.set(key, key, mostRecentEditor ? 1 : void 0);
    } else {
      this.mostRecentEditorsMap.set(key, key, 1);
      this.mostRecentEditorsMap.set(mostRecentEditor, mostRecentEditor, 1);
    }
    if (isNew) {
      this.updateEditorResourcesMap(editor, true);
    }
    this._onDidMostRecentlyActiveEditorsChange.fire();
  }
  updateEditorResourcesMap(editor, add) {
    let resource = void 0;
    let typeId = void 0;
    let editorId = void 0;
    if (editor instanceof SideBySideEditorInput) {
      resource = editor.primary.resource;
      typeId = editor.primary.typeId;
      editorId = editor.primary.editorId;
    } else {
      resource = editor.resource;
      typeId = editor.typeId;
      editorId = editor.editorId;
    }
    if (!resource) {
      return;
    }
    const identifier = this.toIdentifier(typeId, editorId);
    if (add) {
      let editorsPerResource = this.editorsPerResourceCounter.get(resource);
      if (!editorsPerResource) {
        editorsPerResource = /* @__PURE__ */ new Map();
        this.editorsPerResourceCounter.set(resource, editorsPerResource);
      }
      editorsPerResource.set(identifier, (editorsPerResource.get(identifier) ?? 0) + 1);
    } else {
      const editorsPerResource = this.editorsPerResourceCounter.get(resource);
      if (editorsPerResource) {
        const counter = editorsPerResource.get(identifier) ?? 0;
        if (counter > 1) {
          editorsPerResource.set(identifier, counter - 1);
        } else {
          editorsPerResource.delete(identifier);
          if (editorsPerResource.size === 0) {
            this.editorsPerResourceCounter.delete(resource);
          }
        }
      }
    }
  }
  removeMostRecentEditor(group, editor) {
    this.updateEditorResourcesMap(editor, false);
    const key = this.findKey(group, editor);
    if (key) {
      this.mostRecentEditorsMap.delete(key);
      const map = this.keyMap.get(group.id);
      if (map && map.delete(key.editor) && map.size === 0) {
        this.keyMap.delete(group.id);
      }
      this._onDidMostRecentlyActiveEditorsChange.fire();
    }
  }
  findKey(group, editor) {
    const groupMap = this.keyMap.get(group.id);
    if (!groupMap) {
      return void 0;
    }
    return groupMap.get(editor);
  }
  ensureKey(group, editor) {
    let groupMap = this.keyMap.get(group.id);
    if (!groupMap) {
      groupMap = /* @__PURE__ */ new Map();
      this.keyMap.set(group.id, groupMap);
    }
    let key = groupMap.get(editor);
    if (!key) {
      key = { groupId: group.id, editor };
      groupMap.set(editor, key);
    }
    return key;
  }
  async ensureOpenedEditorsLimit(exclude, groupId) {
    var _a2, _b2;
    if (!((_a2 = this.editorGroupsService.partOptions.limit) == null ? void 0 : _a2.enabled) || typeof this.editorGroupsService.partOptions.limit.value !== "number" || this.editorGroupsService.partOptions.limit.value <= 0) {
      return;
    }
    const limit = this.editorGroupsService.partOptions.limit.value;
    if ((_b2 = this.editorGroupsService.partOptions.limit) == null ? void 0 : _b2.perEditorGroup) {
      if (typeof groupId === "number") {
        const group = this.editorGroupsService.getGroup(groupId);
        if (group) {
          await this.doEnsureOpenedEditorsLimit(limit, group.getEditors(0).map((editor) => ({ editor, groupId })), exclude);
        }
      } else {
        for (const group of this.editorGroupsService.groups) {
          await this.ensureOpenedEditorsLimit(exclude, group.id);
        }
      }
    } else {
      await this.doEnsureOpenedEditorsLimit(limit, [...this.mostRecentEditorsMap.values()], exclude);
    }
  }
  async doEnsureOpenedEditorsLimit(limit, mostRecentEditors, exclude) {
    var _a2;
    let mostRecentEditorsCountingForLimit;
    if ((_a2 = this.editorGroupsService.partOptions.limit) == null ? void 0 : _a2.excludeDirty) {
      mostRecentEditorsCountingForLimit = mostRecentEditors.filter(({ editor }) => {
        if (editor.isDirty() && !editor.isSaving() || editor.hasCapability(512)) {
          return false;
        }
        return true;
      });
    } else {
      mostRecentEditorsCountingForLimit = mostRecentEditors;
    }
    if (limit >= mostRecentEditorsCountingForLimit.length) {
      return;
    }
    const leastRecentlyClosableEditors = mostRecentEditorsCountingForLimit.reverse().filter(({ editor, groupId }) => {
      var _a3;
      if (editor.isDirty() && !editor.isSaving() || editor.hasCapability(512)) {
        return false;
      }
      if (exclude && editor === exclude.editor && groupId === exclude.groupId) {
        return false;
      }
      if ((_a3 = this.editorGroupsService.getGroup(groupId)) == null ? void 0 : _a3.isSticky(editor)) {
        return false;
      }
      return true;
    });
    let editorsToCloseCount = mostRecentEditorsCountingForLimit.length - limit;
    const mapGroupToEditorsToClose = /* @__PURE__ */ new Map();
    for (const { groupId, editor } of leastRecentlyClosableEditors) {
      let editorsInGroupToClose = mapGroupToEditorsToClose.get(groupId);
      if (!editorsInGroupToClose) {
        editorsInGroupToClose = [];
        mapGroupToEditorsToClose.set(groupId, editorsInGroupToClose);
      }
      editorsInGroupToClose.push(editor);
      editorsToCloseCount--;
      if (editorsToCloseCount === 0) {
        break;
      }
    }
    for (const [groupId, editors] of mapGroupToEditorsToClose) {
      const group = this.editorGroupsService.getGroup(groupId);
      if (group) {
        await group.closeEditors(editors, { preserveFocus: true });
      }
    }
  }
  saveState() {
    if (this.mostRecentEditorsMap.isEmpty()) {
      this.storageService.remove(_j.STORAGE_KEY, 1);
    } else {
      this.storageService.store(_j.STORAGE_KEY, JSON.stringify(this.serialize()), 1, 1);
    }
  }
  serialize() {
    const registry = Registry.as(EditorExtensions.EditorFactory);
    const entries = [...this.mostRecentEditorsMap.values()];
    const mapGroupToSerializableEditorsOfGroup = /* @__PURE__ */ new Map();
    return {
      entries: coalesce(entries.map(({ editor, groupId }) => {
        const group = this.editorGroupsService.getGroup(groupId);
        if (!group) {
          return void 0;
        }
        let serializableEditorsOfGroup = mapGroupToSerializableEditorsOfGroup.get(group);
        if (!serializableEditorsOfGroup) {
          serializableEditorsOfGroup = group.getEditors(1).filter((editor2) => {
            const editorSerializer = registry.getEditorSerializer(editor2);
            return editorSerializer == null ? void 0 : editorSerializer.canSerialize(editor2);
          });
          mapGroupToSerializableEditorsOfGroup.set(group, serializableEditorsOfGroup);
        }
        const index = serializableEditorsOfGroup.indexOf(editor);
        if (index === -1) {
          return void 0;
        }
        return { groupId, index };
      }))
    };
  }
  loadState() {
    const serialized = this.storageService.get(_j.STORAGE_KEY, 1);
    if (serialized) {
      this.deserialize(JSON.parse(serialized));
    } else {
      const groups = this.editorGroupsService.getGroups(1);
      for (let i = groups.length - 1; i >= 0; i--) {
        const group = groups[i];
        const groupEditorsMru = group.getEditors(0);
        for (let i2 = groupEditorsMru.length - 1; i2 >= 0; i2--) {
          this.addMostRecentEditor(group, groupEditorsMru[i2], true, true);
        }
      }
    }
    for (const group of this.editorGroupsService.groups) {
      this.registerGroupListeners(group);
    }
  }
  deserialize(serialized) {
    const mapValues = [];
    for (const { groupId, index } of serialized.entries) {
      const group = this.editorGroupsService.getGroup(groupId);
      if (!group) {
        continue;
      }
      const editor = group.getEditorByIndex(index);
      if (!editor) {
        continue;
      }
      const editorIdentifier = this.ensureKey(group, editor);
      mapValues.push([editorIdentifier, editorIdentifier]);
      this.updateEditorResourcesMap(editor, true);
    }
    this.mostRecentEditorsMap.fromJSON(mapValues);
  }
}, _j.STORAGE_KEY = "editors.mru", _j);
EditorsObserver = __decorate([
  __param(0, IEditorGroupsService),
  __param(1, IStorageService)
], EditorsObserver);
let EditorService = class EditorService2 extends Disposable {
  constructor(editorGroupService, instantiationService, fileService, configurationService, contextService, uriIdentityService, editorResolverService, workspaceTrustRequestService, hostService, textEditorService) {
    super();
    this.editorGroupService = editorGroupService;
    this.instantiationService = instantiationService;
    this.fileService = fileService;
    this.configurationService = configurationService;
    this.contextService = contextService;
    this.uriIdentityService = uriIdentityService;
    this.editorResolverService = editorResolverService;
    this.workspaceTrustRequestService = workspaceTrustRequestService;
    this.hostService = hostService;
    this.textEditorService = textEditorService;
    this._onDidActiveEditorChange = this._register(new Emitter());
    this.onDidActiveEditorChange = this._onDidActiveEditorChange.event;
    this._onDidVisibleEditorsChange = this._register(new Emitter());
    this.onDidVisibleEditorsChange = this._onDidVisibleEditorsChange.event;
    this._onDidEditorsChange = this._register(new Emitter());
    this.onDidEditorsChange = this._onDidEditorsChange.event;
    this._onDidCloseEditor = this._register(new Emitter());
    this.onDidCloseEditor = this._onDidCloseEditor.event;
    this._onDidOpenEditorFail = this._register(new Emitter());
    this.onDidOpenEditorFail = this._onDidOpenEditorFail.event;
    this._onDidMostRecentlyActiveEditorsChange = this._register(new Emitter());
    this.onDidMostRecentlyActiveEditorsChange = this._onDidMostRecentlyActiveEditorsChange.event;
    this.lastActiveEditor = void 0;
    this.activeOutOfWorkspaceWatchers = new ResourceMap();
    this.closeOnFileDelete = false;
    this.editorsObserver = this._register(this.instantiationService.createInstance(EditorsObserver));
    this.onConfigurationUpdated();
    this.registerListeners();
  }
  registerListeners() {
    this.editorGroupService.whenReady.then(() => this.onEditorGroupsReady());
    this.editorGroupService.onDidChangeActiveGroup((group) => this.handleActiveEditorChange(group));
    this.editorGroupService.onDidAddGroup((group) => this.registerGroupListeners(group));
    this.editorsObserver.onDidMostRecentlyActiveEditorsChange(() => this._onDidMostRecentlyActiveEditorsChange.fire());
    this._register(this.onDidVisibleEditorsChange(() => this.handleVisibleEditorsChange()));
    this._register(this.fileService.onDidRunOperation((e) => this.onDidRunFileOperation(e)));
    this._register(this.fileService.onDidFilesChange((e) => this.onDidFilesChange(e)));
    this._register(this.configurationService.onDidChangeConfiguration((e) => this.onConfigurationUpdated(e)));
  }
  onEditorGroupsReady() {
    for (const group of this.editorGroupService.groups) {
      this.registerGroupListeners(group);
    }
    if (this.activeEditor) {
      this.doHandleActiveEditorChangeEvent();
      this._onDidVisibleEditorsChange.fire();
    }
  }
  handleActiveEditorChange(group) {
    if (group !== this.editorGroupService.activeGroup) {
      return;
    }
    if (!this.lastActiveEditor && !group.activeEditor) {
      return;
    }
    this.doHandleActiveEditorChangeEvent();
  }
  doHandleActiveEditorChangeEvent() {
    const activeGroup = this.editorGroupService.activeGroup;
    this.lastActiveEditor = withNullAsUndefined(activeGroup.activeEditor);
    this._onDidActiveEditorChange.fire();
  }
  registerGroupListeners(group) {
    const groupDisposables = new DisposableStore();
    groupDisposables.add(group.onDidModelChange((e) => {
      this._onDidEditorsChange.fire({ groupId: group.id, event: e });
    }));
    groupDisposables.add(group.onDidActiveEditorChange(() => {
      this.handleActiveEditorChange(group);
      this._onDidVisibleEditorsChange.fire();
    }));
    groupDisposables.add(group.onDidCloseEditor((e) => {
      this._onDidCloseEditor.fire(e);
    }));
    groupDisposables.add(group.onDidOpenEditorFail((editor) => {
      this._onDidOpenEditorFail.fire({ editor, groupId: group.id });
    }));
    Event.once(group.onWillDispose)(() => {
      dispose(groupDisposables);
    });
  }
  handleVisibleEditorsChange() {
    const visibleOutOfWorkspaceResources = new ResourceSet();
    for (const editor of this.visibleEditors) {
      const resources = distinct(coalesce([
        EditorResourceAccessor.getCanonicalUri(editor, { supportSideBySide: SideBySideEditor$1.PRIMARY }),
        EditorResourceAccessor.getCanonicalUri(editor, { supportSideBySide: SideBySideEditor$1.SECONDARY })
      ]), (resource) => resource.toString());
      for (const resource of resources) {
        if (this.fileService.hasProvider(resource) && !this.contextService.isInsideWorkspace(resource)) {
          visibleOutOfWorkspaceResources.add(resource);
        }
      }
    }
    for (const resource of this.activeOutOfWorkspaceWatchers.keys()) {
      if (!visibleOutOfWorkspaceResources.has(resource)) {
        dispose(this.activeOutOfWorkspaceWatchers.get(resource));
        this.activeOutOfWorkspaceWatchers.delete(resource);
      }
    }
    for (const resource of visibleOutOfWorkspaceResources.keys()) {
      if (!this.activeOutOfWorkspaceWatchers.get(resource)) {
        const disposable = this.fileService.watch(resource);
        this.activeOutOfWorkspaceWatchers.set(resource, disposable);
      }
    }
  }
  async onDidRunFileOperation(e) {
    if (e.isOperation(2)) {
      this.handleMovedFile(e.resource, e.target.resource);
    }
    if (e.isOperation(1) || e.isOperation(2)) {
      this.handleDeletedFile(e.resource, false, e.target ? e.target.resource : void 0);
    }
  }
  onDidFilesChange(e) {
    if (e.gotDeleted()) {
      this.handleDeletedFile(e, true);
    }
  }
  async handleMovedFile(source, target) {
    for (const group of this.editorGroupService.groups) {
      const replacements = [];
      for (const editor of group.editors) {
        const resource = editor.resource;
        if (!resource || !this.uriIdentityService.extUri.isEqualOrParent(resource, source)) {
          continue;
        }
        let targetResource;
        if (this.uriIdentityService.extUri.isEqual(source, resource)) {
          targetResource = target;
        } else {
          const index = indexOfPath(resource.path, source.path, this.uriIdentityService.extUri.ignorePathCasing(resource));
          targetResource = joinPath(target, resource.path.substr(index + source.path.length + 1));
        }
        const moveResult = await editor.rename(group.id, targetResource);
        if (!moveResult) {
          return;
        }
        const optionOverrides = {
          preserveFocus: true,
          pinned: group.isPinned(editor),
          sticky: group.isSticky(editor),
          index: group.getIndexOfEditor(editor),
          inactive: !group.isActive(editor)
        };
        if (isEditorInput(moveResult.editor)) {
          replacements.push({
            editor,
            replacement: moveResult.editor,
            options: {
              ...moveResult.options,
              ...optionOverrides
            }
          });
        } else {
          replacements.push({
            editor,
            replacement: {
              ...moveResult.editor,
              options: {
                ...moveResult.editor.options,
                ...optionOverrides
              }
            }
          });
        }
      }
      if (replacements.length) {
        this.replaceEditors(replacements, group);
      }
    }
  }
  onConfigurationUpdated(e) {
    var _a2, _b2;
    if (e && !e.affectsConfiguration("workbench.editor.closeOnFileDelete")) {
      return;
    }
    const configuration = this.configurationService.getValue();
    if (typeof ((_b2 = (_a2 = configuration.workbench) == null ? void 0 : _a2.editor) == null ? void 0 : _b2.closeOnFileDelete) === "boolean") {
      this.closeOnFileDelete = configuration.workbench.editor.closeOnFileDelete;
    } else {
      this.closeOnFileDelete = false;
    }
  }
  handleDeletedFile(arg1, isExternal, movedTo) {
    for (const editor of this.getAllNonDirtyEditors({ includeUntitled: false, supportSideBySide: true })) {
      (async () => {
        const resource = editor.resource;
        if (!resource) {
          return;
        }
        if (this.closeOnFileDelete || !isExternal) {
          if (movedTo && this.uriIdentityService.extUri.isEqualOrParent(resource, movedTo)) {
            return;
          }
          let matches = false;
          if (arg1 instanceof FileChangesEvent) {
            matches = arg1.contains(resource, 2);
          } else {
            matches = this.uriIdentityService.extUri.isEqualOrParent(resource, arg1);
          }
          if (!matches) {
            return;
          }
          let exists = false;
          if (isExternal && this.fileService.hasProvider(resource)) {
            await timeout(100);
            exists = await this.fileService.exists(resource);
          }
          if (!exists && !editor.isDisposed()) {
            editor.dispose();
          }
        }
      })();
    }
  }
  getAllNonDirtyEditors(options) {
    const editors = [];
    function conditionallyAddEditor(editor) {
      if (editor.hasCapability(4) && !options.includeUntitled) {
        return;
      }
      if (editor.isDirty()) {
        return;
      }
      editors.push(editor);
    }
    for (const editor of this.editors) {
      if (options.supportSideBySide && editor instanceof SideBySideEditorInput) {
        conditionallyAddEditor(editor.primary);
        conditionallyAddEditor(editor.secondary);
      } else {
        conditionallyAddEditor(editor);
      }
    }
    return editors;
  }
  get activeEditorPane() {
    var _a2;
    return (_a2 = this.editorGroupService.activeGroup) == null ? void 0 : _a2.activeEditorPane;
  }
  get activeTextEditorControl() {
    const activeEditorPane = this.activeEditorPane;
    if (activeEditorPane) {
      const activeControl = activeEditorPane.getControl();
      if (isCodeEditor(activeControl) || isDiffEditor(activeControl)) {
        return activeControl;
      }
      if (isCompositeEditor(activeControl) && isCodeEditor(activeControl.activeCodeEditor)) {
        return activeControl.activeCodeEditor;
      }
    }
    return void 0;
  }
  get activeTextEditorLanguageId() {
    var _a2;
    let activeCodeEditor = void 0;
    const activeTextEditorControl = this.activeTextEditorControl;
    if (isDiffEditor(activeTextEditorControl)) {
      activeCodeEditor = activeTextEditorControl.getModifiedEditor();
    } else {
      activeCodeEditor = activeTextEditorControl;
    }
    return (_a2 = activeCodeEditor == null ? void 0 : activeCodeEditor.getModel()) == null ? void 0 : _a2.getLanguageId();
  }
  get count() {
    return this.editorsObserver.count;
  }
  get editors() {
    return this.getEditors(1).map(({ editor }) => editor);
  }
  getEditors(order, options) {
    switch (order) {
      case 0:
        if (options == null ? void 0 : options.excludeSticky) {
          return this.editorsObserver.editors.filter(({ groupId, editor }) => {
            var _a2;
            return !((_a2 = this.editorGroupService.getGroup(groupId)) == null ? void 0 : _a2.isSticky(editor));
          });
        }
        return this.editorsObserver.editors;
      case 1: {
        const editors = [];
        for (const group of this.editorGroupService.getGroups(2)) {
          editors.push(...group.getEditors(1, options).map((editor) => ({ editor, groupId: group.id })));
        }
        return editors;
      }
    }
  }
  get activeEditor() {
    const activeGroup = this.editorGroupService.activeGroup;
    return activeGroup ? withNullAsUndefined(activeGroup.activeEditor) : void 0;
  }
  get visibleEditorPanes() {
    return coalesce(this.editorGroupService.groups.map((group) => group.activeEditorPane));
  }
  get visibleTextEditorControls() {
    const visibleTextEditorControls = [];
    for (const visibleEditorPane of this.visibleEditorPanes) {
      const control = visibleEditorPane.getControl();
      if (isCodeEditor(control) || isDiffEditor(control)) {
        visibleTextEditorControls.push(control);
      }
    }
    return visibleTextEditorControls;
  }
  get visibleEditors() {
    return coalesce(this.editorGroupService.groups.map((group) => group.activeEditor));
  }
  async openEditor(editor, optionsOrPreferredGroup, preferredGroup) {
    let typedEditor = void 0;
    let options = isEditorInput(editor) ? optionsOrPreferredGroup : editor.options;
    let group = void 0;
    if (isPreferredGroup(optionsOrPreferredGroup)) {
      preferredGroup = optionsOrPreferredGroup;
    }
    if (!isEditorInput(editor)) {
      const resolvedEditor = await this.editorResolverService.resolveEditor(editor, preferredGroup);
      if (resolvedEditor === 1) {
        return;
      }
      if (isEditorInputWithOptionsAndGroup(resolvedEditor)) {
        typedEditor = resolvedEditor.editor;
        options = resolvedEditor.options;
        group = resolvedEditor.group;
      }
    }
    if (!typedEditor) {
      typedEditor = isEditorInput(editor) ? editor : await this.textEditorService.resolveTextEditor(editor);
    }
    if (!group) {
      let activation = void 0;
      [group, activation] = this.instantiationService.invokeFunction(findGroup, { editor: typedEditor, options }, preferredGroup);
      if (activation) {
        options = { ...options, activation };
      }
    }
    return group.openEditor(typedEditor, options);
  }
  async openEditors(editors, preferredGroup, options) {
    if (options == null ? void 0 : options.validateTrust) {
      const editorsTrusted = await this.handleWorkspaceTrust(editors);
      if (!editorsTrusted) {
        return [];
      }
    }
    const mapGroupToTypedEditors = /* @__PURE__ */ new Map();
    for (const editor of editors) {
      let typedEditor = void 0;
      let group = void 0;
      if (!isEditorInputWithOptions(editor)) {
        const resolvedEditor = await this.editorResolverService.resolveEditor(editor, preferredGroup);
        if (resolvedEditor === 1) {
          continue;
        }
        if (isEditorInputWithOptionsAndGroup(resolvedEditor)) {
          typedEditor = resolvedEditor;
          group = resolvedEditor.group;
        }
      }
      if (!typedEditor) {
        typedEditor = isEditorInputWithOptions(editor) ? editor : { editor: await this.textEditorService.resolveTextEditor(editor), options: editor.options };
      }
      if (!group) {
        [group] = this.instantiationService.invokeFunction(findGroup, typedEditor, preferredGroup);
      }
      let targetGroupEditors = mapGroupToTypedEditors.get(group);
      if (!targetGroupEditors) {
        targetGroupEditors = [];
        mapGroupToTypedEditors.set(group, targetGroupEditors);
      }
      targetGroupEditors.push(typedEditor);
    }
    const result = [];
    for (const [group, editors2] of mapGroupToTypedEditors) {
      result.push(group.openEditors(editors2));
    }
    return coalesce(await Promises.settled(result));
  }
  async handleWorkspaceTrust(editors) {
    const { resources, diffMode, mergeMode } = this.extractEditorResources(editors);
    const trustResult = await this.workspaceTrustRequestService.requestOpenFilesTrust(resources);
    switch (trustResult) {
      case 1:
        return true;
      case 2:
        await this.hostService.openWindow(resources.map((resource) => ({ fileUri: resource })), { forceNewWindow: true, diffMode, mergeMode });
        return false;
      case 3:
        return false;
    }
  }
  extractEditorResources(editors) {
    const resources = new ResourceSet();
    let diffMode = false;
    let mergeMode = false;
    for (const editor of editors) {
      if (isEditorInputWithOptions(editor)) {
        const resource = EditorResourceAccessor.getOriginalUri(editor.editor, { supportSideBySide: SideBySideEditor$1.BOTH });
        if (URI.isUri(resource)) {
          resources.add(resource);
        } else if (resource) {
          if (resource.primary) {
            resources.add(resource.primary);
          }
          if (resource.secondary) {
            resources.add(resource.secondary);
          }
          diffMode = editor.editor instanceof DiffEditorInput;
        }
      } else {
        if (isResourceMergeEditorInput(editor)) {
          if (URI.isUri(editor.input1)) {
            resources.add(editor.input1.resource);
          }
          if (URI.isUri(editor.input2)) {
            resources.add(editor.input2.resource);
          }
          if (URI.isUri(editor.base)) {
            resources.add(editor.base.resource);
          }
          if (URI.isUri(editor.result)) {
            resources.add(editor.result.resource);
          }
          mergeMode = true;
        }
        if (isResourceDiffEditorInput(editor)) {
          if (URI.isUri(editor.original.resource)) {
            resources.add(editor.original.resource);
          }
          if (URI.isUri(editor.modified.resource)) {
            resources.add(editor.modified.resource);
          }
          diffMode = true;
        } else if (isResourceEditorInput(editor)) {
          resources.add(editor.resource);
        }
      }
    }
    return {
      resources: Array.from(resources.keys()),
      diffMode,
      mergeMode
    };
  }
  isOpened(editor) {
    return this.editorsObserver.hasEditor({
      resource: this.uriIdentityService.asCanonicalUri(editor.resource),
      typeId: editor.typeId,
      editorId: editor.editorId
    });
  }
  isVisible(editor) {
    var _a2;
    for (const group of this.editorGroupService.groups) {
      if ((_a2 = group.activeEditor) == null ? void 0 : _a2.matches(editor)) {
        return true;
      }
    }
    return false;
  }
  async closeEditor({ editor, groupId }, options) {
    const group = this.editorGroupService.getGroup(groupId);
    await (group == null ? void 0 : group.closeEditor(editor, options));
  }
  async closeEditors(editors, options) {
    const mapGroupToEditors = /* @__PURE__ */ new Map();
    for (const { editor, groupId } of editors) {
      const group = this.editorGroupService.getGroup(groupId);
      if (!group) {
        continue;
      }
      let editors2 = mapGroupToEditors.get(group);
      if (!editors2) {
        editors2 = [];
        mapGroupToEditors.set(group, editors2);
      }
      editors2.push(editor);
    }
    for (const [group, editors2] of mapGroupToEditors) {
      await group.closeEditors(editors2, options);
    }
  }
  findEditors(arg1, options, arg2) {
    const resource = URI.isUri(arg1) ? arg1 : arg1.resource;
    const typeId = URI.isUri(arg1) ? void 0 : arg1.typeId;
    if ((options == null ? void 0 : options.supportSideBySide) !== SideBySideEditor$1.ANY && (options == null ? void 0 : options.supportSideBySide) !== SideBySideEditor$1.SECONDARY) {
      if (!this.editorsObserver.hasEditors(resource)) {
        if (URI.isUri(arg1) || isUndefined(arg2)) {
          return [];
        }
        return void 0;
      }
    }
    if (!isUndefined(arg2)) {
      const targetGroup = typeof arg2 === "number" ? this.editorGroupService.getGroup(arg2) : arg2;
      if (URI.isUri(arg1)) {
        if (!targetGroup) {
          return [];
        }
        return targetGroup.findEditors(resource, options);
      } else {
        if (!targetGroup) {
          return void 0;
        }
        const editors = targetGroup.findEditors(resource, options);
        for (const editor of editors) {
          if (editor.typeId === typeId) {
            return editor;
          }
        }
        return void 0;
      }
    } else {
      const result = [];
      for (const group of this.editorGroupService.getGroups(1)) {
        const editors = [];
        if (URI.isUri(arg1)) {
          editors.push(...this.findEditors(arg1, options, group));
        } else {
          const editor = this.findEditors(arg1, options, group);
          if (editor) {
            editors.push(editor);
          }
        }
        result.push(...editors.map((editor) => ({ editor, groupId: group.id })));
      }
      return result;
    }
  }
  async replaceEditors(replacements, group) {
    const targetGroup = typeof group === "number" ? this.editorGroupService.getGroup(group) : group;
    const typedReplacements = [];
    for (const replacement of replacements) {
      let typedReplacement = void 0;
      if (!isEditorInput(replacement.replacement)) {
        const resolvedEditor = await this.editorResolverService.resolveEditor(replacement.replacement, targetGroup);
        if (resolvedEditor === 1) {
          continue;
        }
        if (isEditorInputWithOptionsAndGroup(resolvedEditor)) {
          typedReplacement = {
            editor: replacement.editor,
            replacement: resolvedEditor.editor,
            options: resolvedEditor.options,
            forceReplaceDirty: replacement.forceReplaceDirty
          };
        }
      }
      if (!typedReplacement) {
        typedReplacement = {
          editor: replacement.editor,
          replacement: isEditorReplacement(replacement) ? replacement.replacement : await this.textEditorService.resolveTextEditor(replacement.replacement),
          options: isEditorReplacement(replacement) ? replacement.options : replacement.replacement.options,
          forceReplaceDirty: replacement.forceReplaceDirty
        };
      }
      typedReplacements.push(typedReplacement);
    }
    return targetGroup == null ? void 0 : targetGroup.replaceEditors(typedReplacements);
  }
  async save(editors, options) {
    if (!Array.isArray(editors)) {
      editors = [editors];
    }
    const uniqueEditors = this.getUniqueEditors(editors);
    const editorsToSaveParallel = [];
    const editorsToSaveSequentially = [];
    if (options == null ? void 0 : options.saveAs) {
      editorsToSaveSequentially.push(...uniqueEditors);
    } else {
      for (const { groupId, editor } of uniqueEditors) {
        if (editor.hasCapability(4)) {
          editorsToSaveSequentially.push({ groupId, editor });
        } else {
          editorsToSaveParallel.push({ groupId, editor });
        }
      }
    }
    const saveResults = await Promises.settled(editorsToSaveParallel.map(({ groupId, editor }) => {
      var _a2;
      if ((options == null ? void 0 : options.reason) === 1) {
        (_a2 = this.editorGroupService.getGroup(groupId)) == null ? void 0 : _a2.pinEditor(editor);
      }
      return editor.save(groupId, options);
    }));
    for (const { groupId, editor } of editorsToSaveSequentially) {
      if (editor.isDisposed()) {
        continue;
      }
      const editorPane = await this.openEditor(editor, groupId);
      const editorOptions = {
        pinned: true,
        viewState: editorPane == null ? void 0 : editorPane.getViewState()
      };
      const result = (options == null ? void 0 : options.saveAs) ? await editor.saveAs(groupId, options) : await editor.save(groupId, options);
      saveResults.push(result);
      if (!result) {
        break;
      }
      if (!editor.matches(result)) {
        const targetGroups = editor.hasCapability(4) ? this.editorGroupService.groups.map((group) => group.id) : [groupId];
        for (const targetGroup of targetGroups) {
          if (result instanceof EditorInput) {
            await this.replaceEditors([{ editor, replacement: result, options: editorOptions }], targetGroup);
          } else {
            await this.replaceEditors([{ editor, replacement: { ...result, options: editorOptions } }], targetGroup);
          }
        }
      }
    }
    return {
      success: saveResults.every((result) => !!result),
      editors: coalesce(saveResults)
    };
  }
  saveAll(options) {
    return this.save(this.getAllModifiedEditors(options), options);
  }
  async revert(editors, options) {
    if (!Array.isArray(editors)) {
      editors = [editors];
    }
    const uniqueEditors = this.getUniqueEditors(editors);
    await Promises.settled(uniqueEditors.map(async ({ groupId, editor }) => {
      var _a2;
      (_a2 = this.editorGroupService.getGroup(groupId)) == null ? void 0 : _a2.pinEditor(editor);
      return editor.revert(groupId, options);
    }));
    return !uniqueEditors.some(({ editor }) => editor.isDirty());
  }
  async revertAll(options) {
    return this.revert(this.getAllModifiedEditors(options), options);
  }
  getAllModifiedEditors(options) {
    var _a2;
    const editors = [];
    for (const group of this.editorGroupService.getGroups(1)) {
      for (const editor of group.getEditors(0)) {
        if (!editor.isModified()) {
          continue;
        }
        if ((typeof (options == null ? void 0 : options.includeUntitled) === "boolean" || !((_a2 = options == null ? void 0 : options.includeUntitled) == null ? void 0 : _a2.includeScratchpad)) && editor.hasCapability(512)) {
          continue;
        }
        if (!(options == null ? void 0 : options.includeUntitled) && editor.hasCapability(4)) {
          continue;
        }
        if ((options == null ? void 0 : options.excludeSticky) && group.isSticky(editor)) {
          continue;
        }
        editors.push({ groupId: group.id, editor });
      }
    }
    return editors;
  }
  getUniqueEditors(editors) {
    const uniqueEditors = [];
    for (const { editor, groupId } of editors) {
      if (uniqueEditors.some((uniqueEditor) => uniqueEditor.editor.matches(editor))) {
        continue;
      }
      uniqueEditors.push({ editor, groupId });
    }
    return uniqueEditors;
  }
  dispose() {
    super.dispose();
    this.activeOutOfWorkspaceWatchers.forEach((disposable) => dispose(disposable));
    this.activeOutOfWorkspaceWatchers.clear();
  }
};
EditorService = __decorate([
  __param(0, IEditorGroupsService),
  __param(1, IInstantiationService),
  __param(2, IFileService),
  __param(3, IConfigurationService),
  __param(4, IWorkspaceContextService),
  __param(5, IUriIdentityService),
  __param(6, IEditorResolverService),
  __param(7, IWorkspaceTrustRequestService),
  __param(8, IHostService),
  __param(9, ITextEditorService)
], EditorService);
class SimpleEditorPane {
  constructor(editor) {
    this.editor = editor;
    this.onDidChangeControl = Event.None;
    this.onDidChangeSizeConstraints = Event.None;
    this.onDidFocus = Event.None;
    this.onDidBlur = Event.None;
    this.input = void 0;
    this.options = void 0;
    this.group = void 0;
    this.scopedContextKeyService = void 0;
    this.getViewState = unsupported;
    this.isVisible = unsupported;
    this.hasFocus = unsupported;
    this.getId = unsupported;
    this.getTitle = unsupported;
    this.focus = unsupported;
  }
  get minimumWidth() {
    return DEFAULT_EDITOR_MIN_DIMENSIONS.width;
  }
  get maximumWidth() {
    return DEFAULT_EDITOR_MAX_DIMENSIONS.width;
  }
  get minimumHeight() {
    return DEFAULT_EDITOR_MIN_DIMENSIONS.height;
  }
  get maximumHeight() {
    return DEFAULT_EDITOR_MAX_DIMENSIONS.height;
  }
  getControl() {
    return this.editor;
  }
}
function wrapOpenEditor(textModelService, defaultBehavior, fallbackBahavior) {
  async function openEditor(editor, optionsOrPreferredGroup, preferredGroup) {
    const options = isEditorInput(editor) ? optionsOrPreferredGroup : editor.options;
    if (isPreferredGroup(optionsOrPreferredGroup)) {
      preferredGroup = optionsOrPreferredGroup;
    }
    const resource = isResourceEditorInput(editor) || isEditorInput(editor) ? editor.resource : void 0;
    if (resource == null || !textModelService.canHandleResource(resource)) {
      return defaultBehavior(editor, optionsOrPreferredGroup, preferredGroup);
    }
    let modelEditor;
    const codeEditors = StandaloneServices.get(ICodeEditorService).listCodeEditors();
    modelEditor = codeEditors.find((editor2) => editor2 instanceof StandaloneEditor && editor2.getModel() != null && editor2.getModel().uri.toString() === resource.toString());
    if (modelEditor == null) {
      const defaultBehaviorResult = await defaultBehavior(editor, optionsOrPreferredGroup, preferredGroup);
      if (defaultBehaviorResult != null) {
        return defaultBehaviorResult;
      }
      const modelRef = await textModelService.createModelReference(resource);
      modelEditor = await (fallbackBahavior == null ? void 0 : fallbackBahavior(modelRef, options, preferredGroup === SIDE_GROUP));
      if (modelEditor == null) {
        modelRef.dispose();
        return void 0;
      }
    }
    if (options != null) {
      applyTextEditorOptions(options, modelEditor, 1);
    }
    if (!((options == null ? void 0 : options.preserveFocus) ?? false)) {
      modelEditor.focus();
      modelEditor.getContainerDomNode().scrollIntoView();
    }
    return new SimpleEditorPane(modelEditor);
  }
  return openEditor;
}
let MonacoEditorService = class MonacoEditorService2 extends EditorService {
  constructor(_openEditorFallback, _isEditorPartVisible, _editorGroupService, instantiationService, fileService, configurationService, contextService, uriIdentityService, editorResolverService, workspaceTrustRequestService, hostService, textEditorService, textModelService) {
    super(_editorGroupService, instantiationService, fileService, configurationService, contextService, uriIdentityService, editorResolverService, workspaceTrustRequestService, hostService, textEditorService);
    this._isEditorPartVisible = _isEditorPartVisible;
    this.openEditor = wrapOpenEditor(textModelService, this.openEditor.bind(this), _openEditorFallback);
  }
  get activeTextEditorControl() {
    const focusedCodeEditor = StandaloneServices.get(ICodeEditorService).getFocusedCodeEditor();
    if (focusedCodeEditor != null && focusedCodeEditor instanceof StandaloneCodeEditor) {
      return focusedCodeEditor;
    }
    return super.activeTextEditorControl;
  }
  async openEditor(editor, optionsOrPreferredGroup, preferredGroup) {
    if (!this._isEditorPartVisible()) {
      return void 0;
    }
    return super.openEditor(editor, optionsOrPreferredGroup, preferredGroup);
  }
};
MonacoEditorService = __decorate([
  __param(2, IEditorGroupsService),
  __param(3, IInstantiationService),
  __param(4, IFileService),
  __param(5, IConfigurationService),
  __param(6, IWorkspaceContextService),
  __param(7, IUriIdentityService),
  __param(8, IEditorResolverService),
  __param(9, IWorkspaceTrustRequestService),
  __param(10, IHostService),
  __param(11, ITextEditorService),
  __param(12, ITextModelService)
], MonacoEditorService);
class StandaloneEditorPane {
  constructor(editor, input, group) {
    this.editor = editor;
    this.input = input;
    this.group = group;
    this.onDidChangeControl = Event.None;
    this.options = void 0;
    this.minimumWidth = 0;
    this.maximumWidth = Number.POSITIVE_INFINITY;
    this.minimumHeight = 0;
    this.maximumHeight = Number.POSITIVE_INFINITY;
    this.onDidChangeSizeConstraints = Event.None;
    this.scopedContextKeyService = void 0;
    this.onDidFocus = this.editor.onDidFocusEditorWidget;
    this.onDidBlur = this.editor.onDidBlurEditorWidget;
  }
  getControl() {
    return this.editor;
  }
  getViewState() {
    return void 0;
  }
  isVisible() {
    return true;
  }
  hasFocus() {
    return this.editor.hasWidgetFocus();
  }
  getId() {
    return this.editor.getId();
  }
  getTitle() {
    return void 0;
  }
  focus() {
    this.editor.focus();
  }
}
let StandaloneEditorGroup = class StandaloneEditorGroup2 extends Disposable {
  constructor(editor, instantiationService, scopedContextKeyService) {
    super();
    this.editor = editor;
    this.scopedContextKeyService = scopedContextKeyService;
    this.active = false;
    this.onDidFocus = this.editor.onDidFocusEditorWidget;
    this.onDidOpenEditorFail = Event.None;
    this.whenRestored = Promise.resolve();
    this.disposed = false;
    this.notifyIndexChanged = unsupported;
    this.relayout = unsupported;
    this.toJSON = unsupported;
    this.minimumWidth = 0;
    this.maximumWidth = Number.POSITIVE_INFINITY;
    this.minimumHeight = 0;
    this.maximumHeight = Number.POSITIVE_INFINITY;
    this.onDidChange = this.editor.onDidLayoutChange;
    this.layout = () => this.editor.layout();
    this._onDidModelChange = new Emitter();
    this.onDidModelChange = this._onDidModelChange.event;
    this.onWillDispose = this.editor.onDidDispose;
    this._onDidActiveEditorChange = new Emitter();
    this.onDidActiveEditorChange = this._onDidActiveEditorChange.event;
    this.onWillCloseEditor = Event.None;
    this._onDidCloseEditor = new Emitter();
    this.onDidCloseEditor = this._onDidCloseEditor.event;
    this.onWillMoveEditor = Event.None;
    this._onWillOpenEditor = new Emitter();
    this.onWillOpenEditor = this._onWillOpenEditor.event;
    this.id = --StandaloneEditorGroup2.idCounter;
    this.index = -1;
    this.label = `standalone editor ${this.editor.getId()}`;
    this.ariaLabel = `standalone editor ${this.editor.getId()}`;
    this.previewEditor = null;
    this.isLocked = true;
    this.stickyCount = 0;
    this.getEditors = () => this.editors;
    this.findEditors = (resource) => this.pane != null && resource.toString() === this.pane.input.resource.toString() ? [this.pane.input] : [];
    this.getEditorByIndex = (index) => this.pane != null && index === 0 ? this.pane.input : void 0;
    this.getIndexOfEditor = (editorInput) => this.pane != null && this.pane.input === editorInput ? 0 : -1;
    this.openEditor = unsupported;
    this.openEditors = unsupported;
    this.isPinned = () => false;
    this.isSticky = () => false;
    this.isActive = () => this.editor.hasWidgetFocus();
    this.contains = (candidate) => {
      return this.pane != null && this.pane.input === candidate;
    };
    this.moveEditor = unsupported;
    this.moveEditors = unsupported;
    this.copyEditor = unsupported;
    this.copyEditors = unsupported;
    this.closeEditor = unsupported;
    this.closeEditors = unsupported;
    this.closeAllEditors = unsupported;
    this.replaceEditors = unsupported;
    this.pinEditor = unsupported;
    this.stickEditor = unsupported;
    this.unstickEditor = unsupported;
    this.lock = unsupported;
    this.isFirst = unsupported;
    this.isLast = unsupported;
    const onNewModel = (uri) => {
      const editorInput = instantiationService.createInstance(TextResourceEditorInput, uri, void 0, void 0, void 0, void 0);
      this._onWillOpenEditor.fire({
        editor: editorInput,
        groupId: this.id
      });
      this.pane = new StandaloneEditorPane(editor, editorInput, this);
      this._onDidModelChange.fire({
        kind: 3,
        editor: editorInput,
        editorIndex: 0
      });
      this._onDidActiveEditorChange.fire({
        editor: editorInput
      });
    };
    const onRemovedModel = (uri) => {
      if (this.pane != null && this.pane.input.resource.toString() === uri.toString()) {
        const pane = this.pane;
        this.pane = void 0;
        this._onDidModelChange.fire({
          kind: 4,
          editorIndex: 0
        });
        this._onDidActiveEditorChange.fire({
          editor: void 0
        });
        this._onDidCloseEditor.fire({
          context: EditorCloseContext.UNKNOWN,
          editor: pane.input,
          groupId: this.id,
          index: 0,
          sticky: false
        });
      }
    };
    editor.onDidChangeModel((e) => {
      if (e.oldModelUrl != null) {
        onRemovedModel(e.oldModelUrl);
      }
      if (e.newModelUrl != null) {
        onNewModel(e.newModelUrl);
      }
    });
    this._register({
      dispose: () => {
        const model = editor.getModel();
        if (model != null) {
          onRemovedModel(model.uri);
        }
      }
    });
    const currentModel = editor.getModel();
    if (currentModel != null) {
      const editorInput = instantiationService.createInstance(TextResourceEditorInput, currentModel.uri, void 0, void 0, void 0, void 0);
      this.pane = new StandaloneEditorPane(editor, editorInput, this);
    }
  }
  get titleHeight() {
    return unsupported();
  }
  setActive(isActive2) {
    this.active = isActive2;
  }
  get element() {
    return unsupported();
  }
  get activeEditorPane() {
    return this.pane;
  }
  get activeEditor() {
    var _a2;
    return ((_a2 = this.pane) == null ? void 0 : _a2.input) ?? null;
  }
  get count() {
    return this.pane != null ? 1 : 0;
  }
  get isEmpty() {
    return this.pane == null;
  }
  get editors() {
    return this.pane != null ? [this.pane.input] : [];
  }
  focus() {
    this.editor.focus();
  }
};
StandaloneEditorGroup.idCounter = 0;
StandaloneEditorGroup = __decorate([
  __param(1, IInstantiationService),
  __param(2, IContextKeyService)
], StandaloneEditorGroup);
let MonacoDelegateEditorGroupsService = class MonacoDelegateEditorGroupsService2 extends Disposable {
  constructor(delegate, instantiationService) {
    super();
    this.delegate = delegate;
    this._serviceBrand = void 0;
    this.additionalGroups = [];
    this.activeGroupOverride = void 0;
    this._onDidChangeActiveGroup = new Emitter();
    this.onDidChangeActiveGroup = Event.any(this._onDidChangeActiveGroup.event, this.delegate.onDidChangeActiveGroup);
    this._onDidAddGroup = new Emitter();
    this.onDidAddGroup = Event.any(this._onDidAddGroup.event, this.delegate.onDidAddGroup);
    this._onDidRemoveGroup = new Emitter();
    this.onDidRemoveGroup = Event.any(this._onDidRemoveGroup.event, this.delegate.onDidRemoveGroup);
    this.onDidMoveGroup = this.delegate.onDidMoveGroup;
    this.onDidActivateGroup = this.delegate.onDidActivateGroup;
    this.onDidLayout = this.delegate.onDidLayout;
    this.onDidScroll = this.delegate.onDidScroll;
    this.onDidChangeGroupIndex = this.delegate.onDidChangeGroupIndex;
    this.onDidChangeGroupLocked = this.delegate.onDidChangeGroupLocked;
    this.getLayout = () => {
      return this.delegate.getLayout();
    };
    this.getGroups = (order) => {
      return [...this.additionalGroups, ...this.delegate.getGroups(order)];
    };
    this.getGroup = (identifier) => {
      return this.delegate.getGroup(identifier) ?? this.additionalGroups.find((group) => group.id === identifier);
    };
    this.activateGroup = (...args) => {
      return this.delegate.activateGroup(...args);
    };
    this.getSize = (...args) => {
      return this.delegate.getSize(...args);
    };
    this.setSize = (...args) => {
      return this.delegate.setSize(...args);
    };
    this.arrangeGroups = (...args) => {
      return this.delegate.arrangeGroups(...args);
    };
    this.applyLayout = (...args) => {
      return this.delegate.applyLayout(...args);
    };
    this.centerLayout = (...args) => {
      return this.delegate.centerLayout(...args);
    };
    this.isLayoutCentered = (...args) => {
      return this.delegate.isLayoutCentered(...args);
    };
    this.setGroupOrientation = (...args) => {
      return this.delegate.setGroupOrientation(...args);
    };
    this.findGroup = (...args) => {
      return this.delegate.findGroup(...args);
    };
    this.addGroup = (...args) => {
      return this.delegate.addGroup(...args);
    };
    this.removeGroup = (...args) => {
      return this.delegate.removeGroup(...args);
    };
    this.moveGroup = (...args) => {
      return this.delegate.moveGroup(...args);
    };
    this.mergeGroup = (...args) => {
      return this.delegate.mergeGroup(...args);
    };
    this.mergeAllGroups = (...args) => {
      return this.delegate.mergeAllGroups(...args);
    };
    this.copyGroup = (...args) => {
      return this.delegate.copyGroup(...args);
    };
    this.enforcePartOptions = (...args) => {
      return this.delegate.enforcePartOptions(...args);
    };
    this.onDidChangeEditorPartOptions = this.delegate.onDidChangeEditorPartOptions;
    setTimeout(() => {
      const codeEditorService = StandaloneServices.get(ICodeEditorService);
      const handleCodeEditor = (editor) => {
        if (editor instanceof StandaloneEditor) {
          const onEditorFocused = () => {
            this.activeGroupOverride = this.additionalGroups.find((group) => group.editor === editor);
            this._onDidChangeActiveGroup.fire(this.activeGroup);
          };
          editor.onDidFocusEditorText(onEditorFocused);
          editor.onDidFocusEditorWidget(onEditorFocused);
          if (editor.hasWidgetFocus()) {
            onEditorFocused();
          }
          const newGroup = instantiationService.createInstance(StandaloneEditorGroup, editor);
          this.additionalGroups.push(newGroup);
          this._onDidAddGroup.fire(newGroup);
        }
      };
      const handleCodeEditorRemoved = (editor) => {
        if (editor instanceof StandaloneEditor) {
          const removedGroup = this.additionalGroups.find((group) => group.editor === editor);
          if (removedGroup != null) {
            removedGroup.dispose();
            if (this.activeGroupOverride === removedGroup) {
              this.activeGroupOverride = void 0;
              this._onDidChangeActiveGroup.fire(this.activeGroup);
            }
            this.additionalGroups = this.additionalGroups.filter((group) => group !== removedGroup);
            this._onDidRemoveGroup.fire(removedGroup);
          }
        }
      };
      this._register(codeEditorService.onCodeEditorAdd(handleCodeEditor));
      this._register(codeEditorService.onCodeEditorRemove(handleCodeEditorRemoved));
      codeEditorService.listCodeEditors().forEach(handleCodeEditor);
    });
  }
  get groups() {
    return [...this.additionalGroups, ...this.delegate.groups];
  }
  get activeGroup() {
    return this.activeGroupOverride ?? this.delegate.activeGroup;
  }
  get contentDimension() {
    return this.delegate.contentDimension;
  }
  get sideGroup() {
    return this.delegate.sideGroup;
  }
  get count() {
    return this.delegate.count + this.additionalGroups.length;
  }
  get orientation() {
    return this.delegate.orientation;
  }
  get isReady() {
    return this.delegate.isReady;
  }
  get whenReady() {
    return this.delegate.whenReady;
  }
  get whenRestored() {
    return this.delegate.whenRestored;
  }
  get hasRestorableState() {
    return this.delegate.hasRestorableState;
  }
  get partOptions() {
    return this.delegate.partOptions;
  }
};
MonacoDelegateEditorGroupsService = __decorate([
  __param(1, IInstantiationService)
], MonacoDelegateEditorGroupsService);
export {
  ActivityAction as A,
  BinaryEditorModel as B,
  CompositeOverflowActivityAction as C,
  ErrorPlaceholderEditor as E,
  MonacoEditorService as M,
  PanelActivityAction as P,
  ToggleCompositePinnedAction as T,
  WorkspaceTrustRequiredPlaceholderEditor as W,
  ActivityActionViewItem as a,
  ToggleCompositeBadgeAction as b,
  CompositeActionViewItem as c,
  CompositeOverflowActivityActionViewItem as d,
  ToggleSidebarPositionAction as e,
  ToggleActivityBarVisibilityAction as f,
  PlaceHolderToggleCompositePinnedAction as g,
  PlaceHolderPanelActivityAction as h,
  TogglePanelAction as i,
  ToggleAuxiliaryBarAction as j,
  findGroup as k,
  BaseBinaryResourceEditor as l,
  ToggleStatusbarVisibilityAction as m,
  CodeEditorService as n,
  MonacoDelegateEditorGroupsService as o
};
