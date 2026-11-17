import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * ShineBorder — adapted from "Shine Border" by Dillion Verma on 21st.dev
 * https://21st.dev/@dillionverma/components/shine-border
 */
export function ShineBorder({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "shine-border relative rounded-2xl border border-foreground/10 bg-card/50 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
