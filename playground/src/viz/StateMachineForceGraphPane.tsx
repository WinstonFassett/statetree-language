
import { StateForceGraph } from './StateMachineForceGraph'
import { useStateMachineContext } from '../statetree-machine/useStateMachine'
export function StateMachineForceGraph ({}) {
  const [state, machine] = useStateMachineContext()
  return <div className='h-full w-full'>
    {!!machine?.model && <StateForceGraph machine={machine} />}
  </div>
}