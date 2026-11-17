import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { getAllExperience, type ExperienceRole } from "@/data/experience";
import { BlurFade } from "@/components/portfolio/blur-fade";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { ShineBorder } from "@/components/portfolio/shine-border";

/**
 * Experience timeline — adapted from "Experience Timeline" (timeline-01)
 * by shadcnui-blocks on 21st.dev.
 * https://21st.dev/@shadcnui-blocks/components/timeline-01
 */
function Role({ role }: { role: ExperienceRole }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="relative pl-8">
      <span aria-hidden className="timeline-dot absolute left-0 top-3" />
      <ShineBorder className="p-4 sm:p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <span className="text-base font-medium text-foreground">
            {role.company},{" "}
            <span className="text-foreground/80 italic">{role.title}</span>
          </span>
          <span className="rounded-full border border-foreground/10 bg-foreground/[0.04] px-2.5 py-0.5 text-xs text-muted-foreground">
            {role.period}
          </span>
        </div>

        <p className="mt-2 text-base text-foreground/90 leading-relaxed">{role.summary}</p>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="mt-3 inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {open ? "less" : "more"}
          <motion.span animate={{ rotate: open ? 180 : 0 }} className="inline-flex">
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>

        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-3 space-y-2 overflow-hidden"
          >
            {role.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground/85 leading-relaxed">
                <span aria-hidden className="text-muted-foreground shrink-0">&mdash;</span>
                <span>{highlight}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </ShineBorder>
    </li>
  );
}

export default function ExperienceSection() {
  const roles = getAllExperience();

  return (
    <section id="experience" className="mb-14">
      <SectionHeading>experience</SectionHeading>
      <ul className="timeline-rail relative ml-1 space-y-6">
        {roles.map((role, i) => (
          <BlurFade key={`${role.company}-${role.title}-${role.period}`} delay={i * 0.08}>
            <Role role={role} />
          </BlurFade>
        ))}
      </ul>
    </section>
  );
}
