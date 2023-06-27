import { ObjectInspector, chromeLight, chromeDark } from 'react-inspector'
import { createNodeRenderer, useNodeRenderer } from './InspectorNodeRenderer'
import { Store } from 'nanostores'
import { isStore, peek } from './lib/nanostore-utils'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useStore } from '@nanostores/react'
import { theme } from './store'

export const Inspector = (...[{ data }]: Parameters<typeof ObjectInspector>) => {
  // console.log({ data })
  const storeMap = useMemo(() => new WeakMap(), [])
  const nodeRenderer = useNodeRenderer(() => {
    // console.log('change')
  })
  const isDark = useStore(theme.dark)
  // console.log({ chromeDark})
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
    console.log('dispose deep store proxy')
  }, [])
  return proxy
}


let proxyCache = new WeakMap();
let storeValueCache = new WeakMap();
function createDeepOnChangeProxy(target: any, onChange: () => void): any {
  // let map = 
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
          // console.log(property, {storeValue})
          return storeValue
        } else {
          const proxy = createDeepOnChangeProxy(item, onChange);
          proxyCache.set(item, proxy);
          return proxy;
        }
      }
      return item;
    },
    // set(target, property, newValue) {
    //   target[property] = newValue;
    //   onChange();
    //   return true;
    // },
  });
}



function createHandler<T>(path: string[] = []) {
  return 
}
// const createHander = <T>(path: string[] = []) => ({
// });

// const proxy = new Proxy(obj ,createHander<ObjectType>());

function wrapStores(root: any, onChange: () => void, cache: WeakMap<Store, any>): any {
  // console.log('wrapStores', root)
  return createDeepOnChangeProxy(root, onChange)
  // if (root === undefined || typeof root !== 'object') return root;
  // let wrapper = cache.get(root)
  // if (wrapper) { return wrapper }
  // wrapper = new Proxy(root, {
  //   get: (target, key): any => {
  //       if (key == 'isProxy') return true;
  //       if (typeof target[key] === 'object' && target[key] != null)
  //           // return new Proxy(
  //           //     target[key],
  //           //     createHandler<any>([...path, key as string])
  //           // );
  //           return wrapStores(target[key], onChange, cache)
  //       return target[key];
  //   },
  //   // set: (target, key, value) =>  {
  //   //     // console.log(`Setting ${[...path, key]} to: `, value);
  //   //     target[key] = value;
  //   //     return true;
  //   // }
  // })
  // // wrapper = new Proxy(value, { get(target, prop, receiver) {
  // //   const value = value[prop] //Reflect.get(target, prop, receiver);
  // //   if (typeof value !== 'object') {
  // //     return value
  // //   }
  // //   // if (isStore(value)){
  // //   //   // console.log('todo: proxy object store', prop, target)
  // //   //   const peeked = value.value
  // //   //   if (typeof peeked !== 'object') { 
  // //   //     return peeked
  // //   //   } 
  // //   //   // return cachedObjectStoreValue(value)
  // //   //   return store
  // //   // }
  // //   return wrapStores(value, onChange, cache)
  // // }})
  // cache.set(root, wrapper!)
  // return wrapper
}


// const mapStoreValues = new WeakMap()

// function cachedObjectStoreValue (store: Store) {
//   const cached = mapStoreValues.get(store)
//   console.log('creating cached value, store')
//   if (cached) return cached
//   const value = {
//     __store: store,
//     properties: 'todo'
//   }
//   mapStoreValues.set(store, value)
//   return value
// }

;


