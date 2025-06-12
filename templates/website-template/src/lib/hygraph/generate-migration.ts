/* eslint-disable */

import fs from 'fs/promises'
import path from 'path'
import readline from 'readline'

const MIGRATIONS_DIR = path.join(
  process.cwd(),
  'src',
  'lib',
  'hygraph',
  'migrations'
)

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Function to get the next migration number
async function getNextMigrationNumber(): Promise<string> {
  try {
    const files = await fs.readdir(MIGRATIONS_DIR)
    const migrationFiles = files.filter((file) => file.endsWith('.ts'))

    if (migrationFiles.length === 0) {
      return '001'
    }

    const latestFile = migrationFiles.sort().pop()
    if (!latestFile) {
      return '001'
    }

    const latestNumber = parseInt(latestFile.substring(0, 3), 10)
    const nextNumber = latestNumber + 1
    return nextNumber.toString().padStart(3, '0')
  } catch (error) {
    // Directory might not exist
    await fs.mkdir(MIGRATIONS_DIR, { recursive: true })
    return '001'
  }
}

// Function to sanitize a name for use in a filename
function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

// Function to create a new migration file
async function createMigrationFile(migrationName: string): Promise<void> {
  const nextNumber = await getNextMigrationNumber()
  const sanitizedName = sanitizeFilename(migrationName)
  const filename = `${nextNumber}_${sanitizedName}.ts`
  const filePath = path.join(MIGRATIONS_DIR, filename)

  const fileContent = `import { Client } from '@hygraph/management-sdk'

export const migrate = async (client: Client) => {
  console.log('Running migration: ${filename}')

  try {
    // TODO: Implement your schema changes here

    
    console.log('Migration ${filename} completed')
  } catch (error) {
    console.error('Migration ${filename} failed with specific error:', error)
    throw error // Re-throw to let the migration-runner know there was an error
  }
}
`

  await fs.writeFile(filePath, fileContent)
  console.log(`Migration file created: ${filePath}`)
}

// Main function
async function main(): Promise<void> {
  // Ask for the migration name
  rl.question(
    'Enter a descriptive name for the migration (e.g., "add article model"): ',
    async (answer) => {
      if (!answer.trim()) {
        console.error('Error: Migration name cannot be empty')
        rl.close()
        return
      }

      try {
        await createMigrationFile(answer.trim())
      } catch (error) {
        console.error('Error creating migration file:', error)
      }

      rl.close()
    }
  )
}

// Run the main function
main().catch(console.error)
