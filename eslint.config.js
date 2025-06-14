// import core dependencies
import eslint from "@eslint/js";
// eslint-disable-next-line import/no-unresolved
import typescript from "typescript-eslint";
import globals from "globals";

// import plugins
import formatting from "@stylistic/eslint-plugin";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import node from "eslint-plugin-n";
import html from "eslint-plugin-html";
import important from "eslint-plugin-import";
import security from "eslint-plugin-security";

// import modules
import coreDisableProblems from "./rules/core.disable.problems.js";
import coreOverrideProblems from "./rules/core.override.problems.js";
import coreOverrideSuggestions from "./rules/core.override.suggestions.js";
import coreOverrideFormatting from "./rules/core.override.formatting.js";
import nodeDisableProblems from "./rules/node.disable.problems.js";
import nodeOverrideProblems from "./rules/node.override.problems.js";
import nodeOverrideSuggestions from "./rules/node.override.suggestions.js";
import typescriptOverrideStrict from "./rules/typescript.override.strict.js";

// extends eslint recommended, stylistic recommended, typescript strictly typed, import recommended, node recommended, react + hooks recommended, security recommended and custom rules
export default typescript.config(eslint.configs.recommended, formatting.configs.recommended, ...typescript.configs.strictTypeChecked, important.flatConfigs.recommended, important.flatConfigs.typescript, node.configs[`flat/recommended`], react.configs.flat.recommended, hooks.configs[`recommended-latest`], security.configs.recommended, {
    name: `eslint-config-muleslint/recommended`,
    // lint js as well as ts, exclude build files
    files: [ `**/*.{js,jsx,ts,tsx}` ],
    ignores: [ `**/build/**`, `**/dist/**` ],
    languageOptions: {
        ...react.configs.flat.recommended.languageOptions,
        ecmaVersion: `latest`,
        sourceType: `module`,
        // typescript parser for eslint + options
        parser: typescript.parser,
        parserOptions: {
            // enable type-checked linting
            projectService: true,
            // general parser options
            allowReserved: false,
            ecmaFeatures: {
                impliedStrict: true,
                // why would someone do this ?
                globalReturn: false,
                jsx: true
            }
        },
        // global variables for supported environments
        globals: {
            ...globals.browser,
            ...globals.serviceworker,
            ...globals.nodeBuiltin
        }
    },
    linterOptions: {
        // disable ESLint inline comments
        noInlineConfig: false
    },
    // declare as plugin for compatibility
    plugins: {
        html
    },
    // custom rules
    rules: {
        ...coreDisableProblems,
        ...coreOverrideProblems,
        ...coreOverrideSuggestions,
        ...coreOverrideFormatting,
        ...nodeDisableProblems,
        ...nodeOverrideProblems,
        ...nodeOverrideSuggestions,
        ...typescriptOverrideStrict
    }
}, {
    // spread flat config for disabling type-checked linting
    ...typescript.configs.disableTypeChecked,
    // apply for plain javascript files
    files: [ `**/*.{js,jsx}` ]
});