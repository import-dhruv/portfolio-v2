import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getAllExperience, type ExperienceRole } from "@/data/experience";

function Role({ role }: { role: ExperienceRole }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-l-2 border-border pl-4 transition-colors hover:border-foreground/30">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <span className="text-base font-medium text-foreground">
          {role.company},{" "}
          <span className="text-foreground/80 italic">{role.title}</span>
        </span>
        <span className="text-sm text-muted-foreground">{role.period}</span>
      </div>

      <p className="mt-2 text-base text-foreground/90 leading-relaxed">{role.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {open ? "less" : "more"}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul className="mt-3 space-y-2">
          {role.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-2 text-sm text-foreground/85 leading-relaxed">
              <span aria-hidden className="text-muted-foreground shrink-0">&mdash;</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function ExperienceSection() {
  const roles = getAllExperience();

  return (
    <section id="experience" className="mb-14">
      <h2 className="text-2xl font-bold text-foreground mb-4">experience</h2>
      <ul className="space-y-6">
        {roles.map((role) => (
          <Role key={`${role.company}-${role.title}-${role.period}`} role={role} />
        ))}
      </ul>
    </section>
  );
}
