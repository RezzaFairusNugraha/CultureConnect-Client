import React from "react";

const ItineraryCard = ({ itinerary }) => {
  return (
    <div className="bg-blue-50 shadow-md rounded-lg p-4">
      <h3 className="font-semibold text-lg">{itinerary.title}</h3>
      <p className="text-gray-700">Tempat: {itinerary.places.join(", ")}</p>
      <p className="text-green-600 font-semibold">Budget: {itinerary.budget}</p>
    </div>
  );
};

export default ItineraryCard;
