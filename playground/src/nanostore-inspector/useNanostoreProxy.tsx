import { Store } from 'nanostores';
import { useEffect, useMemo, useState } from 'react';
import { isStore, peek } from '../lib/nanostore-utils';

export function useNanostoreProxy(data: any) {
  const [version, setVersion] = useState(0);
  const onChange = () => setVersion(version => version + 1);
  const proxy = useMemo(() => createDeepOnChangeProxy(data, onChange), [data]);
  useEffect(() => () => {
    console.log('TODO: dispose deep store proxy');
  }, []);
  return proxy;
}
let proxyCache = new WeakMap();
let storeValueCache = new WeakMap();
function createDeepOnChangeProxy(target: any, onChange: () => void): any {
  return new Proxy(target, {
    get(target, property) {
      const item = target[property];
      if (property === '__store') {
        return item;
      }
      if (item && typeof item === 'object') {
        if (proxyCache.has(item)) return proxyCache.get(item);
        if (isStore(item)) {
          // instead of proxy, return value holder
          const __store = item as Store;
          const storeValue = {
            __store,
            __value: peek(__store)
          };
          storeValueCache.set(item, storeValue);
          __store.listen((value: any) => {
            storeValue.__value = value;
            onChange();
          });
          return storeValue;
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
