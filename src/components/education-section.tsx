'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Users } from 'lucide-react';

const education = [
  {
    degree: "Master's (Exchange Program)",
    institution: 'Sapienza University of Rome',
    location: 'Rome, Italy',
    period: '2024 — 2025',
  },
  {
    degree: "Bachelor's Degree",
    institution: 'Misurata University',
    location: 'Misurata, Libya',
    period: '2018 — 2023',
  },
];

const publications = [
  {
    title: 'Advanced Backend Architecture Patterns in Distributed Systems',
    venue: 'International Conference on Software Engineering',
    date: '2024',
    authors: 'Abdullah Habberrih, et al.',
  },
  {
    title: 'IoT Integration with Modern Backend Technologies',
    venue: 'Journal of Computer Science and Technology',
    date: '2023',
    authors: 'Abdullah Habberrih, John Doe',
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="p-8 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:bg-primary/80 transition-colors duration-300"
                >
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {edu.degree}
                  </h3>

                  <p className="text-lg text-primary font-semibold">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{edu.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-mono">{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Publications
            </h3>
            <div className="w-12 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Research papers and academic contributions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:bg-primary/80 transition-colors duration-300"
                  >
                    <BookOpen className="w-6 h-6 text-primary-foreground" />
                  </motion.div>

                  <h4 className="text-lg font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {pub.title}
                  </h4>

                  <p className="text-sm text-primary font-semibold mb-3">
                    {pub.venue}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{pub.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{pub.authors}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
