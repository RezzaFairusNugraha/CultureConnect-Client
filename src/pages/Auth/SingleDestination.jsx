import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDestinationById,
  saveDestination,
  getSavedDestinations,
  deleteSavedDestination,
} from "../../api";
import LayoutAuth from "../../components/Layout/AuthLayout";
import {
  FaArrowLeft,
  FaBookmark,
  FaRegBookmark,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";
import { useAuth } from "../../context/UseAuth";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
import L from "leaflet";
import { getAllDestinations } from "../../api/index";

const SingleDestination = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const userId = user?.id;
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bookmarked, setBookmarked] = useState(false);
  // eslint-disable-next-line
  const [bookmarkLoading, setBookmarkLoading] = useState(false);
  const [tempIcon, setTempIcon] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchDestinationData = async () => {
      try {
        const data = await getDestinationById(id);
        setDestination(data);

        if (userId) {
          const saved = await getSavedDestinations(userId);
          const isSaved = saved.some((item) => item.destination.id === id);
          setBookmarked(isSaved);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinationData();
  }, [id, userId]);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const data = await getAllDestinations();
        const destinations = Object.values(data);
        const found = destinations.find((d) => String(d.id) === String(id));
        setDestination(found || null);
      } catch (error) {
        console.error("Gagal mengambil data destinasi:", error);
      }
    };

    fetchDestination();
  }, [id]);

  useEffect(() => {
    if (!destination || !destination.coordinate) return;

    const { latitude, longitude } = destination.coordinate;

    const initMap = async () => {
      const mapContainer = document.getElementById("map");
      if (!mapContainer) {
        setTimeout(initMap, 100);
        return;
      }

      const map = L.map(mapContainer).setView([latitude, longitude], 13);

      L.tileLayer(
        `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${
          import.meta.env.VITE_GEOAPIFY_API_KEY
        }`,
        {
          attribution: "&copy; OpenStreetMap contributors, &copy; Geoapify",
          maxZoom: 20,
        }
      ).addTo(map);

      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(`<strong>${destination.name}</strong>`)
        .openPopup();

      try {
        const raw = await getAllDestinations();
        const all = Object.values(raw);
        all.forEach((place) => {
          const { latitude: lat, longitude: lon } = place.coordinate;
          if (lat && lon && !(lat === latitude && lon === longitude)) {
            L.marker([lat, lon])
              .addTo(map)
              .bindPopup(`<strong>${place.name}</strong>`);
          }
        });
      } catch (err) {
        console.error("Gagal memuat semua destinasi:", err);
      }
    };

    initMap();
  }, [destination]);

  if (!destination) {
    return (
      <div className="p-6 text-center text-gray-500">Memuat destinasi...</div>
    );
  }

  const toggleBookmark = async () => {
    if (!userId) return;

    try {
      setBookmarkLoading(true);
      setTempIcon(<FaSpinner className="animate-spin" />);

      if (bookmarked) {
        await deleteSavedDestination(userId, destination.id);
        setBookmarked(false);
      } else {
        await saveDestination(userId, destination.id);
        setBookmarked(true);
      }

      setTempIcon(<FaCheck className="text-amber-800 scale-125" />);
      setTimeout(() => setTempIcon(null), 1000);
    } catch (err) {
      console.error("Bookmark error:", err);
    } finally {
      setBookmarkLoading(false);
    }
  };

  if (loading) return <LoadingAnimation />;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <LayoutAuth>
      <div className="container mx-auto px-6 py-12">
        <button
          className="flex items-center text-amber-800 hover:text-amber-900 mb-6 cursor-pointer"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="mr-2" /> Kembali
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={destination.imageUrl || "https://placehold.co/600x400"}
            alt={destination.name}
            className="w-full h-80 object-cover rounded-lg shadow-md"
            onError={(e) => (e.target.src = "https://placehold.co/600x400")}
          />

          <div className="text-amber-800">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold">{destination.name}</h1>
              <button
                onClick={toggleBookmark}
                className="text-2xl cursor-pointer"
              >
                {tempIcon ||
                  (bookmarked ? (
                    <FaBookmark className="text-amber-800" />
                  ) : (
                    <FaRegBookmark className="text-gray-700" />
                  ))}
              </button>
            </div>

            <p className="text-lg mb-4">{destination.description}</p>
            <p className="text-gray-700">
              <strong>Lokasi:</strong> {destination.location}
            </p>
            <p className="text-gray-700">
              <strong>Kategori:</strong> {destination.category}
            </p>
            <p className="text-gray-700">
              <strong>Rating:</strong> {destination.rating}/5
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">
            Peta Lokasi
          </h2>
          <div className="relative w-full h-[65vh] rounded-2xl shadow-xl ring-4 ring-amber-300 overflow-hidden">
            <div id="map" className="absolute inset-0 z-0 w-full h-full" />
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
};

export default SingleDestination;
