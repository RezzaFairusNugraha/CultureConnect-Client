import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlaceDetailSidebar = ({ selectedPlace, onClose }) => {
  const navigate = useNavigate();

  if (!selectedPlace) return null;

  return (
    <div className="absolute top-0 right-0 h-full w-[320px] bg-white/95 backdrop-blur-md shadow-xl z-20 transition-transform duration-300 translate-x-0">
      <div className="flex flex-col h-full p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-amber-600">
            {selectedPlace.name}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500"
            aria-label="Tutup"
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
    </div>
  );
};

export default PlaceDetailSidebar;
