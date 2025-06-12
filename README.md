# Magic-Stack

The battle-tested tech stack for rapid development

Magic-Stack is an open source, batteries-included template for building modern web and mobile applications. Built by [MagicAce](https://magicace.co.uk), it combines best-in-class tools and practices to help you launch production-ready projects faster.

## Why Magic-Stack?

- **Clever solutions to unique problems**: Built by experienced engineers who care about real-world results.
- **Full-stack, modern, and scalable**: Everything you need, nothing you don’t.
- **Brandable and future-proof**: Designed for teams, agencies, and solo devs alike.

## Repository Structure

```
magic-stack/
├── README.md           # This file
├── LICENSE             # MIT License
├── templates/          # Starter templates for different app types
│   ├── website-template/   # Astro + React + TailwindCSS + More
│   └── mobile-app/         # (Coming soon) React Native + Expo
└── docs/               # Detailed documentation
```

## Included Technologies (Website Template)

- **Astro**: Lightning-fast static site generator
- **React**: Interactive UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Drizzle ORM**: TypeScript-first SQL ORM (Turso/LibSQL)
- **Hygraph CMS**: Headless CMS integration (WIP)
- **Better Auth**: Authentication solution (WIP)
- **Honeybadger**: Error monitoring
- **PostHog**: Product analytics
- **Husky & Lint-Staged**: Git hooks and pre-commit QA
- **ESLint, Prettier, Stylelint**: Code quality tools
- **Commitizen**: Conventional commit messages (planned)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/MagicAceDev/magic-stack.git
   cd magic-stack/templates/website-template
   ```
2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```
3. **Configure environment variables**
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

## Features

- Modern, scalable architecture
- Preconfigured code quality and automation
- Production-ready integrations
- Human-centered, developer-friendly design

## Contributing

Pull requests and issues are welcome! See [CONTRIBUTING.md](docs/CONTRIBUTING.md) (coming soon).

## License

MIT License. See [LICENSE](LICENSE).

---

Built with ❤️ by [Keeghan McGarry](https://magicace.co.uk) and the MagicAce team.
