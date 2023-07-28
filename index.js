module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['eslint-plugin-simple-import-sort', 'eslint-plugin-unused-imports'],
  rules: {
    'prettier/prettier': 'error',
    'no-implicit-coercion': 'error',

    'no-undef': 'off',

    indent: 'off',
    'no-extra-boolean-cast': 'off',

    'getter-return': 'warn',

    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'util',
            importNames: ['isArray'],
            message: '`Array.isArray`를 대신 사용해주세요!',
          },
        ],
      },
    ],
    'no-async-promise-executor': 'warn',

    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
        location: 'anywhere',
      },
    ],
    'prefer-const': 'error',
    'no-var': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/no-duplicates': 'error',
  },
};
