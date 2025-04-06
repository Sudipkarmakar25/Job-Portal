import React, { useEffect, useState } from "react";
import Card from "../Components/Card"; // Make sure this path is correct

const AllInternships = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/jobs/getAllInternships") // ✅ Matches your backend route
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched jobs:", data); // For debugging
        setJobs(data.data || []); // ✅ Your API sends { data: [...] }
      })
      .catch((error) => {
        console.error("Failed to fetch jobs:", error);
      });
  }, []);

  const handleEdit = (jobId) => {
    console.log("Edit clicked for job ID:", jobId);
    // Implement navigation or modal open logic here
  };

  const handleDelete = (jobId) => {
    console.log("Delete clicked for job ID:", jobId);
    // Implement delete logic here
  };

  return (
    <div className="bg-amber-100 shadow-md flex flex-col min-h-screen">

      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-6 items-center">
        {jobs.length === 0 ? (
          <p className="text-center col-span-full text-lg text-gray-600">No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <Card
              key={job._id}
              title={job.title}
              description={job.description}
              location={job.location}
              salary={job.salary}
              jobType={job.jobType}
              company={job.company}
              logo={job.logo}
              requirements={job.requirements}
              experience={job.experience}
              skills={Array.isArray(job.skills) ? job.skills.join(", ") : job.skills}
              applicationLink={job.applicationLink}
              onEdit={() => handleEdit(job._id)}
              onDelete={() => handleDelete(job._id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllInternships;
