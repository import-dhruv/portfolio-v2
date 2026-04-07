"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type HoverBorderGradientProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  containerClassName?: string;
};

export function HoverBorderGradient({
  asChild = false,
  className,
  containerClassName,
  children,
  disabled,
  ...props
}: HoverBorderGradientProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <div
      className={cn(
        "group relative inline-flex rounded-lg p-[0.5px]",
        "bg-[linear-gradient(110deg,rgba(255,255,255,0.35),rgba(255,255,255,0.08),rgba(255,255,255,0.35))]",
        "transition-all duration-300",
        !disabled && "hover:shadow-[0_0_6px_rgba(255,255,255,0.15)]",
        disabled && "opacity-60",
        containerClassName,
      )}
    >
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-[calc(0.5rem-1px)]",
          "bg-black px-5 py-2.5 font-medium text-[#CCCCCC]",
          "transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#999999] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          className,
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </Comp>
    </div>
  );
}
