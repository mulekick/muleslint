# My ESLint config files

I use the ESLint extension on Visual Studio code in my day-to day coding activities. As long as I don't switch to TypeScript, I find ESLint to be of a great help to write some proper, clean-cut ES6 code, avoid errors and enforce best practices. Here are the configuration files I use to lint my *.js files.

## How I use ESLint in my dev environment

- Windows 10 x64, WSL2 enabled
- Debian 10 distro on WSL2
- Node.js 12.18.4 LTS on Debian 10
- ESLint v7.9.0 installed globally
- VSCode targeting Debian 10 through WSL
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