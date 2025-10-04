import { useState } from 'react'
import './App.css'
import { Children } from 'react';
import Footer from './components/Footer/Footer.tsx';
import Home from './components/Home/Home.tsx';
import Layout from './components/Layout/Layout.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Portfolio from './components/portfolio/Portfolio.tsx';
import Contact from './components/contact/Contact.tsx';
import Notfound from './components/notfound/Notfound.tsx';


let routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Home /> },
      {path: 'about', element: <About />},
      {path: 'portfolio', element: <Portfolio />},
      {path: 'contact', element: <Contact />},
      {path: '*', element: <Notfound />},
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={routers}>

      </RouterProvider>
    </>
  )
}

export default App
