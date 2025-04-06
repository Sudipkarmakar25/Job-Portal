import React from 'react';

const Card = ({
    _id,
  title,
  description,
  location,
  salary,
  jobType,
  company,
  logo,
  requirements,
  experience,
  skills,
  applicationLink,
  onDelete
}) => {
  return (
    <div className="bg-amber-200 rounded-xl shadow-md flex flex-col w-[150%] min-h-[160px] p-4 justify-between overflow-hidden">

      {/* Top Section */}
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="w-16 h-16 flex-shrink-0 mt-1">
          {logo ? (
            <img src={logo} alt={`${company} logo`} className="w-full h-full object-contain rounded" />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">
              No Logo
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="flex flex-col flex-grow gap-1 overflow-hidden">
          <h2 className="text-lg font-semibold truncate">🔖 <span className="font-medium">Title:</span> {title || "Untitled Job"}</h2>
          <p className="text-sm text-gray-600 truncate">🏢 <span className="font-medium">Company:</span> {company}</p>
          <div className="flex flex-wrap text-sm gap-4 mt-1 text-gray-700">
            <span>📍 <span className="font-medium">Location:</span> {location || "N/A"}</span>
            <span>💰 <span className="font-medium">Salary:</span> {salary || "Not mentioned"}</span>
            <span>🎯 <span className="font-medium">Experience:</span> {experience || "None"}</span>
            <span>📂 <span className="font-medium">Type:</span> {jobType || "N/A"}</span>
          </div>
          {skills && (
            <p className="text-sm text-gray-700 truncate">🛠️ <span className="font-medium">Skills:</span> {skills}</p>
          )}
          {requirements && (
            <p className="text-sm text-gray-700 truncate">📌 <span className="font-medium">Requirements:</span> {requirements}</p>
          )}
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-end gap-2 mt-4">
        {applicationLink && (
          <a
            href={applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-teal-500 text-white text-sm font-semibold rounded hover:bg-teal-600 transition"
          >
            📄 Details
          </a>
        )}
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded hover:bg-red-600 transition"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
