import Editor from '@monaco-editor/react';

export default function MonacoReactEditor () {
  return <div>
    {/* <h1>Monaco React Editor</h1> */}
    <Editor defaultValue={code} height="90vh" defaultLanguage='javascript' />
  </div>
}

const code = `
export default function App() {
  return <div className="bg-green-500 rounded m-2 p-4 text-3xl">
    <h1>World</h1>
  </div>
}  
`