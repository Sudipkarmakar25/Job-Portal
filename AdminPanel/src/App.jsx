


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import AddJobs from "./Pages/AddJobs";
import Internships from "./Pages/Internships";
import Jobs from "./Pages/Jobs";
import Header from "./Pages/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import Navbar from "./Components/Navbar";
import AdminProfile from "./Pages/AdminProfile";
import SuperadminDashboard from "./Pages/SuperadminDashboard";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => setUser(null);

  return (
    <Router>
      {user ? <Header handleLogout={handleLogout} user={user} /> : <Navbar />}

      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        {/* <Route path="/" element={user ? (user.role === "admin" ? <Home /> : <SuperadminDashboard />) : <Navigate to="/login" />} /> */}
        
        <Route path="/" element={user ? <Home user={user}/> : <Navigate to="/login" />} />

        {/* Admin Routes */}
        <Route path="/adminprofile" element={user? <AdminProfile /> : <Navigate to="/login" />} />
        <Route path="/internships" element={user? <Internships /> : <Navigate to="/login" />} />
        <Route path="/jobs" element={user? <Jobs /> : <Navigate to="/login" />} />
        <Route path="/addjobs" element={user? <AddJobs /> : <Navigate to="/login" />} />
       


        {/* Superadmin Route */}
        <Route 
          path="/superadmin" 
          element={user && user.role === "superadmin" ? <SuperadminDashboard /> : <Navigate to="/login" />} 
        />


        {/* Catch-all Route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;