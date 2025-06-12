# Error Monitoring (Honeybadger)

[Honeybadger](https://www.honeybadger.io/) is integrated for error monitoring and reporting.

**Why Honeybadger?**
- Generous free tier and built by devs for devs.
- Simple, reliable error tracking for modern web apps.
- Lets you catch errors before your users do, and debug production issues quickly.

> **Philosophy:** Error monitoring should be easy to set up, affordable, and actionable.

## Key Files
- `src/lib/honeybadger/web-tracking.astro`: Honeybadger web tracking integration

## Usage Example

```astro
---
import Honeybadger from '../../lib/honeybadger/web-tracking.astro';
---
<Honeybadger />
```

## Usage
- Errors are automatically reported to Honeybadger if configured.
- Add your Honeybadger API key to your environment variables.

> **Tip:** If you add custom error handling, document *why* and how it works.

See the Honeybadger docs for advanced configuration.
