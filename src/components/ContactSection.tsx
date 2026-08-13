"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "yuvsufn@gmail.com",
    href: "mailto:yuvsufn@gmail.com",
    icon: <Mail size={18} />,
  },
  {
    name: "GitHub",
    value: "github.com/muhammadyusuf622",
    href: "https://github.com/muhammadyusuf622",
    icon: <Github size={18} />,
  },
  {
    name: "LinkedIn",
    value: "in/muhammad-yusuf-nasrulloh",
    href: "https://www.linkedin.com/in/muhammad-yusuf-nasrulloh-1757a2357/",
    icon: <Linkedin size={18} />,
  },
  {
    name: "Phone",
    value: "+998 (91) 780-99-60",
    href: "tel:+998917809960",
    icon: <Phone size={18} />,
  },
];

export default function ContactSection() {
  return (
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <p className="section-kicker">Contact</p>
        <h2 className="section-heading">Have a project in mind?</h2>
        <p className="section-subtext mt-4">
          Let&apos;s build something great together. I&apos;m currently
          available for freelance work and full-time opportunities — reach
          out and let&apos;s talk about what you&apos;re building.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:yuvsufn@gmail.com"
            className="btn-primary focus-ring"
          >
            <Mail size={18} />
            Say hello
          </a>
          <div className="inline-flex items-center gap-2 text-sm text-dark-500 dark:text-dark-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for new projects
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-14 grid sm:grid-cols-2 gap-4"
      >
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="focus-ring surface-card surface-card-hover group flex items-center gap-4 p-4"
          >
            <span className="w-10 h-10 rounded-lg bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 flex items-center justify-center shrink-0 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {link.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-dark-900 dark:text-white">
                {link.name}
              </span>
              <span className="block text-sm text-dark-500 dark:text-dark-500 truncate">
                {link.value}
              </span>
            </span>
            <ArrowUpRight
              size={16}
              className="ml-auto shrink-0 text-dark-400 dark:text-dark-600 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
            />
          </a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 flex items-center gap-1.5 text-sm text-dark-500 dark:text-dark-500"
      >
        <MapPin size={14} />
        Based in Tashkent, Uzbekistan — open to remote work
      </motion.div>
    </div>
  );
}
