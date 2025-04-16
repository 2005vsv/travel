const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  roomType: {
    type: String,
    required: true,
    enum: ["Standard", "Deluxe", "Suite"],
  },
  guest: { type: Number, required: true },
});

// Use "books" as the collection name
const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;
