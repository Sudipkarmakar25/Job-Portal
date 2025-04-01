import { useEffect, useState } from "react";

const AdminProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("adminProfile");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Retrieve stored user data
    }
  }, []);

  return (
    <div className="flex flex-col  justify-center min-h-screen bg-amber-100">
      {user ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100 p-6">
        {user && (
          <div className="w-full max-w-md bg-amber-50 rounded-xl shadow-lg p-8 text-center">
            {user.photo && (
              <img
                src={user.photo}
                alt="Admin"
                className="w-32 h-32 rounded-full object-cover border-4 border-amber-500 shadow-lg mx-auto"
              />
            )}
            <h2 className="mt-4 text-3xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 text-lg mt-1">{user.email}</p>
            <p className="text-gray-600 text-lg mt-1">{user.contact}</p>
          </div>
        )}
      </div>
      ) : (
        <p className="text-gray-500">No admin data found.</p>
      )}
    </div>
  );
};

export default AdminProfile;
