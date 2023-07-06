import { Store, atom, map } from 'nanostores'
import { useStore } from '@nanostores/react'
import * as store from '../store'
import { isStore, peek } from '../lib/nanostore-utils'
import { Inspector } from '../nanostore-inspector/Inspector'
// import { InspectorNodeRenderer } from './InspectorNodeRenderer'
import { useStateMachineContext } from '../statetree-machine/useStateMachine'

export function DebugPane({}) {
  const [_, machine] = useStateMachineContext()
  const { state, model } = machine
  return <Inspector data={{
    state, 
    model,
    // code: store.code
  }} />
}

const test = atom({ test: {nested: { ok: true, store: map({ count: 1 }) }}})

export function DebugStore({ store }: { store: Store}) {
  console.log('DebugStore', { store })
  const data = useStore(store)
  console.log('store value', data)
  return <DebugValue value={data} />
}


export function DebugValue({ value }: { value: any }) {
  console.log('debug', typeof value,  value)
  if (['function'].includes(typeof value)) {
    return <div />
  }
  if (typeof value !== 'object') {
    return <span>{value}</span>
  }
  if (isStore(value)) {
    console.log('using debug store', value)
    return <DebugStore store={value} />
  }
  const keys = Object.keys(value)
  return <ul className='pl-4'>
    {keys.map(key => {
      const item = value[key]
      const itIsStore = isStore(item)
      const storeValue = itIsStore && peek(item)
      const valueType = typeof (storeValue ?? item)
      const text = `(${valueType})`
      const isPrimitive = valueType !== 'object'
      return <li key={key}>
        <p>
          {key} {text} {itIsStore ? 'store': ''}: 
          {isPrimitive ? 
            <DebugValue value={item} /> 
          : ''            
          }
        </p>
        {
          !isPrimitive && <DebugValue value={item} />
        }
        {/* <DebugValue value={item} /> */}
      </li> 
    })}
    {/* TODO: debug object {keys.join(', ')} */}
  </ul>
  // if (isStore(value)) {
  //   return <DebugStore store={value} />
  // }

}