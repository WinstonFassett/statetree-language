import { useEffect, useMemo, useState } from "react";
import { State, Statemachine, Transition } from "../../src/language/generated/ast";
import { Button } from "./components/ui/button";

function getParentState (state: State) {
  const { $container } = state
  if ($container && $container.$type === 'State') {
    return $container
  }
  return undefined
}

export function StateMachine({ model }: { model: Statemachine }) {
  const{ states } = model
  const [curState, send] = useStateMachine(model)

  const activeStates = useMemo(() => {
    const items: State[] = []
    let state: State | undefined = curState
    while (state) {
      items.push(state)
      state = getParentState(state)
    }
    return items.reverse()
  }, [states, curState])
  console.log({ activeStates })
  const getState = (name: string) => curState
  return <div>
    <p>State: {curState?.name}</p>
    <p>Active States: {activeStates.map(state => state.name).join(', ')}</p>
    <StateList states={states} state={curState} send={send} />
  </div>
}

type Send = (event: string) => void

function StateList({state: currentState, states, send, path=[]}:{state: State, states: State[], send: Send, path?: State[]}) {
  return <ul className="pl-4 mt-2">
    {states.map((state, index) => {
      const { name, states: substates, transitions } = state
      const active = currentState && (state === currentState || name === currentState.name)
      return <li key={index} className={`border ${active ? 'border-green-500' : 'border-slate-700'} rounded p-4 mb-4`}>
        <p className="">
          {name}
          {/* {active ?'active': 'nope'} */}
        </p>
        {!!transitions && <TransitionList transitions={transitions} send={send} />}
        {!!substates && <StateList states={substates} state={currentState} send={send} />}
      </li>;
    })}
  </ul>;
}

function TransitionList({ transitions, send }: { transitions: Transition[], send: Send }) {
  return <div>
    {transitions.map((transition, index) => {
      const { event, to } = transition
      return <div key={event||index}>
        <Button variant='link' size='sm' onClick={() => send(event)} className="text-[var(--vscode-textLink-foreground)]">
          {event}
        </Button>
        {'->'} {to?.ref?.name}
      </div>
    })}
  </div>
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

function useStateMachine (model: Statemachine) {
  const [state, setState] = useState<State|undefined>(getTargetState(model.init?.ref ?? model.states[0]))
    
  useEffect(() => {
    console.log('model changed')
    // find current state by name
    const previousState = state && findStateByName(model, state.name)
    // const nextState = previousState // || model.init?.ref
    const validState = previousState || model.init?.ref
    if (validState) {
      setState(getTargetState(validState))
    }
    // index the model?
  }, [model])
  
  function getTargetState (newState: State): State {
    const firstState = newState.states?.[0]
    const nestedInitialState = firstState && getTargetState(firstState)
    return nestedInitialState ?? firstState ?? newState
  }
  function updateState(state: State) {
    // handle default and initial states    
    const newState = (state && getTargetState(state)) ?? state
    setState(newState)
  }
  function send (event: string) {
    console.log('send', state, event)
    const transition = findTransition(state, event)
    const newState = transition?.to?.ref
    newState && updateState(newState)
  }
  return [state, send] as [State, typeof send]
}

function findTransition(state:State, event: string) {
  let curState: State | undefined = state
  while (curState) {
    console.log('find', event, curState)
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