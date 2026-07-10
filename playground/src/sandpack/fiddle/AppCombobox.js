import { useLayoutEffect, useRef, useState } from 'react'
import { useSharedState } from './useSharedState'

const TAGS = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince']

export default function App() {
  const { stateKey, send, isDark } = useSharedState()
  const isActive = stateKey !== 'Inactive' && !!stateKey
  const [input, setInput] = useState('')
  const [selected, setSelected] = useState(['Apple', 'Mango'])
  const [highlighted, setHighlighted] = useState(0)
  const searchRef = useRef(null)

  const suggestions = TAGS.filter(t => t.toLowerCase().includes(input.toLowerCase()) && !selected.includes(t))

  useLayoutEffect(() => { if (isActive) searchRef.current?.focus() }, [isActive])

  function handleFocus() { send('focus'); setHighlighted(0) }
  function handleBlur() { send('blur'); setInput(''); setHighlighted(0) }
  function handleType(value) { setInput(value); setHighlighted(0); send('type') }
  function selectItem(index) {
    const tag = suggestions[index]
    if (tag) { setSelected(prev => [...prev, tag]); setInput(''); setHighlighted(0); send('select') }
  }
  function removeTag(tag) { setSelected(prev => prev.filter(t => t !== tag)) }
  function handleKeyDown(e) {
    if (!isActive) return
    if (e.key === 'Escape') { e.preventDefault(); handleBlur() }
    else if (e.key === 'Backspace' && !input && selected.length > 0) { e.preventDefault(); removeTag(selected.at(-1)) }
    else if (e.key === 'ArrowDown') { e.preventDefault(); if (suggestions.length > 0) setHighlighted(i => (i + 1) % suggestions.length) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (suggestions.length > 0) setHighlighted(i => (i - 1 + suggestions.length) % suggestions.length) }
    else if (e.key === 'Enter') { e.preventDefault(); if (suggestions.length > 0) selectItem(highlighted) }
  }

  return (
    <div data-theme={isDark ? 'dark' : 'light'} className="min-h-screen flex items-center justify-center p-4 bg-base-200">
      <div className="w-full max-w-sm">
        <div className="text-xs text-base-content/50 mb-3">
          State: <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-base-100 text-base-content/60">{stateKey}</span>
        </div>
        <div className="relative">
          {/* Trigger */}
          <button
            onClick={() => isActive ? handleBlur() : handleFocus()}
            className={`w-full min-h-10 flex items-start flex-wrap gap-1.5 p-2 rounded-xl border bg-base-100 cursor-pointer text-left transition-colors ${isActive ? 'border-primary' : 'border-base-300'}`}
          >
            {selected.map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-primary text-primary-content">
                {tag}
                <span onClick={e => { e.stopPropagation(); removeTag(tag) }} className="cursor-pointer opacity-70 text-[10px]">✕</span>
              </span>
            ))}
            {selected.length === 0 && !isActive && <span className="text-sm text-base-content/30 px-1">Select fruit…</span>}
          </button>
          {/* Dropdown */}
          {isActive && (
            <div onMouseDown={e => e.preventDefault()} className="absolute top-full left-0 right-0 mt-1 border border-base-300 bg-base-100 rounded-xl overflow-hidden z-20 shadow-xl">
              <div className="flex items-center px-3 border-b border-base-300">
                <span className="text-sm mr-2 text-base-content/30">🔍</span>
                <input
                  ref={searchRef}
                  type="text"
                  value={input}
                  onChange={e => handleType(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                  placeholder="Search fruit…"
                  className="flex-1 py-2.5 bg-transparent border-none outline-none text-sm"
                />
              </div>
              <div className="max-h-48 overflow-y-auto py-1">
                {suggestions.length === 0
                  ? <div className="px-3 py-6 text-center text-sm text-base-content/40">No fruit found.</div>
                  : suggestions.map((tag, i) => (
                    <button
                      key={tag}
                      onMouseDown={e => { e.preventDefault(); selectItem(i) }}
                      className={`w-full text-left px-3 py-2 text-sm border-none cursor-pointer transition-colors ${i === highlighted ? 'bg-base-200' : 'bg-transparent hover:bg-base-200'}`}
                    >
                      {tag}
                    </button>
                  ))
                }
              </div>
            </div>
          )}
        </div>
        {selected.length > 0 && (
          <p className="mt-3 text-xs text-base-content/40">Selected: {selected.join(', ')}</p>
        )}
      </div>
    </div>
  )
}
