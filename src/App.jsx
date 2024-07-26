import { useState } from 'react'


import './App.css'
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  

  return (
    <>
        <Home />
        <Portfolio />
        <About/>
        <Contact/>
        <Footer/>
      
    </>
  )
}

export default App
