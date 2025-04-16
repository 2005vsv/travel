// const exp = require("constants");
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors=require("cors");
const port=5000;
const hotels=require("./Routes/hotelRoute");
const userRoutes=require("./Routes/userRoute");
// const BookRoute=require("./Routes/bookRoute");
const BookRoute = require("./Routes/bookRoute");
// const user=require("./Routes/userRoute");
// const user=require("./Routes/userroute");

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
app.use("/api",hotels);
app.use("/api/users",userRoutes);
// app.use("/api/books", BookRoute);
app.use("/api/books", BookRoute);

// app.use("/api",user);
async function main() {
    await mongoose.connect("mongodb://localhost:27017/travels");
    console.log("database connected");
    
}

main().catch((err)=>console.log(err));


app.listen(port,()=>{
    console.log(`running at port ${port}`);
})