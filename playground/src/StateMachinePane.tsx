import { useContext } from "react"
import { ModelContext } from "./ModelContext"
import { StateMachine } from "./StateMachine"

export function StateMachinePane({}) {
  const { model, setModel } = useContext(ModelContext)
  return <div>
    {model ? <StateMachine model={model} /> : <p>no state machine yet</p> }
  </div>
}