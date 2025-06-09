import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnv } from 'vite'

const { HYGRAPH_ENDPOINT } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  ''
)

const config: CodegenConfig = {
  schema: HYGRAPH_ENDPOINT as string,
  ignoreNoDocuments: true,
  generates: {
    './src/lib/hygraph/graphql/': {
      preset: 'client',
      plugins: [],
      config: {
        documentMode: 'string',
        useTypeImports: true,
        dedupeFragments: true,
        pureMagicComment: true,
        nonOptionalTypename: true,
      },
    },
    './src/lib/hygraph/graphql/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
