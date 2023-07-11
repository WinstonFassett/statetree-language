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
            // case 'State':
            //     return convertState(container)
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
        return toNode``.appendIf(!!initStateName, `initialState ${initStateName}`);
    }

    function convertStates(states: State[] = []): Generated {
        const hasBlock = states?.length
        return join(states, state => {
            return convertState2(state)
        }, { appendNewLineIfNotEmpty: true })
        // return join(states, state => toNode`${convertState(state)}`, { appendNewLineIfNotEmpty: true })     
    }

    function convertState2(state: State): Generated {
        const hasBlock = state.states?.length > 0 
            || state.transitions?.length > 0
        return toNode`
                ${state.name}
            `
            .appendIf(hasBlock, (node) => {
                node.append(toNode`
                {
                `
                ).indent(indentingNode =>
                    indentingNode
                    // .append(
                    //    toNode`'Thing 1'`
                    // ).appendNewLine()
                    // .appendIf(`description` !== undefined,
                    //     'description:', `description`
                    // ).appendNewLineIfNotEmpty()
                    .append(convertTransitions(state.transitions))
                    .append(convertStates(state.states))
                ).append(
                    '}'
                );
            }
                // toNode` 
                //  { 
                // ${convertInitialState(state.init)}
                // ${false ? '':convertTransitions(state.transitions)}
                // ${false ? '' :convertStates(state.states)}  
                // }`
                // .indent(indentingNode => {
                //     indentingNode.append(toNode`
                //     { 
                //         ${convertInitialState(state.init)}
                //         ${true ? '':convertTransitions(state.transitions)}
                //         ${false ? '' :convertStates(state.states)}  
                //     }            
                //     `)
                // })
            );
    }

    function convertTransitions(transitions: Transition[]) {
        return join(transitions, transition => toNode`${transition.event} => ${transition.to?.$refText}`, 
            { appendNewLineIfNotEmpty: true })        
    }
}