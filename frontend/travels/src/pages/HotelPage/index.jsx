import { useEffect, useState } from "react";
import { hotelApi } from "../../api/hotelsApi";
import { HotelCard } from "../../components/HotelCard";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const HotelPage = () => {
  const [hotels, setHotels] = useState([]);
  const [search, setsearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    (async () => {
      try {
        const hotels = await hotelApi();
        setHotels(hotels);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);


    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
        document.body.classList.toggle("dark");
    };


  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Navbar fixed at top */}
      <Navbar
        setsearch={setsearch}
        search={search}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main content wrapper with padding to avoid navbar overlap */}
      <main
        className={`flex-grow container mx-auto px-4 pt-24 pb-12 ${
          isDarkMode ? "" : "shadow-md"
        }`}
      >
        <h1
          className={`text-4xl font-bold mb-8 select-none ${
            isDarkMode ? "text-indigo-300" : "text-blue-600"
          }`}
        >
          Hotels
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels
            .filter((hotel) =>
              hotel.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </div>
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};
