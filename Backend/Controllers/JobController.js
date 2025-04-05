const fs = require("fs");  
const path = require("path");
const Job = require("../models/Job");
const { uploadToCloudinary } = require("../Helpers/CloudinaryHelper");

const DEFAULT_LOGO_URL = "https://example.com/default-logo.png"; 

const addJob = async (req, res) => {
    try {
        const { 
            title, description, location, salary, jobType, 
            company, requirements, experience, skills, 
            applicationLink 
        } = req.body;

        let logoUrl = DEFAULT_LOGO_URL; 
        let publicId = null;

        if (req.file) {
            const filePath = path.join(__dirname, "..", "Uploads", req.file.filename);


            const uploadResult = await uploadToCloudinary(filePath);
            logoUrl = uploadResult.url;
            publicId = uploadResult.public_id;

            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error("Error deleting file:", err);
                } else {
                    console.log("Local file deleted successfully:", filePath);
                }
            });
        }

        const newJob = new Job({
            title,
            description: description || "", 
            location,
            salary,
            jobType,
            company,
            logo: logoUrl,
            publicId: publicId,
            requirements: requirements || "",
            experience: experience || "",
            skills: skills ? skills.split(",") : [], 
            applicationLink: applicationLink || "",
            uploadedBy: req.user.id
        });

        await newJob.save();
        return res.status(201).json({ message: "Job added successfully", job: newJob });
    } catch (error) {
        console.error("Error adding job:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const getAllJob = async (req, res) => {
    try {
        const jobs = await Job.find({ jobType: "Job" });
        return res.status(200).json({
            message: "Jobs fetched successfully",
            success: true,
            data: jobs
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error fetching jobs",
            success: false,
            error: error.message
        });
    }
};

const getAllInternship = async (req, res) => {
    try {
        const internships = await Job.find({ jobType: "internship" });
        return res.status(200).json({
            message: "Internships fetched successfully",
            success: true,
            data: internships
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error fetching Internships",
            success: false,
            error: error.message
        });
    }
};

const deleteJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        const adminId = req.user.id;

     
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: "Job not found", success: false });
        }

        if (job.uploadedBy.toString() !== adminId) {
            return res.status(403).json({
                message: "Unauthorized: Only the uploader can delete this job",
                success: false
            });
        }

        
        if (job.publicId) {
            try {
                await deleteFromCloudinary(job.publicId);
            } catch (cloudErr) {
                console.error("Cloudinary deletion error:", cloudErr);
            }
        }

       
        await Job.findByIdAndDelete(jobId);

      
        await Admin.findByIdAndUpdate(adminId, { $pull: { jobs: jobId } });

        return res.status(200).json({
            message: "Job deleted successfully",
            success: true
        });

    } catch (error) {
        console.error("Error deleting job:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: error.message
        });
    }
};

module.exports = { addJob,getAllJob,getAllInternship,deleteJob };
