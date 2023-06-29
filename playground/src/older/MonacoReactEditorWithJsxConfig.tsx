import Editor from '@monaco-editor/react';
import reactTypesRaw from './react-types?raw'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export default function MonacoReactEditor (props: any) {
  return <div>
    {/* <h1>Monaco React Editor</h1> */}
    <Editor {...props} theme='vs-dark' defaultValue={code} height="90vh" defaultLanguage='javascript' onMount={(editor, monaco) => {
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.Latest,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        noEmit: true,
        esModuleInterop: true,
        jsx: monaco.languages.typescript.JsxEmit.React,
        reactNamespace: "React",
        allowJs: true,
        typeRoots: ["node_modules/@types"],
      });
    
      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
      });
      
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        reactTypesRaw,
        `file:///node_modules/@react/types/index.d.ts`
      );
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