// ================================================================
// ===== Override default options for eslint:recommended rules ====
// ================================================================
// --------------------- possible problems ------------------------
export default {
    "array-callback-return": [ `error`, {
        allowImplicit: false,
        checkForEach: true
    } ],
    // use Promise.all or recursive async calls (rare exceptions being sequential async calls) ...
    "no-await-in-loop": [ `error` ],
    // keep as-is, remember to wrap assignments in parentheses ...
    "no-cond-assign": [ `error`, `except-parens` ],
    // when operators evaluation order has not been considered ...
    "no-constant-binary-expression": `error`,
    // a while (true) loop until a condition is met inside the loop body is sometimes necessary ...
    "no-constant-condition": [ `error`, {
        checkLoops: false
    } ],
    // no pattern found that would require that to date ...
    "no-constructor-return": [ `error` ],
    // replaced by "import/no-duplicates" which extends the recommended ruleset for the import plugin ...
    // "no-duplicate-imports": [ `error` ],
    "no-empty-pattern": [ `error` ],
    "no-inner-declarations": [ `error`, `both` ],
    // this rule remains as-is as there are very few exceptions to it ...
    // use the ts extension rule
    "no-loss-of-precision": [ `off` ],
    "@typescript-eslint/no-loss-of-precision": [ `error` ],
    "no-promise-executor-return": [ `error` ],
    "no-self-compare": [ `error` ],
    "no-template-curly-in-string": [ `error` ],
    "no-unmodified-loop-condition": [ `error` ],
    "no-unreachable-loop": [ `error` ],
    "no-unsafe-negation": [ `error`, {
        enforceForOrderingRelations: true
    } ],
    // exercise auction before using optional chaining ...
    "no-unsafe-optional-chaining": [ `error`, {
        disallowArithmeticOperators: true
    } ],
    "no-unused-private-class-members": [ `error` ],
    // those rules make type assertions mandatory when needed ...
    "@typescript-eslint/no-unsafe-argument": [ `warn` ],
    "@typescript-eslint/no-unsafe-call": [ `warn` ],
    "@typescript-eslint/no-unsafe-member-access": [ `warn` ],
    // use the ts extension rule
    "no-use-before-define": [ `off` ],
    "@typescript-eslint/no-use-before-define": [ `error` ],
    "no-useless-backreference": [ `error` ],
    "require-atomic-updates": [ `error` ],
    // do not test variables types against other variables ...
    "valid-typeof": [ `error`, {
        requireStringLiterals: true
    } ]
};