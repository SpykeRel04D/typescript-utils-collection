// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'react-refresh'],
  rules: {
    /* 'react-refresh/only-export-components': 'warn', */
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-explicity-any': 0,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/no-useless-escape': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
  ignorePatterns: ['node_modules', 'build'],
}
