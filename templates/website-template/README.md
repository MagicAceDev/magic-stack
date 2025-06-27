# MagicStack Website Template

A modern, batteries-included website template built with Astro, React, Tailwind CSS, Drizzle ORM, and more. This template is designed for rapid development of production-ready web applications, with a focus on best practices, performance, and developer experience.

## Technologies Used

- **Astro**: Static site generator and meta-framework for building fast websites.
- **React**: For interactive UI components within Astro pages.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Drizzle ORM**: TypeScript-first ORM for SQL databases (Turso/LibSQL).
- **Hygraph CMS**: Headless CMS integration with full TypeScript support (WIP).
- **Better Auth**: Authentication solution (WIP).
- **Honeybadger**: Error monitoring and reporting.
- **PostHog**: Product analytics and event tracking.
- **Husky & Lint-Staged**: Git hooks and pre-commit QA automation.
- **ESLint, Prettier, Stylelint**: Code quality and formatting tools.
- **Commitizen**: Conventional commit messages (TODO).
- **VSCode Config**: Editor configuration and recommended extensions (TODO).

## Features

| Feature                                      | Status         |
| -------------------------------------------- | -------------- |
| Astro + React integration                    | ✅ Built       |
| Tailwind CSS + Prettier plugin               | ✅ Built       |
| Drizzle ORM (Turso/LibSQL)                   | ✅ Built       |
| Hygraph CMS integration (TypeScript support) | 🏗️ WIP         |
| Authentication (Better Auth)                 | ✅ Built       |
| Honeybadger error monitoring                 | ✅ Built       |
| PostHog analytics                            | ✅ Built       |
| Linting (ESLint, Stylelint, Prettier)        | ✅ Built       |
| Husky + Lint-Staged pre-commit QA            | ✅ Built       |
| Commitizen (conventional commits)            | ⏳ Not started |
| Payments integration                         | ⏳ Not started |
| VSCode config auto-setup                     | ⏳ Not started |
| Component Generator Scripts                  | ⏳ Not started |

## Getting Started

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```
3. **Copy and configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```
4. **Run the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

## Scripts

- `yarn dev` — Start the development server
- `yarn build` — Build for production
- `yarn preview` — Preview the production build
- `yarn qa` — Run all code quality checks (lint, style, format)
- `yarn migrate:db` — Run Drizzle ORM migrations
- `yarn migrate:hygraph` — Run Hygraph CMS migrations and codegen
- `yarn generate:migration:hygraph` — Generate Hygraph CMS migration files

## Folder Structure

- `src/` — Source code (components, pages, lib, styles)
- `public/` — Static assets
- `migrations/` — Database migrations

**MIT License**
