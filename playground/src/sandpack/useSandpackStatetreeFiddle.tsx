import {
  useSandpack,
  SandpackState
} from "@codesandbox/sandpack-react";
import { useEffect } from "react";
import { Statemachine } from "../../../src/language/generated/ast";
import * as store from '../store';
import { useStore } from "@nanostores/react";
import { expandAst, generateMatchina } from "../../../src/language/codegen";
import { StateMachineInstance, useStateMachineContext } from "../statetree-machine/useStateMachine";
import { sendToSandpackBundlers } from "./sendToSandpackBundlers";

export function useStatetreeSandpackFiddle() {
  const { sandpack } = useSandpack();
  const model = useStore(store.latestValidModel);
  const machine = useStateMachineContext();
  const isDark = useStore(store.theme.dark);
  useEffect(() => { sendStateMachineToSandpack(model, machine, sandpack); }, [model]);
  useEffect(() => { sendMachineToSandpacks(machine, sandpack); }, [machine.stateKey]);
  useEffect(() => { sendToSandpackBundlers(sandpack, { type: 'dark', dark: isDark }); }, [isDark]);
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.data?.type === 'send') machine.send(event.data.event);
      if (event.data?.type === 'ready') {
        sendMachineToSandpacks(machine, sandpack);
        if (model) sendStateMachineToSandpack(model, machine, sandpack);
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [machine, model]);
  return { model, machine };
}

function sendMachineToSandpacks(machine: StateMachineInstance, sandpack: SandpackState) {
  sendToSandpackBundlers(sandpack, {
    type: 'state',
    state: machine.stateKey,
    events: machine.events,
  });
}

function sendStateMachineToSandpack(model: Statemachine | undefined, machine: StateMachineInstance, sandpack: SandpackState) {
  if (model) {
    const expanded = expandAst(model);
    sandpack.updateFile('/machine.matchina.ts', generateMatchina(expanded));
    sendToSandpackBundlers(sandpack, {
      type: 'model',
      model: generateMatchina(expanded),
      events: machine.events,
    });
  }
}
