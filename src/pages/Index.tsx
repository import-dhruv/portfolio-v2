import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { BackgroundLines } from "@/components/ui/background-lines";

const Index = () => (
  <div className="relative min-h-screen bg-background">
    <div className="pointer-events-none fixed inset-0 z-0">
      <BackgroundLines className="h-full w-full" lineClassName="via-foreground/25">
        <div className="h-full w-full" />
      </BackgroundLines>
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </div>

    <div className="relative z-10">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
    </div>
  </div>
);

export default Index;
