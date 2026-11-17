import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Gradient section heading — adapted from the "Text Gradient" / "Highlight Text"
 * treatments in the 21st.dev Text component collection.
 */
export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "group mb-5 flex items-center gap-3 text-2xl font-bold tracking-tight text-foreground",
        className,
      )}
    >
      <span
        aria-hidden
        className="h-5 w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-400 to-cyan-300 shadow-[0_0_14px_rgba(139,92,246,0.8)]"
      />
      <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/55 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
}
