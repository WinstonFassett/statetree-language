import { useSharedState } from './useSharedState'

const DARK = {
  bg: '#0e0e0f',
  fg: '#ececec',
  accent: '#8fb9d6',
  accentFg: '#15130f',
  muted: '#1a1a1c',
  mutedFg: '#8a8a90',
  border: '#262628',
  card: '#141416',
}
const LIGHT = {
  bg: '#f6f5f1',
  fg: '#15130f',
  accent: '#8fb9d6',
  accentFg: '#15130f',
  muted: '#ecebe4',
  mutedFg: '#6a665d',
  border: '#e3e0d8',
  card: '#ffffff',
}

export default function App() {
  const { stateKey, events, isDark, send } = useSharedState()
  const t = isDark ? DARK : LIGHT
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: t.bg, color: t.fg, fontFamily: '"Inter", system-ui, sans-serif' }}>
      <div style={{ padding: '12px 16px', borderBottom: `1px solid ${t.border}`, background: t.card }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: t.accent, letterSpacing: '0.01em' }}>
          {stateKey ?? '—'}
        </span>
      </div>
      <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {events.map(event => (
            <button
              key={event}
              onClick={() => send(event)}
              style={{
                padding: '6px 14px',
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 4,
                border: `1px solid ${t.border}`,
                background: t.muted,
                color: t.fg,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {event}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
