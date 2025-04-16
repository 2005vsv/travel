import React, { useState } from 'react';
import axios from 'axios';
import { HotelCard } from "../../components/HotelCard"; // Assuming HotelCard is located here

const NearestLocation = ({ hotels }) => {
  const [searchLocation, setSearchLocation] = useState('');
  const [nearestHotels, setNearestHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const OPEN_CAGE_API_KEY = "YOUR_OPENCAGE_API_KEY";  // Replace with your OpenCage API Key

  // Function to calculate the distance between two coordinates using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  // Function to handle the search for nearest hotels
  const searchNearestHotels = async () => {
    if (!searchLocation) return;

    setLoading(true);

    try {
      // Geocode the location (get coordinates for the address)
      const geocodeResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
        params: {
          q: searchLocation,
          key: OPEN_CAGE_API_KEY,
        },
      });

      const { lat, lng } = geocodeResponse.data.results[0]?.geometry || {};
      
      if (lat && lng) {
        // Now filter the hotels based on the calculated distance
        const filteredHotels = hotels.filter((hotel) => {
          // Assuming each hotel has latitude and longitude properties
          const hotelDistance = calculateDistance(lat, lng, hotel.latitude, hotel.longitude);
          return hotelDistance <= 5; // Filter hotels within 5 km radius
        });

        setNearestHotels(filteredHotels);
      } else {
        alert('Location not found!');
      }
    } catch (error) {
      console.error('Error fetching nearest hotels:', error);
      alert('Error occurred while fetching data.');
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Find Nearest Hotels</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Enter location (e.g., city name)"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <button
        onClick={searchNearestHotels}
        className="bg-blue-600 text-white p-2 rounded-md mb-4"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Search Nearby Hotels'}
      </button>

      {/* Display the nearest hotels */}
      <div>
        {nearestHotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearestHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <p>No nearby hotels found.</p>
        )}
      </div>
    </div>
  );
};

export default NearestLocation;
