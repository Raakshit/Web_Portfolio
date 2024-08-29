import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ContactUs from './ContactUs';
import Banner from "./Components/Banner"
import About from "./Components/About"
import Services from './Components/Services';
import Expertise from './Components/Expertise';
import PreviousWork from './Components/PreviousWork';
import OurImpact from './Components/OurImpact';
import Footer from './Components/Footer';

// HomePage Component
const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Expertise />
      <About />
      <PreviousWork />
      <OurImpact/>
    </div>
  );
};


// Main App Component
const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-xl font-bold text-indigo-600">Real Estate Web Solutions</Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Home</Link>
                <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Contact Us</Link>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="sm:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1">
                  <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
                  <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact Us</Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
};

export default App;