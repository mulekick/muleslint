"use strict";
// ================================================================
// ===== Override default options for eslint:recommended rules ====
// ================================================================
// -------------------- layout & formatting -----------------------
module.exports = {
    rules: {
        "array-bracket-newline": [ `warn`, `consistent` ],
        "array-bracket-spacing": [ `warn`, `always` ],
        "array-element-newline": [ `warn`, `consistent` ],
        "arrow-parens": [ `error`, `as-needed` ],
        "arrow-spacing": [ `error` ],
        "block-spacing": [ `error`, `always` ],
        // maybe switch single-line to true later ...
        "brace-style": [ `error`, `1tbs`, {
            allowSingleLine: true
        } ],
        "comma-dangle": [ `error`, `never` ],
        "comma-spacing": [ `error`, {
            before: false,
            after: true
        } ],
        "comma-style": [ `error`, `last` ],
        "computed-property-spacing": [ `error`, `never` ],
        "dot-location": [ `error`, `property` ],
        // ???
        // "eol-last": ["warn", "always"],
        "func-call-spacing": [ `error`, `never` ],
        // experiment with this ...
        "function-call-argument-newline": [ `warn`, `consistent` ],
        "generator-star-spacing": [ `error`, {
            before: false,
            after: true
        } ],
        // experiment with this ...
        "implicit-arrow-linebreak": [ `error`, `beside` ],
        // 'Crockford' indentation ... fine tune this later
        indent: [ `error`, 4, {
            flatTernaryExpressions: false,
            ignoreComments: true
        } ],
        "key-spacing": [ `error`, {
            mode: `strict`
        } ],
        "keyword-spacing": [ `error` ],
        "linebreak-style": [ `error`, `unix` ],
        "lines-between-class-members": [ `warn`, `always` ],
        "max-statements-per-line": [ `error`, {
            // lower this to 2 ...
            max: 2
        } ],
        "multiline-ternary": [ `error`, `always-multiline` ],
        "new-parens": [ `error`, `always` ],
        // making newline mandatory at each chained call ...
        "newline-per-chained-call": [ `error` ],
        "no-extra-parens": [ `error`, `all`, {
            conditionalAssign: false,
            returnAssign: false,
            nestedBinaryExpressions: false,
            enforceForArrowConditionals: false
        } ],
        // enable this, fine tune later if needed ...
        "no-multi-spaces": [ `error` ],
        "no-multiple-empty-lines": [ `error` ],
        "no-tabs": [ `error` ],
        "no-trailing-spaces": [ `error` ],
        "no-whitespace-before-property": [ `error` ],
        "nonblock-statement-body-position": [ `error`, `below` ],
        // oof ...
        "object-curly-newline": [ `error`, {
            ObjectExpression: {
                multiline: true,
                minProperties: 10,
                consistent: true
            },
            ObjectPattern: `never`,
            // enable this, fine tune later if needed ...
            ImportDeclaration: {
                multiline: true,
                minProperties: 10,
                consistent: true
            },
            // enable this, fine tune later if needed ...
            ExportDeclaration: {
                multiline: true,
                minProperties: 10,
                consistent: true
            }
        } ],
        "object-curly-spacing": [ `error` ],
        // this rule remains as-is as there are very few exceptions to it ...
        "object-property-newline": [ `error`, {
            allowAllPropertiesOnSameLine: true
        } ],
        // force the use of end-of-line operators for multi-lines expressions ...
        "operator-linebreak": [ `error`, `after` ],
        // keeping this disabled on the side to (maybe) fine tune later, but enabling it really removes some flexibility ...
        "padded-blocks": [ `off`, `always` ],
        "padding-line-between-statements": [ `off`, {
            blankLine: `always`,
            prev: `*`,
            next: [ `if`, `for`, `class`, `const`, `do`, `let`, `return`, `switch`, `try`, `var`, `while` ]
        } ],
        quotes: [ `error`, `backtick`, {
            avoidEscape: true,
            allowTemplateLiterals: true
        } ],
        "rest-spread-spacing": [ `error`, `never` ],
        // pretend ASI does not exist hehe ...
        semi: [ `error`, `always` ],
        "semi-spacing": [ `error`, {
            before: false,
            after: true
        } ],
        "semi-style": [ `error`, `last` ],
        "space-before-blocks": [ `error`, `always` ],
        "space-before-function-paren": [ `error`, `never` ],
        "space-in-parens": [ `error`, `never` ],
        "space-infix-ops": [ `error`, {
            // original way of casting to int32 ...
            int32Hint: false
        } ],
        "space-unary-ops": [ `error`, {
            words: true,
            nonwords: false
        } ],
        "switch-colon-spacing": [ `error`, {
            after: false,
            before: true
        } ],
        "template-curly-spacing": [ `error`, `always` ],
        "template-tag-spacing": [ `error`, `never` ],
        "unicode-bom": [ `error`, `never` ],
        "wrap-iife": [ `error`, `inside`, {
            functionPrototypeMethods: true
        } ],
        "yield-star-spacing": [ `error`, {
            before: false,
            after: true
        } ]
    }
};