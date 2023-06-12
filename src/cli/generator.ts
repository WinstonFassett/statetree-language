import fs from 'fs';
import { CompositeGeneratorNode, NL, toString } from 'langium';
import path from 'path';
import { Statemachine } from '../language/generated/ast';
import { extractDestinationAndName } from './cli-util';

export function generateJavaScript(model: Statemachine, filePath: string, destination: string | undefined): string {
    const data = extractDestinationAndName(filePath, destination);
    const generatedFilePath = `${path.join(data.destination, data.name)}.js`;

    const fileNode = new CompositeGeneratorNode();
    fileNode.append('"use strict";', NL, NL);
    model.states.forEach(state => fileNode.append(`console.log('State: ${state.name}!');`, NL));

    if (!fs.existsSync(data.destination)) {
        fs.mkdirSync(data.destination, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, toString(fileNode));
    return generatedFilePath;
}
