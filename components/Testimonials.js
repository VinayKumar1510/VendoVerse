'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Anika Patel",
    comment: "VendorVerse helped me discover amazing local sellers I never knew existed!",
  },
  {
    name: "Marcus Lee",
    comment: "Excellent service and super easy checkout. Highly recommended.",
  },
  {
    name: "Sarah Thompson",
    comment: "I love how clean and professional this site looks. Trustworthy vendors too!",
  },
  {
    name: "David Kim",
    comment: "As a seller, onboarding was smooth and I had my first order within a day!",
  },
  {
    name: "Emma Garcia",
    comment: "Real-time chat feature is a game changer. Made shopping personal.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  const changeIndex = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(true);
    }, 150); 
  };

  const handlePrev = () => {
    resetInterval();
    const newIndex = (index - 1 + testimonials.length) % testimonials.length;
    changeIndex(newIndex);
  };

  const handleNext = () => {
    resetInterval();
    const newIndex = (index + 1) % testimonials.length;
    changeIndex(newIndex);
  };

  // Auto slide every 4s
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 150);
    }, 3000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);

  return (
    <section className="py-20 px-6 bg-white text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

      <div className="relative max-w-xl mx-auto">
        <div className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <p className="italic text-gray-700 mb-4">“{testimonials[index].comment}”</p>
            <p className="text-gray-900 font-semibold">– {testimonials[index].name}</p>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0">
          <button
            onClick={handlePrev}
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition"
          >
            <ArrowLeft className='cursor-pointer' size={15} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0">
          <button
            onClick={handleNext}
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition"
          >
            <ArrowRight className='cursor-pointer' size={15} />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
