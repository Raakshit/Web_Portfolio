import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Globe } from 'lucide-react';

const Banner = () => {

  const navigate = useNavigate();

  const scrollToContactUs = () => {
    navigate('/contact')
  }

  const scrollToPreviousWork = () => {
    const aboutSection = document.getElementById('previous-work');
    if(aboutSection){
      aboutSection.scrollIntoView({behavior: 'smooth'})
    }
  }


  return (
    <div className="relative overflow-hidden h-screen flex items-center justify-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: "brightness(50%) saturate(120%)"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6"
        >
          Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">World</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10"
        >
          Elevating business showcases with bespoke web solutions that captivate and convert.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={scrollToPreviousWork}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-amber-400 hover:bg-amber-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            View Our Projects
            <Home className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={scrollToContactUs}
            className="inline-flex items-center justify-center px-8 py-3 border border-amber-400 text-base font-medium rounded-full text-amber-400 bg-transparent hover:bg-amber-400 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            Get a Free Quote
            <Globe className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-amber-300 rounded-full opacity-50"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
