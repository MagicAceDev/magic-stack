import css from '@eslint/css'
import js from '@eslint/js'
import json from '@eslint/json'
import * as tsParser from '@typescript-eslint/parser'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'

export default [
  {
    ignores: [
      'dist/**',
      '.astro/**',
      '.vscode/**',
      'node_modules/**',
      '*.config.js',
      '*.config.mjs',
      '*.d.ts',
    ],
  },
  {
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
      },
    },
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx,astro}'],
    plugins: eslintPluginJsxA11y.flatConfigs.recommended.plugins,
    rules: eslintPluginJsxA11y.flatConfigs.recommended.rules,
  },
  json.configs.recommended,
  css.configs.recommended,
]
