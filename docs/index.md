# MagicStack Technical Documentation

Here you will find the technical documentation for MagicStack, this file aims to provide the guidelines and best practices for writing documentation. If you just want to read the documentation for the templates, please go to:

- **Website Template**: [docs/templates/website-template/index.md](./templates/website-template/index.md)


## Philosophy

As a developer, I hate writing documentation. But I hate even more reading undocumented code.
First of all, you need to understand you are not writing documentation for you, nor for your current team. You are writing documentation for the future developers that were not there when you first wrote this code.

Documentation is a living document. It should be updated as the code changes, and it doesn't need to be perfect from the start. The goal is to provide enough context and information for future developers to understand the codebase, its structure, and how to work with it.

The start of good documentation is well written code. If your code is clean, well-structured, and follows best practices, it will be easier to understand and maintain. Documentation should complement the code, not replace it.

## Coding Best Practices

- **Names**: Both functions and variables should use descriptive names that clearly indicate their purpose. Long names > short names, it all gets minified in production anyway.
- **Comments**: Use comments to explain why something is done, not what is done. The code should be self-explanatory for the most part, but complex logic or non-obvious decisions should be documented.
- **Logical Flows**: Use guard clauses to handle edge cases early in the function. Don't nest things too deeply. 
- **KISS but also don't**: Don't over-simplify, or over-engineer. Don't waste time abstracting things that don't need it. DRY is good, but not at the cost of readability - or speed. Make it work, make it right, make it fast.
- **Inline docs**: Use JSDoc or similar to document functions, especially public APIs. This helps with IDE autocompletion and provides a quick reference for what a function does. The standalone docs should be used for more in-depth explanations, examples, and usage patterns.

## Documentation Templates

Depending on what is being documented, the structure may vary. User-facing documentation should be more high-level and focused on usage, while developer documentation can be more technical and detailed. Some projects may require both types of documentation, in fact most do.

Are you writing a framework? Or a SaaS tool? A library? A template? A CLI tool? Each has its own needs and audience. 


### Documentation Templates (COMING SOON) 