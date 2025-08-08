'use client';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import { useCart } from '@/components/CartContext';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen pt-24 px-4 w-full bg-white text-gray-900">
      <h1 className="text-4xl font-extrabold mb-10 text-center tracking-tight text-indigo-700">
        My Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-20">
          Your cart is empty.
        </p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 px-2 md:px-6 w-full max-w-full">
          {/* Cart Items */}
          <div className="flex-1 space-y-6 bg-gray-50 p-6 rounded-lg shadow-md max-h-[75vh] overflow-y-auto">
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
          <aside className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg p-6 sticky top-28 self-start">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
            <CartSummary total={total} />
          </aside>
        </div>
      )}
    </div>
  );
}
