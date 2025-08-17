"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="bg-gradient">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center section-padding"
      >
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <AboutSection />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="section-padding bg-dark-50 dark:bg-dark-800"
      >
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <ProjectsSection />
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="section-padding bg-dark-50 dark:bg-dark-800"
      >
        <ResumeSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <ContactSection />
      </section>
    </div>
  );
}
