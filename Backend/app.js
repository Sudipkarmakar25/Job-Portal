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

app.use(cors({
  origin: (origin, callback) => {
    callback(null, true); // Allows all origins
  },
  credentials: true, // Allow cookies to be sent with requests
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
