import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hotelApi } from "../../api/hotelsApi";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const HotelDescripion = () => {
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

          {/* Rating & Discount */}
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
              <div className="flex flex-wrap gap-3">
                {hotel.amenities.slice(0, 3).map((amenity, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold text-sm shadow"
                  >
                    {amenity}
                  </span>
                ))}
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
