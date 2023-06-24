import './App.css'
// import MonacoSandpack from './MonacoSandpack'
import {Playground} from './Playground2'
import {DockView} from './DockView'
// import MonacoEditorJsx from './MonacoEditorJsx2'
// import MonacoEditorJsx from './MonacoEditorJsx'
import MonacoReactEditor from './MonacoReactEditorWithJsxLibThing'
import { useEffect, useState } from 'react'
import { ModelContext } from './ModelContext'
import { Statemachine } from '../../src/language/generated/ast'
import StatetreeSandpackFiddle from './StatetreeSandpackFiddle'
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
  return (<ModelContext.Provider value={{model, setModel: innerSetModel}}>
    {/* <Playground /> */}
    <StatetreeSandpackFiddle />
    {/* <MonacoSandpack /> */}
    {/* <MonacoEditorJsx /> */}
    {/* <MonacoReactEditor /> */}
    {/* <MonacoEditorReactJsx /> */}
    {/* <MonacoReactEditor /> */}
  </ModelContext.Provider>
  )
}

export default App
