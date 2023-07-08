import { EmptyFileSystem } from "langium";
// import { createHelloWorldServices } from '../language-server/hello-world-module';
import { Statemachine } from "./generated/ast";
// import { generateCommands } from '../generator/generator';
import { extractAstNodeFromString } from "../langium-utils/langium-ast";
import { createStatetreeServices } from "./statetree-module"
import { generateStatements, generateStatetreeStatements } from '../codegen'
/**
 * Parses a Statetree program & generates output as a list of Objects
 * @param statetreeProgram Statetree program to parse
 * @returns Generated output from this Statetree program
 */
export async function parseAndGenerate (statetreeProgram: string): Promise<Object[]> {
    const services = createStatetreeServices(EmptyFileSystem).Statetree;
    const model = await extractAstNodeFromString<Statemachine>(statetreeProgram, services);
    // generate mini logo drawing commands from the model
    const cmds = generateStatements(model);
    return Promise.resolve(cmds);
}

export async function generateFromImported (model: Statemachine, { source } :{ source?: string } = {}): Promise<string> {
    // const services = createStatetreeServices(EmptyFileSystem).Statetree;
    // const model = await extractAstNodeFromString<Statemachine>(statetreeProgram, services);
    // generate mini logo drawing commands from the model
    const cmds = generateStatetreeStatements(model, { source });
    return Promise.resolve(cmds);
}