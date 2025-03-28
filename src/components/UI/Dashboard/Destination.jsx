import React from "react";
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

const Collections = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
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
      <nav className="flex space-x-8 border-b border-gray-200 pb-2">
        <button className="text-gray-800 font-semibold border-b-2 border-red-500 pb-1 flex items-center space-x-2">
          <IoMdRestaurant className="text-xl" />
          <span>Kuliner</span>
        </button>
        <button className="text-gray-500 hover:text-gray-800 font-semibold flex items-center space-x-2">
          <GiCommercialAirplane className="text-xl" />
          <span>Wisata</span>
        </button>
        <button className="text-gray-500 hover:text-gray-800 font-semibold flex items-center space-x-2">
          <MdMuseum className="text-xl" />
          <span>Museum</span>
        </button>
      </nav>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">Koleksi</h2>
        <p className="text-gray-600 mt-1">
          Jelajahi daftar terpilih untuk restoran, kafe, dan bar terbaik di
          sekitar Delhi NCR, berdasarkan tren.
        </p>
      </div>

      <div className="mt-6 relative">
        <Slider {...settings}>
          {collectionsData.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
