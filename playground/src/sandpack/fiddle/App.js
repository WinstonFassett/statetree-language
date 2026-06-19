import { useSharedState } from './useSharedState'
export default function App() {
  const { mode, events, isDark, send } = useSharedState()
  return <div className="h-full flex flex-col" data-theme={isDark ? "dark" :"light"}>
    <div className='rounded p-4 text-3xl bg-primary text-primary-content'>
      Hello!
    </div>
    <div className='flex-1 p-4'>
      <div>The state is
        <div className={`text-2xl text-accent-content bg-${mode?.toLowerCase() || "slate"}-500 rounded-full text-center my-4 p-4`}>
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

