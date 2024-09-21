import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-white min-h-screen py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-amber-800 sm:text-5xl mb-2">
            Let's Connect
          </h2>
          <p className="text-xl text-amber-700">
            We're here to turn your ideas into reality
          </p>
        </div>
        
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-amber-800 mb-6">Send us a message</h3>
              {showAlert && (
                <div className="mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-r" role="alert">
                  <p className="font-bold">Success!</p>
                  <p>Your message has been sent. We'll get back to you soon.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-700">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-amber-400 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-6">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@example.com
                  </li>
                  <li className="flex items-center text-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (555) 123-4567
                  </li>
                  <li className="flex items-center text-amber-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    123 Business Ave, Suite 100, City, State 12345
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-amber-900 mb-4">Office Hours</h4>
                <p className="text-amber-800">Monday - Friday: 9am - 5pm</p>
                <p className="text-amber-800">Saturday: 10am - 2pm</p>
                <p className="text-amber-800">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;