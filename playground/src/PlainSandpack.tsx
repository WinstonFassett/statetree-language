import { Sandpack } from '@codesandbox/sandpack-react'
import { StatetreeEditor } from './StatetreeEditor'
import { useContext } from 'react'
import { ModelContext } from './ModelContext'

export function PlainSandpack() {
  const {model, setModel} = useContext(ModelContext)
  return <div className="h-screen w-full flex flex-col items-stretch">
    <h3 className="p-4 text-xl">Plain Sandpack</h3>
      <StatetreeEditor onModelCreated={setModel}  />
    <div className="h-1/2">
    </div>
    <div className="p-4 relative">
      <Sandpack options={{
        showTabs: true,
        closableTabs: true,
      }} />
    </div>    
  </div>
}
