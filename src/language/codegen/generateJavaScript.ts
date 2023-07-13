import { 
    expandToNode as toNode,
    joinToNode as join,
    toString,
    Generated,
    AstNode
 } from 'langium';
import { State, Statemachine, Transition } from '../generated/ast';
import { expandAst } from './expandAst';


export function generateJavaScript(model: Statemachine) {
    const expanded = expandAst(model)
    const generated = toNode`
        // statetree machine
        ${generateNextState(expanded)}
    `
    return toString(generated)
}

function getAncestors (state: State | Statemachine| AstNode) {
    const ns = [] as typeof state.$container[]
    while (state.$container) {
        ns.push(state.$container)      
        state = state.$container  
    }
    return ns
}
function getStatePath (state: State|undefined) {
    if (!state) return []
    return getAncestors(state).reverse().concat(state)
}
function getFQN(state: State) {
    return getAncestors(state).map((state) => (state as  { name?: string }).name).filter(x => x).join('.')
}

function getInitialState (state: State|Statemachine) {
    return state.init?.ref ?? state.states?.[0]
}

function resolveTargetState (state: State|undefined) {
    while (state && state.states && state.states.length>0) {        
        state = resolveTargetState(getInitialState(state))
    }
    return state
}

// function getFullStatePath(state: State) {
//     return getAncestors(state).map((state) => (state as  { name?: string }).name).filter(x => x).join('.')
// }


function generateNextState (model: Statemachine) {
    return toNode`
    function getNextState(stateIn = ${getStatePathJS(getInitialState(model))}, event = '*') {
        let stack = [...stateIn].reverse();
        let state = stack.pop();
        console.log({ state, stack, stateIn });
        ${generateStateConditionalReturns(model)}
    }
    `
} 

function generateStatesConditionalReturnsContainer(model: State | Statemachine, statePath: State[] = []): Generated {
    const { init, states } = model
    if (!states || states.length === 0) return ``
    const initial = init ?? { ref: states[0] }
    return toNode`
       ${generateStateConditionalReturns(model, statePath)}
    `
}

function generateStateConditionalReturns(model: State | Statemachine, statePath: State[] = []): Generated {
    const { init, states } = model
    if (!states || states.length === 0) return ``
    const initial = init ?? { ref: states[0] }
    return join(states, state => {
        return toNode`        
        if (v==='${state.name}') {
            ${toNode`
                ${state.states?.length > 0 ? toNode`state = stack.pop()` : toNode``}
                ${generateTransitionsConditionalReturns(state)}
                ${generateStatesConditionalReturnsContainer(state, statePath.concat(state))}
                ${generateTransitionHelpCase(state)}
            `}
        }
    `}, { appendNewLineIfNotEmpty: true })
}

function generateStatesSwitch(model: State | Statemachine, statePath: State[] = []): Generated {
    const { init, states } = model
    if (!states || states.length === 0) return ``
    const initial = init ?? { ref: states[0] }
    return toNode`
    switch (state) {
       ${generateStateCases(model, statePath)}
        default: 
            break;
    }`
}
function generateTransitionHelpConditionalReturn (model: State|Statemachine) {
    return toNode`
    if (event ==='?') {
        return ${JSON.stringify(model.transitions.map(transition => {
            return transition.event
        }))}
    }
    `
}
function generateTransitionHelpCase (model: State|Statemachine) {
    return toNode`
    if (event ==='?') {
        return ${JSON.stringify(model.transitions.map(transition => {
            return transition.event
        }))}
    }
    `
}

function generateStateCases(model: State | Statemachine, statePath: State[] = []): Generated {
    const { init, states } = model
    if (!states || states.length === 0) return ``
    const initial = init ?? { ref: states[0] }
    return join(states, state => {
        return toNode`
        case '${state.name}':
            ${state.states?.length > 0 ? toNode`state = stack.pop()` : toNode``}
            ${toNode`
                ${generateTransitionsSwitch(state)}
                ${generateStatesSwitch(state, statePath.concat(state))}
                ${generateTransitionHelpCase(state)}
                break;
            `}
    `}, { appendNewLineIfNotEmpty: true })
}
function generateTransitionsConditionalReturns (model: State | Statemachine) {
    const { init, transitions, event } = model
    if (!transitions || transitions.length === 0) return ``    
    return join(transitions, transition => { 
        const stateFullPath = getStatePathJS(transition.to?.ref)
        const name = transition.event ?? event ?? '*'
        return toNode`
            if (event==='${name}') return ${stateFullPath}
        `
    }, { appendNewLineIfNotEmpty: true })
}

function generateTransitionsSwitch(model: State | Statemachine) {
    const { init, transitions, event } = model
    if (!transitions || transitions.length === 0) return ``    
    return toNode`
    switch (event${(event && ` = '${event}'`) ?? ''}) {
        ${join(transitions, transition => { 
            const stateFullPath = getStatePathJS(transition.to?.ref)
            return toNode`
        case '${transition.event ?? event}':
            return ${stateFullPath}
        `}, { appendNewLineIfNotEmpty: true })}        
        default: 
            break;
    }`
}

function getStatePathJS(state: State|undefined) {
    return JSON.stringify(getStatePath(resolveTargetState(state)).map(it => (it as any).name).filter(x => x));
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