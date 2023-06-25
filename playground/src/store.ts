import { atom, map, } from 'nanostores'
import { Statemachine } from '../../src/language/generated/ast'

const store = map()

const files = map({})

const machineMode = atom()
const machineState = atom({})

const model = atom<Statemachine|undefined>()
const code = atom (``)
// history
const api  = {
  send (event: any) {
    console.log('todo: send', event)
  }
}

const machine = {
  mode: machineMode,
  state: machineState,
  ...api
}

const dark = atom(true)
const theme = { dark }

export { theme, code, model, machine }

;(window as any).app = {
  theme,
  code,
  model,
  machine
}
