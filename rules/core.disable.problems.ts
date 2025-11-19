/**
 * Disable eslint:recommended rules
 * @module
 */

// import types
import type {Config} from "eslint/config";

/**
 * Disable rules related to possible problems.
 */
export const coreDisableProblems: Config[`rules`] = {
    "no-sparse-arrays": [ `off` ],
    // as annoying as this rule can be I think it's better to keep the warning ...
    // use the ts extension rule
    "no-unused-vars": [ `off` ],
    "@typescript-eslint/no-unused-vars": [ `warn` ]
};