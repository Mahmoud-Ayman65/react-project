import React from 'react'
import style from './about.module.css'

export default function About() {
   return (
      <>
      <div className='bg-second'>
         <div className={`container about bg-second text-white text-center ${style['py-6']}`}>
            <article>
               <h1 className='m-0 text-uppercase'>about component</h1>
            </article>
            <div className='d-flex justify-content-center align-items-center gap-3 my-3'>
               <div className="line"></div>
               <i className='fa-solid fa-star'></i>
               <div className="line"></div>
            </div>
            <article className='d-flex justify-content-between align-items-center w-75 m-auto text-start'>
               <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
               <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </article>
         </div>
      </div>
      </>
   )
}
