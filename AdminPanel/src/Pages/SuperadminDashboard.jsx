// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie"; 

// const SuperadminDashboard = () => {
//   const navigate = useNavigate();
//   const [requests, setRequests] = useState([]);
//   const [admins, setAdmins] = useState([]);
//   const [loading, setLoading] = useState(true); // State to manage loading status
//   const [error, setError] = useState(null); // State to manage error messages

//   useEffect(() => {
//     const getCookie = (name) => {
//       const value = `; ${document.cookie}`;
//       const parts = value.split(`; ${name}=`);
//       if (parts.length === 2) return parts.pop().split(';').shift();
//       return null;
//     };
    
//     const token = getCookie("accessToken");
//     console.log("Token from document.cookie:", token);
    
//     const fetchRequests = async () => {
//       setLoading(true); // Start loading
//       setError(null); // Reset error state

//       try {
//         const response = await fetch("http://localhost:3000/api/request/getAllRequests", {
//           method: "GET",
//           headers: { Authorization: `Bearer ${token}` },
//           credentials: "include",  
//         });

//         if (!response.ok) {
//           console.log("Unauthorized: Removing token");
//           Cookies.remove("accessToken");
//           navigate("/login");
//           return;
//         }

//         const data = await response.json();
//         console.log("Fetched Data:", data); // 🔍 Debugging

//         if (data.success) {
//           setRequests(data.data.filter(req => req.role === "user"));
//           setAdmins(data.data.filter(req => req.role === "admin"));
//         } else {
//           setError(data.message || "Failed to fetch data");
//         }
//       } catch (error) {
//         console.error("Error fetching requests:", error);
//         setError("An error occurred while fetching data.");
//       } finally {
//         setLoading(false); // End loading
//       }
//     };

//     fetchRequests();
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>; // Loading state
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Error state
//   }

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-4">Superadmin Dashboard</h1>
//       <h2 className="text-xl font-semibold mb-2">User  Requests</h2>
//       <ul>
//         {requests.map((request) => (
//           <li key={request.id}>{request.name}</li> // Adjust according to your request structure
//         ))}
//       </ul>
//       <h2 className="text-xl font-semibold mb-2">Admins</h2>
//       <ul>
//         {admins.map((admin) => (
//           <li key={admin.id}>{admin.name}</li> // Adjust according to your admin structure
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SuperadminDashboard;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 

const SuperadminDashboard = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };
    
    const token = getCookie("accessToken");
    console.log("Token from document.cookie:", token);
    
    const fetchRequests = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3000/api/request/getAllRequests", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
          credentials: "include",  
        });

        if (!response.ok) {
          console.log("Unauthorized: Removing token");
          Cookies.remove("accessToken");
          navigate("/login");
          return;
        }

        const data = await response.json();
        console.log("Fetched Data:", data);

        if (data.success) {
          setRequests(data.data.filter(req => req.role === "user"));
          setAdmins(data.data.filter(req => req.role === "admin"));
        } else {
          setError(data.message || "Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching requests:", error);
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [navigate]);

  const handleApprove = async (id) => {
    if (!id) {
      console.error("Error: Request ID is undefined.");
      return;
    }
  
    console.log(`Approving request with ID: ${id}`);
  
    try {
      const token = Cookies.get("accessToken");
  
      const response = await fetch(`http://localhost:3000/api/request/confirmRequest/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Failed to approve request. Server Response: ${errorText}`);
        return;
      }
  
      setRequests((prevRequests) => prevRequests.filter((req) => req._id !== id));
      setAdmins((prevAdmins) => [...prevAdmins, requests.find((req) => req._id === id)]);
      
      console.log(`Request ${id} approved successfully.`);
    } catch (error) {
      console.error("Error approving request:", error);
    }
  };
  
  const handleReject = async (id) => {
    if (!id) return;
    try {
      const response = await fetch(`http://localhost:3000/api/request/deleterequest/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        setRequests((prevRequests) => prevRequests.filter((req) => req._id !== id));
        setAdmins((prevAdmins) => prevAdmins.filter((admin) => admin._id !== id));
      } else {
        console.error("Failed to reject request");
      }
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-xl font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-600 text-xl font-semibold">Error: {error}</div>;
  }

  return (
    <div className="p-5 flex flex-col items-center min-h-screen mx-auto bg-amber-100 justify-center ">
      
      <div className="bg-amber-200 shadow-md rounded-lg p-5 mb-6 w-2/3">
        <h2 className="text-2xl text-center font-semibold    mb-4">Admin Requests</h2>
        {/* <h2 className="text-2xl text-center font-semibold mb-4" style={{ color: 'rgb(45, 55, 72)' }}>Admin Requests</h2> */}

        <ul>
          {requests.map((request) => (
            <li key={request._id} className="flex justify-between items-center bg-amber-50 p-3 mb-2 rounded-lg shadow-sm">
              <div className="flex flex-col ">
              <span><strong>Name:</strong> {request.name}</span>
              <span><strong>Email:</strong> {request.email}</span>
              <span><strong>Phone:</strong> {request.phone}</span>
              
              </div>
              <div className="flex space-x-2 ml-auto">
                <button onClick={() => handleApprove(request._id)} className="bg-green-400 text-white px-3 py-1 font-semibold rounded-md hover:bg-green-600">Approve</button>
                <button onClick={() => handleReject(request._id)} className="bg-red-400 text-white px-3 py-1 rounded-md font-semibold hover:bg-red-600">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-amber-200 shadow-md rounded-lg p-5 w-2/3 ">
        <h2 className="text-2xl text-center font-semibold mb-4">Admins</h2>
        <ul>
          {admins.map((admin) => (
            <li key={admin._id} className="flex justify-between items-center bg-amber-50 p-3 mb-2 rounded-lg shadow-sm">
              <div className="flex flex-col">
              <span><strong>Name:</strong> {admin.name}</span>
              <span><strong>Email:</strong> {admin.email}</span>
              <span><strong>Phone:</strong> {admin.phone}</span>
              </div>
              <div className="flex space-x-2 ml-auto">
                <button onClick={() => handleReject(admin._id)} className="bg-red-400 text-white font-semibold px-3 py-1 rounded-md hover:bg-red-600">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SuperadminDashboard;
