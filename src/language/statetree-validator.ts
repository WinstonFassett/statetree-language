import { ValidationChecks } from 'langium';
import { StatetreeAstType } from './generated/ast';
import type { StatetreeServices } from './statetree-module';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: StatetreeServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.StatetreeValidator;
    const checks: ValidationChecks<StatetreeAstType> = {
        // Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class StatetreeValidator {

    // checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
    //     if (person.name) {
    //         const firstChar = person.name.substring(0, 1);
    //         if (firstChar.toUpperCase() !== firstChar) {
    //             accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
    //         }
    //     }
    // }

}
