'use strict';

module.exports = {
    globals: {module: true},
    rules: {
        // Possible Errors
        'no-await-in-loop': ['error'],
        'no-compare-neg-zero': ['error'],
        'no-cond-assign': ['error', 'always'],
        'no-console': ['error'],
        'no-constant-condition': ['error'],
        'no-control-regex': ['error'],
        'no-debugger': ['error'],
        'no-dupe-args': ['error'],
        'no-dupe-keys': ['error'],
        'no-duplicate-case': ['error'],
        'no-empty': ['error'],
        'no-empty-character-class': ['error'],
        'no-ex-assign': ['error'],
        'no-extra-boolean-cast': ['error'],
        'no-extra-parens': ['error'],
        'no-extra-semi': ['error'],
        'no-func-assign': ['error'],
        'no-inner-declarations': ['error'],
        'no-invalid-regexp': ['error'],
        'no-irregular-whitespace': ['error'],
        'no-obj-calls': ['error'],
        'no-prototype-builtins': ['error'],
        'no-regex-spaces': ['error'],
        'no-sparse-arrays': ['error'],
        'no-template-curly-in-string': ['error'],
        'no-unexpected-multiline': ['error'],
        'no-unreachable': ['error'],
        'no-unsafe-finally': ['error'],
        'no-unsafe-negation': ['error'],
        'use-isnan': ['error'],
        'valid-jsdoc': ['off'],
        'valid-typeof': ['error'],

        // Best Practices
        'accessor-pairs': ['error'],
        'array-callback-return': ['error'],
        'block-scoped-var': ['error'],
        'class-methods-use-this': ['error'],
        complexity: ['off'],
        'consistent-return': ['error'],
        curly: ['error'],
        'default-case': ['error'],
        'dot-location': ['error', 'property'],
        'dot-notation': ['error'],
        eqeqeq: ['error'],
        'guard-for-in': ['error'],
        'no-alert': ['error'],
        'no-caller': ['error'],
        'no-case-declarations': ['error'],
        'no-div-regex': ['error'],
        'no-else-return': ['error'],
        'no-empty-function': ['error'],
        'no-empty-pattern': ['error'],
        'no-eq-null': ['error'],
        'no-eval': ['error'],
        'no-extend-native': ['error'],
        'no-extra-bind': ['error'],
        'no-extra-label': ['error'],
        'no-fallthrough': ['error', {commentPattern: 'break[\\s\\w]*omitted'}],
        'no-floating-decimal': ['error'],
        'no-global-assign': ['error'],
        'no-implicit-coercion': ['error'],
        'no-implicit-globals': ['error'],
        'no-implied-eval': ['error'],
        'no-invalid-this': ['error'],
        'no-iterator': ['error'],
        'no-labels': ['error'],
        'no-lone-blocks': ['error'],
        'no-loop-func': ['error'],
        'no-magic-numbers': ['off'],
        'no-multi-spaces': ['error'],
        'no-multi-str': ['error'],
        'no-new': ['error'],
        'no-new-func': ['error'],
        'no-new-wrappers': ['error'],
        'no-octal': ['error'],
        'no-octal-escape': ['error'],
        'no-param-reassign': ['error'],
        'no-proto': ['error'],
        'no-redeclare': ['error'],
        'no-restricted-properties': ['off'],
        'no-return-assign': ['error'],
        'no-return-await': ['error'],
        'no-script-url': ['error'],
        'no-self-assign': ['error'],
        'no-self-compare': ['error'],
        'no-sequences': ['error'],
        'no-throw-literal': ['error'],
        'no-unmodified-loop-condition': ['error'],
        'no-unused-expressions': ['error'],
        'no-unused-labels': ['error'],
        'no-useless-call': ['error'],
        'no-useless-concat': ['error'],
        'no-useless-escape': ['error'],
        'no-useless-return': ['error'],
        'no-void': ['off'],
        'no-warning-comments': ['off'],
        'no-with': ['error'],
        'prefer-promise-reject-errors': ['error'],
        radix: ['error'],
        'require-await': ['error'],
        'vars-on-top': ['error'],
        'wrap-iife': ['error'],
        yoda: ['error'],

        // Strict Mode
        strict: ['error', 'global'],

        // Variables
        'init-declarations': ['error', 'never', {ignoreForLoopInit: true}],
        'no-catch-shadow': ['error'],
        'no-delete-var': ['error'],
        'no-label-var': ['error'],
        'no-restricted-globals': ['error', 'event'],
        'no-shadow': ['error', {hoist: 'all'}],
        'no-shadow-restricted-names': ['error'],
        'no-undef': ['error'],
        'no-undef-init': ['error'],
        'no-undefined': ['error'],
        'no-unused-vars': ['error'],
        'no-use-before-define': ['error'],

        // Node.js and CommonJS
        'callback-return': ['error'],
        'global-require': ['error'],
        'handle-callback-err': ['error'],
        'no-mixed-requires': ['error'],
        'no-new-require': ['error'],
        'no-path-concat': ['error'],
        'no-process-env': ['error'],
        'no-process-exit': ['error'],
        'no-restricted-modules': ['off'],
        'no-sync': ['error'],

        // Stylistic Issues
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs'],
        'capitalized-comments': ['off'],
        camelcase: ['error', {properties: 'always'}],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': ['error', 'that'],
        'eol-last': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': ['error', 'always'],
        'func-names': ['error', 'as-needed'],
        'func-style': ['off'],
        'id-blacklist': ['off'],
        'id-length': ['off'],
        'id-match': ['off'],
        indent: ['error', 4],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true
        }],
        'line-comment-position': ['error', {position: 'above'}],
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': ['error', {
            beforeBlockComment: true,
            afterLineComment: false
        }],
        'lines-around-directive': ['error', 'always'],
        'max-depth': ['off'],
        'max-len': ['error', {
            code: 120,
            tabWidth: 4
        }],
        'max-lines': ['off'],
        'max-nested-callbacks': ['off'],
        'max-params': ['off'],
        'max-statements': ['off'],
        'max-statements-per-line': ['error', {max: 1}],
        'multiline-ternary': ['error', 'never'],
        'new-cap': ['error', {
            newIsCap: true,
            capIsNew: false,
            properties: true
        }],
        'new-parens': ['error'],
        'newline-after-var': ['error', 'always'],
        'newline-before-return': ['error'],
        'newline-per-chained-call': ['error', {ignoreChainWithDepth: 2}],
        'no-array-constructor': ['error'],
        'no-bitwise': ['error'],
        'no-continue': ['error'],
        'no-inline-comments': ['error'],
        'no-lonely-if': ['error'],
        'no-mixed-operators': ['error'],
        'no-mixed-spaces-and-tabs': ['error'],
        'no-multi-assign': ['error'],
        'no-multiple-empty-lines': ['error', {max: 2}],
        'no-negated-condition': ['error'],
        'no-nested-ternary': ['error'],
        'no-new-object': ['error'],
        'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
        'no-restricted-syntax': ['off'],
        'no-tabs': ['error'],
        'no-ternary': ['off'],
        'no-trailing-spaces': ['error'],
        'no-underscore-dangle': ['error'],
        'no-unneeded-ternary': ['error'],
        'no-whitespace-before-property': ['error'],
        'nonblock-statement-body-position': ['off'],
        'object-curly-newline': ['error', {multiline: true}],
        'object-curly-spacing': ['error', 'never'],
        'object-property-newline': ['error'],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'quote-props': ['error', 'as-needed', {
            keywords: true,
            unnecessary: true
        }],
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        'require-jsdoc': ['off'],
        semi: ['error', 'always'],
        'semi-spacing': ['error', {
            before: false,
            after: false
        }],
        'sort-keys': ['off'],
        'sort-vars': ['error', {ignoreCase: true}],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['error'],
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false
        }],
        'spaced-comment': ['error', 'always'],
        'template-tag-spacing': ['error', 'always'],
        'unicode-bom': ['error', 'never'],
        'wrap-regex': ['error'],

        // ECMAScript 6
        'arrow-body-style': ['error', 'always'],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': ['error', {
            before: true,
            after: true
        }],
        'constructor-super': ['error'],
        'generator-star-spacing': ['error', {
            before: true,
            after: false
        }],
        'no-class-assign': ['error'],
        'no-confusing-arrow': ['error'],
        'no-const-assign': ['error'],
        'no-dupe-class-members': ['error'],
        'no-duplicate-imports': ['error'],
        'no-new-symbol': ['off'],
        'no-restricted-imports': ['off'],
        'no-this-before-super': ['error'],
        'no-useless-computed-key': ['error'],
        'no-useless-constructor': ['error'],
        'no-useless-rename': ['error'],
        'no-var': ['error'],
        'object-shorthand': ['error'],
        'prefer-arrow-callback': ['error'],
        'prefer-const': ['error'],
        'prefer-destructuring': ['error'],
        'prefer-numeric-literals': ['error'],
        'prefer-rest-params': ['error'],
        'prefer-spread': ['error'],
        'prefer-template': ['error'],
        'require-yield': ['error'],
        'rest-spread-spacing': ['error', 'never'],
        'sort-imports': ['error', {ignoreCase: true}],
        'symbol-description': ['error'],
        'template-curly-spacing': ['error', 'never'],
        'yield-star-spacing': ['error', 'before']
    }
};
