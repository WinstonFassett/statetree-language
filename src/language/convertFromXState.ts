import type { State, Statemachine } from "./generated/ast";

type XStateState = {
  on?: Record<string, XStateStateRefOrTarget>;
  states?: Record<string, XStateState>;
};
type XStateStateRef = string;
type XStateStateRefOrTarget = XStateStateRef | { target: string; };

export function convertFromXState(xstate: any): Statemachine {
  const $container: Statemachine = {
    $type: "Statemachine",
    init: undefined,
    states: [],
  };
  importStates(xstate.states, $container);
  return $container;

  function importStates(states: Record<string, XStateState>, $container: Statemachine | State) {
    const stateKeys = Object.keys(states);
    stateKeys.forEach(key => {
      const stateIn = states[key];
      const state: State = {
        $container,
        $type: 'State',
        name: key,
        states: [],
        transitions: []
      };
      $container.states.push(state);
      const { on } = stateIn;
      if (on) {
        Object.keys(on).map(eventName => {
          const target = on[eventName];
          const to: XStateStateRefOrTarget = (typeof target === 'object') ? target.target : target;
          state.transitions.push({
            $container: state,
            $type: 'Transition',
            event: eventName,
            to: {
              $refText: to,
              $refNode: undefined
            },
          });
        });
      }
      // substates
      const substates = stateIn.states;
      if (substates) {
        const substateKeys = Object.keys(substates);
        if (substateKeys.length > 0) {
          importStates(substates, state);
        }
      }
    });
    // import state
    // import transitions
  }
}
