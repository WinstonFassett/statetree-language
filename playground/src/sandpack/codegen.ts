import { SandpackState } from "@codesandbox/sandpack-react";
import { Machine } from 'xstate';
import { AstNode, LangiumDocument } from "langium";
import { StatetreeFormatter } from "../../../src/language/statetree-formatter";
import { URI } from 'vscode-uri';
import { Range, Position } from "vscode-languageserver-textdocument";
import { convertFromXState } from "../../../src/language/convertFromXState";
export function importXState(sandpack: SandpackState, code: string) {

  let data: any
  try {    
    data = JSON.parse(code)
    console.log({ data })    
  } catch (err) {
      console.log('failed to parse json', err)
  }
  try {
    const machine = Machine(data)
    console.log({ machine })

    const convertedAst = convertFromXState(data)
    console.log({ convertedAst })
    const $document: LangiumDocument<AstNode> = {
      uri: URI.parse("memory://statetree-import/machine.statetree"),
      textDocument: {
        uri: "",
        languageId: "",
        version: 0,
        getText: function (range?: Range | undefined): string {
          throw new Error("Function not implemented.");
        },
        positionAt: function (offset: number): Position {
          throw new Error("Function not implemented.");
        },
        offsetAt: function (position: Position): number {
          throw new Error("Function not implemented.");
        },
        lineCount: 0
      },
      state: 0,
      parseResult: {
        value: convertedAst,
        parserErrors: [],
        lexerErrors: []
      },
      references: []
    }
    // new StatetreeFormatter().formatDocument(convertedAst.$document)
  } catch (err) {
    console.log('failed to create xstate machine', err)
  }
}

