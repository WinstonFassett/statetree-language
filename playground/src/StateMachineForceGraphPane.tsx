
import { StateForceGraph } from './StateMachineForceGraph'
import { useStateMachineContext } from './useStateMachine'
export function StateMachineForceGraph ({}) {
  const [state, machine] = useStateMachineContext()
  console.log({ state, machine})
  return <div className='h-full'>
    {!!machine?.model && <StateForceGraph machine={machine} />}
  </div>
}