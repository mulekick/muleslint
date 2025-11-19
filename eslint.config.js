/* eslint-disable import/no-unresolved */
import muleslint from "@mulekick/eslint-config-muleslint";
import {defineConfig} from 'eslint/config';

// .eslintignore doesn't work with flat configs
export default defineConfig(...muleslint, {
    ignores: [ `**/node_modules/**`, `**/dist/**`, `**/build/**`, `**/sample/**` ]
});