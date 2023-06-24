import { ObjectRootLabel, ObjectLabel } from 'react-inspector'
import { isStore } from './lib/nanostore-utils'
import { Store } from 'nanostores'
import { useStore } from '@nanostores/react'
type Props = {
  depth:number
  name: string
  data: any
  isNonenumerable: boolean
  expanded: boolean
}

export const InspectorNodeRenderer = ({ depth, name, data, isNonenumerable, expanded }: Props) => {
  if (isStore(data)) {
    return <StoreInspector {...{ depth, name, data, isNonenumerable, expanded}} />
  }
  console.log({name, depth, data })
  return depth === 0
    ? <ObjectRootLabel name={name} data={data} />
    : <ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable} />;
}

type StoreInspectorProps = Props & {
  data: Store
}

function StoreInspector({ depth, name, data, isNonenumerable, expanded }: Props) {
  const storeData = useStore(data)
  return InspectorNodeRenderer({ depth, name, data: storeData, isNonenumerable, expanded})
  // return <span>store</span>
}