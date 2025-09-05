'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function VendorCard({ vendor }) {
  if (!vendor) return null;

  return (
    <div className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col items-center text-center space-y-3">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      {vendor.logo && (
        <div className="w-24 h-24 relative">
          <Image
            src={vendor.logo}
            alt={vendor.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-md ring-2 ring-slate-200 group-hover:ring-indigo-300/70 transition"
          />
        </div>
      )}

      <h3 className="text-xl font-bold text-slate-900">{vendor.name}</h3>
      <p className="text-sm text-slate-600">{vendor.tagline}</p>

      <Link
        href={`/vendors/${vendor.slug}`}
        className="mt-3 inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        Visit <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );
}
