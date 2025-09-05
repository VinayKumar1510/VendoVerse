'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import { useCart } from '@/components/CartContext';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 w-full bg-white text-black">
      <h1
        className="text-4xl font-extrabold mb-10 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-600"
        data-aos="fade-down"
      >
        My Cart
      </h1>

      {cartItems.length === 0 ? (
        <p
          className="text-center text-gray-500 text-lg mt-20"
          data-aos="fade-up"
        >
          Your cart is empty.
        </p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 px-2 md:px-6 w-full max-w-full">
          {/* Cart Items */}
          <div
            className="flex-1 space-y-6 bg-white border border-gray-200 p-6 rounded-xl shadow-[0px_0px_15px_14px_#00000024] max-h-[75vh] overflow-y-auto"
            data-aos="fade-right"
          >
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={(id, qty) => updateQuantity(id, qty)}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          {/* Summary */}
          <aside
            className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-[0px_0px_15px_14px_#00000024] p-6 sticky top-28 self-start"
            data-aos="fade-left"
          >
            <h2 className="text-xl font-semibold mb-4 text-black">Order Summary</h2>
            <CartSummary total={total} />
          </aside>
        </div>
      )}
    </div>
  );
}
