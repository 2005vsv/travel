const express=require("express");
const mongoose=require("mongoose");
const hotels=require("./Routes/hotelRoute");
const app=express();
const port=5000;

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome to home");
})
async function main() {
    try{
        await mongoose.connect("mongodb://localhost:27017/travels")
    console.log("database connected");
    }
    catch(err){
      console.log("error")
    }
    
}
app.use((req,res,next)=>{
    console.log("time",Date.now());
    next();
})
main().catch((err)=>console.log(err));
//hotel route
app.use("/api",hotels);

app.listen(port,()=>{
    console.log(`Port is ${port}`);
})