'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SellerForm from '@/components/SellerForm';

export default function BecomeSellerPage() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
      offset: 50,    // trigger offset
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section
        className="pt-40 bg-white py-16 px-4 sm:px-6 lg:px-12 text-center border-b border-white/10"
        data-aos="fade-up"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-black max-w-4xl mx-auto">
          Become a Seller on <span className="text-indigo-800">VendorVerse</span>
        </h1>
        <p
          className="text-base sm:text-lg max-w-3xl mx-auto text-gray-900 px-2"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Launch your online store, reach more customers, and grow your business with ease.
        </p>
        <a
          href="#apply"
          className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-xl shadow-lg transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Get Started
        </a>
      </section>

      {/* Why Sell */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white">
        <h2
          className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-gray-700"
          data-aos="fade-up"
        >
          Why Sell with VendorVerse?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-2">
          {[
            {
              title: 'No Platform Fees',
              desc: 'Keep all your earnings. We take no cut from your sales.',
            },
            {
              title: 'Instant Reach',
              desc: 'Get discovered by thousands of buyers from day one.',
            },
            {
              title: 'Easy Store Management',
              desc: 'Track orders, upload products, and manage your inventory with ease.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl p-6 shadow-[0px_0px_15px_14px_#00000024] transition duration-300 border border-white/10"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <h3 className="text-xl font-bold mb-3 text-indigo-400">{item.title}</h3>
              <p className="text-gray-800 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Form */}
      <section
        id="apply"
        className="py-16 px-4 sm:px-6 lg:px-12 bg-white border-t border-white/10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-black">
          Seller Application
        </h2>
        <div className="max-w-3xl mx-auto px-2" data-aos="zoom-in" data-aos-delay="200">
          <SellerForm />
        </div>
      </section>
    </div>
  );
}
