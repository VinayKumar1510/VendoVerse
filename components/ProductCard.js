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
    <div className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      {/* Product Image */}
      <div className="relative w-full h-56 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl transform transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-slate-100 rounded-t-2xl text-slate-500">
            No Image Available
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between min-h-[220px]">
        {/* Product Text Content */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 mb-1 truncate">{product.name}</h3>
          <p className="text-sm text-slate-600 line-clamp-2">{product.description}</p>
          <p className="text-xl font-bold text-indigo-600 mt-3">₹{product.price}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3 mt-auto">
          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-indigo-700 hover:shadow-md transition whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            🛒 Add to Cart
          </button>

          {/* Buy Now */}
          <button
            onClick={handleBuyNow}
            className="flex-1 border border-indigo-600 text-indigo-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 hover:text-white transition whitespace-nowrap cursor-pointer bg-white/50 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            🚀 Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
