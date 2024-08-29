import React from 'react';
import { DevicePhoneMobileIcon, CubeIcon, PhotoIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const ExpertiseCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
      <Icon className="h-6 w-6 text-indigo-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Responsive Web Design",
      description: "Create websites that look great on any device, from desktops to smartphones.",
      icon: DevicePhoneMobileIcon
    },
    {
      title: "Property Listing Integration",
      description: "Seamlessly integrate and showcase your property listings with advanced search functionality.",
      icon: CubeIcon
    },
    {
      title: "Virtual Tour Implementation",
      description: "Engage potential buyers with immersive virtual tours of your properties.",
      icon: PhotoIcon
    },
    {
      title: "Lead Generation Optimization",
      description: "Implement strategies to capture and convert more leads for your real estate business.",
      icon: ChartBarIcon
    }
  ];

  return (
    <section className="bg-custom_blue py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Why Choose Us s?
          </h2>
          <p className="mt-4 text-xl text-black max-w-3xl mx-auto">
            We specialize in creating powerful online presences for real estate businesses, helping them engage more clients through effective web solutions.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={index} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;