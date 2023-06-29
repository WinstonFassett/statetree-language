
import Editor, { OnMount } from "@monaco-editor/react";
import * as React from "react";
import { useCallback } from "react";
import "./MonacoEditorJsx.scss";

const defaultCode = `const test = () => {
  const num: number = 123

  return (
    <div className='test'>
      {num}
      <div render={<div style={'background: red;'}/>}/>
      <div props={num}></div>
    </div>
  )
}
`;
export default function MonacoEditorJsx() {
  const handleEditorDidMount1 = useCallback((editor: any, monaco: any) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      esModuleInterop: true
    });

    editor.onDidChangeModelContent(() => {
      // content change, highlight
      // highlighter();
    });

  }, []);

  const handleEditorDidMount: OnMount = async (monacoEditor, monaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      esModuleInterop: true
    });
    // monaco-jsx-highlighter depends on these (and monaco)
    const { default: traverse } = await import('@babel/traverse');
    const { parse } = await import('@babel/parser');
    // The star of the show =P
    const { default: MonacoJSXHighlighter, JSXTypes } = await import(
      'monaco-jsx-highlighter'
    );
    console.log({ MonacoJSXHighlighter })
    // Customize Babel directly
    const babelParse = (code: string) => parse(code, { sourceType: 'module', plugins: ['jsx'] });
    // Instantiate the highlighter
    const monacoJSXHighlighter = new MonacoJSXHighlighter(
      monaco,
      babelParse,
      traverse,
      monacoEditor,
    );
    // Start the JSX highlighting and get the dispose function
    monacoJSXHighlighter.highLightOnDidChangeModelContent();
    // Enhance monaco's editor.action.commentLine with JSX commenting and get its disposer
    monacoJSXHighlighter.addJSXCommentCommand();
    // You are all set.

    // Optional: customize the color font in JSX texts (style class JSXElement.JSXText.tastyPizza from ./index.css)
    JSXTypes.JSXText.options.inlineClassName = 'JSXElement.JSXText.tastyPizza';

    // More of this example's boilerplate
    monacoJSXHighlighter.highLightOnDidChangeModelContent();
    monacoJSXHighlighter.addJSXCommentCommand();
  }

  return (
    <Editor
      className={"editor"}
      height={"100vh"}
      onMount={handleEditorDidMount}
      theme={"vs-dark"}
      path={"file:///index.tsx"}
      defaultLanguage="typescript"
      options={{
        fontSize: 16,
        lineHeight: 28,
        automaticLayout: true
      }}
      defaultValue={defaultCode}
    />
  );
}
