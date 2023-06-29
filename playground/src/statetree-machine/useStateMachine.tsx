import constate from 'constate';
import { useEffect, useMemo } from 'react';
import useUndo from 'use-undo';
import { State, Statemachine, Transition } from '../../../src/language/generated/ast';
import { getInitState } from './getInitState';

export const [StateMachineInstanceProvider, useStateMachineContext] = constate(useStateMachine)

export type StateMachineInstance = { 
  state: State | undefined,
  model: Statemachine
  send(event: string): void 
  undo(): void
  redo(): void
  canUndo: boolean
  canRedo: boolean 
  reset(): void
  lastTransition: { from: State, transition: Transition } | undefined
}

type LastTransition = {
  from: State
  transition: Transition
}

export function useStateMachine ({ model }:{model: Statemachine|undefined }) {
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
  const memo = useMemo(() => ({ state: stateHistory, lastTransition: undefined as LastTransition | undefined }),[]) 
  memo.state = stateHistory
  const { present: state } = stateHistory;
  useEffect(() => {
    const previousState = state!== undefined && model && findStateByName(model, state.name)
    const validState = previousState || getInitState(model?.init, model?.states)
    if (validState) {
      setState(getTargetState(validState))
    }
  }, [model])
  


  function getTargetState (newState: State|undefined): State | undefined {
    // console.log('getTargetState', newState)
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
    const state = memo.state.present
    // console.log('send', state, event)
    const transition = state && findTransition(state, event)
    if (state && transition) {
      const newState = transition?.to?.ref
      // console.log({ transition, newState })
      newState && updateState(newState)
      memo.lastTransition = {
        from: state, 
        transition
      }
    }
  }
  function reset () {    
    const initialState = getInitState(model?.init, model?.states)
    resetState(initialState && getTargetState(initialState))
  }
  function getActiveStates() {}

  return [state, { state, send, undo, redo, canUndo, canRedo, reset, model, lastTransition: memo.lastTransition }] as [State, StateMachineInstance]
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