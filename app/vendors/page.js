'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const allVendors = [
  {
    name: 'EcoCrafts',
    logo: '/vendors/ecocrafts.jpg',
    tagline: 'Sustainable Living, Handcrafted with Care.',
    slug: 'ecocrafts',
  },
  {
    name: 'NatureNest',
    logo: '/vendors/naturenest.jpg',
    tagline: 'Eco-friendly home essentials made naturally.',
    slug: 'naturenest',
  },
  {
    name: 'GreenThreads',
    logo: '/vendors/greenthreads.jpg',
    tagline: 'Organic fashion for a conscious lifestyle.',
    slug: 'greenthreads',
  },
  {
    name: 'ClayCasa',
    logo: '/vendors/claycasa.jpg',
    tagline: 'Beautiful handmade pottery & clayware.',
    slug: 'claycasa',
  },
  {
    name: 'Leaf & Loom',
    logo: '/vendors/leafloom.jpg',
    tagline: 'Jute, cotton & natural fiber creations.',
    slug: 'leaf-loom',
  },
  {
    name: 'BambooBay',
    logo: '/vendors/bamboobay.jpg',
    tagline: 'Eco-luxury products crafted from bamboo.',
    slug: 'bamboobay',
  },
  {
    name: 'WoodWonders',
    logo: '/vendors/woodwonders.jpg',
    tagline: 'Handcrafted wooden decor and furniture.',
    slug: 'woodwonders',
  },
  {
    name: 'TerraTotes',
    logo: '/vendors/terratotes.jpg',
    tagline: 'Biodegradable bags for every use.',
    slug: 'terratotes',
  },
];

const vendorsPerPage = 3;

export default function VendorsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allVendors.length / vendorsPerPage);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const getCurrentVendors = () => {
    const start = (currentPage - 1) * vendorsPerPage;
    return allVendors.slice(start, start + vendorsPerPage);
  };

  const currentVendors = getCurrentVendors();

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-28 pb-12 px-4 sm:px-8">
      <h1
        className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-600 mb-10 tracking-tight"
        data-aos="fade-down"
      >
        🌿 Our Trusted Vendors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentVendors.map((vendor, index) => (
          <div
            key={vendor.slug}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col items-center text-center"
          >
            <Image
              src={vendor.logo}
              alt={vendor.name}
              width={96}
              height={96}
              className="rounded-full object-cover shadow-md mb-4 ring-2 ring-gray-100 group-hover:ring-indigo-300 transition"
            />
            <h3 className="text-lg font-semibold text-gray-900">{vendor.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{vendor.tagline}</p>

            <Link
              href={`/vendors/${vendor.slug}`}
              className="mt-4 inline-block bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 hover:shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
            >
              🔎 Visit
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-4">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium rounded-md transition ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          ⬅️ Previous
        </button>

        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-medium rounded-md transition ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}
