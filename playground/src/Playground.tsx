// import Editor from '@monaco-editor/react';

import { useState } from "react";
import { Editor } from "./Editor";
import { State, Statemachine } from "../../src/language/generated/ast";
import { Visualization } from "./Visualization";

export function Playground() {
  const [model, setModel] = useState<Statemachine>()
  return <div>
    <h2>Playground</h2>
    {/* <Editor
        height="50vh"
        defaultLanguage="json"
        defaultValue={JSON.stringify({ abcd: 1234 }, null, 2)}
      /> */}
      <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'stretch' }}>
        <div style={{ flex: 1, wasbackground: 'green', paddingTop: 10 }}>
          <Editor onModelCreated={(model) => { setModel(model) }} />
        </div>
        <div style={{ flex: 1, wasbackground: 'black', color: 'white' }}>
          {!!model && <Visualization model={model} />}
        </div>
      </div>
  </div>
}

// function extractStates({ states }: { states: State[] }) {
//   if (states) {
//     return states.map(({ name, transitions }) => ({ 
//       name,
//       transitions: transitions?.map(transition) 
//     }))
//   }
// }
