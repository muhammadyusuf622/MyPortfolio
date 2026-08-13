"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Server,
  Database,
  Cloud,
  Wrench,
  CreditCard,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Palette size={20} />,
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "React Query",
      "React Hook Form",
      "Tailwind CSS",
      "SHADCN/UI",
      "Material UI",
      "Ant Design",
      "Styled-components",
      "Sass",
      "HTML/CSS",
      "Vite",
    ],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "REST API",
      "GraphQL",
      "Socket.io",
      "Microservices",
      "JSON",
      "Python",
      "Deno",
    ],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Prisma",
      "Mongoose",
      "Sequelize",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    icon: <Cloud size={20} />,
    skills: [
      "Docker",
      "AWS",
      "DigitalOcean",
      "Nginx",
      "PM2",
      "CI/CD",
      "Linux",
      "UFW",
      "SSH Key",
      "Heroku",
      "Vercel",
    ],
  },
  {
    title: "Tools",
    icon: <Wrench size={20} />,
    skills: [
      "Git",
      "GitHub",
      "WebRTC",
      "RTSPeerConnection",
      "Telegram",
      "Ngrok",
      "Postman",
      "ESLint",
      "Prettier",
      "Unit Test",
      "E2E Test",
    ],
  },
  {
    title: "Payment Systems",
    icon: <CreditCard size={20} />,
    skills: ["Stripe"],
  },
];

export default function SkillsSection() {
  return (
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14 max-w-2xl"
      >
        <p className="section-kicker">Skills</p>
        <h2 className="section-heading">Technologies I work with</h2>
        <p className="section-subtext mt-4">
          A focused toolkit built around TypeScript across the stack —
          from React on the frontend to Nest.js and PostgreSQL on the
          backend, deployed and run on infrastructure I manage myself.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`surface-card p-6 ${
              skillGroups.length % 3 === 1 &&
              index === skillGroups.length - 1
                ? "lg:col-start-2"
                : ""
            }`}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-primary-600 dark:text-primary-400">
                {group.icon}
              </span>
              <h3 className="text-sm font-semibold text-dark-900 dark:text-white">
                {group.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
