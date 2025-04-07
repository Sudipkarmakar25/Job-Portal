import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 h-[90px] bg-gray-900 shadow-md">
      {/* Logo */}
      <div className="text-white text-3xl font-semibold tracking-wide">
        Career<span className="text-blue-400">Horizon</span>
      </div>

      {/* Menu */}
      <ul className="flex space-x-8">
        {['Home', 'About Us', 'Internships', 'Jobs', 'Notification'].map((item, index) => (
          <li
            key={index}
            className="text-white text-lg font-medium relative group cursor-pointer transition duration-200"
          >
            {item}
            {/* Underline on hover */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
