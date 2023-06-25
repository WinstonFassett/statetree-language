import { Sandpack } from '@codesandbox/sandpack-react'

export function PlainSandpack() {
  return <div>
    <h3 className="p-4 text-xl">Plain Sandpack</h3>
    <div className="p-4 relative">
      <Sandpack options={{
        showTabs: true,
        closableTabs: true,
      }} />
    </div>
  </div>
}
