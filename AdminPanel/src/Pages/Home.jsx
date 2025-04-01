

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";
const Home = ({user}) => {
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
        <h1 className="text-4xl font-bold overflow-hidden border-r-4 pr-2 animate-typing whitespace-nowrap">

        {user.name}

      </h1>

      <h1 className="text-5xl font-bold overflow-hidden border-r-4 pr-2 animate-typing whitespace-nowrap mt-4">

        Welcome to CarrierHorizon

      </h1>

      <p className="text-xl mt-4 text-gray-700 overflow-hidden border-r-4 pr-2 animate-typing whitespace-nowrap">

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
