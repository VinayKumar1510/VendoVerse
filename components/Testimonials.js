'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
  return (
    <section className="py-20 px-6 bg-white backdrop-blur border-t border-black/70 text-black text-center">
      <h2 className="text-3xl font-bold mb-10 text-black">What Our Clients Say</h2>

      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div
                data-aos="fade-up"
                className="group relative bg-white/90 border border-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"
                ></div>
                <p className="italic text-gray-700 mb-4">“{t.comment}”</p>
                <p className="text-gray-700 font-semibold">– {t.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

  );
}
