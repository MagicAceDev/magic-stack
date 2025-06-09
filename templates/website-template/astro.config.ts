// @ts-check
import node from '@astrojs/node'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import compress from 'astro-compress'
import icon from 'astro-icon'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import { envDefinition } from './env-definition'

const { SITE_URL } = loadEnv(process.env.NODE_ENV!, process.cwd(), '')

export default defineConfig({
  site: SITE_URL, // The base URL for the site, used for generating absolute URLs
  output: 'static', // Output mode for the site, 'static' for static site generation - we opt in to SSR per route
  env: {
    schema: envDefinition, // Environment variable schema definition
    validateSecrets: true, // Validate secrets in production builds
  },
  server: {
    open: true, // Automatically open the browser when the server starts
  },
  integrations: [
    react(), // Allow using React components in Astro
    icon(), // Enable icon support for SVGs and other icons
    partytown({
      config: {
        forward: ['Honeybadger.notify'],
      }
    }),
    sitemap(), // Generate a sitemap for the site
    robotsTxt({
      sitemap: `${SITE_URL}/sitemap-index.xml`,
    }), // Generate robots.txt file
    compress(), // Enable compression for assets to reduce size
  ],
  prefetch: {
    prefetchAll: true, // Prefetch all links by default
    defaultStrategy: 'viewport', // Default prefetch strategy is to prefetch links in the viewport, this can be overridden per link
  },
  vite: {
    plugins: [tailwindcss()], // Use Tailwind CSS for styling
  },
  adapter: node({
    mode: 'standalone', // Run on a Node.js server, can be swapped to another adapter for different environments
  }),
})
