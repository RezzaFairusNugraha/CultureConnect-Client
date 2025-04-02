import React, { useState, useMemo, useEffect } from "react";
import { IoMdRestaurant } from "react-icons/io";
import { GiCommercialAirplane } from "react-icons/gi";
import { getAllDestinations } from "../../../api";
import Card from "../../Card";

const Collections = ({ category, setCategory }) => {
  const [destinations, setDestinations] = useState([]);
  const [pages, setPages] = useState({ kuliner: 1, wisata: 1 });
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getAllDestinations();
        setDestinations(data);
      } catch (error) {
        console.error("Gagal mengambil data destinasi:", error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const filteredDestinations = useMemo(() => {
    return destinations.filter((item) =>
      category === "kuliner" ? item.category === "Kuliner" : item.category !== "Kuliner"
    );
  }, [category, destinations]);

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
    if (loadingMore) return;
    setLoadingMore(true);

    setTimeout(() => {
      setPages((prevPages) => ({
        ...prevPages,
        [category]: prevPages[category] + 1,
      }));
      setLoadingMore(false);
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
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
      <div className="mt-6">
        {error ? (
          <p className="text-red-500 text-center">Gagal menampilkan rekomendasi.</p>
        ) : loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-200 h-40 rounded-md"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedDestinations.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
      {!error && displayedDestinations.length < filteredDestinations.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className={`bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition-all cursor-pointer ${
              loadingMore ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loadingMore ? (
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