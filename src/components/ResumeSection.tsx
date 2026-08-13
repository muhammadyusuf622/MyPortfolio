"use client";

import { motion } from "framer-motion";
import { Download, FileText, Calendar, MapPin, Building2 } from "lucide-react";

const experience = [
  {
    title: "Full-Stack Developer",
    company: "Independent / Personal Projects",
    location: "Tashkent",
    period: "2024 — Present",
    description:
      "Designed and built full-stack web and mobile applications end to end — from data modeling and API design to frontend implementation and deployment.",
  },
];

const education = [
  {
    degree: "Full-Stack Web Development",
    school: "Najot Ta'lim",
    location: "Tashkent, Chilonzor",
    period: "2024 — 2025",
  },
];

export default function ResumeSection() {
  return (
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14 max-w-2xl"
      >
        <p className="section-kicker">Resume</p>
        <h2 className="section-heading">Experience & education</h2>
      </motion.div>

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="surface-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center shrink-0">
                <FileText className="text-primary-600 dark:text-primary-400" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-dark-900 dark:text-white">
                  Muhammad Yusuf's Resume
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-400">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="text-center p-3 bg-dark-50 dark:bg-dark-700/50 rounded-lg">
                <p className="text-xl font-bold text-dark-900 dark:text-white">1+</p>
                <p className="text-xs text-dark-600 dark:text-dark-400">
                  Years experience
                </p>
              </div>
              <div className="text-center p-3 bg-dark-50 dark:bg-dark-700/50 rounded-lg">
                <p className="text-xl font-bold text-dark-900 dark:text-white">12</p>
                <p className="text-xs text-dark-600 dark:text-dark-400">
                  Projects shipped
                </p>
              </div>
            </div>

            <a
              href="/MuhammadYusufResume.pdf"
              download="MuhammadYusufResume.pdf"
              className="btn-primary focus-ring w-full"
            >
              <Download size={18} />
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>

        {/* Experience & Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-dark-500 dark:text-dark-500 mb-5">
              <Building2 size={16} />
              Experience
            </h3>

            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.title}
                  className="pl-4 border-l-2 border-primary-500"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-semibold text-dark-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="text-sm text-dark-500 dark:text-dark-500">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-dark-600 dark:text-dark-400 mt-0.5">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed mt-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-dark-500 dark:text-dark-500 mb-5">
              <Calendar size={16} />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="pl-4 border-l-2 border-dark-300 dark:border-dark-600"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-semibold text-dark-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-dark-500 dark:text-dark-500">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-dark-600 dark:text-dark-400 mt-0.5 flex items-center gap-1.5">
                    <MapPin size={14} />
                    {edu.school}, {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
