import InteractiveTerminal from "@/components/InteractiveTerminal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container max-w-5xl">
        <h2 className="font-mono text-sm text-primary mb-2">// about me</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-8">
          Passionate about <span className="text-gradient">intelligent systems</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Interactive terminal */}
          <InteractiveTerminal />

          {/* Terminal help commands */}
          <div className="rounded-lg border-[0.5px] border-border bg-transparent overflow-hidden font-mono text-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b-[0.5px] border-border bg-transparent">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-[#999999]/70" />
              <span className="w-3 h-3 rounded-full bg-[#CCCCCC]/70" />
              <span className="ml-2 text-xs text-muted-foreground">help</span>
            </div>
            <div className="p-5 space-y-3 text-muted-foreground">
              <p>
                <span className="text-primary">$</span>{" "}
                <span className="text-foreground">/skill</span> - for skills
              </p>
              <p>
                <span className="text-primary">$</span>{" "}
                <span className="text-foreground">/projects</span> - for projects
              </p>
              <p>
                <span className="text-primary">$</span>{" "}
                <span className="text-foreground">/contact</span> - for contacting me
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
