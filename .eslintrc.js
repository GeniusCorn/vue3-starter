module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@unocss',
    './.eslintrc-auto-import.json',
    'plugin:playwright/playwright-test',
    'prettier',
  ],
  ignorePatterns: ['*.d.ts', '*.config.ts', '.eslintrc.js', '*.json', '*.md'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  root: true,
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
