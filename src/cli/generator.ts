import fs from 'fs';
import { CompositeGeneratorNode, NL } from 'langium';
import path from 'path';
import { Statemachine } from '../language/generated/ast';
import { extractDestinationAndName } from './cli-util';
import { generateStatements } from '../codegen';

export function generateJavaScript(model: Statemachine, filePath: string, destination: string | undefined): string {
    const data = extractDestinationAndName(filePath, destination);
    const generatedFilePath = `${path.join(data.destination, data.name)}.js`;

    const fileNode = new CompositeGeneratorNode();
    fileNode.append('"use strict";', NL, NL);
    
    const statements = generateStatements(model)

    if (!fs.existsSync(data.destination)) {
        fs.mkdirSync(data.destination, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, statements.join('\n'));
    return generatedFilePath;
}

