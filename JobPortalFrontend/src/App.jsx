import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Internships from './Pages/Internship';

import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/internships" element={<Internships />} />
      </Routes>
    </>
  );
}

export default App;
