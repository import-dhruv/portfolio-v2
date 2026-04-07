import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative px-4">
      <div className="container max-w-3xl relative z-10">
        <h2 className="font-mono text-sm text-primary mb-2">// contact</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-lg">
          Have a project in mind or want to collaborate? Feel free to reach out through my social channels.
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
          <span className="text-xs sm:text-sm text-muted-foreground w-full sm:w-auto">Find me on</span>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="mailto:dhruvvcodess@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/import-dhruv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dhruv-patel-2562bb369/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/importdhruv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
