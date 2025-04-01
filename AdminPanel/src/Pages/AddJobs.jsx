import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    logo: "",
    companyName: "",
    eligibility: "",
    duration: "",
    type: "Internship",
    requirements: ""
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Data Submitted:", jobData);
    alert("Job Added Successfully!");
    setJobData({
      logo: "",
      companyName: "",
      eligibility: "",
      duration: "",
      type: "Internship",
      requirements: ""
    });
    navigate("/"); // Fixed navigation path
  };

  return (
    <div className="bg-amber-100 shadow-md flex flex-col min-h-screen">
      <div className="bg-amber-50 shadow-md w-2/3 mx-auto mt-10 p-6  rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Add Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="font-semibold">Company Logo URL:</label>
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
            <label className="font-semibold">Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={jobData.companyName}
              onChange={handleChange}
              placeholder="Enter Company Name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Eligibility:</label>
            <input
              type="text"
              name="eligibility"
              value={jobData.eligibility}
              onChange={handleChange}
              placeholder="Enter Eligibility Criteria"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Duration:</label>
            <input
              type="text"
              name="duration"
              value={jobData.duration}
              onChange={handleChange}
              placeholder="Enter Duration"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Type:</label>
            <select
              name="type"
              value={jobData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="Internship">Internship</option>
              <option value="Job">Job</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Requirements:</label>
            <textarea
              name="requirements"
              value={jobData.requirements}
              onChange={handleChange}
              placeholder="Enter Job Requirements"
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-200 text-red-700 font-bold text-xl p-2 rounded-lg hover:bg-amber-300 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
