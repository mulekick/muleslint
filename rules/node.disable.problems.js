"use strict";
// ================================================================
// ============ Disable plugin:node/recommended rules =============
// ================================================================
// -------------------- possible problems -------------------------
module.exports = {
    rules: {
        // for the moment I prefer shell aliases + shebang over package.json bin field
        "node/shebang": [ `off` ],
        // unnecessary if errors are properly handled
        "node/no-process-exit": [ `off` ]
    }
};