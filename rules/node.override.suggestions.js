// ================================================================
// == Override default options for plugin:node/recommended rules ==
// ================================================================
// ------------------------ suggestions ---------------------------
export default {
    // very important rule, update callbacks names list when necessary
    "n/callback-return": [ `error`, [ `callback`, `cb`, `next` ] ],
    // CJS specific
    "n/exports-style": [ `error`, `module.exports` ],
    // restrict imports to *.js files for now, downgrade to warn
    // fork version looks broken, rely on tsconfig ts extension imort instead
    "n/file-extension-in-import": [ `off`, `always`, {
        ".js": `always`
    } ],
    "n/global-require": [ `error` ],
    "n/no-mixed-requires": [ `warn`, {
        grouping: false,
        allowCall: true
    } ],
    // warn about usage without prevent it : that's the only way to
    // pass environment variables to a containerized process and preventing
    // it would lead to a 'one image per configuration' policy
    "n/no-process-env": [ `warn` ],
    // keep this list up-to-date with my personal dislikes hehe
    "n/no-restricted-import": [ `error`, [ {
        name: `axios`,
        message: `You can achieve the same results with node.js builtins`
    }, {
        name: `async`,
        message: `You can achieve the same results with node.js builtins`
    } ] ],
    // necessary in a handful of case, so it's only a warn
    "n/no-sync": [ `warn` ],
    // enforce the use of imports to follow node.js official recommendations ...
    "n/prefer-global/buffer": [ `error`, `never` ],
    "n/prefer-global/console": [ `error`, `never` ],
    "n/prefer-global/process": [ `error`, `never` ],
    "n/prefer-global/text-decoder": [ `error`, `never` ],
    "n/prefer-global/text-encoder": [ `error`, `never` ],
    "n/prefer-global/url-search-params": [ `error`, `never` ],
    "n/prefer-global/url": [ `error`, `never` ],
    // those may be upgraded to error later, only a warn for now
    "n/prefer-promises/dns": [ `warn` ],
    "n/prefer-promises/fs": [ `warn` ]
};