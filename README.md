# My ESLint config files

I use the ESLint extension on Visual Studio code in my day-to day coding activities. As long as I don't switch to TypeScript, I find ESLint to be of a great help to write some proper, clean-cut ES6 code, avoid errors and enforce best practices. Here are the configuration files I use to lint my *.js files.

## How I use ESLint in my dev environment

- Windows 10 x64, Hyper-V enabled
- Debian Bullseye running in a Hyper-V VM
- Node.js 16.13.0 LTS on Debian
- ESLint 8.2.0 installed globally
- VSCode targeting Debian 10 through SSH
- VSCode ESLint extension enabled
- .eslint* files copied in each project's root folder

## Details on the ESLint files

- extends recommended configuration
- enforces strict mode everywhere (warn only)
- enforces CommonJS modules use (only stable node.js option for now)
- enforces unix-style line breaks
- enforces 4 spaces indentation
- quite a few of the recommended options are overrided
- ES6 coding patterns are enforced whenever possible