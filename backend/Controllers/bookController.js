const BookModel = require("../Models/bookModel");

const BookHotel = async (req, res) => {
  try {
    const { name, email, checkIn, checkOut, roomType, guest } = req.body;

    const book = new BookModel({ name, email, checkIn, checkOut, roomType, guest });
    const savedBook = await book.save();

    return res.status(200).json({ book: savedBook });
  } catch (err) {
    console.error("Booking error:", err);
    return res.status(500).send("Something went wrong");
  }
};

module.exports = { BookHotel };
