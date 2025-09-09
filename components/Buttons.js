'use client';

import Link from 'next/link';

// Homepage Buttons
export function StartShoppingButton() {
  return (
    <Link href="/shop">
      <button className="relative cursor-pointer group bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105">
        <span className="relative z-10">🛒 Start Shopping</span>
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition rounded-full"></span>
      </button>
    </Link>
  );
}

export function BecomeSellerButton() {
  return (
    <Link href="/seller">
      <button className="relative cursor-pointer group border border-indigo-600 text-indigo-600 bg-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white shadow-md transition transform hover:scale-105 ">
        <span className="relative z-10">🚀 Become a Seller</span>
        <span className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition rounded-full"></span>
      </button>
    </Link>
  );
}

// Product Buttons
export function AddToCartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
    >
      🛒 Add to Cart
    </button>
  );
}

export function BuyNowButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 hover:text-white transition"
    >
      🚀 Buy Now
    </button>
  );
}

// Pagination Buttons
export function PaginationButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-200 ease-in-out ${
        disabled
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
          : 'bg-neutral-800 text-white hover:bg-neutral-900 hover:shadow-md'
      }`}
    >
      {children}
    </button>
  );
}

// NEW: Vendor Visit Button
export function VisitCompanyButton({ href }) {
  return (
    <Link href={href}>
      <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200 shadow-sm w-full">
        👁️ Visit
      </button>
    </Link>
  );
}

// NEW: Add Product Button
export function AddProductButton({ type = "submit", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
    >
      🚀 Add Product
    </button>
  );
}
