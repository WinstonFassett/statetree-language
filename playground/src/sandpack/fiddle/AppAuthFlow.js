import { useState } from 'react'
import { useSharedState } from './useSharedState'

const inputCls = 'input input-bordered input-sm w-full'

function FieldLabel({ children }) {
  return <label className="block text-xs text-base-content/50 mb-1.5">{children}</label>
}

function LoginForm({ send }) {
  const [email, setEmail] = useState('demo@example.com')
  const [password, setPassword] = useState('password')
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Log In</h2>
      <div className="flex flex-col gap-3">
        <div><FieldLabel>Email</FieldLabel><input type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputCls} /></div>
        <div><FieldLabel>Password</FieldLabel><input type="password" value={password} onChange={e => setPassword(e.target.value)} className={inputCls} /></div>
        <button onClick={() => send('login')} className="btn btn-primary w-full">Log In</button>
        <div className="flex flex-col items-center gap-1.5">
          <button onClick={() => send('goToPasswordReset')} className="btn btn-ghost btn-xs">Forgot Password?</button>
          <span className="text-xs text-base-content/50">No account? <button onClick={() => send('goToRegister')} className="btn btn-ghost btn-xs">Register</button></span>
          <button onClick={() => send('cancel')} className="btn btn-ghost btn-xs text-base-content/30">Cancel</button>
        </div>
      </div>
    </div>
  )
}

function RegisterForm({ send }) {
  const [name, setName] = useState('Demo User')
  const [email, setEmail] = useState('demo@example.com')
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Register</h2>
      <div className="flex flex-col gap-3">
        <div><FieldLabel>Name</FieldLabel><input type="text" value={name} onChange={e => setName(e.target.value)} className={inputCls} /></div>
        <div><FieldLabel>Email</FieldLabel><input type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputCls} /></div>
        <button onClick={() => send('register')} className="btn btn-primary w-full">Create Account</button>
        <p className="text-xs text-center text-base-content/50">Already have an account? <button onClick={() => send('goToLogin')} className="btn btn-ghost btn-xs">Log In</button></p>
        <div className="text-center"><button onClick={() => send('cancel')} className="btn btn-ghost btn-xs text-base-content/30">Cancel</button></div>
      </div>
    </div>
  )
}

function PasswordResetForm({ send }) {
  const [email, setEmail] = useState('demo@example.com')
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Reset Password</h2>
      <div className="flex flex-col gap-3">
        <div><FieldLabel>Email</FieldLabel><input type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputCls} /></div>
        <button onClick={() => send('requestReset')} className="btn btn-primary w-full">Send Reset Link</button>
        <div className="flex flex-col items-center gap-1.5">
          <button onClick={() => send('goToLogin')} className="btn btn-ghost btn-xs">Back to Log In</button>
          <button onClick={() => send('cancel')} className="btn btn-ghost btn-xs text-base-content/30">Cancel</button>
        </div>
      </div>
    </div>
  )
}

function ManualControls({ children }) {
  return (
    <div className="mt-5 pt-4 border-t border-base-300">
      <p className="text-[10px] font-mono uppercase tracking-widest text-base-content/40 text-center mb-3">Manual Controls</p>
      <div className="flex gap-2">{children}</div>
    </div>
  )
}

export default function App() {
  const { stateKey, send, isDark } = useSharedState()

  return (
    <div data-theme={isDark ? 'dark' : 'light'} className="min-h-screen flex items-center justify-center p-4 bg-base-200">
      <div className="w-full max-w-sm bg-base-100 border border-base-300 rounded-2xl p-6">
        {stateKey === 'LoggedOut' && (
          <div className="text-center">
            <p className="text-4xl mb-1">👋</p>
            <h2 className="text-xl font-semibold mb-6">Welcome</h2>
            <div className="flex flex-col gap-2">
              <button onClick={() => send('showLogin')} className="btn btn-primary w-full">Log In</button>
              <button onClick={() => send('showRegister')} className="btn btn-outline w-full">Register</button>
            </div>
          </div>
        )}
        {stateKey === 'LoginForm' && <LoginForm send={send} />}
        {stateKey === 'RegisterForm' && <RegisterForm send={send} />}
        {stateKey === 'PasswordResetForm' && <PasswordResetForm send={send} />}
        {stateKey === 'LoggingIn' && (
          <div className="text-center">
            <span className="loading loading-spinner loading-lg mb-4" />
            <h2 className="text-base font-semibold">Logging in…</h2>
            <ManualControls>
              <button onClick={() => send('success')} className="btn btn-success btn-sm flex-1">Success</button>
              <button onClick={() => send('failure')} className="btn btn-error btn-sm flex-1">Fail</button>
            </ManualControls>
          </div>
        )}
        {stateKey === 'Registering' && (
          <div className="text-center">
            <span className="loading loading-spinner loading-lg mb-4" />
            <h2 className="text-base font-semibold">Creating account…</h2>
            <ManualControls>
              <button onClick={() => send('success')} className="btn btn-success btn-sm flex-1">Success</button>
              <button onClick={() => send('failure')} className="btn btn-error btn-sm flex-1">Fail</button>
            </ManualControls>
          </div>
        )}
        {stateKey === 'RequestingPasswordReset' && (
          <div className="text-center">
            <span className="loading loading-spinner loading-lg mb-4" />
            <h2 className="text-base font-semibold">Sending reset link…</h2>
            <ManualControls>
              <button onClick={() => send('success')} className="btn btn-success btn-sm flex-1">Success</button>
              <button onClick={() => send('failure')} className="btn btn-error btn-sm flex-1">Fail</button>
            </ManualControls>
          </div>
        )}
        {stateKey === 'PasswordResetSent' && (
          <div className="text-center">
            <p className="text-4xl mb-2">📬</p>
            <h2 className="text-base font-semibold mb-1">Link sent!</h2>
            <p className="text-xs text-base-content/50 mb-5">A reset link was sent to your email.</p>
            <button onClick={() => send('goToLogin')} className="btn btn-primary btn-sm">Back to Log In</button>
          </div>
        )}
        {stateKey === 'LoggedIn' && (
          <div className="text-center">
            <p className="text-5xl mb-3">🎉</p>
            <h2 className="text-base font-semibold mb-1">Welcome back!</h2>
            <p className="text-xs text-success mb-5">Logged in successfully</p>
            <button onClick={() => send('logout')} className="btn btn-error btn-sm">Log Out</button>
          </div>
        )}
        {stateKey && (
          <div className="mt-4 text-center">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-base-200 text-base-content/40">{stateKey}</span>
          </div>
        )}
      </div>
    </div>
  )
}
