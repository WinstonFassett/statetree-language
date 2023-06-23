import { createContext } from 'react';
import { Statemachine } from '../../src/language/generated/ast';

// import MonacoReactEditor from './MonacoReactEditorWithJsxConfig'
// import MonacoEditorReactJsx from './MonacoEditorReactJsx'

type ModelState = {
  model: Statemachine|undefined
  setModel (model: Statemachine): void
}
export const ModelContext = createContext<ModelState>({
  model: undefined,
  setModel: () => {}
});
