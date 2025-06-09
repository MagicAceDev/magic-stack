import css from '@eslint/css'
import js from '@eslint/js'
import json from '@eslint/json'
import * as tsParser from '@typescript-eslint/parser'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'

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
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        Image: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
  },
  json.configs.recommended,
  css.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx,astro}'],
    plugins: eslintPluginJsxA11y.flatConfigs.recommended.plugins,
    rules: eslintPluginJsxA11y.flatConfigs.recommended.rules,
  },
]
