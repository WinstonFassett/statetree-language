import {
  expandToNode as toNode,
  joinToNode as join,
  toString,
  Generated,
} from "langium";
import { State, Statemachine } from "../generated/ast";
import { expandAst } from "./expandAst";

/**
 * Generates Matchina (https://github.com/WinstonFassett/matchina) state machine
 * source code from a statetree AST.
 *
 * The statetree DSL has no concept of state data, so all generated states are
 * data-less (`Idle: undefined` / `data: () => ({})`). That is a known gap vs.
 * Matchina's TypeScript-first design — see MATCHINA_SPIKE_NOTES.md.
 *
 * Three output modes, inferred from the AST shape (see {@link inferMode}):
 *   - "flat":     no nested states anywhere      -> createMachine(...)
 *   - "flattened": nested states                 -> createHSM({ initial, states })
 *   - "nested":    nested states                 -> submachine() + nestedHsmRoot()
 *
 * For an HSM input the default is "flattened"; pass `mode: "nested"` for the
 * non-flattened submachine form.
 */

export type MatchinaMode = "flat" | "flattened" | "nested";

export type MatchinaOptions = {
  /** Force a specific output mode. Default: inferred from AST. */
  mode?: MatchinaMode;
};

export function generateMatchina(
  model: Statemachine,
  options: MatchinaOptions = {}
): string {
  const expanded = expandAst(model);
  const mode = options.mode ?? inferMode(expanded);

  switch (mode) {
    case "flat":
      return toString(generateFlat(expanded));
    case "flattened":
      return toString(generateFlattened(expanded));
    case "nested":
      return toString(generateNested(expanded));
  }
}

/** A machine is hierarchical iff any state has child states. */
export function inferMode(model: Statemachine): MatchinaMode {
  return hasNestedStates(model) ? "flattened" : "flat";
}

function hasNestedStates(model: State | Statemachine): boolean {
  return (model.states ?? []).some(
    (s) => (s.states?.length ?? 0) > 0 || hasNestedStates(s)
  );
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function getInitialState(state: State | Statemachine): State | undefined {
  return state.init?.ref ?? state.states?.[0];
}

/** Fully-qualified dotted name of a state, e.g. "On.Red". */
function getFQN(state: State): string {
  const path: string[] = [];
  let node: State | Statemachine | undefined = state;
  while (node && "name" in node && node.name) {
    path.unshift(node.name);
    node = node.$container as State | Statemachine | undefined;
  }
  return path.join(".");
}

// ---------------------------------------------------------------------------
// Mode: flat -> createMachine(states, transitions, init)
// ---------------------------------------------------------------------------

function generateFlat(model: Statemachine): Generated {
  const states = model.states ?? [];
  const initial = getInitialState(model);

  return toNode`
import { createMachine, defineStates } from "matchina";

const states = defineStates({
  ${join(states, (s) => toNode`${s.name}: undefined,`, {
    appendNewLineIfNotEmpty: true,
  })}
});

const transitions = {
  ${join(states, (s) => generateFlatTransitions(s), {
    appendNewLineIfNotEmpty: true,
  })}
};

export const machine = createMachine(states, transitions, "${
    initial?.name ?? states[0]?.name ?? ""
  }");
`;
}

function generateFlatTransitions(state: State): Generated {
  const ts = state.transitions ?? [];
  if (ts.length === 0) {
    return toNode`${state.name}: {},`;
  }
  return toNode`${state.name}: {
  ${join(
    ts,
    (t) => toNode`${quoteEvent(t.event)}: "${t.to?.ref?.name ?? t.to?.$refText}",`,
    { appendNewLineIfNotEmpty: true }
  )}
  },`;
}

// ---------------------------------------------------------------------------
// Mode: flattened -> createHSM({ initial, states })
// ---------------------------------------------------------------------------

function generateFlattened(model: Statemachine): Generated {
  const states = model.states ?? [];
  const initial = getInitialState(model);

  return toNode`
import { createHSM } from "matchina";

export const machine = createHSM({
  initial: "${initial?.name ?? states[0]?.name ?? ""}",
  states: {
    ${join(states, (s) => generateHsmState(s), {
      appendNewLineIfNotEmpty: true,
    })}
  },
});
`;
}

function generateHsmState(state: State): Generated {
  const children = state.states ?? [];
  const transitions = state.transitions ?? [];
  const hasChildren = children.length > 0;
  const initial = getInitialState(state);

  return toNode`${state.name}: {
  ${
    hasChildren
      ? toNode`initial: "${initial?.name ?? children[0]?.name ?? ""}",
  states: {
    ${join(children, (c) => generateHsmState(c), {
      appendNewLineIfNotEmpty: true,
    })}
  },`
      : toNode``
  }
  ${generateHsmOn(state)}
  },`;
}

function generateHsmOn(state: State): Generated {
  const ts = state.transitions ?? [];
  if (ts.length === 0) return toNode``;
  return toNode`on: {
  ${join(
    ts,
    (t) => toNode`${quoteEvent(t.event)}: "${resolveHsmTarget(state, t.to?.ref)}",`,
    { appendNewLineIfNotEmpty: true }
  )}
  },`;
}

/**
 * Resolve a transition target to a Matchina flattened-HSM relative reference.
 *
 * Matchina resolves child names relative to the current parent, and `^` escapes
 * one level up. statetree references are absolute (by AST node), so we compute
 * the target relative to the source state's parent.
 *
 * NOTE: trafficlight.statetree does not exercise cross-level jumps; this handles
 * sibling targets and same-level targets. Deeper cross-subtree jumps fall back
 * to the bare target name and are flagged in MATCHINA_SPIKE_NOTES.md.
 */
function resolveHsmTarget(source: State, target: State | undefined): string {
  if (!target) return "";
  // Sibling under the same parent -> bare name (Matchina resolves relatively).
  if (source.$container === target.$container) {
    return target.name;
  }
  // Fallback: emit FQN so it is at least inspectable. Flagged for follow-up.
  return getFQN(target);
}

// ---------------------------------------------------------------------------
// Mode: nested -> submachine() + nestedHsmRoot()
// ---------------------------------------------------------------------------

function generateNested(model: Statemachine): Generated {
  const states = model.states ?? [];
  // Each state with children becomes its own child machine factory.
  const factories = collectSubmachineStates(model);

  return toNode`
import { createMachine, defineStates } from "matchina";
import { submachine, nestedHsmRoot } from "matchina/hsm";

${join(factories, (s) => generateNestedFactory(s), {
    appendNewLineIfNotEmpty: true,
  })}

const rootStates = defineStates({
  ${join(states, (s) => generateNestedStateDef(s), {
    appendNewLineIfNotEmpty: true,
  })}
});

const root = createMachine(
  rootStates,
  {
    ${join(states, (s) => generateNestedRootTransitions(s), {
      appendNewLineIfNotEmpty: true,
    })}
  },
  "${getInitialState(model)?.name ?? states[0]?.name ?? ""}"
);

export const machine = nestedHsmRoot(root);
`;
}

function collectSubmachineStates(model: State | Statemachine): State[] {
  const out: State[] = [];
  for (const s of model.states ?? []) {
    if ((s.states?.length ?? 0) > 0) {
      out.push(s);
      out.push(...collectSubmachineStates(s));
    }
  }
  return out;
}

function factoryName(state: State): string {
  return `create${getFQN(state).split(".").join("")}`;
}

function generateNestedFactory(state: State): Generated {
  const children = state.states ?? [];
  const initial = getInitialState(state);

  return toNode`
function ${factoryName(state)}() {
  const states = defineStates({
    ${join(children, (c) => generateNestedStateDef(c), {
      appendNewLineIfNotEmpty: true,
    })}
  });
  return createMachine(
    states,
    {
      ${join(children, (c) => generateNestedRootTransitions(c), {
        appendNewLineIfNotEmpty: true,
      })}
    },
    "${initial?.name ?? children[0]?.name ?? ""}"
  );
}
`;
}

function generateNestedStateDef(state: State): Generated {
  if ((state.states?.length ?? 0) > 0) {
    return toNode`${state.name}: submachine(${factoryName(state)}, { id: "${state.name}" }),`;
  }
  return toNode`${state.name}: undefined,`;
}

function generateNestedRootTransitions(state: State): Generated {
  const ts = state.transitions ?? [];
  if (ts.length === 0) {
    return toNode`${state.name}: {},`;
  }
  return toNode`${state.name}: {
  ${join(
    ts,
    (t) => toNode`${quoteEvent(t.event)}: "${t.to?.ref?.name ?? t.to?.$refText}",`,
    { appendNewLineIfNotEmpty: true }
  )}
  },`;
}

// ---------------------------------------------------------------------------
// Misc
// ---------------------------------------------------------------------------

/** A valid JS identifier can be a bare key; anything else (e.g. "*") is quoted. */
function quoteEvent(event: string): string {
  return /^[A-Za-z_$][\w$]*$/.test(event) ? event : `"${event}"`;
}
