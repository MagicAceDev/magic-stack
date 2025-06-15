import { envField } from 'astro/config'
import { loadEnv } from 'vite'
// Check if any environment variables are still set to default values
const env = loadEnv(process.env.NODE_ENV!, process.cwd(), '')
Object.entries(env).forEach(([key, value]) => {
  if (value.includes('your_'))
    throw new Error(
      `Environment variable ${key} is still set to its default value. Please update it in your .env file.`
    )
})

export const envDefinition = {
  REVISION: envField.string({
    context: 'client',
    access: 'public',
    optional: false,
  }),
  SITE_URL: envField.string({
    context: 'server',
    access: 'public',
    optional: false,
  }),
  PUBLIC_HONEYBADGER_KEY: envField.string({
    context: 'client',
    access: 'public',
    optional: false,
  }),
  PUBLIC_POSTHOG_KEY: envField.string({
    context: 'client',
    access: 'public',
    optional: false,
  }),
  PUBLIC_POSTHOG_HOST: envField.string({
    context: 'client',
    access: 'public',
    optional: false,
  }),
  TURSO_DATABASE_URL: envField.string({
    context: 'server',
    access: 'secret',
    optional: false,
  }),
  TURSO_AUTH_TOKEN: envField.string({
    context: 'server',
    access: 'secret',
    optional: false,
  }),
}
