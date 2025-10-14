'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import {
  GitHubIcon,
  LinkedInIcon,
  ResearchGateIcon,
  OrcidIcon,
} from '@/components/icons/brand-icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: GitHubIcon, href: 'https://github.com/habberrih', label: 'GitHub' },
    {
      icon: LinkedInIcon,
      href: 'https://linkedin.com/in/habberrih',
      label: 'LinkedIn',
    },
    {
      icon: ResearchGateIcon,
      href: 'https://www.researchgate.net/profile/Abdullah-Habberrih',
      label: 'ResearchGate',
    },
    {
      icon: OrcidIcon,
      href: 'https://orcid.org/0009-0004-2879-1817',
      label: 'ORCID',
    },
    { icon: Globe, href: 'https://habberrih.ly', label: 'Website' },
  ];

  return (
    <footer className="bg-[#2C2416] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-3">Abdullah Habberrih</h3>
            <p className="text-white/70 leading-relaxed">
              AI & NLP Researcher | Backend & IoT Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-5 pb-3 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 md:left-0 w-10 h-0.5 bg-[#D4A574]" />
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#D4A574] hover:pl-1.5 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold mb-5 pb-3 relative inline-block">
              Connect With Me
              <span className="absolute bottom-0 left-0 md:left-0 w-10 h-0.5 bg-[#D4A574]" />
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[#D4A574] transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 border-t border-white/10 text-center"
        >
          <p className="text-white/70 text-sm">
            © {currentYear} Abdullah Habberrih. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
