module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@vue/eslint-config-standard-with-typescript',
    'plugin:vue/vue3-recommended',
    './.eslintrc-auto-import.json',
    '@unocss',
    'prettier'
  ],
  ignorePatterns: ['*.d.ts', '*.config.ts', '.eslintrc.js', '*.json'],
  overrides: [
    {
      extends: [
        'standard-with-typescript',
        './.eslintrc-auto-import.json',
        'prettier'
      ],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json'
      }
    },
    {
      extends: [
        'standard-with-typescript',
        'plugin:testing-library/vue',
        'prettier'
      ],
      files: ['*.test.ts']
    },
    {
      extends: [
        'standard-with-typescript',
        'plugin:playwright/playwright-test',
        'prettier'
      ],
      files: ['*.spec.ts']
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['vue'],
  root: true,
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
