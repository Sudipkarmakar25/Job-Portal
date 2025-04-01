



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuperadminDashboard = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole !== "superadmin") {
      navigate("/"); // Redirect if not superadmin
    } else {
      setRole(storedRole);
    }

    const storedAdmins = JSON.parse(localStorage.getItem("admins")) || [];
    const storedRequests = JSON.parse(localStorage.getItem("pendingAdmins")) || [];
    setAdmins(storedAdmins);
    setPendingRequests(storedRequests);
  }, [navigate]);

  const handleApprove = (index) => {
    const updatedRequests = [...pendingRequests];
    const newAdmin = updatedRequests.splice(index, 1)[0];
    const updatedAdmins = [...admins, newAdmin];

    setAdmins(updatedAdmins);
    setPendingRequests(updatedRequests);

    localStorage.setItem("admins", JSON.stringify(updatedAdmins));
    localStorage.setItem("pendingAdmins", JSON.stringify(updatedRequests));
  };

  const handleReject = (index) => {
    const updatedRequests = [...pendingRequests];
    updatedRequests.splice(index, 1);
    setPendingRequests(updatedRequests);
    localStorage.setItem("pendingAdmins", JSON.stringify(updatedRequests));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Superadmin Dashboard</h2>
      
      {/* Pending Requests */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Pending Requests</h3>
        {pendingRequests.length === 0 ? (
          <p className="text-gray-600">No pending requests.</p>
        ) : (
          pendingRequests.map((admin, index) => (
            <div key={index} className="p-3 border-b flex items-center">
              {admin.photo && (
                <img src={admin.photo} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
              )}
              <div className="flex-grow">
                <p className="font-medium">{admin.name} - {admin.email}</p>
              </div>
              <button 
                onClick={() => handleApprove(index)} 
                className="px-3 py-1 bg-green-500 text-white rounded-md mr-2">Approve</button>
              <button 
                onClick={() => handleReject(index)} 
                className="px-3 py-1 bg-red-500 text-white rounded-md">Reject</button>
            </div>
          ))
        )}
      </div>

      {/* Admin List */}
      <div className="w-full max-w-lg p-4 mt-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Admin List</h3>
        {admins.length === 0 ? (
          <p className="text-gray-600">No registered admins.</p>
        ) : (
          admins.map((admin, index) => (
            <div key={index} className="p-3 border-b flex items-center">
              {admin.photo && (
                <img src={admin.photo} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
              )}
              <p className="flex-grow">{admin.name} - {admin.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SuperadminDashboard;
