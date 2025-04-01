
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
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (role) => {
    setRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setRole(null);
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {/* Show Navbar only if not logged in */}
      {!isAuthenticated ? <Navbar /> : <Header setRole={setRole} setIsAuthenticated={setIsAuthenticated} handleLogout={handleLogout} />}

      <Routes>
        {/* Always show Login as the default page */}
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/createaccount" element={<CreateAccount />} />

        {/* Redirect to login if not authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              role === "admin" ? (
                <Home />
              ) : role === "superadmin" ? (
                <SuperadminDashboard />
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Admin Routes */}
        <Route
          path="/adminprofile"
          element={isAuthenticated && role === "admin" ? <AdminProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/internships"
          element={isAuthenticated && role === "admin" ? <Internships /> : <Navigate to="/login" />}
        />
        <Route
          path="/jobs"
          element={isAuthenticated && role === "admin" ? <Jobs /> : <Navigate to="/login" />}
        />
        <Route
          path="/addjobs"
          element={isAuthenticated && role === "admin" ? <AddJobs /> : <Navigate to="/login" />}
        />

        {/* Superadmin Route */}
        <Route
          path="/superadmin"
          element={isAuthenticated && role === "superadmin" ? <SuperadminDashboard /> : <Navigate to="/login" />}
        />

        {/* Catch-all Route: Redirect to login if not authenticated */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

      {/* Show Footer only if logged in */}
      <Footer />
    </Router>
  );
}

export default App;