import React from "react";
import HeroImage from "/images/bali_view_beside_the_river.png";

function Hero() {
  return (
    <div
      className="relative flex items-center justify-between px-6 md:px-12 lg:px-20 h-[250px] md:h-[300px] lg:h-[350px] bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold w-3/4 md:w-1/2">
        Mau kemana anda hari ini?
      </h1>
      
      <div className="text-white flex flex-col items-center text-center">
        <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] bg-white rounded-md mt-2"></div>
        <p className="text-base md:text-lg lg:text-xl font-semibold mt-2">Karawang</p>
        <p className="text-sm md:text-base">Jawa Barat, Indonesia</p>
      </div>
    </div>
  );
}

export default Hero;