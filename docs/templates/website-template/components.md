# Component Library

The template includes a set of reusable UI components, built with React and Astro, and styled with Tailwind CSS.

**Why this approach?**
- Don't reinvent the wheel: based on the ShadCN UI philosophy, copy code into your codebase so it's yours to extend.
- Accessibility is a must: all components are designed to be accessible out of the box.
- Minimal but extensible: start simple, but easy to customize for your needs.

> **Philosophy:** Component libraries should empower, not restrict. Copying code in means you own it, and can adapt as needed.

## Key Components
- `src/components/ui/`: Button, Card, DropdownMenu, Input, Label, ThemeToggle
- `src/components/login-form.tsx`: Login form

## Usage Examples

**React (in Astro or React):**
```tsx
import { Button } from './components/ui/button';

export default function MyPage() {
  return <Button>Click me</Button>;
}
```

**Astro:**
```astro
---
import { Button } from '../components/ui/button';
---
<Button>Click me</Button>
```

> **Tip:** When adding or changing components, document *why* and how to use them, especially for accessibility.

See the source files for more usage examples.
