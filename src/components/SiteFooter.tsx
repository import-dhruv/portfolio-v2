import { Github, Linkedin, Twitter } from "lucide-react";

export default function SiteFooter() {
  return (
    <div className="mt-16 space-y-4">
      <div>
        <p className="text-base text-foreground">Let's work together!</p>
        <a
          href="mailto:dhruvvcodess@gmail.com"
          className="text-base text-foreground underline underline-offset-4 hover:opacity-70"
        >
          dhruvvcodess@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-4 text-muted-foreground">
        <a
          href="https://x.com/importdhruv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-foreground transition-colors"
        >
          <Twitter size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/dhruv-patel-2562bb369/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-foreground transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://github.com/import-dhruv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-foreground transition-colors"
        >
          <Github size={18} />
        </a>
      </div>
    </div>
  );
}
