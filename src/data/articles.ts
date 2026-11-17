/**
 * Articles & Writing Data
 *
 * Add your X articles, blogs, and posts here.
 * Paste direct links from X (or any external publication).
 *
 * Each item supports:
 * - id: unique identifier
 * - title: article title
 * - url: direct link to the post/article on X (or external site)
 * - description: optional brief summary
 * - date: optional publication date (YYYY-MM-DD)
 * - platform: optional platform name (defaults to "X")
 * - category: which writing page the article belongs to
 */

export interface Article {
  id: number | string;
  title: string;
  url: string;
  description?: string;
  date?: string;
  platform?: string;
  category?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "How Compilation System Works in Your Computer?",
    url: "https://x.com/importdhruv/status/2122659000219299982",
    date: "2026-11-17",
    platform: "X",
    category: "computer science",
  },
];

/**
 * Helper function to retrieve all articles
 */
export function getAllArticles(): Article[] {
  return articles;
}

/**
 * Helper function to retrieve articles by category
 */
export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category);
}
