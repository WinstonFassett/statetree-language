// import Editor from '@monaco-editor/react';

import { Editor } from "./Editor";

export function Playground() {
  return <div>
    <h2>Playground</h2>
    {/* <Editor
        height="50vh"
        defaultLanguage="json"
        defaultValue={JSON.stringify({ abcd: 1234 }, null, 2)}
      /> */}
      <Editor />
  </div>
}