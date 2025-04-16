import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export const ConfirmBooking = () => {
  const { state } = useLocation();  // This will allow us to pass data from the previous page
  const booking = state?.booking;
  const navigate = useNavigate();   // To navigate programmatically (e.g., go back to home or booking form)

  // Price per room type
  const roomPrices = {
    Standard: 2000,
    Deluxe: 3000,
    Suite: 5000,
  };

  // Calculate number of nights
  const nights =
    booking &&
    Math.ceil(
      (new Date(booking.checkOut) - new Date(booking.checkIn)) / (1000 * 60 * 60 * 24)
    );

  const pricePerNight = booking ? roomPrices[booking.roomType] : 0;
  const totalPrice = pricePerNight * nights;

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">🎉 Booking Confirmed!</h1>
        
        {booking ? (
          <div className="space-y-4 text-lg text-gray-700">
            <div>
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Room Type:</strong> {booking.roomType.charAt(0).toUpperCase() + booking.roomType.slice(1)}</p>
              <p><strong>Check-in Date:</strong> {new Date(booking.checkIn).toLocaleDateString()}</p>
              <p><strong>Check-out Date:</strong> {new Date(booking.checkOut).toLocaleDateString()}</p>
              <p><strong>Guests:</strong> {booking.guest}</p>
            </div>
            
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">Total Price</h3>
              <p className="text-xl text-gray-800">
                ₹{pricePerNight} x {nights} night{nights > 1 ? 's' : ''} = ₹{totalPrice}
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => navigate('/')}  // Navigate to homepage or any page
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl"
              >
                Go to Home
              </button>
            </div>
          </div>
        ) : (
          <p className="text-xl text-red-500 text-center">Something went wrong. Please try again later.</p>
        )}
      </div>
      <Footer />
    </>
  );
};
