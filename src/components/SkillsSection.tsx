const categories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "TypeScript / JavaScript"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "RESTful APIs", "JSON"],
  },
  {
    title: "AI / ML",
    skills: ["LangChain", "OpenAI API", "Groq", "LLaMA", "Streamlit", "NLP"],
  },
  {
    title: "Database",
    skills: ["SQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Deployment & DevOps",
    skills: ["Vercel", "Git", "Render", "Railway"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container max-w-5xl relative z-10">
        <h2 className="font-mono text-sm text-primary mb-2">// skills</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-12">
          Tech <span className="text-gradient">Stack</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-lg border-[0.5px] border-border bg-transparent p-6 transition-all duration-300 hover:border-glow group"
            >
              <h4 className="font-mono text-sm text-primary mb-4">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border-[0.5px] border-border bg-transparent px-3 py-1.5 text-xs font-mono text-foreground transition-colors group-hover:border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
