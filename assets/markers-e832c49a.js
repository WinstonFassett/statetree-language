var _a, _b, _c;
import { aW as ResourceMap, aV as basename, q4 as flatten, co as isNonEmptyArray, c6 as MarkerSeverity, aY as extUri, k as Range, cm as splitLines, aD as Emitter, d6 as withUndefinedAsNull, CQ as unsupportedSchemas, cq as IMarkerData, CR as Hasher, gM as n, c as localize, cy as Action, aK as ThemeIcon, aM as Codicon, gu as __decorate, gv as __param, oV as ActionViewItem, fH as EventHelper, aP as getDomNodePagePosition, ct as IContextMenuService, D as Disposable, CS as matchesFuzzy2, xc as matchesFuzzy, jT as rtrim, jS as ltrim, xF as splitGlobAware, kZ as parse, CT as TernarySearchTree, d8 as relativePath, CU as getEmptyExpression, aL as registerIcon, Cj as dirname, b0 as ILabelService, a6 as DisposableStore, aG as append, ah as $$1, b3 as CountBadge, b4 as defaultCountBadgeStyles, br as Schemas, b5 as dirname$1, he as IFileService, b1 as IInstantiationService, c2 as IOpenerService, cA as ActionBar, cn as clearNode, c8 as Severity, aI as addDisposableListener, aJ as EventType, js as isUndefinedOrNull, aq as toDisposable, b7 as HighlightedLabel, g6 as Link, ao as createCancelablePromise, cr as getCodeActions, cs as Progress, H as CodeActionTriggerSource, F as CodeActionKind, h2 as applyCodeAction, h3 as ApplyCodeActionReason, l2 as ACTIVE_GROUP, bB as isEqual, a4 as IModelService, gx as IEditorService, a3 as ILanguageFeaturesService, dr as Delayer, aX as dispose, I as IContextKeyService, gL as basename$1, lT as findParentWithClass, xB as WorkbenchTable, bo as Event, uo as DomEmitter, xI as FilterViewPane, ih as Memento, xN as registerNavigableContainer, bT as StandardKeyboardEvent, kX as SIDE_GROUP, ha as deepClone, Ct as ResourceListDnDHandler, Cu as withSelection, kL as Relay, kV as ResourceLabels, zI as groupBy, l0 as EditorResourceAccessor, l1 as SideBySideEditor, bn as addStandardDisposableListener, i as MenuId, cE as Separator, jl as IViewDescriptorService, ay as IConfigurationService, cu as ITelemetryService, c3 as IMarkerService, d7 as IWorkspaceContextService, hz as IUriIdentityService, a$ as IKeybindingService, aa as IStorageService, aQ as IThemeService, z7 as WorkbenchObjectTree, bJ as Iterable, bz as IListService, bu as KeybindingsRegistry, C as ContextKeyExpr, mT as IViewsService, Z as Registry, _ as Extensions, jp as Extensions$1, hh as SyncDescriptor, jv as ViewPaneContainer, h1 as Extensions$2, bF as registerAction2, x3 as ViewAction, CV as viewFilterSubmenu, f6 as Action2, fY as Categories, Bw as FocusedViewContext, v as IClipboardService, Bx as getVisbileViewContextKey, pB as IStatusbarService, cZ as MutableDisposable, kc as NumberBadge, jz as IActivityService } from "./theme-defaults-1df7f429.js";
import { a as MarkersContextKeys, M as Markers } from "./markers-818a6784.js";
import { K as SeverityIcon, R as RangeHighlightDecorations } from "./index-ca8d23e0.js";
import "./index-3bddf13b.js";
function compareMarkersByUri(a, b) {
  return extUri.compare(a.resource, b.resource);
}
function compareResourceMarkers(a, b) {
  const [firstMarkerOfA] = a.markers;
  const [firstMarkerOfB] = b.markers;
  let res = 0;
  if (firstMarkerOfA && firstMarkerOfB) {
    res = MarkerSeverity.compare(firstMarkerOfA.marker.severity, firstMarkerOfB.marker.severity);
  }
  if (res === 0) {
    res = a.path.localeCompare(b.path) || a.name.localeCompare(b.name);
  }
  return res;
}
class ResourceMarkers {
  constructor(id, resource) {
    this.id = id;
    this.resource = resource;
    this._markersMap = new ResourceMap();
    this._total = 0;
    this.path = this.resource.fsPath;
    this.name = basename(this.resource);
  }
  get markers() {
    if (!this._cachedMarkers) {
      this._cachedMarkers = flatten([...this._markersMap.values()]).sort(ResourceMarkers._compareMarkers);
    }
    return this._cachedMarkers;
  }
  has(uri) {
    return this._markersMap.has(uri);
  }
  set(uri, marker) {
    this.delete(uri);
    if (isNonEmptyArray(marker)) {
      this._markersMap.set(uri, marker);
      this._total += marker.length;
      this._cachedMarkers = void 0;
    }
  }
  delete(uri) {
    const array = this._markersMap.get(uri);
    if (array) {
      this._total -= array.length;
      this._cachedMarkers = void 0;
      this._markersMap.delete(uri);
    }
  }
  get total() {
    return this._total;
  }
  static _compareMarkers(a, b) {
    return MarkerSeverity.compare(a.marker.severity, b.marker.severity) || extUri.compare(a.resource, b.resource) || Range.compareRangesUsingStarts(a.marker, b.marker);
  }
}
class Marker {
  get resource() {
    return this.marker.resource;
  }
  get range() {
    return this.marker;
  }
  get lines() {
    if (!this._lines) {
      this._lines = splitLines(this.marker.message);
    }
    return this._lines;
  }
  constructor(id, marker, relatedInformation = []) {
    this.id = id;
    this.marker = marker;
    this.relatedInformation = relatedInformation;
  }
  toString() {
    return JSON.stringify({
      ...this.marker,
      resource: this.marker.resource.path,
      relatedInformation: this.relatedInformation.length ? this.relatedInformation.map((r) => ({ ...r.raw, resource: r.raw.resource.path })) : void 0
    }, null, "	");
  }
}
class MarkerTableItem extends Marker {
  constructor(marker, sourceMatches, codeMatches, messageMatches, fileMatches, ownerMatches) {
    super(marker.id, marker.marker, marker.relatedInformation);
    this.sourceMatches = sourceMatches;
    this.codeMatches = codeMatches;
    this.messageMatches = messageMatches;
    this.fileMatches = fileMatches;
    this.ownerMatches = ownerMatches;
  }
}
class RelatedInformation {
  constructor(id, marker, raw) {
    this.id = id;
    this.marker = marker;
    this.raw = raw;
  }
}
class MarkersModel {
  get resourceMarkers() {
    if (!this.cachedSortedResources) {
      this.cachedSortedResources = [...this.resourcesByUri.values()].sort(compareResourceMarkers);
    }
    return this.cachedSortedResources;
  }
  constructor() {
    this.cachedSortedResources = void 0;
    this._onDidChange = new Emitter();
    this.onDidChange = this._onDidChange.event;
    this._total = 0;
    this.resourcesByUri = /* @__PURE__ */ new Map();
  }
  reset() {
    const removed = /* @__PURE__ */ new Set();
    for (const resourceMarker of this.resourcesByUri.values()) {
      removed.add(resourceMarker);
    }
    this.resourcesByUri.clear();
    this._total = 0;
    this._onDidChange.fire({ removed, added: /* @__PURE__ */ new Set(), updated: /* @__PURE__ */ new Set() });
  }
  get total() {
    return this._total;
  }
  getResourceMarkers(resource) {
    return withUndefinedAsNull(this.resourcesByUri.get(extUri.getComparisonKey(resource, true)));
  }
  setResourceMarkers(resourcesMarkers) {
    const change = { added: /* @__PURE__ */ new Set(), removed: /* @__PURE__ */ new Set(), updated: /* @__PURE__ */ new Set() };
    for (const [resource, rawMarkers] of resourcesMarkers) {
      if (unsupportedSchemas.has(resource.scheme)) {
        continue;
      }
      const key = extUri.getComparisonKey(resource, true);
      let resourceMarkers = this.resourcesByUri.get(key);
      if (isNonEmptyArray(rawMarkers)) {
        if (!resourceMarkers) {
          const resourceMarkersId = this.id(resource.toString());
          resourceMarkers = new ResourceMarkers(resourceMarkersId, resource.with({ fragment: null }));
          this.resourcesByUri.set(key, resourceMarkers);
          change.added.add(resourceMarkers);
        } else {
          change.updated.add(resourceMarkers);
        }
        const markersCountByKey = /* @__PURE__ */ new Map();
        const markers = rawMarkers.map((rawMarker) => {
          const key2 = IMarkerData.makeKey(rawMarker);
          const index = markersCountByKey.get(key2) || 0;
          markersCountByKey.set(key2, index + 1);
          const markerId = this.id(resourceMarkers.id, key2, index, rawMarker.resource.toString());
          let relatedInformation = void 0;
          if (rawMarker.relatedInformation) {
            relatedInformation = rawMarker.relatedInformation.map((r, index2) => new RelatedInformation(this.id(markerId, r.resource.toString(), r.startLineNumber, r.startColumn, r.endLineNumber, r.endColumn, index2), rawMarker, r));
          }
          return new Marker(markerId, rawMarker, relatedInformation);
        });
        this._total -= resourceMarkers.total;
        resourceMarkers.set(resource, markers);
        this._total += resourceMarkers.total;
      } else if (resourceMarkers) {
        this._total -= resourceMarkers.total;
        resourceMarkers.delete(resource);
        this._total += resourceMarkers.total;
        if (resourceMarkers.total === 0) {
          this.resourcesByUri.delete(key);
          change.removed.add(resourceMarkers);
        } else {
          change.updated.add(resourceMarkers);
        }
      }
    }
    this.cachedSortedResources = void 0;
    if (change.added.size || change.removed.size || change.updated.size) {
      this._onDidChange.fire(change);
    }
  }
  id(...values) {
    const hasher = new Hasher();
    for (const value of values) {
      hasher.hash(value);
    }
    return `${hasher.value}`;
  }
  dispose() {
    this._onDidChange.dispose();
    this.resourcesByUri.clear();
  }
}
var css$1 = '.markers-panel .markers-panel-container{height:100%}.markers-panel .hide{display:none}.markers-panel .markers-panel-container .message-box-container{line-height:22px;padding-left:20px}.markers-panel .markers-panel-container .message-box-container .messageAction{cursor:pointer;margin-left:4px;text-decoration:underline}.markers-panel .markers-panel-container .hidden{display:none}.markers-panel .markers-panel-container .codicon.codicon-light-bulb{color:var(--vscode-editorLightBulb-foreground)}.markers-panel .markers-panel-container .codicon.codicon-lightbulb-autofix{color:var(--vscode-editorLightBulbAutoFix-foreground)}.markers-panel .markers-panel-container .tree-container.hidden{display:none;visibility:hidden}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents{display:flex;line-height:22px;padding-right:10px}.monaco-workbench.hc-black .markers-panel .markers-panel-container .tree-container .monaco-tl-contents,.monaco-workbench.hc-light .markers-panel .markers-panel-container .tree-container .monaco-tl-contents{line-height:20px}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-stats{display:inline-block;margin-left:10px}.markers-panel:not(.wide) .markers-panel-container .tree-container .monaco-tl-contents .resource-label-container{flex:1}.markers-panel.wide .markers-panel-container .tree-container .monaco-tl-contents .count-badge-wrapper{margin-left:10px}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-message-details-container{flex:1;overflow:hidden}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-message-details-container>.marker-message-line{overflow:hidden}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-message-details-container>.marker-message-line>.marker-message{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-message-details-container>.marker-message-line.details-container{display:flex}.markers-panel .markers-panel-container .tree-container .monaco-list:focus .monaco-list-row.focused .monaco-tl-contents .details-container a.monaco-link{color:inherit}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .details-container a.monaco-link .monaco-highlighted-label{text-decoration:underline;text-underline-position:under}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-code:before{content:"("}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-code:after{content:")"}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .details-container .marker-line,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .details-container .marker-source,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .details-container .multiline-actions{margin-left:6px}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-code,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-line,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .marker-source,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .related-info-resource,.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .related-info-resource-separator{opacity:.7}.markers-panel .markers-panel-container .tree-container .monaco-tl-contents .highlight{font-weight:700}.markers-panel .monaco-tl-contents .marker-icon{align-items:center;display:flex;height:22px;justify-content:center;margin:0 6px}.markers-panel .monaco-list-row.focused .monaco-tl-contents>.marker-icon.quickFix,.markers-panel .monaco-list-row.selected .monaco-tl-contents>.marker-icon.quickFix,.markers-panel .monaco-list-row:hover .monaco-tl-contents>.marker-icon.quickFix,.markers-panel .monaco-tl-contents .actions .monaco-action-bar{display:none}.markers-panel .monaco-list-row.focused .monaco-tl-contents .actions .monaco-action-bar,.markers-panel .monaco-list-row.selected .monaco-tl-contents .actions .monaco-action-bar,.markers-panel .monaco-list-row:hover .monaco-tl-contents .actions .monaco-action-bar{display:block}.markers-panel .monaco-tl-contents .actions,.markers-panel .monaco-tl-contents .multiline-actions .monaco-action-bar{height:22px}.markers-panel .monaco-tl-contents .actions .action-label,.markers-panel .monaco-tl-contents .multiline-actions .monaco-action-bar .action-label{padding:2px}.markers-panel .monaco-tl-contents .actions .action-item{margin:0 4px}.markers-panel .monaco-tl-contents .actions .action-item.disabled,.markers-panel .monaco-tl-contents .multiline-actions .action-item.disabled{display:none}.markers-panel .markers-table-container .monaco-table .monaco-table-th{align-items:center;display:flex;font-weight:600;padding-left:10px}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td{align-items:center;display:flex;padding-left:10px}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td .highlight{font-weight:700}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.file,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.message,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.owner{overflow:hidden;text-overflow:ellipsis}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.severity{display:flex}.markers-panel .markers-table-container .monaco-table .monaco-list-row.focused .monaco-table-tr>.monaco-table-td.quickFix>.severity,.markers-panel .markers-table-container .monaco-table .monaco-list-row.selected .monaco-table-tr>.monaco-table-td.quickFix>.severity,.markers-panel .markers-table-container .monaco-table .monaco-list-row:hover .monaco-table-tr>.monaco-table-td.quickFix>.severity{display:none}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.actions{margin-left:-3px}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.actions>.monaco-action-bar .action-item{display:none}.markers-panel .markers-table-container .monaco-table .monaco-list-row.focused .monaco-table-tr>.monaco-table-td.quickFix>.actions>.monaco-action-bar .action-item,.markers-panel .markers-table-container .monaco-table .monaco-list-row.selected .monaco-table-tr>.monaco-table-td.quickFix>.actions>.monaco-action-bar .action-item,.markers-panel .markers-table-container .monaco-table .monaco-list-row:hover .monaco-table-tr>.monaco-table-td.quickFix>.actions>.monaco-action-bar .action-item{display:flex}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.code-label:before,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.monaco-link:before{content:"("}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.code-label:after,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.monaco-link:after{content:")"}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.code-label,.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code>.monaco-link{display:none}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code.code-label>.code-label{display:inline}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.code.code-link>.monaco-link{display:inline;text-decoration:underline}.markers-panel .markers-table-container .monaco-table .monaco-list-row .monaco-table-tr>.monaco-table-td>.file>.file-position{margin-left:6px;opacity:.7}';
n(css$1, {});
const _Messages = class _Messages {
};
_Messages.MARKERS_PANEL_TOGGLE_LABEL = localize("problems.view.toggle.label", "Toggle Problems (Errors, Warnings, Infos)");
_Messages.MARKERS_PANEL_SHOW_LABEL = localize("problems.view.focus.label", "Focus Problems (Errors, Warnings, Infos)");
_Messages.PROBLEMS_PANEL_CONFIGURATION_TITLE = localize("problems.panel.configuration.title", "Problems View");
_Messages.PROBLEMS_PANEL_CONFIGURATION_AUTO_REVEAL = localize(
  "problems.panel.configuration.autoreveal",
  "Controls whether Problems view should automatically reveal files when opening them."
);
_Messages.PROBLEMS_PANEL_CONFIGURATION_VIEW_MODE = localize(
  "problems.panel.configuration.viewMode",
  "Controls the default view mode of the Problems view."
);
_Messages.PROBLEMS_PANEL_CONFIGURATION_SHOW_CURRENT_STATUS = localize(
  "problems.panel.configuration.showCurrentInStatus",
  "When enabled shows the current problem in the status bar."
);
_Messages.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER = localize(
  "problems.panel.configuration.compareOrder",
  "Controls the order in which problems are navigated."
);
_Messages.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_SEVERITY = localize(
  "problems.panel.configuration.compareOrder.severity",
  "Navigate problems ordered by severity"
);
_Messages.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_POSITION = localize(
  "problems.panel.configuration.compareOrder.position",
  "Navigate problems ordered by position"
);
_Messages.MARKERS_PANEL_TITLE_PROBLEMS = localize("markers.panel.title.problems", "Problems");
_Messages.MARKERS_PANEL_NO_PROBLEMS_BUILT = localize(
  "markers.panel.no.problems.build",
  "No problems have been detected in the workspace."
);
_Messages.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT = localize(
  "markers.panel.no.problems.activeFile.build",
  "No problems have been detected in the current file."
);
_Messages.MARKERS_PANEL_NO_PROBLEMS_FILTERS = localize(
  "markers.panel.no.problems.filters",
  "No results found with provided filter criteria."
);
_Messages.MARKERS_PANEL_ACTION_TOOLTIP_MORE_FILTERS = localize("markers.panel.action.moreFilters", "More Filters...");
_Messages.MARKERS_PANEL_FILTER_LABEL_SHOW_ERRORS = localize("markers.panel.filter.showErrors", "Show Errors");
_Messages.MARKERS_PANEL_FILTER_LABEL_SHOW_WARNINGS = localize("markers.panel.filter.showWarnings", "Show Warnings");
_Messages.MARKERS_PANEL_FILTER_LABEL_SHOW_INFOS = localize("markers.panel.filter.showInfos", "Show Infos");
_Messages.MARKERS_PANEL_FILTER_LABEL_EXCLUDED_FILES = localize("markers.panel.filter.useFilesExclude", "Hide Excluded Files");
_Messages.MARKERS_PANEL_FILTER_LABEL_ACTIVE_FILE = localize("markers.panel.filter.activeFile", "Show Active File Only");
_Messages.MARKERS_PANEL_ACTION_TOOLTIP_FILTER = localize("markers.panel.action.filter", "Filter Problems");
_Messages.MARKERS_PANEL_ACTION_TOOLTIP_QUICKFIX = localize("markers.panel.action.quickfix", "Show fixes");
_Messages.MARKERS_PANEL_FILTER_ARIA_LABEL = localize("markers.panel.filter.ariaLabel", "Filter Problems");
_Messages.MARKERS_PANEL_FILTER_PLACEHOLDER = localize(
  "markers.panel.filter.placeholder",
  "Filter (e.g. text, **/*.ts, !**/node_modules/**)"
);
_Messages.MARKERS_PANEL_FILTER_ERRORS = localize("markers.panel.filter.errors", "errors");
_Messages.MARKERS_PANEL_FILTER_WARNINGS = localize("markers.panel.filter.warnings", "warnings");
_Messages.MARKERS_PANEL_FILTER_INFOS = localize("markers.panel.filter.infos", "infos");
_Messages.MARKERS_PANEL_SINGLE_ERROR_LABEL = localize("markers.panel.single.error.label", "1 Error");
_Messages.MARKERS_PANEL_MULTIPLE_ERRORS_LABEL = (noOfErrors) => {
  return localize("markers.panel.multiple.errors.label", "{0} Errors", "" + noOfErrors);
};
_Messages.MARKERS_PANEL_SINGLE_WARNING_LABEL = localize("markers.panel.single.warning.label", "1 Warning");
_Messages.MARKERS_PANEL_MULTIPLE_WARNINGS_LABEL = (noOfWarnings) => {
  return localize("markers.panel.multiple.warnings.label", "{0} Warnings", "" + noOfWarnings);
};
_Messages.MARKERS_PANEL_SINGLE_INFO_LABEL = localize("markers.panel.single.info.label", "1 Info");
_Messages.MARKERS_PANEL_MULTIPLE_INFOS_LABEL = (noOfInfos) => {
  return localize("markers.panel.multiple.infos.label", "{0} Infos", "" + noOfInfos);
};
_Messages.MARKERS_PANEL_SINGLE_UNKNOWN_LABEL = localize("markers.panel.single.unknown.label", "1 Unknown");
_Messages.MARKERS_PANEL_MULTIPLE_UNKNOWNS_LABEL = (noOfUnknowns) => {
  return localize("markers.panel.multiple.unknowns.label", "{0} Unknowns", "" + noOfUnknowns);
};
_Messages.MARKERS_PANEL_AT_LINE_COL_NUMBER = (ln, col) => {
  return localize("markers.panel.at.ln.col.number", "[Ln {0}, Col {1}]", "" + ln, "" + col);
};
_Messages.MARKERS_TREE_ARIA_LABEL_RESOURCE = (noOfProblems, fileName, folder) => {
  return localize(
    "problems.tree.aria.label.resource",
    "{0} problems in file {1} of folder {2}",
    noOfProblems,
    fileName,
    folder
  );
};
_Messages.MARKERS_TREE_ARIA_LABEL_MARKER = (marker) => {
  const relatedInformationMessage = marker.relatedInformation.length ? localize(
    "problems.tree.aria.label.marker.relatedInformation",
    " This problem has references to {0} locations.",
    marker.relatedInformation.length
  ) : "";
  switch (marker.marker.severity) {
    case MarkerSeverity.Error:
      return marker.marker.source ? localize(
        "problems.tree.aria.label.error.marker",
        "Error: {0} at line {1} and character {2}.{3} generated by {4}",
        marker.marker.message,
        marker.marker.startLineNumber,
        marker.marker.startColumn,
        relatedInformationMessage,
        marker.marker.source
      ) : localize(
        "problems.tree.aria.label.error.marker.nosource",
        "Error: {0} at line {1} and character {2}.{3}",
        marker.marker.message,
        marker.marker.startLineNumber,
        marker.marker.startColumn,
        relatedInformationMessage
      );
    case MarkerSeverity.Warning:
      return marker.marker.source ? localize(
        "problems.tree.aria.label.warning.marker",
        "Warning: {0} at line {1} and character {2}.{3} generated by {4}",
        marker.marker.message,
        marker.marker.startLineNumber,
        marker.marker.startColumn,
        relatedInformationMessage,
        marker.marker.source
      ) : localize(
        "problems.tree.aria.label.warning.marker.nosource",
        "Warning: {0} at line {1} and character {2}.{3}",
        marker.marker.message,
        marker.marker.startLineNumber,
        marker.marker.startColumn,
        relatedInformationMessage,
        relatedInformationMessage
      );
    case MarkerSeverity.Info:
      return marker.marker.source ? localize(
        "problems.tree.aria.label.info.marker",
        "Info: {0} at line {1} and character {2}.{3} generated by {4}",
        marker.marker.message,
        marker.marker.startLineNumber,
        marker.marker.startColumn,
        relatedInformationMessage,
        marker.marker.source
      ) : localize(
        "problems.tree.aria.label.info.marker.nosource",
        "Info: {0} at line {1} and character {2}.{3}",
        marker.marker.message,
        marker.marker.startLineNumber,
        marker.marker.startColumn,
        relatedInformationMessage
      );
    default:
      return marker.marker.source ? localize(
        "problems.tree.aria.label.marker",
        "Problem: {0} at line {1} and character {2}.{3} generated by {4}",
        marker.marker.source,
        marker.marker.message,
        marker.marker.startLineNumber,
        marker.marker.startColumn,
        relatedInformationMessage,
        marker.marker.source
      ) : localize(
        "problems.tree.aria.label.marker.nosource",
        "Problem: {0} at line {1} and character {2}.{3}",
        marker.marker.message,
        marker.marker.startLineNumber,
        marker.marker.startColumn,
        relatedInformationMessage
      );
  }
};
_Messages.MARKERS_TREE_ARIA_LABEL_RELATED_INFORMATION = (relatedInformation) => localize(
  "problems.tree.aria.label.relatedinfo.message",
  "{0} at line {1} and character {2} in {3}",
  relatedInformation.message,
  relatedInformation.startLineNumber,
  relatedInformation.startColumn,
  basename(relatedInformation.resource)
);
_Messages.SHOW_ERRORS_WARNINGS_ACTION_LABEL = localize("errors.warnings.show.label", "Show Errors and Warnings");
let Messages = _Messages;
var css = ".markers-panel-action-filter>.markers-panel-filter-controls>.monaco-action-bar .action-label.markers-filters.checked{background-color:var(--vscode-inputOption-activeBackground);border-color:var(--vscode-inputOption-activeBorder);color:var(--vscode-inputOption-activeForeground)}";
n(css, {});
class MarkersFilters extends Disposable {
  constructor(options, contextKeyService) {
    super();
    this.contextKeyService = contextKeyService;
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this._excludedFiles = MarkersContextKeys.ShowExcludedFilesFilterContextKey.bindTo(this.contextKeyService);
    this._activeFile = MarkersContextKeys.ShowActiveFileFilterContextKey.bindTo(this.contextKeyService);
    this._showWarnings = MarkersContextKeys.ShowWarningsFilterContextKey.bindTo(this.contextKeyService);
    this._showErrors = MarkersContextKeys.ShowErrorsFilterContextKey.bindTo(this.contextKeyService);
    this._showInfos = MarkersContextKeys.ShowInfoFilterContextKey.bindTo(this.contextKeyService);
    this._showErrors.set(options.showErrors);
    this._showWarnings.set(options.showWarnings);
    this._showInfos.set(options.showInfos);
    this._excludedFiles.set(options.excludedFiles);
    this._activeFile.set(options.activeFile);
    this.filterHistory = options.filterHistory;
  }
  get excludedFiles() {
    return !!this._excludedFiles.get();
  }
  set excludedFiles(filesExclude) {
    if (this._excludedFiles.get() !== filesExclude) {
      this._excludedFiles.set(filesExclude);
      this._onDidChange.fire({ excludedFiles: true });
    }
  }
  get activeFile() {
    return !!this._activeFile.get();
  }
  set activeFile(activeFile) {
    if (this._activeFile.get() !== activeFile) {
      this._activeFile.set(activeFile);
      this._onDidChange.fire({ activeFile: true });
    }
  }
  get showWarnings() {
    return !!this._showWarnings.get();
  }
  set showWarnings(showWarnings) {
    if (this._showWarnings.get() !== showWarnings) {
      this._showWarnings.set(showWarnings);
      this._onDidChange.fire({ showWarnings: true });
    }
  }
  get showErrors() {
    return !!this._showErrors.get();
  }
  set showErrors(showErrors) {
    if (this._showErrors.get() !== showErrors) {
      this._showErrors.set(showErrors);
      this._onDidChange.fire({ showErrors: true });
    }
  }
  get showInfos() {
    return !!this._showInfos.get();
  }
  set showInfos(showInfos) {
    if (this._showInfos.get() !== showInfos) {
      this._showInfos.set(showInfos);
      this._onDidChange.fire({ showInfos: true });
    }
  }
}
const _QuickFixAction = class _QuickFixAction extends Action {
  get quickFixes() {
    return this._quickFixes;
  }
  set quickFixes(quickFixes) {
    this._quickFixes = quickFixes;
    this.enabled = this._quickFixes.length > 0;
  }
  autoFixable(autofixable) {
    this.class = autofixable ? _QuickFixAction.AUTO_FIX_CLASS : _QuickFixAction.CLASS;
  }
  constructor(marker) {
    super(_QuickFixAction.ID, Messages.MARKERS_PANEL_ACTION_TOOLTIP_QUICKFIX, _QuickFixAction.CLASS, false);
    this.marker = marker;
    this._onShowQuickFixes = this._register(new Emitter());
    this.onShowQuickFixes = this._onShowQuickFixes.event;
    this._quickFixes = [];
  }
  run() {
    this._onShowQuickFixes.fire();
    return Promise.resolve();
  }
};
_QuickFixAction.ID = "workbench.actions.problems.quickfix";
_QuickFixAction.CLASS = "markers-panel-action-quickfix " + ThemeIcon.asClassName(Codicon.lightBulb);
_QuickFixAction.AUTO_FIX_CLASS = _QuickFixAction.CLASS + " autofixable";
let QuickFixAction = _QuickFixAction;
let QuickFixActionViewItem = class QuickFixActionViewItem2 extends ActionViewItem {
  constructor(action, contextMenuService) {
    super(null, action, { icon: true, label: false });
    this.contextMenuService = contextMenuService;
  }
  onClick(event) {
    EventHelper.stop(event, true);
    this.showQuickFixes();
  }
  showQuickFixes() {
    if (!this.element) {
      return;
    }
    if (!this.isEnabled()) {
      return;
    }
    const elementPosition = getDomNodePagePosition(this.element);
    const quickFixes = this.action.quickFixes;
    if (quickFixes.length) {
      this.contextMenuService.showContextMenu({
        getAnchor: () => ({ x: elementPosition.left + 10, y: elementPosition.top + elementPosition.height + 4 }),
        getActions: () => quickFixes
      });
    }
  }
};
QuickFixActionViewItem = __decorate([
  __param(1, IContextMenuService)
], QuickFixActionViewItem);
class ResourceGlobMatcher {
  constructor(globalExpression, rootExpressions, uriIdentityService) {
    this.globalExpression = parse(globalExpression);
    this.expressionsByRoot = TernarySearchTree.forUris((uri) => uriIdentityService.extUri.ignorePathCasing(uri));
    for (const expression of rootExpressions) {
      this.expressionsByRoot.set(expression.root, { root: expression.root, expression: parse(expression.expression) });
    }
  }
  matches(resource) {
    const rootExpression = this.expressionsByRoot.findSubstr(resource);
    if (rootExpression) {
      const path = relativePath(rootExpression.root, resource);
      if (path && !!rootExpression.expression(path)) {
        return true;
      }
    }
    return !!this.globalExpression(resource.path);
  }
}
const _FilterOptions = class _FilterOptions {
  static EMPTY(uriIdentityService) {
    return new _FilterOptions("", [], false, false, false, uriIdentityService);
  }
  constructor(filter, filesExclude, showWarnings, showErrors, showInfos, uriIdentityService) {
    this.filter = filter;
    this.showWarnings = false;
    this.showErrors = false;
    this.showInfos = false;
    filter = filter.trim();
    this.showWarnings = showWarnings;
    this.showErrors = showErrors;
    this.showInfos = showInfos;
    const filesExcludeByRoot = Array.isArray(filesExclude) ? filesExclude : [];
    const excludesExpression = Array.isArray(filesExclude) ? getEmptyExpression() : filesExclude;
    for (const { expression } of filesExcludeByRoot) {
      for (const pattern of Object.keys(expression)) {
        if (!pattern.endsWith("/**")) {
          expression[`${rtrim(pattern, "/")}/**`] = expression[pattern];
        }
      }
    }
    const negate = filter.startsWith("!");
    this.textFilter = { text: (negate ? ltrim(filter, "!") : filter).trim(), negate };
    const includeExpression = getEmptyExpression();
    if (filter) {
      const filters = splitGlobAware(filter, ",").map((s) => s.trim()).filter((s) => !!s.length);
      for (const f of filters) {
        if (f.startsWith("!")) {
          const filterText = ltrim(f, "!");
          if (filterText) {
            this.setPattern(excludesExpression, filterText);
          }
        } else {
          this.setPattern(includeExpression, f);
        }
      }
    }
    this.excludesMatcher = new ResourceGlobMatcher(excludesExpression, filesExcludeByRoot, uriIdentityService);
    this.includesMatcher = new ResourceGlobMatcher(includeExpression, [], uriIdentityService);
  }
  setPattern(expression, pattern) {
    if (pattern[0] === ".") {
      pattern = "*" + pattern;
    }
    expression[`**/${pattern}/**`] = true;
    expression[`**/${pattern}`] = true;
  }
};
_FilterOptions._filter = matchesFuzzy2;
_FilterOptions._messageFilter = matchesFuzzy;
let FilterOptions = _FilterOptions;
let MarkersWidgetAccessibilityProvider = class MarkersWidgetAccessibilityProvider2 {
  constructor(labelService) {
    this.labelService = labelService;
  }
  getWidgetAriaLabel() {
    return localize("problemsView", "Problems View");
  }
  getAriaLabel(element) {
    if (element instanceof ResourceMarkers) {
      const path$1 = this.labelService.getUriLabel(element.resource, { relative: true }) || element.resource.fsPath;
      return Messages.MARKERS_TREE_ARIA_LABEL_RESOURCE(element.markers.length, element.name, dirname(path$1));
    }
    if (element instanceof Marker || element instanceof MarkerTableItem) {
      return Messages.MARKERS_TREE_ARIA_LABEL_MARKER(element);
    }
    if (element instanceof RelatedInformation) {
      return Messages.MARKERS_TREE_ARIA_LABEL_RELATED_INFORMATION(element.raw);
    }
    return null;
  }
};
MarkersWidgetAccessibilityProvider = __decorate([
  __param(0, ILabelService)
], MarkersWidgetAccessibilityProvider);
const _VirtualDelegate = class _VirtualDelegate {
  constructor(markersViewState) {
    this.markersViewState = markersViewState;
  }
  getHeight(element) {
    if (element instanceof Marker) {
      const viewModel = this.markersViewState.getViewModel(element);
      const noOfLines = !viewModel || viewModel.multiline ? element.lines.length : 1;
      return noOfLines * _VirtualDelegate.LINE_HEIGHT;
    }
    return _VirtualDelegate.LINE_HEIGHT;
  }
  getTemplateId(element) {
    if (element instanceof ResourceMarkers) {
      return "rm";
    } else if (element instanceof Marker) {
      return "m";
    } else {
      return "ri";
    }
  }
};
_VirtualDelegate.LINE_HEIGHT = 22;
let VirtualDelegate = _VirtualDelegate;
let ResourceMarkersRenderer = class ResourceMarkersRenderer2 {
  constructor(labels, onDidChangeRenderNodeCount, labelService, fileService) {
    this.labels = labels;
    this.labelService = labelService;
    this.fileService = fileService;
    this.renderedNodes = /* @__PURE__ */ new Map();
    this.disposables = new DisposableStore();
    this.templateId = "rm";
    onDidChangeRenderNodeCount(this.onDidChangeRenderNodeCount, this, this.disposables);
  }
  renderTemplate(container) {
    const resourceLabelContainer = append(container, $$1(".resource-label-container"));
    const resourceLabel = this.labels.create(resourceLabelContainer, { supportHighlights: true });
    const badgeWrapper = append(container, $$1(".count-badge-wrapper"));
    const count = new CountBadge(badgeWrapper, {}, defaultCountBadgeStyles);
    return { count, resourceLabel };
  }
  renderElement(node, _, templateData) {
    const resourceMarkers = node.element;
    const uriMatches = node.filterData && node.filterData.uriMatches || [];
    if (this.fileService.hasProvider(resourceMarkers.resource) || resourceMarkers.resource.scheme === Schemas.untitled) {
      templateData.resourceLabel.setFile(resourceMarkers.resource, { matches: uriMatches });
    } else {
      templateData.resourceLabel.setResource({ name: resourceMarkers.name, description: this.labelService.getUriLabel(dirname$1(resourceMarkers.resource), { relative: true }), resource: resourceMarkers.resource }, { matches: uriMatches });
    }
    this.updateCount(node, templateData);
    this.renderedNodes.set(node, templateData);
  }
  disposeElement(node) {
    this.renderedNodes.delete(node);
  }
  disposeTemplate(templateData) {
    templateData.resourceLabel.dispose();
  }
  onDidChangeRenderNodeCount(node) {
    const templateData = this.renderedNodes.get(node);
    if (!templateData) {
      return;
    }
    this.updateCount(node, templateData);
  }
  updateCount(node, templateData) {
    templateData.count.setCount(node.children.reduce((r, n2) => r + (n2.visible ? 1 : 0), 0));
  }
  dispose() {
    this.disposables.dispose();
  }
};
ResourceMarkersRenderer = __decorate([
  __param(2, ILabelService),
  __param(3, IFileService)
], ResourceMarkersRenderer);
let MarkerRenderer = class MarkerRenderer2 {
  constructor(markersViewState, instantiationService, openerService) {
    this.markersViewState = markersViewState;
    this.instantiationService = instantiationService;
    this.openerService = openerService;
    this.templateId = "m";
  }
  renderTemplate(container) {
    const data = /* @__PURE__ */ Object.create(null);
    data.markerWidget = new MarkerWidget(
      container,
      this.markersViewState,
      this.openerService,
      this.instantiationService
    );
    return data;
  }
  renderElement(node, _, templateData) {
    templateData.markerWidget.render(node.element, node.filterData);
  }
  disposeTemplate(templateData) {
    templateData.markerWidget.dispose();
  }
};
MarkerRenderer = __decorate([
  __param(1, IInstantiationService),
  __param(2, IOpenerService)
], MarkerRenderer);
const expandedIcon = registerIcon("markers-view-multi-line-expanded", Codicon.chevronUp, localize(
  "expandedIcon",
  "Icon indicating that multiple lines are shown in the markers view."
));
const collapsedIcon = registerIcon("markers-view-multi-line-collapsed", Codicon.chevronDown, localize(
  "collapsedIcon",
  "Icon indicating that multiple lines are collapsed in the markers view."
));
const toggleMultilineAction = "problems.action.toggleMultiline";
class ToggleMultilineActionViewItem extends ActionViewItem {
  render(container) {
    super.render(container);
    this.updateExpandedAttribute();
  }
  updateClass() {
    super.updateClass();
    this.updateExpandedAttribute();
  }
  updateExpandedAttribute() {
    var _a2;
    (_a2 = this.element) == null ? void 0 : _a2.setAttribute("aria-expanded", `${this._action.class === ThemeIcon.asClassName(expandedIcon)}`);
  }
}
class MarkerWidget extends Disposable {
  constructor(parent, markersViewModel, _openerService, _instantiationService) {
    super();
    this.parent = parent;
    this.markersViewModel = markersViewModel;
    this._openerService = _openerService;
    this.disposables = this._register(new DisposableStore());
    this.actionBar = this._register(new ActionBar(append(parent, $$1(".actions")), {
      actionViewItemProvider: (action) => action.id === QuickFixAction.ID ? _instantiationService.createInstance(QuickFixActionViewItem, action) : void 0
    }));
    this.iconContainer = append(parent, $$1(""));
    this.icon = append(this.iconContainer, $$1(""));
    this.messageAndDetailsContainer = append(parent, $$1(".marker-message-details-container"));
  }
  render(element, filterData) {
    this.actionBar.clear();
    this.disposables.clear();
    clearNode(this.messageAndDetailsContainer);
    this.iconContainer.className = `marker-icon ${Severity.toString(MarkerSeverity.toSeverity(element.marker.severity))}`;
    this.icon.className = `codicon ${SeverityIcon.className(MarkerSeverity.toSeverity(element.marker.severity))}`;
    this.renderQuickfixActionbar(element);
    this.renderMessageAndDetails(element, filterData);
    this.disposables.add(addDisposableListener(this.parent, EventType.MOUSE_OVER, () => this.markersViewModel.onMarkerMouseHover(element)));
    this.disposables.add(addDisposableListener(this.parent, EventType.MOUSE_LEAVE, () => this.markersViewModel.onMarkerMouseLeave(element)));
  }
  renderQuickfixActionbar(marker) {
    const viewModel = this.markersViewModel.getViewModel(marker);
    if (viewModel) {
      const quickFixAction = viewModel.quickFixAction;
      this.actionBar.push([quickFixAction], { icon: true, label: false });
      this.iconContainer.classList.toggle("quickFix", quickFixAction.enabled);
      quickFixAction.onDidChange(({ enabled }) => {
        if (!isUndefinedOrNull(enabled)) {
          this.iconContainer.classList.toggle("quickFix", enabled);
        }
      }, this, this.disposables);
      quickFixAction.onShowQuickFixes(() => {
        const quickFixActionViewItem = this.actionBar.viewItems[0];
        if (quickFixActionViewItem) {
          quickFixActionViewItem.showQuickFixes();
        }
      }, this, this.disposables);
    }
  }
  renderMultilineActionbar(marker, parent) {
    const multilineActionbar = this.disposables.add(new ActionBar(append(parent, $$1(".multiline-actions")), {
      actionViewItemProvider: (action2) => {
        if (action2.id === toggleMultilineAction) {
          return new ToggleMultilineActionViewItem(void 0, action2, { icon: true });
        }
        return void 0;
      }
    }));
    this.disposables.add(toDisposable(() => multilineActionbar.dispose()));
    const viewModel = this.markersViewModel.getViewModel(marker);
    const multiline = viewModel && viewModel.multiline;
    const action = new Action(toggleMultilineAction);
    action.enabled = !!viewModel && marker.lines.length > 1;
    action.tooltip = multiline ? localize("single line", "Show message in single line") : localize("multi line", "Show message in multiple lines");
    action.class = ThemeIcon.asClassName(multiline ? expandedIcon : collapsedIcon);
    action.run = () => {
      if (viewModel) {
        viewModel.multiline = !viewModel.multiline;
      }
      return Promise.resolve();
    };
    multilineActionbar.push([action], { icon: true, label: false });
  }
  renderMessageAndDetails(element, filterData) {
    const { marker, lines } = element;
    const viewState = this.markersViewModel.getViewModel(element);
    const multiline = !viewState || viewState.multiline;
    const lineMatches = filterData && filterData.lineMatches || [];
    this.messageAndDetailsContainer.title = element.marker.message;
    const lineElements = [];
    for (let index = 0; index < (multiline ? lines.length : 1); index++) {
      const lineElement = append(this.messageAndDetailsContainer, $$1(".marker-message-line"));
      const messageElement = append(lineElement, $$1(".marker-message"));
      const highlightedLabel = new HighlightedLabel(messageElement);
      highlightedLabel.set(lines[index].length > 1e3 ? `${lines[index].substring(0, 1e3)}...` : lines[index], lineMatches[index]);
      if (lines[index] === "") {
        lineElement.style.height = `${VirtualDelegate.LINE_HEIGHT}px`;
      }
      lineElements.push(lineElement);
    }
    this.renderDetails(marker, filterData, lineElements[0]);
    this.renderMultilineActionbar(element, lineElements[0]);
  }
  renderDetails(marker, filterData, parent) {
    parent.classList.add("details-container");
    if (marker.source || marker.code) {
      const source = new HighlightedLabel(append(parent, $$1(".marker-source")));
      const sourceMatches = filterData && filterData.sourceMatches || [];
      source.set(marker.source, sourceMatches);
      if (marker.code) {
        if (typeof marker.code === "string") {
          const code = new HighlightedLabel(append(parent, $$1(".marker-code")));
          const codeMatches = filterData && filterData.codeMatches || [];
          code.set(marker.code, codeMatches);
        } else {
          const container = $$1(".marker-code");
          const code = new HighlightedLabel(container);
          const link = marker.code.target.toString(true);
          this.disposables.add(new Link(
            parent,
            { href: link, label: container, title: link },
            void 0,
            this._openerService
          ));
          const codeMatches = filterData && filterData.codeMatches || [];
          code.set(marker.code.value, codeMatches);
        }
      }
    }
    const lnCol = append(parent, $$1("span.marker-line"));
    lnCol.textContent = Messages.MARKERS_PANEL_AT_LINE_COL_NUMBER(marker.startLineNumber, marker.startColumn);
  }
}
let RelatedInformationRenderer = class RelatedInformationRenderer2 {
  constructor(labelService) {
    this.labelService = labelService;
    this.templateId = "ri";
  }
  renderTemplate(container) {
    const data = /* @__PURE__ */ Object.create(null);
    append(container, $$1(".actions"));
    append(container, $$1(".icon"));
    data.resourceLabel = new HighlightedLabel(append(container, $$1(".related-info-resource")));
    data.lnCol = append(container, $$1("span.marker-line"));
    const separator = append(container, $$1("span.related-info-resource-separator"));
    separator.textContent = ":";
    separator.style.paddingRight = "4px";
    data.description = new HighlightedLabel(append(container, $$1(".marker-description")));
    return data;
  }
  renderElement(node, _, templateData) {
    const relatedInformation = node.element.raw;
    const uriMatches = node.filterData && node.filterData.uriMatches || [];
    const messageMatches = node.filterData && node.filterData.messageMatches || [];
    templateData.resourceLabel.set(basename(relatedInformation.resource), uriMatches);
    templateData.resourceLabel.element.title = this.labelService.getUriLabel(relatedInformation.resource, { relative: true });
    templateData.lnCol.textContent = Messages.MARKERS_PANEL_AT_LINE_COL_NUMBER(relatedInformation.startLineNumber, relatedInformation.startColumn);
    templateData.description.set(relatedInformation.message, messageMatches);
    templateData.description.element.title = relatedInformation.message;
  }
  disposeTemplate(templateData) {
  }
};
RelatedInformationRenderer = __decorate([
  __param(0, ILabelService)
], RelatedInformationRenderer);
class Filter {
  constructor(options) {
    this.options = options;
  }
  filter(element, parentVisibility) {
    if (element instanceof ResourceMarkers) {
      return this.filterResourceMarkers(element);
    } else if (element instanceof Marker) {
      return this.filterMarker(element, parentVisibility);
    } else {
      return this.filterRelatedInformation(element, parentVisibility);
    }
  }
  filterResourceMarkers(resourceMarkers) {
    if (unsupportedSchemas.has(resourceMarkers.resource.scheme)) {
      return false;
    }
    if (this.options.excludesMatcher.matches(resourceMarkers.resource)) {
      return false;
    }
    if (this.options.includesMatcher.matches(resourceMarkers.resource)) {
      return true;
    }
    if (this.options.textFilter.text && !this.options.textFilter.negate) {
      const uriMatches = FilterOptions._filter(this.options.textFilter.text, basename(resourceMarkers.resource));
      if (uriMatches) {
        return { visibility: true, data: { type: 0, uriMatches: uriMatches || [] } };
      }
    }
    return 2;
  }
  filterMarker(marker, parentVisibility) {
    const matchesSeverity = this.options.showErrors && MarkerSeverity.Error === marker.marker.severity || this.options.showWarnings && MarkerSeverity.Warning === marker.marker.severity || this.options.showInfos && MarkerSeverity.Info === marker.marker.severity;
    if (!matchesSeverity) {
      return false;
    }
    if (!this.options.textFilter.text) {
      return true;
    }
    const lineMatches = [];
    for (const line of marker.lines) {
      const lineMatch = FilterOptions._messageFilter(this.options.textFilter.text, line);
      lineMatches.push(lineMatch || []);
    }
    const sourceMatches = marker.marker.source ? FilterOptions._filter(this.options.textFilter.text, marker.marker.source) : void 0;
    const codeMatches = marker.marker.code ? FilterOptions._filter(this.options.textFilter.text, typeof marker.marker.code === "string" ? marker.marker.code : marker.marker.code.value) : void 0;
    const matched = sourceMatches || codeMatches || lineMatches.some((lineMatch) => lineMatch.length > 0);
    if (matched && !this.options.textFilter.negate) {
      return { visibility: true, data: { type: 1, lineMatches, sourceMatches: sourceMatches || [], codeMatches: codeMatches || [] } };
    }
    if (matched && this.options.textFilter.negate && parentVisibility === 2) {
      return false;
    }
    if (!matched && this.options.textFilter.negate && parentVisibility === 2) {
      return true;
    }
    return parentVisibility;
  }
  filterRelatedInformation(relatedInformation, parentVisibility) {
    if (!this.options.textFilter.text) {
      return true;
    }
    const uriMatches = FilterOptions._filter(this.options.textFilter.text, basename(relatedInformation.raw.resource));
    const messageMatches = FilterOptions._messageFilter(this.options.textFilter.text, basename$1(relatedInformation.raw.message));
    const matched = uriMatches || messageMatches;
    if (matched && !this.options.textFilter.negate) {
      return { visibility: true, data: { type: 2, uriMatches: uriMatches || [], messageMatches: messageMatches || [] } };
    }
    if (matched && this.options.textFilter.negate && parentVisibility === 2) {
      return false;
    }
    if (!matched && this.options.textFilter.negate && parentVisibility === 2) {
      return true;
    }
    return parentVisibility;
  }
}
let MarkerViewModel = class MarkerViewModel2 extends Disposable {
  constructor(marker, modelService, instantiationService, editorService, languageFeaturesService) {
    super();
    this.marker = marker;
    this.modelService = modelService;
    this.instantiationService = instantiationService;
    this.editorService = editorService;
    this.languageFeaturesService = languageFeaturesService;
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this.modelPromise = null;
    this.codeActionsPromise = null;
    this._multiline = true;
    this._quickFixAction = null;
    this._register(toDisposable(() => {
      if (this.modelPromise) {
        this.modelPromise.cancel();
      }
      if (this.codeActionsPromise) {
        this.codeActionsPromise.cancel();
      }
    }));
  }
  get multiline() {
    return this._multiline;
  }
  set multiline(value) {
    if (this._multiline !== value) {
      this._multiline = value;
      this._onDidChange.fire();
    }
  }
  get quickFixAction() {
    if (!this._quickFixAction) {
      this._quickFixAction = this._register(this.instantiationService.createInstance(QuickFixAction, this.marker));
    }
    return this._quickFixAction;
  }
  showLightBulb() {
    this.setQuickFixes(true);
  }
  async setQuickFixes(waitForModel) {
    const codeActions = await this.getCodeActions(waitForModel);
    this.quickFixAction.quickFixes = codeActions ? this.toActions(codeActions) : [];
    this.quickFixAction.autoFixable(!!codeActions && codeActions.hasAutoFix);
  }
  getCodeActions(waitForModel) {
    if (this.codeActionsPromise !== null) {
      return this.codeActionsPromise;
    }
    return this.getModel(waitForModel).then((model) => {
      if (model) {
        if (!this.codeActionsPromise) {
          this.codeActionsPromise = createCancelablePromise((cancellationToken) => {
            return getCodeActions(this.languageFeaturesService.codeActionProvider, model, new Range(
              this.marker.range.startLineNumber,
              this.marker.range.startColumn,
              this.marker.range.endLineNumber,
              this.marker.range.endColumn
            ), {
              type: 1,
              triggerAction: CodeActionTriggerSource.ProblemsView,
              filter: { include: CodeActionKind.QuickFix }
            }, Progress.None, cancellationToken).then((actions) => {
              return this._register(actions);
            });
          });
        }
        return this.codeActionsPromise;
      }
      return null;
    });
  }
  toActions(codeActions) {
    return codeActions.validActions.map((item) => new Action(
      item.action.command ? item.action.command.id : item.action.title,
      item.action.title,
      void 0,
      true,
      () => {
        return this.openFileAtMarker(this.marker).then(() => this.instantiationService.invokeFunction(applyCodeAction, item, ApplyCodeActionReason.FromProblemsView));
      }
    ));
  }
  openFileAtMarker(element) {
    const { resource, selection } = { resource: element.resource, selection: element.range };
    return this.editorService.openEditor({
      resource,
      options: {
        selection,
        preserveFocus: true,
        pinned: false,
        revealIfVisible: true
      }
    }, ACTIVE_GROUP).then(() => void 0);
  }
  getModel(waitForModel) {
    const model = this.modelService.getModel(this.marker.resource);
    if (model) {
      return Promise.resolve(model);
    }
    if (waitForModel) {
      if (!this.modelPromise) {
        this.modelPromise = createCancelablePromise((cancellationToken) => {
          return new Promise((c) => {
            this._register(this.modelService.onModelAdded((model2) => {
              if (isEqual(model2.uri, this.marker.resource)) {
                c(model2);
              }
            }));
          });
        });
      }
      return this.modelPromise;
    }
    return Promise.resolve(null);
  }
};
MarkerViewModel = __decorate([
  __param(1, IModelService),
  __param(2, IInstantiationService),
  __param(3, IEditorService),
  __param(4, ILanguageFeaturesService)
], MarkerViewModel);
let MarkersViewModel = class MarkersViewModel2 extends Disposable {
  constructor(multiline = true, viewMode = "tree", contextKeyService, instantiationService) {
    super();
    this.contextKeyService = contextKeyService;
    this.instantiationService = instantiationService;
    this._onDidChange = this._register(new Emitter());
    this.onDidChange = this._onDidChange.event;
    this._onDidChangeViewMode = this._register(new Emitter());
    this.onDidChangeViewMode = this._onDidChangeViewMode.event;
    this.markersViewStates = /* @__PURE__ */ new Map();
    this.markersPerResource = /* @__PURE__ */ new Map();
    this.bulkUpdate = false;
    this.hoveredMarker = null;
    this.hoverDelayer = new Delayer(300);
    this._multiline = true;
    this._viewMode = "tree";
    this._multiline = multiline;
    this._viewMode = viewMode;
    this.viewModeContextKey = MarkersContextKeys.MarkersViewModeContextKey.bindTo(this.contextKeyService);
    this.viewModeContextKey.set(viewMode);
  }
  add(marker) {
    if (!this.markersViewStates.has(marker.id)) {
      const viewModel = this.instantiationService.createInstance(MarkerViewModel, marker);
      const disposables = [viewModel];
      viewModel.multiline = this.multiline;
      viewModel.onDidChange(() => {
        if (!this.bulkUpdate) {
          this._onDidChange.fire(marker);
        }
      }, this, disposables);
      this.markersViewStates.set(marker.id, { viewModel, disposables });
      const markers = this.markersPerResource.get(marker.resource.toString()) || [];
      markers.push(marker);
      this.markersPerResource.set(marker.resource.toString(), markers);
    }
  }
  remove(resource) {
    const markers = this.markersPerResource.get(resource.toString()) || [];
    for (const marker of markers) {
      const value = this.markersViewStates.get(marker.id);
      if (value) {
        dispose(value.disposables);
      }
      this.markersViewStates.delete(marker.id);
      if (this.hoveredMarker === marker) {
        this.hoveredMarker = null;
      }
    }
    this.markersPerResource.delete(resource.toString());
  }
  getViewModel(marker) {
    const value = this.markersViewStates.get(marker.id);
    return value ? value.viewModel : null;
  }
  onMarkerMouseHover(marker) {
    this.hoveredMarker = marker;
    this.hoverDelayer.trigger(() => {
      if (this.hoveredMarker) {
        const model = this.getViewModel(this.hoveredMarker);
        if (model) {
          model.showLightBulb();
        }
      }
    });
  }
  onMarkerMouseLeave(marker) {
    if (this.hoveredMarker === marker) {
      this.hoveredMarker = null;
    }
  }
  get multiline() {
    return this._multiline;
  }
  set multiline(value) {
    let changed = false;
    if (this._multiline !== value) {
      this._multiline = value;
      changed = true;
    }
    this.bulkUpdate = true;
    this.markersViewStates.forEach(({ viewModel }) => {
      if (viewModel.multiline !== value) {
        viewModel.multiline = value;
        changed = true;
      }
    });
    this.bulkUpdate = false;
    if (changed) {
      this._onDidChange.fire(void 0);
    }
  }
  get viewMode() {
    return this._viewMode;
  }
  set viewMode(value) {
    if (this._viewMode === value) {
      return;
    }
    this._viewMode = value;
    this._onDidChangeViewMode.fire(value);
    this.viewModeContextKey.set(value);
  }
  dispose() {
    this.markersViewStates.forEach(({ disposables }) => dispose(disposables));
    this.markersViewStates.clear();
    this.markersPerResource.clear();
    super.dispose();
  }
};
MarkersViewModel = __decorate([
  __param(2, IContextKeyService),
  __param(3, IInstantiationService)
], MarkersViewModel);
const $ = $$1;
let MarkerSeverityColumnRenderer = (_a = class {
  constructor(markersViewModel, instantiationService) {
    this.markersViewModel = markersViewModel;
    this.instantiationService = instantiationService;
    this.templateId = _a.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const severityColumn = append(container, $(".severity"));
    const icon = append(severityColumn, $(""));
    const actionBarColumn = append(container, $(".actions"));
    const actionBar = new ActionBar(actionBarColumn, {
      actionViewItemProvider: (action) => action.id === QuickFixAction.ID ? this.instantiationService.createInstance(QuickFixActionViewItem, action) : void 0,
      animated: false
    });
    return { actionBar, icon };
  }
  renderElement(element, index, templateData, height) {
    const toggleQuickFix = (enabled) => {
      if (!isUndefinedOrNull(enabled)) {
        const container = findParentWithClass(templateData.icon, "monaco-table-td");
        container.classList.toggle("quickFix", enabled);
      }
    };
    templateData.icon.title = MarkerSeverity.toString(element.marker.severity);
    templateData.icon.className = `marker-icon ${Severity.toString(MarkerSeverity.toSeverity(element.marker.severity))} codicon ${SeverityIcon.className(MarkerSeverity.toSeverity(element.marker.severity))}`;
    templateData.actionBar.clear();
    const viewModel = this.markersViewModel.getViewModel(element);
    if (viewModel) {
      const quickFixAction = viewModel.quickFixAction;
      templateData.actionBar.push([quickFixAction], { icon: true, label: false });
      toggleQuickFix(viewModel.quickFixAction.enabled);
      quickFixAction.onDidChange(({ enabled }) => toggleQuickFix(enabled));
      quickFixAction.onShowQuickFixes(() => {
        const quickFixActionViewItem = templateData.actionBar.viewItems[0];
        if (quickFixActionViewItem) {
          quickFixActionViewItem.showQuickFixes();
        }
      });
    }
  }
  disposeTemplate(templateData) {
  }
}, _a.TEMPLATE_ID = "severity", _a);
MarkerSeverityColumnRenderer = __decorate([
  __param(1, IInstantiationService)
], MarkerSeverityColumnRenderer);
let MarkerCodeColumnRenderer = (_b = class {
  constructor(openerService) {
    this.openerService = openerService;
    this.templateId = _b.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const codeColumn = append(container, $(".code"));
    const sourceLabel = new HighlightedLabel(codeColumn);
    sourceLabel.element.classList.add("source-label");
    const codeLabel = new HighlightedLabel(codeColumn);
    codeLabel.element.classList.add("code-label");
    const codeLink = new Link(codeColumn, { href: "", label: "" }, {}, this.openerService);
    return { codeColumn, sourceLabel, codeLabel, codeLink };
  }
  renderElement(element, index, templateData, height) {
    templateData.codeColumn.classList.remove("code-label");
    templateData.codeColumn.classList.remove("code-link");
    if (element.marker.source && element.marker.code) {
      if (typeof element.marker.code === "string") {
        templateData.codeColumn.classList.add("code-label");
        templateData.codeColumn.title = `${element.marker.source} (${element.marker.code})`;
        templateData.sourceLabel.set(element.marker.source, element.sourceMatches);
        templateData.codeLabel.set(element.marker.code, element.codeMatches);
      } else {
        templateData.codeColumn.classList.add("code-link");
        templateData.codeColumn.title = `${element.marker.source} (${element.marker.code.value})`;
        templateData.sourceLabel.set(element.marker.source, element.sourceMatches);
        const codeLinkLabel = new HighlightedLabel($(".code-link-label"));
        codeLinkLabel.set(element.marker.code.value, element.codeMatches);
        templateData.codeLink.link = {
          href: element.marker.code.target.toString(),
          title: element.marker.code.target.toString(),
          label: codeLinkLabel.element
        };
      }
    } else {
      templateData.codeColumn.title = "";
      templateData.sourceLabel.set("-");
    }
  }
  disposeTemplate(templateData) {
  }
}, _b.TEMPLATE_ID = "code", _b);
MarkerCodeColumnRenderer = __decorate([
  __param(0, IOpenerService)
], MarkerCodeColumnRenderer);
const _MarkerMessageColumnRenderer = class _MarkerMessageColumnRenderer {
  constructor() {
    this.templateId = _MarkerMessageColumnRenderer.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const columnElement = append(container, $(".message"));
    const highlightedLabel = new HighlightedLabel(columnElement);
    return { columnElement, highlightedLabel };
  }
  renderElement(element, index, templateData, height) {
    templateData.columnElement.title = element.marker.message;
    templateData.highlightedLabel.set(element.marker.message, element.messageMatches);
  }
  disposeTemplate(templateData) {
  }
};
_MarkerMessageColumnRenderer.TEMPLATE_ID = "message";
let MarkerMessageColumnRenderer = _MarkerMessageColumnRenderer;
let MarkerFileColumnRenderer = (_c = class {
  constructor(labelService) {
    this.labelService = labelService;
    this.templateId = _c.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const columnElement = append(container, $(".file"));
    const fileLabel = new HighlightedLabel(columnElement);
    fileLabel.element.classList.add("file-label");
    const positionLabel = new HighlightedLabel(columnElement);
    positionLabel.element.classList.add("file-position");
    return { columnElement, fileLabel, positionLabel };
  }
  renderElement(element, index, templateData, height) {
    const positionLabel = Messages.MARKERS_PANEL_AT_LINE_COL_NUMBER(element.marker.startLineNumber, element.marker.startColumn);
    templateData.columnElement.title = `${this.labelService.getUriLabel(element.marker.resource, { relative: false })} ${positionLabel}`;
    templateData.fileLabel.set(this.labelService.getUriLabel(element.marker.resource, { relative: true }), element.fileMatches);
    templateData.positionLabel.set(positionLabel, void 0);
  }
  disposeTemplate(templateData) {
  }
}, _c.TEMPLATE_ID = "file", _c);
MarkerFileColumnRenderer = __decorate([
  __param(0, ILabelService)
], MarkerFileColumnRenderer);
const _MarkerOwnerColumnRenderer = class _MarkerOwnerColumnRenderer {
  constructor() {
    this.templateId = _MarkerOwnerColumnRenderer.TEMPLATE_ID;
  }
  renderTemplate(container) {
    const columnElement = append(container, $(".owner"));
    const highlightedLabel = new HighlightedLabel(columnElement);
    return { columnElement, highlightedLabel };
  }
  renderElement(element, index, templateData, height) {
    templateData.columnElement.title = element.marker.owner;
    templateData.highlightedLabel.set(element.marker.owner, element.ownerMatches);
  }
  disposeTemplate(templateData) {
  }
};
_MarkerOwnerColumnRenderer.TEMPLATE_ID = "owner";
let MarkerOwnerColumnRenderer = _MarkerOwnerColumnRenderer;
const _MarkersTableVirtualDelegate = class _MarkersTableVirtualDelegate {
  constructor() {
    this.headerRowHeight = _MarkersTableVirtualDelegate.HEADER_ROW_HEIGHT;
  }
  getHeight(item) {
    return _MarkersTableVirtualDelegate.ROW_HEIGHT;
  }
};
_MarkersTableVirtualDelegate.HEADER_ROW_HEIGHT = 24;
_MarkersTableVirtualDelegate.ROW_HEIGHT = 24;
let MarkersTableVirtualDelegate = _MarkersTableVirtualDelegate;
let MarkersTable = class MarkersTable2 extends Disposable {
  constructor(container, markersViewModel, resourceMarkers, filterOptions, options, instantiationService, labelService) {
    super();
    this.container = container;
    this.markersViewModel = markersViewModel;
    this.resourceMarkers = resourceMarkers;
    this.filterOptions = filterOptions;
    this.instantiationService = instantiationService;
    this.labelService = labelService;
    this._itemCount = 0;
    this.table = this.instantiationService.createInstance(WorkbenchTable, "Markers", this.container, new MarkersTableVirtualDelegate(), [
      {
        label: "",
        tooltip: "",
        weight: 0,
        minimumWidth: 36,
        maximumWidth: 36,
        templateId: MarkerSeverityColumnRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      },
      {
        label: localize("codeColumnLabel", "Code"),
        tooltip: "",
        weight: 1,
        minimumWidth: 100,
        maximumWidth: 300,
        templateId: MarkerCodeColumnRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      },
      {
        label: localize("messageColumnLabel", "Message"),
        tooltip: "",
        weight: 4,
        templateId: MarkerMessageColumnRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      },
      {
        label: localize("fileColumnLabel", "File"),
        tooltip: "",
        weight: 2,
        templateId: MarkerFileColumnRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      },
      {
        label: localize("sourceColumnLabel", "Source"),
        tooltip: "",
        weight: 1,
        minimumWidth: 100,
        maximumWidth: 300,
        templateId: MarkerOwnerColumnRenderer.TEMPLATE_ID,
        project(row) {
          return row;
        }
      }
    ], [
      this.instantiationService.createInstance(MarkerSeverityColumnRenderer, this.markersViewModel),
      this.instantiationService.createInstance(MarkerCodeColumnRenderer),
      this.instantiationService.createInstance(MarkerMessageColumnRenderer),
      this.instantiationService.createInstance(MarkerFileColumnRenderer),
      this.instantiationService.createInstance(MarkerOwnerColumnRenderer)
    ], options);
    const list = this.table.domNode.querySelector(".monaco-list-rows");
    const onRowHover = Event.chain(this._register(new DomEmitter(list, "mouseover")).event).map(
      (e) => findParentWithClass(e.target, "monaco-list-row", "monaco-list-rows")
    ).filter((e) => !!e).map((e) => parseInt(e.getAttribute("data-index"))).event;
    const onListLeave = Event.map(
      this._register(new DomEmitter(list, "mouseleave")).event,
      () => -1
    );
    const onRowHoverOrLeave = Event.latch(Event.any(onRowHover, onListLeave));
    const onRowPermanentHover = Event.debounce(onRowHoverOrLeave, (_, e) => e, 500);
    this._register(onRowPermanentHover((e) => {
      if (e !== -1 && this.table.row(e)) {
        this.markersViewModel.onMarkerMouseHover(this.table.row(e));
      }
    }));
  }
  get contextKeyService() {
    return this.table.contextKeyService;
  }
  get onContextMenu() {
    return this.table.onContextMenu;
  }
  get onDidOpen() {
    return this.table.onDidOpen;
  }
  get onDidChangeFocus() {
    return this.table.onDidChangeFocus;
  }
  get onDidChangeSelection() {
    return this.table.onDidChangeSelection;
  }
  collapseMarkers() {
  }
  domFocus() {
    this.table.domFocus();
  }
  filterMarkers(resourceMarkers, filterOptions) {
    this.filterOptions = filterOptions;
    this.reset(resourceMarkers);
  }
  getFocus() {
    const focus = this.table.getFocus();
    return focus.length > 0 ? [...focus.map((f) => this.table.row(f))] : [];
  }
  getHTMLElement() {
    return this.table.getHTMLElement();
  }
  getRelativeTop(marker) {
    return marker ? this.table.getRelativeTop(this.table.indexOf(marker)) : null;
  }
  getSelection() {
    const selection = this.table.getSelection();
    return selection.length > 0 ? [...selection.map((i) => this.table.row(i))] : [];
  }
  getVisibleItemCount() {
    return this._itemCount;
  }
  isVisible() {
    return !this.container.classList.contains("hidden");
  }
  layout(height, width) {
    this.container.style.height = `${height}px`;
    this.table.layout(height, width);
  }
  reset(resourceMarkers) {
    this.resourceMarkers = resourceMarkers;
    const items = [];
    for (const resourceMarker of this.resourceMarkers) {
      for (const marker of resourceMarker.markers) {
        if (unsupportedSchemas.has(marker.resource.scheme)) {
          continue;
        }
        if (this.filterOptions.excludesMatcher.matches(marker.resource)) {
          continue;
        }
        if (this.filterOptions.includesMatcher.matches(marker.resource)) {
          items.push(new MarkerTableItem(marker));
          continue;
        }
        const matchesSeverity = this.filterOptions.showErrors && MarkerSeverity.Error === marker.marker.severity || this.filterOptions.showWarnings && MarkerSeverity.Warning === marker.marker.severity || this.filterOptions.showInfos && MarkerSeverity.Info === marker.marker.severity;
        if (!matchesSeverity) {
          continue;
        }
        if (this.filterOptions.textFilter.text) {
          const sourceMatches = marker.marker.source ? FilterOptions._filter(this.filterOptions.textFilter.text, marker.marker.source) ?? void 0 : void 0;
          const codeMatches = marker.marker.code ? FilterOptions._filter(this.filterOptions.textFilter.text, typeof marker.marker.code === "string" ? marker.marker.code : marker.marker.code.value) ?? void 0 : void 0;
          const messageMatches = FilterOptions._messageFilter(this.filterOptions.textFilter.text, marker.marker.message) ?? void 0;
          const fileMatches = FilterOptions._messageFilter(this.filterOptions.textFilter.text, this.labelService.getUriLabel(marker.resource, { relative: true })) ?? void 0;
          const ownerMatches = FilterOptions._messageFilter(this.filterOptions.textFilter.text, marker.marker.owner) ?? void 0;
          const matched = sourceMatches || codeMatches || messageMatches || fileMatches || ownerMatches;
          if (matched && !this.filterOptions.textFilter.negate || !matched && this.filterOptions.textFilter.negate) {
            items.push(new MarkerTableItem(
              marker,
              sourceMatches,
              codeMatches,
              messageMatches,
              fileMatches,
              ownerMatches
            ));
          }
          continue;
        }
        items.push(new MarkerTableItem(marker));
      }
    }
    this._itemCount = items.length;
    this.table.splice(0, Number.POSITIVE_INFINITY, items.sort((a, b) => {
      let result = MarkerSeverity.compare(a.marker.severity, b.marker.severity);
      if (result === 0) {
        result = compareMarkersByUri(a.marker, b.marker);
      }
      if (result === 0) {
        result = Range.compareRangesUsingStarts(a.marker, b.marker);
      }
      return result;
    }));
  }
  revealMarkers(activeResource, focus, lastSelectedRelativeTop) {
    if (activeResource) {
      const activeResourceIndex = this.resourceMarkers.indexOf(activeResource);
      if (activeResourceIndex !== -1) {
        if (this.hasSelectedMarkerFor(activeResource)) {
          const tableSelection = this.table.getSelection();
          this.table.reveal(tableSelection[0], lastSelectedRelativeTop);
          if (focus) {
            this.table.setFocus(tableSelection);
          }
        } else {
          this.table.reveal(activeResourceIndex, 0);
          if (focus) {
            this.table.setFocus([activeResourceIndex]);
            this.table.setSelection([activeResourceIndex]);
          }
        }
      }
    } else if (focus) {
      this.table.setSelection([]);
      this.table.focusFirst();
    }
  }
  setAriaLabel(label) {
    this.table.domNode.ariaLabel = label;
  }
  setMarkerSelection(selection, focus) {
    if (this.isVisible()) {
      if (selection && selection.length > 0) {
        this.table.setSelection(selection.map((m) => this.findMarkerIndex(m)));
        if (focus && focus.length > 0) {
          this.table.setFocus(focus.map((f) => this.findMarkerIndex(f)));
        } else {
          this.table.setFocus([this.findMarkerIndex(selection[0])]);
        }
        this.table.reveal(this.findMarkerIndex(selection[0]));
      } else if (this.getSelection().length === 0 && this.getVisibleItemCount() > 0) {
        this.table.setSelection([0]);
        this.table.setFocus([0]);
        this.table.reveal(0);
      }
    }
  }
  toggleVisibility(hide) {
    this.container.classList.toggle("hidden", hide);
  }
  update(resourceMarkers) {
    for (const resourceMarker of resourceMarkers) {
      const index = this.resourceMarkers.indexOf(resourceMarker);
      this.resourceMarkers.splice(index, 1, resourceMarker);
    }
    this.reset(this.resourceMarkers);
  }
  updateMarker(marker) {
    this.table.rerender();
  }
  findMarkerIndex(marker) {
    for (let index = 0; index < this.table.length; index++) {
      if (this.table.row(index).marker === marker.marker) {
        return index;
      }
    }
    return -1;
  }
  hasSelectedMarkerFor(resource) {
    const selectedElement = this.getSelection();
    if (selectedElement && selectedElement.length > 0) {
      if (selectedElement[0] instanceof Marker) {
        if (resource.has(selectedElement[0].marker.resource)) {
          return true;
        }
      }
    }
    return false;
  }
};
MarkersTable = __decorate([
  __param(5, IInstantiationService),
  __param(6, ILabelService)
], MarkersTable);
function createResourceMarkersIterator(resourceMarkers) {
  return Iterable.map(resourceMarkers.markers, (m) => {
    const relatedInformationIt = Iterable.from(m.relatedInformation);
    const children = Iterable.map(relatedInformationIt, (r) => ({ element: r }));
    return { element: m, children };
  });
}
let MarkersView = class MarkersView2 extends FilterViewPane {
  constructor(options, instantiationService, viewDescriptorService, editorService, configurationService, telemetryService, markerService, contextKeyService, workspaceContextService, contextMenuService, uriIdentityService, keybindingService, storageService, openerService, themeService) {
    const panelState = new Memento(Markers.MARKERS_VIEW_STORAGE_ID, storageService).getMemento(1, 1);
    super({
      ...options,
      filterOptions: {
        ariaLabel: Messages.MARKERS_PANEL_FILTER_ARIA_LABEL,
        placeholder: Messages.MARKERS_PANEL_FILTER_PLACEHOLDER,
        focusContextKey: MarkersContextKeys.MarkerViewFilterFocusContextKey.key,
        text: panelState["filter"] || "",
        history: panelState["filterHistory"] || []
      }
    }, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, telemetryService);
    this.editorService = editorService;
    this.markerService = markerService;
    this.workspaceContextService = workspaceContextService;
    this.uriIdentityService = uriIdentityService;
    this.lastSelectedRelativeTop = 0;
    this.currentActiveResource = null;
    this.onVisibleDisposables = this._register(new DisposableStore());
    this.widgetDisposables = this._register(new DisposableStore());
    this.currentHeight = 0;
    this.currentWidth = 0;
    this.cachedFilterStats = void 0;
    this.currentResourceGotAddedToMarkersData = false;
    this.onDidChangeVisibility = this.onDidChangeBodyVisibility;
    this.panelState = panelState;
    this.markersModel = this._register(instantiationService.createInstance(MarkersModel));
    this.markersViewModel = this._register(instantiationService.createInstance(MarkersViewModel, this.panelState["multiline"], this.panelState["viewMode"] ?? this.getDefaultViewMode()));
    this._register(this.onDidChangeVisibility((visible) => this.onDidChangeMarkersViewVisibility(visible)));
    this._register(this.markersViewModel.onDidChangeViewMode((_) => this.onDidChangeViewMode()));
    this.widgetAccessibilityProvider = instantiationService.createInstance(MarkersWidgetAccessibilityProvider);
    this.widgetIdentityProvider = { getId(element) {
      return element.id;
    } };
    this.setCurrentActiveEditor();
    this.filter = new Filter(FilterOptions.EMPTY(uriIdentityService));
    this.rangeHighlightDecorations = this._register(this.instantiationService.createInstance(RangeHighlightDecorations));
    this.filters = this._register(new MarkersFilters({
      filterHistory: this.panelState["filterHistory"] || [],
      showErrors: this.panelState["showErrors"] !== false,
      showWarnings: this.panelState["showWarnings"] !== false,
      showInfos: this.panelState["showInfos"] !== false,
      excludedFiles: !!this.panelState["useFilesExclude"],
      activeFile: !!this.panelState["activeFile"]
    }, this.contextKeyService));
    this._register(this.configurationService.onDidChangeConfiguration((e) => {
      if (this.filters.excludedFiles && e.affectsConfiguration("files.exclude")) {
        this.updateFilter();
      }
    }));
  }
  render() {
    super.render();
    this._register(registerNavigableContainer({
      focusNotifiers: [this, this.filterWidget],
      focusNextWidget: () => {
        if (this.filterWidget.hasFocus()) {
          this.focus();
        }
      },
      focusPreviousWidget: () => {
        if (!this.filterWidget.hasFocus()) {
          this.focusFilter();
        }
      }
    }));
  }
  renderBody(parent) {
    super.renderBody(parent);
    parent.classList.add("markers-panel");
    this._register(addDisposableListener(parent, "keydown", (e) => {
      if (this.keybindingService.mightProducePrintableCharacter(new StandardKeyboardEvent(e))) {
        this.focusFilter();
      }
    }));
    const panelContainer = append(parent, $$1(".markers-panel-container"));
    this.createArialLabelElement(panelContainer);
    this.createMessageBox(panelContainer);
    this.widgetContainer = append(panelContainer, $$1(".widget-container"));
    this.createWidget(this.widgetContainer);
    this.updateFilter();
    this.renderContent();
  }
  getTitle() {
    return Messages.MARKERS_PANEL_TITLE_PROBLEMS;
  }
  layoutBodyContent(height = this.currentHeight, width = this.currentWidth) {
    if (this.messageBoxContainer) {
      this.messageBoxContainer.style.height = `${height}px`;
    }
    this.widget.layout(height, width);
    this.currentHeight = height;
    this.currentWidth = width;
  }
  focus() {
    if (this.widget.getHTMLElement() === document.activeElement) {
      return;
    }
    if (this.hasNoProblems()) {
      this.messageBoxContainer.focus();
    } else {
      this.widget.domFocus();
      this.widget.setMarkerSelection();
    }
  }
  focusFilter() {
    this.filterWidget.focus();
  }
  updateBadge(total, filtered) {
    this.filterWidget.updateBadge(total === filtered || total === 0 ? void 0 : localize("showing filtered problems", "Showing {0} of {1}", filtered, total));
  }
  checkMoreFilters() {
    this.filterWidget.checkMoreFilters(!this.filters.showErrors || !this.filters.showWarnings || !this.filters.showInfos || this.filters.excludedFiles || this.filters.activeFile);
  }
  clearFilterText() {
    this.filterWidget.setFilterText("");
  }
  showQuickFixes(marker) {
    const viewModel = this.markersViewModel.getViewModel(marker);
    if (viewModel) {
      viewModel.quickFixAction.run();
    }
  }
  openFileAtElement(element, preserveFocus, sideByside, pinned) {
    const { resource, selection } = element instanceof Marker ? { resource: element.resource, selection: element.range } : element instanceof RelatedInformation ? { resource: element.raw.resource, selection: element.raw } : "marker" in element ? { resource: element.marker.resource, selection: element.marker.range } : { resource: null, selection: null };
    if (resource && selection) {
      this.editorService.openEditor({
        resource,
        options: {
          selection,
          preserveFocus,
          pinned,
          revealIfVisible: true
        }
      }, sideByside ? SIDE_GROUP : ACTIVE_GROUP).then((editor) => {
        if (editor && preserveFocus) {
          this.rangeHighlightDecorations.highlightRange({ resource, range: selection }, editor.getControl());
        } else {
          this.rangeHighlightDecorations.removeHighlightRange();
        }
      });
      return true;
    } else {
      this.rangeHighlightDecorations.removeHighlightRange();
    }
    return false;
  }
  refreshPanel(markerOrChange) {
    if (this.isVisible()) {
      const hasSelection = this.widget.getSelection().length > 0;
      if (markerOrChange) {
        if (markerOrChange instanceof Marker) {
          this.widget.updateMarker(markerOrChange);
        } else {
          if (markerOrChange.added.size || markerOrChange.removed.size) {
            this.resetWidget();
          } else {
            this.widget.update([...markerOrChange.updated]);
          }
        }
      } else {
        this.resetWidget();
      }
      if (hasSelection) {
        this.widget.setMarkerSelection();
      }
      this.cachedFilterStats = void 0;
      const { total, filtered } = this.getFilterStats();
      this.toggleVisibility(total === 0 || filtered === 0);
      this.renderMessage();
      this.updateBadge(total, filtered);
      this.checkMoreFilters();
    }
  }
  onDidChangeViewState(marker) {
    this.refreshPanel(marker);
  }
  resetWidget() {
    this.widget.reset(this.getResourceMarkers());
  }
  updateFilter() {
    this.filter.options = new FilterOptions(
      this.filterWidget.getFilterText(),
      this.getFilesExcludeExpressions(),
      this.filters.showWarnings,
      this.filters.showErrors,
      this.filters.showInfos,
      this.uriIdentityService
    );
    this.widget.filterMarkers(this.getResourceMarkers(), this.filter.options);
    this.cachedFilterStats = void 0;
    const { total, filtered } = this.getFilterStats();
    this.toggleVisibility(total === 0 || filtered === 0);
    this.renderMessage();
    this.updateBadge(total, filtered);
    this.checkMoreFilters();
  }
  getDefaultViewMode() {
    switch (this.configurationService.getValue("problems.defaultViewMode")) {
      case "table":
        return "table";
      case "tree":
        return "tree";
      default:
        return "tree";
    }
  }
  getFilesExcludeExpressions() {
    if (!this.filters.excludedFiles) {
      return [];
    }
    const workspaceFolders = this.workspaceContextService.getWorkspace().folders;
    return workspaceFolders.length ? workspaceFolders.map(
      (workspaceFolder) => ({ root: workspaceFolder.uri, expression: this.getFilesExclude(workspaceFolder.uri) })
    ) : this.getFilesExclude();
  }
  getFilesExclude(resource) {
    return deepClone(this.configurationService.getValue("files.exclude", { resource })) || {};
  }
  getResourceMarkers() {
    if (!this.filters.activeFile) {
      return this.markersModel.resourceMarkers;
    }
    let resourceMarkers = [];
    if (this.currentActiveResource) {
      const activeResourceMarkers = this.markersModel.getResourceMarkers(this.currentActiveResource);
      if (activeResourceMarkers) {
        resourceMarkers = [activeResourceMarkers];
      }
    }
    return resourceMarkers;
  }
  createMessageBox(parent) {
    this.messageBoxContainer = append(parent, $$1(".message-box-container"));
    this.messageBoxContainer.setAttribute("aria-labelledby", "markers-panel-arialabel");
  }
  createArialLabelElement(parent) {
    this.ariaLabelElement = append(parent, $$1(""));
    this.ariaLabelElement.setAttribute("id", "markers-panel-arialabel");
  }
  createWidget(parent) {
    this.widget = this.markersViewModel.viewMode === "table" ? this.createTable(parent) : this.createTree(parent);
    this.widgetDisposables.add(this.widget);
    const markerFocusContextKey = MarkersContextKeys.MarkerFocusContextKey.bindTo(this.widget.contextKeyService);
    const relatedInformationFocusContextKey = MarkersContextKeys.RelatedInformationFocusContextKey.bindTo(this.widget.contextKeyService);
    this.widgetDisposables.add(this.widget.onDidChangeFocus((focus) => {
      markerFocusContextKey.set(focus.elements.some((e) => e instanceof Marker));
      relatedInformationFocusContextKey.set(focus.elements.some((e) => e instanceof RelatedInformation));
    }));
    this.widgetDisposables.add(Event.debounce(this.widget.onDidOpen, (last, event) => event, 75, true)((options) => {
      this.openFileAtElement(options.element, !!options.editorOptions.preserveFocus, options.sideBySide, !!options.editorOptions.pinned);
    }));
    this.widgetDisposables.add(Event.any(this.widget.onDidChangeSelection, this.widget.onDidChangeFocus)(() => {
      const elements = [...this.widget.getSelection(), ...this.widget.getFocus()];
      for (const element of elements) {
        if (element instanceof Marker) {
          const viewModel = this.markersViewModel.getViewModel(element);
          viewModel == null ? void 0 : viewModel.showLightBulb();
        }
      }
    }));
    this.widgetDisposables.add(this.widget.onContextMenu(this.onContextMenu, this));
    this.widgetDisposables.add(this.widget.onDidChangeSelection(this.onSelected, this));
  }
  createTable(parent) {
    const table = this.instantiationService.createInstance(MarkersTable, append(parent, $$1(".markers-table-container")), this.markersViewModel, this.getResourceMarkers(), this.filter.options, {
      accessibilityProvider: this.widgetAccessibilityProvider,
      dnd: this.instantiationService.createInstance(ResourceListDnDHandler, (element) => {
        if (element instanceof MarkerTableItem) {
          return withSelection(element.resource, element.range);
        }
        return null;
      }),
      horizontalScrolling: false,
      identityProvider: this.widgetIdentityProvider,
      multipleSelectionSupport: true,
      selectionNavigation: true
    });
    return table;
  }
  createTree(parent) {
    const onDidChangeRenderNodeCount = new Relay();
    const treeLabels = this.instantiationService.createInstance(ResourceLabels, this);
    const virtualDelegate = new VirtualDelegate(this.markersViewModel);
    const renderers = [
      this.instantiationService.createInstance(ResourceMarkersRenderer, treeLabels, onDidChangeRenderNodeCount.event),
      this.instantiationService.createInstance(MarkerRenderer, this.markersViewModel),
      this.instantiationService.createInstance(RelatedInformationRenderer)
    ];
    const tree = this.instantiationService.createInstance(MarkersTree, "MarkersView", append(parent, $$1(".tree-container.show-file-icons")), virtualDelegate, renderers, {
      filter: this.filter,
      accessibilityProvider: this.widgetAccessibilityProvider,
      identityProvider: this.widgetIdentityProvider,
      dnd: this.instantiationService.createInstance(ResourceListDnDHandler, (element) => {
        if (element instanceof ResourceMarkers) {
          return element.resource;
        }
        if (element instanceof Marker) {
          return withSelection(element.resource, element.range);
        }
        if (element instanceof RelatedInformation) {
          return withSelection(element.raw.resource, element.raw);
        }
        return null;
      }),
      expandOnlyOnTwistieClick: (e) => e instanceof Marker && e.relatedInformation.length > 0,
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      },
      selectionNavigation: true,
      multipleSelectionSupport: true
    });
    onDidChangeRenderNodeCount.input = tree.onDidChangeRenderNodeCount;
    return tree;
  }
  collapseAll() {
    this.widget.collapseMarkers();
  }
  setMultiline(multiline) {
    this.markersViewModel.multiline = multiline;
  }
  setViewMode(viewMode) {
    this.markersViewModel.viewMode = viewMode;
  }
  onDidChangeMarkersViewVisibility(visible) {
    this.onVisibleDisposables.clear();
    if (visible) {
      for (const disposable of this.reInitialize()) {
        this.onVisibleDisposables.add(disposable);
      }
      this.refreshPanel();
    }
  }
  reInitialize() {
    const disposables = [];
    const readMarkers = (resource) => this.markerService.read({ resource, severities: MarkerSeverity.Error | MarkerSeverity.Warning | MarkerSeverity.Info });
    this.markersModel.setResourceMarkers(groupBy(readMarkers(), compareMarkersByUri).map((group) => [group[0].resource, group]));
    disposables.push(Event.debounce(this.markerService.onMarkerChanged, (resourcesMap, resources) => {
      resourcesMap = resourcesMap || new ResourceMap();
      resources.forEach((resource) => resourcesMap.set(resource, resource));
      return resourcesMap;
    }, 64)((resourcesMap) => {
      this.markersModel.setResourceMarkers([...resourcesMap.values()].map((resource) => [resource, readMarkers(resource)]));
    }));
    disposables.push(Event.any(this.markersModel.onDidChange, this.editorService.onDidActiveEditorChange)((changes) => {
      if (changes) {
        this.onDidChangeModel(changes);
      } else {
        this.onActiveEditorChanged();
      }
    }));
    disposables.push(toDisposable(() => this.markersModel.reset()));
    this.markersModel.resourceMarkers.forEach((resourceMarker) => resourceMarker.markers.forEach((marker) => this.markersViewModel.add(marker)));
    disposables.push(this.markersViewModel.onDidChange((marker) => this.onDidChangeViewState(marker)));
    disposables.push(toDisposable(() => this.markersModel.resourceMarkers.forEach((resourceMarker) => this.markersViewModel.remove(resourceMarker.resource))));
    disposables.push(this.filters.onDidChange((event) => {
      if (event.activeFile) {
        this.refreshPanel();
      } else if (event.excludedFiles || event.showWarnings || event.showErrors || event.showInfos) {
        this.updateFilter();
      }
    }));
    disposables.push(this.filterWidget.onDidChangeFilterText((e) => this.updateFilter()));
    disposables.push(toDisposable(() => {
      this.cachedFilterStats = void 0;
    }));
    disposables.push(toDisposable(() => this.rangeHighlightDecorations.removeHighlightRange()));
    return disposables;
  }
  onDidChangeModel(change) {
    const resourceMarkers = [...change.added, ...change.removed, ...change.updated];
    const resources = [];
    for (const { resource } of resourceMarkers) {
      this.markersViewModel.remove(resource);
      const resourceMarkers2 = this.markersModel.getResourceMarkers(resource);
      if (resourceMarkers2) {
        for (const marker of resourceMarkers2.markers) {
          this.markersViewModel.add(marker);
        }
      }
      resources.push(resource);
    }
    this.currentResourceGotAddedToMarkersData = this.currentResourceGotAddedToMarkersData || this.isCurrentResourceGotAddedToMarkersData(resources);
    this.refreshPanel(change);
    this.updateRangeHighlights();
    if (this.currentResourceGotAddedToMarkersData) {
      this.autoReveal();
      this.currentResourceGotAddedToMarkersData = false;
    }
  }
  onDidChangeViewMode() {
    if (this.widgetContainer && this.widget) {
      this.widgetContainer.textContent = "";
      this.widgetDisposables.clear();
    }
    const selection = /* @__PURE__ */ new Set();
    for (const marker of this.widget.getSelection()) {
      if (marker instanceof ResourceMarkers) {
        marker.markers.forEach((m) => selection.add(m));
      } else if (marker instanceof Marker || marker instanceof MarkerTableItem) {
        selection.add(marker);
      }
    }
    const focus = /* @__PURE__ */ new Set();
    for (const marker of this.widget.getFocus()) {
      if (marker instanceof Marker || marker instanceof MarkerTableItem) {
        focus.add(marker);
      }
    }
    this.createWidget(this.widgetContainer);
    this.refreshPanel();
    if (selection.size > 0) {
      this.widget.setMarkerSelection(Array.from(selection), Array.from(focus));
      this.widget.domFocus();
    }
  }
  isCurrentResourceGotAddedToMarkersData(changedResources) {
    const currentlyActiveResource = this.currentActiveResource;
    if (!currentlyActiveResource) {
      return false;
    }
    const resourceForCurrentActiveResource = this.getResourceForCurrentActiveResource();
    if (resourceForCurrentActiveResource) {
      return false;
    }
    return changedResources.some((r) => r.toString() === currentlyActiveResource.toString());
  }
  onActiveEditorChanged() {
    this.setCurrentActiveEditor();
    if (this.filters.activeFile) {
      this.refreshPanel();
    }
    this.autoReveal();
  }
  setCurrentActiveEditor() {
    const activeEditor = this.editorService.activeEditor;
    this.currentActiveResource = activeEditor ? withUndefinedAsNull(EditorResourceAccessor.getOriginalUri(activeEditor, { supportSideBySide: SideBySideEditor.PRIMARY })) : null;
  }
  onSelected() {
    const selection = this.widget.getSelection();
    if (selection && selection.length > 0) {
      this.lastSelectedRelativeTop = this.widget.getRelativeTop(selection[0]) || 0;
    }
  }
  hasNoProblems() {
    const { total, filtered } = this.getFilterStats();
    return total === 0 || filtered === 0;
  }
  renderContent() {
    this.cachedFilterStats = void 0;
    this.resetWidget();
    this.toggleVisibility(this.hasNoProblems());
    this.renderMessage();
  }
  renderMessage() {
    if (!this.messageBoxContainer || !this.ariaLabelElement) {
      return;
    }
    clearNode(this.messageBoxContainer);
    const { total, filtered } = this.getFilterStats();
    if (filtered === 0) {
      this.messageBoxContainer.style.display = "block";
      this.messageBoxContainer.setAttribute("tabIndex", "0");
      if (this.filters.activeFile) {
        this.renderFilterMessageForActiveFile(this.messageBoxContainer);
      } else {
        if (total > 0) {
          this.renderFilteredByFilterMessage(this.messageBoxContainer);
        } else {
          this.renderNoProblemsMessage(this.messageBoxContainer);
        }
      }
    } else {
      this.messageBoxContainer.style.display = "none";
      if (filtered === total) {
        this.setAriaLabel(localize("No problems filtered", "Showing {0} problems", total));
      } else {
        this.setAriaLabel(localize("problems filtered", "Showing {0} of {1} problems", filtered, total));
      }
      this.messageBoxContainer.removeAttribute("tabIndex");
    }
  }
  renderFilterMessageForActiveFile(container) {
    if (this.currentActiveResource && this.markersModel.getResourceMarkers(this.currentActiveResource)) {
      this.renderFilteredByFilterMessage(container);
    } else {
      this.renderNoProblemsMessageForActiveFile(container);
    }
  }
  renderFilteredByFilterMessage(container) {
    const span1 = append(container, $$1("span"));
    span1.textContent = Messages.MARKERS_PANEL_NO_PROBLEMS_FILTERS;
    const link = append(container, $$1("a.messageAction"));
    link.textContent = localize("clearFilter", "Clear Filters");
    link.setAttribute("tabIndex", "0");
    const span2 = append(container, $$1("span"));
    span2.textContent = ".";
    addStandardDisposableListener(link, EventType.CLICK, () => this.clearFilters());
    addStandardDisposableListener(link, EventType.KEY_DOWN, (e) => {
      if (e.equals(3) || e.equals(10)) {
        this.clearFilters();
        e.stopPropagation();
      }
    });
    this.setAriaLabel(Messages.MARKERS_PANEL_NO_PROBLEMS_FILTERS);
  }
  renderNoProblemsMessageForActiveFile(container) {
    const span = append(container, $$1("span"));
    span.textContent = Messages.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT;
    this.setAriaLabel(Messages.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT);
  }
  renderNoProblemsMessage(container) {
    const span = append(container, $$1("span"));
    span.textContent = Messages.MARKERS_PANEL_NO_PROBLEMS_BUILT;
    this.setAriaLabel(Messages.MARKERS_PANEL_NO_PROBLEMS_BUILT);
  }
  setAriaLabel(label) {
    this.widget.setAriaLabel(label);
    this.ariaLabelElement.setAttribute("aria-label", label);
  }
  clearFilters() {
    this.filterWidget.setFilterText("");
    this.filters.excludedFiles = false;
    this.filters.showErrors = true;
    this.filters.showWarnings = true;
    this.filters.showInfos = true;
  }
  autoReveal(focus = false) {
    if (this.filters.activeFile) {
      return;
    }
    const autoReveal = this.configurationService.getValue("problems.autoReveal");
    if (typeof autoReveal === "boolean" && autoReveal) {
      const currentActiveResource = this.getResourceForCurrentActiveResource();
      this.widget.revealMarkers(currentActiveResource, focus, this.lastSelectedRelativeTop);
    }
  }
  getResourceForCurrentActiveResource() {
    return this.currentActiveResource ? this.markersModel.getResourceMarkers(this.currentActiveResource) : null;
  }
  updateRangeHighlights() {
    this.rangeHighlightDecorations.removeHighlightRange();
    if (this.widget.getHTMLElement() === document.activeElement) {
      this.highlightCurrentSelectedMarkerRange();
    }
  }
  highlightCurrentSelectedMarkerRange() {
    const selections = this.widget.getSelection() ?? [];
    if (selections.length !== 1) {
      return;
    }
    const selection = selections[0];
    if (!(selection instanceof Marker)) {
      return;
    }
    this.rangeHighlightDecorations.highlightRange(selection);
  }
  onContextMenu(e) {
    const element = e.element;
    if (!element) {
      return;
    }
    e.browserEvent.preventDefault();
    e.browserEvent.stopPropagation();
    this.contextMenuService.showContextMenu({
      getAnchor: () => e.anchor,
      menuId: MenuId.ProblemsPanelContext,
      contextKeyService: this.widget.contextKeyService,
      getActions: () => this.getMenuActions(element),
      getActionViewItem: (action) => {
        const keybinding = this.keybindingService.lookupKeybinding(action.id);
        if (keybinding) {
          return new ActionViewItem(action, action, { label: true, keybinding: keybinding.getLabel() });
        }
        return void 0;
      },
      onHide: (wasCancelled) => {
        if (wasCancelled) {
          this.widget.domFocus();
        }
      }
    });
  }
  getMenuActions(element) {
    const result = [];
    if (element instanceof Marker) {
      const viewModel = this.markersViewModel.getViewModel(element);
      if (viewModel) {
        const quickFixActions = viewModel.quickFixAction.quickFixes;
        if (quickFixActions.length) {
          result.push(...quickFixActions);
          result.push(new Separator());
        }
      }
    }
    return result;
  }
  getFocusElement() {
    return this.widget.getFocus()[0] ?? void 0;
  }
  getFocusedSelectedElements() {
    const focus = this.getFocusElement();
    if (!focus) {
      return null;
    }
    const selection = this.widget.getSelection();
    if (selection.includes(focus)) {
      const result = [];
      for (const selected of selection) {
        if (selected) {
          result.push(selected);
        }
      }
      return result;
    } else {
      return [focus];
    }
  }
  getAllResourceMarkers() {
    return this.markersModel.resourceMarkers;
  }
  getFilterStats() {
    var _a2;
    if (!this.cachedFilterStats) {
      this.cachedFilterStats = {
        total: this.markersModel.total,
        filtered: ((_a2 = this.widget) == null ? void 0 : _a2.getVisibleItemCount()) ?? 0
      };
    }
    return this.cachedFilterStats;
  }
  toggleVisibility(hide) {
    this.widget.toggleVisibility(hide);
    this.layoutBodyContent();
  }
  saveState() {
    this.panelState["filter"] = this.filterWidget.getFilterText();
    this.panelState["filterHistory"] = this.filters.filterHistory;
    this.panelState["showErrors"] = this.filters.showErrors;
    this.panelState["showWarnings"] = this.filters.showWarnings;
    this.panelState["showInfos"] = this.filters.showInfos;
    this.panelState["useFilesExclude"] = this.filters.excludedFiles;
    this.panelState["activeFile"] = this.filters.activeFile;
    this.panelState["multiline"] = this.markersViewModel.multiline;
    this.panelState["viewMode"] = this.markersViewModel.viewMode;
    super.saveState();
  }
  dispose() {
    super.dispose();
  }
};
MarkersView = __decorate([
  __param(1, IInstantiationService),
  __param(2, IViewDescriptorService),
  __param(3, IEditorService),
  __param(4, IConfigurationService),
  __param(5, ITelemetryService),
  __param(6, IMarkerService),
  __param(7, IContextKeyService),
  __param(8, IWorkspaceContextService),
  __param(9, IContextMenuService),
  __param(10, IUriIdentityService),
  __param(11, IKeybindingService),
  __param(12, IStorageService),
  __param(13, IOpenerService),
  __param(14, IThemeService)
], MarkersView);
let MarkersTree = class MarkersTree2 extends WorkbenchObjectTree {
  constructor(user, container, delegate, renderers, options, instantiationService, contextKeyService, listService, themeService, configurationService) {
    super(user, container, delegate, renderers, options, instantiationService, contextKeyService, listService, configurationService);
    this.container = container;
    this.visibilityContextKey = MarkersContextKeys.MarkersTreeVisibilityContextKey.bindTo(contextKeyService);
  }
  collapseMarkers() {
    this.collapseAll();
    this.setSelection([]);
    this.setFocus([]);
    this.getHTMLElement().focus();
    this.focusFirst();
  }
  filterMarkers() {
    this.refilter();
  }
  getVisibleItemCount() {
    let filtered = 0;
    const root = this.getNode();
    for (const resourceMarkerNode of root.children) {
      for (const markerNode of resourceMarkerNode.children) {
        if (resourceMarkerNode.visible && markerNode.visible) {
          filtered++;
        }
      }
    }
    return filtered;
  }
  isVisible() {
    return !this.container.classList.contains("hidden");
  }
  toggleVisibility(hide) {
    this.visibilityContextKey.set(!hide);
    this.container.classList.toggle("hidden", hide);
  }
  reset(resourceMarkers) {
    this.setChildren(null, Iterable.map(
      resourceMarkers,
      (m) => ({ element: m, children: createResourceMarkersIterator(m) })
    ));
  }
  revealMarkers(activeResource, focus, lastSelectedRelativeTop) {
    if (activeResource) {
      if (this.hasElement(activeResource)) {
        if (!this.isCollapsed(activeResource) && this.hasSelectedMarkerFor(activeResource)) {
          this.reveal(this.getSelection()[0], lastSelectedRelativeTop);
          if (focus) {
            this.setFocus(this.getSelection());
          }
        } else {
          this.expand(activeResource);
          this.reveal(activeResource, 0);
          if (focus) {
            this.setFocus([activeResource]);
            this.setSelection([activeResource]);
          }
        }
      }
    } else if (focus) {
      this.setSelection([]);
      this.focusFirst();
    }
  }
  setAriaLabel(label) {
    this.ariaLabel = label;
  }
  setMarkerSelection(selection, focus) {
    if (this.isVisible()) {
      if (selection && selection.length > 0) {
        this.setSelection(selection.map((m) => this.findMarkerNode(m)));
        if (focus && focus.length > 0) {
          this.setFocus(focus.map((f) => this.findMarkerNode(f)));
        } else {
          this.setFocus([this.findMarkerNode(selection[0])]);
        }
        this.reveal(this.findMarkerNode(selection[0]));
      } else if (this.getSelection().length === 0) {
        const firstVisibleElement = this.firstVisibleElement;
        const marker = firstVisibleElement ? firstVisibleElement instanceof ResourceMarkers ? firstVisibleElement.markers[0] : firstVisibleElement instanceof Marker ? firstVisibleElement : void 0 : void 0;
        if (marker) {
          this.setSelection([marker]);
          this.setFocus([marker]);
          this.reveal(marker);
        }
      }
    }
  }
  update(resourceMarkers) {
    for (const resourceMarker of resourceMarkers) {
      this.setChildren(resourceMarker, createResourceMarkersIterator(resourceMarker));
      this.rerender(resourceMarker);
    }
  }
  updateMarker(marker) {
    this.rerender(marker);
  }
  findMarkerNode(marker) {
    for (const resourceNode of this.getNode().children) {
      for (const markerNode of resourceNode.children) {
        if (markerNode.element instanceof Marker && markerNode.element.marker === marker.marker) {
          return markerNode.element;
        }
      }
    }
    return null;
  }
  hasSelectedMarkerFor(resource) {
    const selectedElement = this.getSelection();
    if (selectedElement && selectedElement.length > 0) {
      if (selectedElement[0] instanceof Marker) {
        if (resource.has(selectedElement[0].marker.resource)) {
          return true;
        }
      }
    }
    return false;
  }
  dispose() {
    super.dispose();
  }
  layout(height, width) {
    this.container.style.height = `${height}px`;
    super.layout(height, width);
  }
};
MarkersTree = __decorate([
  __param(5, IInstantiationService),
  __param(6, IContextKeyService),
  __param(7, IListService),
  __param(8, IThemeService),
  __param(9, IConfigurationService)
], MarkersTree);
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: Markers.MARKER_OPEN_ACTION_ID,
  weight: 200,
  when: ContextKeyExpr.and(MarkersContextKeys.MarkerFocusContextKey),
  primary: 3,
  mac: {
    primary: 3,
    secondary: [2048 | 18]
  },
  handler: (accessor, args) => {
    const markersView = accessor.get(IViewsService).getActiveViewWithId(Markers.MARKERS_VIEW_ID);
    markersView.openFileAtElement(markersView.getFocusElement(), false, false, true);
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: Markers.MARKER_OPEN_SIDE_ACTION_ID,
  weight: 200,
  when: ContextKeyExpr.and(MarkersContextKeys.MarkerFocusContextKey),
  primary: 2048 | 3,
  mac: {
    primary: 256 | 3
  },
  handler: (accessor, args) => {
    const markersView = accessor.get(IViewsService).getActiveViewWithId(Markers.MARKERS_VIEW_ID);
    markersView.openFileAtElement(markersView.getFocusElement(), false, true, true);
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: Markers.MARKER_SHOW_PANEL_ID,
  weight: 200,
  when: void 0,
  primary: void 0,
  handler: async (accessor, args) => {
    await accessor.get(IViewsService).openView(Markers.MARKERS_VIEW_ID);
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: Markers.MARKER_SHOW_QUICK_FIX,
  weight: 200,
  when: MarkersContextKeys.MarkerFocusContextKey,
  primary: 2048 | 89,
  handler: (accessor, args) => {
    const markersView = accessor.get(IViewsService).getActiveViewWithId(Markers.MARKERS_VIEW_ID);
    const focusedElement = markersView.getFocusElement();
    if (focusedElement instanceof Marker) {
      markersView.showQuickFixes(focusedElement);
    }
  }
});
Registry.as(Extensions.Configuration).registerConfiguration({
  "id": "problems",
  "order": 101,
  "title": Messages.PROBLEMS_PANEL_CONFIGURATION_TITLE,
  "type": "object",
  "properties": {
    "problems.autoReveal": {
      "description": Messages.PROBLEMS_PANEL_CONFIGURATION_AUTO_REVEAL,
      "type": "boolean",
      "default": true
    },
    "problems.defaultViewMode": {
      "description": Messages.PROBLEMS_PANEL_CONFIGURATION_VIEW_MODE,
      "type": "string",
      "default": "tree",
      "enum": ["table", "tree"]
    },
    "problems.showCurrentInStatus": {
      "description": Messages.PROBLEMS_PANEL_CONFIGURATION_SHOW_CURRENT_STATUS,
      "type": "boolean",
      "default": false
    },
    "problems.sortOrder": {
      "description": Messages.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER,
      "type": "string",
      "default": "severity",
      "enum": ["severity", "position"],
      "enumDescriptions": [
        Messages.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_SEVERITY,
        Messages.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_POSITION
      ]
    }
  }
});
const markersViewIcon = registerIcon("markers-view-icon", Codicon.warning, localize("markersViewIcon", "View icon of the markers view."));
const VIEW_CONTAINER = Registry.as(Extensions$1.ViewContainersRegistry).registerViewContainer({
  id: Markers.MARKERS_CONTAINER_ID,
  title: Messages.MARKERS_PANEL_TITLE_PROBLEMS,
  icon: markersViewIcon,
  hideIfEmpty: true,
  order: 0,
  ctorDescriptor: new SyncDescriptor(
    ViewPaneContainer,
    [Markers.MARKERS_CONTAINER_ID, { mergeViewWithContainerWhenSingleView: true }]
  ),
  storageId: Markers.MARKERS_VIEW_STORAGE_ID
}, 1, { doNotRegisterOpenCommand: true });
Registry.as(Extensions$1.ViewsRegistry).registerViews([{
  id: Markers.MARKERS_VIEW_ID,
  containerIcon: markersViewIcon,
  name: Messages.MARKERS_PANEL_TITLE_PROBLEMS,
  canToggleVisibility: false,
  canMoveView: true,
  ctorDescriptor: new SyncDescriptor(MarkersView),
  openCommandActionDescriptor: {
    id: "workbench.actions.view.problems",
    mnemonicTitle: localize({ key: "miMarker", comment: ["&& denotes a mnemonic"] }, "&&Problems"),
    keybindings: { primary: 2048 | 1024 | 43 },
    order: 0
  }
}], VIEW_CONTAINER);
const workbenchRegistry = Registry.as(Extensions$2.Workbench);
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: `workbench.actions.table.${Markers.MARKERS_VIEW_ID}.viewAsTree`,
      title: localize("viewAsTree", "View as Tree"),
      menu: {
        id: MenuId.ViewTitle,
        when: ContextKeyExpr.and(ContextKeyExpr.equals("view", Markers.MARKERS_VIEW_ID), MarkersContextKeys.MarkersViewModeContextKey.isEqualTo("table")),
        group: "navigation",
        order: 3
      },
      icon: Codicon.listTree,
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, view) {
    view.setViewMode("tree");
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: `workbench.actions.table.${Markers.MARKERS_VIEW_ID}.viewAsTable`,
      title: localize("viewAsTable", "View as Table"),
      menu: {
        id: MenuId.ViewTitle,
        when: ContextKeyExpr.and(ContextKeyExpr.equals("view", Markers.MARKERS_VIEW_ID), MarkersContextKeys.MarkersViewModeContextKey.isEqualTo("tree")),
        group: "navigation",
        order: 3
      },
      icon: Codicon.listFlat,
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, view) {
    view.setViewMode("table");
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: `workbench.actions.${Markers.MARKERS_VIEW_ID}.toggleErrors`,
      title: localize("toggle errors", "Toggle Errors"),
      category: localize("problems", "Problems"),
      toggled: {
        condition: MarkersContextKeys.ShowErrorsFilterContextKey,
        title: localize("errors", "Show Errors")
      },
      menu: {
        id: viewFilterSubmenu,
        group: "1_filter",
        when: ContextKeyExpr.equals("view", Markers.MARKERS_VIEW_ID),
        order: 1
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, view) {
    view.filters.showErrors = !view.filters.showErrors;
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: `workbench.actions.${Markers.MARKERS_VIEW_ID}.toggleWarnings`,
      title: localize("toggle warnings", "Toggle Warnings"),
      category: localize("problems", "Problems"),
      toggled: {
        condition: MarkersContextKeys.ShowWarningsFilterContextKey,
        title: localize("warnings", "Show Warnings")
      },
      menu: {
        id: viewFilterSubmenu,
        group: "1_filter",
        when: ContextKeyExpr.equals("view", Markers.MARKERS_VIEW_ID),
        order: 2
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, view) {
    view.filters.showWarnings = !view.filters.showWarnings;
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: `workbench.actions.${Markers.MARKERS_VIEW_ID}.toggleInfos`,
      title: localize("toggle infos", "Toggle Infos"),
      category: localize("problems", "Problems"),
      toggled: {
        condition: MarkersContextKeys.ShowInfoFilterContextKey,
        title: localize("Infos", "Show Infos")
      },
      menu: {
        id: viewFilterSubmenu,
        group: "1_filter",
        when: ContextKeyExpr.equals("view", Markers.MARKERS_VIEW_ID),
        order: 3
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, view) {
    view.filters.showInfos = !view.filters.showInfos;
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: `workbench.actions.${Markers.MARKERS_VIEW_ID}.toggleActiveFile`,
      title: localize("toggle active file", "Toggle Active File"),
      category: localize("problems", "Problems"),
      toggled: {
        condition: MarkersContextKeys.ShowActiveFileFilterContextKey,
        title: localize("Active File", "Show Active File Only")
      },
      menu: {
        id: viewFilterSubmenu,
        group: "2_filter",
        when: ContextKeyExpr.equals("view", Markers.MARKERS_VIEW_ID),
        order: 1
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, view) {
    view.filters.activeFile = !view.filters.activeFile;
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: `workbench.actions.${Markers.MARKERS_VIEW_ID}.toggleExcludedFiles`,
      title: localize("toggle Excluded Files", "Toggle Excluded Files"),
      category: localize("problems", "Problems"),
      toggled: {
        condition: MarkersContextKeys.ShowExcludedFilesFilterContextKey,
        title: localize("Excluded Files", "Hide Excluded Files")
      },
      menu: {
        id: viewFilterSubmenu,
        group: "2_filter",
        when: ContextKeyExpr.equals("view", Markers.MARKERS_VIEW_ID),
        order: 2
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, view) {
    view.filters.excludedFiles = !view.filters.excludedFiles;
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "workbench.action.problems.focus",
      title: { value: Messages.MARKERS_PANEL_SHOW_LABEL, original: "Focus Problems (Errors, Warnings, Infos)" },
      category: Categories.View,
      f1: true
    });
  }
  async run(accessor) {
    accessor.get(IViewsService).openView(Markers.MARKERS_VIEW_ID, true);
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    const when = ContextKeyExpr.and(FocusedViewContext.isEqualTo(Markers.MARKERS_VIEW_ID), MarkersContextKeys.MarkersTreeVisibilityContextKey, MarkersContextKeys.RelatedInformationFocusContextKey.toNegated());
    super({
      id: Markers.MARKER_COPY_ACTION_ID,
      title: { value: localize("copyMarker", "Copy"), original: "Copy" },
      menu: {
        id: MenuId.ProblemsPanelContext,
        when,
        group: "navigation"
      },
      keybinding: {
        weight: 200,
        primary: 2048 | 33,
        when
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, markersView) {
    const clipboardService = serviceAccessor.get(IClipboardService);
    const selection = markersView.getFocusedSelectedElements() || markersView.getAllResourceMarkers();
    const markers = [];
    const addMarker = (marker) => {
      if (!markers.includes(marker)) {
        markers.push(marker);
      }
    };
    for (const selected of selection) {
      if (selected instanceof ResourceMarkers) {
        selected.markers.forEach(addMarker);
      } else if (selected instanceof Marker) {
        addMarker(selected);
      }
    }
    if (markers.length) {
      await clipboardService.writeText(`[${markers}]`);
    }
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: Markers.MARKER_COPY_MESSAGE_ACTION_ID,
      title: { value: localize("copyMessage", "Copy Message"), original: "Copy Message" },
      menu: {
        id: MenuId.ProblemsPanelContext,
        when: MarkersContextKeys.MarkerFocusContextKey,
        group: "navigation"
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, markersView) {
    const clipboardService = serviceAccessor.get(IClipboardService);
    const element = markersView.getFocusElement();
    if (element instanceof Marker) {
      await clipboardService.writeText(element.marker.message);
    }
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: Markers.RELATED_INFORMATION_COPY_MESSAGE_ACTION_ID,
      title: { value: localize("copyMessage", "Copy Message"), original: "Copy Message" },
      menu: {
        id: MenuId.ProblemsPanelContext,
        when: MarkersContextKeys.RelatedInformationFocusContextKey,
        group: "navigation"
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, markersView) {
    const clipboardService = serviceAccessor.get(IClipboardService);
    const element = markersView.getFocusElement();
    if (element instanceof RelatedInformation) {
      await clipboardService.writeText(element.raw.message);
    }
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: Markers.FOCUS_PROBLEMS_FROM_FILTER,
      title: localize("focusProblemsList", "Focus problems view"),
      keybinding: {
        when: MarkersContextKeys.MarkerViewFilterFocusContextKey,
        weight: 200,
        primary: 2048 | 18
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, markersView) {
    markersView.focus();
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: Markers.MARKERS_VIEW_FOCUS_FILTER,
      title: localize("focusProblemsFilter", "Focus problems filter"),
      keybinding: {
        when: FocusedViewContext.isEqualTo(Markers.MARKERS_VIEW_ID),
        weight: 200,
        primary: 2048 | 36
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, markersView) {
    markersView.focusFilter();
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: Markers.MARKERS_VIEW_SHOW_MULTILINE_MESSAGE,
      title: { value: localize("show multiline", "Show message in multiple lines"), original: "Problems: Show message in multiple lines" },
      category: localize("problems", "Problems"),
      menu: {
        id: MenuId.CommandPalette,
        when: ContextKeyExpr.has(getVisbileViewContextKey(Markers.MARKERS_VIEW_ID))
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, markersView) {
    markersView.setMultiline(true);
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: Markers.MARKERS_VIEW_SHOW_SINGLELINE_MESSAGE,
      title: { value: localize("show singleline", "Show message in single line"), original: "Problems: Show message in single line" },
      category: localize("problems", "Problems"),
      menu: {
        id: MenuId.CommandPalette,
        when: ContextKeyExpr.has(getVisbileViewContextKey(Markers.MARKERS_VIEW_ID))
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, markersView) {
    markersView.setMultiline(false);
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: Markers.MARKERS_VIEW_CLEAR_FILTER_TEXT,
      title: localize("clearFiltersText", "Clear filters text"),
      category: localize("problems", "Problems"),
      keybinding: {
        when: MarkersContextKeys.MarkerViewFilterFocusContextKey,
        weight: 200,
        primary: 9
      },
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, markersView) {
    markersView.clearFilterText();
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: `workbench.actions.treeView.${Markers.MARKERS_VIEW_ID}.collapseAll`,
      title: localize("collapseAll", "Collapse All"),
      menu: {
        id: MenuId.ViewTitle,
        when: ContextKeyExpr.and(ContextKeyExpr.equals("view", Markers.MARKERS_VIEW_ID), MarkersContextKeys.MarkersViewModeContextKey.isEqualTo("tree")),
        group: "navigation",
        order: 2
      },
      icon: Codicon.collapseAll,
      viewId: Markers.MARKERS_VIEW_ID
    });
  }
  async runInView(serviceAccessor, view) {
    return view.collapseAll();
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: Markers.TOGGLE_MARKERS_VIEW_ACTION_ID,
      title: Messages.MARKERS_PANEL_TOGGLE_LABEL
    });
  }
  async run(accessor) {
    const viewsService = accessor.get(IViewsService);
    if (viewsService.isViewVisible(Markers.MARKERS_VIEW_ID)) {
      viewsService.closeView(Markers.MARKERS_VIEW_ID);
    } else {
      viewsService.openView(Markers.MARKERS_VIEW_ID, true);
    }
  }
});
let MarkersStatusBarContributions = class MarkersStatusBarContributions2 extends Disposable {
  constructor(markerService, statusbarService) {
    super();
    this.markerService = markerService;
    this.statusbarService = statusbarService;
    this.markersStatusItem = this._register(this.statusbarService.addEntry(this.getMarkersItem(), "status.problems", 0, 50));
    this.markerService.onMarkerChanged(() => this.markersStatusItem.update(this.getMarkersItem()));
  }
  getMarkersItem() {
    const markersStatistics = this.markerService.getStatistics();
    const tooltip = this.getMarkersTooltip(markersStatistics);
    return {
      name: localize("status.problems", "Problems"),
      text: this.getMarkersText(markersStatistics),
      ariaLabel: tooltip,
      tooltip,
      command: "workbench.actions.view.toggleProblems"
    };
  }
  getMarkersTooltip(stats) {
    const errorTitle = (n2) => localize("totalErrors", "Errors: {0}", n2);
    const warningTitle = (n2) => localize("totalWarnings", "Warnings: {0}", n2);
    const infoTitle = (n2) => localize("totalInfos", "Infos: {0}", n2);
    const titles = [];
    if (stats.errors > 0) {
      titles.push(errorTitle(stats.errors));
    }
    if (stats.warnings > 0) {
      titles.push(warningTitle(stats.warnings));
    }
    if (stats.infos > 0) {
      titles.push(infoTitle(stats.infos));
    }
    if (titles.length === 0) {
      return localize("noProblems", "No Problems");
    }
    return titles.join(", ");
  }
  getMarkersText(stats) {
    const problemsText = [];
    problemsText.push("$(error) " + this.packNumber(stats.errors));
    problemsText.push("$(warning) " + this.packNumber(stats.warnings));
    if (stats.infos > 0) {
      problemsText.push("$(info) " + this.packNumber(stats.infos));
    }
    return problemsText.join(" ");
  }
  packNumber(n2) {
    const manyProblems = localize("manyProblems", "10K+");
    return n2 > 9999 ? manyProblems : n2 > 999 ? n2.toString().charAt(0) + "K" : n2.toString();
  }
};
MarkersStatusBarContributions = __decorate([
  __param(0, IMarkerService),
  __param(1, IStatusbarService)
], MarkersStatusBarContributions);
workbenchRegistry.registerWorkbenchContribution(MarkersStatusBarContributions, 3);
let ActivityUpdater = class ActivityUpdater2 extends Disposable {
  constructor(activityService, markerService) {
    super();
    this.activityService = activityService;
    this.markerService = markerService;
    this.activity = this._register(new MutableDisposable());
    this._register(this.markerService.onMarkerChanged(() => this.updateBadge()));
    this.updateBadge();
  }
  updateBadge() {
    const { errors, warnings, infos } = this.markerService.getStatistics();
    const total = errors + warnings + infos;
    const message = localize("totalProblems", "Total {0} Problems", total);
    this.activity.value = this.activityService.showViewActivity(Markers.MARKERS_VIEW_ID, { badge: new NumberBadge(total, () => message) });
  }
};
ActivityUpdater = __decorate([
  __param(0, IActivityService),
  __param(1, IMarkerService)
], ActivityUpdater);
workbenchRegistry.registerWorkbenchContribution(ActivityUpdater, 3);
function getServiceOverride() {
  return {};
}
export {
  getServiceOverride as default
};
