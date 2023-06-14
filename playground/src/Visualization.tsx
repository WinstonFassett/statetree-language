import { State, Statemachine } from "../../src/language/generated/ast";

export function Visualization({ model }: { model: Statemachine }) {
  return <StateList states={model.states} />
}

function StateList({states, path=[]}:{states: State[], path?: State[]}) {
  return <ul>
    {states.map(state => {
      const { name, states: substates } = state
      return <li key={name}>
        <p>{name}</p>
        {!!substates && <StateList states={substates} />}
      </li>;
    })}
  </ul>;
}
