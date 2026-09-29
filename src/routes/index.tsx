import { createFileRoute } from "@tanstack/react-router";
import Polaroid from "@/components/Polaroid";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Home,
});

const lines = [
  "i build intelligent systems.",
  "i work on models that think.",
  "i help data become decisions.",
  "i believe good engineering removes noise.",
  "i think there are too many tools.",
];

function Home() {
  return (
    <main className="mx-auto max-w-xl px-6 pt-32 pb-20 sm:pt-40">
      <div className="mb-10">
        <Polaroid />
      </div>

      <div className="space-y-5 text-base text-foreground">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p>
          i think there should be fewer.
          <sup className="text-muted-foreground">*</sup>
        </p>
        <p className="pt-1 text-xs text-muted-foreground">*better ones.</p>
      </div>

      <SiteFooter />
    </main>
  );
}
