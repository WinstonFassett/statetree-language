import fs from 'fs';
import chalk from 'chalk';
import { Command } from 'commander';
import { Statemachine } from '../language/generated/ast';
import { StatetreeLanguageMetaData } from '../language/generated/module';
import { createStatetreeServices } from '../language/statetree-module';
import { extractAstNode } from './cli-util';
import { generateJavaScriptFile, generateStatetreeFile } from './generator';
import { NodeFileSystem } from 'langium/node';
import { convertFromXState } from '../language/convertFromXState';
import { generateMatchina, MatchinaMode } from '../language/codegen/generateMatchina';
import { extractDestinationAndName } from './cli-util';
import path from 'path';

export const generateAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createStatetreeServices(NodeFileSystem).Statetree;
    const model = await extractAstNode<Statemachine>(fileName, services);
    if (opts.target === 'matchina') {
        const code = generateMatchina(model, { mode: opts.mode as MatchinaMode });
        const data = extractDestinationAndName(fileName, opts.destination);
        const outPath = `${path.join(data.destination, data.name)}.matchina.js`;
        if (!fs.existsSync(data.destination)) fs.mkdirSync(data.destination, { recursive: true });
        fs.writeFileSync(outPath, code);
        console.log(chalk.green(`Matchina code generated successfully: ${outPath}`));
    } else {
        const generatedFilePath = generateJavaScriptFile(model, fileName, opts.destination);
        console.log(chalk.green(`JavaScript code generated successfully: ${generatedFilePath}`));
    }
};

export const importXStateAction = async (sourceFile: string, outFile: string, opts: GenerateOptions): Promise<void> => {
    console.log('todo: import XState', {fileName: outFile, opts})
    const json = fs.readFileSync(sourceFile, 'utf-8')
    const xstateData = JSON.parse(json) as any
    const model = convertFromXState(xstateData)
    console.log({ model })
    const generatedFilePath = generateStatetreeFile(model, outFile, opts.destination);
    console.log(chalk.green(`Statetree code generated successfully: ${generatedFilePath}`));
}

export type GenerateOptions = {
    destination?: string;
    target?: string;
    mode?: string;
}

export default function(): void {
    const program = new Command();

    program
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        .version(require('../../package.json').version);

    const fileExtensions = StatetreeLanguageMetaData.fileExtensions.join(', ');
    program
        .command('generate')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .option('-t, --target <target>', 'output target: js (default) or matchina')
        .option('-m, --mode <mode>', 'matchina mode: flat, flattened, nested (default: inferred)')
        .description('generates code from a Statetree source file')
        .action(generateAction);

    const xstateFileExtensions = ['json'].join(', ');
    program
        .command('import')
        .argument('<source>', `xstate file (possible file extensions: ${xstateFileExtensions})`)
        .argument('<out>', `out file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('generates Statetree source code for XState source file')
        .action(importXStateAction);

    program.parse(process.argv);
}
