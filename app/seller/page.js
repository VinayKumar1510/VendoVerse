'use client';

import SellerForm from '@/components/SellerForm';

export default function BecomeSellerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section
        className="pt-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-16 px-4 sm:px-6 lg:px-12 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-gray-900 max-w-4xl mx-auto">
          Become a Seller on <span className="text-blue-600">VendorVerse</span>
        </h1>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700 px-2">
          Launch your online store, reach more customers, and grow your business with ease.
        </p>
        <a
          href="#apply"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl shadow-lg transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Why Sell */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-gray-900">
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
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-md transition duration-300 border border-gray-300"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-600">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Form */}
      <section
        id="apply"
        className="py-16 px-4 sm:px-6 lg:px-12 bg-white border-t border-gray-200"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-gray-900">
          Seller Application
        </h2>
        <div className="max-w-3xl mx-auto px-2">
          <SellerForm />
        </div>
      </section>
    </div>
  );
}
