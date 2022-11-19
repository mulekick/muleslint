"use strict";
// ================================================================
// =============== Disable eslint:recommended rules ===============
// ================================================================
// --------------------- possible problems ------------------------
module.exports = {
    rules: {
        "no-sparse-arrays": [ `off` ],
        "no-unused-vars": [ `warn` ],
        // deprecated, but shows up in vscode after the node plugin install
        "no-process-exit": [ `off` ]
    }
};