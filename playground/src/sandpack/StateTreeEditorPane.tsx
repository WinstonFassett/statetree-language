import { useContext, useEffect } from 'react';
import { useSandpack } from "@codesandbox/sandpack-react";
import { ModelContext } from '../statetree-machine/ModelContext';
import { StatetreeEditor } from '../editor/StatetreeEditor';
import { LangiumAST } from '../../../src/langium-utils/langium-ast';
import { Statemachine } from '../../../src/language/generated/ast';
import { generateXState } from '../../../src/codegen';

export function StatetreeEditorPane ({ filename='/machine.statetree', outfile='/machine.xstate'}) {
  const { model, setModel } = useContext(ModelContext);

  const {sandpack} = useSandpack()
  const stateTreeCode = sandpack.files[filename].code

  return <StatetreeEditor value={stateTreeCode} onChange={value =>{
    sandpack.updateFile(filename, value)
  }} onAstCreated={onAstCreated} />

  function onAstCreated (astJson: string) {
    const statemachineAst = new LangiumAST().deserializeAST(astJson) as Statemachine;
    // // this.preview.current?.startPreview(statemachineAst, resp.diagnostics);
    setModel(statemachineAst)
    generateXState2(statemachineAst)
  }

  function generateXState2 (ast: Statemachine) {
    if (!sandpack.files[outfile]) {
      sandpack.addFile(outfile)
    }
    const xstate = generateXState(ast)
    const xstateJson = JSON.stringify(xstate)
    sandpack.updateFile(outfile, xstateJson)
  }
}
