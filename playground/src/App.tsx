import './App.css'
// import MonacoSandpack from './MonacoSandpack'
import {Playground} from './Playground2'
import {DockView} from './DockView'
// import MonacoEditorJsx from './MonacoEditorJsx2'
// import MonacoEditorJsx from './MonacoEditorJsx'
import MonacoReactEditor from './MonacoReactEditorWithJsxLibThing'
import { useEffect, useMemo, useState } from 'react'
import { ModelContext } from './ModelContext'
import { Statemachine } from '../../src/language/generated/ast'
import StatetreeSandpackFiddle from './StatetreeSandpackFiddle'
import * as store from './store'
import { model as sharedModel } from './store'
import { useStateMachine, StateMachineInstanceProvider } from './useStateMachine'
import { PlainSandpack } from './PlainSandpack'
console.log({ store, sharedModel })

function App() {
  const [model, innerSetModel] = useState<Statemachine>() 
  function setModel (model: Statemachine|undefined) {
    innerSetModel(model)
    sharedModel.set(model)
  }
  useEffect(() => {
    sharedModel.set(model)
    ;(globalThis as any).machine = model
    ;(window as any).windowModel = model
  }, [model])
  // const instance = useStateMachine(model)
  return (<div data-theme="night">
    <ModelContext.Provider value={{model, setModel: innerSetModel}}>
      <StateMachineInstanceProvider model={model}>
        <PlainSandpack />
        {/* <Playground /> */}
        {/* <StatetreeSandpackFiddle /> */}
        {/* <MonacoSandpack /> */}
        {/* <MonacoEditorJsx /> */}
        {/* <MonacoReactEditor /> */}
        {/* <MonacoEditorReactJsx /> */}
        {/* <MonacoReactEditor /> */}
      </StateMachineInstanceProvider>
    </ModelContext.Provider>
    </div>)
}

export default App
