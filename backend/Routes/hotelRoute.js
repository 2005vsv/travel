const express=require("express");
const router=express.Router();
const {sendHotels}=require("../Controllers/hotelController");
router.get("/hotels",sendHotels);
module.exports=router;