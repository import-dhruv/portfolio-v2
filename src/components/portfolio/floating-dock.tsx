import { useState } from "react";
import { motion } from "motion/react";
import {
  UserRound,
  BriefcaseBusiness,
  FolderGit2,
  PenLine,
  Mail,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Floating Dock — adapted from "Floating Dock" by Manu Arora (Aceternity UI)
 * and the dock/magnification pattern on 21st.dev.
 * https://21st.dev/@manuarora700/components/floating-dock
 */
export type DockItem = { to: string; label: string };

const icons: LucideIcon[] = [UserRound, BriefcaseBusiness, FolderGit2, PenLine, Mail];

export default function FloatingDock({
  items,
  isVisible,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
  onItemClick,
}: {
  items: readonly DockItem[];
  isVisible: boolean;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {/* Desktop Dock */}
      <nav
        className={cn(
          "hidden md:block fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-300",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0",
        )}
      >
        <div
          onMouseLeave={() => setHovered(null)}
          className="dock-shell flex items-center gap-1 rounded-full border border-foreground/10 bg-background/70 p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_10px_40px_-12px_rgba(139,92,246,0.35)] backdrop-blur-xl"
        >
          {items.map((item, i) => {
            const Icon = icons[i] ?? Mail;
            return (
              <a
                key={item.to}
                href={item.to}
                onClick={(e) => onItemClick(e, item.to)}
                onMouseEnter={() => setHovered(i)}
                className="relative flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {hovered === i && (
                  <motion.span
                    layoutId="dock-highlight"
                    className="absolute inset-0 -z-10 rounded-full bg-foreground/[0.07] ring-1 ring-foreground/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <motion.span
                  className="inline-flex shrink-0 items-center justify-center"
                  animate={{ width: hovered === i ? 20 : 16, rotate: hovered === i ? -6 : 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </motion.span>
                <span className="whitespace-nowrap">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <motion.button
          onClick={onToggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-background/70 shadow-lg backdrop-blur-xl transition-all duration-300",
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0",
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </motion.button>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl"
            onClick={onCloseMobileMenu}
          >
            <nav className="flex min-h-screen items-center justify-center">
              <ul className="flex flex-col items-center gap-4">
                {items.map((item, i) => {
                  const Icon = icons[i] ?? Mail;
                  return (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={item.to}
                        onClick={(e) => onItemClick(e, item.to)}
                        className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-card/50 px-6 py-3 text-2xl text-foreground backdrop-blur-md transition-colors hover:bg-card"
                      >
                        <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.8} />
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
    </>
  );
}
