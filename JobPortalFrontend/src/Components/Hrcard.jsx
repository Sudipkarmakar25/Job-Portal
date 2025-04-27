// Hrcard.jsx
import React from "react";

const Hrcard = ({ hr }) => {
  return (
    <div className="bg-gray-100 w-3/4 flex flex-col px-8 py-5 rounded-2xl shadow-lg
    shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 ease-in-out">
      
      {/* Company Name */}
      <h2 className="text-2xl font-bold text-center md:text-left text-blue-700 transition-colors duration-300">
        {hr.company}
      </h2>

      {/* Separator Line */}
      <div className="border-t border-gray-300 my-1"></div>

      {/* HR details in one line with boundaries */}
      <div className="flex flex-col md:flex-row justify-between text-gray-700 text-sm md:text-base">
        <div className="flex-1 md:flex md:items-center md:gap-6 space-y-3 md:space-y-0">
          {/* HR Name */}
          <p className="font-semibold text-gray-800 bg-gray-200 px-4 py-2 rounded-lg shadow-md border border-gray-400 transition-transform transform hover:scale-105">
            <span className="font-medium text-blue-600">HR Name:</span> {hr.hrName}
          </p>
          {/* Email */}
          <p className="font-semibold text-gray-800 bg-gray-200 px-4 py-2 rounded-lg shadow-md border border-gray-400 transition-transform transform hover:scale-105">
            <span className="font-medium text-blue-600">Email:</span> {hr.email}
          </p>
          {/* Phone */}
          <p className="font-semibold text-gray-800 bg-gray-200 px-4 py-2 rounded-lg shadow-md border border-gray-400 transition-transform transform hover:scale-105">
            <span className="font-medium text-blue-600">Phone:</span> {hr.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hrcard;