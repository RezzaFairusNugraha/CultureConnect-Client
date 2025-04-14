import L from "leaflet";

export const addMarkersToMap = (map, destinations, onMarkerClick, userLocation = null) => {
  const bounds = L.latLngBounds([]);

  const defaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  destinations.forEach((place) => {
    const { latitude, longitude } = place.coordinate;
    const { name } = place;

    const isNearby =
      userLocation &&
      getDistanceFromLatLonInKm(
        latitude,
        longitude,
        userLocation.latitude,
        userLocation.longitude
      ) <= 10;

    if (latitude && longitude && (!userLocation || isNearby)) {
      const marker = L.marker([latitude, longitude], { icon: defaultIcon }).addTo(map);
      marker.bindPopup(`<strong>${name}</strong>`);

      marker.on("mouseover", () => marker.openPopup());
      marker.on("mouseout", () => marker.closePopup());
      marker.on("click", () => onMarkerClick(place));

      bounds.extend([latitude, longitude]);
    }
  });

  if (destinations.length > 0 && !userLocation) {
    map.fitBounds(bounds);
  }  
};

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
