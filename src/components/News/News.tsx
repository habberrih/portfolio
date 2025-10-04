import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faHandsHelping, faGraduationCap, faPlaneDeparture, faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Category = 'award' | 'volunteer' | 'education' | 'travel';

type NewsItem = {
  id: number;
  category: Category;
  icon: IconDefinition;
  title: string;
  description: string;
  date: string;
  image: string;
  images: string[];
  fullDescription: string;
};

const News = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  React.useEffect(() => {
    if (selectedNews) {
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedNews]);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      category: 'award',
      icon: faTrophy,
      title: 'Bronze Award: 2nd place in Best Graduation Project Competition',
      description: 'Won 2nd place in the Best Graduation Project Competition (Libya Innovation Award) out of 250 participants.',
      date: 'January 2025',
      image: 'https://via.placeholder.com/600x400?text=Libya+Innovation+Award',
      images: [
        'https://via.placeholder.com/1200x800?text=Libya+Innovation+Award+1',
        'https://via.placeholder.com/1200x800?text=Libya+Innovation+Award+2',
        'https://via.placeholder.com/1200x800?text=Libya+Innovation+Award+3'
      ],
      fullDescription: 'I was honored to receive the Bronze Award for my graduation project at the Libya Innovation Award competition. Out of 250 participants from across the country, our project was recognized for its innovative approach to solving real-world problems. The competition was held in January 2025 and featured projects from various fields of technology and science. Our project focused on developing a novel solution using AI and machine learning techniques.'
    },
    {
      id: 2,
      category: 'award',
      icon: faTrophy,
      title: 'Gold Award: Best Academic Poster',
      description: 'Won 1st prize for the best academic poster at the Misuarata University - Information Technology College.',
      date: 'June 2023',
      image: 'https://via.placeholder.com/600x400?text=Academic+Poster+Award',
      images: [
        'https://via.placeholder.com/1200x800?text=Academic+Poster+Award+1',
        'https://via.placeholder.com/1200x800?text=Academic+Poster+Award+2'
      ],
      fullDescription: 'In June 2023, I was awarded the Gold Award for the best academic poster at Misuarata University - Information Technology College. The poster presented my research on Sentiment Analysis of Libyan Dialect Using Machine Learning with Stemming and Stopwords Removal. This recognition highlighted the importance of my work in advancing NLP techniques for Arabic dialects, particularly the Libyan dialect which has been underrepresented in research.'
    },
    {
      id: 3,
      category: 'award',
      icon: faTrophy,
      title: 'Bronze Award: Smart NICU Solution',
      description: 'Won 3rd prize for the development of a Smart NICU solution at the Huawei Tech4Good Global Competition.',
      date: 'January 2022',
      image: 'https://via.placeholder.com/600x400?text=Huawei+Tech4Good',
      images: [
        'https://via.placeholder.com/1200x800?text=Huawei+Tech4Good+1',
        'https://via.placeholder.com/1200x800?text=Huawei+Tech4Good+2',
        'https://via.placeholder.com/1200x800?text=Huawei+Tech4Good+3',
        'https://via.placeholder.com/1200x800?text=Huawei+Tech4Good+4'
      ],
      fullDescription: 'In January 2022, our team won the Bronze Award at the Huawei Tech4Good Global Competition for our Smart NICU solution. This innovative project aimed to improve neonatal care in intensive care units by implementing IoT sensors and real-time monitoring systems. The competition brought together teams from around the world, and we were proud to represent Libya with our solution that addresses critical healthcare challenges.'
    },
    {
      id: 4,
      category: 'award',
      icon: faTrophy,
      title: 'Bronze Award: I-RIA 2023 Competition',
      description: 'Won 3rd prize at the Innovative Research, Invention and Application Exhibition (I-RIA) 2023 Competition in Malaysia.',
      date: 'September 2023',
      image: 'https://via.placeholder.com/600x400?text=I-RIA+2023',
      images: [
        'https://via.placeholder.com/1200x800?text=I-RIA+2023+1',
        'https://via.placeholder.com/1200x800?text=I-RIA+2023+2',
        'https://via.placeholder.com/1200x800?text=I-RIA+2023+3'
      ],
      fullDescription: 'I was honored to receive the Bronze Award at the Innovative Research, Invention and Application Exhibition (I-RIA) 2023 Competition in Malaysia. This international recognition was for my research on Sentiment Analysis of Libyan Dialect Using Machine Learning with Stemming and Stopwords Removal. The competition featured inn'
    },
    {
      id: 5,
      category: 'volunteer',
      icon: faHandsHelping,
      title: 'Volunteer: Youth Tech Mentorship Program',
      description: 'Mentored young students in programming fundamentals and project-based learning.',
      date: 'March 2024',
      image: 'https://via.placeholder.com/600x400?text=Mentorship+Program',
      images: [
        'https://via.placeholder.com/1200x800?text=Mentorship+Program+1',
        'https://via.placeholder.com/1200x800?text=Mentorship+Program+2'
      ],
      fullDescription: 'Volunteered as a mentor for aspiring young developers, guiding them through fundamental concepts in programming and helping them build their first projects.'
    },
    {
      id: 6,
      category: 'education',
      icon: faGraduationCap,
      title: 'Completed Advanced NLP Course',
      description: 'Successfully completed an advanced course in Natural Language Processing.',
      date: 'May 2024',
      image: 'https://via.placeholder.com/600x400?text=Advanced+NLP+Course',
      images: [
        'https://via.placeholder.com/1200x800?text=Advanced+NLP+1'
      ],
      fullDescription: 'This course deepened my understanding of transformer architectures, attention mechanisms, and practical applications of NLP in real-world problems.'
    },
    {
      id: 7,
      category: 'education',
      icon: faGraduationCap,
      title: 'Erasmus+ ICM Program at Sapienza University',
      description: 'Participated in a student exchange at Sapienza University of Rome, Italy.',
      date: 'Sep 2024 - Feb 2025',
      image: 'https://via.placeholder.com/600x400?text=Sapienza+University',
      images: [
        'https://via.placeholder.com/1200x800?text=Sapienza+1',
        'https://via.placeholder.com/1200x800?text=Sapienza+2',
        'https://via.placeholder.com/1200x800?text=Sapienza+3'
      ],
      fullDescription: 'From September 2024 to February 2025, I participated in the Erasmus+ ICM Program as a student exchange at Sapienza University of Rome, Italy. This prestigious opportunity allowed me to expand my knowledge in Computer Science, collaborate with international researchers, and experience a different academic environment. During my time at Sapienza, I took advanced courses in AI, machine learning, and data science, which complemented my research interests.'
    },
    {
      id: 8,
      category: 'travel',
      icon: faPlaneDeparture,
      title: 'Research Visit to Malaysia',
      description: 'Traveled to Malaysia to present research at the Innovative Research, Invention and Application Exhibition (I-RIA) 2023.',
      date: 'September 2023',
      image: 'https://via.placeholder.com/600x400?text=Malaysia+Visit',
      images: [
        'https://via.placeholder.com/1200x800?text=Malaysia+Visit+1',
        'https://via.placeholder.com/1200x800?text=Malaysia+Visit+2',
        'https://via.placeholder.com/1200x800?text=Malaysia+Visit+3',
        'https://via.placeholder.com/1200x800?text=Malaysia+Visit+4'
      ],
      fullDescription: 'In September 2023, I traveled to Malaysia to present my research at the Innovative Research, Invention and Application Exhibition (I-RIA) 2023. This international trip was a significant milestone in my academic journey, allowing me to share my work on Sentiment Analysis of Libyan Dialect with a global audience. During my visit, I had the opportunity to network with researchers from around the world, explore Malaysian culture, and gain valuable feedback on my research.'
    }
  ];

  const [filter, setFilter] = React.useState<Category | 'all'>('all');

  const filteredNews = filter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === filter);

  return (
    <section id="news" className="news">
      <div className="container">
        <div className="section-title">
          <h2>My News & Updates</h2>
        </div>
        
        <div className="news-intro">
          <h3>My Recent Updates, Volunteers, Awards, Adventures & More</h3>
          <p>
            Here are some highlights from my academic journey, professional achievements, volunteer work, and travels.
          </p>
        </div>
        
        <div className="news-filter">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'award' ? 'active' : ''} 
            onClick={() => setFilter('award')}
          >
            Awards
          </button>
          <button 
            className={filter === 'volunteer' ? 'active' : ''} 
            onClick={() => setFilter('volunteer')}
          >
            Volunteer Work
          </button>
          <button 
            className={filter === 'education' ? 'active' : ''} 
            onClick={() => setFilter('education')}
          >
            Education
          </button>
          <button 
            className={filter === 'travel' ? 'active' : ''} 
            onClick={() => setFilter('travel')}
          >
            Travels
          </button>
        </div>
        
        <div className="news-grid">
          {filteredNews.map((item, index) => (
            <motion.div 
              key={item.id}
              className="news-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedNews(item)}
            >
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="news-category">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
              </div>
              <div className="news-content">
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedNews && (
            <motion.div 
              className="news-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
            >
              <motion.div 
                className="news-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={() => setSelectedNews(null)}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                
                <div className="modal-scroll-container">
                  <div className="modal-image-container">
                    <div className="modal-image-wrapper">
                      <img 
                        src={selectedNews.images[currentImageIndex]} 
                        alt={selectedNews.title} 
                        className="modal-image"
                      />
                    
                    {selectedNews.images.length > 1 && (
                      <>
                        <button 
                          className={`image-nav prev`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => 
                              prev === 0 ? selectedNews.images.length - 1 : prev - 1
                            );
                          }}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        
                        <button 
                          className={`image-nav next`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => 
                              prev === selectedNews.images.length - 1 ? 0 : prev + 1
                            );
                          }}
                        >
                          <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                        
                        <div className="image-indicators">
                          {selectedNews.images.map((_, index) => (
                            <span 
                              key={index} 
                              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(index);
                              }}
                            ></span>
                          ))}
                        </div>
                      </>
                    )}
                    </div>
                  </div>
                  
                  <div className="modal-content">
                    <div className="modal-category">
                      <FontAwesomeIcon icon={selectedNews.icon} />
                      <span>{selectedNews.category.charAt(0).toUpperCase() + selectedNews.category.slice(1)}</span>
                    </div>
                    
                    <h2>{selectedNews.title}</h2>
                    <span className="modal-date">{selectedNews.date}</span>
                    <p className="modal-description">{selectedNews.fullDescription}</p>
                    
                    <div className="additional-details">
                      <h3>Additional Details</h3>
                      <p>This section contains additional information about this event or achievement. You can scroll down to view all the content in this modal window. The scrollbar has been styled to match the theme of the website.</p>
                      
                      <h4>Key Highlights</h4>
                      <ul>
                        <li>Important detail about this event</li>
                        <li>Another significant aspect of this achievement</li>
                        <li>People or organizations involved</li>
                        <li>Skills demonstrated or acquired</li>
                      </ul>
                      
                      <h4>Impact</h4>
                      <p>This section describes the impact of this event or achievement on your career, skills, or personal growth. It provides context for why this item is featured in your portfolio.</p>
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
};

export default News;
