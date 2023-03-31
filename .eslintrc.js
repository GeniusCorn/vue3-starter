module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@vue/eslint-config-standard-with-typescript',
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-recommended',
    '@unocss',
    'prettier'
  ],
  ignorePatterns: ['*.d.ts', '*.config.ts', '.eslintrc.js'],
  overrides: [
    {
      extends: [
        './.eslintrc-auto-import.json',
        'standard-with-typescript',
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
        'plugin:testing-library/vue',
        'standard-with-typescript',
        'prettier'
      ],
      files: ['*.test.ts', '*.spec.ts']
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
