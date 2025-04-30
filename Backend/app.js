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


app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'https://shiny-stardust-db02b2.netlify.app',
    origin:'https://gregarious-pixie-69d29d.netlify.app',
    credentials: true
  }));
  
  


app.use('/api/request', RequestRoutes);
app.use('/api/jobs', JobRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
