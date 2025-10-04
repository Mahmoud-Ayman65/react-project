import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
   return (
      <>
         <Navbar />
         <div className="container-fluid mt-5 pt-5 p-0">
            <Outlet />
         </div>
         <Footer />
      </>
   )
}
