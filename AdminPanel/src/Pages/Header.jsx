import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.webp";

export default function Header({ handleLogout, user }) {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true }); // Force Home to reload properly
  };

  return (
    <header className="bg-amber-500 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/adminprofile" className="flex items-center pl-5 ml-5 hover:scale-105">
          <img 
            src={Logo} 
            alt="Company Logo" 
            className="w-14 h-14 rounded-full shadow-lg transition-transform"
          />
          <span className="text-xl font-bold">AdminProfile</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-5 font-medium text-lg">
          <li>
            <NavLink
              to="/"
              onClick={handleHomeClick}
              className={({ isActive }) =>
                `px-3 py-1 transition ${isActive ? "text-orange-700 font-semibold" : "text-gray-700 hover:text-orange-800"}`
              }
            >
              <span className='font-bold'>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/internships"
              className={({ isActive }) =>
                `px-3 py-1 transition ${isActive ? "text-orange-700 font-semibold" : "text-gray-700 hover:text-orange-800"}`
              }
            >
              <span className='font-bold'>Internships</span>
              
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                `px-3 py-1 transition ${isActive ? "text-orange-700 font-semibold" : "text-gray-700 hover:text-orange-800"}`
              }
            >
              <span className='font-bold'>Jobs</span>
              
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addjobs"
              className={({ isActive }) =>
                `px-3 py-1 transition ${isActive ? "text-orange-700 font-semibold" : "text-gray-700 hover:text-orange-700"}`
              }
            >
              <span className='font-bold'>AddJobs</span>
              
            </NavLink>
          </li>

          {/* Dashboard button only visible to superadmin */}
          {user && user.role === "superadmin" && (
            <li>
              <button
                onClick={() => navigate("/superadmin")}
                className="px-4 py-1 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
              >
                Admins
              </button>
            </li>
          )}

          {/* Logout Button */}
          <li>
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
