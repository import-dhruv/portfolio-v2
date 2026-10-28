import { createFileRoute, Link } from "@tanstack/react-router";
import Polaroid from "@/components/Polaroid";
import ExperienceSection from "@/components/ExperienceSection";
import { Button } from "@/components/ui/button";
import { FileText, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { getAllProjects } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: Home,
});

const writings = [
  { label: "competitive programming", href: "#" },
  { label: "ai", href: "#" },
];

function Home() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
      {/* About Me Section */}
      <section id="about" className="mb-16 sm:mb-20">
        <div className="mb-8 sm:mb-10">
          <Polaroid />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">about me</h2>
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/90">
          <p>
            i'm dhruv patel, an ai engineer. i'm interested, broadly, in computer science,
            mathematics, and the intersection of these fields. recently, i've been working on
            intelligent systems and the evaluation of coding agents.
          </p>
          <p>
            i most recently worked at ADOFLABS — first as a software engineer on a full-stack
            employee intelligence platform, then as an applied researcher on real-time evaluation
            for ai voice agents.
          </p>
          <p>
            currently i'm looking for new work in ai and ml engineering. if that sounds like a fit,
            i'd love to hear from you.
          </p>
        </div>

        <div className="mt-4 sm:mt-6">
          <Button asChild variant="default" className="gap-2 w-full sm:w-auto">
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
      <section id="work" className="mb-16 sm:mb-20">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">work</h2>
        <ul className="space-y-2 sm:space-y-3 list-disc list-inside">
          <li className="text-foreground text-sm sm:text-base">projects</li>
          <li className="text-foreground text-sm sm:text-base">open source</li>
          <li className="text-foreground text-sm sm:text-base">paper implementation</li>
        </ul>
      </section>

      {/* Writing Section */}
      <section id="writing" className="mb-16 sm:mb-20">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">writing</h2>
        <ul className="space-y-2 sm:space-y-3 list-disc list-inside">
          {writings.map((writing) => (
            <li key={writing.label}>
              <a
                href={writing.href}
                className="text-foreground hover:text-foreground/70 transition-colors text-sm sm:text-base"
              >
                {writing.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">contact me</h2>
        <div className="space-y-3 sm:space-y-4 text-foreground/90 text-sm sm:text-base">
          <p className="break-words">
            you can reach me at{" "}
            <code className="px-2 py-1 bg-muted rounded text-xs sm:text-sm">x@gmail.com</code>{" "}
            <span className="block sm:inline mt-1 sm:mt-0">
              where{" "}
              <code className="px-2 py-1 bg-muted rounded text-xs sm:text-sm">
                x = dhruvvcodess
              </code>
            </span>
          </p>

          <div className="flex gap-4 pt-2 sm:pt-4">
            <a
              href="mailto:dhruvvcodess@gmail.com"
              className="text-foreground hover:text-foreground/70 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://x.com/importdhruv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/70 transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://github.com/import-dhruv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/70 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-patel-2562bb369/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/70 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
