# CMS (Hygraph)

The template is set up for integration with [Hygraph](https://hygraph.com/) (headless CMS) with TypeScript support.

**Why Hygraph?**
- "Data first" CMS: powerful modeling, but still has a great visual editor.
- Easiest CMS to implement (in our experience), with a generous free tier.
- Extended with TypeScript-GraphQL codegen for type safety and developer experience.
- Uses a combination of `graphql-request`, `@graphql-codegen/cli`, and other tools for a seamless workflow.

> **Philosophy:** Content modeling should be flexible, type-safe, and easy to maintain. Hygraph + codegen makes working with GraphQL a joy.

## Key Files
- `src/lib/hygraph/`: CMS integration logic
- `codegen.ts`: Code generation for CMS types

## Usage Example

```ts
// Fetch all articles to generate static paths
const articlesQuery = query((q) => [q.articles({}, (a) => [a.slug])]);
const articles = await hygraphRequest(articlesQuery);

return [
  ...articles.articles.map((article) => ({
    params: { slug: article.slug },
  })),
];

// Fetch article data for a page
const { slug } = Astro.params;
const articleQuery = query((q) => [
  q.article({ where: { slug } }, (a) => [
    a.title,
    a.content((c) => [c.html, c.text]),
    a.publishedAt,
  ]),
]);
```

## Migrations & Codegen
- `yarn migrate:hygraph` — Run Hygraph CMS migrations and codegen
- `yarn generate:migration:hygraph` — Generate Hygraph CMS migration files

> **Tip:** When updating content models or queries, document *why* the change was made.
