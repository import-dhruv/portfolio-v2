import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/blog")({
  component: Blog,
});

// Sample blog posts - you can replace this with actual blog data
const blogPosts = [
  {
    id: 1,
    title: "Building Intelligent Systems",
    excerpt: "Exploring the fundamentals of creating AI systems that truly think.",
    date: "2024-03-15",
    slug: "building-intelligent-systems",
  },
  {
    id: 2,
    title: "Data to Decisions",
    excerpt: "How modern ML pipelines transform raw data into actionable insights.",
    date: "2024-02-28",
    slug: "data-to-decisions",
  },
  {
    id: 3,
    title: "Engineering Philosophy",
    excerpt: "Why good engineering is about removing noise, not adding features.",
    date: "2024-02-10",
    slug: "engineering-philosophy",
  },
];

function Blog() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-32 pb-20 sm:pt-40">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-2">blog</h1>
        <p className="text-muted-foreground">
          thoughts on ai, engineering, and building better systems.
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="border-border hover:border-foreground/20 transition-colors cursor-pointer"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-xl font-semibold">
                  {post.title}
                </CardTitle>
                <time className="text-sm text-muted-foreground whitespace-nowrap">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">no posts yet. check back soon.</p>
        </div>
      )}

      <SiteFooter />
    </main>
  );
}
