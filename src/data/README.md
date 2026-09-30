# Blog Data Management

This folder contains the data management system for your blog posts.

## How to Add a New Blog Post

1. Open `blogPosts.ts`
2. Add a new entry to the `blogPosts` array:

```typescript
{
  id: 4, // Make sure this is unique
  title: "Your Blog Title",
  excerpt: "A short description that appears in the blog list.",
  date: "2024-03-20", // Format: YYYY-MM-DD
  slug: "your-blog-title", // URL-friendly version (lowercase, hyphens)
  tags: ["tag1", "tag2"], // Optional: categorize your post
  published: true, // Optional: set to false to hide the post
}
```

## Blog Post Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | number | ✅ Yes | Unique identifier for the post |
| `title` | string | ✅ Yes | The blog post title |
| `excerpt` | string | ✅ Yes | Short description shown in list view |
| `date` | string | ✅ Yes | Publication date (YYYY-MM-DD format) |
| `slug` | string | ✅ Yes | URL-friendly identifier |
| `tags` | string[] | ❌ No | Array of tags for categorization |
| `published` | boolean | ❌ No | Show/hide post (defaults to true) |
| `content` | string | ❌ No | Full content (for future use) |

## Examples

### Simple Blog Post
```typescript
{
  id: 5,
  title: "Getting Started with AI",
  excerpt: "A beginner's guide to artificial intelligence.",
  date: "2024-03-25",
  slug: "getting-started-with-ai",
}
```

### Blog Post with Tags
```typescript
{
  id: 6,
  title: "Building Scalable Systems",
  excerpt: "Best practices for designing systems that scale.",
  date: "2024-03-30",
  slug: "building-scalable-systems",
  tags: ["engineering", "architecture", "scalability"],
}
```

### Draft Post (Hidden)
```typescript
{
  id: 7,
  title: "Work in Progress",
  excerpt: "This post is not ready yet.",
  date: "2024-04-01",
  slug: "work-in-progress",
  published: false, // This post won't show on the blog page
}
```

## Helper Functions

The system includes several helper functions in `blogPosts.ts`:

- `getPublishedPosts()` - Returns all published posts sorted by date (newest first)
- `getPostBySlug(slug)` - Find a specific post by its slug
- `getPostsByTag(tag)` - Get all posts with a specific tag
- `getAllTags()` - Get all unique tags used across posts

## Tips

1. **Keep IDs unique** - Always increment the ID for new posts
2. **Use consistent slugs** - Make them lowercase with hyphens (e.g., "my-blog-post")
3. **Date format** - Always use YYYY-MM-DD format for dates
4. **Preview drafts** - Set `published: false` to work on posts without showing them
5. **Tags** - Use lowercase, single words or hyphenated phrases for consistency

## Sorting

Posts are automatically sorted by date (newest first) when displayed on the blog page.

## Future Enhancements

This system is designed to be extended with:
- Full blog post pages (using the `slug` field)
- Tag filtering
- Search functionality
- Markdown content support
- Reading time estimation
