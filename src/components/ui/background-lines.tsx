"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BackgroundLinesProps {
  children: ReactNode;
  className?: string;
  lineClassName?: string;
}

export function BackgroundLines({
  children,
  className,
  lineClassName,
}: BackgroundLinesProps) {
  const lineOffsets = [6, 14, 24, 38, 52, 66, 78, 88, 95];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0">
        {lineOffsets.map((left, idx) => (
          <motion.div
            key={left}
            className={cn(
              "absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent",
              lineClassName,
            )}
            style={{ left: `${left}%` }}
            initial={{ opacity: 0.1, y: "-8%" }}
            animate={{
              opacity: [0.12, 0.4, 0.12],
              y: ["-8%", "6%", "-8%"],
            }}
            transition={{
              duration: 6 + (idx % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.28,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
