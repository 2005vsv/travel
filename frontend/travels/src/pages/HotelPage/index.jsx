import { useEffect, useState } from "react";
import { hotelApi } from "../../api/hotelsApi";
import { HotelCard } from "../../components/HotelCard";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Chatbot } from "../../components/chatbot";
// import NearestLocation from "../../components/NearestLocation";

export const HotelPage = () => {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [ratingFilter, setRatingFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [discountFilter, setDiscountFilter] = useState("all");

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

  const filterHotels = () => {
    return hotels
      .filter((hotel) =>
        hotel.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((hotel) => {
        if (ratingFilter === "above3") return hotel.rating > 3;
        if (ratingFilter === "below4") return hotel.rating < 4;
        if (ratingFilter === "between3and4")
          return hotel.rating >= 3 && hotel.rating <= 4;
        return true;
      })
      .filter((hotel) => {
        const price =
          typeof hotel.price === "string"
            ? parseFloat(hotel.price.replace(/[^\d.]/g, ""))
            : Number(hotel.price);

        if (isNaN(price)) return false;

        if (priceFilter === "below2000") return price < 2000;
        if (priceFilter === "between2000and5000")
          return price >= 2000 && price <= 5000;
        if (priceFilter === "above5000") return price > 5000;
        return true;
      })
      .filter((hotel) => {
        const rawDiscount = hotel.discount ?? 0;
        const discount =
          typeof rawDiscount === "string"
            ? parseFloat(rawDiscount.replace("%", ""))
            : Number(rawDiscount);

        if (isNaN(discount)) return false;

        if (discountFilter === "above10") return discount > 10;
        if (discountFilter === "below20") return discount < 20;
        if (discountFilter === "between20and30")
          return discount >= 20 && discount <= 30;
        return true;
      });
  };

  const filteredHotels = filterHotels();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <Navbar
        setsearch={setSearch}
        search={search}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {/* <NearestLocation hotels={hotels}/> */}

      <Chatbot />

      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <h1
          className={`text-4xl font-bold mb-8 select-none ${
            isDarkMode ? "text-indigo-300" : "text-blue-600"
          }`}
        >
          Hotels
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 xl:w-1/4 sticky top-24 self-start">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-h-[80vh] overflow-y-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Filters</h2>

              {/* Rating */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Rating</h3>
                <FilterButton
                  label="All"
                  active={ratingFilter === "all"}
                  onClick={() => setRatingFilter("all")}
                />
                <FilterButton
                  label="Above 3 Stars"
                  active={ratingFilter === "above3"}
                  onClick={() => setRatingFilter("above3")}
                />
                <FilterButton
                  label="Below 4 Stars"
                  active={ratingFilter === "below4"}
                  onClick={() => setRatingFilter("below4")}
                />
                <FilterButton
                  label="3 - 4 Stars"
                  active={ratingFilter === "between3and4"}
                  onClick={() => setRatingFilter("between3and4")}
                />
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Price</h3>
                <FilterButton
                  label="All"
                  active={priceFilter === "all"}
                  onClick={() => setPriceFilter("all")}
                />
                <FilterButton
                  label="Below ₹2000"
                  active={priceFilter === "below2000"}
                  onClick={() => setPriceFilter("below2000")}
                />
                <FilterButton
                  label="₹2000 - ₹5000"
                  active={priceFilter === "between2000and5000"}
                  onClick={() => setPriceFilter("between2000and5000")}
                />
                <FilterButton
                  label="Above ₹5000"
                  active={priceFilter === "above5000"}
                  onClick={() => setPriceFilter("above5000")}
                />
              </div>

              {/* Discount */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Discount</h3>
                <FilterButton
                  label="All"
                  active={discountFilter === "all"}
                  onClick={() => setDiscountFilter("all")}
                />
                <FilterButton
                  label="Above 10%"
                  active={discountFilter === "above10"}
                  onClick={() => setDiscountFilter("above10")}
                />
                <FilterButton
                  label="Below 20%"
                  active={discountFilter === "below20"}
                  onClick={() => setDiscountFilter("below20")}
                />
                <FilterButton
                  label="20% - 30%"
                  active={discountFilter === "between20and30"}
                  onClick={() => setDiscountFilter("between20and30")}
                />
              </div>
            </div>
          </aside>

          {/* Hotels */}
          <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))
            ) : (
              <p className="text-center col-span-full text-lg">
                No hotels match your filters.
              </p>
            )}
          </section>
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

// 🧩 Reusable Filter Button
const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`block w-full text-left px-6 py-3 rounded-lg mb-3 font-semibold text-lg ${
      active
        ? "bg-blue-600 text-white"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
    }`}
  >
    {label}
  </button>
);
