import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { MonacoEditorReactComp } from './monaco-editor-react';
import { UserConfig } from 'monaco-editor-wrapper';

import 'vscode/default-extensions/theme-defaults'
import 'vscode/default-extensions/javascript'
import 'vscode/default-extensions/typescript-basics'
import 'vscode/default-extensions/json'
import 'vscode/default-extensions/theme-seti'
import 'vscode/default-extensions/references-view'
import * as vscode from 'vscode'

import '../userWorker'

export function ReactTs({
  code,
  filename,
  language = 'typescript',
  onChange,
}: {
  code: string;
  filename: string;
  language?: string;
  onChange?: (code: string, isDirty: boolean) => void;
}) {
  const ref = useRef<MonacoEditorReactComp>(null);
  console.log({ filename, language });
  const userConfig: UserConfig = {
    htmlElement: undefined as any,
    wrapperConfig: {
      useVscodeConfig: true,
      monacoVscodeApiConfig: {

      }
    },
    languageClientConfig: {
        enabled: false
    },  
    editorConfig: {
        uri: filename, //.endsWith('x') ? filename : (filename + 'x'),
        languageId: 'typescript',
        useDiffEditor: false,
        theme: 'vs-dark',
        automaticLayout: true,        
        code
    }
  };

  const onTextChanged = (text: string, isDirty: boolean) => {
    if (onChange) { onChange(text, isDirty) }
  };

  return (
    <MonacoEditorReactComp
      className="editor"
      ref={ref}
      userConfig={userConfig}
      style={{
        paddingTop: '5px',
        height: '90vh',
      }}
      onLoad={() => {
        const reactEditor = ref.current;
        const wrapper = (reactEditor!).getEditorWrapper();
        const editor = wrapper.getEditor()!
        const model = editor.getModel()
        console.log({ model, editor, wrapper });
      }}
      onTextChanged={onTextChanged}
    />
  );
}
