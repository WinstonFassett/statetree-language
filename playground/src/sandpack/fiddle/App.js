import { useSharedState } from './useSharedState'

export default function App() {
  const { stateKey, events, isDark, send } = useSharedState()
  // HSM stateKey is a dotted FQN ("On.Red"); color the bead by the active leaf.
  const mode = stateKey?.split('.').pop()
  // Map the leaf to a color name: strip trailing modifiers so RedOn/RedOff -> red.
  const color = mode?.replace(/(On|Off)$/, '').toLowerCase() || 'slate'
  return <div className="h-full flex flex-col" data-theme={isDark ? "dark" : "light"}>
    <div className='rounded p-4 text-3xl bg-primary text-primary-content'>
      Hello!
    </div>
    <div className='flex-1 p-4'>
      <div>The state is
        <div className={`text-2xl text-white bg-${color}-500 rounded-full text-center my-4 p-4`}>
          {mode ?? 'Unknown'}
        </div>
      </div>
      <div className='flex gap-2 flex-wrap'>
        {events.map(event => (
          <button key={event} className='btn btn-primary' onClick={() => send(event)}>
            {event}
          </button>
        ))}
      </div>
    </div>
  </div>
}
