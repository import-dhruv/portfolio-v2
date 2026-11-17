import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import { BlurFade } from "@/components/portfolio/blur-fade";
import { ShineBorder } from "@/components/portfolio/shine-border";
import { getArticlesByCategory } from "@/data/articles";

export const Route = createFileRoute("/writing/computer-science")({
  component: ComputerScience,
});

function ComputerScience() {
  const articles = getArticlesByCategory("computer science");

  return (
    <main className="mx-auto max-w-2xl px-6 pt-28 pb-20 sm:pt-32">
      {/* Back link */}
      <motion.a
        href="/#writing"
        whileHover={{ x: -3 }}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-4 w-4" />
        back
      </motion.a>

      <h1 className="section-title mb-10 text-2xl font-bold text-foreground">
        computer science
      </h1>

      <ul className="space-y-4">
        {articles.map((article, i) => (
          <BlurFade key={article.id} delay={i * 0.08}>
            <li>
              <ShineBorder className="p-5 transition-transform duration-300 hover:-translate-y-0.5">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-foreground hover:text-foreground/70 transition-colors underline underline-offset-4 decoration-violet-400/60 hover:decoration-cyan-300"
                >
                  {article.title}
                </a>
              </ShineBorder>
            </li>
          </BlurFade>
        ))}
      </ul>

      {articles.length === 0 && (
        <p className="text-sm text-muted-foreground">no articles yet. check back soon.</p>
      )}

      <SiteFooter />
    </main>
  );
}
