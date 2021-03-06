module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'space-before-function-paren': 0,
    semi: 0,
    'no-useless-constructor': 0
  },
  globals: {
    describe: 'readonly',
    test: 'readonly',
    expect: 'readonly'
  }
}
