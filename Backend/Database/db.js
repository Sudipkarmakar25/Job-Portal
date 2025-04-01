const mongoose=require('mongoose')

const connectToDb=async()=>{
    try {
        await mongoose.connect("mongodb+srv://sudipk166:sudip123@cluster0.pukts.mongodb.net/")
        console.log("MongoDb is connected Successfully")
    } catch (error) {
        console.log("Error in connecting to the Db",error);
        process.exit(1);
    }
}
module.exports=connectToDb;