require('dotenv').config();
const express = require('express');
const connectDb = require("./Database/db");
const RequestRoutes = require('./Routes/AdminRequestRoutes');
const JobRoutes = require('./Routes/JobRoutes.js');
const cookieParser = require("cookie-parser");


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDb();

// Middleware to parse JSON data
app.use(express.json());
app.use(cookieParser());

// Routes for handling admin requests
app.use('/api/request', RequestRoutes);
app.use('/api/jobs', JobRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
