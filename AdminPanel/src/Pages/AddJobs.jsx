import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    jobType: "Internship",
    company: "",
    logo: "",
    requirements: "",
    experience: "",
    skills: "",
    applicationLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic required fields check
    const { company, title, jobType, logo, location, salary, applicationLink } = jobData;
    if (!company || !title || !jobType || !logo || !location || !salary || !applicationLink) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      // Make the API request with JSON data
      const response = await fetch("https://backendjob-nu.vercel.app/api/jobs/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to add job.");
      }

      const data = await response.json();
      console.log("Job Added Successfully:", data);
      alert("Job Added Successfully!");

      // Reset form
      setJobData({
        title: "",
        description: "",
        location: "",
        salary: "",
        jobType: "Internship",
        company: "",
        logo: "",
        requirements: "",
        experience: "",
        skills: "",
        applicationLink: "",
      });
      
      navigate("/");
    } catch (error) {
      console.error("Error submitting job:", error);
      alert("Error submitting job.");
    }
  };

  return (
    <div className="bg-amber-100 shadow-md flex flex-col min-h-screen">
      <div className="bg-amber-50 shadow-md w-2/3 mx-auto mt-10 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Add Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex flex-col">
            <label className="font-semibold">
              Company Logo URL: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="logo"
              value={jobData.logo}
              onChange={handleChange}
              placeholder="Enter Logo URL"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">
              Company Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={jobData.company}
              onChange={handleChange}
              placeholder="Enter Company Name"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">
              Job Title: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              placeholder="Enter Job Title"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Description:</label>
            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              placeholder="Enter Job Description"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">
              Location: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              placeholder="Enter Location"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">
              Salary: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              placeholder="Enter Salary"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">
              Job Type: <span className="text-red-500">*</span>
            </label>
            <select
              name="jobType"
              value={jobData.jobType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="Internship">Internship</option>
              <option value="Job">Job</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">
              Application Link: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="applicationLink"
              value={jobData.applicationLink}
              onChange={handleChange}
              placeholder="Enter Application Link"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Requirements:</label>
            <textarea
              name="requirements"
              value={jobData.requirements}
              onChange={handleChange}
              placeholder="Enter Job Requirements"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Experience:</label>
            <input
              type="text"
              name="experience"
              value={jobData.experience}
              onChange={handleChange}
              placeholder="Enter Experience Required"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Skills:</label>
            <input
              type="text"
              name="skills"
              value={jobData.skills}
              onChange={handleChange}
              placeholder="Enter Required Skills"
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-200 text-red-700 font-bold text-xl p-2 rounded-lg hover:bg-amber-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
