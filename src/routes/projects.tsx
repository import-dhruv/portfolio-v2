import { createFileRoute } from "@tanstack/react-router";
import SiteFooter from "@/components/SiteFooter";
import { getAllProjects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { BlurFade } from "@/components/portfolio/blur-fade";
import { ShineBorder } from "@/components/portfolio/shine-border";
import { motion } from "motion/react";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-2xl px-6 pt-28 pb-20 sm:pt-32">
      {/* Back link */}
      <motion.a
        href="/#work"
        whileHover={{ x: -3 }}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        back
      </motion.a>

      <h1 className="section-title mb-4 text-2xl font-bold text-foreground">projects</h1>
      <p className="text-base text-muted-foreground mb-10">
        things i've built and problems i've solved.
      </p>

      <ul className="space-y-4">
        {projects.map((project, i) => (
          <BlurFade key={project.id} delay={i * 0.08}>
            <li>
              <ShineBorder className="p-5 transition-transform duration-300 hover:-translate-y-0.5">
                <a
                  href={project.github || project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-foreground hover:text-foreground/70 transition-colors underline underline-offset-4 decoration-violet-400/60 hover:decoration-cyan-300"
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
              </ShineBorder>
            </li>
          </BlurFade>
        ))}
      </ul>

      {projects.length === 0 && (
        <p className="text-sm text-muted-foreground">no projects yet. check back soon.</p>
      )}

      <SiteFooter />
    </main>
  );
}
