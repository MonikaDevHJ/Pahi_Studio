export default function FashionPage() {
  return (
    <div className="min-h-screen pt-28 bg-white flex justify-center px-4 sm:px-6 md:px-8 animate-zoom-in">
      <div className="w-full max-w-5xl text-center">
        {/* Title */}
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

        {/* Subtext */}
        <div className="mt-5 sm:mt-7">
          <p className="text-base sm:text-lg md:text-2xl font-bold text-gray-500">
            Photos are Your most important Marketing Tool
          </p>
        </div>
      </div>
    </div>
  );
}
