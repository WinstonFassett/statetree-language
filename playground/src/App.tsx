import './App.css'
// import MonacoSandpack from './MonacoSandpack'
import {Playground} from './Playground2'
import {DockView} from './DockView'
// import MonacoEditorJsx from './MonacoEditorJsx2'
// import MonacoEditorJsx from './MonacoEditorJsx'
import MonacoReactEditor from './MonacoReactEditorWithJsxLibThing'
import { useState } from 'react'
import { ModelContext } from './ModelContext'
import { Statemachine } from '../../src/language/generated/ast'
import StatetreeSandpackFiddle from './StatetreeSandpackFiddle'
function App() {
  const [model, setModel] = useState<Statemachine>() 

  return (<ModelContext.Provider value={{model, setModel}}>
    {/* <Playground /> */}
    {/* <DockView /> */}
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
