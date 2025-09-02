"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Globe, Database } from "lucide-react";

import lingiStepImg from "../../public/lingostep.png";
import weatherImg from "../../public/weather.png";
import twittingImg from "../../public/iwitting1.jpeg";
import temurlaneTeach from "../../public/temurlaneTeach.png";
import mdhHospital from "../../public/mdhHospital.png";
import hotel from "../../public/hotel.png";
import Image from "next/image";
import codeMuseum from '../../public/code museum.png'
import dentistImg from '../../public/dentist.png'

export default function ProjectsSection() {
  const projects = [
    {
      title: "LingoStep",
      description:
        "Learning English through video chats, public chats, typing exercises with popular books, and fun quizzes",
      image: lingiStepImg.src,
      tech: [
        "JavaScript",
        "Node.js",
        "Nest.js",
        "Parcel",
        "MongoDB",
        "crypto-js",
        "socket.io - client",
        "axios",
        "jwt",
        "Passport.js",
        "socket.io",
        "schedule",
        "swagger",
        "websockets",
        "prisma",
        "cookie-parser",
        "telegraf",
        "prettier",
      ],
      github: "https://github.com/muhammadyusuf622/LingoStep",
      live: "https://lingostep.uz",
      category: "Full Stack",
    },
    {
      title: "The Weather",
      description:
        "Daily weather forecasts and 5-day forecasts, wallpapers that switch between day and night, dark mode, and the ability to set any city as default. Fully responsive design with dynamic backgrounds that change according to seasons and weather",
      image: weatherImg.src,
      tech: [
        "FSD Architecture",
        "OpenWeather API",
        "React.js",
        "TypeScript",
        "vite",
        "Tailwind Css",
        "Redux Toolkit",
        "React Query",
        "axios",
        "Framer Motion",
        "React Hook Form",
        "React Redux",
      ],
      github: "https://github.com/muhammadyusuf622/the-weather-project",
      live: "https://the-weather-project-vercel.vercel.app",
      category: "Frontend",
    },
    {
      title: "Twitting",
      description:
        "Twitting is a social media platform similar to Twitter, where users can like and save their favorite content, watch short videos, and comment on posts in real time. Each user can customize their profile, and the platform supports interactive features such as viewing liked videos and saving posts for later",
      image: twittingImg.src,
      tech: [
        "Express.js",
        "Ejs",
        "CSS",
        "MongoDB Atlas",
        "bcrypt",
        "socket.io",
        "nodemailer",
        "morgan",
        "joi",
        "JWT",
        "check-disk-space",
      ],
      github: "https://github.com/muhammadyusuf622/Twitting-project",
      live: "https://twitting.uz",
      category: "Full Stack",
    },
    {
      title: "Tamerlane Teach",
      description:
        "Tamerlane Teach is an online learning platform where users can create and share their courses, watch courses for free, and explore a variety of educational content. Each user can add titles and descriptions to their lessons and customize their profile, making it easy to share knowledge and learn from others",
      image: temurlaneTeach.src,
      tech: [
        "Node.js",
        "Express",
        "parcel",
        "HTML/CSS",
        "CI/CD",
        "crypto-js",
        "bcrypt",
        "body-parser",
        "check-disk-space",
        "cookie-parser",
        "cors",
        "jsonwebtoken",
        "joi",
        "method-override",
        "MongoDB Atlas",
        "morgan",
        "multer",
        "nodemailer",
        "winston",
      ],
      github: "https://github.com/muhammadyusuf622/online-course-project",
      live: "https://github.com/muhammadyusuf622/online-course-project",
      category: "Full Stack",
    },
    {
      title: "MDH Hospital",
      description:
        "MDH Hospital is an innovative healthcare platform designed to streamline communication between doctors and patients. Patients can easily book appointments online, receive timely reminders, and monitor their queue status directly through their profile. The platform also offers an emergency call feature with a single click for urgent medical assistance. Users have the flexibility to choose which doctor's appointment they want to schedule, ensuring personalized and convenient healthcare access",
      image: mdhHospital.src,
      tech: [
        "Node.js",
        "Nest.js",
        "React.js",
        "TypeScript",
        "Vite",
        "Styled Components",
        "Sass",
        "MUI",
        "React Google Maps",
        "axios",
        "react-router",
        "react-icons",
        "swiper",
        "JWT",
        "passport.js",
        "swagger",
        "prisma",
        "bcryptjs",
        "cookie",
        "validator",
        "PostgreSQL",
      ],
      github: "https://github.com/muhammadyusuf622/MDH-Hospital",
      live: "https://github.com/muhammadyusuf622/MDH-Hospital",
      category: "Full Stack",
    },
    {
      title: "Hotel",
      description: `The HOTEL project is a comprehensive hotel management platform designed for both guests and staff. Guests can effortlessly book rooms, check room availability, track cleaning or maintenance
       schedules, set their preferred cleaning times, order meals, and submit complaints online. They can also view their check-out time and manage their stay conveniently.
The Admin Panel allows hotel administrators to monitor
 room status, track daily revenue, oversee guest check-ins and check-outs, and view detailed statistics on room usage and customer activity.
The Director Panel provides a higher-level oversight, enabling directors to manage all branches, add or remove staff, control admin access, track branch revenues, monitor customer and employee status, and maintain complete operational control across the hotel chain.
  | "To enter" /admin  /derector`,
      image: hotel.src,
      tech: ["Next.js", "Typescript", "Ant Design"],
      github: "https://github.com/muhammadyusuf622/hotel-project2",
      live: "https://hotel-project2-one.vercel.app",
      category: "Frontend",
    },
    {
      title: "Code Museum",
      description:
        "Code Museum is a platform designed to share interesting and creative code snippets with others. The project allows developers to showcase unique coding ideas, learn from each other, and build a community around innovative solutions.",
      image: codeMuseum,
      tech: ["Node.js", "Nest.js", "Next.js"],
      github: "https://github.com/TOTEM-ABU/CodeMuseum",
      live: "https://code-musuem.vercel.app",
      category: "Full-Stack",
    },
    {
      title: "Dentist Project",
      description:
        "This project enables customers to book dentist appointments in advance, reducing waiting times and ensuring timely access to dental services.",
      image: dentistImg,
      tech: ["Next.js"],
      github: "https://github.com/muhammadyusuf622/dentist-project",
      live: "https://dentist-project-opal.vercel.app",
      category: "Frontend",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack":
        return <Code size={16} />;
      case "Frontend":
        return <Globe size={16} />;
      case "Backend":
        return <Database size={16} />;
      default:
        return <Code size={16} />;
    }
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
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          Here are some of the projects I've built to showcase my skills and
          passion. From full-stack applications to frontend projects, each
          demonstrates my expertise in React, Node.js, TypeScript, and modern
          web technologies.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-48">
              <Image
                src={project.image}
                alt={`${project.title} project image`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary-200 dark:bg-primary-900/80 text-primary-900 dark:text-primary-300">
                  {getCategoryIcon(project.category)}
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-dark-600 dark:text-dark-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </motion.a>

                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <motion.a
          href="https://github.com/muhammadyusuf622"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-secondary inline-flex items-center gap-2"
        >
          <Github size={20} />
          View More on GitHub
        </motion.a>
      </motion.div>
    </div>
  );
}
