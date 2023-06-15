import { useMemo, useState } from "react";
import { State, Statemachine, Transition } from "../../src/language/generated/ast";
import { Button } from "./components/ui/button";

export function StateMachine({ model }: { model: Statemachine }) {
  console.log('states', model.states)
  const{ states } = model
  const [state, send] = useStateMachine(model)
  const getState = (name: string) => state
  return <div>
    <p>State: {state.name}</p>
    <StateList states={states} state={state} send={send} />
  </div>
}

// type View = {
//   model: Statemachine
//   state: State
//   stateName: string
// }
// function useView (model: Statemachine) {
//   const { states } = model
//   const stateIndex = useMemo(() => {
//     const index = {} as Record<string, State>
//     indexStates(states)
//     function indexStates (states: State[]) {
//       states.forEach(state => {
//         index[state.name] = state
//         const { states: childStates } = state
//         if (childStates) { indexStates(childStates) }
//       })
//     }
//   }, [states])
//   const [state, send] = useStateMachine(model)
//   const getState = (name: string) => state
//   return { model, state, send, getState }
// }


type Send = (event: string) => void

function StateList({state: currentState, states, send, path=[]}:{state: State, states: State[], send: Send, path?: State[]}) {
  return <ul className="pl-4 mt-2">
    {states.map((state, index) => {
      const { name, states: substates, transitions } = state
      const active = state === currentState || name === currentState.name
      return <li key={index} className={`border ${active ? 'border-green-500' : 'border-slate-700'} rounded p-4 mb-4`}>
        <p className="">{name} {active ?'active': 'nope'}</p>
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

function useStateMachine (model: Statemachine) {
  const [state, setState] = useState(model.init?.ref ?? model.states[0])
  function send (event: string) {
    console.log('send', state, event)
    const transition = state.transitions?.find(t => t.event === event)
    const newState = transition?.to?.ref
    newState && setState(newState)
  }
  return [state, send] as [State, typeof send]
}

function resolveState (name: string, model: Statemachine) {
  const parts = name.split('.')
  let states = model
  while (parts.length) {
    const part = parts.shift()
    
  }
}