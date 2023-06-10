/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import type { AstNode } from 'langium';
import { AbstractFormatter, Formatting } from 'langium';
import * as ast from './generated/ast';

export class StatetreeFormatter extends AbstractFormatter {

    protected format(node: AstNode): void {
        // if (ast.isPackageDeclaration(node)) {
        //     const formatter = this.getNodeFormatter(node);
        //     const bracesOpen = formatter.keyword('{');
        //     const bracesClose = formatter.keyword('}');
        //     formatter.interior(bracesOpen, bracesClose).prepend(Formatting.indent());
        //     bracesClose.prepend(Formatting.newLine());
        // } else 
        if (ast.isState(node)) {
            const formatter = this.getNodeFormatter(node);
            const bracesOpen = formatter.keyword('{');
            const bracesClose = formatter.keyword('}');
            formatter.interior(bracesOpen, bracesClose).prepend(Formatting.indent());
            bracesClose.prepend(Formatting.newLine());
        } else if (ast.isStatemachine(node)) {
            const formatter = this.getNodeFormatter(node);
            const nodes = formatter.nodes(...node.states);
            nodes.prepend(Formatting.noIndent());
        }
    }

}
