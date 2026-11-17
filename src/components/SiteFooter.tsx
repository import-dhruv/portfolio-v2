import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="footer-divider mt-16 pt-8 space-y-3">
      <div>
        <p className="text-sm text-muted-foreground">let's work together</p>
        <a
          href="mailto:dhruvvcodess@gmail.com"
          className="text-base text-foreground underline underline-offset-4 decoration-violet-400/60 hover:opacity-70 transition-opacity"
        >
          dhruvvcodess@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-4 text-muted-foreground">
        <motion.a
          href="https://x.com/importdhruv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          whileHover={{ y: -3, scale: 1.12 }}
          whileTap={{ scale: 0.94 }}
          className="social-icon hover:text-foreground transition-colors"
        >
          <Twitter size={17} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/dhruv-patel-2562bb369/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={{ y: -3, scale: 1.12 }}
          whileTap={{ scale: 0.94 }}
          className="social-icon hover:text-foreground transition-colors"
        >
          <Linkedin size={17} />
        </motion.a>
        <motion.a
          href="https://github.com/import-dhruv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={{ y: -3, scale: 1.12 }}
          whileTap={{ scale: 0.94 }}
          className="social-icon hover:text-foreground transition-colors"
        >
          <Github size={17} />
        </motion.a>
      </div>
    </footer>
  );
}
