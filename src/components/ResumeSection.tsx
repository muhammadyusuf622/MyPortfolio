"use client";

import { motion } from "framer-motion";
import { Download, FileText, Calendar, MapPin, Building } from "lucide-react";

export default function ResumeSection() {
  const experience = [
    {
      title: "Personal Projects",
      company: "Startup",
      location: "Toshkent",
      period: "2024 - 2025",
      description: "developed frontend and backend projects",
    },
  ];

  const education = [
    {
      degree: "Najot Ta'lim",
      school: "Najot Ta'lim",
      location: "Toshkent, Chilonzor",
      period: "2020 - 2024",
      gpa: "5/5",
    },
  ];

  return (
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
          My <span className="text-gradient">Resume</span>
        </h2>
        <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          Download my resume to learn more about my experience and
          qualifications
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
            Resume Preview
          </h3>

          {/* Resume Card */}
          <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg border border-dark-200 dark:border-dark-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <FileText
                  className="text-primary-600 dark:text-primary-400"
                  size={24}
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white">
                  Muhammad Yusuf's Resume
                </h4>
                <p className="text-sm text-dark-600 dark:text-dark-400">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-dark-50 dark:bg-dark-700 rounded-lg">
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  1+
                </p>
                <p className="text-xs text-dark-600 dark:text-dark-400">
                  Years Experience
                </p>
              </div>
              <div className="text-center p-3 bg-dark-50 dark:bg-dark-700 rounded-lg">
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  20+
                </p>
                <p className="text-xs text-dark-600 dark:text-dark-400">
                  Projects Completed
                </p>
              </div>
            </div>

            {/* Download Button */}
            <motion.a
              href="/MuhammadYusufResume.pdf"
              download="MuhammadYusufResume.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={20} />
              Download Resume (PDF)
            </motion.a>
          </div>
        </motion.div>

        {/* Experience & Education */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6 flex items-center gap-2">
              <Building
                size={24}
                className="text-primary-600 dark:text-primary-400"
              />
              Work Experience
            </h3>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-md border-l-4 border-primary-500"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-dark-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 text-sm text-dark-600 dark:text-dark-400">
                    <Building size={16} />
                    <span>{exp.company}</span>
                    <span>•</span>
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-dark-600 dark:text-dark-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6 flex items-center gap-2">
              <Calendar
                size={24}
                className="text-primary-600 dark:text-primary-400"
              />
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-md border-l-4 border-purple-500"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-dark-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 text-sm text-dark-600 dark:text-dark-400">
                    <Building size={16} />
                    <span>{edu.school}</span>
                    <span>•</span>
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    GPA:{" "}
                    <span className="font-medium text-purple-600 dark:text-purple-400">
                      {edu.gpa}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-lg text-dark-600 dark:text-dark-400 mb-6">
          Interested in working together? Let's discuss your project!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-primary"
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </div>
  );
}
