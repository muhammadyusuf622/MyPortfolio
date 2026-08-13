"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import myImg from "../../public/myImg.jpg";

const stack = ["TypeScript", "React", "Next.js", "Node.js", "NestJS"];

export default function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Subtle background texture — a single soft, low-opacity glow, not a rainbow wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 -z-10 h-[420px] w-[720px] rounded-full bg-primary-400/10 dark:bg-primary-500/10 blur-3xl"
      />

      <div className="container-custom grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-dark-200 dark:border-dark-700 bg-white/60 dark:bg-dark-800/60 px-3 py-1 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-dark-600 dark:text-dark-400">
              Available for new projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-dark-900 dark:text-white text-balance">
            Muhammad Yusuf
            <span className="block text-gradient">Full Stack Developer</span>
          </h1>

          <p className="mt-6 text-lg text-dark-600 dark:text-dark-400 leading-relaxed max-w-xl">
            I build scalable, modern web applications with{" "}
            <span className="font-medium text-dark-800 dark:text-dark-200">
              TypeScript, React, Next.js, Node.js and NestJS
            </span>
            . Focused on writing clean, maintainable code and shipping
            products that actually work.
          </p>

          <div className="mt-4 flex items-center gap-1.5 text-sm text-dark-500 dark:text-dark-500">
            <MapPin size={14} />
            <span>Tashkent, Uzbekistan</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {stack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={scrollToProjects}
              className="btn-primary focus-ring"
            >
              View Projects
              <ArrowRight size={16} />
            </button>

            <a
              href="/MuhammadYusufResume.pdf"
              download="MuhammadYusufResume.pdf"
              className="btn-secondary focus-ring"
            >
              Download Resume
            </a>

            <div className="flex items-center gap-1 ml-1">
              <a
                href="https://github.com/muhammadyusuf622"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="focus-ring p-2.5 rounded-lg text-dark-500 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-yusuf-nasrulloh-1757a2357/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="focus-ring p-2.5 rounded-lg text-dark-500 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="hidden sm:flex justify-center lg:justify-end"
        >
          <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-dark-200 dark:border-dark-700 shadow-card">
            <Image
              src={myImg}
              alt="Muhammad Yusuf Nasrulloh"
              fill
              sizes="(min-width: 1024px) 288px, 224px"
              className="object-cover"
              style={{ objectPosition: "50% 25%" }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
