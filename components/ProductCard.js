'use client';

import Image from 'next/image';
import { useCart } from './CartContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      style: {
        height: '60px',
        background: '#1f2937',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
      },
      icon: '✅',
    });
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push('/cart');
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl border border-gray-200">
      {/* Product Image */}
      <div className="relative w-full h-56">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-t-2xl text-gray-500">
            No Image Available
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between min-h-[220px]">
        {/* Product Text Content */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{product.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
          <p className="text-xl font-bold text-blue-600 mt-3">₹{product.price}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3 mt-auto">
          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition whitespace-nowrap cursor-pointer"
          >
            🛒 Add to Cart
          </button>

          {/* Buy Now */}
          <button
            onClick={handleBuyNow}
            className="flex-1 border border-blue-700 text-blue-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-white transition whitespace-nowrap cursor-pointer"
          >
            🚀 Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
