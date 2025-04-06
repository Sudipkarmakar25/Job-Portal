import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.webp";

export default function Header({ handleLogout, user }) {
  const navigate = useNavigate();
  const [jobDropdownOpen, setJobDropdownOpen] = useState(false);
  const [internDropdownOpen, setInternDropdownOpen] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    closeDropdowns();
  };

  const toggleInternDropdown = () => {
    setInternDropdownOpen(prev => !prev);
    setJobDropdownOpen(false);
  };

  const toggleJobDropdown = () => {
    setJobDropdownOpen(prev => !prev);
    setInternDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setJobDropdownOpen(false);
    setInternDropdownOpen(false);
  };

  return (
    <header className="bg-amber-500 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/adminprofile" className="flex items-center pl-5 ml-5 hover:scale-105">
          <img src={Logo} alt="Company Logo" className="w-14 h-14 rounded-full shadow-lg transition-transform" />
          <span className="text-xl font-bold">AdminProfile</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-5 font-medium text-lg relative">
          <li>
            <NavLink
              to="/"
              onClick={handleHomeClick}
              className={({ isActive }) =>
                `px-3 py-1 transition ${isActive ? "text-orange-700 font-semibold" : "text-gray-700 hover:text-orange-800"}`
              }
            >
              <span className="font-bold">Home</span>
            </NavLink>
          </li>

          {/* Internships */}
          <li className="relative">
            {user?.role === "superadmin" ? (
              <>
                <button
                  onClick={toggleInternDropdown}
                  className="px-3 py-1 text-gray-700 hover:text-orange-800 font-bold"
                >
                  Internships
                </button>
                {internDropdownOpen && (
                  <div className="absolute bg-white shadow-md rounded-md mt-2 w-44 z-50">
                    <NavLink
                      to="/allinternships"
                      className="block px-4 py-2 hover:bg-amber-100"
                      onClick={closeDropdowns}
                    >
                      AllInternships
                    </NavLink>
                    <NavLink
                      to="/myinternships"
                      className="block px-4 py-2 hover:bg-amber-100"
                      onClick={closeDropdowns}
                    >
                      MyInternships
                    </NavLink>
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to="/myinternships"
                className={({ isActive }) =>
                  `px-3 py-1 transition font-bold ${isActive ? "text-orange-700 font-semibold" : "text-gray-700 hover:text-orange-800"}`
                }
              >
                Internships
              </NavLink>
            )}
          </li>

          {/* Jobs */}
          <li className="relative">
            {user?.role === "superadmin" ? (
              <>
                <button
                  onClick={toggleJobDropdown}
                  className="px-3 py-1 text-gray-700 hover:text-orange-800 font-bold"
                >
                  Jobs
                </button>
                {jobDropdownOpen && (
                  <div className="absolute bg-white shadow-md rounded-md mt-2 w-36 z-50">
                    <NavLink
                      to="/alljobs"
                      className="block px-4 py-2 hover:bg-amber-100"
                      onClick={closeDropdowns}
                    >
                      AllJobs
                    </NavLink>
                    <NavLink
                      to="/myjobs"
                      className="block px-4 py-2 hover:bg-amber-100"
                      onClick={closeDropdowns}
                    >
                      MyJobs
                    </NavLink>
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to="/myjobs"
                className={({ isActive }) =>
                  `px-3 py-1 transition font-bold ${isActive ? "text-orange-700 font-semibold" : "text-gray-700 hover:text-orange-800"}`
                }
              >
                Jobs
              </NavLink>
            )}
          </li>

          <li>
            <NavLink
              to="/addjobs"
              onClick={closeDropdowns}
              className={({ isActive }) =>
                `px-3 py-1 transition ${isActive ? "text-orange-700 font-semibold" : "text-gray-700 hover:text-orange-700"}`
              }
            >
              <span className="font-bold">AddJobs</span>
            </NavLink>
          </li>

          {/* Dashboard button only for superadmin */}
          {user?.role === "superadmin" && (
            <li>
              <button
                onClick={() => {
                  navigate("/superadmin");
                  closeDropdowns();
                }}
                className="px-4 py-1 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
              >
                Admins
              </button>
            </li>
          )}

          {/* Logout */}
          <li>
            <button
              onClick={() => {
                handleLogout();
                closeDropdowns();
              }}
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
