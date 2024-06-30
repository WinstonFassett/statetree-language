import { f6 as Action2, c as localize, f0 as IAudioCueService, as as IQuickInputService, hy as IPreferencesService, cN as IAccessibilityService, f4 as AudioCue, aK as ThemeIcon, aM as Codicon, gu as __decorate, gv as __param, D as Disposable, cv as observableFromEvent, vI as autorunWithStore, aq as toDisposable, vJ as IDebugService, a6 as DisposableStore, c6 as MarkerSeverity, vK as CachedFunction, cw as derived, on as isDiffEditor, bG as isCodeEditor, cC as autorun, vL as debouncedObservable, vM as wasEventTriggeredRecently, vN as autorunDelta, gx as IEditorService, b1 as IInstantiationService, ay as IConfigurationService, bo as Event, c3 as IMarkerService, f1 as constObservable, vO as observableFromPromise, Z as Registry, h1 as Extensions, _ as Extensions$1, bF as registerAction2, r5 as registerAssets, hh as SyncDescriptor, vP as AudioCueService } from "./theme-defaults-1df7f429.js";
import { v as FoldingController } from "./index-ca8d23e0.js";
import "./index-3bddf13b.js";
var audioAssets = {
  "vs/platform/audioCues/browser/media/break.mp3": new URL("/statetree-language/assets/break-6b46c048.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/chatRequestSent.mp3": new URL("/statetree-language/assets/chatRequestSent-c2af78e9.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/chatResponsePending.mp3": new URL("/statetree-language/assets/chatResponsePending-82dcf818.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/chatResponseReceived1.mp3": new URL("/statetree-language/assets/chatResponseReceived1-d5076496.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/chatResponseReceived2.mp3": new URL("/statetree-language/assets/chatResponseReceived2-3bbbf1e4.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/chatResponseReceived3.mp3": new URL("/statetree-language/assets/chatResponseReceived3-dae8868f.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/chatResponseReceived4.mp3": new URL("/statetree-language/assets/chatResponseReceived4-2e6b5f52.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/diffLineDeleted.mp3": new URL("/statetree-language/assets/diffLineDeleted-576ba12f.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/diffLineInserted.mp3": new URL("/statetree-language/assets/diffLineInserted-a5aae8f0.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/diffLineModified.mp3": new URL("/statetree-language/assets/diffLineModified-314716c3.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/error.mp3": new URL("/statetree-language/assets/error-b93c2a76.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/foldedAreas.mp3": new URL("/statetree-language/assets/foldedAreas-a6b54171.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/quickFixes.mp3": new URL("/statetree-language/assets/quickFixes-dc7d1e73.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/taskCompleted.mp3": new URL("/statetree-language/assets/taskCompleted-f0dd8e18.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/taskFailed.mp3": new URL("/statetree-language/assets/taskFailed-5494702a.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/terminalBell.mp3": new URL("/statetree-language/assets/terminalBell-ff9df1e1.mp3", self.location).href,
  "vs/platform/audioCues/browser/media/warning.mp3": new URL("/statetree-language/assets/warning-2687e2e7.mp3", self.location).href
};
const _ShowAudioCueHelp = class _ShowAudioCueHelp extends Action2 {
  constructor() {
    super({
      id: _ShowAudioCueHelp.ID,
      title: {
        value: localize("audioCues.help", "Help: List Audio Cues"),
        original: "Help: List Audio Cues"
      },
      f1: true
    });
  }
  async run(accessor) {
    const audioCueService = accessor.get(IAudioCueService);
    const quickPickService = accessor.get(IQuickInputService);
    const preferencesService = accessor.get(IPreferencesService);
    const accessibilityService = accessor.get(IAccessibilityService);
    const items = AudioCue.allAudioCues.map((cue, idx) => ({
      label: accessibilityService.isScreenReaderOptimized() ? `${cue.name}${audioCueService.isEnabled(cue) ? "" : " (" + localize("disabled", "Disabled") + ")"}` : `${audioCueService.isEnabled(cue) ? "$(check)" : "     "} ${cue.name}`,
      audioCue: cue,
      buttons: [{
        iconClass: ThemeIcon.asClassName(Codicon.settingsGear),
        tooltip: localize("audioCues.help.settings", "Enable/Disable Audio Cue")
      }]
    }));
    const quickPick = quickPickService.pick(items, {
      activeItem: items[0],
      onDidFocus: (item) => {
        audioCueService.playSound(item.audioCue.sound.getSound(true), true);
      },
      onDidTriggerItemButton: (context) => {
        preferencesService.openSettings({ query: context.item.audioCue.settingsKey });
      },
      placeHolder: localize("audioCues.help.placeholder", "Select an audio cue to play")
    });
    await quickPick;
  }
};
_ShowAudioCueHelp.ID = "audioCues.help";
let ShowAudioCueHelp = _ShowAudioCueHelp;
let AudioCueLineDebuggerContribution = class AudioCueLineDebuggerContribution2 extends Disposable {
  constructor(debugService, audioCueService) {
    super();
    this.audioCueService = audioCueService;
    const isEnabled = observableFromEvent(audioCueService.onEnabledChanged(AudioCue.onDebugBreak), () => audioCueService.isEnabled(AudioCue.onDebugBreak));
    this._register(autorunWithStore((reader, store) => {
      if (!isEnabled.read(reader)) {
        return;
      }
      const sessionDisposables = /* @__PURE__ */ new Map();
      store.add(toDisposable(() => {
        sessionDisposables.forEach((d) => d.dispose());
        sessionDisposables.clear();
      }));
      store.add(debugService.onDidNewSession((session) => sessionDisposables.set(session, this.handleSession(session))));
      store.add(debugService.onDidEndSession((session) => {
        var _a;
        (_a = sessionDisposables.get(session)) == null ? void 0 : _a.dispose();
        sessionDisposables.delete(session);
      }));
      debugService.getModel().getSessions().forEach((session) => sessionDisposables.set(session, this.handleSession(session)));
    }, "subscribe to debug sessions"));
  }
  handleSession(session) {
    return session.onDidChangeState((e) => {
      const stoppedDetails = session.getStoppedDetails();
      const BREAKPOINT_STOP_REASON = "breakpoint";
      if (stoppedDetails && stoppedDetails.reason === BREAKPOINT_STOP_REASON) {
        this.audioCueService.playAudioCue(AudioCue.onDebugBreak);
      }
    });
  }
};
AudioCueLineDebuggerContribution = __decorate([
  __param(0, IDebugService),
  __param(1, IAudioCueService)
], AudioCueLineDebuggerContribution);
let AudioCueLineFeatureContribution = class AudioCueLineFeatureContribution2 extends Disposable {
  constructor(editorService, instantiationService, audioCueService, _configurationService) {
    super();
    this.editorService = editorService;
    this.instantiationService = instantiationService;
    this.audioCueService = audioCueService;
    this._configurationService = _configurationService;
    this.store = this._register(new DisposableStore());
    this.features = [
      this.instantiationService.createInstance(MarkerLineFeature, AudioCue.error, MarkerSeverity.Error),
      this.instantiationService.createInstance(MarkerLineFeature, AudioCue.warning, MarkerSeverity.Warning),
      this.instantiationService.createInstance(FoldedAreaLineFeature),
      this.instantiationService.createInstance(BreakpointLineFeature)
    ];
    this.isEnabledCache = new CachedFunction(
      (cue) => observableFromEvent(this.audioCueService.onEnabledChanged(cue), () => this.audioCueService.isEnabled(cue))
    );
    const someAudioCueFeatureIsEnabled = derived("someAudioCueFeatureIsEnabled", (reader) => this.features.some((feature) => this.isEnabledCache.get(feature.audioCue).read(reader)));
    const activeEditorObservable = observableFromEvent(this.editorService.onDidActiveEditorChange, (_) => {
      const activeTextEditorControl = this.editorService.activeTextEditorControl;
      const editor = isDiffEditor(activeTextEditorControl) ? activeTextEditorControl.getOriginalEditor() : isCodeEditor(activeTextEditorControl) ? activeTextEditorControl : void 0;
      return editor && editor.hasModel() ? { editor, model: editor.getModel() } : void 0;
    });
    this._register(autorun("updateAudioCuesEnabled", (reader) => {
      this.store.clear();
      if (!someAudioCueFeatureIsEnabled.read(reader)) {
        return;
      }
      const activeEditor = activeEditorObservable.read(reader);
      if (activeEditor) {
        this.registerAudioCuesForEditor(activeEditor.editor, activeEditor.model, this.store);
      }
    }));
  }
  registerAudioCuesForEditor(editor, editorModel, store) {
    const curPosition = observableFromEvent(editor.onDidChangeCursorPosition, (args) => {
      if (args && args.reason !== 3 && args.reason !== 0) {
        return void 0;
      }
      return editor.getPosition();
    });
    const debouncedPosition = debouncedObservable(curPosition, this._configurationService.getValue("audioCues.debouncePositionChanges") ? 300 : 0, store);
    const isTyping = wasEventTriggeredRecently(editorModel.onDidChangeContent.bind(editorModel), 1e3, store);
    const featureStates = this.features.map((feature) => {
      const lineFeatureState = feature.getObservableState(editor, editorModel);
      const isFeaturePresent = derived(`isPresentInLine:${feature.audioCue.name}`, (reader) => {
        if (!this.isEnabledCache.get(feature.audioCue).read(reader)) {
          return false;
        }
        const position = debouncedPosition.read(reader);
        if (!position) {
          return false;
        }
        return lineFeatureState.read(reader).isPresent(position);
      });
      return derived(`typingDebouncedFeatureState:
${feature.audioCue.name}`, (reader) => feature.debounceWhileTyping && isTyping.read(reader) ? (debouncedPosition.read(reader), isFeaturePresent.get()) : isFeaturePresent.read(reader));
    });
    const state = derived("states", (reader) => ({
      lineNumber: debouncedPosition.read(reader),
      featureStates: new Map(this.features.map((feature, idx) => [
        feature,
        featureStates[idx].read(reader)
      ]))
    }));
    store.add(autorunDelta("Play Audio Cue", state, ({ lastValue, newValue }) => {
      const newFeatures = this.features.filter((feature) => {
        var _a;
        return (newValue == null ? void 0 : newValue.featureStates.get(feature)) && (!((_a = lastValue == null ? void 0 : lastValue.featureStates) == null ? void 0 : _a.get(feature)) || newValue.lineNumber !== lastValue.lineNumber);
      });
      this.audioCueService.playAudioCues(newFeatures.map((f) => f.audioCue));
    }));
  }
};
AudioCueLineFeatureContribution = __decorate([
  __param(0, IEditorService),
  __param(1, IInstantiationService),
  __param(2, IAudioCueService),
  __param(3, IConfigurationService)
], AudioCueLineFeatureContribution);
let MarkerLineFeature = class MarkerLineFeature2 {
  constructor(audioCue, severity, markerService) {
    this.audioCue = audioCue;
    this.severity = severity;
    this.markerService = markerService;
    this.debounceWhileTyping = true;
    this._previousLine = 0;
  }
  getObservableState(editor, model) {
    return observableFromEvent(Event.filter(this.markerService.onMarkerChanged, (changedUris) => changedUris.some((u) => u.toString() === model.uri.toString())), () => ({
      isPresent: (position) => {
        const lineChanged = position.lineNumber !== this._previousLine;
        this._previousLine = position.lineNumber;
        const hasMarker = this.markerService.read({ resource: model.uri }).some((m) => {
          const onLine = m.severity === this.severity && m.startLineNumber <= position.lineNumber && position.lineNumber <= m.endLineNumber;
          return lineChanged ? onLine : onLine && (position.lineNumber <= m.endLineNumber && m.startColumn <= position.column && m.endColumn >= position.column);
        });
        return hasMarker;
      }
    }));
  }
};
MarkerLineFeature = __decorate([
  __param(2, IMarkerService)
], MarkerLineFeature);
class FoldedAreaLineFeature {
  constructor() {
    this.audioCue = AudioCue.foldedArea;
  }
  getObservableState(editor, model) {
    const foldingController = FoldingController.get(editor);
    if (!foldingController) {
      return constObservable({
        isPresent: () => false
      });
    }
    const foldingModel = observableFromPromise(foldingController.getFoldingModel() ?? Promise.resolve(void 0));
    return foldingModel.map((v) => ({
      isPresent: (position) => {
        var _a;
        const regionAtLine = (_a = v.value) == null ? void 0 : _a.getRegionAtLine(position.lineNumber);
        const hasFolding = !regionAtLine ? false : regionAtLine.isCollapsed && regionAtLine.startLineNumber === position.lineNumber;
        return hasFolding;
      }
    }));
  }
}
let BreakpointLineFeature = class BreakpointLineFeature2 {
  constructor(debugService) {
    this.debugService = debugService;
    this.audioCue = AudioCue.break;
  }
  getObservableState(editor, model) {
    return observableFromEvent(this.debugService.getModel().onDidChangeBreakpoints, () => ({
      isPresent: (position) => {
        const breakpoints = this.debugService.getModel().getBreakpoints({ uri: model.uri, lineNumber: position.lineNumber });
        const hasBreakpoints = breakpoints.length > 0;
        return hasBreakpoints;
      }
    }));
  }
};
BreakpointLineFeature = __decorate([
  __param(0, IDebugService)
], BreakpointLineFeature);
Registry.as(Extensions.Workbench).registerWorkbenchContribution(AudioCueLineFeatureContribution, 3);
Registry.as(Extensions.Workbench).registerWorkbenchContribution(AudioCueLineDebuggerContribution, 3);
const audioCueFeatureBase = {
  "type": "string",
  "enum": ["auto", "on", "off"],
  "default": "auto",
  "enumDescriptions": [
    localize(
      "audioCues.enabled.auto",
      "Enable audio cue when a screen reader is attached."
    ),
    localize("audioCues.enabled.on", "Enable audio cue."),
    localize("audioCues.enabled.off", "Disable audio cue.")
  ],
  tags: ["accessibility"]
};
Registry.as(Extensions$1.Configuration).registerConfiguration({
  "properties": {
    "audioCues.enabled": {
      markdownDeprecationMessage: "Deprecated. Use the specific setting for each audio cue instead (`audioCues.*`).",
      tags: ["accessibility"]
    },
    "audioCues.volume": {
      "description": localize("audioCues.volume", "The volume of the audio cues in percent (0-100)."),
      "type": "number",
      "minimum": 0,
      "maximum": 100,
      "default": 70,
      tags: ["accessibility"]
    },
    "audioCues.debouncePositionChanges": {
      "description": localize(
        "audioCues.debouncePositionChanges",
        "Whether or not position changes should be debounced"
      ),
      "type": "boolean",
      "default": false,
      tags: ["accessibility"]
    },
    "audioCues.lineHasBreakpoint": {
      "description": localize(
        "audioCues.lineHasBreakpoint",
        "Plays a sound when the active line has a breakpoint."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.lineHasInlineSuggestion": {
      "description": localize(
        "audioCues.lineHasInlineSuggestion",
        "Plays a sound when the active line has an inline suggestion."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.lineHasError": {
      "description": localize(
        "audioCues.lineHasError",
        "Plays a sound when the active line has an error."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.lineHasFoldedArea": {
      "description": localize(
        "audioCues.lineHasFoldedArea",
        "Plays a sound when the active line has a folded area that can be unfolded."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.lineHasWarning": {
      "description": localize(
        "audioCues.lineHasWarning",
        "Plays a sound when the active line has a warning."
      ),
      ...audioCueFeatureBase,
      default: "off"
    },
    "audioCues.onDebugBreak": {
      "description": localize(
        "audioCues.onDebugBreak",
        "Plays a sound when the debugger stopped on a breakpoint."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.noInlayHints": {
      "description": localize(
        "audioCues.noInlayHints",
        "Plays a sound when trying to read a line with inlay hints that has no inlay hints."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.taskCompleted": {
      "description": localize("audioCues.taskCompleted", "Plays a sound when a task is completed."),
      ...audioCueFeatureBase
    },
    "audioCues.taskFailed": {
      "description": localize(
        "audioCues.taskFailed",
        "Plays a sound when a task fails (non-zero exit code)."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.terminalCommandFailed": {
      "description": localize(
        "audioCues.terminalCommandFailed",
        "Plays a sound when a terminal command fails (non-zero exit code)."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.terminalQuickFix": {
      "description": localize(
        "audioCues.terminalQuickFix",
        "Plays a sound when terminal Quick Fixes are available."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.diffLineInserted": {
      "description": localize(
        "audioCues.diffLineInserted",
        "Plays a sound when the focus moves to an inserted line in accessible diff viewer mode or to the next/previous change"
      ),
      ...audioCueFeatureBase
    },
    "audioCues.diffLineDeleted": {
      "description": localize(
        "audioCues.diffLineDeleted",
        "Plays a sound when the focus moves to a deleted line in accessible diff viewer mode or to the next/previous change"
      ),
      ...audioCueFeatureBase
    },
    "audioCues.diffLineModified": {
      "description": localize(
        "audioCues.diffLineModified",
        "Plays a sound when the focus moves to a modified line in accessible diff viewer mode or to the next/previous change"
      ),
      ...audioCueFeatureBase
    },
    "audioCues.notebookCellCompleted": {
      "description": localize(
        "audioCues.notebookCellCompleted",
        "Plays a sound when a notebook cell execution is successfully completed."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.notebookCellFailed": {
      "description": localize(
        "audioCues.notebookCellFailed",
        "Plays a sound when a notebook cell execution fails."
      ),
      ...audioCueFeatureBase
    },
    "audioCues.chatRequestSent": {
      "description": localize("audioCues.chatRequestSent", "Plays a sound when a chat request is made."),
      ...audioCueFeatureBase,
      default: "off"
    },
    "audioCues.chatResponsePending": {
      "description": localize(
        "audioCues.chatResponsePending",
        "Plays a sound on loop while the response is pending."
      ),
      ...audioCueFeatureBase,
      default: "auto"
    },
    "audioCues.chatResponseReceived": {
      "description": localize(
        "audioCues.chatResponseReceived",
        "Plays a sound on loop while the response has been received."
      ),
      ...audioCueFeatureBase,
      default: "off"
    }
  }
});
registerAction2(ShowAudioCueHelp);
registerAssets(audioAssets);
function getServiceOverride() {
  return {
    [IAudioCueService.toString()]: new SyncDescriptor(AudioCueService, [], true)
  };
}
export {
  getServiceOverride as default
};
