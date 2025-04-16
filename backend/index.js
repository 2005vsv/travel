const exp = require("constants");
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors=require("cors");
const port=5000;
const hotels=require("./Routes/hotelRoute");
app.use(express.json());
app.use(cors());
//middleware
app.use((req,res,next)=>{
    console.log("Time",Date.now());
    next();
})
app.get("/",(req,res)=>{
    res.status(200).send("hello");
})
async function main() {
    await mongoose.connect("mongodb://localhost:27017/travels");
    console.log("database connected");
    
}

main().catch((err)=>console.log(err));
app.use("/api",hotels);
app.listen(port,()=>{
    console.log(`running at port ${port}`);
})