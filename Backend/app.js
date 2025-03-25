require('dotenv').config()
const express= require('express')
const connectDb=require("./Database/db")

const app=express()
const PORT =process.env.PORT||3000

connectDb()


app.use(express.json())
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})