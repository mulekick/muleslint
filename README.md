# My ESLint config for Javascript, Typescript, React and Node 🚀

![GitHub package.json version](https://img.shields.io/github/package-json/v/mulekick/muleslint)
![GitHub License](https://img.shields.io/github/license/mulekick/muleslint)
![Last Commit](https://img.shields.io/github/last-commit/mulekick/muleslint)
![NPM Version](https://img.shields.io/npm/v/@mulekick/eslint-config-muleslint)
![NPM Downloads](https://img.shields.io/npm/dt/@mulekick/eslint-config-muleslint)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@mulekick/eslint-config-muleslint)](https://socket.dev/npm/package/@mulekick/eslint-config-muleslint)

I use the ESLint extension on Visual Studio code in my day-to day coding activities. I find ESLint to be of a great help to write some proper, clean-cut ES6 code, avoid errors and enforce best practices. Here is the configuration I use to lint my `*.js`, `*.ts`, `*.jsx` and  `*.tsx` files, available as a [shareable config](https://www.npmjs.com/package/@mulekick/eslint-config-muleslint).

## How I use ESLint in my dev environment

- Windows 10 x64, Hyper-V enabled.
- Debian Bookworm running in a Hyper-V VM.
- Node.js v22.15.0 LTS on Debian.
- VSCode targeting Debian through SSH.
- VSCode ESLint extension enabled.
- ESLint v9.29.0 installed as a project dev dependency.
- `@mulekick/eslint-config-muleslint` installed as a project dev dependency.
- A minimal `eslint.config.js` file included in the project's root folder :

```js
// eslint-disable-next-line n/no-unpublished-import, n/no-missing-import
import muleslint from "@mulekick/eslint-config-muleslint";
// eslint-disable-next-line n/no-extraneous-import
import typescript from "typescript-eslint";

// .eslintignore doesn't work with flat configs
export default typescript.config(...muleslint, {
    ignores: [ `**/node_modules/**`, `**/dist/**`, `**/build/**` ]
});
```
## Use it in your own project
- Install with `npx install-peerdeps --dev @mulekick/eslint-config-muleslint`.
- Be sure to add the above `eslint.config.js` file in your project's root folder. 

## Configuration details
- This configuration uses the new eslint [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files).
- It extends the following configurations :

| configuration                          | description                                                                                                                                                               |
| ---------------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eslint.configs.recommended`           | core [eslint](https://eslint.org/) recommended configuration                                                                                                              |
| `stylistic.configs.recommended`        | recommended configuration for [stylistic-related](https://eslint.style/guide/why) eslint rules                                                                            |
| `typescript.configs.strictTypeChecked` | [typescript-eslint](https://typescript-eslint.io) strict configuration with [type-checked linting](https://typescript-eslint.io/getting-started/typed-linting) enabled 🤖 |
| `import.flatConfigs.recommended`       | recommended configuration from the eslint [import plugin](https://github.com/import-js/eslint-plugin-import)                                                              |
| `n.configs['flat/recommended']`        | recommended configuration from the eslint [node plugin](https://github.com/eslint-community/eslint-plugin-n)                                                              |
| `react.configs.flat.recommended`       | recommended configuration from the eslint [react plugin](https://www.npmjs.com/package/eslint-plugin-react)                                                               |
| `security.configs.recommended`         | recommended configuration from the eslint [security plugin](https://github.com/eslint-community/eslint-plugin-security)                                                   |

- It also uses the [html plugin](https://github.com/BenoitZugmeyer/eslint-plugin-html) to lint JS code in HTML pages `<script>` tags.
- Quite a few of the `eslint.configs.recommended` and `stylistic.configs.recommended` options are overriden 😁
- The use of modern ECMA features (ES6 and beyond) is enforced whenever possible.
- The use of [Crockford](https://www.crockford.com/code.html) indentation (4 spaces) and unix-style line breaks is enforced as well.
- [ESM modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules) use is enforced too, therefore making strict mode mandatory everywhere 👍