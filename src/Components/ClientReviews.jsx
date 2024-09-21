import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ReviewCard = ({ name, company, review, rating }) => (
  <motion.div 
    whileHover={{ scale: 1.03 }}
    className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center">
        <Quote size={24} className="text-amber-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-amber-400" : "text-gray-300"}
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
    </div>
    <p className="text-gray-600 italic mb-4">"{review}"</p>
    <p className="text-sm text-gray-500">{company}</p>
  </motion.div>
);

const ClientReviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      company: "Luxury Homes Realty",
      review: "The website they created for our agency has dramatically increased our online leads. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Urban Property Group",
      review: "Their 3D animated videos of our properties have set us apart from competitors. Exceptional work!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Sunset Real Estate",
      review: "The team's expertise in SEO has significantly improved our online visibility. We're seeing great results!",
      rating: 4
    },
    {
      name: "David Thompson",
      company: "Thompson & Co. Realtors",
      review: "The client engagement tools they implemented have streamlined our communication process. Very satisfied!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Client <span className="text-amber-600">Reviews</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;