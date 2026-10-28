import { createFileRoute } from "@tanstack/react-router";
import Polaroid from "@/components/Polaroid";
import ExperienceSection from "@/components/ExperienceSection";
import { Button } from "@/components/ui/button";
import { FileText, Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const workItems = [
  {
    label: "projects",
    href: "https://github.com/import-dhruv/dynamion",
  },
  { label: "open source", href: "#" },
  { label: "paper implementation", href: "#" },
];

const writings = [
  { label: "competitive programming", href: "#" },
  { label: "ai", href: "#" },
];

function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-28 pb-20 sm:pt-32">

      {/* About Me Section */}
      <section id="about" className="mb-14">
        <div className="mb-10">
          <Polaroid />
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">about me</h2>
        <div className="space-y-3 text-base text-foreground/90 leading-relaxed">
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

        <div className="mt-6">
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
      <section id="work" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-4">work</h2>
        <ul className="space-y-2 list-disc list-inside">
          {workItems.map((item) => (
            <li key={item.label} className="text-base text-foreground">
              <a
                href={item.href}
                target={item.href !== "#" ? "_blank" : undefined}
                rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                className={
                  item.href !== "#"
                    ? "hover:text-foreground/70 transition-colors underline underline-offset-4"
                    : ""
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Writing Section */}
      <section id="writing" className="mb-14">
        <h2 className="text-2xl font-bold text-foreground mb-4">writing</h2>
        <ul className="space-y-2 list-disc list-inside">
          {writings.map((writing) => (
            <li key={writing.label} className="text-base text-foreground">
              <a
                href={writing.href}
                className="hover:text-foreground/70 transition-colors"
              >
                {writing.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-4">
        <h2 className="text-2xl font-bold text-foreground mb-4">contact me</h2>
        <div className="space-y-4 text-foreground/90">
          <p className="text-base leading-relaxed">
            you can reach me at{" "}
            <code className="px-1.5 py-0.5 bg-muted rounded text-sm">x@gmail.com</code>{" "}
            where{" "}
            <code className="px-1.5 py-0.5 bg-muted rounded text-sm">x = dhruvvcodess</code>
          </p>

          <div className="flex gap-5 pt-1">
            <a
              href="mailto:dhruvvcodess@gmail.com"
              className="text-foreground hover:text-foreground/60 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/importdhruv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/60 transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/import-dhruv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/60 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-patel-2562bb369/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/60 transition-colors"
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
