"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const facts = [
  { icon: <MapPin size={16} />, label: "Tashkent, Uzbekistan" },
  { icon: <Briefcase size={16} />, label: "1+ year in web development" },
  { icon: <GraduationCap size={16} />, label: "Najot Ta'lim, 2024–2025" },
];

export default function AboutSection() {
  return (
    <div className="container-custom">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-kicker">About</p>
          <h2 className="section-heading">Who I am</h2>

          <ul className="mt-6 space-y-3">
            {facts.map((fact) => (
              <li
                key={fact.label}
                className="flex items-center gap-2.5 text-sm text-dark-600 dark:text-dark-400"
              >
                <span className="text-primary-600 dark:text-primary-400">
                  {fact.icon}
                </span>
                {fact.label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-5 text-dark-600 dark:text-dark-400 leading-relaxed"
        >
          <p>
            I have been interested in programming for a long time. I
            traveled to Turkey and Russia to save money for my studies, and
            what I earned there became the foundation that allowed me to
            fully dedicate myself to programming for a year. I truly enjoy
            programming — it feels like discovering a new world, and
            learning new things excites my mind in a way nothing else does.
          </p>
          <p>
            I have a passion for sports and a strong interest in exploring
            new developments in programming. I&apos;ve been involved in
            sports since childhood, and I believe it&apos;s essential for
            personal growth and staying disciplined.
          </p>
          <p>
            Today I specialize in building full-stack products with React,
            Next.js, Node.js, and TypeScript — with a focus on clean,
            maintainable code and interfaces that feel considered rather
            than assembled.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
