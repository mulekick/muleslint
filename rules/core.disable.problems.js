// ================================================================
// =============== Disable eslint:recommended rules ===============
// ================================================================
// --------------------- possible problems ------------------------
export default {
    "no-sparse-arrays": [ `off` ],
    // as annoying as this rule can be I think it's better to keep the warning ...
    // use the ts extension rule
    "no-unused-vars": [ `off` ],
    "@typescript-eslint/no-unused-vars": [ `warn` ]
};