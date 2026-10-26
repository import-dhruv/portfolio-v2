# Data Management

This directory contains static data files for the portfolio:

- `projects.ts` - Portfolio projects showcase
- `articles.ts` - X articles, blogs, and posts with direct external links
- `experience.ts` - Career history and experience

## How to Add a New Article / Blog Link

Open `src/data/articles.ts` and add a new object to the `articles` array:

```typescript
{
  id: 4,
  title: "Your Article Title",
  url: "https://x.com/your-username/status/...", // Link directly to X or your blog
  description: "Brief summary or takeaway (optional)",
  date: "2024-04-01", // Optional
  platform: "X", // Optional
}
```

The article will automatically show up under the **writing** section on the home page and open directly when clicked.
