import { Statemachine } from '../generated/ast';


export function generateJavaScript(model: Statemachine) {
    return model.states.map(state => (`console.log('State: ${state.name}!');`));
}
