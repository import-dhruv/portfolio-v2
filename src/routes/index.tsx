import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import Polaroid from "@/components/Polaroid";
import ExperienceSection from "@/components/ExperienceSection";
import { ShinyButton } from "@/components/portfolio/shiny-button";
import { BlurFade } from "@/components/portfolio/blur-fade";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { ShineBorder } from "@/components/portfolio/shine-border";
import { FileText, Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const workItems = [
  {
    label: "projects",
    href: "/projects",
  },
  { label: "open source", href: "#" },
  { label: "paper implementation", href: "#" },
];

const writings = [
  { label: "computer science", href: "/writing/computer-science" },
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

        <BlurFade>
          <SectionHeading>about me</SectionHeading>
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
            <ShinyButton href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              download resume
            </ShinyButton>
          </div>
        </BlurFade>
      </section>

      <ExperienceSection />

      {/* Work Section */}
      <section id="work" className="mb-14">
        <BlurFade>
          <SectionHeading>work</SectionHeading>
        </BlurFade>
        <ul className="space-y-3">
          {workItems.map((item, i) => (
            <BlurFade key={item.label} delay={i * 0.06}>
              <li>
                <ShineBorder className="transition-transform duration-300 hover:-translate-y-0.5">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={
                      "flex items-center gap-3 px-4 py-3 text-base text-foreground" +
                      (item.href !== "#"
                        ? " hover:text-foreground/70 transition-colors"
                        : "")
                    }
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300"
                    />
                    {item.label}
                  </a>
                </ShineBorder>
              </li>
            </BlurFade>
          ))}
        </ul>
      </section>

      {/* Writing Section */}
      <section id="writing" className="mb-14">
        <BlurFade>
          <SectionHeading>writing</SectionHeading>
        </BlurFade>
        <ul className="space-y-3">
          {writings.map((writing, i) => (
            <BlurFade key={writing.label} delay={i * 0.06}>
              <li>
                <ShineBorder className="transition-transform duration-300 hover:-translate-y-0.5">
                  <a
                    href={writing.href}
                    target={writing.href.startsWith("http") ? "_blank" : undefined}
                    rel={writing.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 px-4 py-3 text-base text-foreground hover:text-foreground/70 transition-colors"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300"
                    />
                    {writing.label}
                  </a>
                </ShineBorder>
              </li>
            </BlurFade>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-4">
        <BlurFade>
          <SectionHeading>contact me</SectionHeading>
          <ShineBorder className="p-5">
            <div className="space-y-4 text-foreground/90">
              <p className="text-base leading-relaxed">
                you can reach me at{" "}
                <code className="px-1.5 py-0.5 bg-muted rounded text-sm">x@gmail.com</code>{" "}
                where{" "}
                <code className="px-1.5 py-0.5 bg-muted rounded text-sm">x = dhruvvcodess</code>
              </p>

              <div className="flex gap-5 pt-1">
                <motion.a
                  href="mailto:dhruvvcodess@gmail.com"
                  whileHover={{ y: -3, scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  className="social-icon text-foreground hover:text-foreground/60 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://x.com/importdhruv"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  className="social-icon text-foreground hover:text-foreground/60 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/import-dhruv"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  className="social-icon text-foreground hover:text-foreground/60 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/dhruv-patel-2562bb369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  className="social-icon text-foreground hover:text-foreground/60 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </ShineBorder>
        </BlurFade>
      </section>

    </main>
  );
}
