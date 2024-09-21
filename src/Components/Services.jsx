
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Video, Globe, Users } from 'lucide-react';

const ServiceCard = ({ name, description, icon: Icon }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200"
  >
    <div className="flex items-center justify-center w-16 h-16 bg-amber-400 text-gray-900 rounded-full mb-4 mx-auto">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{name}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    { name: 'Website Development', description: 'Custom-built websites tailored for real estate businesses', icon: Home },
    { name: '3D Animated Videos', description: 'Comprehensive solutions for all your Digital Art needs', icon: Video },
    { name: 'Online Presence', description: 'Strategies to optimize and enhance your online visibility', icon: Globe },
    { name: 'Client Engagement', description: 'Tools and features to boost client interaction and conversion', icon: Users },
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
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your real estate business with our comprehensive digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;






//Code with The Hover Effect
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Home, Video, Globe, Users } from 'lucide-react';

// const ServiceCard = ({ name, description, icon: Icon, examples }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className="relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <motion.div 
//         whileHover={{ scale: 1.05 }}
//         className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200"
//       >
//         <div className="flex items-center justify-center w-16 h-16 bg-amber-400 text-gray-900 rounded-full mb-4 mx-auto">
//           <Icon size={24} />
//         </div>
//         <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{name}</h3>
//         <p className="text-gray-600 text-center">{description}</p>
//       </motion.div>
      
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             transition={{ duration: 0.2 }}
//             className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-xl p-4 mt-2 w-full"
//           >
//             <h4 className="font-semibold mb-2">Recent Projects:</h4>
//             <ul className="list-disc pl-5">
//               {examples.map((example, index) => (
//                 <li key={index} className="text-sm text-gray-600">{example}</li>
//               ))}  
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const Services = () => {
//   const services = [
//     { 
//       name: 'Website Development', 
//       description: 'Custom-built websites tailored for real estate businesses', 
//       icon: Home,
//       examples: [
//         'Luxury Condo Marketplace',
//         'Real Estate Agency Portfolio',
//         'Property Management Dashboard'
//       ]
//     },
//     { 
//       name: '3D Animated Videos', 
//       description: 'Comprehensive solutions for all your Digital Art needs', 
//       icon: Video,
//       examples: [
//         'Virtual Property Tour',
//         'Architectural Visualization',
//         'Interactive Floor Plan'
//       ]
//     },
//     { 
//       name: 'Online Presence', 
//       description: 'Strategies to optimize and enhance your online visibility', 
//       icon: Globe,
//       examples: [
//         'SEO Optimization for Realtor',
//         'Social Media Campaign for New Development',
//         'Google My Business Optimization'
//       ]
//     },
//     { 
//       name: 'Client Engagement', 
//       description: 'Tools and features to boost client interaction and conversion', 
//       icon: Users,
//       examples: [
//         'Live Chat Integration',
//         'CRM System for Real Estate',
//         'Automated Email Campaigns'
//       ]
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
//             Our <span className="text-amber-600">Services</span>
//           </h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Elevate your real estate business with our comprehensive digital solutions
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <ServiceCard {...service} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;