const HotelModel=require("../Models/hotelModel");
const sendHotels=(req,res)=>{
    // res.status(200).send("hotels ");
    HotelModel.find().then((hotels)=>{
        res.status(200).send(hotels);
    });

};
module.exports={
    sendHotels
}