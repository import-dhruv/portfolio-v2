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
 */

export interface Article {
  id: number | string;
  title: string;
  url: string;
  description?: string;
  date?: string;
  platform?: string;
}

export const articles: Article[] = [];

/**
 * Helper function to retrieve all articles
 */
export function getAllArticles(): Article[] {
  return articles;
}
