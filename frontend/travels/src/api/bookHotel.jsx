import axios from "axios";

export const BookApi = async ({ name, email, checkIn, checkOut, roomType, guest }) => {
  const url = "http://localhost:5000/api/books/book"; // adjust if deployed

  try {
    const { data } = await axios.post(url, {
      name,
      email,
      checkIn,
      checkOut,
      roomType,
      guest,
    });
    return data;
  } catch (err) {
    console.error("Booking error:", err);
    return err;
  }
};
