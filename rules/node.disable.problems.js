// ================================================================
// ============ Disable plugin:node/recommended rules =============
// ================================================================
// -------------------- possible problems -------------------------
export default {
    // for the moment I prefer shell aliases + shebang over package.json bin field
    "n/hashbang": [ `off` ],
    // unnecessary if errors are properly handled
    "n/no-process-exit": [ `off` ]
};