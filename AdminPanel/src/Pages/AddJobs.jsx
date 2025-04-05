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
    exprerience: "",
    skills: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Data Submitted:", jobData);
    alert("Job Added Successfully!");

    setJobData({
      title: "",
      description: "",
      location: "",
      salary: "",
      jobType: "Internship",
      company: "",
      logo: "",
      requirements: "",
      exprerience: "",
      skills: "",
    });

    navigate("/");
  };

  return (
    <div className="bg-amber-100 shadow-md flex flex-col min-h-screen">
      <div className="bg-amber-50 shadow-md w-2/3 mx-auto mt-10 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Add Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex flex-col">
            <label className="font-semibold">Company Logo:</label>
            <input
              type="file"
              name="logo"
              onChange={handleChange}
              accept="image/*"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Company Name:</label>
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
            <label className="font-semibold">Job Title:</label>
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
              required
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Location:</label>
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
            <label className="font-semibold">Salary:</label>
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
            <label className="font-semibold">Job Type:</label>
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

          <div className="flex flex-col">
            <label className="font-semibold">Experience:</label>
            <input
              type="text"
              name="exprerience"
              value={jobData.exprerience}
              onChange={handleChange}
              placeholder="Enter Experience Required"
              className="w-full p-2 border rounded"
              required
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
              required
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
