# Database & Drizzle ORM

This template uses [Drizzle ORM](https://orm.drizzle.team/) for type-safe SQL database access. **Why Drizzle?**

- Drizzle offers a SQL-like syntax, making it easy to reason about queries and migrations.
- It avoids the heavy abstraction of tools like Prisma, giving you more control and transparency.
- Drizzle works especially well with Turso & LibSQL, which are the default databases for this template.

> **Personal note:** Drizzle was chosen for its balance of power and simplicity. If you prefer raw SQL but want type safety and migrations, Drizzle is a great fit.

## Key Files
- `src/lib/db/db.ts`: Drizzle client setup
- `src/lib/db/schema.ts`: Database schema definitions
- `drizzle.config.ts`: Drizzle migration config
- `migrations/`: Database migration files

## Usage Example

```ts
// Example: Fetching all users
import { db } from '../lib/db/db';
import { users } from '../lib/db/schema';

const allUsers = await db.select().from(users);
```

## Common Commands
- `yarn migrate:db` — Run Drizzle ORM migrations

> **Tip:** When updating schema or queries, document *why* the change was made.

See the Drizzle docs for advanced usage.
