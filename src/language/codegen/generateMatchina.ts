import { State, Statemachine } from "../generated/ast";
import { expandAst } from "./expandAst";

/**
 * Generates Matchina (https://github.com/WinstonFassett/matchina) state machine
 * source code from a statetree AST.
 *
 * The statetree DSL has no concept of state data, so all generated states are
 * data-less (`Idle: undefined` / `data: () => ({})`). That is a known gap vs.
 * Matchina's TypeScript-first design.
 *
 * Three output modes, inferred from the AST shape (see {@link inferMode}):
 *   - "flat":      no nested states anywhere     -> matchina(...)
 *   - "flattened": nested states                 -> createHSM({ initial, states })
 *   - "nested":    nested states                 -> submachine() + nestedHsmRoot()
 *
 * For an HSM input the default is "flattened"; pass `mode: "nested"` for the
 * non-flattened submachine form.
 *
 * Output is built as plain strings with explicit 2-space indentation rather than
 * via Langium's `toNode` template tag — `toNode`'s indentation model does not
 * compose cleanly through nested interpolations and produced drifting indents.
 */

export type MatchinaMode = "flat" | "flattened" | "nested";

export type MatchinaOptions = {
  /** Force a specific output mode. Default: inferred from AST. */
  mode?: MatchinaMode;
};

const INDENT = "  ";

/** Indent every non-empty line of `text` by `level` units of two spaces. */
function indent(text: string, level: number): string {
  if (level <= 0) return text;
  const pad = INDENT.repeat(level);
  return text
    .split("\n")
    .map((line) => (line.length > 0 ? pad + line : line))
    .join("\n");
}

export function generateMatchina(
  model: Statemachine,
  options: MatchinaOptions = {}
): string {
  const expanded = expandAst(model);
  const mode = options.mode ?? inferMode(expanded);

  switch (mode) {
    case "flat":
      return generateFlat(expanded);
    case "flattened":
      return generateFlattened(expanded);
    case "nested":
      return generateNested(expanded);
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
// Mode: flat -> matchina(states, transitions, init)
// ---------------------------------------------------------------------------

function generateFlat(model: Statemachine): string {
  const states = model.states ?? [];
  const initial = getInitialState(model);

  const stateDefs = states.map((s) => `${INDENT}${s.name}: undefined,`).join("\n");
  const transitions = states.map((s) => indent(generateFlatTransitions(s), 1)).join("\n");
  const init = initial?.name ?? states[0]?.name ?? "";

  return [
    `import { matchina, defineStates } from "matchina";`,
    ``,
    `const states = defineStates({`,
    stateDefs,
    `});`,
    ``,
    `export const machine = matchina(states, {`,
    transitions,
    `}, "${init}");`,
    ``,
  ].join("\n");
}

function generateFlatTransitions(state: State): string {
  const ts = state.transitions ?? [];
  if (ts.length === 0) {
    return `${state.name}: {},`;
  }
  const body = ts
    .map((t) => `${INDENT}${quoteEvent(t.event)}: "${t.to?.ref?.name ?? t.to?.$refText}",`)
    .join("\n");
  return `${state.name}: {\n${body}\n},`;
}

// ---------------------------------------------------------------------------
// Mode: flattened -> createHSM({ initial, states })
// ---------------------------------------------------------------------------

function generateFlattened(model: Statemachine): string {
  const states = model.states ?? [];
  const initial = getInitialState(model);
  const init = initial?.name ?? states[0]?.name ?? "";

  const stateDefs = states.map((s) => indent(generateHsmState(s), 2)).join("\n");

  return [
    `import { createHSM } from "matchina";`,
    ``,
    `export const machine = createHSM({`,
    `${INDENT}initial: "${init}",`,
    `${INDENT}states: {`,
    stateDefs,
    `${INDENT}},`,
    `});`,
    ``,
  ].join("\n");
}

function generateHsmState(state: State): string {
  const children = state.states ?? [];
  const hasChildren = children.length > 0;

  const lines: string[] = [`${state.name}: {`];

  if (hasChildren) {
    const initial = getInitialState(state);
    const init = initial?.name ?? children[0]?.name ?? "";
    lines.push(`${INDENT}initial: "${init}",`);
    lines.push(`${INDENT}states: {`);
    lines.push(children.map((c) => indent(generateHsmState(c), 2)).join("\n"));
    lines.push(`${INDENT}},`);
  }

  const on = generateHsmOn(state);
  if (on) lines.push(indent(on, 1));

  lines.push(`},`);
  return lines.join("\n");
}

function generateHsmOn(state: State): string {
  const ts = state.transitions ?? [];
  if (ts.length === 0) return "";
  const body = ts
    .map((t) => `${INDENT}${quoteEvent(t.event)}: "${resolveHsmTarget(state, t.to?.ref)}",`)
    .join("\n");
  return `on: {\n${body}\n},`;
}

/**
 * Resolve a transition target to a Matchina flattened-HSM relative reference.
 *
 * Matchina's declarative config resolves names relative to the current parent.
 * - Same parent → bare name (e.g. "Green" from "On.Red" → "On.Green")
 * - Target is sibling of source's parent → "^Name" (escape one level up)
 * - Otherwise → FQN (absolute dot-notation, Matchina passes through unchanged)
 */
function resolveHsmTarget(source: State, target: State | undefined): string {
  if (!target) return "";
  // Sibling under the same parent → bare name
  if (source.$container === target.$container) {
    return target.name;
  }
  // Target is a sibling of the source's parent (one level up) → ^ escape
  if (source.$container && target.$container === (source.$container as State | Statemachine)?.$container) {
    return "^" + target.name;
  }
  // Fallback: absolute FQN (Matchina treats dot-containing strings as absolute)
  return getFQN(target);
}

// ---------------------------------------------------------------------------
// Mode: nested -> submachine() + nestedHsmRoot()
// ---------------------------------------------------------------------------

function generateNested(model: Statemachine): string {
  const states = model.states ?? [];
  // Each state with children becomes its own child machine factory.
  const factories = collectSubmachineStates(model);
  const init = getInitialState(model)?.name ?? states[0]?.name ?? "";

  const factoryDefs = factories.map((s) => generateNestedFactory(s)).join("\n\n");
  const rootStateDefs = states.map((s) => `${INDENT}${generateNestedStateDef(s)}`).join("\n");
  const rootTransitions = states.map((s) => indent(generateNestedRootTransitions(s), 2)).join("\n");

  return [
    `import { createMachine, defineStates } from "matchina";`,
    `import { submachine, nestedHsmRoot } from "matchina/hsm";`,
    ``,
    factoryDefs,
    ``,
    `const rootStates = defineStates({`,
    rootStateDefs,
    `});`,
    ``,
    `const root = createMachine(`,
    `${INDENT}rootStates,`,
    `${INDENT}{`,
    rootTransitions,
    `${INDENT}},`,
    `${INDENT}"${init}"`,
    `);`,
    ``,
    `export const machine = nestedHsmRoot(root);`,
    ``,
  ].join("\n");
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

function generateNestedFactory(state: State): string {
  const children = state.states ?? [];
  const initial = getInitialState(state);
  const init = initial?.name ?? children[0]?.name ?? "";

  const stateDefs = children.map((c) => `${INDENT.repeat(2)}${generateNestedStateDef(c)}`).join("\n");
  const transitions = children.map((c) => indent(generateNestedRootTransitions(c), 3)).join("\n");

  return [
    `function ${factoryName(state)}() {`,
    `${INDENT}const states = defineStates({`,
    stateDefs,
    `${INDENT}});`,
    `${INDENT}return createMachine(`,
    `${INDENT.repeat(2)}states,`,
    `${INDENT.repeat(2)}{`,
    transitions,
    `${INDENT.repeat(2)}},`,
    `${INDENT.repeat(2)}"${init}"`,
    `${INDENT});`,
    `}`,
  ].join("\n");
}

function generateNestedStateDef(state: State): string {
  if ((state.states?.length ?? 0) > 0) {
    return `${state.name}: submachine(${factoryName(state)}, { id: "${state.name}" }),`;
  }
  return `${state.name}: undefined,`;
}

function generateNestedRootTransitions(state: State): string {
  const ts = state.transitions ?? [];
  if (ts.length === 0) {
    return `${state.name}: {},`;
  }
  const body = ts
    .map((t) => `${INDENT}${quoteEvent(t.event)}: "${t.to?.ref?.name ?? t.to?.$refText}",`)
    .join("\n");
  return `${state.name}: {\n${body}\n},`;
}

// ---------------------------------------------------------------------------
// Misc
// ---------------------------------------------------------------------------

/** A valid JS identifier can be a bare key; anything else (e.g. "*") is quoted. */
function quoteEvent(event: string): string {
  return /^[A-Za-z_$][\w$]*$/.test(event) ? event : `"${event}"`;
}
