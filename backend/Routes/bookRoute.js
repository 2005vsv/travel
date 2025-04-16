const express = require("express");
const { BookHotel } = require("../Controllers/bookController");

const router = express.Router();

router.post("/book", BookHotel);

module.exports = router;
