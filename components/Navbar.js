'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white shadow-xl border-b border-black/50 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-gray-700">

        {/* Left: Logo */}
        <div className="text-left">
          <Link href="/" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-600">
            VendorVerse
          </Link>
        </div>

        {/* Right: Nav Links and Cart (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4 text-gray-900 font-semibold text-xl">
          <Link href="/" className="px-3 py-2 rounded-3xl hover:bg-white/10 hover:text-blue-700 transition">Home</Link>
          <Link href="/shop" className="px-3 py-2 rounded-3xl hover:bg-white/10 hover:text-blue-700 transition">Shop</Link>
          <Link href="/vendors" className="px-3 py-2 rounded-3xl hover:bg-white/10 hover:text-blue-700 transition">Vendors</Link>
          <Link href="/contact" className="px-3 py-2 rounded-3xl hover:bg-white/10 hover:text-blue-700 transition">Contact</Link>

          {/* Cart Button */}
          <Link href="/cart" className="relative group">
            <div className="flex items-center space-x-1 px-3 py-2 rounded-3xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition">
              <ShoppingCart size={20} className="text-gray-800 group-hover:text-gray-700" />
              <span className="text-sm">Cart</span>
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center space-x-3 text-gray-900">
          {/* Cart Icon for Mobile */}
          <Link href="/cart" className="hover:text-gray-700 transition">
            <ShoppingCart size={24} />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transform transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        } bg-white backdrop-blur-xl px-4 pb-4 pt-2 shadow-lg border-t border-black/90 text-gray-900 font-medium rounded-b-xl`}
      >
        <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue/10">Home</Link>
        <Link href="/shop" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue/10">Shop</Link>
        <Link href="/vendors" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue/10">Vendors</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue/10">Contact</Link>
        <Link href="/cart" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded hover:bg-blue/10">Cart</Link>
      </div>
    </header>
  );
}
