import { useEffect, useMemo, useState } from "react";
import { State, Statemachine, Transition } from "../../src/language/generated/ast";
import { Button } from "./components/ui/button";
import useUndo from 'use-undo';
import { generateStatements, generateXState } from "../../src/codegen";
import { StateMachineInstance } from "./useStateMachine";
import { getParentState } from "./getParentState";

export function StateMachine({ model, instance }: { model: Statemachine, instance: StateMachineInstance }) {
  const{ states } = model
  const [curState, { send, undo, redo, canUndo, canRedo, reset }] = instance

  // refactoring
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
  return <div className="h-full flex flex-col bg-base-100" data-theme="night">
    <div>
      <div className="flex gap-2 bg-primary text-primary-content">
        <div className="flex-1 p-2">
          <p>State: {curState?.name}</p>
          <p>Active States: {activeStates.map(state => state.name).join(', ')}</p>
        </div>
        <div className="menu menu-horizontal">
          {/* <button className="btn btn-sm btn-ghost rounded-btn" onClick={exportJS}>Export JS</button>
          <button className="btn btn-sm btn-ghost rounded-btn" onClick={exportXState}>Export XState</button> */}
          <button className="btn btn-sm btn-ghost rounded-btn" onClick={reset}>Restart</button>
          <button disabled={!canUndo} className="btn btn-sm btn-ghost rounded-btn" onClick={undo}>Undo</button>
          <button disabled={!canRedo} className="btn btn-sm btn-ghost rounded-btn" onClick={redo}>Redo</button>

        </div>
      </div>

    </div>
    <div className="flex-1 overflow-auto">
      <StateList states={states} state={curState} send={send} />
    </div>
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
  return <ul className="pl-2 mt-2 flex flex-wrap gap-2">
    {states.map((state, index) => {
      const { name, states: substates, transitions } = state
      const active = currentState && (state === currentState || name === currentState.name)
      return (
        <div key={state.name} className={`border card bg-base-100 shadow-xl ${active ? 'bg-slate-800 border border-accent' : 'bg-base-200 border-slate-700'} `} >
          <div className={`card-body rounded p-2 mb-4`}>
            <h2 className="card-title text-md"> {name}</h2>
            {!!transitions && <TransitionList transitions={transitions} send={send} />}
        {substates?.length > 0 && <StateList states={substates} state={currentState} send={send} />}

            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>        
      )
      return <li key={index} className={`${active ? 'bg-base-300 border border-accent' : 'bg-base border border-slate-700'} rounded p-2 mb-4`}>
        
        <p className="">
          {name}
          {/* {active ?'active': 'nope'} */}
        </p>
        {!!transitions && <TransitionList transitions={transitions} send={send} />}
        {substates?.length > 0 && <StateList states={substates} state={currentState} send={send} />}
      </li>;
    })}
  </ul>;
}

function TransitionList({ transitions, send }: { transitions: Transition[], send: Send }) {
  return <div>
    {transitions.map((transition, index) => {
      const { event, to } = transition
      return <div key={event||index}>
        <button className="btn btn-sm btn-ghost rounded-btn normal-case" onClick={() => send(event)}>
          {event}
        </button> {'->'} {to?.ref?.name}
        {/* <Button variant='ghost'  size='xs'  className="my-1 px-1">
        </Button>  */}
      </div>
    })}
  </div>
}
