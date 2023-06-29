import { useEffect, useState } from 'react'
import { Statemachine } from '../../src/language/generated/ast'
import './App.css'
import StatetreeSandpackFiddle from './sandpack/StatetreeSandpackFiddle'
import { ModelContext } from './statetree-machine/ModelContext'
import { StateMachineInstanceProvider } from './statetree-machine/useStateMachine'
import * as store from './store'
import { model as sharedModel } from './store'
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
  return (<div className='h-full relative'>
    <ModelContext.Provider value={{model, setModel: innerSetModel}}>
      <StateMachineInstanceProvider model={model}>
        {/* <PlainSandpack /> */}
        {/* <Playground /> */}
        <StatetreeSandpackFiddle />
      </StateMachineInstanceProvider>
    </ModelContext.Provider>
    </div>)
}

export default App
