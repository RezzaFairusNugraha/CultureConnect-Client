import React, { useState, useMemo, useEffect } from "react";
import { IoMdRestaurant } from "react-icons/io";
import { GiCommercialAirplane } from "react-icons/gi";
import { destinations } from "../../../data/destinations";

const Collections = ({ category, setCategory }) => {
  const [pages, setPages] = useState({ kuliner: 1, wisata: 1 });
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  const filteredDestinations = useMemo(() => {
    return destinations.filter((item) =>
      category === "kuliner" ? item.category === "Kuliner" : item.category !== "Kuliner"
    );
  }, [category]);

  const currentPage = pages[category] || 1;

  const displayedDestinations = useMemo(() => {
    return filteredDestinations.slice(0, currentPage * itemsPerPage);
  }, [filteredDestinations, currentPage]);

  useEffect(() => {
    setPages((prevPages) => ({
      ...prevPages,
      [category]: 1,
    }));
  }, [category]);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      setPages((prevPages) => ({
        ...prevPages,
        [category]: prevPages[category] + 1, 
      }));
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="px-30 py-8">
      <nav className="flex space-x-8 border-b border-gray-200 pb-2">
        <button
          onClick={() => setCategory("kuliner")}
          className={`font-semibold flex items-center space-x-2 pb-1 cursor-pointer ${
            category === "kuliner"
              ? "text-gray-800 border-b-2 border-red-500"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          <IoMdRestaurant className="text-xl" />
          <span>Kuliner</span>
        </button>

        <button
          onClick={() => setCategory("wisata")}
          className={`font-semibold flex items-center space-x-2 pb-1 cursor-pointer ${
            category === "wisata"
              ? "text-gray-800 border-b-2 border-red-500"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          <GiCommercialAirplane className="text-xl" />
          <span>Wisata</span>
        </button>
      </nav>

      <div className="mt-6">
        <p className="text-gray-600 mt-1">
          {category === "kuliner"
            ? "Jelajahi berbagai kuliner terbaik dari berbagai daerah."
            : "Temukan destinasi wisata terbaik dan tempat-tempat menarik untuk dikunjungi."}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedDestinations.map((item) => (
          <div key={item.id} className="rounded overflow-hidden shadow-lg p-3 transform transition-transform duration-300">
            <img
              className="w-full rounded h-48 object-cover"
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
            <div className="px-2 py-3">
              <p className="text-right text-sm text-gray-600">{item.location}</p>
              <div className="font-bold text-xl mb-1">{item.name}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="px-5 py-3 text-right">
              <button className="bg-amber-800 hover:bg-amber-700 text-white py-2 px-3 rounded text-sm cursor-pointer">
                Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>

      {displayedDestinations.length < filteredDestinations.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            disabled={loading}
            className={`bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition-all cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></div>
                <span>Loading...</span>
              </div>
            ) : (
              "Muat Lebih Banyak"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Collections;
