import { useEffect, useState } from 'react'
import { Statemachine } from '../../src/language/generated/ast'
import './App.css'
import StatetreeSandpackFiddle from './sandpack/StatetreeSandpackFiddle'
import { ModelContext } from './statetree-machine/ModelContext'
import { StateMachineInstanceProvider } from './statetree-machine/useStateMachine'
import * as store from './store'
import { model as sharedModel } from './store'
import { useStore } from '@nanostores/react'

// console.log({ store, sharedModel })

function App() {
  
  const model = useStore(store.latestValidModel)
  function setModel (model: Statemachine|undefined) {
    store.model.set(model)
  }
  useEffect(() => {
    // sharedModel.set(model)
    ;(globalThis as any).machine = store.model
    ;(window as any).windowModel = store.model
  }, [store.model])
  // useEffect(() => {
  //   console.log({ validModel: model })
  // }, [model])
  return (<div className='h-full relative'>
    <ModelContext.Provider value={{model, setModel}}>
      {/* <PlainSandpack /> */}
      {/* <Playground /> */}
      <StateMachineInstanceProvider model={model}>
        <StatetreeSandpackFiddle />
      </StateMachineInstanceProvider>
    </ModelContext.Provider>
    </div>)
}

export default App
