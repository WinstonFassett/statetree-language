import { atom, computed, map, onMount, } from 'nanostores'
import { Statemachine } from '../../src/language/generated/ast'

const store = map()

const files = map({})

const machineMode = atom()
const machineState = atom({})

const model = atom<Statemachine|undefined>()

function getModelErrors(model: Statemachine | undefined) {
  const diagnostics = model?.$document?.diagnostics
  return diagnostics?.filter((i) => i.severity === 1) || []
}

const modelErrors = computed([model], (model) => {
  return getModelErrors(model)
})
const modelIsValid = computed([modelErrors], errors => !errors || errors.length===0)

const latestValidModel = atom<Statemachine|undefined>()
onMount(latestValidModel, () => {
  const deps = computed([model, modelIsValid], (model, modelIsValid) => ({model, modelIsValid}))
  return deps.subscribe(({model, modelIsValid}) => {
    if (modelIsValid) latestValidModel.set(model)
  })
})

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
const toggleDark = () => dark.set(!dark.get())
const theme = { dark, toggleDark }

export { theme, code, model, modelErrors, modelIsValid, latestValidModel, machine }

;(window as any).app = {
  theme,
  code,
  model,
  machine
}

