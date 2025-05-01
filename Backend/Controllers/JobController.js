const Job = require("../Models/Job");
const AdminRequest=require("../Models/AdminRequest")
const DEFAULT_LOGO_URL = "https://example.com/default-logo.png"; 

const addJob = async (req, res) => {
    try {
        const {
          title,
          description,
          location,
          salary,
          jobType,
          company,
          logo,
          requirements,
          experience,
          skills,
          applicationLink
        } = req.body;
    
        const finalLogo = logo && logo.trim() !== ""
          ? logo
          : "https://your-default-logo.com/default.png"; // change this as needed
    
        const newJob = new Job({
          title,
          description,
          location,
          salary,
          jobType,
          company,
          logo: finalLogo,
          requirements,
          experience,
          skills,
          applicationLink,
        });
    
        await newJob.save();
    
        res.status(201).json({ message: "Job added successfully", job: newJob });
      } catch (error) {
        console.error("Error adding job:", error);
        res.status(500).json({ message: "Server error while adding job" });
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
        
        const internships = await Job.find({ jobType: "Internship" });
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

        
       
        await Job.findByIdAndDelete(jobId);

      
        await AdminRequest.findByIdAndUpdate(adminId, { $pull: { jobs: jobId } });

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

const Myjobs = async (req, res) => {
    try {
        const userId = req.params.id || req.user.id;
        const userExists = await AdminRequest.findById(userId);
        if (!userExists) {
            return res.status(404).json({
                message: "Admin user not found",
                success: false
            });
        }

        const jobs = await Job.find({ 
            uploadedBy: userId, 
            jobType: "Job" 
        });

        return res.status(200).json({
            message: "Jobs fetched successfully",
            success: true,
            data: jobs
        });
    } catch (error) {
        return res.status(400).json({
            message: "Unexpected Error",
            success: false,
            error: error.message
        });
    }
};

const MyInternships=async(req,res)=>{
    try {
        const userId = req.user.id;
        const userExists = await AdminRequest.findById(userId);
        if (!userExists) {
            return res.status(404).json({
                message: "Admin user not found",
                success: false
            });
        }

        const jobs = await Job.find({ 
            uploadedBy: userId, 
            jobType: "Internship" 
        });

        return res.status(200).json({
            message: "Jobs fetched successfully",
            success: true,
            data: jobs
        });
    } catch (error) {
        return res.status(400).json({
            message: "Unexpected Error",
            success: false,
            error: error.message
        })
    }
}

module.exports = { addJob,getAllJob,getAllInternship,deleteJob,Myjobs,MyInternships};
