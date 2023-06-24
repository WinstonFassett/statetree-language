import { ReadableAtom } from 'nanostores'

export function peek<T>(store: ReadableAtom<T>): T {
  return (store as object as { value: T }).value
}

export function isStore(value: any) {
  return value && value.subscribe
}
