import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faDocker, faPython, faJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const stats = [
    { number: '3+', text: 'Years of Experience' },
    { number: '5+', text: 'Research Publications' },
    { number: '4', text: 'Awards & Recognitions' }
  ];

  const skills = [
    { name: 'NestJS / Node.js / Express', percentage: 95 },
    { name: 'JavaScript / TypeScript', percentage: 90 },
    { name: 'Python / Machine Learning', percentage: 85 },
    { name: 'Docker / Jenkins / Terraform', percentage: 80 }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            style={{ scale }}
            whileHover={{ scale: 1.05, color: 'var(--primary-color)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            About Me
          </motion.h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-container">
              <motion.div 
                className="about-image-placeholder"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Your Photo
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Researcher & Developer with a Passion for Innovation</h3>
            <p>
              Hello there! I'm a Computer Science Graduate with expertise in AI research, NLP, and backend development.
              With over 3 years of professional experience at Lamah, I've developed robust APIs using NestJs, NodeJs, and ExpressJs,
              and worked on IoT projects including Air Quality Index monitoring systems. My research focuses on Sentiment Analysis
              of Arabic dialects, with multiple published papers in international conferences and journals.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  className="stat-item" 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.2)'
                  }}
                >
                  <motion.h3
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 200, 
                      delay: 0.3 + (0.1 * index) 
                    }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p>{stat.text}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.a 
              href="#contact" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="skills-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ color: 'var(--primary-color)', x: 5 }}
          >
            Technical Skills & Expertise
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Here are the most important skills & technologies that I use in my work and research.
          </motion.p>
          
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div 
                className="skill-item"
                key={index}
                initial={{ opacity: 0, y: 20, x: -50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100,
                  delay: 0.1 * index,
                  duration: 0.6
                }}
                whileHover={{ 
                  scale: 1.03,
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.h4
                  whileHover={{ color: 'var(--primary-color)' }}
                >
                  {skill.name}
                </motion.h4>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
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
          className="tech-logos-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ color: '#007bff', x: 5 }}
            style={{ textAlign: 'center', marginBottom: '20px' }}
          >
            Technologies & Tools
          </motion.h3>
          
          <motion.div className="tech-logos-container">
            {[
              { icon: faNode, name: 'Node.js', delay: 0 },
              { icon: faJs, name: 'JavaScript', delay: 0.1 },
              { icon: faPython, name: 'Python', delay: 0.2 },
              { icon: faDocker, name: 'Docker', delay: 0.3 },
              { icon: faReact, name: 'React', delay: 0.4 },
              { icon: faGithub, name: 'GitHub', delay: 0.5 },
              { 
                customIcon: true, 
                name: 'NestJS',
                svgPath: "M158.4 63.4l-35.2-22.9-71.5 42.7 34.5 22.6 72.2-42.4zm-73 68.6l-35.1-22.9v46.3l35.1 22.3v-45.7zm72.8-45.7v45.8l-35.1 22.8V86.3l35.1-22.8z",
                delay: 0.6,
                viewBox: "0 0 256 204",
                color: "#E0234E"
              },
              { 
                customIcon: true, 
                name: 'LangChain',
                svgPath: "M41.26 30.129c-5.891 0-10.656 4.781-10.656 10.656v127.656c0 5.891 4.781 10.672 10.656 10.672h106.156c5.891 0 10.672-4.781 10.672-10.672v-42.672h-42.672c-5.891 0-10.656-4.766-10.656-10.656v-85.328h-63.5zm74.156 0v74.672h42.672l-42.672-74.672zm-53.5 21.328h21.328c2.953 0 5.344 2.391 5.344 5.328 0 2.953-2.391 5.344-5.344 5.344h-21.328c-2.938 0-5.328-2.391-5.328-5.344 0-2.938 2.391-5.328 5.328-5.328zm0 21.328h21.328c2.953 0 5.344 2.391 5.344 5.344 0 2.938-2.391 5.328-5.344 5.328h-21.328c-2.938 0-5.328-2.391-5.328-5.328 0-2.953 2.391-5.344 5.328-5.344zm42.672 42.672c2.938 0 5.328 2.391 5.328 5.328v5.766c2.828.406 5.578 1.031 8.031 1.703 2.828.766 4.531 3.672 3.766 6.516-.766 2.828-3.656 4.531-6.5 3.766-3.703-1-7.328-1.703-10.766-1.766-2.797-.062-5.156.641-6.703 1.5-1.359.766-1.531 1.359-1.594 1.531-.031.078-.062.203-.062.578 0 .422.062.625.062.641.031.078.078.156.203.281.578.562 1.828 1.125 4.672 1.859 2.5.641 5.5 1.172 8.469 1.703h.016c3.156.594 6.422 1.203 9.391 2.031 3.203.891 6.234 2.266 8.359 4.438 2.5 2.5 3.969 5.766 3.969 9.562 0 3.781-1.469 7.062-3.969 9.562-2.109 2.109-5 3.469-8.062 4.375v5.625c0 2.938-2.391 5.328-5.328 5.328-2.953 0-5.344-2.391-5.344-5.328v-5.625c-3.969-.703-7.859-1.891-11.391-3.266-2.797-1.062-4.156-4.203-3.094-6.969 1.062-2.797 4.203-4.156 6.969-3.094 3.031 1.156 6.266 2.125 9.5 2.594 2.797.406 5.234-.078 6.797-.969 1.406-.797 1.594-1.5 1.672-1.734.031-.094.062-.203.062-.578 0-.422-.062-.625-.062-.641-.031-.078-.078-.141-.203-.266-.578-.578-1.828-1.141-4.672-1.875-2.5-.641-5.5-1.172-8.469-1.703h-.016c-3.156-.594-6.422-1.203-9.391-2.031-3.203-.891-6.234-2.266-8.359-4.438-2.5-2.5-3.969-5.766-3.969-9.562 0-3.781 1.469-7.047 3.969-9.562 2.109-2.094 5-3.453 8.062-4.359v-5.641c0-2.938 2.391-5.328 5.344-5.328z",
                delay: 0.7,
                viewBox: "0 0 200 200",
                color: "#00A3A3"
              },
              { 
                customIcon: true, 
                name: 'LangGraph',
                svgPath: "M124.3 122.8c-7.5 0-13.4 3.8-16.9 9.5l-9.1-5.3c3.5-7.3 10.8-12.3 20.2-12.3 11.3 0 19.9 6.8 19.9 17.8 0 11.1-8.6 15.2-17.2 19.3l-2.8 1.2c-5.9 2.6-9.5 4.2-9.5 8.7v1.4h29.9v-8.1h-19.2c0-4 3.6-5.7 8.4-7.8l2.4-1c8.5-3.7 18.7-8.2 18.7-19.9 0-11.2-9.5-18.4-20.3-18.4-9.3 0-16.7 4.9-20.1 12.1l9.2 5.5c2.5-5.6 6.8-9.5 13.4-9.5 5.7 0 10.2 3.4 10.2 9.5 0 6.4-6.7 8.7-13.2 11.7l-2.4 1c-4.3 1.9-8.9 4.2-12.2 7.3v-11.1c0-5.3 4.3-8.7 10-8.7 3.6 0 6.4 1.5 8.5 4.5l9.1-5.3c-3.5-5.7-10.2-9.5-17.6-9.5zm-36.2 38.7h-10v-48h-18.1v48h-10v10h38.1v-10zm72.6-48v58h10v-58h-10zm-36.7 58h10v-58h-10v58z",
                delay: 0.8,
                viewBox: "0 0 200 200",
                color: "#F0DB4F"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="tech-logo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100,
                  delay: 0.4 + tech.delay,
                  duration: 0.5
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {tech.customIcon ? (
                  <motion.svg 
                    className="tech-logo-icon" 
                    viewBox={tech.viewBox} 
                    xmlns="http://www.w3.org/2000/svg"
                    fill={tech.color || "currentColor"}
                    width="50"
                    height="50"
                    whileHover={{ rotate: 10 }}
                  >
                    <path d={tech.svgPath} />
                  </motion.svg>
                ) : (
                  <FontAwesomeIcon 
                    icon={tech.icon} 
                    className="tech-logo-icon" 
                  />
                )}
                <span className="tech-logo-name">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
