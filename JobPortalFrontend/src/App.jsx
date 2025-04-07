import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './Pages/Home'
import './index.css';
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
