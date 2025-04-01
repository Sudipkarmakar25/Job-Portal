

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}

      <main className="flex flex-col items-center justify-center flex-grow bg-amber-100 shadow-md text-center px-6">
        {/* Company Logo */}
        <img 
           src={Logo} 
           alt="Company Logo" 
           className="w-60 h-60 mb-6 rounded-full shadow-lg border-4 border-gray-300 p-2 bg-gradient-to-r hover:scale-105 transition-transform"
        />
        
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold">Welcome to CarrierHorizon</h1>
        <p className="text-lg mt-4 text-gray-700">
          We are glad to have you here!
        </p>
        
        {/* Navigation Button */}
        <Link 
          to="/" 
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
