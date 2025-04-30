import React, { useEffect, useState } from "react";
import Card from "../Components/Card"; // Make sure this path is correct

const MyInternships = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const controller = new AbortController(); // For cleanup
    const fetchJobs = async () => {
      try {
        const res = await fetch("https://backendjob-nu.vercel.app/api/jobs/myinternships", {
          method: "GET",
          credentials: "include", // ✅ Send cookies like accessToken
          signal: controller.signal,
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.message || "Failed to fetch jobs.");
        }

        const data = await res.json();
        console.log("Fetched jobs:", data);
        setJobs(data.data || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch jobs:", error.message);
        }
      }
    };

    fetchJobs();

    return () => {
      controller.abort(); // ✅ Cleanup fetch on unmount
    };
  }, []);

  const handleEdit = (jobId) => {
    console.log("Edit clicked for job ID:", jobId);
    // Implement navigation or modal open logic here
  };

  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://backendjob-nu.vercel.app/api/jobs/delete/${jobId}`, {
        method: "DELETE",
        credentials: "include", // Send cookie for authentication
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to delete the job.");
      }

      // Remove the deleted job from UI
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      alert("Job deleted successfully.");
    } catch (error) {
      console.error("Delete error:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="bg-amber-100 shadow-md flex flex-col min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-6 items-center">
        {jobs.length === 0 ? (
          <p className="text-center col-span-full text-lg text-gray-600">
            No jobs available.
          </p>
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
              _id={job._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyInternships;
