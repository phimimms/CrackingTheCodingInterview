module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    BigInt: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
    'import',
    'jest',
  ],
  rules: {

    /* eslint-disable quote-props,sort-keys */

    /* Possible Errors */
    'no-await-in-loop': 2,
    'no-template-curly-in-string': 2,

    /* Best Practices */
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'class-methods-use-this': 2,
    'complexity': [ 2, 20 ],
    'consistent-return': 2,
    'guard-for-in': 2,
    'max-classes-per-file': [ 2, 1 ],
    'no-alert': 2,
    'no-caller': 2,
    'no-empty-function': 'off',
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-floating-decimal': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'prefer-named-capture-group': 2,
    'prefer-promise-reject-errors': 2,
    'radix': 2,
    'require-await': 2,
    'require-unicode-regexp': 2,
    'vars-on-top': 2,
    'wrap-iife': 2,
    'yoda': 2,

    /* Variables */
    'no-shadow': 0,
    'no-undef-init': 2,
    'no-use-before-define': 'off',

    /* Stylistic Issues */
    'array-bracket-spacing': [ 1, 'always' ],
    'block-spacing': 1,
    'brace-style': 1,
    'camelcase': 1,
    'capitalized-comments': 1,
    'comma-dangle': [ 1, 'always-multiline' ],
    'comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': [ 1, 'never' ],
    'eol-last': 1,
    'func-call-spacing': 'off',
    'func-name-matching': 1,
    'func-names': [ 1, 'never' ],
    'func-style': [ 1, 'declaration' ],
    'function-paren-newline': [ 1, 'multiline' ],
    'implicit-arrow-linebreak': [ 1, 'beside' ],
    'indent': 'off',
    'key-spacing': 1,
    'keyword-spacing': 1,
    'lines-around-comment': 1,
    'lines-between-class-members': 1,
    'max-depth': 1,
    'max-len': [ 1, { 'code': 125, 'tabWidth': 2 } ],
    'max-nested-callbacks': 1,
    'max-statements-per-line': 1,
    'multiline-comment-style': 1,
    'new-cap': 0,
    'new-parens': 1,
    'newline-per-chained-call': 0,
    'no-array-constructor': 1,
    'no-bitwise': 1,
    'no-inline-comments': 1,
    'no-lonely-if': 1,
    'no-multi-assign': 1,
    'no-multiple-empty-lines': 1,
    'no-nested-ternary': 0,
    'no-new-object': 1,
    'no-plusplus': [ 1, { 'allowForLoopAfterthoughts': true } ],
    'no-tabs': 1,
    'no-trailing-spaces': 1,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 1,
    'no-whitespace-before-property': 1,
    'nonblock-statement-body-position': [ 1, 'below' ],
    'object-curly-newline': [ 1, { 'consistent': true } ],
    'object-curly-spacing': [ 1, 'always' ],
    'object-property-newline': [ 1, { 'allowAllPropertiesOnSameLine': true } ],
    'one-var': [ 1, { 'uninitialized': 'consecutive' } ],
    'operator-linebreak': [ 1, 'after', { 'overrides': { '?': 'before', ':': 'before' } } ],
    'padded-blocks': [ 1, { 'classes': 'always' } ],
    'padding-line-between-statements': [ 1,
      { 'blankLine': 'always', 'prev': '*', 'next': 'break' },
      { 'blankLine': 'always', 'prev': 'block-like', 'next': '*' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'class' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'continue' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'do' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'for' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'function' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'if' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'iife' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'switch' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'throw' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'try' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'while' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'with' },
    ],
    'prefer-object-spread': 1,
    'quote-props': [ 1, 'as-needed' ],
    'quotes': [ 1, 'single', { 'allowTemplateLiterals': true } ],
    'semi': 'off',
    'semi-spacing': 1,
    'semi-style': [ 1, 'last' ],
    'sort-keys': 1,
    'sort-vars': [ 1, { 'ignoreCase': true } ],
    'space-before-blocks': 1,
    'space-before-function-paren': [ 1, 'never' ],
    'space-in-parens': 1,
    'space-infix-ops': 1,
    'space-unary-ops': [ 1, {
      'nonwords': false,
      'words': true,
    } ],
    'spaced-comment': [ 1, 'always' ],
    'switch-colon-spacing': 1,
    'template-tag-spacing': 1,
    'unicode-bom': 1,
    'wrap-regex': 1,

    /* ECMAScript 6 */
    'arrow-body-style': 2,
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'generator-star-spacing': 2,
    'no-confusing-arrow': [ 2, { 'allowParens': true } ],
    'no-dupe-class-members': 0,
    'no-duplicate-imports': 0,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': [ 2, { 'destructuring': 'all' } ],
    'prefer-destructuring': 2,
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'rest-spread-spacing': 2,
    'symbol-description': 2,
    'template-curly-spacing': 2,
    'yield-star-spacing': 2,

    /* Jest */
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    /* TypeScript */
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/func-call-spacing': 1,
    '@typescript-eslint/indent': [ 1, 2, { 'SwitchCase': 1 } ],
    '@typescript-eslint/member-ordering': 2,
    '@typescript-eslint/no-dupe-class-members': 2,
    '@typescript-eslint/no-empty-function': [ 2, { 'allow': [ 'arrowFunctions' ] } ],
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-this-alias': 2,
    '@typescript-eslint/no-type-alias': 0,
    '@typescript-eslint/no-use-before-define': [ 2, { 'functions': false } ],
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/semi': 1,
    '@typescript-eslint/unified-signatures': 2,

    /* TSDoc */
    'tsdoc/syntax': 1,

    /* eslint-enable quote-props,sort-keys */
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: __dirname,
      },
    },
  },
};
