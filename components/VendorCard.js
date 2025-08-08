'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function VendorCard({ vendor }) {
  if (!vendor) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-6 border border-gray-200 flex flex-col items-center text-center space-y-3">
      {vendor.logo && (
        <div className="w-24 h-24 relative">
          <Image
            src={vendor.logo}
            alt={vendor.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-md"
          />
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-800">{vendor.name}</h3>
      <p className="text-sm text-gray-500">{vendor.tagline}</p>

      <Link
        href={`/vendors/${vendor.slug}`}
        className="mt-3 inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-indigo-700 transition-all"
      >
        Visit <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );
}
