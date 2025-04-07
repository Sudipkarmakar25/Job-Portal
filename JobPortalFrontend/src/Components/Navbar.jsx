import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between rounded-xl items-center bg-gray-800 p-4">
            <div className="text-white text-2xl font-bold">CareerHorizon</div>
            <ul className="flex space-x-6">

                <span className="text-white hover:text-yellow-400 text-xl">Home</span>
                <span className="text-white hover:text-yellow-400 text-xl">AboutUs</span>
                <span className="text-white hover:text-yellow-400 text-xl">Internships</span>
                <span className="text-white hover:text-yellow-400 text-xl">Jobs</span>
                <span className="text-white hover:text-yellow-400 text-xl">Notification</span>
                
            </ul>
        </nav>
    );
};

export default Navbar;