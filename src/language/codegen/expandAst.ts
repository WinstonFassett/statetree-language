import { AstNode, CstNode, DocumentState, Reference, getDocument, isAstNode, isAstNodeDescription, isLinkingError } from "langium";
import { State, Statemachine } from "../generated/ast";

export function expandAst<T extends(State|Statemachine)>(model: T): T {
  // console.log('EXPAND AST', model)
  if (model.sequence || model.loop) {    
    if (!model.init) {
      const firstState = model.states?.[0]
      if (firstState) {
        model.init = buildReference(firstState, { refText: firstState?.name })
      }    
    }
  }
  model.states = model.states?.map((state, index) => {
    if (model.sequence || model.loop) {
      const { event } = model
      const isLast = index === model.states.length-1
      const nextStateIndex = 
        !isLast ? index + 1 
        : isLast && model.loop ? 0 
        : -1
      if (nextStateIndex > -1) {
        const nextState = model.states[nextStateIndex]
        state.transitions.push({
          $container: model,
          $type: "Transition",
          event: event ?? "*",
          to: buildReference(nextState, {
            refText: nextState.name
          })
        })
      }
    }
    return expandAst(state)
  })
  return model
}


function buildReference<T extends AstNode>(
  node: T, 
  { refNode, refText }: {
    refNode?: CstNode | undefined, 
    refText: string
  }): Reference<T> {
  // See behavior description in doc of Linker, update that on changes in here.
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  
  const reference: Reference<T> = {
      $refNode: refNode,
      $refText: refText,
      get ref() {
          return node
      //     if (isAstNode(this._ref)) {
      //         // Most frequent case: the target is already resolved.
      //         return this._ref;
      //     } else if (isAstNodeDescription(this._nodeDescription)) {
      //         // A candidate has been found before, but it is not loaded yet.
      //         const linkedNode = linker.loadAstNode(this._nodeDescription);
      //         this._ref = linkedNode ??
      //             linker.createLinkingError({ reference, container: node, property }, this._nodeDescription);
      //     } else if (this._ref === undefined) {
      //         // The reference has not been linked yet, so do that now.
      //         const refData = linker.getLinkedNode({ reference, container: node, property });
      //         if (refData.error && getDocument(node).state < DocumentState.ComputedScopes) {
      //             // Document scope is not ready, don't set `this._ref` so linker can retry later.
      //             return undefined;
      //         }
      //         this._ref = refData.node ?? refData.error;
      //         this._nodeDescription = refData.descr;
      //     }
      //     return isAstNode(this._ref) ? this._ref : undefined;
      },
      // get $nodeDescription() {
      //     return this._nodeDescription;
      // },
      // get error() {
      //     return isLinkingError(this._ref) ? this._ref : undefined;
      // }
  };
  return reference;
}