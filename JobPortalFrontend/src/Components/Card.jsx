import React from 'react';

const Card = ({
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
  applicationLink
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow w-11/12 max-w-5xl mx-auto mb-4 p-4 flex flex-col md:flex-row gap-4">
      
      {/* Left Section - Logo/Company */}
      <div className="w-full md:w-1/6 flex items-center md:items-start gap-3">
        <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
          {logo ? (
            <img src={logo} alt={`${company} logo`} className="w-12 h-12 object-contain" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )}
        </div>
        <div className="text-sm leading-tight">
          <p className="text-base font-semibold text-gray-800">{company}</p>
          <p className="text-xs text-blue-600 italic">{jobType}</p>
        </div>
      </div>

      {/* Middle Section - Job Details */}
      <div className="flex-1 text-sm space-y-2 md:ml-2">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700">
          <span>
            📍 <span className="font-medium">Location:</span> {location || '-'}
          </span>
          <span>
            🎓 <span className="font-medium">Experience:</span> {experience || '-'}
          </span>
          {requirements && (
            <span>
              📋 <span className="font-medium">Requirements:</span> Listed
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700">
          <span>
            💰 <span className="font-medium">Salary:</span> {salary || 'Not specified'}
          </span>
          <span>
            🛠️ <span className="font-medium">Skills:</span> {skills || '-'}
          </span>
        </div>

        {description && (
          <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
        )}
      </div>

      {/* Right Section - Apply Button */}
      <div className="w-full md:w-1/5 flex items-center justify-end md:justify-center">
        {applicationLink ? (
          <a
            href={applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-700 text-white text-sm font-bold rounded hover:bg-blue-800 transition-colors"
          >
            Apply Now
          </a>
        ) : (
          <p className="text-gray-400 text-sm italic">Closed</p>
        )}
      </div>
    </div>
  );
};

export default Card;
