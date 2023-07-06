/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import type { AstNode, AstNodeDescription, LangiumDocument, PrecomputedScopes } from 'langium';
import type { StatetreeServices } from './statetree-module';
// import type { QualifiedNameProvider } from './statetree-naming';
import type { Statemachine, State } from './generated/ast';
import { DefaultScopeComputation, interruptAndCheck, MultiMap, streamAllContents } from 'langium';
import { CancellationToken } from 'vscode-jsonrpc';
import {  isState } from './generated/ast';

const isType = isState

export class StatetreeScopeComputation extends DefaultScopeComputation {

    // qualifiedNameProvider: QualifiedNameProvider;

    constructor(services: StatetreeServices) {
        super(services);
        // this.qualifiedNameProvider = services.references.QualifiedNameProvider;
    }

    /**
     * Exports only types (`DataType or `Entity`) with their qualified names.
     */
    override async computeExports(document: LangiumDocument, cancelToken = CancellationToken.None): Promise<AstNodeDescription[]> {
        const descr: AstNodeDescription[] = [];
        for (const modelNode of streamAllContents(document.parseResult.value)) {
            await interruptAndCheck(cancelToken);
            if (isType(modelNode)) {
                let name = this.nameProvider.getName(modelNode);
                if (name) {
                    if (isState(modelNode.$container)) {
                        // name = this.qualifiedNameProvider.getQualifiedName(modelNode.$container as State, name);
                    }
                    descr.push(this.descriptions.createDescription(modelNode, name, document));
                }
            }
        }
        return descr;
    }

    override async computeLocalScopes(document: LangiumDocument, cancelToken = CancellationToken.None): Promise<PrecomputedScopes> {
        const model = document.parseResult.value as Statemachine;
        const scopes = new MultiMap<AstNode, AstNodeDescription>();
        await this.processContainer(model, scopes, document, cancelToken);
        return scopes;
    }

    protected async processContainer(container: Statemachine | State, scopes: PrecomputedScopes, document: LangiumDocument, cancelToken: CancellationToken): Promise<AstNodeDescription[]> {
        const localDescriptions: AstNodeDescription[] = [];
        for (const element of container.states) {
            await interruptAndCheck(cancelToken);
            if (isType(element)) {
                const description = this.descriptions.createDescription(element, element.name, document);
                localDescriptions.push(description);
            } else if (isState(element)) {
                const nestedDescriptions = await this.processContainer(element, scopes, document, cancelToken);
                for (const description of nestedDescriptions) {
                    // Add qualified names to the container
                    // const qualified = this.createQualifiedDescription(element, description, document);
                    localDescriptions.push(description);
                }
            }
        }
        scopes.addAll(container, localDescriptions);
        return localDescriptions;
    }

    // protected createQualifiedDescription(pack: State, description: AstNodeDescription, document: LangiumDocument): AstNodeDescription {
    //     const name = this.qualifiedNameProvider.getQualifiedName(pack.name, description.name);
    //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //     return this.descriptions.createDescription(description.node!, name, document);
    // }

}
