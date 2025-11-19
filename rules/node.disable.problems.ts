/**
 * Disable plugin:n/recommended rules.
 * @module
 */

// import types
import type {Config} from "eslint/config";

/**
 * Disable rules related to possible problems.
 */
export const nodeDisableProblems: Config[`rules`] = {
    // for the moment I prefer shell aliases + shebang over package.json bin field
    "n/hashbang": [ `off` ],
    // unnecessary if errors are properly handled
    "n/no-process-exit": [ `off` ]
};