import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";

const Home = ({ user }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-16 text-center">
        
        {/* Company Logo - smaller and cleaner for admin */}
        <div className="mb-8">
          <img
            src={Logo}
            alt="Admin Logo"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-md border-2 border-gray-200 object-cover"
          />
        </div>

        {/* Welcome Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-3 animate-typing overflow-hidden whitespace-nowrap pr-3">
           Welcome, {user.name}!
        </h1>


        <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-6">
          CarrierHorizon Admin Portal
        </h2>

        {/* Admin Info Text */}
        <p className="text-xl text-gray-700 max-w-3xl leading-relaxed mb-10">
          Manage your company's job postings, track internship applications, and maintain candidate records — all in one centralized admin dashboard.
        </p>

        {/* Admin Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            // to="/dashboard"
            className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 text-lg font-semibold shadow-md"
          >
            Go to Dashboard
          </Link>
          <Link
            // to="/support"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-md"
          >
            Contact Support
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;