'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Heart,
  Plane,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

type Category = 'award' | 'volunteer' | 'travel';

type NewsItem = {
  id: number;
  category: Category;
  icon: typeof Trophy;
  title: string;
  description: string;
  date: string;
  image: string;
  images: string[];
  fullDescription: string;
};

type NewsSectionProps = {
  // Optional map of id -> images loaded from public/news/<category>/<id>
  imagesMap?: Record<number, string[]>;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: 'award',
    icon: Trophy,
    title: 'Bronze Award: 2nd place in Best Graduation Project Competition',
    description:
      'Won 2nd place in the Best Graduation Project Competition (Libya Innovation Award) out of 250 participants.',
    date: 'January 2025',
    image: '/libya-innovation-award-ceremony.jpg',
    images: [
      '/libya-innovation-award-ceremony-stage.jpg',
      '/libya-innovation-award-trophy-presentation.jpg',
      '/libya-innovation-award-team-photo.jpg',
    ],
    fullDescription:
      'I was honored to receive the Bronze Award for my graduation project at the Libya Innovation Award competition. Out of 250 participants from across the country, our project was recognized for its innovative approach to solving real-world problems. The competition was held in January 2025 and featured projects from various fields of technology and science. Our project focused on developing a novel solution using AI and machine learning techniques.',
  },
  {
    id: 2,
    category: 'award',
    icon: Trophy,
    title: 'Gold Award: Best Academic Poster',
    description:
      'Won 1st prize for the best academic poster at Misurata University - Information Technology College.',
    date: 'June 2023',
    image: '/academic-poster-presentation.jpg',
    images: [
      '/academic-poster-award-ceremony.jpg',
      '/academic-poster-display.jpg',
    ],
    fullDescription:
      'In June 2023, I was awarded the Gold Award for the best academic poster at Misurata University - Information Technology College. The poster presented my research on Sentiment Analysis of Libyan Dialect Using Machine Learning with Stemming and Stopwords Removal. This recognition highlighted the importance of my work in advancing NLP techniques for Arabic dialects, particularly the Libyan dialect which has been underrepresented in research.',
  },
  {
    id: 3,
    category: 'award',
    icon: Trophy,
    title: 'Bronze Award: Smart NICU Solution',
    description:
      'Won 3rd prize for the development of a Smart NICU solution at the Huawei Tech4Good Global Competition.',
    date: 'January 2022',
    image: '/huawei-tech4good-competition.jpg',
    images: [
      '/huawei-tech4good-award-ceremony.jpg',
      '/smart-nicu-project-demonstration.jpg',
      '/huawei-tech4good-team-presentation.jpg',
      '/huawei-tech4good-trophy.jpg',
    ],
    fullDescription:
      'In January 2022, our team won the Bronze Award at the Huawei Tech4Good Global Competition for our Smart NICU solution. This innovative project aimed to improve neonatal care in intensive care units by implementing IoT sensors and real-time monitoring systems. The competition brought together teams from around the world, and we were proud to represent Libya with our solution that addresses critical healthcare challenges.',
  },
  {
    id: 4,
    category: 'award',
    icon: Trophy,
    title: 'Bronze Award: I-RIA 2023 Competition',
    description:
      'Won 3rd prize at the Innovative Research, Invention and Application Exhibition (I-RIA) 2023 Competition in Malaysia.',
    date: 'September 2023',
    image: '/i-ria-2023-malaysia-competition.jpg',
    images: [
      '/i-ria-2023-award-ceremony-malaysia.jpg',
      '/i-ria-2023-research-presentation.jpg',
      '/placeholder.svg?height=800&width=1200',
    ],
    fullDescription:
      'I was honored to receive the Bronze Award at the Innovative Research, Invention and Application Exhibition (I-RIA) 2023 Competition in Malaysia. This international recognition was for my research on Sentiment Analysis of Libyan Dialect Using Machine Learning with Stemming and Stopwords Removal. The competition featured innovative projects from participants worldwide, and it was a privilege to present my work on such a global stage.',
  },
  {
    id: 5,
    category: 'volunteer',
    icon: Heart,
    title: 'Volunteer: Youth Tech Mentorship Program',
    description:
      'Mentored young students in programming fundamentals and project-based learning.',
    date: 'March 2024',
    image: '/placeholder.svg?height=400&width=600',
    images: [
      '/placeholder.svg?height=800&width=1200',
      '/placeholder.svg?height=800&width=1200',
    ],
    fullDescription:
      'Volunteered as a mentor for aspiring young developers, guiding them through fundamental concepts in programming and helping them build their first projects. This experience was incredibly rewarding as I watched students grow from beginners to confident coders capable of building their own applications.',
  },
  {
    id: 6,
    category: 'travel',
    icon: Plane,
    title: 'Research Visit to Malaysia',
    description:
      'Traveled to Malaysia to present research at the Innovative Research, Invention and Application Exhibition (I-RIA) 2023.',
    date: 'September 2023',
    image: '/placeholder.svg?height=400&width=600',
    images: [
      '/placeholder.svg?height=800&width=1200',
      '/placeholder.svg?height=800&width=1200',
      '/placeholder.svg?height=800&width=1200',
      '/placeholder.svg?height=800&width=1200',
    ],
    fullDescription:
      'In September 2023, I traveled to Malaysia to present my research at the Innovative Research, Invention and Application Exhibition (I-RIA) 2023. This international trip was a significant milestone in my academic journey, allowing me to share my work on Sentiment Analysis of Libyan Dialect with a global audience. During my visit, I had the opportunity to network with researchers from around the world, explore Malaysian culture, and gain valuable feedback on my research.',
  },
];

export function NewsSection({ imagesMap }: NewsSectionProps) {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
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

  // Merge in dynamically discovered images from props
  const enhancedNewsItems: NewsItem[] = useMemo(() => {
    const map = imagesMap || {};
    return newsItems.map((item) => {
      const dynImages = map[item.id];
      const images = dynImages && dynImages.length ? dynImages : item.images;
      const image = images && images.length ? images[0] : item.image;
      return { ...item, images, image };
    });
  }, [imagesMap]);

  const filteredNews =
    filter === 'all'
      ? enhancedNewsItems
      : enhancedNewsItems.filter((item) => item.category === filter);

  return (
    <section id="news" className="py-24 px-6 bg-secondary overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My News & Updates
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-semibold text-foreground/90">
              My Recent Updates, Volunteers, Awards, Adventures & More
            </h3>
            <p className="text-lg text-foreground/70">
              Here are some highlights from my academic journey, professional
              achievements, volunteer work, and travels.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {[
            { value: 'all', label: 'All' },
            { value: 'award', label: 'Awards' },
            { value: 'volunteer', label: 'Volunteer Work' },
            { value: 'travel', label: 'Travels' },
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

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {filteredNews.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedNews(item)}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image || '/placeholder.svg'}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="block text-sm text-foreground/60 mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedNews && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
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
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 hover:bg-background flex items-center justify-center z-10 transition-all hover:rotate-90"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="overflow-y-auto flex-1 overflow-x-hidden">
                  {/* Image Carousel */}
                  <div className="relative h-[500px] flex-shrink-0">
                    <img
                      src={
                        selectedNews.images[currentImageIndex] ||
                        '/placeholder.svg'
                      }
                      alt={selectedNews.title}
                      className="w-full h-full object-cover"
                    />

                    {selectedNews.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) =>
                              prev === 0
                                ? selectedNews.images.length - 1
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
                              prev === selectedNews.images.length - 1
                                ? 0
                                : prev + 1
                            );
                          }}
                          className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        <div className="absolute bottom-5 left-0 w-full flex justify-center gap-2.5">
                          {selectedNews.images.map((_, index) => (
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
                        const Icon = selectedNews.icon;
                        return <Icon className="w-4 h-4" />;
                      })()}
                      <span className="capitalize">
                        {selectedNews.category}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold mb-2.5 text-foreground">
                      {selectedNews.title}
                    </h2>
                    <span className="block text-base text-foreground/60 mb-5">
                      {selectedNews.date}
                    </span>
                    <p className="text-base leading-relaxed text-foreground/70 mb-8">
                      {selectedNews.fullDescription}
                    </p>

                    <div className="mt-10 pt-8 border-t border-border">
                      <h3 className="text-2xl font-bold mb-4">
                        Additional Details
                      </h3>
                      <p className="mb-5 leading-relaxed text-foreground/70">
                        This section contains additional information about this
                        event or achievement. The modal provides a comprehensive
                        view of the accomplishment with multiple images and
                        detailed descriptions.
                      </p>

                      <h4 className="text-xl font-semibold mt-6 mb-4">
                        Key Highlights
                      </h4>
                      <ul className="ml-5 mb-5 space-y-2.5">
                        <li className="text-foreground/70">
                          Important detail about this event
                        </li>
                        <li className="text-foreground/70">
                          Another significant aspect of this achievement
                        </li>
                        <li className="text-foreground/70">
                          People or organizations involved
                        </li>
                        <li className="text-foreground/70">
                          Skills demonstrated or acquired
                        </li>
                      </ul>

                      <h4 className="text-xl font-semibold mt-6 mb-4">
                        Impact
                      </h4>
                      <p className="leading-relaxed text-foreground/70">
                        This section describes the impact of this event or
                        achievement on career development, skills enhancement,
                        or personal growth. It provides context for why this
                        item is featured in the portfolio.
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
