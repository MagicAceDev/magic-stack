# Code Quality & Automation

The template is preconfigured with tools for code quality, formatting, and automation.

**Why these tools?**
- **ESLint**: Enforces best practices and catches bugs in JS/TS.
- **Prettier**: Consistent code formatting, no bikeshedding.
- **Stylelint**: Lints CSS and Tailwind for consistency and errors.
- **Husky & Lint-Staged**: Run checks before code is committed, keeping the codebase healthy.

> **Philosophy:** Code quality tools should help you ship faster and with confidence, not slow you down.

## Common Commands
- `yarn qa` — Run all code quality checks (lint, style, format)

## Configuration Files
- `.eslintrc.js`, `.prettierrc`, `.stylelintrc.json`, `.lintstagedrc`, `.husky/`

## Usage Example

```bash
yarn qa
# or
npm run qa
```

> **Tip:** If you add or change rules, document *why* and how it improves the codebase.

See each tool's documentation for advanced configuration.
