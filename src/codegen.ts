import { State, Statemachine, Transition } from './language/generated/ast';
import { expandToNode as toNode, joinToNode as join, Generated, toString, Reference } from 'langium';

export function generateStatements(model: Statemachine) {
    return model.states.map(state => (`console.log('State: ${state.name}!');`));
}

export function generateAstCode(model: Statemachine) {
    return JSON.stringify(model, null, 2);
}

type Options = {
    generateInitialIfMissing?: boolean
}

export function generateXState(model: Statemachine, options: Options = {}) {
    console.log('generateXState', { model, options })
    const initial = getInitialState(model, options)
    const states = mapStates(model.states, options)
    const machine = {
        initial,
        states
    }
    return machine
}

function getInitialState(model: Statemachine|State, { generateInitialIfMissing }: Options) {
    const { init } = model
    if (init) {
        return init.ref?.name ?? init.$refText
    }
    if (generateInitialIfMissing) {
        return model.states[0]?.name
    }
    return undefined
}

function mapStates(states: State[], options: Options) {
    return states.reduce((acc, state) => {
        const { name } = state;
        acc[name] = mapState(state, options);
        return acc;
    }, {} as Record<string, any>);
}   
function mapState (state: State, options: Options) {
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
        stateOut.initial = getInitialState(state, options)
        stateOut.states = mapStates(state.states, options)
    }
    return stateOut
}

function joinWithExtraNL<T>(content: T[], toString: (e: T) => Generated): Generated {
    return join(content, toString, { appendNewLineIfNotEmpty: true });
}

export function generateStatetreeStatements(model: Statemachine, { source }: { source?: string } = {}) {    
    const rootNode = convertContainer(model)
    console.log({ rootNode })
    return toString(rootNode)
    
    function convertContainer (container: Statemachine | State): Generated {
        console.log('convert', {container})
        switch (container.$type) {
            case 'State':
                return convertState(container)
            case 'Statemachine':
                    const init = container.init
                    const initialStateNode = convertInitialState(init)
                    return toNode`
                        // state machine
                        // initial
                        // states
                        ${convertStates(container.states)}
                        // transitions
                    `
                    default:
                        break;                            
            // case 'StatemachineV1':
            //     const init = container.init
            //     const initialStateNode = convertInitialState(init)
            //     return toNode`
            //     // state machine
            //     // initial
            //     ${convertInitialState(container.init)}
            //     // states 
            //     ${convertStates(container.states)}`
            //     default:
            //         break;            
        }
        return toNode``            
    }

    

    function convertInitialState(init: Reference<State> | undefined) {
        const initStateName = init?.$refText ?? init?.ref!.name
        return initStateName && toNode`initialState ${initStateName}`;
    }

    function convertStates(states: State[] = []): Generated {
        const hasBlock = states?.length
        return join(states, state => {
            return toNode`
                ${state.name} 
            `.appendIf(states?.length>0, toNode`
                { 
                    ${convertStates(state.states)} 
                }
            `)
        }, { appendNewLineIfNotEmpty: true })
        // return join(states, state => toNode`${convertState(state)}`, { appendNewLineIfNotEmpty: true })     
    }

    function convertState(state: State): Generated {
        const hasChildBlocks = 
            (state.states && state.states.length > 0) ||
            (state.transitions && state.transitions.length > 0)
        const childBlocks: Generated[] = []        
        // if (state.transitions && state.transitions.length>0) {
        //     childBlocks.push(convertTransitions(state.transitions))
        // }
        // if (state.states && state.states.length>0) {
        //     childBlocks.push(convertStates(state.states))
        // }
        let generated = toNode`
            ${state.name} 
        `.appendIf(true, `        
            {
                // initial maybe
                ${true ? '' : convertInitialState(state.init)}
                // transition
                ${true ? '' : toNode`${convertTransitions(state.transitions)}`}
                // states
                ${toNode`${convertStates(state.states)}`}            
            }
        `)            
            
        console.log({ generated }, toString(generated))
        // const { states } = state
        // if (states && states.length > 0) {
        //     generated = join([generated, toNode`
        //     // SOON:${states.length}  substates
        //     `])!
        // }
        return generated
            // .appendNewLine().appendNewLine()
    }
    function convertTransitions(transitions: Transition[]) {
        return join(transitions, transition => 
            toNode`
                ${transition.event} => ${transition.to?.$refText}`, 
            { separator: '\n'})
        // .appendNewLine().appendNewLine()
    }
}