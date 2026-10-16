import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Polaroid from "@/components/Polaroid";
import ExperienceSection from "@/components/ExperienceSection";
import { Button } from "@/components/ui/button";
import { FileText, Mail, Github, Linkedin } from "lucide-react";
import { getAllProjects } from "@/data/projects";
import { getBlogPosts, initializeBlogPosts } from "@/lib/blogStorage";
import { blogPosts as defaultPosts, type BlogPost } from "@/data/blogPosts";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const projects = getAllProjects();
  const [writings, setWritings] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Initialize with default posts if none exist
    initializeBlogPosts(defaultPosts);

    // Load posts from storage
    const posts = getBlogPosts()
      .filter((post) => post.published !== false)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5); // Show only 5 most recent

    setWritings(posts);
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      {/* About Me Section */}
      <section id="about" className="mb-20">
        <div className="mb-10">
          <Polaroid />
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-6">about me</h2>
        <div className="space-y-4 text-base text-foreground/90">
          <p>
            i'm dhruv patel, an ai engineer. i'm interested, broadly, in computer science,
            mathematics, and the intersection of these fields. recently, i've been working on
            intelligent systems and the evaluation of coding agents.
          </p>
          <p>
            i most recently worked at ADOFLABS — first as a software engineer on a full-stack
            employee intelligence platform, then as an applied researcher on real-time evaluation
            for ai voice agents. before that i worked on data pipelines and ml infrastructure. i
            also run a technical blog where i write about systems, engineering, and ai.
          </p>
          <p>
            currently i'm looking for new work in ai and ml engineering. if that sounds like a fit,
            i'd love to hear from you.
          </p>
        </div>

        <div className="mt-6">
          <Button asChild variant="default" className="gap-2">
            <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              download resume
            </a>
          </Button>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Work Section */}
      <section id="work" className="mb-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">work</h2>
        <ul className="space-y-3">
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href={project.link || project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/70 transition-colors"
              >
                {project.title.toLowerCase()}
              </a>
              {project.description && (
                <span className="text-muted-foreground ml-2 text-sm">
                  ({project.description.toLowerCase().slice(0, 60)}...)
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Writing Section */}
      <section id="writing" className="mb-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">writing</h2>
        <ul className="space-y-3">
          {writings.map((writing) => (
            <li key={writing.id}>
              <a
                href={`/blog#post-${writing.slug}`}
                className="text-foreground hover:text-foreground/70 transition-colors"
              >
                {writing.title.toLowerCase()}
              </a>
            </li>
          ))}
          {writings.length === 0 && (
            <li className="text-muted-foreground text-sm">no posts yet. check back soon.</li>
          )}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-2xl font-bold text-foreground mb-6">contact me</h2>
        <div className="space-y-4 text-foreground/90">
          <p>
            you can reach me at{" "}
            <code className="px-2 py-1 bg-muted rounded text-sm">x@gmail.com</code> where{" "}
            <code className="px-2 py-1 bg-muted rounded text-sm">x = dhruvvcodess</code>
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="mailto:dhruvvcodess@gmail.com"
              className="text-foreground hover:text-foreground/70 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/import-dhruv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/70 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/70 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
