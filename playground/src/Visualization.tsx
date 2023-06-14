import { State, Statemachine, Transition } from "../../src/language/generated/ast";

export function Visualization({ model }: { model: Statemachine }) {
  console.log(model.states)
  return <StateList states={model.states} />
}

function StateList({states, path=[]}:{states: State[], path?: State[]}) {
  return <ul className="pl-4">
    {states.map(state => {
      const { name, states: substates, transitions } = state
      return <li key={name}>
        <p className="text-xl">{name}</p>
        {!!transitions && <TransitionList transitions={transitions} />}
        {!!substates && <StateList states={substates} />}
      </li>;
    })}
  </ul>;
}

function TransitionList({ transitions }: { transitions: Transition[] }) {
  return <div>
    {transitions.map(transition => {
      const { event, to } = transition
      return <div key={event}>
        <p><a href="#">{event}</a> {'->'} {to.ref?.name}</p>
      </div>
    })}
  </div>
}