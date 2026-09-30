import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SiteFooter from "@/components/SiteFooter";
import { getPublishedPosts } from "@/data/blogPosts";

export const Route = createFileRoute("/blog")({
  component: Blog,
});

function Blog() {
  const blogPosts = getPublishedPosts();

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
              <p className="text-muted-foreground mb-3">{post.excerpt}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
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
