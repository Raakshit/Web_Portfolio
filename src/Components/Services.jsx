import React from 'react'
import { HomeIcon, WrenchScrewdriverIcon, BriefcaseIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Services = () => {
    const services = [
      { name: 'Website Development', description: 'Custom-built websites tailored for real estate businesses', icon: HomeIcon },
      { name: 'Web Solutions', description: 'Comprehensive solutions for all your web-related queries', icon: WrenchScrewdriverIcon },
      { name: 'Online Presence', description: 'Strategies to optimize and enhance your online visibility', icon: BriefcaseIcon },
      { name: 'Client Engagement', description: 'Tools and features to boost client interaction and conversion', icon: UserGroupIcon },
    ];
  
    return (
      <div className="bg-gradient-to-b py-12 px-2 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"> Our Services</h2>
            <p className="text-base text-blue-500 font-bold tracking-wide text-lg">
              Everything you need for your real estate website
            </p>
          </div>
  
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {services.map((service) => (
                <div key={service.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{service.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  };

export default Services
