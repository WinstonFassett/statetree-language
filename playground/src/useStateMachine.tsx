import { createContext, useEffect } from 'react';
import { State, Statemachine } from '../../src/language/generated/ast';
import useUndo from 'use-undo';
import constate from 'constate'
import { Reference } from 'langium';
// import { Reference } from '../../src/langium-utils/langium-ast';

// import MonacoReactEditor from './MonacoReactEditorWithJsxConfig'
// import MonacoEditorReactJsx from './MonacoEditorReactJsx'

// type ModelState = {
//   model: Statemachine|undefined
//   setModel (model: Statemachine): void
// }
// export const ModelContext = createContext<ModelState>({
//   model: undefined,
//   setModel: () => {}
// });

export const [StateMachineInstanceProvider, useStateMachineContext] = constate(useStateMachine)

export type StateMachineInstance = ReturnType<typeof useStateMachine>

export function useStateMachine ({model}:{model: Statemachine|undefined}) {
  const [
    stateHistory,
    {
      set: setState,
      reset: resetState,
      undo,
      redo,
      canUndo,
      canRedo,
    },
  ] = useUndo<State|undefined>(getTargetState(getInitState(model?.init, model?.states)))
  const { present: state } = stateHistory;
  // const [state, setState] = useState<State|undefined>(getTargetState(model.init?.ref ?? model.states[0]))
    
  useEffect(() => {
    // console.log('model changed')
    // find current state by name
    const previousState = state!== undefined && model && findStateByName(model, state.name)
    // const nextState = previousState // || model.init?.ref
    const validState = previousState || getInitState(model?.init, model?.states)
    if (validState) {
      setState(getTargetState(validState))
    }
    // index the model?
  }, [model])
  
  function getInitState (initialState: Reference<State> | undefined, states: State[] | undefined, ) {
    return initialState?.ref ?? states?.[0]
  }

  function getTargetState (newState: State|undefined): State | undefined {
    if (newState === undefined) return newState
    const firstState = newState?.states?.[0]
    const nestedInitialState = firstState && getTargetState(firstState)
    return nestedInitialState ?? firstState ?? newState
  }
  function updateState(state: State | undefined) {
    // handle default and initial states    
    const newState = (state && getTargetState(state)) ?? state
    setState(newState)
  }
  function send (event: string) {
    // console.log('send', state, event)
    const transition = state && findTransition(state, event)
    const newState = transition?.to?.ref
    newState && updateState(newState)
  }
  function reset () {    
    const initialState = getInitState(model?.init, model?.states)
    resetState(initialState && getTargetState(initialState))
  }
  function getActiveStates() {}
  return [state, { state, send, undo, redo, canUndo, canRedo, reset, model }] as [State, { 
    state: typeof state,
    model: Statemachine
    send: typeof send
    undo: typeof undo
    redo: typeof redo
    canUndo: boolean
    canRedo: boolean 
    reset: typeof reset
  }]
}

function recurseStates<T>(states: State[], fn: (state: State) => T) {
  for (let state of states) {
    const found = fn(state)
    if (found) return found;
    if (state.states) { 
      return recurseStates(state.states, fn)
    }
  }
}

function findState <T>(model: Statemachine, fn: (state: State) => T) {
  return recurseStates<T>(model.states, fn)
}
function findStateByName (model: Statemachine, name: string) {
  return findState(model, state => {
    if (state.name === name) { return state }
  })
}


function findTransition(state:State, event: string) {
  let curState: State | undefined = state
  while (curState) {
    // console.log('find', event, curState)
    const transition = curState.transitions?.find(t => t.event === event)
    if (transition) return transition;
    const $container: Statemachine | State = curState.$container
    if ($container && $container.$type === 'State') {
      curState = $container
    } else { curState = undefined }  
  }
}

function resolveState (name: string, model: Statemachine) {
  const parts = name.split('.')
  let states = model
  while (parts.length) {
    const part = parts.shift()
    
  }
}