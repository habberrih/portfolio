"use client"

import { motion } from "framer-motion"
import { Server, Cpu, Brain, Wrench } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Server,
    title: "Backend Development",
    description:
      "Building robust APIs and server-side applications using NestJS, Node.js, Express, PostgreSQL, and MongoDB with Docker containerization.",
  },
  {
    id: 2,
    icon: Cpu,
    title: "IoT Development",
    description:
      "Developing IoT solutions with ESP8266 controllers, Arduino, and integration with platforms like Thingsboard. Creating OTA update libraries and sensor data management systems.",
  },
  {
    id: 3,
    icon: Brain,
    title: "AI & NLP Research",
    description:
      "Conducting research in Natural Language Processing, particularly Sentiment Analysis of Arabic dialects using Machine Learning techniques like TF-IDF, N-grams, and stemming.",
  },
  {
    id: 4,
    icon: Wrench,
    title: "DevOps & Infrastructure",
    description:
      "Setting up CI/CD pipelines with Jenkins, infrastructure as code with Terraform, and cloud deployment on platforms like Hetzner.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-5 text-foreground">My Areas of Expertise</h3>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Based on my experience in backend development, IoT, and research, I offer the following specialized services
            that combine technical expertise with innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#f9f9f9] rounded-xl p-10 text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl shadow-md"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-[#f9f9f9] rounded-xl p-10"
        >
          <p className="text-lg md:text-xl mb-5 text-foreground">Need a custom service that's not listed here?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
