import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const AllInternships = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchAllInternships = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/jobs/getAllInternships", {
          method: "GET",
          credentials: "include",
          signal: controller.signal,
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.message || "Failed to fetch internships.");
        }

        const data = await res.json();
        console.log("Fetched internships:", data);
        setJobs(data.data || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error.message);
        }
      }
    };

    fetchAllInternships();

    return () => controller.abort();
  }, []);

  const handleEdit = (jobId) => {
    console.log("Edit clicked for job ID:", jobId);
    // Add modal opening or route navigation logic here
  };

  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this internship?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/api/jobs/delete/${jobId}`, {
        method: "DELETE",
        credentials: "include",
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to delete the internship.");
      }

      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      alert("Internship deleted successfully.");
    } catch (error) {
      console.error("Delete error:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="bg-amber-100 shadow-md flex flex-col min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-6 items-center">
        <h2 className="text-3xl font-bold text-center mb-4">All Internship Listings</h2>
        {jobs.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No internships available.</p>
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

export default AllInternships;
