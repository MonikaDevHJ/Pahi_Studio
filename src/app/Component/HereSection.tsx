import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Homebgimg from "../../../public/assets/Homebgimg.png";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black border  animate-zoom-in ">
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
      <div className="container relative z-10 flex flex-col justify-center h-full px-4 mx-auto mt-48">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-sm tracking-widest text-white uppercase md:text-base">
            WELCOME TO PIXOTO WORLD
          </h2>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl animate-slide-in-out">
            We Are a Digital Photography House
          </h1>



          <ul className="space-y-2">
            <li>
              <Link
                href="/services/ecommerce"
                className="max-w-lg text-base text-gray-300 transition-colors md:text-lg hover:text-sky-400"
              >
                Fashion
              </Link>
            </li>
            <li>
              <Link
                href="/services/fashion"
                className="max-w-lg text-base text-gray-300 transition-colors md:text-lg hover:text-sky-400"
              >
                E-Commerce / Product              </Link>
            </li>
            <li>
              <Link
                href="/services/jewellery"
                className="max-w-lg text-base text-gray-300 transition-colors md:text-lg hover:text-sky-400"
              >
                Jewellery
              </Link>
            </li>
            <li>
              <Link
                href="/services/model"
                className="max-w-lg text-base text-gray-300 transition-colors md:text-lg hover:text-sky-400"
              >
                Model
              </Link>
            </li>
            <li>
              <Link
                href="/services/food-and-drinks"
                className="max-w-lg text-base text-gray-300 transition-colors md:text-lg hover:text-sky-400"
              >
                Food and Drinks
              </Link>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-gray-900 transition-colors rounded-md bg-sky-600 hover:bg-sky-400"
            >
              Get in touch <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 text-white transition-colors bg-transparent border border-white rounded-md hover:bg-sky-400"
            >
              Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute flex space-x-2 bottom-8 right-8">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
      </div>
    </div>
  );
}
