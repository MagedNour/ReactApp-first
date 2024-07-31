import { useState } from 'react'


import './App.css'
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';

let router = createBrowserRouter([
  {
    path: "ReactApp-first/", element: <Layout />, children: [

      { path: "", element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Contact /> },

    ]
  }
])

function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
