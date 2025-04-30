import React, { useEffect, useState } from "react";
import Card from "../Components/Card"; // Adjust the path if needed

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchJobs = async () => {
      try {
        const res = await fetch("https://backendjob-nu.vercel.app/api/jobs/myjobs", {
          method: "GET",
          credentials: "include",
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
          console.error("Error fetching jobs:", error.message);
        }
      }
    };

    fetchJobs();

    return () => {
      controller.abort();
    };
  }, []);

  const handleEdit = (jobId) => {
    console.log("Edit clicked for job ID:", jobId);
    // You can navigate or open modal here
  };

  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://backendjob-nu.vercel.app/api/jobs/delete/${jobId}`, {
        method: "DELETE",
        credentials: "include",
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to delete the job.");
      }

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
        <h2 className="text-3xl font-bold text-center mb-4">My Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            You haven’t posted any jobs yet.
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

export default MyJobs;
