require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS middleware

const app = express();

// Enable CORS to allow requests from frontend (localhost:3000)
app.use(cors({
  origin: "http://localhost:3000", // Allow frontend to access backend
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
}));

// Middleware to parse JSON data from requests
app.use(express.json());

// Import routes
const authRoutes = require("./routes/userroutes");

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/mernApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Use routes for authentication
app.use("/api/auth", authRoutes);

// Error handling middleware for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
