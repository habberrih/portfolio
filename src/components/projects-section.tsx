'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Wrench,
  Server,
  Cpu,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { GitHubIcon } from '@/components/icons/brand-icons';

type Category = 'dev-tools' | 'automation' | 'nest' | 'node' | 'iot';

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
    category: 'nest',
    icon: Server,
    title: 'Enterprise API Gateway',
    description:
      'A scalable API gateway built with NestJS for microservices architecture.',
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/api-gateway-architecture.jpg',
    images: [
      '/api-gateway-dashboard.jpg',
      '/microservices-diagram.jpg',
      '/api-documentation-concept.png',
    ],
    fullDescription:
      'Developed a comprehensive API gateway solution using NestJS that handles authentication, rate limiting, and request routing for multiple microservices. The system processes over 10,000 requests per minute with 99.9% uptime.',
    githubUrl: 'https://github.com/username/api-gateway',
    features: [
      'JWT-based authentication and authorization',
      'Rate limiting and throttling',
      'Request/response transformation',
      'Service discovery and load balancing',
      'Comprehensive logging and monitoring',
    ],
    impact:
      'This API gateway improved system reliability and reduced response times by 40%, while providing a unified entry point for all client applications.',
  },
  {
    id: 2,
    category: 'node',
    icon: Code,
    title: 'Real-time Chat Application',
    description:
      'A scalable real-time chat platform built with Node.js and Socket.io.',
    technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Express'],
    image: '/chat-application-interface.png',
    images: ['/modern-chat-interface.png', '/user-dashboard.jpg'],
    fullDescription:
      'Built a real-time chat application supporting multiple chat rooms, private messaging, file sharing, and user presence indicators. The application handles thousands of concurrent connections efficiently.',
    features: [
      'Real-time messaging with Socket.io',
      'Multiple chat rooms and private messaging',
      'File and image sharing',
      'User presence and typing indicators',
      'Message history and search',
    ],
    impact:
      'The platform successfully handles 5,000+ concurrent users with minimal latency, providing a seamless communication experience.',
  },
  {
    id: 3,
    category: 'dev-tools',
    icon: Wrench,
    title: 'Code Quality Analyzer',
    description:
      'An automated tool for analyzing code quality and generating reports.',
    technologies: ['Node.js', 'TypeScript', 'ESLint', 'SonarQube'],
    image: '/code-analysis-dashboard.png',
    images: [
      '/code-metrics-dashboard.jpg',
      '/quality-reports.jpg',
      '/code-visualization.png',
    ],
    fullDescription:
      'Created a comprehensive code quality analyzer that integrates with CI/CD pipelines to automatically check code quality, detect code smells, and generate detailed reports with actionable insights.',
    githubUrl: 'https://github.com/username/code-analyzer',
    features: [
      'Static code analysis',
      'Code complexity metrics',
      'Security vulnerability detection',
      'Custom rule configuration',
      'Integration with popular CI/CD tools',
    ],
    impact:
      'Reduced code review time by 50% and improved overall code quality across multiple projects by providing automated feedback.',
  },
  {
    id: 4,
    category: 'automation',
    icon: Cpu,
    title: 'Deployment Automation Pipeline',
    description:
      'Automated deployment pipeline for containerized applications.',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
    image: '/deployment-pipeline.jpg',
    images: ['/ci-cd-pipeline.jpg', '/kubernetes-dashboard-ui.png'],
    fullDescription:
      'Designed and implemented a fully automated deployment pipeline that handles building, testing, and deploying containerized applications to Kubernetes clusters with zero downtime.',
    features: [
      'Automated build and test processes',
      'Container orchestration with Kubernetes',
      'Infrastructure as Code with Terraform',
      'Automated rollback on failures',
      'Multi-environment deployment support',
    ],
    impact:
      'Reduced deployment time from hours to minutes and eliminated deployment-related errors, enabling faster feature delivery.',
  },
  {
    id: 5,
    category: 'iot',
    icon: Cpu,
    title: 'Smart NICU Monitoring System',
    description:
      'IoT-based monitoring system for neonatal intensive care units.',
    technologies: ['Node.js', 'MQTT', 'InfluxDB', 'React'],
    image: '/iot-monitoring-dashboard.jpg',
    images: [
      '/nicu-monitoring-interface.jpg',
      '/sensor-data-visualization.jpg',
      '/alert-system.png',
      '/medical-iot-devices.jpg',
    ],
    fullDescription:
      'Developed an IoT-based monitoring system for neonatal intensive care units that collects real-time data from multiple sensors, provides instant alerts for critical conditions, and visualizes patient vitals on a centralized dashboard.',
    features: [
      'Real-time sensor data collection',
      'Automated alert system for critical conditions',
      'Historical data analysis and visualization',
      'Multi-patient monitoring dashboard',
      'Integration with hospital information systems',
    ],
    impact:
      'Improved response time to critical situations by 60% and provided healthcare professionals with comprehensive patient monitoring capabilities.',
  },
  {
    id: 6,
    category: 'automation',
    icon: Wrench,
    title: 'Database Migration Tool',
    description:
      'Automated tool for managing database schema migrations across environments.',
    technologies: ['Node.js', 'PostgreSQL', 'TypeScript'],
    image: '/database-migration-tool.jpg',
    images: ['/migration-dashboard.jpg', '/schema-visualization.jpg'],
    fullDescription:
      'Built a robust database migration tool that automates schema changes across multiple environments, ensuring data integrity and providing rollback capabilities.',
    githubUrl: 'https://github.com/username/db-migration-tool',
    features: [
      'Automated schema migration',
      'Version control for database changes',
      'Rollback capabilities',
      'Multi-environment support',
      'Migration history tracking',
    ],
    impact:
      'Eliminated manual database migration errors and reduced deployment risks, enabling confident database updates across all environments.',
  },
];

export function ProjectsSection({ imagesMap }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
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
    filter === 'all'
      ? enhancedProjects
      : enhancedProjects.filter((item) => item.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-white overflow-x-hidden">
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
            { value: 'all', label: 'All Projects' },
            { value: 'nest', label: 'NestJS' },
            { value: 'node', label: 'Node.js' },
            { value: 'dev-tools', label: 'Dev Tools' },
            { value: 'automation', label: 'Automation' },
            { value: 'iot', label: 'IoT' },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value as Category | 'all')}
              className={`relative px-5 py-2.5 text-base font-medium transition-colors ${
                filter === item.value
                  ? 'text-primary'
                  : 'text-foreground/60 hover:text-primary'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                  filter === item.value ? 'w-8' : 'w-0'
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
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || '/placeholder.svg'}
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
                        className="px-3 py-1 bg-[#F5F1E8] text-xs font-medium rounded-full"
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
                className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center z-10 transition-all hover:rotate-90"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="overflow-y-auto flex-1 overflow-x-hidden">
                  {/* Image Carousel */}
                  <div className="relative h-[500px] flex-shrink-0">
                    <img
                      src={
                        selectedProject.images[currentImageIndex] ||
                        '/placeholder.svg'
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
                                : prev - 1
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
                                : prev + 1
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
                                  ? 'bg-white scale-110'
                                  : 'bg-white/50'
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
                          className="px-3 py-1.5 bg-[#F5F1E8] text-sm font-medium rounded-full"
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
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2C1810] text-white rounded-lg hover:bg-[#3C2820] transition-colors"
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

                    <div className="mt-10 pt-8 border-t border-gray-200">
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
