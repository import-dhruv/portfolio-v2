import { BackgroundLines } from "@/components/ui/background-lines";
import type { ReactNode } from "react";

interface BackgroundLinesDemoProps {
  children: ReactNode;
  className?: string;
}

export default function BackgroundLinesDemo({
  children,
  className,
}: BackgroundLinesDemoProps) {
  return (
    <BackgroundLines className={className} lineClassName="via-foreground/25">
      {children}
    </BackgroundLines>
  );
}
