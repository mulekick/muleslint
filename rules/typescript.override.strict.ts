/**
 * Override typescript:strictTypeChecked specific rules
 * @module
 */

// import types
import type {Config} from "eslint/config";

/**
 * Override typescript-related rules.
 */
export const typescriptOverrideStrict: Config[`rules`] = {
    // set of rules that make type assertions mandatory when needed ...
    "@typescript-eslint/no-unsafe-member-access": [ `warn` ],
    "@typescript-eslint/no-unsafe-assignment": [ `warn` ],
    "@typescript-eslint/no-unsafe-argument": [ `warn` ],
    "@typescript-eslint/no-unsafe-call": [ `warn` ],

    // enforce being specific about function signatures
    "@typescript-eslint/no-unsafe-function-type": [ `error` ],

    // warn only for those rules since it can improve DX when code is organized completely around types ...
    "@typescript-eslint/no-redundant-type-constituents": [ `warn` ],
    "@typescript-eslint/no-unnecessary-type-arguments": [ `warn` ],

    // warn only because it conflicts w/ node callback-return
    "@typescript-eslint/no-confusing-void-expression": [ `warn` ],

    // downgrade to warn, disable on a case by case basis ...
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [ `warn` ],
    "@typescript-eslint/no-unnecessary-condition": [ `warn` ],
    "@typescript-eslint/no-invalid-void-type": [ `warn` ]
};