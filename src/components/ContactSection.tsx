"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/muhammadyusuf622",
      color: "hover:bg-gray-900 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/muhammad-yusuf-nasrulloh-1757a2357",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "yuvsufn@gmail.com",
      color: "hover:bg-red-500 hover:text-white",
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
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          Ready to start a project or just want to chat? I'd love to hear from you! Let's discuss how I can help bring your ideas to life with modern web technologies.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400 transition-colors duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400 transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400 transition-colors duration-200 resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Mail
                    className="text-primary-600 dark:text-primary-400"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-sm text-dark-600 dark:text-dark-400">
                    Email
                  </p>
                  <p className="text-dark-900 dark:text-white font-medium">
                    yuvsufn@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Phone
                    className="text-primary-600 dark:text-primary-400"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-sm text-dark-600 dark:text-dark-400">
                    Phone
                  </p>
                  <p className="text-dark-900 dark:text-white font-medium">
                    +998 (91) 780-99-60
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <MapPin
                    className="text-primary-600 dark:text-primary-400"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-sm text-dark-600 dark:text-dark-400">
                    Location
                  </p>
                  <p className="text-dark-900 dark:text-white font-medium">
                    Toshkent, Chilonzor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
              Connect With Me
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
              Current Availability
            </h4>
            <p className="text-dark-600 dark:text-dark-400 text-sm leading-relaxed mb-4">
              I'm currently available for freelance projects and full-time
              opportunities. Let's discuss how I can help bring your ideas to
              life!
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                Available for new projects
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
