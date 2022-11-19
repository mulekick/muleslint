"use strict";

/* this npm package has to rely on commonJS to manage dependencies
 * eslint does not accept es modules exports for shareable configs ...
 * https://github.com/eslint/eslint/issues/14137
 * https://stackoverflow.com/questions/69554485/eslint-error-must-use-import-to-load-es-module
 * https://stackoverflow.com/questions/70487806/must-use-import-to-load-es-module-eslintrc-js
 */

module.exports = {
    env: {
        es2022: true,
        node: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 13,
        // Upgrade to ESM modules (import)
        sourceType: `module`,
        ecmaFeatures: {
            "impliedStrict ": true,
            // why would someone do this ?
            globalReturn: false
        }
    },
    globals: {
        app: `readonly`
    },
    plugins: [
        // Lint scripts embedded in HTML pages
        `html`,
        // additional set of rules for node.js
        `node`,
        // validates modules imports and exports
        `import`
    ],
    // eslint-disable-next-line quote-props
    extends: [
        `eslint:recommended`,
        `plugin:node/recommended`,
        `plugin:import/recommended`,
        ...[
            `./rules/core.disable.problems.js`,
            `./rules/core.override.formatting.js`,
            `./rules/core.override.problems.js`,
            `./rules/core.override.suggestions.js`,
            `./rules/node.disable.problems.js`,
            `./rules/node.override.problems.js`,
            `./rules/node.override.suggestions.js`
        ].map(require.resolve)
    ],
    // Disable ESLint inline comments
    noInlineConfig: false,
    // Don't look for ESLint files in parent folders
    root: true
};
