'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useCart } from '@/components/CartContext';
import PaymentForm from '@/components/PaymentForm';

export default function PaymentPage() {
  const { cartItems } = useCart();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div
        className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-black px-4 sm:px-6 md:px-8 pt-24"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
          Your cart is empty.
        </h2>
        <a
          href="/cart"
          className="text-indigo-600 hover:text-indigo-500 font-medium transition text-lg sm:text-xl"
        >
          Go to Cart
        </a>
      </div>
    );
  }

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 md:px-12 flex justify-center text-black">
      <div
        className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-[0px_0px_15px_14px_#00000024] p-4 sm:p-6 md:p-8"
        data-aos="fade-up"
      >
        {/* Payment Summary Header */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left"
          data-aos="fade-down"
        >
          Payment Summary
        </h1>

        {/* Cart Items */}
        <div className="mb-6 sm:mb-8">
          <h2
            className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6"
            data-aos="fade-right"
          >
            Your Cart
          </h2>
          <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md bg-gray-50">
            {cartItems.map((item) => (
              <li
                key={item._id || item.id}
                className="flex flex-col sm:flex-row justify-between p-3 sm:p-4 text-gray-700 hover:bg-gray-100 transition"
                data-aos="fade-left"
              >
                <span className="text-sm sm:text-base mb-1 sm:mb-0">
                  {item.name}{' '}
                  <span className="text-xs sm:text-sm text-gray-500">
                    x {item.quantity}
                  </span>
                </span>
                <span className="font-medium text-sm sm:text-base">
                  ₹{item.price * item.quantity}
                </span>
              </li>
            ))}
            <li
              className="flex justify-between p-3 sm:p-4 font-semibold bg-gray-100 rounded-b-md text-sm sm:text-base"
              data-aos="fade-up"
            >
              <span>Total</span>
              <span>₹{total}</span>
            </li>
          </ul>
        </div>

        {/* Payment Form */}
        <div data-aos="zoom-in" className="mt-6">
          <PaymentForm cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}
