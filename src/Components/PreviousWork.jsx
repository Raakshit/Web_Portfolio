import React from 'react';
import ProjectImage1 from "../assests/RealEstateBanner.jpg"
import ProjectImage2 from "../assests/BannerImage2.jpg"

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative overflow-hidden group">
      <img 
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
        src={imageUrl} 
        alt={title} 
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a 
          href={projectUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white text-sm font-semibold py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const PreviousWork = () => {
  const projects = [
    {
      title: "Luxury Homes Portal",
      description: "High-end real estate platform with virtual tours and 3D walkthroughs.",
      imageUrl: ProjectImage1,
      projectUrl: "https://luxuryhomesportal.example.com"
    },
    {
      title: "Property Management Dashboard",
      description: "Intuitive dashboard for tracking rentals, maintenance, and financials.",
      imageUrl: ProjectImage2,
      projectUrl: "https://propertydashboard.example.com"
    },
  ];

  return (
    <section className="bg-custom_blue py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed ideas into impactful digital solutions for our clients in the real estate industry.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousWork;