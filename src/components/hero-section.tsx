'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/icons/brand-icons';

export function HeroSection() {
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const roles = ['Backend Developer', 'API Architect', 'IoT Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (typingIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setTypingText((prev) => prev + currentRole[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        const eraseInterval = setInterval(() => {
          setTypingText((prev) => prev.substring(0, prev.length - 1));

          if (typingText.length <= 1) {
            clearInterval(eraseInterval);
            setTypingIndex(0);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }, 50);

        return () => clearInterval(eraseInterval);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [typingIndex, currentRoleIndex, typingText, roles]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-[#F5F1E8]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary text-2xl font-medium"
            >
              Hello, I'm
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                delay: 0.4,
                duration: 0.8,
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Abdullah Habberrih
            </motion.h1>

            <div className="h-12 flex items-center">
              <motion.h2 className="text-3xl md:text-4xl font-medium text-primary">
                {typingText}
                <span
                  className={`inline-block ml-1 ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  } transition-opacity`}
                >
                  |
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              A Computer Science Graduate with expertise in backend development
              and IoT solutions. I specialize in building robust APIs, scalable
              systems, and innovative IoT applications using Node.js, NestJS,
              and Docker.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pt-4"
            >
              <Button asChild size="lg" className="gap-2">
                <a href="#projects">Projects</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-5 pt-2"
            >
              {[
                { url: 'https://github.com/habberrih', icon: GitHubIcon },
                { url: 'https://linkedin.com/in/habberrih', icon: LinkedInIcon },
                { url: 'mailto:a.habberreh@gmail.com', icon: Mail },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 overflow-hidden group"
                  >
                    <Icon className="w-5 h-5 relative z-10" />
                    <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
                className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden shadow-2xl"
              >
                <img
                  src="/me/1.png"
                  alt="Abdullah Habberrih"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'reverse',
                }}
                className="absolute top-[20%] right-[15%] w-20 h-20 rounded-full bg-primary/20 opacity-60"
              />

              <motion.div
                animate={{
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'reverse',
                }}
                className="absolute bottom-[20%] left-[15%] w-16 h-16 rounded-full bg-primary/15 opacity-60"
              />

              <motion.div
                animate={{
                  x: [0, 10, 0],
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'reverse',
                }}
                className="absolute top-[60%] right-[25%] w-10 h-10 rounded-full bg-primary/10 opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
