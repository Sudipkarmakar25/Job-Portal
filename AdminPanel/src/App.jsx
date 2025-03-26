import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">AdminLogo</div>
      <div>
        <Link to="/login" className="px-4 py-2 mr-2 bg-blue-500 rounded-md">Login</Link>
        <Link to="/createaccount" className="px-4 py-2 bg-green-500 rounded-md">CreateAccount</Link>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="p-4 text-center bg-gray-800 text-white mt-auto">
      &copy; {new Date().getFullYear()} Admin Panel. All rights reserved.
    </footer>
  );
};

const AdminPage = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<CreateAccount />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default AdminPage;
