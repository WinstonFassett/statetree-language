import type { MachineShape, StateNode } from "matchina/shape";
import { State, Statemachine } from "../generated/ast";
import { expandAst } from "./expandAst";

/**
 * Build a Matchina MachineShape directly from the statetree AST.
 * Uses the same logic as generateMatchina but emits a MachineShape
 * instead of source code — usable for SvgInspector without live execution.
 */
export function buildShapeFromAst(model: Statemachine): MachineShape {
  const expanded = expandAst(model);
  const states = new Map<string, StateNode>();
  const transitions = new Map<string, Map<string, string>>();
  const hierarchy = new Map<string, string | undefined>();

  function walk(node: State | Statemachine, parentFqn?: string) {
    const children = node.states ?? [];
    const isCompound = children.length > 0;

    if ("name" in node && node.name) {
      const fqn = parentFqn ? `${parentFqn}.${node.name}` : node.name;
      states.set(fqn, {
        key: node.name,
        fullKey: fqn,
        isFinal: (node.transitions?.length ?? 0) === 0 && !isCompound,
        isCompound,
      });
      hierarchy.set(fqn, parentFqn);

      const trans = new Map<string, string>();
      for (const t of node.transitions ?? []) {
        const target = t.to?.ref;
        if (target) {
          // Resolve target to FQN by walking up to find it
          const targetFqn = resolveTargetFqn(target, parentFqn);
          trans.set(t.event, targetFqn);
        }
      }
      transitions.set(fqn, trans);

      for (const child of children) {
        walk(child, fqn);
      }
    } else {
      // Root Statemachine node — no name, just walk children
      hierarchy.set("", undefined);
      for (const child of children) {
        walk(child, undefined);
      }
    }
  }

  walk(expanded);

  const initialKey = getInitialFqn(expanded, undefined) ?? "";

  return { states, transitions, hierarchy, initialKey };
}

function getInitialFqn(
  node: State | Statemachine,
  parentFqn: string | undefined
): string | undefined {
  const init = node.init?.ref ?? node.states?.[0];
  if (!init) return undefined;
  return parentFqn ? `${parentFqn}.${init.name}` : init.name;
}

function resolveTargetFqn(target: State, sourceParentFqn: string | undefined): string {
  // Walk up $container chain to compute full path
  const path: string[] = [];
  let node: State | Statemachine | undefined = target;
  while (node && "name" in node && node.name) {
    path.unshift(node.name);
    node = node.$container as State | Statemachine | undefined;
  }
  return path.join(".");
}
