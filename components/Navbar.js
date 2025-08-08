'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-3xl bg-white/30 shadow-xl border-b border-white/20 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="text-left">
          <Link href="/" className="text-2xl font-bold text-black">
            VendorVerse
          </Link>
        </div>

        {/* Center: Search Bar (hidden on mobile) */}
        <div className="hidden md:flex justify-center flex-1 px-6">
          <input
            type="text"
            placeholder="Search products or vendors..."
            className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          />
        </div>

        {/* Right: Nav Links and Cart (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4 text-gray-800 font-medium">
          <Link href="/" className="px-3 py-2 rounded-3xl hover:bg-white/50 hover:text-sky-600 transition">Home</Link>
          <Link href="/shop" className="px-3 py-2 rounded-3xl hover:bg-white/50 hover:text-sky-600 transition">Shop</Link>
          <Link href="/vendors" className="px-3 py-2 rounded-3xl hover:bg-white/50 hover:text-sky-600 transition">Vendors</Link>
          <Link href="/contact" className="px-3 py-2 rounded-3xl hover:bg-white/50 hover:text-sky-600 transition">Contact</Link>

          {/* Cart Button */}
          <Link href="/cart" className="relative group">
            <div className="flex items-center space-x-1 px-3 py-2 rounded-3xl border border-transparent hover:border-sky-400 hover:bg-sky-100 transition">
              <ShoppingCart size={20} className="text-gray-700 group-hover:text-sky-600" />
              <span className="text-sm">Cart</span>
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Cart Icon for Mobile */}
          <Link href="/cart" className="text-gray-800 hover:text-sky-600 transition">
            <ShoppingCart size={24} />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transform transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        } bg-gradient-to-br from-purple-300/40 to-purple-500/30 backdrop-blur-xl px-4 pb-4 pt-2 shadow-lg border-t border-white/30 text-gray-900 font-medium rounded-b-xl`}
      >
        <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Home</Link>
        <Link href="/shop" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Shop</Link>
        <Link href="/vendors" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Vendors</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Contact</Link>
        <Link href="/cart" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Cart</Link>
      </div>
    </header>
  );
}
