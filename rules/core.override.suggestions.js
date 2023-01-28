"use strict";
// ================================================================
// ===== Override default options for eslint:recommended rules ====
// ================================================================
// ------------------------ suggestions ---------------------------
module.exports = {
    rules: {
        "accessor-pairs": [ `error`, {
            getWithoutSet: true,
            setWithoutGet: true,
            enforceForClassMembers: true
        } ],
        // keep this to warn to preserve some flexibility ...
        "arrow-body-style": [ `warn`, `as-needed` ],
        "block-scoped-var": [ `error` ],
        // too restrictive ...
        "capitalized-comments": [ `off`, `never` ],
        // this rule remains as-is as there are very few exceptions to it ...
        "class-methods-use-this": [ `error` ],
        // keeping this at 20 but downgrading to warn, sometimes a high complexity threshold is required ...
        complexity: [ `warn`, {
            max: 20
        } ],
        "consistent-return": [ `error` ],
        // clever use of, bind, call and apply should avoid such things ...
        "consistent-this": [ `warn`, `__this__` ],
        // I give this a try ...
        curly: [ `warn`, `multi-or-nest`, `consistent` ],
        "default-case": [ `error` ],
        "default-case-last": [ `error` ],
        // arguments with a default value must be last to allow flexible function calls ...
        "default-param-last": [ `error` ],
        // I'm comfortable enough now to upgrade this to error ... 
        "dot-notation": [ `error`, {
            // fine tune this later to accomodate the very few exceptions.
            allowPattern: `^[a-z_]+$`
        } ],
        eqeqeq: [ `error`, `always` ],
        // I always use anonymous function expressions ...
        "func-name-matching": [ `error`, `always` ],
        "func-names": [ `error`, `never` ],
        // use function expressions to prevent the code from being hoisted to the top of its scope ...
        "func-style": [ `error`, `expression` ],
        "grouped-accessor-pairs": [ `error`, `getBeforeSet` ],
        // very important, and use Object.hasOwn() to test ...
        "guard-for-in": [ `error` ],
        // keep this rule as-is, not flexible enough ...
        "id-match": [ `warn`, `^[0-9a-zA-Z_$]+$`, {
            properties: true,
            classFields: true,
            onlyDeclarations: true,
            ignoreDestructuring: true
        } ],
        "init-declarations": [ `error`, `always` ],
        "logical-assignment-operators": [ `error`, `always` ],
        // remember to use class declarations as much as possible (unlike functions) ...
        "max-classes-per-file": [ `error`, {
            ignoreExpressions: true,
            max: 1
        } ],
        "max-depth": [ `warn`, {
            max: 4
        } ],
        "max-lines": [ `warn`, 750 ],
        "max-lines-per-function": [ `warn`, {
            max: 100,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true
        } ],
        // note to self : exercise caution before upping this value ...
        "max-nested-callbacks": [ `error`, {
            max: 4
        } ],
        "max-params": [ `warn`, {
            max: 5
        } ],
        // this value is to be fine tuned later ....
        "max-statements": [ `warn`, {
            max: 50
        } ],
        // this value is to be fine tuned later ....
        "new-cap": [ `error`, {
            newIsCap: true,
            capIsNew: true,
            // "newIsCapExceptionPattern": "^[a-zA-Z]+$",
            // "capIsNewExceptionPattern": "^[a-zA-Z]+$",
            properties: true
        } ],
        // use console instead
        "no-alert": [ `error` ],
        "no-array-constructor": [ `error` ],
        // this rule will be upgraded to error, bitwise is only to be used in very specific cases ...
        "no-bitwise": [ `error` ],
        "no-caller": [ `error` ],
        // wrap cases blocks in curly brackets when doing this ...
        "no-case-declarations": [ `error` ],
        // enforces wrapping short ifs in parentheses ...
        "no-confusing-arrow": [ `error`, {
            allowParens: true
        } ],
        // seldomly used, so it's worthy of a warn ...
        "no-continue": [ `warn` ],
        // I give this a try ...
        "no-div-regex": [ `error` ],
        "no-else-return": [ `error` ],
        "no-empty-function": [ `warn` ],
        "no-eq-null": [ `error` ],
        "no-eval": [ `error` ],
        "no-extend-native": [ `error` ],
        "no-extra-bind": [ `error` ],
        // never use labels to begin with ...
        "no-extra-label": [ `error` ],
        // this rule remains as-is as there are very few exceptions to it ...
        "no-floating-decimal": [ `error` ],
        "no-implicit-coercion": [ `warn`, {
            // adding the option as I think it may prevent errors ...
            disallowTemplateShorthand: true
        } ],
        // useful for browser scripts design, make sure that it is disabled on ESM modules ...
        "no-implicit-globals": [ `error`, {
            lexicalBindings: true
        } ],
        "no-implied-eval": [ `error` ],
        "no-inline-comments": [ `error` ],
        // this rule remains as-is as there are very few exceptions to it ...
        "no-invalid-this": [ `error`, {
            // keep this option in mind, it may change according to how the constructor names will be enforced ...
            capIsConstructor: true
        } ],
        "no-iterator": [ `error` ],
        "no-label-var": [ `error` ],
        // disallow labels use for good ...
        "no-labels": [ `error` ],
        "no-lone-blocks": [ `error` ],
        "no-lonely-if": [ `error` ],
        "no-loop-func": [ `error` ],
        // too restrictive for the moment ... TBC
        "no-magic-numbers": [ `off`, {
            ignoreArrayIndexes: true,
            ignoreDefaultValues: true
        } ],
        "no-multi-assign": [ `error` ],
        "no-multi-str": [ `error` ],
        "no-negated-condition": [ `error` ],
        // using builting static methods may be an alternative ...
        "no-new": [ `error` ],
        "no-new-func": [ `error` ],
        // force object literal use for object declarations ...
        "no-new-object": [ `error` ],
        // disable instantiating wrappers for string, number and boolean ...
        "no-new-wrappers": [ `error` ],
        "no-octal-escape": [ `error` ],
        // prohibits overwriting function parameters ...
        "no-param-reassign": [ `error`, {
            // but allows mutating them since this is necessary in many cases (express responses etc)
            props: false
        } ],
        "no-proto": [ `error` ],
        // this may be fine tuned later ...
        "no-restricted-exports": [ `error`, {
            restrictedNamedExports: [ `default` ]
        } ],
        // airbnb did a great job on this one ...
        "no-restricted-properties": [ `error`, {
            object: `arguments`,
            property: `callee`,
            message: `arguments.callee is deprecated`
        }, {
            object: `global`,
            property: `isFinite`,
            message: `Please use Number.isFinite instead`
        }, {
            object: `self`,
            property: `isFinite`,
            message: `Please use Number.isFinite instead`
        }, {
            object: `window`,
            property: `isFinite`,
            message: `Please use Number.isFinite instead`
        }, {
            object: `global`,
            property: `isNaN`,
            message: `Please use Number.isNaN instead`
        }, {
            object: `self`,
            property: `isNaN`,
            message: `Please use Number.isNaN instead`
        }, {
            object: `window`,
            property: `isNaN`,
            message: `Please use Number.isNaN instead`
        }, {
            property: `__defineGetter__`,
            message: `Please use Object.defineProperty instead.`
        }, {
            property: `__defineSetter__`,
            message: `Please use Object.defineProperty instead.`
        }, {
            object: `Math`,
            property: `pow`,
            message: `Use the exponentiation operator (**) instead.`
        } ],
        // useful for browser scripts ...
        "no-restricted-globals": [ `error`, {
            name: `event`,
            message: `Use local event parameter instead.`
        }, {
            name: `error`,
            message: `Use local error parameter instead.`
        } ],
        // let's give the airbnb "loops are bad" thing a try ...
        "no-restricted-syntax": [ `error`, {
            selector: `WithStatement`,
            message: `with is disallowed in strict mode because it makes code impossible to predict and optimize.`
        }, {
            selector: `LabeledStatement`,
            message: `labels make code confusing and hard to maintain and understand.`
        }, {
            selector: `SequenceExpression`,
            message: `use only for loops initializations and afterthoughts.`
        }, {
            selector: `ForInStatement`,
            message: `for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.`,
        }, {
            selector: `ForOfStatement`,
            message: `iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.`,
        } ],
        // upgrade to error to enforce wrapping of assignments in parentheses ...
        "no-return-assign": [ `error`, `except-parens` ],
        "no-return-await": [ `error` ],
        "no-script-url": [ `error` ],
        // uncomment if the restricted syntax is too restrictive ...
        // "no-sequences": ["error", {
        //     "allowInParentheses": false
        // }],
        // do not allow shadowing of built-ins global variables
        "no-shadow": [ `warn`, {
            builtinGlobals: true,
            hoist: `all`,
            // allow some to comply with node.js recommendation of
            // importing builtins that exist at the global scope...
            allow: [
                `Buffer`,
                `process`,
                `console`,
                `TextDecoder`,
                `TextEncoder`,
                `URLSearchParams`,
                `URL`,
                // overlapping with DOM windows methods available as globals ...
                `open`,
                `close`
            ],
            ignoreOnInitialization: true
        } ],
        // upgrade to error
        "no-throw-literal": [ `error` ],
        "no-undef-init": [ `error` ],
        "no-undefined": [ `error` ],
        // I have to get better at naming things ...
        "no-underscore-dangle": [ `error` ],
        // upgrade this to error ...
        "no-unneeded-ternary": [ `error`, {
            // let's flag this to enforce the use of the || operator ...
            defaultAssignment: false
        } ],
        // enforce the use of semicolons at the end of expressions ...
        "no-unused-expressions": [ `error`, {
            allowShortCircuit: true,
            allowTernary: true
        } ],
        // keep in mind that call and apply are slower than normal invocation ...
        "no-useless-call": [ `error` ],
        "no-useless-computed-key": [ `error`, {
            enforceForClassMembers: true
        } ],
        "no-useless-concat": [ `error` ],
        "no-useless-constructor": [ `error` ],
        "no-useless-escape": [ `error` ],
        "no-useless-rename": [ `error` ],
        "no-useless-return": [ `error` ],
        "no-var": [ `error` ],
        "no-void": [ `error`, {
            allowAsStatement: true
        } ],
        // this comment pattern is useful as a reminder since the exclamation marks often flag code shortcomings and limitations ...
        "no-warning-comments": [ `warn`, {
            terms: [ `!!!` ],
            location: `anywhere`
        } ],
        // fine tuning ...
        "object-shorthand": [ `error`, `always`, {
            // reporting string literal method names is pointless
            avoidQuotes: false,
            // we're not supposed to use ES5 constructor functions anymore thanks to babel, so let's report these too ...
            ignoreConstructors: false,
            // to me, enforcing the use of shorthand syntax implies that arrow functions must be explicit and visible ...
            avoidExplicitReturnArrows: false
        } ],
        "one-var": [ `error`, `consecutive` ],
        "one-var-declaration-per-line": [ `error`, `always` ],
        "operator-assignment": [ `warn`, `always` ],
        "prefer-arrow-callback": [ `warn`, {
            // no named functions should be used as callbacks (variables should) ...
            "allowNamedFunctions": false,
            "allowUnboundThis": true
        } ],
        // upgrade to error, in the event mixing const/let on destructuring is required, manage let and const in 2 separate statement ...
        "prefer-const": [ `error`, {
            // be restrictive ...
            destructuring: `any`,
            // experiment the 'no read before assigment' rule, TBC if too restrictive ...
            ignoreReadBeforeAssign: false
        } ],
        // this rule makes a case for using Array.prototype.at() instead of bracket notation ...
        "prefer-destructuring": [ `warn`, {
            VariableDeclarator: {
                array: true,
                object: true
            },
            AssignmentExpression: {
                array: true,
                object: true
            }
        }, {
            enforceForRenamedProperties: false
        } ],
        "prefer-exponentiation-operator": [ `error` ],
        // upgrade this to error to enforce the use of non capturing groups when required ...
        "prefer-named-capture-group": [ `error` ],
        "prefer-numeric-literals": [ `error` ],
        // let's go for the modern approach ...
        "prefer-object-has-own": [ `error` ],
        "prefer-object-spread": [ `error` ],
        "prefer-promise-reject-errors": [ `error` ],
        "prefer-regex-literals": [ `error`, {
            disallowRedundantWrapping: true
        } ],
        // rest parameters for functions taking a variadic number of arguments ...
        "prefer-rest-params": [ `error` ],
        // and use spread syntax to call said functions ...
        "prefer-spread": [ `error` ],
        // downgrading to warn, sometimes exceptions improve code readability ...
        "prefer-template": [ `warn` ],
        "quote-props": [ `error`, `as-needed`, {
            keywords: true,
            unnecessary: true,
            numbers: true
        } ],
        // failsafe when using parseInt() ...
        radix: [ `error` ],
        // very important ...
        "require-await": [ `error` ],
        // the /u flag will have the regexp engine parse code points instead of code units/surrogate pairs ...
        "require-unicode-regexp": [ `error` ],
        "spaced-comment": [ `error`, `always` ],
        // if this config is to be used with CJS modules ...
        strict: [ `error` ],
        "symbol-description": [ `error` ],
        "vars-on-top": [ `error` ],
        yoda: [ `error` ]
    }
};