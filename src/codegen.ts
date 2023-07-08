import { State, Statemachine } from './language/generated/ast';

export function generateStatements(model: Statemachine) {
    return model.states.map(state => (`console.log('State: ${state.name}!');`));
}

export function generateAstCode(model: Statemachine) {
    return JSON.stringify(model, null, 2);
}

export function generateXState(model: Statemachine) {
    const initial = (model.init?.ref ?? model.states[0])?.name
    const states = mapStates(model.states)
    const machine = {
        initial,
        states
    }
    return machine
}

function mapStates(states: State[]) {
    return states.reduce((acc, state) => {
        const { name } = state;
        acc[name] = mapState(state);
        return acc;
    }, {} as Record<string, any>);
}   
function mapState (state: State) {
    const stateOut = {} as any
    if (state.transitions?.length > 0) {
        stateOut.on = state.transitions.reduce((acc, tn) => {
            acc[tn.event] = tn.to?.ref?.name
            // {
            //   target: tn.to?.ref?.name
            // }
            return acc
        }, {} as any)
    }
    if (state.states && state.states.length > 0) {            
        stateOut.initial = (state.init?.ref ?? state.states[0])?.name
        stateOut.states = mapStates(state.states)
    }
    return stateOut
}