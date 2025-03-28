import React from "react";
import HeroImage from "/images/Ilustrasi-kuliner-nusantara.-.jpeg";

function Hero({ name }) {
  return (
    <div>
      <div
        className="h-[450px] lg:h-[300px] relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex justify-center pt-25">
          <h1 className="text-white text-3xl font-bold">
            Hai {name.split(" ")[0]}
          </h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">
            Mau ke mana anda hari ini?
          </h2>
        </div>