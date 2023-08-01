module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended-type-checked'],
  rules: {
    '@typescript-eslint/indent': 'off',

    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/no-use-before-define': 'off',

    '@typescript-eslint/no-empty-interface': 'off',

    '@typescript-eslint/no-parameter-properties': 'off',

    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
      },
      { format: ['camelCase', 'PascalCase'], selector: 'function' },
      { format: ['PascalCase'], selector: 'interface' },
      { format: ['PascalCase'], selector: 'typeAlias' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'private-static-field',
          'public-instance-field',
          'private-instance-field',
          'public-constructor',
          'private-constructor',
          'public-instance-method',
          'private-instance-method',
        ],
      },
    ],

    '@typescript-eslint/no-var-requires': 'warn',
  },
};
