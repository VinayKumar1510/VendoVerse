'use client';

import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-slate-200 px-6 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-slate-100">VendorVerse</h2>
          <p className="text-sm text-slate-400">
            Empowering local sellers with a modern multi-vendor experience.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-slate-100">Navigation</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/sell" className="hover:text-white transition">
                Sell
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-white transition">
                Profile
              </Link>
            </li>
          </ul>
        </div>


        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-slate-100">Help</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/support" className="hover:text-white transition">
                Support
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-slate-100">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Link href="https://instagram.com/Vinay.kumar_98" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/vinay-kumar-419b09292/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://github.com/VinayKumar1510" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaGithub size={20} />
            </Link>
            <Link href="https://x.com/Vinay88140" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-sm text-slate-400 border-t border-white/10 pt-6">
        &copy; {new Date().getFullYear()} VendorVerse. All rights reserved. <br />
        Developed with ❤️ by <span className="font-semibold text-slate-200">Vinay Kumar</span>
      </div>

    </footer>
  );
}
