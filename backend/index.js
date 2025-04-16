const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

// Import routes
const hotelRoutes = require("./Routes/hotelRoute");
const userRoutes = require("./Routes/userRoute");
const bookRoutes = require("./Routes/bookRoute");
const adminRoutes = require("./Routes/adminRoute");

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log("Time:", Date.now());
    next();
});

// Test route
app.get("/", (req, res) => {
    res.status(200).send("Hello");
});

// Route mounting
app.use("/api", hotelRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/admin", adminRoutes); // ✅ This was missing in your code

// Connect to MongoDB
async function main() {
    await mongoose.connect("mongodb://localhost:27017/travels");
    console.log("Database connected");
}


main().catch((err) => console.log(err));

// Start server
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
