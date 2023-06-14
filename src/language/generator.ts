import { EmptyFileSystem } from "langium";
// import { createHelloWorldServices } from '../language-server/hello-world-module';
import { Statemachine } from "./generated/ast";
// import { generateCommands } from '../generator/generator';
import { extractAstNodeFromString } from "../langium-utils/langium-ast";
import { createStatetreeServices } from "./statetree-module"
import { generateStatements } from '../codegen'
/**
 * Parses a MiniLogo program & generates output as a list of Objects
 * @param miniLogoProgram MiniLogo program to parse
 * @returns Generated output from this MiniLogo program
 */
export async function parseAndGenerate (miniLogoProgram: string): Promise<Object[]> {
    const services = createStatetreeServices(EmptyFileSystem).Statetree;
    const model = await extractAstNodeFromString<Statemachine>(miniLogoProgram, services);
    // generate mini logo drawing commands from the model
    const cmds = generateStatements(model);
    return Promise.resolve(cmds);
}