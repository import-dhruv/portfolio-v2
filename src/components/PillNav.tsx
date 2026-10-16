import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { to: "/#about", label: "about me" },
  { to: "/#experience", label: "experience" },
  { to: "/#work", label: "work" },
  { to: "/#writing", label: "writing" },
  { to: "/#contact", label: "contact" },
] as const;

export default function PillNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when scrolling down
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMobileMenuOpen(false); // Close mobile menu after navigation
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <ul className="flex items-center gap-1 rounded-full border border-border bg-background/80 px-1.5 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)] backdrop-blur">
          {items.map((item) => (
            <li key={item.to}>
              <a
                href={item.to}
                onClick={(e) => handleClick(e, item.to)}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`fixed right-4 top-4 z-50 p-2 rounded-full border border-border bg-background/80 backdrop-blur shadow-lg transition-all duration-300 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <nav className="flex items-center justify-center min-h-screen">
              <ul className="flex flex-col items-center gap-6">
                {items.map((item) => (
                  <li key={item.to}>
                    <a
                      href={item.to}
                      onClick={(e) => handleClick(e, item.to)}
                      className="text-2xl text-foreground hover:text-foreground/70 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
