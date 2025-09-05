'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ProductList from '@/components/ProductList';
import { PaginationButton } from '@/components/Buttons';
import { useCartStore } from '@/lib/cartStore'; // ✅ Zustand store

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsPerPage = 8;
  const addToCart = useCartStore((state) => state.addToCart);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  // ✅ Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch('/api/products', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch products');

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : data.products || []);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Pagination logic
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  // ✅ Cart functions
  const handleAddToCart = (product) => addToCart(product);

  const handleBuyNow = (product) => {
    addToCart(product);
    window.location.href = '/cart';
  };

  // ✅ Pagination buttons
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-700">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-violet-800 to-sky-700 mb-12 drop-shadow-md"
          data-aos="fade-down"
        >
          🛍️ Explore VendorVerse Products
        </h1>

        {/* ✅ Loading / Error / Empty States */}
        {loading && (
          <p className="text-center text-slate-400" data-aos="fade-up">
            Loading products...
          </p>
        )}
        {error && (
          <p className="text-center text-red-400" data-aos="fade-up">
            {error}
          </p>
        )}
        {!loading && !error && products.length === 0 && (
          <p className="text-center text-slate-400" data-aos="fade-up">
            No products available
          </p>
        )}

        {/* ✅ Product List */}
        {!loading && !error && products.length > 0 && (
          <>
            <div data-aos="zoom-in" data-aos-delay="200">
              <ProductList
                products={currentProducts}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            </div>

            {/* ✅ Pagination */}
            {totalPages > 1 && (
              <div
                className="flex justify-center items-center gap-4 mt-10"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <PaginationButton onClick={handlePrevious} disabled={currentPage === 1}>
                  ⬅️ Previous
                </PaginationButton>

                <span className="text-lg font-medium text-slate-700">
                  Page {currentPage} of {totalPages}
                </span>

                <PaginationButton onClick={handleNext} disabled={currentPage === totalPages}>
                  Next ➡️
                </PaginationButton>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
