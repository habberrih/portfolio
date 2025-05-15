import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobile, faServer, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: faServer,
      title: 'Backend Development',
      description: 'Building robust APIs and server-side applications using NestJS, Node.js, Express, PostgreSQL, and MongoDB with Docker containerization.'
    },
    {
      id: 2,
      icon: faMobile,
      title: 'IoT Development',
      description: 'Developing IoT solutions with ESP8862 controllers, Arduino, and integration with platforms like Thingsboard. Creating OTA update libraries and sensor data management systems.'
    },
    {
      id: 3,
      icon: faLaptopCode,
      title: 'AI & NLP Research',
      description: 'Conducting research in Natural Language Processing, particularly Sentiment Analysis of Arabic dialects using Machine Learning techniques like TF-IDF, N-grams, and stemming.'
    },
    {
      id: 4,
      icon: faShoppingCart,
      title: 'DevOps & Infrastructure',
      description: 'Setting up CI/CD pipelines with Jenkins, infrastructure as code with Terraform, and cloud deployment on platforms like Hetzner.'
    }
  ];
  
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>My Services</h2>
        </div>
        
        <div className="services-intro">
          <h3>My Areas of Expertise</h3>
          <p>
            Based on my experience in backend development, IoT, and research, I offer the following specialized services
            that combine technical expertise with innovative solutions.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="services-cta">
          <p>Need a custom service that's not listed here?</p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
