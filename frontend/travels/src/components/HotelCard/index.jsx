import React from "react";

export const HotelCard = ({ hotel }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-200 hover:scale-105">
      {/* Image */}
      <img
        src={hotel.img}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800">{hotel.name}</h1>
        <p className="text-gray-600 mt-2">{hotel.mood}</p>
        <p className="text-green-600 font-bold mt-2">{hotel.discount}</p>
        <span className="inline-block bg-yellow-400 text-white text-sm font-bold px-3 py-1 rounded-full mt-4">
          ★ {hotel.rating}
        </span>
      </div>
    </div>
  );
};
