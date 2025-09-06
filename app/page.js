"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-24 md:py-28 pt-32 md:pt-36"
        data-aos="fade-up"
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 md:h-72 md:w-72 rounded-full blur-3xl bg-indigo-100/40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 md:h-72 md:w-72 rounded-full blur-3xl bg-violet-100/40"
        />

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            Empowering <span className="text-indigo-600">Local Vendors</span> & Shoppers
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 mb-8 leading-relaxed max-w-full md:max-w-xl mx-auto md:mx-0">
            Join <span className="font-semibold text-indigo-600">VendorVerse</span> — a place where you can{" "}
            <span className="font-semibold">sell with ease</span> and{" "}
            <span className="font-semibold">shop with trust</span>. Support local businesses,
            discover unique products, and grow your marketplace.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <Link href="/shop">
              <button className="relative cursor-pointer group bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg shadow-indigo-500/20 text-sm sm:text-base md:text-lg w-full sm:w-auto">
                🛒 Start Shopping
              </button>
            </Link>

            <Link href="/seller">
              <button className="relative cursor-pointer group border border-gray-300 text-gray-800 bg-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-md text-sm sm:text-base md:text-lg w-full sm:w-auto">
                🚀 Become a Seller
              </button>
            </Link>
          </div>

          {/* Extra Info */}
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-slate-500">
            ⚡ Trusted by 10,000+ users | 🌍 Supporting vendors worldwide
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="flex-1 mt-12 md:mt-0 md:ml-12 flex justify-center z-10"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Image
            src="/homeimage.png"
            alt="Local Vendors Marketplace"
            width={400}
            height={400}
            className="drop-shadow-xl rounded-2xl w-60 sm:w-80 md:w-full max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20 sm:py-28 px-4 sm:px-6 bg-[#fffffa] text-gray-800 border-t border-gray-300"
        data-aos="fade-up"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 sm:mb-16 text-gray-900 underline decoration-blue-500 decoration-4 underline-offset-4">
          Why VendorVerse?
        </h2>

        <div className="max-w-3xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 }, // show 2 cards on tablets
              1024: { slidesPerView: 2 }, // show 2 cards on desktop
            }}
          >
            {[
              {
                title: "Secure Payments",
                text: "Encrypted and reliable transactions ensure buyers and sellers feel safe. Enjoy peace of mind knowing your sensitive data is always protected.",
                img: "/placeholder.webp"
              },
              {
                title: "Easy Onboarding",
                text: "Sign up and start selling within minutes effortlessly. Our simple process helps vendors focus on growing their business instead of complex setups.",
                img: "/placeholder.webp"
              },
              {
                title: "Real-Time Chat",
                text: "Instant messaging with buyers or sellers makes communication smooth and transparent. Build trust with real-time conversations before making deals.",
                img: "/placeholder.webp"
              },
              {
                title: "Local Discovery",
                text: "Find nearby vendors and products in your area. Support your local economy while enjoying convenient shopping close to home.",
                img: "/placeholder.webp"
              },
              {
                title: "Fast Delivery",
                text: "Get your products delivered quickly and reliably. Vendors can manage local deliveries easily, ensuring customers receive orders on time.",
                img: "/placeholder.webp"
              },
              {
                title: "Inventory Management",
                text: "Sellers can track stock, update products, and manage listings without hassle. Stay organized and never miss a sale opportunity.",
                img: "/placeholder.webp"
              }
            ]
              .map((feature, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay={idx * 150}
                    className="
              flex flex-col items-center text-center 
              p-6 sm:p-8 
              rounded-3xl border-2 border-blue-600 bg-white shadow-lg
              w-64 sm:w-72 md:w-80 
              min-h-[380px] sm:min-h-[420px] md:min-h-[460px]
              mx-auto
            "
                  >
                    {/* Image */}
                    <div className="mb-6 sm:mb-8">
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        width={150}
                        height={150}
                        className="object-contain drop-shadow-md w-24 sm:w-28 md:w-32"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                      {feature.title}
                    </h3>

                    {/* Text */}
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs">
                      {feature.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>


      {/* How It Works Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 bg-white text-gray-700 border-t border-black/10"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {[
              {
                step: "1. Explore",
                desc: "Browse products from local vendors easily. Discover unique items that support your community while saving money. Navigate categories effortlessly and find exactly what you need within seconds."
              },
              {
                step: "2. Order",
                desc: "Add items to the cart and checkout securely. Our platform ensures safe transactions and multiple payment options. Track your order history and enjoy hassle-free reordering of your favorite products."
              },
              {
                step: "3. Chat",
                desc: "Talk directly with sellers in real-time. Ask questions, negotiate, or request customizations for your orders. Stay connected and build trust with vendors before making a purchase."
              },
              {
                step: "4. Deliver",
                desc: "Enjoy fast, safe deliveries to your doorstep. Our reliable delivery partners ensure your package arrives on time and in perfect condition, giving you peace of mind with every purchase."
              },
            ].map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  className="
              flex flex-col items-center text-center 
              p-6 sm:p-8 
              rounded-3xl border-2 border-blue-600 bg-white shadow-xl
              w-80 sm:w-72 md:w-90 
              min-h-[360px] sm:min-h-[400px] md:min-h-[440px]
              mx-auto
            "
                >
                  {/* Step Text - Larger */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-indigo-600">
                    {item.step}
                  </h3>

                  {/* Description Text - Smaller */}
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials */}
      <div data-aos="fade-up" className="px-4 sm:px-6">
        <Testimonials />
      </div>
    </main>
  );
}
