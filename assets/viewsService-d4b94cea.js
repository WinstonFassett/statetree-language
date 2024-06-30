import { gu as __decorate, gv as __param, Z as Registry, Bs as Composite, Bt as VIEWPANE_FILTER_ACTION, k4 as SubmenuItemAction, jy as ViewsSubMenu, cE as Separator, cu as ITelemetryService, aa as IStorageService, b1 as IInstantiationService, aQ as IThemeService, ct as IContextMenuService, h5 as IExtensionService, d7 as IWorkspaceContextService, Bu as CompositeRegistry, Bv as CompositeDescriptor, jv as ViewPaneContainer, ay as IConfigurationService, jk as IWorkbenchLayoutService, jl as IViewDescriptorService, D as Disposable, aD as Emitter, aq as toDisposable, Bw as FocusedViewContext, Bx as getVisbileViewContextKey, R as RawContextKey, a6 as DisposableStore, fY as Categories, bF as registerAction2, f6 as Action2, c as localize, C as ContextKeyExpr, kg as getEnabledViewContainerContextKey, l3 as IEditorGroupsService, mT as IViewsService, h as MenuRegistry, i as MenuId, I as IContextKeyService, e9 as isString, a2 as URI, jA as IPaneCompositePartService, bo as Event } from "./theme-defaults-1df7f429.js";
let PaneComposite = class PaneComposite2 extends Composite {
  constructor(id, telemetryService, storageService, instantiationService, themeService, contextMenuService, extensionService, contextService) {
    super(id, telemetryService, themeService, storageService);
    this.storageService = storageService;
    this.instantiationService = instantiationService;
    this.contextMenuService = contextMenuService;
    this.extensionService = extensionService;
    this.contextService = contextService;
  }
  create(parent) {
    this.viewPaneContainer = this._register(this.createViewPaneContainer(parent));
    this._register(this.viewPaneContainer.onTitleAreaUpdate(() => this.updateTitleArea()));
    this.viewPaneContainer.create(parent);
  }
  setVisible(visible) {
    var _a;
    super.setVisible(visible);
    (_a = this.viewPaneContainer) == null ? void 0 : _a.setVisible(visible);
  }
  layout(dimension) {
    var _a;
    (_a = this.viewPaneContainer) == null ? void 0 : _a.layout(dimension);
  }
  setBoundarySashes(sashes) {
    var _a;
    (_a = this.viewPaneContainer) == null ? void 0 : _a.setBoundarySashes(sashes);
  }
  getOptimalWidth() {
    var _a;
    return ((_a = this.viewPaneContainer) == null ? void 0 : _a.getOptimalWidth()) ?? 0;
  }
  openView(id, focus) {
    var _a;
    return (_a = this.viewPaneContainer) == null ? void 0 : _a.openView(id, focus);
  }
  getViewPaneContainer() {
    return this.viewPaneContainer;
  }
  getActionsContext() {
    var _a;
    return (_a = this.getViewPaneContainer()) == null ? void 0 : _a.getActionsContext();
  }
  getContextMenuActions() {
    var _a, _b;
    return ((_b = (_a = this.viewPaneContainer) == null ? void 0 : _a.menuActions) == null ? void 0 : _b.getContextMenuActions()) ?? [];
  }
  getMenuIds() {
    var _a;
    const result = [];
    if ((_a = this.viewPaneContainer) == null ? void 0 : _a.menuActions) {
      result.push(this.viewPaneContainer.menuActions.menuId);
      if (this.viewPaneContainer.isViewMergedWithContainer()) {
        result.push(this.viewPaneContainer.panes[0].menuActions.menuId);
      }
    }
    return result;
  }
  getActions() {
    var _a;
    const result = [];
    if ((_a = this.viewPaneContainer) == null ? void 0 : _a.menuActions) {
      result.push(...this.viewPaneContainer.menuActions.getPrimaryActions());
      if (this.viewPaneContainer.isViewMergedWithContainer()) {
        const viewPane = this.viewPaneContainer.panes[0];
        if (viewPane.shouldShowFilterInHeader()) {
          result.push(VIEWPANE_FILTER_ACTION);
        }
        result.push(...viewPane.menuActions.getPrimaryActions());
      }
    }
    return result;
  }
  getSecondaryActions() {
    var _a;
    if (!((_a = this.viewPaneContainer) == null ? void 0 : _a.menuActions)) {
      return [];
    }
    const viewPaneActions = this.viewPaneContainer.isViewMergedWithContainer() ? this.viewPaneContainer.panes[0].menuActions.getSecondaryActions() : [];
    let menuActions = this.viewPaneContainer.menuActions.getSecondaryActions();
    const viewsSubmenuActionIndex = menuActions.findIndex((action) => action instanceof SubmenuItemAction && action.item.submenu === ViewsSubMenu);
    if (viewsSubmenuActionIndex !== -1) {
      const viewsSubmenuAction = menuActions[viewsSubmenuActionIndex];
      if (viewsSubmenuAction.actions.some(({ enabled }) => enabled)) {
        if (menuActions.length === 1 && viewPaneActions.length === 0) {
          menuActions = viewsSubmenuAction.actions.slice();
        } else if (viewsSubmenuActionIndex !== 0) {
          menuActions = [viewsSubmenuAction, ...menuActions.slice(0, viewsSubmenuActionIndex), ...menuActions.slice(viewsSubmenuActionIndex + 1)];
        }
      } else {
        menuActions.splice(viewsSubmenuActionIndex, 1);
      }
    }
    if (menuActions.length && viewPaneActions.length) {
      return [
        ...menuActions,
        new Separator(),
        ...viewPaneActions
      ];
    }
    return menuActions.length ? menuActions : viewPaneActions;
  }
  getActionViewItem(action) {
    var _a;
    return (_a = this.viewPaneContainer) == null ? void 0 : _a.getActionViewItem(action);
  }
  getTitle() {
    var _a;
    return ((_a = this.viewPaneContainer) == null ? void 0 : _a.getTitle()) ?? "";
  }
  focus() {
    var _a;
    (_a = this.viewPaneContainer) == null ? void 0 : _a.focus();
  }
};
PaneComposite = __decorate([
  __param(1, ITelemetryService),
  __param(2, IStorageService),
  __param(3, IInstantiationService),
  __param(4, IThemeService),
  __param(5, IContextMenuService),
  __param(6, IExtensionService),
  __param(7, IWorkspaceContextService)
], PaneComposite);
class PaneCompositeDescriptor extends CompositeDescriptor {
  static create(ctor, id, name, cssClass, order, requestedIndex, iconUrl) {
    return new PaneCompositeDescriptor(ctor, id, name, cssClass, order, requestedIndex, iconUrl);
  }
  constructor(ctor, id, name, cssClass, order, requestedIndex, iconUrl) {
    super(ctor, id, name, cssClass, order, requestedIndex);
    this.iconUrl = iconUrl;
  }
}
const Extensions = {
  Viewlets: "workbench.contributions.viewlets",
  Panels: "workbench.contributions.panels",
  Auxiliary: "workbench.contributions.auxiliary"
};
class PaneCompositeRegistry extends CompositeRegistry {
  registerPaneComposite(descriptor) {
    super.registerComposite(descriptor);
  }
  deregisterPaneComposite(id) {
    super.deregisterComposite(id);
  }
  getPaneComposite(id) {
    return this.getComposite(id);
  }
  getPaneComposites() {
    return this.getComposites();
  }
}
Registry.add(Extensions.Viewlets, new PaneCompositeRegistry());
Registry.add(Extensions.Panels, new PaneCompositeRegistry());
Registry.add(Extensions.Auxiliary, new PaneCompositeRegistry());
let FilterViewPaneContainer = class FilterViewPaneContainer2 extends ViewPaneContainer {
  constructor(viewletId, onDidChangeFilterValue, configurationService, layoutService, telemetryService, storageService, instantiationService, themeService, contextMenuService, extensionService, contextService, viewDescriptorService) {
    super(viewletId, { mergeViewWithContainerWhenSingleView: false }, instantiationService, configurationService, layoutService, contextMenuService, telemetryService, extensionService, themeService, storageService, contextService, viewDescriptorService);
    this.constantViewDescriptors = /* @__PURE__ */ new Map();
    this.allViews = /* @__PURE__ */ new Map();
    this._register(onDidChangeFilterValue((newFilterValue) => {
      this.filterValue = newFilterValue;
      this.onFilterChanged(newFilterValue);
    }));
    this._register(this.onDidChangeViewVisibility((view) => {
      var _a;
      const descriptorMap = Array.from(this.allViews.entries()).find((entry) => entry[1].has(view.id));
      if (descriptorMap && !((_a = this.filterValue) == null ? void 0 : _a.includes(descriptorMap[0]))) {
        this.setFilter(descriptorMap[1].get(view.id));
      }
    }));
    this._register(this.viewContainerModel.onDidChangeActiveViewDescriptors(() => {
      this.updateAllViews(this.viewContainerModel.activeViewDescriptors);
    }));
  }
  updateAllViews(viewDescriptors) {
    viewDescriptors.forEach((descriptor) => {
      const filterOnValue = this.getFilterOn(descriptor);
      if (!filterOnValue) {
        return;
      }
      if (!this.allViews.has(filterOnValue)) {
        this.allViews.set(filterOnValue, /* @__PURE__ */ new Map());
      }
      this.allViews.get(filterOnValue).set(descriptor.id, descriptor);
      if (this.filterValue && !this.filterValue.includes(filterOnValue) && this.panes.find((pane) => pane.id === descriptor.id)) {
        this.viewContainerModel.setVisible(descriptor.id, false);
      }
    });
  }
  addConstantViewDescriptors(constantViewDescriptors) {
    constantViewDescriptors.forEach((viewDescriptor) => this.constantViewDescriptors.set(viewDescriptor.id, viewDescriptor));
  }
  onFilterChanged(newFilterValue) {
    if (this.allViews.size === 0) {
      this.updateAllViews(this.viewContainerModel.activeViewDescriptors);
    }
    this.getViewsNotForTarget(newFilterValue).forEach((item) => this.viewContainerModel.setVisible(item.id, false));
    this.getViewsForTarget(newFilterValue).forEach((item) => this.viewContainerModel.setVisible(item.id, true));
  }
  getViewsForTarget(target) {
    const views = [];
    for (let i = 0; i < target.length; i++) {
      if (this.allViews.has(target[i])) {
        views.push(...Array.from(this.allViews.get(target[i]).values()));
      }
    }
    return views;
  }
  getViewsNotForTarget(target) {
    const iterable = this.allViews.keys();
    let key = iterable.next();
    let views = [];
    while (!key.done) {
      let isForTarget = false;
      target.forEach((value) => {
        if (key.value === value) {
          isForTarget = true;
        }
      });
      if (!isForTarget) {
        views = views.concat(this.getViewsForTarget([key.value]));
      }
      key = iterable.next();
    }
    return views;
  }
  onDidAddViewDescriptors(added) {
    const panes = super.onDidAddViewDescriptors(added);
    for (let i = 0; i < added.length; i++) {
      if (this.constantViewDescriptors.has(added[i].viewDescriptor.id)) {
        panes[i].setExpanded(false);
      }
    }
    if (this.allViews.size === 0) {
      this.updateAllViews(this.viewContainerModel.activeViewDescriptors);
    }
    return panes;
  }
};
FilterViewPaneContainer = __decorate([
  __param(2, IConfigurationService),
  __param(3, IWorkbenchLayoutService),
  __param(4, ITelemetryService),
  __param(5, IStorageService),
  __param(6, IInstantiationService),
  __param(7, IThemeService),
  __param(8, IContextMenuService),
  __param(9, IExtensionService),
  __param(10, IWorkspaceContextService),
  __param(11, IViewDescriptorService)
], FilterViewPaneContainer);
let ViewsService = class ViewsService2 extends Disposable {
  constructor(viewDescriptorService, paneCompositeService, contextKeyService, layoutService) {
    super();
    this.viewDescriptorService = viewDescriptorService;
    this.paneCompositeService = paneCompositeService;
    this.contextKeyService = contextKeyService;
    this.layoutService = layoutService;
    this._onDidChangeViewVisibility = this._register(new Emitter());
    this.onDidChangeViewVisibility = this._onDidChangeViewVisibility.event;
    this._onDidChangeViewContainerVisibility = this._register(new Emitter());
    this.onDidChangeViewContainerVisibility = this._onDidChangeViewContainerVisibility.event;
    this.viewDisposable = /* @__PURE__ */ new Map();
    this.visibleViewContextKeys = /* @__PURE__ */ new Map();
    this.viewPaneContainers = /* @__PURE__ */ new Map();
    this._register(toDisposable(() => {
      this.viewDisposable.forEach((disposable) => disposable.dispose());
      this.viewDisposable.clear();
    }));
    this.viewDescriptorService.viewContainers.forEach((viewContainer) => this.onDidRegisterViewContainer(viewContainer, this.viewDescriptorService.getViewContainerLocation(viewContainer)));
    this._register(this.viewDescriptorService.onDidChangeViewContainers(({ added, removed }) => this.onDidChangeContainers(added, removed)));
    this._register(this.viewDescriptorService.onDidChangeContainerLocation(({ viewContainer, from, to }) => this.onDidChangeContainerLocation(viewContainer, from, to)));
    this._register(this.paneCompositeService.onDidPaneCompositeOpen((e) => this._onDidChangeViewContainerVisibility.fire({ id: e.composite.getId(), visible: true, location: e.viewContainerLocation })));
    this._register(this.paneCompositeService.onDidPaneCompositeClose((e) => this._onDidChangeViewContainerVisibility.fire({ id: e.composite.getId(), visible: false, location: e.viewContainerLocation })));
    this.focusedViewContextKey = FocusedViewContext.bindTo(contextKeyService);
  }
  onViewsAdded(added) {
    for (const view of added) {
      this.onViewsVisibilityChanged(view, view.isBodyVisible());
    }
  }
  onViewsVisibilityChanged(view, visible) {
    this.getOrCreateActiveViewContextKey(view).set(visible);
    this._onDidChangeViewVisibility.fire({ id: view.id, visible });
  }
  onViewsRemoved(removed) {
    for (const view of removed) {
      this.onViewsVisibilityChanged(view, false);
    }
  }
  getOrCreateActiveViewContextKey(view) {
    const visibleContextKeyId = getVisbileViewContextKey(view.id);
    let contextKey = this.visibleViewContextKeys.get(visibleContextKeyId);
    if (!contextKey) {
      contextKey = new RawContextKey(visibleContextKeyId, false).bindTo(this.contextKeyService);
      this.visibleViewContextKeys.set(visibleContextKeyId, contextKey);
    }
    return contextKey;
  }
  onDidChangeContainers(added, removed) {
    for (const { container, location } of removed) {
      this.deregisterPaneComposite(container, location);
    }
    for (const { container, location } of added) {
      this.onDidRegisterViewContainer(container, location);
    }
  }
  onDidRegisterViewContainer(viewContainer, viewContainerLocation) {
    this.registerPaneComposite(viewContainer, viewContainerLocation);
    const viewContainerModel = this.viewDescriptorService.getViewContainerModel(viewContainer);
    this.onViewDescriptorsAdded(viewContainerModel.allViewDescriptors, viewContainer);
    this._register(viewContainerModel.onDidChangeAllViewDescriptors(({ added, removed }) => {
      this.onViewDescriptorsAdded(added, viewContainer);
      this.onViewDescriptorsRemoved(removed);
    }));
    this._register(this.registerOpenViewContainerAction(viewContainer));
  }
  onDidChangeContainerLocation(viewContainer, from, to) {
    this.deregisterPaneComposite(viewContainer, from);
    this.registerPaneComposite(viewContainer, to);
  }
  onViewDescriptorsAdded(views, container) {
    const location = this.viewDescriptorService.getViewContainerLocation(container);
    if (location === null) {
      return;
    }
    const composite = this.getComposite(container.id, location);
    for (const viewDescriptor of views) {
      const disposables = new DisposableStore();
      disposables.add(this.registerOpenViewAction(viewDescriptor));
      disposables.add(this.registerFocusViewAction(viewDescriptor, (composite == null ? void 0 : composite.name) && composite.name !== composite.id ? composite.name : Categories.View));
      disposables.add(this.registerResetViewLocationAction(viewDescriptor));
      this.viewDisposable.set(viewDescriptor, disposables);
    }
  }
  onViewDescriptorsRemoved(views) {
    for (const view of views) {
      const disposable = this.viewDisposable.get(view);
      if (disposable) {
        disposable.dispose();
        this.viewDisposable.delete(view);
      }
    }
  }
  async openComposite(compositeId, location, focus) {
    return this.paneCompositeService.openPaneComposite(compositeId, location, focus);
  }
  getComposite(compositeId, location) {
    return this.paneCompositeService.getPaneComposite(compositeId, location);
  }
  isViewContainerVisible(id) {
    var _a;
    const viewContainer = this.viewDescriptorService.getViewContainerById(id);
    if (viewContainer) {
      const viewContainerLocation = this.viewDescriptorService.getViewContainerLocation(viewContainer);
      if (viewContainerLocation !== null) {
        return ((_a = this.paneCompositeService.getActivePaneComposite(viewContainerLocation)) == null ? void 0 : _a.getId()) === id;
      }
    }
    return false;
  }
  getVisibleViewContainer(location) {
    var _a;
    const viewContainerId = (_a = this.paneCompositeService.getActivePaneComposite(location)) == null ? void 0 : _a.getId();
    return viewContainerId ? this.viewDescriptorService.getViewContainerById(viewContainerId) : null;
  }
  getActiveViewPaneContainerWithId(viewContainerId) {
    const viewContainer = this.viewDescriptorService.getViewContainerById(viewContainerId);
    return viewContainer ? this.getActiveViewPaneContainer(viewContainer) : null;
  }
  async openViewContainer(id, focus) {
    const viewContainer = this.viewDescriptorService.getViewContainerById(id);
    if (viewContainer) {
      const viewContainerLocation = this.viewDescriptorService.getViewContainerLocation(viewContainer);
      if (viewContainerLocation !== null) {
        const paneComposite = await this.paneCompositeService.openPaneComposite(id, viewContainerLocation, focus);
        return paneComposite || null;
      }
    }
    return null;
  }
  async closeViewContainer(id) {
    const viewContainer = this.viewDescriptorService.getViewContainerById(id);
    if (viewContainer) {
      const viewContainerLocation = this.viewDescriptorService.getViewContainerLocation(viewContainer);
      const isActive = viewContainerLocation !== null && this.paneCompositeService.getActivePaneComposite(viewContainerLocation);
      if (viewContainerLocation !== null) {
        return isActive ? this.layoutService.setPartHidden(true, getPartByLocation(viewContainerLocation)) : void 0;
      }
    }
  }
  isViewVisible(id) {
    const activeView = this.getActiveViewWithId(id);
    return (activeView == null ? void 0 : activeView.isBodyVisible()) || false;
  }
  getActiveViewWithId(id) {
    const viewContainer = this.viewDescriptorService.getViewContainerByViewId(id);
    if (viewContainer) {
      const activeViewPaneContainer = this.getActiveViewPaneContainer(viewContainer);
      if (activeViewPaneContainer) {
        return activeViewPaneContainer.getView(id);
      }
    }
    return null;
  }
  getViewWithId(id) {
    const viewContainer = this.viewDescriptorService.getViewContainerByViewId(id);
    if (viewContainer) {
      const viewPaneContainer = this.viewPaneContainers.get(viewContainer.id);
      if (viewPaneContainer) {
        return viewPaneContainer.getView(id);
      }
    }
    return null;
  }
  async openView(id, focus) {
    const viewContainer = this.viewDescriptorService.getViewContainerByViewId(id);
    if (!viewContainer) {
      return null;
    }
    if (!this.viewDescriptorService.getViewContainerModel(viewContainer).activeViewDescriptors.some((viewDescriptor) => viewDescriptor.id === id)) {
      return null;
    }
    const location = this.viewDescriptorService.getViewContainerLocation(viewContainer);
    const compositeDescriptor = this.getComposite(viewContainer.id, location);
    if (compositeDescriptor) {
      const paneComposite = await this.openComposite(compositeDescriptor.id, location);
      if (paneComposite && paneComposite.openView) {
        return paneComposite.openView(id, focus) || null;
      } else if (focus) {
        paneComposite == null ? void 0 : paneComposite.focus();
      }
    }
    return null;
  }
  closeView(id) {
    const viewContainer = this.viewDescriptorService.getViewContainerByViewId(id);
    if (viewContainer) {
      const activeViewPaneContainer = this.getActiveViewPaneContainer(viewContainer);
      if (activeViewPaneContainer) {
        const view = activeViewPaneContainer.getView(id);
        if (view) {
          if (activeViewPaneContainer.views.length === 1) {
            const location = this.viewDescriptorService.getViewContainerLocation(viewContainer);
            if (location === 0) {
              this.layoutService.setPartHidden(true, "workbench.parts.sidebar");
            } else if (location === 1 || location === 2) {
              this.paneCompositeService.hideActivePaneComposite(location);
            }
            if (this.focusedViewContextKey.get() === id) {
              this.focusedViewContextKey.reset();
            }
          } else {
            view.setExpanded(false);
          }
        }
      }
    }
  }
  getActiveViewPaneContainer(viewContainer) {
    const location = this.viewDescriptorService.getViewContainerLocation(viewContainer);
    if (location === null) {
      return null;
    }
    const activePaneComposite = this.paneCompositeService.getActivePaneComposite(location);
    if ((activePaneComposite == null ? void 0 : activePaneComposite.getId()) === viewContainer.id) {
      return activePaneComposite.getViewPaneContainer() || null;
    }
    return null;
  }
  getViewProgressIndicator(viewId) {
    const viewContainer = this.viewDescriptorService.getViewContainerByViewId(viewId);
    if (!viewContainer) {
      return void 0;
    }
    const viewPaneContainer = this.viewPaneContainers.get(viewContainer.id);
    if (!viewPaneContainer) {
      return void 0;
    }
    const view = viewPaneContainer.getView(viewId);
    if (!view) {
      return void 0;
    }
    if (viewPaneContainer.isViewMergedWithContainer()) {
      return this.getViewContainerProgressIndicator(viewContainer);
    }
    return view.getProgressIndicator();
  }
  getViewContainerProgressIndicator(viewContainer) {
    const viewContainerLocation = this.viewDescriptorService.getViewContainerLocation(viewContainer);
    if (viewContainerLocation === null) {
      return void 0;
    }
    return this.paneCompositeService.getProgressIndicator(viewContainer.id, viewContainerLocation);
  }
  registerOpenViewContainerAction(viewContainer) {
    const disposables = new DisposableStore();
    if (viewContainer.openCommandActionDescriptor) {
      const { id, mnemonicTitle, keybindings, order } = viewContainer.openCommandActionDescriptor ?? { id: viewContainer.id };
      const title = viewContainer.openCommandActionDescriptor.title ?? viewContainer.title;
      const that = this;
      disposables.add(registerAction2(class OpenViewContainerAction extends Action2 {
        constructor() {
          super({
            id,
            get title() {
              const viewContainerLocation = that.viewDescriptorService.getViewContainerLocation(viewContainer);
              const localizedTitle = typeof title === "string" ? title : title.value;
              const originalTitle = typeof title === "string" ? title : title.original;
              if (viewContainerLocation === 0) {
                return { value: localize("show view", "Show {0}", localizedTitle), original: `Show ${originalTitle}` };
              } else {
                return { value: localize("toggle view", "Toggle {0}", localizedTitle), original: `Toggle ${originalTitle}` };
              }
            },
            category: Categories.View,
            precondition: ContextKeyExpr.has(getEnabledViewContainerContextKey(viewContainer.id)),
            keybinding: keybindings ? { ...keybindings, weight: 200 } : void 0,
            f1: true
          });
        }
        async run(serviceAccessor) {
          const editorGroupService = serviceAccessor.get(IEditorGroupsService);
          const viewDescriptorService = serviceAccessor.get(IViewDescriptorService);
          const layoutService = serviceAccessor.get(IWorkbenchLayoutService);
          const viewsService = serviceAccessor.get(IViewsService);
          const viewContainerLocation = viewDescriptorService.getViewContainerLocation(viewContainer);
          switch (viewContainerLocation) {
            case 2:
            case 0: {
              const part = viewContainerLocation === 0 ? "workbench.parts.sidebar" : "workbench.parts.auxiliarybar";
              if (!viewsService.isViewContainerVisible(viewContainer.id) || !layoutService.hasFocus(part)) {
                await viewsService.openViewContainer(viewContainer.id, true);
              } else {
                editorGroupService.activeGroup.focus();
              }
              break;
            }
            case 1:
              if (!viewsService.isViewContainerVisible(viewContainer.id) || !layoutService.hasFocus("workbench.parts.panel")) {
                await viewsService.openViewContainer(viewContainer.id, true);
              } else {
                viewsService.closeViewContainer(viewContainer.id);
              }
              break;
          }
        }
      }));
      if (mnemonicTitle) {
        const defaultLocation = this.viewDescriptorService.getDefaultViewContainerLocation(viewContainer);
        disposables.add(MenuRegistry.appendMenuItem(MenuId.MenubarViewMenu, {
          command: {
            id,
            title: mnemonicTitle
          },
          group: defaultLocation === 0 ? "3_views" : "4_panels",
          when: ContextKeyExpr.has(getEnabledViewContainerContextKey(viewContainer.id)),
          order: order ?? Number.MAX_VALUE
        }));
      }
    }
    return disposables;
  }
  registerOpenViewAction(viewDescriptor) {
    const disposables = new DisposableStore();
    if (viewDescriptor.openCommandActionDescriptor) {
      const title = viewDescriptor.openCommandActionDescriptor.title ?? viewDescriptor.name;
      const commandId = viewDescriptor.openCommandActionDescriptor.id;
      const that = this;
      disposables.add(registerAction2(class OpenViewAction extends Action2 {
        constructor() {
          super({
            id: commandId,
            get title() {
              const viewContainerLocation = that.viewDescriptorService.getViewLocationById(viewDescriptor.id);
              const localizedTitle = typeof title === "string" ? title : title.value;
              const originalTitle = typeof title === "string" ? title : title.original;
              if (viewContainerLocation === 0) {
                return { value: localize("show view", "Show {0}", localizedTitle), original: `Show ${originalTitle}` };
              } else {
                return { value: localize("toggle view", "Toggle {0}", localizedTitle), original: `Toggle ${originalTitle}` };
              }
            },
            category: Categories.View,
            precondition: ContextKeyExpr.has(`${viewDescriptor.id}.active`),
            keybinding: viewDescriptor.openCommandActionDescriptor.keybindings ? { ...viewDescriptor.openCommandActionDescriptor.keybindings, weight: 200 } : void 0,
            f1: true
          });
        }
        async run(serviceAccessor) {
          const editorGroupService = serviceAccessor.get(IEditorGroupsService);
          const viewDescriptorService = serviceAccessor.get(IViewDescriptorService);
          const layoutService = serviceAccessor.get(IWorkbenchLayoutService);
          const viewsService = serviceAccessor.get(IViewsService);
          const contextKeyService = serviceAccessor.get(IContextKeyService);
          const focusedViewId = FocusedViewContext.getValue(contextKeyService);
          if (focusedViewId === viewDescriptor.id) {
            const viewLocation = viewDescriptorService.getViewLocationById(viewDescriptor.id);
            if (viewDescriptorService.getViewLocationById(viewDescriptor.id) === 0) {
              editorGroupService.activeGroup.focus();
            } else if (viewLocation !== null) {
              layoutService.setPartHidden(true, getPartByLocation(viewLocation));
            }
          } else {
            viewsService.openView(viewDescriptor.id, true);
          }
        }
      }));
      if (viewDescriptor.openCommandActionDescriptor.mnemonicTitle) {
        const defaultViewContainer = this.viewDescriptorService.getDefaultContainerById(viewDescriptor.id);
        if (defaultViewContainer) {
          const defaultLocation = this.viewDescriptorService.getDefaultViewContainerLocation(defaultViewContainer);
          disposables.add(MenuRegistry.appendMenuItem(MenuId.MenubarViewMenu, {
            command: {
              id: commandId,
              title: viewDescriptor.openCommandActionDescriptor.mnemonicTitle
            },
            group: defaultLocation === 0 ? "3_views" : "4_panels",
            when: ContextKeyExpr.has(`${viewDescriptor.id}.active`),
            order: viewDescriptor.openCommandActionDescriptor.order ?? Number.MAX_VALUE
          }));
        }
      }
    }
    return disposables;
  }
  registerFocusViewAction(viewDescriptor, category) {
    return registerAction2(class FocusViewAction extends Action2 {
      constructor() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        const title = localize(
          { key: "focus view", comment: ["{0} indicates the name of the view to be focused."] },
          "Focus on {0} View",
          viewDescriptor.name
        );
        super({
          id: viewDescriptor.focusCommand ? viewDescriptor.focusCommand.id : `${viewDescriptor.id}.focus`,
          title: { original: `Focus on ${viewDescriptor.name} View`, value: title },
          category,
          menu: [{
            id: MenuId.CommandPalette,
            when: viewDescriptor.when
          }],
          keybinding: {
            when: ContextKeyExpr.has(`${viewDescriptor.id}.active`),
            weight: 200,
            primary: (_b = (_a = viewDescriptor.focusCommand) == null ? void 0 : _a.keybindings) == null ? void 0 : _b.primary,
            secondary: (_d = (_c = viewDescriptor.focusCommand) == null ? void 0 : _c.keybindings) == null ? void 0 : _d.secondary,
            linux: (_f = (_e = viewDescriptor.focusCommand) == null ? void 0 : _e.keybindings) == null ? void 0 : _f.linux,
            mac: (_h = (_g = viewDescriptor.focusCommand) == null ? void 0 : _g.keybindings) == null ? void 0 : _h.mac,
            win: (_j = (_i = viewDescriptor.focusCommand) == null ? void 0 : _i.keybindings) == null ? void 0 : _j.win
          },
          description: {
            description: title,
            args: [
              {
                name: "focusOptions",
                description: "Focus Options",
                schema: {
                  type: "object",
                  properties: {
                    "preserveFocus": {
                      type: "boolean",
                      default: false
                    }
                  }
                }
              }
            ]
          }
        });
      }
      run(accessor, options) {
        accessor.get(IViewsService).openView(viewDescriptor.id, !(options == null ? void 0 : options.preserveFocus));
      }
    });
  }
  registerResetViewLocationAction(viewDescriptor) {
    return registerAction2(class ResetViewLocationAction extends Action2 {
      constructor() {
        super({
          id: `${viewDescriptor.id}.resetViewLocation`,
          title: {
            original: "Reset Location",
            value: localize("resetViewLocation", "Reset Location")
          },
          menu: [{
            id: MenuId.ViewTitleContext,
            when: ContextKeyExpr.or(ContextKeyExpr.and(ContextKeyExpr.equals("view", viewDescriptor.id), ContextKeyExpr.equals(`${viewDescriptor.id}.defaultViewLocation`, false))),
            group: "1_hide",
            order: 2
          }]
        });
      }
      run(accessor) {
        const viewDescriptorService = accessor.get(IViewDescriptorService);
        const defaultContainer = viewDescriptorService.getDefaultContainerById(viewDescriptor.id);
        const containerModel = viewDescriptorService.getViewContainerModel(defaultContainer);
        if (defaultContainer.hideIfEmpty && containerModel.visibleViewDescriptors.length === 0) {
          const defaultLocation = viewDescriptorService.getDefaultViewContainerLocation(defaultContainer);
          viewDescriptorService.moveViewContainerToLocation(defaultContainer, defaultLocation);
        }
        viewDescriptorService.moveViewsToContainer([viewDescriptor], viewDescriptorService.getDefaultContainerById(viewDescriptor.id));
        accessor.get(IViewsService).openView(viewDescriptor.id, true);
      }
    });
  }
  registerPaneComposite(viewContainer, viewContainerLocation) {
    const that = this;
    let PaneContainer = class PaneContainer extends PaneComposite {
      constructor(telemetryService, contextService, storageService, instantiationService, themeService, contextMenuService, extensionService) {
        super(viewContainer.id, telemetryService, storageService, instantiationService, themeService, contextMenuService, extensionService, contextService);
      }
      createViewPaneContainer(element) {
        const viewPaneContainerDisposables = this._register(new DisposableStore());
        const viewPaneContainer = that.createViewPaneContainer(element, viewContainer, viewContainerLocation, viewPaneContainerDisposables, this.instantiationService);
        if (!(viewPaneContainer instanceof FilterViewPaneContainer)) {
          viewPaneContainerDisposables.add(Event.any(viewPaneContainer.onDidAddViews, viewPaneContainer.onDidRemoveViews, viewPaneContainer.onTitleAreaUpdate)(() => {
            this.updateTitleArea();
          }));
        }
        return viewPaneContainer;
      }
    };
    PaneContainer = __decorate([
      __param(0, ITelemetryService),
      __param(1, IWorkspaceContextService),
      __param(2, IStorageService),
      __param(3, IInstantiationService),
      __param(4, IThemeService),
      __param(5, IContextMenuService),
      __param(6, IExtensionService)
    ], PaneContainer);
    Registry.as(getPaneCompositeExtension(viewContainerLocation)).registerPaneComposite(PaneCompositeDescriptor.create(PaneContainer, viewContainer.id, typeof viewContainer.title === "string" ? viewContainer.title : viewContainer.title.value, isString(viewContainer.icon) ? viewContainer.icon : void 0, viewContainer.order, viewContainer.requestedIndex, viewContainer.icon instanceof URI ? viewContainer.icon : void 0));
  }
  deregisterPaneComposite(viewContainer, viewContainerLocation) {
    Registry.as(getPaneCompositeExtension(viewContainerLocation)).deregisterPaneComposite(viewContainer.id);
  }
  createViewPaneContainer(element, viewContainer, viewContainerLocation, disposables, instantiationService) {
    const viewPaneContainer = instantiationService.createInstance(viewContainer.ctorDescriptor.ctor, ...viewContainer.ctorDescriptor.staticArguments || []);
    this.viewPaneContainers.set(viewPaneContainer.getId(), viewPaneContainer);
    disposables.add(toDisposable(() => this.viewPaneContainers.delete(viewPaneContainer.getId())));
    disposables.add(viewPaneContainer.onDidAddViews((views) => this.onViewsAdded(views)));
    disposables.add(viewPaneContainer.onDidChangeViewVisibility((view) => this.onViewsVisibilityChanged(view, view.isBodyVisible())));
    disposables.add(viewPaneContainer.onDidRemoveViews((views) => this.onViewsRemoved(views)));
    disposables.add(viewPaneContainer.onDidFocusView((view) => this.focusedViewContextKey.set(view.id)));
    disposables.add(viewPaneContainer.onDidBlurView((view) => {
      if (this.focusedViewContextKey.get() === view.id) {
        this.focusedViewContextKey.reset();
      }
    }));
    return viewPaneContainer;
  }
};
ViewsService = __decorate([
  __param(0, IViewDescriptorService),
  __param(1, IPaneCompositePartService),
  __param(2, IContextKeyService),
  __param(3, IWorkbenchLayoutService)
], ViewsService);
function getPaneCompositeExtension(viewContainerLocation) {
  switch (viewContainerLocation) {
    case 2:
      return Extensions.Auxiliary;
    case 1:
      return Extensions.Panels;
    case 0:
    default:
      return Extensions.Viewlets;
  }
}
function getPartByLocation(viewContainerLocation) {
  switch (viewContainerLocation) {
    case 2:
      return "workbench.parts.auxiliarybar";
    case 1:
      return "workbench.parts.panel";
    case 0:
    default:
      return "workbench.parts.sidebar";
  }
}
export {
  Extensions as E,
  ViewsService as V,
  getPartByLocation as g
};
