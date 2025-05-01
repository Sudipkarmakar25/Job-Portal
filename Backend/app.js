require('dotenv').config();
const express = require('express');
const connectDb = require("./Database/db");
const RequestRoutes = require('./Routes/AdminRequestRoutes');
const JobRoutes = require('./Routes/JobRoutes.js');
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDb();

// List of allowed frontend origins (Netlify URLs)
const allowedOrigins = [
  "https://adminpanel-gamma-rust.vercel.app/",
  "https://gregarious-pixie-69d29d.netlify.app"
];

// CORS middleware for handling cross-origin cookies securely
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// Middleware to parse incoming requests
app.use(express.json());
app.use(cookieParser());

// API routes
app.use('/api/request', RequestRoutes);
app.use('/api/jobs', JobRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
