import {
  SandpackProvider,
  // ClasserProvider,
  SandpackPreview,
  useActiveCode,
  SandpackLayout,
  SandpackStack,
  FileTabs,
  useSandpack,
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
import { sendToSandpackBundlers } from "./sendToSandpackBundlers";

function addPrototypingResources (template: any = {}) {
  template.options ||= {}
  template.options.externalResources ||= []
  template.options.externalResources.push(
    "https://cdn.tailwindcss.com"
  )
  template.options.externalResources.push(
    "https://cdn.jsdelivr.net/npm/daisyui@3.1.6/dist/full.css"
  )            
}
const STATETREE_TEMPLATE: any = {
  files: {
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
  },
  customSetup: { 
    dependencies: { 
      "nanostores": "latest",
      "@nanostores/react": "latest",
      "@heroicons/react": "latest",
    }
  }
}
addPrototypingResources(STATETREE_TEMPLATE)

export default function StatetreeSandpackFiddle() {
  return (
    <SandpackProvider template="react" theme="dark" 
      customSetup={STATETREE_TEMPLATE.customSetup}
      files={STATETREE_TEMPLATE.files} options={STATETREE_TEMPLATE.options}>
      <SandpackLayout>
        <TheStack />
      </SandpackLayout>
    </SandpackProvider>
  );
}

function TheStack() {
  const { sandpack } = useSandpack();
  const model = useStore(store.model)
  const [state, machine] = useStateMachineContext()
  useEffect(() => {
    sendModelToSandpacks(model, sandpack);    
  },[model])
  // const { state } = machine
  const activeStates = useMemo(() => getActiveStates(state), [model?.states, machine.state])
  useEffect(() => {
    if (machine) {
      sandpack.updateFile('/state.json', JSON.stringify(machine.state?.name, null, 2))
      sendToSandpackBundlers(sandpack, {
        type: 'state',
        state: machine.state?.name
      });
    }
  }, [machine.state])
  const { code, updateCode } = useActiveCode();
  const { activeFile } = sandpack
  const language = activeFile && getLanguageOfFile(activeFile);

  return (
    <SandpackStack style={{ height: "100vh", margin: 0 }}>
      <div style={{ flex: 1 }}>
        <DockView />
      </div>
    </SandpackStack>
  );
}

function sendModelToSandpacks(model: Statemachine | undefined, sandpack) {
  if (model) {
    const xstate = generateXState(model);
    sandpack.updateFile('/machine.json', JSON.stringify(xstate, null, 2));
    sendToSandpackBundlers(sandpack, {
      type: 'model',
      model: xstate
    });
  }
}

function getActiveStates(state: State): State[] {
  const items: State[] = [];
  let aState: State | undefined = state;
  while (aState) {
    items.push(aState);
    aState = getParentState(aState);
  }
  return items.reverse();
}

