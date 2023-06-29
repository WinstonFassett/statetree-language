import { State, Statemachine, Transition } from "../../../src/language/generated/ast";

export function Visualization({ model }: { model: Statemachine }) {
  console.log('states', model.states)
  return <StateList states={model.states} />
}

function StateList({states, path=[]}:{states: State[], path?: State[]}) {
  return <ul className="pl-4 mt-2">
    {states.map((state, index) => {
      const { name, states: substates, transitions } = state
      return <li key={index}>
        <p className="">{name}</p>
        {!!transitions && <TransitionList transitions={transitions} />}
        {!!substates && <StateList states={substates} />}
      </li>;
    })}
  </ul>;
}

function TransitionList({ transitions }: { transitions: Transition[] }) {
  return <div>
    {transitions.map((transition, index) => {
      const { event, to } = transition
      return <div key={event||index}>
        <p className="text-xs"><a href="#">{event}</a> {'->'} {to?.ref?.name}</p>
      </div>
    })}
  </div>
}