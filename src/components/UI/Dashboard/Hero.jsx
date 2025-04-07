import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HeroImage from "/images/bali_view_beside_the_river.png";

function Hero() {
  const defaultPosition = [-6.1754, 106.8272];

  const [position, setPosition] = useState(defaultPosition);
  const [locationName, setLocationName] = useState("Jakarta, Indonesia");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        if (data.address) {
          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Tidak diketahui";
          const state = data.address.state || "Tidak diketahui";
          setLocationName(`${city}, ${state}`);
        }
      } catch (error) {
        console.error("Gagal mendapatkan nama lokasi:", error);
        setError("Gagal mendapatkan nama lokasi.");
      }
    };

    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition([latitude, longitude]);
            fetchLocation(latitude, longitude);
          },
          (error) => {
            console.error("Gagal mendapatkan lokasi:", error);
            setError("Gagal mendapatkan lokasi.");
          }
        );
      }
    };

    getCurrentPosition();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-10">
      <div
        className="relative flex flex-wrap items-center justify-between px-6 md:px-12 lg:px-20 h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center rounded-xl shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <h1 className="relative z-10 text-white text-3xl md:text-4xl lg:text-5xl font-bold w-full md:w-1/2 mb-6 md:mb-0 leading-tight">
          Mau kemana Anda hari ini?
        </h1>

        <div className="relative z-10 flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
          <div className="w-full h-[120px] md:h-[150px] rounded-md overflow-hidden shadow-md">
            <MapContainer
              center={position}
              zoom={13}
              className="w-full h-full"
              key={position}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>Anda berada di sini!</Popup>
              </Marker>
            </MapContainer>
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-3">
            Lokasi Anda
          </h2>
          {error ? (
            <p className="text-sm md:text-base text-red-600">{error}</p>
          ) : (
            <p className="text-sm md:text-base text-gray-600">{locationName}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
