import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hotelApi } from "../../api/hotelsApi";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";
// ...imports remain unchanged

export const HotelDescripion = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const data = await hotelApi();
        const selectedHotel = data.find((h) => h.id.toString() === id);
        if (selectedHotel) {
          setHotel(selectedHotel);
        } else {
          setError("Hotel not found");
        }
      } catch (err) {
        setError("Error fetching hotel data");
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  if (loading)
    return (
      <p className="text-center mt-20 text-xl font-semibold">Loading...</p>
    );
  if (error)
    return (
      <p className="text-center mt-20 text-red-500 text-xl font-semibold">{error}</p>
    );

  return (
    <div className={`flex flex-col min-h-screen ${
      isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
    }`}>
      {/* Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className={`w-full max-w-3xl rounded-3xl shadow-xl border border-gray-200 p-8 ${
          isDarkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-800"
        }`}>
          {/* Hotel Image */}
          <div className="flex justify-center mb-6">
            <img
              src={hotel.img}
              alt={hotel.name}
              className="w-48 h-48 object-cover rounded-xl shadow-md border-4 border-gray-100"
            />
          </div>

          {/* Hotel Name */}
          <h1 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}>
            {hotel.name}
          </h1>

          {/* Rating & Discount & Styled Price */}
          <div className="flex justify-center gap-4 mb-6">
            <span className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.21c.969 0 1.371 1.24.588 1.81l-3.404 2.473a1 1 0 00-.364 1.118l1.286 3.962c.3.921-.755 1.688-1.54 1.118l-3.404-2.473a1 1 0 00-1.175 0l-3.404 2.473c-.784.57-1.839-.197-1.54-1.118l1.286-3.962a1 1 0 00-.364-1.118L2.049 9.39c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.95-.69l1.286-3.962z" />
              </svg>
              <span className="ml-1">★ {hotel.rating}</span>
            </span>
            {/* --- Styled Price --- */}
            <span className={`font-bold text-lg px-5 py-2 rounded-full shadow-lg border-2 flex items-center ${
              isDarkMode
                ? "bg-gradient-to-r from-indigo-800 to-blue-700 text-yellow-300 border-yellow-400"
                : "bg-gradient-to-r from-yellow-100 to-yellow-300 text-yellow-800 border-yellow-400"
            }`}>
              <svg
                className="w-5 h-5 mr-1 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15a1 1 0 01-1-1v-1H8a1 1 0 110-2h1v-2H8a1 1 0 110-2h1V6a1 1 0 112 0v1h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v1a1 1 0 01-1 1z" />
              </svg>
              {hotel.price}
            </span>
            <span className="bg-green-50 text-green-700 font-semibold px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 7H7v6h6V7z" />
              </svg>
              <span className="ml-1">{hotel.discount}</span>
            </span>
          </div>

          {/* Hotel Details */}
          <div className="space-y-4">
            <div className="border-t border-gray-200 pt-4">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p>{hotel.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h2 className="text-xl font-semibold mb-2">Mood</h2>
              <p className="italic">{hotel.mood}</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h2 className="text-xl font-semibold mb-2">Special Offers</h2>
              <p className="text-green-600 font-semibold">{hotel.discount}</p>
            </div>

            {/* Amenities */}
            <div className="border-t border-gray-200 pt-4">
              <h2 className="text-xl font-semibold mb-2">Amenities</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {hotel.amenities.slice(0, 3).map((amenity, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold text-sm shadow"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              
              {/* Book Now Button - Enhanced Styling */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => navigate("/hotelbookingform")}
                  className={`relative overflow-hidden group w-full sm:w-2/3 md:w-1/2 py-3 px-6 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
                    isDarkMode 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white focus:ring-blue-500" 
                      : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white focus:ring-blue-400"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    Book Now
                  </span>
                  <span className={`absolute top-0 left-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                    isDarkMode ? "bg-indigo-800" : "bg-indigo-700"
                  }`}></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

