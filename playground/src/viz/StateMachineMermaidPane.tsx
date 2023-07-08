import { useStateMachineContext } from "../statetree-machine/useStateMachine"
import StateMachineMermaidDiagram from "./StateMachineMermaidDiagram"

export function StateMachineMermaidPane({}) {
  const [state, machine] = useStateMachineContext()
  return (<>
    {!!machine?.model && <StateMachineMermaidDiagram state={state} machine={machine} />}
  </>)
}