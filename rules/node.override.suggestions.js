// ================================================================
// == Override default options for plugin:node/recommended rules ==
// ================================================================
// ------------------------ suggestions ---------------------------
export default {
    // very important rule, update callbacks names list when necessary
    "node/callback-return": [ `error`, [ `callback`, `cb`, `next` ] ],
    // CJS specific
    "node/exports-style": [ `error`, `module.exports` ],
    // restrict imports to *.js files for now
    "node/file-extension-in-import": [ `error`, `always`, {
        ".js": `always`
    } ],
    "node/global-require": [ `error` ],
    "node/no-mixed-requires": [ `warn`, {
        grouping: false,
        allowCall: true
    } ],
    // warn about usage without prevent it : that's the only way to
    // pass environment variables to a containerized process and preventing
    // it would lead to a 'one image per configuration' policy
    "node/no-process-env": [ `warn` ],
    // keep this list up-to-date with my personal dislikes hehe
    "node/no-restricted-import": [ `error`, [ {
        name: `axios`,
        message: `You can achieve the same results with node.js builtins`
    }, {
        name: `async`,
        message: `You can achieve the same results with node.js builtins`
    } ] ],
    // necessary in a handful of case, so it's only a warn
    "node/no-sync": [ `warn` ],
    // enforce the use of imports to follow node.js official recommendations ...
    "node/prefer-global/buffer": [ `error`, `never` ],
    "node/prefer-global/console": [ `error`, `never` ],
    "node/prefer-global/process": [ `error`, `never` ],
    "node/prefer-global/text-decoder": [ `error`, `never` ],
    "node/prefer-global/text-encoder": [ `error`, `never` ],
    "node/prefer-global/url-search-params": [ `error`, `never` ],
    "node/prefer-global/url": [ `error`, `never` ],
    // those may be upgraded to error later, only a warn for now
    "node/prefer-promises/dns": [ `warn` ],
    "node/prefer-promises/fs": [ `warn` ]
};