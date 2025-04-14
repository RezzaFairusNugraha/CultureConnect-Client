import React, { useEffect, useState, useRef } from "react";
import { getAllDestinations } from "../../api";
import { MapPin } from "lucide-react";
import clsx from "clsx";
import { initializeMap } from "./MapContainer";
import { addMarkersToMap } from "./MarkerPopupHandler";
import PlaceDetailSidebar from "./PlaceDetailSidebar";

const ContentMaps = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);

  // Initialize map once
  useEffect(() => {
    const map = initializeMap("map");
    mapRef.current = map;

    const fetchDestinations = async () => {
      try {
        const raw = await getAllDestinations();
        const destinations = Object.values(raw);
        addMarkersToMap(map, destinations, setSelectedPlace, null); // userLocation belum ada
      } catch (err) {
        console.error("Gagal memuat destinasi:", err);
      }
    };

    fetchDestinations();

    return () => {
      map.remove();
    };
  }, []);

  // Get user location and add marker
  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setUserLocation(coords);

          map.setView([coords.latitude, coords.longitude], 13);
          

          const userMarker = L.marker([coords.latitude, coords.longitude], {
            icon: L.icon({
              iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
              shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
            }),
          })
            .addTo(map)
            .bindPopup("<strong>Lokasi Anda Sekarang</strong>");
          

          userMarker.on("mouseover", () => userMarker.openPopup());
          userMarker.on("mouseout", () => userMarker.closePopup());
        },
        (error) => {
          console.error("Gagal mendapatkan lokasi pengguna:", error);
          map.setView([-6.90389, 107.61861], 8);
        }
      );
    }
  }, []);

  return (
    <div className="w-full p-6">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="text-amber-500" />
        <h2 className="text-2xl font-semibold text-amber-600">
          Peta Kuliner Dan Wisata Jawa Barat
        </h2>
      </div>

      <div className="relative w-full h-[65vh] rounded-2xl shadow-xl ring-4 ring-amber-300 overflow-hidden">
        <div id="map" className="absolute inset-0 z-0 w-full h-full" />

        <div
          className={clsx(
            "absolute top-0 right-0 h-full w-[320px] transition-transform duration-300",
            selectedPlace ? "translate-x-0" : "translate-x-full"
          )}
        >
          <PlaceDetailSidebar
            selectedPlace={selectedPlace}
            onClose={() => setSelectedPlace(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentMaps;
