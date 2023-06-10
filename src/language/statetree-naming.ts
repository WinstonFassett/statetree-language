/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import type { State } from './generated/ast';
import { isState } from './generated/ast';

export function toQualifiedName(pack: State, childName: string): string {
    return (isState(pack.$container) ? toQualifiedName(pack.$container, pack.name) : pack.name) + '.' + childName;
}

export class QualifiedNameProvider {

    /**
     * @param qualifier if the qualifier is a `string`, simple string concatenation is done: `qualifier.name`.
     *      if the qualifier is a `State` fully qualified name is created: `package1.package2.name`.
     * @param name simple name
     * @returns qualified name separated by `.`
     */
    getQualifiedName(qualifier: State | string, name: string): string {
        let prefix = qualifier;
        if (isState(prefix)) {
            prefix = (isState(prefix.$container)
                ? this.getQualifiedName(prefix.$container, prefix.name) : prefix.name);
        }
        return (prefix ? prefix + '.' : '') + name;
    }

}
