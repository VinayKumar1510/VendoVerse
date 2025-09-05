'use client';
import Image from 'next/image';

export default function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <div className="group relative flex flex-col sm:flex-row items-center justify-between bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out">
      <div className="flex items-center gap-4">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            className="rounded-lg object-cover shadow-sm"
          />
        ) : (
          <div className="w-[100px] h-[100px] bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600">
            No Image
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{item.name}</h2>
          <p className="text-slate-600">₹{item.price}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            className="px-3 py-1 bg-slate-100 border border-slate-300 rounded-md hover:bg-slate-200 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            className="px-3 py-1 bg-slate-100 border border-slate-300 rounded-md hover:bg-slate-200 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            +
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-600 font-semibold hover:underline cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
