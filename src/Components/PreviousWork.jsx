// import React from 'react';
import ProjectImage1 from "../assests/RealEstateBanner.jpg"
import ProjectImage2 from "../assests/BannerImage2.jpg"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, imageUrl, projectUrl, tech }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" 
          src={imageUrl} 
          alt={title} 
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-between p-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((item, index) => (
                    <span key={index} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={projectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-colors duration-300"
              >
                <ExternalLink size={20} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const PreviousWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      title: "Luxury Homes Portal",
      description: "High-end real estate platform with virtual tours and 3D walkthroughs.",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      projectUrl: "https://luxuryhomesportal.example.com",
      tech: ["React", "Three.js", "Node.js"]
    },
    {
      title: "Property Management Dashboard",
      description: "Intuitive dashboard for tracking rentals, maintenance, and financials.",
      imageUrl: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      projectUrl: "https://propertydashboard.example.com",
      tech: ["Vue.js", "D3.js", "Express"]
    },
    {
      title: "Real Estate Market Analytics",
      description: "Advanced analytics platform for real-time market insights and predictions.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      projectUrl: "https://marketanalytics.example.com",
      tech: ["React", "Python", "TensorFlow"]
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="bg-[#EAEAEA] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Our <span className="text-amber-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed ideas into impactful digital solutions for our clients in the real estate industry.
          </p>
        </motion.div>
        <div className="relative">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button 
              onClick={prevProject} 
              className="mx-2 p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextProject} 
              className="mx-2 p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousWork;