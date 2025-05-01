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

app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/request', RequestRoutes);
app.use('/api/jobs', JobRoutes);

app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.status(200).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
