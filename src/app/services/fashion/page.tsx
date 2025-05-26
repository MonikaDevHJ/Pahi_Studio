import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  { name: "kurta1", logo: "/assets/kurta1.png" },
  { name: "Kurta2", logo: "/assets/kurta2.png" },
  { name: "Kurta2", logo: "/assets/kurta3.png" },
  { name: "Kurta2", logo: "/assets/kurta4.png" },
  { name: "Kurta2", logo: "/assets/kurta5.png" },
  { name: "Kurta2", logo: "/assets/kurta6.png" },
  { name: "Kurta2", logo: "/assets/kurta7.png" },
  { name: "Kurta2", logo: "/assets/kurta8.png" },
  { name: "Kurta2", logo: "/assets/kurta9.png" },
  { name: "Kurta2", logo: "/assets/kurta10.png" },
  { name: "Kurta2", logo: "/assets/kurta11.png" },
    { name: "Kurta2", logo: "/assets/kurta12.png" },


];

const longBrands = [...brands, ...brands];

export default function FashionPage() {
  return (
    <div className="min-h-screen pt-28 bg-white flex flex-col items-center px-4 sm:px-6 md:px-8 animate-zoom-in">
      {/* Text Section */}
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

      {/* Marquee Row 1 - Left to Right */}
      <div className="w-full max-w-6xl mt-20">
        <Marquee pauseOnHover speed={40}>
          {longBrands.map((brand, index) => (
            <div
              key={`row1-${index}`}
              className="flex justify-center items-center p-3 mx-4 bg-white border rounded-md shadow-md w-60 h-40"
            >
              {/* relative parent div */}
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill // fills parent div
                  style={{ objectFit: "contain" }}
                  priority={true}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="w-full max-w-6xl mt-10">
        <Marquee direction="right" pauseOnHover speed={40}>
          {longBrands.map((brand, index) => (
            <div
              key={`row2-${index}`}
              className="flex justify-center items-center p-3 mx-4 bg-white border rounded-md shadow-md w-60 h-40"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={true}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
