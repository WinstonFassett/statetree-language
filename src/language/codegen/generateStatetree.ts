import { State, Statemachine, Transition } from "../generated/ast";
import {
  expandToNode as toNode,
  joinToNode as join,
  Generated,
  toString,
  Reference,
} from "langium";

export function generateStatetree(
  model: Statemachine,
  { source }: { source?: string } = {}
) {
  return toString(convertContainer(model));

  function convertContainer(container: Statemachine | State): Generated {
    switch (container.$type) {
      case "State":
        return convertState(container);
      case "Statemachine":
        const init = container.init;
        const initialStateNode = convertInitialState(init);
        return toNode`
                    ${convertStates(container.states)}
                `;
      default:
        break;
    }
    return toNode``;
  }

  function convertInitialState(init: Reference<State> | undefined) {
    const initStateName = init?.$refText ?? init?.ref!.name;
    return toNode``.appendIf(!!initStateName, `initialState ${initStateName}`);
  }

  function convertStates(states: State[] = []): Generated {
    const hasBlock = states?.length;
    return join(
      states,
      (state) => {
        return convertState(state);
      },
      { appendNewLineIfNotEmpty: true }
    );
  }

  function convertTransitions(transitions: Transition[]) {
    return join(
      transitions,
      (transition) => toNode`${transition.event} => ${transition.to?.$refText}`,
      { appendNewLineIfNotEmpty: true }
    );
  }

  function convertState(state: State): Generated {
    const hasBlock = state.states?.length > 0 || state.transitions?.length > 0;
    return toNode`
                ${state.name}
            `.appendIf(hasBlock, (node) => {
      node
        .append(
          toNode`
                {
                `
        )
        .indent((indentingNode) =>
          indentingNode
            .append(convertTransitions(state.transitions))
            .append(convertStates(state.states))
        )
        .append("}");
    });
  }
}
