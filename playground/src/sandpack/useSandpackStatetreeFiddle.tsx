import {
  useSandpack,
  SandpackState
} from "@codesandbox/sandpack-react";
import { useEffect, useRef } from "react";
import { Statemachine } from "../../../src/language/generated/ast";
import * as store from '../store';
import { useStore } from "@nanostores/react";
import { expandAst, generateMatchina, generateXState } from "../../../src/language/codegen";
import { StateMachineInstance, useStateMachineContext } from "../statetree-machine/useStateMachine";
import { sendToSandpackBundlers } from "./sendToSandpackBundlers";

export function useStatetreeSandpackFiddle() {
  const { sandpack } = useSandpack();
  const model = useStore(store.latestValidModel);
  const machine = useStateMachineContext();
  const isDark = useStore(store.theme.dark);

  // Keep the latest machine/model/sandpack in a ref so the `message` listener
  // (attached once) always reads current values without being torn down and
  // re-added every render. The `machine` object is a fresh literal each render,
  // so a deps-based listener churns constantly and can miss the iframe's
  // `ready` ping during a rebundle/reload — which left the preview blank after
  // editing code. The ref makes the listener stable and the handler current.
  const latest = useRef({ machine, model, sandpack });
  latest.current = { machine, model, sandpack };

  useEffect(() => { sendStateMachineToSandpack(model, machine, sandpack); }, [model]);
  useEffect(() => { sendMachineToSandpacks(machine, sandpack); }, [machine.stateKey]);
  useEffect(() => { sendToSandpackBundlers(sandpack, { type: 'dark', dark: isDark }); }, [isDark]);
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const { machine, model, sandpack } = latest.current;
      if (event.data?.type === 'send') machine.send(event.data.event);
      if (event.data?.type === 'ready') {
        sendMachineToSandpacks(machine, sandpack);
        if (model) sendStateMachineToSandpack(model, machine, sandpack);
        sendToSandpackBundlers(sandpack, { type: 'dark', dark: store.theme.dark.get() });
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);
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
    sandpack.updateFile('/machine.json', JSON.stringify(generateXState(expanded), null, 2));
    sendToSandpackBundlers(sandpack, {
      type: 'model',
      model: generateMatchina(expanded),
      events: machine.events,
    });
  }
}
