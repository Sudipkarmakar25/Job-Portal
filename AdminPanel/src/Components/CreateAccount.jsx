
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CreateAccount = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: "",
//     photo: null,
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setFormData({ ...formData, photo: reader.result });
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     const { name, email, contact, password, confirmPassword, photo } = formData;

//     if (!name || !email || !contact || !password || !confirmPassword) {
//       setError("All fields are required.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     const newRequest = { name, email, contact, photo };
//     const pendingRequests = JSON.parse(localStorage.getItem("pendingAdmins")) || [];
//     localStorage.setItem("pendingAdmins", JSON.stringify([...pendingRequests, newRequest]));

//     navigate("/login");
//   };

//   return (
//     <div className="flex flex-col min-h-screen items-center justify-center bg-amber-100">
//       <div className="w-full max-w-md p-6 bg-amber-50 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-center">Create Account</h2>
//         {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
//         <form onSubmit={handleSubmit} className="mt-4">
//           {['name', 'email', 'contact', 'password', 'confirmPassword'].map((field, index) => (
//             <input
//               key={index}
//               type={field.includes("password") ? "password" : field === "contact" ? "tel" : "text"}
//               name={field}
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//               className="w-full px-3 py-2 border rounded-md mt-2"
//               value={formData[field]}
//               onChange={handleChange}
//               required
//             />
//           ))}
//           <input
//             type="file"
//             accept="image/*"
//             className="w-full px-3 py-2 border rounded-md mt-2"
//             onChange={handlePhotoChange}
//           />
//           {formData.photo && (
//             <img
//               src={formData.photo}
//               alt="Preview"
//               className="mt-2 w-20 h-20 rounded-full object-cover mx-auto"
//             />
//           )}
//           <button type="submit" className="w-full px-4 py-2 bg-amber-200 text-red-700 rounded-md mt-4  font-semibold hover:bg-amber-300 transition">
//             Request Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateAccount;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, phone, password, confirmPassword } = formData;

    // Validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Prepare the data to send to the backend
    const newRequest = {
      name,
      email,
      phone,
      password, // Send password as plain text (it will be hashed in the backend)
    };

    try {
      // Send the POST request to the backend API using fetch
      const response = await fetch("https://backendjob-nu.vercel.app/api/request/addRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Tell the server we are sending JSON
        },
        body: JSON.stringify(newRequest), // Convert the data to JSON
      });

      if (!response.ok) {
        // Handle error if response is not OK
        throw new Error("Error submitting request.");
      }

      // Redirect to login after successful account request submission
      navigate("/login");
    } catch (error) {
      console.error("Error submitting request:", error);
      setError("Error submitting request.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-amber-100">
      <div className="w-full max-w-md p-6 bg-amber-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Create Account</h2>
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-4">
          {['name', 'email', 'phone', 'password', 'confirmPassword'].map((field, index) => (
            <input
              key={index}
              type={field.includes("password") ? "password" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full px-3 py-2 border rounded-md mt-2"
              value={formData[field]}
              onChange={handleChange}
              required
            />
          ))}
          <button type="submit" className="w-full px-4 py-2 bg-amber-200 text-red-700 rounded-md mt-4 font-semibold hover:bg-amber-300 transition">
            Request Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
