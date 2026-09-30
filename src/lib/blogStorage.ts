/**
 * Client-side blog post storage management
 * Uses localStorage to persist blog posts
 */

import type { BlogPost } from "@/data/blogPosts";

const STORAGE_KEY = "blog_posts";

export function getBlogPosts(): BlogPost[] {
  if (typeof window === "undefined") return [];
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function saveBlogPosts(posts: BlogPost[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function addBlogPost(post: BlogPost): void {
  const posts = getBlogPosts();
  posts.push(post);
  saveBlogPosts(posts);
}

export function updateBlogPost(id: number, updatedPost: Partial<BlogPost>): void {
  const posts = getBlogPosts();
  const index = posts.findIndex((p) => p.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost };
    saveBlogPosts(posts);
  }
}

export function deleteBlogPost(id: number): void {
  const posts = getBlogPosts();
  const filtered = posts.filter((p) => p.id !== id);
  saveBlogPosts(filtered);
}

export function getNextId(): number {
  const posts = getBlogPosts();
  if (posts.length === 0) return 1;
  return Math.max(...posts.map((p) => p.id)) + 1;
}

export function initializeBlogPosts(defaultPosts: BlogPost[]): void {
  if (typeof window === "undefined") return;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    saveBlogPosts(defaultPosts);
  }
}
