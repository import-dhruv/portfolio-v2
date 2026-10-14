import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/SiteFooter";
import { getAllProjects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-4xl px-6 pt-32 pb-20 sm:pt-40">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-2">projects</h1>
        <p className="text-muted-foreground">
          things i've built and problems i've solved.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="border-border hover:border-foreground/20 transition-all flex flex-col"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="mb-2">
                      Featured
                    </Badge>
                  )}
                </div>
              </div>
              <CardDescription className="text-base">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {project.link && (
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">no projects yet. check back soon.</p>
        </div>
      )}

      <SiteFooter />
    </main>
  );
}
