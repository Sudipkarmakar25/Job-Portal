// import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";




// const Internships = () => {
//     return (
//       <div className="bg-amber-100 shadow-md flex flex-col min-h-screen">
//         <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-3xl font-bold text-center mb-6">Internships</h2>
//         <p className="text-center">Find the best internship opportunities here!</p>
//       </div>
//       </div>
//     );
//   };
  
//   export default Internships;
  
import React from "react";

const Internships = () => {
  // Define a sample job object
  const job = {
    logo: "https://via.placeholder.com/80", // Replace with actual company logo URL
    company: "Tech Innovators",
    duration: "6 Months",
    skills: ["React", "Node.js", "Tailwind CSS"],
    stipend: "₹15,000/month",
    eligibility: "Final-year students",
    // description: "Work on real-world projects with an amazing team!",
  };

  return (
    <div className="bg-amber-100 flex justify-center items-center min-h-screen p-6">
      <div className="w-2/3 bg-amber-50 rounded-lg shadow-lg p-2 border border-gray-200 flex items-center space-x-6">
        {/* Company Logo */}
        {/* <div className="flex-shrink-0">
          <img
            src={job.logo}
            alt={job.company}
            className="w-20 h-20 rounded-lg object-cover border-2 border-gray-300"
          />
        </div> */}

        {/* Job Details */}
        <div className="flex-grow space-y-2 text-gray-700">
          <h2 className="text-xl font-semibold text-gray-800">{job.company}</h2>
          <p><strong>Duration:</strong> {job.duration}</p>
          <p><strong>Skills Required:</strong> {job.skills.join(", ")}</p>
          <p><strong>Stipend:</strong> {job.stipend}</p>
          <p><strong>Eligibility:</strong> {job.eligibility}</p>
          {/* <p className="text-gray-600 text-sm">{job.description}</p> */}
        </div>

        {/* Apply Button */}
        <button className="bg-amber-500 text-white font-bold px-4 py-2 rounded-md hover:bg-amber-600">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Internships;

