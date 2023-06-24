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
const ast = atom()


const machine = {
  mode: machineMode,
  state: machineState,
  ...api
}

const app = {
  code,
  model,
  machine
}

;(window as any).app = app

export { app, code, model, ast, machine }