"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Systems Engineer",
    company: "Lamah",
    period: "Mar 2025 — Present",
    description: [
      "Designed AI-powered conversational systems using LLMs and multi-agent orchestration (LangGraph)",
      "Built production-ready WhatsApp assistant with real-time messaging workflows",
      "Implemented persistent memory using PostgreSQL and integrated Stripe payment systems",
      "Added voice interaction features using speech-to-text and text-to-speech pipelines",
    ],
  },
  {
    title: "Backend Developer",
    company: "Lamah",
    period: "Jun 2022 — Feb 2025",
    description: [
      "Designed and maintained scalable APIs using NestJS, Node.js, and Express",
      "Managed containerized deployments using Docker across development and production environments",
      "Collaborated with cross-functional teams to define API specifications and deliver production-ready systems",
      "Wrote end-to-end tests to ensure system reliability and performance",
      "Utilized Git for version control and contributed to CI/CD workflows",
      "Worked with PostgreSQL and MongoDB for scalable data storage",
    ],
  },
  {
    title: "R&D Programmer (IoT Projects)",
    company: "Lamah",
    period: "Jan 2024 — Sep 2024",
    description: [
      "Developed ESP8266-based controller systems for real-time sensor data collection",
      "Built OTA update mechanisms and customized ThingsBoard platform",
      "Deployed infrastructure using Terraform and containerized environments (Docker, Jenkins)",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            My professional journey and the roles I've taken on throughout my
            career
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg z-10" />

                {/* Content card */}
                <div className="md:w-[calc(50%-2rem)]">
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all"
                  >
                    {/* Company badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                      {exp.title}
                    </h3>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.period}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted-foreground"
                        >
                          <span className="text-primary mt-1 flex-shrink-0">
                            •
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
