import { ObjectRootLabel, ObjectLabel } from 'react-inspector'
import { isStore } from '../lib/nanostore-utils'
import { Store } from 'nanostores'
import { useStore } from '@nanostores/react'
import { useEffect, useMemo } from 'react'

type Props = {
  depth:number
  name: string
  data: any
  isNonenumerable: boolean
  expanded: boolean
}

export function useNodeRenderer(onChange: () => void) {
  const renderer = useMemo(() =>createNodeRenderer(onChange), [])
  return renderer
}

export function createNodeRenderer(onChange: () => void) {
  const renderer = ({ depth, name, data, isNonenumerable, expanded }: Props) => {
    // console.log('render', name, data)
    // if (data && ) {
    //   return <StoreInspector onChange={onChange} renderer={renderer} {...{ depth, name, data, isNonenumerable, expanded}} />
    // }
    if (data?.__store) {
      data = data.__value
    }
    // console.log({name, depth, data })
    return depth === 0
      ? <ObjectRootLabel name={name} data={data} />
      : <ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable} />;
  }
  return renderer
}


type StoreInspectorProps = Props & {
  data: Store
  onChange: () => void
  renderer: any
}

function StoreInspector({ renderer, onChange, depth, name, data, isNonenumerable, expanded }: StoreInspectorProps) {
  // console.log('store', name)
  const storeData = useStore(data)
  useEffect(() => {    
    // console.log('change', storeData)
  }, [storeData])
  return renderer({ depth, name, data, isNonenumerable, expanded})
  // return InspectorNodeRenderer({ depth, name, data: storeData, isNonenumerable, expanded})
  // return <span>store</span>
}