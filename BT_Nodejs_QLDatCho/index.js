const express = require("express");
const methodOverride = require("method-override");
const connectDB = require("./config/db");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Kết nối MongoDB
connectDB();

// View engine
app.set("view engine", "ejs");

// Routes
app.use("/bookings", bookingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
