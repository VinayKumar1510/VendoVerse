'use client';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-28 sm:py-36 text-center bg-gradient-to-br from-indigo-300 to-purple-500 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 drop-shadow-xl tracking-tight">
            Welcome to VendorVerse
          </h1>


          <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 text-white leading-relaxed">
            Discover a thriving community of local vendors offering handpicked, unique products. Shop with confidence, support small businesses, and find treasures you won&apos;t get anywhere else.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <Link href="/shop">
              <button className="relative cursor-pointer group bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <span className="relative z-10">🛒 Start Shopping</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition rounded-full"></span>
              </button>
            </Link>

            <Link href="/seller">
              <button className="relative cursor-pointer group border border-indigo-600 text-indigo-600 bg-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white shadow-md transition transform hover:scale-105">
                <span className="relative z-10">🚀 Become a Seller</span>
                <span className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition rounded-full"></span>
              </button>
            </Link>
          </div>

          {/* Extra Info */}
          <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-200">
            <p>⚡ Trusted by 10,000+ users | 🌍 Supporting local vendors globally</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white/90 text-gray-900">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Why VendorVerse?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Secure Payments', text: 'Fast and safe transactions with full transparency.', color: 'bg-pink-200' },
              { title: 'Easy Onboarding', text: 'Start selling with just a few clicks.', color: 'bg-blue-200' },
              { title: 'Real-Time Chat', text: 'Buyers and sellers can communicate instantly.', color: 'bg-green-200' },
              { title: 'Mobile Friendly', text: 'Beautiful responsive UI for all devices.', color: 'bg-yellow-200' },
              { title: 'Wishlist & Save', text: 'Save products with one-click wishlist.', color: 'bg-purple-200' },
              { title: 'Analytics for Sellers', text: 'Track orders, revenue & engagement.', color: 'bg-red-200' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`${feature.color} p-6 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out shadow-[0px_4px_16px_rgba(17,17,26,0.1)]`}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100 text-gray-900">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
            {[
              { step: '1. Explore', desc: 'Browse thousands of products from local vendors.', color: 'bg-blue-100', hover: 'hover:bg-blue-200' },
              { step: '2. Order', desc: 'Add to cart and checkout with secure payment.', color: 'bg-green-100', hover: 'hover:bg-green-200' },
              { step: '3. Chat', desc: 'Talk directly with sellers.', color: 'bg-yellow-100', hover: 'hover:bg-yellow-200' },
              { step: '4. Deliver', desc: 'Fast shipping and easy tracking.', color: 'bg-red-100', hover: 'hover:bg-red-200' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-6 ${item.color} ${item.hover} rounded-xl shadow-md transform hover:scale-105 transition-all duration-300 ease-in`}
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2">{item.step}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />
      </main>
    </>
  );
}
