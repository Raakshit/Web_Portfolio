import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Box, Camera, TrendingUp } from 'lucide-react';

const ExpertiseCard = ({ title, description, icon: Icon, isActive, onClick }) => (
  <motion.div 
    className={`cursor-pointer p-6 rounded-lg transition-all duration-300 ${
      isActive ? 'bg-amber-500 text-white' : 'bg-white text-gray-800 hover:bg-gray-50'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex items-center mb-4">
      <Icon size={24} className={isActive ? 'text-white' : 'text-amber-500'} />
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <AnimatePresence>
      {isActive && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm mt-2"
        >
          {description}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

const Expertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const expertiseAreas = [
    {
      title: "Responsive Web Design",
      description: "Create websites that look great on any device, from desktops to smartphones.",
      icon: Smartphone
    },
    {
      title: "Property Listing Integration",
      description: "Seamlessly integrate and showcase your property listings with advanced search functionality.",
      icon: Box
    },
    {
      title: "Virtual Tour Implementation",
      description: "Engage potential buyers with immersive virtual tours of your properties.",
      icon: Camera
    },
    {
      title: "Lead Generation Optimization",
      description: "Implement strategies to capture and convert more leads for your real estate business.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Why <span className="text-amber-600">Choose Us?</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating powerful online presences for real estate businesses, helping them engage more clients through effective web solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={area.title}
              {...area}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-amber-600 hover:bg-amber-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Get Started with Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;