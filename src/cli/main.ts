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

export const generateAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createStatetreeServices(NodeFileSystem).Statetree;
    const model = await extractAstNode<Statemachine>(fileName, services);
    const generatedFilePath = generateJavaScriptFile(model, fileName, opts.destination);
    console.log(chalk.green(`JavaScript code generated successfully: ${generatedFilePath}`));
};

export const importXStateAction = async (sourceFile: string, outFile: string, opts: GenerateOptions): Promise<void> => {
    console.log('todo: import XState', {fileName: outFile, opts})
    const json = fs.readFileSync(sourceFile, 'utf-8')
    const xstateData = JSON.parse(json) as any
    const model = convertFromXState(xstateData)
    console.log({ model })
    // const services = createStatetreeServices(NodeFileSystem).Statetree;
    // // const model = await extractAstNode<Statemachine>(fileName, services);
    const generatedFilePath = generateStatetreeFile(model, outFile, opts.destination);
    console.log(chalk.green(`Statetree code generated successfully: ${generatedFilePath}`));
}

export type GenerateOptions = {
    destination?: string;
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
        .description('generates JavaScript code that prints "Hello, {name}!" for each greeting in a source file')
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
