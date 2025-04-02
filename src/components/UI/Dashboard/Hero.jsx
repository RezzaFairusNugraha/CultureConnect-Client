import React from "react";
import HeroImage from "/images/bali_view_beside_the_river.png";

function Hero() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <div
        className="relative flex flex-wrap items-center justify-between px-6 md:px-12 lg:px-20 h-[250px] md:h-[300px] lg:h-[350px] bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold w-full md:w-1/2 mb-4 md:mb-0">
          Mau kemana anda hari ini?
        </h1>

        <div className="text-white flex flex-col items-center text-center">
          <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-gray-800 font-bold text-lg md:text-xl">K</span>
          </div>
          <p className="text-base md:text-lg lg:text-xl font-semibold mt-3">
            Karawang
          </p>
          <p className="text-sm md:text-base text-gray-200">
            Jawa Barat, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
