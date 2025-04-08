import React, { useState } from "react";
import axios from "axios";
import { formatIndonesianAddress } from "./Data/translate";

const SearchLocationModal = ({ show, onClose, onSelectLocation }) => {
  const [inputValue, setInputValue] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length >= 3) {
      setIsSearching(true);
      try {
        const res = await axios.get(
          "https://nominatim.openstreetmap.org/search",
          {
            params: {
              q: value,
              format: "json",
              addressdetails: 1,
              limit: 5,
              countrycodes: "id",
              accept_language: "id",
            },
          }
        );
        setPredictions(res.data);
      } catch (error) {
        console.error("Pencarian gagal:", error);
        setPredictions([]);
      } finally {
        setIsSearching(false);
      }
    } else {
      setPredictions([]);
    }
  };

  const handleSelect = (place) => {
    const address = formatIndonesianAddress(place.address);

    const location = {
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
      address: address,
      name: address,
    };

    onSelectLocation(location);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative bg-white w-full max-w-md rounded-lg shadow-lg p-4 max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cari Lokasi</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Masukkan alamat lengkap"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={inputValue}
            onChange={handleInputChange}
            autoFocus
          />
          {isSearching && (
            <div className="absolute right-3 top-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
            </div>
          )}
        </div>

        <div className="border-t pt-2 max-h-[60vh] overflow-y-auto">
          {predictions.length > 0 ? (
            <ul className="divide-y">
              {predictions.map((place, index) => (
                <li
                  key={index}
                  className="py-3 px-2 hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleSelect(place)}
                >
                  <div className="font-medium">
                    {formatIndonesianAddress(place.address)}
                  </div>
                </li>
              ))}
            </ul>
          ) : inputValue.length > 2 ? (
            <div className="text-center py-10 text-gray-500">
              {isSearching ? "Mencari..." : "Lokasi tidak ditemukan"}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-500">
              Ketik minimal 3 karakter untuk mencari
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchLocationModal;
