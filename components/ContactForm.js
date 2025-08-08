'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate API submission here
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 sm:p-10 border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        📬 Get in Touch
      </h2>

      {isSubmitted ? (
        <p className="text-green-600 text-center font-medium text-lg">
          ✅ Your message has been sent!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='text-black'>
              <label className="block mb-1 text-sm font-semibold text-gray-800">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className='text-black'>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className='text-black'>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject of your message"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className='text-black'>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
          >
            ✉️ Send Message
          </button>
        </form>
      )}
    </div>
  );
}
