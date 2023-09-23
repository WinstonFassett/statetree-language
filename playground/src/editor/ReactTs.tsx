import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import * as monaco from 'monaco-editor';
import { MonacoEditorReactComp } from '@typefox/monaco-editor-react';
import { UserConfig } from 'monaco-editor-wrapper';

import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js';
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js';
import { MonacoJsxSyntaxHighlight, getWorker } from 'monaco-jsx-syntax-highlight';
import './jsx.scss';

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
  console.log({ filename });
  const userConfig: UserConfig = {
    htmlElement: undefined as any,
    wrapperConfig: {
      serviceConfig: {
        enableKeybindingsService: true,
        debugLogging: true,
      },
      editorAppConfig: {
        $type: 'classic',
        languageId: language,
        useDiffEditor: false,
        theme: 'vs-dark',
        codeUri: filename ? `${filename}` : 'index.tsx',
        code,
      },
    },
  };

  const onTextChanged = (text: string, isDirty: boolean) => {
    console.log(`Dirty? ${isDirty} Content: ${text}`);
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
        const { editor } = (reactEditor as any).wrapper.editorApp;
        console.log({ editor });
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          jsx: monaco.languages.typescript.JsxEmit.Preserve,
          target: monaco.languages.typescript.ScriptTarget.ES2020,
          esModuleInterop: true,
        });

        const monacoJsxSyntaxHighlight = new MonacoJsxSyntaxHighlight(getWorker(), monaco);
        // editor is the result of monaco.editor.create
        const { highlighter, dispose } = monacoJsxSyntaxHighlight.highlighterBuilder({
          editor: editor,
        });
        // init highlight
        highlighter();

        editor.onDidChangeModelContent(() => {
          // content change, highlight
          highlighter();
        });

        return dispose;
      }}
      onTextChanged={onTextChanged}
    />
  );
}
