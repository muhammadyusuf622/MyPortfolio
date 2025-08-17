"use client";

import { motion } from "framer-motion";
import { Code, Database, Settings, Palette } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette size={24} />,
      skills: [
        { name: "React", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "Next.js", level: 85, color: "from-gray-500 to-gray-600" },
        {
          name: "React Native",
          level: 20,
          color: "from-orange-500 to-orange-600",
        },
        { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-700" },
        {
          name: "Redux Toolkit",
          level: 90,
          color: "from-blue-500 to-blue-600",
        },
        {
          name: "React Query",
          level: 90,
          color: "from-green-600 to-green-700",
        },
        {
          name: "React Hook Form",
          level: 80,
          color: "from-blue-600 to-blue-700",
        },
        { name: "Material UI", level: 60, color: "from-cyan-500 to-cyan-600" },
        { name: "Ant Design", level: 70, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-cyan-600" },
        {
          name: "Styled-components",
          level: 90,
          color: "from-gray-500 to-gray-600",
        },
        { name: "Sass", level: 89, color: "from-pink-500 to-pink-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-orange-600" },
      ],
    },
    {
      title: "Backend",
      icon: <Database size={24} />,
      skills: [
        // Programming Languages
        { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
        { name: "Python", level: 20, color: "from-yellow-500 to-yellow-600" },
        { name: "Deno", level: 20, color: "from-blue-800 to-blue-800" },

        // Frameworks
        { name: "Nest.js", level: 95, color: "from-purple-600 to-purple-700" },
        { name: "Express.js", level: 80, color: "from-gray-500 to-gray-600" },

        // Libraries / Tools
        { name: "Prisma", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "Mongoose", level: 90, color: "from-green-600 to-green-700" },
        {
          name: "Sequelize",
          level: 85,
          color: "from-indigo-500 to-indigo-600",
        },
        { name: "Socket.io", level: 90, color: "from-pink-500 to-pink-600" },
        { name: "REST API", level: 95, color: "from-red-500 to-red-600" },
        { name: "JSON", level: 95, color: "from-yellow-500 to-yellow-600" },
        {
          name: "Microservices",
          level: 40,
          color: "from-yellow-400 to-yellow-500",
        },
        { name: "GraphQL", level: 40, color: "from-pink-400 to-pink-500" },
        { name: "MySQL", level: 80, color: "from-blue-700 to-blue-800" },
        { name: "PostgreSQL", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "MongoDB", level: 85, color: "from-green-500 to-green-600" },
        { name: "Redis", level: 70, color: "from-red-400 to-red-500" },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Settings size={24} />,
      skills: [
        // Existing
        { name: "Git", level: 90, color: "from-orange-600 to-orange-700" },
        { name: "GitHub", level: 95, color: "from-gray-600 to-gray-700" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-600" },
        { name: "WebRTC", level: 50, color: "from-gray-500 to-gray-600" },
        { name: "AWS", level: 65, color: "from-yellow-500 to-yellow-600" },
        { name: "Linux", level: 80, color: "from-yellow-600 to-yellow-700" },
        {
          name: "RTSPeerConnection",
          level: 80,
          color: "from-purple-500 to-purple-600",
        },
        { name: "DigitalOcean", level: 70, color: "from-blue-400 to-blue-500" },
        { name: "CI/CD", level: 60, color: "from-pink-500 to-pink-600" },
        { name: "Nginx", level: 96, color: "from-green-600 to-green-700" },
        { name: "Ngrok", level: 97, color: "from-indigo-500 to-indigo-600" },
        { name: "Telegram", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "PM2", level: 99, color: "from-red-500 to-red-600" },
        { name: "UFW", level: 99, color: "from-yellow-600 to-yellow-700" },
        { name: "SSH Key", level: 90, color: "from-gray-500 to-gray-600" },
      ],
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
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life. Specializing in React, Node.js, TypeScript, and modern web development technologies for creating robust and scalable applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-primary-600 dark:text-primary-400">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: categoryIndex * 0.2 + skillIndex * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                      {skill.name}
                    </span>
                    <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                      }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
          Also Familiar With
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Redux",
            "GraphQL",
            "Unit Test",
            "E2E Test",
            "Vite",
            "Firebase",
            "Heroku",
            "Vercel",
            "Docker",
            "Git",
            "GitHub",
            "Postman",
            "ESLint",
            "Prettier",
            "TypeScript",
            "TailwindCSS",
          ].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-4 py-2 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
