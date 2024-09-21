import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Home, Briefcase, Info, Mail } from 'lucide-react';  // Icons from lucide-react
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
      <section id="banner">
        <Banner />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="previous-work">
        <PreviousWork />
      </section>
      <section id="impact">
        <OurImpact />
      </section>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (section) => {
    const sectionToScroll = document.getElementById(section);
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Brand Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-indigo-600">
                  <Home className="inline-block h-6 w-6 mr-1" />
                  Real Estate Web Solutions
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden sm:flex sm:space-x-6">
                <button
                  onClick={() => scrollToSection('banner')}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  <Briefcase className="h-5 w-5" />
                  <span>Services</span>
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  <Info className="h-5 w-5" />
                  <span>About</span>
                </button>
                <Link
                  to="/contact"
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  <Mail className="h-5 w-5" />
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="sm:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => {
                    scrollToSection('banner');
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Home className="inline-block h-5 w-5 mr-1" />
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection('services');
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Briefcase className="inline-block h-5 w-5 mr-1" />
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection('about');
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Info className="inline-block h-5 w-5 mr-1" />
                  About
                </button>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Mail className="inline-block h-5 w-5 mr-1" />
                  Contact Us
                </Link>
              </div>
            </div>
          </Transition>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;