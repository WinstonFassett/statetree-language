import Editor from '@monaco-editor/react';
import type MonacoEditor from 'monaco-editor';
import type * as monacoApi from 'monaco-editor/esm/vs/editor/editor.api';
type MonacoApi = typeof monacoApi

export default function MonacoReactEditor (props: any) {
  return <div>
    <h1>Monaco React Editor</h1>
    <Editor defaultValue={code} height="90vh" defaultLanguage='javascript' onMount={async (monacoEditor, monaco) => {
      return await loadJSXHighlighter(monaco, monacoEditor);
    }} />
  </div>
}

const code = `
export default function App() {
  return <div className="bg-green-500 rounded m-2 p-4 text-3xl">
    <h1>World</h1>
    <pre></pre>
    <Thing name="Test" />
  </div>
}  

function Thing ({ name }) {
  return <div>ok</div>
}
`

async function loadJSXHighlighter(monaco: MonacoApi, monacoEditor: MonacoEditor.editor.IStandaloneCodeEditor) {
  const { default: traverse } = await import('@babel/traverse');
  const { parse } = await import('@babel/parser');
  const { default: MonacoJSXHighlighter } = await import(
    'monaco-jsx-highlighter'
  );

  const monacoJSXHighlighter = new MonacoJSXHighlighter(
    monaco,
    parse,
    traverse,
    monacoEditor
  );

  monacoJSXHighlighter.highlightOnDidChangeModelContent();
  monacoJSXHighlighter.addJSXCommentCommand();

  return {
    monacoJSXHighlighter,
  };
}
