import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center section-padding"
      >
        <HeroSection />
      </section>

      <section id="about" className="section-padding">
        <AboutSection />
      </section>

      <section
        id="skills"
        className="section-padding bg-dark-50/60 dark:bg-dark-800/40"
      >
        <SkillsSection />
      </section>

      <section id="projects" className="section-padding">
        <ProjectsSection />
      </section>

      <section
        id="resume"
        className="section-padding bg-dark-50/60 dark:bg-dark-800/40"
      >
        <ResumeSection />
      </section>

      <section id="contact" className="section-padding">
        <ContactSection />
      </section>
    </>
  );
}
