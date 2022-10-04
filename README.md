# My ESLint config files

I use the ESLint extension on Visual Studio code in my day-to day coding activities. As long as I don't switch to TypeScript, I find ESLint to be of a great help to write some proper, clean-cut ES6 code, avoid errors and enforce best practices. Here are the configuration files I use to lint my *.js files.

## How I use ESLint in my dev environment

- Windows 10 x64, Hyper-V enabled
- Debian Bullseye running in a Hyper-V VM
- Node.js 16.16.0 LTS on Debian
- ESLint 8.24.0 installed globally
- VSCode targeting Debian through SSH
- VSCode ESLint extension enabled
- .eslint* files copied in each project's root folder

## Details on the ESLint files

- Extends core eslint recommended configuration (eslint:recommended)
- Extends [node plugin](https://github.com/mysticatea/eslint-plugin-node) recommended configuration (plugin:node/recommended)
- Enforces [ESM modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules) use, therefore enforcing strict mode everywhere
- Enforces unix-style line breaks
- Enforces 4 spaces indentation
- Quite a few of the recommended options are overrided
- The use of modern Javascript features (ES6 and beyond) is enforced whenever possible