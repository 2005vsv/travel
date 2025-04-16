const express = require("express");
const router = express.Router();
const { sendAdmin } = require("../Controllers/adminController");

router.get("/", sendAdmin); // no need to write "/admins" here

module.exports = router;
