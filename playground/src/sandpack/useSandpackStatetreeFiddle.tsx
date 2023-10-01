import {
  useSandpack,
  SandpackState
} from "@codesandbox/sandpack-react";
import { useEffect } from "react";
import { State, Statemachine } from "../../../src/language/generated/ast";
import * as store from '../store';
import { useStore } from "@nanostores/react";
import { expandAst, generateXState } from "../../../src/language/codegen";
import { StateMachineInstance, useStateMachineContext } from "../statetree-machine/useStateMachine";
import { getParentState } from "../statetree-machine/getParentState";
import { sendToSandpackBundlers } from "./sendToSandpackBundlers";

export function useStatetreeSandpackFiddle() {
  const { sandpack } = useSandpack();
  const model = useStore(store.latestValidModel);
  const machine = useStateMachineContext();
  const { state } = machine
  const isDark = useStore(store.theme.dark)
  useEffect(() => { sendStateMachineToSandpack(model, sandpack); }, [model]);
  useEffect(() => { sendMachineToSandpacks(machine, sandpack); }, [machine.state]);
  useEffect(() => { sendToSandpackBundlers(sandpack, { type: 'dark', dark: isDark }); }, [isDark]);
  return { model, state, machine };
}
function sendMachineToSandpacks(machine: StateMachineInstance, sandpack: SandpackState) {
  if (machine) {
    // sandpack.updateFile('/state.json', JSON.stringify(machine.state?.name, null, 2));
    sendToSandpackBundlers(sandpack, {
      type: 'state',
      state: machine.state?.name
    });
  }
}
function sendStateMachineToSandpack(model: Statemachine | undefined, sandpack: SandpackState) {
  if (model) {
    // console.log('sendStateMachineToSandpack')
    const expanded = expandAst(model)
    // console.log({ model, expanded})
    const xstate = generateXState(expanded);
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
