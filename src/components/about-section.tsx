'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Code2,
  Database,
  Server,
  Container,
  GitBranch,
  Workflow,
} from 'lucide-react';

export function AboutSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const stats = [
    { number: '3+', text: 'Years of Experience' },
    { number: '10+', text: 'Projects Completed' },
    { number: '5+', text: 'Technologies Mastered' },
  ];

  const skills = [
    { name: 'NestJS / Node.js / Express', percentage: 95 },
    { name: 'JavaScript / TypeScript', percentage: 90 },
    { name: 'PostgreSQL / MongoDB', percentage: 85 },
    { name: 'Docker / CI/CD / DevOps', percentage: 80 },
  ];

  const technologies = [
    { icon: Code2, name: 'Node.js', color: '#68A063' },
    { icon: Code2, name: 'NestJS', color: '#E0234E' },
    { icon: Code2, name: 'TypeScript', color: '#3178C6' },
    { icon: Database, name: 'PostgreSQL', color: '#336791' },
    { icon: Database, name: 'MongoDB', color: '#47A248' },
    { icon: Container, name: 'Docker', color: '#2496ED' },
    { icon: Server, name: 'Express', color: '#000000' },
    { icon: GitBranch, name: 'Git', color: '#F05032' },
    { icon: Workflow, name: 'CI/CD', color: '#0066CC' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{ scale }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-full max-w-md aspect-square bg-muted rounded-2xl flex items-center justify-center text-muted-foreground text-xl shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                src="/me/2.png"
                alt="Abdullah Habberrih"
                className="w-full h-full rounded-2xl object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Backend Developer with a Passion for Innovation
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hello there! I'm{' '}
              <span className="text-foreground font-semibold">
                Abdullah Habberrih
              </span>
              , a backend developer with 3+ years of experience designing robust
              APIs using{' '}
              <span className="text-foreground font-medium">Node.js</span>,{' '}
              <span className="text-foreground font-medium">NestJS</span>, and{' '}
              <span className="text-foreground font-medium">Express.js</span>.
              I'm passionate about performance, scalability, and clean
              architecture. Currently working at{' '}
              <span className="text-foreground font-semibold">Lamah</span>,
              where I develop API-driven backend systems.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-muted/50 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      delay: 0.3 + 0.1 * index,
                    }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">{stat.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors w-fit shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ color: 'hsl(var(--primary))', x: 5 }}
          >
            Technical Skills & Expertise
          </motion.h3>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Here are the most important skills & technologies that I use in my
            work.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-muted/50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20, x: -50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  delay: 0.1 * index,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.03,
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.h4
                  className="text-lg font-semibold mb-4 text-foreground"
                  whileHover={{ color: 'hsl(var(--primary))' }}
                >
                  {skill.name}
                </motion.h4>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ color: 'hsl(var(--primary))', x: 5 }}
          >
            Technologies & Tools
          </motion.h3>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center aspect-square bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    delay: 0.05 * index,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon
                    className="w-12 h-12 mb-3 text-primary"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-semibold text-center text-foreground">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
