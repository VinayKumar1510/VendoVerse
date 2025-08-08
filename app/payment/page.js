'use client';

import { useCart } from '@/components/CartContext';
import PaymentForm from '@/components/PaymentForm';

export default function PaymentPage() {
  const { cartItems } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-600 px-4 pt-24">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty.</h2>
        <a
          href="/cart"
          className="text-indigo-600 hover:text-indigo-800 font-medium transition"
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
    <div className="min-h-screen bg-white pt-24 px-4 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">
          Payment Summary
        </h1>

        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
            Your Cart
          </h2>
          <ul className="divide-y divide-gray-200 border border-gray-300 rounded-md">
            {cartItems.map((item) => (
              <li
                key={item._id || item.id}
                className="flex justify-between p-3 sm:p-4 text-gray-700 hover:bg-gray-50 transition"
              >
                <span className="text-sm sm:text-base">
                  {item.name}{' '}
                  <span className="text-xs sm:text-sm text-gray-500">x {item.quantity}</span>
                </span>
                <span className="font-medium text-sm sm:text-base">
                  ₹{item.price * item.quantity}
                </span>
              </li>
            ))}
            <li className="flex justify-between p-3 sm:p-4 font-semibold text-gray-900 bg-gray-100 rounded-b-md text-sm sm:text-base">
              <span>Total</span>
              <span>₹{total}</span>
            </li>
          </ul>
        </div>

        <PaymentForm cartItems={cartItems} />
      </div>
    </div>
  );
}
