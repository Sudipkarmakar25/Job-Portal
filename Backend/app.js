require('dotenv').config();
const express = require('express');
const connectDb = require("./Database/db");
const RequestRoutes = require('./Routes/AdminRequestRoutes');
const JobRoutes = require('./Routes/JobRoutes.js');
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", 
    origin: "http://localhost:5175", 
    credentials: true,  
}));


app.use('/api/request', RequestRoutes);
app.use('/api/jobs', JobRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
