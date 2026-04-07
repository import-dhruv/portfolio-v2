import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const projects = [
  {
    title: "MidShield",
    description:
      "Security middleware for LLMs that detects and blocks prompt injection attacks using dual-layer approach: regex pattern matching + LLM-based semantic analysis powered by Groq.",
    tags: ["Python", "FastAPI", "Groq", "Security"],
    github: "https://github.com/import-dhruv/midshield",
    demo: "https://midshield-8.streamlit.app/",
  },
  {
    title: "Musila",
    description:
      "A platform for listening to funk music on the web without any ads or subscription. Built with React and Vite for a seamless music streaming experience.",
    tags: ["React", "Vite", "Music", "Streaming"],
    github: "https://github.com/import-dhruv/Musila",
    demo: "https://musila-wheat.vercel.app/",
  },
  {
    title: "Flux AI",
    description:
      "Your personal AI tool for image generation, background removal, resume review, article writing, and other creative tasks powered by advanced AI models.",
    tags: ["AI", "Image Generation", "React", "Vercel"],
    github: "https://github.com/import-dhruv/flux-ai",
    demo: "https://flux-ai-puce.vercel.app",
  },
  {
    title: "DataGuy",
    description:
      "AI-powered agent that generates realistic sample user data and saves it to JSON files using natural language commands. Powered by Groq's LLaMA 3.1 model via LangChain.",
    tags: ["Python", "LangChain", "Groq", "Data Generation"],
    github: "https://github.com/import-dhruv/DataGuy",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 relative px-4">
      <div className="container max-w-5xl">
        <h2 className="font-mono text-sm text-primary mb-2">// projects</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Featured <span className="text-gradient">Work</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border-[0.5px] border-border bg-transparent p-4 sm:p-6 flex flex-col transition-all duration-300 hover:border-glow"
            >
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="font-mono text-[9px] sm:text-[10px] border-primary/30 text-primary/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <HoverBorderGradient asChild className="px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs text-muted-foreground hover:text-primary">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github size={12} /> Code
                  </a>
                </HoverBorderGradient>
                {project.demo && (
                  <HoverBorderGradient asChild className="px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs text-muted-foreground hover:text-primary">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <ExternalLink size={12} /> Demo
                    </a>
                  </HoverBorderGradient>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
