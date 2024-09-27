// ================================================================
// == Override default options for plugin:node/recommended rules ==
// ================================================================
// --------------------- possible problems ------------------------
export default {
    "node/handle-callback-err": [ `error`, `^(e|err|error\\w*)$` ],
    // too bad callback name is not regex-configurable ...
    "node/no-callback-literal": [ `error` ],
    // downgrade to warn in the event the code is to run inside a container ...
    "node/no-missing-import": [ `warn` ],
    "node/no-missing-require": [ `warn` ],
    "node/no-new-require": [ `error` ],
    // CJS specific (__filename and __dirname are not supported in ESM)
    "node/no-path-concat": [ `error` ]
};