import { useState, lazy, Suspense } from "react";
import { State, Statemachine } from "../../src/language/generated/ast";
import { Visualization } from "./Visualization";

const Editor = lazy(
  () => import('./Editor').then(module => ({ default: module.Editor }))
);

export function Playground() {
  const [model, setModel] = useState<Statemachine>()
  return <div>
    <h2 className="text-3xl">Statetree Playground</h2>    
    {/* <Editor
        height="50vh"
        defaultLanguage="json"
        defaultValue={JSON.stringify({ abcd: 1234 }, null, 2)}
      /> */}
      <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'stretch' }}>
        <div style={{ flex: 1, paddingTop: 10 }}>
          <Suspense fallback={<div>Loading editor...</div>}>
            <Editor onModelCreated={(model) => { setModel(model) }} />
          </Suspense>          
        </div>
        <div style={{ flex: 1 }}>
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
