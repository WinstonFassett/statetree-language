import { useContext } from "react"
import { ModelContext } from "./ModelContext"
import { StateMachine } from "./StateMachine"
import { useStateMachineContext } from "./useStateMachine"

export function StateMachinePane({}) {
  const { model, setModel } = useContext(ModelContext)
  const instance = useStateMachineContext()
  return <div className="h-full overflow-auto">
    {model ? <StateMachine model={model} instance={instance} /> : <p>no state machine yet</p> }
  </div>
}