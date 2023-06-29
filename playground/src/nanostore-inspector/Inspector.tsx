import { ObjectInspector, chromeLight, chromeDark } from 'react-inspector'
import { createNodeRenderer, useNodeRenderer } from './InspectorNodeRenderer'
import { Store } from 'nanostores'
import { isStore, peek } from '../lib/nanostore-utils'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useStore } from '@nanostores/react'
import { theme } from '../store'

export const Inspector = (...[{ data }]: Parameters<typeof ObjectInspector>) => {
  const storeMap = useMemo(() => new WeakMap(), [])
  const nodeRenderer = useNodeRenderer(() => {
  })
  const isDark = useStore(theme.dark)
  const wrapped = useDeepStoreProxy(data)
  return <div className={`pl-2 pt-1 h-full ${isDark ? "bg-[rgb(36,36,36)]" :"bg-white"}`}>
    <ObjectInspector expandLevel={2} theme={{ ...(isDark ? chromeDark : chromeLight),  BASE_FONT_SIZE: '12px', TREENODE_FONT_SIZE: '12px', TREENODE_LINE_HEIGHT: '18px'  }} data={wrapped} nodeRenderer={nodeRenderer}/>
  </div>
}

function useDeepStoreProxy(data: any) {
  const [version, setVersion] = useState(0)
  const onChange = () => setVersion(version => version+1)
  const proxy = useMemo(() => createDeepOnChangeProxy(data, onChange), [data])
  useEffect(()=> () => {
    console.log('TODO: dispose deep store proxy')
  }, [])
  return proxy
}

let proxyCache = new WeakMap();
let storeValueCache = new WeakMap();
function createDeepOnChangeProxy(target: any, onChange: () => void): any {
  return new Proxy(target, {
    get(target, property) {
      const item = target[property];
      if (property === '__store') {
        return item
      }
      if (item && typeof item === 'object') {
        if (proxyCache.has(item)) return proxyCache.get(item);
        if (isStore(item)) {
          // instead of proxy, return value holder
          const __store = item as Store
          const storeValue = {
            __store,
            __value: peek(__store)
          }
          storeValueCache.set(item, storeValue)
          __store.listen((value: any) => {
            storeValue.__value = value
            onChange()
          })
          return storeValue
        } else {
          const proxy = createDeepOnChangeProxy(item, onChange);
          proxyCache.set(item, proxy);
          return proxy;
        }
      }
      return item;
    },
  });
}



