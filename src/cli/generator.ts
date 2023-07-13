import fs from 'fs';
import { CompositeGeneratorNode, NL } from 'langium';
import path from 'path';
import { Statemachine } from '../language/generated/ast';
import { extractDestinationAndName } from './cli-util';
import { generateStatetree } from '../language/codegen/generateStatetree';
import { generateJavaScript } from '../language/codegen/generateJavaScript';

export function generateJavaScriptFile(model: Statemachine, filePath: string, destination: string | undefined): string {
    const data = extractDestinationAndName(filePath, destination);
    const generatedFilePath = `${path.join(data.destination, data.name)}.js`;

    const fileNode = new CompositeGeneratorNode();
    fileNode.append('"use strict";', NL, NL);
    
    const statements = generateJavaScript(model)

    if (!fs.existsSync(data.destination)) {
        fs.mkdirSync(data.destination, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, statements);
    return generatedFilePath;
}

export function generateStatetreeFile(model: Statemachine, filePath: string, destination: string | undefined, { source }: { source?: string} = {}): string {
    console.log({ source, filePath })
    const data = extractDestinationAndName(filePath, destination);
    console.log({ data })
    const generatedFilePath = `${path.join(data.destination, data.name)}.statetree`;

    // const fileNode = new CompositeGeneratorNode();
    // fileNode.append('"use strict";', NL, NL);
    
    const statements = generateStatetree(model, { source })

    if (!fs.existsSync(data.destination)) {
        fs.mkdirSync(data.destination, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, statements);
    return generatedFilePath;
}

