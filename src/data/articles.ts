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

export const articles: Article[] = [
  {
    id: 1,
    title: "building intelligent systems",
    url: "https://x.com/importdhruv",
    description: "fundamentals of creating ai systems that reason and plan",
    date: "2024-03-15",
    platform: "X",
  },
  {
    id: 2,
    title: "data to decisions",
    url: "https://x.com/importdhruv",
    description: "how modern ml pipelines transform raw data into actionable insights",
    date: "2024-02-28",
    platform: "X",
  },
  {
    id: 3,
    title: "engineering philosophy",
    url: "https://x.com/importdhruv",
    description: "why good engineering is about removing noise, not adding features",
    date: "2024-02-10",
    platform: "X",
  },
];

/**
 * Helper function to retrieve all articles
 */
export function getAllArticles(): Article[] {
  return articles;
}
