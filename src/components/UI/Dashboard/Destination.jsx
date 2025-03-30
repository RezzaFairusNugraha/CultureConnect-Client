// Collections.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { IoMdRestaurant } from "react-icons/io";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdMuseum } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collectionsData } from "./data/dataDashboard";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer
                 bg-white rounded-full shadow flex items-center justify-center w-8 h-8"
      onClick={onClick}
    >
      <AiOutlineRight className="text-gray-700" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer
                 bg-white rounded-full shadow flex items-center justify-center w-8 h-8"
      onClick={onClick}
    >
      <AiOutlineLeft className="text-gray-700" />
    </div>
  );
};

const Collections = ({ category, setCategory }) => {
  const navigate = useNavigate(); // HOOK untuk navigasi

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-6 py-8">
      {/* NAVIGASI KATEGORI */}
      <nav className="flex space-x-8 border-b border-gray-200 pb-2">
        <button
          onClick={() => setCategory && setCategory("kuliner")}
          className={`font-semibold flex items-center space-x-2 pb-1 ${
            category === "kuliner"
              ? "text-gray-800 border-b-2 border-red-500"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          <IoMdRestaurant className="text-xl" />
          <span>Kuliner</span>
        </button>

        <button
          onClick={() => setCategory && setCategory("wisata")}
          className={`font-semibold flex items-center space-x-2 pb-1 ${
            category === "wisata"
              ? "text-gray-800 border-b-2 border-red-500"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          <GiCommercialAirplane className="text-xl" />
          <span>Wisata</span>
        </button>

        <button
          onClick={() => setCategory && setCategory("museum")}
          className={`font-semibold flex items-center space-x-2 pb-1 ${
            category === "museum"
              ? "text-gray-800 border-b-2 border-red-500"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          <MdMuseum className="text-xl" />
          <span>Museum</span>
        </button>
      </nav>

      {/* KOLEKSI */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">Koleksi</h2>
        <p className="text-gray-600 mt-1">
          {category === "kuliner"
            ? "Jelajahi daftar terpilih untuk restoran, kafe, dan bar terbaik."
            : category === "wisata"
            ? "Temukan destinasi wisata terbaik dan tempat-tempat menarik untuk dikunjungi."
            : "Jelajahi museum terbaik yang menyimpan sejarah dan kebudayaan menarik."}
        </p>
      </div>

      {/* SLIDER */}
      <div className="mt-6 relative">
        <Slider {...settings}>
          {collectionsData.map((item, index) => (
            <div key={index} className="px-2">
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/detail/${item.title}`)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.placesCount} Places</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collections;
