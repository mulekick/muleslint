// ================================================================
// == Override default options for plugin:node/recommended rules ==
// ================================================================
// --------------------- possible problems ------------------------
export default {
    "n/handle-callback-err": [ `error`, `^(e|err|error\\w*)$` ],
    // too bad callback name is not regex-configurable ...
    "n/no-callback-literal": [ `error` ],
    // downgrade to warn in the event the code is to run inside a container ...
    "n/no-missing-import": [ `warn` ],
    "n/no-missing-require": [ `warn` ],
    "n/no-new-require": [ `error` ],
    // CJS specific (__filename and __dirname are not supported in ESM)
    "n/no-path-concat": [ `error` ]
};