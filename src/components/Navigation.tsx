"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-dark-200/70 dark:border-dark-800"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav
        className="container-custom"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="focus-ring rounded-md text-base font-semibold tracking-tight text-dark-900 dark:text-white"
            aria-label="Go to home"
          >
            Muhammad Yusuf
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                className="focus-ring rounded-md text-sm font-medium text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white transition-colors duration-200"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Theme Toggle, Contact CTA & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="focus-ring p-2 rounded-lg text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors duration-200"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="hidden md:inline-flex focus-ring items-center rounded-lg bg-dark-900 dark:bg-white text-white dark:text-dark-900 text-sm font-medium px-4 py-2 hover:bg-dark-800 dark:hover:bg-dark-100 transition-colors duration-200"
            >
              Contact
            </button>

            <button
              type="button"
              className="focus-ring md:hidden p-2 rounded-lg text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors duration-200"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          id="mobile-menu"
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-hidden={!isOpen}
          className="md:hidden overflow-hidden border-t border-dark-200/70 dark:border-dark-800"
        >
          <div className="py-3 flex flex-col" role="menu" aria-label="Mobile navigation">
            {[...navItems, { name: "Contact", href: "#contact" }].map(
              (item) => (
                <button
                  key={item.name}
                  type="button"
                  role="menuitem"
                  className="focus-ring text-left px-1 py-2.5 text-sm font-medium text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white transition-colors duration-200"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
