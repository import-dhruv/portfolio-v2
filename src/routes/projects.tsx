import { createFileRoute } from "@tanstack/react-router";
import SiteFooter from "@/components/SiteFooter";
import { getAllProjects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-2xl px-6 pt-28 pb-20 sm:pt-32">
      {/* Back link */}
      <a
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        back
      </a>

      <h1 className="text-2xl font-bold text-foreground mb-4">projects</h1>
      <p className="text-base text-muted-foreground mb-10">
        things i've built and problems i've solved.
      </p>

      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.id} className="border-l-2 border-border pl-4 hover:border-foreground/30 transition-colors">
            <a
              href={project.github || project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-foreground hover:text-foreground/70 transition-colors underline underline-offset-4"
            >
              {project.title.toLowerCase()}
            </a>
            <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed">
              {project.description}
            </p>
            {project.tags.length > 0 && (
              <p className="mt-2 text-xs text-muted-foreground">
                {project.tags.join(" · ")}
              </p>
            )}
          </li>
        ))}
      </ul>

      {projects.length === 0 && (
        <p className="text-sm text-muted-foreground">no projects yet. check back soon.</p>
      )}

      <SiteFooter />
    </main>
  );
}
