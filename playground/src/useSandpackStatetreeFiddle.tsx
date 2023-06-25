import {
  useSandpack,
  SandpackState
} from "@codesandbox/sandpack-react";
import { useEffect } from "react";
import { State, Statemachine } from "../../src/language/generated/ast";
import * as store from './store';
import { useStore } from "@nanostores/react";
import { generateXState } from "../../src/codegen";
import { StateMachineInstance, useStateMachineContext } from "./useStateMachine";
import { getParentState } from "./getParentState";
import { sendToSandpackBundlers } from "./sendToSandpackBundlers";

export function useStatetreeSandpackFiddle() {
  const { sandpack } = useSandpack();
  const model = useStore(store.model);
  const [state, machine] = useStateMachineContext();
  useEffect(() => { sendStateMachineToSandpack(model, sandpack); }, [model]);
  useEffect(() => { sendMachineToSandpacks(machine, sandpack); }, [machine.state]);
  return { model, state, machine };
}
function sendMachineToSandpacks(machine: StateMachineInstance, sandpack: SandpackState) {
  if (machine) {
    sandpack.updateFile('/state.json', JSON.stringify(machine.state?.name, null, 2));
    sendToSandpackBundlers(sandpack, {
      type: 'state',
      state: machine.state?.name
    });
  }
}
function sendStateMachineToSandpack(model: Statemachine | undefined, sandpack: SandpackState) {
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
