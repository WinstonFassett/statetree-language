
import { StateForceGraph } from './StateMachineForceGraph'
import { useStateMachineContext } from './useStateMachine'
export function StateMachineForceGraph ({}) {
  const [state, machine] = useStateMachineContext()
  console.log({ state, machine})
  return <div>
    <h3 className="text-xl">State Machine Force Graph!!!</h3>
    <p>state is {state?.name}</p>
    {!!machine?.model && <StateForceGraph machine={machine} />}
  </div>
}