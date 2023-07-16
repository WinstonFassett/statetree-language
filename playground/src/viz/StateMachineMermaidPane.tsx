import { useStateMachineContext } from "../statetree-machine/useStateMachine"
import StateMachineMermaidDiagram from "./StateMachineMermaidDiagram"

export function StateMachineMermaidPane({}) {
  const machine = useStateMachineContext()  
  return (<>
    {!!machine?.model && <StateMachineMermaidDiagram machine={machine} />}
  </>)
}