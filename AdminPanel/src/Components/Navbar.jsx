
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";

const Navbar = () => {
  return (
    // <nav className="flex justify-between items-center px-6 py-4 bg-amber-200 shadow-lg text-slate-900">
    <header className="bg-amber-200 shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
      
      {/* Logo Section */}
      <Link to="/" className="flex items-center pl-5 ml-5">
        <img 
          src={Logo} 
          alt="Company Logo" 
          className="w-14 h-14 rounded-full shadow-lg  transition-transform"
        />
        <span className="text-xl font-semibold">AdminPanel</span>
      </Link>
      
      {/* Login & Create Account Buttons */}
      <div className="flex items-center gap-3">
        <Link 
          to="/login" 
          // className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          className="px-5 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
        >
          Login
        </Link>
        <Link 
          to="/createaccount" 
          className="px-5 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
        >
          Create Account
        </Link>
      </div>
      
    </nav>
    </header>
  );
};

export default Navbar;
