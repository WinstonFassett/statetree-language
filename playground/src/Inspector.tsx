import { ObjectInspector } from 'react-inspector'
import { InspectorNodeRenderer } from './InspectorNodeRenderer'

export const Inspector = ([props]: Parameters<typeof ObjectInspector>) => {
  return ObjectInspector({
    ...props,
    nodeRenderer: {InspectorNodeRenderer}
  })
}