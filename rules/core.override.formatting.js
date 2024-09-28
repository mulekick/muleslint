// ================================================================
// ===== Override default options for eslint:recommended rules ====
// ================================================================
// -------------------- layout & formatting -----------------------
export default {
    "@stylistic/array-bracket-newline": [ `warn`, `consistent` ],
    // upgrade this to error ...
    "@stylistic/array-bracket-spacing": [ `error`, `always` ],
    "@stylistic/array-element-newline": [ `warn`, `consistent` ],
    "@stylistic/arrow-parens": [ `error`, `as-needed` ],
    // arrow functions spacing ...
    "@stylistic/arrow-spacing": [ `error`, {
        before: true,
        after: true
    } ],
    "@stylistic/block-spacing": [ `error`, `always` ],
    // maybe switch single-line to true later ...
    "@stylistic/brace-style": [ `error`, `1tbs`, {
        allowSingleLine: true
    } ],
    "@stylistic/comma-dangle": [ `error`, `never` ],
    "@stylistic/comma-spacing": [ `error`, {
        before: false,
        after: true
    } ],
    "@stylistic/comma-style": [ `error`, `last` ],
    // keep this on 'never' to distinguish from arrays ...
    "@stylistic/computed-property-spacing": [ `error`, `never` ],
    "@stylistic/dot-location": [ `error`, `property` ],
    // no new lines at the end of files ...
    "@stylistic/eol-last": [ `error`, `never` ],
    "@stylistic/func-call-spacing": [ `error`, `never` ],
    // experiment with this ...
    "@stylistic/function-call-argument-newline": [ `warn`, `consistent` ],
    // no valid reason to ever change that setting ...
    "@stylistic/function-paren-newline": [ `error`, `multiline` ],
    "@stylistic/generator-star-spacing": [ `error`, {
        before: false,
        after: true
    } ],
    // experiment with this ...
    "@stylistic/implicit-arrow-linebreak": [ `error`, `beside` ],
    // enforce 'Crockford' indentation ...
    "@stylistic/indent": [ `error`, 4, {
        // the default values for the multitude of available options sound good until proved otherwise ...
        flatTernaryExpressions: false,
        ignoreComments: true
    } ],
    // downgrade to warn until the correct pattern is found
    "@stylistic/jsx-closing-tag-location": [ `warn` ],
    // enforce no space for object literals and spaces for jsx attributes ...
    "@stylistic/jsx-curly-spacing": [ `warn`, {
        when: `always`,
        attributes: true,
        children: true
    } ],
    // turn this off for it conflicts with core no-extra-parens ...
    "@stylistic/jsx-wrap-multilines": [ `off` ],
    "@stylistic/key-spacing": [ `error`, {
        mode: `strict`
    } ],
    "@stylistic/keyword-spacing": [ `error`, {
        before: true,
        after: true
    } ],
    "@stylistic/linebreak-style": [ `error`, `unix` ],
    // no newline after single line class members ...
    "@stylistic/lines-between-class-members": [ `warn`, `always`, {
        exceptAfterSingleLine: true
    } ],
    // this rule remains as is as there is very few exceptions to it ...
    "@stylistic/max-statements-per-line": [ `error`, {
        max: 2
    } ],
    // enforce style consistency for ts interfaces declarations ...
    "@stylistic/member-delimiter-style": [ `error`, {
        multiline: {
            delimiter: `semi`,
            requireLast: true
        },
        singleline: {
            delimiter: `semi`,
            requireLast: false
        },
        multilineDetection: `brackets`
    } ],
    "@stylistic/multiline-ternary": [ `error`, `always-multiline` ],
    "@stylistic/new-parens": [ `error`, `always` ],
    // making newline mandatory at each chained call ...
    "@stylistic/newline-per-chained-call": [ `error`, {
        // 3 chained calls max on the same line ...
        ignoreChainWithDepth: 3
    } ],
    "@stylistic/no-extra-parens": [ `error`, `all`, {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: false,
        enforceForArrowConditionals: false
    } ],
    // downgrade to warn (inline comments, matrixes representation etc) ...
    "@stylistic/no-multi-spaces": [ `warn` ],
    // other options remain as is ...
    "@stylistic/no-multiple-empty-lines": [ `error` ],
    "@stylistic/no-tabs": [ `error` ],
    "@stylistic/no-trailing-spaces": [ `error` ],
    "@stylistic/no-whitespace-before-property": [ `error` ],
    "@stylistic/nonblock-statement-body-position": [ `error`, `below` ],
    // downgrade to 6 to improve code readability ...
    "@stylistic/object-curly-newline": [ `error`, {
        ObjectExpression: {
            multiline: true,
            minProperties: 6,
            consistent: true
        },
        // except for destructuring patterns ...
        ObjectPattern: `never`,
        ImportDeclaration: {
            multiline: true,
            minProperties: 6,
            consistent: true
        },
        ExportDeclaration: {
            multiline: true,
            minProperties: 6,
            consistent: true
        }
    } ],
    // enforce no spacing for object literals ...
    "@stylistic/object-curly-spacing": [ `error`, `never` ],
    // this rule remains as-is as there are very few exceptions to it ...
    "@stylistic/object-property-newline": [ `error`, {
        allowAllPropertiesOnSameLine: true
    } ],
    // force the use of end-of-line operators for multi-lines expressions ...
    "@stylistic/operator-linebreak": [ `error`, `after` ],
    // keeping this disabled on the side to (maybe) fine tune later, but enabling it really removes some flexibility ...
    "@stylistic/padded-blocks": [ `off`, `always` ],
    "@stylistic/padding-line-between-statements": [ `off`, {
        blankLine: `always`,
        prev: `*`,
        next: [ `if`, `for`, `class`, `const`, `do`, `let`, `return`, `switch`, `try`, `var`, `while` ]
    } ],
    // this rule is on of the most important one to me and changing it would require serious counter arguments about performance ...
    "@stylistic/quotes": [ `error`, `backtick`, {
        avoidEscape: true,
        allowTemplateLiterals: true
    } ],
    "@stylistic/quote-props": [ `error`, `as-needed`, {
        keywords: true,
        unnecessary: true,
        numbers: true
    } ],
    "@stylistic/rest-spread-spacing": [ `error`, `never` ],
    // pretend ASI does not exist hehe ...
    "@stylistic/semi": [ `error`, `always` ],
    "@stylistic/semi-spacing": [ `error`, {
        before: false,
        after: true
    } ],
    "@stylistic/semi-style": [ `error`, `last` ],
    "@stylistic/space-before-blocks": [ `error`, `always` ],
    "@stylistic/space-before-function-paren": [ `error`, `never` ],
    "@stylistic/space-in-parens": [ `error`, `never` ],
    "@stylistic/space-infix-ops": [ `error`, {
        // original way of casting to int32 ...
        int32Hint: false
    } ],
    "@stylistic/space-unary-ops": [ `error`, {
        words: true,
        nonwords: false
    } ],
    "@stylistic/switch-colon-spacing": [ `error`, {
        after: false,
        before: true
    } ],
    // use spaces in template literals and don't use in JSX expressions ...
    "@stylistic/template-curly-spacing": [ `error`, `always` ],
    "@stylistic/template-tag-spacing": [ `error`, `never` ],
    // make type annotations pattern consistent with the key-spacing rule ...
    "@stylistic/type-annotation-spacing": [ `error`, {
        before: false,
        after: true
    } ],
    // !!! not included in stylistic (broken) !!!
    "unicode-bom": [ `error`, `never` ],
    "@stylistic/wrap-iife": [ `error`, `inside`, {
        functionPrototypeMethods: true
    } ],
    "@stylistic/yield-star-spacing": [ `error`, {
        before: false,
        after: true
    } ]
};