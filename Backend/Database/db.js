const mongoose=require('mongoose')

const connectToDb=async()=>{
    try {
        await mongoose.connect("")
        console.log("MongoDb is connected Successfully")
    } catch (error) {
        console.log("Error in connecting to the Db",error);
        process.exit(1);
    }
}
module.exports=connectToDb;