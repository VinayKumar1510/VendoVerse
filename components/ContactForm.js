'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 md:p-8">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-[0px_0px_15px_14px_#00000024]"
        data-aos="fade-up"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8"
          data-aos="fade-down"
        >
          📬 Get in Touch
        </h2>

        {isSubmitted ? (
          <p className="text-green-600 text-center font-medium text-lg sm:text-xl" data-aos="zoom-in">
            ✅ Your message has been sent!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div data-aos="fade-right">
                <label className="block mb-1 text-sm sm:text-base font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-2 sm:py-3 rounded-md border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm sm:text-base"
                />
              </div>

              <div data-aos="fade-left">
                <label className="block mb-1 text-sm sm:text-base font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 sm:py-3 rounded-md border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Subject */}
            <div data-aos="fade-up">
              <label className="block mb-1 text-sm sm:text-base font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject of your message"
                className="w-full px-4 py-2 sm:py-3 rounded-md border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* Message */}
            <div data-aos="fade-up">
              <label className="block mb-1 text-sm sm:text-base font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 sm:py-3 rounded-md border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm sm:text-base"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              data-aos="zoom-in"
              className="w-full py-3 sm:py-4 px-6 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm sm:text-base md:text-lg hover:scale-[1.02] hover:shadow-lg transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              ✉️ Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
