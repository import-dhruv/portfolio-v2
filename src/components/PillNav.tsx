import { Link } from "@tanstack/react-router";

const items = [
  { to: "/#about", label: "about me" },
  { to: "/#work", label: "work" },
  { to: "/#writing", label: "writing" },
  { to: "/#contact", label: "contact" },
] as const;

export default function PillNav() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <ul className="flex items-center gap-1 rounded-full border border-border bg-background/80 px-1.5 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)] backdrop-blur">
        {items.map((item) => (
          <li key={item.to}>
            <a
              href={item.to}
              onClick={(e) => handleClick(e, item.to)}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
