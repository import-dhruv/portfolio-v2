import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const passedHero = currentY > 80;

      if (open) {
        setIsHidden(false);
      } else if (scrollingDown && passedHero) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveTab(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.3, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-transparent bg-transparent transition-transform duration-300 ease-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-bold text-primary">
          &lt;AI.Dev /&gt;
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center bg-transparent p-0">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeTab === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-none px-6 py-2 text-sm font-medium transition-colors",
                    "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:scale-x-0 after:transition-transform",
                    isActive
                      ? "text-primary after:scale-x-100 after:bg-primary"
                      : "text-muted-foreground hover:text-foreground hover:after:scale-x-100 hover:after:bg-primary/70",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <HoverBorderGradient asChild className="px-4 py-1.5 text-sm font-medium tracking-wide">
            <a href="mailto:dhruvvcodess@gmail.com">Get in Touch</a>
          </HoverBorderGradient>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t-[0.5px] border-border bg-background/95 backdrop-blur-xl">
          <div className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <HoverBorderGradient asChild className="w-fit px-4 py-1.5 text-sm font-medium tracking-wide">
              <a href="mailto:dhruvvcodess@gmail.com" onClick={() => setOpen(false)}>Get in Touch</a>
            </HoverBorderGradient>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
