import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filterItems = (category) => {
    setActiveFilter(category);
  };
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Sentiment Analysis of Libyan Dialect',
      category: 'research',
      image: 'https://via.placeholder.com/600x400?text=Sentiment+Analysis',
      description: 'Research on Sentiment Analysis of Libyan Dialect Using Machine Learning with Stemming and Stopwords Removal.',
      link: 'https://www.researchgate.net/profile/Abdullah-Habberrih'
    },
    {
      id: 2,
      title: 'Air Quality Index IoT System',
      category: 'iot',
      image: 'https://via.placeholder.com/600x400?text=IoT+Air+Quality',
      description: 'Developed ESP8862 controller code using Arduino IDE to read sensor data and transmit it to Thingsboard platform.',
      link: '#'
    },
    {
      id: 3,
      title: 'Arabic Dialects Dataset Review',
      category: 'research',
      image: 'https://via.placeholder.com/600x400?text=Arabic+Dialects+Dataset',
      description: 'A review of the available Arabic dialects datasets for Sentiment Analysis.',
      link: 'https://www.researchgate.net/profile/Abdullah-Habberrih'
    },
    {
      id: 4,
      title: 'Smart NICU Solution',
      category: 'iot',
      image: 'https://via.placeholder.com/600x400?text=Smart+NICU',
      description: 'Award-winning Smart NICU solution at the Huawei Tech4Good Global Competition (Bronze Award).',
      link: '#'
    },
    {
      id: 5,
      title: 'NestJS Backend API',
      category: 'web',
      image: 'https://via.placeholder.com/600x400?text=NestJS+API',
      description: 'Robust API implementation using NestJS, NodeJS, and ExpressJS with Docker containerization.',
      link: 'https://github.com/habberrih'
    },
    {
      id: 6,
      title: 'OTA Update Library for IoT',
      category: 'iot',
      image: 'https://via.placeholder.com/600x400?text=OTA+Updates',
      description: 'C++ library to facilitate Over-the-Air (OTA) updates for ESP8862 controllers.',
      link: '#'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ color: 'var(--primary-color)', scale: 1.05 }}
          >
            Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Check out my latest research publications and IoT projects
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {['all', 'research', 'iot', 'web'].map((filter, index) => (
            <motion.button 
              key={index}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => filterItems(filter)}
              whileHover={{ scale: 1.05, backgroundColor: activeFilter === filter ? 'var(--primary-color)' : 'var(--surface-2)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="portfolio-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="portfolio-item"
              data-category={project.category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredItem(project.title)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <motion.div 
                className="portfolio-img"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.title} />
                <motion.div 
                  className="img-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === project.title ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="overlay-content"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredItem === project.title ? 0 : 20, 
                      opacity: hoveredItem === project.title ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <span>{project.title}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="portfolio-info"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.h3
                  whileHover={{ color: 'var(--primary-color)', x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p>
                  {project.description}
                </motion.p>
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-view"
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--primary-color)', color: '#fff' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
