import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
const Internships = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchAllInternships = async () => {
      try {
        const res = await fetch("https://backendjob-nu.vercel.app/api/jobs/getAllInternships", {
          method: "GET",
          credentials: "include",
          signal: controller.signal,
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.message || "Failed to fetch internships.");
        }

        const data = await res.json();
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

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
          All Internship Listings
        </h2>
        
        <div className="flex flex-col items-center">
          {jobs.length === 0 ? (
            <div className="text-center py-12 w-2/3">
              <p className="text-lg text-blue-600">
                No internships available at the moment.
              </p>
            </div>
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
    </div>
  );
};

export default Internships;