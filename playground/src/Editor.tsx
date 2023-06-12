import { MonacoEditorLanguageClientWrapper } from './generated/monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./generated/monaco-editor-workers/index.js";
// import monarchSyntax from "./syntaxes/statetree.monarch.js";
buildWorkerDefinition('./monaco-editor-workers/workers', new URL('', window.location.href).href, false);

import { VFC, useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.css';
import monarchSyntax from "../../syntaxes/statetree.monarch";
import example from '../../example/trafficlight.statetree?raw'
import workerURL from './generated/statetree-server-worker.js?url'


// monaco.languages.register({ id: 'statetree' })
// monaco.languages.setMonarchTokensProvider('statetree', monarchSyntax)
console.log('monaco', monaco)


MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');

const client = new MonacoEditorLanguageClientWrapper();
const editorConfig = client.getEditorConfig();
editorConfig.setMainLanguageId('statetree');

editorConfig.setMonarchTokensProvider(monarchSyntax);
editorConfig.setMainCode(example)
editorConfig.theme = 'vs-dark';
editorConfig.useLanguageClient = true;
editorConfig.useWebSocket = false;

// const workerURL = new URL('./generated/statetree-server-worker.js', import.meta.url);
console.log(workerURL);

const lsWorker = new Worker(workerURL, {
  type: 'classic',
  name: 'Statetree Language Server'
});
client.setWorker(lsWorker);

export const Editor: VFC = () => {
	// const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	const monacoEl = useRef(null);
  const monacoEditor = useRef<monaco.editor.IStandaloneCodeEditor | null | 'loading'>(null)
	useEffect(() => {
		if (monacoEl.current) {
      if (monacoEditor.current) return
      console.log('start editor')
      monacoEditor.current = 'loading'
      client.startEditor(monacoEl.current).then((editor: monaco.editor.IStandaloneCodeEditor) => {
        console.log('started', editor)
        monacoEditor.current = editor
      })
			// setEditor((editor) => {
			// 	if (editor) return editor;
        
			// 	return monaco.editor.create(monacoEl.current!, {
			// 		value: example,
			// 		language: 'statetree',
      //     readOnly: false,
	    //     theme: "vs-dark",
			// 	});
			// });
		}

		return () => {
      const { current } = monacoEditor
      if (current && current !== 'loading')  {
        current.dispose();
        monacoEditor.current = null
      }
    }
	}, [monacoEl.current]);

	return <div className={styles.Editor} ref={monacoEl}></div>;
};
