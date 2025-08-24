import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Hero.css';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const roles = ['AI & NLP Researcher', 'Backend Developer', 'IoT Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const controls = useAnimation();
  
  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (typingIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setTypingText(prev => prev + currentRole[typingIndex]);
        setTypingIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      // Pause at the end of typing before erasing
      const timeout = setTimeout(() => {
        // Start erasing
        const eraseInterval = setInterval(() => {
          setTypingText(prev => prev.substring(0, prev.length - 1));
          
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
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Floating animation for profile image
  useEffect(() => {
    controls.start({
      y: [0, -20, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    });
  }, [controls]);
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: 5, color: 'var(--primary-color)' }}
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
                duration: 0.8 
              }}
              whileHover={{ 
                scale: 1.05, 
                color: 'var(--primary-color)',
                transition: { duration: 0.2 } 
              }}
            >
              Abdullah Habberrih
            </motion.h1>
            <div className="typing-container">
              <motion.h2 className="typing-text">
                {typingText}
                <span className={`cursor ${showCursor ? 'blink' : ''}`}>|</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              A Computer Science Graduate with expertise in AI research, NLP, and backend development.
              I specialize in building robust APIs, IoT solutions, and conducting research in Sentiment Analysis of Arabic dialects.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.a 
                href="#portfolio" 
                className="btn"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
            </motion.div>
            <motion.div 
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {[
                { url: 'https://github.com/habberrih', icon: faGithub },
                { url: 'https://linkedin.com/in/habberrih', icon: faLinkedin },
                { url: 'https://www.researchgate.net/profile/Abdullah-Habberrih', icon: faYoutube }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + (index * 0.1) }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.2,
                    backgroundColor: 'var(--primary-color)',
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* You can add your profile image here */}
            <motion.div 
              className="profile-image-placeholder"
              animate={controls}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Your Photo
              </motion.span>
              
              {/* Decorative elements */}
              <motion.div 
                className="floating-element element-1"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  rotate: [0, 15, 0],
                  transition: { duration: 7, repeat: Infinity, repeatType: 'reverse' }
                }}
              />
              <motion.div 
                className="floating-element element-2"
                animate={{
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                  transition: { duration: 5, repeat: Infinity, repeatType: 'reverse' }
                }}
              />
              <motion.div 
                className="floating-element element-3"
                animate={{
                  x: [0, 10, 0],
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                  transition: { duration: 6, repeat: Infinity, repeatType: 'reverse' }
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
