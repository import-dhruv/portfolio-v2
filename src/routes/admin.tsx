import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { isAuthenticated, login, logout } from "@/lib/auth";
import { getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost, getNextId, initializeBlogPosts } from "@/lib/blogStorage";
import { blogPosts as defaultPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";
import { Trash2, Edit, Plus, LogOut } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: Admin,
});

function Admin() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const auth = isAuthenticated();
    setAuthenticated(auth);
    if (auth) {
      initializeBlogPosts(defaultPosts);
      loadPosts();
    }
  }, []);

  const loadPosts = () => {
    const storedPosts = getBlogPosts();
    setPosts(storedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setAuthenticated(true);
      setError("");
      initializeBlogPosts(defaultPosts);
      loadPosts();
    } else {
      setError("Invalid password");
    }
  };

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
    router.navigate({ to: "/" });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deleteBlogPost(id);
      loadPosts();
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingPost({
      id: getNextId(),
      title: "",
      excerpt: "",
      date: new Date().toISOString().split("T")[0],
      slug: "",
      tags: [],
      published: true,
    });
    setIsCreating(true);
  };

  const handleSave = (post: BlogPost) => {
    if (isCreating) {
      addBlogPost(post);
    } else {
      updateBlogPost(post.id, post);
    }
    loadPosts();
    setEditingPost(null);
    setIsCreating(false);
  };

  if (!authenticated) {
    return (
      <main className="mx-auto max-w-md px-6 pt-32 pb-20">
        <Card>
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter password to access admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (editingPost) {
    return <BlogPostForm post={editingPost} onSave={handleSave} onCancel={() => setEditingPost(null)} />;
  }

  return (
    <main className="mx-auto max-w-4xl px-6 pt-32 pb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
          <p className="text-muted-foreground mt-1">Manage your blog posts</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleCreate}>
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    {!post.published && (
                      <Badge variant="secondary">Draft</Badge>
                    )}
                  </div>
                  <CardDescription>{post.excerpt}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEdit(post)}
                    variant="ghost"
                    size="sm"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(post.id)}
                    variant="ghost"
                    size="sm"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-1">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No posts yet. Create your first post!</p>
          </CardContent>
        </Card>
      )}
    </main>
  );
}

function BlogPostForm({
  post,
  onSave,
  onCancel,
}: {
  post: BlogPost;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(post);
  const [tagInput, setTagInput] = useState(post.tags?.join(", ") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tags = tagInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    
    onSave({
      ...formData,
      tags,
      slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
    });
  };

  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <Card>
        <CardHeader>
          <CardTitle>{post.id ? "Edit Post" : "Create Post"}</CardTitle>
          <CardDescription>Fill in the details for your blog post</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="auto-generated-from-title"
              />
              <p className="text-xs text-muted-foreground">
                Leave empty to auto-generate from title
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date *</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="ai, engineering, tutorial"
              />
              <p className="text-xs text-muted-foreground">
                Comma-separated list of tags
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="rounded"
              />
              <Label htmlFor="published" className="cursor-pointer">
                Published (uncheck to save as draft)
              </Label>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit">Save Post</Button>
              <Button type="button" onClick={onCancel} variant="outline">
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
