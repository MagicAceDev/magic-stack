/* eslint-disable */

import { Client } from '@hygraph/management-sdk'
import fs from 'fs/promises'
import path from 'path'
import { loadEnv } from 'vite'

const { HYGRAPH_ENDPOINT, HYGRAPH_ACCESS_TOKEN } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  ''
)

// Define registry type
interface MigrationRegistry {
  appliedMigrations: string[]
}

// Configuration
const MIGRATIONS_DIR = path.join(
  process.cwd(),
  'src',
  'lib',
  'hygraph',
  'migrations'
)
const REGISTRY_FILE = path.join(
  process.cwd(),
  'src',
  'hygraph',
  'migration-registry.json'
)

// Create Hygraph client
const client = new Client({
  endpoint: HYGRAPH_ENDPOINT as string,
  authToken: HYGRAPH_ACCESS_TOKEN as string,
})

// Function to read the registry file or create it if it doesn't exist
async function getRegistry(): Promise<MigrationRegistry> {
  try {
    const registryData = await fs.readFile(REGISTRY_FILE, 'utf8')
    return JSON.parse(registryData)
  } catch (error) {
    // Registry doesn't exist, create a new one
    const newRegistry: MigrationRegistry = { appliedMigrations: [] }
    await fs.writeFile(REGISTRY_FILE, JSON.stringify(newRegistry, null, 2))
    return newRegistry
  }
}

// Function to update the registry with a new migration
async function updateRegistry(migrationFile: string): Promise<void> {
  const registry = await getRegistry()
  if (!registry.appliedMigrations.includes(migrationFile)) {
    registry.appliedMigrations.push(migrationFile)
    // Sort the migrations to keep them in order
    registry.appliedMigrations.sort()
    await fs.writeFile(REGISTRY_FILE, JSON.stringify(registry, null, 2))
  }
}

// Helper to convert file path to URL (for ESM imports)
function pathToFileURL(filePath: string): string {
  // Convert Windows backslashes to forward slashes
  const normalizedPath = filePath.replace(/\\/g, '/')

  // Make sure it has the file:// prefix
  if (process.platform === 'win32') {
    // Windows needs file:///c:/path/format
    return `file:///${normalizedPath}`
  }

  // Unix systems
  return `file://${normalizedPath}`
}

// Function to run pending migrations
async function runMigrations(): Promise<void> {
  console.log('Starting Hygraph migration process...')

  // Get the list of applied migrations
  const registry = await getRegistry()

  // Get all migration files
  const files = await fs.readdir(MIGRATIONS_DIR)
  const migrationFiles = files.filter((file) => file.endsWith('.ts')).sort() // Ensure files are processed in alphabetical order

  console.log(`Found ${migrationFiles.length} migration files`)
  console.log(
    `${registry.appliedMigrations.length} migrations have already been applied`
  )

  // Process each migration file
  for (const file of migrationFiles) {
    if (registry.appliedMigrations.includes(file)) {
      console.log(`Skipping already applied migration: ${file}`)
      continue
    }

    try {
      console.log(`Applying migration: ${file}`)

      // Get full path to migration file
      const fullPath = path.join(MIGRATIONS_DIR, file)

      // Convert path to URL format for ESM import
      const moduleUrl = pathToFileURL(fullPath)

      // Import the migration module
      const migrationModule = await import(moduleUrl)

      // Execute the migration
      if (typeof migrationModule.migrate === 'function') {
        await migrationModule.migrate(client)
        const result = await client.run()

        if (result.status !== 'SUCCESS') {
          console.error(`Error applying migration ${file}:`, result)
          process.exit(1) // Exit on error
        }

        // Update the registry
        await updateRegistry(file)
        console.log(`Migration applied successfully: ${file}`)
      } else {
        console.error(
          `Error: Migration file ${file} does not export a migrate function`
        )
      }
    } catch (error) {
      console.error(`Error applying migration ${file}:`, error)
      process.exit(1) // Exit on error
    }
  }

  console.log('Migration process completed successfully')
}

// Run the migrations
runMigrations().catch((error) => {
  console.error('Migration process failed:', error)
  process.exit(1)
})
