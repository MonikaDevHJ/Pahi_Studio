'use client';


// BrandSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/Logo1.svg",
  "/Logo2.svg",
  "/Logo3.svg",
  "/Logo4.svg",
  "/Logo5.svg",
  "/Logo6.svg",
  "/Logo7.svg",
  "/Logo8.svg",
];

const SwiperRow = ({ reverse = false }) => (
  <Swiper
    slidesPerView={4}
    spaceBetween={20}
    loop={true}
    modules={[Autoplay]}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: reverse,
    }}
    speed={3000}
    className="mySwiper"
  >
    {logos.map((logo, index) => (
      <SwiperSlide key={index}>
        <div className="flex justify-center items-center h-[100px] bg-white rounded shadow-md p-4">
          <img src={logo} alt={`logo-${index}`} className="h-16 object-contain" />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default function ImageSlider() {
  return (
    <div className="py-10 bg-gray-50">
      {/* Row 1 - left to right */}
      <SwiperRow reverse={false} />

      {/* Row 2 - right to left */}
      <SwiperRow reverse={true} />
    </div>
  );
}
