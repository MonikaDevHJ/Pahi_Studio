"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const brands = [
  { name: "kurta1", logo: "/assets/Kurta1.png" },
  
  { name: "Kurta4", logo: "/assets/Kurta4.png" },
  { name: "Kurta5", logo: "/assets/Kurta5.png" },
  { name: "Kurta6", logo: "/assets/Kurta6.png" },
  { name: "Kurta7", logo: "/assets/Kurta7.png" },
  { name: "Kurta8", logo: "/assets/Kurta8.png" },
  { name: "Kurta9", logo: "/assets/Kurta9.png" },
  { name: "Kurta10", logo: "/assets/Kurta10.png" },
  { name: "Kurta11", logo: "/assets/Kurta11.png" },
  { name: "Kurta12", logo: "/assets/Kurta12.png" },
];

const longBrands = [...brands, ...brands];

export default function FashionPage() {
  return (
    <div className="min-h-screen pt-28 pb-10 bg-white flex flex-col items-center px-4 sm:px-6 md:px-10 animate-zoom-in">
      {/* Title Section */}
      <div className="w-full max-w-5xl text-center">
        <div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mt-2"
          style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-500">
            Fashion
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
            PhotoGraphy
          </p>
        </div>

        <div className="mt-5 sm:mt-7">
          <p className="text-base sm:text-lg md:text-2xl font-bold text-gray-500">
            Photos are Your most important Marketing Tool
          </p>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="w-full max-w-7xl mt-16">
        <Marquee pauseOnHover speed={40}>
          {longBrands.map((brand, index) => (
            <div
              key={`row1-${index}`}
              className="flex justify-center items-center p-3 mx-2 sm:mx-4 bg-white border rounded-md shadow-md w-40 sm:w-48 md:w-60 h-28 sm:h-32 md:h-40"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee Row 2 */}
      <div className="w-full max-w-7xl mt-10">
        <Marquee direction="right" pauseOnHover speed={40}>
          {longBrands.map((brand, index) => (
            <div
              key={`row2-${index}`}
              className="flex justify-center items-center p-3 mx-2 sm:mx-4 bg-white border rounded-md shadow-md w-40 sm:w-48 md:w-60 h-28 sm:h-32 md:h-40"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Swiper Autoplay Section */}
      {/* Swiper Autoplay Section */}
      <div className="w-full max-w-7xl mt-28 px-4">
        <div className="mb-6 text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}>
            Explore the Collection
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="w-full bg-white border rounded-md shadow-lg p-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 h-auto md:h-[30rem]">
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-64 md:h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
                    priority
                  />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-sky-500 mb-4">
                    {brand.name}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Elevate your style with our stunning collection. Each piece is crafted to make you feel confident and fashionable. Discover the elegance and charm of our handpicked designs.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}
