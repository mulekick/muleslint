/**
 * Shareable Eslint configuration
 * @module
 */

/* eslint-disable import/no-unresolved */

// import modules
import eslint from "@eslint/js";
import {defineConfig} from 'eslint/config';
import formatting from "@stylistic/eslint-plugin";
import typescript from "typescript-eslint";
import important from "eslint-plugin-import";
import node from "eslint-plugin-n";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import security from "eslint-plugin-security";
import html from "eslint-plugin-html";
import globals from "globals";

// import custom rules
import {coreDisableProblems} from "./rules/core.disable.problems.js";
import {coreOverrideProblems} from "./rules/core.override.problems.js";
import {coreOverrideSuggestions} from "./rules/core.override.suggestions.js";
import {coreOverrideFormatting} from "./rules/core.override.formatting.js";
import {nodeDisableProblems} from "./rules/node.disable.problems.js";
import {nodeOverrideProblems} from "./rules/node.override.problems.js";
import {nodeOverrideSuggestions} from "./rules/node.override.suggestions.js";
import {typescriptOverrideStrict} from "./rules/typescript.override.strict.js";

// import types
import type {Config} from "eslint/config";

/**
 * Export custom configuration.
 */
const muleslint: Array<Config> = defineConfig(
    // eslint recommended
    eslint.configs.recommended,
    // stylistic recommended
    formatting.configs.recommended,
    // typescript strictly typed
    typescript.configs.strictTypeChecked,
    // import recommended
    important.flatConfigs.recommended,
    important.flatConfigs.typescript,
    // node recommended
    node.configs[`flat/recommended`],
    // react + hooks recommended
    react.configs.flat.recommended,
    hooks.configs.flat.recommended,
    // security recommended
    security.configs.recommended,
    // custom rules
    {
        name: `eslint-config-muleslint/recommended`,
        // lint js as well as ts, exclude build files
        files: [ `**/*.{js,jsx,ts,tsx}` ],
        ignores: [ `**/dist/**`, `**/build/**` ],
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
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
    },
    // lint js only
    {
        // spread flat config for disabling type-checked linting
        ...typescript.configs.disableTypeChecked,
        // apply for plain javascript files
        files: [ `**/*.{js,jsx}` ]
    }
);

export default muleslint;