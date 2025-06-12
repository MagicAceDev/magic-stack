# FAQ

> **Note:** If you add, remove, or change common questions, update this doc and explain *why* the change was made. See the [documentation philosophy](../../../index.md).

**Q: How do I add a new page or route?**
A: Add a new `.astro` or `.tsx` file to `src/pages/`. Astro uses file-based routing.

**Q: How do I add a new UI component?**
A: Add a new file to `src/components/ui/` and export your component.

**Q: How do I run database migrations?**
A: Use `yarn migrate:db` for Drizzle ORM migrations.

**Q: How do I enable analytics or error monitoring?**
A: Add your API keys to `.env` and see the [Honeybadger](./honeybadger.md) and [PostHog](./posthog.md) docs.

**Q: Where do I configure environment variables?**
A: Copy `.env.example` to `.env` and edit as needed.

For more, see the relevant docs or open an issue!
