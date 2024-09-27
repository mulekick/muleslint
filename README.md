# My ESLint config for Javascript, Typescript, React and Node 🚀

![GitHub package.json version](https://img.shields.io/github/package-json/v/mulekick/muleslint)
![GitHub License](https://img.shields.io/github/license/mulekick/muleslint)
![Last Commit](https://img.shields.io/github/last-commit/mulekick/muleslint)
![NPM Version](https://img.shields.io/npm/v/@mulekick/eslint-config-muleslint)
![NPM Downloads](https://img.shields.io/npm/dt/@mulekick/eslint-config-muleslint)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@mulekick/eslint-config-muleslint)](https://socket.dev/npm/package/@mulekick/eslint-config-muleslint)

I use the ESLint extension on Visual Studio code in my day-to day coding activities. I find ESLint to be of a great help to write some proper, clean-cut ES6 code, avoid errors and enforce best practices. Here is the configuration I use to lint my ```*.js```, ```*.ts```, ```*.jsx``` and  ```*.tsx``` files, available as a [shareable config](https://www.npmjs.com/package/@mulekick/eslint-config-muleslint).

## How I use ESLint in my dev environment

- Windows 10 x64, Hyper-V enabled.
- Debian Bookworm running in a Hyper-V VM.
- Node.js v20.17.0 LTS on Debian.
- VSCode targeting Debian through SSH.
- ESLint v8.57.1 installed globally.
- VSCode ESLint extension enabled.
- ```@mulekick/eslint-config-muleslint``` included in the project's dev dependencies.
- A minimal ```eslint.config.js``` file included in the project's root folder :

```js
import muleslint from "@mulekick/eslint-config-flat-sample";
export default muleslint;
```
## Use it in your own project
- Install with ```npx install-peerdeps --dev @mulekick/eslint-config-muleslint```.
- Be sure to add the above ```eslint.config.js``` file in your project's root folder. 

## Configuration details
- This configuration uses the new eslint [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files).
- It extends the following configurations :

| configuration                              | description                                                                                                                                                               |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------    |
| ```eslint.configs.recommended```           | core [eslint](https://eslint.org/) recommended configuration for ```*.js``` and ```*.ts``` files                                                                          |
| ```typescript.configs.strictTypeChecked``` | [typescript-eslint](https://typescript-eslint.io) strict configuration with [type-checked linting](https://typescript-eslint.io/getting-started/typed-linting) enabled 🤖 |
| ```react.configs.recommended```            | recommended configuration from the eslint [react plugin](https://www.npmjs.com/package/eslint-plugin-react)                 |
| ```plugin:node/recommended```              | recommended configuration from the eslint [node plugin](https://github.com/mysticatea/eslint-plugin-node)                                                                 |
| ```plugin:import/recommended```            | recommended configuration from the eslint [import plugin](https://github.com/import-js/eslint-plugin-import)                                                              |

- It also uses the [html plugin](https://github.com/BenoitZugmeyer/eslint-plugin-html) to lint JS code in HTML pages ```<script>``` tags.
- Quite a few of the ```eslint.configs.recommended``` recommended options are overriden 😁
- The use of modern ECMA features (ES6 and beyond) is enforced whenever possible.
- The use of [Crockford](https://www.crockford.com/code.html) indentation (4 spaces) and unix-style line breaks is enforced as well.
- [ESM modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules) use is enforced as well, therefore making strict mode mandatory everywhere 👍