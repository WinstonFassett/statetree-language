import Editor, { OnChange, Monaco } from '@monaco-editor/react';
import { useStore } from '@nanostores/react';
import type MonacoEditor from 'monaco-editor';
import type * as monacoApi from 'monaco-editor/esm/vs/editor/editor.api';
import { theme } from '../store';
type MonacoApi = typeof monacoApi

export default function MonacoReactEditor (props: { code: string, onChange: OnChange, language: string }) {
  const { code, language = 'javascript', ...editorProps } = props
  const isDark = useStore(theme.dark)
  return <div>
    <Editor theme={isDark ? "vs-dark" : "vs-light" } {...editorProps} value={code} height="90vh" defaultLanguage={language} onMount={async (monacoEditor, monaco) => {
      if (language in ['javascript', 'typescript']) {
        await loadJSXHighlighter(monaco, monacoEditor);
      }
    }} />
  </div>
}

async function loadJSXHighlighter(monaco: MonacoApi, monacoEditor: MonacoEditor.editor.IStandaloneCodeEditor) {
  //@ts-ignore
  const { default: traverse } = await import('@babel/traverse');
  const { parse } = await import('@babel/parser');
  //@ts-ignore
  const { default: MonacoJSXHighlighter } = await import('monaco-jsx-highlighter');
  import('./MonacoJsxSyntaxHighlighter.css')
  const monacoJSXHighlighter = new MonacoJSXHighlighter(monaco, parse, traverse, monacoEditor)
  monacoJSXHighlighter.highlightOnDidChangeModelContent();
  monacoJSXHighlighter.addJSXCommentCommand();

  return { monacoJSXHighlighter };
}
