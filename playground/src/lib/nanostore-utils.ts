import { MapCreator, MapStore, ReadableAtom, clean, map, onMount } from 'nanostores'

export function peek<T>(store: ReadableAtom<T>): T {
  return (store as object as { value: T }).value
}

export function isStore(value: any) {
  return value && value.subscribe
}


export function mapTemplate(
  init?: (store: MapStore, id: string) => (() => void) | undefined
): MapCreator {
  let Template: any = (id: string) => {
    if (!Template.cache[id]) {
      Template.cache[id] = Template.build(id)
    }
    return Template.cache[id]
  }

  Template.build = (id: string) => {
    let store = map({ id })
    onMount(store, () => {
      let destroy: (() => void) | undefined
      if (init) destroy = init(store, id)
      return () => {
        delete Template.cache[id]
        if (destroy) destroy()
      }
    })
    return store
  }

  Template.cache = {}

  if (process.env.NODE_ENV !== 'production') {
    Template[clean] = () => {
      for (let id in Template.cache) {
        Template.cache[id][clean]()
      }
      Template.cache = {}
    }
  }

  return Template
}