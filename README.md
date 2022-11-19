# My ESLint configuration

I use the ESLint extension on Visual Studio code in my day-to day coding activities. As long as I don't switch to TypeScript, I find ESLint to be of a great help to write some proper, clean-cut ES6 code, avoid errors and enforce best practices. Here is the configuration I use to lint my ```*.js``` files, available as a [shareable config](https://www.npmjs.com/package/@mulekick/eslint-config-muleslint).

## How I use ESLint in my dev environment

- Windows 10 x64, Hyper-V enabled
- Debian Bullseye running in a Hyper-V VM
- Node.js v18.12.1 LTS on Debian
- VSCode targeting Debian through SSH
- VSCode ESLint extension enabled
- ```@mulekick/eslint-config-muleslint``` included in the project's dev dependencies
- a minimal ```.eslintrc.json``` file included in the project's root folder :
```json
{"extends": "@mulekick/eslint-config-muleslint"}
```

## Configuration details

- Extends core [eslint](https://eslint.org/) recommended configuration (eslint:recommended)
- Quite a few of the recommended options are overriden
- The use of modern Javascript features (ES6 and beyond) is enforced whenever possible
- Extends [node plugin](https://github.com/mysticatea/eslint-plugin-node) recommended configuration (plugin:node/recommended)
- Extends [import plugin](https://github.com/import-js/eslint-plugin-import) recommended configuration (plugin:import/recommended)
- Enforces unix-style line breaks
- Enforces [Crockford](https://www.crockford.com/code.html) indentation (4 spaces)
- Enforces [ESM modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules) use, therefore enforcing strict mode everywhere