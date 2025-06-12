# Authentication

Authentication is powered by the **Better Auth** system (WIP).

**Why Better Auth?**
- Works with everything: Astro, React, API routes, etc.
- Astro authentication is notoriously tricky, but Better Auth provides a robust, flexible solution out of the box.
- Strikes a balance between roll-your-own and hosted providers (like Clerk): you get extensibility, but also batteries-included features (emails, passwordless, passkeys, SSO, etc).
- Open source and easy to extend or integrate with third-party providers.

> **Philosophy:** Auth should be secure, flexible, and not lock you in. Better Auth lets you build what you want, but doesn't force you into a rigid flow.

## Key Files
- `src/components/login-form.tsx`: Login form UI
- `src/pages/auth/login.astro`: Login page
- `src/pages/api/auth/[...all].ts`: API route for auth
- `src/lib/auth/`: Auth logic for Astro and React

## Usage Example

```astro
---
import LoginForm from '../components/login-form.tsx';
---
<LoginForm />
```

> **Note:** The authentication system is a work in progress. When finished, usage and extension examples will be added here.

## Implementation Tips
- Customize the login form and authentication logic as needed.
- See `src/lib/auth/` for client/server helpers.
- Document *why* you make changes to auth flows for future maintainers.
