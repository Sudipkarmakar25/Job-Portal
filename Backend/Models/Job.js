const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String},
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    jobType: { type: String,  required: true },
    company: { type: String, required: true },
    logo: { type: String, required: true },
    requirements: { type: String },
    experience: { type: String },
    skills: { type: [String] },
    applicationLink: { type: String },
    publicId: { type: String },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminRequest' },
    postedAt: { type: Date, default: Date.now },
   
});

module.exports = mongoose.model("Jobs", jobSchema);
