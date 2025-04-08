import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const DeliveryLocationModal = ({
  show,
  onClose,
  onConfirm,
  onOpenSearchLocation,
  selectedLocation,
  defaultLocation = { lat: -6.9175, lng: 107.6191 },
}) => {
  const [markerPosition, setMarkerPosition] = useState([
    defaultLocation.lat,
    defaultLocation.lng,
  ]);
  const [deliveryArea, setDeliveryArea] = useState("Cisarua");
  const [completeAddress, setCompleteAddress] = useState("");
  const [addressType, setAddressType] = useState("Home");

  function RecenterMap({ center }) {
    const map = useMap();
    useEffect(() => {
      map.setView(center);
    }, [center, map]);
    return null;
  }

  useEffect(() => {
    if (selectedLocation) {
      setDeliveryArea(selectedLocation.address || "");
      setMarkerPosition([selectedLocation.lat, selectedLocation.lng]);
    }
  }, [selectedLocation]);

  const handleMapClick = (e) => {
    setMarkerPosition([e.latlng.lat, e.latlng.lng]);
  };

  const handleSave = () => {
    onConfirm({
      markerPosition: { lat: markerPosition[0], lng: markerPosition[1] },
      deliveryArea,
      completeAddress,
      addressType,
    });
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative bg-white w-full max-w-md md:max-w-lg rounded-lg shadow-lg p-4 md:p-6 max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-2">Add Address</h2>
        <p className="text-gray-600 text-sm mb-3">
          Your food will be delivered here
        </p>

        <div className="mb-4 w-full h-[200px] md:h-[250px] rounded-md overflow-hidden">
          <MapContainer
            center={markerPosition}
            zoom={15}
            style={{ height: "100%", width: "100%" }}
            onClick={handleMapClick}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={markerPosition}>
              <Popup>Delivery Location</Popup>
            </Marker>
            <RecenterMap center={markerPosition} />
          </MapContainer>
        </div>

        <form
          className="flex flex-col space-y-3"
          onSubmit={(e) => {
            e.preventDefault(); // prevent reload
            handleSave();
          }}
        >
          <div>
            <label className="block text-gray-700 text-sm mb-1">Alamat</label>
            <input
              type="text"
              className="border rounded w-full px-2 py-1 text-sm"
              value={deliveryArea}
              onFocus={(e) => {
                setDeliveryArea(e.target.value);
                onOpenSearchLocation();
              }}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Alamat Lengkap *
            </label>
            <input
              type="text"
              className="border rounded w-full px-2 py-1 text-sm"
              value={completeAddress}
              onChange={(e) => setCompleteAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Address Type
            </label>
            <div className="flex items-center space-x-4">
              {["Home", "Work", "Hotel", "Other"].map((type) => (
                <label
                  key={type}
                  className="inline-flex items-center text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    className="mr-1"
                    name="addressType"
                    value={type}
                    checked={addressType === type}
                    onChange={() => setAddressType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-amber-800 text-white rounded text-sm font-medium hover:bg-amber-900"
            >
              Save and proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryLocationModal;
