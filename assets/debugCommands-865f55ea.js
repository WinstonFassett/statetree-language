var _a, _b, _c, _d;
import { c as localize, bs as basenameOrAuthority, wT as DEBUG_SCHEME, kX as SIDE_GROUP, l2 as ACTIVE_GROUP, br as Schemas, qL as normalize, a2 as URI, w8 as isUri, pK as isAbsolute, rk as EditorInput, e9 as isString, d3 as generateUuid, gu as __decorate, gv as __param, w6 as DEBUG_MEMORY_SCHEME, js as isUndefinedOrNull, aD as Emitter, CI as lastIndex, eL as DeferredPromise, j as RunOnceScheduler, hm as distinct, h4 as ITextFileService, hz as IUriIdentityService, fM as ILogService, CJ as stringHash, k as Range, ed as CancellationTokenSource, D as Disposable, CK as decodeBase64, hf as VSBuffer, CL as encodeBase64, wb as mixin, aL as registerIcon, aM as Codicon, aG as append, bn as addStandardDisposableListener, cA as ActionBar, b5 as dirname, aK as ThemeIcon, cd as createAndFillInActionBarActions, aX as dispose, u7 as InputBox, dx as defaultInputBoxStyles, aI as addDisposableListener, bF as registerAction2, f6 as Action2, i as MenuId, C as ContextKeyExpr, xy as BREAKPOINTS_VIEW_ID, vW as CONTEXT_DEBUGGERS_AVAILABLE, vJ as IDebugService, CM as CONTEXT_BREAKPOINT_ITEM_TYPE, wC as CONTEXT_BREAKPOINTS_EXIST, wA as CONTEXT_IN_DEBUG_MODE, x3 as ViewAction, CN as CONTEXT_BREAKPOINT_SUPPORTS_CONDITION, gx as IEditorService, bG as isCodeEditor, wO as BREAKPOINT_EDITOR_CONTRIBUTION_ID, ct as IContextMenuService, cy as Action, ah as $$1, je as Gesture, oo as ViewPane, CO as CONTEXT_BREAKPOINT_INPUT_FOCUSED, ur as WorkbenchList, CP as CONTEXT_BREAKPOINTS_FOCUSED, b2 as IconLabel, bh as hide, k7 as createAndFillInContextMenuActions, wX as DebuggerString, M as MarkdownString, bq as show, cD as equals, a$ as IKeybindingService, b1 as IInstantiationService, aQ as IThemeService, dW as IContextViewService, ay as IConfigurationService, jl as IViewDescriptorService, I as IContextKeyService, c2 as IOpenerService, cu as ITelemetryService, b0 as ILabelService, c9 as IMenuService, jG as IHoverService, bb as ILanguageService, as as IQuickInputService, a4 as IModelService, a6 as DisposableStore, xc as matchesFuzzy, k0 as getIconClasses, mT as IViewsService, ak as ICommandService, wG as REPL_VIEW_ID, a0 as CommandsRegistry, vU as ITextResourcePropertiesService, v as IClipboardService, wD as CONTEXT_DISASSEMBLY_VIEW_FOCUS, al as INotificationService, h as MenuRegistry, wn as CONTEXT_JUMP_TO_CURSOR_SUPPORTED, e as EditorContextKeys, bu as KeybindingsRegistry, xQ as CONTEXT_IN_DEBUG_REPL, w as isWeb, wy as CONTEXT_DEBUG_STATE, wm as CONTEXT_STEP_INTO_TARGETS_SUPPORTED, wk as CONTEXT_FOCUSED_SESSION_IS_ATTACH, zx as InputFocusedContext, bz as IListService, ox as List, xU as CONTEXT_WATCH_EXPRESSIONS_FOCUSED, xk as CONTEXT_VARIABLES_FOCUSED, wh as CONTEXT_EXPRESSION_SELECTED, kz as PanelFocusContext, d2 as isWindows } from "./theme-defaults-1df7f429.js";
const UNKNOWN_SOURCE_LABEL = localize("unknownSource", "Unknown Source");
class Source {
  constructor(raw_, sessionId, uriIdentityService, logService) {
    let path;
    if (raw_) {
      this.raw = raw_;
      path = this.raw.path || this.raw.name || "";
      this.available = true;
    } else {
      this.raw = { name: UNKNOWN_SOURCE_LABEL };
      this.available = false;
      path = `${DEBUG_SCHEME}:${UNKNOWN_SOURCE_LABEL}`;
    }
    this.uri = getUriFromSource(this.raw, path, sessionId, uriIdentityService, logService);
  }
  get name() {
    return this.raw.name || basenameOrAuthority(this.uri);
  }
  get origin() {
    return this.raw.origin;
  }
  get presentationHint() {
    return this.raw.presentationHint;
  }
  get reference() {
    return this.raw.sourceReference;
  }
  get inMemory() {
    return this.uri.scheme === DEBUG_SCHEME;
  }
  openInEditor(editorService, selection, preserveFocus, sideBySide, pinned) {
    return !this.available ? Promise.resolve(void 0) : editorService.openEditor({
      resource: this.uri,
      description: this.origin,
      options: {
        preserveFocus,
        selection,
        revealIfOpened: true,
        selectionRevealType: 1,
        pinned
      }
    }, sideBySide ? SIDE_GROUP : ACTIVE_GROUP);
  }
  static getEncodedDebugData(modelUri) {
    let path;
    let sourceReference;
    let sessionId;
    switch (modelUri.scheme) {
      case Schemas.file:
        path = normalize(modelUri.fsPath);
        break;
      case DEBUG_SCHEME:
        path = modelUri.path;
        if (modelUri.query) {
          const keyvalues = modelUri.query.split("&");
          for (const keyvalue of keyvalues) {
            const pair = keyvalue.split("=");
            if (pair.length === 2) {
              switch (pair[0]) {
                case "session":
                  sessionId = pair[1];
                  break;
                case "ref":
                  sourceReference = parseInt(pair[1]);
                  break;
              }
            }
          }
        }
        break;
      default:
        path = modelUri.toString();
        break;
    }
    return {
      name: basenameOrAuthority(modelUri),
      path,
      sourceReference,
      sessionId
    };
  }
}
function getUriFromSource(raw, path, sessionId, uriIdentityService, logService) {
  const _getUriFromSource = (path2) => {
    if (typeof raw.sourceReference === "number" && raw.sourceReference > 0) {
      return URI.from({
        scheme: DEBUG_SCHEME,
        path: path2,
        query: `session=${sessionId}&ref=${raw.sourceReference}`
      });
    }
    if (path2 && isUri(path2)) {
      return uriIdentityService.asCanonicalUri(URI.parse(path2));
    }
    if (path2 && isAbsolute(path2)) {
      return uriIdentityService.asCanonicalUri(URI.file(path2));
    }
    return uriIdentityService.asCanonicalUri(URI.from({
      scheme: DEBUG_SCHEME,
      path: path2,
      query: `session=${sessionId}`
    }));
  };
  try {
    return _getUriFromSource(path);
  } catch (err) {
    logService.error("Invalid path from debug adapter: " + path);
    return _getUriFromSource("/invalidDebugSource");
  }
}
const _DisassemblyViewInput = class _DisassemblyViewInput extends EditorInput {
  constructor() {
    super(...arguments);
    this.resource = void 0;
  }
  get typeId() {
    return _DisassemblyViewInput.ID;
  }
  static get instance() {
    if (!_DisassemblyViewInput._instance || _DisassemblyViewInput._instance.isDisposed()) {
      _DisassemblyViewInput._instance = new _DisassemblyViewInput();
    }
    return _DisassemblyViewInput._instance;
  }
  getName() {
    return localize("disassemblyInputName", "Disassembly");
  }
  matches(other) {
    return other instanceof _DisassemblyViewInput;
  }
};
_DisassemblyViewInput.ID = "debug.disassemblyView.input";
let DisassemblyViewInput = _DisassemblyViewInput;
const _ExpressionContainer = class _ExpressionContainer {
  constructor(session, threadId, _reference, id, namedVariables = 0, indexedVariables = 0, memoryReference = void 0, startOfVariables = 0, presentationHint = void 0) {
    this.session = session;
    this.threadId = threadId;
    this._reference = _reference;
    this.id = id;
    this.namedVariables = namedVariables;
    this.indexedVariables = indexedVariables;
    this.memoryReference = memoryReference;
    this.startOfVariables = startOfVariables;
    this.presentationHint = presentationHint;
    this.valueChanged = false;
    this._value = "";
  }
  get reference() {
    return this._reference;
  }
  set reference(value) {
    this._reference = value;
    this.children = void 0;
  }
  async evaluateLazy() {
    if (typeof this.reference === "undefined") {
      return;
    }
    const response = await this.session.variables(this.reference, this.threadId, void 0, void 0, void 0);
    if (!response || !response.body || !response.body.variables || response.body.variables.length !== 1) {
      return;
    }
    const dummyVar = response.body.variables[0];
    this.reference = dummyVar.variablesReference;
    this._value = dummyVar.value;
    this.namedVariables = dummyVar.namedVariables;
    this.indexedVariables = dummyVar.indexedVariables;
    this.memoryReference = dummyVar.memoryReference;
    this.presentationHint = dummyVar.presentationHint;
    this.adoptLazyResponse(dummyVar);
  }
  adoptLazyResponse(response) {
  }
  getChildren() {
    if (!this.children) {
      this.children = this.doGetChildren();
    }
    return this.children;
  }
  async doGetChildren() {
    if (!this.hasChildren) {
      return [];
    }
    if (!this.getChildrenInChunks) {
      return this.fetchVariables(void 0, void 0, void 0);
    }
    const children = this.namedVariables ? await this.fetchVariables(void 0, void 0, "named") : [];
    let chunkSize = _ExpressionContainer.BASE_CHUNK_SIZE;
    while (!!this.indexedVariables && this.indexedVariables > chunkSize * _ExpressionContainer.BASE_CHUNK_SIZE) {
      chunkSize *= _ExpressionContainer.BASE_CHUNK_SIZE;
    }
    if (!!this.indexedVariables && this.indexedVariables > chunkSize) {
      const numberOfChunks = Math.ceil(this.indexedVariables / chunkSize);
      for (let i = 0; i < numberOfChunks; i++) {
        const start = (this.startOfVariables || 0) + i * chunkSize;
        const count = Math.min(chunkSize, this.indexedVariables - i * chunkSize);
        children.push(new Variable(
          this.session,
          this.threadId,
          this,
          this.reference,
          `[${start}..${start + count - 1}]`,
          "",
          "",
          void 0,
          count,
          void 0,
          { kind: "virtual" },
          void 0,
          void 0,
          true,
          start
        ));
      }
      return children;
    }
    const variables = await this.fetchVariables(this.startOfVariables, this.indexedVariables, "indexed");
    return children.concat(variables);
  }
  getId() {
    return this.id;
  }
  getSession() {
    return this.session;
  }
  get value() {
    return this._value;
  }
  get hasChildren() {
    var _a2;
    return !!this.reference && this.reference > 0 && !((_a2 = this.presentationHint) == null ? void 0 : _a2.lazy);
  }
  async fetchVariables(start, count, filter) {
    try {
      const response = await this.session.variables(this.reference || 0, this.threadId, filter, start, count);
      if (!response || !response.body || !response.body.variables) {
        return [];
      }
      const nameCount = /* @__PURE__ */ new Map();
      const vars = response.body.variables.filter((v) => !!v).map((v) => {
        if (isString(v.value) && isString(v.name) && typeof v.variablesReference === "number") {
          const count2 = nameCount.get(v.name) || 0;
          const idDuplicationIndex = count2 > 0 ? count2.toString() : "";
          nameCount.set(v.name, count2 + 1);
          return new Variable(
            this.session,
            this.threadId,
            this,
            v.variablesReference,
            v.name,
            v.evaluateName,
            v.value,
            v.namedVariables,
            v.indexedVariables,
            v.memoryReference,
            v.presentationHint,
            v.type,
            v.__vscodeVariableMenuContext,
            true,
            0,
            idDuplicationIndex
          );
        }
        return new Variable(
          this.session,
          this.threadId,
          this,
          0,
          "",
          void 0,
          localize("invalidVariableAttributes", "Invalid variable attributes"),
          0,
          0,
          void 0,
          { kind: "virtual" },
          void 0,
          void 0,
          false
        );
      });
      if (this.session.autoExpandLazyVariables) {
        await Promise.all(vars.map((v) => {
          var _a2;
          return ((_a2 = v.presentationHint) == null ? void 0 : _a2.lazy) && v.evaluateLazy();
        }));
      }
      return vars;
    } catch (e) {
      return [new Variable(
        this.session,
        this.threadId,
        this,
        0,
        "",
        void 0,
        e.message,
        0,
        0,
        void 0,
        { kind: "virtual" },
        void 0,
        void 0,
        false
      )];
    }
  }
  get getChildrenInChunks() {
    return !!this.indexedVariables;
  }
  set value(value) {
    this._value = value;
    this.valueChanged = !!_ExpressionContainer.allValues.get(this.getId()) && _ExpressionContainer.allValues.get(this.getId()) !== Expression.DEFAULT_VALUE && _ExpressionContainer.allValues.get(this.getId()) !== value;
    _ExpressionContainer.allValues.set(this.getId(), value);
  }
  toString() {
    return this.value;
  }
  async evaluateExpression(expression, session, stackFrame, context, keepLazyVars = false) {
    var _a2;
    if (!session || !stackFrame && context !== "repl") {
      this.value = context === "repl" ? localize("startDebugFirst", "Please start a debug session to evaluate expressions") : Expression.DEFAULT_VALUE;
      this.reference = 0;
      return false;
    }
    this.session = session;
    try {
      const response = await session.evaluate(expression, stackFrame ? stackFrame.frameId : void 0, context);
      if (response && response.body) {
        this.value = response.body.result || "";
        this.reference = response.body.variablesReference;
        this.namedVariables = response.body.namedVariables;
        this.indexedVariables = response.body.indexedVariables;
        this.memoryReference = response.body.memoryReference;
        this.type = response.body.type || this.type;
        this.presentationHint = response.body.presentationHint;
        if (!keepLazyVars && ((_a2 = response.body.presentationHint) == null ? void 0 : _a2.lazy)) {
          await this.evaluateLazy();
        }
        return true;
      }
      return false;
    } catch (e) {
      this.value = e.message || "";
      this.reference = 0;
      return false;
    }
  }
};
_ExpressionContainer.allValues = /* @__PURE__ */ new Map();
_ExpressionContainer.BASE_CHUNK_SIZE = 100;
let ExpressionContainer = _ExpressionContainer;
function handleSetResponse(expression, response) {
  if (response && response.body) {
    expression.value = response.body.value || "";
    expression.type = response.body.type || expression.type;
    expression.reference = response.body.variablesReference;
    expression.namedVariables = response.body.namedVariables;
    expression.indexedVariables = response.body.indexedVariables;
  }
}
const _Expression = class _Expression extends ExpressionContainer {
  constructor(name, id = generateUuid()) {
    super(void 0, void 0, 0, id);
    this.name = name;
    this.available = false;
    if (name) {
      this.value = _Expression.DEFAULT_VALUE;
    }
  }
  async evaluate(session, stackFrame, context, keepLazyVars) {
    this.available = await this.evaluateExpression(this.name, session, stackFrame, context, keepLazyVars);
  }
  toString() {
    return `${this.name}
${this.value}`;
  }
  async setExpression(value, stackFrame) {
    if (!this.session) {
      return;
    }
    const response = await this.session.setExpression(stackFrame.frameId, this.name, value);
    handleSetResponse(this, response);
  }
};
_Expression.DEFAULT_VALUE = localize("notAvailable", "not available");
let Expression = _Expression;
class Variable extends ExpressionContainer {
  constructor(session, threadId, parent, reference, name, evaluateName, value, namedVariables, indexedVariables, memoryReference, presentationHint, type = void 0, variableMenuContext = void 0, available = true, startOfVariables = 0, idDuplicationIndex = "") {
    super(session, threadId, reference, `variable:${parent.getId()}:${name}:${idDuplicationIndex}`, namedVariables, indexedVariables, memoryReference, startOfVariables, presentationHint);
    this.parent = parent;
    this.name = name;
    this.evaluateName = evaluateName;
    this.variableMenuContext = variableMenuContext;
    this.available = available;
    this.value = value || "";
    this.type = type;
  }
  async setVariable(value, stackFrame) {
    if (!this.session) {
      return;
    }
    try {
      if (this.session.capabilities.supportsSetExpression && !this.session.capabilities.supportsSetVariable && this.evaluateName) {
        return this.setExpression(value, stackFrame);
      }
      const response = await this.session.setVariable(this.parent.reference, this.name, value);
      handleSetResponse(this, response);
    } catch (err) {
      this.errorMessage = err.message;
    }
  }
  async setExpression(value, stackFrame) {
    if (!this.session || !this.evaluateName) {
      return;
    }
    const response = await this.session.setExpression(stackFrame.frameId, this.evaluateName, value);
    handleSetResponse(this, response);
  }
  toString() {
    return this.name ? `${this.name}: ${this.value}` : this.value;
  }
  adoptLazyResponse(response) {
    this.evaluateName = response.evaluateName;
  }
  toDebugProtocolObject() {
    return {
      name: this.name,
      variablesReference: this.reference || 0,
      memoryReference: this.memoryReference,
      value: this.value,
      evaluateName: this.evaluateName
    };
  }
}
class Scope extends ExpressionContainer {
  constructor(stackFrame, id, name, reference, expensive, namedVariables, indexedVariables, range) {
    super(stackFrame.thread.session, stackFrame.thread.threadId, reference, `scope:${name}:${id}`, namedVariables, indexedVariables);
    this.name = name;
    this.expensive = expensive;
    this.range = range;
  }
  toString() {
    return this.name;
  }
  toDebugProtocolObject() {
    return {
      name: this.name,
      variablesReference: this.reference || 0,
      expensive: this.expensive
    };
  }
}
class ErrorScope extends Scope {
  constructor(stackFrame, index, message) {
    super(stackFrame, index, message, 0, false);
  }
  toString() {
    return this.name;
  }
}
class StackFrame {
  constructor(thread, frameId, source, name, presentationHint, range, index, canRestart, instructionPointerReference) {
    this.thread = thread;
    this.frameId = frameId;
    this.source = source;
    this.name = name;
    this.presentationHint = presentationHint;
    this.range = range;
    this.index = index;
    this.canRestart = canRestart;
    this.instructionPointerReference = instructionPointerReference;
  }
  getId() {
    return `stackframe:${this.thread.getId()}:${this.index}:${this.source.name}`;
  }
  getScopes() {
    if (!this.scopes) {
      this.scopes = this.thread.session.scopes(this.frameId, this.thread.threadId).then((response) => {
        if (!response || !response.body || !response.body.scopes) {
          return [];
        }
        const usedIds = /* @__PURE__ */ new Set();
        return response.body.scopes.map((rs) => {
          let id = 0;
          do {
            id = stringHash(`${rs.name}:${rs.line}:${rs.column}`, id);
          } while (usedIds.has(id));
          usedIds.add(id);
          return new Scope(
            this,
            id,
            rs.name,
            rs.variablesReference,
            rs.expensive,
            rs.namedVariables,
            rs.indexedVariables,
            rs.line && rs.column && rs.endLine && rs.endColumn ? new Range(rs.line, rs.column, rs.endLine, rs.endColumn) : void 0
          );
        });
      }, (err) => [new ErrorScope(this, 0, err.message)]);
    }
    return this.scopes;
  }
  async getMostSpecificScopes(range) {
    const scopes = await this.getScopes();
    const nonExpensiveScopes = scopes.filter((s) => !s.expensive);
    const haveRangeInfo = nonExpensiveScopes.some((s) => !!s.range);
    if (!haveRangeInfo) {
      return nonExpensiveScopes;
    }
    const scopesContainingRange = nonExpensiveScopes.filter((scope) => scope.range && Range.containsRange(scope.range, range)).sort((first, second) => first.range.endLineNumber - first.range.startLineNumber - (second.range.endLineNumber - second.range.startLineNumber));
    return scopesContainingRange.length ? scopesContainingRange : nonExpensiveScopes;
  }
  restart() {
    return this.thread.session.restartFrame(this.frameId, this.thread.threadId);
  }
  forgetScopes() {
    this.scopes = void 0;
  }
  toString() {
    const lineNumberToString = typeof this.range.startLineNumber === "number" ? `:${this.range.startLineNumber}` : "";
    const sourceToString = `${this.source.inMemory ? this.source.name : this.source.uri.fsPath}${lineNumberToString}`;
    return sourceToString === UNKNOWN_SOURCE_LABEL ? this.name : `${this.name} (${sourceToString})`;
  }
  async openInEditor(editorService, preserveFocus, sideBySide, pinned) {
    var _a2;
    const threadStopReason = (_a2 = this.thread.stoppedDetails) == null ? void 0 : _a2.reason;
    if (this.instructionPointerReference && (threadStopReason === "instruction breakpoint" || threadStopReason === "step" && this.thread.lastSteppingGranularity === "instruction")) {
      return editorService.openEditor(DisassemblyViewInput.instance, { pinned: true });
    }
    if (this.source.available) {
      return this.source.openInEditor(editorService, this.range, preserveFocus, sideBySide, pinned);
    }
    return void 0;
  }
  equals(other) {
    return this.name === other.name && other.thread === this.thread && this.frameId === other.frameId && other.source === this.source && Range.equalsRange(this.range, other.range);
  }
}
class Thread {
  constructor(session, name, threadId) {
    this.session = session;
    this.name = name;
    this.threadId = threadId;
    this.callStackCancellationTokens = [];
    this.reachedEndOfCallStack = false;
    this.callStack = [];
    this.staleCallStack = [];
    this.stopped = false;
  }
  getId() {
    return `thread:${this.session.getId()}:${this.threadId}`;
  }
  clearCallStack() {
    if (this.callStack.length) {
      this.staleCallStack = this.callStack;
    }
    this.callStack = [];
    this.callStackCancellationTokens.forEach((c) => c.dispose(true));
    this.callStackCancellationTokens = [];
  }
  getCallStack() {
    return this.callStack;
  }
  getStaleCallStack() {
    return this.staleCallStack;
  }
  getTopStackFrame() {
    const callStack = this.getCallStack();
    const firstAvailableStackFrame = callStack.find((sf) => {
      var _a2, _b2;
      return !!(sf && ((((_a2 = this.stoppedDetails) == null ? void 0 : _a2.reason) === "instruction breakpoint" || ((_b2 = this.stoppedDetails) == null ? void 0 : _b2.reason) === "step" && this.lastSteppingGranularity === "instruction") && sf.instructionPointerReference) || sf.source && sf.source.available && sf.source.presentationHint !== "deemphasize");
    });
    return firstAvailableStackFrame;
  }
  get stateLabel() {
    if (this.stoppedDetails) {
      return this.stoppedDetails.description || (this.stoppedDetails.reason ? localize(
        { key: "pausedOn", comment: ["indicates reason for program being paused"] },
        "Paused on {0}",
        this.stoppedDetails.reason
      ) : localize("paused", "Paused"));
    }
    return localize({ key: "running", comment: ["indicates state"] }, "Running");
  }
  async fetchCallStack(levels = 20) {
    var _a2;
    if (this.stopped) {
      const start = this.callStack.length;
      const callStack = await this.getCallStackImpl(start, levels);
      this.reachedEndOfCallStack = callStack.length < levels;
      if (start < this.callStack.length) {
        this.callStack.splice(start, this.callStack.length - start);
      }
      this.callStack = this.callStack.concat(callStack || []);
      if (typeof ((_a2 = this.stoppedDetails) == null ? void 0 : _a2.totalFrames) === "number" && this.stoppedDetails.totalFrames === this.callStack.length) {
        this.reachedEndOfCallStack = true;
      }
    }
  }
  async getCallStackImpl(startFrame, levels) {
    try {
      const tokenSource = new CancellationTokenSource();
      this.callStackCancellationTokens.push(tokenSource);
      const response = await this.session.stackTrace(this.threadId, startFrame, levels, tokenSource.token);
      if (!response || !response.body || tokenSource.token.isCancellationRequested) {
        return [];
      }
      if (this.stoppedDetails) {
        this.stoppedDetails.totalFrames = response.body.totalFrames;
      }
      return response.body.stackFrames.map((rsf, index) => {
        const source = this.session.getSource(rsf.source);
        return new StackFrame(
          this,
          rsf.id,
          source,
          rsf.name,
          rsf.presentationHint,
          new Range(rsf.line, rsf.column, rsf.endLine || rsf.line, rsf.endColumn || rsf.column),
          startFrame + index,
          typeof rsf.canRestart === "boolean" ? rsf.canRestart : true,
          rsf.instructionPointerReference
        );
      });
    } catch (err) {
      if (this.stoppedDetails) {
        this.stoppedDetails.framesErrorMessage = err.message;
      }
      return [];
    }
  }
  get exceptionInfo() {
    if (this.stoppedDetails && this.stoppedDetails.reason === "exception") {
      if (this.session.capabilities.supportsExceptionInfoRequest) {
        return this.session.exceptionInfo(this.threadId);
      }
      return Promise.resolve({
        description: this.stoppedDetails.text,
        breakMode: null
      });
    }
    return Promise.resolve(void 0);
  }
  next(granularity) {
    return this.session.next(this.threadId, granularity);
  }
  stepIn(granularity) {
    return this.session.stepIn(this.threadId, void 0, granularity);
  }
  stepOut(granularity) {
    return this.session.stepOut(this.threadId, granularity);
  }
  stepBack(granularity) {
    return this.session.stepBack(this.threadId, granularity);
  }
  continue() {
    return this.session.continue(this.threadId);
  }
  pause() {
    return this.session.pause(this.threadId);
  }
  terminate() {
    return this.session.terminateThreads([this.threadId]);
  }
  reverseContinue() {
    return this.session.reverseContinue(this.threadId);
  }
}
const getUriForDebugMemory = (sessionId, memoryReference, range, displayName = "memory") => {
  return URI.from({
    scheme: DEBUG_MEMORY_SCHEME,
    authority: sessionId,
    path: "/" + encodeURIComponent(memoryReference) + `/${encodeURIComponent(displayName)}.bin`,
    query: range ? `?range=${range.fromOffset}:${range.toOffset}` : void 0
  });
};
class MemoryRegion extends Disposable {
  constructor(memoryReference, session) {
    super();
    this.memoryReference = memoryReference;
    this.session = session;
    this.invalidateEmitter = this._register(new Emitter());
    this.onDidInvalidate = this.invalidateEmitter.event;
    this.writable = !!this.session.capabilities.supportsWriteMemoryRequest;
    this._register(session.onDidInvalidateMemory((e) => {
      if (e.body.memoryReference === memoryReference) {
        this.invalidate(e.body.offset, e.body.count - e.body.offset);
      }
    }));
  }
  async read(fromOffset, toOffset) {
    var _a2;
    const length = toOffset - fromOffset;
    const offset = fromOffset;
    const result = await this.session.readMemory(this.memoryReference, offset, length);
    if (result === void 0 || !((_a2 = result.body) == null ? void 0 : _a2.data)) {
      return [{ type: 1, offset, length }];
    }
    let data;
    try {
      data = decodeBase64(result.body.data);
    } catch {
      return [{ type: 2, offset, length, error: "Invalid base64 data from debug adapter" }];
    }
    const unreadable = result.body.unreadableBytes || 0;
    const dataLength = length - unreadable;
    if (data.byteLength < dataLength) {
      const pad = VSBuffer.alloc(dataLength - data.byteLength);
      pad.buffer.fill(0);
      data = VSBuffer.concat([data, pad], dataLength);
    } else if (data.byteLength > dataLength) {
      data = data.slice(0, dataLength);
    }
    if (!unreadable) {
      return [{ type: 0, offset, length, data }];
    }
    return [
      { type: 0, offset, length: dataLength, data },
      { type: 1, offset: offset + dataLength, length: unreadable }
    ];
  }
  async write(offset, data) {
    var _a2;
    const result = await this.session.writeMemory(this.memoryReference, offset, encodeBase64(data), true);
    const written = ((_a2 = result == null ? void 0 : result.body) == null ? void 0 : _a2.bytesWritten) ?? data.byteLength;
    this.invalidate(offset, offset + written);
    return written;
  }
  dispose() {
    super.dispose();
  }
  invalidate(fromOffset, toOffset) {
    this.invalidateEmitter.fire({ fromOffset, toOffset });
  }
}
class Enablement {
  constructor(enabled, id) {
    this.enabled = enabled;
    this.id = id;
  }
  getId() {
    return this.id;
  }
}
function toBreakpointSessionData(data, capabilities) {
  return mixin({
    supportsConditionalBreakpoints: !!capabilities.supportsConditionalBreakpoints,
    supportsHitConditionalBreakpoints: !!capabilities.supportsHitConditionalBreakpoints,
    supportsLogPoints: !!capabilities.supportsLogPoints,
    supportsFunctionBreakpoints: !!capabilities.supportsFunctionBreakpoints,
    supportsDataBreakpoints: !!capabilities.supportsDataBreakpoints,
    supportsInstructionBreakpoints: !!capabilities.supportsInstructionBreakpoints
  }, data);
}
class BaseBreakpoint extends Enablement {
  constructor(enabled, hitCondition, condition, logMessage, id) {
    super(enabled, id);
    this.hitCondition = hitCondition;
    this.condition = condition;
    this.logMessage = logMessage;
    this.sessionData = /* @__PURE__ */ new Map();
    if (enabled === void 0) {
      this.enabled = true;
    }
  }
  setSessionData(sessionId, data) {
    if (!data) {
      this.sessionData.delete(sessionId);
    } else {
      data.sessionId = sessionId;
      this.sessionData.set(sessionId, data);
    }
    const allData = Array.from(this.sessionData.values());
    const verifiedData = distinct(allData.filter((d) => d.verified), (d) => `${d.line}:${d.column}`);
    if (verifiedData.length) {
      this.data = verifiedData.length === 1 ? verifiedData[0] : void 0;
    } else {
      this.data = allData.length ? allData[0] : void 0;
    }
  }
  get message() {
    if (!this.data) {
      return void 0;
    }
    return this.data.message;
  }
  get verified() {
    return this.data ? this.data.verified : true;
  }
  get sessionsThatVerified() {
    const sessionIds = [];
    for (const [sessionId, data] of this.sessionData) {
      if (data.verified) {
        sessionIds.push(sessionId);
      }
    }
    return sessionIds;
  }
  getIdFromAdapter(sessionId) {
    const data = this.sessionData.get(sessionId);
    return data ? data.id : void 0;
  }
  getDebugProtocolBreakpoint(sessionId) {
    const data = this.sessionData.get(sessionId);
    if (data) {
      const bp = {
        id: data.id,
        verified: data.verified,
        message: data.message,
        source: data.source,
        line: data.line,
        column: data.column,
        endLine: data.endLine,
        endColumn: data.endColumn,
        instructionReference: data.instructionReference,
        offset: data.offset
      };
      return bp;
    }
    return void 0;
  }
  toJSON() {
    const result = /* @__PURE__ */ Object.create(null);
    result.id = this.getId();
    result.enabled = this.enabled;
    result.condition = this.condition;
    result.hitCondition = this.hitCondition;
    result.logMessage = this.logMessage;
    return result;
  }
}
class Breakpoint extends BaseBreakpoint {
  constructor(_uri, _lineNumber, _column, enabled, condition, hitCondition, logMessage, _adapterData, textFileService, uriIdentityService, logService, id = generateUuid()) {
    super(enabled, hitCondition, condition, logMessage, id);
    this._uri = _uri;
    this._lineNumber = _lineNumber;
    this._column = _column;
    this._adapterData = _adapterData;
    this.textFileService = textFileService;
    this.uriIdentityService = uriIdentityService;
    this.logService = logService;
  }
  get originalUri() {
    return this._uri;
  }
  get lineNumber() {
    return this.verified && this.data && typeof this.data.line === "number" ? this.data.line : this._lineNumber;
  }
  get verified() {
    if (this.data) {
      return this.data.verified && !this.textFileService.isDirty(this._uri);
    }
    return true;
  }
  get uri() {
    return this.verified && this.data && this.data.source ? getUriFromSource(this.data.source, this.data.source.path, this.data.sessionId, this.uriIdentityService, this.logService) : this._uri;
  }
  get column() {
    return this.verified && this.data && typeof this.data.column === "number" ? this.data.column : this._column;
  }
  get message() {
    if (this.textFileService.isDirty(this.uri)) {
      return localize(
        "breakpointDirtydHover",
        "Unverified breakpoint. File is modified, please restart debug session."
      );
    }
    return super.message;
  }
  get adapterData() {
    return this.data && this.data.source && this.data.source.adapterData ? this.data.source.adapterData : this._adapterData;
  }
  get endLineNumber() {
    return this.verified && this.data ? this.data.endLine : void 0;
  }
  get endColumn() {
    return this.verified && this.data ? this.data.endColumn : void 0;
  }
  get sessionAgnosticData() {
    return {
      lineNumber: this._lineNumber,
      column: this._column
    };
  }
  get supported() {
    if (!this.data) {
      return true;
    }
    if (this.logMessage && !this.data.supportsLogPoints) {
      return false;
    }
    if (this.condition && !this.data.supportsConditionalBreakpoints) {
      return false;
    }
    if (this.hitCondition && !this.data.supportsHitConditionalBreakpoints) {
      return false;
    }
    return true;
  }
  setSessionData(sessionId, data) {
    super.setSessionData(sessionId, data);
    if (!this._adapterData) {
      this._adapterData = this.adapterData;
    }
  }
  toJSON() {
    const result = super.toJSON();
    result.uri = this._uri;
    result.lineNumber = this._lineNumber;
    result.column = this._column;
    result.adapterData = this.adapterData;
    return result;
  }
  toString() {
    return `${basenameOrAuthority(this.uri)} ${this.lineNumber}`;
  }
  update(data) {
    if (!isUndefinedOrNull(data.lineNumber)) {
      this._lineNumber = data.lineNumber;
    }
    if (!isUndefinedOrNull(data.column)) {
      this._column = data.column;
    }
    if (!isUndefinedOrNull(data.condition)) {
      this.condition = data.condition;
    }
    if (!isUndefinedOrNull(data.hitCondition)) {
      this.hitCondition = data.hitCondition;
    }
    if (!isUndefinedOrNull(data.logMessage)) {
      this.logMessage = data.logMessage;
    }
  }
}
class FunctionBreakpoint extends BaseBreakpoint {
  constructor(name, enabled, hitCondition, condition, logMessage, id = generateUuid()) {
    super(enabled, hitCondition, condition, logMessage, id);
    this.name = name;
  }
  toJSON() {
    const result = super.toJSON();
    result.name = this.name;
    return result;
  }
  get supported() {
    if (!this.data) {
      return true;
    }
    return this.data.supportsFunctionBreakpoints;
  }
  toString() {
    return this.name;
  }
}
class DataBreakpoint extends BaseBreakpoint {
  constructor(description, dataId, canPersist, enabled, hitCondition, condition, logMessage, accessTypes, accessType, id = generateUuid()) {
    super(enabled, hitCondition, condition, logMessage, id);
    this.description = description;
    this.dataId = dataId;
    this.canPersist = canPersist;
    this.accessTypes = accessTypes;
    this.accessType = accessType;
  }
  toJSON() {
    const result = super.toJSON();
    result.description = this.description;
    result.dataId = this.dataId;
    result.accessTypes = this.accessTypes;
    result.accessType = this.accessType;
    return result;
  }
  get supported() {
    if (!this.data) {
      return true;
    }
    return this.data.supportsDataBreakpoints;
  }
  toString() {
    return this.description;
  }
}
class ExceptionBreakpoint extends BaseBreakpoint {
  constructor(filter, label, enabled, supportsCondition, condition, description, conditionDescription, fallback = false) {
    super(enabled, void 0, condition, void 0, generateUuid());
    this.filter = filter;
    this.label = label;
    this.supportsCondition = supportsCondition;
    this.description = description;
    this.conditionDescription = conditionDescription;
    this.fallback = fallback;
    this.supportedSessions = /* @__PURE__ */ new Set();
  }
  toJSON() {
    const result = /* @__PURE__ */ Object.create(null);
    result.filter = this.filter;
    result.label = this.label;
    result.enabled = this.enabled;
    result.supportsCondition = this.supportsCondition;
    result.conditionDescription = this.conditionDescription;
    result.condition = this.condition;
    result.fallback = this.fallback;
    result.description = this.description;
    return result;
  }
  setSupportedSession(sessionId, supported) {
    if (supported) {
      this.supportedSessions.add(sessionId);
    } else {
      this.supportedSessions.delete(sessionId);
    }
  }
  setFallback(isFallback) {
    this.fallback = isFallback;
  }
  get supported() {
    return true;
  }
  isSupportedSession(sessionId) {
    return sessionId ? this.supportedSessions.has(sessionId) : this.fallback;
  }
  matches(filter) {
    return this.filter === filter.filter && this.label === filter.label && this.supportsCondition === !!filter.supportsCondition && this.conditionDescription === filter.conditionDescription && this.description === filter.description;
  }
  toString() {
    return this.label;
  }
}
class InstructionBreakpoint extends BaseBreakpoint {
  constructor(instructionReference, offset, canPersist, enabled, hitCondition, condition, logMessage, id = generateUuid()) {
    super(enabled, hitCondition, condition, logMessage, id);
    this.instructionReference = instructionReference;
    this.offset = offset;
    this.canPersist = canPersist;
  }
  toJSON() {
    const result = super.toJSON();
    result.instructionReference = this.instructionReference;
    result.offset = this.offset;
    return result;
  }
  get supported() {
    if (!this.data) {
      return true;
    }
    return this.data.supportsInstructionBreakpoints;
  }
  toString() {
    return this.instructionReference;
  }
}
class ThreadAndSessionIds {
  constructor(sessionId, threadId) {
    this.sessionId = sessionId;
    this.threadId = threadId;
  }
  getId() {
    return `${this.sessionId}:${this.threadId}`;
  }
}
let DebugModel = class DebugModel2 {
  constructor(debugStorage, textFileService, uriIdentityService, logService) {
    this.textFileService = textFileService;
    this.uriIdentityService = uriIdentityService;
    this.logService = logService;
    this.schedulers = /* @__PURE__ */ new Map();
    this.breakpointsActivated = true;
    this._onDidChangeBreakpoints = new Emitter();
    this._onDidChangeCallStack = new Emitter();
    this._onDidChangeWatchExpressions = new Emitter();
    this.breakpoints = debugStorage.loadBreakpoints();
    this.functionBreakpoints = debugStorage.loadFunctionBreakpoints();
    this.exceptionBreakpoints = debugStorage.loadExceptionBreakpoints();
    this.dataBreakpoints = debugStorage.loadDataBreakpoints();
    this.watchExpressions = debugStorage.loadWatchExpressions();
    this.instructionBreakpoints = [];
    this.sessions = [];
  }
  getId() {
    return "root";
  }
  getSession(sessionId, includeInactive = false) {
    if (sessionId) {
      return this.getSessions(includeInactive).find((s) => s.getId() === sessionId);
    }
    return void 0;
  }
  getSessions(includeInactive = false) {
    return this.sessions.filter((s) => includeInactive || s.state !== 0);
  }
  addSession(session) {
    this.sessions = this.sessions.filter((s) => {
      if (s.getId() === session.getId()) {
        return false;
      }
      if (s.state === 0 && s.configuration.name === session.configuration.name) {
        return false;
      }
      return true;
    });
    let i = 1;
    while (this.sessions.some((s) => s.getLabel() === session.getLabel())) {
      session.setName(`${session.configuration.name} ${++i}`);
    }
    let index = -1;
    if (session.parentSession) {
      index = lastIndex(this.sessions, (s) => s.parentSession === session.parentSession || s === session.parentSession);
    }
    if (index >= 0) {
      this.sessions.splice(index + 1, 0, session);
    } else {
      this.sessions.push(session);
    }
    this._onDidChangeCallStack.fire(void 0);
  }
  get onDidChangeBreakpoints() {
    return this._onDidChangeBreakpoints.event;
  }
  get onDidChangeCallStack() {
    return this._onDidChangeCallStack.event;
  }
  get onDidChangeWatchExpressions() {
    return this._onDidChangeWatchExpressions.event;
  }
  rawUpdate(data) {
    const session = this.sessions.find((p) => p.getId() === data.sessionId);
    if (session) {
      session.rawUpdate(data);
      this._onDidChangeCallStack.fire(void 0);
    }
  }
  clearThreads(id, removeThreads, reference = void 0) {
    const session = this.sessions.find((p) => p.getId() === id);
    this.schedulers.forEach((entry) => {
      entry.scheduler.dispose();
      entry.completeDeferred.complete();
    });
    this.schedulers.clear();
    if (session) {
      session.clearThreads(removeThreads, reference);
      this._onDidChangeCallStack.fire(void 0);
    }
  }
  async fetchCallstack(thread, levels) {
    var _a2;
    if (thread.reachedEndOfCallStack) {
      return;
    }
    const totalFrames = (_a2 = thread.stoppedDetails) == null ? void 0 : _a2.totalFrames;
    const remainingFrames = typeof totalFrames === "number" ? totalFrames - thread.getCallStack().length : void 0;
    if (!levels || remainingFrames && levels > remainingFrames) {
      levels = remainingFrames;
    }
    if (levels && levels > 0) {
      await thread.fetchCallStack(levels);
      this._onDidChangeCallStack.fire();
    }
    return;
  }
  refreshTopOfCallstack(thread) {
    if (thread.session.capabilities.supportsDelayedStackTraceLoading) {
      let topCallStack = Promise.resolve();
      const wholeCallStack2 = new Promise((c, e) => {
        topCallStack = thread.fetchCallStack(1).then(() => {
          if (!this.schedulers.has(thread.getId())) {
            const deferred = new DeferredPromise();
            this.schedulers.set(thread.getId(), {
              completeDeferred: deferred,
              scheduler: new RunOnceScheduler(() => {
                thread.fetchCallStack(19).then(() => {
                  const stale = thread.getStaleCallStack();
                  const current = thread.getCallStack();
                  let bottomOfCallStackChanged = stale.length !== current.length;
                  for (let i = 1; i < stale.length && !bottomOfCallStackChanged; i++) {
                    bottomOfCallStackChanged = !stale[i].equals(current[i]);
                  }
                  if (bottomOfCallStackChanged) {
                    this._onDidChangeCallStack.fire();
                  }
                }).finally(() => {
                  deferred.complete();
                  this.schedulers.delete(thread.getId());
                });
              }, 420)
            });
          }
          const entry = this.schedulers.get(thread.getId());
          entry.scheduler.schedule();
          entry.completeDeferred.p.then(c, e);
          this._onDidChangeCallStack.fire();
        });
      });
      return { topCallStack, wholeCallStack: wholeCallStack2 };
    }
    const wholeCallStack = thread.fetchCallStack();
    return { wholeCallStack, topCallStack: wholeCallStack };
  }
  getBreakpoints(filter) {
    var _a2, _b2;
    if (filter) {
      const uriStr = (_a2 = filter.uri) == null ? void 0 : _a2.toString();
      const originalUriStr = (_b2 = filter.originalUri) == null ? void 0 : _b2.toString();
      return this.breakpoints.filter((bp) => {
        if (uriStr && bp.uri.toString() !== uriStr) {
          return false;
        }
        if (originalUriStr && bp.originalUri.toString() !== originalUriStr) {
          return false;
        }
        if (filter.lineNumber && bp.lineNumber !== filter.lineNumber) {
          return false;
        }
        if (filter.column && bp.column !== filter.column) {
          return false;
        }
        if (filter.enabledOnly && (!this.breakpointsActivated || !bp.enabled)) {
          return false;
        }
        return true;
      });
    }
    return this.breakpoints;
  }
  getFunctionBreakpoints() {
    return this.functionBreakpoints;
  }
  getDataBreakpoints() {
    return this.dataBreakpoints;
  }
  getExceptionBreakpoints() {
    return this.exceptionBreakpoints;
  }
  getExceptionBreakpointsForSession(sessionId) {
    return this.exceptionBreakpoints.filter((ebp) => ebp.isSupportedSession(sessionId));
  }
  getInstructionBreakpoints() {
    return this.instructionBreakpoints;
  }
  setExceptionBreakpointsForSession(sessionId, data) {
    if (data) {
      let didChangeBreakpoints = false;
      data.forEach((d) => {
        let ebp = this.exceptionBreakpoints.filter((exbp) => exbp.matches(d)).pop();
        if (!ebp) {
          didChangeBreakpoints = true;
          ebp = new ExceptionBreakpoint(
            d.filter,
            d.label,
            !!d.default,
            !!d.supportsCondition,
            void 0,
            d.description,
            d.conditionDescription
          );
          this.exceptionBreakpoints.push(ebp);
        }
        ebp.setSupportedSession(sessionId, true);
      });
      if (didChangeBreakpoints) {
        this._onDidChangeBreakpoints.fire(void 0);
      }
    }
  }
  removeExceptionBreakpointsForSession(sessionId) {
    this.exceptionBreakpoints.forEach((ebp) => ebp.setSupportedSession(sessionId, false));
  }
  setExceptionBreakpointFallbackSession(sessionId) {
    this.exceptionBreakpoints.forEach((ebp) => ebp.setFallback(ebp.isSupportedSession(sessionId)));
  }
  setExceptionBreakpointCondition(exceptionBreakpoint, condition) {
    exceptionBreakpoint.condition = condition;
    this._onDidChangeBreakpoints.fire(void 0);
  }
  areBreakpointsActivated() {
    return this.breakpointsActivated;
  }
  setBreakpointsActivated(activated) {
    this.breakpointsActivated = activated;
    this._onDidChangeBreakpoints.fire(void 0);
  }
  addBreakpoints(uri, rawData, fireEvent = true) {
    const newBreakpoints = rawData.map((rawBp) => new Breakpoint(
      uri,
      rawBp.lineNumber,
      rawBp.column,
      rawBp.enabled === false ? false : true,
      rawBp.condition,
      rawBp.hitCondition,
      rawBp.logMessage,
      void 0,
      this.textFileService,
      this.uriIdentityService,
      this.logService,
      rawBp.id
    ));
    this.breakpoints = this.breakpoints.concat(newBreakpoints);
    this.breakpointsActivated = true;
    this.sortAndDeDup();
    if (fireEvent) {
      this._onDidChangeBreakpoints.fire({ added: newBreakpoints, sessionOnly: false });
    }
    return newBreakpoints;
  }
  removeBreakpoints(toRemove) {
    this.breakpoints = this.breakpoints.filter((bp) => !toRemove.some((toRemove2) => toRemove2.getId() === bp.getId()));
    this._onDidChangeBreakpoints.fire({ removed: toRemove, sessionOnly: false });
  }
  updateBreakpoints(data) {
    const updated = [];
    this.breakpoints.forEach((bp) => {
      const bpData = data.get(bp.getId());
      if (bpData) {
        bp.update(bpData);
        updated.push(bp);
      }
    });
    this.sortAndDeDup();
    this._onDidChangeBreakpoints.fire({ changed: updated, sessionOnly: false });
  }
  setBreakpointSessionData(sessionId, capabilites, data) {
    this.breakpoints.forEach((bp) => {
      if (!data) {
        bp.setSessionData(sessionId, void 0);
      } else {
        const bpData = data.get(bp.getId());
        if (bpData) {
          bp.setSessionData(sessionId, toBreakpointSessionData(bpData, capabilites));
        }
      }
    });
    this.functionBreakpoints.forEach((fbp) => {
      if (!data) {
        fbp.setSessionData(sessionId, void 0);
      } else {
        const fbpData = data.get(fbp.getId());
        if (fbpData) {
          fbp.setSessionData(sessionId, toBreakpointSessionData(fbpData, capabilites));
        }
      }
    });
    this.dataBreakpoints.forEach((dbp) => {
      if (!data) {
        dbp.setSessionData(sessionId, void 0);
      } else {
        const dbpData = data.get(dbp.getId());
        if (dbpData) {
          dbp.setSessionData(sessionId, toBreakpointSessionData(dbpData, capabilites));
        }
      }
    });
    this.exceptionBreakpoints.forEach((ebp) => {
      if (!data) {
        ebp.setSessionData(sessionId, void 0);
      } else {
        const ebpData = data.get(ebp.getId());
        if (ebpData) {
          ebp.setSessionData(sessionId, toBreakpointSessionData(ebpData, capabilites));
        }
      }
    });
    this.instructionBreakpoints.forEach((ibp) => {
      if (!data) {
        ibp.setSessionData(sessionId, void 0);
      } else {
        const ibpData = data.get(ibp.getId());
        if (ibpData) {
          ibp.setSessionData(sessionId, toBreakpointSessionData(ibpData, capabilites));
        }
      }
    });
    this._onDidChangeBreakpoints.fire({
      sessionOnly: true
    });
  }
  getDebugProtocolBreakpoint(breakpointId, sessionId) {
    const bp = this.breakpoints.find((bp2) => bp2.getId() === breakpointId);
    if (bp) {
      return bp.getDebugProtocolBreakpoint(sessionId);
    }
    return void 0;
  }
  sortAndDeDup() {
    this.breakpoints = this.breakpoints.sort((first, second) => {
      if (first.uri.toString() !== second.uri.toString()) {
        return basenameOrAuthority(first.uri).localeCompare(basenameOrAuthority(second.uri));
      }
      if (first.lineNumber === second.lineNumber) {
        if (first.column && second.column) {
          return first.column - second.column;
        }
        return 1;
      }
      return first.lineNumber - second.lineNumber;
    });
    this.breakpoints = distinct(this.breakpoints, (bp) => `${bp.uri.toString()}:${bp.lineNumber}:${bp.column}`);
  }
  setEnablement(element, enable) {
    if (element instanceof Breakpoint || element instanceof FunctionBreakpoint || element instanceof ExceptionBreakpoint || element instanceof DataBreakpoint || element instanceof InstructionBreakpoint) {
      const changed = [];
      if (element.enabled !== enable && (element instanceof Breakpoint || element instanceof FunctionBreakpoint || element instanceof DataBreakpoint || element instanceof InstructionBreakpoint)) {
        changed.push(element);
      }
      element.enabled = enable;
      if (enable) {
        this.breakpointsActivated = true;
      }
      this._onDidChangeBreakpoints.fire({ changed, sessionOnly: false });
    }
  }
  enableOrDisableAllBreakpoints(enable) {
    const changed = [];
    this.breakpoints.forEach((bp) => {
      if (bp.enabled !== enable) {
        changed.push(bp);
      }
      bp.enabled = enable;
    });
    this.functionBreakpoints.forEach((fbp) => {
      if (fbp.enabled !== enable) {
        changed.push(fbp);
      }
      fbp.enabled = enable;
    });
    this.dataBreakpoints.forEach((dbp) => {
      if (dbp.enabled !== enable) {
        changed.push(dbp);
      }
      dbp.enabled = enable;
    });
    this.instructionBreakpoints.forEach((ibp) => {
      if (ibp.enabled !== enable) {
        changed.push(ibp);
      }
      ibp.enabled = enable;
    });
    if (enable) {
      this.breakpointsActivated = true;
    }
    this._onDidChangeBreakpoints.fire({ changed, sessionOnly: false });
  }
  addFunctionBreakpoint(functionName, id) {
    const newFunctionBreakpoint = new FunctionBreakpoint(functionName, true, void 0, void 0, void 0, id);
    this.functionBreakpoints.push(newFunctionBreakpoint);
    this._onDidChangeBreakpoints.fire({ added: [newFunctionBreakpoint], sessionOnly: false });
    return newFunctionBreakpoint;
  }
  updateFunctionBreakpoint(id, update) {
    const functionBreakpoint2 = this.functionBreakpoints.find((fbp) => fbp.getId() === id);
    if (functionBreakpoint2) {
      if (typeof update.name === "string") {
        functionBreakpoint2.name = update.name;
      }
      if (typeof update.condition === "string") {
        functionBreakpoint2.condition = update.condition;
      }
      if (typeof update.hitCondition === "string") {
        functionBreakpoint2.hitCondition = update.hitCondition;
      }
      this._onDidChangeBreakpoints.fire({ changed: [functionBreakpoint2], sessionOnly: false });
    }
  }
  removeFunctionBreakpoints(id) {
    let removed;
    if (id) {
      removed = this.functionBreakpoints.filter((fbp) => fbp.getId() === id);
      this.functionBreakpoints = this.functionBreakpoints.filter((fbp) => fbp.getId() !== id);
    } else {
      removed = this.functionBreakpoints;
      this.functionBreakpoints = [];
    }
    this._onDidChangeBreakpoints.fire({ removed, sessionOnly: false });
  }
  addDataBreakpoint(label, dataId, canPersist, accessTypes, accessType) {
    const newDataBreakpoint = new DataBreakpoint(
      label,
      dataId,
      canPersist,
      true,
      void 0,
      void 0,
      void 0,
      accessTypes,
      accessType
    );
    this.dataBreakpoints.push(newDataBreakpoint);
    this._onDidChangeBreakpoints.fire({ added: [newDataBreakpoint], sessionOnly: false });
  }
  removeDataBreakpoints(id) {
    let removed;
    if (id) {
      removed = this.dataBreakpoints.filter((fbp) => fbp.getId() === id);
      this.dataBreakpoints = this.dataBreakpoints.filter((fbp) => fbp.getId() !== id);
    } else {
      removed = this.dataBreakpoints;
      this.dataBreakpoints = [];
    }
    this._onDidChangeBreakpoints.fire({ removed, sessionOnly: false });
  }
  addInstructionBreakpoint(address, offset, condition, hitCondition) {
    const newInstructionBreakpoint = new InstructionBreakpoint(address, offset, false, true, hitCondition, condition, void 0);
    this.instructionBreakpoints.push(newInstructionBreakpoint);
    this._onDidChangeBreakpoints.fire({ added: [newInstructionBreakpoint], sessionOnly: true });
  }
  removeInstructionBreakpoints(address) {
    let removed;
    if (address) {
      removed = this.instructionBreakpoints.filter((fbp) => fbp.instructionReference === address);
      this.instructionBreakpoints = this.instructionBreakpoints.filter((fbp) => fbp.instructionReference !== address);
    } else {
      removed = this.instructionBreakpoints;
      this.instructionBreakpoints = [];
    }
    this._onDidChangeBreakpoints.fire({ removed, sessionOnly: false });
  }
  getWatchExpressions() {
    return this.watchExpressions;
  }
  addWatchExpression(name) {
    const we = new Expression(name || "");
    this.watchExpressions.push(we);
    this._onDidChangeWatchExpressions.fire(we);
    return we;
  }
  renameWatchExpression(id, newName) {
    const filtered = this.watchExpressions.filter((we) => we.getId() === id);
    if (filtered.length === 1) {
      filtered[0].name = newName;
      this._onDidChangeWatchExpressions.fire(filtered[0]);
    }
  }
  removeWatchExpressions(id = null) {
    this.watchExpressions = id ? this.watchExpressions.filter((we) => we.getId() !== id) : [];
    this._onDidChangeWatchExpressions.fire(void 0);
  }
  moveWatchExpression(id, position) {
    const we = this.watchExpressions.find((we2) => we2.getId() === id);
    if (we) {
      this.watchExpressions = this.watchExpressions.filter((we2) => we2.getId() !== id);
      this.watchExpressions = this.watchExpressions.slice(0, position).concat(we, this.watchExpressions.slice(position));
      this._onDidChangeWatchExpressions.fire(void 0);
    }
  }
  sourceIsNotAvailable(uri) {
    this.sessions.forEach((s) => {
      const source = s.getSourceForUri(uri);
      if (source) {
        source.available = false;
      }
    });
    this._onDidChangeCallStack.fire(void 0);
  }
};
DebugModel = __decorate([
  __param(1, ITextFileService),
  __param(2, IUriIdentityService),
  __param(3, ILogService)
], DebugModel);
const debugConsoleViewIcon = registerIcon("debug-console-view-icon", Codicon.debugConsole, localize("debugConsoleViewIcon", "View icon of the debug console view."));
const runViewIcon = registerIcon("run-view-icon", Codicon.debugAlt, localize("runViewIcon", "View icon of the run view."));
const variablesViewIcon = registerIcon("variables-view-icon", Codicon.debugAlt, localize("variablesViewIcon", "View icon of the variables view."));
const watchViewIcon = registerIcon("watch-view-icon", Codicon.debugAlt, localize("watchViewIcon", "View icon of the watch view."));
const callStackViewIcon = registerIcon("callstack-view-icon", Codicon.debugAlt, localize("callStackViewIcon", "View icon of the call stack view."));
const breakpointsViewIcon = registerIcon("breakpoints-view-icon", Codicon.debugAlt, localize("breakpointsViewIcon", "View icon of the breakpoints view."));
const loadedScriptsViewIcon = registerIcon("loaded-scripts-view-icon", Codicon.debugAlt, localize("loadedScriptsViewIcon", "View icon of the loaded scripts view."));
const breakpoint = {
  regular: registerIcon("debug-breakpoint", Codicon.debugBreakpoint, localize("debugBreakpoint", "Icon for breakpoints.")),
  disabled: registerIcon("debug-breakpoint-disabled", Codicon.debugBreakpointDisabled, localize("debugBreakpointDisabled", "Icon for disabled breakpoints.")),
  unverified: registerIcon("debug-breakpoint-unverified", Codicon.debugBreakpointUnverified, localize("debugBreakpointUnverified", "Icon for unverified breakpoints."))
};
const functionBreakpoint = {
  regular: registerIcon("debug-breakpoint-function", Codicon.debugBreakpointFunction, localize("debugBreakpointFunction", "Icon for function breakpoints.")),
  disabled: registerIcon("debug-breakpoint-function-disabled", Codicon.debugBreakpointFunctionDisabled, localize(
    "debugBreakpointFunctionDisabled",
    "Icon for disabled function breakpoints."
  )),
  unverified: registerIcon("debug-breakpoint-function-unverified", Codicon.debugBreakpointFunctionUnverified, localize(
    "debugBreakpointFunctionUnverified",
    "Icon for unverified function breakpoints."
  ))
};
const conditionalBreakpoint = {
  regular: registerIcon("debug-breakpoint-conditional", Codicon.debugBreakpointConditional, localize("debugBreakpointConditional", "Icon for conditional breakpoints.")),
  disabled: registerIcon("debug-breakpoint-conditional-disabled", Codicon.debugBreakpointConditionalDisabled, localize(
    "debugBreakpointConditionalDisabled",
    "Icon for disabled conditional breakpoints."
  )),
  unverified: registerIcon("debug-breakpoint-conditional-unverified", Codicon.debugBreakpointConditionalUnverified, localize(
    "debugBreakpointConditionalUnverified",
    "Icon for unverified conditional breakpoints."
  ))
};
const dataBreakpoint = {
  regular: registerIcon("debug-breakpoint-data", Codicon.debugBreakpointData, localize("debugBreakpointData", "Icon for data breakpoints.")),
  disabled: registerIcon("debug-breakpoint-data-disabled", Codicon.debugBreakpointDataDisabled, localize("debugBreakpointDataDisabled", "Icon for disabled data breakpoints.")),
  unverified: registerIcon("debug-breakpoint-data-unverified", Codicon.debugBreakpointDataUnverified, localize("debugBreakpointDataUnverified", "Icon for unverified data breakpoints."))
};
const logBreakpoint = {
  regular: registerIcon("debug-breakpoint-log", Codicon.debugBreakpointLog, localize("debugBreakpointLog", "Icon for log breakpoints.")),
  disabled: registerIcon("debug-breakpoint-log-disabled", Codicon.debugBreakpointLogDisabled, localize("debugBreakpointLogDisabled", "Icon for disabled log breakpoint.")),
  unverified: registerIcon("debug-breakpoint-log-unverified", Codicon.debugBreakpointLogUnverified, localize("debugBreakpointLogUnverified", "Icon for unverified log breakpoints."))
};
const debugBreakpointHint = registerIcon("debug-hint", Codicon.debugHint, localize(
  "debugBreakpointHint",
  "Icon for breakpoint hints shown on hover in editor glyph margin."
));
const debugBreakpointUnsupported = registerIcon("debug-breakpoint-unsupported", Codicon.debugBreakpointUnsupported, localize("debugBreakpointUnsupported", "Icon for unsupported breakpoints."));
const allBreakpoints = [breakpoint, functionBreakpoint, conditionalBreakpoint, dataBreakpoint, logBreakpoint];
const debugStackframe = registerIcon("debug-stackframe", Codicon.debugStackframe, localize(
  "debugStackframe",
  "Icon for a stackframe shown in the editor glyph margin."
));
const debugStackframeFocused = registerIcon("debug-stackframe-focused", Codicon.debugStackframeFocused, localize(
  "debugStackframeFocused",
  "Icon for a focused stackframe  shown in the editor glyph margin."
));
const debugGripper = registerIcon("debug-gripper", Codicon.gripper, localize("debugGripper", "Icon for the debug bar gripper."));
const debugRestartFrame = registerIcon("debug-restart-frame", Codicon.debugRestartFrame, localize("debugRestartFrame", "Icon for the debug restart frame action."));
const debugStop = registerIcon("debug-stop", Codicon.debugStop, localize("debugStop", "Icon for the debug stop action."));
const debugDisconnect = registerIcon("debug-disconnect", Codicon.debugDisconnect, localize("debugDisconnect", "Icon for the debug disconnect action."));
const debugRestart = registerIcon("debug-restart", Codicon.debugRestart, localize("debugRestart", "Icon for the debug restart action."));
const debugStepOver = registerIcon("debug-step-over", Codicon.debugStepOver, localize("debugStepOver", "Icon for the debug step over action."));
const debugStepInto = registerIcon("debug-step-into", Codicon.debugStepInto, localize("debugStepInto", "Icon for the debug step into action."));
const debugStepOut = registerIcon("debug-step-out", Codicon.debugStepOut, localize("debugStepOut", "Icon for the debug step out action."));
const debugStepBack = registerIcon("debug-step-back", Codicon.debugStepBack, localize("debugStepBack", "Icon for the debug step back action."));
const debugPause = registerIcon("debug-pause", Codicon.debugPause, localize("debugPause", "Icon for the debug pause action."));
const debugContinue = registerIcon("debug-continue", Codicon.debugContinue, localize("debugContinue", "Icon for the debug continue action."));
const debugReverseContinue = registerIcon("debug-reverse-continue", Codicon.debugReverseContinue, localize("debugReverseContinue", "Icon for the debug reverse continue action."));
const debugRun = registerIcon("debug-run", Codicon.run, localize("debugRun", "Icon for the run or debug action."));
const debugStart = registerIcon("debug-start", Codicon.debugStart, localize("debugStart", "Icon for the debug start action."));
const debugConfigure = registerIcon("debug-configure", Codicon.gear, localize("debugConfigure", "Icon for the debug configure action."));
registerIcon("debug-console", Codicon.gear, localize("debugConsole", "Icon for the debug console open action."));
const debugRemoveConfig = registerIcon("debug-remove-config", Codicon.trash, localize("debugRemoveConfig", "Icon for removing debug configurations."));
registerIcon("debug-collapse-all", Codicon.collapseAll, localize("debugCollapseAll", "Icon for the collapse all action in the debug views."));
const callstackViewSession = registerIcon("callstack-view-session", Codicon.bug, localize(
  "callstackViewSession",
  "Icon for the session icon in the call stack view."
));
const debugConsoleClearAll = registerIcon("debug-console-clear-all", Codicon.clearAll, localize(
  "debugConsoleClearAll",
  "Icon for the clear all action in the debug console."
));
const watchExpressionsRemoveAll = registerIcon("watch-expressions-remove-all", Codicon.closeAll, localize(
  "watchExpressionsRemoveAll",
  "Icon for the Remove All action in the watch view."
));
const watchExpressionRemove = registerIcon("watch-expression-remove", Codicon.removeClose, localize("watchExpressionRemove", "Icon for the Remove action in the watch view."));
const watchExpressionsAdd = registerIcon("watch-expressions-add", Codicon.add, localize("watchExpressionsAdd", "Icon for the add action in the watch view."));
const watchExpressionsAddFuncBreakpoint = registerIcon("watch-expressions-add-function-breakpoint", Codicon.add, localize(
  "watchExpressionsAddFuncBreakpoint",
  "Icon for the add function breakpoint action in the watch view."
));
const breakpointsRemoveAll = registerIcon("breakpoints-remove-all", Codicon.closeAll, localize(
  "breakpointsRemoveAll",
  "Icon for the Remove All action in the breakpoints view."
));
const breakpointsActivate = registerIcon("breakpoints-activate", Codicon.activateBreakpoints, localize(
  "breakpointsActivate",
  "Icon for the activate action in the breakpoints view."
));
const debugConsoleEvaluationInput = registerIcon("debug-console-evaluation-input", Codicon.arrowSmallRight, localize(
  "debugConsoleEvaluationInput",
  "Icon for the debug evaluation input marker."
));
const debugConsoleEvaluationPrompt = registerIcon("debug-console-evaluation-prompt", Codicon.chevronRight, localize("debugConsoleEvaluationPrompt", "Icon for the debug evaluation prompt."));
const debugInspectMemory = registerIcon("debug-inspect-memory", Codicon.fileBinary, localize("debugInspectMemory", "Icon for the inspect memory action."));
const $ = $$1;
function createCheckbox(disposables) {
  const checkbox = $("input");
  checkbox.type = "checkbox";
  checkbox.tabIndex = -1;
  disposables.push(Gesture.ignoreTarget(checkbox));
  return checkbox;
}
const MAX_VISIBLE_BREAKPOINTS = 9;
function getExpandedBodySize(model, sessionId, countLimit) {
  const length = model.getBreakpoints().length + model.getExceptionBreakpointsForSession(sessionId).length + model.getFunctionBreakpoints().length + model.getDataBreakpoints().length + model.getInstructionBreakpoints().length;
  return Math.min(countLimit, length) * 22;
}
let BreakpointsView = class BreakpointsView2 extends ViewPane {
  constructor(options, contextMenuService, debugService, keybindingService, instantiationService, themeService, editorService, contextViewService, configurationService, viewDescriptorService, contextKeyService, openerService, telemetryService, labelService, menuService, hoverService, languageService) {
    super(options, keybindingService, contextMenuService, configurationService, contextKeyService, viewDescriptorService, instantiationService, openerService, themeService, telemetryService);
    this.debugService = debugService;
    this.editorService = editorService;
    this.contextViewService = contextViewService;
    this.labelService = labelService;
    this.hoverService = hoverService;
    this.languageService = languageService;
    this.needsRefresh = false;
    this.needsStateChange = false;
    this.ignoreLayout = false;
    this.autoFocusedIndex = -1;
    this.menu = menuService.createMenu(MenuId.DebugBreakpointsContext, contextKeyService);
    this._register(this.menu);
    this.breakpointItemType = CONTEXT_BREAKPOINT_ITEM_TYPE.bindTo(contextKeyService);
    this.breakpointSupportsCondition = CONTEXT_BREAKPOINT_SUPPORTS_CONDITION.bindTo(contextKeyService);
    this.breakpointInputFocused = CONTEXT_BREAKPOINT_INPUT_FOCUSED.bindTo(contextKeyService);
    this._register(this.debugService.getModel().onDidChangeBreakpoints(() => this.onBreakpointsChange()));
    this._register(this.debugService.getViewModel().onDidFocusSession(() => this.onBreakpointsChange()));
    this._register(this.debugService.onDidChangeState(() => this.onStateChange()));
    this.hintDelayer = this._register(new RunOnceScheduler(() => this.updateBreakpointsHint(true), 4e3));
  }
  renderBody(container) {
    super.renderBody(container);
    this.element.classList.add("debug-pane");
    container.classList.add("debug-breakpoints");
    const delegate = new BreakpointsDelegate(this);
    this.list = this.instantiationService.createInstance(WorkbenchList, "Breakpoints", container, delegate, [
      this.instantiationService.createInstance(BreakpointsRenderer, this.menu, this.breakpointSupportsCondition, this.breakpointItemType),
      new ExceptionBreakpointsRenderer(
        this.menu,
        this.breakpointSupportsCondition,
        this.breakpointItemType,
        this.debugService
      ),
      new ExceptionBreakpointInputRenderer(this, this.debugService, this.contextViewService),
      this.instantiationService.createInstance(FunctionBreakpointsRenderer, this.menu, this.breakpointSupportsCondition, this.breakpointItemType),
      this.instantiationService.createInstance(DataBreakpointsRenderer),
      new FunctionBreakpointInputRenderer(this, this.debugService, this.contextViewService, this.labelService),
      this.instantiationService.createInstance(InstructionBreakpointsRenderer)
    ], {
      identityProvider: { getId: (element) => element.getId() },
      multipleSelectionSupport: false,
      keyboardNavigationLabelProvider: { getKeyboardNavigationLabel: (e) => e },
      accessibilityProvider: new BreakpointsAccessibilityProvider(this.debugService, this.labelService),
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      }
    });
    CONTEXT_BREAKPOINTS_FOCUSED.bindTo(this.list.contextKeyService);
    this._register(this.list.onContextMenu(this.onListContextMenu, this));
    this.list.onMouseMiddleClick(async ({ element }) => {
      if (element instanceof Breakpoint) {
        await this.debugService.removeBreakpoints(element.getId());
      } else if (element instanceof FunctionBreakpoint) {
        await this.debugService.removeFunctionBreakpoints(element.getId());
      } else if (element instanceof DataBreakpoint) {
        await this.debugService.removeDataBreakpoints(element.getId());
      } else if (element instanceof InstructionBreakpoint) {
        await this.debugService.removeInstructionBreakpoints(element.instructionReference);
      }
    });
    this._register(this.list.onDidOpen(async (e) => {
      var _a2;
      if (!e.element) {
        return;
      }
      if (e.browserEvent instanceof MouseEvent && e.browserEvent.button === 1) {
        return;
      }
      if (e.element instanceof Breakpoint) {
        openBreakpointSource(e.element, e.sideBySide, e.editorOptions.preserveFocus || false, e.editorOptions.pinned || !e.editorOptions.preserveFocus, this.debugService, this.editorService);
      }
      if (e.element instanceof InstructionBreakpoint) {
        const disassemblyView = await this.editorService.openEditor(DisassemblyViewInput.instance);
        disassemblyView.goToAddress(e.element.instructionReference, e.browserEvent instanceof MouseEvent && e.browserEvent.detail === 2);
      }
      if (e.browserEvent instanceof MouseEvent && e.browserEvent.detail === 2 && e.element instanceof FunctionBreakpoint && e.element !== ((_a2 = this.inputBoxData) == null ? void 0 : _a2.breakpoint)) {
        this.renderInputBox({ breakpoint: e.element, type: "name" });
      }
    }));
    this.list.splice(0, this.list.length, this.elements);
    this._register(this.onDidChangeBodyVisibility((visible) => {
      if (visible) {
        if (this.needsRefresh) {
          this.onBreakpointsChange();
        }
        if (this.needsStateChange) {
          this.onStateChange();
        }
      }
    }));
    const containerModel = this.viewDescriptorService.getViewContainerModel(this.viewDescriptorService.getViewContainerByViewId(this.id));
    this._register(containerModel.onDidChangeAllViewDescriptors(() => {
      this.updateSize();
    }));
  }
  renderHeaderTitle(container, title) {
    super.renderHeaderTitle(container, title);
    const iconLabelContainer = append(container, $("span.breakpoint-warning"));
    this.hintContainer = this._register(new IconLabel(iconLabelContainer, {
      supportIcons: true,
      hoverDelegate: {
        showHover: (options, focus) => this.hoverService.showHover({ content: options.content, target: this.hintContainer.element }, focus),
        delay: this.configurationService.getValue("workbench.hover.delay")
      }
    }));
    hide(this.hintContainer.element);
  }
  focus() {
    var _a2;
    super.focus();
    (_a2 = this.list) == null ? void 0 : _a2.domFocus();
  }
  renderInputBox(data) {
    this._inputBoxData = data;
    this.onBreakpointsChange();
    this._inputBoxData = void 0;
  }
  get inputBoxData() {
    return this._inputBoxData;
  }
  layoutBody(height, width) {
    var _a2;
    if (this.ignoreLayout) {
      return;
    }
    super.layoutBody(height, width);
    (_a2 = this.list) == null ? void 0 : _a2.layout(height, width);
    try {
      this.ignoreLayout = true;
      this.updateSize();
    } finally {
      this.ignoreLayout = false;
    }
  }
  onListContextMenu(e) {
    const element = e.element;
    const type = element instanceof Breakpoint ? "breakpoint" : element instanceof ExceptionBreakpoint ? "exceptionBreakpoint" : element instanceof FunctionBreakpoint ? "functionBreakpoint" : element instanceof DataBreakpoint ? "dataBreakpoint" : element instanceof InstructionBreakpoint ? "instructionBreakpoint" : void 0;
    this.breakpointItemType.set(type);
    const session = this.debugService.getViewModel().focusedSession;
    const conditionSupported = element instanceof ExceptionBreakpoint ? element.supportsCondition : !session || !!session.capabilities.supportsConditionalBreakpoints;
    this.breakpointSupportsCondition.set(conditionSupported);
    const secondary = [];
    createAndFillInContextMenuActions(this.menu, { arg: e.element, shouldForwardArgs: false }, { primary: [], secondary }, "inline");
    this.contextMenuService.showContextMenu({
      getAnchor: () => e.anchor,
      getActions: () => secondary,
      getActionsContext: () => element
    });
  }
  updateSize() {
    var _a2;
    const containerModel = this.viewDescriptorService.getViewContainerModel(this.viewDescriptorService.getViewContainerByViewId(this.id));
    const sessionId = (_a2 = this.debugService.getViewModel().focusedSession) == null ? void 0 : _a2.getId();
    this.minimumBodySize = this.orientation === 0 ? getExpandedBodySize(this.debugService.getModel(), sessionId, MAX_VISIBLE_BREAKPOINTS) : 170;
    this.maximumBodySize = this.orientation === 0 && containerModel.visibleViewDescriptors.length > 1 ? getExpandedBodySize(this.debugService.getModel(), sessionId, Number.POSITIVE_INFINITY) : Number.POSITIVE_INFINITY;
  }
  updateBreakpointsHint(delayed = false) {
    var _a2, _b2;
    if (!this.hintContainer) {
      return;
    }
    const currentType = (_a2 = this.debugService.getViewModel().focusedSession) == null ? void 0 : _a2.configuration.type;
    const dbg = currentType ? this.debugService.getAdapterManager().getDebugger(currentType) : void 0;
    const message = (_b2 = dbg == null ? void 0 : dbg.strings) == null ? void 0 : _b2[DebuggerString.UnverifiedBreakpoints];
    const debuggerHasUnverifiedBps = message && this.debugService.getModel().getBreakpoints().filter((bp) => {
      if (bp.verified || !bp.enabled) {
        return false;
      }
      const langId = this.languageService.guessLanguageIdByFilepathOrFirstLine(bp.uri);
      return langId && dbg.interestedInLanguage(langId);
    });
    if (message && (debuggerHasUnverifiedBps == null ? void 0 : debuggerHasUnverifiedBps.length) && this.debugService.getModel().areBreakpointsActivated()) {
      if (delayed) {
        const mdown = new MarkdownString(void 0, { isTrusted: true }).appendMarkdown(message);
        this.hintContainer.setLabel("$(warning)", void 0, { title: { markdown: mdown, markdownNotSupportedFallback: message } });
        show(this.hintContainer.element);
      } else {
        this.hintDelayer.schedule();
      }
    } else {
      hide(this.hintContainer.element);
    }
  }
  onBreakpointsChange() {
    if (this.isBodyVisible()) {
      this.updateSize();
      if (this.list) {
        const lastFocusIndex = this.list.getFocus()[0];
        const needsRefocus = lastFocusIndex && !this.elements.includes(this.list.element(lastFocusIndex));
        this.list.splice(0, this.list.length, this.elements);
        this.needsRefresh = false;
        if (needsRefocus) {
          this.list.focusNth(Math.min(lastFocusIndex, this.list.length - 1));
        }
      }
      this.updateBreakpointsHint();
    } else {
      this.needsRefresh = true;
    }
  }
  onStateChange() {
    if (this.isBodyVisible()) {
      this.needsStateChange = false;
      const thread = this.debugService.getViewModel().focusedThread;
      let found = false;
      if (thread && thread.stoppedDetails && thread.stoppedDetails.hitBreakpointIds && thread.stoppedDetails.hitBreakpointIds.length > 0) {
        const hitBreakpointIds = thread.stoppedDetails.hitBreakpointIds;
        const elements = this.elements;
        const index = elements.findIndex((e) => {
          const id = e.getIdFromAdapter(thread.session.getId());
          return typeof id === "number" && hitBreakpointIds.indexOf(id) !== -1;
        });
        if (index >= 0) {
          this.list.setFocus([index]);
          this.list.setSelection([index]);
          found = true;
          this.autoFocusedIndex = index;
        }
      }
      if (!found) {
        const focus = this.list.getFocus();
        const selection = this.list.getSelection();
        if (this.autoFocusedIndex >= 0 && equals(focus, selection) && focus.indexOf(this.autoFocusedIndex) >= 0) {
          this.list.setFocus([]);
          this.list.setSelection([]);
        }
        this.autoFocusedIndex = -1;
      }
      this.updateBreakpointsHint();
    } else {
      this.needsStateChange = true;
    }
  }
  get elements() {
    var _a2;
    const model = this.debugService.getModel();
    const sessionId = (_a2 = this.debugService.getViewModel().focusedSession) == null ? void 0 : _a2.getId();
    const elements = model.getExceptionBreakpointsForSession(sessionId).concat(model.getFunctionBreakpoints()).concat(model.getDataBreakpoints()).concat(model.getBreakpoints()).concat(model.getInstructionBreakpoints());
    return elements;
  }
};
BreakpointsView = __decorate([
  __param(1, IContextMenuService),
  __param(2, IDebugService),
  __param(3, IKeybindingService),
  __param(4, IInstantiationService),
  __param(5, IThemeService),
  __param(6, IEditorService),
  __param(7, IContextViewService),
  __param(8, IConfigurationService),
  __param(9, IViewDescriptorService),
  __param(10, IContextKeyService),
  __param(11, IOpenerService),
  __param(12, ITelemetryService),
  __param(13, ILabelService),
  __param(14, IMenuService),
  __param(15, IHoverService),
  __param(16, ILanguageService)
], BreakpointsView);
class BreakpointsDelegate {
  constructor(view) {
    this.view = view;
  }
  getHeight(_element) {
    return 22;
  }
  getTemplateId(element) {
    var _a2, _b2;
    if (element instanceof Breakpoint) {
      return BreakpointsRenderer.ID;
    }
    if (element instanceof FunctionBreakpoint) {
      const inputBoxBreakpoint = (_a2 = this.view.inputBoxData) == null ? void 0 : _a2.breakpoint;
      if (!element.name || inputBoxBreakpoint && inputBoxBreakpoint.getId() === element.getId()) {
        return FunctionBreakpointInputRenderer.ID;
      }
      return FunctionBreakpointsRenderer.ID;
    }
    if (element instanceof ExceptionBreakpoint) {
      const inputBoxBreakpoint = (_b2 = this.view.inputBoxData) == null ? void 0 : _b2.breakpoint;
      if (inputBoxBreakpoint && inputBoxBreakpoint.getId() === element.getId()) {
        return ExceptionBreakpointInputRenderer.ID;
      }
      return ExceptionBreakpointsRenderer.ID;
    }
    if (element instanceof DataBreakpoint) {
      return DataBreakpointsRenderer.ID;
    }
    if (element instanceof InstructionBreakpoint) {
      return InstructionBreakpointsRenderer.ID;
    }
    return "";
  }
}
const breakpointIdToActionBarDomeNode = /* @__PURE__ */ new Map();
let BreakpointsRenderer = (_a = class {
  constructor(menu, breakpointSupportsCondition, breakpointItemType, debugService, labelService) {
    this.menu = menu;
    this.breakpointSupportsCondition = breakpointSupportsCondition;
    this.breakpointItemType = breakpointItemType;
    this.debugService = debugService;
    this.labelService = labelService;
  }
  get templateId() {
    return _a.ID;
  }
  renderTemplate(container) {
    const data = /* @__PURE__ */ Object.create(null);
    data.toDispose = [];
    data.breakpoint = append(container, $(".breakpoint"));
    data.icon = $(".icon");
    data.checkbox = createCheckbox(data.toDispose);
    data.toDispose.push(addStandardDisposableListener(data.checkbox, "change", (e) => {
      this.debugService.enableOrDisableBreakpoints(!data.context.enabled, data.context);
    }));
    append(data.breakpoint, data.icon);
    append(data.breakpoint, data.checkbox);
    data.name = append(data.breakpoint, $("span.name"));
    data.filePath = append(data.breakpoint, $("span.file-path"));
    data.actionBar = new ActionBar(data.breakpoint);
    data.toDispose.push(data.actionBar);
    const lineNumberContainer = append(data.breakpoint, $(".line-number-container"));
    data.lineNumber = append(lineNumberContainer, $("span.line-number.monaco-count-badge"));
    return data;
  }
  renderElement(breakpoint2, index, data) {
    data.context = breakpoint2;
    data.breakpoint.classList.toggle("disabled", !this.debugService.getModel().areBreakpointsActivated());
    data.name.textContent = basenameOrAuthority(breakpoint2.uri);
    data.lineNumber.textContent = breakpoint2.lineNumber.toString();
    if (breakpoint2.column) {
      data.lineNumber.textContent += `:${breakpoint2.column}`;
    }
    data.filePath.textContent = this.labelService.getUriLabel(dirname(breakpoint2.uri), { relative: true });
    data.checkbox.checked = breakpoint2.enabled;
    const { message, icon } = getBreakpointMessageAndIcon(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), breakpoint2, this.labelService);
    data.icon.className = ThemeIcon.asClassName(icon);
    data.breakpoint.title = breakpoint2.message || message || "";
    const debugActive = this.debugService.state === 3 || this.debugService.state === 2;
    if (debugActive && !breakpoint2.verified) {
      data.breakpoint.classList.add("disabled");
    }
    const primary = [];
    const session = this.debugService.getViewModel().focusedSession;
    this.breakpointSupportsCondition.set(!session || !!session.capabilities.supportsConditionalBreakpoints);
    this.breakpointItemType.set("breakpoint");
    createAndFillInActionBarActions(this.menu, { arg: breakpoint2, shouldForwardArgs: true }, { primary, secondary: [] }, "inline");
    data.actionBar.clear();
    data.actionBar.push(primary, { icon: true, label: false });
    breakpointIdToActionBarDomeNode.set(breakpoint2.getId(), data.actionBar.domNode);
  }
  disposeTemplate(templateData) {
    dispose(templateData.toDispose);
  }
}, _a.ID = "breakpoints", _a);
BreakpointsRenderer = __decorate([
  __param(3, IDebugService),
  __param(4, ILabelService)
], BreakpointsRenderer);
const _ExceptionBreakpointsRenderer = class _ExceptionBreakpointsRenderer {
  constructor(menu, breakpointSupportsCondition, breakpointItemType, debugService) {
    this.menu = menu;
    this.breakpointSupportsCondition = breakpointSupportsCondition;
    this.breakpointItemType = breakpointItemType;
    this.debugService = debugService;
  }
  get templateId() {
    return _ExceptionBreakpointsRenderer.ID;
  }
  renderTemplate(container) {
    const data = /* @__PURE__ */ Object.create(null);
    data.toDispose = [];
    data.breakpoint = append(container, $(".breakpoint"));
    data.checkbox = createCheckbox(data.toDispose);
    data.toDispose.push(addStandardDisposableListener(data.checkbox, "change", (e) => {
      this.debugService.enableOrDisableBreakpoints(!data.context.enabled, data.context);
    }));
    append(data.breakpoint, data.checkbox);
    data.name = append(data.breakpoint, $("span.name"));
    data.condition = append(data.breakpoint, $("span.condition"));
    data.breakpoint.classList.add("exception");
    data.actionBar = new ActionBar(data.breakpoint);
    data.toDispose.push(data.actionBar);
    return data;
  }
  renderElement(exceptionBreakpoint, index, data) {
    data.context = exceptionBreakpoint;
    data.name.textContent = exceptionBreakpoint.label || `${exceptionBreakpoint.filter} exceptions`;
    data.breakpoint.title = exceptionBreakpoint.verified ? exceptionBreakpoint.description || data.name.textContent : exceptionBreakpoint.message || localize("unverifiedExceptionBreakpoint", "Unverified Exception Breakpoint");
    data.breakpoint.classList.toggle("disabled", !exceptionBreakpoint.verified);
    data.checkbox.checked = exceptionBreakpoint.enabled;
    data.condition.textContent = exceptionBreakpoint.condition || "";
    data.condition.title = localize(
      "expressionCondition",
      "Expression condition: {0}",
      exceptionBreakpoint.condition
    );
    const primary = [];
    this.breakpointSupportsCondition.set(exceptionBreakpoint.supportsCondition);
    this.breakpointItemType.set("exceptionBreakpoint");
    createAndFillInActionBarActions(this.menu, { arg: exceptionBreakpoint, shouldForwardArgs: true }, { primary, secondary: [] }, "inline");
    data.actionBar.clear();
    data.actionBar.push(primary, { icon: true, label: false });
    breakpointIdToActionBarDomeNode.set(exceptionBreakpoint.getId(), data.actionBar.domNode);
  }
  disposeTemplate(templateData) {
    dispose(templateData.toDispose);
  }
};
_ExceptionBreakpointsRenderer.ID = "exceptionbreakpoints";
let ExceptionBreakpointsRenderer = _ExceptionBreakpointsRenderer;
let FunctionBreakpointsRenderer = (_b = class {
  constructor(menu, breakpointSupportsCondition, breakpointItemType, debugService, labelService) {
    this.menu = menu;
    this.breakpointSupportsCondition = breakpointSupportsCondition;
    this.breakpointItemType = breakpointItemType;
    this.debugService = debugService;
    this.labelService = labelService;
  }
  get templateId() {
    return _b.ID;
  }
  renderTemplate(container) {
    const data = /* @__PURE__ */ Object.create(null);
    data.toDispose = [];
    data.breakpoint = append(container, $(".breakpoint"));
    data.icon = $(".icon");
    data.checkbox = createCheckbox(data.toDispose);
    data.toDispose.push(addStandardDisposableListener(data.checkbox, "change", (e) => {
      this.debugService.enableOrDisableBreakpoints(!data.context.enabled, data.context);
    }));
    append(data.breakpoint, data.icon);
    append(data.breakpoint, data.checkbox);
    data.name = append(data.breakpoint, $("span.name"));
    data.condition = append(data.breakpoint, $("span.condition"));
    data.actionBar = new ActionBar(data.breakpoint);
    data.toDispose.push(data.actionBar);
    return data;
  }
  renderElement(functionBreakpoint2, _index, data) {
    data.context = functionBreakpoint2;
    data.name.textContent = functionBreakpoint2.name;
    const { icon, message } = getBreakpointMessageAndIcon(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), functionBreakpoint2, this.labelService);
    data.icon.className = ThemeIcon.asClassName(icon);
    data.icon.title = message ? message : "";
    data.checkbox.checked = functionBreakpoint2.enabled;
    data.breakpoint.title = message ? message : "";
    if (functionBreakpoint2.condition && functionBreakpoint2.hitCondition) {
      data.condition.textContent = localize(
        "expressionAndHitCount",
        "Expression: {0} | Hit Count: {1}",
        functionBreakpoint2.condition,
        functionBreakpoint2.hitCondition
      );
    } else {
      data.condition.textContent = functionBreakpoint2.condition || functionBreakpoint2.hitCondition || "";
    }
    const session = this.debugService.getViewModel().focusedSession;
    data.breakpoint.classList.toggle("disabled", session && !session.capabilities.supportsFunctionBreakpoints || !this.debugService.getModel().areBreakpointsActivated());
    if (session && !session.capabilities.supportsFunctionBreakpoints) {
      data.breakpoint.title = localize(
        "functionBreakpointsNotSupported",
        "Function breakpoints are not supported by this debug type"
      );
    }
    const primary = [];
    this.breakpointSupportsCondition.set(!session || !!session.capabilities.supportsConditionalBreakpoints);
    this.breakpointItemType.set("functionBreakpoint");
    createAndFillInActionBarActions(this.menu, { arg: functionBreakpoint2, shouldForwardArgs: true }, { primary, secondary: [] }, "inline");
    data.actionBar.clear();
    data.actionBar.push(primary, { icon: true, label: false });
    breakpointIdToActionBarDomeNode.set(functionBreakpoint2.getId(), data.actionBar.domNode);
  }
  disposeTemplate(templateData) {
    dispose(templateData.toDispose);
  }
}, _b.ID = "functionbreakpoints", _b);
FunctionBreakpointsRenderer = __decorate([
  __param(3, IDebugService),
  __param(4, ILabelService)
], FunctionBreakpointsRenderer);
let DataBreakpointsRenderer = (_c = class {
  constructor(debugService, labelService) {
    this.debugService = debugService;
    this.labelService = labelService;
  }
  get templateId() {
    return _c.ID;
  }
  renderTemplate(container) {
    const data = /* @__PURE__ */ Object.create(null);
    data.breakpoint = append(container, $(".breakpoint"));
    data.toDispose = [];
    data.icon = $(".icon");
    data.checkbox = createCheckbox(data.toDispose);
    data.toDispose.push(addStandardDisposableListener(data.checkbox, "change", (e) => {
      this.debugService.enableOrDisableBreakpoints(!data.context.enabled, data.context);
    }));
    append(data.breakpoint, data.icon);
    append(data.breakpoint, data.checkbox);
    data.name = append(data.breakpoint, $("span.name"));
    data.accessType = append(data.breakpoint, $("span.access-type"));
    return data;
  }
  renderElement(dataBreakpoint2, _index, data) {
    data.context = dataBreakpoint2;
    data.name.textContent = dataBreakpoint2.description;
    const { icon, message } = getBreakpointMessageAndIcon(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), dataBreakpoint2, this.labelService);
    data.icon.className = ThemeIcon.asClassName(icon);
    data.icon.title = message ? message : "";
    data.checkbox.checked = dataBreakpoint2.enabled;
    data.breakpoint.title = message ? message : "";
    const session = this.debugService.getViewModel().focusedSession;
    data.breakpoint.classList.toggle("disabled", session && !session.capabilities.supportsDataBreakpoints || !this.debugService.getModel().areBreakpointsActivated());
    if (session && !session.capabilities.supportsDataBreakpoints) {
      data.breakpoint.title = localize(
        "dataBreakpointsNotSupported",
        "Data breakpoints are not supported by this debug type"
      );
    }
    if (dataBreakpoint2.accessType) {
      const accessType = dataBreakpoint2.accessType === "read" ? localize("read", "Read") : dataBreakpoint2.accessType === "write" ? localize("write", "Write") : localize("access", "Access");
      data.accessType.textContent = accessType;
    } else {
      data.accessType.textContent = "";
    }
  }
  disposeTemplate(templateData) {
    dispose(templateData.toDispose);
  }
}, _c.ID = "databreakpoints", _c);
DataBreakpointsRenderer = __decorate([
  __param(0, IDebugService),
  __param(1, ILabelService)
], DataBreakpointsRenderer);
let InstructionBreakpointsRenderer = (_d = class {
  constructor(debugService, labelService) {
    this.debugService = debugService;
    this.labelService = labelService;
  }
  get templateId() {
    return _d.ID;
  }
  renderTemplate(container) {
    const data = /* @__PURE__ */ Object.create(null);
    data.toDispose = [];
    data.breakpoint = append(container, $(".breakpoint"));
    data.icon = $(".icon");
    data.checkbox = createCheckbox(data.toDispose);
    data.toDispose.push(addStandardDisposableListener(data.checkbox, "change", (e) => {
      this.debugService.enableOrDisableBreakpoints(!data.context.enabled, data.context);
    }));
    append(data.breakpoint, data.icon);
    append(data.breakpoint, data.checkbox);
    data.name = append(data.breakpoint, $("span.name"));
    data.address = append(data.breakpoint, $("span.file-path"));
    data.actionBar = new ActionBar(data.breakpoint);
    data.toDispose.push(data.actionBar);
    return data;
  }
  renderElement(breakpoint2, index, data) {
    data.context = breakpoint2;
    data.breakpoint.classList.toggle("disabled", !this.debugService.getModel().areBreakpointsActivated());
    data.name.textContent = breakpoint2.instructionReference;
    data.checkbox.checked = breakpoint2.enabled;
    const { message, icon } = getBreakpointMessageAndIcon(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), breakpoint2, this.labelService);
    data.icon.className = ThemeIcon.asClassName(icon);
    data.breakpoint.title = breakpoint2.message || message || "";
    const debugActive = this.debugService.state === 3 || this.debugService.state === 2;
    if (debugActive && !breakpoint2.verified) {
      data.breakpoint.classList.add("disabled");
    }
  }
  disposeTemplate(templateData) {
    dispose(templateData.toDispose);
  }
}, _d.ID = "instructionBreakpoints", _d);
InstructionBreakpointsRenderer = __decorate([
  __param(0, IDebugService),
  __param(1, ILabelService)
], InstructionBreakpointsRenderer);
const _FunctionBreakpointInputRenderer = class _FunctionBreakpointInputRenderer {
  constructor(view, debugService, contextViewService, labelService) {
    this.view = view;
    this.debugService = debugService;
    this.contextViewService = contextViewService;
    this.labelService = labelService;
  }
  get templateId() {
    return _FunctionBreakpointInputRenderer.ID;
  }
  renderTemplate(container) {
    const template = /* @__PURE__ */ Object.create(null);
    const toDispose = [];
    const breakpoint2 = append(container, $(".breakpoint"));
    template.icon = $(".icon");
    template.checkbox = createCheckbox(toDispose);
    append(breakpoint2, template.icon);
    append(breakpoint2, template.checkbox);
    this.view.breakpointInputFocused.set(true);
    const inputBoxContainer = append(breakpoint2, $(".inputBoxContainer"));
    const inputBox = new InputBox(
      inputBoxContainer,
      this.contextViewService,
      { inputBoxStyles: defaultInputBoxStyles }
    );
    const wrapUp = (success) => {
      template.updating = true;
      try {
        this.view.breakpointInputFocused.set(false);
        const id = template.breakpoint.getId();
        if (success) {
          if (template.type === "name") {
            this.debugService.updateFunctionBreakpoint(id, { name: inputBox.value });
          }
          if (template.type === "condition") {
            this.debugService.updateFunctionBreakpoint(id, { condition: inputBox.value });
          }
          if (template.type === "hitCount") {
            this.debugService.updateFunctionBreakpoint(id, { hitCondition: inputBox.value });
          }
        } else {
          if (template.type === "name" && !template.breakpoint.name) {
            this.debugService.removeFunctionBreakpoints(id);
          } else {
            this.view.renderInputBox(void 0);
          }
        }
      } finally {
        template.updating = false;
      }
    };
    toDispose.push(addStandardDisposableListener(inputBox.inputElement, "keydown", (e) => {
      const isEscape = e.equals(9);
      const isEnter = e.equals(3);
      if (isEscape || isEnter) {
        e.preventDefault();
        e.stopPropagation();
        wrapUp(isEnter);
      }
    }));
    toDispose.push(addDisposableListener(inputBox.inputElement, "blur", () => {
      if (!template.updating) {
        wrapUp(!!inputBox.value);
      }
    }));
    template.inputBox = inputBox;
    template.toDispose = toDispose;
    return template;
  }
  renderElement(functionBreakpoint2, _index, data) {
    var _a2;
    data.breakpoint = functionBreakpoint2;
    data.type = ((_a2 = this.view.inputBoxData) == null ? void 0 : _a2.type) || "name";
    const { icon, message } = getBreakpointMessageAndIcon(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), functionBreakpoint2, this.labelService);
    data.icon.className = ThemeIcon.asClassName(icon);
    data.icon.title = message ? message : "";
    data.checkbox.checked = functionBreakpoint2.enabled;
    data.checkbox.disabled = true;
    data.inputBox.value = functionBreakpoint2.name || "";
    let placeholder = localize("functionBreakpointPlaceholder", "Function to break on");
    let ariaLabel = localize("functionBreakPointInputAriaLabel", "Type function breakpoint.");
    if (data.type === "condition") {
      data.inputBox.value = functionBreakpoint2.condition || "";
      placeholder = localize(
        "functionBreakpointExpressionPlaceholder",
        "Break when expression evaluates to true"
      );
      ariaLabel = localize(
        "functionBreakPointExpresionAriaLabel",
        "Type expression. Function breakpoint will break when expression evaluates to true"
      );
    } else if (data.type === "hitCount") {
      data.inputBox.value = functionBreakpoint2.hitCondition || "";
      placeholder = localize("functionBreakpointHitCountPlaceholder", "Break when hit count is met");
      ariaLabel = localize(
        "functionBreakPointHitCountAriaLabel",
        "Type hit count. Function breakpoint will break when hit count is met."
      );
    }
    data.inputBox.setAriaLabel(ariaLabel);
    data.inputBox.setPlaceHolder(placeholder);
    setTimeout(() => {
      data.inputBox.focus();
      data.inputBox.select();
    }, 0);
  }
  disposeTemplate(templateData) {
    dispose(templateData.toDispose);
  }
};
_FunctionBreakpointInputRenderer.ID = "functionbreakpointinput";
let FunctionBreakpointInputRenderer = _FunctionBreakpointInputRenderer;
const _ExceptionBreakpointInputRenderer = class _ExceptionBreakpointInputRenderer {
  constructor(view, debugService, contextViewService) {
    this.view = view;
    this.debugService = debugService;
    this.contextViewService = contextViewService;
  }
  get templateId() {
    return _ExceptionBreakpointInputRenderer.ID;
  }
  renderTemplate(container) {
    const template = /* @__PURE__ */ Object.create(null);
    const toDispose = [];
    const breakpoint2 = append(container, $(".breakpoint"));
    breakpoint2.classList.add("exception");
    template.checkbox = createCheckbox(toDispose);
    append(breakpoint2, template.checkbox);
    this.view.breakpointInputFocused.set(true);
    const inputBoxContainer = append(breakpoint2, $(".inputBoxContainer"));
    const inputBox = new InputBox(inputBoxContainer, this.contextViewService, {
      ariaLabel: localize("exceptionBreakpointAriaLabel", "Type exception breakpoint condition"),
      inputBoxStyles: defaultInputBoxStyles
    });
    const wrapUp = (success) => {
      this.view.breakpointInputFocused.set(false);
      let newCondition = template.breakpoint.condition;
      if (success) {
        newCondition = inputBox.value !== "" ? inputBox.value : void 0;
      }
      this.debugService.setExceptionBreakpointCondition(template.breakpoint, newCondition);
    };
    toDispose.push(addStandardDisposableListener(inputBox.inputElement, "keydown", (e) => {
      const isEscape = e.equals(9);
      const isEnter = e.equals(3);
      if (isEscape || isEnter) {
        e.preventDefault();
        e.stopPropagation();
        wrapUp(isEnter);
      }
    }));
    toDispose.push(addDisposableListener(inputBox.inputElement, "blur", () => {
      setTimeout(() => {
        wrapUp(true);
      });
    }));
    template.inputBox = inputBox;
    template.toDispose = toDispose;
    return template;
  }
  renderElement(exceptionBreakpoint, _index, data) {
    const placeHolder = exceptionBreakpoint.conditionDescription || localize(
      "exceptionBreakpointPlaceholder",
      "Break when expression evaluates to true"
    );
    data.inputBox.setPlaceHolder(placeHolder);
    data.breakpoint = exceptionBreakpoint;
    data.checkbox.checked = exceptionBreakpoint.enabled;
    data.checkbox.disabled = true;
    data.inputBox.value = exceptionBreakpoint.condition || "";
    setTimeout(() => {
      data.inputBox.focus();
      data.inputBox.select();
    }, 0);
  }
  disposeTemplate(templateData) {
    dispose(templateData.toDispose);
  }
};
_ExceptionBreakpointInputRenderer.ID = "exceptionbreakpointinput";
let ExceptionBreakpointInputRenderer = _ExceptionBreakpointInputRenderer;
class BreakpointsAccessibilityProvider {
  constructor(debugService, labelService) {
    this.debugService = debugService;
    this.labelService = labelService;
  }
  getWidgetAriaLabel() {
    return localize("breakpoints", "Breakpoints");
  }
  getRole() {
    return "checkbox";
  }
  isChecked(breakpoint2) {
    return breakpoint2.enabled;
  }
  getAriaLabel(element) {
    if (element instanceof ExceptionBreakpoint) {
      return element.toString();
    }
    const { message } = getBreakpointMessageAndIcon(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), element, this.labelService);
    const toString = element.toString();
    return message ? `${toString}, ${message}` : toString;
  }
}
function openBreakpointSource(breakpoint2, sideBySide, preserveFocus, pinned, debugService, editorService) {
  if (breakpoint2.uri.scheme === DEBUG_SCHEME && debugService.state === 0) {
    return Promise.resolve(void 0);
  }
  const selection = breakpoint2.endLineNumber ? {
    startLineNumber: breakpoint2.lineNumber,
    endLineNumber: breakpoint2.endLineNumber,
    startColumn: breakpoint2.column || 1,
    endColumn: breakpoint2.endColumn || 1073741824
  } : {
    startLineNumber: breakpoint2.lineNumber,
    startColumn: breakpoint2.column || 1,
    endLineNumber: breakpoint2.lineNumber,
    endColumn: breakpoint2.column || 1073741824
  };
  return editorService.openEditor({
    resource: breakpoint2.uri,
    options: {
      preserveFocus,
      selection,
      revealIfOpened: true,
      selectionRevealType: 1,
      pinned
    }
  }, sideBySide ? SIDE_GROUP : ACTIVE_GROUP);
}
function getBreakpointMessageAndIcon(state, breakpointsActivated, breakpoint$1, labelService) {
  const debugActive = state === 3 || state === 2;
  const breakpointIcon = breakpoint$1 instanceof DataBreakpoint ? dataBreakpoint : breakpoint$1 instanceof FunctionBreakpoint ? functionBreakpoint : breakpoint$1.logMessage ? logBreakpoint : breakpoint;
  if (!breakpoint$1.enabled || !breakpointsActivated) {
    return {
      icon: breakpointIcon.disabled,
      message: breakpoint$1.logMessage ? localize("disabledLogpoint", "Disabled Logpoint") : localize("disabledBreakpoint", "Disabled Breakpoint")
    };
  }
  const appendMessage = (text) => {
    return "message" in breakpoint$1 && breakpoint$1.message ? text.concat(", " + breakpoint$1.message) : text;
  };
  if (debugActive && !breakpoint$1.verified) {
    return {
      icon: breakpointIcon.unverified,
      message: "message" in breakpoint$1 && breakpoint$1.message ? breakpoint$1.message : breakpoint$1.logMessage ? localize("unverifiedLogpoint", "Unverified Logpoint") : localize("unverifiedBreakpoint", "Unverified Breakpoint"),
      showAdapterUnverifiedMessage: true
    };
  }
  if (breakpoint$1 instanceof DataBreakpoint) {
    if (!breakpoint$1.supported) {
      return {
        icon: breakpointIcon.unverified,
        message: localize(
          "dataBreakpointUnsupported",
          "Data breakpoints not supported by this debug type"
        )
      };
    }
    return {
      icon: breakpointIcon.regular,
      message: breakpoint$1.message || localize("dataBreakpoint", "Data Breakpoint")
    };
  }
  if (breakpoint$1 instanceof FunctionBreakpoint) {
    if (!breakpoint$1.supported) {
      return {
        icon: breakpointIcon.unverified,
        message: localize(
          "functionBreakpointUnsupported",
          "Function breakpoints not supported by this debug type"
        )
      };
    }
    const messages = [];
    messages.push(breakpoint$1.message || localize("functionBreakpoint", "Function Breakpoint"));
    if (breakpoint$1.condition) {
      messages.push(localize("expression", "Expression condition: {0}", breakpoint$1.condition));
    }
    if (breakpoint$1.hitCondition) {
      messages.push(localize("hitCount", "Hit Count: {0}", breakpoint$1.hitCondition));
    }
    return {
      icon: breakpointIcon.regular,
      message: appendMessage(messages.join("\n"))
    };
  }
  if (breakpoint$1 instanceof InstructionBreakpoint) {
    if (!breakpoint$1.supported) {
      return {
        icon: breakpointIcon.unverified,
        message: localize(
          "instructionBreakpointUnsupported",
          "Instruction breakpoints not supported by this debug type"
        )
      };
    }
    const messages = [];
    if (breakpoint$1.message) {
      messages.push(breakpoint$1.message);
    } else if (breakpoint$1.instructionReference) {
      messages.push(localize(
        "instructionBreakpointAtAddress",
        "Instruction breakpoint at address {0}",
        breakpoint$1.instructionReference
      ));
    } else {
      messages.push(localize("instructionBreakpoint", "Instruction breakpoint"));
    }
    if (breakpoint$1.hitCondition) {
      messages.push(localize("hitCount", "Hit Count: {0}", breakpoint$1.hitCondition));
    }
    return {
      icon: breakpointIcon.regular,
      message: appendMessage(messages.join("\n"))
    };
  }
  if (breakpoint$1.logMessage || breakpoint$1.condition || breakpoint$1.hitCondition) {
    const messages = [];
    if (!breakpoint$1.supported) {
      return {
        icon: debugBreakpointUnsupported,
        message: localize(
          "breakpointUnsupported",
          "Breakpoints of this type are not supported by the debugger"
        )
      };
    }
    if (breakpoint$1.logMessage) {
      messages.push(localize("logMessage", "Log Message: {0}", breakpoint$1.logMessage));
    }
    if (breakpoint$1.condition) {
      messages.push(localize("expression", "Expression condition: {0}", breakpoint$1.condition));
    }
    if (breakpoint$1.hitCondition) {
      messages.push(localize("hitCount", "Hit Count: {0}", breakpoint$1.hitCondition));
    }
    return {
      icon: breakpoint$1.logMessage ? logBreakpoint.regular : conditionalBreakpoint.regular,
      message: appendMessage(messages.join("\n"))
    };
  }
  const message = "message" in breakpoint$1 && breakpoint$1.message ? breakpoint$1.message : breakpoint$1 instanceof Breakpoint && labelService ? labelService.getUriLabel(breakpoint$1.uri) : localize("breakpoint", "Breakpoint");
  return {
    icon: breakpointIcon.regular,
    message
  };
}
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.addFunctionBreakpointAction",
      title: {
        value: localize("addFunctionBreakpoint", "Add Function Breakpoint"),
        original: "Add Function Breakpoint",
        mnemonicTitle: localize(
          { key: "miFunctionBreakpoint", comment: ["&& denotes a mnemonic"] },
          "&&Function Breakpoint..."
        )
      },
      f1: true,
      icon: watchExpressionsAddFuncBreakpoint,
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 10,
        when: ContextKeyExpr.equals("view", BREAKPOINTS_VIEW_ID)
      }, {
        id: MenuId.MenubarNewBreakpointMenu,
        group: "1_breakpoints",
        order: 3,
        when: CONTEXT_DEBUGGERS_AVAILABLE
      }]
    });
  }
  run(accessor) {
    const debugService = accessor.get(IDebugService);
    debugService.addFunctionBreakpoint();
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.toggleBreakpointsActivatedAction",
      title: { value: localize("activateBreakpoints", "Toggle Activate Breakpoints"), original: "Toggle Activate Breakpoints" },
      f1: true,
      icon: breakpointsActivate,
      menu: {
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 20,
        when: ContextKeyExpr.equals("view", BREAKPOINTS_VIEW_ID)
      }
    });
  }
  run(accessor) {
    const debugService = accessor.get(IDebugService);
    debugService.setBreakpointsActivated(!debugService.getModel().areBreakpointsActivated());
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.removeBreakpoint",
      title: localize("removeBreakpoint", "Remove Breakpoint"),
      icon: Codicon.removeClose,
      menu: [{
        id: MenuId.DebugBreakpointsContext,
        group: "3_modification",
        order: 10,
        when: CONTEXT_BREAKPOINT_ITEM_TYPE.notEqualsTo("exceptionBreakpoint")
      }, {
        id: MenuId.DebugBreakpointsContext,
        group: "inline",
        order: 20,
        when: CONTEXT_BREAKPOINT_ITEM_TYPE.notEqualsTo("exceptionBreakpoint")
      }]
    });
  }
  async run(accessor, breakpoint2) {
    const debugService = accessor.get(IDebugService);
    if (breakpoint2 instanceof Breakpoint) {
      await debugService.removeBreakpoints(breakpoint2.getId());
    } else if (breakpoint2 instanceof FunctionBreakpoint) {
      await debugService.removeFunctionBreakpoints(breakpoint2.getId());
    } else if (breakpoint2 instanceof DataBreakpoint) {
      await debugService.removeDataBreakpoints(breakpoint2.getId());
    } else if (breakpoint2 instanceof InstructionBreakpoint) {
      await debugService.removeInstructionBreakpoints(breakpoint2.instructionReference);
    }
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.removeAllBreakpoints",
      title: {
        original: "Remove All Breakpoints",
        value: localize("removeAllBreakpoints", "Remove All Breakpoints"),
        mnemonicTitle: localize(
          { key: "miRemoveAllBreakpoints", comment: ["&& denotes a mnemonic"] },
          "Remove &&All Breakpoints"
        )
      },
      f1: true,
      icon: breakpointsRemoveAll,
      menu: [{
        id: MenuId.ViewTitle,
        group: "navigation",
        order: 30,
        when: ContextKeyExpr.equals("view", BREAKPOINTS_VIEW_ID)
      }, {
        id: MenuId.DebugBreakpointsContext,
        group: "3_modification",
        order: 20,
        when: ContextKeyExpr.and(CONTEXT_BREAKPOINTS_EXIST, CONTEXT_BREAKPOINT_ITEM_TYPE.notEqualsTo("exceptionBreakpoint"))
      }, {
        id: MenuId.MenubarDebugMenu,
        group: "5_breakpoints",
        order: 3,
        when: CONTEXT_DEBUGGERS_AVAILABLE
      }]
    });
  }
  run(accessor) {
    const debugService = accessor.get(IDebugService);
    debugService.removeBreakpoints();
    debugService.removeFunctionBreakpoints();
    debugService.removeDataBreakpoints();
    debugService.removeInstructionBreakpoints();
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.enableAllBreakpoints",
      title: {
        original: "Enable All Breakpoints",
        value: localize("enableAllBreakpoints", "Enable All Breakpoints"),
        mnemonicTitle: localize(
          { key: "miEnableAllBreakpoints", comment: ["&& denotes a mnemonic"] },
          "&&Enable All Breakpoints"
        )
      },
      f1: true,
      precondition: CONTEXT_DEBUGGERS_AVAILABLE,
      menu: [{
        id: MenuId.DebugBreakpointsContext,
        group: "z_commands",
        order: 10,
        when: ContextKeyExpr.and(CONTEXT_BREAKPOINTS_EXIST, CONTEXT_BREAKPOINT_ITEM_TYPE.notEqualsTo("exceptionBreakpoint"))
      }, {
        id: MenuId.MenubarDebugMenu,
        group: "5_breakpoints",
        order: 1,
        when: CONTEXT_DEBUGGERS_AVAILABLE
      }]
    });
  }
  async run(accessor) {
    const debugService = accessor.get(IDebugService);
    await debugService.enableOrDisableBreakpoints(true);
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.disableAllBreakpoints",
      title: {
        original: "Disable All Breakpoints",
        value: localize("disableAllBreakpoints", "Disable All Breakpoints"),
        mnemonicTitle: localize(
          { key: "miDisableAllBreakpoints", comment: ["&& denotes a mnemonic"] },
          "Disable A&&ll Breakpoints"
        )
      },
      f1: true,
      precondition: CONTEXT_DEBUGGERS_AVAILABLE,
      menu: [{
        id: MenuId.DebugBreakpointsContext,
        group: "z_commands",
        order: 20,
        when: ContextKeyExpr.and(CONTEXT_BREAKPOINTS_EXIST, CONTEXT_BREAKPOINT_ITEM_TYPE.notEqualsTo("exceptionBreakpoint"))
      }, {
        id: MenuId.MenubarDebugMenu,
        group: "5_breakpoints",
        order: 2,
        when: CONTEXT_DEBUGGERS_AVAILABLE
      }]
    });
  }
  async run(accessor) {
    const debugService = accessor.get(IDebugService);
    await debugService.enableOrDisableBreakpoints(false);
  }
});
registerAction2(class extends Action2 {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.reapplyBreakpointsAction",
      title: { value: localize("reapplyAllBreakpoints", "Reapply All Breakpoints"), original: "Reapply All Breakpoints" },
      f1: true,
      precondition: CONTEXT_IN_DEBUG_MODE,
      menu: [{
        id: MenuId.DebugBreakpointsContext,
        group: "z_commands",
        order: 30,
        when: ContextKeyExpr.and(CONTEXT_BREAKPOINTS_EXIST, CONTEXT_BREAKPOINT_ITEM_TYPE.notEqualsTo("exceptionBreakpoint"))
      }]
    });
  }
  async run(accessor) {
    const debugService = accessor.get(IDebugService);
    await debugService.setBreakpointsActivated(true);
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: "debug.editBreakpoint",
      viewId: BREAKPOINTS_VIEW_ID,
      title: localize("editCondition", "Edit Condition..."),
      icon: Codicon.edit,
      precondition: CONTEXT_BREAKPOINT_SUPPORTS_CONDITION,
      menu: [{
        id: MenuId.DebugBreakpointsContext,
        group: "navigation",
        order: 10
      }, {
        id: MenuId.DebugBreakpointsContext,
        group: "inline",
        order: 10
      }]
    });
  }
  async runInView(accessor, view, breakpoint2) {
    var _a2;
    const debugService = accessor.get(IDebugService);
    const editorService = accessor.get(IEditorService);
    if (breakpoint2 instanceof Breakpoint) {
      const editor = await openBreakpointSource(breakpoint2, false, false, true, debugService, editorService);
      if (editor) {
        const codeEditor = editor.getControl();
        if (isCodeEditor(codeEditor)) {
          (_a2 = codeEditor.getContribution(BREAKPOINT_EDITOR_CONTRIBUTION_ID)) == null ? void 0 : _a2.showBreakpointWidget(breakpoint2.lineNumber, breakpoint2.column);
        }
      }
    } else if (breakpoint2 instanceof FunctionBreakpoint) {
      const contextMenuService = accessor.get(IContextMenuService);
      const actions = [
        new Action("breakpoint.editCondition", localize("editCondition", "Edit Condition..."), void 0, true, async () => view.renderInputBox({ breakpoint: breakpoint2, type: "condition" })),
        new Action("breakpoint.editCondition", localize("editHitCount", "Edit Hit Count..."), void 0, true, async () => view.renderInputBox({ breakpoint: breakpoint2, type: "hitCount" }))
      ];
      const domNode = breakpointIdToActionBarDomeNode.get(breakpoint2.getId());
      if (domNode) {
        contextMenuService.showContextMenu({
          getActions: () => actions,
          getAnchor: () => domNode,
          onHide: () => dispose(actions)
        });
      }
    } else {
      view.renderInputBox({ breakpoint: breakpoint2, type: "condition" });
    }
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: "debug.editFunctionBreakpoint",
      viewId: BREAKPOINTS_VIEW_ID,
      title: localize("editBreakpoint", "Edit Function Breakpoint..."),
      menu: [{
        id: MenuId.DebugBreakpointsContext,
        group: "1_breakpoints",
        order: 10,
        when: CONTEXT_BREAKPOINT_ITEM_TYPE.isEqualTo("functionBreakpoint")
      }]
    });
  }
  runInView(_accessor, view, breakpoint2) {
    view.renderInputBox({ breakpoint: breakpoint2, type: "name" });
  }
});
registerAction2(class extends ViewAction {
  constructor() {
    super({
      id: "debug.editFunctionBreakpointHitCount",
      viewId: BREAKPOINTS_VIEW_ID,
      title: localize("editHitCount", "Edit Hit Count..."),
      precondition: CONTEXT_BREAKPOINT_SUPPORTS_CONDITION,
      menu: [{
        id: MenuId.DebugBreakpointsContext,
        group: "navigation",
        order: 20,
        when: CONTEXT_BREAKPOINT_ITEM_TYPE.isEqualTo("functionBreakpoint")
      }]
    });
  }
  runInView(_accessor, view, breakpoint2) {
    view.renderInputBox({ breakpoint: breakpoint2, type: "hitCount" });
  }
});
async function showLoadedScriptMenu(accessor) {
  const quickInputService = accessor.get(IQuickInputService);
  const debugService = accessor.get(IDebugService);
  const editorService = accessor.get(IEditorService);
  const sessions = debugService.getModel().getSessions(false);
  const modelService = accessor.get(IModelService);
  const languageService = accessor.get(ILanguageService);
  const labelService = accessor.get(ILabelService);
  const localDisposableStore = new DisposableStore();
  const quickPick = quickInputService.createQuickPick();
  localDisposableStore.add(quickPick);
  quickPick.matchOnLabel = quickPick.matchOnDescription = quickPick.matchOnDetail = quickPick.sortByLabel = false;
  quickPick.placeholder = localize("moveFocusedView.selectView", "Search loaded scripts by name");
  quickPick.items = await _getPicks(quickPick.value, sessions, editorService, modelService, languageService, labelService);
  localDisposableStore.add(quickPick.onDidChangeValue(async () => {
    quickPick.items = await _getPicks(quickPick.value, sessions, editorService, modelService, languageService, labelService);
  }));
  localDisposableStore.add(quickPick.onDidAccept(() => {
    const selectedItem = quickPick.selectedItems[0];
    selectedItem.accept();
    quickPick.hide();
    localDisposableStore.dispose();
  }));
  quickPick.show();
}
async function _getPicksFromSession(session, filter, editorService, modelService, languageService, labelService) {
  const items = [];
  items.push({ type: "separator", label: session.name });
  const sources = await session.getLoadedSources();
  sources.forEach((element) => {
    const pick = _createPick$1(element, filter, editorService, modelService, languageService, labelService);
    if (pick) {
      items.push(pick);
    }
  });
  return items;
}
async function _getPicks(filter, sessions, editorService, modelService, languageService, labelService) {
  const loadedScriptPicks = [];
  const picks = await Promise.all(sessions.map(
    (session) => _getPicksFromSession(session, filter, editorService, modelService, languageService, labelService)
  ));
  for (const row of picks) {
    for (const elem of row) {
      loadedScriptPicks.push(elem);
    }
  }
  return loadedScriptPicks;
}
function _createPick$1(source, filter, editorService, modelService, languageService, labelService) {
  const label = labelService.getUriBasenameLabel(source.uri);
  const desc = labelService.getUriLabel(dirname(source.uri));
  const labelHighlights = matchesFuzzy(filter, label, true);
  const descHighlights = matchesFuzzy(filter, desc, true);
  if (labelHighlights || descHighlights) {
    return {
      label,
      description: desc === "." ? void 0 : desc,
      highlights: { label: labelHighlights ?? void 0, description: descHighlights ?? void 0 },
      iconClasses: getIconClasses(modelService, languageService, source.uri),
      accept: () => {
        if (source.available) {
          source.openInEditor(editorService, { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 });
        }
      }
    };
  }
  return void 0;
}
async function showDebugSessionMenu(accessor, selectAndStartID) {
  const quickInputService = accessor.get(IQuickInputService);
  const debugService = accessor.get(IDebugService);
  const viewsService = accessor.get(IViewsService);
  const commandService = accessor.get(ICommandService);
  const localDisposableStore = new DisposableStore();
  const quickPick = quickInputService.createQuickPick();
  localDisposableStore.add(quickPick);
  quickPick.matchOnLabel = quickPick.matchOnDescription = quickPick.matchOnDetail = quickPick.sortByLabel = false;
  quickPick.placeholder = localize("moveFocusedView.selectView", "Search debug sessions by name");
  const pickItems = _getPicksAndActiveItem(quickPick.value, selectAndStartID, debugService, viewsService, commandService);
  quickPick.items = pickItems.picks;
  quickPick.activeItems = pickItems.activeItems;
  localDisposableStore.add(quickPick.onDidChangeValue(async () => {
    quickPick.items = _getPicksAndActiveItem(quickPick.value, selectAndStartID, debugService, viewsService, commandService).picks;
  }));
  localDisposableStore.add(quickPick.onDidAccept(() => {
    const selectedItem = quickPick.selectedItems[0];
    selectedItem.accept();
    quickPick.hide();
    localDisposableStore.dispose();
  }));
  quickPick.show();
}
function _getPicksAndActiveItem(filter, selectAndStartID, debugService, viewsService, commandService) {
  const debugConsolePicks = [];
  const headerSessions = [];
  const currSession = debugService.getViewModel().focusedSession;
  const sessions = debugService.getModel().getSessions(false);
  const activeItems = [];
  sessions.forEach((session) => {
    if (session.compact && session.parentSession) {
      headerSessions.push(session.parentSession);
    }
  });
  sessions.forEach((session) => {
    const isHeader = headerSessions.includes(session);
    if (!session.parentSession) {
      debugConsolePicks.push({ type: "separator", label: isHeader ? session.name : void 0 });
    }
    if (!isHeader) {
      const pick = _createPick(session, filter, debugService, viewsService);
      if (pick) {
        debugConsolePicks.push(pick);
        if (session.getId() === (currSession == null ? void 0 : currSession.getId())) {
          activeItems.push(pick);
        }
      }
    }
  });
  if (debugConsolePicks.length) {
    debugConsolePicks.push({ type: "separator" });
  }
  const createDebugSessionLabel = localize("workbench.action.debug.startDebug", "Start a New Debug Session");
  debugConsolePicks.push({
    label: `$(plus) ${createDebugSessionLabel}`,
    ariaLabel: createDebugSessionLabel,
    accept: () => commandService.executeCommand(selectAndStartID)
  });
  return { picks: debugConsolePicks, activeItems };
}
function _getSessionInfo(session) {
  var _a2;
  const label = !session.configuration.name.length ? session.name : session.configuration.name;
  const parentName = session.compact ? void 0 : (_a2 = session.parentSession) == null ? void 0 : _a2.configuration.name;
  let description = "";
  let ariaLabel = "";
  if (parentName) {
    ariaLabel = localize(
      "workbench.action.debug.spawnFrom",
      "Session {0} spawned from {1}",
      label,
      parentName
    );
    description = parentName;
  }
  return { label, description, ariaLabel };
}
function _createPick(session, filter, debugService, viewsService, commandService) {
  const pickInfo = _getSessionInfo(session);
  const highlights = matchesFuzzy(filter, pickInfo.label, true);
  if (highlights) {
    return {
      label: pickInfo.label,
      description: pickInfo.description,
      ariaLabel: pickInfo.ariaLabel,
      highlights: { label: highlights },
      accept: () => {
        debugService.focusStackFrame(void 0, void 0, session, { explicit: true });
        if (!viewsService.isViewVisible(REPL_VIEW_ID)) {
          viewsService.openView(REPL_VIEW_ID, true);
        }
      }
    };
  }
  return void 0;
}
const ADD_CONFIGURATION_ID = "debug.addConfiguration";
const TOGGLE_INLINE_BREAKPOINT_ID = "editor.debug.action.toggleInlineBreakpoint";
const COPY_STACK_TRACE_ID = "debug.copyStackTrace";
const REVERSE_CONTINUE_ID = "workbench.action.debug.reverseContinue";
const STEP_BACK_ID = "workbench.action.debug.stepBack";
const RESTART_SESSION_ID = "workbench.action.debug.restart";
const TERMINATE_THREAD_ID = "workbench.action.debug.terminateThread";
const STEP_OVER_ID = "workbench.action.debug.stepOver";
const STEP_INTO_ID = "workbench.action.debug.stepInto";
const STEP_INTO_TARGET_ID = "workbench.action.debug.stepIntoTarget";
const STEP_OUT_ID = "workbench.action.debug.stepOut";
const PAUSE_ID = "workbench.action.debug.pause";
const DISCONNECT_ID = "workbench.action.debug.disconnect";
const DISCONNECT_AND_SUSPEND_ID = "workbench.action.debug.disconnectAndSuspend";
const STOP_ID = "workbench.action.debug.stop";
const RESTART_FRAME_ID = "workbench.action.debug.restartFrame";
const CONTINUE_ID = "workbench.action.debug.continue";
const FOCUS_REPL_ID = "workbench.debug.action.focusRepl";
const JUMP_TO_CURSOR_ID = "debug.jumpToCursor";
const FOCUS_SESSION_ID = "workbench.action.debug.focusProcess";
const SELECT_AND_START_ID = "workbench.action.debug.selectandstart";
const SELECT_DEBUG_CONSOLE_ID = "workbench.action.debug.selectDebugConsole";
const SELECT_DEBUG_SESSION_ID = "workbench.action.debug.selectDebugSession";
const DEBUG_CONFIGURE_COMMAND_ID = "workbench.action.debug.configure";
const DEBUG_START_COMMAND_ID = "workbench.action.debug.start";
const EDIT_EXPRESSION_COMMAND_ID = "debug.renameWatchExpression";
const SET_EXPRESSION_COMMAND_ID = "debug.setWatchExpression";
const REMOVE_EXPRESSION_COMMAND_ID = "debug.removeWatchExpression";
const NEXT_DEBUG_CONSOLE_ID = "workbench.action.debug.nextConsole";
const PREV_DEBUG_CONSOLE_ID = "workbench.action.debug.prevConsole";
const SHOW_LOADED_SCRIPTS_ID = "workbench.action.debug.showLoadedScripts";
const CALLSTACK_TOP_ID = "workbench.action.debug.callStackTop";
const CALLSTACK_BOTTOM_ID = "workbench.action.debug.callStackBottom";
const CALLSTACK_UP_ID = "workbench.action.debug.callStackUp";
const CALLSTACK_DOWN_ID = "workbench.action.debug.callStackDown";
const DEBUG_COMMAND_CATEGORY = { original: "Debug", value: localize("debug", "Debug") };
const RESTART_LABEL = { value: localize("restartDebug", "Restart"), original: "Restart" };
const STEP_OVER_LABEL = { value: localize("stepOverDebug", "Step Over"), original: "Step Over" };
const STEP_INTO_LABEL = { value: localize("stepIntoDebug", "Step Into"), original: "Step Into" };
const STEP_INTO_TARGET_LABEL = { value: localize("stepIntoTargetDebug", "Step Into Target"), original: "Step Into Target" };
const STEP_OUT_LABEL = { value: localize("stepOutDebug", "Step Out"), original: "Step Out" };
const PAUSE_LABEL = { value: localize("pauseDebug", "Pause"), original: "Pause" };
const DISCONNECT_LABEL = { value: localize("disconnect", "Disconnect"), original: "Disconnect" };
const DISCONNECT_AND_SUSPEND_LABEL = { value: localize("disconnectSuspend", "Disconnect and Suspend"), original: "Disconnect and Suspend" };
const STOP_LABEL = { value: localize("stop", "Stop"), original: "Stop" };
const CONTINUE_LABEL = { value: localize("continueDebug", "Continue"), original: "Continue" };
const FOCUS_SESSION_LABEL = { value: localize("focusSession", "Focus Session"), original: "Focus Session" };
const SELECT_AND_START_LABEL = { value: localize("selectAndStartDebugging", "Select and Start Debugging"), original: "Select and Start Debugging" };
const DEBUG_CONFIGURE_LABEL = localize("openLaunchJson", "Open '{0}'", "launch.json");
const NEXT_DEBUG_CONSOLE_LABEL = { value: localize("nextDebugConsole", "Focus Next Debug Console"), original: "Focus Next Debug Console" };
const PREV_DEBUG_CONSOLE_LABEL = { value: localize("prevDebugConsole", "Focus Previous Debug Console"), original: "Focus Previous Debug Console" };
const OPEN_LOADED_SCRIPTS_LABEL = { value: localize("openLoadedScript", "Open Loaded Script..."), original: "Open Loaded Script..." };
const CALLSTACK_TOP_LABEL = { value: localize("callStackTop", "Navigate to Top of Call Stack"), original: "Navigate to Top of Call Stack" };
const CALLSTACK_BOTTOM_LABEL = { value: localize("callStackBottom", "Navigate to Bottom of Call Stack"), original: "Navigate to Bottom of Call Stack" };
const CALLSTACK_UP_LABEL = { value: localize("callStackUp", "Navigate Up Call Stack"), original: "Navigate Up Call Stack" };
const CALLSTACK_DOWN_LABEL = { value: localize("callStackDown", "Navigate Down Call Stack"), original: "Navigate Down Call Stack" };
const SELECT_DEBUG_CONSOLE_LABEL = { value: localize("selectDebugConsole", "Select Debug Console"), original: "Select Debug Console" };
const SELECT_DEBUG_SESSION_LABEL = { value: localize("selectDebugSession", "Select Debug Session"), original: "Select Debug Session" };
const DEBUG_QUICK_ACCESS_PREFIX = "debug ";
const DEBUG_CONSOLE_QUICK_ACCESS_PREFIX = "debug consoles ";
function isThreadContext(obj) {
  return obj && typeof obj.sessionId === "string" && typeof obj.threadId === "string";
}
async function getThreadAndRun(accessor, sessionAndThreadId, run) {
  const debugService = accessor.get(IDebugService);
  let thread;
  if (isThreadContext(sessionAndThreadId)) {
    const session = debugService.getModel().getSession(sessionAndThreadId.sessionId);
    if (session) {
      thread = session.getAllThreads().find((t) => t.getId() === sessionAndThreadId.threadId);
    }
  } else if (isSessionContext(sessionAndThreadId)) {
    const session = debugService.getModel().getSession(sessionAndThreadId.sessionId);
    if (session) {
      const threads = session.getAllThreads();
      thread = threads.length > 0 ? threads[0] : void 0;
    }
  }
  if (!thread) {
    thread = debugService.getViewModel().focusedThread;
    if (!thread) {
      const focusedSession = debugService.getViewModel().focusedSession;
      const threads = focusedSession ? focusedSession.getAllThreads() : void 0;
      thread = threads && threads.length ? threads[0] : void 0;
    }
  }
  if (thread) {
    await run(thread);
  }
}
function isStackFrameContext(obj) {
  return obj && typeof obj.sessionId === "string" && typeof obj.threadId === "string" && typeof obj.frameId === "string";
}
function getFrame(debugService, context) {
  if (isStackFrameContext(context)) {
    const session = debugService.getModel().getSession(context.sessionId);
    if (session) {
      const thread = session.getAllThreads().find((t) => t.getId() === context.threadId);
      if (thread) {
        return thread.getCallStack().find((sf) => sf.getId() === context.frameId);
      }
    }
  } else {
    return debugService.getViewModel().focusedStackFrame;
  }
  return void 0;
}
function isSessionContext(obj) {
  return obj && typeof obj.sessionId === "string";
}
async function changeDebugConsoleFocus(accessor, next) {
  const debugService = accessor.get(IDebugService);
  const viewsService = accessor.get(IViewsService);
  const sessions = debugService.getModel().getSessions(true).filter((s) => s.hasSeparateRepl());
  let currSession = debugService.getViewModel().focusedSession;
  let nextIndex = 0;
  if (sessions.length > 0 && currSession) {
    while (currSession && !currSession.hasSeparateRepl()) {
      currSession = currSession.parentSession;
    }
    if (currSession) {
      const currIndex = sessions.indexOf(currSession);
      if (next) {
        nextIndex = currIndex === sessions.length - 1 ? 0 : currIndex + 1;
      } else {
        nextIndex = currIndex === 0 ? sessions.length - 1 : currIndex - 1;
      }
    }
  }
  await debugService.focusStackFrame(void 0, void 0, sessions[nextIndex], { explicit: true });
  if (!viewsService.isViewVisible(REPL_VIEW_ID)) {
    await viewsService.openView(REPL_VIEW_ID, true);
  }
}
async function navigateCallStack(debugService, down) {
  const frame = debugService.getViewModel().focusedStackFrame;
  if (frame) {
    let callStack = frame.thread.getCallStack();
    let index = callStack.findIndex((elem) => elem.frameId === frame.frameId);
    let nextVisibleFrame;
    if (down) {
      if (index >= callStack.length - 1) {
        if (frame.thread.reachedEndOfCallStack) {
          goToTopOfCallStack(debugService);
          return;
        } else {
          await debugService.getModel().fetchCallstack(frame.thread, 20);
          callStack = frame.thread.getCallStack();
          index = callStack.findIndex((elem) => elem.frameId === frame.frameId);
        }
      }
      nextVisibleFrame = findNextVisibleFrame(true, callStack, index);
    } else {
      if (index <= 0) {
        goToBottomOfCallStack(debugService);
        return;
      }
      nextVisibleFrame = findNextVisibleFrame(false, callStack, index);
    }
    if (nextVisibleFrame) {
      debugService.focusStackFrame(nextVisibleFrame);
    }
  }
}
async function goToBottomOfCallStack(debugService) {
  const thread = debugService.getViewModel().focusedThread;
  if (thread) {
    await debugService.getModel().fetchCallstack(thread);
    const callStack = thread.getCallStack();
    if (callStack.length > 0) {
      const nextVisibleFrame = findNextVisibleFrame(false, callStack, 0);
      if (nextVisibleFrame) {
        debugService.focusStackFrame(nextVisibleFrame);
      }
    }
  }
}
function goToTopOfCallStack(debugService) {
  const thread = debugService.getViewModel().focusedThread;
  if (thread) {
    debugService.focusStackFrame(thread.getTopStackFrame());
  }
}
function findNextVisibleFrame(down, callStack, startIndex) {
  if (startIndex >= callStack.length) {
    startIndex = callStack.length - 1;
  } else if (startIndex < 0) {
    startIndex = 0;
  }
  let index = startIndex;
  let currFrame;
  do {
    if (down) {
      if (index === callStack.length - 1) {
        index = 0;
      } else {
        index++;
      }
    } else {
      if (index === 0) {
        index = callStack.length - 1;
      } else {
        index--;
      }
    }
    currFrame = callStack[index];
    if (!(currFrame.source.presentationHint === "deemphasize" || currFrame.presentationHint === "deemphasize")) {
      return currFrame;
    }
  } while (index !== startIndex);
  return void 0;
}
CommandsRegistry.registerCommand({
  id: COPY_STACK_TRACE_ID,
  handler: async (accessor, _, context) => {
    const textResourcePropertiesService = accessor.get(ITextResourcePropertiesService);
    const clipboardService = accessor.get(IClipboardService);
    const debugService = accessor.get(IDebugService);
    const frame = getFrame(debugService, context);
    if (frame) {
      const eol = textResourcePropertiesService.getEOL(frame.source.uri);
      await clipboardService.writeText(frame.thread.getCallStack().map((sf) => sf.toString()).join(eol));
    }
  }
});
CommandsRegistry.registerCommand({
  id: REVERSE_CONTINUE_ID,
  handler: async (accessor, _, context) => {
    await getThreadAndRun(accessor, context, (thread) => thread.reverseContinue());
  }
});
CommandsRegistry.registerCommand({
  id: STEP_BACK_ID,
  handler: async (accessor, _, context) => {
    const contextKeyService = accessor.get(IContextKeyService);
    if (CONTEXT_DISASSEMBLY_VIEW_FOCUS.getValue(contextKeyService)) {
      await getThreadAndRun(accessor, context, (thread) => thread.stepBack("instruction"));
    } else {
      await getThreadAndRun(accessor, context, (thread) => thread.stepBack());
    }
  }
});
CommandsRegistry.registerCommand({
  id: TERMINATE_THREAD_ID,
  handler: async (accessor, _, context) => {
    await getThreadAndRun(accessor, context, (thread) => thread.terminate());
  }
});
CommandsRegistry.registerCommand({
  id: JUMP_TO_CURSOR_ID,
  handler: async (accessor) => {
    const debugService = accessor.get(IDebugService);
    const stackFrame = debugService.getViewModel().focusedStackFrame;
    const editorService = accessor.get(IEditorService);
    const activeEditorControl = editorService.activeTextEditorControl;
    const notificationService = accessor.get(INotificationService);
    const quickInputService = accessor.get(IQuickInputService);
    if (stackFrame && isCodeEditor(activeEditorControl) && activeEditorControl.hasModel()) {
      const position = activeEditorControl.getPosition();
      const resource = activeEditorControl.getModel().uri;
      const source = stackFrame.thread.session.getSourceForUri(resource);
      if (source) {
        const response = await stackFrame.thread.session.gotoTargets(source.raw, position.lineNumber, position.column);
        const targets = response == null ? void 0 : response.body.targets;
        if (targets && targets.length) {
          let id = targets[0].id;
          if (targets.length > 1) {
            const picks = targets.map((t) => ({ label: t.label, _id: t.id }));
            const pick = await quickInputService.pick(picks, { placeHolder: localize("chooseLocation", "Choose the specific location") });
            if (!pick) {
              return;
            }
            id = pick._id;
          }
          return await stackFrame.thread.session.goto(stackFrame.thread.threadId, id).catch((e) => notificationService.warn(e));
        }
      }
    }
    return notificationService.warn(localize(
      "noExecutableCode",
      "No executable code is associated at the current cursor position."
    ));
  }
});
CommandsRegistry.registerCommand({
  id: CALLSTACK_TOP_ID,
  handler: async (accessor, _, context) => {
    const debugService = accessor.get(IDebugService);
    goToTopOfCallStack(debugService);
  }
});
CommandsRegistry.registerCommand({
  id: CALLSTACK_BOTTOM_ID,
  handler: async (accessor, _, context) => {
    const debugService = accessor.get(IDebugService);
    await goToBottomOfCallStack(debugService);
  }
});
CommandsRegistry.registerCommand({
  id: CALLSTACK_UP_ID,
  handler: async (accessor, _, context) => {
    const debugService = accessor.get(IDebugService);
    navigateCallStack(debugService, false);
  }
});
CommandsRegistry.registerCommand({
  id: CALLSTACK_DOWN_ID,
  handler: async (accessor, _, context) => {
    const debugService = accessor.get(IDebugService);
    navigateCallStack(debugService, true);
  }
});
MenuRegistry.appendMenuItem(MenuId.EditorContext, {
  command: {
    id: JUMP_TO_CURSOR_ID,
    title: localize("jumpToCursor", "Jump to Cursor"),
    category: DEBUG_COMMAND_CATEGORY
  },
  when: ContextKeyExpr.and(CONTEXT_JUMP_TO_CURSOR_SUPPORTED, EditorContextKeys.editorTextFocus),
  group: "debug",
  order: 3
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: NEXT_DEBUG_CONSOLE_ID,
  weight: 200 + 1,
  when: CONTEXT_IN_DEBUG_REPL,
  primary: 2048 | 12,
  mac: { primary: 1024 | 2048 | 94 },
  handler: async (accessor, _, context) => {
    changeDebugConsoleFocus(accessor, true);
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: PREV_DEBUG_CONSOLE_ID,
  weight: 200 + 1,
  when: CONTEXT_IN_DEBUG_REPL,
  primary: 2048 | 11,
  mac: { primary: 1024 | 2048 | 92 },
  handler: async (accessor, _, context) => {
    changeDebugConsoleFocus(accessor, false);
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: RESTART_SESSION_ID,
  weight: 200,
  primary: 1024 | 2048 | 63,
  when: CONTEXT_IN_DEBUG_MODE,
  handler: async (accessor, _, context) => {
    const debugService = accessor.get(IDebugService);
    const configurationService = accessor.get(IConfigurationService);
    let session;
    if (isSessionContext(context)) {
      session = debugService.getModel().getSession(context.sessionId);
    } else {
      session = debugService.getViewModel().focusedSession;
    }
    if (!session) {
      const { launch, name } = debugService.getConfigurationManager().selectedConfiguration;
      await debugService.startDebugging(launch, name, { noDebug: false, startedByUser: true });
    } else {
      const showSubSessions = configurationService.getValue("debug").showSubSessionsInToolBar;
      while (!showSubSessions && session.lifecycleManagedByParent && session.parentSession) {
        session = session.parentSession;
      }
      session.removeReplExpressions();
      await debugService.restartSession(session);
    }
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: STEP_OVER_ID,
  weight: 200,
  primary: 68,
  secondary: isWeb ? [512 | 68] : void 0,
  when: CONTEXT_DEBUG_STATE.isEqualTo("stopped"),
  handler: async (accessor, _, context) => {
    const contextKeyService = accessor.get(IContextKeyService);
    if (CONTEXT_DISASSEMBLY_VIEW_FOCUS.getValue(contextKeyService)) {
      await getThreadAndRun(accessor, context, (thread) => thread.next("instruction"));
    } else {
      await getThreadAndRun(accessor, context, (thread) => thread.next());
    }
  }
});
const STEP_INTO_KEYBINDING = isWeb && isWindows ? 512 | 69 : 69;
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: STEP_INTO_ID,
  weight: 200 + 10,
  primary: STEP_INTO_KEYBINDING,
  when: CONTEXT_DEBUG_STATE.notEqualsTo("inactive"),
  handler: async (accessor, _, context) => {
    const contextKeyService = accessor.get(IContextKeyService);
    if (CONTEXT_DISASSEMBLY_VIEW_FOCUS.getValue(contextKeyService)) {
      await getThreadAndRun(accessor, context, (thread) => thread.stepIn("instruction"));
    } else {
      await getThreadAndRun(accessor, context, (thread) => thread.stepIn());
    }
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: STEP_OUT_ID,
  weight: 200,
  primary: 1024 | 69,
  when: CONTEXT_DEBUG_STATE.isEqualTo("stopped"),
  handler: async (accessor, _, context) => {
    const contextKeyService = accessor.get(IContextKeyService);
    if (CONTEXT_DISASSEMBLY_VIEW_FOCUS.getValue(contextKeyService)) {
      await getThreadAndRun(accessor, context, (thread) => thread.stepOut("instruction"));
    } else {
      await getThreadAndRun(accessor, context, (thread) => thread.stepOut());
    }
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: PAUSE_ID,
  weight: 200 + 2,
  primary: 64,
  when: CONTEXT_DEBUG_STATE.isEqualTo("running"),
  handler: async (accessor, _, context) => {
    await getThreadAndRun(accessor, context, (thread) => thread.pause());
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: STEP_INTO_TARGET_ID,
  primary: STEP_INTO_KEYBINDING | 2048,
  when: ContextKeyExpr.and(CONTEXT_STEP_INTO_TARGETS_SUPPORTED, CONTEXT_IN_DEBUG_MODE, CONTEXT_DEBUG_STATE.isEqualTo("stopped")),
  weight: 200,
  handler: async (accessor, _, context) => {
    const quickInputService = accessor.get(IQuickInputService);
    const debugService = accessor.get(IDebugService);
    const session = debugService.getViewModel().focusedSession;
    const frame = debugService.getViewModel().focusedStackFrame;
    if (!frame || !session) {
      return;
    }
    const editor = await accessor.get(IEditorService).openEditor({
      resource: frame.source.uri,
      options: { revealIfOpened: true }
    });
    let codeEditor;
    if (editor) {
      const ctrl = editor == null ? void 0 : editor.getControl();
      if (isCodeEditor(ctrl)) {
        codeEditor = ctrl;
      }
    }
    const qp = quickInputService.createQuickPick();
    qp.busy = true;
    qp.show();
    qp.onDidChangeActive(([item]) => {
      if (codeEditor && item && item.target.line !== void 0) {
        codeEditor.revealLineInCenterIfOutsideViewport(item.target.line);
        codeEditor.setSelection({
          startLineNumber: item.target.line,
          startColumn: item.target.column || 1,
          endLineNumber: item.target.endLine || item.target.line,
          endColumn: item.target.endColumn || item.target.column || 1
        });
      }
    });
    qp.onDidAccept(() => {
      if (qp.activeItems.length) {
        session.stepIn(frame.thread.threadId, qp.activeItems[0].target.id);
      }
    });
    qp.onDidHide(() => qp.dispose());
    session.stepInTargets(frame.frameId).then((targets) => {
      qp.busy = false;
      if (targets == null ? void 0 : targets.length) {
        qp.items = targets == null ? void 0 : targets.map((target) => ({ target, label: target.label }));
      } else {
        qp.placeholder = localize("editor.debug.action.stepIntoTargets.none", "No step targets available");
      }
    });
  }
});
async function stopHandler(accessor, _, context, disconnect, suspend) {
  const debugService = accessor.get(IDebugService);
  let session;
  if (isSessionContext(context)) {
    session = debugService.getModel().getSession(context.sessionId);
  } else {
    session = debugService.getViewModel().focusedSession;
  }
  const configurationService = accessor.get(IConfigurationService);
  const showSubSessions = configurationService.getValue("debug").showSubSessionsInToolBar;
  while (!showSubSessions && session && session.lifecycleManagedByParent && session.parentSession) {
    session = session.parentSession;
  }
  await debugService.stopSession(session, disconnect, suspend);
}
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: DISCONNECT_ID,
  weight: 200,
  primary: 1024 | 63,
  when: ContextKeyExpr.and(CONTEXT_FOCUSED_SESSION_IS_ATTACH, CONTEXT_IN_DEBUG_MODE),
  handler: (accessor, _, context) => stopHandler(accessor, _, context, true)
});
CommandsRegistry.registerCommand({
  id: DISCONNECT_AND_SUSPEND_ID,
  handler: (accessor, _, context) => stopHandler(accessor, _, context, true, true)
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: STOP_ID,
  weight: 200,
  primary: 1024 | 63,
  when: ContextKeyExpr.and(CONTEXT_FOCUSED_SESSION_IS_ATTACH.toNegated(), CONTEXT_IN_DEBUG_MODE),
  handler: (accessor, _, context) => stopHandler(accessor, _, context, false)
});
CommandsRegistry.registerCommand({
  id: RESTART_FRAME_ID,
  handler: async (accessor, _, context) => {
    const debugService = accessor.get(IDebugService);
    const notificationService = accessor.get(INotificationService);
    const frame = getFrame(debugService, context);
    if (frame) {
      try {
        await frame.restart();
      } catch (e) {
        notificationService.error(e);
      }
    }
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: CONTINUE_ID,
  weight: 200 + 10,
  primary: 63,
  when: CONTEXT_DEBUG_STATE.isEqualTo("stopped"),
  handler: async (accessor, _, context) => {
    await getThreadAndRun(accessor, context, (thread) => thread.continue());
  }
});
CommandsRegistry.registerCommand({
  id: SHOW_LOADED_SCRIPTS_ID,
  handler: async (accessor) => {
    await showLoadedScriptMenu(accessor);
  }
});
CommandsRegistry.registerCommand({
  id: FOCUS_REPL_ID,
  handler: async (accessor) => {
    const viewsService = accessor.get(IViewsService);
    await viewsService.openView(REPL_VIEW_ID, true);
  }
});
CommandsRegistry.registerCommand({
  id: "debug.startFromConfig",
  handler: async (accessor, config) => {
    const debugService = accessor.get(IDebugService);
    await debugService.startDebugging(void 0, config);
  }
});
CommandsRegistry.registerCommand({
  id: FOCUS_SESSION_ID,
  handler: async (accessor, session) => {
    const debugService = accessor.get(IDebugService);
    const editorService = accessor.get(IEditorService);
    const stoppedChildSession = debugService.getModel().getSessions().find((s) => s.parentSession === session && s.state === 2);
    if (stoppedChildSession && session.state !== 2) {
      session = stoppedChildSession;
    }
    await debugService.focusStackFrame(void 0, void 0, session, { explicit: true });
    const stackFrame = debugService.getViewModel().focusedStackFrame;
    if (stackFrame) {
      await stackFrame.openInEditor(editorService, true);
    }
  }
});
CommandsRegistry.registerCommand({
  id: SELECT_AND_START_ID,
  handler: async (accessor) => {
    const quickInputService = accessor.get(IQuickInputService);
    quickInputService.quickAccess.show(DEBUG_QUICK_ACCESS_PREFIX);
  }
});
CommandsRegistry.registerCommand({
  id: SELECT_DEBUG_CONSOLE_ID,
  handler: async (accessor) => {
    const quickInputService = accessor.get(IQuickInputService);
    quickInputService.quickAccess.show(DEBUG_CONSOLE_QUICK_ACCESS_PREFIX);
  }
});
CommandsRegistry.registerCommand({
  id: SELECT_DEBUG_SESSION_ID,
  handler: async (accessor) => {
    showDebugSessionMenu(accessor, SELECT_AND_START_ID);
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: "debug.toggleBreakpoint",
  weight: 200 + 5,
  when: ContextKeyExpr.and(CONTEXT_BREAKPOINTS_FOCUSED, InputFocusedContext.toNegated()),
  primary: 10,
  handler: (accessor) => {
    const listService = accessor.get(IListService);
    const debugService = accessor.get(IDebugService);
    const list = listService.lastFocusedList;
    if (list instanceof List) {
      const focused = list.getFocusedElements();
      if (focused && focused.length) {
        debugService.enableOrDisableBreakpoints(!focused[0].enabled, focused[0]);
      }
    }
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: "debug.enableOrDisableBreakpoint",
  weight: 200,
  primary: void 0,
  when: EditorContextKeys.editorTextFocus,
  handler: (accessor) => {
    const debugService = accessor.get(IDebugService);
    const editorService = accessor.get(IEditorService);
    const control = editorService.activeTextEditorControl;
    if (isCodeEditor(control)) {
      const model = control.getModel();
      if (model) {
        const position = control.getPosition();
        if (position) {
          const bps = debugService.getModel().getBreakpoints({ uri: model.uri, lineNumber: position.lineNumber });
          if (bps.length) {
            debugService.enableOrDisableBreakpoints(!bps[0].enabled, bps[0]);
          }
        }
      }
    }
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: EDIT_EXPRESSION_COMMAND_ID,
  weight: 200 + 5,
  when: CONTEXT_WATCH_EXPRESSIONS_FOCUSED,
  primary: 60,
  mac: { primary: 3 },
  handler: (accessor, expression) => {
    const debugService = accessor.get(IDebugService);
    if (!(expression instanceof Expression)) {
      const listService = accessor.get(IListService);
      const focused = listService.lastFocusedList;
      if (focused) {
        const elements = focused.getFocus();
        if (Array.isArray(elements) && elements[0] instanceof Expression) {
          expression = elements[0];
        }
      }
    }
    if (expression instanceof Expression) {
      debugService.getViewModel().setSelectedExpression(expression, false);
    }
  }
});
CommandsRegistry.registerCommand({
  id: SET_EXPRESSION_COMMAND_ID,
  handler: async (accessor, expression) => {
    const debugService = accessor.get(IDebugService);
    if (expression instanceof Expression || expression instanceof Variable) {
      debugService.getViewModel().setSelectedExpression(expression, true);
    }
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: "debug.setVariable",
  weight: 200 + 5,
  when: CONTEXT_VARIABLES_FOCUSED,
  primary: 60,
  mac: { primary: 3 },
  handler: (accessor) => {
    const listService = accessor.get(IListService);
    const debugService = accessor.get(IDebugService);
    const focused = listService.lastFocusedList;
    if (focused) {
      const elements = focused.getFocus();
      if (Array.isArray(elements) && elements[0] instanceof Variable) {
        debugService.getViewModel().setSelectedExpression(elements[0], false);
      }
    }
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: REMOVE_EXPRESSION_COMMAND_ID,
  weight: 200,
  when: ContextKeyExpr.and(CONTEXT_WATCH_EXPRESSIONS_FOCUSED, CONTEXT_EXPRESSION_SELECTED.toNegated()),
  primary: 20,
  mac: { primary: 2048 | 1 },
  handler: (accessor, expression) => {
    const debugService = accessor.get(IDebugService);
    if (expression instanceof Expression) {
      debugService.removeWatchExpressions(expression.getId());
      return;
    }
    const listService = accessor.get(IListService);
    const focused = listService.lastFocusedList;
    if (focused) {
      let elements = focused.getFocus();
      if (Array.isArray(elements) && elements[0] instanceof Expression) {
        const selection = focused.getSelection();
        if (selection && selection.indexOf(elements[0]) >= 0) {
          elements = selection;
        }
        elements.forEach((e) => debugService.removeWatchExpressions(e.getId()));
      }
    }
  }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: "debug.removeBreakpoint",
  weight: 200,
  when: ContextKeyExpr.and(CONTEXT_BREAKPOINTS_FOCUSED, CONTEXT_BREAKPOINT_INPUT_FOCUSED.toNegated()),
  primary: 20,
  mac: { primary: 2048 | 1 },
  handler: (accessor) => {
    const listService = accessor.get(IListService);
    const debugService = accessor.get(IDebugService);
    const list = listService.lastFocusedList;
    if (list instanceof List) {
      const focused = list.getFocusedElements();
      const element = focused.length ? focused[0] : void 0;
      if (element instanceof Breakpoint) {
        debugService.removeBreakpoints(element.getId());
      } else if (element instanceof FunctionBreakpoint) {
        debugService.removeFunctionBreakpoints(element.getId());
      } else if (element instanceof DataBreakpoint) {
        debugService.removeDataBreakpoints(element.getId());
      }
    }
  }
});
const inlineBreakpointHandler = (accessor) => {
  const debugService = accessor.get(IDebugService);
  const editorService = accessor.get(IEditorService);
  const control = editorService.activeTextEditorControl;
  if (isCodeEditor(control)) {
    const position = control.getPosition();
    if (position && control.hasModel() && debugService.canSetBreakpointsIn(control.getModel())) {
      const modelUri = control.getModel().uri;
      const breakpointAlreadySet = debugService.getModel().getBreakpoints({ lineNumber: position.lineNumber, uri: modelUri }).some(
        (bp) => bp.sessionAgnosticData.column === position.column || !bp.column && position.column <= 1
      );
      if (!breakpointAlreadySet) {
        debugService.addBreakpoints(modelUri, [{ lineNumber: position.lineNumber, column: position.column > 1 ? position.column : void 0 }]);
      }
    }
  }
};
KeybindingsRegistry.registerCommandAndKeybindingRule({
  weight: 200,
  primary: 1024 | 67,
  when: EditorContextKeys.editorTextFocus,
  id: TOGGLE_INLINE_BREAKPOINT_ID,
  handler: inlineBreakpointHandler
});
MenuRegistry.appendMenuItem(MenuId.EditorContext, {
  command: {
    id: TOGGLE_INLINE_BREAKPOINT_ID,
    title: localize("addInlineBreakpoint", "Add Inline Breakpoint"),
    category: DEBUG_COMMAND_CATEGORY
  },
  when: ContextKeyExpr.and(CONTEXT_IN_DEBUG_MODE, PanelFocusContext.toNegated(), EditorContextKeys.editorTextFocus),
  group: "debug",
  order: 1
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
  id: "debug.openBreakpointToSide",
  weight: 200,
  when: CONTEXT_BREAKPOINTS_FOCUSED,
  primary: 2048 | 3,
  secondary: [512 | 3],
  handler: (accessor) => {
    const listService = accessor.get(IListService);
    const list = listService.lastFocusedList;
    if (list instanceof List) {
      const focus = list.getFocusedElements();
      if (focus.length && focus[0] instanceof Breakpoint) {
        return openBreakpointSource(focus[0], true, false, true, accessor.get(IDebugService), accessor.get(IEditorService));
      }
    }
    return void 0;
  }
});
export {
  DISCONNECT_AND_SUSPEND_LABEL as $,
  ADD_CONFIGURATION_ID as A,
  Breakpoint as B,
  CONTINUE_LABEL as C,
  DEBUG_CONFIGURE_COMMAND_ID as D,
  ExpressionContainer as E,
  FunctionBreakpoint as F,
  CONTINUE_ID as G,
  PAUSE_ID as H,
  InstructionBreakpoint as I,
  DISCONNECT_ID as J,
  DISCONNECT_LABEL as K,
  STOP_LABEL as L,
  MemoryRegion as M,
  STOP_ID as N,
  STEP_OVER_LABEL as O,
  PAUSE_LABEL as P,
  STEP_OVER_ID as Q,
  STEP_INTO_LABEL as R,
  Source as S,
  Thread as T,
  STEP_INTO_ID as U,
  Variable as V,
  STEP_OUT_LABEL as W,
  STEP_OUT_ID as X,
  STEP_BACK_ID as Y,
  REVERSE_CONTINUE_ID as Z,
  DISCONNECT_AND_SUSPEND_ID as _,
  DEBUG_CONFIGURE_LABEL as a,
  debugInspectMemory as a$,
  debugGripper as a0,
  FOCUS_SESSION_ID as a1,
  RESTART_LABEL as a2,
  RESTART_SESSION_ID as a3,
  FOCUS_SESSION_LABEL as a4,
  callstackViewSession as a5,
  StackFrame as a6,
  ThreadAndSessionIds as a7,
  DEBUG_CONSOLE_QUICK_ACCESS_PREFIX as a8,
  SELECT_AND_START_ID as a9,
  CALLSTACK_UP_ID as aA,
  CALLSTACK_DOWN_LABEL as aB,
  CALLSTACK_DOWN_ID as aC,
  RESTART_FRAME_ID as aD,
  COPY_STACK_TRACE_ID as aE,
  EDIT_EXPRESSION_COMMAND_ID as aF,
  SET_EXPRESSION_COMMAND_ID as aG,
  REMOVE_EXPRESSION_COMMAND_ID as aH,
  debugRun as aI,
  debugConsoleViewIcon as aJ,
  runViewIcon as aK,
  variablesViewIcon as aL,
  watchViewIcon as aM,
  callStackViewIcon as aN,
  breakpointsViewIcon as aO,
  BreakpointsView as aP,
  loadedScriptsViewIcon as aQ,
  DEBUG_COMMAND_CATEGORY as aR,
  NEXT_DEBUG_CONSOLE_LABEL as aS,
  NEXT_DEBUG_CONSOLE_ID as aT,
  PREV_DEBUG_CONSOLE_LABEL as aU,
  PREV_DEBUG_CONSOLE_ID as aV,
  OPEN_LOADED_SCRIPTS_LABEL as aW,
  SHOW_LOADED_SCRIPTS_ID as aX,
  SELECT_DEBUG_CONSOLE_LABEL as aY,
  SELECT_DEBUG_SESSION_LABEL as aZ,
  SELECT_DEBUG_SESSION_ID as a_,
  openBreakpointSource as aa,
  getUriForDebugMemory as ab,
  ErrorScope as ac,
  Scope as ad,
  DEBUG_QUICK_ACCESS_PREFIX as ae,
  debugRemoveConfig as af,
  DEBUG_START_COMMAND_ID as ag,
  getUriFromSource as ah,
  debugConsoleEvaluationInput as ai,
  debugConsoleEvaluationPrompt as aj,
  debugConsoleClearAll as ak,
  watchExpressionsAdd as al,
  watchExpressionsRemoveAll as am,
  SELECT_DEBUG_CONSOLE_ID as an,
  TERMINATE_THREAD_ID as ao,
  STEP_INTO_TARGET_LABEL as ap,
  STEP_INTO_TARGET_ID as aq,
  FOCUS_REPL_ID as ar,
  JUMP_TO_CURSOR_ID as as,
  TOGGLE_INLINE_BREAKPOINT_ID as at,
  SELECT_AND_START_LABEL as au,
  CALLSTACK_TOP_LABEL as av,
  CALLSTACK_TOP_ID as aw,
  CALLSTACK_BOTTOM_LABEL as ax,
  CALLSTACK_BOTTOM_ID as ay,
  CALLSTACK_UP_LABEL as az,
  ExceptionBreakpoint as b,
  watchExpressionRemove as b0,
  DataBreakpoint as c,
  debugConfigure as d,
  Expression as e,
  DebugModel as f,
  DisassemblyViewInput as g,
  debugBreakpointHint as h,
  allBreakpoints as i,
  debugBreakpointUnsupported as j,
  breakpoint as k,
  debugStackframeFocused as l,
  debugStackframe as m,
  getBreakpointMessageAndIcon as n,
  debugStart as o,
  debugPause as p,
  debugStop as q,
  debugDisconnect as r,
  debugRestart as s,
  debugRestartFrame as t,
  debugStepOver as u,
  debugStepInto as v,
  debugStepOut as w,
  debugContinue as x,
  debugReverseContinue as y,
  debugStepBack as z
};
