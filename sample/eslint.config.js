/* eslint-disable n/no-unpublished-import */
import muleslint from "@mulekick/eslint-config-muleslint";
// eslint-disable-next-line import/no-unresolved
import {defineConfig} from 'eslint/config';

// .eslintignore doesn't work with flat configs
export default defineConfig(...muleslint, {
    ignores: [ `**/node_modules/**`, `**/dist/**`, `**/build/**` ]
});