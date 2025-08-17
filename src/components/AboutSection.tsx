"use client";

import { motion } from "framer-motion";
import { Download, Award, GraduationCap, Heart } from "lucide-react";
import Image from "next/image";

import myImg from "../../public/myImg.jpg";

export default function AboutSection() {
  const achievements = [
    {
      icon: <GraduationCap size={24} />,
      title: "Education",
      description: "Najot Ta'lim",
      year: "2024-2025",
    },
    {
      icon: <Award size={24} />,
      title: "Experience",
      description: "1 years in web development",
      year: "2024-Present",
    },
    {
      icon: <Heart size={24} />,
      title: "Passion",
      description: "Creating amazing user experiences",
      year: "Always",
    },
  ];

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/MuhammadYusufResume.pdf";
    link.download = "MuhammadYusufResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          A passionate Full Stack Developer from Tashkent, Uzbekistan, dedicated
          to building clean, scalable, and user-friendly applications that solve
          real-world problems. Specializing in React, Node.js, TypeScript, and
          modern web technologies.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Photo and Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center overflow-hidden">
                <Image
                  src={myImg.src}
                  alt="My Photo"
                  width={320}
                  height={320}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              1+
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
              I have been interested in programming for a long time. I traveled
              to Turkey and Russia to save money for my studies, and the money I
              earned there became the foundation that allowed me to fully
              dedicate myself to programming for a year. I truly enjoy
              programming; it feels like discovering a new world, and learning
              new things excites my mind in a way nothing else does.
            </p>
            <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
              I have a passion for sports and a strong interest in exploring new
              developments in programming. I have been involved in sports since
              my childhood because I believe it is essential for personal growth
              and keeping up with the times.
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-2 flex justify-center">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-dark-900 dark:text-white mb-1">
                  {achievement.title}
                </h4>
                <p className="text-sm text-dark-600 dark:text-dark-400 mb-1">
                  {achievement.description}
                </p>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                  {achievement.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
