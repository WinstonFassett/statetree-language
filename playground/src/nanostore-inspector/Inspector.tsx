import { useStore } from '@nanostores/react'
import { computed } from 'nanostores'
import { useMemo } from 'react'
import { ObjectInspector, chromeDark, chromeLight } from 'react-inspector'
import { theme } from '../store'
import { useNanostoreProxy } from './useNanostoreProxy'

const $inspectorTheme = computed([theme.dark], (isDark) => {
  return { ...(isDark ? chromeDark : chromeLight),  BASE_FONT_SIZE: '12px', TREENODE_FONT_SIZE: '12px', TREENODE_LINE_HEIGHT: '18px'  }
})

export const Inspector = (...[{ data }]: Parameters<typeof ObjectInspector>) => {
  const storeMap = useMemo(() => new WeakMap(), [])
  const inspectorTheme = useStore($inspectorTheme)
  const isDark = useStore(theme.dark)
  const wrapped = useNanostoreProxy(data)
  return <div className={`pl-2 pt-1 h-full ${isDark ? "bg-[rgb(36,36,36)]" :"bg-white"}`}>
    <ObjectInspector expandLevel={2} theme={inspectorTheme as any} data={wrapped} />
  </div>
}


