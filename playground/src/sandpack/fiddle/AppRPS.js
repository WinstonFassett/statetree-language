import { useEffect, useState } from 'react'
import { useSharedState } from './useSharedState'

const moveIcons = { rock: '✊', paper: '🖐️', scissors: '✌️' }
const moveLabel = { rock: 'Rock', paper: 'Paper', scissors: 'Scissors' }

function beats(a, b) {
  return (a === 'rock' && b === 'scissors') || (a === 'paper' && b === 'rock') || (a === 'scissors' && b === 'paper')
}

function randomMove() {
  return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
}

function ThinkingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map(i => (
        <span key={i} className="w-1.5 h-1.5 rounded-full bg-current opacity-50 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
    </span>
  )
}

function MoveBtn({ move, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 flex flex-col items-center gap-1.5 py-4 rounded-xl border border-base-300 bg-base-200 hover:border-base-content/30 hover:bg-base-300 cursor-pointer transition-all duration-150 select-none active:scale-95"
    >
      <span className="text-5xl leading-none">{moveIcons[move]}</span>
      <span className="text-[8px] font-mono uppercase tracking-widest text-base-content/40">{moveLabel[move]}</span>
    </button>
  )
}

function MoveDisplay({ move, label, dim }) {
  return (
    <div className="flex flex-col items-center gap-1.5 w-20">
      <span className={`text-5xl leading-none transition-all duration-300 ${dim ? 'opacity-25 scale-90' : ''}`}>{move ? moveIcons[move] : '❓'}</span>
      <span className="text-[8px] font-mono uppercase tracking-widest text-base-content/40">{label}</span>
    </div>
  )
}

export default function App() {
  const { stateKey, send, isDark } = useSharedState()
  const [playerMove, setPlayerMove] = useState(null)
  const [computerMove, setComputerMove] = useState(null)
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [roundWinner, setRoundWinner] = useState(null)

  useEffect(() => {
    if (stateKey === 'PlayerChose') {
      const t = setTimeout(() => { const cpu = randomMove(); setComputerMove(cpu); send('computerSelectMove') }, 600)
      return () => clearTimeout(t)
    }
  }, [stateKey])

  useEffect(() => {
    if (stateKey === 'Judging') {
      const t = setTimeout(() => {
        if (playerMove && computerMove) {
          if (playerMove === computerMove) setRoundWinner(null)
          else if (beats(playerMove, computerMove)) { setRoundWinner('player'); setPlayerScore(s => s + 1) }
          else { setRoundWinner('computer'); setComputerScore(s => s + 1) }
        }
        send('judge')
      }, 500)
      return () => clearTimeout(t)
    }
  }, [stateKey])

  function selectMove(move) { setPlayerMove(move); send('selectMove') }
  function nextRound() { setPlayerMove(null); setComputerMove(null); setRoundWinner(null); send('nextRound') }
  function newGame() { setPlayerMove(null); setComputerMove(null); setRoundWinner(null); setPlayerScore(0); setComputerScore(0); send('newGame') }

  return (
    <div data-theme={isDark ? 'dark' : 'light'} className="min-h-screen flex items-center justify-center p-4 bg-base-200">
      <div className="w-full max-w-xs">
        <div className="bg-base-100 rounded-2xl border border-base-300 overflow-hidden">
          {/* Scoreboard */}
          <div className="flex border-b border-base-300">
            {[['You', playerScore], ['CPU', computerScore]].map(([label, score], i) => (
              <div key={label} className={`flex-1 flex flex-col items-center py-4 ${i === 0 ? 'border-r border-base-300' : ''}`}>
                <span className="text-[8px] font-mono uppercase tracking-widest text-base-content/40">{label}</span>
                <span className="text-3xl font-black tabular-nums">{score}</span>
              </div>
            ))}
          </div>
          {/* Arena */}
          <div className="min-h-[220px] flex flex-col items-center justify-center px-4 py-5">
            {stateKey === 'WaitingForPlayer' && (
              <div className="w-full flex flex-col items-center gap-4">
                <span className="text-[8px] font-mono uppercase tracking-widest text-base-content/40">Choose your move</span>
                <div className="flex gap-2 w-full">
                  {['rock', 'paper', 'scissors'].map(move => <MoveBtn key={move} move={move} onClick={() => selectMove(move)} />)}
                </div>
              </div>
            )}
            {stateKey === 'PlayerChose' && (
              <div className="w-full flex flex-col items-center gap-4">
                <span className="text-[8px] font-mono uppercase tracking-widest text-base-content/40 flex items-center gap-1.5">CPU thinking <ThinkingDots /></span>
                <div className="flex items-center justify-around w-full px-4">
                  <MoveDisplay move={playerMove} label="You" />
                  <span className="text-xs font-mono text-base-content/20">vs</span>
                  <div className="flex flex-col items-center gap-1.5 w-20">
                    <span className="text-5xl leading-none">🤔</span>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-base-content/40">CPU</span>
                  </div>
                </div>
              </div>
            )}
            {stateKey === 'Judging' && (
              <div className="w-full flex flex-col items-center gap-4">
                <span className="text-[8px] font-mono uppercase tracking-widest text-base-content/40 flex items-center gap-1.5">Judging <ThinkingDots /></span>
                <div className="flex items-center justify-around w-full px-4">
                  <MoveDisplay move={playerMove} label="You" />
                  <span className="text-sm font-black text-base-content/20">VS</span>
                  <MoveDisplay move={computerMove} label="CPU" />
                </div>
              </div>
            )}
            {stateKey === 'RoundComplete' && (
              <div className="w-full flex flex-col items-center gap-4">
                <span className={`text-2xl font-black ${!roundWinner ? 'text-base-content/40' : roundWinner === 'player' ? 'text-success' : 'text-error'}`}>
                  {!roundWinner ? 'Tie' : roundWinner === 'player' ? 'You win' : 'CPU wins'}
                </span>
                <div className="flex items-center justify-around w-full px-4">
                  <MoveDisplay move={playerMove} label="You" dim={!!(roundWinner && roundWinner !== 'player')} />
                  <span className="text-sm font-black text-base-content/10">VS</span>
                  <MoveDisplay move={computerMove} label="CPU" dim={!!(roundWinner && roundWinner !== 'computer')} />
                </div>
                <button onClick={nextRound} className="btn btn-primary btn-sm">Next Round</button>
              </div>
            )}
            {stateKey === 'GameOver' && (
              <div className="flex flex-col items-center gap-4">
                <span className="text-5xl">{playerScore > computerScore ? '🏆' : '💀'}</span>
                <div className="text-center">
                  <p className="text-lg font-black">{playerScore > computerScore ? 'You win' : 'CPU wins'}</p>
                  <p className="text-xs font-mono text-base-content/40">{playerScore} — {computerScore}</p>
                </div>
                <button onClick={newGame} className="btn btn-outline btn-sm">Play Again</button>
              </div>
            )}
          </div>
        </div>
        {stateKey && (
          <div className="mt-3 text-center">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-base-100 text-base-content/40">{stateKey}</span>
          </div>
        )}
      </div>
    </div>
  )
}
