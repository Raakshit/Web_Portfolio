import React from 'react';
import Bannerimage from "../assests/Banner_Image.jpg"

const Banner = () => {
  return (
    <div
      className="relative bg-gray-900 overflow-hidden"
      style={{
        backgroundImage: `url(${Bannerimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Full viewport height for the banner
      }}
    >
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <main className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-300 sm:text-5xl md:text-6xl">
            <span className="block">Your Digital Showcase for Web</span>{' '}
            <span className="block text-indigo-600">Solutions</span>
          </h1>
          <p className="mt-3 font-bold text-base text-gray-200 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
          Elevate your online presence and attract clients with our tailored websites
          </p>
          <div className="mt-5 sm:mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="Home"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Banner;
