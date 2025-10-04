import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
   return (
      <>
         <div className="container-fluid bg-first py-5">
            <div className="container text-white text-center">
               <div className="row">
                  <div className="col-4">
                     <p className='h3 text-uppercase'>Location</p>
                     <p>2215 John Daniel Drive</p>
                     <p>Clark, MO 65243</p>
                  </div>
                  <div className="col-4">
                     <h3>AROUND THE WEB</h3>
                     <div className='d-flex justify-content-center align-items-center gap-3 pt-2'>
                        <i className={`fa-brands fa-facebook fa-lg ${style.footer}`}></i>
                        <i className={`fa-brands fa-twitter fa-lg ${style.footer}`}></i>
                        <i className={`fa-brands fa-linkedin fa-lg ${style.footer}`}></i>
                        <i className={`fa-solid fa-globe fa-lg ${style.footer}`}></i>
                     </div>
                  </div>
                  <div className="col-4">
                     <h3>ABOUT FREELANCER</h3>
                     <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                  </div>
               </div>
            </div>
         </div>
         <div className='bg-third text-center text-white py-4'>
            <p className='m-0'>Copyright © Your Website 2021</p>
         </div>
      </>
   )
}
