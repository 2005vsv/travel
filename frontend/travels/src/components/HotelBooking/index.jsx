import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { BookApi } from '../../api/bookHotel';

export default function HotelBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name: formData.name,
      email: formData.email,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      roomType: formData.roomType.charAt(0).toUpperCase() + formData.roomType.slice(1),
      guest: parseInt(formData.guests),
    };

    console.log("📦 Booking data:", bookingData);

    try {
      const response = await BookApi(bookingData);
      console.log("✅ API Response:", response);

      if (response?.book) {
        navigate('/confirmBooking', { state: { booking: response.book } });
      } else {
        alert("❌ Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error submitting booking:", error);
      alert("❌ Something went wrong while booking.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Book Your Stay</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-xl"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-xl"
          />
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-600">Check-in</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-xl"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-600">Check-out</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-xl"
              />
            </div>
          </div>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl"
          >
            <option value="standard">Standard Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="suite">Suite</option>
          </select>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            min={1}
            onChange={handleChange}
            required
            placeholder="Number of Guests"
            className="w-full px-4 py-2 border rounded-xl"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition"
          >
            Book Now
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
