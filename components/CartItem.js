'use client';
import Image from 'next/image';

export default function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-all">
      <div className="flex items-center gap-4">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            className="rounded object-cover"
          />
        ) : (
          <div className="w-[100px] h-[100px] bg-gray-300 rounded flex items-center justify-center text-gray-600">
            No Image
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition cursor-pointer"
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition cursor-pointer"
          >
            +
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 font-semibold hover:underline cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
