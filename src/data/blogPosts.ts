/**
 * Blog Posts Data
 * 
 * Add your blog posts here. Each post should have:
 * - id: unique number
 * - title: blog post title
 * - excerpt: short description/preview
 * - date: publication date (YYYY-MM-DD format)
 * - slug: URL-friendly version of title
 * - content: full blog post content (optional, for future use)
 * - tags: array of tags (optional)
 * - published: whether to show the post (optional, defaults to true)
 */

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  content?: string;
  tags?: string[];
  published?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Intelligent Systems",
    excerpt: "Exploring the fundamentals of creating AI systems that truly think.",
    date: "2024-03-15",
    slug: "building-intelligent-systems",
    tags: ["ai", "engineering"],
    published: true,
  },
  {
    id: 2,
    title: "Data to Decisions",
    excerpt: "How modern ML pipelines transform raw data into actionable insights.",
    date: "2024-02-28",
    slug: "data-to-decisions",
    tags: ["machine-learning", "data"],
    published: true,
  },
  {
    id: 3,
    title: "Engineering Philosophy",
    excerpt: "Why good engineering is about removing noise, not adding features.",
    date: "2024-02-10",
    slug: "engineering-philosophy",
    tags: ["engineering", "philosophy"],
    published: true,
  },
];

/**
 * Helper function to get all published posts sorted by date (newest first)
 */
export function getPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Helper function to get a single post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.published !== false);
}

/**
 * Helper function to get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.published !== false && post.tags?.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Helper function to get all unique tags
 */
export function getAllTags(): string[] {
  const tags = blogPosts
    .filter((post) => post.published !== false)
    .flatMap((post) => post.tags || []);
  return Array.from(new Set(tags)).sort();
}
