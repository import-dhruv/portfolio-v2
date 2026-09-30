# 📝 Blog Management Guide

Quick guide to managing your blog posts.

## 🚀 Quick Start: Adding a New Blog Post

**File to edit:** `src/data/blogPosts.ts`

1. Open the file
2. Find the `blogPosts` array
3. Add your new post:

```typescript
{
  id: 4, // Next available number
  title: "My New Blog Post",
  excerpt: "What this post is about in one sentence.",
  date: "2024-03-20",
  slug: "my-new-blog-post",
  tags: ["ai", "engineering"],
  published: true,
},
```

4. Save the file
5. Your post will appear automatically!

## 📋 Template for Copy-Paste

```typescript
{
  id: , // Fill in the next number
  title: "",
  excerpt: "",
  date: "", // YYYY-MM-DD
  slug: "",
  tags: [],
  published: true,
},
```

## 💡 Examples

### Example 1: Tech Tutorial
```typescript
{
  id: 4,
  title: "How to Train Your First Neural Network",
  excerpt: "A step-by-step guide to building and training a simple neural network.",
  date: "2024-03-25",
  slug: "how-to-train-neural-network",
  tags: ["ai", "tutorial", "machine-learning"],
  published: true,
},
```

### Example 2: Opinion Piece
```typescript
{
  id: 5,
  title: "Why Less Code is Better Code",
  excerpt: "Thoughts on simplicity and maintainability in software engineering.",
  date: "2024-03-30",
  slug: "less-code-better-code",
  tags: ["engineering", "philosophy"],
  published: true,
},
```

### Example 3: Draft (Not Visible)
```typescript
{
  id: 6,
  title: "Upcoming Post",
  excerpt: "Still working on this one.",
  date: "2024-04-05",
  slug: "upcoming-post",
  published: false, // Hidden from blog page
},
```

## ✅ Best Practices

1. **IDs**: Always use the next available number
2. **Dates**: Use YYYY-MM-DD format (e.g., "2024-03-25")
3. **Slugs**: Use lowercase with hyphens (e.g., "my-blog-post")
4. **Tags**: Keep them short, lowercase, and relevant
5. **Excerpts**: Keep under 150 characters for best display

## 🎯 Quick Tips

- **Hide a post**: Set `published: false`
- **Posts sort automatically**: Newest first
- **Tags are optional**: Leave them out if you don't need them
- **Hot reload**: Changes appear instantly in dev mode

## 📂 File Location

```
portfolio-v2/
└── src/
    └── data/
        ├── blogPosts.ts  ← Edit this file to add/remove posts
        └── README.md     ← Detailed documentation
```

## 🔗 Useful Links

- Full documentation: `src/data/README.md`
- Blog page: `src/routes/blog.tsx`

---

**Need help?** Check `src/data/README.md` for detailed documentation.
