"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Wrench,
  Server,
  Cpu,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { GitHubIcon } from "@/components/icons/brand-icons";

type Category = "ai" | "nest" | "laravel" | "iot" | "automation";

type Project = {
  id: number;
  category: Category;
  icon: typeof Code;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  images: string[];
  fullDescription: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  impact: string;
};

type ProjectsSectionProps = {
  imagesMap?: Record<number, string[]>;
};

const projects: Project[] = [
  {
    id: 1,
    category: "ai",
    icon: Server,
    title: "AI-Powered WhatsApp Assistant",
    description:
      "Production-grade conversational AI platform with multi-agent orchestration, payments, and voice support.",
    technologies: [
      "NestJS",
      "LangGraph",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "WhatsApp API",
    ],
    image: "/api-gateway-architecture.jpg",
    images: [
      "/api-gateway-dashboard.jpg",
      "/microservices-diagram.jpg",
      "/api-documentation-concept.png",
    ],
    fullDescription:
      "Built a production-oriented AI assistant backend for WhatsApp that combines NestJS, LangGraph-based multi-agent orchestration, PostgreSQL persistence, Stripe payments, and third-party service integrations. The system handles real user workflows including service discovery, ordering, checkout journeys, reminders, and voice interactions. My work covered the full backend architecture: NestJS module boundaries, LangGraph workflow routing, WhatsApp Cloud API integration, long-term memory with PostgreSQL and LangGraph checkpointing, Stripe webhook processing, speech-to-text/text-to-speech pipelines, and Bull-based background job processing.",
    features: [
      "Multi-agent LangGraph workflow with routing, intent classification, and domain-specific agents",
      "Persistent memory and threaded conversations using PostgreSQL, Prisma, and LangGraph checkpointing",
      "Production-grade WhatsApp integration with webhook intake, interactive messaging, and media handling",
      "Stripe checkout creation and processor-based webhook architecture for payments",
      "Voice note support with speech-to-text and text-to-speech pipelines",
      "Third-party service workflows: availability lookup, ordering, follow-up, and provisioning",
      "Input/output guardrails, abuse logging, token tracking, and queue-based async processing",
      "Arabic and English support via nestjs-i18n with Swagger docs and Jest tests",
    ],
    impact:
      "Demonstrates full backend architecture for AI products: from prototype to modular services, integrating LLM workflows with deterministic business systems, real channels like WhatsApp, and production concerns including deployment, observability, and technical documentation.",
  },
  {
    id: 2,
    category: "ai",
    icon: Code,
    title: "ML Project - Machine Learning Experiments",
    description:
      "Collection of machine learning models and experiments including classification, regression, and NLP tasks.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
    image: "/code-analysis-dashboard.png",
    images: ["/code-metrics-dashboard.jpg", "/quality-reports.jpg"],
    fullDescription:
      "A comprehensive machine learning project repository containing various ML experiments and implementations. This project showcases practical applications of machine learning algorithms for classification, regression, and natural language processing tasks, demonstrating proficiency in data preprocessing, model training, evaluation, and optimization techniques.",
    githubUrl: "https://github.com/habberrih/ml-project",
    features: [
      "Data preprocessing and feature engineering pipelines",
      "Classification and regression model implementations",
      "Model evaluation and performance metrics analysis",
      "Hyperparameter tuning and optimization",
      "Jupyter notebooks with detailed explanations",
      "Clean code structure following ML best practices",
    ],
    impact:
      "Serves as a reference implementation for ML workflows and demonstrates practical machine learning skills applicable to real-world data science problems.",
  },
  {
    id: 3,
    category: "nest",
    icon: Server,
    title: "Minara - Multi-tenant SaaS Starter",
    description:
      "Modular NestJS starter for multi-tenant SaaS with JWT auth, organization memberships, and tenant-scoped Prisma access.",
    technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "JWT"],
    image: "/chat-application-interface.png",
    images: ["/modern-chat-interface.png", "/user-dashboard.jpg"],
    fullDescription:
      "Minara (meaning 'lighthouse' in Arabic) is a modular SaaS starter built with NestJS, Prisma, and PostgreSQL. It delivers authentication, organization management, tenant-aware data access, and admin features for building multi-tenant products quickly and safely. Features include JWT access/refresh tokens with rotation, organization CRUD with slug management, membership invitations and role management, AsyncLocalStorage-based tenant context, and Prisma middleware that auto-injects organizationId filters.",
    githubUrl: "https://github.com/habberrih/minara",
    liveUrl: "https://minara.onrender.com/docs",
    features: [
      "Email/password signup & login with JWT access and refresh tokens",
      "Organization CRUD with slug management and soft delete",
      "Membership invitations, acceptance, and role management (OWNER, ADMIN, MEMBER)",
      "AsyncLocalStorage-based tenant context with Prisma middleware",
      "Organization-scoped API keys with SHA-256 hashing",
      "Swagger documentation, ESLint, Prettier, Husky, and commitlint",
    ],
    impact:
      "Open-source project with 1+ stars and 8 releases. Provides a production-ready foundation for building multi-tenant SaaS applications with proper authentication and tenant isolation.",
  },
  {
    id: 4,
    category: "nest",
    icon: Server,
    title: "Visitors System - Conference Badge Generator",
    description:
      "Containerized visitor management system for the Horizons Conference with real-time Arabic badge generation.",
    technologies: ["NestJS", "Flask", "Prisma", "Docker", "PostgreSQL"],
    image: "/api-gateway-dashboard.jpg",
    images: ["/api-gateway-architecture.jpg", "/microservices-diagram.jpg"],
    fullDescription:
      "A two-service system for registering visitors and generating printable cards at the Misurata University Horizons Conference. The visitors-api (NestJS) stores visitor data and orchestrates card creation/download, while flask-api renders card images using templates with robust Arabic text shaping via arabic-reshaper and python-bidi. Features Swagger docs, bulk ZIP downloads, and full Docker Compose deployment with Nginx Proxy Manager.",
    githubUrl: "https://github.com/habberrih/visitors-system",
    features: [
      "NestJS API for visitor registration and card orchestration",
      "Flask service for Arabic text rendering with proper shaping and RTL support",
      "Real-time badge generation with customizable templates (Researcher, Visitor, Organizer)",
      "Bulk card download as ZIP files",
      "Full Docker Compose deployment with PostgreSQL, pgAdmin, and Nginx Proxy Manager",
      "Swagger documentation with Basic Auth protection",
    ],
    impact:
      "Successfully deployed for the Horizons Conference at Misurata University, automating the registration workflow and eliminating manual badge creation errors during the event.",
  },
  {
    id: 5,
    category: "iot",
    icon: Cpu,
    title: "Air Quality Monitoring System",
    description:
      "IoT-based real-time air quality monitoring with ESP8266 controllers.",
    technologies: ["ESP8266", "ThingsBoard", "NestJS", "Terraform", "Docker"],
    image: "/iot-monitoring-dashboard.jpg",
    images: [
      "/nicu-monitoring-interface.jpg",
      "/sensor-data-visualization.jpg",
      "/alert-system.png",
    ],
    fullDescription:
      "Developed ESP8266-based controller systems for real-time sensor data collection. Built OTA update mechanisms and device onboarding workflows. Customized the ThingsBoard platform with additional features and deployed infrastructure using Terraform and containerized environments.",
    features: [
      "ESP8266-based real-time sensor data collection",
      "OTA (Over-The-Air) update mechanisms",
      "ThingsBoard platform customization",
      "Infrastructure deployment with Terraform",
      "NestJS application for data extraction and reporting",
      "Modified Wasp4G library for JSON requests",
    ],
    impact:
      "Enabled real-time environmental monitoring with automated data collection, reporting, and scalable IoT infrastructure.",
  },
  {
    id: 6,
    category: "iot",
    icon: Cpu,
    title: "Smart NICU Monitoring System",
    description:
      "Award-winning IoT solution for neonatal intensive care units.",
    technologies: ["IoT Sensors", "Real-time Monitoring", "Alert Systems"],
    image: "/smart-nicu-project-demonstration.jpg",
    images: ["/huawei-tech4good-competition.jpg", "/medical-iot-devices.jpg"],
    fullDescription:
      "Developed an IoT-based monitoring system for neonatal intensive care units that won Bronze Award at the Huawei Tech4Good Global Competition. The system collects real-time data from multiple sensors, provides instant alerts for critical conditions, and visualizes patient vitals on a centralized dashboard.",
    features: [
      "Real-time vital signs monitoring",
      "Automated alert system for critical conditions",
      "Multi-patient monitoring dashboard",
      "Historical data analysis and visualization",
    ],
    impact:
      "Won 3rd prize at Huawei Tech4Good Global Competition. Improved response time to critical situations and provided healthcare professionals with comprehensive patient monitoring capabilities.",
  },
  {
    id: 7,
    category: "automation",
    icon: Wrench,
    title: "Infrastructure Automation Pipeline",
    description:
      "Automated deployment infrastructure with Terraform and Jenkins.",
    technologies: ["Terraform", "Jenkins", "Docker", "CI/CD"],
    image: "/deployment-pipeline.jpg",
    images: ["/ci-cd-pipeline.jpg", "/kubernetes-dashboard-ui.png"],
    fullDescription:
      "Designed and implemented automated deployment infrastructure using Terraform for infrastructure as code and Jenkins for CI/CD pipelines. Managed containerized deployments using Docker across multiple environments.",
    features: [
      "Infrastructure as Code with Terraform",
      "CI/CD pipelines with Jenkins",
      "Docker containerization",
      "Multi-environment deployment support",
      "Automated testing integration",
    ],
    impact:
      "Reduced deployment time and eliminated manual deployment errors, enabling faster and more reliable feature delivery.",
  },
  {
    id: 8,
    category: "nest",
    icon: Server,
    title: "Lamah Gate API",
    description:
      "Card management and issuance system built for large-scale growth and third-party integration.",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Swagger",
      "Docker",
    ],
    image: "/lamah-gate-api-dashboard.jpg",
    images: ["/lamah-gate-card-management.jpg", "/lamah-gate-architecture.jpg"],
    fullDescription:
      "Lamah Gate API is a card management and issuance system built to support large-scale growth and third-party integration. I contributed to the backend architecture and core business modules, helping shape a system designed to scale from around 250 users to 25,000+ users while maintaining security, data integrity, and maintainability. My work included architecting core backend modules, JWT authentication, role-based access control, and card lifecycle management with validation and anti-duplication logic.",
    liveUrl: "https://lamah.com/lamah-gate/",
    features: [
      "JWT-based authentication with NestJS guards and custom decorators",
      "Role-based access control with protected endpoints",
      "Card lifecycle handling with status management and duplicate-prevention rules",
      "Audit/history tracking for operational traceability",
      "Standardized API responses with DTOs and validation pipes",
      "Prisma schema design with migrations and type-safe database access",
      "User, card, group, history, and statistics modules",
    ],
    impact:
      "Contributed 100 commits with 12,110 lines added. Helped build a backend platform prepared for 100x user growth with strong API validation, security foundations, and modular architecture.",
  },
  {
    id: 9,
    category: "nest",
    icon: Server,
    title: "School API",
    description:
      "Modular school management API built with NestJS, Prisma, and PostgreSQL for academic and administrative workflows.",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "CASL",
      "Swagger",
      "Docker",
    ],
    image: "/api-documentation-concept.png",
    images: [
      "/api-documentation-concept.png",
      "/api-gateway-architecture.jpg",
      "/code-analysis-dashboard.png",
    ],
    fullDescription:
      "School API is a production-oriented backend for a school management platform built with NestJS, Prisma, and PostgreSQL. It centralizes academic and administrative workflows in a modular REST API serving dashboard and mobile-facing use cases for admins, teachers, and parents. The system covers authentication, role-aware authorization, academic structure management, student and parent records, attendance, grades, announcements, localized validation and messages, and Swagger-based API documentation for onboarding and testing.",
    features: [
      "JWT-based authentication with access and refresh token strategies",
      "Role-based authorization using CASL",
      "Modular NestJS architecture organized by domain boundaries",
      "Academic structure management for years, semesters, classes, and class groups",
      "Student, parent, teacher, and user management workflows",
      "Course assignment and class-group course scheduling",
      "Attendance tracking with status-based records and grade management across semesters",
      "Announcements with approval status and receiver targeting",
      "Arabic and English i18n resources for validation and API messages",
      "Swagger docs, Prisma migrations, Dockerized local setup, and production middleware including Helmet and rate limiting",
    ],
    impact:
      "Demonstrates production-focused backend engineering in a real business domain, combining modular NestJS design, typed data modeling with Prisma, secure role-aware access control, localized validation, and API documentation in a system that goes well beyond tutorial CRUD.",
  },
  {
    id: 10,
    category: "laravel",
    icon: Wrench,
    title: "Water Tank Contractor System",
    description:
      "Operations and finance platform for water and sewage contractors built with Laravel 12 and Filament 4.",
    technologies: [
      "Laravel 12",
      "PHP",
      "Filament 4",
      "MySQL/PostgreSQL",
      "Vite",
      "Tailwind CSS",
    ],
    image: "/deployment-pipeline.jpg",
    images: [
      "/deployment-pipeline.jpg",
      "/code-analysis-dashboard.png",
      "/api-gateway-dashboard.jpg",
    ],
    fullDescription:
      "Water Tank Contractor System is an operations and finance platform for water and sewage contractors, built with Laravel 12 and Filament 4. It unifies project execution, workforce management, catalog pricing, invoices, vendor bills, payments, payroll, expenses, daily movements, and the cashbook in one admin-driven system. The architecture emphasizes historical accuracy through price snapshots, auto-numbering, and soft deletes across financial and operational records, while Filament relation managers and automation hooks support practical workflows around project closure, payment allocation, payroll advances, vendor billing, and cashbook mirroring.",
    features: [
      "Unified coverage across customers, worker groups, catalogs, projects, invoices, vendor bills, payments, payroll, expenses, daily movements, and cashbook entries",
      "Laravel 12 and Filament 4 admin panel at /admin with Operations, Finances, and Configurations navigation groups",
      "Price snapshots, auto-numbering, and soft deletes on operational and financial line items for historical accuracy",
      "Worker groups and memberships with enforcement for a single active worker membership",
      "Project management with circuits, materials, services, geo fields, and optional auto-invoicing on completion",
      "Customer invoices, vendor bills, payments, and payment allocations with status tracking and morph-based party assignments",
      "Daily movement automation for petty cash, advances, reimbursements, payroll items, expenses, and cashbook mirroring",
      "Payroll runs and items with period summaries, deductions, bonuses, and net pay tracking",
      "Extensive documentation, factories, seed data, and roadmap planning for analytics, approvals, and attachments",
      "Local developer workflow with composer scripts, queue listener, Vite, PHPUnit tests, and seeded demo credentials",
    ],
    impact:
      "Shows full-stack business system design beyond simple CRUD by combining operational workflows, financial documents, admin tooling, automation rules, and reporting-oriented data architecture in a production-style Laravel application.",
  },
];

export function ProjectsSection({ imagesMap }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const enhancedProjects = useMemo(() => {
    const map = imagesMap || {};
    return projects.map((item) => {
      const dynImages = map[item.id];
      const images = dynImages && dynImages.length ? dynImages : item.images;
      const image = images && images.length ? images[0] : item.image;
      return { ...item, images, image };
    });
  }, [imagesMap]);

  const filteredProjects =
    filter === "all"
      ? enhancedProjects
      : enhancedProjects.filter((item) => item.category === filter);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-background overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-semibold text-foreground/90">
              Innovative Solutions & Technical Implementations
            </h3>
            <p className="text-lg text-foreground/70">
              Explore my portfolio of projects spanning backend development,
              automation, IoT, and developer tools.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {[
          { value: "all", label: "All Projects" },
          { value: "ai", label: "AI/LLM" },
          { value: "nest", label: "NestJS" },
          { value: "laravel", label: "Laravel" },
          { value: "iot", label: "IoT" },
          { value: "automation", label: "Automation" },
        ].map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value as Category | "all")}
              className={`relative px-5 py-2.5 text-base font-medium transition-colors ${
                filter === item.value
                  ? "text-primary"
                  : "text-foreground/60 hover:text-primary"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                  filter === item.value ? "w-8" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 hover:bg-background flex items-center justify-center z-10 transition-all hover:rotate-90"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="overflow-y-auto flex-1 overflow-x-hidden">
                  {/* Image Carousel */}
                  <div className="relative h-[500px] flex-shrink-0">
                    <img
                      src={
                        selectedProject.images[currentImageIndex] ||
                        "/placeholder.svg"
                      }
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) =>
                              prev === 0
                                ? selectedProject.images.length - 1
                                : prev - 1,
                            );
                          }}
                          className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) =>
                              prev === selectedProject.images.length - 1
                                ? 0
                                : prev + 1,
                            );
                          }}
                          className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        <div className="absolute bottom-5 left-0 w-full flex justify-center gap-2.5">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(index);
                              }}
                              className={`w-3 h-3 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? "bg-white scale-110"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="inline-flex items-center gap-2.5 bg-primary text-white px-4 py-2 rounded-full mb-5 text-sm">
                      {(() => {
                        const Icon = selectedProject.icon;
                        return <Icon className="w-4 h-4" />;
                      })()}
                      <span className="capitalize">
                        {selectedProject.category}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      {selectedProject.title}
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                      <div className="flex gap-4 mb-6">
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                          >
                            <GitHubIcon className="w-4 h-4" />
                            View Code
                          </a>
                        )}
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}

                    <p className="text-base leading-relaxed text-foreground/70 mb-8">
                      {selectedProject.fullDescription}
                    </p>

                    <div className="mt-10 pt-8 border-t border-border">
                      <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                      <ul className="ml-5 mb-8 space-y-2.5">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-foreground/70">
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-xl font-semibold mt-6 mb-4">
                        Impact & Results
                      </h4>
                      <p className="leading-relaxed text-foreground/70">
                        {selectedProject.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
