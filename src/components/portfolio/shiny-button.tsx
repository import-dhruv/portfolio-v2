import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * ShinyButton — adapted from "Shiny Button" by Ali Imam on 21st.dev
 * https://21st.dev/@designali-in/components/shiny-button
 */
type ShinyButtonProps = Omit<HTMLMotionProps<"a">, "children"> & { children?: ReactNode };

export const ShinyButton = forwardRef<HTMLAnchorElement, ShinyButtonProps>(
  function ShinyButton({ className, children, ...props }, ref) {
    return (
      <motion.a
        ref={ref}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "social-button group relative inline-flex items-center justify-center overflow-hidden px-5 py-2.5",
          "text-sm font-medium",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
          className,
        )}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </motion.a>
    );
  },
);
