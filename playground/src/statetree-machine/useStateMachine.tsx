import constate from 'constate';
import { useRef } from 'react';
import { Statemachine } from '../../../src/language/generated/ast';
import { buildDefinitionFromAst } from '../../../src/language/codegen/buildDefinitionFromAst';
import { matchina, defineStates, createHSM } from 'matchina';
import { useMachineMaybe } from 'matchina/react';
import type { MachineShape } from 'matchina/shape';

export const [StateMachineInstanceProvider, useStateMachineContext] = constate(useStateMachine)

export type StateMachineInstance = {
  stateKey: string | undefined
  model: Statemachine | undefined
  events: string[]
  send(event: string): void
  /** The live Matchina machine (has `.shape`, `.getState()`, etc.). */
  machine: any
  /** Authoritative runtime shape, read from the live machine. */
  shape: MachineShape | undefined
}

/** Collect available events from the current state and all ancestor states (HSM parent fallback). */
function getAvailableActionsHsm(transitions: Record<string, Record<string, string>>, stateKey: string): string[] {
  const seen = new Set<string>();
  const events: string[] = [];
  const parts = stateKey.split('.');
  // walk from leaf up to root: On.Red → On → (root)
  for (let i = parts.length; i >= 1; i--) {
    const key = parts.slice(0, i).join('.');
    const t = transitions[key];
    if (t) {
      for (const event of Object.keys(t)) {
        if (!seen.has(event)) {
          seen.add(event);
          events.push(event);
        }
      }
    }
  }
  return events;
}

function isHsm(def: ReturnType<typeof buildDefinitionFromAst>): boolean {
  for (const parent of def.hierarchy.values()) {
    if (parent !== undefined) return true;
  }
  return false;
}

function buildHsmConfig(def: ReturnType<typeof buildDefinitionFromAst>): any {
  // Find root states (no parent)
  const rootKeys: string[] = [];
  for (const [fqn, parent] of def.hierarchy.entries()) {
    if (parent === undefined) rootKeys.push(fqn);
  }

  function buildNode(fqn: string): any {
    const node: any = {};
    // direct children
    const children: string[] = [];
    for (const [f, p] of def.hierarchy.entries()) {
      if (p === fqn) children.push(f);
    }
    if (children.length > 0) {
      // find initial child
      const initialChild = children.find(c => {
        const initial = def.initialKey;
        return initial === c || initial?.startsWith(c + '.');
      }) ?? children[0];
      node.initial = initialChild.split('.').pop();
      node.states = {};
      for (const child of children) {
        node.states[child.split('.').pop()!] = buildNode(child);
      }
    }
    const eventMap = def.transitions.get(fqn);
    if (eventMap && eventMap.size > 0) {
      node.on = {};
      const parentFqn = def.hierarchy.get(fqn); // undefined for root states
      for (const [event, target] of eventMap.entries()) {
        const targetParentFqn = def.hierarchy.get(target);
        if (targetParentFqn === parentFqn) {
          // target is a sibling of fqn — bare name (Matchina resolves relative to same level)
          node.on[event] = target.split('.').pop()!;
        } else if (targetParentFqn === def.hierarchy.get(parentFqn ?? '')) {
          // target is a sibling of fqn's parent — needs ^ escape
          node.on[event] = '^' + target.split('.').pop()!;
        } else {
          // fallback: use FQN (Matchina treats dot-containing strings as absolute)
          node.on[event] = target;
        }
      }
    }
    return node;
  }

  const states: any = {};
  for (const key of rootKeys) {
    states[key] = buildNode(key);
  }

  return { initial: def.initialKey.split('.')[0], states };
}

export function useStateMachine({ model }: { model: Statemachine | undefined }) {
  const machineRef = useRef<any>(null);
  const shapeKeysRef = useRef<string>('');

  if (model) {
    // AST → machine *definition* (structural data for construction). The
    // authoritative shape is read back off the live machine below, not here.
    const def = buildDefinitionFromAst(model);
    const transitionFingerprint = [...def.transitions.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([s, m]) => `${s}:${[...m.entries()].map(([e, t]) => `${e}->${t}`).join(',')}`)
      .join(';');
    const defKeys = [...def.states.keys()].sort().join(',') + '|' + transitionFingerprint;

    if (defKeys !== shapeKeysRef.current) {
      shapeKeysRef.current = defKeys;

      if (isHsm(def)) {
        const config = buildHsmConfig(def);
        machineRef.current = createHSM(config);
      } else {
        const transitions: Record<string, Record<string, string>> = {};
        for (const [stateKey, eventMap] of def.transitions) {
          transitions[stateKey] = {};
          for (const [event, target] of eventMap) {
            if (def.states.has(target)) {
              transitions[stateKey][event] = target;
            }
          }
        }
        const stateKeys = [...def.states.keys()];
        const initialKey = def.initialKey || stateKeys[0];
        const states = defineStates(Object.fromEntries(stateKeys.map(k => [k, undefined])));
        machineRef.current = matchina(states, transitions, initialKey);
      }
    }
  }

  const machine = machineRef.current;
  useMachineMaybe(machine);

  const stateKey: string | undefined = machine?.getState()?.key;
  // Authoritative runtime shape, straight off the live machine.
  const shape: MachineShape | undefined = machine?.shape?.getState();
  const events: string[] = machine && stateKey
    ? getAvailableActionsHsm(machine.transitions, stateKey)
    : [];

  function send(event: string) {
    machine?.send(event);
  }

  return { stateKey, send, model, events, machine, shape } satisfies StateMachineInstance;
}
