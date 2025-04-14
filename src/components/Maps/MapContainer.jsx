import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const initializeMap = (id) => {
  const map = L.map(id);
  L.tileLayer(
    `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`,
    {
      attribution: "&copy; OpenStreetMap contributors, &copy; Geoapify",
      maxZoom: 20,
    }
  ).addTo(map);
  return map;
};
