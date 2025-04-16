import { useState, useEffect } from "react";
import { hotelApi } from "../../api/hotelsApi";
import { HotelCard } from "../../components/HotelCard";
import { Navbar } from "../../components/Navbar";
export const HotelPage = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const hotels = await hotelApi();
        setHotels(hotels);
      } catch (err) {
        return err;
      }
    })();
  }, []);
  console.log({ hotels });
  return (
    <>
      <Navbar />
      <h1>Hotel page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {hotels.map((hotel) => {
    return <HotelCard key={hotel.id} hotel={hotel} />;
  })}
</div>

    </>
  );
};
