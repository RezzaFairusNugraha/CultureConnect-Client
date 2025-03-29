import React from "react";

const HeroPromotion = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-md">
        <div>
          <div className="bg-gray-900 text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get up to <span className="text-red-500">50% OFF</span>
            </h2>
            <p className="text-gray-300 mb-6">
              on your dining bills with CultureConnect
            </p>
            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition-colors">
              Check out all the restaurants
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPromotion;
