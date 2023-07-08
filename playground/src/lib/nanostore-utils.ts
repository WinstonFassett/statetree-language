import { MapCreator, MapStore, ReadableAtom, clean, map, onMount } from 'nanostores'

export function peek<T>(store: ReadableAtom<T>): T {
  return (store as object as { value: T }).value
}

export function isStore(value: any) {
  return value && value.subscribe
}


export function mapTemplate(
  init?: (store: MapStore, id: string) => (() => void) | undefined,
  onBuild?: (id: string) => void
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

// /**
//  * Add listener for store creation from map template.
//  *
//  * ```js
//  * import { onBuild, onSet } from 'nanostores'
//  *
//  * onBuild(User, ({ store }) => {
//  *   onSet(store, ({ newValue, abort }) => {
//  *     if (!validate(newValue)) abort()
//  *   })
//  * })
//  * ```
//  *
//  * You can communicate between listeners by `payload.shared`.
//  *
//  * @param Template The store to add listener.
//  * @param listener Event callback.
//  * @returns A function to remove listener.
//  */
// export function onBuild<
//   Shared = never,
//   Template extends MapTemplate = MapTemplate
// >(
//   Template: Template,
//   listener: (payload: {
//     shared: Shared
//     store: TemplateStore<Template>
//   }) => void
// ): () => void {
//   return on(Template, listener, BUILD, runListeners => {
//     let originBuild = Template.build
//     Template.build = (...args) => {
//       let store = originBuild(...args)
//       runListeners({ store })
//       return store
//     }
//     return () => {
//       Template.build = originBuild
//     }
//   })
// }
// const BUILD = 4

// export type TemplateStore<Template> = Template extends MapTemplate<
//   infer Value,
//   any[],
//   infer StoreExt
// >
//   ? MapStore<Value & { id: string }> & StoreExt
//   : any

// export interface MapTemplate<
//   Value extends object = any,
//   Args extends any[] = any[],
//   StoreExt = {}
// > {
//   (id: string, ...args: Args): MapStore<Value & { id: string }> & StoreExt
//   cache: {
//     [id: string]: MapStore<Value & { id: string }>
//   }
// }

