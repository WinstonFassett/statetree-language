import {
  MonacoEditorReactComp,
  addMonacoStyles,
} from "@typefox/monaco-editor-react/bundle";
import { MonacoEditorLanguageClientWrapper, vscode } from './generated/monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./generated/monaco-editor-workers/index.js";
// import monarchSyntax from "./syntaxes/statetree.monarch.js";
// buildWorkerDefinition('./monaco-editor-workers/workers', new URL('', window.location.href).href, false);

import { VFC, useRef, useState, useEffect } from 'react';
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.css';
import monarchSyntax from "../../syntaxes/statetree.monarch";
import example from '../../example/trafficlight.statetree?raw'
import workerURL from './generated/statetree-server-worker.js?url'
import { DocumentChangeResponse } from './langium-utils/langium-ast.js';
import { useCallback } from "react";


// monaco.languages.register({ id: 'statetree' })
// monaco.languages.setMonarchTokensProvider('statetree', monarchSyntax)
// console.log('monaco', monaco)


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
	// const monacoEl = useRef(null);
  // const monacoEditor = useRef<monaco.editor.IStandaloneCodeEditor | null | 'loading'>(null)
  const reactMonacoEditor = useRef<MonacoEditorReactComp>(null);
  
  /**
   * Callback invoked when the document processed by the LS changes
   * Invoked on startup as well
   * @param resp Response data
   */
  const onDocumentChange = (resp: DocumentChangeResponse) => {
    // decode the received Ast
    console.log('change!', resp)
    // const statemachineAst = new LangiumAST().deserializeAST(resp.content) as StateMachineAstNode;
    // this.preview.current?.startPreview(statemachineAst, resp.diagnostics);
  }
  
  /**
   * Callback that is invoked when Monaco is finished loading up.
   * Can be used to safely register notification listeners, retrieve data, and the like
   *
   * @throws Error on inability to ref the Monaco component or to get the language client
   */
  const onMonacoLoad = () => {
    
    // verify we can get a ref to the language client
    const lc = reactMonacoEditor.current
      ?.getEditorWrapper()
      ?.getLanguageClient();
    if (!lc) {
      throw new Error("Could not get handle to Language Client on mount");
    }

    // register to receive DocumentChange notifications
    lc.onNotification("browser/DocumentChange", onDocumentChange);
  }

	// useEffect(() => {
	// 	if (monacoEl.current) {
  //     if (monacoEditor.current) return
  //     console.log('start editor')
  //     monacoEditor.current = 'loading'
      
  //     client.startEditor(monacoEl.current).then((editor: monaco.editor.IStandaloneCodeEditor) => {
  //       console.log('started', editor)
  //       monacoEditor.current = editor
        
  //       // verify we can get a ref to the language client
  //       const lc = monacoEditor.current
  //         ?.getEditorWrapper()
  //         ?.getLanguageClient();
  //       if (!lc) {
  //         throw new Error("Could not get handle to Language Client on mount");
  //       }

  //       // register to receive DocumentChange notifications
  //       lc.onNotification("browser/DocumentChange", onDocumentChange);
  //     })
	// 		// setEditor((editor) => {
	// 		// 	if (editor) return editor;
        
	// 		// 	return monaco.editor.create(monacoEl.current!, {
	// 		// 		value: example,
	// 		// 		language: 'statetree',
  //     //     readOnly: false,
	//     //     theme: "vs-dark",
	// 		// 	});
	// 		// });
	// 	}

	// 	return () => {
  //     const { current } = monacoEditor
  //     if (current && current !== 'loading')  {
  //       current.dispose();
  //       monacoEditor.current = null
  //     }
  //   }
	// }, [monacoEl.current]);
  const style = {
    height: "100%",
    width: "100%",
  };
	// return <div className={styles.Editor} ref={monacoEl}></div>;
  return <MonacoEditorReactComp
    ref={reactMonacoEditor}
    onLoad={onMonacoLoad}
    webworkerUri={workerURL}
    workerName="LS"
    workerType="classic"
    languageId="statemachine"
    text={example}
    syntax={monarchSyntax}
    style={style}
  />
};
