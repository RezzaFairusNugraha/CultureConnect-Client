import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getAllDestinations } from "../../api/index";
import { MapPin, X } from "lucide-react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const ContentMaps = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const map = L.map("map").setView([-6.90389, 107.61861], 8);

    L.tileLayer(
      `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${
        import.meta.env.VITE_GEOAPIFY_API_KEY
      }`,
      {
        attribution: "&copy; OpenStreetMap contributors, &copy; Geoapify",
        maxZoom: 20,
      }
    ).addTo(map);

    const fetchDestinations = async () => {
      try {
        const raw = await getAllDestinations();
        const destinations = Object.values(raw);
        const bounds = L.latLngBounds([]);

        destinations.forEach((place) => {
          const { latitude, longitude } = place.coordinate;
          const name = place.name;

          if (latitude && longitude) {
            const marker = L.marker([latitude, longitude]).addTo(map);

            marker.bindPopup(`<strong>${name}</strong>`);

            marker.on("mouseover", function () {
              marker.openPopup();
            });

            marker.on("mouseout", function () {
              marker.closePopup();
            });

            marker.on("click", () => {
              setSelectedPlace(place);
            });

            bounds.extend([latitude, longitude]);
          }
        });

        if (destinations.length > 0) {
          map.fitBounds(bounds);
        }
      } catch (err) {
        console.error("Gagal memuat destinasi:", err);
      }
    };

    fetchDestinations();

    return () => map.remove();
  }, []);

  return (
    <div className="w-full p-6">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="text-amber-500" />
        <h2 className="text-2xl font-semibold text-amber-600">
          Peta Kuliner Dan Wisata Jawa Barat
        </h2>
      </div>

      {/* Wrapper Map + Sidebar */}
      <div className="relative w-full h-[65vh] rounded-2xl shadow-xl ring-4 ring-amber-300 overflow-hidden">
        {/* Map */}
        <div id="map" className="absolute inset-0 z-0 w-full h-full" />

        {/* Sidebar dalam map */}
        <div
          className={clsx(
            "absolute top-0 right-0 h-full w-[320px] bg-white/95 backdrop-blur-md shadow-xl z-20 transition-transform duration-300",
            selectedPlace ? "translate-x-0" : "translate-x-full"
          )}
        >
          {selectedPlace && (
            <div className="flex flex-col h-full p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-amber-600">
                  {selectedPlace.name}
                </h3>
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="text-gray-600 hover:text-red-500"
                >
                  <X />
                </button>
              </div>

              {selectedPlace.imageUrl && (
                <img
                  src={selectedPlace.imageUrl}
                  alt={selectedPlace.name}
                  className="w-full h-36 object-cover rounded-md mb-3"
                />
              )}

              <div className="text-sm text-gray-800 space-y-2 overflow-y-auto">
                <p>
                  <strong>Lokasi:</strong> {selectedPlace.location}
                </p>
                <p>
                  <strong>Kategori:</strong> {selectedPlace.category}
                </p>
                <p>
                  <strong>Rating:</strong> ⭐ {selectedPlace.rating}
                </p>
                <p>{selectedPlace.description}</p>
              </div>

              <div className="mt-auto pt-4">
                <button
                  onClick={() => navigate(`/dashboard/${selectedPlace.id}`)}
                  className="w-full py-2 text-center bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-md transition cursor-pointer"
                >
                  Selengkapnya
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentMaps;
