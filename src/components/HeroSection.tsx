import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const roles = [
  "Building intelligent systems",
  "Machine Learning • NLP",
  "Turning data into decisions",
  "LLMs • RAG • Autonomous Agents",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.slice(0, displayText.length + 1));
          if (displayText.length === role.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(role.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 30 : 60,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center text-center gap-6 pt-16">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-tight">
          <span style={{ fontSize: '0.5em' }}>Hi, I'm </span>
          <span className="text-gradient" style={{ 
            fontFamily: "'Jersey 10', sans-serif", 
            fontWeight: 400,
            fontStyle: 'normal'
          }}>Dhruv Patel</span>
          <br />
          <span className="text-foreground">AI Engineer</span>
        </h1>

        <div className="h-8 flex items-center">
          <span className="text-lg sm:text-xl text-muted-foreground">
            {displayText}
          </span>
          <span className="ml-0.5 inline-block w-0.5 h-6 bg-primary animate-blink" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <HoverBorderGradient asChild className="px-8 py-3 text-base font-medium tracking-wide">
            <a href="#projects">View Projects</a>
          </HoverBorderGradient>
          <HoverBorderGradient asChild className="px-8 py-3 text-base font-medium tracking-wide">
            <a href="mailto:dhruvvcodess@gmail.com">Contact Me</a>
          </HoverBorderGradient>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <a href="https://github.com/import-dhruv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/dhruv-patel-2562bb369/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        <a href="#about" className="mt-12 text-muted-foreground hover:text-primary transition-colors animate-float">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
