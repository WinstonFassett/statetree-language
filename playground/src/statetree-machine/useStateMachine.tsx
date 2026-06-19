import constate from 'constate';
import { useRef } from 'react';
import { Statemachine } from '../../../src/language/generated/ast';
import { buildShapeFromAst } from '../../../src/language/codegen/buildShapeFromAst';
import { matchina, defineStates } from 'matchina';
import { useMachineMaybe } from 'matchina/react';

export const [StateMachineInstanceProvider, useStateMachineContext] = constate(useStateMachine)

export type StateMachineInstance = {
  state: { name: string } | undefined
  model: Statemachine | undefined
  events: string[]
  send(event: string): void
}

export function useStateMachine({ model }: { model: Statemachine | undefined }) {
  const machineRef = useRef<any>(null);
  const shapeKeysRef = useRef<string>('');

  if (model) {
    const shape = buildShapeFromAst(model);
    const transitionFingerprint = [...shape.transitions.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([s, m]) => `${s}:${[...m.entries()].map(([e, t]) => `${e}->${t}`).join(',')}`)
      .join(';');
    const shapeKeys = [...shape.states.keys()].sort().join(',') + '|' + transitionFingerprint;

    if (shapeKeys !== shapeKeysRef.current) {
      shapeKeysRef.current = shapeKeys;

      // Build transitions map: { [stateKey]: { [event]: targetKey } }
      const transitions: Record<string, Record<string, string>> = {};
      for (const [stateKey, eventMap] of shape.transitions) {
        transitions[stateKey] = {};
        for (const [event, target] of eventMap) {
          if (shape.states.has(target)) {
            transitions[stateKey][event] = target;
          }
        }
      }

      const stateKeys = [...shape.states.keys()];
      const initialKey = shape.initialKey || stateKeys[0];

      const states = defineStates(Object.fromEntries(stateKeys.map(k => [k, undefined])));
      machineRef.current = matchina(states, transitions, initialKey);
    }
  }

  const machine = machineRef.current;
  useMachineMaybe(machine);

  const stateKey: string | undefined = machine?.getState()?.key;
  const state = stateKey ? { name: stateKey } : undefined;
  const events: string[] = machine
    ? [...new Set(Object.values(machine.transitions as Record<string, Record<string, string>>).flatMap(t => Object.keys(t)))]
    : [];

  function send(event: string) {
    machine?.[event]?.();
  }

  return { state, send, model, events } satisfies StateMachineInstance;
}
