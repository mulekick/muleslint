import muleslint from "@mulekick/eslint-config-muleslint";
// eslint-disable-next-line node/no-missing-import
import typescript from "typescript-eslint";

// .eslintignore doesn't work with flat configs
export default typescript.config(...muleslint, {
    ignores: [ `**/node_modules/**`, `**/dist/**`, `**/build/**` ]
});