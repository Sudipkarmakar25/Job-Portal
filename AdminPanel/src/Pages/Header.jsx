



import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.webp";

export default function Header({  handleLogout }) {
    const navigate = useNavigate();

    

    const handleHomeClick = (e) => {
        e.preventDefault();
        navigate("/", { replace: true }); // Force Home to reload properly
    };

    return (
        <header className="bg-amber-200 shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
                
                {/* Logo */}
                <Link to="/adminprofile" className="flex items-center pl-5 ml-5 hover:scale-105">
                    <img 
                        src={Logo} 
                        alt="Company Logo" 
                        className="w-14 h-14 rounded-full shadow-lg transition-transform"
                    />
                    <span className="text-xl font-semibold">AdminProfile</span>
                </Link>

                {/* Navigation Links */}
                <ul className="flex items-center space-x-5 font-medium text-lg">
                    <li>
                        <NavLink
                            to="/"
                            onClick={handleHomeClick}
                            className={({ isActive }) =>
                                `px-3 py-1 transition ${
                                    isActive 
                                        ? "text-orange-700 font-semibold" 
                                        : "text-gray-700 hover:text-orange-700"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/internships"
                            className={({ isActive }) =>
                                `px-3 py-1 transition ${
                                    isActive 
                                        ? "text-orange-700 font-semibold" 
                                        : "text-gray-700 hover:text-orange-700"
                                }`
                            }
                        >
                            Internships
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/jobs"
                            className={({ isActive }) =>
                                `px-3 py-1 transition ${
                                    isActive 
                                        ? "text-orange-700 font-semibold" 
                                        : "text-gray-700 hover:text-orange-700"
                                }`
                            }
                        >
                            Jobs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addjobs"
                            className={({ isActive }) =>
                                `px-3 py-1 transition ${
                                    isActive 
                                        ? "text-orange-700 font-semibold" 
                                        : "text-gray-700 hover:text-orange-700"
                                }`
                            }
                        >
                            AddJobs
                        </NavLink>
                    </li>

                    {/* Logout Button */}
                    <li>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-1 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}