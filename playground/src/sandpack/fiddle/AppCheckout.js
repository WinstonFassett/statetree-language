import { useState } from 'react'
import { useSharedState } from './useSharedState'

const STEPS = ['Cart', 'Shipping', 'Payment', 'Review', 'Done']

function stateToStep(stateKey) {
  const top = (stateKey || '').split('.')[0]
  return { Cart: 'Cart', Shipping: 'Shipping', Payment: 'Payment', Review: 'Review', Confirmation: 'Done' }[top] ?? 'Cart'
}

function StepIndicator({ currentStep }) {
  const currentIndex = STEPS.indexOf(currentStep)
  return (
    <div className="flex items-center w-full mb-6">
      {STEPS.map((step, i) => {
        const done = i < currentIndex, active = i === currentIndex
        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono transition-colors ${
                done ? 'bg-success/20 text-success border border-success/40'
                  : active ? 'bg-primary text-primary-content'
                  : 'bg-base-300 text-base-content/40 border border-base-300'
              }`}>
                {done ? '✓' : i + 1}
              </div>
              <span className={`text-[9px] font-mono uppercase tracking-widest whitespace-nowrap ${active ? 'text-base-content' : 'text-base-content/40'}`}>
                {step}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-px mx-2 mb-4 ${i < currentIndex ? 'bg-success/40' : 'bg-base-300'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function FieldLabel({ children }) {
  return <label className="block text-[10px] font-mono uppercase tracking-widest text-base-content/50 mb-1.5">{children}</label>
}

const inputCls = 'input input-bordered input-sm w-full'

function PrimaryBtn({ onClick, children }) {
  return <button onClick={onClick} className="btn btn-primary flex-1">{children}</button>
}
function OutlineBtn({ onClick, children }) {
  return <button onClick={onClick} className="btn btn-outline flex-1">{children}</button>
}
function SmBtn({ onClick, children, destructive }) {
  return <button onClick={onClick} className={`btn btn-sm flex-1 ${destructive ? 'btn-error btn-outline' : 'btn-ghost'}`}>{children}</button>
}

const ITEMS = [{ id: '1', name: 'Wireless Headphones', price: 79.99, qty: 1 }, { id: '2', name: 'USB-C Hub', price: 34.99, qty: 2 }]
const TOTAL = ITEMS.reduce((s, i) => s + i.price * i.qty, 0)

function CartPanel({ send }) {
  return (
    <div>
      <h2 className="text-base font-semibold mb-4">Shopping Cart</h2>
      <div className="flex flex-col gap-2 mb-5">
        {ITEMS.map(item => (
          <div key={item.id} className="flex justify-between items-center bg-base-200 rounded-xl px-4 py-3">
            <div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-base-content/50">${item.price.toFixed(2)} × {item.qty}</p>
            </div>
            <span className="text-sm font-semibold">${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center bg-base-200 rounded-xl px-4 py-3 mb-5">
        <span className="text-[10px] font-mono uppercase tracking-widest text-base-content/50">Total</span>
        <span className="text-xl font-bold">${TOTAL.toFixed(2)}</span>
      </div>
      <PrimaryBtn onClick={() => send('proceed')}>Continue to Shipping</PrimaryBtn>
    </div>
  )
}

function ShippingPanel({ send }) {
  const [address, setAddress] = useState('123 Main St')
  const [city, setCity] = useState('New York')
  const [zip, setZip] = useState('10001')
  return (
    <div>
      <h2 className="text-base font-semibold mb-4">Shipping</h2>
      <div className="flex flex-col gap-4 mb-6">
        <div><FieldLabel>Address</FieldLabel><input type="text" value={address} onChange={e => setAddress(e.target.value)} className={inputCls} /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><FieldLabel>City</FieldLabel><input type="text" value={city} onChange={e => setCity(e.target.value)} className={inputCls} /></div>
          <div><FieldLabel>ZIP</FieldLabel><input type="text" value={zip} onChange={e => setZip(e.target.value)} className={inputCls} /></div>
        </div>
      </div>
      <div className="flex gap-3"><OutlineBtn onClick={() => send('back')}>Back</OutlineBtn><PrimaryBtn onClick={() => send('proceed')}>Continue to Payment</PrimaryBtn></div>
    </div>
  )
}

function PaymentFlatPanel({ send }) {
  const [card, setCard] = useState('4242 4242 4242 4242')
  const [expiry, setExpiry] = useState('12/27')
  const [cvv, setCvv] = useState('123')
  return (
    <div>
      <h2 className="text-base font-semibold mb-4">Payment</h2>
      <div className="flex flex-col gap-4 mb-5">
        <div><FieldLabel>Card Number</FieldLabel><input type="text" value={card} onChange={e => setCard(e.target.value)} className={inputCls} /></div>
        <div className="grid grid-cols-2 gap-4">
          <div><FieldLabel>Expiry</FieldLabel><input type="text" value={expiry} onChange={e => setExpiry(e.target.value)} className={inputCls} /></div>
          <div><FieldLabel>CVV</FieldLabel><input type="text" value={cvv} onChange={e => setCvv(e.target.value)} className={inputCls} /></div>
        </div>
      </div>
      <div className="flex gap-3"><OutlineBtn onClick={() => send('back')}>Back</OutlineBtn><PrimaryBtn onClick={() => send('proceed')}>Continue to Review</PrimaryBtn></div>
    </div>
  )
}

function PaymentHSMPanel({ stateKey, send }) {
  const sub = stateKey.split('.')[1] ?? 'MethodEntry'
  const [card, setCard] = useState('4242 4242 4242 4242')
  const [expiry, setExpiry] = useState('12/27')
  const [cvv, setCvv] = useState('123')
  return (
    <div>
      <h2 className="text-base font-semibold mb-4">Payment</h2>
      {sub === 'MethodEntry' && (
        <div className="flex flex-col gap-4">
          <div><FieldLabel>Card Number</FieldLabel><input type="text" value={card} onChange={e => setCard(e.target.value)} className={inputCls} /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><FieldLabel>Expiry</FieldLabel><input type="text" value={expiry} onChange={e => setExpiry(e.target.value)} className={inputCls} /></div>
            <div><FieldLabel>CVV</FieldLabel><input type="text" value={cvv} onChange={e => setCvv(e.target.value)} className={inputCls} /></div>
          </div>
          <div className="flex gap-3 mt-1"><OutlineBtn onClick={() => send('back')}>Back</OutlineBtn><PrimaryBtn onClick={() => send('authorize')}>Authorize Payment</PrimaryBtn></div>
        </div>
      )}
      {sub === 'Authorizing' && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm text-base-content/60">
            <span className="loading loading-spinner loading-sm" />
            Authorizing payment…
          </div>
          <div className="border border-base-300 rounded-xl p-3">
            <p className="text-[8px] font-mono uppercase tracking-widest text-base-content/40 mb-2">Simulate outcome</p>
            <div className="flex gap-2">
              <SmBtn onClick={() => send('authSucceeded')}>Approve</SmBtn>
              <SmBtn onClick={() => send('authRequired')}>Challenge</SmBtn>
              <SmBtn onClick={() => send('authFailed')} destructive>Fail</SmBtn>
            </div>
          </div>
        </div>
      )}
      {sub === 'AuthChallenge' && (
        <div className="flex flex-col gap-3">
          <div className="bg-base-200 rounded-xl p-3">
            <p className="text-sm font-medium mb-1">Authentication required</p>
            <p className="text-xs text-base-content/50">Your bank is requesting additional verification.</p>
          </div>
          <div className="flex gap-2"><PrimaryBtn onClick={() => send('authSucceeded')}>Approve</PrimaryBtn><SmBtn onClick={() => send('authFailed')} destructive>Deny</SmBtn></div>
        </div>
      )}
      {sub === 'AuthorizationError' && (
        <div className="flex flex-col gap-3">
          <div className="bg-error/10 border border-error/20 rounded-xl p-3">
            <p className="text-sm font-medium text-error mb-1">Authorization failed</p>
            <p className="text-xs text-base-content/50">Your payment could not be authorized.</p>
          </div>
          <div className="flex gap-2"><OutlineBtn onClick={() => send('retry')}>Try Again</OutlineBtn><OutlineBtn onClick={() => send('back')}>Cancel</OutlineBtn></div>
        </div>
      )}
      {sub === 'Authorized' && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm font-medium text-success bg-success/10 rounded-xl px-3 py-2.5">
            <span>✓</span><span>Payment authorized</span>
          </div>
          <PrimaryBtn onClick={() => send('childExit')}>Continue to Review</PrimaryBtn>
        </div>
      )}
    </div>
  )
}

function ReviewPanel({ send }) {
  return (
    <div>
      <h2 className="text-base font-semibold mb-4">Review</h2>
      <div className="bg-base-200 rounded-xl p-4 mb-5">
        <p className="text-[9px] font-mono uppercase tracking-widest text-base-content/40 mb-2">Order Summary</p>
        {ITEMS.map(i => <div key={i.id} className="text-sm mb-1">{i.name} × {i.qty} — ${(i.price * i.qty).toFixed(2)}</div>)}
        <div className="pt-3 border-t border-base-300 text-sm font-bold">Total: ${TOTAL.toFixed(2)}</div>
      </div>
      <div className="flex gap-3"><OutlineBtn onClick={() => send('back')}>Back</OutlineBtn><PrimaryBtn onClick={() => send('submitOrder')}>Place Order</PrimaryBtn></div>
    </div>
  )
}

function ConfirmationPanel({ send }) {
  return (
    <div className="flex flex-col items-center gap-5 py-6 text-center">
      <div className="w-12 h-12 rounded-full bg-success/10 border border-success/20 flex items-center justify-center text-xl">✓</div>
      <div>
        <h2 className="text-base font-semibold text-success mb-1">Order confirmed</h2>
        <p className="text-xs font-mono text-base-content/50">ID: ORD-{Math.random().toString(36).substring(2, 9).toUpperCase()}</p>
      </div>
      <div className="w-full bg-base-200 rounded-xl p-4 text-sm text-base-content/60 text-left">Your order has been placed successfully.</div>
      <OutlineBtn onClick={() => send('restart')}>Start New Order</OutlineBtn>
    </div>
  )
}

export default function App() {
  const { stateKey, send, isDark } = useSharedState()
  const top = (stateKey || '').split('.')[0]
  const isHsm = (stateKey || '').includes('.')
  const currentStep = stateToStep(stateKey)

  return (
    <div data-theme={isDark ? 'dark' : 'light'} className="min-h-screen flex items-center justify-center p-4 bg-base-200">
      <div className="w-full max-w-sm bg-base-100 border border-base-300 rounded-2xl p-5">
        <StepIndicator currentStep={currentStep} />
        {top === 'Cart' && <CartPanel send={send} />}
        {top === 'Shipping' && <ShippingPanel send={send} />}
        {top === 'Payment' && (isHsm ? <PaymentHSMPanel stateKey={stateKey} send={send} /> : <PaymentFlatPanel send={send} />)}
        {top === 'Review' && <ReviewPanel send={send} />}
        {top === 'Confirmation' && <ConfirmationPanel send={send} />}
        {stateKey && (
          <div className="mt-4 text-center">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-base-200 text-base-content/40">{stateKey}</span>
          </div>
        )}
      </div>
    </div>
  )
}
