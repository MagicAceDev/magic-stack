/* eslint-disable */

import type { Config } from 'drizzle-kit'
import { loadEnv } from 'vite'

const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = loadEnv(
  process.env.NODE_ENV!,
  process.cwd(),
  ''
)

export default {
  schema: './src/lib/db/schema.ts',
  out: './migrations',
  dialect: 'turso',
  dbCredentials: {
    url: TURSO_DATABASE_URL,
    authToken: TURSO_AUTH_TOKEN,
  },
} satisfies Config
