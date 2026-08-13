"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Download } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

import lingiStepImg from "../../public/lingostep.png";
import weatherImg from "../../public/weather.png";
import twittingImg from "../../public/iwitting1.jpeg";
import temurlaneTeach from "../../public/temurlaneTeach.png";
import mdhHospital from "../../public/mdhHospital.png";
import hotel from "../../public/hotel.png";
import codeMuseum from "../../public/code museum.png";
import dentistImg from "../../public/dentist.png";
import news24Img from "../../public/news24.png";
import asiGlobalIt from "../../public/project/asiglobalit.png";
import moviesCool from "../../public/project/moviescool.png";
import ezguide from "../../public/project/ezguide.png";

interface AddUrl {
  href: string;
  title: string;
}

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  tech: string[];
  github?: string;
  live?: string;
  liveLabel?: string;
  addUrl?: AddUrl[];
}

const featuredProjects: Project[] = [
  {
    title: "Hotel",
    description:
      "A hotel management platform for guests and staff. Guests can book rooms, order meals, and track checkout status, while dedicated Admin and Director panels give staff real-time visibility into room status, revenue, and multi-branch operations.",
    image: hotel,
    tech: ["Next.js", "TypeScript", "Ant Design"],
    github: "https://github.com/muhammadyusuf622/hotel-project2",
    live: "https://hotel-project2-one.vercel.app",
    addUrl: [
      { href: "https://hotel-project2-one.vercel.app/admin", title: "Admin panel" },
      { href: "https://hotel-project2-one.vercel.app/derector", title: "Director panel" },
    ],
  },
  {
    title: "Ezguide",
    description:
      "A structured online learning platform with course certificates, Stripe-powered payments, and admin-controlled enrollment. Access is restricted to authorized accounts provisioned by an administrator.",
    image: ezguide,
    tech: ["Next.js", "Nest.js", "Stripe", "MongoDB", "shadcn/ui"],
    live: "https://ezguide.io/",
  },
  {
    title: "MDH Hospital",
    description:
      "A healthcare platform that lets patients book doctor appointments, track their queue status in real time, and trigger a one-tap emergency call for urgent assistance.",
    image: mdhHospital,
    tech: ["React", "Nest.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/muhammadyusuf622/MDH-Hospital",
  },
  {
    title: "LingoStep",
    description:
      "An English-learning platform combining live video-chat practice, public chat rooms, book-based typing exercises, and quizzes.",
    image: lingiStepImg,
    tech: ["Nest.js", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/muhammadyusuf622/LingoStep",
    live: "https://lingostep.uz",
  },
];

const moreProjects: Project[] = [
  {
    title: "The Weather",
    description:
      "5-day forecasts with backgrounds that shift by time of day and season.",
    image: weatherImg,
    tech: ["React", "TypeScript", "Vite", "Redux Toolkit"],
    github: "https://github.com/muhammadyusuf622/the-weather-project",
    live: "https://the-weather-project-pi.vercel.app",
  },
  {
    title: "Twitting",
    description:
      "A Twitter-style social platform with likes, saved posts, short videos, and real-time comments.",
    image: twittingImg,
    tech: ["Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/muhammadyusuf622/Twitting-project",
    live: "https://twitting.uz",
  },
  {
    title: "Movies Cool",
    description:
      "A React Native app for discovering movies, watching trailers, and tracking a personal watchlist.",
    image: moviesCool,
    tech: ["React Native", "Nest.js", "MongoDB", "Socket.io"],
    github: "https://github.com/muhammadyusuf622",
    live: "https://expo.dev/artifacts/eas/5GTWBmQM75NkSgyjg9Aegb.apk",
    liveLabel: "Download APK",
  },
  {
    title: "The News 24",
    description:
      "A breaking-news platform with real-time updates across politics, business, and sports.",
    image: news24Img,
    tech: ["Nest.js", "Next.js", "Redux Toolkit"],
    github: "https://github.com/news24-project",
    live: "https://googlenews24.vercel.app/",
  },
  {
    title: "ASI Global IT",
    description:
      "A marketing site for an IT consulting company offering web, mobile, and automation services.",
    image: asiGlobalIt,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/webgrade-company/germany-company",
    live: "https://asiglobalit.com/",
  },
  {
    title: "Code Museum",
    description:
      "A platform for sharing and discovering interesting code snippets with other developers.",
    image: codeMuseum,
    tech: ["Node.js", "Nest.js", "Next.js"],
    github: "https://github.com/TOTEM-ABU/CodeMuseum",
    live: "https://code-musuem.vercel.app",
  },
  {
    title: "Dentist Project",
    description:
      "Lets patients book dentist appointments in advance to cut down on waiting times.",
    image: dentistImg,
    tech: ["Next.js"],
    github: "https://github.com/muhammadyusuf622/dentist-project",
    live: "https://dentist-project-opal.vercel.app",
    addUrl: [
      {
        href: "https://dentist-project-opal.vercel.app/doctor",
        title: "Doctor landing page",
      },
    ],
  },
  {
    title: "Tamerlane Teach",
    description:
      "An online learning platform where users can create, share, and watch free courses.",
    image: temurlaneTeach,
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/muhammadyusuf622/online-course-project",
  },
];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white transition-colors"
        >
          <Github size={16} />
          Code
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          {project.liveLabel === "Download APK" ? (
            <Download size={16} />
          ) : (
            <ExternalLink size={16} />
          )}
          {project.liveLabel ?? "Live Demo"}
        </a>
      )}
      {project.addUrl?.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-project-link text-sm"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-80px" }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-dark-200 dark:border-dark-700 shadow-card">
        <Image
          src={project.image}
          alt={`${project.title} — screenshot`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-dark-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-dark-600 dark:text-dark-400 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function CompactProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
      viewport={{ once: true, margin: "-40px" }}
      className="surface-card surface-card-hover overflow-hidden"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={project.image}
          alt={`${project.title} — screenshot`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-dark-900 dark:text-white">
          {project.title}
        </h4>
        <p className="mt-1.5 text-sm text-dark-600 dark:text-dark-400 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14 max-w-2xl"
      >
        <p className="section-kicker">Work</p>
        <h2 className="section-heading">Featured projects</h2>
        <p className="section-subtext mt-4">
          A selection of full-stack products I&apos;ve designed, built, and
          shipped end to end — from data model to deployment.
        </p>
      </motion.div>

      <div className="space-y-20">
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-24 mb-10">
        <h3 className="text-xl font-semibold tracking-tight text-dark-900 dark:text-white">
          More projects
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {moreProjects.map((project, index) => (
          <CompactProject key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <a
          href="https://github.com/muhammadyusuf622"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary focus-ring inline-flex"
        >
          <Github size={18} />
          View more on GitHub
        </a>
      </div>
    </div>
  );
}
