import { useState } from "react";

const COMMANDS: Record<string, string> = {
  "/skill": "skills",
  "/projects": "projects",
  "/contact": "contact",
};

const InteractiveTerminal = () => {
  const [command, setCommand] = useState("");
  const [lines, setLines] = useState<string[]>([
    "Type /skill, /projects, or /contact and press Enter.",
  ]);

  const runCommand = (raw: string) => {
    const value = raw.trim().toLowerCase();
    if (!value) return;

    const targetId = COMMANDS[value];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setLines((prev) => [...prev, `$ ${value}`, `Opened #${targetId}`]);
        return;
      }
      setLines((prev) => [...prev, `$ ${value}`, `Section #${targetId} not found.`]);
      return;
    }

    setLines((prev) => [
      ...prev,
      `$ ${value}`,
      "Unknown command. Try /skill, /projects, or /contact.",
    ]);
  };

  return (
    <div className="mx-auto w-full max-w-xl px-4 font-mono text-xs">
      <div className="overflow-hidden rounded-lg border-[0.5px] border-neutral-800 bg-neutral-900 shadow-2xl">
        <div className="flex items-center gap-2 border-b-[0.5px] border-neutral-800 bg-neutral-800 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center">
            <span className="truncate text-xs text-neutral-400">Dhruv-Macbook - bash</span>
          </div>
          <div className="w-[52px]" />
        </div>

        <div className="h-80 overflow-y-auto p-4 text-xs leading-relaxed">
          {lines.map((line, idx) => (
            <div key={idx} className="leading-relaxed whitespace-pre-wrap text-neutral-300">
              {line}
            </div>
          ))}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              runCommand(command);
              setCommand("");
            }}
            className="mt-2 flex items-center gap-2 leading-relaxed"
          >
            <span className="shrink-0 whitespace-nowrap text-neutral-500">
              <span className="text-sky-500">Dhruv-Macbook</span>
              <span className="text-emerald-600">:</span>
              <span className="text-sky-400">~</span>
              <span className="text-neutral-500">$</span>
            </span>
            <input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder=""
              className="min-w-0 flex-1 bg-transparent text-neutral-100 outline-none placeholder:text-neutral-500"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
