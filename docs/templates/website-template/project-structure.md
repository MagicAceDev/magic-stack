# Project Structure

This template is organized for clarity and ease of navigation. Please keep this section up to date as the structure evolves.

> **Note:** Follow the [documentation philosophy](../../../index.md) when documenting new folders or files. Explain *why* things are structured as they are.

```
website-template/
├── astro.config.ts         # Astro configuration
├── codegen.ts              # Codegen for CMS (Hygraph)
├── drizzle.config.ts       # Drizzle ORM config
├── public/                 # Static assets
├── src/
│   ├── components/         # React & Astro UI components
│   ├── layouts/            # Astro layouts
│   ├── lib/                # App logic (auth, db, analytics, etc.)
│   ├── pages/              # Astro/React pages & API routes
│   ├── styles/             # Tailwind & global CSS
├── .env.example            # Example environment variables
├── package.json            # Scripts & dependencies
```

> **Tip:** When adding new features, document their location and purpose here.

See [Tech Stack](./tech-stack.md) for more details.
