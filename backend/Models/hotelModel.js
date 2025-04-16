const mongoose=require("mongoose");
const HotelModel=mongoose.model("hotels",{
    name:{type:String,required:"true"},
    img:{type:String,required:"true"},
    mood:{type:String,required:"true"},
    price:{type:String,required:"true"},
    location:{type:String,required:"true"},
    discount:{type:String,required:"true"},
    rating:{type:Number,required:"true"},
    amenities:{type:Array,required:"true"},
    type:{type:String,required:"true"},
    cancellationPolicy:{type:String,required:"true"},
    

})
module.exports=HotelModel;