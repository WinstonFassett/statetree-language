import {
  SandpackProvider,
  // ClasserProvider,
  SandpackPreview,
  useActiveCode,
  SandpackLayout,
  SandpackStack,
  FileTabs,
  useSandpack,
  SandpackState,
  REACT_TEMPLATE
} from "@codesandbox/sandpack-react";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { DockView } from "./DockView";
import { State, Statemachine } from "../../src/language/generated/ast";
import { getLanguageOfFile } from "./getLanguageOfFile";
import * as store from './store'
import { useStore } from "@nanostores/react";
import { generateXState } from "../../src/codegen";
import { useStateMachineContext } from "./useStateMachine";
import { getParentState } from "./getParentState";
import AppJS from './fiddle/App.js?raw'
export default function StatetreeSandpackFiddle() {
  // console.log({ window, globalThis})

  return (
    <SandpackProvider template="react" theme="dark" 
      customSetup={{ 
        dependencies: { 
          "nanostores": "latest",
          "@nanostores/react": "latest",
          "@heroicons/react": "latest",
        }
      }}
      files={{
'/App.js': AppJS,
'/styles.css': REACT_TEMPLATE.files["/styles.css"].code + `
html, body, #root { height: 100%; }
`,
'/Wrapper.js': `export default ({ children }) => (<h2>
  Hello {children}!
  </h2>)`,
'machine.statetree': '',
'machine.json': '{}',
'state.json': '"not_set"'
    }} options={{
      externalResources: [
        "https://cdn.tailwindcss.com",
        "https://cdn.jsdelivr.net/npm/daisyui@3.1.6/dist/full.css",
      ],
      // recompileDelay:
    }}>
      <SandpackLayout>
        {/* <DockView /> */}
        <TheStack />
        {/* 
        <SandpackPreview style={{ height: "100vh" }} /> */}
      </SandpackLayout>

    </SandpackProvider>
  );
}


function TheStack() {
  const { sandpack } = useSandpack();
  const model = useStore(store.model)
  const [state, machine] = useStateMachineContext()
  useEffect(() => {
    if (model) {
      const xstate = generateXState(model)
      // console.log({ xstate })
      sandpack.updateFile('/machine.json', JSON.stringify(xstate, null, 2))
      // console.log("update clients")
      sentToClients(sandpack, {
        type: 'model',
        model: xstate
      });
    }    
  },[model])
  const activeStates = useMemo(() => {
    const items: State[] = []
    let state: State | undefined = machine.state
    while (state) {
      items.push(state)
      state = getParentState(state)
    }
    return items.reverse()
  }, [model?.states, machine.state])
  useEffect(() => {
    if (machine) {
      // console.log('machine state', machine.state)
      sandpack.updateFile('/state.json', JSON.stringify(machine.state?.name, null, 2))
      sentToClients(sandpack, {
        type: 'state',
        state: machine.state?.name
      });
    }
  }, [machine.state])
  // const [model, setModel] = useState<Statemachine>()
  const { code, updateCode } = useActiveCode();
  const { activeFile } = sandpack
  const language = activeFile && getLanguageOfFile(activeFile);

  return (
    <SandpackStack style={{ height: "100vh", margin: 0 }}>
      {/* <FileTabs /> */}
      <div style={{ flex: 1, paddingTop: 8, background: "#1e1e1e" }}>
        {/* <Editor
          width="100%"
          height="100%"
          language={language}
          theme="vs-dark"
          key={sandpack.activeFile}
          defaultValue={code}
          onChange={(value) => updateCode(value || "")}
        /> */}
        {/* <Suspense fallback={<div>Loading editor...</div>}>
          <MonacoReactEditor key={sandpack.activeFile} 
            language={language}
            file={sandpack.activeFile}
            theme="vs-dark"
            code={code} 
            onChange={(value) => updateCode(value || "")} 
            onModelCreated={(model) => { setModel(model) }} 
          />
        </Suspense>         */}
        <DockView />
      </div>
    </SandpackStack>
  );
}
function sentToClients(sandpack: SandpackState, message: any) {
  Object.values(sandpack.clients).forEach((client) => {
    client.iframe.contentWindow?.postMessage(message, "*");    
  });
}

