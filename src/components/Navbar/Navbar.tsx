import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './navbar.module.css'

export default function Navbar() {
   return (
      <>
         <div className='bg-first text-white fixed-top'>
            <div className="container text-uppercase">
               <div className='d-flex justify-content-between align-items-center py-4'>
                  <div>
                     <Link to={'/'} className='h1 start text-decoration-none'>start framework</Link>
                  </div>
                  <div>
                     <ul className='nav gap-3'>
                        <li className='nav-item'>
                           <NavLink to={'about'} className={`${style.navbar} p-2 rounded rounded-3`}>About</NavLink>
                        </li>
                        <li className='nav-item'>
                           <NavLink to={'portfolio'} className={`${style.navbar} p-2 rounded rounded-3`}>Portfolio</NavLink>
                        </li>
                        <li className='nav-item'>
                           <NavLink to={'contact'} className={`${style.navbar} p-2 rounded rounded-3`}>Contact</NavLink>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
