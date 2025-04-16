import React from "react";
import { useNavigate } from "react-router-dom";

export const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${hotel.id}`);
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 mt-10 cursor-pointer border border-gray-700">
      {/* Hotel Image */}
      <img
        src={hotel.img}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-white">{hotel.name}</h2>
        <p className="text-gray-300 mt-2 italic">{hotel.mood}</p>
        <p className="text-green-400 font-bold mt-3">{hotel.discount}</p>

        <div className="flex items-center mt-4">
          <span className="inline-block bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full shadow-md">
            ★ {hotel.rating}
          </span>
          <button
            onClick={handleClick}
            className="ml-auto bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
