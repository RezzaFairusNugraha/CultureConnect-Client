import React from "react";
import HeroImage from "/images/Ilustrasi-kuliner-nusantara.jpeg";

function Hero({ name }) {
  return (
    <div className="relative h-[450px] lg:h-[300px]">
      {/* Background dengan gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Container untuk teks yang di-center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold mb-4">
          Hai {name.split(" ")[0]}
        </h1>
        <h2 className="text-white text-3xl font-bold">
          Mau ke mana anda hari ini?
        </h2>
      </div>
    </div>
  );
}

export default Hero;
