import React from 'react';
import ProjectImage1 from "../assests/BannerImage2.jpg"
import ProjectImage2 from "../assests/RealEstateBanner.jpg"


const ProjectCard = ({ title, description, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 flex flex-col h-full">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Project URL
        </a>
      </div>
    </div>
  );

const PreviousWork = () => {
  const projects = [
    {
      title: "Luxury Homes Portal",
      description: "A high-end real estate website showcasing luxury properties with virtual tours.",
      imageUrl: ProjectImage1,
      projectUrl: "https://luxuryhomesportal.example.com"
    },
    {
      title: "Property Management Dashboard",
      description: "An intuitive dashboard for property managers to track rentals and maintenance.",
      imageUrl: ProjectImage2,
      projectUrl: "https://propertydashboard.example.com"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-indigo-300 to-indigo-700 py-12 px-2 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Explore Our Work
          </h2>
          <p className="mt-4 text-xl text-indigo-200 max-w-3xl mx-auto">
            Explore some of our successful projects that have transformed our clients' online presence.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {/* <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View All Projects
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default PreviousWork;