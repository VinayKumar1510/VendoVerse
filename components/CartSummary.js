'use client';

import Link from 'next/link';

export default function CartSummary({ total }) {
  return (
    <div className="mt-10 p-6 border rounded-md shadow-md bg-gray-50 text-center">
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      <p className="text-lg mb-6">
        Total: <span className="font-bold text-green-600">₹{total.toLocaleString()}</span>
      </p>


      <Link href="/payment" passHref>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow transition-transform duration-200 transform hover:scale-105 cursor-pointer"
        >
          Proceed Now
        </button>
      </Link>

    </div>
  );
}
