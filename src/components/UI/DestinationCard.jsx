import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={destination.image} alt={destination.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="font-semibold text-lg mt-2">{destination.name}</h3>
      <p className="text-gray-600">{destination.location}</p>
      <span className="text-yellow-500">⭐ {destination.rating}</span>
    </div>
  );
};

export default DestinationCard;
