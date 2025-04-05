const cloudinary=require('../Config/Cloudinary')

const uploadToCloudinary=async(filepath)=>{
    try {
        const result=await cloudinary.uploader.upload(filepath)

        return{
            url:result.secure_url,
            public_id:result.public_id
        }
    } catch (error) {
        console.log("Error while uploading to Cloudinary",error)
        throw new Error('Error while uploading to Cloudinary')
    }
}

module.exports={
    uploadToCloudinary
}