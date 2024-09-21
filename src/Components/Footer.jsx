import React from 'react';
import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Real Estate Web Solutions</h3>
            <p className="text-gray-400 mb-4">Enhancing your online presence in the real estate market.</p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Website Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Content Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Virtual Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Marketing Strategies</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Web Dev Street</p>
            <p className="text-gray-400 mb-2">Internet City, 12345</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400 mb-2">Email: info@realestatewebsolutions.com</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">© 2024 Real Estate Web Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;