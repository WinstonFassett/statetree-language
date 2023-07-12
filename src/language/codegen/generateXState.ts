import { State, Statemachine } from '../generated/ast';

type Options = {
    generateInitialIfMissing?: boolean;
};

export function generateXState(model: Statemachine, options: Options = {}) {
    console.log('generateXState', { model, options });
    const initial = getInitialState(model, options);
    const states = mapStates(model.states, options);
    const machine = {
        initial,
        states
    };
    return machine;

    function getInitialState(model: Statemachine | State, { generateInitialIfMissing }: Options) {
        const { init } = model;
        if (init) {
            return init.ref?.name ?? init.$refText;
        }
        if (generateInitialIfMissing) {
            return model.states[0]?.name;
        }
        return undefined;
    }

    function mapStates(states: State[], options: Options) {
        return states.reduce((acc, state) => {
            const { name } = state;
            acc[name] = mapState(state, options);
            return acc;
        }, {} as Record<string, any>);
    }
    function mapState(state: State, options: Options) {
        const stateOut = {} as any;
        if (state.transitions?.length > 0) {
            stateOut.on = state.transitions.reduce((acc, tn) => {
                acc[tn.event] = tn.to?.ref?.name;
                // {
                //   target: tn.to?.ref?.name
                // }
                return acc;
            }, {} as any);
        }
        if (state.states && state.states.length > 0) {
            stateOut.initial = getInitialState(state, options);
            stateOut.states = mapStates(state.states, options);
        }
        return stateOut;
    }
}
