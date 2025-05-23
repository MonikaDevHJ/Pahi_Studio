import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Homebgimg from "../../../public/assets/Homebgimg.png";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black border animate-zoom-in">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Homebgimg}
          alt="Photographer with camera"
          fill
          className="object-cover opacity-70 animate-zoom-in"
          priority
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col justify-center h-full px-4 mx-auto pt-48 sm:pt-60 md:pt-52 lg:pt-44">
        <div className="max-w-3xl">
          <h2 className="mb-4 text-md tracking-widest text-white uppercase sm:text-sm md:text-base">
            WELCOME TO PIXOTO WORLD
          </h2>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-sky-500 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-wrap gap-2">
            {["We", "Are", "a", "Digital", "Photography", "House"].map((word, index) => (
              <span
                key={index}
                className="animate-word-fade"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <ul className="space-y-3 mb-6">
            {[
              { name: "Fashion", href: "/services/fashion" },
              { name: "E-Commerce / Product", href: "/services/ecommerce" },
              { name: "Jewellery", href: "/services/jewllery" },
              { name: "Model", href: "/services/moden" },
              { name: "Food and Drinks", href: "/services/foodanddrinks" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-white font-semibold text-3xl sm:text-xl md:text-2xl lg:text-3xl transition-colors hover:text-sky-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-3 text-sm sm:text-base text-gray-900 bg-sky-600 hover:bg-sky-400 rounded-md transition-colors"
            >
              Get in touch <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center px-5 py-3 text-sm sm:text-base text-white border border-white rounded-md hover:bg-sky-400 transition-colors"
            >
              Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute flex space-x-2 bottom-6 right-6">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
      </div>
    </div>
  );
}
