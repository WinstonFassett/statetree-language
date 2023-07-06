import { MonacoEditorLanguageClientWrapper } from './monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./monaco-editor-workers/index.js";
import monarchSyntax from "./syntaxes/statetree.monarch.js";

buildWorkerDefinition('./monaco-editor-workers/workers', new URL('', window.location.href).href, false);

MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');

const client = new MonacoEditorLanguageClientWrapper();
const editorConfig = client.getEditorConfig();
editorConfig.setMainLanguageId('statetree');

editorConfig.setMonarchTokensProvider(monarchSyntax);

editorConfig.setMainCode(`
statemachine TrafficLight

initialState Unpowered

state Powered
  powerFailed => Unpowered

  state Green
    tick => Powered.Yellow
  end

  state Yellow
    tick => Powered.Red
  end
  state Red
    tick => Powered.Green
  end
end
state Unpowered
  powerRestored => Powered

  state Red_On
    tick => Unpowered.Red_Off
  end
  state Red_Off
    tick => Unpowered.Red_On
  end
end
`);

editorConfig.theme = 'vs-dark';
editorConfig.useLanguageClient = true;
editorConfig.useWebSocket = false;

const workerURL = new URL('./statetree-server-worker.js', import.meta.url);
console.log(workerURL.href);

const lsWorker = new Worker(workerURL.href, {
    type: 'classic',
    name: 'Statetree Language Server'
});
client.setWorker(lsWorker);

// keep a reference to a promise for when the editor is finished starting, we'll use this to setup the canvas on load
const startingPromise = client.startEditor(document.getElementById("monaco-editor-root"));
