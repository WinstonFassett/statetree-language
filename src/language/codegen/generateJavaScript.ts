import { 
    expandToNode as toNode,
    joinToNode as join,
    toString,
    Generated
 } from 'langium';
import { State, Statemachine } from '../generated/ast';


export function generateJavaScript(model: Statemachine) {
    const generated = toNode`
        // statetree machine
        ${generateNextState(model)}
    `
    return toString(generated)
}

function generateNextState (model: Statemachine) {
    return toNode`
    function nextState(state, event) {
        ${generateStatesSwitch(model)}
    }
    `
} 
function generateStatesSwitch(model: State | Statemachine): Generated {
    const { init, states } = model
    if (!states || states.length === 0) return ``
    const initial = init ?? { ref: states[0] }
    return toNode`
    switch (state${initial && ` = '${initial.ref?.name}'` || ''}) {
        ${join(states, state => toNode`
        case '${state.name}':
            ${toNode`
                ${generateTransitionsSwitch(state)}
                ${generateStatesSwitch(state)}
            `}
            break;
        `, { appendNewLineIfNotEmpty: true })}
        default: 
            break;
    }
    `
}

function generateTransitionsSwitch(model: State | Statemachine) {
    const { init, transitions, event } = model
    if (!transitions || transitions.length === 0) return ``    
    return toNode`
    switch (event${(event && ` = '${event}'`) ?? ''}) {
        ${join(transitions, transition => toNode`
        case '${transition.event ?? event}':
            return '${transition.to?.ref?.name}'
        `, { appendNewLineIfNotEmpty: true })}
        default: 
            break;
    }
    `
}

function generateStates (states: (State | Statemachine)[], model?: Statemachine) {
    return join(states, state => generateStateInfo(state), { appendNewLineIfNotEmpty: true })    
}

function generateStateInfo (state: State|Statemachine): Generated {
    const hasBlock = state.states?.length > 0 || state.transitions?.length > 0;
    const { name ='' } = state
    // return toNode`
    //     // state: ${name}
    //         ${join(state.states, state => generateStateInfo(state), { appendNewLineIfNotEmpty: true })}
    // `
    return toNode`
                // ${state.name}
            `.appendIf(hasBlock, (node) => {
      node
        .append(
          toNode` {
                `)
        .indent((indentingNode) =>
          indentingNode
            // .append(convertTransitions(state.transitions))
            .append(generateStates(state.states))
        )
        .append("// }");
    })
}