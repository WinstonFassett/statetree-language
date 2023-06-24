import { useEffect, useMemo, useState } from "react";
import { State, Statemachine, Transition } from "../../src/language/generated/ast";
import { Button } from "./components/ui/button";
import useUndo from 'use-undo';
import { generateStatements, generateXState } from "../../src/codegen";
import { StateMachineInstance } from "./useStateMachine";

function getParentState (state: State) {
  const { $container } = state
  if ($container && $container.$type === 'State') {
    return $container
  }
  return undefined
}

export function StateMachine({ model, instance }: { model: Statemachine, instance: StateMachineInstance }) {
  const{ states } = model
  const [curState, { send, undo, redo, canUndo, canRedo, reset }] = instance

  const activeStates = useMemo(() => {
    const items: State[] = []
    let state: State | undefined = curState
    while (state) {
      items.push(state)
      state = getParentState(state)
    }
    return items.reverse()
  }, [states, curState])
  // console.log({ activeStates })
  const getState = (name: string) => curState
  return <div>
    <p>State: {curState?.name}</p>
    <p>Active States: {activeStates.map(state => state.name).join(', ')}</p>
    <div>
      <Button onClick={exportJS}>Export JS</Button>
      <Button onClick={exportXState}>Export XState</Button>
    </div>
    <div>
      <Button onClick={reset}>Restart</Button>
      {!!canUndo && <Button onClick={undo}>Undo</Button>}
      {!!canRedo && <Button onClick={redo}>Redo</Button>}
    </div>
    <StateList states={states} state={curState} send={send} />
  </div>

  function exportJS () {
    const lines = generateStatements(model)
    // console.log('lines', lines)
  }
  function exportXState () {
    const xstate = generateXState(model)
    // console.log(JSON.stringify(xstate, null,   2))
    copyToClipboard(JSON.stringify(xstate, null,   2))
  }
}

const copyToClipboard = (str: string) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject('The Clipboard API is not available.');
};

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
