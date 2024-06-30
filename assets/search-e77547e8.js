var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
import { gu as __decorate, gv as __param, D as Disposable, aq as toDisposable, bE as coalesce, fb as CancellationError, q4 as flatten, By as uniqueFilter, eL as DeferredPromise, aB as StopWatch, Bz as deserializeSearchError, br as Schemas, BA as SearchErrorCode, aW as ResourceMap, l0 as EditorResourceAccessor, l1 as SideBySideEditor, e8 as isNumber, BB as editorMatchesToTextSearchResults, BC as addContextToEditorMatches, BD as pathIncludedInQuery, a4 as IModelService, gx as IEditorService, cu as ITelemetryService, fM as ILogService, h5 as IExtensionService, he as IFileService, hz as IUriIdentityService, BE as isFileMatch, BF as isProgressMessage, BG as FileMatch, BH as SaveSourceRegistry, c as localize, BI as CellUri, i4 as Promises, BJ as Match, b5 as dirname, cP as EditOperation, k as Range, BK as MatchInNotebook, BL as FileMatch$1, cY as ResourceTextEdit, b1 as IInstantiationService, a_ as ITextModelService, BM as createTextBufferFactoryFromSnapshot, bb as ILanguageService, BN as IReplaceService, BO as ISearchWorkbenchService, h4 as ITextFileService, c_ as IBulkEditService, b0 as ILabelService, BP as INotebookEditorModelResolverService, gM as n, aU as defaultGenerator, hq as equals, xb as PickerQuickAccessProvider, bP as withNullAsUndefined, pC as ThrottledDelayer, BQ as prepareQuery, BR as pieceToQuery, BS as getWorkspaceSymbols, oa as SymbolKinds, BT as scoreFuzzy2, aK as ThemeIcon, aM as Codicon, xv as TriggerAction, kX as SIDE_GROUP, l2 as ACTIVE_GROUP, c2 as IOpenerService, ay as IConfigurationService, u as ICodeEditorService, aL as registerIcon, BU as ConfiguringTask, ha as deepClone, As as getColorStyleElement, zN as getColorClass, dZ as Severity, e9 as isString, BV as ContributedTask, BW as CustomTask, bo as Event, wg as ITaskService, as as IQuickInputService, al as INotificationService, aQ as IThemeService, iK as IDialogService, aa as IStorageService, xc as matchesFuzzy, BX as DefaultQuickAccessFilterValue, ad as once, BY as getIEditor, BZ as QuickPickItemScorerAccessor, B_ as QueryBuilder, B$ as HelpQuickAccessProvider, C0 as GotoSymbolQuickAccessProvider, a6 as DisposableStore, cZ as MutableDisposable, C1 as QuickInputHideReason, C2 as extractRangeFromFilter, C3 as top, C4 as scoreItemFuzzy, C5 as quickPickItemScorerAccessor, C6 as compareItemsByFuzzyScore, C7 as getOutOfWorkspaceEditorResources, C8 as untildify, rV as toLocalResource, C9 as CommandsQuickAccessProvider, Ca as stripIcons, a2 as URI, qy as isEditorInput, bs as basenameOrAuthority, fI as Lazy, k0 as getIconClasses, Cb as ISearchService, d7 as IWorkspaceContextService, iu as IPathService, hR as IWorkbenchEnvironmentService, pM as IWorkingCopyService, rh as IHistoryService, kK as IFilesConfigurationService, Z as Registry, h1 as Extensions, aE as Widget, aD as Emitter, yd as ContextScopedHistoryInputBox, dw as showHistoryKeybindingHint, bY as trackFocus, I as IContextKeyService, a$ as IKeybindingService, dB as Toggle, dy as defaultToggleStyles, Cc as VIEW_ID, Cd as searchComparer, Ce as FolderMatch, jL as isAncestor, ah as $$1, pv as parseLinkedText, aG as append, Cf as TextSearchCompleteMessageType, c8 as Severity$1, g6 as Link, R as RawContextKey, Cg as FolderMatchWorkspaceRoot, k1 as FileKind, b3 as CountBadge, b4 as defaultCountBadgeStyles, hg as ServiceCollection, Ch as MenuWorkbenchToolBar, i as MenuId, bB as isEqual, Ci as FolderMatchNoRoot, Cj as dirname$1, cL as registerThemingParticipant, up as DropdownMenuActionViewItem, Ck as isSafari, cE as Separator, ct as IContextMenuService, cy as Action, cA as ActionBar, g_ as ActionRunner, dv as ContextScopedFindInput, pj as NotebookEditorInput, dr as Delayer, c$ as Button, u7 as InputBox, dx as defaultInputBoxStyles, dD as ContextScopedReplaceInput, aT as isMacintosh, dW as IContextViewService, v as IClipboardService, cN as IAccessibilityService, bu as KeybindingsRegistry, C as ContextKeyExpr, mT as IViewsService, Cl as searchMatchComparer, dA as assertIsDefined, pl as IWorkingCopyBackupService, Cm as createTextBufferFactoryFromStream, rk as EditorInput, ih as Memento, gL as basename, ml as extname, Cn as bufferToReadable, hf as VSBuffer, fz as joinPath, iJ as IFileDialogService, l3 as IEditorGroupsService, vV as IConfigurationResolverService, on as isDiffEditor, oo as ViewPane, Co as SearchStateKey, j as RunOnceScheduler, Cp as SearchHistoryService, Cq as SearchUIState, bh as hide, aI as addDisposableListener, fH as EventHelper, aJ as EventType, bT as StandardKeyboardEvent, bJ as Iterable, Cr as ObjectTreeElementCollapseState, Cs as SearchResult, fv as isCancellationError, cn as clearNode, bq as show, kV as ResourceLabels, xE as WorkbenchCompressibleObjectTree, Ct as ResourceListDnDHandler, Cu as withSelection, Cv as FolderMatchWithResource, oA as getSelectionKeyboardEvent, bG as isCodeEditor, bj as EmbeddedCodeEditorWidget, W as escapeRegExpCharacters, bZ as getTotalHeight, aS as Dimension, cO as status, p as isNative, Cw as OpenFileFolderAction, Cx as OpenFolderAction, ap as onUnexpectedError, S as Selection, pt as getCodeEditor, d1 as IProgressService, ak as ICommandService, jl as IViewDescriptorService, hy as IPreferencesService, Cy as ISearchHistoryService, Cz as INotebookService, bF as registerAction2, f6 as Action2, d2 as isWindows, jA as IPaneCompositePartService, mF as IExplorerService, na as VIEWLET_ID, mH as FilesExplorerFocusCondition, mI as ExplorerFolderContext, nu as ExplorerRootContext, bz as IListService, mG as getMultiSelectedResources, CA as resolveResourcesForSearchIncludes, gh as CONTEXT_ACCESSIBILITY_MODE_ENABLED, CB as arrayContainsElementOrParent, cD as equals$1, bw as WorkbenchListFocusContextKey, jp as Extensions$1, CC as VIEWLET_ID$1, hh as SyncDescriptor, jv as ViewPaneContainer, r_ as Extensions$2, CD as AbstractGotoLineQuickAccessProvider, CE as defaultQuickAccessContextKeyValue, _ as Extensions$3, qv as SEARCH_EXCLUDE_CONFIG, a0 as CommandsRegistry, a1 as assertType, pP as AbstractTextCodeEditor, m6 as LongRunningOperation, CF as SearchModel, yz as getInputBoxStyle, yh as EditorExtensionsRegistry, d as alert, P as Position, f as registerColor, fL as inputBorder, bK as IEditorProgressService, fN as ITextResourceConfigurationService, m7 as EditorExtensions, pn as EditorPaneDescriptor, CG as ActiveEditorContext, ls as DEFAULT_EDITOR_ASSOCIATION, q5 as RegisteredEditorPriority, lo as IEditorResolverService, pk as IWorkingCopyEditorService, CH as SearchWorkbenchService } from "./theme-defaults-1df7f429.js";
import { J as getSelectionSearchString, K as SeverityIcon, O as CONTEXT_FIND_WIDGET_NOT_VISIBLE, P as CommonFindController, Q as MultiCursorSelectionController, U as ToggleCaseSensitiveKeybinding, X as ToggleWholeWordKeybinding, Y as ToggleRegexKeybinding, Z as TogglePreserveCaseKeybinding, _ as UnusualLineTerminatorsDetector, $ as ReferencesController } from "./index-ca8d23e0.js";
import { ae as DEBUG_QUICK_ACCESS_PREFIX } from "./debugCommands-865f55ea.js";
import { b as showWithPinnedItems, f as filterIcon } from "./quickPickPin-cb6cd653.js";
import "./index-3bddf13b.js";
let SearchService = class SearchService2 extends Disposable {
  constructor(modelService, editorService, telemetryService, logService, extensionService, fileService, uriIdentityService) {
    super();
    this.modelService = modelService;
    this.editorService = editorService;
    this.telemetryService = telemetryService;
    this.logService = logService;
    this.extensionService = extensionService;
    this.fileService = fileService;
    this.uriIdentityService = uriIdentityService;
    this.fileSearchProviders = /* @__PURE__ */ new Map();
    this.textSearchProviders = /* @__PURE__ */ new Map();
    this.deferredFileSearchesByScheme = /* @__PURE__ */ new Map();
    this.deferredTextSearchesByScheme = /* @__PURE__ */ new Map();
    this.loggedSchemesMissingProviders = /* @__PURE__ */ new Set();
  }
  registerSearchResultProvider(scheme, type, provider) {
    let list;
    let deferredMap;
    if (type === 0) {
      list = this.fileSearchProviders;
      deferredMap = this.deferredFileSearchesByScheme;
    } else if (type === 1) {
      list = this.textSearchProviders;
      deferredMap = this.deferredTextSearchesByScheme;
    } else {
      throw new Error("Unknown SearchProviderType");
    }
    list.set(scheme, provider);
    if (deferredMap.has(scheme)) {
      deferredMap.get(scheme).complete(provider);
      deferredMap.delete(scheme);
    }
    return toDisposable(() => {
      list.delete(scheme);
    });
  }
  async textSearch(query, token, onProgress, notebookURIs) {
    const localResults = this.getLocalResults(query);
    if (onProgress) {
      coalesce([...localResults.results.values()]).forEach(onProgress);
    }
    const onProviderProgress = (progress) => {
      if (isFileMatch(progress)) {
        if (!localResults.results.has(progress.resource) && !(notebookURIs && notebookURIs.has(progress.resource)) && onProgress) {
          onProgress(progress);
        }
      } else if (onProgress) {
        onProgress(progress);
      }
      if (isProgressMessage(progress)) {
        this.logService.debug("SearchService#search", progress.message);
      }
    };
    const otherResults = await this.doSearch(query, token, onProviderProgress);
    return {
      ...otherResults,
      ...{
        limitHit: otherResults.limitHit || localResults.limitHit
      },
      results: [...otherResults.results, ...coalesce([...localResults.results.values()])]
    };
  }
  fileSearch(query, token) {
    return this.doSearch(query, token);
  }
  doSearch(query, token, onProgress) {
    this.logService.trace("SearchService#search", JSON.stringify(query));
    const schemesInQuery = this.getSchemesInQuery(query);
    const providerActivations = [Promise.resolve(null)];
    schemesInQuery.forEach((scheme) => providerActivations.push(this.extensionService.activateByEvent(`onSearch:${scheme}`)));
    providerActivations.push(this.extensionService.activateByEvent("onSearch:file"));
    const providerPromise = (async () => {
      await Promise.all(providerActivations);
      await this.extensionService.whenInstalledExtensionsRegistered();
      if (token && token.isCancellationRequested) {
        return Promise.reject(new CancellationError());
      }
      const progressCallback = (item) => {
        if (token && token.isCancellationRequested) {
          return;
        }
        onProgress == null ? void 0 : onProgress(item);
      };
      const exists = await Promise.all(query.folderQueries.map((query2) => this.fileService.exists(query2.folder)));
      query.folderQueries = query.folderQueries.filter((_, i) => exists[i]);
      let completes = await this.searchWithProviders(query, progressCallback, token);
      completes = coalesce(completes);
      if (!completes.length) {
        return {
          limitHit: false,
          results: [],
          messages: []
        };
      }
      return {
        limitHit: completes[0] && completes[0].limitHit,
        stats: completes[0].stats,
        messages: coalesce(flatten(completes.map((i) => i.messages))).filter(uniqueFilter((message) => message.type + message.text + message.trusted)),
        results: flatten(completes.map((c) => c.results))
      };
    })();
    return new Promise((resolve, reject) => {
      if (token) {
        token.onCancellationRequested(() => {
          reject(new CancellationError());
        });
      }
      providerPromise.then(resolve, reject);
    });
  }
  getSchemesInQuery(query) {
    var _a2, _b2;
    const schemes = /* @__PURE__ */ new Set();
    (_a2 = query.folderQueries) == null ? void 0 : _a2.forEach((fq) => schemes.add(fq.folder.scheme));
    (_b2 = query.extraFileResources) == null ? void 0 : _b2.forEach((extraFile) => schemes.add(extraFile.scheme));
    return schemes;
  }
  async waitForProvider(queryType, scheme) {
    const deferredMap = queryType === 1 ? this.deferredFileSearchesByScheme : this.deferredTextSearchesByScheme;
    if (deferredMap.has(scheme)) {
      return deferredMap.get(scheme).p;
    } else {
      const deferred = new DeferredPromise();
      deferredMap.set(scheme, deferred);
      return deferred.p;
    }
  }
  async searchWithProviders(query, onProviderProgress, token) {
    const e2eSW = StopWatch.create(false);
    const searchPs = [];
    const fqs = this.groupFolderQueriesByScheme(query);
    const someSchemeHasProvider = [...fqs.keys()].some((scheme) => {
      return query.type === 1 ? this.fileSearchProviders.has(scheme) : this.textSearchProviders.has(scheme);
    });
    await Promise.all([...fqs.keys()].map(async (scheme) => {
      const schemeFQs = fqs.get(scheme);
      let provider = query.type === 1 ? this.fileSearchProviders.get(scheme) : this.textSearchProviders.get(scheme);
      if (!provider) {
        if (someSchemeHasProvider) {
          if (!this.loggedSchemesMissingProviders.has(scheme)) {
            this.logService.warn(`No search provider registered for scheme: ${scheme}. Another scheme has a provider, not waiting for ${scheme}`);
            this.loggedSchemesMissingProviders.add(scheme);
          }
          return;
        } else {
          if (!this.loggedSchemesMissingProviders.has(scheme)) {
            this.logService.warn(`No search provider registered for scheme: ${scheme}, waiting`);
            this.loggedSchemesMissingProviders.add(scheme);
          }
          provider = await this.waitForProvider(query.type, scheme);
        }
      }
      const oneSchemeQuery = {
        ...query,
        ...{
          folderQueries: schemeFQs
        }
      };
      searchPs.push(query.type === 1 ? provider.fileSearch(oneSchemeQuery, token) : provider.textSearch(oneSchemeQuery, onProviderProgress, token));
    }));
    return Promise.all(searchPs).then((completes) => {
      const endToEndTime = e2eSW.elapsed();
      this.logService.trace(`SearchService#search: ${endToEndTime}ms`);
      completes.forEach((complete) => {
        this.sendTelemetry(query, endToEndTime, complete);
      });
      return completes;
    }, (err) => {
      const endToEndTime = e2eSW.elapsed();
      this.logService.trace(`SearchService#search: ${endToEndTime}ms`);
      const searchError = deserializeSearchError(err);
      this.logService.trace(`SearchService#searchError: ${searchError.message}`);
      this.sendTelemetry(query, endToEndTime, void 0, searchError);
      throw searchError;
    });
  }
  groupFolderQueriesByScheme(query) {
    const queries = /* @__PURE__ */ new Map();
    query.folderQueries.forEach((fq) => {
      const schemeFQs = queries.get(fq.folder.scheme) || [];
      schemeFQs.push(fq);
      queries.set(fq.folder.scheme, schemeFQs);
    });
    return queries;
  }
  sendTelemetry(query, endToEndTime, complete, err) {
    const fileSchemeOnly = query.folderQueries.every((fq) => fq.folder.scheme === Schemas.file);
    const otherSchemeOnly = query.folderQueries.every((fq) => fq.folder.scheme !== Schemas.file);
    const scheme = fileSchemeOnly ? Schemas.file : otherSchemeOnly ? "other" : "mixed";
    if (query.type === 1 && complete && complete.stats) {
      const fileSearchStats = complete.stats;
      if (fileSearchStats.fromCache) {
        const cacheStats = fileSearchStats.detailStats;
        this.telemetryService.publicLog2("cachedSearchComplete", {
          reason: query._reason,
          resultCount: fileSearchStats.resultCount,
          workspaceFolderCount: query.folderQueries.length,
          endToEndTime,
          sortingTime: fileSearchStats.sortingTime,
          cacheWasResolved: cacheStats.cacheWasResolved,
          cacheLookupTime: cacheStats.cacheLookupTime,
          cacheFilterTime: cacheStats.cacheFilterTime,
          cacheEntryCount: cacheStats.cacheEntryCount,
          scheme
        });
      } else {
        const searchEngineStats = fileSearchStats.detailStats;
        this.telemetryService.publicLog2("searchComplete", {
          reason: query._reason,
          resultCount: fileSearchStats.resultCount,
          workspaceFolderCount: query.folderQueries.length,
          endToEndTime,
          sortingTime: fileSearchStats.sortingTime,
          fileWalkTime: searchEngineStats.fileWalkTime,
          directoriesWalked: searchEngineStats.directoriesWalked,
          filesWalked: searchEngineStats.filesWalked,
          cmdTime: searchEngineStats.cmdTime,
          cmdResultCount: searchEngineStats.cmdResultCount,
          scheme
        });
      }
    } else if (query.type === 2) {
      let errorType;
      if (err) {
        errorType = err.code === SearchErrorCode.regexParseError ? "regex" : err.code === SearchErrorCode.unknownEncoding ? "encoding" : err.code === SearchErrorCode.globParseError ? "glob" : err.code === SearchErrorCode.invalidLiteral ? "literal" : err.code === SearchErrorCode.other ? "other" : err.code === SearchErrorCode.canceled ? "canceled" : "unknown";
      }
      this.telemetryService.publicLog2("textSearchComplete", {
        reason: query._reason,
        workspaceFolderCount: query.folderQueries.length,
        endToEndTime,
        scheme,
        error: errorType
      });
    }
  }
  getLocalResults(query) {
    const localResults = new ResourceMap((uri) => this.uriIdentityService.extUri.getComparisonKey(uri));
    let limitHit = false;
    if (query.type === 2) {
      const canonicalToOriginalResources = new ResourceMap();
      for (const editorInput of this.editorService.editors) {
        const canonical = EditorResourceAccessor.getCanonicalUri(editorInput, { supportSideBySide: SideBySideEditor.PRIMARY });
        const original = EditorResourceAccessor.getOriginalUri(editorInput, { supportSideBySide: SideBySideEditor.PRIMARY });
        if (canonical) {
          canonicalToOriginalResources.set(canonical, original ?? canonical);
        }
      }
      const models = this.modelService.getModels();
      models.forEach((model) => {
        const resource = model.uri;
        if (!resource) {
          return;
        }
        if (limitHit) {
          return;
        }
        const originalResource = canonicalToOriginalResources.get(resource);
        if (!originalResource) {
          return;
        }
        if (model.getLanguageId() === "search-result" && !(query.includePattern && query.includePattern["**/*.code-search"])) {
          return;
        }
        if (originalResource.scheme !== Schemas.untitled && !this.fileService.hasProvider(originalResource)) {
          return;
        }
        if (originalResource.scheme === "git") {
          return;
        }
        if (!this.matches(originalResource, query)) {
          return;
        }
        const askMax = isNumber(query.maxResults) ? query.maxResults + 1 : Number.MAX_SAFE_INTEGER;
        let matches = model.findMatches(query.contentPattern.pattern, false, !!query.contentPattern.isRegExp, !!query.contentPattern.isCaseSensitive, query.contentPattern.isWordMatch ? query.contentPattern.wordSeparators : null, false, askMax);
        if (matches.length) {
          if (askMax && matches.length >= askMax) {
            limitHit = true;
            matches = matches.slice(0, askMax - 1);
          }
          const fileMatch = new FileMatch(originalResource);
          localResults.set(originalResource, fileMatch);
          const textSearchResults = editorMatchesToTextSearchResults(matches, model, query.previewOptions);
          fileMatch.results = addContextToEditorMatches(textSearchResults, model, query);
        } else {
          localResults.set(originalResource, null);
        }
      });
    }
    return {
      results: localResults,
      limitHit
    };
  }
  matches(resource, query) {
    return pathIncludedInQuery(query, resource.fsPath);
  }
  async clearCache(cacheKey) {
    const clearPs = Array.from(this.fileSearchProviders.values()).map((provider) => provider && provider.clearCache(cacheKey));
    await Promise.all(clearPs);
  }
};
SearchService = __decorate([
  __param(0, IModelService),
  __param(1, IEditorService),
  __param(2, ITelemetryService),
  __param(3, ILogService),
  __param(4, IExtensionService),
  __param(5, IFileService),
  __param(6, IUriIdentityService)
], SearchService);
const REPLACE_PREVIEW = "replacePreview";
const toReplaceResource = (fileResource) => {
  return fileResource.with({ scheme: Schemas.internal, fragment: REPLACE_PREVIEW, query: JSON.stringify({ scheme: fileResource.scheme }) });
};
const toFileResource = (replaceResource) => {
  return replaceResource.with({ scheme: JSON.parse(replaceResource.query)["scheme"], fragment: "", query: "" });
};
let ReplacePreviewContentProvider = class ReplacePreviewContentProvider2 {
  constructor(instantiationService, textModelResolverService) {
    this.instantiationService = instantiationService;
    this.textModelResolverService = textModelResolverService;
    this.textModelResolverService.registerTextModelContentProvider(Schemas.internal, this);
  }
  provideTextContent(uri) {
    if (uri.fragment === REPLACE_PREVIEW) {
      return this.instantiationService.createInstance(ReplacePreviewModel).resolve(uri);
    }
    return null;
  }
};
ReplacePreviewContentProvider = __decorate([
  __param(0, IInstantiationService),
  __param(1, ITextModelService)
], ReplacePreviewContentProvider);
let ReplacePreviewModel = class ReplacePreviewModel2 extends Disposable {
  constructor(modelService, languageService, textModelResolverService, replaceService, searchWorkbenchService) {
    super();
    this.modelService = modelService;
    this.languageService = languageService;
    this.textModelResolverService = textModelResolverService;
    this.replaceService = replaceService;
    this.searchWorkbenchService = searchWorkbenchService;
  }
  async resolve(replacePreviewUri) {
    const fileResource = toFileResource(replacePreviewUri);
    const fileMatch = this.searchWorkbenchService.searchModel.searchResult.matches().filter((match) => match.resource.toString() === fileResource.toString())[0];
    const ref = this._register(await this.textModelResolverService.createModelReference(fileResource));
    const sourceModel = ref.object.textEditorModel;
    const sourceModelLanguageId = sourceModel.getLanguageId();
    const replacePreviewModel = this.modelService.createModel(createTextBufferFactoryFromSnapshot(sourceModel.createSnapshot()), this.languageService.createById(sourceModelLanguageId), replacePreviewUri);
    this._register(fileMatch.onChange(({ forceUpdateModel }) => this.update(sourceModel, replacePreviewModel, fileMatch, forceUpdateModel)));
    this._register(this.searchWorkbenchService.searchModel.onReplaceTermChanged(() => this.update(sourceModel, replacePreviewModel, fileMatch)));
    this._register(fileMatch.onDispose(() => replacePreviewModel.dispose()));
    this._register(replacePreviewModel.onWillDispose(() => this.dispose()));
    this._register(sourceModel.onWillDispose(() => this.dispose()));
    return replacePreviewModel;
  }
  update(sourceModel, replacePreviewModel, fileMatch, override = false) {
    if (!sourceModel.isDisposed() && !replacePreviewModel.isDisposed()) {
      this.replaceService.updateReplacePreview(fileMatch, override);
    }
  }
};
ReplacePreviewModel = __decorate([
  __param(0, IModelService),
  __param(1, ILanguageService),
  __param(2, ITextModelService),
  __param(3, IReplaceService),
  __param(4, ISearchWorkbenchService)
], ReplacePreviewModel);
let ReplaceService = (_a = class {
  constructor(textFileService, editorService, textModelResolverService, bulkEditorService, labelService, notebookEditorModelResolverService) {
    this.textFileService = textFileService;
    this.editorService = editorService;
    this.textModelResolverService = textModelResolverService;
    this.bulkEditorService = bulkEditorService;
    this.labelService = labelService;
    this.notebookEditorModelResolverService = notebookEditorModelResolverService;
  }
  async replace(arg, progress = void 0, resource = null) {
    const edits = this.createEdits(arg, resource);
    await this.bulkEditorService.apply(edits, { progress });
    const rawTextPromises = edits.map(async (e) => {
      var _a2, _b2;
      if (e.resource.scheme === Schemas.vscodeNotebookCell) {
        const notebookResource = (_a2 = CellUri.parse(e.resource)) == null ? void 0 : _a2.notebook;
        if (notebookResource) {
          let ref;
          try {
            ref = await this.notebookEditorModelResolverService.resolve(notebookResource);
            await ref.object.save({ source: _a.REPLACE_SAVE_SOURCE });
          } finally {
            ref == null ? void 0 : ref.dispose();
          }
        }
        return;
      } else {
        return (_b2 = this.textFileService.files.get(e.resource)) == null ? void 0 : _b2.save({ source: _a.REPLACE_SAVE_SOURCE });
      }
    });
    return Promises.settled(rawTextPromises);
  }
  async openReplacePreview(element, preserveFocus, sideBySide, pinned) {
    const fileMatch = element instanceof Match ? element.parent() : element;
    const editor = await this.editorService.openEditor({
      original: { resource: fileMatch.resource },
      modified: { resource: toReplaceResource(fileMatch.resource) },
      label: localize(
        "fileReplaceChanges",
        "{0} ↔ {1} (Replace Preview)",
        fileMatch.name(),
        fileMatch.name()
      ),
      description: this.labelService.getUriLabel(dirname(fileMatch.resource), { relative: true }),
      options: {
        preserveFocus,
        pinned,
        revealIfVisible: true
      }
    });
    const input = editor == null ? void 0 : editor.input;
    const disposable = fileMatch.onDispose(() => {
      input == null ? void 0 : input.dispose();
      disposable.dispose();
    });
    await this.updateReplacePreview(fileMatch);
    if (editor) {
      const editorControl = editor.getControl();
      if (element instanceof Match && editorControl) {
        editorControl.revealLineInCenter(element.range().startLineNumber, 1);
      }
    }
  }
  async updateReplacePreview(fileMatch, override = false) {
    const replacePreviewUri = toReplaceResource(fileMatch.resource);
    const [sourceModelRef, replaceModelRef] = await Promise.all([this.textModelResolverService.createModelReference(fileMatch.resource), this.textModelResolverService.createModelReference(replacePreviewUri)]);
    const sourceModel = sourceModelRef.object.textEditorModel;
    const replaceModel = replaceModelRef.object.textEditorModel;
    try {
      if (sourceModel && replaceModel) {
        if (override) {
          replaceModel.setValue(sourceModel.getValue());
        } else {
          replaceModel.undo();
        }
        this.applyEditsToPreview(fileMatch, replaceModel);
      }
    } finally {
      sourceModelRef.dispose();
      replaceModelRef.dispose();
    }
  }
  applyEditsToPreview(fileMatch, replaceModel) {
    const resourceEdits = this.createEdits(fileMatch, replaceModel.uri);
    const modelEdits = [];
    for (const resourceEdit of resourceEdits) {
      modelEdits.push(EditOperation.replaceMove(Range.lift(resourceEdit.textEdit.range), resourceEdit.textEdit.text));
    }
    replaceModel.pushEditOperations([], modelEdits.sort((a, b) => Range.compareRangesUsingStarts(a.range, b.range)), () => []);
  }
  createEdits(arg, resource = null) {
    const edits = [];
    if (arg instanceof Match) {
      if (arg instanceof MatchInNotebook) {
        if (!arg.isWebviewMatch()) {
          const match = arg;
          edits.push(this.createEdit(match, match.replaceString, match.cell.uri));
        }
      } else {
        const match = arg;
        edits.push(this.createEdit(match, match.replaceString, resource));
      }
    }
    if (arg instanceof FileMatch$1) {
      arg = [arg];
    }
    if (arg instanceof Array) {
      arg.forEach((element) => {
        const fileMatch = element;
        if (fileMatch.count() > 0) {
          edits.push(...fileMatch.matches().flatMap((match) => this.createEdits(match, resource)));
        }
      });
    }
    return edits;
  }
  createEdit(match, text, resource = null) {
    const fileMatch = match.parent();
    return new ResourceTextEdit(
      resource ?? fileMatch.resource,
      { range: match.range(), text },
      void 0,
      void 0
    );
  }
}, _a.REPLACE_SAVE_SOURCE = SaveSourceRegistry.registerSource("searchReplace.source", localize("searchReplace.source", "Search and Replace")), _a);
ReplaceService = __decorate([
  __param(0, ITextFileService),
  __param(1, IEditorService),
  __param(2, ITextModelService),
  __param(3, IBulkEditService),
  __param(4, ILabelService),
  __param(5, INotebookEditorModelResolverService)
], ReplaceService);
var css$3 = '.quick-input-list .quick-input-list-entry.has-actions:hover .quick-input-list-entry-action-bar .action-label.dirty-anything:before{content:"\\ea76"}';
n(css$3, {});
var LoadingPhase;
(function(LoadingPhase2) {
  LoadingPhase2[LoadingPhase2["Created"] = 1] = "Created";
  LoadingPhase2[LoadingPhase2["Loading"] = 2] = "Loading";
  LoadingPhase2[LoadingPhase2["Loaded"] = 3] = "Loaded";
  LoadingPhase2[LoadingPhase2["Errored"] = 4] = "Errored";
  LoadingPhase2[LoadingPhase2["Disposed"] = 5] = "Disposed";
})(LoadingPhase || (LoadingPhase = {}));
class FileQueryCacheState {
  get cacheKey() {
    if (this.loadingPhase === LoadingPhase.Loaded || !this.previousCacheState) {
      return this._cacheKey;
    }
    return this.previousCacheState.cacheKey;
  }
  get isLoaded() {
    const isLoaded = this.loadingPhase === LoadingPhase.Loaded;
    return isLoaded || !this.previousCacheState ? isLoaded : this.previousCacheState.isLoaded;
  }
  get isUpdating() {
    const isUpdating = this.loadingPhase === LoadingPhase.Loading;
    return isUpdating || !this.previousCacheState ? isUpdating : this.previousCacheState.isUpdating;
  }
  constructor(cacheQuery, loadFn, disposeFn, previousCacheState) {
    this.cacheQuery = cacheQuery;
    this.loadFn = loadFn;
    this.disposeFn = disposeFn;
    this.previousCacheState = previousCacheState;
    this._cacheKey = defaultGenerator.nextId();
    this.query = this.cacheQuery(this._cacheKey);
    this.loadingPhase = LoadingPhase.Created;
    if (this.previousCacheState) {
      const current = Object.assign({}, this.query, { cacheKey: null });
      const previous = Object.assign({}, this.previousCacheState.query, { cacheKey: null });
      if (!equals(current, previous)) {
        this.previousCacheState.dispose();
        this.previousCacheState = void 0;
      }
    }
  }
  load() {
    if (this.isUpdating) {
      return this;
    }
    this.loadingPhase = LoadingPhase.Loading;
    this.loadPromise = (async () => {
      try {
        await this.loadFn(this.query);
        this.loadingPhase = LoadingPhase.Loaded;
        if (this.previousCacheState) {
          this.previousCacheState.dispose();
          this.previousCacheState = void 0;
        }
      } catch (error) {
        this.loadingPhase = LoadingPhase.Errored;
        throw error;
      }
    })();
    return this;
  }
  dispose() {
    if (this.loadPromise) {
      (async () => {
        try {
          await this.loadPromise;
        } catch (error) {
        }
        this.loadingPhase = LoadingPhase.Disposed;
        this.disposeFn(this._cacheKey);
      })();
    } else {
      this.loadingPhase = LoadingPhase.Disposed;
    }
    if (this.previousCacheState) {
      this.previousCacheState.dispose();
      this.previousCacheState = void 0;
    }
  }
}
let SymbolsQuickAccessProvider = (_b = class extends PickerQuickAccessProvider {
  get defaultFilterValue() {
    const editor = this.codeEditorService.getFocusedCodeEditor();
    if (editor) {
      return withNullAsUndefined(getSelectionSearchString(editor));
    }
    return void 0;
  }
  constructor(labelService, openerService, editorService, configurationService, codeEditorService) {
    super(_b.PREFIX, {
      canAcceptInBackground: true,
      noResultsPick: {
        label: localize("noSymbolResults", "No matching workspace symbols")
      }
    });
    this.labelService = labelService;
    this.openerService = openerService;
    this.editorService = editorService;
    this.configurationService = configurationService;
    this.codeEditorService = codeEditorService;
    this.delayer = this._register(new ThrottledDelayer(_b.TYPING_SEARCH_DELAY));
  }
  get configuration() {
    var _a2;
    const editorConfig = (_a2 = this.configurationService.getValue().workbench) == null ? void 0 : _a2.editor;
    return {
      openEditorPinned: !(editorConfig == null ? void 0 : editorConfig.enablePreviewFromQuickOpen) || !(editorConfig == null ? void 0 : editorConfig.enablePreview),
      openSideBySideDirection: editorConfig == null ? void 0 : editorConfig.openSideBySideDirection
    };
  }
  _getPicks(filter, disposables, token) {
    return this.getSymbolPicks(filter, void 0, token);
  }
  async getSymbolPicks(filter, options, token) {
    return this.delayer.trigger(async () => {
      if (token.isCancellationRequested) {
        return [];
      }
      return this.doGetSymbolPicks(prepareQuery(filter), options, token);
    }, options == null ? void 0 : options.delay);
  }
  async doGetSymbolPicks(query, options, token) {
    let symbolQuery;
    let containerQuery;
    if (query.values && query.values.length > 1) {
      symbolQuery = pieceToQuery(query.values[0]);
      containerQuery = pieceToQuery(query.values.slice(1));
    } else {
      symbolQuery = query;
    }
    const workspaceSymbols = await getWorkspaceSymbols(symbolQuery.original, token);
    if (token.isCancellationRequested) {
      return [];
    }
    const symbolPicks = [];
    const openSideBySideDirection = this.configuration.openSideBySideDirection;
    for (const { symbol, provider } of workspaceSymbols) {
      if ((options == null ? void 0 : options.skipLocal) && !_b.TREAT_AS_GLOBAL_SYMBOL_TYPES.has(symbol.kind) && !!symbol.containerName) {
        continue;
      }
      const symbolLabel = symbol.name;
      const symbolLabelWithIcon = `$(${SymbolKinds.toIcon(symbol.kind).id}) ${symbolLabel}`;
      const symbolLabelIconOffset = symbolLabelWithIcon.length - symbolLabel.length;
      let symbolScore = void 0;
      let symbolMatches = void 0;
      let skipContainerQuery = false;
      if (symbolQuery.original.length > 0) {
        if (symbolQuery !== query) {
          [symbolScore, symbolMatches] = scoreFuzzy2(symbolLabelWithIcon, { ...query, values: void 0 }, 0, symbolLabelIconOffset);
          if (typeof symbolScore === "number") {
            skipContainerQuery = true;
          }
        }
        if (typeof symbolScore !== "number") {
          [symbolScore, symbolMatches] = scoreFuzzy2(symbolLabelWithIcon, symbolQuery, 0, symbolLabelIconOffset);
          if (typeof symbolScore !== "number") {
            continue;
          }
        }
      }
      const symbolUri = symbol.location.uri;
      let containerLabel = void 0;
      if (symbolUri) {
        const containerPath = this.labelService.getUriLabel(symbolUri, { relative: true });
        if (symbol.containerName) {
          containerLabel = `${symbol.containerName} • ${containerPath}`;
        } else {
          containerLabel = containerPath;
        }
      }
      let containerScore = void 0;
      let containerMatches = void 0;
      if (!skipContainerQuery && containerQuery && containerQuery.original.length > 0) {
        if (containerLabel) {
          [containerScore, containerMatches] = scoreFuzzy2(containerLabel, containerQuery);
        }
        if (typeof containerScore !== "number") {
          continue;
        }
        if (typeof symbolScore === "number") {
          symbolScore += containerScore;
        }
      }
      const deprecated = symbol.tags ? symbol.tags.indexOf(1) >= 0 : false;
      symbolPicks.push({
        symbol,
        resource: symbolUri,
        score: symbolScore,
        label: symbolLabelWithIcon,
        ariaLabel: symbolLabel,
        highlights: deprecated ? void 0 : {
          label: symbolMatches,
          description: containerMatches
        },
        description: containerLabel,
        strikethrough: deprecated,
        buttons: [
          {
            iconClass: openSideBySideDirection === "right" ? ThemeIcon.asClassName(Codicon.splitHorizontal) : ThemeIcon.asClassName(Codicon.splitVertical),
            tooltip: openSideBySideDirection === "right" ? localize("openToSide", "Open to the Side") : localize("openToBottom", "Open to the Bottom")
          }
        ],
        trigger: (buttonIndex, keyMods) => {
          this.openSymbol(provider, symbol, token, { keyMods, forceOpenSideBySide: true });
          return TriggerAction.CLOSE_PICKER;
        },
        accept: async (keyMods, event) => this.openSymbol(provider, symbol, token, { keyMods, preserveFocus: event.inBackground, forcePinned: event.inBackground })
      });
    }
    if (!(options == null ? void 0 : options.skipSorting)) {
      symbolPicks.sort((symbolA, symbolB) => this.compareSymbols(symbolA, symbolB));
    }
    return symbolPicks;
  }
  async openSymbol(provider, symbol, token, options) {
    let symbolToOpen = symbol;
    if (typeof provider.resolveWorkspaceSymbol === "function") {
      symbolToOpen = await provider.resolveWorkspaceSymbol(symbol, token) || symbol;
      if (token.isCancellationRequested) {
        return;
      }
    }
    if (symbolToOpen.location.uri.scheme === Schemas.http || symbolToOpen.location.uri.scheme === Schemas.https) {
      await this.openerService.open(symbolToOpen.location.uri, { fromUserGesture: true, allowContributedOpeners: true });
    } else {
      await this.editorService.openEditor({
        resource: symbolToOpen.location.uri,
        options: {
          preserveFocus: options == null ? void 0 : options.preserveFocus,
          pinned: options.keyMods.ctrlCmd || options.forcePinned || this.configuration.openEditorPinned,
          selection: symbolToOpen.location.range ? Range.collapseToStart(symbolToOpen.location.range) : void 0
        }
      }, options.keyMods.alt || this.configuration.openEditorPinned && options.keyMods.ctrlCmd || (options == null ? void 0 : options.forceOpenSideBySide) ? SIDE_GROUP : ACTIVE_GROUP);
    }
  }
  compareSymbols(symbolA, symbolB) {
    if (typeof symbolA.score === "number" && typeof symbolB.score === "number") {
      if (symbolA.score > symbolB.score) {
        return -1;
      }
      if (symbolA.score < symbolB.score) {
        return 1;
      }
    }
    if (symbolA.symbol && symbolB.symbol) {
      const symbolAName = symbolA.symbol.name.toLowerCase();
      const symbolBName = symbolB.symbol.name.toLowerCase();
      const res = symbolAName.localeCompare(symbolBName);
      if (res !== 0) {
        return res;
      }
    }
    if (symbolA.symbol && symbolB.symbol) {
      const symbolAKind = SymbolKinds.toIcon(symbolA.symbol.kind).id;
      const symbolBKind = SymbolKinds.toIcon(symbolB.symbol.kind).id;
      return symbolAKind.localeCompare(symbolBKind);
    }
    return 0;
  }
}, _b.PREFIX = "#", _b.TYPING_SEARCH_DELAY = 200, _b.TREAT_AS_GLOBAL_SYMBOL_TYPES = /* @__PURE__ */ new Set([
  4,
  9,
  0,
  10,
  2,
  3,
  1
]), _b);
SymbolsQuickAccessProvider = __decorate([
  __param(0, ILabelService),
  __param(1, IOpenerService),
  __param(2, IEditorService),
  __param(3, IConfigurationService),
  __param(4, ICodeEditorService)
], SymbolsQuickAccessProvider);
const QUICKOPEN_DETAIL_CONFIG = "task.quickOpen.detail";
const QUICKOPEN_SKIP_CONFIG = "task.quickOpen.skip";
const SHOW_ALL = localize("taskQuickPick.showAll", "Show All Tasks...");
const configureTaskIcon = registerIcon("tasks-list-configure", Codicon.gear, localize("configureTaskIcon", "Configuration icon in the tasks selection list."));
const removeTaskIcon = registerIcon("tasks-remove", Codicon.close, localize("removeTaskIcon", "Icon for remove in the tasks selection list."));
const runTaskStorageKey = "runTaskStorageKey";
let TaskQuickPick = class TaskQuickPick2 extends Disposable {
  constructor(_taskService, _configurationService, _quickInputService, _notificationService, _themeService, _dialogService, _storageService) {
    super();
    this._taskService = _taskService;
    this._configurationService = _configurationService;
    this._quickInputService = _quickInputService;
    this._notificationService = _notificationService;
    this._themeService = _themeService;
    this._dialogService = _dialogService;
    this._storageService = _storageService;
    this._sorter = this._taskService.createSorter();
  }
  _showDetail() {
    return !!this._configurationService.getValue(QUICKOPEN_DETAIL_CONFIG);
  }
  _guessTaskLabel(task) {
    if (task._label) {
      return task._label;
    }
    if (ConfiguringTask.is(task)) {
      let label = task.configures.type;
      const configures = deepClone(task.configures);
      delete configures["_key"];
      delete configures["type"];
      Object.keys(configures).forEach((key) => label += `: ${configures[key]}`);
      return label;
    }
    return "";
  }
  static getTaskLabelWithIcon(task, labelGuess) {
    const label = labelGuess || task._label;
    const icon = task.configurationProperties.icon;
    if (!icon) {
      return `${label}`;
    }
    return icon.id ? `$(${icon.id}) ${label}` : `$(${Codicon.tools.id}) ${label}`;
  }
  static applyColorStyles(task, entry, themeService) {
    var _a2;
    if ((_a2 = task.configurationProperties.icon) == null ? void 0 : _a2.color) {
      const colorTheme = themeService.getColorTheme();
      const styleElement = getColorStyleElement(colorTheme);
      entry.iconClasses = [getColorClass(task.configurationProperties.icon.color)];
      document.body.appendChild(styleElement);
    }
  }
  _createTaskEntry(task, extraButtons = []) {
    const buttons = [
      { iconClass: ThemeIcon.asClassName(configureTaskIcon), tooltip: localize("configureTask", "Configure Task") },
      ...extraButtons
    ];
    const entry = { label: TaskQuickPick2.getTaskLabelWithIcon(task, this._guessTaskLabel(task)), description: this._taskService.getTaskDescription(task), task, detail: this._showDetail() ? task.configurationProperties.detail : void 0, buttons };
    TaskQuickPick2.applyColorStyles(task, entry, this._themeService);
    return entry;
  }
  _createEntriesForGroup(entries, tasks, groupLabel, extraButtons = []) {
    entries.push({ type: "separator", label: groupLabel });
    tasks.forEach((task) => {
      if (!task.configurationProperties.hide) {
        entries.push(this._createTaskEntry(task, extraButtons));
      }
    });
  }
  _createTypeEntries(entries, types) {
    entries.push({ type: "separator", label: localize("contributedTasks", "contributed") });
    types.forEach((type) => {
      entries.push({ label: `$(folder) ${type}`, task: type, ariaLabel: localize("taskType", "All {0} tasks", type) });
    });
    entries.push({ label: SHOW_ALL, task: SHOW_ALL, alwaysShow: true });
  }
  _handleFolderTaskResult(result) {
    const tasks = [];
    Array.from(result).forEach(([key, folderTasks]) => {
      if (folderTasks.set) {
        tasks.push(...folderTasks.set.tasks);
      }
      if (folderTasks.configurations) {
        for (const configuration in folderTasks.configurations.byIdentifier) {
          tasks.push(folderTasks.configurations.byIdentifier[configuration]);
        }
      }
    });
    return tasks;
  }
  _dedupeConfiguredAndRecent(recentTasks, configuredTasks) {
    var _a2, _b2;
    let dedupedConfiguredTasks = [];
    const foundRecentTasks = Array(recentTasks.length).fill(false);
    for (let j = 0; j < configuredTasks.length; j++) {
      const workspaceFolder = (_a2 = configuredTasks[j].getWorkspaceFolder()) == null ? void 0 : _a2.uri.toString();
      const definition = (_b2 = configuredTasks[j].getDefinition()) == null ? void 0 : _b2._key;
      const type = configuredTasks[j].type;
      const label = configuredTasks[j]._label;
      const recentKey = configuredTasks[j].getRecentlyUsedKey();
      const findIndex = recentTasks.findIndex((value) => {
        var _a3, _b3;
        return workspaceFolder && definition && ((_a3 = value.getWorkspaceFolder()) == null ? void 0 : _a3.uri.toString()) === workspaceFolder && (((_b3 = value.getDefinition()) == null ? void 0 : _b3._key) === definition || value.type === type && value._label === label) || recentKey && value.getRecentlyUsedKey() === recentKey;
      });
      if (findIndex === -1) {
        dedupedConfiguredTasks.push(configuredTasks[j]);
      } else {
        recentTasks[findIndex] = configuredTasks[j];
        foundRecentTasks[findIndex] = true;
      }
    }
    dedupedConfiguredTasks = dedupedConfiguredTasks.sort((a, b) => this._sorter.compare(a, b));
    const prunedRecentTasks = [];
    for (let i = 0; i < recentTasks.length; i++) {
      if (foundRecentTasks[i] || ConfiguringTask.is(recentTasks[i])) {
        prunedRecentTasks.push(recentTasks[i]);
      }
    }
    return { configuredTasks: dedupedConfiguredTasks, recentTasks: prunedRecentTasks };
  }
  async getTopLevelEntries(defaultEntry) {
    if (this._topLevelEntries !== void 0) {
      return { entries: this._topLevelEntries };
    }
    let recentTasks = (await this._taskService.getSavedTasks("historical")).reverse();
    const configuredTasks = this._handleFolderTaskResult(await this._taskService.getWorkspaceTasks());
    const extensionTaskTypes = this._taskService.taskTypes();
    this._topLevelEntries = [];
    const dedupeAndPrune = this._dedupeConfiguredAndRecent(recentTasks, configuredTasks);
    const dedupedConfiguredTasks = dedupeAndPrune.configuredTasks;
    recentTasks = dedupeAndPrune.recentTasks;
    if (recentTasks.length > 0) {
      const removeRecentButton = {
        iconClass: ThemeIcon.asClassName(removeTaskIcon),
        tooltip: localize("removeRecent", "Remove Recently Used Task")
      };
      this._createEntriesForGroup(this._topLevelEntries, recentTasks, localize("recentlyUsed", "recently used"), [removeRecentButton]);
    }
    if (configuredTasks.length > 0) {
      if (dedupedConfiguredTasks.length > 0) {
        this._createEntriesForGroup(this._topLevelEntries, dedupedConfiguredTasks, localize("configured", "configured"));
      }
    }
    if (defaultEntry && configuredTasks.length === 0) {
      this._topLevelEntries.push({ type: "separator", label: localize("configured", "configured") });
      this._topLevelEntries.push(defaultEntry);
    }
    if (extensionTaskTypes.length > 0) {
      this._createTypeEntries(this._topLevelEntries, extensionTaskTypes);
    }
    return { entries: this._topLevelEntries, isSingleConfigured: configuredTasks.length === 1 ? configuredTasks[0] : void 0 };
  }
  async handleSettingOption(selectedType) {
    const { confirmed } = await this._dialogService.confirm({
      type: Severity.Warning,
      message: localize(
        "TaskQuickPick.changeSettingDetails",
        "Task detection for {0} tasks causes files in any workspace you open to be run as code. Enabling {0} task detection is a user setting and will apply to any workspace you open. \n\n Do you want to enable {0} task detection for all workspaces?",
        selectedType
      ),
      cancelButton: localize("TaskQuickPick.changeSettingNo", "No")
    });
    if (confirmed) {
      await this._configurationService.updateValue(`${selectedType}.autoDetect`, "on");
      await new Promise((resolve) => setTimeout(() => resolve(), 100));
      return this.show(localize("TaskService.pickRunTask", "Select the task to run"), void 0, selectedType);
    }
    return void 0;
  }
  async show(placeHolder, defaultEntry, startAtType, name) {
    const picker = this._quickInputService.createQuickPick();
    picker.placeholder = placeHolder;
    picker.matchOnDescription = true;
    picker.ignoreFocusOut = false;
    picker.onDidTriggerItemButton(async (context) => {
      const task = context.item.task;
      if (context.button.iconClass === ThemeIcon.asClassName(removeTaskIcon)) {
        const key = task && !isString(task) ? task.getRecentlyUsedKey() : void 0;
        if (key) {
          this._taskService.removeRecentlyUsedTask(key);
        }
        const indexToRemove = picker.items.indexOf(context.item);
        if (indexToRemove >= 0) {
          picker.items = [...picker.items.slice(0, indexToRemove), ...picker.items.slice(indexToRemove + 1)];
        }
      } else if (context.button.iconClass === ThemeIcon.asClassName(configureTaskIcon)) {
        this._quickInputService.cancel();
        if (ContributedTask.is(task)) {
          this._taskService.customize(task, void 0, true);
        } else if (CustomTask.is(task) || ConfiguringTask.is(task)) {
          let canOpenConfig = false;
          try {
            canOpenConfig = await this._taskService.openConfig(task);
          } catch (e) {
          }
          if (!canOpenConfig) {
            this._taskService.customize(task, void 0, true);
          }
        }
      }
    });
    if (name) {
      picker.value = name;
    }
    let firstLevelTask = startAtType;
    if (!firstLevelTask) {
      const topLevelEntriesResult = await this.getTopLevelEntries(defaultEntry);
      if (topLevelEntriesResult.isSingleConfigured && this._configurationService.getValue(QUICKOPEN_SKIP_CONFIG)) {
        picker.dispose();
        return this._toTask(topLevelEntriesResult.isSingleConfigured);
      }
      const taskQuickPickEntries = topLevelEntriesResult.entries;
      firstLevelTask = await this._doPickerFirstLevel(picker, taskQuickPickEntries);
    }
    do {
      if (isString(firstLevelTask)) {
        if (name) {
          await this._doPickerFirstLevel(picker, (await this.getTopLevelEntries(defaultEntry)).entries);
          picker.dispose();
          return void 0;
        }
        const selectedEntry = await this.doPickerSecondLevel(picker, firstLevelTask);
        if (selectedEntry && !selectedEntry.settingType && selectedEntry.task === null) {
          picker.value = "";
          firstLevelTask = await this._doPickerFirstLevel(picker, (await this.getTopLevelEntries(defaultEntry)).entries);
        } else if (selectedEntry && isString(selectedEntry.settingType)) {
          picker.dispose();
          return this.handleSettingOption(selectedEntry.settingType);
        } else {
          picker.dispose();
          return (selectedEntry == null ? void 0 : selectedEntry.task) && !isString(selectedEntry == null ? void 0 : selectedEntry.task) ? this._toTask(selectedEntry == null ? void 0 : selectedEntry.task) : void 0;
        }
      } else if (firstLevelTask) {
        picker.dispose();
        return this._toTask(firstLevelTask);
      } else {
        picker.dispose();
        return firstLevelTask;
      }
    } while (1);
    return;
  }
  async _doPickerFirstLevel(picker, taskQuickPickEntries) {
    picker.items = taskQuickPickEntries;
    showWithPinnedItems(this._storageService, runTaskStorageKey, picker, true);
    const firstLevelPickerResult = await new Promise((resolve) => {
      Event.once(picker.onDidAccept)(async () => {
        resolve(picker.selectedItems ? picker.selectedItems[0] : void 0);
      });
    });
    return firstLevelPickerResult == null ? void 0 : firstLevelPickerResult.task;
  }
  async doPickerSecondLevel(picker, type, name) {
    picker.busy = true;
    if (type === SHOW_ALL) {
      const items = (await this._taskService.tasks()).filter((t) => !t.configurationProperties.hide).sort((a, b) => this._sorter.compare(a, b)).map((task) => this._createTaskEntry(task));
      items.push(...TaskQuickPick2.allSettingEntries(this._configurationService));
      picker.items = items;
    } else {
      picker.value = name || "";
      picker.items = await this._getEntriesForProvider(type);
    }
    await picker.show();
    picker.busy = false;
    const secondLevelPickerResult = await new Promise((resolve) => {
      Event.once(picker.onDidAccept)(async () => {
        resolve(picker.selectedItems ? picker.selectedItems[0] : void 0);
      });
    });
    return secondLevelPickerResult;
  }
  static allSettingEntries(configurationService) {
    const entries = [];
    const gruntEntry = TaskQuickPick2.getSettingEntry(configurationService, "grunt");
    if (gruntEntry) {
      entries.push(gruntEntry);
    }
    const gulpEntry = TaskQuickPick2.getSettingEntry(configurationService, "gulp");
    if (gulpEntry) {
      entries.push(gulpEntry);
    }
    const jakeEntry = TaskQuickPick2.getSettingEntry(configurationService, "jake");
    if (jakeEntry) {
      entries.push(jakeEntry);
    }
    return entries;
  }
  static getSettingEntry(configurationService, type) {
    if (configurationService.getValue(`${type}.autoDetect`) === "off") {
      return {
        label: localize(
          "TaskQuickPick.changeSettingsOptions",
          "$(gear) {0} task detection is turned off. Enable {1} task detection...",
          type[0].toUpperCase() + type.slice(1),
          type
        ),
        task: null,
        settingType: type,
        alwaysShow: true
      };
    }
    return void 0;
  }
  async _getEntriesForProvider(type) {
    const tasks = (await this._taskService.tasks({ type })).sort((a, b) => this._sorter.compare(a, b));
    let taskQuickPickEntries = [];
    if (tasks.length > 0) {
      for (const task of tasks) {
        if (!task.configurationProperties.hide) {
          taskQuickPickEntries.push(this._createTaskEntry(task));
        }
      }
      taskQuickPickEntries.push({
        type: "separator"
      }, {
        label: localize("TaskQuickPick.goBack", "Go back ↩"),
        task: null,
        alwaysShow: true
      });
    } else {
      taskQuickPickEntries = [{
        label: localize("TaskQuickPick.noTasksForType", "No {0} tasks found. Go back ↩", type),
        task: null,
        alwaysShow: true
      }];
    }
    const settingEntry = TaskQuickPick2.getSettingEntry(this._configurationService, type);
    if (settingEntry) {
      taskQuickPickEntries.push(settingEntry);
    }
    return taskQuickPickEntries;
  }
  async _toTask(task) {
    if (!ConfiguringTask.is(task)) {
      return task;
    }
    const resolvedTask = await this._taskService.tryResolveTask(task);
    if (!resolvedTask) {
      this._notificationService.error(localize(
        "noProviderForTask",
        'There is no task provider registered for tasks of type "{0}".',
        task.type
      ));
    }
    return resolvedTask;
  }
};
TaskQuickPick = __decorate([
  __param(0, ITaskService),
  __param(1, IConfigurationService),
  __param(2, IQuickInputService),
  __param(3, INotificationService),
  __param(4, IThemeService),
  __param(5, IDialogService),
  __param(6, IStorageService)
], TaskQuickPick);
let TasksQuickAccessProvider = (_c = class extends PickerQuickAccessProvider {
  constructor(extensionService, _taskService, _configurationService, _quickInputService, _notificationService, _dialogService, _themeService, _storageService) {
    super(_c.PREFIX, {
      noResultsPick: {
        label: localize("noTaskResults", "No matching tasks")
      }
    });
    this._taskService = _taskService;
    this._configurationService = _configurationService;
    this._quickInputService = _quickInputService;
    this._notificationService = _notificationService;
    this._dialogService = _dialogService;
    this._themeService = _themeService;
    this._storageService = _storageService;
  }
  async _getPicks(filter, disposables, token) {
    if (token.isCancellationRequested) {
      return [];
    }
    const taskQuickPick = new TaskQuickPick(
      this._taskService,
      this._configurationService,
      this._quickInputService,
      this._notificationService,
      this._themeService,
      this._dialogService,
      this._storageService
    );
    const topLevelPicks = await taskQuickPick.getTopLevelEntries();
    const taskPicks = [];
    for (const entry of topLevelPicks.entries) {
      const highlights = matchesFuzzy(filter, entry.label);
      if (!highlights) {
        continue;
      }
      if (entry.type === "separator") {
        taskPicks.push(entry);
      }
      const task = entry.task;
      const quickAccessEntry = entry;
      quickAccessEntry.highlights = { label: highlights };
      quickAccessEntry.trigger = (index) => {
        var _a2;
        if (index === 1 && ((_a2 = quickAccessEntry.buttons) == null ? void 0 : _a2.length) === 2) {
          const key = task && !isString(task) ? task.getRecentlyUsedKey() : void 0;
          if (key) {
            this._taskService.removeRecentlyUsedTask(key);
          }
          return TriggerAction.REFRESH_PICKER;
        } else {
          if (ContributedTask.is(task)) {
            this._taskService.customize(task, void 0, true);
          } else if (CustomTask.is(task)) {
            this._taskService.openConfig(task);
          }
          return TriggerAction.CLOSE_PICKER;
        }
      };
      quickAccessEntry.accept = async () => {
        if (isString(task)) {
          const showResult = await taskQuickPick.show(localize("TaskService.pickRunTask", "Select the task to run"), void 0, task);
          if (showResult) {
            this._taskService.run(showResult, { attachProblemMatcher: true });
          }
        } else {
          this._taskService.run(await this._toTask(task), { attachProblemMatcher: true });
        }
      };
      taskPicks.push(quickAccessEntry);
    }
    return taskPicks;
  }
  async _toTask(task) {
    if (!ConfiguringTask.is(task)) {
      return task;
    }
    return this._taskService.tryResolveTask(task);
  }
}, _c.PREFIX = "task ", _c);
TasksQuickAccessProvider = __decorate([
  __param(0, IExtensionService),
  __param(1, ITaskService),
  __param(2, IConfigurationService),
  __param(3, IQuickInputService),
  __param(4, INotificationService),
  __param(5, IDialogService),
  __param(6, IThemeService),
  __param(7, IStorageService)
], TasksQuickAccessProvider);
function isEditorSymbolQuickPickItem(pick) {
  const candidate = pick;
  return !!(candidate == null ? void 0 : candidate.range) && !!candidate.resource;
}
let AnythingQuickAccessProvider = (_d = class extends PickerQuickAccessProvider {
  get defaultFilterValue() {
    if (this.configuration.preserveInput) {
      return DefaultQuickAccessFilterValue.LAST;
    }
    return void 0;
  }
  constructor(instantiationService, searchService, contextService, pathService, environmentService, fileService, labelService, modelService, languageService, workingCopyService, configurationService, editorService, historyService, filesConfigurationService, textModelService, uriIdentityService, quickInputService) {
    super(_d.PREFIX, {
      canAcceptInBackground: true,
      noResultsPick: _d.NO_RESULTS_PICK
    });
    this.instantiationService = instantiationService;
    this.searchService = searchService;
    this.contextService = contextService;
    this.pathService = pathService;
    this.environmentService = environmentService;
    this.fileService = fileService;
    this.labelService = labelService;
    this.modelService = modelService;
    this.languageService = languageService;
    this.workingCopyService = workingCopyService;
    this.configurationService = configurationService;
    this.editorService = editorService;
    this.historyService = historyService;
    this.filesConfigurationService = filesConfigurationService;
    this.textModelService = textModelService;
    this.uriIdentityService = uriIdentityService;
    this.quickInputService = quickInputService;
    this.pickState = new class {
      constructor(provider, editorService2) {
        this.provider = provider;
        this.editorService = editorService2;
        this.picker = void 0;
        this.editorViewState = void 0;
        this.scorerCache = /* @__PURE__ */ Object.create(null);
        this.fileQueryCache = void 0;
        this.lastOriginalFilter = void 0;
        this.lastFilter = void 0;
        this.lastRange = void 0;
        this.lastGlobalPicks = void 0;
        this.isQuickNavigating = void 0;
      }
      set(picker) {
        this.picker = picker;
        once(picker.onDispose)(() => {
          if (picker === this.picker) {
            this.picker = void 0;
          }
        });
        const isQuickNavigating = !!picker.quickNavigate;
        if (!isQuickNavigating) {
          this.fileQueryCache = this.provider.createFileQueryCache();
          this.scorerCache = /* @__PURE__ */ Object.create(null);
        }
        this.isQuickNavigating = isQuickNavigating;
        this.lastOriginalFilter = void 0;
        this.lastFilter = void 0;
        this.lastRange = void 0;
        this.lastGlobalPicks = void 0;
        this.editorViewState = void 0;
      }
      rememberEditorViewState() {
        var _a2;
        if (this.editorViewState) {
          return;
        }
        const activeEditorPane = this.editorService.activeEditorPane;
        if (activeEditorPane) {
          this.editorViewState = {
            group: activeEditorPane.group,
            editor: activeEditorPane.input,
            state: withNullAsUndefined((_a2 = getIEditor(activeEditorPane.getControl())) == null ? void 0 : _a2.saveViewState())
          };
        }
      }
      async restoreEditorViewState() {
        if (this.editorViewState) {
          const options = {
            viewState: this.editorViewState.state,
            preserveFocus: true
          };
          await this.editorViewState.group.openEditor(this.editorViewState.editor, options);
        }
      }
    }(this, this.editorService);
    this.labelOnlyEditorHistoryPickAccessor = new QuickPickItemScorerAccessor({ skipDescription: true });
    this.fileQueryDelayer = this._register(new ThrottledDelayer(_d.TYPING_SEARCH_DELAY));
    this.fileQueryBuilder = this.instantiationService.createInstance(QueryBuilder);
    this.helpQuickAccess = this.instantiationService.createInstance(HelpQuickAccessProvider);
    this.workspaceSymbolsQuickAccess = this._register(this.instantiationService.createInstance(SymbolsQuickAccessProvider));
    this.editorSymbolsQuickAccess = this.instantiationService.createInstance(GotoSymbolQuickAccessProvider);
  }
  get configuration() {
    var _a2;
    const editorConfig = (_a2 = this.configurationService.getValue().workbench) == null ? void 0 : _a2.editor;
    const searchConfig = this.configurationService.getValue().search;
    const quickAccessConfig = this.configurationService.getValue().workbench.quickOpen;
    return {
      openEditorPinned: !(editorConfig == null ? void 0 : editorConfig.enablePreviewFromQuickOpen) || !(editorConfig == null ? void 0 : editorConfig.enablePreview),
      openSideBySideDirection: editorConfig == null ? void 0 : editorConfig.openSideBySideDirection,
      includeSymbols: searchConfig == null ? void 0 : searchConfig.quickOpen.includeSymbols,
      includeHistory: searchConfig == null ? void 0 : searchConfig.quickOpen.includeHistory,
      historyFilterSortOrder: searchConfig == null ? void 0 : searchConfig.quickOpen.history.filterSortOrder,
      shortAutoSaveDelay: this.filesConfigurationService.getAutoSaveMode() === 1,
      preserveInput: quickAccessConfig.preserveInput
    };
  }
  provide(picker, token, runOptions) {
    const disposables = new DisposableStore();
    this.pickState.set(picker);
    const editorDecorationsDisposable = disposables.add(new MutableDisposable());
    disposables.add(picker.onDidChangeActive(() => {
      editorDecorationsDisposable.value = void 0;
      const [item] = picker.activeItems;
      if (isEditorSymbolQuickPickItem(item)) {
        editorDecorationsDisposable.value = this.decorateAndRevealSymbolRange(item);
      }
    }));
    disposables.add(once(picker.onDidHide)(({ reason }) => {
      if (reason === QuickInputHideReason.Gesture) {
        this.pickState.restoreEditorViewState();
      }
    }));
    disposables.add(super.provide(picker, token, runOptions));
    return disposables;
  }
  decorateAndRevealSymbolRange(pick) {
    const activeEditor = this.editorService.activeEditor;
    if (!this.uriIdentityService.extUri.isEqual(pick.resource, activeEditor == null ? void 0 : activeEditor.resource)) {
      return Disposable.None;
    }
    const activeEditorControl = this.editorService.activeTextEditorControl;
    if (!activeEditorControl) {
      return Disposable.None;
    }
    this.pickState.rememberEditorViewState();
    activeEditorControl.revealRangeInCenter(pick.range.selection, 0);
    this.addDecorations(activeEditorControl, pick.range.decoration);
    return toDisposable(() => this.clearDecorations(activeEditorControl));
  }
  _getPicks(originalFilter, disposables, token, runOptions) {
    var _a2, _b2;
    const filterWithRange = extractRangeFromFilter(originalFilter, [GotoSymbolQuickAccessProvider.PREFIX]);
    let filter;
    if (filterWithRange) {
      filter = filterWithRange.filter;
    } else {
      filter = originalFilter;
    }
    this.pickState.lastRange = filterWithRange == null ? void 0 : filterWithRange.range;
    if (originalFilter !== this.pickState.lastOriginalFilter && filter === this.pickState.lastFilter) {
      return null;
    }
    const lastWasFiltering = !!this.pickState.lastOriginalFilter;
    this.pickState.lastOriginalFilter = originalFilter;
    this.pickState.lastFilter = filter;
    const picks = (_a2 = this.pickState.picker) == null ? void 0 : _a2.items;
    const activePick = (_b2 = this.pickState.picker) == null ? void 0 : _b2.activeItems[0];
    if (picks && activePick) {
      const activePickIsEditorSymbol = isEditorSymbolQuickPickItem(activePick);
      const activePickIsNoResultsInEditorSymbols = activePick === _d.NO_RESULTS_PICK && filter.indexOf(GotoSymbolQuickAccessProvider.PREFIX) >= 0;
      if (!activePickIsEditorSymbol && !activePickIsNoResultsInEditorSymbols) {
        this.pickState.lastGlobalPicks = {
          items: picks,
          active: activePick
        };
      }
    }
    return this.doGetPicks(filter, { enableEditorSymbolSearch: lastWasFiltering, includeHelp: runOptions == null ? void 0 : runOptions.includeHelp, from: runOptions == null ? void 0 : runOptions.from }, disposables, token);
  }
  doGetPicks(filter, options, disposables, token) {
    var _a2;
    const query = prepareQuery(filter);
    if (options.enableEditorSymbolSearch) {
      const editorSymbolPicks = this.getEditorSymbolPicks(query, disposables, token);
      if (editorSymbolPicks) {
        return editorSymbolPicks;
      }
    }
    const activePick = (_a2 = this.pickState.picker) == null ? void 0 : _a2.activeItems[0];
    if (isEditorSymbolQuickPickItem(activePick) && this.pickState.lastGlobalPicks) {
      return this.pickState.lastGlobalPicks;
    }
    const historyEditorPicks = this.getEditorHistoryPicks(query);
    let picks;
    if (this.pickState.isQuickNavigating) {
      picks = historyEditorPicks;
    } else {
      picks = [];
      if (options.includeHelp) {
        picks.push(...this.getHelpPicks(query, token, options));
      }
      if (historyEditorPicks.length !== 0) {
        picks.push({ type: "separator", label: localize("recentlyOpenedSeparator", "recently opened") });
        picks.push(...historyEditorPicks);
      }
    }
    return {
      picks,
      additionalPicks: (async () => {
        const additionalPicksExcludes = new ResourceMap();
        for (const historyEditorPick of historyEditorPicks) {
          if (historyEditorPick.resource) {
            additionalPicksExcludes.set(historyEditorPick.resource, true);
          }
        }
        const additionalPicks = await this.getAdditionalPicks(query, additionalPicksExcludes, token);
        if (token.isCancellationRequested) {
          return [];
        }
        return additionalPicks.length > 0 ? [
          { type: "separator", label: this.configuration.includeSymbols ? localize("fileAndSymbolResultsSeparator", "file and symbol results") : localize("fileResultsSeparator", "file results") },
          ...additionalPicks
        ] : [];
      })(),
      mergeDelay: _d.SYMBOL_PICKS_MERGE_DELAY
    };
  }
  async getAdditionalPicks(query, excludes, token) {
    const [filePicks, symbolPicks] = await Promise.all([
      this.getFilePicks(query, excludes, token),
      this.getWorkspaceSymbolPicks(query, token)
    ]);
    if (token.isCancellationRequested) {
      return [];
    }
    const sortedAnythingPicks = top([...filePicks, ...symbolPicks], (anyPickA, anyPickB) => compareItemsByFuzzyScore(anyPickA, anyPickB, query, true, quickPickItemScorerAccessor, this.pickState.scorerCache), _d.MAX_RESULTS);
    const filteredAnythingPicks = [];
    for (const anythingPick of sortedAnythingPicks) {
      if (anythingPick.highlights) {
        filteredAnythingPicks.push(anythingPick);
      } else {
        const { score, labelMatch, descriptionMatch } = scoreItemFuzzy(anythingPick, query, true, quickPickItemScorerAccessor, this.pickState.scorerCache);
        if (!score) {
          continue;
        }
        anythingPick.highlights = {
          label: labelMatch,
          description: descriptionMatch
        };
        filteredAnythingPicks.push(anythingPick);
      }
    }
    return filteredAnythingPicks;
  }
  getEditorHistoryPicks(query) {
    const configuration = this.configuration;
    if (!query.normalized) {
      return this.historyService.getHistory().map((editor) => this.createAnythingPick(editor, configuration));
    }
    if (!this.configuration.includeHistory) {
      return [];
    }
    const editorHistoryScorerAccessor = query.containsPathSeparator ? quickPickItemScorerAccessor : this.labelOnlyEditorHistoryPickAccessor;
    const editorHistoryPicks = [];
    for (const editor of this.historyService.getHistory()) {
      const resource = editor.resource;
      if (!resource || !this.fileService.hasProvider(resource) && resource.scheme !== Schemas.untitled && resource.scheme !== Schemas.vscodeTerminal) {
        continue;
      }
      const editorHistoryPick = this.createAnythingPick(editor, configuration);
      const { score, labelMatch, descriptionMatch } = scoreItemFuzzy(editorHistoryPick, query, false, editorHistoryScorerAccessor, this.pickState.scorerCache);
      if (!score) {
        continue;
      }
      editorHistoryPick.highlights = {
        label: labelMatch,
        description: descriptionMatch
      };
      editorHistoryPicks.push(editorHistoryPick);
    }
    if (this.configuration.historyFilterSortOrder === "recency") {
      return editorHistoryPicks;
    }
    return editorHistoryPicks.sort((editorA, editorB) => compareItemsByFuzzyScore(editorA, editorB, query, false, editorHistoryScorerAccessor, this.pickState.scorerCache));
  }
  createFileQueryCache() {
    return new FileQueryCacheState(
      (cacheKey) => this.fileQueryBuilder.file(this.contextService.getWorkspace().folders, this.getFileQueryOptions({ cacheKey })),
      (query) => this.searchService.fileSearch(query),
      (cacheKey) => this.searchService.clearCache(cacheKey),
      this.pickState.fileQueryCache
    ).load();
  }
  async getFilePicks(query, excludes, token) {
    var _a2;
    if (!query.normalized) {
      return [];
    }
    const absolutePathResult = await this.getAbsolutePathFileResult(query, token);
    if (token.isCancellationRequested) {
      return [];
    }
    let fileMatches;
    if (absolutePathResult) {
      if (excludes.has(absolutePathResult)) {
        return [];
      }
      const absolutePathPick = this.createAnythingPick(absolutePathResult, this.configuration);
      absolutePathPick.highlights = {
        label: [{ start: 0, end: absolutePathPick.label.length }],
        description: absolutePathPick.description ? [{ start: 0, end: absolutePathPick.description.length }] : void 0
      };
      return [absolutePathPick];
    }
    if ((_a2 = this.pickState.fileQueryCache) == null ? void 0 : _a2.isLoaded) {
      fileMatches = await this.doFileSearch(query, token);
    } else {
      fileMatches = await this.fileQueryDelayer.trigger(async () => {
        if (token.isCancellationRequested) {
          return [];
        }
        return this.doFileSearch(query, token);
      });
    }
    if (token.isCancellationRequested) {
      return [];
    }
    const configuration = this.configuration;
    return fileMatches.filter((resource) => !excludes.has(resource)).map((resource) => this.createAnythingPick(resource, configuration));
  }
  async doFileSearch(query, token) {
    const [fileSearchResults, relativePathFileResults] = await Promise.all([
      this.getFileSearchResults(query, token),
      this.getRelativePathFileResults(query, token)
    ]);
    if (token.isCancellationRequested) {
      return [];
    }
    if (!relativePathFileResults) {
      return fileSearchResults;
    }
    const relativePathFileResultsMap = new ResourceMap();
    for (const relativePathFileResult of relativePathFileResults) {
      relativePathFileResultsMap.set(relativePathFileResult, true);
    }
    return [
      ...fileSearchResults.filter((result) => !relativePathFileResultsMap.has(result)),
      ...relativePathFileResults
    ];
  }
  async getFileSearchResults(query, token) {
    let filePattern = "";
    if (query.values && query.values.length > 1) {
      filePattern = query.values[0].original;
    } else {
      filePattern = query.original;
    }
    const fileSearchResults = await this.doGetFileSearchResults(filePattern, token);
    if (token.isCancellationRequested) {
      return [];
    }
    if (fileSearchResults.limitHit && query.values && query.values.length > 1) {
      const additionalFileSearchResults = await this.doGetFileSearchResults(query.original, token);
      if (token.isCancellationRequested) {
        return [];
      }
      const existingFileSearchResultsMap = new ResourceMap();
      for (const fileSearchResult of fileSearchResults.results) {
        existingFileSearchResultsMap.set(fileSearchResult.resource, true);
      }
      for (const additionalFileSearchResult of additionalFileSearchResults.results) {
        if (!existingFileSearchResultsMap.has(additionalFileSearchResult.resource)) {
          fileSearchResults.results.push(additionalFileSearchResult);
        }
      }
    }
    return fileSearchResults.results.map((result) => result.resource);
  }
  doGetFileSearchResults(filePattern, token) {
    var _a2;
    return this.searchService.fileSearch(this.fileQueryBuilder.file(this.contextService.getWorkspace().folders, this.getFileQueryOptions({
      filePattern,
      cacheKey: (_a2 = this.pickState.fileQueryCache) == null ? void 0 : _a2.cacheKey,
      maxResults: _d.MAX_RESULTS
    })), token);
  }
  getFileQueryOptions(input) {
    return {
      _reason: "openFileHandler",
      extraFileResources: this.instantiationService.invokeFunction(getOutOfWorkspaceEditorResources),
      filePattern: input.filePattern || "",
      cacheKey: input.cacheKey,
      maxResults: input.maxResults || 0,
      sortByScore: true
    };
  }
  async getAbsolutePathFileResult(query, token) {
    if (!query.containsPathSeparator) {
      return;
    }
    const userHome = await this.pathService.userHome();
    const detildifiedQuery = untildify(query.original, userHome.scheme === Schemas.file ? userHome.fsPath : userHome.path);
    if (token.isCancellationRequested) {
      return;
    }
    const isAbsolutePathQuery = (await this.pathService.path).isAbsolute(detildifiedQuery);
    if (token.isCancellationRequested) {
      return;
    }
    if (isAbsolutePathQuery) {
      const resource = toLocalResource(await this.pathService.fileURI(detildifiedQuery), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
      if (token.isCancellationRequested) {
        return;
      }
      try {
        if ((await this.fileService.stat(resource)).isFile) {
          return resource;
        }
      } catch (error) {
      }
    }
    return;
  }
  async getRelativePathFileResults(query, token) {
    if (!query.containsPathSeparator) {
      return;
    }
    const isAbsolutePathQuery = (await this.pathService.path).isAbsolute(query.original);
    if (!isAbsolutePathQuery) {
      const resources = [];
      for (const folder of this.contextService.getWorkspace().folders) {
        if (token.isCancellationRequested) {
          break;
        }
        const resource = toLocalResource(folder.toResource(query.original), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
        try {
          if ((await this.fileService.stat(resource)).isFile) {
            resources.push(resource);
          }
        } catch (error) {
        }
      }
      return resources;
    }
    return;
  }
  getHelpPicks(query, token, runOptions) {
    if (query.normalized) {
      return [];
    }
    const providers = this.helpQuickAccess.getQuickAccessProviders();
    const mapOfProviders = /* @__PURE__ */ new Map();
    for (const provider of providers) {
      mapOfProviders.set(provider.prefix, provider);
    }
    const importantProviders = [];
    const AddProvider = (prefix, modifications = {}) => {
      if (mapOfProviders.has(prefix)) {
        const provider = mapOfProviders.get(prefix);
        provider.label = provider.description;
        provider.description = provider.prefix;
        const providerSpecificOptions = {
          ...runOptions,
          includeHelp: provider.prefix === _d.PREFIX ? false : runOptions == null ? void 0 : runOptions.includeHelp
        };
        importantProviders.push({
          ...mapOfProviders.get(prefix),
          ...modifications,
          accept: () => {
            this.quickInputService.quickAccess.show(provider.prefix, {
              preserveValue: true,
              providerOptions: providerSpecificOptions
            });
          }
        });
      }
    };
    AddProvider(_d.PREFIX);
    AddProvider(CommandsQuickAccessProvider.PREFIX);
    AddProvider(GotoSymbolQuickAccessProvider.PREFIX);
    AddProvider(DEBUG_QUICK_ACCESS_PREFIX);
    AddProvider(TasksQuickAccessProvider.PREFIX);
    AddProvider(HelpQuickAccessProvider.PREFIX, {
      label: localize("more", "More")
    });
    return importantProviders;
  }
  async getWorkspaceSymbolPicks(query, token) {
    const configuration = this.configuration;
    if (!query.normalized || !configuration.includeSymbols || this.pickState.lastRange) {
      return [];
    }
    return this.workspaceSymbolsQuickAccess.getSymbolPicks(query.original, {
      skipLocal: true,
      skipSorting: true,
      delay: _d.TYPING_SEARCH_DELAY
    }, token);
  }
  getEditorSymbolPicks(query, disposables, token) {
    var _a2, _b2;
    const filterSegments = query.original.split(GotoSymbolQuickAccessProvider.PREFIX);
    const filter = filterSegments.length > 1 ? filterSegments[filterSegments.length - 1].trim() : void 0;
    if (typeof filter !== "string") {
      return null;
    }
    const activeGlobalPick = (_a2 = this.pickState.lastGlobalPicks) == null ? void 0 : _a2.active;
    if (!activeGlobalPick) {
      return null;
    }
    const activeGlobalResource = activeGlobalPick.resource;
    if (!activeGlobalResource || !this.fileService.hasProvider(activeGlobalResource) && activeGlobalResource.scheme !== Schemas.untitled) {
      return null;
    }
    if (activeGlobalPick.label.includes(GotoSymbolQuickAccessProvider.PREFIX) || ((_b2 = activeGlobalPick.description) == null ? void 0 : _b2.includes(GotoSymbolQuickAccessProvider.PREFIX))) {
      if (filterSegments.length < 3) {
        return null;
      }
    }
    return this.doGetEditorSymbolPicks(activeGlobalPick, activeGlobalResource, filter, disposables, token);
  }
  async doGetEditorSymbolPicks(activeGlobalPick, activeGlobalResource, filter, disposables, token) {
    try {
      this.pickState.rememberEditorViewState();
      await this.editorService.openEditor({
        resource: activeGlobalResource,
        options: { preserveFocus: true, revealIfOpened: true, ignoreError: true }
      });
    } catch (error) {
      return [];
    }
    if (token.isCancellationRequested) {
      return [];
    }
    let model = this.modelService.getModel(activeGlobalResource);
    if (!model) {
      try {
        const modelReference = disposables.add(await this.textModelService.createModelReference(activeGlobalResource));
        if (token.isCancellationRequested) {
          return [];
        }
        model = modelReference.object.textEditorModel;
      } catch (error) {
        return [];
      }
    }
    const editorSymbolPicks = await this.editorSymbolsQuickAccess.getSymbolPicks(model, filter, { extraContainerLabel: stripIcons(activeGlobalPick.label) }, disposables, token);
    if (token.isCancellationRequested) {
      return [];
    }
    return editorSymbolPicks.map((editorSymbolPick) => {
      if (editorSymbolPick.type === "separator") {
        return editorSymbolPick;
      }
      return {
        ...editorSymbolPick,
        resource: activeGlobalResource,
        description: editorSymbolPick.description,
        trigger: (buttonIndex, keyMods) => {
          var _a2;
          this.openAnything(activeGlobalResource, { keyMods, range: (_a2 = editorSymbolPick.range) == null ? void 0 : _a2.selection, forceOpenSideBySide: true });
          return TriggerAction.CLOSE_PICKER;
        },
        accept: (keyMods, event) => {
          var _a2;
          return this.openAnything(activeGlobalResource, { keyMods, range: (_a2 = editorSymbolPick.range) == null ? void 0 : _a2.selection, preserveFocus: event.inBackground, forcePinned: event.inBackground });
        }
      };
    });
  }
  addDecorations(editor, range) {
    this.editorSymbolsQuickAccess.addDecorations(editor, range);
  }
  clearDecorations(editor) {
    this.editorSymbolsQuickAccess.clearDecorations(editor);
  }
  createAnythingPick(resourceOrEditor, configuration) {
    const isEditorHistoryEntry = !URI.isUri(resourceOrEditor);
    let resource;
    let label;
    let description = void 0;
    let isDirty = void 0;
    let extraClasses;
    if (isEditorInput(resourceOrEditor)) {
      resource = EditorResourceAccessor.getOriginalUri(resourceOrEditor);
      label = resourceOrEditor.getName();
      description = resourceOrEditor.getDescription();
      isDirty = resourceOrEditor.isDirty() && !resourceOrEditor.isSaving();
      extraClasses = resourceOrEditor.getLabelExtraClasses();
    } else {
      resource = URI.isUri(resourceOrEditor) ? resourceOrEditor : resourceOrEditor.resource;
      label = basenameOrAuthority(resource);
      description = this.labelService.getUriLabel(dirname(resource), { relative: true });
      isDirty = this.workingCopyService.isDirty(resource) && !configuration.shortAutoSaveDelay;
      extraClasses = [];
    }
    const labelAndDescription = description ? `${label} ${description}` : label;
    const iconClassesValue = new Lazy(
      () => getIconClasses(this.modelService, this.languageService, resource).concat(extraClasses)
    );
    const buttonsValue = new Lazy(() => {
      const openSideBySideDirection = configuration.openSideBySideDirection;
      const buttons = [];
      buttons.push({
        iconClass: openSideBySideDirection === "right" ? ThemeIcon.asClassName(Codicon.splitHorizontal) : ThemeIcon.asClassName(Codicon.splitVertical),
        tooltip: openSideBySideDirection === "right" ? localize(
          { key: "openToSide", comment: ["Open this file in a split editor on the left/right side"] },
          "Open to the Side"
        ) : localize(
          { key: "openToBottom", comment: ["Open this file in a split editor on the bottom"] },
          "Open to the Bottom"
        )
      });
      if (isEditorHistoryEntry) {
        buttons.push({
          iconClass: isDirty ? "dirty-anything " + ThemeIcon.asClassName(Codicon.circleFilled) : ThemeIcon.asClassName(Codicon.close),
          tooltip: localize("closeEditor", "Remove from Recently Opened"),
          alwaysVisible: isDirty
        });
      }
      return buttons;
    });
    return {
      resource,
      label,
      ariaLabel: isDirty ? localize("filePickAriaLabelDirty", "{0} unsaved changes", labelAndDescription) : labelAndDescription,
      description,
      get iconClasses() {
        return iconClassesValue.value;
      },
      get buttons() {
        return buttonsValue.value;
      },
      trigger: (buttonIndex, keyMods) => {
        switch (buttonIndex) {
          case 0:
            this.openAnything(resourceOrEditor, { keyMods, range: this.pickState.lastRange, forceOpenSideBySide: true });
            return TriggerAction.CLOSE_PICKER;
          case 1:
            if (!URI.isUri(resourceOrEditor)) {
              this.historyService.removeFromHistory(resourceOrEditor);
              return TriggerAction.REMOVE_ITEM;
            }
        }
        return TriggerAction.NO_ACTION;
      },
      accept: (keyMods, event) => this.openAnything(resourceOrEditor, { keyMods, range: this.pickState.lastRange, preserveFocus: event.inBackground, forcePinned: event.inBackground })
    };
  }
  async openAnything(resourceOrEditor, options) {
    var _a2, _b2, _c2;
    const editorOptions = {
      preserveFocus: options.preserveFocus,
      pinned: ((_a2 = options.keyMods) == null ? void 0 : _a2.ctrlCmd) || options.forcePinned || this.configuration.openEditorPinned,
      selection: options.range ? Range.collapseToStart(options.range) : void 0
    };
    const targetGroup = ((_b2 = options.keyMods) == null ? void 0 : _b2.alt) || this.configuration.openEditorPinned && ((_c2 = options.keyMods) == null ? void 0 : _c2.ctrlCmd) || options.forceOpenSideBySide ? SIDE_GROUP : ACTIVE_GROUP;
    if (targetGroup === SIDE_GROUP) {
      await this.pickState.restoreEditorViewState();
    }
    if (isEditorInput(resourceOrEditor)) {
      await this.editorService.openEditor(resourceOrEditor, editorOptions, targetGroup);
    } else {
      let resourceEditorInput;
      if (URI.isUri(resourceOrEditor)) {
        resourceEditorInput = {
          resource: resourceOrEditor,
          options: editorOptions
        };
      } else {
        resourceEditorInput = {
          ...resourceOrEditor,
          options: {
            ...resourceOrEditor.options,
            ...editorOptions
          }
        };
      }
      await this.editorService.openEditor(resourceEditorInput, targetGroup);
    }
  }
}, _d.PREFIX = "", _d.NO_RESULTS_PICK = {
  label: localize("noAnythingResults", "No matching results")
}, _d.MAX_RESULTS = 512, _d.TYPING_SEARCH_DELAY = 200, _d.SYMBOL_PICKS_MERGE_DELAY = 200, _d);
AnythingQuickAccessProvider = __decorate([
  __param(0, IInstantiationService),
  __param(1, ISearchService),
  __param(2, IWorkspaceContextService),
  __param(3, IPathService),
  __param(4, IWorkbenchEnvironmentService),
  __param(5, IFileService),
  __param(6, ILabelService),
  __param(7, IModelService),
  __param(8, ILanguageService),
  __param(9, IWorkingCopyService),
  __param(10, IConfigurationService),
  __param(11, IEditorService),
  __param(12, IHistoryService),
  __param(13, IFilesConfigurationService),
  __param(14, ITextModelService),
  __param(15, IUriIdentityService),
  __param(16, IQuickInputService)
], AnythingQuickAccessProvider);
function registerContributions$2() {
  Registry.as(Extensions.Workbench).registerWorkbenchContribution(ReplacePreviewContentProvider, 1);
}
function registerContributions$1() {
  Registry.as(Extensions.Workbench).registerWorkbenchContribution(ReplacePreviewContentProvider, 1);
}
const searchDetailsIcon = registerIcon("search-details", Codicon.ellipsis, localize("searchDetailsIcon", "Icon to make search details visible."));
const searchShowContextIcon = registerIcon("search-show-context", Codicon.listSelection, localize(
  "searchShowContextIcon",
  "Icon for toggle the context in the search editor."
));
const searchHideReplaceIcon = registerIcon("search-hide-replace", Codicon.chevronRight, localize(
  "searchHideReplaceIcon",
  "Icon to collapse the replace section in the search view."
));
const searchShowReplaceIcon = registerIcon("search-show-replace", Codicon.chevronDown, localize(
  "searchShowReplaceIcon",
  "Icon to expand the replace section in the search view."
));
const searchReplaceAllIcon = registerIcon("search-replace-all", Codicon.replaceAll, localize("searchReplaceAllIcon", "Icon for replace all in the search view."));
const searchReplaceIcon = registerIcon("search-replace", Codicon.replace, localize("searchReplaceIcon", "Icon for replace in the search view."));
const searchRemoveIcon = registerIcon("search-remove", Codicon.close, localize("searchRemoveIcon", "Icon to remove a search result."));
const searchRefreshIcon = registerIcon("search-refresh", Codicon.refresh, localize("searchRefreshIcon", "Icon for refresh in the search view."));
const searchCollapseAllIcon = registerIcon("search-collapse-results", Codicon.collapseAll, localize("searchCollapseAllIcon", "Icon for collapse results in the search view."));
const searchExpandAllIcon = registerIcon("search-expand-results", Codicon.expandAll, localize("searchExpandAllIcon", "Icon for expand results in the search view."));
const searchShowAsTree = registerIcon("search-tree", Codicon.listTree, localize(
  "searchShowAsTree",
  "Icon for viewing results as a tree in the search view."
));
const searchShowAsList = registerIcon("search-list", Codicon.listFlat, localize(
  "searchShowAsList",
  "Icon for viewing results as a list in the search view."
));
const searchClearIcon = registerIcon("search-clear-results", Codicon.clearAll, localize("searchClearIcon", "Icon for clear results in the search view."));
const searchStopIcon = registerIcon("search-stop", Codicon.searchStop, localize("searchStopIcon", "Icon for stop in the search view."));
const searchViewIcon = registerIcon("search-view-icon", Codicon.search, localize("searchViewIcon", "View icon of the search view."));
const searchNewEditorIcon = registerIcon("search-new-editor", Codicon.newFile, localize("searchNewEditorIcon", "Icon for the action to open a new search editor."));
var css$2 = ".search-view{display:flex;flex-direction:column;height:100%}.search-view .results{flex-grow:1;min-height:0}.search-view .search-widgets-container{margin:0 12px 0 2px;padding-bottom:6px;padding-top:6px}.search-view .search-widget .toggle-replace-button{align-items:center;background-color:unset;background-position:50%;background-repeat:no-repeat;box-sizing:border-box;color:inherit;cursor:pointer;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:16px}.monaco-workbench .search-view .search-widget .toggle-replace-button:hover{background-color:var(--vscode-toolbar-hoverBackground)}.monaco-workbench .search-view .search-widget .toggle-replace-button:active{background-color:var(--vscode-toolbar-activeBackground)}.search-view .search-widget .replace-container,.search-view .search-widget .search-container{margin-left:18px}.search-view .search-widget .monaco-inputbox>.ibwrapper{height:100%}.search-view .search-widget .monaco-inputbox>.ibwrapper>.mirror,.search-view .search-widget .monaco-inputbox>.ibwrapper>textarea.input{padding:3px 0 3px 6px}.search-view .search-widget .monaco-inputbox>.ibwrapper>textarea.input{height:26px;overflow:initial}.search-view .search-widget .monaco-findInput .monaco-scrollable-element .scrollbar{opacity:0}.search-view .monaco-inputbox>.ibwrapper>textarea.input{scrollbar-width:none}.search-view .monaco-inputbox>.ibwrapper>textarea.input::-webkit-scrollbar{display:none}.search-view .monaco-findInput{display:inline-block;vertical-align:middle;width:100%}.search-view .search-widget .replace-container{display:inline-flex;margin-top:6px;position:relative}.search-view .search-widget .replace-input{display:flex;position:relative;vertical-align:middle;width:auto!important}.search-view .search-widget .replace-input>.controls{position:absolute;right:2px;top:3px}.search-view .search-widget .replace-container.disabled{display:none}.search-view .search-widget .replace-container .monaco-action-bar{height:25px;margin-left:4px}.search-view .query-details{margin:0 0 0 18px;min-height:1em;position:relative}.search-view .query-details .more{color:inherit;cursor:pointer;height:16px;position:absolute;right:-2px;width:25px;z-index:2}.search-view .query-details .file-types{display:none}.search-view .query-details .file-types>.monaco-inputbox{height:25px;width:100%}.search-view .query-details.more .file-types{display:inherit}.search-view .query-details.more .file-types:last-child{padding-bottom:4px}.search-view .query-details.more h4{font-size:11px;font-weight:400;margin:0;overflow:hidden;padding:4px 0 0;text-overflow:ellipsis;white-space:nowrap}.search-view .messages{color:var(--vscode-search-resultsInfoForeground);cursor:default;margin-top:-5px}.search-view .message{overflow-wrap:break-word;padding:0 22px 8px}.search-view .message p:first-child{margin-bottom:0;margin-top:0;padding-bottom:4px;user-select:text;-webkit-user-select:text}.search-view .message a{color:var(--vscode-textLink-foreground)}.search-view .message a:active,.search-view .message a:hover{color:var(--vscode-textLink-activeForeground)}.search-view .filematch,.search-view .foldermatch{display:flex;height:100%;line-height:22px;padding:0;position:relative}.pane-body:not(.wide) .search-view .filematch .monaco-icon-label,.pane-body:not(.wide) .search-view .foldermatch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row.focused .filematch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row.focused .foldermatch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row:hover:not(.highlighted) .filematch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row:hover:not(.highlighted) .foldermatch .monaco-icon-label{flex:1}.pane-body.wide .search-view .filematch .badge,.pane-body.wide .search-view .foldermatch .badge{margin-left:10px}.search-view .linematch{display:flex;line-height:22px;overflow:hidden;position:relative}.search-view .linematch>.match{overflow:hidden;text-overflow:ellipsis;white-space:pre}.search-view .linematch .matchLineNum{display:none;font-size:.9em;margin-left:7px;margin-right:4px;opacity:.7}.search-view .linematch .matchLineNum.show{display:block}.pane-body.wide .search-view .monaco-list .monaco-list-row .filematch .actionBarContainer,.pane-body.wide .search-view .monaco-list .monaco-list-row .foldermatch .actionBarContainer,.search-view .monaco-list .monaco-list-row .linematch .actionBarContainer{flex:1 0 auto}.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row .filematch .actionBarContainer,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row .foldermatch .actionBarContainer{flex:0 0 auto}.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row .linematch .actionBarContainer,.search-view.actions-right .monaco-list .monaco-list-row .filematch .actionBarContainer,.search-view.actions-right .monaco-list .monaco-list-row .foldermatch .actionBarContainer,.search-view.actions-right .monaco-list .monaco-list-row .linematch .actionBarContainer{text-align:right}.search-view .monaco-list .monaco-list-row .monaco-action-bar{display:none;line-height:1em;padding:0 .8em 0 .4em}.search-view .monaco-list .monaco-list-row .monaco-action-bar .action-item{margin:0}.search-view .monaco-list .monaco-list-row.focused .monaco-action-bar,.search-view .monaco-list .monaco-list-row.selected .monaco-action-bar,.search-view .monaco-list .monaco-list-row:hover:not(.highlighted) .monaco-action-bar{display:inline-block}.search-view .monaco-list .monaco-list-row .monaco-action-bar .action-item{margin-right:.2em}.search-view .monaco-list .monaco-list-row .monaco-action-bar .action-label{padding:2px}.monaco-workbench.hc-black .search-view .monaco-list .monaco-list-row .monaco-action-bar .action-label,.monaco-workbench.hc-light .search-view .monaco-list .monaco-list-row .monaco-action-bar .action-label{margin-top:2px}.search-view .monaco-count-badge{margin-right:12px}.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row.focused .filematch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row.focused .foldermatch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row.focused .linematch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row:hover .filematch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row:hover .foldermatch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row:hover .linematch .monaco-count-badge{display:none}.search-view .replace.findInFileMatch{background-color:var(--vscode-diffEditor-removedTextBackground);border:1px solid var(--vscode-diffEditor-removedTextBackground);text-decoration:line-through}.monaco-workbench.hc-dark .search-view .replace.findInFileMatch,.monaco-workbench.hc-light .search-view .replace.findInFileMatch{border:1px dashed var(--vscode-diffEditor-removedTextBackground)}.search-view .findInFileMatch,.search-view .replaceMatch{white-space:pre}.search-view .findInFileMatch{background-color:var(--vscode-editor-findMatchHighlightBackground);border:1px solid var(--vscode-editor-findMatchHighlightBorder)}.monaco-workbench.hc-dark .search-view .findInFileMatch,.monaco-workbench.hc-light .search-view .findInFileMatch{border:1px dashed var(--vscode-editor-findMatchHighlightBorder)}.search-view .replaceMatch{background-color:var(--vscode-diffEditor-insertedTextBackground)}.monaco-workbench.hc-black .search-view .findInFileMatch,.monaco-workbench.hc-black .search-view .replaceMatch,.monaco-workbench.hc-light .search-view .findInFileMatch,.monaco-workbench.hc-light .search-view .replaceMatch{background:none!important;box-sizing:border-box}.search-view .replaceMatch:not(:empty){border:1px solid var(--vscode-diffEditor-insertedLineBackground)}.monaco-workbench.hc-dark .search-view .replaceMatch:not(:empty),.monaco-workbench.hc-light .search-view .replaceMatch:not(:empty){border:1px dashed var(--vscode-diffEditor-insertedLineBackground)}.monaco-workbench.hc-black .search-view .filematch,.monaco-workbench.hc-black .search-view .foldermatch,.monaco-workbench.hc-black .search-view .linematch,.monaco-workbench.hc-light .search-view .filematch,.monaco-workbench.hc-light .search-view .foldermatch,.monaco-workbench.hc-light .search-view .linematch{line-height:20px}.monaco-workbench.vs .search-panel .search-view .monaco-inputbox{border:1px solid transparent}.text-search-provider-messages .providerMessage{padding-top:4px}.text-search-provider-messages .providerMessage .codicon{padding-right:3px;position:relative;top:3px}.monaco-workbench .search-view .monaco-list.element-focused .monaco-list-row.focused.selected:not(.highlighted) .action-label:focus{outline-color:var(--vscode-list-activeSelectionForeground)}.monaco-workbench .search-container .monaco-custom-toggle.disabled{background-color:inherit!important;cursor:default;opacity:.3;pointer-events:none;user-select:none;-webkit-user-select:none}.monaco-workbench .search-container .find-filter-button{box-sizing:border-box;color:inherit;cursor:pointer;float:left;margin-left:2px;user-select:none;-webkit-user-select:none}";
n(css$2, {});
class NotebookEditor {
}
let PatternInputWidget = (_e = class extends Widget {
  constructor(parent, contextViewProvider, options, contextKeyService, configurationService, keybindingService) {
    super();
    this.contextViewProvider = contextViewProvider;
    this.contextKeyService = contextKeyService;
    this.configurationService = configurationService;
    this.keybindingService = keybindingService;
    this._onSubmit = this._register(new Emitter());
    this.onSubmit = this._onSubmit.event;
    this._onCancel = this._register(new Emitter());
    this.onCancel = this._onCancel.event;
    options = {
      ...{
        ariaLabel: localize("defaultLabel", "input")
      },
      ...options
    };
    this.width = options.width ?? 100;
    this.render(options);
    parent.appendChild(this.domNode);
  }
  dispose() {
    var _a2;
    super.dispose();
    (_a2 = this.inputFocusTracker) == null ? void 0 : _a2.dispose();
  }
  setWidth(newWidth) {
    this.width = newWidth;
    this.contextViewProvider.layout();
    this.setInputWidth();
  }
  getValue() {
    return this.inputBox.value;
  }
  setValue(value) {
    if (this.inputBox.value !== value) {
      this.inputBox.value = value;
    }
  }
  select() {
    this.inputBox.select();
  }
  focus() {
    this.inputBox.focus();
  }
  inputHasFocus() {
    return this.inputBox.hasFocus();
  }
  setInputWidth() {
    this.inputBox.width = this.width - this.getSubcontrolsWidth() - 2;
  }
  getSubcontrolsWidth() {
    return 0;
  }
  getHistory() {
    return this.inputBox.getHistory();
  }
  clearHistory() {
    this.inputBox.clearHistory();
  }
  prependHistory(history) {
    this.inputBox.prependHistory(history);
  }
  clear() {
    this.setValue("");
  }
  onSearchSubmit() {
    this.inputBox.addToHistory();
  }
  showNextTerm() {
    this.inputBox.showNextValue();
  }
  showPreviousTerm() {
    this.inputBox.showPreviousValue();
  }
  render(options) {
    this.domNode = document.createElement("div");
    this.domNode.classList.add("monaco-findInput");
    this.inputBox = new ContextScopedHistoryInputBox(this.domNode, this.contextViewProvider, {
      placeholder: options.placeholder,
      showPlaceholderOnFocus: options.showPlaceholderOnFocus,
      tooltip: options.tooltip,
      ariaLabel: options.ariaLabel,
      validationOptions: {
        validation: void 0
      },
      history: options.history || [],
      showHistoryHint: () => showHistoryKeybindingHint(this.keybindingService),
      inputBoxStyles: options.inputBoxStyles
    }, this.contextKeyService);
    this._register(this.inputBox.onDidChange(() => this._onSubmit.fire(true)));
    this.inputFocusTracker = trackFocus(this.inputBox.inputElement);
    this.onkeyup(this.inputBox.inputElement, (keyboardEvent) => this.onInputKeyUp(keyboardEvent));
    const controls = document.createElement("div");
    controls.className = "controls";
    this.renderSubcontrols(controls);
    this.domNode.appendChild(controls);
    this.setInputWidth();
  }
  renderSubcontrols(_controlsDiv) {
  }
  onInputKeyUp(keyboardEvent) {
    switch (keyboardEvent.keyCode) {
      case 3:
        this.onSearchSubmit();
        this._onSubmit.fire(false);
        return;
      case 9:
        this._onCancel.fire();
        return;
    }
  }
}, _e.OPTION_CHANGE = "optionChange", _e);
PatternInputWidget = __decorate([
  __param(3, IContextKeyService),
  __param(4, IConfigurationService),
  __param(5, IKeybindingService)
], PatternInputWidget);
let IncludePatternInputWidget = class IncludePatternInputWidget2 extends PatternInputWidget {
  constructor(parent, contextViewProvider, options, contextKeyService, configurationService, keybindingService) {
    super(parent, contextViewProvider, options, contextKeyService, configurationService, keybindingService);
    this._onChangeSearchInEditorsBoxEmitter = this._register(new Emitter());
    this.onChangeSearchInEditorsBox = this._onChangeSearchInEditorsBoxEmitter.event;
  }
  dispose() {
    super.dispose();
    this.useSearchInEditorsBox.dispose();
  }
  onlySearchInOpenEditors() {
    return this.useSearchInEditorsBox.checked;
  }
  setOnlySearchInOpenEditors(value) {
    this.useSearchInEditorsBox.checked = value;
    this._onChangeSearchInEditorsBoxEmitter.fire();
  }
  getSubcontrolsWidth() {
    return super.getSubcontrolsWidth() + this.useSearchInEditorsBox.width();
  }
  renderSubcontrols(controlsDiv) {
    this.useSearchInEditorsBox = this._register(new Toggle({
      icon: Codicon.book,
      title: localize("onlySearchInOpenEditors", "Search only in Open Editors"),
      isChecked: false,
      ...defaultToggleStyles
    }));
    this._register(this.useSearchInEditorsBox.onChange((viaKeyboard) => {
      this._onChangeSearchInEditorsBoxEmitter.fire();
      if (!viaKeyboard) {
        this.inputBox.focus();
      }
    }));
    controlsDiv.appendChild(this.useSearchInEditorsBox.domNode);
    super.renderSubcontrols(controlsDiv);
  }
};
IncludePatternInputWidget = __decorate([
  __param(3, IContextKeyService),
  __param(4, IConfigurationService),
  __param(5, IKeybindingService)
], IncludePatternInputWidget);
let ExcludePatternInputWidget = class ExcludePatternInputWidget2 extends PatternInputWidget {
  constructor(parent, contextViewProvider, options, contextKeyService, configurationService, keybindingService) {
    super(parent, contextViewProvider, options, contextKeyService, configurationService, keybindingService);
    this._onChangeIgnoreBoxEmitter = this._register(new Emitter());
    this.onChangeIgnoreBox = this._onChangeIgnoreBoxEmitter.event;
  }
  dispose() {
    super.dispose();
    this.useExcludesAndIgnoreFilesBox.dispose();
  }
  useExcludesAndIgnoreFiles() {
    return this.useExcludesAndIgnoreFilesBox.checked;
  }
  setUseExcludesAndIgnoreFiles(value) {
    this.useExcludesAndIgnoreFilesBox.checked = value;
    this._onChangeIgnoreBoxEmitter.fire();
  }
  getSubcontrolsWidth() {
    return super.getSubcontrolsWidth() + this.useExcludesAndIgnoreFilesBox.width();
  }
  renderSubcontrols(controlsDiv) {
    this.useExcludesAndIgnoreFilesBox = this._register(new Toggle({
      icon: Codicon.exclude,
      actionClassName: "useExcludesAndIgnoreFiles",
      title: localize(
        "useExcludesAndIgnoreFilesDescription",
        "Use Exclude Settings and Ignore Files"
      ),
      isChecked: true,
      ...defaultToggleStyles
    }));
    this._register(this.useExcludesAndIgnoreFilesBox.onChange((viaKeyboard) => {
      this._onChangeIgnoreBoxEmitter.fire();
      if (!viaKeyboard) {
        this.inputBox.focus();
      }
    }));
    controlsDiv.appendChild(this.useExcludesAndIgnoreFilesBox.domNode);
    super.renderSubcontrols(controlsDiv);
  }
};
ExcludePatternInputWidget = __decorate([
  __param(3, IContextKeyService),
  __param(4, IConfigurationService),
  __param(5, IKeybindingService)
], ExcludePatternInputWidget);
const category$1 = { value: localize("search", "Search"), original: "Search" };
function isSearchViewFocused(viewsService) {
  const searchView = getSearchView(viewsService);
  const activeElement = document.activeElement;
  return !!(searchView && activeElement && isAncestor(activeElement, searchView.getContainer()));
}
function appendKeyBindingLabel(label, inputKeyBinding) {
  return doAppendKeyBindingLabel(label, inputKeyBinding);
}
function getSearchView(viewsService) {
  return viewsService.getActiveViewWithId(VIEW_ID);
}
function getElementsToOperateOn(viewer, currElement, sortConfig) {
  let elements = viewer.getSelection().filter((x) => x !== null).sort((a, b) => searchComparer(a, b, sortConfig.sortOrder));
  if (currElement && !(elements.length > 1 && elements.includes(currElement))) {
    elements = [currElement];
  }
  return elements;
}
function shouldRefocus(elements, focusElement) {
  if (!focusElement) {
    return false;
  }
  return !focusElement || elements.includes(focusElement) || hasDownstreamMatch(elements, focusElement);
}
function hasDownstreamMatch(elements, focusElement) {
  for (const elem of elements) {
    if (elem instanceof FileMatch$1 && focusElement instanceof Match && elem.matches().includes(focusElement) || elem instanceof FolderMatch && (focusElement instanceof FileMatch$1 && elem.getDownstreamFileMatch(focusElement.resource) || focusElement instanceof Match && elem.getDownstreamFileMatch(focusElement.parent().resource))) {
      return true;
    }
  }
  return false;
}
function openSearchView(viewsService, focus) {
  return viewsService.openView(VIEW_ID, focus).then((view) => view ?? void 0);
}
function doAppendKeyBindingLabel(label, keyBinding) {
  return keyBinding ? label + " (" + keyBinding.getLabel() + ")" : label;
}
const renderSearchMessage = (message, instantiationService, notificationService, openerService, commandService, disposableStore, triggerSearch) => {
  const div = $$1("div.providerMessage");
  const linkedText = parseLinkedText(message.text);
  append(div, $$1("." + SeverityIcon.className(message.type === TextSearchCompleteMessageType.Information ? Severity$1.Info : Severity$1.Warning).split(" ").join(".")));
  for (const node of linkedText.nodes) {
    if (typeof node === "string") {
      append(div, document.createTextNode(node));
    } else {
      const link = instantiationService.createInstance(Link, div, node, {
        opener: async (href) => {
          if (!message.trusted) {
            return;
          }
          const parsed = URI.parse(href, true);
          if (parsed.scheme === Schemas.command && message.trusted) {
            const result = await commandService.executeCommand(parsed.path);
            if (result == null ? void 0 : result.triggerSearch) {
              triggerSearch();
            }
          } else if (parsed.scheme === Schemas.https) {
            openerService.open(parsed);
          } else {
            if (parsed.scheme === Schemas.command && !message.trusted) {
              notificationService.error(localize(
                "unable to open trust",
                "Unable to open command link from untrusted source: {0}",
                href
              ));
            } else {
              notificationService.error(localize("unable to open", "Unable to open unknown link: {0}", href));
            }
          }
        }
      });
      disposableStore.add(link);
    }
  }
  return div;
};
const FindInFilesActionId = "workbench.action.findInFiles";
const FocusSearchFromResults = "search.action.focusSearchFromResults";
const OpenMatch = "search.action.openResult";
const OpenMatchToSide = "search.action.openResultToSide";
const RemoveActionId = "search.action.remove";
const CopyPathCommandId = "search.action.copyPath";
const CopyMatchCommandId = "search.action.copyMatch";
const CopyAllCommandId = "search.action.copyAll";
const OpenInEditorCommandId$1 = "search.action.openInEditor";
const ClearSearchHistoryCommandId = "search.action.clearHistory";
const FocusSearchListCommandID = "search.action.focusSearchList";
const ReplaceActionId = "search.action.replace";
const ReplaceAllInFileActionId = "search.action.replaceAllInFile";
const ReplaceAllInFolderActionId = "search.action.replaceAllInFolder";
const CloseReplaceWidgetActionId = "closeReplaceInFilesWidget";
const ToggleCaseSensitiveCommandId = "toggleSearchCaseSensitive";
const ToggleWholeWordCommandId = "toggleSearchWholeWord";
const ToggleRegexCommandId = "toggleSearchRegex";
const TogglePreserveCaseId = "toggleSearchPreserveCase";
const AddCursorsAtSearchResults = "addCursorsAtSearchResults";
const RevealInSideBarForSearchResults = "search.action.revealInSideBar";
const ReplaceInFilesActionId = "workbench.action.replaceInFiles";
const ShowAllSymbolsActionId = "workbench.action.showAllSymbols";
const CancelSearchActionId = "search.action.cancel";
const RefreshSearchResultsActionId = "search.action.refreshSearchResults";
const FocusNextSearchResultActionId = "search.action.focusNextSearchResult";
const FocusPreviousSearchResultActionId = "search.action.focusPreviousSearchResult";
const ToggleSearchOnTypeActionId = "workbench.action.toggleSearchOnType";
const CollapseSearchResultsActionId = "search.action.collapseSearchResults";
const ExpandSearchResultsActionId = "search.action.expandSearchResults";
const ClearSearchResultsActionId = "search.action.clearSearchResults";
const ViewAsTreeActionId = "search.action.viewAsTree";
const ViewAsListActionId = "search.action.viewAsList";
const ToggleQueryDetailsActionId = "workbench.action.search.toggleQueryDetails";
const ExcludeFolderFromSearchId = "search.action.excludeFromSearch";
const FocusNextInputActionId = "search.focus.nextInputBox";
const FocusPreviousInputActionId = "search.focus.previousInputBox";
const RestrictSearchToFolderId = "search.action.restrictSearchToFolder";
const FindInFolderId = "filesExplorer.findInFolder";
const FindInWorkspaceId = "filesExplorer.findInWorkspace";
const SearchViewVisibleKey = new RawContextKey("searchViewletVisible", true);
const SearchViewFocusedKey = new RawContextKey("searchViewletFocus", false);
const InputBoxFocusedKey = new RawContextKey("inputBoxFocus", false);
const SearchInputBoxFocusedKey = new RawContextKey("searchInputBoxFocus", false);
const ReplaceInputBoxFocusedKey = new RawContextKey("replaceInputBoxFocus", false);
const PatternIncludesFocusedKey = new RawContextKey("patternIncludesInputBoxFocus", false);
const PatternExcludesFocusedKey = new RawContextKey("patternExcludesInputBoxFocus", false);
const ReplaceActiveKey = new RawContextKey("replaceActive", false);
const HasSearchResults = new RawContextKey("hasSearchResult", false);
const FirstMatchFocusKey = new RawContextKey("firstMatchFocus", false);
const FileMatchOrMatchFocusKey = new RawContextKey("fileMatchOrMatchFocus", false);
const FileMatchOrFolderMatchFocusKey = new RawContextKey("fileMatchOrFolderMatchFocus", false);
const FileMatchOrFolderMatchWithResourceFocusKey = new RawContextKey("fileMatchOrFolderMatchWithResourceFocus", false);
const FileFocusKey = new RawContextKey("fileMatchFocus", false);
const FolderFocusKey = new RawContextKey("folderMatchFocus", false);
const ResourceFolderFocusKey = new RawContextKey("folderMatchWithResourceFocus", false);
const IsEditableItemKey = new RawContextKey("isEditableItem", true);
const MatchFocusKey = new RawContextKey("matchFocus", false);
const ViewHasSearchPatternKey = new RawContextKey("viewHasSearchPattern", false);
const ViewHasReplacePatternKey = new RawContextKey("viewHasReplacePattern", false);
const ViewHasFilePatternKey = new RawContextKey("viewHasFilePattern", false);
const ViewHasSomeCollapsibleKey = new RawContextKey("viewHasSomeCollapsibleResult", false);
const InTreeViewKey = new RawContextKey("inTreeView", false);
const _SearchDelegate = class _SearchDelegate {
  getHeight(element) {
    return _SearchDelegate.ITEM_HEIGHT;
  }
  getTemplateId(element) {
    if (element instanceof FolderMatch) {
      return FolderMatchRenderer.TEMPLATE_ID;
    } else if (element instanceof FileMatch$1) {
      return FileMatchRenderer.TEMPLATE_ID;
    } else if (element instanceof Match) {
      return MatchRenderer.TEMPLATE_ID;
    }
    console.error("Invalid search tree element", element);
    throw new Error("Invalid search tree element");
  }
};
_SearchDelegate.ITEM_HEIGHT = 22;
let SearchDelegate = _SearchDelegate;
let FolderMatchRenderer = (_f = class extends Disposable {
  constructor(searchView, labels, contextService, labelService, instantiationService, contextKeyService) {
    super();
    this.searchView = searchView;
    this.labels = labels;
    this.contextService = contextService;
    this.labelService = labelService;
    this.instantiationService = instantiationService;
    this.contextKeyService = contextKeyService;
    this.templateId = _f.TEMPLATE_ID;
  }
  renderCompressedElements(node, index, templateData, height) {
    const compressed = node.element;
    const folder = compressed.elements[compressed.elements.length - 1];
    const label = compressed.elements.map((e) => e.name());
    if (folder.resource) {
      const fileKind = folder instanceof FolderMatchWorkspaceRoot ? FileKind.ROOT_FOLDER : FileKind.FOLDER;
      templateData.label.setResource({ resource: folder.resource, name: label }, {
        fileKind,
        separator: this.labelService.getSeparator(folder.resource.scheme)
      });
    } else {
      templateData.label.setLabel(localize("searchFolderMatch.other.label", "Other files"));
    }
    this.renderFolderDetails(folder, templateData);
  }
  renderTemplate(container) {
    const disposables = new DisposableStore();
    const folderMatchElement = append(container, $$1(".foldermatch"));
    const label = this.labels.create(folderMatchElement, { supportDescriptionHighlights: true, supportHighlights: true });
    disposables.add(label);
    const badge = new CountBadge(
      append(folderMatchElement, $$1(".badge")),
      {},
      defaultCountBadgeStyles
    );
    const actionBarContainer = append(folderMatchElement, $$1(".actionBarContainer"));
    const elementDisposables = new DisposableStore();
    disposables.add(elementDisposables);
    const contextKeyServiceMain = disposables.add(this.contextKeyService.createScoped(container));
    MatchFocusKey.bindTo(contextKeyServiceMain).set(false);
    FileFocusKey.bindTo(contextKeyServiceMain).set(false);
    FolderFocusKey.bindTo(contextKeyServiceMain).set(true);
    const instantiationService = this.instantiationService.createChild(new ServiceCollection([IContextKeyService, contextKeyServiceMain]));
    const actions = disposables.add(instantiationService.createInstance(MenuWorkbenchToolBar, actionBarContainer, MenuId.SearchActionMenu, {
      menuOptions: {
        shouldForwardArgs: true
      },
      hiddenItemStrategy: 0,
      toolbarOptions: {
        primaryGroup: (g) => /^inline/.test(g)
      }
    }));
    return {
      label,
      badge,
      actions,
      disposables,
      elementDisposables,
      contextKeyService: contextKeyServiceMain
    };
  }
  renderElement(node, index, templateData) {
    const folderMatch = node.element;
    if (folderMatch.resource) {
      const workspaceFolder = this.contextService.getWorkspaceFolder(folderMatch.resource);
      if (workspaceFolder && isEqual(workspaceFolder.uri, folderMatch.resource)) {
        templateData.label.setFile(folderMatch.resource, { fileKind: FileKind.ROOT_FOLDER, hidePath: true });
      } else {
        templateData.label.setFile(folderMatch.resource, { fileKind: FileKind.FOLDER, hidePath: this.searchView.isTreeLayoutViewVisible });
      }
    } else {
      templateData.label.setLabel(localize("searchFolderMatch.other.label", "Other files"));
    }
    IsEditableItemKey.bindTo(templateData.contextKeyService).set(!folderMatch.hasOnlyReadOnlyMatches());
    templateData.elementDisposables.add(folderMatch.onChange(() => {
      IsEditableItemKey.bindTo(templateData.contextKeyService).set(!folderMatch.hasOnlyReadOnlyMatches());
    }));
    this.renderFolderDetails(folderMatch, templateData);
  }
  disposeElement(element, index, templateData) {
    templateData.elementDisposables.clear();
  }
  disposeCompressedElements(node, index, templateData, height) {
    templateData.elementDisposables.clear();
  }
  disposeTemplate(templateData) {
    templateData.disposables.dispose();
  }
  renderFolderDetails(folder, templateData) {
    const count = folder.recursiveMatchCount();
    templateData.badge.setCount(count);
    templateData.badge.setTitleFormat(count > 1 ? localize("searchFileMatches", "{0} files found", count) : localize("searchFileMatch", "{0} file found", count));
    templateData.actions.context = { viewer: this.searchView.getControl(), element: folder };
  }
}, _f.TEMPLATE_ID = "folderMatch", _f);
FolderMatchRenderer = __decorate([
  __param(2, IWorkspaceContextService),
  __param(3, ILabelService),
  __param(4, IInstantiationService),
  __param(5, IContextKeyService)
], FolderMatchRenderer);
let FileMatchRenderer = (_g = class extends Disposable {
  constructor(searchView, labels, contextService, configurationService, instantiationService, contextKeyService) {
    super();
    this.searchView = searchView;
    this.labels = labels;
    this.contextService = contextService;
    this.configurationService = configurationService;
    this.instantiationService = instantiationService;
    this.contextKeyService = contextKeyService;
    this.templateId = _g.TEMPLATE_ID;
  }
  renderCompressedElements(node, index, templateData, height) {
    throw new Error("Should never happen since node is incompressible.");
  }
  renderTemplate(container) {
    const disposables = new DisposableStore();
    const elementDisposables = new DisposableStore();
    disposables.add(elementDisposables);
    const fileMatchElement = append(container, $$1(".filematch"));
    const label = this.labels.create(fileMatchElement);
    disposables.add(label);
    const badge = new CountBadge(append(fileMatchElement, $$1(".badge")), {}, defaultCountBadgeStyles);
    const actionBarContainer = append(fileMatchElement, $$1(".actionBarContainer"));
    const contextKeyServiceMain = disposables.add(this.contextKeyService.createScoped(container));
    MatchFocusKey.bindTo(contextKeyServiceMain).set(false);
    FileFocusKey.bindTo(contextKeyServiceMain).set(true);
    FolderFocusKey.bindTo(contextKeyServiceMain).set(false);
    const instantiationService = this.instantiationService.createChild(new ServiceCollection([IContextKeyService, contextKeyServiceMain]));
    const actions = disposables.add(instantiationService.createInstance(MenuWorkbenchToolBar, actionBarContainer, MenuId.SearchActionMenu, {
      menuOptions: {
        shouldForwardArgs: true
      },
      hiddenItemStrategy: 0,
      toolbarOptions: {
        primaryGroup: (g) => /^inline/.test(g)
      }
    }));
    return {
      el: fileMatchElement,
      label,
      badge,
      actions,
      disposables,
      elementDisposables,
      contextKeyService: contextKeyServiceMain
    };
  }
  renderElement(node, index, templateData) {
    var _a2, _b2;
    const fileMatch = node.element;
    templateData.el.setAttribute("data-resource", fileMatch.resource.toString());
    const decorationConfig = this.configurationService.getValue("search").decorations;
    templateData.label.setFile(fileMatch.resource, { hidePath: this.searchView.isTreeLayoutViewVisible && !(fileMatch.parent() instanceof FolderMatchNoRoot), hideIcon: false, fileDecorations: { colors: decorationConfig.colors, badges: decorationConfig.badges } });
    const count = fileMatch.count();
    templateData.badge.setCount(count);
    templateData.badge.setTitleFormat(count > 1 ? localize("searchMatches", "{0} matches found", count) : localize("searchMatch", "{0} match found", count));
    templateData.actions.context = { viewer: this.searchView.getControl(), element: fileMatch };
    IsEditableItemKey.bindTo(templateData.contextKeyService).set(!fileMatch.hasOnlyReadOnlyMatches());
    templateData.elementDisposables.add(fileMatch.onChange(() => {
      IsEditableItemKey.bindTo(templateData.contextKeyService).set(!fileMatch.hasOnlyReadOnlyMatches());
    }));
    const twistieContainer = (_b2 = (_a2 = templateData.el.parentElement) == null ? void 0 : _a2.parentElement) == null ? void 0 : _b2.querySelector(".monaco-tl-twistie");
    twistieContainer == null ? void 0 : twistieContainer.classList.add("force-twistie");
  }
  disposeElement(element, index, templateData) {
    templateData.elementDisposables.clear();
  }
  disposeTemplate(templateData) {
    templateData.disposables.dispose();
  }
}, _g.TEMPLATE_ID = "fileMatch", _g);
FileMatchRenderer = __decorate([
  __param(2, IWorkspaceContextService),
  __param(3, IConfigurationService),
  __param(4, IInstantiationService),
  __param(5, IContextKeyService)
], FileMatchRenderer);
let MatchRenderer = (_h = class extends Disposable {
  constructor(searchModel, searchView, contextService, configurationService, instantiationService, contextKeyService) {
    super();
    this.searchModel = searchModel;
    this.searchView = searchView;
    this.contextService = contextService;
    this.configurationService = configurationService;
    this.instantiationService = instantiationService;
    this.contextKeyService = contextKeyService;
    this.templateId = _h.TEMPLATE_ID;
  }
  renderCompressedElements(node, index, templateData, height) {
    throw new Error("Should never happen since node is incompressible.");
  }
  renderTemplate(container) {
    container.classList.add("linematch");
    const parent = append(container, $$1("a.plain.match"));
    const before = append(parent, $$1("span"));
    const match = append(parent, $$1("span.findInFileMatch"));
    const replace = append(parent, $$1("span.replaceMatch"));
    const after = append(parent, $$1("span"));
    const lineNumber = append(container, $$1("span.matchLineNum"));
    const actionBarContainer = append(container, $$1("span.actionBarContainer"));
    const disposables = new DisposableStore();
    const contextKeyServiceMain = disposables.add(this.contextKeyService.createScoped(container));
    MatchFocusKey.bindTo(contextKeyServiceMain).set(true);
    FileFocusKey.bindTo(contextKeyServiceMain).set(false);
    FolderFocusKey.bindTo(contextKeyServiceMain).set(false);
    const instantiationService = this.instantiationService.createChild(new ServiceCollection([IContextKeyService, contextKeyServiceMain]));
    const actions = disposables.add(instantiationService.createInstance(MenuWorkbenchToolBar, actionBarContainer, MenuId.SearchActionMenu, {
      menuOptions: {
        shouldForwardArgs: true
      },
      hiddenItemStrategy: 0,
      toolbarOptions: {
        primaryGroup: (g) => /^inline/.test(g)
      }
    }));
    return {
      parent,
      before,
      match,
      replace,
      after,
      lineNumber,
      actions,
      disposables,
      contextKeyService: contextKeyServiceMain
    };
  }
  renderElement(node, index, templateData) {
    const match = node.element;
    const preview = match.preview();
    const replace = this.searchModel.isReplaceActive() && !!this.searchModel.replaceString && !(match instanceof MatchInNotebook && match.isWebviewMatch());
    templateData.before.textContent = preview.before;
    templateData.match.textContent = preview.inside;
    templateData.match.classList.toggle("replace", replace);
    templateData.replace.textContent = replace ? match.replaceString : "";
    templateData.after.textContent = preview.after;
    templateData.parent.title = (preview.before + (replace ? match.replaceString : preview.inside) + preview.after).trim().substr(0, 999);
    IsEditableItemKey.bindTo(templateData.contextKeyService).set(!(match instanceof MatchInNotebook && match.isWebviewMatch()));
    const numLines = match.range().endLineNumber - match.range().startLineNumber;
    const extraLinesStr = numLines > 0 ? `+${numLines}` : "";
    const showLineNumbers = this.configurationService.getValue("search").showLineNumbers;
    const lineNumberStr = showLineNumbers ? `:${match.range().startLineNumber}` : "";
    templateData.lineNumber.classList.toggle("show", numLines > 0 || showLineNumbers);
    templateData.lineNumber.textContent = lineNumberStr + extraLinesStr;
    templateData.lineNumber.setAttribute("title", this.getMatchTitle(match, showLineNumbers));
    templateData.actions.context = { viewer: this.searchView.getControl(), element: match };
  }
  disposeTemplate(templateData) {
    templateData.disposables.dispose();
  }
  getMatchTitle(match, showLineNumbers) {
    const startLine = match.range().startLineNumber;
    const numLines = match.range().endLineNumber - match.range().startLineNumber;
    const lineNumStr = showLineNumbers ? localize("lineNumStr", "From line {0}", startLine, numLines) + " " : "";
    const numLinesStr = numLines > 0 ? "+ " + localize("numLinesStr", "{0} more lines", numLines) : "";
    return lineNumStr + numLinesStr;
  }
}, _h.TEMPLATE_ID = "match", _h);
MatchRenderer = __decorate([
  __param(2, IWorkspaceContextService),
  __param(3, IConfigurationService),
  __param(4, IInstantiationService),
  __param(5, IContextKeyService)
], MatchRenderer);
let SearchAccessibilityProvider = class SearchAccessibilityProvider2 {
  constructor(searchModel, labelService) {
    this.searchModel = searchModel;
    this.labelService = labelService;
  }
  getWidgetAriaLabel() {
    return localize("search", "Search");
  }
  getAriaLabel(element) {
    if (element instanceof FolderMatch) {
      const count = element.allDownstreamFileMatches().reduce((total, current) => total + current.count(), 0);
      return element.resource ? localize(
        "folderMatchAriaLabel",
        "{0} matches in folder root {1}, Search result",
        count,
        element.name()
      ) : localize(
        "otherFilesAriaLabel",
        "{0} matches outside of the workspace, Search result",
        count
      );
    }
    if (element instanceof FileMatch$1) {
      const path$1 = this.labelService.getUriLabel(element.resource, { relative: true }) || element.resource.fsPath;
      return localize(
        "fileMatchAriaLabel",
        "{0} matches in file {1} of folder {2}, Search result",
        element.count(),
        element.name(),
        dirname$1(path$1)
      );
    }
    if (element instanceof Match) {
      const match = element;
      const searchModel = this.searchModel;
      const replace = searchModel.isReplaceActive() && !!searchModel.replaceString;
      const matchString = match.getMatchString();
      const range = match.range();
      const matchText = match.text().substr(0, range.endColumn + 150);
      if (replace) {
        return localize(
          "replacePreviewResultAria",
          "'{0}' at column {1} replace {2} with {3}",
          matchText,
          range.startColumn,
          matchString,
          match.replaceString
        );
      }
      return localize(
        "searchResultAria",
        "'{0}' at column {1} found {2}",
        matchText,
        range.startColumn,
        matchString
      );
    }
    return null;
  }
};
SearchAccessibilityProvider = __decorate([
  __param(1, ILabelService)
], SearchAccessibilityProvider);
const InSearchEditor = new RawContextKey("inSearchEditor", false);
const SearchEditorScheme = "search-editor";
const SearchEditorWorkingCopyTypeId = "search/editor";
const SearchEditorFindMatchClass = "searchEditorFindMatch";
const SearchEditorID = "workbench.editor.searchEditor";
const OpenNewEditorCommandId = "search.action.openNewEditor";
const OpenEditorCommandId = "search.action.openEditor";
const ToggleSearchEditorContextLinesCommandId = "toggleSearchEditorContextLines";
const SearchEditorInputTypeId = "workbench.editorinputs.searchEditorInput";
class NotebookFindFilters extends Disposable {
  get markupInput() {
    return this._markupInput;
  }
  set markupInput(value) {
    if (this._markupInput !== value) {
      this._markupInput = value;
      this._onDidChange.fire({ markupInput: value });
    }
  }
  get markupPreview() {
    return this._markupPreview;
  }
  set markupPreview(value) {
    if (this._markupPreview !== value) {
      this._markupPreview = value;
      this._onDidChange.fire({ markupPreview: value });
    }
  }
  get codeInput() {
    return this._codeInput;
  }
  set codeInput(value) {
    if (this._codeInput !== value) {
      this._codeInput = value;
      this._onDidChange.fire({ codeInput: value });
    }
  }
  get codeOutput() {
    return this._codeOutput;
  }
  set codeOutput(value) {
    if (this._codeOutput !== value) {
      this._codeOutput = value;
      this._onDidChange.fire({ codeOutput: value });
    }
  }
  constructor(markupInput, markupPreview, codeInput, codeOutput) {
    super();
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this._markupInput = true;
    this._markupPreview = true;
    this._codeInput = true;
    this._codeOutput = true;
    this._markupInput = markupInput;
    this._markupPreview = markupPreview;
    this._codeInput = codeInput;
    this._codeOutput = codeOutput;
    this._initialMarkupInput = markupInput;
    this._initialMarkupPreview = markupPreview;
    this._initialCodeInput = codeInput;
    this._initialCodeOutput = codeOutput;
  }
  isModified() {
    return this._markupInput !== this._initialMarkupInput || this._markupPreview !== this._initialMarkupPreview || this._codeInput !== this._initialCodeInput || this._codeOutput !== this._initialCodeOutput;
  }
  update(v) {
    this._markupInput = v.markupInput;
    this._markupPreview = v.markupPreview;
    this._codeInput = v.codeInput;
    this._codeOutput = v.codeOutput;
  }
}
var css$1 = ".monaco-workbench .simple-fr-find-part-wrapper{background-color:var(--vscode-editorWidget-background)!important;border-bottom-left-radius:4px;border-bottom-right-radius:4px;box-shadow:0 0 8px 2px var(--vscode-widget-shadow);color:var(--vscode-editorWidget-foreground);max-width:calc(100% - 64px);overflow:hidden;padding:0 var(--notebook-find-horizontal-padding);position:absolute;right:18px;top:-45px;transition:top .2s linear;visibility:hidden;width:var(--notebook-find-width);z-index:10}.monaco-workbench.reduce-motion .simple-fr-find-part-wrapper{transition:top 0ms linear}.monaco-workbench .notebookOverlay .simple-fr-find-part-wrapper.visible{z-index:100}.monaco-workbench .simple-fr-find-part,.monaco-workbench .simple-fr-replace-part{align-items:center;display:flex;margin:0 0 0 17px;padding:4px;pointer-events:all;position:relative;top:0;z-index:10}.monaco-workbench .simple-fr-find-part-wrapper .find-replace-progress{height:2px;position:absolute;width:100%}.monaco-workbench .simple-fr-find-part-wrapper .find-replace-progress .monaco-progress-container{height:2px;top:0!important;z-index:100!important}.monaco-workbench .simple-fr-find-part-wrapper .find-replace-progress .monaco-progress-container .progress-bit{height:2px}.monaco-workbench .simple-fr-find-part-wrapper .monaco-findInput{width:224px}.monaco-workbench .simple-fr-find-part-wrapper .button{align-items:center;background-position:50%;background-repeat:no-repeat;cursor:pointer;display:flex;flex:initial;height:20px;justify-content:center;margin-left:3px;width:20px}.monaco-workbench .simple-fr-find-part-wrapper.visible .simple-fr-find-part{visibility:visible}.monaco-workbench .simple-fr-find-part-wrapper .toggle{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:center;margin-left:0;pointer-events:all;position:absolute;top:0;width:18px}.monaco-workbench .simple-fr-find-part-wrapper.visible{visibility:visible}.monaco-workbench .simple-fr-find-part-wrapper.visible-transition{top:0}.monaco-workbench .simple-fr-find-part .monaco-findInput{flex:1}.monaco-workbench .simple-fr-find-part .button{background-position:50%;background-repeat:no-repeat;cursor:pointer;display:flex;flex:initial;height:20px;margin-left:3px;min-width:20px;width:20px}.monaco-workbench .simple-fr-find-part-wrapper .button.disabled{cursor:default;opacity:.3}.monaco-workbench .simple-fr-find-part-wrapper .monaco-custom-toggle.disabled{background-color:inherit!important;cursor:default;opacity:.3;pointer-events:none;user-select:none;-webkit-user-select:none}.monaco-workbench .simple-fr-find-part-wrapper .find-filter-button{box-sizing:border-box;color:inherit;cursor:pointer;float:left;margin-left:2px;user-select:none;-webkit-user-select:none}.find-filter-button .monaco-action-bar .action-label{padding:0}.monaco-workbench .simple-fr-find-part .monaco-inputbox>.ibwrapper>.input,.monaco-workbench .simple-fr-replace-part .monaco-inputbox>.ibwrapper>.input{height:24px}.monaco-workbench .simple-fr-find-part-wrapper .monaco-sash{background-color:var(--vscode-editorWidget-resizeBorder,var(--vscode-editorWidget-border));left:0!important}";
n(css$1, {});
registerIcon("find-filter", Codicon.filter, localize("findFilterIcon", "Icon for Find Filter in find widget."));
const NOTEBOOK_FIND_FILTERS = localize("notebook.find.filter.filterAction", "Find Filters");
const NOTEBOOK_FIND_IN_MARKUP_INPUT = localize("notebook.find.filter.findInMarkupInput", "Markdown Source");
const NOTEBOOK_FIND_IN_MARKUP_PREVIEW = localize("notebook.find.filter.findInMarkupPreview", "Rendered Markdown");
const NOTEBOOK_FIND_IN_CODE_INPUT = localize("notebook.find.filter.findInCodeInput", "Code Cell Source");
const NOTEBOOK_FIND_IN_CODE_OUTPUT = localize("notebook.find.filter.findInCodeOutput", "Code Cell Output");
const NOTEBOOK_FIND_WIDGET_INITIAL_WIDTH = 318;
const NOTEBOOK_FIND_WIDGET_INITIAL_HORIZONTAL_PADDING = 4;
let NotebookFindFilterActionViewItem = class NotebookFindFilterActionViewItem2 extends DropdownMenuActionViewItem {
  constructor(filters, action, actionRunner, contextMenuService) {
    super(action, { getActions: () => this.getActions() }, contextMenuService, {
      actionRunner,
      classNames: action.class,
      anchorAlignmentProvider: () => 1
    });
    this.filters = filters;
  }
  render(container) {
    super.render(container);
    this.updateChecked();
  }
  getActions() {
    const markdownInput = {
      checked: this.filters.markupInput,
      class: void 0,
      enabled: true,
      id: "findInMarkdownInput",
      label: NOTEBOOK_FIND_IN_MARKUP_INPUT,
      run: async () => {
        this.filters.markupInput = !this.filters.markupInput;
      },
      tooltip: ""
    };
    const markdownPreview = {
      checked: this.filters.markupPreview,
      class: void 0,
      enabled: true,
      id: "findInMarkdownInput",
      label: NOTEBOOK_FIND_IN_MARKUP_PREVIEW,
      run: async () => {
        this.filters.markupPreview = !this.filters.markupPreview;
      },
      tooltip: ""
    };
    const codeInput = {
      checked: this.filters.codeInput,
      class: void 0,
      enabled: true,
      id: "findInCodeInput",
      label: NOTEBOOK_FIND_IN_CODE_INPUT,
      run: async () => {
        this.filters.codeInput = !this.filters.codeInput;
      },
      tooltip: ""
    };
    const codeOutput = {
      checked: this.filters.codeOutput,
      class: void 0,
      enabled: true,
      id: "findInCodeOutput",
      label: NOTEBOOK_FIND_IN_CODE_OUTPUT,
      run: async () => {
        this.filters.codeOutput = !this.filters.codeOutput;
      },
      tooltip: "",
      dispose: () => null
    };
    if (isSafari) {
      return [
        markdownInput,
        codeInput
      ];
    } else {
      return [
        markdownInput,
        markdownPreview,
        new Separator(),
        codeInput,
        codeOutput
      ];
    }
  }
  updateChecked() {
    this.element.classList.toggle("checked", this._action.checked);
  }
};
NotebookFindFilterActionViewItem = __decorate([
  __param(3, IContextMenuService)
], NotebookFindFilterActionViewItem);
class NotebookFindInputFilterButton extends Disposable {
  constructor(filters, contextMenuService, instantiationService, options, tooltip = NOTEBOOK_FIND_FILTERS) {
    super();
    this.filters = filters;
    this.contextMenuService = contextMenuService;
    this.instantiationService = instantiationService;
    this._actionbar = null;
    this._toggleStyles = options.toggleStyles;
    this._filtersAction = new Action(
      "notebookFindFilterAction",
      tooltip,
      "notebook-filters " + ThemeIcon.asClassName(filterIcon)
    );
    this._filtersAction.checked = false;
    this._filterButtonContainer = $$1(".find-filter-button");
    this._filterButtonContainer.classList.add("monaco-custom-toggle");
    this.createFilters(this._filterButtonContainer);
  }
  get container() {
    return this._filterButtonContainer;
  }
  get width() {
    return 2 + 2 + 2 + 16;
  }
  applyStyles(filterChecked) {
    const toggleStyles = this._toggleStyles;
    this._filterButtonContainer.style.border = "1px solid transparent";
    this._filterButtonContainer.style.borderRadius = "3px";
    this._filterButtonContainer.style.borderColor = filterChecked && toggleStyles.inputActiveOptionBorder || "";
    this._filterButtonContainer.style.color = filterChecked && toggleStyles.inputActiveOptionForeground || "inherit";
    this._filterButtonContainer.style.backgroundColor = filterChecked && toggleStyles.inputActiveOptionBackground || "";
  }
  createFilters(container) {
    this._actionbar = this._register(new ActionBar(container, {
      actionViewItemProvider: (action) => {
        if (action.id === this._filtersAction.id) {
          return this.instantiationService.createInstance(NotebookFindFilterActionViewItem, this.filters, action, new ActionRunner());
        }
        return void 0;
      }
    }));
    this._actionbar.push(this._filtersAction, { icon: true, label: false });
  }
}
registerThemingParticipant((theme, collector) => {
  collector.addRule(`
	.notebook-editor {
		--notebook-find-width: ${NOTEBOOK_FIND_WIDGET_INITIAL_WIDTH}px;
		--notebook-find-horizontal-padding: ${NOTEBOOK_FIND_WIDGET_INITIAL_HORIZONTAL_PADDING}px;
	}
	`);
});
class SearchFindInput extends ContextScopedFindInput {
  constructor(container, contextViewProvider, options, contextKeyService, contextMenuService, instantiationService, filters, filterStartVisiblitity) {
    var _a2, _b2, _c2;
    super(container, contextViewProvider, options, contextKeyService);
    this.contextMenuService = contextMenuService;
    this.instantiationService = instantiationService;
    this.filters = filters;
    this._filterChecked = false;
    this._visible = false;
    this._findFilter = this._register(new NotebookFindInputFilterButton(filters, contextMenuService, instantiationService, options, localize("searchFindInputNotebookFilter.label", "Notebook Find Filters")));
    this.inputBox.paddingRight = (((_a2 = this.caseSensitive) == null ? void 0 : _a2.width()) ?? 0) + (((_b2 = this.wholeWords) == null ? void 0 : _b2.width()) ?? 0) + (((_c2 = this.regex) == null ? void 0 : _c2.width()) ?? 0) + this._findFilter.width;
    this.controls.appendChild(this._findFilter.container);
    this._findFilter.container.classList.add("monaco-custom-toggle");
    this.filterVisible = filterStartVisiblitity;
  }
  set filterVisible(show2) {
    this._findFilter.container.style.display = show2 ? "" : "none";
    this._visible = show2;
    this.updateStyles();
  }
  setEnabled(enabled) {
    var _a2, _b2;
    super.setEnabled(enabled);
    if (enabled && (!this._filterChecked || !this._visible)) {
      (_a2 = this.regex) == null ? void 0 : _a2.enable();
    } else {
      (_b2 = this.regex) == null ? void 0 : _b2.disable();
    }
  }
  updateStyles() {
    this._filterChecked = !this.filters.markupInput || !this.filters.markupPreview || !this.filters.codeInput || !this.filters.codeOutput;
    this._findFilter.applyStyles(this._filterChecked);
  }
}
const SingleLineInputHeight = 26;
const _ReplaceAllAction = class _ReplaceAllAction extends Action {
  constructor(_searchWidget) {
    super(_ReplaceAllAction.ID, "", ThemeIcon.asClassName(searchReplaceAllIcon), false);
    this._searchWidget = _searchWidget;
  }
  set searchWidget(searchWidget) {
    this._searchWidget = searchWidget;
  }
  run() {
    if (this._searchWidget) {
      return this._searchWidget.triggerReplaceAll();
    }
    return Promise.resolve(null);
  }
};
_ReplaceAllAction.ID = "search.action.replaceAll";
let ReplaceAllAction = _ReplaceAllAction;
const ctrlKeyMod = isMacintosh ? 256 : 2048;
function stopPropagationForMultiLineUpwards(event, value, textarea) {
  const isMultiline = !!value.match(/\n/);
  if (textarea && (isMultiline || textarea.clientHeight > SingleLineInputHeight) && textarea.selectionStart > 0) {
    event.stopPropagation();
    return;
  }
}
function stopPropagationForMultiLineDownwards(event, value, textarea) {
  const isMultiline = !!value.match(/\n/);
  if (textarea && (isMultiline || textarea.clientHeight > SingleLineInputHeight) && textarea.selectionEnd < textarea.value.length) {
    event.stopPropagation();
    return;
  }
}
let SearchWidget = (_i = class extends Widget {
  constructor(container, options, contextViewService, contextKeyService, keybindingService, clipboardServce, configurationService, accessibilityService, contextMenuService, instantiationService, editorService) {
    super();
    this.contextViewService = contextViewService;
    this.contextKeyService = contextKeyService;
    this.keybindingService = keybindingService;
    this.clipboardServce = clipboardServce;
    this.configurationService = configurationService;
    this.accessibilityService = accessibilityService;
    this.contextMenuService = contextMenuService;
    this.instantiationService = instantiationService;
    this.editorService = editorService;
    this.ignoreGlobalFindBufferOnNextFocus = false;
    this.previousGlobalFindBufferValue = null;
    this._onSearchSubmit = this._register(new Emitter());
    this.onSearchSubmit = this._onSearchSubmit.event;
    this._onSearchCancel = this._register(new Emitter());
    this.onSearchCancel = this._onSearchCancel.event;
    this._onReplaceToggled = this._register(new Emitter());
    this.onReplaceToggled = this._onReplaceToggled.event;
    this._onReplaceStateChange = this._register(new Emitter());
    this.onReplaceStateChange = this._onReplaceStateChange.event;
    this._onPreserveCaseChange = this._register(new Emitter());
    this.onPreserveCaseChange = this._onPreserveCaseChange.event;
    this._onReplaceValueChanged = this._register(new Emitter());
    this.onReplaceValueChanged = this._onReplaceValueChanged.event;
    this._onReplaceAll = this._register(new Emitter());
    this.onReplaceAll = this._onReplaceAll.event;
    this._onBlur = this._register(new Emitter());
    this.onBlur = this._onBlur.event;
    this._onDidHeightChange = this._register(new Emitter());
    this.onDidHeightChange = this._onDidHeightChange.event;
    this._onDidToggleContext = new Emitter();
    this.onDidToggleContext = this._onDidToggleContext.event;
    this.replaceActive = ReplaceActiveKey.bindTo(this.contextKeyService);
    this.searchInputBoxFocused = SearchInputBoxFocusedKey.bindTo(this.contextKeyService);
    this.replaceInputBoxFocused = ReplaceInputBoxFocusedKey.bindTo(this.contextKeyService);
    const notebookOptions = options.notebookOptions ?? {
      isInNotebookMarkdownInput: true,
      isInNotebookMarkdownPreview: true,
      isInNotebookCellInput: true,
      isInNotebookCellOutput: true
    };
    this._notebookFilters = this._register(new NotebookFindFilters(
      notebookOptions.isInNotebookMarkdownInput,
      notebookOptions.isInNotebookMarkdownPreview,
      notebookOptions.isInNotebookCellInput,
      notebookOptions.isInNotebookCellOutput
    ));
    this._register(this._notebookFilters.onDidChange(() => {
      if (this.searchInput instanceof SearchFindInput) {
        this.searchInput.updateStyles();
      }
    }));
    this._register(this.editorService.onDidEditorsChange((e) => {
      if (this.searchInput instanceof SearchFindInput && e.event.editor instanceof NotebookEditorInput && (e.event.kind === 3 || e.event.kind === 4)) {
        this.searchInput.filterVisible = this._hasNotebookOpen();
      }
    }));
    this._replaceHistoryDelayer = new Delayer(500);
    this.render(container, options);
    this.configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("editor.accessibilitySupport")) {
        this.updateAccessibilitySupport();
      }
    });
    this.accessibilityService.onDidChangeScreenReaderOptimized(() => this.updateAccessibilitySupport());
    this.updateAccessibilitySupport();
  }
  _hasNotebookOpen() {
    const editors = this.editorService.editors;
    return editors.some((editor) => editor instanceof NotebookEditorInput);
  }
  getNotebookFilters() {
    return this._notebookFilters;
  }
  focus(select = true, focusReplace = false, suppressGlobalSearchBuffer = false) {
    this.ignoreGlobalFindBufferOnNextFocus = suppressGlobalSearchBuffer;
    if (focusReplace && this.isReplaceShown()) {
      if (this.replaceInput) {
        this.replaceInput.focus();
        if (select) {
          this.replaceInput.select();
        }
      }
    } else {
      if (this.searchInput) {
        this.searchInput.focus();
        if (select) {
          this.searchInput.select();
        }
      }
    }
  }
  setWidth(width) {
    var _a2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.inputBox.layout();
    if (this.replaceInput) {
      this.replaceInput.width = width - 28;
      this.replaceInput.inputBox.layout();
    }
  }
  clear() {
    var _a2, _b2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.clear();
    (_b2 = this.replaceInput) == null ? void 0 : _b2.setValue("");
    this.setReplaceAllActionState(false);
  }
  isReplaceShown() {
    return this.replaceContainer ? !this.replaceContainer.classList.contains("disabled") : false;
  }
  isReplaceActive() {
    return !!this.replaceActive.get();
  }
  getReplaceValue() {
    var _a2;
    return ((_a2 = this.replaceInput) == null ? void 0 : _a2.getValue()) ?? "";
  }
  toggleReplace(show2) {
    if (show2 === void 0 || show2 !== this.isReplaceShown()) {
      this.onToggleReplaceButton();
    }
  }
  getSearchHistory() {
    var _a2;
    return ((_a2 = this.searchInput) == null ? void 0 : _a2.inputBox.getHistory()) ?? [];
  }
  getReplaceHistory() {
    var _a2;
    return ((_a2 = this.replaceInput) == null ? void 0 : _a2.inputBox.getHistory()) ?? [];
  }
  prependSearchHistory(history) {
    var _a2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.inputBox.prependHistory(history);
  }
  prependReplaceHistory(history) {
    var _a2;
    (_a2 = this.replaceInput) == null ? void 0 : _a2.inputBox.prependHistory(history);
  }
  clearHistory() {
    var _a2, _b2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.inputBox.clearHistory();
    (_b2 = this.replaceInput) == null ? void 0 : _b2.inputBox.clearHistory();
  }
  showNextSearchTerm() {
    var _a2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.inputBox.showNextValue();
  }
  showPreviousSearchTerm() {
    var _a2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.inputBox.showPreviousValue();
  }
  showNextReplaceTerm() {
    var _a2;
    (_a2 = this.replaceInput) == null ? void 0 : _a2.inputBox.showNextValue();
  }
  showPreviousReplaceTerm() {
    var _a2;
    (_a2 = this.replaceInput) == null ? void 0 : _a2.inputBox.showPreviousValue();
  }
  searchInputHasFocus() {
    return !!this.searchInputBoxFocused.get();
  }
  replaceInputHasFocus() {
    var _a2;
    return !!((_a2 = this.replaceInput) == null ? void 0 : _a2.inputBox.hasFocus());
  }
  focusReplaceAllAction() {
    var _a2;
    (_a2 = this.replaceActionBar) == null ? void 0 : _a2.focus(true);
  }
  focusRegexAction() {
    var _a2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.focusOnRegex();
  }
  render(container, options) {
    this.domNode = append(container, $$1(".search-widget"));
    this.domNode.style.position = "relative";
    if (!options._hideReplaceToggle) {
      this.renderToggleReplaceButton(this.domNode);
    }
    this.renderSearchInput(this.domNode, options);
    this.renderReplaceInput(this.domNode, options);
  }
  updateAccessibilitySupport() {
    var _a2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.setFocusInputOnOptionClick(!this.accessibilityService.isScreenReaderOptimized());
  }
  renderToggleReplaceButton(parent) {
    const opts = {
      buttonBackground: void 0,
      buttonBorder: void 0,
      buttonForeground: void 0,
      buttonHoverBackground: void 0,
      buttonSecondaryBackground: void 0,
      buttonSecondaryForeground: void 0,
      buttonSecondaryHoverBackground: void 0,
      buttonSeparator: void 0
    };
    this.toggleReplaceButton = this._register(new Button(parent, opts));
    this.toggleReplaceButton.element.setAttribute("aria-expanded", "false");
    this.toggleReplaceButton.element.classList.add("toggle-replace-button");
    this.toggleReplaceButton.icon = searchHideReplaceIcon;
    this.toggleReplaceButton.onDidClick(() => this.onToggleReplaceButton());
    this.toggleReplaceButton.element.title = localize("search.replace.toggle.button.title", "Toggle Replace");
  }
  renderSearchInput(parent, options) {
    const inputOptions = {
      label: localize("label.Search", "Search: Type Search Term and press Enter to search"),
      validation: (value) => this.validateSearchInput(value),
      placeholder: localize("search.placeHolder", "Search"),
      appendCaseSensitiveLabel: appendKeyBindingLabel("", this.keybindingService.lookupKeybinding(ToggleCaseSensitiveCommandId)),
      appendWholeWordsLabel: appendKeyBindingLabel("", this.keybindingService.lookupKeybinding(ToggleWholeWordCommandId)),
      appendRegexLabel: appendKeyBindingLabel("", this.keybindingService.lookupKeybinding(ToggleRegexCommandId)),
      history: options.searchHistory,
      showHistoryHint: () => showHistoryKeybindingHint(this.keybindingService),
      flexibleHeight: true,
      flexibleMaxHeight: _i.INPUT_MAX_HEIGHT,
      showCommonFindToggles: true,
      inputBoxStyles: options.inputBoxStyles,
      toggleStyles: options.toggleStyles
    };
    const searchInputContainer = append(parent, $$1(".search-container.input-box"));
    this.searchInput = this._register(new SearchFindInput(
      searchInputContainer,
      this.contextViewService,
      inputOptions,
      this.contextKeyService,
      this.contextMenuService,
      this.instantiationService,
      this._notebookFilters,
      this._hasNotebookOpen()
    ));
    this.searchInput.onKeyDown((keyboardEvent) => this.onSearchInputKeyDown(keyboardEvent));
    this.searchInput.setValue(options.value || "");
    this.searchInput.setRegex(!!options.isRegex);
    this.searchInput.setCaseSensitive(!!options.isCaseSensitive);
    this.searchInput.setWholeWords(!!options.isWholeWords);
    this._register(this.searchInput.onCaseSensitiveKeyDown((keyboardEvent) => this.onCaseSensitiveKeyDown(keyboardEvent)));
    this._register(this.searchInput.onRegexKeyDown((keyboardEvent) => this.onRegexKeyDown(keyboardEvent)));
    this._register(this.searchInput.inputBox.onDidChange(() => this.onSearchInputChanged()));
    this._register(this.searchInput.inputBox.onDidHeightChange(() => this._onDidHeightChange.fire()));
    this._register(this.onReplaceValueChanged(() => {
      this._replaceHistoryDelayer.trigger(() => {
        var _a2;
        return (_a2 = this.replaceInput) == null ? void 0 : _a2.inputBox.addToHistory();
      });
    }));
    this.searchInputFocusTracker = this._register(trackFocus(this.searchInput.inputBox.inputElement));
    this._register(this.searchInputFocusTracker.onDidFocus(async () => {
      var _a2, _b2, _c2;
      this.searchInputBoxFocused.set(true);
      const useGlobalFindBuffer = this.searchConfiguration.globalFindClipboard;
      if (!this.ignoreGlobalFindBufferOnNextFocus && useGlobalFindBuffer) {
        const globalBufferText = await this.clipboardServce.readFindText();
        if (globalBufferText && this.previousGlobalFindBufferValue !== globalBufferText) {
          (_a2 = this.searchInput) == null ? void 0 : _a2.inputBox.addToHistory();
          (_b2 = this.searchInput) == null ? void 0 : _b2.setValue(globalBufferText);
          (_c2 = this.searchInput) == null ? void 0 : _c2.select();
        }
        this.previousGlobalFindBufferValue = globalBufferText;
      }
      this.ignoreGlobalFindBufferOnNextFocus = false;
    }));
    this._register(this.searchInputFocusTracker.onDidBlur(() => this.searchInputBoxFocused.set(false)));
    this.showContextToggle = new Toggle({
      isChecked: false,
      title: appendKeyBindingLabel(localize("showContext", "Toggle Context Lines"), this.keybindingService.lookupKeybinding(ToggleSearchEditorContextLinesCommandId)),
      icon: searchShowContextIcon,
      ...defaultToggleStyles
    });
    this._register(this.showContextToggle.onChange(() => this.onContextLinesChanged()));
    if (options.showContextToggle) {
      this.contextLinesInput = new InputBox(
        searchInputContainer,
        this.contextViewService,
        { type: "number", inputBoxStyles: defaultInputBoxStyles }
      );
      this.contextLinesInput.element.classList.add("context-lines-input");
      this.contextLinesInput.value = "" + (this.configurationService.getValue("search").searchEditor.defaultNumberOfContextLines ?? 1);
      this._register(this.contextLinesInput.onDidChange((value) => {
        if (value !== "0") {
          this.showContextToggle.checked = true;
        }
        this.onContextLinesChanged();
      }));
      append(searchInputContainer, this.showContextToggle.domNode);
    }
  }
  onContextLinesChanged() {
    this._onDidToggleContext.fire();
    if (this.contextLinesInput.value.includes("-")) {
      this.contextLinesInput.value = "0";
    }
    this._onDidToggleContext.fire();
  }
  setContextLines(lines) {
    if (!this.contextLinesInput) {
      return;
    }
    if (lines === 0) {
      this.showContextToggle.checked = false;
    } else {
      this.showContextToggle.checked = true;
      this.contextLinesInput.value = "" + lines;
    }
  }
  renderReplaceInput(parent, options) {
    this.replaceContainer = append(parent, $$1(".replace-container.disabled"));
    const replaceBox = append(this.replaceContainer, $$1(".replace-input"));
    this.replaceInput = this._register(new ContextScopedReplaceInput(replaceBox, this.contextViewService, {
      label: localize("label.Replace", "Replace: Type replace term and press Enter to preview"),
      placeholder: localize("search.replace.placeHolder", "Replace"),
      appendPreserveCaseLabel: appendKeyBindingLabel("", this.keybindingService.lookupKeybinding(TogglePreserveCaseId)),
      history: options.replaceHistory,
      showHistoryHint: () => showHistoryKeybindingHint(this.keybindingService),
      flexibleHeight: true,
      flexibleMaxHeight: _i.INPUT_MAX_HEIGHT,
      inputBoxStyles: options.inputBoxStyles,
      toggleStyles: options.toggleStyles
    }, this.contextKeyService, true));
    this._register(this.replaceInput.onDidOptionChange((viaKeyboard) => {
      if (!viaKeyboard) {
        if (this.replaceInput) {
          this._onPreserveCaseChange.fire(this.replaceInput.getPreserveCase());
        }
      }
    }));
    this.replaceInput.onKeyDown((keyboardEvent) => this.onReplaceInputKeyDown(keyboardEvent));
    this.replaceInput.setValue(options.replaceValue || "");
    this._register(this.replaceInput.inputBox.onDidChange(() => this._onReplaceValueChanged.fire()));
    this._register(this.replaceInput.inputBox.onDidHeightChange(() => this._onDidHeightChange.fire()));
    this.replaceAllAction = new ReplaceAllAction(this);
    this.replaceAllAction.label = _i.REPLACE_ALL_DISABLED_LABEL;
    this.replaceActionBar = this._register(new ActionBar(this.replaceContainer));
    this.replaceActionBar.push([this.replaceAllAction], { icon: true, label: false });
    this.onkeydown(this.replaceActionBar.domNode, (keyboardEvent) => this.onReplaceActionbarKeyDown(keyboardEvent));
    this.replaceInputFocusTracker = this._register(trackFocus(this.replaceInput.inputBox.inputElement));
    this._register(this.replaceInputFocusTracker.onDidFocus(() => this.replaceInputBoxFocused.set(true)));
    this._register(this.replaceInputFocusTracker.onDidBlur(() => this.replaceInputBoxFocused.set(false)));
    this._register(this.replaceInput.onPreserveCaseKeyDown((keyboardEvent) => this.onPreserveCaseKeyDown(keyboardEvent)));
  }
  triggerReplaceAll() {
    this._onReplaceAll.fire();
    return Promise.resolve(null);
  }
  onToggleReplaceButton() {
    var _a2, _b2, _c2, _d2, _e2, _f2;
    (_a2 = this.replaceContainer) == null ? void 0 : _a2.classList.toggle("disabled");
    if (this.isReplaceShown()) {
      (_b2 = this.toggleReplaceButton) == null ? void 0 : _b2.element.classList.remove(...ThemeIcon.asClassNameArray(searchHideReplaceIcon));
      (_c2 = this.toggleReplaceButton) == null ? void 0 : _c2.element.classList.add(...ThemeIcon.asClassNameArray(searchShowReplaceIcon));
    } else {
      (_d2 = this.toggleReplaceButton) == null ? void 0 : _d2.element.classList.remove(...ThemeIcon.asClassNameArray(searchShowReplaceIcon));
      (_e2 = this.toggleReplaceButton) == null ? void 0 : _e2.element.classList.add(...ThemeIcon.asClassNameArray(searchHideReplaceIcon));
    }
    (_f2 = this.toggleReplaceButton) == null ? void 0 : _f2.element.setAttribute("aria-expanded", this.isReplaceShown() ? "true" : "false");
    this.updateReplaceActiveState();
    this._onReplaceToggled.fire();
  }
  setValue(value) {
    var _a2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.setValue(value);
  }
  setReplaceAllActionState(enabled) {
    if (this.replaceAllAction && this.replaceAllAction.enabled !== enabled) {
      this.replaceAllAction.enabled = enabled;
      this.replaceAllAction.label = enabled ? _i.REPLACE_ALL_ENABLED_LABEL(this.keybindingService) : _i.REPLACE_ALL_DISABLED_LABEL;
      this.updateReplaceActiveState();
    }
  }
  updateReplaceActiveState() {
    var _a2, _b2;
    const currentState = this.isReplaceActive();
    const newState = this.isReplaceShown() && !!((_a2 = this.replaceAllAction) == null ? void 0 : _a2.enabled);
    if (currentState !== newState) {
      this.replaceActive.set(newState);
      this._onReplaceStateChange.fire(newState);
      (_b2 = this.replaceInput) == null ? void 0 : _b2.inputBox.layout();
    }
  }
  validateSearchInput(value) {
    var _a2;
    if (value.length === 0) {
      return null;
    }
    if (!((_a2 = this.searchInput) == null ? void 0 : _a2.getRegex())) {
      return null;
    }
    return null;
  }
  onSearchInputChanged() {
    var _a2, _b2, _c2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.clearMessage();
    this.setReplaceAllActionState(false);
    if (this.searchConfiguration.searchOnType) {
      if ((_b2 = this.searchInput) == null ? void 0 : _b2.getRegex()) {
        try {
          const regex = new RegExp(this.searchInput.getValue(), "ug");
          const matchienessHeuristic = ((_c2 = `
								~!@#$%^&*()_+
								\`1234567890-=
								qwertyuiop[]\\
								QWERTYUIOP{}|
								asdfghjkl;'
								ASDFGHJKL:"
								zxcvbnm,./
								ZXCVBNM<>? `.match(regex)) == null ? void 0 : _c2.length) ?? 0;
          const delayMultiplier = matchienessHeuristic < 50 ? 1 : matchienessHeuristic < 100 ? 5 : 10;
          this.submitSearch(true, this.searchConfiguration.searchOnTypeDebouncePeriod * delayMultiplier);
        } catch {
        }
      } else {
        this.submitSearch(true, this.searchConfiguration.searchOnTypeDebouncePeriod);
      }
    }
  }
  onSearchInputKeyDown(keyboardEvent) {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
    if (keyboardEvent.equals(ctrlKeyMod | 3)) {
      (_a2 = this.searchInput) == null ? void 0 : _a2.inputBox.insertAtCursor("\n");
      keyboardEvent.preventDefault();
    }
    if (keyboardEvent.equals(3)) {
      (_b2 = this.searchInput) == null ? void 0 : _b2.onSearchSubmit();
      this.submitSearch();
      keyboardEvent.preventDefault();
    } else if (keyboardEvent.equals(9)) {
      this._onSearchCancel.fire({ focus: true });
      keyboardEvent.preventDefault();
    } else if (keyboardEvent.equals(2)) {
      if (this.isReplaceShown()) {
        (_c2 = this.replaceInput) == null ? void 0 : _c2.focus();
      } else {
        (_d2 = this.searchInput) == null ? void 0 : _d2.focusOnCaseSensitive();
      }
      keyboardEvent.preventDefault();
    } else if (keyboardEvent.equals(16)) {
      stopPropagationForMultiLineUpwards(keyboardEvent, ((_e2 = this.searchInput) == null ? void 0 : _e2.getValue()) ?? "", ((_f2 = this.searchInput) == null ? void 0 : _f2.domNode.querySelector("textarea")) ?? null);
    } else if (keyboardEvent.equals(18)) {
      stopPropagationForMultiLineDownwards(keyboardEvent, ((_g2 = this.searchInput) == null ? void 0 : _g2.getValue()) ?? "", ((_h2 = this.searchInput) == null ? void 0 : _h2.domNode.querySelector("textarea")) ?? null);
    }
  }
  onCaseSensitiveKeyDown(keyboardEvent) {
    var _a2;
    if (keyboardEvent.equals(1024 | 2)) {
      if (this.isReplaceShown()) {
        (_a2 = this.replaceInput) == null ? void 0 : _a2.focus();
        keyboardEvent.preventDefault();
      }
    }
  }
  onRegexKeyDown(keyboardEvent) {
    var _a2;
    if (keyboardEvent.equals(2)) {
      if (this.isReplaceShown()) {
        (_a2 = this.replaceInput) == null ? void 0 : _a2.focusOnPreserve();
        keyboardEvent.preventDefault();
      }
    }
  }
  onPreserveCaseKeyDown(keyboardEvent) {
    if (keyboardEvent.equals(2)) {
      if (this.isReplaceActive()) {
        this.focusReplaceAllAction();
      } else {
        this._onBlur.fire();
      }
      keyboardEvent.preventDefault();
    } else if (keyboardEvent.equals(1024 | 2)) {
      this.focusRegexAction();
      keyboardEvent.preventDefault();
    }
  }
  onReplaceInputKeyDown(keyboardEvent) {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
    if (keyboardEvent.equals(ctrlKeyMod | 3)) {
      (_a2 = this.replaceInput) == null ? void 0 : _a2.inputBox.insertAtCursor("\n");
      keyboardEvent.preventDefault();
    }
    if (keyboardEvent.equals(3)) {
      this.submitSearch();
      keyboardEvent.preventDefault();
    } else if (keyboardEvent.equals(2)) {
      (_b2 = this.searchInput) == null ? void 0 : _b2.focusOnCaseSensitive();
      keyboardEvent.preventDefault();
    } else if (keyboardEvent.equals(1024 | 2)) {
      (_c2 = this.searchInput) == null ? void 0 : _c2.focus();
      keyboardEvent.preventDefault();
    } else if (keyboardEvent.equals(16)) {
      stopPropagationForMultiLineUpwards(keyboardEvent, ((_d2 = this.replaceInput) == null ? void 0 : _d2.getValue()) ?? "", ((_e2 = this.replaceInput) == null ? void 0 : _e2.domNode.querySelector("textarea")) ?? null);
    } else if (keyboardEvent.equals(18)) {
      stopPropagationForMultiLineDownwards(keyboardEvent, ((_f2 = this.replaceInput) == null ? void 0 : _f2.getValue()) ?? "", ((_g2 = this.replaceInput) == null ? void 0 : _g2.domNode.querySelector("textarea")) ?? null);
    }
  }
  onReplaceActionbarKeyDown(keyboardEvent) {
    if (keyboardEvent.equals(1024 | 2)) {
      this.focusRegexAction();
      keyboardEvent.preventDefault();
    }
  }
  async submitSearch(triggeredOnType = false, delay = 0) {
    var _a2, _b2;
    (_a2 = this.searchInput) == null ? void 0 : _a2.validate();
    if (!((_b2 = this.searchInput) == null ? void 0 : _b2.inputBox.isInputValid())) {
      return;
    }
    const value = this.searchInput.getValue();
    const useGlobalFindBuffer = this.searchConfiguration.globalFindClipboard;
    if (value && useGlobalFindBuffer) {
      await this.clipboardServce.writeFindText(value);
    }
    this._onSearchSubmit.fire({ triggeredOnType, delay });
  }
  getContextLines() {
    return this.showContextToggle.checked ? +this.contextLinesInput.value : 0;
  }
  modifyContextLines(increase) {
    const current = +this.contextLinesInput.value;
    const modified = current + (increase ? 1 : -1);
    this.showContextToggle.checked = modified !== 0;
    this.contextLinesInput.value = "" + modified;
  }
  toggleContextLines() {
    this.showContextToggle.checked = !this.showContextToggle.checked;
    this.onContextLinesChanged();
  }
  dispose() {
    this.setReplaceAllActionState(false);
    super.dispose();
  }
  get searchConfiguration() {
    return this.configurationService.getValue("search");
  }
}, _i.INPUT_MAX_HEIGHT = 134, _i.REPLACE_ALL_DISABLED_LABEL = localize(
  "search.action.replaceAll.disabled.label",
  "Replace All (Submit Search to Enable)"
), _i.REPLACE_ALL_ENABLED_LABEL = (keyBindingService2) => {
  const kb = keyBindingService2.lookupKeybinding(ReplaceAllAction.ID);
  return appendKeyBindingLabel(localize("search.action.replaceAll.enabled.label", "Replace All"), kb);
}, _i);
SearchWidget = __decorate([
  __param(2, IContextViewService),
  __param(3, IContextKeyService),
  __param(4, IKeybindingService),
  __param(5, IClipboardService),
  __param(6, IConfigurationService),
  __param(7, IAccessibilityService),
  __param(8, IContextMenuService),
  __param(9, IInstantiationService),
  __param(10, IEditorService)
], SearchWidget);
function registerContributions() {
  KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: ReplaceAllAction.ID,
    weight: 200,
    when: ContextKeyExpr.and(
      SearchViewVisibleKey,
      ReplaceActiveKey,
      CONTEXT_FIND_WIDGET_NOT_VISIBLE
    ),
    primary: 512 | 2048 | 3,
    handler: (accessor) => {
      const viewsService = accessor.get(IViewsService);
      if (isSearchViewFocused(viewsService)) {
        const searchView = getSearchView(viewsService);
        if (searchView) {
          new ReplaceAllAction(searchView.searchAndReplaceWidget).run();
        }
      }
    }
  });
}
var css = ".search-editor{display:flex;flex-direction:column}.search-editor .search-results{flex:1}.search-editor .query-container{margin:0 12px 12px 19px;padding-top:6px}.search-editor .search-widget .toggle-replace-button{align-items:center;background-position:50%;background-repeat:no-repeat;box-sizing:border-box;cursor:pointer;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:16px}.search-editor .search-widget .replace-container,.search-editor .search-widget .search-container{align-items:center;display:flex}.search-editor .search-widget .monaco-findInput{display:inline-block;vertical-align:middle;width:100%}.search-editor .search-widget .monaco-inputbox>.ibwrapper{height:100%}.search-editor .search-widget .monaco-inputbox>.ibwrapper>.mirror,.search-editor .search-widget .monaco-inputbox>.ibwrapper>textarea.input{padding:3px 3px 3px 6px}.search-editor .search-widget .monaco-inputbox>.ibwrapper>.mirror{max-height:134px}.search-editor .search-widget .monaco-inputbox>.ibwrapper>textarea.input{height:26px;overflow:initial}.search-editor .monaco-inputbox>.ibwrapper>textarea.input{scrollbar-width:none}.search-editor .monaco-inputbox>.ibwrapper>textarea.input::-webkit-scrollbar{display:none}.search-editor .search-widget .context-lines-input{margin-left:5px;margin-right:2px;max-width:50px}.search-editor .search-widget .context-lines-input input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none!important}.search-editor .search-widget .replace-container{display:inline-flex;margin-top:6px;position:relative}.search-editor .search-widget .replace-input{display:flex;height:25px;position:relative;vertical-align:middle;width:auto!important}.search-editor .search-widget .replace-input>.controls{position:absolute;right:2px;top:3px}.search-editor .search-widget .replace-container.disabled{display:none}.search-editor .search-widget .replace-container .monaco-action-bar{height:25px;margin-left:0}.search-editor .search-widget .replace-container .monaco-action-bar .action-item .codicon{align-items:center;background-repeat:no-repeat;display:flex;height:25px;justify-content:center;margin-right:0;width:25px}.search-editor .includes-excludes{min-height:1em;position:relative}.search-editor .includes-excludes .expand{cursor:pointer;height:16px;position:absolute;right:-2px;width:25px;z-index:2}.search-editor .includes-excludes .file-types{display:none}.search-editor .includes-excludes.expanded .file-types{display:inherit}.search-editor .includes-excludes.expanded .file-types:last-child{padding-bottom:10px}.search-editor .includes-excludes.expanded h4{font-size:11px;font-weight:400;margin:0;overflow:hidden;padding:4px 0 0;text-overflow:ellipsis;white-space:nowrap}.search-editor .messages{cursor:default;margin-top:-5px}.search-editor .message{padding-left:7px;padding-right:22px;padding-top:0}.search-editor a.prominent{text-decoration:underline}.monaco-editor .searchEditorFindMatch{background-color:var(--vscode-searchEditor-findMatchBackground);border:1px solid var(--vscode-searchEditor-findMatchBorder);box-sizing:border-box}.monaco-editor.hc-black .searchEditorFindMatch,.monaco-editor.hc-light .searchEditorFindMatch{border:1px dotted var(--vscode-searchEditor-findMatchBorder)}";
n(css, {});
const lineDelimiter$1 = "\n";
const translateRangeLines = (n2) => (range) => new Range(
  range.startLineNumber + n2,
  range.startColumn,
  range.endLineNumber + n2,
  range.endColumn
);
const matchToSearchResultFormat = (match, longestLineNumber) => {
  const getLinePrefix = (i) => `${match.range().startLineNumber + i}`;
  const fullMatchLines = match.fullPreviewLines();
  const results = [];
  fullMatchLines.forEach((sourceLine, i) => {
    const lineNumber = getLinePrefix(i);
    const paddingStr = " ".repeat(longestLineNumber - lineNumber.length);
    const prefix = `  ${paddingStr}${lineNumber}: `;
    const prefixOffset = prefix.length;
    const line = prefix + (sourceLine.split(/\r?\n?$/, 1)[0] || "");
    const rangeOnThisLine = ({ start, end }) => new Range(
      1,
      (start ?? 1) + prefixOffset,
      1,
      (end ?? sourceLine.length + 1) + prefixOffset
    );
    const matchRange = match.rangeInPreview();
    const matchIsSingleLine = matchRange.startLineNumber === matchRange.endLineNumber;
    let lineRange;
    if (matchIsSingleLine) {
      lineRange = rangeOnThisLine({ start: matchRange.startColumn, end: matchRange.endColumn });
    } else if (i === 0) {
      lineRange = rangeOnThisLine({ start: matchRange.startColumn });
    } else if (i === fullMatchLines.length - 1) {
      lineRange = rangeOnThisLine({ end: matchRange.endColumn });
    } else {
      lineRange = rangeOnThisLine({});
    }
    results.push({ lineNumber, line, ranges: [lineRange] });
  });
  return results;
};
function fileMatchToSearchResultFormat(fileMatch, labelFormatter) {
  const textSerializations = fileMatch.textMatches().length > 0 ? matchesToSearchResultFormat(fileMatch.resource, fileMatch.textMatches().sort(searchMatchComparer), fileMatch.context, labelFormatter) : void 0;
  const cellSerializations = fileMatch.cellMatches().sort((a, b) => a.cellIndex - b.cellIndex).sort().filter((cellMatch) => cellMatch.contentMatches.length > 0).map(
    (cellMatch, index) => cellMatchToSearchResultFormat(cellMatch, labelFormatter, index === 0)
  );
  return [textSerializations, ...cellSerializations].filter((x) => !!x);
}
function matchesToSearchResultFormat(resource, sortedMatches, matchContext, labelFormatter, shouldUseHeader = true) {
  const longestLineNumber = sortedMatches[sortedMatches.length - 1].range().endLineNumber.toString().length;
  const text = shouldUseHeader ? [`${labelFormatter(resource)}:`] : [];
  const matchRanges = [];
  const targetLineNumberToOffset = {};
  const context = [];
  matchContext.forEach((line, lineNumber) => context.push({ line, lineNumber }));
  context.sort((a, b) => a.lineNumber - b.lineNumber);
  let lastLine = void 0;
  const seenLines = /* @__PURE__ */ new Set();
  sortedMatches.forEach((match) => {
    matchToSearchResultFormat(match, longestLineNumber).forEach((match2) => {
      if (!seenLines.has(match2.lineNumber)) {
        while (context.length && context[0].lineNumber < +match2.lineNumber) {
          const { line, lineNumber } = context.shift();
          if (lastLine !== void 0 && lineNumber !== lastLine + 1) {
            text.push("");
          }
          text.push(`  ${" ".repeat(longestLineNumber - `${lineNumber}`.length)}${lineNumber}  ${line}`);
          lastLine = lineNumber;
        }
        targetLineNumberToOffset[match2.lineNumber] = text.length;
        seenLines.add(match2.lineNumber);
        text.push(match2.line);
        lastLine = +match2.lineNumber;
      }
      matchRanges.push(...match2.ranges.map(translateRangeLines(targetLineNumberToOffset[match2.lineNumber])));
    });
  });
  while (context.length) {
    const { line, lineNumber } = context.shift();
    text.push(`  ${lineNumber}  ${line}`);
  }
  return { text, matchRanges };
}
function cellMatchToSearchResultFormat(cellMatch, labelFormatter, shouldUseHeader) {
  return matchesToSearchResultFormat(cellMatch.cell.uri, cellMatch.contentMatches.sort(searchMatchComparer), cellMatch.context, labelFormatter, shouldUseHeader);
}
const contentPatternToSearchConfiguration = (pattern, includes, excludes, contextLines) => {
  var _a2, _b2, _c2, _d2;
  return {
    query: pattern.contentPattern.pattern,
    isRegexp: !!pattern.contentPattern.isRegExp,
    isCaseSensitive: !!pattern.contentPattern.isCaseSensitive,
    matchWholeWord: !!pattern.contentPattern.isWordMatch,
    filesToExclude: excludes,
    filesToInclude: includes,
    showIncludesExcludes: !!(includes || excludes || (pattern == null ? void 0 : pattern.userDisabledExcludesAndIgnoreFiles)),
    useExcludeSettingsAndIgnoreFiles: (pattern == null ? void 0 : pattern.userDisabledExcludesAndIgnoreFiles) === void 0 ? true : !pattern.userDisabledExcludesAndIgnoreFiles,
    contextLines,
    onlyOpenEditors: !!pattern.onlyOpenEditors,
    notebookSearchConfig: {
      includeMarkupInput: !!((_a2 = pattern.contentPattern.notebookInfo) == null ? void 0 : _a2.isInNotebookMarkdownInput),
      includeMarkupPreview: !!((_b2 = pattern.contentPattern.notebookInfo) == null ? void 0 : _b2.isInNotebookMarkdownPreview),
      includeCodeInput: !!((_c2 = pattern.contentPattern.notebookInfo) == null ? void 0 : _c2.isInNotebookCellInput),
      includeOutput: !!((_d2 = pattern.contentPattern.notebookInfo) == null ? void 0 : _d2.isInNotebookCellOutput)
    }
  };
};
const serializeSearchConfiguration = (config) => {
  const removeNullFalseAndUndefined = (a) => a.filter((a2) => a2 !== false && a2 !== null && a2 !== void 0);
  const escapeNewlines = (str) => str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
  return removeNullFalseAndUndefined([
    `# Query: ${escapeNewlines(config.query ?? "")}`,
    (config.isCaseSensitive || config.matchWholeWord || config.isRegexp || config.useExcludeSettingsAndIgnoreFiles === false) && `# Flags: ${coalesce([
      config.isCaseSensitive && "CaseSensitive",
      config.matchWholeWord && "WordMatch",
      config.isRegexp && "RegExp",
      config.onlyOpenEditors && "OpenEditors",
      config.useExcludeSettingsAndIgnoreFiles === false && "IgnoreExcludeSettings"
    ]).join(" ")}`,
    config.filesToInclude ? `# Including: ${config.filesToInclude}` : void 0,
    config.filesToExclude ? `# Excluding: ${config.filesToExclude}` : void 0,
    config.contextLines ? `# ContextLines: ${config.contextLines}` : void 0,
    ""
  ]).join(lineDelimiter$1);
};
const defaultSearchConfig = () => ({
  query: "",
  filesToInclude: "",
  filesToExclude: "",
  isRegexp: false,
  isCaseSensitive: false,
  useExcludeSettingsAndIgnoreFiles: true,
  matchWholeWord: false,
  contextLines: 0,
  showIncludesExcludes: false,
  onlyOpenEditors: false,
  notebookSearchConfig: {
    includeMarkupInput: true,
    includeMarkupPreview: false,
    includeCodeInput: true,
    includeOutput: true
  }
});
const extractSearchQueryFromLines = (lines) => {
  const query = defaultSearchConfig();
  const unescapeNewlines = (str) => {
    let out = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "\\") {
        i++;
        const escaped = str[i];
        if (escaped === "n") {
          out += "\n";
        } else if (escaped === "\\") {
          out += "\\";
        } else {
          throw Error(localize("invalidQueryStringError", "All backslashes in Query string must be escaped (\\\\)"));
        }
      } else {
        out += str[i];
      }
    }
    return out;
  };
  const parseYML = /^# ([^:]*): (.*)$/;
  for (const line of lines) {
    const parsed = parseYML.exec(line);
    if (!parsed) {
      continue;
    }
    const [, key, value] = parsed;
    switch (key) {
      case "Query":
        query.query = unescapeNewlines(value);
        break;
      case "Including":
        query.filesToInclude = value;
        break;
      case "Excluding":
        query.filesToExclude = value;
        break;
      case "ContextLines":
        query.contextLines = +value;
        break;
      case "Flags": {
        query.isRegexp = value.indexOf("RegExp") !== -1;
        query.isCaseSensitive = value.indexOf("CaseSensitive") !== -1;
        query.useExcludeSettingsAndIgnoreFiles = value.indexOf("IgnoreExcludeSettings") === -1;
        query.matchWholeWord = value.indexOf("WordMatch") !== -1;
        query.onlyOpenEditors = value.indexOf("OpenEditors") !== -1;
      }
    }
  }
  query.showIncludesExcludes = !!(query.filesToInclude || query.filesToExclude || !query.useExcludeSettingsAndIgnoreFiles);
  return query;
};
const serializeSearchResultForEditor = (searchResult, rawIncludePattern, rawExcludePattern, contextLines, labelFormatter, sortOrder, limitHit) => {
  if (!searchResult.query) {
    throw Error("Internal Error: Expected query, got null");
  }
  const config = contentPatternToSearchConfiguration(searchResult.query, rawIncludePattern, rawExcludePattern, contextLines);
  const filecount = searchResult.fileCount() > 1 ? localize("numFiles", "{0} files", searchResult.fileCount()) : localize("oneFile", "1 file");
  const resultcount = searchResult.count() > 1 ? localize("numResults", "{0} results", searchResult.count()) : localize("oneResult", "1 result");
  const info = [
    searchResult.count() ? `${resultcount} - ${filecount}` : localize("noResults", "No Results")
  ];
  if (limitHit) {
    info.push(localize(
      "searchMaxResultsWarning",
      "The result set only contains a subset of all matches. Be more specific in your search to narrow down the results."
    ));
  }
  info.push("");
  const matchComparer = (a, b) => searchMatchComparer(a, b, sortOrder);
  const allResults = flattenSearchResultSerializations(flatten(searchResult.folderMatches().sort(matchComparer).map((folderMatch) => folderMatch.allDownstreamFileMatches().sort(matchComparer).flatMap((fileMatch) => fileMatchToSearchResultFormat(fileMatch, labelFormatter)))));
  return {
    matchRanges: allResults.matchRanges.map(translateRangeLines(info.length)),
    text: info.concat(allResults.text).join(lineDelimiter$1),
    config
  };
};
const flattenSearchResultSerializations = (serializations) => {
  const text = [];
  const matchRanges = [];
  serializations.forEach((serialized) => {
    serialized.matchRanges.map(translateRangeLines(text.length)).forEach((range) => matchRanges.push(range));
    serialized.text.forEach((line) => text.push(line));
    text.push("");
  });
  return { text, matchRanges };
};
const parseSavedSearchEditor = async (accessor, resource) => {
  const textFileService = accessor.get(ITextFileService);
  const text = (await textFileService.read(resource)).value;
  return parseSerializedSearchEditor(text);
};
const parseSerializedSearchEditor = (text) => {
  const headerlines = [];
  const bodylines = [];
  let inHeader = true;
  for (const line of text.split(/\r?\n/g)) {
    if (inHeader) {
      headerlines.push(line);
      if (line === "") {
        inHeader = false;
      }
    } else {
      bodylines.push(line);
    }
  }
  return { config: extractSearchQueryFromLines(headerlines), text: bodylines.join("\n") };
};
class SearchConfigurationModel {
  constructor(config) {
    this.config = config;
    this._onConfigDidUpdate = new Emitter();
    this.onConfigDidUpdate = this._onConfigDidUpdate.event;
  }
  updateConfig(config) {
    this.config = config;
    this._onConfigDidUpdate.fire(config);
  }
}
class SearchEditorModel {
  constructor(resource) {
    this.resource = resource;
  }
  async resolve() {
    return assertIsDefined(searchEditorModelFactory.models.get(this.resource)).resolve();
  }
}
class SearchEditorModelFactory {
  constructor() {
    this.models = new ResourceMap();
  }
  initializeModelFromExistingModel(accessor, resource, config) {
    if (this.models.has(resource)) {
      throw Error("Unable to contruct model for resource that already exists");
    }
    const languageService = accessor.get(ILanguageService);
    const modelService = accessor.get(IModelService);
    const instantiationService = accessor.get(IInstantiationService);
    const workingCopyBackupService = accessor.get(IWorkingCopyBackupService);
    let ongoingResolve;
    this.models.set(resource, {
      resolve: () => {
        if (!ongoingResolve) {
          ongoingResolve = (async () => {
            const backup = await this.tryFetchModelFromBackupService(resource, languageService, modelService, workingCopyBackupService, instantiationService);
            if (backup) {
              return backup;
            }
            return Promise.resolve({
              resultsModel: modelService.getModel(resource) ?? modelService.createModel("", languageService.createById("search-result"), resource),
              configurationModel: new SearchConfigurationModel(config)
            });
          })();
        }
        return ongoingResolve;
      }
    });
  }
  initializeModelFromRawData(accessor, resource, config, contents) {
    if (this.models.has(resource)) {
      throw Error("Unable to contruct model for resource that already exists");
    }
    const languageService = accessor.get(ILanguageService);
    const modelService = accessor.get(IModelService);
    const instantiationService = accessor.get(IInstantiationService);
    const workingCopyBackupService = accessor.get(IWorkingCopyBackupService);
    let ongoingResolve;
    this.models.set(resource, {
      resolve: () => {
        if (!ongoingResolve) {
          ongoingResolve = (async () => {
            const backup = await this.tryFetchModelFromBackupService(resource, languageService, modelService, workingCopyBackupService, instantiationService);
            if (backup) {
              return backup;
            }
            return Promise.resolve({
              resultsModel: modelService.createModel(contents ?? "", languageService.createById("search-result"), resource),
              configurationModel: new SearchConfigurationModel(config)
            });
          })();
        }
        return ongoingResolve;
      }
    });
  }
  initializeModelFromExistingFile(accessor, resource, existingFile) {
    if (this.models.has(resource)) {
      throw Error("Unable to contruct model for resource that already exists");
    }
    const languageService = accessor.get(ILanguageService);
    const modelService = accessor.get(IModelService);
    const instantiationService = accessor.get(IInstantiationService);
    const workingCopyBackupService = accessor.get(IWorkingCopyBackupService);
    let ongoingResolve;
    this.models.set(resource, {
      resolve: async () => {
        if (!ongoingResolve) {
          ongoingResolve = (async () => {
            const backup = await this.tryFetchModelFromBackupService(resource, languageService, modelService, workingCopyBackupService, instantiationService);
            if (backup) {
              return backup;
            }
            const { text, config } = await instantiationService.invokeFunction(parseSavedSearchEditor, existingFile);
            return {
              resultsModel: modelService.createModel(text ?? "", languageService.createById("search-result"), resource),
              configurationModel: new SearchConfigurationModel(config)
            };
          })();
        }
        return ongoingResolve;
      }
    });
  }
  async tryFetchModelFromBackupService(resource, languageService, modelService, workingCopyBackupService, instantiationService) {
    const backup = await workingCopyBackupService.resolve({ resource, typeId: SearchEditorWorkingCopyTypeId });
    let model = modelService.getModel(resource);
    if (!model && backup) {
      const factory = await createTextBufferFactoryFromStream(backup.value);
      model = modelService.createModel(factory, languageService.createById("search-result"), resource);
    }
    if (model) {
      const existingFile = model.getValue();
      const { text, config } = parseSerializedSearchEditor(existingFile);
      modelService.destroyModel(resource);
      return {
        resultsModel: modelService.createModel(text ?? "", languageService.createById("search-result"), resource),
        configurationModel: new SearchConfigurationModel(config)
      };
    } else {
      return void 0;
    }
  }
}
const searchEditorModelFactory = new SearchEditorModelFactory();
const SEARCH_EDITOR_EXT = ".code-search";
let SearchEditorInput = (_j = class extends EditorInput {
  get typeId() {
    return _j.ID;
  }
  get editorId() {
    return this.typeId;
  }
  get capabilities() {
    let capabilities = 8;
    if (!this.backingUri) {
      capabilities |= 4;
    }
    return capabilities;
  }
  get resource() {
    return this.backingUri || this.modelUri;
  }
  constructor(modelUri, backingUri, modelService, textFileService, fileDialogService, instantiationService, workingCopyService, telemetryService, pathService, storageService) {
    super();
    this.modelUri = modelUri;
    this.backingUri = backingUri;
    this.modelService = modelService;
    this.textFileService = textFileService;
    this.fileDialogService = fileDialogService;
    this.instantiationService = instantiationService;
    this.workingCopyService = workingCopyService;
    this.telemetryService = telemetryService;
    this.pathService = pathService;
    this.dirty = false;
    this._onDidChangeContent = this._register(new Emitter());
    this.onDidChangeContent = this._onDidChangeContent.event;
    this._onDidSave = this._register(new Emitter());
    this.onDidSave = this._onDidSave.event;
    this.oldDecorationsIDs = [];
    this.model = instantiationService.createInstance(SearchEditorModel, modelUri);
    if (this.modelUri.scheme !== SearchEditorScheme) {
      throw Error("SearchEditorInput must be invoked with a SearchEditorScheme uri");
    }
    this.memento = new Memento(_j.ID, storageService);
    storageService.onWillSaveState(() => this.memento.saveMemento());
    const input = this;
    const workingCopyAdapter = new class {
      constructor() {
        this.typeId = SearchEditorWorkingCopyTypeId;
        this.resource = input.modelUri;
        this.capabilities = input.hasCapability(4) ? 2 : 0;
        this.onDidChangeDirty = input.onDidChangeDirty;
        this.onDidChangeContent = input.onDidChangeContent;
        this.onDidSave = input.onDidSave;
      }
      get name() {
        return input.getName();
      }
      isDirty() {
        return input.isDirty();
      }
      isModified() {
        return input.isDirty();
      }
      backup(token) {
        return input.backup(token);
      }
      save(options) {
        return input.save(0, options).then((editor) => !!editor);
      }
      revert(options) {
        return input.revert(0, options);
      }
    }();
    this._register(this.workingCopyService.registerWorkingCopy(workingCopyAdapter));
  }
  async save(group, options) {
    if ((await this.resolveModels()).resultsModel.isDisposed()) {
      return;
    }
    if (this.backingUri) {
      await this.textFileService.write(this.backingUri, await this.serializeForDisk(), options);
      this.setDirty(false);
      this._onDidSave.fire({ reason: options == null ? void 0 : options.reason, source: options == null ? void 0 : options.source });
      return this;
    } else {
      return this.saveAs(group, options);
    }
  }
  tryReadConfigSync() {
    var _a2;
    return (_a2 = this._cachedConfigurationModel) == null ? void 0 : _a2.config;
  }
  async serializeForDisk() {
    const { configurationModel, resultsModel } = await this.resolveModels();
    return serializeSearchConfiguration(configurationModel.config) + "\n" + resultsModel.getValue();
  }
  registerConfigChangeListeners(model) {
    var _a2;
    (_a2 = this.configChangeListenerDisposable) == null ? void 0 : _a2.dispose();
    if (!this.isDisposed()) {
      this.configChangeListenerDisposable = model.onConfigDidUpdate(() => {
        if (this.lastLabel !== this.getName()) {
          this._onDidChangeLabel.fire();
          this.lastLabel = this.getName();
        }
        this.memento.getMemento(1, 1).searchConfig = model.config;
      });
      this._register(this.configChangeListenerDisposable);
    }
  }
  async resolveModels() {
    return this.model.resolve().then((data) => {
      this._cachedResultsModel = data.resultsModel;
      this._cachedConfigurationModel = data.configurationModel;
      if (this.lastLabel !== this.getName()) {
        this._onDidChangeLabel.fire();
        this.lastLabel = this.getName();
      }
      this.registerConfigChangeListeners(data.configurationModel);
      return data;
    });
  }
  async saveAs(group, options) {
    const path = await this.fileDialogService.pickFileToSave(await this.suggestFileName(), options == null ? void 0 : options.availableFileSystems);
    if (path) {
      this.telemetryService.publicLog2("searchEditor/saveSearchResults");
      const toWrite = await this.serializeForDisk();
      if (await this.textFileService.create([{ resource: path, value: toWrite, options: { overwrite: true } }])) {
        this.setDirty(false);
        if (!isEqual(path, this.modelUri)) {
          const input = this.instantiationService.invokeFunction(getOrMakeSearchEditorInput, { fileUri: path, from: "existingFile" });
          input.setMatchRanges(this.getMatchRanges());
          return input;
        }
        return this;
      }
    }
    return void 0;
  }
  getName(maxLength = 12) {
    var _a2, _b2, _c2;
    const trimToMax = (label) => label.length < maxLength ? label : `${label.slice(0, maxLength - 3)}...`;
    if (this.backingUri) {
      const originalURI = EditorResourceAccessor.getOriginalUri(this);
      return localize(
        "searchTitle.withQuery",
        "Search: {0}",
        basename((originalURI ?? this.backingUri).path, SEARCH_EDITOR_EXT)
      );
    }
    const query = (_c2 = (_b2 = (_a2 = this._cachedConfigurationModel) == null ? void 0 : _a2.config) == null ? void 0 : _b2.query) == null ? void 0 : _c2.trim();
    if (query) {
      return localize("searchTitle.withQuery", "Search: {0}", trimToMax(query));
    }
    return localize("searchTitle", "Search");
  }
  setDirty(dirty) {
    const wasDirty = this.dirty;
    this.dirty = dirty;
    if (wasDirty !== dirty) {
      this._onDidChangeDirty.fire();
    }
  }
  isDirty() {
    return this.dirty;
  }
  async rename(group, target) {
    if (extname(target) === SEARCH_EDITOR_EXT) {
      return {
        editor: this.instantiationService.invokeFunction(getOrMakeSearchEditorInput, { from: "existingFile", fileUri: target })
      };
    }
    return void 0;
  }
  dispose() {
    this.modelService.destroyModel(this.modelUri);
    super.dispose();
  }
  matches(other) {
    if (super.matches(other)) {
      return true;
    }
    if (other instanceof _j) {
      return !!(other.modelUri.fragment && other.modelUri.fragment === this.modelUri.fragment) || !!(other.backingUri && isEqual(other.backingUri, this.backingUri));
    }
    return false;
  }
  getMatchRanges() {
    var _a2;
    return (((_a2 = this._cachedResultsModel) == null ? void 0 : _a2.getAllDecorations()) ?? []).filter((decoration) => decoration.options.className === SearchEditorFindMatchClass).filter(({ range }) => !(range.startColumn === 1 && range.endColumn === 1)).map(({ range }) => range);
  }
  async setMatchRanges(ranges) {
    this.oldDecorationsIDs = (await this.resolveModels()).resultsModel.deltaDecorations(this.oldDecorationsIDs, ranges.map(
      (range) => ({ range, options: { description: "search-editor-find-match", className: SearchEditorFindMatchClass, stickiness: 1 } })
    ));
  }
  async revert(group, options) {
    if (options == null ? void 0 : options.soft) {
      this.setDirty(false);
      return;
    }
    if (this.backingUri) {
      const { config, text } = await this.instantiationService.invokeFunction(parseSavedSearchEditor, this.backingUri);
      const { resultsModel, configurationModel } = await this.resolveModels();
      resultsModel.setValue(text);
      configurationModel.updateConfig(config);
    } else {
      (await this.resolveModels()).resultsModel.setValue("");
    }
    super.revert(group, options);
    this.setDirty(false);
  }
  async backup(token) {
    const contents = await this.serializeForDisk();
    if (token.isCancellationRequested) {
      return {};
    }
    return {
      content: bufferToReadable(VSBuffer.fromString(contents))
    };
  }
  async suggestFileName() {
    const query = (await this.resolveModels()).configurationModel.config.query;
    const searchFileName = (query.replace(/[^\w \-_]+/g, "_") || "Search") + SEARCH_EDITOR_EXT;
    return joinPath(await this.fileDialogService.defaultFilePath(this.pathService.defaultUriScheme), searchFileName);
  }
  toUntyped() {
    if (this.hasCapability(4)) {
      return void 0;
    }
    return {
      resource: this.resource,
      options: {
        override: _j.ID
      }
    };
  }
}, _j.ID = SearchEditorInputTypeId, _j);
SearchEditorInput = __decorate([
  __param(2, IModelService),
  __param(3, ITextFileService),
  __param(4, IFileDialogService),
  __param(5, IInstantiationService),
  __param(6, IWorkingCopyService),
  __param(7, ITelemetryService),
  __param(8, IPathService),
  __param(9, IStorageService)
], SearchEditorInput);
const getOrMakeSearchEditorInput = (accessor, existingData) => {
  var _a2;
  const storageService = accessor.get(IStorageService);
  const configurationService = accessor.get(IConfigurationService);
  const instantiationService = accessor.get(IInstantiationService);
  const modelUri = existingData.from === "model" ? existingData.modelUri : URI.from({ scheme: SearchEditorScheme, fragment: `${Math.random()}` });
  if (!searchEditorModelFactory.models.has(modelUri)) {
    if (existingData.from === "existingFile") {
      instantiationService.invokeFunction((accessor2) => searchEditorModelFactory.initializeModelFromExistingFile(accessor2, modelUri, existingData.fileUri));
    } else {
      const searchEditorSettings = configurationService.getValue("search").searchEditor;
      const reuseOldSettings = searchEditorSettings.reusePriorSearchConfiguration;
      const defaultNumberOfContextLines = searchEditorSettings.defaultNumberOfContextLines;
      const priorConfig = reuseOldSettings ? new Memento(SearchEditorInput.ID, storageService).getMemento(1, 1).searchConfig : {};
      const defaultConfig = defaultSearchConfig();
      const config = { ...defaultConfig, ...priorConfig, ...existingData.config };
      if (defaultNumberOfContextLines !== null && defaultNumberOfContextLines !== void 0) {
        config.contextLines = ((_a2 = existingData == null ? void 0 : existingData.config) == null ? void 0 : _a2.contextLines) ?? defaultNumberOfContextLines;
      }
      if (existingData.from === "rawData") {
        if (existingData.resultsContents) {
          config.contextLines = 0;
        }
        instantiationService.invokeFunction((accessor2) => searchEditorModelFactory.initializeModelFromRawData(accessor2, modelUri, config, existingData.resultsContents));
      } else {
        instantiationService.invokeFunction((accessor2) => searchEditorModelFactory.initializeModelFromExistingModel(accessor2, modelUri, config));
      }
    }
  }
  return instantiationService.createInstance(SearchEditorInput, modelUri, existingData.from === "existingFile" ? existingData.fileUri : existingData.from === "model" ? existingData.backupOf : void 0);
};
const toggleSearchEditorCaseSensitiveCommand = (accessor) => {
  const editorService = accessor.get(IEditorService);
  const input = editorService.activeEditor;
  if (input instanceof SearchEditorInput) {
    editorService.activeEditorPane.toggleCaseSensitive();
  }
};
const toggleSearchEditorWholeWordCommand = (accessor) => {
  const editorService = accessor.get(IEditorService);
  const input = editorService.activeEditor;
  if (input instanceof SearchEditorInput) {
    editorService.activeEditorPane.toggleWholeWords();
  }
};
const toggleSearchEditorRegexCommand = (accessor) => {
  const editorService = accessor.get(IEditorService);
  const input = editorService.activeEditor;
  if (input instanceof SearchEditorInput) {
    editorService.activeEditorPane.toggleRegex();
  }
};
const toggleSearchEditorContextLinesCommand = (accessor) => {
  const editorService = accessor.get(IEditorService);
  const input = editorService.activeEditor;
  if (input instanceof SearchEditorInput) {
    editorService.activeEditorPane.toggleContextLines();
  }
};
const modifySearchEditorContextLinesCommand = (accessor, increase) => {
  const editorService = accessor.get(IEditorService);
  const input = editorService.activeEditor;
  if (input instanceof SearchEditorInput) {
    editorService.activeEditorPane.modifyContextLines(increase);
  }
};
const selectAllSearchEditorMatchesCommand = (accessor) => {
  const editorService = accessor.get(IEditorService);
  const input = editorService.activeEditor;
  if (input instanceof SearchEditorInput) {
    editorService.activeEditorPane.focusAllResults();
  }
};
async function openSearchEditor(accessor) {
  var _a2, _b2, _c2;
  const viewsService = accessor.get(IViewsService);
  const instantiationService = accessor.get(IInstantiationService);
  const searchView = getSearchView(viewsService);
  if (searchView) {
    await instantiationService.invokeFunction(openNewSearchEditor, {
      filesToInclude: searchView.searchIncludePattern.getValue(),
      onlyOpenEditors: searchView.searchIncludePattern.onlySearchInOpenEditors(),
      filesToExclude: searchView.searchExcludePattern.getValue(),
      isRegexp: (_a2 = searchView.searchAndReplaceWidget.searchInput) == null ? void 0 : _a2.getRegex(),
      isCaseSensitive: (_b2 = searchView.searchAndReplaceWidget.searchInput) == null ? void 0 : _b2.getCaseSensitive(),
      matchWholeWord: (_c2 = searchView.searchAndReplaceWidget.searchInput) == null ? void 0 : _c2.getWholeWords(),
      useExcludeSettingsAndIgnoreFiles: searchView.searchExcludePattern.useExcludesAndIgnoreFiles(),
      showIncludesExcludes: !!(searchView.searchIncludePattern.getValue() || searchView.searchExcludePattern.getValue() || !searchView.searchExcludePattern.useExcludesAndIgnoreFiles())
    });
  } else {
    await instantiationService.invokeFunction(openNewSearchEditor);
  }
}
const openNewSearchEditor = async (accessor, _args = {}, toSide = false) => {
  var _a2, _b2;
  const editorService = accessor.get(IEditorService);
  const editorGroupsService = accessor.get(IEditorGroupsService);
  const telemetryService = accessor.get(ITelemetryService);
  const instantiationService = accessor.get(IInstantiationService);
  const configurationService = accessor.get(IConfigurationService);
  const configurationResolverService = accessor.get(IConfigurationResolverService);
  const workspaceContextService = accessor.get(IWorkspaceContextService);
  const historyService = accessor.get(IHistoryService);
  const activeWorkspaceRootUri = historyService.getLastActiveWorkspaceRoot(Schemas.file);
  const lastActiveWorkspaceRoot = activeWorkspaceRootUri ? withNullAsUndefined(workspaceContextService.getWorkspaceFolder(activeWorkspaceRootUri)) : void 0;
  const activeEditorControl = editorService.activeTextEditorControl;
  let activeModel;
  let selected = "";
  if (activeEditorControl) {
    if (isDiffEditor(activeEditorControl)) {
      if (activeEditorControl.getOriginalEditor().hasTextFocus()) {
        activeModel = activeEditorControl.getOriginalEditor();
      } else {
        activeModel = activeEditorControl.getModifiedEditor();
      }
    } else {
      activeModel = activeEditorControl;
    }
    const selection = activeModel == null ? void 0 : activeModel.getSelection();
    selected = (selection && ((_a2 = activeModel == null ? void 0 : activeModel.getModel()) == null ? void 0 : _a2.getValueInRange(selection))) ?? "";
    if ((selection == null ? void 0 : selection.isEmpty()) && configurationService.getValue("search").seedWithNearestWord) {
      const wordAtPosition = (_b2 = activeModel.getModel()) == null ? void 0 : _b2.getWordAtPosition(selection.getStartPosition());
      if (wordAtPosition) {
        selected = wordAtPosition.word;
      }
    }
  } else {
    if (editorService.activeEditor instanceof SearchEditorInput) {
      const active = editorService.activeEditorPane;
      selected = active.getSelected();
    }
  }
  telemetryService.publicLog2("searchEditor/openNewSearchEditor");
  const seedSearchStringFromSelection = _args.location === "new" || configurationService.getValue("editor").find.seedSearchStringFromSelection;
  const args = { query: seedSearchStringFromSelection ? selected : void 0 };
  for (const entry of Object.entries(_args)) {
    const name = entry[0];
    const value = entry[1];
    if (value !== void 0) {
      args[name] = typeof value === "string" ? await configurationResolverService.resolveAsync(lastActiveWorkspaceRoot, value) : value;
    }
  }
  const existing = editorService.getEditors(0).find((id) => id.editor.typeId === SearchEditorInput.ID);
  let editor;
  if (existing && args.location === "reuse") {
    const group = editorGroupsService.getGroup(existing.groupId);
    if (!group) {
      throw new Error("Invalid group id for search editor");
    }
    const input = existing.editor;
    editor = await group.openEditor(input);
    if (selected) {
      editor.setQuery(selected);
    } else {
      editor.selectQuery();
    }
    editor.setSearchConfig(args);
  } else {
    const input = instantiationService.invokeFunction(getOrMakeSearchEditorInput, { config: args, resultsContents: "", from: "rawData" });
    editor = await editorService.openEditor(input, { pinned: true }, toSide ? SIDE_GROUP : ACTIVE_GROUP);
  }
  const searchOnType = configurationService.getValue("search").searchOnType;
  if (args.triggerSearch === true || args.triggerSearch !== false && searchOnType && args.query) {
    editor.triggerSearch({ focusResults: args.focusResults });
  }
  if (!args.focusResults) {
    editor.focusSearchInput();
  }
};
const createEditorFromSearchResult = async (accessor, searchResult, rawIncludePattern, rawExcludePattern, onlySearchInOpenEditors) => {
  if (!searchResult.query) {
    console.error("Expected searchResult.query to be defined. Got", searchResult);
    return;
  }
  const editorService = accessor.get(IEditorService);
  const telemetryService = accessor.get(ITelemetryService);
  const instantiationService = accessor.get(IInstantiationService);
  const labelService = accessor.get(ILabelService);
  const configurationService = accessor.get(IConfigurationService);
  const sortOrder = configurationService.getValue("search").sortOrder;
  telemetryService.publicLog2("searchEditor/createEditorFromSearchResult");
  const labelFormatter = (uri) => labelService.getUriLabel(uri, { relative: true });
  const { text, matchRanges, config } = serializeSearchResultForEditor(searchResult, rawIncludePattern, rawExcludePattern, 0, labelFormatter, sortOrder);
  config.onlyOpenEditors = onlySearchInOpenEditors;
  const contextLines = configurationService.getValue("search").searchEditor.defaultNumberOfContextLines;
  if (searchResult.isDirty || contextLines === 0 || contextLines === null) {
    const input = instantiationService.invokeFunction(getOrMakeSearchEditorInput, { resultsContents: text, config, from: "rawData" });
    await editorService.openEditor(input, { pinned: true });
    input.setMatchRanges(matchRanges);
  } else {
    const input = instantiationService.invokeFunction(getOrMakeSearchEditorInput, { from: "rawData", resultsContents: "", config: { ...config, contextLines } });
    const editor = await editorService.openEditor(input, { pinned: true });
    editor.triggerSearch({ focusResults: true });
  }
};
const $ = $$1;
const SEARCH_CANCELLED_MESSAGE = localize(
  "searchCanceled",
  "Search was canceled before any results could be found - "
);
const DEBOUNCE_DELAY = 75;
let SearchView = (_k = class extends ViewPane {
  constructor(options, fileService, editorService, codeEditorService, progressService, notificationService, dialogService, commandService, contextViewService, instantiationService, viewDescriptorService, configurationService, contextService, searchWorkbenchService, contextKeyService, replaceService, textFileService, preferencesService, themeService, searchHistoryService, contextMenuService, accessibilityService, keybindingService, storageService, openerService, telemetryService, notebookService, logService) {
    super(options, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, telemetryService);
    this.fileService = fileService;
    this.editorService = editorService;
    this.codeEditorService = codeEditorService;
    this.progressService = progressService;
    this.notificationService = notificationService;
    this.dialogService = dialogService;
    this.commandService = commandService;
    this.contextViewService = contextViewService;
    this.contextService = contextService;
    this.searchWorkbenchService = searchWorkbenchService;
    this.replaceService = replaceService;
    this.textFileService = textFileService;
    this.preferencesService = preferencesService;
    this.searchHistoryService = searchHistoryService;
    this.accessibilityService = accessibilityService;
    this.storageService = storageService;
    this.notebookService = notebookService;
    this.logService = logService;
    this.isDisposed = false;
    this.lastFocusState = "input";
    this.messageDisposables = new DisposableStore();
    this.changedWhileHidden = false;
    this.currentSearchQ = Promise.resolve();
    this.pauseSearching = false;
    this._visibleMatches = 0;
    this.container = $$1(".search-view");
    this.viewletVisible = SearchViewVisibleKey.bindTo(this.contextKeyService);
    this.firstMatchFocused = FirstMatchFocusKey.bindTo(this.contextKeyService);
    this.fileMatchOrMatchFocused = FileMatchOrMatchFocusKey.bindTo(this.contextKeyService);
    this.fileMatchOrFolderMatchFocus = FileMatchOrFolderMatchFocusKey.bindTo(this.contextKeyService);
    this.fileMatchOrFolderMatchWithResourceFocus = FileMatchOrFolderMatchWithResourceFocusKey.bindTo(this.contextKeyService);
    this.fileMatchFocused = FileFocusKey.bindTo(this.contextKeyService);
    this.folderMatchFocused = FolderFocusKey.bindTo(this.contextKeyService);
    this.folderMatchWithResourceFocused = ResourceFolderFocusKey.bindTo(this.contextKeyService);
    this.hasSearchResultsKey = HasSearchResults.bindTo(this.contextKeyService);
    this.matchFocused = MatchFocusKey.bindTo(this.contextKeyService);
    this.searchStateKey = SearchStateKey.bindTo(this.contextKeyService);
    this.hasSearchPatternKey = ViewHasSearchPatternKey.bindTo(this.contextKeyService);
    this.hasReplacePatternKey = ViewHasReplacePatternKey.bindTo(this.contextKeyService);
    this.hasFilePatternKey = ViewHasFilePatternKey.bindTo(this.contextKeyService);
    this.hasSomeCollapsibleResultKey = ViewHasSomeCollapsibleKey.bindTo(this.contextKeyService);
    this.treeViewKey = InTreeViewKey.bindTo(this.contextKeyService);
    this.contextKeyService = this._register(this.contextKeyService.createScoped(this.container));
    SearchViewFocusedKey.bindTo(this.contextKeyService).set(true);
    this.inputBoxFocused = InputBoxFocusedKey.bindTo(this.contextKeyService);
    this.inputPatternIncludesFocused = PatternIncludesFocusedKey.bindTo(this.contextKeyService);
    this.inputPatternExclusionsFocused = PatternExcludesFocusedKey.bindTo(this.contextKeyService);
    this.isEditableItem = IsEditableItemKey.bindTo(this.contextKeyService);
    this.instantiationService = this.instantiationService.createChild(new ServiceCollection([IContextKeyService, this.contextKeyService]));
    this.configurationService.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("search.sortOrder")) {
        if (this.searchConfig.sortOrder === "modified") {
          this.removeFileStats();
        }
        this.refreshTree();
      }
    });
    this.viewModel = this._register(this.searchWorkbenchService.searchModel);
    this.queryBuilder = this.instantiationService.createInstance(QueryBuilder);
    this.memento = new Memento(this.id, storageService);
    this.viewletState = this.memento.getMemento(1, 1);
    this._register(this.fileService.onDidFilesChange((e) => this.onFilesChanged(e)));
    this._register(this.textFileService.untitled.onWillDispose((model) => this.onUntitledDidDispose(model.resource)));
    this._register(this.contextService.onDidChangeWorkbenchState(() => this.onDidChangeWorkbenchState()));
    this._register(this.searchHistoryService.onDidClearHistory(() => this.clearHistory()));
    this._register(this.configurationService.onDidChangeConfiguration((e) => this.onConfigurationUpdated(e)));
    this.delayedRefresh = this._register(new Delayer(250));
    this.addToSearchHistoryDelayer = this._register(new Delayer(2e3));
    this.toggleCollapseStateDelayer = this._register(new Delayer(100));
    this.triggerQueryDelayer = this._register(new Delayer(0));
    this.treeAccessibilityProvider = this.instantiationService.createInstance(SearchAccessibilityProvider, this.viewModel);
    this.isTreeLayoutViewVisible = this.viewletState["view.treeLayout"] ?? this.searchConfig.defaultViewMode === "tree";
    this._refreshResultsScheduler = this._register(new RunOnceScheduler(this._updateResults.bind(this), 80));
    this._register(this.storageService.onWillSaveState(() => {
      this._saveSearchHistoryService();
    }));
    this._register(this.storageService.onDidChangeValue((v) => {
      if (v.key === SearchHistoryService.SEARCH_HISTORY_KEY) {
        const restoredHistory = this.searchHistoryService.load();
        if (restoredHistory.include) {
          this.inputPatternIncludes.prependHistory(restoredHistory.include);
        }
        if (restoredHistory.exclude) {
          this.inputPatternExcludes.prependHistory(restoredHistory.exclude);
        }
        if (restoredHistory.search) {
          this.searchWidget.prependSearchHistory(restoredHistory.search);
        }
        if (restoredHistory.replace) {
          this.searchWidget.prependReplaceHistory(restoredHistory.replace);
        }
      }
    }));
  }
  get isTreeLayoutViewVisible() {
    return this.treeViewKey.get() ?? false;
  }
  set isTreeLayoutViewVisible(visible) {
    this.treeViewKey.set(visible);
  }
  setTreeView(visible) {
    if (visible === this.isTreeLayoutViewVisible) {
      return;
    }
    this.isTreeLayoutViewVisible = visible;
    this.updateIndentStyles(this.themeService.getFileIconTheme());
    this.refreshTree();
  }
  get state() {
    return this.searchStateKey.get() ?? SearchUIState.Idle;
  }
  set state(v) {
    this.searchStateKey.set(v);
  }
  getContainer() {
    return this.container;
  }
  get searchResult() {
    return this.viewModel && this.viewModel.searchResult;
  }
  onDidChangeWorkbenchState() {
    if (this.contextService.getWorkbenchState() !== 1 && this.searchWithoutFolderMessageElement) {
      hide(this.searchWithoutFolderMessageElement);
    }
  }
  renderBody(parent) {
    super.renderBody(parent);
    this.container = append(parent, $$1(".search-view"));
    this.searchWidgetsContainerElement = append(this.container, $(".search-widgets-container"));
    this.createSearchWidget(this.searchWidgetsContainerElement);
    const history = this.searchHistoryService.load();
    const filePatterns = this.viewletState["query.filePatterns"] || "";
    const patternExclusions = this.viewletState["query.folderExclusions"] || "";
    const patternExclusionsHistory = history.exclude || [];
    const patternIncludes = this.viewletState["query.folderIncludes"] || "";
    const patternIncludesHistory = history.include || [];
    const onlyOpenEditors = this.viewletState["query.onlyOpenEditors"] || false;
    const queryDetailsExpanded = this.viewletState["query.queryDetailsExpanded"] || "";
    const useExcludesAndIgnoreFiles = typeof this.viewletState["query.useExcludesAndIgnoreFiles"] === "boolean" ? this.viewletState["query.useExcludesAndIgnoreFiles"] : true;
    this.queryDetails = append(this.searchWidgetsContainerElement, $(".query-details"));
    this.toggleQueryDetailsButton = append(this.queryDetails, $(".more" + ThemeIcon.asCSSSelector(searchDetailsIcon), { tabindex: 0, role: "button", title: localize("moreSearch", "Toggle Search Details") }));
    this._register(addDisposableListener(this.toggleQueryDetailsButton, EventType.CLICK, (e) => {
      EventHelper.stop(e);
      this.toggleQueryDetails(!this.accessibilityService.isScreenReaderOptimized());
    }));
    this._register(addDisposableListener(this.toggleQueryDetailsButton, EventType.KEY_UP, (e) => {
      const event = new StandardKeyboardEvent(e);
      if (event.equals(3) || event.equals(10)) {
        EventHelper.stop(e);
        this.toggleQueryDetails(false);
      }
    }));
    this._register(addDisposableListener(this.toggleQueryDetailsButton, EventType.KEY_DOWN, (e) => {
      var _a2;
      const event = new StandardKeyboardEvent(e);
      if (event.equals(1024 | 2)) {
        if (this.searchWidget.isReplaceActive()) {
          this.searchWidget.focusReplaceAllAction();
        } else {
          this.searchWidget.isReplaceShown() ? (_a2 = this.searchWidget.replaceInput) == null ? void 0 : _a2.focusOnPreserve() : this.searchWidget.focusRegexAction();
        }
        EventHelper.stop(e);
      }
    }));
    const folderIncludesList = append(this.queryDetails, $(".file-types.includes"));
    const filesToIncludeTitle = localize("searchScope.includes", "files to include");
    append(folderIncludesList, $("h4", void 0, filesToIncludeTitle));
    this.inputPatternIncludes = this._register(this.instantiationService.createInstance(IncludePatternInputWidget, folderIncludesList, this.contextViewService, {
      ariaLabel: filesToIncludeTitle,
      placeholder: localize("placeholder.includes", "e.g. *.ts, src/**/include"),
      showPlaceholderOnFocus: true,
      history: patternIncludesHistory,
      inputBoxStyles: defaultInputBoxStyles
    }));
    this.inputPatternIncludes.setValue(patternIncludes);
    this.inputPatternIncludes.setOnlySearchInOpenEditors(onlyOpenEditors);
    this._register(this.inputPatternIncludes.onCancel(() => this.cancelSearch(false)));
    this._register(this.inputPatternIncludes.onChangeSearchInEditorsBox(() => this.triggerQueryChange()));
    this.trackInputBox(this.inputPatternIncludes.inputFocusTracker, this.inputPatternIncludesFocused);
    const excludesList = append(this.queryDetails, $(".file-types.excludes"));
    const excludesTitle = localize("searchScope.excludes", "files to exclude");
    append(excludesList, $("h4", void 0, excludesTitle));
    this.inputPatternExcludes = this._register(this.instantiationService.createInstance(ExcludePatternInputWidget, excludesList, this.contextViewService, {
      ariaLabel: excludesTitle,
      placeholder: localize("placeholder.excludes", "e.g. *.ts, src/**/exclude"),
      showPlaceholderOnFocus: true,
      history: patternExclusionsHistory,
      inputBoxStyles: defaultInputBoxStyles
    }));
    this.inputPatternExcludes.setValue(patternExclusions);
    this.inputPatternExcludes.setUseExcludesAndIgnoreFiles(useExcludesAndIgnoreFiles);
    this._register(this.inputPatternExcludes.onCancel(() => this.cancelSearch(false)));
    this._register(this.inputPatternExcludes.onChangeIgnoreBox(() => this.triggerQueryChange()));
    this.trackInputBox(this.inputPatternExcludes.inputFocusTracker, this.inputPatternExclusionsFocused);
    const updateHasFilePatternKey = () => this.hasFilePatternKey.set(this.inputPatternIncludes.getValue().length > 0 || this.inputPatternExcludes.getValue().length > 0);
    updateHasFilePatternKey();
    const onFilePatternSubmit = (triggeredOnType) => {
      this.triggerQueryChange({ triggeredOnType, delay: this.searchConfig.searchOnTypeDebouncePeriod });
      if (triggeredOnType) {
        updateHasFilePatternKey();
      }
    };
    this._register(this.inputPatternIncludes.onSubmit(onFilePatternSubmit));
    this._register(this.inputPatternExcludes.onSubmit(onFilePatternSubmit));
    this.messagesElement = append(this.container, $(".messages.text-search-provider-messages"));
    if (this.contextService.getWorkbenchState() === 1) {
      this.showSearchWithoutFolderMessage();
    }
    this.createSearchResultsView(this.container);
    if (filePatterns !== "" || patternExclusions !== "" || patternIncludes !== "" || queryDetailsExpanded !== "" || !useExcludesAndIgnoreFiles) {
      this.toggleQueryDetails(true, true, true);
    }
    this._register(this.viewModel.searchResult.onChange((event) => this.onSearchResultsChanged(event)));
    this._register(this.onDidChangeBodyVisibility((visible) => this.onVisibilityChanged(visible)));
    this.updateIndentStyles(this.themeService.getFileIconTheme());
    this._register(this.themeService.onDidFileIconThemeChange(this.updateIndentStyles, this));
  }
  updateIndentStyles(theme) {
    this.resultsElement.classList.toggle("hide-arrows", this.isTreeLayoutViewVisible && theme.hidesExplorerArrows);
  }
  onVisibilityChanged(visible) {
    var _a2;
    this.viewletVisible.set(visible);
    if (visible) {
      if (this.changedWhileHidden) {
        this.refreshAndUpdateCount();
        this.changedWhileHidden = false;
      }
    } else {
      this.lastFocusState = "input";
    }
    (_a2 = this.viewModel) == null ? void 0 : _a2.searchResult.toggleHighlights(visible);
  }
  get searchAndReplaceWidget() {
    return this.searchWidget;
  }
  get searchIncludePattern() {
    return this.inputPatternIncludes;
  }
  get searchExcludePattern() {
    return this.inputPatternExcludes;
  }
  createSearchWidget(container) {
    const contentPattern = this.viewletState["query.contentPattern"] || "";
    const replaceText = this.viewletState["query.replaceText"] || "";
    const isRegex = this.viewletState["query.regex"] === true;
    const isWholeWords = this.viewletState["query.wholeWords"] === true;
    const isCaseSensitive = this.viewletState["query.caseSensitive"] === true;
    const history = this.searchHistoryService.load();
    const searchHistory = history.search || this.viewletState["query.searchHistory"] || [];
    const replaceHistory = history.replace || this.viewletState["query.replaceHistory"] || [];
    const showReplace = typeof this.viewletState["view.showReplace"] === "boolean" ? this.viewletState["view.showReplace"] : true;
    const preserveCase = this.viewletState["query.preserveCase"] === true;
    const isInNotebookMarkdownInput = this.viewletState["query.isInNotebookMarkdownInput"] ?? true;
    const isInNotebookMarkdownPreview = this.viewletState["query.isInNotebookMarkdownPreview"] ?? true;
    const isInNotebookCellInput = this.viewletState["query.isInNotebookCellInput"] ?? true;
    const isInNotebookCellOutput = this.viewletState["query.isInNotebookCellOutput"] ?? true;
    this.searchWidget = this._register(this.instantiationService.createInstance(SearchWidget, container, {
      value: contentPattern,
      replaceValue: replaceText,
      isRegex,
      isCaseSensitive,
      isWholeWords,
      searchHistory,
      replaceHistory,
      preserveCase,
      inputBoxStyles: defaultInputBoxStyles,
      toggleStyles: defaultToggleStyles,
      notebookOptions: {
        isInNotebookMarkdownInput,
        isInNotebookMarkdownPreview,
        isInNotebookCellInput,
        isInNotebookCellOutput
      }
    }));
    if (!this.searchWidget.searchInput || !this.searchWidget.replaceInput) {
      this.logService.warn(`Cannot fully create search widget. Search or replace input undefined. SearchInput: ${this.searchWidget.searchInput}, ReplaceInput: ${this.searchWidget.replaceInput}`);
      return;
    }
    if (showReplace) {
      this.searchWidget.toggleReplace(true);
    }
    this._register(this.searchWidget.onSearchSubmit((options) => this.triggerQueryChange(options)));
    this._register(this.searchWidget.onSearchCancel(({ focus }) => this.cancelSearch(focus)));
    this._register(this.searchWidget.searchInput.onDidOptionChange(() => this.triggerQueryChange()));
    this._register(this.searchWidget.getNotebookFilters().onDidChange(() => this.triggerQueryChange()));
    const updateHasPatternKey = () => this.hasSearchPatternKey.set(this.searchWidget.searchInput ? this.searchWidget.searchInput.getValue().length > 0 : false);
    updateHasPatternKey();
    this._register(this.searchWidget.searchInput.onDidChange(() => updateHasPatternKey()));
    const updateHasReplacePatternKey = () => this.hasReplacePatternKey.set(this.searchWidget.getReplaceValue().length > 0);
    updateHasReplacePatternKey();
    this._register(this.searchWidget.replaceInput.inputBox.onDidChange(() => updateHasReplacePatternKey()));
    this._register(this.searchWidget.onDidHeightChange(() => this.reLayout()));
    this._register(this.searchWidget.onReplaceToggled(() => this.reLayout()));
    this._register(this.searchWidget.onReplaceStateChange((state) => {
      this.viewModel.replaceActive = state;
      this.refreshTree();
    }));
    this._register(this.searchWidget.onPreserveCaseChange((state) => {
      this.viewModel.preserveCase = state;
      this.refreshTree();
    }));
    this._register(this.searchWidget.onReplaceValueChanged(() => {
      this.viewModel.replaceString = this.searchWidget.getReplaceValue();
      this.delayedRefresh.trigger(() => this.refreshTree());
    }));
    this._register(this.searchWidget.onBlur(() => {
      this.toggleQueryDetailsButton.focus();
    }));
    this._register(this.searchWidget.onReplaceAll(() => this.replaceAll()));
    this.trackInputBox(this.searchWidget.searchInputFocusTracker);
    this.trackInputBox(this.searchWidget.replaceInputFocusTracker);
  }
  onConfigurationUpdated(event) {
    if (event && (event.affectsConfiguration("search.decorations.colors") || event.affectsConfiguration("search.decorations.badges"))) {
      this.refreshTree();
    }
  }
  trackInputBox(inputFocusTracker, contextKey) {
    if (!inputFocusTracker) {
      return;
    }
    this._register(inputFocusTracker.onDidFocus(() => {
      this.lastFocusState = "input";
      this.inputBoxFocused.set(true);
      contextKey == null ? void 0 : contextKey.set(true);
    }));
    this._register(inputFocusTracker.onDidBlur(() => {
      this.inputBoxFocused.set(this.searchWidget.searchInputHasFocus() || this.searchWidget.replaceInputHasFocus() || this.inputPatternIncludes.inputHasFocus() || this.inputPatternExcludes.inputHasFocus());
      contextKey == null ? void 0 : contextKey.set(false);
    }));
  }
  onSearchResultsChanged(event) {
    if (this.isVisible()) {
      return this.refreshAndUpdateCount(event);
    } else {
      this.changedWhileHidden = true;
    }
  }
  refreshAndUpdateCount(event) {
    var _a2;
    this.searchWidget.setReplaceAllActionState(!this.viewModel.searchResult.isEmpty());
    this.updateSearchResultCount(this.viewModel.searchResult.query.userDisabledExcludesAndIgnoreFiles, (_a2 = this.viewModel.searchResult.query) == null ? void 0 : _a2.onlyOpenEditors, event == null ? void 0 : event.clearingAll);
    return this.refreshTree(event);
  }
  refreshTree(event) {
    const collapseResults = this.searchConfig.collapseResults;
    if (!event || event.added || event.removed) {
      if (this.searchConfig.sortOrder === "modified") {
        this.retrieveFileStats().then(() => this.tree.setChildren(null, this.createResultIterator(collapseResults)));
      } else {
        this.tree.setChildren(null, this.createResultIterator(collapseResults));
      }
    } else {
      if (this.searchConfig.sortOrder === "countAscending" || this.searchConfig.sortOrder === "countDescending") {
        this.tree.setChildren(null, this.createResultIterator(collapseResults));
      } else {
        event.elements.forEach((element) => {
          this.tree.setChildren(element, this.createIterator(element, collapseResults));
          this.tree.rerender(element);
        });
      }
    }
  }
  createResultIterator(collapseResults) {
    const folderMatches = this.searchResult.folderMatches().filter((fm) => !fm.isEmpty()).sort(searchMatchComparer);
    if (folderMatches.length === 1) {
      return this.createFolderIterator(folderMatches[0], collapseResults, true);
    }
    return Iterable.map(folderMatches, (folderMatch) => {
      const children = this.createFolderIterator(folderMatch, collapseResults, true);
      return { element: folderMatch, children, incompressible: true };
    });
  }
  createFolderIterator(folderMatch, collapseResults, childFolderIncompressible) {
    const sortOrder = this.searchConfig.sortOrder;
    const matchArray = this.isTreeLayoutViewVisible ? folderMatch.matches() : folderMatch.allDownstreamFileMatches();
    const matches = matchArray.sort((a, b) => searchMatchComparer(a, b, sortOrder));
    return Iterable.map(matches, (match) => {
      let children;
      if (match instanceof FileMatch$1) {
        children = this.createFileIterator(match);
      } else {
        children = this.createFolderIterator(match, collapseResults, false);
      }
      const collapsed = collapseResults === "alwaysCollapse" || match.count() > 10 && collapseResults !== "alwaysExpand" ? ObjectTreeElementCollapseState.PreserveOrCollapsed : ObjectTreeElementCollapseState.PreserveOrExpanded;
      return { element: match, children, collapsed, incompressible: match instanceof FileMatch$1 ? true : childFolderIncompressible };
    });
  }
  createFileIterator(fileMatch) {
    const matches = fileMatch.matches().sort(searchMatchComparer);
    return Iterable.map(matches, (r) => ({ element: r, incompressible: true }));
  }
  createIterator(match, collapseResults) {
    return match instanceof SearchResult ? this.createResultIterator(collapseResults) : match instanceof FolderMatch ? this.createFolderIterator(match, collapseResults, false) : this.createFileIterator(match);
  }
  replaceAll() {
    if (this.viewModel.searchResult.count() === 0) {
      return;
    }
    const occurrences = this.viewModel.searchResult.count();
    const fileCount = this.viewModel.searchResult.fileCount();
    const replaceValue = this.searchWidget.getReplaceValue() || "";
    const afterReplaceAllMessage = this.buildAfterReplaceAllMessage(occurrences, fileCount, replaceValue);
    let progressComplete;
    let progressReporter;
    this.progressService.withProgress({ location: this.getProgressLocation(), delay: 100, total: occurrences }, (p) => {
      progressReporter = p;
      return new Promise((resolve) => progressComplete = resolve);
    });
    const confirmation = {
      title: localize("replaceAll.confirmation.title", "Replace All"),
      message: this.buildReplaceAllConfirmationMessage(occurrences, fileCount, replaceValue),
      primaryButton: localize(
        { key: "replaceAll.confirm.button", comment: ["&& denotes a mnemonic"] },
        "&&Replace"
      )
    };
    this.dialogService.confirm(confirmation).then((res) => {
      if (res.confirmed) {
        this.searchWidget.setReplaceAllActionState(false);
        this.viewModel.searchResult.replaceAll(progressReporter).then(() => {
          progressComplete();
          const messageEl = this.clearMessage();
          append(messageEl, afterReplaceAllMessage);
          this.reLayout();
        }, (error) => {
          progressComplete();
          isCancellationError(error);
          this.notificationService.error(error);
        });
      } else {
        progressComplete();
      }
    });
  }
  buildAfterReplaceAllMessage(occurrences, fileCount, replaceValue) {
    if (occurrences === 1) {
      if (fileCount === 1) {
        if (replaceValue) {
          return localize(
            "replaceAll.occurrence.file.message",
            "Replaced {0} occurrence across {1} file with '{2}'.",
            occurrences,
            fileCount,
            replaceValue
          );
        }
        return localize(
          "removeAll.occurrence.file.message",
          "Replaced {0} occurrence across {1} file.",
          occurrences,
          fileCount
        );
      }
      if (replaceValue) {
        return localize(
          "replaceAll.occurrence.files.message",
          "Replaced {0} occurrence across {1} files with '{2}'.",
          occurrences,
          fileCount,
          replaceValue
        );
      }
      return localize(
        "removeAll.occurrence.files.message",
        "Replaced {0} occurrence across {1} files.",
        occurrences,
        fileCount
      );
    }
    if (fileCount === 1) {
      if (replaceValue) {
        return localize(
          "replaceAll.occurrences.file.message",
          "Replaced {0} occurrences across {1} file with '{2}'.",
          occurrences,
          fileCount,
          replaceValue
        );
      }
      return localize(
        "removeAll.occurrences.file.message",
        "Replaced {0} occurrences across {1} file.",
        occurrences,
        fileCount
      );
    }
    if (replaceValue) {
      return localize(
        "replaceAll.occurrences.files.message",
        "Replaced {0} occurrences across {1} files with '{2}'.",
        occurrences,
        fileCount,
        replaceValue
      );
    }
    return localize(
      "removeAll.occurrences.files.message",
      "Replaced {0} occurrences across {1} files.",
      occurrences,
      fileCount
    );
  }
  buildReplaceAllConfirmationMessage(occurrences, fileCount, replaceValue) {
    if (occurrences === 1) {
      if (fileCount === 1) {
        if (replaceValue) {
          return localize(
            "removeAll.occurrence.file.confirmation.message",
            "Replace {0} occurrence across {1} file with '{2}'?",
            occurrences,
            fileCount,
            replaceValue
          );
        }
        return localize(
          "replaceAll.occurrence.file.confirmation.message",
          "Replace {0} occurrence across {1} file?",
          occurrences,
          fileCount
        );
      }
      if (replaceValue) {
        return localize(
          "removeAll.occurrence.files.confirmation.message",
          "Replace {0} occurrence across {1} files with '{2}'?",
          occurrences,
          fileCount,
          replaceValue
        );
      }
      return localize(
        "replaceAll.occurrence.files.confirmation.message",
        "Replace {0} occurrence across {1} files?",
        occurrences,
        fileCount
      );
    }
    if (fileCount === 1) {
      if (replaceValue) {
        return localize(
          "removeAll.occurrences.file.confirmation.message",
          "Replace {0} occurrences across {1} file with '{2}'?",
          occurrences,
          fileCount,
          replaceValue
        );
      }
      return localize(
        "replaceAll.occurrences.file.confirmation.message",
        "Replace {0} occurrences across {1} file?",
        occurrences,
        fileCount
      );
    }
    if (replaceValue) {
      return localize(
        "removeAll.occurrences.files.confirmation.message",
        "Replace {0} occurrences across {1} files with '{2}'?",
        occurrences,
        fileCount,
        replaceValue
      );
    }
    return localize(
      "replaceAll.occurrences.files.confirmation.message",
      "Replace {0} occurrences across {1} files?",
      occurrences,
      fileCount
    );
  }
  clearMessage() {
    this.searchWithoutFolderMessageElement = void 0;
    const wasHidden = this.messagesElement.style.display === "none";
    clearNode(this.messagesElement);
    show(this.messagesElement);
    this.messageDisposables.clear();
    const newMessage = append(this.messagesElement, $(".message"));
    if (wasHidden) {
      this.reLayout();
    }
    return newMessage;
  }
  createSearchResultsView(container) {
    this.resultsElement = append(container, $(".results.show-file-icons.file-icon-themable-tree"));
    const delegate = this.instantiationService.createInstance(SearchDelegate);
    const identityProvider = {
      getId(element) {
        return element.id();
      }
    };
    this.treeLabels = this._register(this.instantiationService.createInstance(ResourceLabels, { onDidChangeVisibility: this.onDidChangeBodyVisibility }));
    this.tree = this._register(this.instantiationService.createInstance(WorkbenchCompressibleObjectTree, "SearchView", this.resultsElement, delegate, [
      this._register(this.instantiationService.createInstance(FolderMatchRenderer, this, this.treeLabels)),
      this._register(this.instantiationService.createInstance(FileMatchRenderer, this, this.treeLabels)),
      this._register(this.instantiationService.createInstance(MatchRenderer, this.viewModel, this))
    ], {
      identityProvider,
      accessibilityProvider: this.treeAccessibilityProvider,
      dnd: this.instantiationService.createInstance(ResourceListDnDHandler, (element) => {
        if (element instanceof FileMatch$1) {
          return element.resource;
        }
        if (element instanceof Match) {
          return withSelection(element.parent().resource, element.range());
        }
        return null;
      }),
      multipleSelectionSupport: true,
      selectionNavigation: true,
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      },
      additionalScrollHeight: SearchDelegate.ITEM_HEIGHT
    }));
    this._register(this.tree.onContextMenu((e) => this.onContextMenu(e)));
    const updateHasSomeCollapsible = () => this.toggleCollapseStateDelayer.trigger(() => this.hasSomeCollapsibleResultKey.set(this.hasSomeCollapsible()));
    updateHasSomeCollapsible();
    this._register(this.viewModel.searchResult.onChange(() => updateHasSomeCollapsible()));
    this._register(this.tree.onDidChangeCollapseState(() => updateHasSomeCollapsible()));
    this._register(Event.debounce(this.tree.onDidOpen, (last, event) => event, DEBOUNCE_DELAY, true)((options) => {
      var _a2;
      if (options.element instanceof Match) {
        const selectedMatch = options.element;
        (_a2 = this.currentSelectedFileMatch) == null ? void 0 : _a2.setSelectedMatch(null);
        this.currentSelectedFileMatch = selectedMatch.parent();
        this.currentSelectedFileMatch.setSelectedMatch(selectedMatch);
        this.onFocus(selectedMatch, options.editorOptions.preserveFocus, options.sideBySide, options.editorOptions.pinned);
      }
    }));
    this._register(Event.debounce(this.tree.onDidChangeFocus, (last, event) => event, DEBOUNCE_DELAY, true)(() => {
      const selection = this.tree.getSelection();
      const focus = this.tree.getFocus()[0];
      if (selection.length > 1 && focus instanceof Match) {
        this.onFocus(focus, true);
      }
    }));
    this._register(Event.any(this.tree.onDidFocus, this.tree.onDidChangeFocus)(() => {
      const focus = this.tree.getFocus()[0];
      if (this.tree.isDOMFocused()) {
        this.firstMatchFocused.set(this.tree.navigate().first() === focus);
        this.fileMatchOrMatchFocused.set(!!focus);
        this.fileMatchFocused.set(focus instanceof FileMatch$1);
        this.folderMatchFocused.set(focus instanceof FolderMatch);
        this.matchFocused.set(focus instanceof Match);
        this.fileMatchOrFolderMatchFocus.set(focus instanceof FileMatch$1 || focus instanceof FolderMatch);
        this.fileMatchOrFolderMatchWithResourceFocus.set(focus instanceof FileMatch$1 || focus instanceof FolderMatchWithResource);
        this.folderMatchWithResourceFocused.set(focus instanceof FolderMatchWithResource);
        this.lastFocusState = "tree";
      }
      let editable = false;
      if (focus instanceof MatchInNotebook) {
        editable = !focus.isWebviewMatch();
      } else if (focus instanceof FileMatch$1) {
        editable = !focus.hasOnlyReadOnlyMatches();
      } else if (focus instanceof FolderMatch) {
        editable = !focus.hasOnlyReadOnlyMatches();
      }
      this.isEditableItem.set(editable);
    }));
    this._register(this.tree.onDidBlur(() => {
      this.firstMatchFocused.reset();
      this.fileMatchOrMatchFocused.reset();
      this.fileMatchFocused.reset();
      this.folderMatchFocused.reset();
      this.matchFocused.reset();
      this.fileMatchOrFolderMatchFocus.reset();
      this.fileMatchOrFolderMatchWithResourceFocus.reset();
      this.folderMatchWithResourceFocused.reset();
      this.isEditableItem.reset();
    }));
  }
  onContextMenu(e) {
    e.browserEvent.preventDefault();
    e.browserEvent.stopPropagation();
    this.contextMenuService.showContextMenu({
      menuId: MenuId.SearchContext,
      menuActionOptions: { shouldForwardArgs: true },
      contextKeyService: this.contextKeyService,
      getAnchor: () => e.anchor,
      getActionsContext: () => e.element
    });
  }
  hasSomeCollapsible() {
    const viewer = this.getControl();
    const navigator = viewer.navigate();
    let node = navigator.first();
    do {
      if (!viewer.isCollapsed(node)) {
        return true;
      }
    } while (node = navigator.next());
    return false;
  }
  selectNextMatch() {
    if (!this.hasSearchResults()) {
      return;
    }
    const [selected] = this.tree.getSelection();
    if (selected && !(selected instanceof Match)) {
      if (this.tree.isCollapsed(selected)) {
        this.tree.expand(selected);
      }
    }
    const navigator = this.tree.navigate(selected);
    let next = navigator.next();
    if (!next) {
      next = navigator.first();
    }
    while (next && !(next instanceof Match)) {
      if (this.tree.isCollapsed(next)) {
        this.tree.expand(next);
      }
      next = navigator.next();
    }
    if (next) {
      if (next === selected) {
        this.tree.setFocus([]);
      }
      const event = getSelectionKeyboardEvent(void 0, false, false);
      this.tree.setFocus([next], event);
      this.tree.setSelection([next], event);
      this.tree.reveal(next);
      const ariaLabel = this.treeAccessibilityProvider.getAriaLabel(next);
      if (ariaLabel) {
        status(ariaLabel);
      }
    }
  }
  selectPreviousMatch() {
    if (!this.hasSearchResults()) {
      return;
    }
    const [selected] = this.tree.getSelection();
    let navigator = this.tree.navigate(selected);
    let prev = navigator.previous();
    while (!prev || !(prev instanceof Match) && !this.tree.isCollapsed(prev)) {
      const nextPrev = prev ? navigator.previous() : navigator.last();
      if (!prev && !nextPrev) {
        return;
      }
      prev = nextPrev;
    }
    while (!(prev instanceof Match)) {
      const nextItem = navigator.next();
      this.tree.expand(prev);
      navigator = this.tree.navigate(nextItem);
      prev = nextItem ? navigator.previous() : navigator.last();
    }
    if (prev) {
      if (prev === selected) {
        this.tree.setFocus([]);
      }
      const event = getSelectionKeyboardEvent(void 0, false, false);
      this.tree.setFocus([prev], event);
      this.tree.setSelection([prev], event);
      this.tree.reveal(prev);
      const ariaLabel = this.treeAccessibilityProvider.getAriaLabel(prev);
      if (ariaLabel) {
        status(ariaLabel);
      }
    }
  }
  moveFocusToResults() {
    this.tree.domFocus();
  }
  focus() {
    super.focus();
    if (this.lastFocusState === "input" || !this.hasSearchResults()) {
      const updatedText = this.searchConfig.seedOnFocus ? this.updateTextFromSelection({ allowSearchOnType: false }) : false;
      this.searchWidget.focus(void 0, void 0, updatedText);
    } else {
      this.tree.domFocus();
    }
  }
  updateTextFromFindWidgetOrSelection({ allowUnselectedWord = true, allowSearchOnType = true }) {
    let activeEditor = this.editorService.activeTextEditorControl;
    if (isCodeEditor(activeEditor) && !(activeEditor == null ? void 0 : activeEditor.hasTextFocus())) {
      const controller = CommonFindController.get(activeEditor);
      if (controller && controller.isFindInputFocused()) {
        return this.updateTextFromFindWidget(controller, { allowSearchOnType });
      }
      const editors = this.codeEditorService.listCodeEditors();
      activeEditor = editors.find((editor) => editor instanceof EmbeddedCodeEditorWidget && editor.getParentEditor() === activeEditor && editor.hasTextFocus()) ?? activeEditor;
    }
    return this.updateTextFromSelection({ allowUnselectedWord, allowSearchOnType }, activeEditor);
  }
  updateTextFromFindWidget(controller, { allowSearchOnType = true }) {
    var _a2, _b2, _c2, _d2;
    if (!this.searchConfig.seedWithNearestWord && (((_a2 = window.getSelection()) == null ? void 0 : _a2.toString()) ?? "") === "") {
      return false;
    }
    const searchString = controller.getState().searchString;
    if (searchString === "") {
      return false;
    }
    (_b2 = this.searchWidget.searchInput) == null ? void 0 : _b2.setCaseSensitive(controller.getState().matchCase);
    (_c2 = this.searchWidget.searchInput) == null ? void 0 : _c2.setWholeWords(controller.getState().wholeWord);
    (_d2 = this.searchWidget.searchInput) == null ? void 0 : _d2.setRegex(controller.getState().isRegex);
    this.updateText(searchString, allowSearchOnType);
    return true;
  }
  updateTextFromSelection({ allowUnselectedWord = true, allowSearchOnType = true }, editor) {
    var _a2;
    const seedSearchStringFromSelection = this.configurationService.getValue("editor").find.seedSearchStringFromSelection;
    if (!seedSearchStringFromSelection) {
      return false;
    }
    let selectedText = this.getSearchTextFromEditor(allowUnselectedWord, editor);
    if (selectedText === null) {
      return false;
    }
    if ((_a2 = this.searchWidget.searchInput) == null ? void 0 : _a2.getRegex()) {
      selectedText = escapeRegExpCharacters(selectedText);
    }
    this.updateText(selectedText, allowSearchOnType);
    return true;
  }
  updateText(text, allowSearchOnType = true) {
    if (allowSearchOnType && !this.viewModel.searchResult.isDirty) {
      this.searchWidget.setValue(text);
    } else {
      this.pauseSearching = true;
      this.searchWidget.setValue(text);
      this.pauseSearching = false;
    }
  }
  focusNextInputBox() {
    if (this.searchWidget.searchInputHasFocus()) {
      if (this.searchWidget.isReplaceShown()) {
        this.searchWidget.focus(true, true);
      } else {
        this.moveFocusFromSearchOrReplace();
      }
      return;
    }
    if (this.searchWidget.replaceInputHasFocus()) {
      this.moveFocusFromSearchOrReplace();
      return;
    }
    if (this.inputPatternIncludes.inputHasFocus()) {
      this.inputPatternExcludes.focus();
      this.inputPatternExcludes.select();
      return;
    }
    if (this.inputPatternExcludes.inputHasFocus()) {
      this.selectTreeIfNotSelected();
      return;
    }
  }
  moveFocusFromSearchOrReplace() {
    if (this.showsFileTypes()) {
      this.toggleQueryDetails(true, this.showsFileTypes());
    } else {
      this.selectTreeIfNotSelected();
    }
  }
  focusPreviousInputBox() {
    if (this.searchWidget.searchInputHasFocus()) {
      return;
    }
    if (this.searchWidget.replaceInputHasFocus()) {
      this.searchWidget.focus(true);
      return;
    }
    if (this.inputPatternIncludes.inputHasFocus()) {
      this.searchWidget.focus(true, true);
      return;
    }
    if (this.inputPatternExcludes.inputHasFocus()) {
      this.inputPatternIncludes.focus();
      this.inputPatternIncludes.select();
      return;
    }
    if (this.tree.isDOMFocused()) {
      this.moveFocusFromResults();
      return;
    }
  }
  moveFocusFromResults() {
    if (this.showsFileTypes()) {
      this.toggleQueryDetails(true, true, false, true);
    } else {
      this.searchWidget.focus(true, true);
    }
  }
  reLayout() {
    if (this.isDisposed || !this.size) {
      return;
    }
    const actionsPosition = this.searchConfig.actionsPosition;
    this.getContainer().classList.toggle(_k.ACTIONS_RIGHT_CLASS_NAME, actionsPosition === "right");
    this.searchWidget.setWidth(this.size.width - 28);
    this.inputPatternExcludes.setWidth(this.size.width - 28);
    this.inputPatternIncludes.setWidth(this.size.width - 28);
    const widgetHeight = getTotalHeight(this.searchWidgetsContainerElement);
    const messagesHeight = getTotalHeight(this.messagesElement);
    this.tree.layout(this.size.height - widgetHeight - messagesHeight, this.size.width - 28);
  }
  layoutBody(height, width) {
    super.layoutBody(height, width);
    this.size = new Dimension(width, height);
    this.reLayout();
  }
  getControl() {
    return this.tree;
  }
  allSearchFieldsClear() {
    return this.searchWidget.getReplaceValue() === "" && (!this.searchWidget.searchInput || this.searchWidget.searchInput.getValue() === "");
  }
  allFilePatternFieldsClear() {
    return this.searchExcludePattern.getValue() === "" && this.searchIncludePattern.getValue() === "";
  }
  hasSearchResults() {
    return !this.viewModel.searchResult.isEmpty();
  }
  clearSearchResults(clearInput = true) {
    this.viewModel.searchResult.clear();
    this.showEmptyStage(true);
    if (this.contextService.getWorkbenchState() === 1) {
      this.showSearchWithoutFolderMessage();
    }
    if (clearInput) {
      if (this.allSearchFieldsClear()) {
        this.clearFilePatternFields();
      }
      this.searchWidget.clear();
    }
    this.viewModel.cancelSearch();
    this.tree.ariaLabel = localize("emptySearch", "Empty Search");
    status(localize("ariaSearchResultsClearStatus", "The search results have been cleared"));
    this.reLayout();
  }
  clearFilePatternFields() {
    this.searchExcludePattern.clear();
    this.searchIncludePattern.clear();
  }
  cancelSearch(focus = true) {
    if (this.viewModel.cancelSearch()) {
      if (focus) {
        this.searchWidget.focus();
      }
      return true;
    }
    return false;
  }
  selectTreeIfNotSelected() {
    if (this.tree.getNode(null)) {
      this.tree.domFocus();
      const selection = this.tree.getSelection();
      if (selection.length === 0) {
        const event = getSelectionKeyboardEvent();
        this.tree.focusNext(void 0, void 0, event);
        this.tree.setSelection(this.tree.getFocus(), event);
      }
    }
  }
  getSearchTextFromEditor(allowUnselectedWord, editor) {
    if (isAncestor(document.activeElement, this.getContainer())) {
      return null;
    }
    editor = editor ?? this.editorService.activeTextEditorControl;
    if (isDiffEditor(editor)) {
      if (editor.getOriginalEditor().hasTextFocus()) {
        editor = editor.getOriginalEditor();
      } else {
        editor = editor.getModifiedEditor();
      }
    }
    if (!isCodeEditor(editor) || !editor.hasModel()) {
      return null;
    }
    const range = editor.getSelection();
    if (!range) {
      return null;
    }
    if (range.isEmpty() && this.searchConfig.seedWithNearestWord && allowUnselectedWord) {
      const wordAtPosition = editor.getModel().getWordAtPosition(range.getStartPosition());
      if (wordAtPosition) {
        return wordAtPosition.word;
      }
    }
    if (!range.isEmpty()) {
      let searchText = "";
      for (let i = range.startLineNumber; i <= range.endLineNumber; i++) {
        let lineText = editor.getModel().getLineContent(i);
        if (i === range.endLineNumber) {
          lineText = lineText.substring(0, range.endColumn - 1);
        }
        if (i === range.startLineNumber) {
          lineText = lineText.substring(range.startColumn - 1);
        }
        if (i !== range.startLineNumber) {
          lineText = "\n" + lineText;
        }
        searchText += lineText;
      }
      return searchText;
    }
    return null;
  }
  showsFileTypes() {
    return this.queryDetails.classList.contains("more");
  }
  toggleCaseSensitive() {
    var _a2;
    (_a2 = this.searchWidget.searchInput) == null ? void 0 : _a2.setCaseSensitive(!this.searchWidget.searchInput.getCaseSensitive());
    this.triggerQueryChange();
  }
  toggleWholeWords() {
    var _a2;
    (_a2 = this.searchWidget.searchInput) == null ? void 0 : _a2.setWholeWords(!this.searchWidget.searchInput.getWholeWords());
    this.triggerQueryChange();
  }
  toggleRegex() {
    var _a2;
    (_a2 = this.searchWidget.searchInput) == null ? void 0 : _a2.setRegex(!this.searchWidget.searchInput.getRegex());
    this.triggerQueryChange();
  }
  togglePreserveCase() {
    var _a2;
    (_a2 = this.searchWidget.replaceInput) == null ? void 0 : _a2.setPreserveCase(!this.searchWidget.replaceInput.getPreserveCase());
    this.triggerQueryChange();
  }
  setSearchParameters(args = {}) {
    var _a2, _b2, _c2, _d2, _e2, _f2;
    if (typeof args.isCaseSensitive === "boolean") {
      (_a2 = this.searchWidget.searchInput) == null ? void 0 : _a2.setCaseSensitive(args.isCaseSensitive);
    }
    if (typeof args.matchWholeWord === "boolean") {
      (_b2 = this.searchWidget.searchInput) == null ? void 0 : _b2.setWholeWords(args.matchWholeWord);
    }
    if (typeof args.isRegex === "boolean") {
      (_c2 = this.searchWidget.searchInput) == null ? void 0 : _c2.setRegex(args.isRegex);
    }
    if (typeof args.filesToInclude === "string") {
      this.searchIncludePattern.setValue(String(args.filesToInclude));
    }
    if (typeof args.filesToExclude === "string") {
      this.searchExcludePattern.setValue(String(args.filesToExclude));
    }
    if (typeof args.query === "string") {
      (_d2 = this.searchWidget.searchInput) == null ? void 0 : _d2.setValue(args.query);
    }
    if (typeof args.replace === "string") {
      (_e2 = this.searchWidget.replaceInput) == null ? void 0 : _e2.setValue(args.replace);
    } else {
      if (this.searchWidget.replaceInput && this.searchWidget.replaceInput.getValue() !== "") {
        this.searchWidget.replaceInput.setValue("");
      }
    }
    if (typeof args.triggerSearch === "boolean" && args.triggerSearch) {
      this.triggerQueryChange();
    }
    if (typeof args.preserveCase === "boolean") {
      (_f2 = this.searchWidget.replaceInput) == null ? void 0 : _f2.setPreserveCase(args.preserveCase);
    }
    if (typeof args.useExcludeSettingsAndIgnoreFiles === "boolean") {
      this.inputPatternExcludes.setUseExcludesAndIgnoreFiles(args.useExcludeSettingsAndIgnoreFiles);
    }
    if (typeof args.onlyOpenEditors === "boolean") {
      this.searchIncludePattern.setOnlySearchInOpenEditors(args.onlyOpenEditors);
    }
  }
  toggleQueryDetails(moveFocus = true, show2, skipLayout, reverse) {
    const cls = "more";
    show2 = typeof show2 === "undefined" ? !this.queryDetails.classList.contains(cls) : Boolean(show2);
    this.viewletState["query.queryDetailsExpanded"] = show2;
    skipLayout = Boolean(skipLayout);
    if (show2) {
      this.toggleQueryDetailsButton.setAttribute("aria-expanded", "true");
      this.queryDetails.classList.add(cls);
      if (moveFocus) {
        if (reverse) {
          this.inputPatternExcludes.focus();
          this.inputPatternExcludes.select();
        } else {
          this.inputPatternIncludes.focus();
          this.inputPatternIncludes.select();
        }
      }
    } else {
      this.toggleQueryDetailsButton.setAttribute("aria-expanded", "false");
      this.queryDetails.classList.remove(cls);
      if (moveFocus) {
        this.searchWidget.focus();
      }
    }
    if (!skipLayout && this.size) {
      this.reLayout();
    }
  }
  searchInFolders(folderPaths = []) {
    this._searchWithIncludeOrExclude(true, folderPaths);
  }
  searchOutsideOfFolders(folderPaths = []) {
    this._searchWithIncludeOrExclude(false, folderPaths);
  }
  _searchWithIncludeOrExclude(include, folderPaths) {
    if (!folderPaths.length || folderPaths.some((folderPath) => folderPath === ".")) {
      this.inputPatternIncludes.setValue("");
      this.searchWidget.focus();
      return;
    }
    if (!this.showsFileTypes()) {
      this.toggleQueryDetails(true, true);
    }
    (include ? this.inputPatternIncludes : this.inputPatternExcludes).setValue(folderPaths.join(", "));
    this.searchWidget.focus(false);
  }
  triggerQueryChange(_options) {
    const options = { preserveFocus: true, triggeredOnType: false, delay: 0, ..._options };
    if (options.triggeredOnType && !this.searchConfig.searchOnType) {
      return;
    }
    if (!this.pauseSearching) {
      this.triggerQueryDelayer.trigger(() => {
        this._onQueryChanged(options.preserveFocus, options.triggeredOnType);
      }, options.delay);
    }
  }
  _onQueryChanged(preserveFocus, triggeredOnType = false) {
    var _a2;
    if (!((_a2 = this.searchWidget.searchInput) == null ? void 0 : _a2.inputBox.isInputValid())) {
      return;
    }
    const isRegex = this.searchWidget.searchInput.getRegex();
    const isInNotebookMarkdownInput = this.searchWidget.getNotebookFilters().markupInput;
    const isInNotebookMarkdownPreview = this.searchWidget.getNotebookFilters().markupPreview;
    const isInNotebookCellInput = this.searchWidget.getNotebookFilters().codeInput;
    const isInNotebookCellOutput = this.searchWidget.getNotebookFilters().codeOutput;
    const isWholeWords = this.searchWidget.searchInput.getWholeWords();
    const isCaseSensitive = this.searchWidget.searchInput.getCaseSensitive();
    const contentPattern = this.searchWidget.searchInput.getValue();
    const excludePatternText = this.inputPatternExcludes.getValue().trim();
    const includePatternText = this.inputPatternIncludes.getValue().trim();
    const useExcludesAndIgnoreFiles = this.inputPatternExcludes.useExcludesAndIgnoreFiles();
    const onlySearchInOpenEditors = this.inputPatternIncludes.onlySearchInOpenEditors();
    if (contentPattern.length === 0) {
      this.clearSearchResults(false);
      this.clearMessage();
      return;
    }
    const content = {
      pattern: contentPattern,
      isRegExp: isRegex,
      isCaseSensitive,
      isWordMatch: isWholeWords,
      notebookInfo: {
        isInNotebookMarkdownInput,
        isInNotebookMarkdownPreview,
        isInNotebookCellInput,
        isInNotebookCellOutput
      }
    };
    const excludePattern = this.inputPatternExcludes.getValue();
    const includePattern = this.inputPatternIncludes.getValue();
    const charsPerLine = content.isRegExp ? 1e4 : 1e3;
    const options = {
      _reason: "searchView",
      extraFileResources: this.instantiationService.invokeFunction(getOutOfWorkspaceEditorResources),
      maxResults: withNullAsUndefined(this.searchConfig.maxResults),
      disregardIgnoreFiles: !useExcludesAndIgnoreFiles || void 0,
      disregardExcludeSettings: !useExcludesAndIgnoreFiles || void 0,
      onlyOpenEditors: onlySearchInOpenEditors,
      excludePattern,
      includePattern,
      previewOptions: {
        matchLines: 1,
        charsPerLine
      },
      isSmartCase: this.searchConfig.smartCase,
      expandPatterns: true
    };
    const folderResources = this.contextService.getWorkspace().folders;
    const onQueryValidationError = (err) => {
      var _a3;
      (_a3 = this.searchWidget.searchInput) == null ? void 0 : _a3.showMessage({ content: err.message, type: 3 });
      this.viewModel.searchResult.clear();
    };
    let query;
    try {
      query = this.queryBuilder.text(content, folderResources.map((folder) => folder.uri), options);
    } catch (err) {
      onQueryValidationError(err);
      return;
    }
    this.validateQuery(query).then(() => {
      this.onQueryTriggered(query, options, excludePatternText, includePatternText, triggeredOnType);
      if (!preserveFocus) {
        this.searchWidget.focus(false, void 0, true);
      }
    }, onQueryValidationError);
  }
  validateQuery(query) {
    const folderQueriesExistP = query.folderQueries.map((fq) => {
      return this.fileService.exists(fq.folder).catch(() => false);
    });
    return Promise.all(folderQueriesExistP).then((existResults) => {
      const existingFolderQueries = query.folderQueries.filter((folderQuery, i) => existResults[i]);
      if (!query.folderQueries.length || existingFolderQueries.length) {
        query.folderQueries = existingFolderQueries;
      } else {
        const nonExistantPath = query.folderQueries[0].folder.fsPath;
        const searchPathNotFoundError = localize("searchPathNotFoundError", "Search path not found: {0}", nonExistantPath);
        return Promise.reject(new Error(searchPathNotFoundError));
      }
      return void 0;
    });
  }
  onQueryTriggered(query, options, excludePatternText, includePatternText, triggeredOnType) {
    this.addToSearchHistoryDelayer.trigger(() => {
      var _a2;
      (_a2 = this.searchWidget.searchInput) == null ? void 0 : _a2.onSearchSubmit();
      this.inputPatternExcludes.onSearchSubmit();
      this.inputPatternIncludes.onSearchSubmit();
    });
    this.viewModel.cancelSearch(true);
    this.currentSearchQ = this.currentSearchQ.then(() => this.doSearch(query, excludePatternText, includePatternText, triggeredOnType)).then(() => void 0, () => void 0);
  }
  _updateResults() {
    if (this.state === SearchUIState.Idle) {
      return;
    }
    try {
      const fileCount = this.viewModel.searchResult.fileCount();
      if (this._visibleMatches !== fileCount) {
        this._visibleMatches = fileCount;
        this.refreshAndUpdateCount();
      }
    } finally {
      this._refreshResultsScheduler.schedule();
    }
  }
  doSearch(query, excludePatternText, includePatternText, triggeredOnType) {
    var _a2;
    let progressComplete;
    this.progressService.withProgress({ location: this.getProgressLocation(), delay: triggeredOnType ? 300 : 0 }, (_progress) => {
      return new Promise((resolve) => progressComplete = resolve);
    });
    (_a2 = this.searchWidget.searchInput) == null ? void 0 : _a2.clearMessage();
    this.state = SearchUIState.Searching;
    this.showEmptyStage();
    const slowTimer = setTimeout(() => {
      this.state = SearchUIState.SlowSearch;
    }, 2e3);
    const onComplete = (completed) => {
      clearTimeout(slowTimer);
      this.state = SearchUIState.Idle;
      progressComplete();
      this.onSearchResultsChanged();
      const collapseResults = this.searchConfig.collapseResults;
      if (collapseResults !== "alwaysCollapse" && this.viewModel.searchResult.matches().length === 1) {
        const onlyMatch = this.viewModel.searchResult.matches()[0];
        if (onlyMatch.count() < 50) {
          this.tree.expand(onlyMatch);
        }
      }
      this.viewModel.replaceString = this.searchWidget.getReplaceValue();
      const hasResults = !this.viewModel.searchResult.isEmpty();
      if ((completed == null ? void 0 : completed.exit) === 1) {
        return;
      }
      if (!hasResults) {
        const hasExcludes = !!excludePatternText;
        const hasIncludes = !!includePatternText;
        let message;
        if (!completed) {
          message = SEARCH_CANCELLED_MESSAGE;
        } else if (this.inputPatternIncludes.onlySearchInOpenEditors()) {
          if (hasIncludes && hasExcludes) {
            message = localize(
              "noOpenEditorResultsIncludesExcludes",
              "No results found in open editors matching '{0}' excluding '{1}' - ",
              includePatternText,
              excludePatternText
            );
          } else if (hasIncludes) {
            message = localize(
              "noOpenEditorResultsIncludes",
              "No results found in open editors matching '{0}' - ",
              includePatternText
            );
          } else if (hasExcludes) {
            message = localize(
              "noOpenEditorResultsExcludes",
              "No results found in open editors excluding '{0}' - ",
              excludePatternText
            );
          } else {
            message = localize(
              "noOpenEditorResultsFound",
              "No results found in open editors. Review your settings for configured exclusions and check your gitignore files - "
            );
          }
        } else {
          if (hasIncludes && hasExcludes) {
            message = localize(
              "noResultsIncludesExcludes",
              "No results found in '{0}' excluding '{1}' - ",
              includePatternText,
              excludePatternText
            );
          } else if (hasIncludes) {
            message = localize("noResultsIncludes", "No results found in '{0}' - ", includePatternText);
          } else if (hasExcludes) {
            message = localize(
              "noResultsExcludes",
              "No results found excluding '{0}' - ",
              excludePatternText
            );
          } else {
            message = localize(
              "noResultsFound",
              "No results found. Review your settings for configured exclusions and check your gitignore files - "
            );
          }
        }
        status(message);
        const messageEl = this.clearMessage();
        append(messageEl, message);
        if (!completed) {
          const searchAgainButton = this.messageDisposables.add(new SearchLinkButton(localize("rerunSearch.message", "Search again"), () => this.triggerQueryChange({ preserveFocus: false })));
          append(messageEl, searchAgainButton.element);
        } else if (hasIncludes || hasExcludes) {
          const searchAgainButton = this.messageDisposables.add(new SearchLinkButton(localize("rerunSearchInAll.message", "Search again in all files"), this.onSearchAgain.bind(this)));
          append(messageEl, searchAgainButton.element);
        } else {
          const openSettingsButton = this.messageDisposables.add(new SearchLinkButton(localize("openSettings.message", "Open Settings"), this.onOpenSettings.bind(this)));
          append(messageEl, openSettingsButton.element);
        }
        if (completed) {
          append(messageEl, $("span", void 0, " - "));
          const learnMoreButton = this.messageDisposables.add(new SearchLinkButton(localize("openSettings.learnMore", "Learn More"), this.onLearnMore.bind(this)));
          append(messageEl, learnMoreButton.element);
        }
        if (this.contextService.getWorkbenchState() === 1) {
          this.showSearchWithoutFolderMessage();
        }
        this.reLayout();
      } else {
        this.viewModel.searchResult.toggleHighlights(this.isVisible());
        status(localize(
          "ariaSearchResultsStatus",
          "Search returned {0} results in {1} files",
          this.viewModel.searchResult.count(),
          this.viewModel.searchResult.fileCount()
        ));
      }
      if (completed && completed.limitHit) {
        completed.messages.push({ type: TextSearchCompleteMessageType.Warning, text: localize(
          "searchMaxResultsWarning",
          "The result set only contains a subset of all matches. Be more specific in your search to narrow down the results."
        ) });
      }
      if (completed && completed.messages) {
        for (const message of completed.messages) {
          this.addMessage(message);
        }
      }
      this.reLayout();
    };
    const onError = (e) => {
      var _a3;
      clearTimeout(slowTimer);
      this.state = SearchUIState.Idle;
      if (isCancellationError(e)) {
        return onComplete(void 0);
      } else {
        progressComplete();
        (_a3 = this.searchWidget.searchInput) == null ? void 0 : _a3.showMessage({ content: e.message, type: 3 });
        this.viewModel.searchResult.clear();
        return Promise.resolve();
      }
    };
    this._visibleMatches = 0;
    this._refreshResultsScheduler.schedule();
    this.searchWidget.setReplaceAllActionState(false);
    this.tree.setSelection([]);
    this.tree.setFocus([]);
    return this.viewModel.search(query).then(onComplete, onError);
  }
  onOpenSettings(e) {
    EventHelper.stop(e, false);
    this.openSettings("@id:files.exclude,search.exclude,search.useParentIgnoreFiles,search.useGlobalIgnoreFiles,search.useIgnoreFiles");
  }
  openSettings(query) {
    const options = { query };
    return this.contextService.getWorkbenchState() !== 1 ? this.preferencesService.openWorkspaceSettings(options) : this.preferencesService.openUserSettings(options);
  }
  onLearnMore() {
    this.openerService.open(URI.parse("https://go.microsoft.com/fwlink/?linkid=853977"));
  }
  onSearchAgain() {
    this.inputPatternExcludes.setValue("");
    this.inputPatternIncludes.setValue("");
    this.inputPatternIncludes.setOnlySearchInOpenEditors(false);
    this.triggerQueryChange({ preserveFocus: false });
  }
  onEnableExcludes() {
    this.toggleQueryDetails(false, true);
    this.searchExcludePattern.setUseExcludesAndIgnoreFiles(true);
  }
  onDisableSearchInOpenEditors() {
    this.toggleQueryDetails(false, true);
    this.inputPatternIncludes.setOnlySearchInOpenEditors(false);
  }
  updateSearchResultCount(disregardExcludesAndIgnores, onlyOpenEditors, clear = false) {
    var _a2;
    const fileCount = this.viewModel.searchResult.fileCount();
    this.hasSearchResultsKey.set(fileCount > 0);
    const msgWasHidden = this.messagesElement.style.display === "none";
    const messageEl = this.clearMessage();
    const resultMsg = clear ? "" : this.buildResultCountMessage(this.viewModel.searchResult.count(), fileCount);
    this.tree.ariaLabel = resultMsg + localize(
      "forTerm",
      " - Search: {0}",
      ((_a2 = this.searchResult.query) == null ? void 0 : _a2.contentPattern.pattern) ?? ""
    );
    append(messageEl, resultMsg);
    if (fileCount > 0) {
      if (disregardExcludesAndIgnores) {
        const excludesDisabledMessage = " - " + localize(
          "useIgnoresAndExcludesDisabled",
          "exclude settings and ignore files are disabled"
        ) + " ";
        const enableExcludesButton = this.messageDisposables.add(new SearchLinkButton(localize("excludes.enable", "enable"), this.onEnableExcludes.bind(this), localize(
          "useExcludesAndIgnoreFilesDescription",
          "Use Exclude Settings and Ignore Files"
        )));
        append(messageEl, $("span", void 0, excludesDisabledMessage, "(", enableExcludesButton.element, ")"));
      }
      if (onlyOpenEditors) {
        const searchingInOpenMessage = " - " + localize("onlyOpenEditors", "searching only in open files") + " ";
        const disableOpenEditorsButton = this.messageDisposables.add(new SearchLinkButton(localize("openEditors.disable", "disable"), this.onDisableSearchInOpenEditors.bind(this), localize("disableOpenEditors", "Search in entire workspace")));
        append(messageEl, $("span", void 0, searchingInOpenMessage, "(", disableOpenEditorsButton.element, ")"));
      }
      append(messageEl, " - ");
      const openInEditorTooltip = appendKeyBindingLabel(localize("openInEditor.tooltip", "Copy current search results to an editor"), this.keybindingService.lookupKeybinding(OpenInEditorCommandId$1));
      const openInEditorButton = this.messageDisposables.add(new SearchLinkButton(localize("openInEditor.message", "Open in editor"), () => this.instantiationService.invokeFunction(createEditorFromSearchResult, this.searchResult, this.searchIncludePattern.getValue(), this.searchExcludePattern.getValue(), this.searchIncludePattern.onlySearchInOpenEditors()), openInEditorTooltip));
      append(messageEl, openInEditorButton.element);
      this.reLayout();
    } else if (!msgWasHidden) {
      hide(this.messagesElement);
    }
  }
  addMessage(message) {
    const messageBox = this.messagesElement.firstChild;
    if (!messageBox) {
      return;
    }
    append(messageBox, renderSearchMessage(message, this.instantiationService, this.notificationService, this.openerService, this.commandService, this.messageDisposables, () => this.triggerQueryChange()));
  }
  buildResultCountMessage(resultCount, fileCount) {
    if (resultCount === 1 && fileCount === 1) {
      return localize("search.file.result", "{0} result in {1} file", resultCount, fileCount);
    } else if (resultCount === 1) {
      return localize("search.files.result", "{0} result in {1} files", resultCount, fileCount);
    } else if (fileCount === 1) {
      return localize("search.file.results", "{0} results in {1} file", resultCount, fileCount);
    } else {
      return localize("search.files.results", "{0} results in {1} files", resultCount, fileCount);
    }
  }
  showSearchWithoutFolderMessage() {
    this.searchWithoutFolderMessageElement = this.clearMessage();
    const textEl = append(this.searchWithoutFolderMessageElement, $("p", void 0, localize(
      "searchWithoutFolder",
      "You have not opened or specified a folder. Only open files are currently searched - "
    )));
    const openFolderButton = this.messageDisposables.add(new SearchLinkButton(localize("openFolder", "Open Folder"), () => {
      this.commandService.executeCommand(isMacintosh && isNative ? OpenFileFolderAction.ID : OpenFolderAction.ID).catch((err) => onUnexpectedError(err));
    }));
    append(textEl, openFolderButton.element);
  }
  showEmptyStage(forceHideMessages = false) {
    var _a2, _b2;
    const showingCancelled = (((_b2 = (_a2 = this.messagesElement.firstChild) == null ? void 0 : _a2.textContent) == null ? void 0 : _b2.indexOf(SEARCH_CANCELLED_MESSAGE)) ?? -1) > -1;
    if (showingCancelled || forceHideMessages || !this.configurationService.getValue().search.searchOnType) {
      hide(this.messagesElement);
    }
    show(this.resultsElement);
    this.currentSelectedFileMatch = void 0;
  }
  shouldOpenInNotebookEditor(match, uri) {
    return match instanceof MatchInNotebook || uri.scheme !== Schemas.untitled && this.notebookService.getContributedNotebookTypes(uri).length > 0;
  }
  onFocus(lineMatch, preserveFocus, sideBySide, pinned) {
    const useReplacePreview = this.configurationService.getValue().search.useReplacePreview;
    const resource = lineMatch instanceof Match ? lineMatch.parent().resource : lineMatch.resource;
    return useReplacePreview && this.viewModel.isReplaceActive() && !!this.viewModel.replaceString && !this.shouldOpenInNotebookEditor(lineMatch, resource) ? this.replaceService.openReplacePreview(lineMatch, preserveFocus, sideBySide, pinned) : this.open(lineMatch, preserveFocus, sideBySide, pinned, resource);
  }
  async open(element, preserveFocus, sideBySide, pinned, resourceInput) {
    const selection = this.getSelectionFrom(element);
    const oldParentMatches = element instanceof Match ? element.parent().matches() : [];
    const resource = resourceInput ?? (element instanceof Match ? element.parent().resource : element.resource);
    let editor;
    const options = {
      preserveFocus,
      pinned,
      selection,
      revealIfVisible: true,
      indexedCellOptions: element instanceof MatchInNotebook ? { cellIndex: element.cellIndex, selection: element.range } : void 0
    };
    try {
      editor = await this.editorService.openEditor({
        resource,
        options
      }, sideBySide ? SIDE_GROUP : ACTIVE_GROUP);
      const editorControl = editor == null ? void 0 : editor.getControl();
      if (element instanceof Match && preserveFocus && isCodeEditor(editorControl)) {
        this.viewModel.searchResult.rangeHighlightDecorations.highlightRange(editorControl.getModel(), element.range());
      } else {
        this.viewModel.searchResult.rangeHighlightDecorations.removeHighlightRange();
      }
    } catch (err) {
      onUnexpectedError(err);
      return;
    }
    if (editor instanceof NotebookEditor) {
      const elemParent = element.parent();
      if (element instanceof Match) {
        if (element instanceof MatchInNotebook) {
          element.parent().showMatch(element);
        } else {
          const editorWidget = editor.getControl();
          if (editorWidget) {
            elemParent.bindNotebookEditorWidget(editorWidget);
            await elemParent.updateMatchesForEditorWidget();
            const matchIndex = oldParentMatches.findIndex((e) => e.id() === element.id());
            const matches = elemParent.matches();
            const match = matchIndex >= matches.length ? matches[matches.length - 1] : matches[matchIndex];
            if (match instanceof MatchInNotebook) {
              elemParent.showMatch(match);
              if (!this.tree.getFocus().includes(match) || !this.tree.getSelection().includes(match)) {
                this.tree.setSelection([match], getSelectionKeyboardEvent());
                this.tree.setFocus([match]);
              }
            }
          }
        }
      }
    }
  }
  openEditorWithMultiCursor(element) {
    const resource = element instanceof Match ? element.parent().resource : element.resource;
    return this.editorService.openEditor({
      resource,
      options: {
        preserveFocus: false,
        pinned: true,
        revealIfVisible: true
      }
    }).then((editor) => {
      if (editor) {
        let fileMatch = null;
        if (element instanceof FileMatch$1) {
          fileMatch = element;
        } else if (element instanceof Match) {
          fileMatch = element.parent();
        }
        if (fileMatch) {
          const selections = fileMatch.matches().map((m) => new Selection(
            m.range().startLineNumber,
            m.range().startColumn,
            m.range().endLineNumber,
            m.range().endColumn
          ));
          const codeEditor = getCodeEditor(editor.getControl());
          if (codeEditor) {
            const multiCursorController = MultiCursorSelectionController.get(codeEditor);
            multiCursorController == null ? void 0 : multiCursorController.selectAllUsingSelections(selections);
          }
        }
      }
      this.viewModel.searchResult.rangeHighlightDecorations.removeHighlightRange();
    }, onUnexpectedError);
  }
  getSelectionFrom(element) {
    let match = null;
    if (element instanceof Match) {
      match = element;
    }
    if (element instanceof FileMatch$1 && element.count() > 0) {
      match = element.matches()[element.matches().length - 1];
    }
    if (match) {
      const range = match.range();
      if (this.viewModel.isReplaceActive() && !!this.viewModel.replaceString) {
        const replaceString = match.replaceString;
        return {
          startLineNumber: range.startLineNumber,
          startColumn: range.startColumn,
          endLineNumber: range.startLineNumber,
          endColumn: range.startColumn + replaceString.length
        };
      }
      return range;
    }
    return void 0;
  }
  onUntitledDidDispose(resource) {
    if (!this.viewModel) {
      return;
    }
    const matches = this.viewModel.searchResult.matches();
    for (let i = 0, len = matches.length; i < len; i++) {
      if (resource.toString() === matches[i].resource.toString()) {
        this.viewModel.searchResult.remove(matches[i]);
      }
    }
  }
  onFilesChanged(e) {
    if (!this.viewModel || this.searchConfig.sortOrder !== "modified" && !e.gotDeleted()) {
      return;
    }
    const matches = this.viewModel.searchResult.matches();
    if (e.gotDeleted()) {
      const deletedMatches = matches.filter((m) => e.contains(m.resource, 2));
      this.viewModel.searchResult.remove(deletedMatches);
    } else {
      const changedMatches = matches.filter((m) => e.contains(m.resource));
      if (changedMatches.length && this.searchConfig.sortOrder === "modified") {
        this.updateFileStats(changedMatches).then(() => this.refreshTree());
      }
    }
  }
  get searchConfig() {
    return this.configurationService.getValue("search");
  }
  clearHistory() {
    this.searchWidget.clearHistory();
    this.inputPatternExcludes.clearHistory();
    this.inputPatternIncludes.clearHistory();
  }
  saveState() {
    var _a2, _b2, _c2, _d2;
    if (!this.searchWidget) {
      return;
    }
    const patternExcludes = ((_a2 = this.inputPatternExcludes) == null ? void 0 : _a2.getValue().trim()) ?? "";
    const patternIncludes = ((_b2 = this.inputPatternIncludes) == null ? void 0 : _b2.getValue().trim()) ?? "";
    const onlyOpenEditors = ((_c2 = this.inputPatternIncludes) == null ? void 0 : _c2.onlySearchInOpenEditors()) ?? false;
    const useExcludesAndIgnoreFiles = ((_d2 = this.inputPatternExcludes) == null ? void 0 : _d2.useExcludesAndIgnoreFiles()) ?? true;
    const preserveCase = this.viewModel.preserveCase;
    if (this.searchWidget.searchInput) {
      const isRegex = this.searchWidget.searchInput.getRegex();
      const isWholeWords = this.searchWidget.searchInput.getWholeWords();
      const isCaseSensitive = this.searchWidget.searchInput.getCaseSensitive();
      const contentPattern = this.searchWidget.searchInput.getValue();
      const isInNotebookCellInput = this.searchWidget.getNotebookFilters().codeInput;
      const isInNotebookCellOutput = this.searchWidget.getNotebookFilters().codeOutput;
      const isInNotebookMarkdownInput = this.searchWidget.getNotebookFilters().markupInput;
      const isInNotebookMarkdownPreview = this.searchWidget.getNotebookFilters().markupPreview;
      this.viewletState["query.contentPattern"] = contentPattern;
      this.viewletState["query.regex"] = isRegex;
      this.viewletState["query.wholeWords"] = isWholeWords;
      this.viewletState["query.caseSensitive"] = isCaseSensitive;
      this.viewletState["query.isInNotebookMarkdownInput"] = isInNotebookMarkdownInput;
      this.viewletState["query.isInNotebookMarkdownPreview"] = isInNotebookMarkdownPreview;
      this.viewletState["query.isInNotebookCellInput"] = isInNotebookCellInput;
      this.viewletState["query.isInNotebookCellOutput"] = isInNotebookCellOutput;
    }
    this.viewletState["query.folderExclusions"] = patternExcludes;
    this.viewletState["query.folderIncludes"] = patternIncludes;
    this.viewletState["query.useExcludesAndIgnoreFiles"] = useExcludesAndIgnoreFiles;
    this.viewletState["query.preserveCase"] = preserveCase;
    this.viewletState["query.onlyOpenEditors"] = onlyOpenEditors;
    const isReplaceShown = this.searchAndReplaceWidget.isReplaceShown();
    this.viewletState["view.showReplace"] = isReplaceShown;
    this.viewletState["view.treeLayout"] = this.isTreeLayoutViewVisible;
    this.viewletState["query.replaceText"] = isReplaceShown && this.searchWidget.getReplaceValue();
    this._saveSearchHistoryService();
    this.memento.saveMemento();
    super.saveState();
  }
  _saveSearchHistoryService() {
    const history = /* @__PURE__ */ Object.create(null);
    const searchHistory = this.searchWidget.getSearchHistory();
    if (searchHistory && searchHistory.length) {
      history.search = searchHistory;
    }
    const replaceHistory = this.searchWidget.getReplaceHistory();
    if (replaceHistory && replaceHistory.length) {
      history.replace = replaceHistory;
    }
    const patternExcludesHistory = this.inputPatternExcludes.getHistory();
    if (patternExcludesHistory && patternExcludesHistory.length) {
      history.exclude = patternExcludesHistory;
    }
    const patternIncludesHistory = this.inputPatternIncludes.getHistory();
    if (patternIncludesHistory && patternIncludesHistory.length) {
      history.include = patternIncludesHistory;
    }
    this.searchHistoryService.save(history);
  }
  async retrieveFileStats() {
    const files = this.searchResult.matches().filter((f) => !f.fileStat).map((f) => f.resolveFileStat(this.fileService));
    await Promise.all(files);
  }
  async updateFileStats(elements) {
    const files = elements.map((f) => f.resolveFileStat(this.fileService));
    await Promise.all(files);
  }
  removeFileStats() {
    for (const fileMatch of this.searchResult.matches()) {
      fileMatch.fileStat = void 0;
    }
  }
  dispose() {
    this.isDisposed = true;
    this.saveState();
    super.dispose();
  }
}, _k.ACTIONS_RIGHT_CLASS_NAME = "actions-right", _k);
SearchView = __decorate([
  __param(1, IFileService),
  __param(2, IEditorService),
  __param(3, ICodeEditorService),
  __param(4, IProgressService),
  __param(5, INotificationService),
  __param(6, IDialogService),
  __param(7, ICommandService),
  __param(8, IContextViewService),
  __param(9, IInstantiationService),
  __param(10, IViewDescriptorService),
  __param(11, IConfigurationService),
  __param(12, IWorkspaceContextService),
  __param(13, ISearchWorkbenchService),
  __param(14, IContextKeyService),
  __param(15, IReplaceService),
  __param(16, ITextFileService),
  __param(17, IPreferencesService),
  __param(18, IThemeService),
  __param(19, ISearchHistoryService),
  __param(20, IContextMenuService),
  __param(21, IAccessibilityService),
  __param(22, IKeybindingService),
  __param(23, IStorageService),
  __param(24, IOpenerService),
  __param(25, ITelemetryService),
  __param(26, INotebookService),
  __param(27, ILogService)
], SearchView);
class SearchLinkButton extends Disposable {
  constructor(label, handler, tooltip) {
    super();
    this.element = $("a.pointer", { tabindex: 0, title: tooltip }, label);
    this.addEventHandlers(handler);
  }
  addEventHandlers(handler) {
    const wrappedHandler = (e) => {
      EventHelper.stop(e, false);
      handler(e);
    };
    this._register(addDisposableListener(this.element, EventType.CLICK, wrappedHandler));
    this._register(addDisposableListener(this.element, EventType.KEY_DOWN, (e) => {
      const event = new StandardKeyboardEvent(e);
      if (event.equals(10) || event.equals(3)) {
        wrappedHandler(e);
        event.preventDefault();
        event.stopPropagation();
      }
    }));
  }
}
registerAction2(class CopyMatchCommandAction extends Action2 {
  constructor() {
    super({
      id: CopyMatchCommandId,
      title: {
        value: localize("copyMatchLabel", "Copy"),
        original: "Copy"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: FileMatchOrMatchFocusKey,
        primary: 2048 | 33
      },
      menu: [{
        id: MenuId.SearchContext,
        when: FileMatchOrMatchFocusKey,
        group: "search_2",
        order: 1
      }]
    });
  }
  async run(accessor, match) {
    await copyMatchCommand(accessor, match);
  }
});
registerAction2(class CopyPathCommandAction extends Action2 {
  constructor() {
    super({
      id: CopyPathCommandId,
      title: {
        value: localize("copyPathLabel", "Copy Path"),
        original: "Copy Path"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: FileMatchOrFolderMatchWithResourceFocusKey,
        primary: 2048 | 512 | 33,
        win: {
          primary: 1024 | 512 | 33
        }
      },
      menu: [{
        id: MenuId.SearchContext,
        when: FileMatchOrFolderMatchWithResourceFocusKey,
        group: "search_2",
        order: 2
      }]
    });
  }
  async run(accessor, fileMatch) {
    await copyPathCommand(accessor, fileMatch);
  }
});
registerAction2(class CopyAllCommandAction extends Action2 {
  constructor() {
    super({
      id: CopyAllCommandId,
      title: {
        value: localize("copyAllLabel", "Copy All"),
        original: "Copy All"
      },
      category: category$1,
      menu: [{
        id: MenuId.SearchContext,
        when: HasSearchResults,
        group: "search_2",
        order: 3
      }]
    });
  }
  async run(accessor) {
    await copyAllCommand(accessor);
  }
});
const lineDelimiter = isWindows ? "\r\n" : "\n";
async function copyPathCommand(accessor, fileMatch) {
  if (!fileMatch) {
    const selection = getSelectedRow(accessor);
    if (!(selection instanceof FileMatch$1 || selection instanceof FolderMatchWithResource)) {
      return;
    }
    fileMatch = selection;
  }
  const clipboardService = accessor.get(IClipboardService);
  const labelService = accessor.get(ILabelService);
  const text = labelService.getUriLabel(fileMatch.resource, { noPrefix: true });
  await clipboardService.writeText(text);
}
async function copyMatchCommand(accessor, match) {
  if (!match) {
    const selection = getSelectedRow(accessor);
    if (!selection) {
      return;
    }
    match = selection;
  }
  const clipboardService = accessor.get(IClipboardService);
  const labelService = accessor.get(ILabelService);
  let text;
  if (match instanceof Match) {
    text = matchToString(match);
  } else if (match instanceof FileMatch$1) {
    text = fileMatchToString(match, labelService).text;
  } else if (match instanceof FolderMatch) {
    text = folderMatchToString(match, labelService).text;
  }
  if (text) {
    await clipboardService.writeText(text);
  }
}
async function copyAllCommand(accessor) {
  const viewsService = accessor.get(IViewsService);
  const clipboardService = accessor.get(IClipboardService);
  const labelService = accessor.get(ILabelService);
  const searchView = getSearchView(viewsService);
  if (searchView) {
    const root = searchView.searchResult;
    const text = allFolderMatchesToString(root.folderMatches(), labelService);
    await clipboardService.writeText(text);
  }
}
function matchToString(match, indent = 0) {
  const getFirstLinePrefix = () => `${match.range().startLineNumber},${match.range().startColumn}`;
  const getOtherLinePrefix = (i) => match.range().startLineNumber + i + "";
  const fullMatchLines = match.fullPreviewLines();
  const largestPrefixSize = fullMatchLines.reduce((largest, _, i) => {
    const thisSize = i === 0 ? getFirstLinePrefix().length : getOtherLinePrefix(i).length;
    return Math.max(thisSize, largest);
  }, 0);
  const formattedLines = fullMatchLines.map((line, i) => {
    const prefix = i === 0 ? getFirstLinePrefix() : getOtherLinePrefix(i);
    const paddingStr = " ".repeat(largestPrefixSize - prefix.length);
    const indentStr = " ".repeat(indent);
    return `${indentStr}${prefix}: ${paddingStr}${line}`;
  });
  return formattedLines.join("\n");
}
function fileFolderMatchToString(match, labelService) {
  if (match instanceof FileMatch$1) {
    return fileMatchToString(match, labelService);
  } else {
    return folderMatchToString(match, labelService);
  }
}
function fileMatchToString(fileMatch, labelService) {
  const matchTextRows = fileMatch.matches().sort(searchMatchComparer).map((match) => matchToString(match, 2));
  const uriString = labelService.getUriLabel(fileMatch.resource, { noPrefix: true });
  return {
    text: `${uriString}${lineDelimiter}${matchTextRows.join(lineDelimiter)}`,
    count: matchTextRows.length
  };
}
function folderMatchToString(folderMatch, labelService) {
  const results = [];
  let numMatches = 0;
  const matches = folderMatch.matches().sort(searchMatchComparer);
  matches.forEach((match) => {
    const result = fileFolderMatchToString(match, labelService);
    numMatches += result.count;
    results.push(result.text);
  });
  return {
    text: results.join(lineDelimiter + lineDelimiter),
    count: numMatches
  };
}
function allFolderMatchesToString(folderMatches, labelService) {
  const folderResults = [];
  folderMatches = folderMatches.sort(searchMatchComparer);
  for (let i = 0; i < folderMatches.length; i++) {
    const folderResult = folderMatchToString(folderMatches[i], labelService);
    if (folderResult.count) {
      folderResults.push(folderResult.text);
    }
  }
  return folderResults.join(lineDelimiter + lineDelimiter);
}
function getSelectedRow(accessor) {
  const viewsService = accessor.get(IViewsService);
  const searchView = getSearchView(viewsService);
  return searchView == null ? void 0 : searchView.getControl().getSelection()[0];
}
registerAction2(class RestrictSearchToFolderAction extends Action2 {
  constructor() {
    super({
      id: RestrictSearchToFolderId,
      title: {
        value: localize("restrictResultsToFolder", "Restrict Search to Folder"),
        original: "Restrict Search to Folder"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(SearchViewVisibleKey, ResourceFolderFocusKey),
        primary: 1024 | 512 | 36
      },
      menu: [
        {
          id: MenuId.SearchContext,
          group: "search",
          order: 3,
          when: ContextKeyExpr.and(ResourceFolderFocusKey)
        }
      ]
    });
  }
  async run(accessor, folderMatch) {
    await searchWithFolderCommand(accessor, false, true, void 0, folderMatch);
  }
});
registerAction2(class ExcludeFolderFromSearchAction extends Action2 {
  constructor() {
    super({
      id: ExcludeFolderFromSearchId,
      title: {
        value: localize("excludeFolderFromSearch", "Exclude Folder from Search"),
        original: "Exclude Folder from Search"
      },
      category: category$1,
      menu: [
        {
          id: MenuId.SearchContext,
          group: "search",
          order: 4,
          when: ContextKeyExpr.and(ResourceFolderFocusKey)
        }
      ]
    });
  }
  async run(accessor, folderMatch) {
    await searchWithFolderCommand(accessor, false, false, void 0, folderMatch);
  }
});
registerAction2(class RevealInSideBarForSearchResultsAction extends Action2 {
  constructor() {
    super({
      id: RevealInSideBarForSearchResults,
      title: {
        value: localize("revealInSideBar", "Reveal in Explorer View"),
        original: "Reveal in Explorer View"
      },
      category: category$1,
      menu: [{
        id: MenuId.SearchContext,
        when: ContextKeyExpr.and(FileFocusKey, HasSearchResults),
        group: "search_3",
        order: 1
      }]
    });
  }
  async run(accessor, args) {
    const paneCompositeService = accessor.get(IPaneCompositePartService);
    const explorerService = accessor.get(IExplorerService);
    const contextService = accessor.get(IWorkspaceContextService);
    const searchView = getSearchView(accessor.get(IViewsService));
    if (!searchView) {
      return;
    }
    let fileMatch;
    if (!(args instanceof FileMatch$1)) {
      args = searchView.getControl().getFocus()[0];
    }
    if (args instanceof FileMatch$1) {
      fileMatch = args;
    } else {
      return;
    }
    paneCompositeService.openPaneComposite(VIEWLET_ID, 0, false).then((viewlet) => {
      if (!viewlet) {
        return;
      }
      const explorerViewContainer = viewlet.getViewPaneContainer();
      const uri = fileMatch.resource;
      if (uri && contextService.isInsideWorkspace(uri)) {
        const explorerView = explorerViewContainer.getExplorerView();
        explorerView.setExpanded(true);
        explorerService.select(uri, true).then(() => explorerView.focus(), onUnexpectedError);
      }
    });
  }
});
registerAction2(class FindInFilesAction extends Action2 {
  constructor() {
    super({
      id: FindInFilesActionId,
      title: {
        value: localize("findInFiles", "Find in Files"),
        mnemonicTitle: localize(
          { key: "miFindInFiles", comment: ["&& denotes a mnemonic"] },
          "Find &&in Files"
        ),
        original: "Find in Files"
      },
      description: {
        description: localize("findInFiles.description", "Open a workspace search"),
        args: [
          {
            name: localize("findInFiles.args", "A set of options for the search"),
            schema: {
              type: "object",
              properties: {
                query: { "type": "string" },
                replace: { "type": "string" },
                preserveCase: { "type": "boolean" },
                triggerSearch: { "type": "boolean" },
                filesToInclude: { "type": "string" },
                filesToExclude: { "type": "string" },
                isRegex: { "type": "boolean" },
                isCaseSensitive: { "type": "boolean" },
                matchWholeWord: { "type": "boolean" },
                useExcludeSettingsAndIgnoreFiles: { "type": "boolean" },
                onlyOpenEditors: { "type": "boolean" }
              }
            }
          }
        ]
      },
      category: category$1,
      keybinding: {
        weight: 200,
        primary: 2048 | 1024 | 36
      },
      menu: [{
        id: MenuId.MenubarEditMenu,
        group: "4_find_global",
        order: 1
      }],
      f1: true
    });
  }
  async run(accessor, args = {}) {
    findInFilesCommand(accessor, args);
  }
});
registerAction2(class FindInFolderAction extends Action2 {
  constructor() {
    super({
      id: FindInFolderId,
      title: {
        value: localize("findInFolder", "Find in Folder..."),
        original: "Find in Folder..."
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(FilesExplorerFocusCondition, ExplorerFolderContext),
        primary: 1024 | 512 | 36
      },
      menu: [
        {
          id: MenuId.ExplorerContext,
          group: "4_search",
          order: 10,
          when: ContextKeyExpr.and(ExplorerFolderContext)
        }
      ]
    });
  }
  async run(accessor, resource) {
    await searchWithFolderCommand(accessor, true, true, resource);
  }
});
registerAction2(class FindInWorkspaceAction extends Action2 {
  constructor() {
    super({
      id: FindInWorkspaceId,
      title: {
        value: localize("findInWorkspace", "Find in Workspace..."),
        original: "Find in Workspace..."
      },
      category: category$1,
      menu: [
        {
          id: MenuId.ExplorerContext,
          group: "4_search",
          order: 10,
          when: ContextKeyExpr.and(ExplorerRootContext, ExplorerFolderContext.toNegated())
        }
      ]
    });
  }
  async run(accessor) {
    const searchConfig = accessor.get(IConfigurationService).getValue().search;
    const mode = searchConfig.mode;
    if (mode === "view") {
      const searchView = await openSearchView(accessor.get(IViewsService), true);
      searchView == null ? void 0 : searchView.searchInFolders();
    } else {
      return accessor.get(ICommandService).executeCommand(OpenEditorCommandId, {
        location: mode === "newEditor" ? "new" : "reuse",
        filesToInclude: ""
      });
    }
  }
});
async function searchWithFolderCommand(accessor, isFromExplorer, isIncludes, resource, folderMatch) {
  const listService = accessor.get(IListService);
  const fileService = accessor.get(IFileService);
  const viewsService = accessor.get(IViewsService);
  const contextService = accessor.get(IWorkspaceContextService);
  const commandService = accessor.get(ICommandService);
  const searchConfig = accessor.get(IConfigurationService).getValue().search;
  const mode = searchConfig.mode;
  let resources;
  if (isFromExplorer) {
    resources = getMultiSelectedResources(resource, listService, accessor.get(IEditorService), accessor.get(IExplorerService));
  } else {
    const searchView = getSearchView(accessor.get(IViewsService));
    if (!searchView) {
      return;
    }
    resources = getMultiSelectedSearchResources(searchView.getControl(), folderMatch, searchConfig);
  }
  const resolvedResources = fileService.resolveAll(resources.map((resource2) => ({ resource: resource2 }))).then((results) => {
    const folders = [];
    results.forEach((result) => {
      if (result.success && result.stat) {
        folders.push(result.stat.isDirectory ? result.stat.resource : dirname(result.stat.resource));
      }
    });
    return resolveResourcesForSearchIncludes(folders, contextService);
  });
  if (mode === "view") {
    const searchView = await openSearchView(viewsService, true);
    if (resources && resources.length && searchView) {
      if (isIncludes) {
        searchView.searchInFolders(await resolvedResources);
      } else {
        searchView.searchOutsideOfFolders(await resolvedResources);
      }
    }
    return void 0;
  } else {
    if (isIncludes) {
      return commandService.executeCommand(OpenEditorCommandId, {
        filesToInclude: (await resolvedResources).join(", "),
        showIncludesExcludes: true,
        location: mode === "newEditor" ? "new" : "reuse"
      });
    } else {
      return commandService.executeCommand(OpenEditorCommandId, {
        filesToExclude: (await resolvedResources).join(", "),
        showIncludesExcludes: true,
        location: mode === "newEditor" ? "new" : "reuse"
      });
    }
  }
}
function getMultiSelectedSearchResources(viewer, currElement, sortConfig) {
  return getElementsToOperateOn(viewer, currElement, sortConfig).map(
    (renderableMatch) => renderableMatch instanceof Match ? null : renderableMatch.resource
  ).filter((renderableMatch) => renderableMatch !== null);
}
async function findInFilesCommand(accessor, _args = {}) {
  const searchConfig = accessor.get(IConfigurationService).getValue().search;
  const viewsService = accessor.get(IViewsService);
  const commandService = accessor.get(ICommandService);
  const args = {};
  if (Object.keys(_args).length !== 0) {
    const configurationResolverService = accessor.get(IConfigurationResolverService);
    const historyService = accessor.get(IHistoryService);
    const workspaceContextService = accessor.get(IWorkspaceContextService);
    const activeWorkspaceRootUri = historyService.getLastActiveWorkspaceRoot();
    const filteredActiveWorkspaceRootUri = (activeWorkspaceRootUri == null ? void 0 : activeWorkspaceRootUri.scheme) === Schemas.file || (activeWorkspaceRootUri == null ? void 0 : activeWorkspaceRootUri.scheme) === Schemas.vscodeRemote ? activeWorkspaceRootUri : void 0;
    const lastActiveWorkspaceRoot = filteredActiveWorkspaceRootUri ? withNullAsUndefined(workspaceContextService.getWorkspaceFolder(filteredActiveWorkspaceRootUri)) : void 0;
    for (const entry of Object.entries(_args)) {
      const name = entry[0];
      const value = entry[1];
      if (value !== void 0) {
        args[name] = typeof value === "string" ? await configurationResolverService.resolveAsync(lastActiveWorkspaceRoot, value) : value;
      }
    }
  }
  const mode = searchConfig.mode;
  if (mode === "view") {
    openSearchView(viewsService, false).then((openedView) => {
      if (openedView) {
        const searchAndReplaceWidget = openedView.searchAndReplaceWidget;
        searchAndReplaceWidget.toggleReplace(typeof args.replace === "string");
        let updatedText = false;
        if (typeof args.query !== "string") {
          updatedText = openedView.updateTextFromFindWidgetOrSelection({ allowUnselectedWord: typeof args.replace !== "string" });
        }
        openedView.setSearchParameters(args);
        openedView.searchAndReplaceWidget.focus(void 0, updatedText, updatedText);
      }
    });
  } else {
    const convertArgs = (args2) => ({
      location: mode === "newEditor" ? "new" : "reuse",
      query: args2.query,
      filesToInclude: args2.filesToInclude,
      filesToExclude: args2.filesToExclude,
      matchWholeWord: args2.matchWholeWord,
      isCaseSensitive: args2.isCaseSensitive,
      isRegexp: args2.isRegex,
      useExcludeSettingsAndIgnoreFiles: args2.useExcludeSettingsAndIgnoreFiles,
      onlyOpenEditors: args2.onlyOpenEditors,
      showIncludesExcludes: !!(args2.filesToExclude || args2.filesToExclude || !args2.useExcludeSettingsAndIgnoreFiles)
    });
    commandService.executeCommand(OpenEditorCommandId, convertArgs(args));
  }
}
registerAction2(class ToggleQueryDetailsAction extends Action2 {
  constructor() {
    super({
      id: ToggleQueryDetailsActionId,
      title: {
        value: localize("ToggleQueryDetailsAction.label", "Toggle Query Details"),
        original: "Toggle Query Details"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.or(SearchViewFocusedKey, InSearchEditor),
        primary: 2048 | 1024 | 40
      }
    });
  }
  run(accessor) {
    const contextService = accessor.get(IContextKeyService).getContext(document.activeElement);
    if (contextService.getValue(InSearchEditor.serialize())) {
      accessor.get(IEditorService).activeEditorPane.toggleQueryDetails();
    } else if (contextService.getValue(SearchViewFocusedKey.serialize())) {
      const searchView = getSearchView(accessor.get(IViewsService));
      assertIsDefined(searchView).toggleQueryDetails();
    }
  }
});
registerAction2(class CloseReplaceAction extends Action2 {
  constructor() {
    super({
      id: CloseReplaceWidgetActionId,
      title: {
        value: localize("CloseReplaceWidget.label", "Close Replace Widget"),
        original: "Close Replace Widget"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(SearchViewVisibleKey, ReplaceInputBoxFocusedKey),
        primary: 9
      }
    });
  }
  run(accessor) {
    const searchView = getSearchView(accessor.get(IViewsService));
    if (searchView) {
      searchView.searchAndReplaceWidget.toggleReplace(false);
      searchView.searchAndReplaceWidget.focus();
    }
    return Promise.resolve(null);
  }
});
registerAction2(class ToggleCaseSensitiveCommandAction extends Action2 {
  constructor() {
    super({
      id: ToggleCaseSensitiveCommandId,
      title: {
        value: localize("ToggleCaseSensitiveCommandId.label", "Toggle Case Sensitive"),
        original: "Toggle Case Sensitive"
      },
      category: category$1,
      keybinding: Object.assign({
        weight: 200,
        when: isMacintosh ? ContextKeyExpr.and(SearchViewFocusedKey, FileMatchOrFolderMatchFocusKey.toNegated()) : SearchViewFocusedKey
      }, ToggleCaseSensitiveKeybinding)
    });
  }
  async run(accessor) {
    toggleCaseSensitiveCommand(accessor);
  }
});
registerAction2(class ToggleWholeWordCommandAction extends Action2 {
  constructor() {
    super({
      id: ToggleWholeWordCommandId,
      title: {
        value: localize("ToggleWholeWordCommandId.label", "Toggle Whole Word"),
        original: "Toggle Whole Word"
      },
      keybinding: Object.assign({
        weight: 200,
        when: SearchViewFocusedKey
      }, ToggleWholeWordKeybinding),
      category: category$1
    });
  }
  async run(accessor) {
    return toggleWholeWordCommand(accessor);
  }
});
registerAction2(class ToggleRegexCommandAction extends Action2 {
  constructor() {
    super({
      id: ToggleRegexCommandId,
      title: {
        value: localize("ToggleRegexCommandId.label", "Toggle Regex"),
        original: "Toggle Regex"
      },
      keybinding: Object.assign({
        weight: 200,
        when: SearchViewFocusedKey
      }, ToggleRegexKeybinding),
      category: category$1
    });
  }
  async run(accessor) {
    return toggleRegexCommand(accessor);
  }
});
registerAction2(class TogglePreserveCaseAction extends Action2 {
  constructor() {
    super({
      id: TogglePreserveCaseId,
      title: {
        value: localize("TogglePreserveCaseId.label", "Toggle Preserve Case"),
        original: "Toggle Preserve Case"
      },
      keybinding: Object.assign({
        weight: 200,
        when: SearchViewFocusedKey
      }, TogglePreserveCaseKeybinding),
      category: category$1
    });
  }
  async run(accessor) {
    return togglePreserveCaseCommand(accessor);
  }
});
registerAction2(class OpenMatchAction extends Action2 {
  constructor() {
    super({
      id: OpenMatch,
      title: {
        value: localize("OpenMatch.label", "Open Match"),
        original: "Open Match"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(SearchViewVisibleKey, FileMatchOrMatchFocusKey),
        primary: 3,
        mac: {
          primary: 3,
          secondary: [2048 | 18]
        }
      }
    });
  }
  run(accessor) {
    const searchView = getSearchView(accessor.get(IViewsService));
    if (searchView) {
      const tree = searchView.getControl();
      const viewer = searchView.getControl();
      const focus = tree.getFocus()[0];
      if (focus instanceof FolderMatch) {
        viewer.toggleCollapsed(focus);
      } else {
        searchView.open(tree.getFocus()[0], false, false, true);
      }
    }
  }
});
registerAction2(class OpenMatchToSideAction extends Action2 {
  constructor() {
    super({
      id: OpenMatchToSide,
      title: {
        value: localize("OpenMatchToSide.label", "Open Match To Side"),
        original: "Open Match To Side"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(SearchViewVisibleKey, FileMatchOrMatchFocusKey),
        primary: 2048 | 3,
        mac: {
          primary: 256 | 3
        }
      }
    });
  }
  run(accessor) {
    const searchView = getSearchView(accessor.get(IViewsService));
    if (searchView) {
      const tree = searchView.getControl();
      searchView.open(tree.getFocus()[0], false, true, true);
    }
  }
});
registerAction2(class AddCursorsAtSearchResultsAction extends Action2 {
  constructor() {
    super({
      id: AddCursorsAtSearchResults,
      title: {
        value: localize("AddCursorsAtSearchResults.label", "Add Cursors at Search Results"),
        original: "Add Cursors at Search Results"
      },
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(SearchViewVisibleKey, FileMatchOrMatchFocusKey),
        primary: 2048 | 1024 | 42
      },
      category: category$1
    });
  }
  async run(accessor) {
    const searchView = getSearchView(accessor.get(IViewsService));
    if (searchView) {
      const tree = searchView.getControl();
      searchView.openEditorWithMultiCursor(tree.getFocus()[0]);
    }
  }
});
registerAction2(class FocusNextInputAction extends Action2 {
  constructor() {
    super({
      id: FocusNextInputActionId,
      title: {
        value: localize("FocusNextInputAction.label", "Focus Next Input"),
        original: "Focus Next Input"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.or(ContextKeyExpr.and(InSearchEditor, InputBoxFocusedKey), ContextKeyExpr.and(SearchViewVisibleKey, InputBoxFocusedKey)),
        primary: 2048 | 18
      }
    });
  }
  async run(accessor) {
    const editorService = accessor.get(IEditorService);
    const input = editorService.activeEditor;
    if (input instanceof SearchEditorInput) {
      editorService.activeEditorPane.focusNextInput();
    }
    const searchView = getSearchView(accessor.get(IViewsService));
    searchView == null ? void 0 : searchView.focusNextInputBox();
  }
});
registerAction2(class FocusPreviousInputAction extends Action2 {
  constructor() {
    super({
      id: FocusPreviousInputActionId,
      title: {
        value: localize("FocusPreviousInputAction.label", "Focus Previous Input"),
        original: "Focus Previous Input"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.or(ContextKeyExpr.and(InSearchEditor, InputBoxFocusedKey), ContextKeyExpr.and(
          SearchViewVisibleKey,
          InputBoxFocusedKey,
          SearchInputBoxFocusedKey.toNegated()
        )),
        primary: 2048 | 16
      }
    });
  }
  async run(accessor) {
    const editorService = accessor.get(IEditorService);
    const input = editorService.activeEditor;
    if (input instanceof SearchEditorInput) {
      editorService.activeEditorPane.focusPrevInput();
    }
    const searchView = getSearchView(accessor.get(IViewsService));
    searchView == null ? void 0 : searchView.focusPreviousInputBox();
  }
});
registerAction2(class FocusSearchFromResultsAction extends Action2 {
  constructor() {
    super({
      id: FocusSearchFromResults,
      title: {
        value: localize("FocusSearchFromResults.label", "Focus Search From Results"),
        original: "Focus Search From Results"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(SearchViewVisibleKey, ContextKeyExpr.or(FirstMatchFocusKey, CONTEXT_ACCESSIBILITY_MODE_ENABLED)),
        primary: 2048 | 16
      }
    });
  }
  run(accessor) {
    const searchView = getSearchView(accessor.get(IViewsService));
    searchView == null ? void 0 : searchView.focusPreviousInputBox();
  }
});
registerAction2((_l = class extends Action2 {
  constructor() {
    super({
      id: ToggleSearchOnTypeActionId,
      title: {
        value: localize("toggleTabs", "Toggle Search on Type"),
        original: "Toggle Search on Type"
      },
      category: category$1
    });
  }
  async run(accessor) {
    const configurationService = accessor.get(IConfigurationService);
    const searchOnType = configurationService.getValue(_l.searchOnTypeKey);
    return configurationService.updateValue(_l.searchOnTypeKey, !searchOnType);
  }
}, _l.searchOnTypeKey = "search.searchOnType", _l));
registerAction2(class FocusSearchListCommandAction extends Action2 {
  constructor() {
    super({
      id: FocusSearchListCommandID,
      title: {
        value: localize("focusSearchListCommandLabel", "Focus List"),
        original: "Focus List"
      },
      category: category$1,
      f1: true
    });
  }
  async run(accessor) {
    focusSearchListCommand(accessor);
  }
});
registerAction2(class FocusNextSearchResultAction extends Action2 {
  constructor() {
    super({
      id: FocusNextSearchResultActionId,
      title: {
        value: localize("FocusNextSearchResult.label", "Focus Next Search Result"),
        original: "Focus Next Search Result"
      },
      keybinding: [{
        primary: 62,
        weight: 200
      }],
      category: category$1,
      f1: true,
      precondition: ContextKeyExpr.or(HasSearchResults, InSearchEditor)
    });
  }
  async run(accessor) {
    return await focusNextSearchResult(accessor);
  }
});
registerAction2(class FocusPreviousSearchResultAction extends Action2 {
  constructor() {
    super({
      id: FocusPreviousSearchResultActionId,
      title: {
        value: localize("FocusPreviousSearchResult.label", "Focus Previous Search Result"),
        original: "Focus Previous Search Result"
      },
      keybinding: [{
        primary: 1024 | 62,
        weight: 200
      }],
      category: category$1,
      f1: true,
      precondition: ContextKeyExpr.or(HasSearchResults, InSearchEditor)
    });
  }
  async run(accessor) {
    return await focusPreviousSearchResult(accessor);
  }
});
registerAction2(class ReplaceInFilesAction extends Action2 {
  constructor() {
    super({
      id: ReplaceInFilesActionId,
      title: {
        value: localize("replaceInFiles", "Replace in Files"),
        original: "Replace in Files"
      },
      keybinding: [{
        primary: 2048 | 1024 | 38,
        weight: 200
      }],
      category: category$1,
      f1: true,
      menu: [{
        id: MenuId.MenubarEditMenu,
        group: "4_find_global",
        order: 2
      }]
    });
  }
  async run(accessor) {
    return await findOrReplaceInFiles(accessor, true);
  }
});
function toggleCaseSensitiveCommand(accessor) {
  const searchView = getSearchView(accessor.get(IViewsService));
  searchView == null ? void 0 : searchView.toggleCaseSensitive();
}
function toggleWholeWordCommand(accessor) {
  const searchView = getSearchView(accessor.get(IViewsService));
  searchView == null ? void 0 : searchView.toggleWholeWords();
}
function toggleRegexCommand(accessor) {
  const searchView = getSearchView(accessor.get(IViewsService));
  searchView == null ? void 0 : searchView.toggleRegex();
}
function togglePreserveCaseCommand(accessor) {
  const searchView = getSearchView(accessor.get(IViewsService));
  searchView == null ? void 0 : searchView.togglePreserveCase();
}
const focusSearchListCommand = (accessor) => {
  const viewsService = accessor.get(IViewsService);
  openSearchView(viewsService).then((searchView) => {
    searchView == null ? void 0 : searchView.moveFocusToResults();
  });
};
async function focusNextSearchResult(accessor) {
  const editorService = accessor.get(IEditorService);
  const input = editorService.activeEditor;
  if (input instanceof SearchEditorInput) {
    return editorService.activeEditorPane.focusNextResult();
  }
  return openSearchView(accessor.get(IViewsService)).then((searchView) => {
    searchView == null ? void 0 : searchView.selectNextMatch();
  });
}
async function focusPreviousSearchResult(accessor) {
  const editorService = accessor.get(IEditorService);
  const input = editorService.activeEditor;
  if (input instanceof SearchEditorInput) {
    return editorService.activeEditorPane.focusPreviousResult();
  }
  return openSearchView(accessor.get(IViewsService)).then((searchView) => {
    searchView == null ? void 0 : searchView.selectPreviousMatch();
  });
}
async function findOrReplaceInFiles(accessor, expandSearchReplaceWidget) {
  return openSearchView(accessor.get(IViewsService), false).then((openedView) => {
    if (openedView) {
      const searchAndReplaceWidget = openedView.searchAndReplaceWidget;
      searchAndReplaceWidget.toggleReplace(expandSearchReplaceWidget);
      const updatedText = openedView.updateTextFromFindWidgetOrSelection({ allowUnselectedWord: !expandSearchReplaceWidget });
      openedView.searchAndReplaceWidget.focus(void 0, updatedText, updatedText);
    }
  });
}
registerAction2(class RemoveAction extends Action2 {
  constructor() {
    super({
      id: RemoveActionId,
      title: {
        value: localize("RemoveAction.label", "Dismiss"),
        original: "Dismiss"
      },
      category: category$1,
      icon: searchRemoveIcon,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(SearchViewVisibleKey, FileMatchOrMatchFocusKey),
        primary: 20,
        mac: {
          primary: 2048 | 1
        }
      },
      menu: [
        {
          id: MenuId.SearchContext,
          group: "search",
          order: 2
        },
        {
          id: MenuId.SearchActionMenu,
          group: "inline",
          order: 2
        }
      ]
    });
  }
  run(accessor, context) {
    const viewsService = accessor.get(IViewsService);
    const configurationService = accessor.get(IConfigurationService);
    const searchView = getSearchView(viewsService);
    if (!searchView) {
      return;
    }
    let element = context == null ? void 0 : context.element;
    let viewer = context == null ? void 0 : context.viewer;
    if (!viewer) {
      viewer = searchView.getControl();
    }
    if (!element) {
      element = viewer.getFocus()[0] ?? void 0;
    }
    const elementsToRemove = getElementsToOperateOn(viewer, element, configurationService.getValue("search"));
    let focusElement = viewer.getFocus()[0] ?? void 0;
    if (elementsToRemove.length === 0) {
      return;
    }
    if (!focusElement || focusElement instanceof SearchResult) {
      focusElement = element;
    }
    let nextFocusElement;
    const shouldRefocusMatch = shouldRefocus(elementsToRemove, focusElement);
    if (focusElement && shouldRefocusMatch) {
      nextFocusElement = getElementToFocusAfterRemoved(viewer, focusElement, elementsToRemove);
    }
    const searchResult = searchView.searchResult;
    if (searchResult) {
      searchResult.batchRemove(elementsToRemove);
    }
    if (focusElement && shouldRefocusMatch) {
      if (!nextFocusElement) {
        nextFocusElement = getLastNodeFromSameType(viewer, focusElement);
      }
      if (nextFocusElement && !arrayContainsElementOrParent(nextFocusElement, elementsToRemove)) {
        viewer.reveal(nextFocusElement);
        viewer.setFocus([nextFocusElement], getSelectionKeyboardEvent());
        viewer.setSelection([nextFocusElement], getSelectionKeyboardEvent());
      }
    } else if (!equals$1(viewer.getFocus(), viewer.getSelection())) {
      viewer.setSelection(viewer.getFocus());
    }
    viewer.domFocus();
    return;
  }
});
registerAction2(class ReplaceAction extends Action2 {
  constructor() {
    super({
      id: ReplaceActionId,
      title: {
        value: localize("match.replace.label", "Replace"),
        original: "Replace"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(
          SearchViewVisibleKey,
          ReplaceActiveKey,
          MatchFocusKey,
          IsEditableItemKey
        ),
        primary: 1024 | 2048 | 22
      },
      icon: searchReplaceIcon,
      menu: [
        {
          id: MenuId.SearchContext,
          when: ContextKeyExpr.and(
            ReplaceActiveKey,
            MatchFocusKey,
            IsEditableItemKey
          ),
          group: "search",
          order: 1
        },
        {
          id: MenuId.SearchActionMenu,
          when: ContextKeyExpr.and(
            ReplaceActiveKey,
            MatchFocusKey,
            IsEditableItemKey
          ),
          group: "inline",
          order: 1
        }
      ]
    });
  }
  async run(accessor, context) {
    return performReplace(accessor, context);
  }
});
registerAction2(class ReplaceAllAction2 extends Action2 {
  constructor() {
    super({
      id: ReplaceAllInFileActionId,
      title: {
        value: localize("file.replaceAll.label", "Replace All"),
        original: "Replace All"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(
          SearchViewVisibleKey,
          ReplaceActiveKey,
          FileFocusKey,
          IsEditableItemKey
        ),
        primary: 1024 | 2048 | 22,
        secondary: [2048 | 1024 | 3]
      },
      icon: searchReplaceIcon,
      menu: [
        {
          id: MenuId.SearchContext,
          when: ContextKeyExpr.and(
            ReplaceActiveKey,
            FileFocusKey,
            IsEditableItemKey
          ),
          group: "search",
          order: 1
        },
        {
          id: MenuId.SearchActionMenu,
          when: ContextKeyExpr.and(
            ReplaceActiveKey,
            FileFocusKey,
            IsEditableItemKey
          ),
          group: "inline",
          order: 1
        }
      ]
    });
  }
  async run(accessor, context) {
    return performReplace(accessor, context);
  }
});
registerAction2(class ReplaceAllInFolderAction extends Action2 {
  constructor() {
    super({
      id: ReplaceAllInFolderActionId,
      title: {
        value: localize("file.replaceAll.label", "Replace All"),
        original: "Replace All"
      },
      category: category$1,
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(
          SearchViewVisibleKey,
          ReplaceActiveKey,
          FolderFocusKey,
          IsEditableItemKey
        ),
        primary: 1024 | 2048 | 22,
        secondary: [2048 | 1024 | 3]
      },
      icon: searchReplaceIcon,
      menu: [
        {
          id: MenuId.SearchContext,
          when: ContextKeyExpr.and(
            ReplaceActiveKey,
            FolderFocusKey,
            IsEditableItemKey
          ),
          group: "search",
          order: 1
        },
        {
          id: MenuId.SearchActionMenu,
          when: ContextKeyExpr.and(
            ReplaceActiveKey,
            FolderFocusKey,
            IsEditableItemKey
          ),
          group: "inline",
          order: 1
        }
      ]
    });
  }
  async run(accessor, context) {
    return performReplace(accessor, context);
  }
});
function performReplace(accessor, context) {
  const configurationService = accessor.get(IConfigurationService);
  const viewsService = accessor.get(IViewsService);
  const viewlet = getSearchView(viewsService);
  const viewer = (context == null ? void 0 : context.viewer) ?? (viewlet == null ? void 0 : viewlet.getControl());
  if (!viewer) {
    return;
  }
  const element = (context == null ? void 0 : context.element) ?? viewer.getFocus()[0];
  const elementsToReplace = getElementsToOperateOn(viewer, element ?? void 0, configurationService.getValue("search"));
  let focusElement = viewer.getFocus()[0];
  if (!focusElement || focusElement && !arrayContainsElementOrParent(focusElement, elementsToReplace) || focusElement instanceof SearchResult) {
    focusElement = element;
  }
  if (elementsToReplace.length === 0) {
    return;
  }
  let nextFocusElement;
  if (focusElement) {
    nextFocusElement = getElementToFocusAfterRemoved(viewer, focusElement, elementsToReplace);
  }
  const searchResult = viewlet == null ? void 0 : viewlet.searchResult;
  if (searchResult) {
    searchResult.batchReplace(elementsToReplace);
  }
  if (focusElement) {
    if (!nextFocusElement) {
      nextFocusElement = getLastNodeFromSameType(viewer, focusElement);
    }
    if (nextFocusElement) {
      viewer.reveal(nextFocusElement);
      viewer.setFocus([nextFocusElement], getSelectionKeyboardEvent());
      viewer.setSelection([nextFocusElement], getSelectionKeyboardEvent());
      if (nextFocusElement instanceof Match) {
        const useReplacePreview = configurationService.getValue().search.useReplacePreview;
        if (!useReplacePreview || hasToOpenFile(accessor, nextFocusElement) || nextFocusElement instanceof MatchInNotebook) {
          viewlet == null ? void 0 : viewlet.open(nextFocusElement, true);
        } else {
          accessor.get(IReplaceService).openReplacePreview(nextFocusElement, true);
        }
      } else if (nextFocusElement instanceof FileMatch$1) {
        viewlet == null ? void 0 : viewlet.open(nextFocusElement, true);
      }
    }
  }
  viewer.domFocus();
}
function hasToOpenFile(accessor, currBottomElem) {
  if (!(currBottomElem instanceof Match)) {
    return false;
  }
  const activeEditor = accessor.get(IEditorService).activeEditor;
  const file = activeEditor == null ? void 0 : activeEditor.resource;
  if (file) {
    return accessor.get(IUriIdentityService).extUri.isEqual(file, currBottomElem.parent().resource);
  }
  return false;
}
function compareLevels(elem1, elem2) {
  if (elem1 instanceof Match) {
    if (elem2 instanceof Match) {
      return 0;
    } else {
      return -1;
    }
  } else if (elem1 instanceof FileMatch$1) {
    if (elem2 instanceof Match) {
      return 1;
    } else if (elem2 instanceof FileMatch$1) {
      return 0;
    } else {
      return -1;
    }
  } else {
    if (elem2 instanceof FolderMatch) {
      return 0;
    } else {
      return 1;
    }
  }
}
function getElementToFocusAfterRemoved(viewer, element, elementsToRemove) {
  const navigator = viewer.navigate(element);
  if (element instanceof FolderMatch) {
    while (!!navigator.next() && (!(navigator.current() instanceof FolderMatch) || arrayContainsElementOrParent(navigator.current(), elementsToRemove))) {
    }
  } else if (element instanceof FileMatch$1) {
    while (!!navigator.next() && (!(navigator.current() instanceof FileMatch$1) || arrayContainsElementOrParent(navigator.current(), elementsToRemove))) {
      viewer.expand(navigator.current());
    }
  } else {
    while (navigator.next() && (!(navigator.current() instanceof Match) || arrayContainsElementOrParent(navigator.current(), elementsToRemove))) {
      viewer.expand(navigator.current());
    }
  }
  return navigator.current();
}
function getLastNodeFromSameType(viewer, element) {
  let lastElem = viewer.lastVisibleElement ?? null;
  while (lastElem) {
    const compareVal = compareLevels(element, lastElem);
    if (compareVal === -1) {
      viewer.expand(lastElem);
      lastElem = viewer.lastVisibleElement;
    } else if (compareVal === 1) {
      lastElem = viewer.getParentElement(lastElem);
    } else {
      return lastElem;
    }
  }
  return void 0;
}
registerAction2((_m = class extends Action2 {
  constructor() {
    super({
      id: ShowAllSymbolsActionId,
      title: {
        value: localize("showTriggerActions", "Go to Symbol in Workspace..."),
        original: "Go to Symbol in Workspace...",
        mnemonicTitle: localize(
          { key: "miGotoSymbolInWorkspace", comment: ["&& denotes a mnemonic"] },
          "Go to Symbol in &&Workspace..."
        )
      },
      f1: true,
      keybinding: {
        weight: 200,
        primary: 2048 | 50
      },
      menu: {
        id: MenuId.MenubarGoMenu,
        group: "3_global_nav",
        order: 2
      }
    });
  }
  async run(accessor) {
    accessor.get(IQuickInputService).quickAccess.show(_m.ALL_SYMBOLS_PREFIX);
  }
}, _m.ID = "workbench.action.showAllSymbols", _m.LABEL = localize("showTriggerActions", "Go to Symbol in Workspace..."), _m.ALL_SYMBOLS_PREFIX = "#", _m));
registerAction2(class ClearSearchHistoryCommandAction extends Action2 {
  constructor() {
    super({
      id: ClearSearchHistoryCommandId,
      title: {
        value: localize("clearSearchHistoryLabel", "Clear Search History"),
        original: "Clear Search History"
      },
      category: category$1,
      f1: true
    });
  }
  async run(accessor) {
    clearHistoryCommand(accessor);
  }
});
registerAction2(class CancelSearchAction extends Action2 {
  constructor() {
    super({
      id: CancelSearchActionId,
      title: {
        value: localize("CancelSearchAction.label", "Cancel Search"),
        original: "Cancel Search"
      },
      icon: searchStopIcon,
      category: category$1,
      f1: true,
      precondition: SearchStateKey.isEqualTo(SearchUIState.Idle).negate(),
      keybinding: {
        weight: 200,
        when: ContextKeyExpr.and(SearchViewVisibleKey, WorkbenchListFocusContextKey),
        primary: 9
      },
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 0,
        when: ContextKeyExpr.and(ContextKeyExpr.equals("view", VIEW_ID), SearchStateKey.isEqualTo(SearchUIState.SlowSearch))
      }]
    });
  }
  run(accessor) {
    return cancelSearch(accessor);
  }
});
registerAction2(class RefreshAction extends Action2 {
  constructor() {
    super({
      id: RefreshSearchResultsActionId,
      title: {
        value: localize("RefreshAction.label", "Refresh"),
        original: "Refresh"
      },
      icon: searchRefreshIcon,
      precondition: ViewHasSearchPatternKey,
      category: category$1,
      f1: true,
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 0,
        when: ContextKeyExpr.and(ContextKeyExpr.equals("view", VIEW_ID), SearchStateKey.isEqualTo(SearchUIState.SlowSearch).negate())
      }]
    });
  }
  run(accessor, ...args) {
    return refreshSearch(accessor);
  }
});
registerAction2(class CollapseDeepestExpandedLevelAction extends Action2 {
  constructor() {
    super({
      id: CollapseSearchResultsActionId,
      title: {
        value: localize("CollapseDeepestExpandedLevelAction.label", "Collapse All"),
        original: "Collapse All"
      },
      category: category$1,
      icon: searchCollapseAllIcon,
      f1: true,
      precondition: ContextKeyExpr.and(HasSearchResults, ViewHasSomeCollapsibleKey),
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 3,
        when: ContextKeyExpr.and(ContextKeyExpr.equals("view", VIEW_ID), ContextKeyExpr.or(HasSearchResults.negate(), ViewHasSomeCollapsibleKey))
      }]
    });
  }
  run(accessor, ...args) {
    return collapseDeepestExpandedLevel(accessor);
  }
});
registerAction2(class ExpandAllAction extends Action2 {
  constructor() {
    super({
      id: ExpandSearchResultsActionId,
      title: {
        value: localize("ExpandAllAction.label", "Expand All"),
        original: "Expand All"
      },
      category: category$1,
      icon: searchExpandAllIcon,
      f1: true,
      precondition: ContextKeyExpr.and(HasSearchResults, ViewHasSomeCollapsibleKey.toNegated()),
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 3,
        when: ContextKeyExpr.and(ContextKeyExpr.equals("view", VIEW_ID), HasSearchResults, ViewHasSomeCollapsibleKey.toNegated())
      }]
    });
  }
  run(accessor, ...args) {
    return expandAll(accessor);
  }
});
registerAction2(class ClearSearchResultsAction extends Action2 {
  constructor() {
    super({
      id: ClearSearchResultsActionId,
      title: {
        value: localize("ClearSearchResultsAction.label", "Clear Search Results"),
        original: "Clear Search Results"
      },
      category: category$1,
      icon: searchClearIcon,
      f1: true,
      precondition: ContextKeyExpr.or(
        HasSearchResults,
        ViewHasSearchPatternKey,
        ViewHasReplacePatternKey,
        ViewHasFilePatternKey
      ),
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 1,
        when: ContextKeyExpr.equals("view", VIEW_ID)
      }]
    });
  }
  run(accessor, ...args) {
    return clearSearchResults(accessor);
  }
});
registerAction2(class ViewAsTreeAction extends Action2 {
  constructor() {
    super({
      id: ViewAsTreeActionId,
      title: {
        value: localize("ViewAsTreeAction.label", "View as Tree"),
        original: "View as Tree"
      },
      category: category$1,
      icon: searchShowAsList,
      f1: true,
      precondition: ContextKeyExpr.and(HasSearchResults, InTreeViewKey.toNegated()),
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 2,
        when: ContextKeyExpr.and(ContextKeyExpr.equals("view", VIEW_ID), InTreeViewKey.toNegated())
      }]
    });
  }
  run(accessor, ...args) {
    const searchView = getSearchView(accessor.get(IViewsService));
    if (searchView) {
      searchView.setTreeView(true);
    }
  }
});
registerAction2(class ViewAsListAction extends Action2 {
  constructor() {
    super({
      id: ViewAsListActionId,
      title: {
        value: localize("ViewAsListAction.label", "View as List"),
        original: "View as List"
      },
      category: category$1,
      icon: searchShowAsTree,
      f1: true,
      precondition: ContextKeyExpr.and(HasSearchResults, InTreeViewKey),
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 2,
        when: ContextKeyExpr.and(ContextKeyExpr.equals("view", VIEW_ID), InTreeViewKey)
      }]
    });
  }
  run(accessor, ...args) {
    const searchView = getSearchView(accessor.get(IViewsService));
    if (searchView) {
      searchView.setTreeView(false);
    }
  }
});
const clearHistoryCommand = (accessor) => {
  const searchHistoryService = accessor.get(ISearchHistoryService);
  searchHistoryService.clearHistory();
};
function expandAll(accessor) {
  const viewsService = accessor.get(IViewsService);
  const searchView = getSearchView(viewsService);
  if (searchView) {
    const viewer = searchView.getControl();
    viewer.expandAll();
  }
}
function clearSearchResults(accessor) {
  const viewsService = accessor.get(IViewsService);
  const searchView = getSearchView(viewsService);
  searchView == null ? void 0 : searchView.clearSearchResults();
}
function cancelSearch(accessor) {
  const viewsService = accessor.get(IViewsService);
  const searchView = getSearchView(viewsService);
  searchView == null ? void 0 : searchView.cancelSearch();
}
function refreshSearch(accessor) {
  const viewsService = accessor.get(IViewsService);
  const searchView = getSearchView(viewsService);
  searchView == null ? void 0 : searchView.triggerQueryChange({ preserveFocus: false });
}
function collapseDeepestExpandedLevel(accessor) {
  var _a2, _b2, _c2;
  const viewsService = accessor.get(IViewsService);
  const searchView = getSearchView(viewsService);
  if (searchView) {
    const viewer = searchView.getControl();
    const navigator = viewer.navigate();
    let node = navigator.first();
    let canCollapseFileMatchLevel = false;
    let canCollapseFirstLevel = false;
    if (node instanceof FolderMatchWorkspaceRoot || searchView.isTreeLayoutViewVisible) {
      while (node = navigator.next()) {
        if (node instanceof Match) {
          canCollapseFileMatchLevel = true;
          break;
        }
        if (searchView.isTreeLayoutViewVisible && !canCollapseFirstLevel) {
          let nodeToTest = node;
          if (node instanceof FolderMatch) {
            const compressionStartNode = (_a2 = viewer.getCompressedTreeNode(node).element) == null ? void 0 : _a2.elements[0];
            nodeToTest = compressionStartNode && !(compressionStartNode instanceof Match) ? compressionStartNode : node;
          }
          const immediateParent = nodeToTest.parent();
          if (!(immediateParent instanceof FolderMatchWorkspaceRoot || immediateParent instanceof FolderMatchNoRoot || immediateParent instanceof SearchResult)) {
            canCollapseFirstLevel = true;
          }
        }
      }
    }
    if (canCollapseFileMatchLevel) {
      node = navigator.first();
      do {
        if (node instanceof FileMatch$1) {
          viewer.collapse(node);
        }
      } while (node = navigator.next());
    } else if (canCollapseFirstLevel) {
      node = navigator.first();
      if (node) {
        do {
          let nodeToTest = node;
          if (node instanceof FolderMatch) {
            const compressionStartNode = (_b2 = viewer.getCompressedTreeNode(node).element) == null ? void 0 : _b2.elements[0];
            nodeToTest = compressionStartNode && !(compressionStartNode instanceof Match) ? compressionStartNode : node;
          }
          const immediateParent = nodeToTest.parent();
          if (immediateParent instanceof FolderMatchWorkspaceRoot || immediateParent instanceof FolderMatchNoRoot) {
            if (viewer.hasElement(node)) {
              viewer.collapse(node, true);
            } else {
              viewer.collapseAll();
            }
          }
        } while (node = navigator.next());
      }
    } else {
      viewer.collapseAll();
    }
    const firstFocusParent = (_c2 = viewer.getFocus()[0]) == null ? void 0 : _c2.parent();
    if (firstFocusParent && (firstFocusParent instanceof FolderMatch || firstFocusParent instanceof FileMatch$1) && viewer.hasElement(firstFocusParent) && viewer.isCollapsed(firstFocusParent)) {
      viewer.domFocus();
      viewer.focusFirst();
      viewer.setSelection(viewer.getFocus());
    }
  }
}
registerContributions$2();
registerContributions$1();
registerContributions();
const SEARCH_MODE_CONFIG = "search.mode";
const viewContainer = Registry.as(Extensions$1.ViewContainersRegistry).registerViewContainer({
  id: VIEWLET_ID$1,
  title: { value: localize("name", "Search"), original: "Search" },
  ctorDescriptor: new SyncDescriptor(
    ViewPaneContainer,
    [VIEWLET_ID$1, { mergeViewWithContainerWhenSingleView: true }]
  ),
  hideIfEmpty: true,
  icon: searchViewIcon,
  order: 1
}, 0, { doNotRegisterOpenCommand: true });
const viewDescriptor = {
  id: VIEW_ID,
  containerIcon: searchViewIcon,
  name: localize("search", "Search"),
  ctorDescriptor: new SyncDescriptor(SearchView),
  canToggleVisibility: false,
  canMoveView: true,
  openCommandActionDescriptor: {
    id: viewContainer.id,
    mnemonicTitle: localize({ key: "miViewSearch", comment: ["&& denotes a mnemonic"] }, "&&Search"),
    keybindings: {
      primary: 2048 | 1024 | 36,
      when: ContextKeyExpr.regex("neverMatch", /doesNotMatch/)
    },
    order: 1
  }
};
Registry.as(Extensions$1.ViewsRegistry).registerViews([viewDescriptor], viewContainer);
const quickAccessRegistry = Registry.as(Extensions$2.Quickaccess);
quickAccessRegistry.registerQuickAccessProvider({
  ctor: AnythingQuickAccessProvider,
  prefix: AnythingQuickAccessProvider.PREFIX,
  placeholder: localize(
    "anythingQuickAccessPlaceholder",
    "Search files by name (append {0} to go to line or {1} to go to symbol)",
    AbstractGotoLineQuickAccessProvider.PREFIX,
    GotoSymbolQuickAccessProvider.PREFIX
  ),
  contextKey: defaultQuickAccessContextKeyValue,
  helpEntries: [{ description: localize("anythingQuickAccess", "Go to File"), commandId: "workbench.action.quickOpen" }]
});
quickAccessRegistry.registerQuickAccessProvider({
  ctor: SymbolsQuickAccessProvider,
  prefix: SymbolsQuickAccessProvider.PREFIX,
  placeholder: localize("symbolsQuickAccessPlaceholder", "Type the name of a symbol to open."),
  contextKey: "inWorkspaceSymbolsPicker",
  helpEntries: [{ description: localize("symbolsQuickAccess", "Go to Symbol in Workspace"), commandId: ShowAllSymbolsActionId }]
});
const configurationRegistry = Registry.as(Extensions$3.Configuration);
configurationRegistry.registerConfiguration({
  id: "search",
  order: 13,
  title: localize("searchConfigurationTitle", "Search"),
  type: "object",
  properties: {
    [SEARCH_EXCLUDE_CONFIG]: {
      type: "object",
      markdownDescription: localize(
        "exclude",
        "Configure [glob patterns](https://code.visualstudio.com/docs/editor/codebasics#_advanced-search-options) for excluding files and folders in fulltext searches and quick open. Inherits all glob patterns from the `#files.exclude#` setting."
      ),
      default: { "**/node_modules": true, "**/bower_components": true, "**/*.code-search": true },
      additionalProperties: {
        anyOf: [
          {
            type: "boolean",
            description: localize(
              "exclude.boolean",
              "The glob pattern to match file paths against. Set to true or false to enable or disable the pattern."
            )
          },
          {
            type: "object",
            properties: {
              when: {
                type: "string",
                pattern: "\\w*\\$\\(basename\\)\\w*",
                default: "$(basename).ext",
                markdownDescription: localize(
                  { key: "exclude.when", comment: ["\\$(basename) should not be translated"] },
                  "Additional check on the siblings of a matching file. Use \\$(basename) as variable for the matching file name."
                )
              }
            }
          }
        ]
      },
      scope: 4
    },
    [SEARCH_MODE_CONFIG]: {
      type: "string",
      enum: ["view", "reuseEditor", "newEditor"],
      default: "view",
      markdownDescription: localize(
        "search.mode",
        "Controls where new `Search: Find in Files` and `Find in Folder` operations occur: either in the search view, or in a search editor."
      ),
      enumDescriptions: [
        localize(
          "search.mode.view",
          "Search in the search view, either in the panel or side bars."
        ),
        localize(
          "search.mode.reuseEditor",
          "Search in an existing search editor if present, otherwise in a new search editor."
        ),
        localize("search.mode.newEditor", "Search in a new search editor.")
      ]
    },
    "search.useRipgrep": {
      type: "boolean",
      description: localize(
        "useRipgrep",
        'This setting is deprecated and now falls back on "search.usePCRE2".'
      ),
      deprecationMessage: localize(
        "useRipgrepDeprecated",
        'Deprecated. Consider "search.usePCRE2" for advanced regex feature support.'
      ),
      default: true
    },
    "search.maintainFileSearchCache": {
      type: "boolean",
      deprecationMessage: localize(
        "maintainFileSearchCacheDeprecated",
        "The search cache is kept in the extension host which never shuts down, so this setting is no longer needed."
      ),
      description: localize(
        "search.maintainFileSearchCache",
        "When enabled, the searchService process will be kept alive instead of being shut down after an hour of inactivity. This will keep the file search cache in memory."
      ),
      default: false
    },
    "search.useIgnoreFiles": {
      type: "boolean",
      markdownDescription: localize(
        "useIgnoreFiles",
        "Controls whether to use `.gitignore` and `.ignore` files when searching for files."
      ),
      default: true,
      scope: 4
    },
    "search.useGlobalIgnoreFiles": {
      type: "boolean",
      markdownDescription: localize(
        "useGlobalIgnoreFiles",
        "Controls whether to use your global gitignore file (e.g., from `$HOME/.config/git/ignore`) when searching for files. Requires `#search.useIgnoreFiles#` to be enabled."
      ),
      default: false,
      scope: 4
    },
    "search.useParentIgnoreFiles": {
      type: "boolean",
      markdownDescription: localize(
        "useParentIgnoreFiles",
        "Controls whether to use `.gitignore` and `.ignore` files in parent directories when searching for files. Requires `#search.useIgnoreFiles#` to be enabled."
      ),
      default: false,
      scope: 4
    },
    "search.quickOpen.includeSymbols": {
      type: "boolean",
      description: localize(
        "search.quickOpen.includeSymbols",
        "Whether to include results from a global symbol search in the file results for Quick Open."
      ),
      default: false
    },
    "search.quickOpen.includeHistory": {
      type: "boolean",
      description: localize(
        "search.quickOpen.includeHistory",
        "Whether to include results from recently opened files in the file results for Quick Open."
      ),
      default: true
    },
    "search.quickOpen.history.filterSortOrder": {
      "type": "string",
      "enum": ["default", "recency"],
      "default": "default",
      "enumDescriptions": [
        localize(
          "filterSortOrder.default",
          "History entries are sorted by relevance based on the filter value used. More relevant entries appear first."
        ),
        localize(
          "filterSortOrder.recency",
          "History entries are sorted by recency. More recently opened entries appear first."
        )
      ],
      "description": localize(
        "filterSortOrder",
        "Controls sorting order of editor history in quick open when filtering."
      )
    },
    "search.followSymlinks": {
      type: "boolean",
      description: localize(
        "search.followSymlinks",
        "Controls whether to follow symlinks while searching."
      ),
      default: true
    },
    "search.smartCase": {
      type: "boolean",
      description: localize(
        "search.smartCase",
        "Search case-insensitively if the pattern is all lowercase, otherwise, search case-sensitively."
      ),
      default: false
    },
    "search.globalFindClipboard": {
      type: "boolean",
      default: false,
      description: localize(
        "search.globalFindClipboard",
        "Controls whether the search view should read or modify the shared find clipboard on macOS."
      ),
      included: isMacintosh
    },
    "search.location": {
      type: "string",
      enum: ["sidebar", "panel"],
      default: "sidebar",
      description: localize(
        "search.location",
        "Controls whether the search will be shown as a view in the sidebar or as a panel in the panel area for more horizontal space."
      ),
      deprecationMessage: localize(
        "search.location.deprecationMessage",
        "This setting is deprecated. You can drag the search icon to a new location instead."
      )
    },
    "search.maxResults": {
      type: ["number", "null"],
      default: 2e4,
      markdownDescription: localize(
        "search.maxResults",
        "Controls the maximum number of search results, this can be set to `null` (empty) to return unlimited results."
      )
    },
    "search.collapseResults": {
      type: "string",
      enum: ["auto", "alwaysCollapse", "alwaysExpand"],
      enumDescriptions: [
        localize(
          "search.collapseResults.auto",
          "Files with less than 10 results are expanded. Others are collapsed."
        ),
        "",
        ""
      ],
      default: "alwaysExpand",
      description: localize(
        "search.collapseAllResults",
        "Controls whether the search results will be collapsed or expanded."
      )
    },
    "search.useReplacePreview": {
      type: "boolean",
      default: true,
      description: localize(
        "search.useReplacePreview",
        "Controls whether to open Replace Preview when selecting or replacing a match."
      )
    },
    "search.showLineNumbers": {
      type: "boolean",
      default: false,
      description: localize(
        "search.showLineNumbers",
        "Controls whether to show line numbers for search results."
      )
    },
    "search.usePCRE2": {
      type: "boolean",
      default: false,
      description: localize(
        "search.usePCRE2",
        "Whether to use the PCRE2 regex engine in text search. This enables using some advanced regex features like lookahead and backreferences. However, not all PCRE2 features are supported - only features that are also supported by JavaScript."
      ),
      deprecationMessage: localize(
        "usePCRE2Deprecated",
        "Deprecated. PCRE2 will be used automatically when using regex features that are only supported by PCRE2."
      )
    },
    "search.actionsPosition": {
      type: "string",
      enum: ["auto", "right"],
      enumDescriptions: [
        localize(
          "search.actionsPositionAuto",
          "Position the actionbar to the right when the search view is narrow, and immediately after the content when the search view is wide."
        ),
        localize(
          "search.actionsPositionRight",
          "Always position the actionbar to the right."
        )
      ],
      default: "right",
      description: localize(
        "search.actionsPosition",
        "Controls the positioning of the actionbar on rows in the search view."
      )
    },
    "search.searchOnType": {
      type: "boolean",
      default: true,
      description: localize("search.searchOnType", "Search all files as you type.")
    },
    "search.seedWithNearestWord": {
      type: "boolean",
      default: false,
      description: localize(
        "search.seedWithNearestWord",
        "Enable seeding search from the word nearest the cursor when the active editor has no selection."
      )
    },
    "search.seedOnFocus": {
      type: "boolean",
      default: false,
      markdownDescription: localize(
        "search.seedOnFocus",
        "Update the search query to the editor's selected text when focusing the search view. This happens either on click or when triggering the `workbench.views.search.focus` command."
      )
    },
    "search.searchOnTypeDebouncePeriod": {
      type: "number",
      default: 300,
      markdownDescription: localize(
        "search.searchOnTypeDebouncePeriod",
        "When {0} is enabled, controls the timeout in milliseconds between a character being typed and the search starting. Has no effect when {0} is disabled.",
        "`#search.searchOnType#`"
      )
    },
    "search.searchEditor.doubleClickBehaviour": {
      type: "string",
      enum: ["selectWord", "goToLocation", "openLocationToSide"],
      default: "goToLocation",
      enumDescriptions: [
        localize(
          "search.searchEditor.doubleClickBehaviour.selectWord",
          "Double-clicking selects the word under the cursor."
        ),
        localize(
          "search.searchEditor.doubleClickBehaviour.goToLocation",
          "Double-clicking opens the result in the active editor group."
        ),
        localize(
          "search.searchEditor.doubleClickBehaviour.openLocationToSide",
          "Double-clicking opens the result in the editor group to the side, creating one if it does not yet exist."
        )
      ],
      markdownDescription: localize(
        "search.searchEditor.doubleClickBehaviour",
        "Configure effect of double-clicking a result in a search editor."
      )
    },
    "search.searchEditor.reusePriorSearchConfiguration": {
      type: "boolean",
      default: false,
      markdownDescription: localize(
        { key: "search.searchEditor.reusePriorSearchConfiguration", comment: ['"Search Editor" is a type of editor that can display search results. "includes, excludes, and flags" refers to the "files to include" and "files to exclude" input boxes, and the flags that control whether a query is case-sensitive or a regex.'] },
        "When enabled, new Search Editors will reuse the includes, excludes, and flags of the previously opened Search Editor."
      )
    },
    "search.searchEditor.defaultNumberOfContextLines": {
      type: ["number", "null"],
      default: 1,
      markdownDescription: localize(
        "search.searchEditor.defaultNumberOfContextLines",
        "The default number of surrounding context lines to use when creating new Search Editors. If using `#search.searchEditor.reusePriorSearchConfiguration#`, this can be set to `null` (empty) to use the prior Search Editor's configuration."
      )
    },
    "search.sortOrder": {
      "type": "string",
      "enum": ["default", "fileNames", "type", "modified", "countDescending", "countAscending"],
      "default": "default",
      "enumDescriptions": [
        localize(
          "searchSortOrder.default",
          "Results are sorted by folder and file names, in alphabetical order."
        ),
        localize(
          "searchSortOrder.filesOnly",
          "Results are sorted by file names ignoring folder order, in alphabetical order."
        ),
        localize(
          "searchSortOrder.type",
          "Results are sorted by file extensions, in alphabetical order."
        ),
        localize(
          "searchSortOrder.modified",
          "Results are sorted by file last modified date, in descending order."
        ),
        localize(
          "searchSortOrder.countDescending",
          "Results are sorted by count per file, in descending order."
        ),
        localize(
          "searchSortOrder.countAscending",
          "Results are sorted by count per file, in ascending order."
        )
      ],
      "description": localize("search.sortOrder", "Controls sorting order of search results.")
    },
    "search.decorations.colors": {
      type: "boolean",
      description: localize(
        "search.decorations.colors",
        "Controls whether search file decorations should use colors."
      ),
      default: true
    },
    "search.decorations.badges": {
      type: "boolean",
      description: localize(
        "search.decorations.badges",
        "Controls whether search file decorations should use badges."
      ),
      default: true
    },
    "search.defaultViewMode": {
      "type": "string",
      "enum": ["tree", "list"],
      "default": "list",
      "enumDescriptions": [
        localize("scm.defaultViewMode.tree", "Shows search results as a tree."),
        localize("scm.defaultViewMode.list", "Shows search results as a list.")
      ],
      "description": localize("search.defaultViewMode", "Controls the default search result view mode.")
    },
    "search.experimental.closedNotebookRichContentResults": {
      type: "boolean",
      description: localize(
        "search.experimental.closedNotebookResults",
        "Show notebook editor rich content results for closed notebooks. Please refresh your search results after changing this setting."
      ),
      default: false
    }
  }
});
CommandsRegistry.registerCommand("_executeWorkspaceSymbolProvider", async function(accessor, ...args) {
  const [query] = args;
  assertType(typeof query === "string");
  const result = await getWorkspaceSymbols(query);
  return result.map((item) => item.symbol);
});
const RESULT_LINE_REGEX = /^(\s+)(\d+)(: |  )(\s*)(.*)$/;
const FILE_LINE_REGEX = /^(\S.*):$/;
let SearchEditor = (_n = class extends AbstractTextCodeEditor {
  get searchResultEditor() {
    return this.editorControl;
  }
  constructor(telemetryService, themeService, storageService, modelService, contextService, labelService, instantiationService, contextViewService, commandService, openerService, notificationService, progressService, textResourceService, editorGroupService, editorService, configurationService, fileService, logService) {
    super(_n.ID, telemetryService, instantiationService, storageService, textResourceService, themeService, editorService, editorGroupService, fileService);
    this.modelService = modelService;
    this.contextService = contextService;
    this.labelService = labelService;
    this.contextViewService = contextViewService;
    this.commandService = commandService;
    this.openerService = openerService;
    this.notificationService = notificationService;
    this.configurationService = configurationService;
    this.logService = logService;
    this.runSearchDelayer = new Delayer(0);
    this.pauseSearching = false;
    this.showingIncludesExcludes = false;
    this.ongoingOperations = 0;
    this.updatingModelForSearch = false;
    this.container = $$1(".search-editor");
    this.searchOperation = this._register(new LongRunningOperation(progressService));
    this._register(this.messageDisposables = new DisposableStore());
    this.searchHistoryDelayer = new Delayer(2e3);
    this.searchModel = this._register(this.instantiationService.createInstance(SearchModel));
  }
  createEditor(parent) {
    append(parent, this.container);
    this.queryEditorContainer = append(this.container, $$1(".query-container"));
    const searchResultContainer = append(this.container, $$1(".search-results"));
    super.createEditor(searchResultContainer);
    this.registerEditorListeners();
    const scopedContextKeyService = assertIsDefined(this.scopedContextKeyService);
    InSearchEditor.bindTo(scopedContextKeyService).set(true);
    this.createQueryEditor(this.queryEditorContainer, this.instantiationService.createChild(new ServiceCollection([IContextKeyService, scopedContextKeyService])), InputBoxFocusedKey.bindTo(scopedContextKeyService));
  }
  createQueryEditor(container, scopedInstantiationService, inputBoxFocusedContextKey) {
    const searchEditorInputboxStyles = getInputBoxStyle({ inputBorder: searchEditorTextInputBorder });
    this.queryEditorWidget = this._register(scopedInstantiationService.createInstance(SearchWidget, container, { _hideReplaceToggle: true, showContextToggle: true, inputBoxStyles: searchEditorInputboxStyles, toggleStyles: defaultToggleStyles }));
    this._register(this.queryEditorWidget.onReplaceToggled(() => this.reLayout()));
    this._register(this.queryEditorWidget.onDidHeightChange(() => this.reLayout()));
    this._register(this.queryEditorWidget.onSearchSubmit(({ delay }) => this.triggerSearch({ delay })));
    if (this.queryEditorWidget.searchInput) {
      this._register(this.queryEditorWidget.searchInput.onDidOptionChange(() => this.triggerSearch({ resetCursor: false })));
    } else {
      this.logService.warn("SearchEditor: SearchWidget.searchInput is undefined, cannot register onDidOptionChange listener");
    }
    this._register(this.queryEditorWidget.onDidToggleContext(() => this.triggerSearch({ resetCursor: false })));
    this.includesExcludesContainer = append(container, $$1(".includes-excludes"));
    this.toggleQueryDetailsButton = append(this.includesExcludesContainer, $$1(".expand" + ThemeIcon.asCSSSelector(searchDetailsIcon), { tabindex: 0, role: "button", title: localize("moreSearch", "Toggle Search Details") }));
    this._register(addDisposableListener(this.toggleQueryDetailsButton, EventType.CLICK, (e) => {
      EventHelper.stop(e);
      this.toggleIncludesExcludes();
    }));
    this._register(addDisposableListener(this.toggleQueryDetailsButton, EventType.KEY_UP, (e) => {
      const event = new StandardKeyboardEvent(e);
      if (event.equals(3) || event.equals(10)) {
        EventHelper.stop(e);
        this.toggleIncludesExcludes();
      }
    }));
    this._register(addDisposableListener(this.toggleQueryDetailsButton, EventType.KEY_DOWN, (e) => {
      var _a2;
      const event = new StandardKeyboardEvent(e);
      if (event.equals(1024 | 2)) {
        if (this.queryEditorWidget.isReplaceActive()) {
          this.queryEditorWidget.focusReplaceAllAction();
        } else {
          this.queryEditorWidget.isReplaceShown() ? (_a2 = this.queryEditorWidget.replaceInput) == null ? void 0 : _a2.focusOnPreserve() : this.queryEditorWidget.focusRegexAction();
        }
        EventHelper.stop(e);
      }
    }));
    const folderIncludesList = append(this.includesExcludesContainer, $$1(".file-types.includes"));
    const filesToIncludeTitle = localize("searchScope.includes", "files to include");
    append(folderIncludesList, $$1("h4", void 0, filesToIncludeTitle));
    this.inputPatternIncludes = this._register(scopedInstantiationService.createInstance(IncludePatternInputWidget, folderIncludesList, this.contextViewService, {
      ariaLabel: localize("label.includes", "Search Include Patterns"),
      inputBoxStyles: searchEditorInputboxStyles
    }));
    this.inputPatternIncludes.onSubmit((triggeredOnType) => this.triggerSearch({ resetCursor: false, delay: triggeredOnType ? this.searchConfig.searchOnTypeDebouncePeriod : 0 }));
    this._register(this.inputPatternIncludes.onChangeSearchInEditorsBox(() => this.triggerSearch()));
    const excludesList = append(this.includesExcludesContainer, $$1(".file-types.excludes"));
    const excludesTitle = localize("searchScope.excludes", "files to exclude");
    append(excludesList, $$1("h4", void 0, excludesTitle));
    this.inputPatternExcludes = this._register(scopedInstantiationService.createInstance(ExcludePatternInputWidget, excludesList, this.contextViewService, {
      ariaLabel: localize("label.excludes", "Search Exclude Patterns"),
      inputBoxStyles: searchEditorInputboxStyles
    }));
    this.inputPatternExcludes.onSubmit((triggeredOnType) => this.triggerSearch({ resetCursor: false, delay: triggeredOnType ? this.searchConfig.searchOnTypeDebouncePeriod : 0 }));
    this._register(this.inputPatternExcludes.onChangeIgnoreBox(() => this.triggerSearch()));
    this.messageBox = append(container, $$1(".messages.text-search-provider-messages"));
    [this.queryEditorWidget.searchInputFocusTracker, this.queryEditorWidget.replaceInputFocusTracker, this.inputPatternExcludes.inputFocusTracker, this.inputPatternIncludes.inputFocusTracker].forEach((tracker) => {
      if (!tracker) {
        return;
      }
      this._register(tracker.onDidFocus(() => setTimeout(() => inputBoxFocusedContextKey.set(true), 0)));
      this._register(tracker.onDidBlur(() => inputBoxFocusedContextKey.set(false)));
    });
  }
  toggleRunAgainMessage(show2) {
    clearNode(this.messageBox);
    this.messageDisposables.clear();
    if (show2) {
      const runAgainLink = append(this.messageBox, $$1("a.pointer.prominent.message", {}, localize("runSearch", "Run Search")));
      this.messageDisposables.add(addDisposableListener(runAgainLink, EventType.CLICK, async () => {
        await this.triggerSearch();
        this.searchResultEditor.focus();
      }));
    }
  }
  _getContributions() {
    const skipContributions = [UnusualLineTerminatorsDetector.ID];
    return EditorExtensionsRegistry.getEditorContributions().filter((c) => skipContributions.indexOf(c.id) === -1);
  }
  getCodeEditorWidgetOptions() {
    return { contributions: this._getContributions() };
  }
  registerEditorListeners() {
    this.searchResultEditor.onMouseUp((e) => {
      var _a2;
      if (e.event.detail === 2) {
        const behaviour = this.searchConfig.searchEditor.doubleClickBehaviour;
        const position = e.target.position;
        if (position && behaviour !== "selectWord") {
          const line = ((_a2 = this.searchResultEditor.getModel()) == null ? void 0 : _a2.getLineContent(position.lineNumber)) ?? "";
          if (line.match(RESULT_LINE_REGEX)) {
            this.searchResultEditor.setSelection(Range.fromPositions(position));
            this.commandService.executeCommand(behaviour === "goToLocation" ? "editor.action.goToDeclaration" : "editor.action.openDeclarationToTheSide");
          } else if (line.match(FILE_LINE_REGEX)) {
            this.searchResultEditor.setSelection(Range.fromPositions(position));
            this.commandService.executeCommand("editor.action.peekDefinition");
          }
        }
      }
    });
    this._register(this.searchResultEditor.onDidChangeModelContent(() => {
      var _a2;
      if (!this.updatingModelForSearch) {
        (_a2 = this.getInput()) == null ? void 0 : _a2.setDirty(true);
      }
    }));
  }
  getControl() {
    return this.searchResultEditor;
  }
  focus() {
    const viewState = this.loadEditorViewState(this.getInput());
    if (viewState && viewState.focused === "editor") {
      this.searchResultEditor.focus();
    } else {
      this.queryEditorWidget.focus();
    }
  }
  focusSearchInput() {
    var _a2;
    (_a2 = this.queryEditorWidget.searchInput) == null ? void 0 : _a2.focus();
  }
  focusFilesToIncludeInput() {
    if (!this.showingIncludesExcludes) {
      this.toggleIncludesExcludes(true);
    }
    this.inputPatternIncludes.focus();
  }
  focusFilesToExcludeInput() {
    if (!this.showingIncludesExcludes) {
      this.toggleIncludesExcludes(true);
    }
    this.inputPatternExcludes.focus();
  }
  focusNextInput() {
    if (this.queryEditorWidget.searchInputHasFocus()) {
      if (this.showingIncludesExcludes) {
        this.inputPatternIncludes.focus();
      } else {
        this.searchResultEditor.focus();
      }
    } else if (this.inputPatternIncludes.inputHasFocus()) {
      this.inputPatternExcludes.focus();
    } else if (this.inputPatternExcludes.inputHasFocus()) {
      this.searchResultEditor.focus();
    } else if (this.searchResultEditor.hasWidgetFocus())
      ;
  }
  focusPrevInput() {
    var _a2;
    if (this.queryEditorWidget.searchInputHasFocus()) {
      this.searchResultEditor.focus();
    } else if (this.inputPatternIncludes.inputHasFocus()) {
      (_a2 = this.queryEditorWidget.searchInput) == null ? void 0 : _a2.focus();
    } else if (this.inputPatternExcludes.inputHasFocus()) {
      this.inputPatternIncludes.focus();
    } else if (this.searchResultEditor.hasWidgetFocus())
      ;
  }
  setQuery(query) {
    var _a2;
    (_a2 = this.queryEditorWidget.searchInput) == null ? void 0 : _a2.setValue(query);
  }
  selectQuery() {
    var _a2;
    (_a2 = this.queryEditorWidget.searchInput) == null ? void 0 : _a2.select();
  }
  toggleWholeWords() {
    var _a2;
    (_a2 = this.queryEditorWidget.searchInput) == null ? void 0 : _a2.setWholeWords(!this.queryEditorWidget.searchInput.getWholeWords());
    this.triggerSearch({ resetCursor: false });
  }
  toggleRegex() {
    var _a2;
    (_a2 = this.queryEditorWidget.searchInput) == null ? void 0 : _a2.setRegex(!this.queryEditorWidget.searchInput.getRegex());
    this.triggerSearch({ resetCursor: false });
  }
  toggleCaseSensitive() {
    var _a2;
    (_a2 = this.queryEditorWidget.searchInput) == null ? void 0 : _a2.setCaseSensitive(!this.queryEditorWidget.searchInput.getCaseSensitive());
    this.triggerSearch({ resetCursor: false });
  }
  toggleContextLines() {
    this.queryEditorWidget.toggleContextLines();
  }
  modifyContextLines(increase) {
    this.queryEditorWidget.modifyContextLines(increase);
  }
  toggleQueryDetails() {
    this.toggleIncludesExcludes();
  }
  deleteResultBlock() {
    const linesToDelete = /* @__PURE__ */ new Set();
    const selections = this.searchResultEditor.getSelections();
    const model = this.searchResultEditor.getModel();
    if (!(selections && model)) {
      return;
    }
    const maxLine = model.getLineCount();
    const minLine = 1;
    const deleteUp = (start) => {
      for (let cursor = start; cursor >= minLine; cursor--) {
        const line = model.getLineContent(cursor);
        linesToDelete.add(cursor);
        if (line[0] !== void 0 && line[0] !== " ") {
          break;
        }
      }
    };
    const deleteDown = (start) => {
      linesToDelete.add(start);
      for (let cursor = start + 1; cursor <= maxLine; cursor++) {
        const line = model.getLineContent(cursor);
        if (line[0] !== void 0 && line[0] !== " ") {
          return cursor;
        }
        linesToDelete.add(cursor);
      }
      return;
    };
    const endingCursorLines = [];
    for (const selection of selections) {
      const lineNumber = selection.startLineNumber;
      endingCursorLines.push(deleteDown(lineNumber));
      deleteUp(lineNumber);
      for (let inner = selection.startLineNumber; inner <= selection.endLineNumber; inner++) {
        linesToDelete.add(inner);
      }
    }
    if (endingCursorLines.length === 0) {
      endingCursorLines.push(1);
    }
    const isDefined = (x) => x !== void 0;
    model.pushEditOperations(this.searchResultEditor.getSelections(), [...linesToDelete].map((line) => ({ range: new Range(line, 1, line + 1, 1), text: "" })), () => endingCursorLines.filter(isDefined).map((line) => new Selection(line, 1, line, 1)));
  }
  cleanState() {
    var _a2;
    (_a2 = this.getInput()) == null ? void 0 : _a2.setDirty(false);
  }
  get searchConfig() {
    return this.configurationService.getValue("search");
  }
  iterateThroughMatches(reverse) {
    var _a2, _b2;
    const model = this.searchResultEditor.getModel();
    if (!model) {
      return;
    }
    const lastLine = model.getLineCount() ?? 1;
    const lastColumn = model.getLineLength(lastLine);
    const fallbackStart = reverse ? new Position(lastLine, lastColumn) : new Position(1, 1);
    const currentPosition = ((_a2 = this.searchResultEditor.getSelection()) == null ? void 0 : _a2.getStartPosition()) ?? fallbackStart;
    const matchRanges = (_b2 = this.getInput()) == null ? void 0 : _b2.getMatchRanges();
    if (!matchRanges) {
      return;
    }
    const matchRange = (reverse ? findPrevRange : findNextRange)(matchRanges, currentPosition);
    this.searchResultEditor.setSelection(matchRange);
    this.searchResultEditor.revealLineInCenterIfOutsideViewport(matchRange.startLineNumber);
    this.searchResultEditor.focus();
    const matchLineText = model.getLineContent(matchRange.startLineNumber);
    const matchText = model.getValueInRange(matchRange);
    let file = "";
    for (let line = matchRange.startLineNumber; line >= 1; line--) {
      const lineText = model.getValueInRange(new Range(line, 1, line, 2));
      if (lineText !== " ") {
        file = model.getLineContent(line);
        break;
      }
    }
    alert(localize(
      "searchResultItem",
      "Matched {0} at {1} in file {2}",
      matchText,
      matchLineText,
      file.slice(0, file.length - 1)
    ));
  }
  focusNextResult() {
    this.iterateThroughMatches(false);
  }
  focusPreviousResult() {
    this.iterateThroughMatches(true);
  }
  focusAllResults() {
    var _a2;
    this.searchResultEditor.setSelections((((_a2 = this.getInput()) == null ? void 0 : _a2.getMatchRanges()) ?? []).map((range) => new Selection(
      range.startLineNumber,
      range.startColumn,
      range.endLineNumber,
      range.endColumn
    )));
    this.searchResultEditor.focus();
  }
  async triggerSearch(_options) {
    const options = { resetCursor: true, delay: 0, ..._options };
    if (!this.pauseSearching) {
      await this.runSearchDelayer.trigger(async () => {
        this.toggleRunAgainMessage(false);
        await this.doRunSearch();
        if (options.resetCursor) {
          this.searchResultEditor.setPosition(new Position(1, 1));
          this.searchResultEditor.setScrollPosition({ scrollTop: 0, scrollLeft: 0 });
        }
        if (options.focusResults) {
          this.searchResultEditor.focus();
        }
      }, options.delay);
    }
  }
  readConfigFromWidget() {
    var _a2, _b2, _c2, _d2;
    return {
      isCaseSensitive: ((_a2 = this.queryEditorWidget.searchInput) == null ? void 0 : _a2.getCaseSensitive()) ?? false,
      contextLines: this.queryEditorWidget.getContextLines(),
      filesToExclude: this.inputPatternExcludes.getValue(),
      filesToInclude: this.inputPatternIncludes.getValue(),
      query: ((_b2 = this.queryEditorWidget.searchInput) == null ? void 0 : _b2.getValue()) ?? "",
      isRegexp: ((_c2 = this.queryEditorWidget.searchInput) == null ? void 0 : _c2.getRegex()) ?? false,
      matchWholeWord: ((_d2 = this.queryEditorWidget.searchInput) == null ? void 0 : _d2.getWholeWords()) ?? false,
      useExcludeSettingsAndIgnoreFiles: this.inputPatternExcludes.useExcludesAndIgnoreFiles(),
      onlyOpenEditors: this.inputPatternIncludes.onlySearchInOpenEditors(),
      showIncludesExcludes: this.showingIncludesExcludes,
      notebookSearchConfig: {
        includeMarkupInput: this.queryEditorWidget.getNotebookFilters().markupInput,
        includeMarkupPreview: this.queryEditorWidget.getNotebookFilters().markupPreview,
        includeCodeInput: this.queryEditorWidget.getNotebookFilters().codeInput,
        includeOutput: this.queryEditorWidget.getNotebookFilters().codeOutput
      }
    };
  }
  async doRunSearch() {
    this.searchModel.cancelSearch(true);
    const startInput = this.getInput();
    if (!startInput) {
      return;
    }
    this.searchHistoryDelayer.trigger(() => {
      var _a2;
      (_a2 = this.queryEditorWidget.searchInput) == null ? void 0 : _a2.onSearchSubmit();
      this.inputPatternExcludes.onSearchSubmit();
      this.inputPatternIncludes.onSearchSubmit();
    });
    const config = this.readConfigFromWidget();
    if (!config.query) {
      return;
    }
    const content = {
      pattern: config.query,
      isRegExp: config.isRegexp,
      isCaseSensitive: config.isCaseSensitive,
      isWordMatch: config.matchWholeWord
    };
    const options = {
      _reason: "searchEditor",
      extraFileResources: this.instantiationService.invokeFunction(getOutOfWorkspaceEditorResources),
      maxResults: withNullAsUndefined(this.searchConfig.maxResults),
      disregardIgnoreFiles: !config.useExcludeSettingsAndIgnoreFiles || void 0,
      disregardExcludeSettings: !config.useExcludeSettingsAndIgnoreFiles || void 0,
      excludePattern: config.filesToExclude,
      includePattern: config.filesToInclude,
      onlyOpenEditors: config.onlyOpenEditors,
      previewOptions: {
        matchLines: 1,
        charsPerLine: 1e3
      },
      afterContext: config.contextLines,
      beforeContext: config.contextLines,
      isSmartCase: this.searchConfig.smartCase,
      expandPatterns: true,
      notebookSearchConfig: {
        includeMarkupInput: config.notebookSearchConfig.includeMarkupInput,
        includeMarkupPreview: config.notebookSearchConfig.includeMarkupPreview,
        includeCodeInput: config.notebookSearchConfig.includeCodeInput,
        includeOutput: config.notebookSearchConfig.includeOutput
      }
    };
    const folderResources = this.contextService.getWorkspace().folders;
    let query;
    try {
      const queryBuilder = this.instantiationService.createInstance(QueryBuilder);
      query = queryBuilder.text(content, folderResources.map((folder) => folder.uri), options);
    } catch (err) {
      return;
    }
    this.searchOperation.start(500);
    this.ongoingOperations++;
    const { configurationModel } = await startInput.resolveModels();
    configurationModel.updateConfig(config);
    startInput.ongoingSearchOperation = this.searchModel.search(query).finally(() => {
      this.ongoingOperations--;
      if (this.ongoingOperations === 0) {
        this.searchOperation.stop();
      }
    });
    const searchOperation = await startInput.ongoingSearchOperation;
    await this.onSearchComplete(searchOperation, config, startInput);
  }
  async onSearchComplete(searchOperation, startConfig, startInput) {
    const input = this.getInput();
    if (!input || input !== startInput || JSON.stringify(startConfig) !== JSON.stringify(this.readConfigFromWidget())) {
      return;
    }
    input.ongoingSearchOperation = void 0;
    const sortOrder = this.searchConfig.sortOrder;
    if (sortOrder === "modified") {
      await this.retrieveFileStats(this.searchModel.searchResult);
    }
    const controller = ReferencesController.get(this.searchResultEditor);
    controller == null ? void 0 : controller.closeWidget(false);
    const labelFormatter = (uri) => this.labelService.getUriLabel(uri, { relative: true });
    const results = serializeSearchResultForEditor(this.searchModel.searchResult, startConfig.filesToInclude, startConfig.filesToExclude, startConfig.contextLines, labelFormatter, sortOrder, searchOperation == null ? void 0 : searchOperation.limitHit);
    const { resultsModel } = await input.resolveModels();
    this.updatingModelForSearch = true;
    this.modelService.updateModel(resultsModel, results.text);
    this.updatingModelForSearch = false;
    if (searchOperation && searchOperation.messages) {
      for (const message of searchOperation.messages) {
        this.addMessage(message);
      }
    }
    this.reLayout();
    input.setDirty(!input.hasCapability(4));
    input.setMatchRanges(results.matchRanges);
  }
  addMessage(message) {
    let messageBox;
    if (this.messageBox.firstChild) {
      messageBox = this.messageBox.firstChild;
    } else {
      messageBox = append(this.messageBox, $$1(".message"));
    }
    append(messageBox, renderSearchMessage(message, this.instantiationService, this.notificationService, this.openerService, this.commandService, this.messageDisposables, () => this.triggerSearch()));
  }
  async retrieveFileStats(searchResult) {
    const files = searchResult.matches().filter((f) => !f.fileStat).map((f) => f.resolveFileStat(this.fileService));
    await Promise.all(files);
  }
  layout(dimension) {
    this.dimension = dimension;
    this.reLayout();
  }
  getSelected() {
    var _a2;
    const selection = this.searchResultEditor.getSelection();
    if (selection) {
      return ((_a2 = this.searchResultEditor.getModel()) == null ? void 0 : _a2.getValueInRange(selection)) ?? "";
    }
    return "";
  }
  reLayout() {
    if (this.dimension) {
      this.queryEditorWidget.setWidth(this.dimension.width - 28);
      this.searchResultEditor.layout({ height: this.dimension.height - getTotalHeight(this.queryEditorContainer), width: this.dimension.width });
      this.inputPatternExcludes.setWidth(this.dimension.width - 28);
      this.inputPatternIncludes.setWidth(this.dimension.width - 28);
    }
  }
  getInput() {
    return this._input;
  }
  setSearchConfig(config) {
    var _a2, _b2, _c2;
    this.priorConfig = config;
    if (config.query !== void 0) {
      this.queryEditorWidget.setValue(config.query);
    }
    if (config.isCaseSensitive !== void 0) {
      (_a2 = this.queryEditorWidget.searchInput) == null ? void 0 : _a2.setCaseSensitive(config.isCaseSensitive);
    }
    if (config.isRegexp !== void 0) {
      (_b2 = this.queryEditorWidget.searchInput) == null ? void 0 : _b2.setRegex(config.isRegexp);
    }
    if (config.matchWholeWord !== void 0) {
      (_c2 = this.queryEditorWidget.searchInput) == null ? void 0 : _c2.setWholeWords(config.matchWholeWord);
    }
    if (config.contextLines !== void 0) {
      this.queryEditorWidget.setContextLines(config.contextLines);
    }
    if (config.filesToExclude !== void 0) {
      this.inputPatternExcludes.setValue(config.filesToExclude);
    }
    if (config.filesToInclude !== void 0) {
      this.inputPatternIncludes.setValue(config.filesToInclude);
    }
    if (config.onlyOpenEditors !== void 0) {
      this.inputPatternIncludes.setOnlySearchInOpenEditors(config.onlyOpenEditors);
    }
    if (config.useExcludeSettingsAndIgnoreFiles !== void 0) {
      this.inputPatternExcludes.setUseExcludesAndIgnoreFiles(config.useExcludeSettingsAndIgnoreFiles);
    }
    if (config.showIncludesExcludes !== void 0) {
      this.toggleIncludesExcludes(config.showIncludesExcludes);
    }
  }
  async setInput(newInput, options, context, token) {
    await super.setInput(newInput, options, context, token);
    if (token.isCancellationRequested) {
      return;
    }
    const { configurationModel, resultsModel } = await newInput.resolveModels();
    if (token.isCancellationRequested) {
      return;
    }
    this.searchResultEditor.setModel(resultsModel);
    this.pauseSearching = true;
    this.toggleRunAgainMessage(!newInput.ongoingSearchOperation && resultsModel.getLineCount() === 1 && resultsModel.getValue() === "" && configurationModel.config.query !== "");
    this.setSearchConfig(configurationModel.config);
    this._register(configurationModel.onConfigDidUpdate((newConfig) => {
      if (newConfig !== this.priorConfig) {
        this.pauseSearching = true;
        this.setSearchConfig(newConfig);
        this.pauseSearching = false;
      }
    }));
    this.restoreViewState(context);
    if (!(options == null ? void 0 : options.preserveFocus)) {
      this.focus();
    }
    this.pauseSearching = false;
    if (newInput.ongoingSearchOperation) {
      const existingConfig = this.readConfigFromWidget();
      newInput.ongoingSearchOperation.then((complete) => {
        this.onSearchComplete(complete, existingConfig, newInput);
      });
    }
  }
  toggleIncludesExcludes(_shouldShow) {
    const cls = "expanded";
    const shouldShow = _shouldShow ?? !this.includesExcludesContainer.classList.contains(cls);
    if (shouldShow) {
      this.toggleQueryDetailsButton.setAttribute("aria-expanded", "true");
      this.includesExcludesContainer.classList.add(cls);
    } else {
      this.toggleQueryDetailsButton.setAttribute("aria-expanded", "false");
      this.includesExcludesContainer.classList.remove(cls);
    }
    this.showingIncludesExcludes = this.includesExcludesContainer.classList.contains(cls);
    this.reLayout();
  }
  toEditorViewStateResource(input) {
    if (input.typeId === SearchEditorInputTypeId) {
      return input.modelUri;
    }
    return void 0;
  }
  computeEditorViewState(resource) {
    var _a2;
    const control = this.getControl();
    const editorViewState = control.saveViewState();
    if (!editorViewState) {
      return void 0;
    }
    if (resource.toString() !== ((_a2 = this.getInput()) == null ? void 0 : _a2.modelUri.toString())) {
      return void 0;
    }
    return { ...editorViewState, focused: this.searchResultEditor.hasWidgetFocus() ? "editor" : "input" };
  }
  tracksEditorViewState(input) {
    return input.typeId === SearchEditorInputTypeId;
  }
  restoreViewState(context) {
    const viewState = this.loadEditorViewState(this.getInput(), context);
    if (viewState) {
      this.searchResultEditor.restoreViewState(viewState);
    }
  }
  getAriaLabel() {
    var _a2;
    return ((_a2 = this.getInput()) == null ? void 0 : _a2.getName()) ?? localize("searchEditor", "Search");
  }
}, _n.ID = SearchEditorID, _n.SEARCH_EDITOR_VIEW_STATE_PREFERENCE_KEY = "searchEditorViewState", _n);
SearchEditor = __decorate([
  __param(0, ITelemetryService),
  __param(1, IThemeService),
  __param(2, IStorageService),
  __param(3, IModelService),
  __param(4, IWorkspaceContextService),
  __param(5, ILabelService),
  __param(6, IInstantiationService),
  __param(7, IContextViewService),
  __param(8, ICommandService),
  __param(9, IOpenerService),
  __param(10, INotificationService),
  __param(11, IEditorProgressService),
  __param(12, ITextResourceConfigurationService),
  __param(13, IEditorGroupsService),
  __param(14, IEditorService),
  __param(15, IConfigurationService),
  __param(16, IFileService),
  __param(17, ILogService)
], SearchEditor);
const searchEditorTextInputBorder = registerColor("searchEditor.textInputBorder", { dark: inputBorder, light: inputBorder, hcDark: inputBorder, hcLight: inputBorder }, localize("textInputBoxBorder", "Search editor text input box border."));
function findNextRange(matchRanges, currentPosition) {
  for (const matchRange of matchRanges) {
    if (Position.isBefore(currentPosition, matchRange.getStartPosition())) {
      return matchRange;
    }
  }
  return matchRanges[0];
}
function findPrevRange(matchRanges, currentPosition) {
  for (let i = matchRanges.length - 1; i >= 0; i--) {
    const matchRange = matchRanges[i];
    if (Position.isBefore(matchRange.getStartPosition(), currentPosition)) {
      {
        return matchRange;
      }
    }
  }
  return matchRanges[matchRanges.length - 1];
}
const OpenInEditorCommandId = "search.action.openInEditor";
const OpenNewEditorToSideCommandId = "search.action.openNewEditorToSide";
const FocusQueryEditorWidgetCommandId = "search.action.focusQueryEditorWidget";
const FocusQueryEditorFilesToIncludeCommandId = "search.action.focusFilesToInclude";
const FocusQueryEditorFilesToExcludeCommandId = "search.action.focusFilesToExclude";
const ToggleSearchEditorCaseSensitiveCommandId = "toggleSearchEditorCaseSensitive";
const ToggleSearchEditorWholeWordCommandId = "toggleSearchEditorWholeWord";
const ToggleSearchEditorRegexCommandId = "toggleSearchEditorRegex";
const IncreaseSearchEditorContextLinesCommandId = "increaseSearchEditorContextLines";
const DecreaseSearchEditorContextLinesCommandId = "decreaseSearchEditorContextLines";
const RerunSearchEditorSearchCommandId = "rerunSearchEditorSearch";
const CleanSearchEditorStateCommandId = "cleanSearchEditorState";
const SelectAllSearchEditorMatchesCommandId = "selectAllSearchEditorMatches";
Registry.as(EditorExtensions.EditorPane).registerEditorPane(EditorPaneDescriptor.create(SearchEditor, SearchEditor.ID, localize("searchEditor", "Search Editor")), [
  new SyncDescriptor(SearchEditorInput)
]);
let SearchEditorContribution = class SearchEditorContribution2 {
  constructor(editorResolverService, instantiationService) {
    editorResolverService.registerEditor("*" + SEARCH_EDITOR_EXT, {
      id: SearchEditorInput.ID,
      label: localize("promptOpenWith.searchEditor.displayName", "Search Editor"),
      detail: DEFAULT_EDITOR_ASSOCIATION.providerDisplayName,
      priority: RegisteredEditorPriority.default
    }, {
      singlePerResource: true,
      canSupportResource: (resource) => extname(resource) === SEARCH_EDITOR_EXT
    }, {
      createEditorInput: ({ resource }) => {
        return { editor: instantiationService.invokeFunction(getOrMakeSearchEditorInput, { from: "existingFile", fileUri: resource }) };
      }
    });
  }
};
SearchEditorContribution = __decorate([
  __param(0, IEditorResolverService),
  __param(1, IInstantiationService)
], SearchEditorContribution);
const workbenchContributionsRegistry = Registry.as(Extensions.Workbench);
workbenchContributionsRegistry.registerWorkbenchContribution(SearchEditorContribution, 1);
CommandsRegistry.registerCommand(CleanSearchEditorStateCommandId, (accessor) => {
  const activeEditorPane = accessor.get(IEditorService).activeEditorPane;
  if (activeEditorPane instanceof SearchEditor) {
    activeEditorPane.cleanState();
  }
});
const category = { value: localize("search", "Search Editor"), original: "Search Editor" };
const translateLegacyConfig = (legacyConfig = {}) => {
  const config = {};
  const overrides = {
    includes: "filesToInclude",
    excludes: "filesToExclude",
    wholeWord: "matchWholeWord",
    caseSensitive: "isCaseSensitive",
    regexp: "isRegexp",
    useIgnores: "useExcludeSettingsAndIgnoreFiles"
  };
  Object.entries(legacyConfig).forEach(([key, value]) => {
    config[overrides[key] ?? key] = value;
  });
  return config;
};
const openArgDescription = {
  description: "Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.",
  args: [{
    name: "Open new Search Editor args",
    schema: {
      properties: {
        query: { type: "string" },
        filesToInclude: { type: "string" },
        filesToExclude: { type: "string" },
        contextLines: { type: "number" },
        matchWholeWord: { type: "boolean" },
        isCaseSensitive: { type: "boolean" },
        isRegexp: { type: "boolean" },
        useExcludeSettingsAndIgnoreFiles: { type: "boolean" },
        showIncludesExcludes: { type: "boolean" },
        triggerSearch: { type: "boolean" },
        focusResults: { type: "boolean" },
        onlyOpenEditors: { type: "boolean" }
      }
    }
  }]
};
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "search.searchEditor.action.deleteFileResults",
      title: { value: localize("searchEditor.deleteResultBlock", "Delete File Results"), original: "Delete File Results" },
      keybinding: {
        weight: 100,
        primary: 2048 | 1024 | 1
      },
      precondition: InSearchEditor,
      category,
      f1: true
    });
  }
  async run(accessor) {
    const contextService = accessor.get(IContextKeyService).getContext(document.activeElement);
    if (contextService.getValue(InSearchEditor.serialize())) {
      accessor.get(IEditorService).activeEditorPane.deleteResultBlock();
    }
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: OpenNewEditorCommandId,
      title: { value: localize("search.openNewSearchEditor", "New Search Editor"), original: "New Search Editor" },
      category,
      f1: true,
      description: openArgDescription
    });
  }
  async run(accessor, args) {
    await accessor.get(IInstantiationService).invokeFunction(openNewSearchEditor, translateLegacyConfig({ location: "new", ...args }));
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: OpenEditorCommandId,
      title: { value: localize("search.openSearchEditor", "Open Search Editor"), original: "Open Search Editor" },
      category,
      f1: true,
      description: openArgDescription
    });
  }
  async run(accessor, args) {
    await accessor.get(IInstantiationService).invokeFunction(openNewSearchEditor, translateLegacyConfig({ location: "reuse", ...args }));
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: OpenNewEditorToSideCommandId,
      title: { value: localize("search.openNewEditorToSide", "Open New Search Editor to the Side"), original: "Open new Search Editor to the Side" },
      category,
      f1: true,
      description: openArgDescription
    });
  }
  async run(accessor, args) {
    await accessor.get(IInstantiationService).invokeFunction(openNewSearchEditor, translateLegacyConfig(args), true);
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: OpenInEditorCommandId,
      title: { value: localize("search.openResultsInEditor", "Open Results in Editor"), original: "Open Results in Editor" },
      category,
      f1: true,
      keybinding: {
        primary: 512 | 3,
        when: ContextKeyExpr.and(HasSearchResults, SearchViewFocusedKey),
        weight: 200,
        mac: {
          primary: 2048 | 3
        }
      }
    });
  }
  async run(accessor) {
    const viewsService = accessor.get(IViewsService);
    const instantiationService = accessor.get(IInstantiationService);
    const searchView = getSearchView(viewsService);
    if (searchView) {
      await instantiationService.invokeFunction(createEditorFromSearchResult, searchView.searchResult, searchView.searchIncludePattern.getValue(), searchView.searchExcludePattern.getValue(), searchView.searchIncludePattern.onlySearchInOpenEditors());
    }
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: RerunSearchEditorSearchCommandId,
      title: { value: localize("search.rerunSearchInEditor", "Search Again"), original: "Search Again" },
      category,
      keybinding: {
        primary: 2048 | 1024 | 48,
        when: InSearchEditor,
        weight: 100
      },
      icon: searchRefreshIcon,
      menu: [
        {
          id: MenuId.EditorTitle,
          group: "navigation",
          when: ActiveEditorContext.isEqualTo(SearchEditorID)
        },
        {
          id: MenuId.CommandPalette,
          when: ActiveEditorContext.isEqualTo(SearchEditorID)
        }
      ]
    });
  }
  async run(accessor) {
    const editorService = accessor.get(IEditorService);
    const input = editorService.activeEditor;
    if (input instanceof SearchEditorInput) {
      editorService.activeEditorPane.triggerSearch({ resetCursor: false });
    }
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: FocusQueryEditorWidgetCommandId,
      title: { value: localize("search.action.focusQueryEditorWidget", "Focus Search Editor Input"), original: "Focus Search Editor Input" },
      category,
      f1: true,
      precondition: InSearchEditor,
      keybinding: {
        primary: 9,
        weight: 100
      }
    });
  }
  async run(accessor) {
    const editorService = accessor.get(IEditorService);
    const input = editorService.activeEditor;
    if (input instanceof SearchEditorInput) {
      editorService.activeEditorPane.focusSearchInput();
    }
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: FocusQueryEditorFilesToIncludeCommandId,
      title: { value: localize(
        "search.action.focusFilesToInclude",
        "Focus Search Editor Files to Include"
      ), original: "Focus Search Editor Files to Include" },
      category,
      f1: true,
      precondition: InSearchEditor
    });
  }
  async run(accessor) {
    const editorService = accessor.get(IEditorService);
    const input = editorService.activeEditor;
    if (input instanceof SearchEditorInput) {
      editorService.activeEditorPane.focusFilesToIncludeInput();
    }
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: FocusQueryEditorFilesToExcludeCommandId,
      title: { value: localize(
        "search.action.focusFilesToExclude",
        "Focus Search Editor Files to Exclude"
      ), original: "Focus Search Editor Files to Exclude" },
      category,
      f1: true,
      precondition: InSearchEditor
    });
  }
  async run(accessor) {
    const editorService = accessor.get(IEditorService);
    const input = editorService.activeEditor;
    if (input instanceof SearchEditorInput) {
      editorService.activeEditorPane.focusFilesToExcludeInput();
    }
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: ToggleSearchEditorCaseSensitiveCommandId,
      title: { value: localize("searchEditor.action.toggleSearchEditorCaseSensitive", "Toggle Match Case"), original: "Toggle Match Case" },
      category,
      f1: true,
      precondition: InSearchEditor,
      keybinding: Object.assign({
        weight: 200,
        when: SearchInputBoxFocusedKey
      }, ToggleCaseSensitiveKeybinding)
    });
  }
  run(accessor) {
    toggleSearchEditorCaseSensitiveCommand(accessor);
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: ToggleSearchEditorWholeWordCommandId,
      title: { value: localize(
        "searchEditor.action.toggleSearchEditorWholeWord",
        "Toggle Match Whole Word"
      ), original: "Toggle Match Whole Word" },
      category,
      f1: true,
      precondition: InSearchEditor,
      keybinding: Object.assign({
        weight: 200,
        when: SearchInputBoxFocusedKey
      }, ToggleWholeWordKeybinding)
    });
  }
  run(accessor) {
    toggleSearchEditorWholeWordCommand(accessor);
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: ToggleSearchEditorRegexCommandId,
      title: { value: localize(
        "searchEditor.action.toggleSearchEditorRegex",
        "Toggle Use Regular Expression"
      ), original: 'Toggle Use Regular Expression"' },
      category,
      f1: true,
      precondition: InSearchEditor,
      keybinding: Object.assign({
        weight: 200,
        when: SearchInputBoxFocusedKey
      }, ToggleRegexKeybinding)
    });
  }
  run(accessor) {
    toggleSearchEditorRegexCommand(accessor);
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: ToggleSearchEditorContextLinesCommandId,
      title: { value: localize(
        "searchEditor.action.toggleSearchEditorContextLines",
        "Toggle Context Lines"
      ), original: 'Toggle Context Lines"' },
      category,
      f1: true,
      precondition: InSearchEditor,
      keybinding: {
        weight: 200,
        primary: 512 | 42,
        mac: { primary: 2048 | 512 | 42 }
      }
    });
  }
  run(accessor) {
    toggleSearchEditorContextLinesCommand(accessor);
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: IncreaseSearchEditorContextLinesCommandId,
      title: { original: "Increase Context Lines", value: localize(
        "searchEditor.action.increaseSearchEditorContextLines",
        "Increase Context Lines"
      ) },
      category,
      f1: true,
      precondition: InSearchEditor,
      keybinding: {
        weight: 200,
        primary: 512 | 86
      }
    });
  }
  run(accessor) {
    modifySearchEditorContextLinesCommand(accessor, true);
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: DecreaseSearchEditorContextLinesCommandId,
      title: { original: "Decrease Context Lines", value: localize(
        "searchEditor.action.decreaseSearchEditorContextLines",
        "Decrease Context Lines"
      ) },
      category,
      f1: true,
      precondition: InSearchEditor,
      keybinding: {
        weight: 200,
        primary: 512 | 88
      }
    });
  }
  run(accessor) {
    modifySearchEditorContextLinesCommand(accessor, false);
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: SelectAllSearchEditorMatchesCommandId,
      title: { original: "Select All Matches", value: localize("searchEditor.action.selectAllSearchEditorMatches", "Select All Matches") },
      category,
      f1: true,
      precondition: InSearchEditor,
      keybinding: {
        weight: 200,
        primary: 2048 | 1024 | 42
      }
    });
  }
  run(accessor) {
    selectAllSearchEditorMatchesCommand(accessor);
  }
});
registerAction2(class OpenSearchEditorAction extends Action2 {
  constructor() {
    super({
      id: "search.action.openNewEditorFromView",
      title: localize("search.openNewEditor", "Open New Search Editor"),
      category,
      icon: searchNewEditorIcon,
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 2,
        when: ContextKeyExpr.equals("view", VIEW_ID)
      }]
    });
  }
  run(accessor, ...args) {
    return openSearchEditor(accessor);
  }
});
let SearchEditorWorkingCopyEditorHandler = class SearchEditorWorkingCopyEditorHandler2 extends Disposable {
  constructor(instantiationService, workingCopyEditorService) {
    super();
    this.instantiationService = instantiationService;
    this._register(workingCopyEditorService.registerHandler(this));
  }
  handles(workingCopy) {
    return workingCopy.resource.scheme === SearchEditorScheme;
  }
  isOpen(workingCopy, editor) {
    if (!this.handles(workingCopy)) {
      return false;
    }
    return editor instanceof SearchEditorInput && isEqual(workingCopy.resource, editor.modelUri);
  }
  createEditor(workingCopy) {
    const input = this.instantiationService.invokeFunction(getOrMakeSearchEditorInput, { from: "model", modelUri: workingCopy.resource });
    input.setDirty(true);
    return input;
  }
};
SearchEditorWorkingCopyEditorHandler = __decorate([
  __param(0, IInstantiationService),
  __param(1, IWorkingCopyEditorService)
], SearchEditorWorkingCopyEditorHandler);
workbenchContributionsRegistry.registerWorkbenchContribution(SearchEditorWorkingCopyEditorHandler, 2);
function getServiceOverride() {
  return {
    [ISearchService.toString()]: new SyncDescriptor(SearchService, [], true),
    [ISearchWorkbenchService.toString()]: new SyncDescriptor(SearchWorkbenchService, [], true),
    [ISearchHistoryService.toString()]: new SyncDescriptor(SearchHistoryService, [], true),
    [IReplaceService.toString()]: new SyncDescriptor(ReplaceService, [], true)
  };
}
export {
  getServiceOverride as default
};
