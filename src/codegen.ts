import { Statemachine } from './language/generated/ast';

export function generateStatements(model: Statemachine) {
    // model.states.forEach(state => fileNode.append(`console.log('State: ${state.name}!');`, NL));
    return model.states.map(state => (`console.log('State: ${state.name}!');`));
}
export function generateAstCode(model: Statemachine) {
    return JSON.stringify(model, null, 2);
}
