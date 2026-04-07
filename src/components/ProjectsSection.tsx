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
    <section id="projects" className="py-24 relative">
      <div className="container max-w-5xl">
        <h2 className="font-mono text-sm text-primary mb-2">// projects</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-12">
          Featured <span className="text-gradient">Work</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border-[0.5px] border-border bg-transparent p-6 flex flex-col transition-all duration-300 hover:border-glow"
            >
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="font-mono text-[10px] border-primary/30 text-primary/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <HoverBorderGradient asChild className="px-3 py-1.5 text-xs text-muted-foreground hover:text-primary">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={14} /> Code
                  </a>
                </HoverBorderGradient>
                {project.demo && (
                  <HoverBorderGradient asChild className="px-3 py-1.5 text-xs text-muted-foreground hover:text-primary">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> Demo
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
