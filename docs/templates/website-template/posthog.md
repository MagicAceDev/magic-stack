# Analytics (PostHog)

[PostHog](https://posthog.com/) is integrated for product analytics and event tracking.

**Why PostHog?**
- Generous free tier, built by devs for devs.
- One of the best product event tracking tools available: feature flags, surveys, screen recordings, A/B testing, web analytics, and more.
- A true workhorse for understanding and improving your product.

> **Philosophy:** Analytics should be actionable, privacy-conscious, and developer-friendly.

## Key Files
- `src/lib/posthog/web-tracking.astro`: PostHog web tracking integration

## Usage Example

```astro
---
import PostHog from '../../lib/posthog/web-tracking.astro';
---
<PostHog />
```

## Usage
- Add your PostHog API key to your environment variables.
- Analytics events are tracked automatically if configured.

> **Tip:** If you add custom event tracking, document *why* and how it works.

See the PostHog docs for advanced usage.
