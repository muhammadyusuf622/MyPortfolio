import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/muhammadyusuf622",
    icon: <Github size={18} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-yusuf-nasrulloh-1757a2357/",
    icon: <Linkedin size={18} />,
  },
  {
    name: "Email",
    href: "mailto:yuvsufn@gmail.com",
    icon: <Mail size={18} />,
  },
];

/* Hardcoded rather than computed at render time — this page is statically
   prerendered, so `new Date().getFullYear()` would bake in the build year
   and drift out of sync with the client after a calendar rollover. */
const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-dark-200/70 dark:border-dark-800">
      <div className="container-custom py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-dark-900 dark:text-white">
            Muhammad Yusuf
          </p>
          <p className="text-sm text-dark-500 dark:text-dark-500">
            Full Stack Developer
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="focus-ring text-sm text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              aria-label={link.name}
              className="focus-ring p-2 rounded-lg text-dark-500 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="container-custom pb-8">
        <p className="text-center text-xs text-dark-400 dark:text-dark-600">
          © {COPYRIGHT_YEAR} Muhammad Yusuf. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
