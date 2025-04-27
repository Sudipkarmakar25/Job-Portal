import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Internships from './Pages/Internship';
import Job from "./Pages/Job";
import Hrdesk from "./Pages/Hrdesk";
import './index.css';
import './App.css';


function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/hrdesk" element={<Hrdesk />}/>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
