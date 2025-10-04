import React from 'react'
import port1 from '../../assets/poert1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';
import style from './Portfolio.module.css';

export default function Portfolio() {
   return (
      <>
         <div className='mt-3'>
            <article className="text-center mb-3">
               <h3 className='h1 text-uppercase start color-first'>portfolio component</h3>
               <div className='d-flex justify-content-center align-items-center gap-3'>
                  <div className="line bg-first"></div>
                  <i className='fa-solid fa-star'></i>
                  <div className="line bg-first"></div>
               </div>
            </article>

            <div className="container py-4">
               <div className="row g-4">
                  <div className="col-4">
                     <div className={`position-relative ${style.plus}`}>
                        <img src={port1} className='rounded-4' alt="" />
                        <div className={`${style.show} position-absolute top-0 start-0 end-0 bottom-0 bg-second rounded-4 opacity-0 d-flex justify-content-center align-items-center`}>
                           <i className='fa-solid fa-plus h1 text-white fa-2xl'></i>
                        </div>
                     </div>
                  </div>
                  <div className="col-4">
                     <div className={`position-relative ${style.plus}`}>
                        <img src={port2} className='rounded-4' alt="" />
                        <div className={`${style.show} position-absolute top-0 start-0 end-0 bottom-0 bg-second rounded-4 opacity-0 d-flex justify-content-center align-items-center`}>
                           <i className='fa-solid fa-plus h1 text-white fa-2xl'></i>
                        </div>
                     </div>
                  </div>
                  <div className="col-4">
                     <div className={`position-relative ${style.plus}`}>
                        <img src={port3} className='rounded-4' alt="" />
                        <div className={`${style.show} position-absolute top-0 start-0 end-0 bottom-0 bg-second rounded-4 opacity-0 d-flex justify-content-center align-items-center`}>
                           <i className='fa-solid fa-plus h1 text-white fa-2xl'></i>
                        </div>
                     </div>
                  </div>
                  <div className="col-4">
                     <div className={`position-relative ${style.plus}`}>
                        <img src={port1} className='rounded-4' alt="" />
                        <div className={`${style.show} position-absolute top-0 start-0 end-0 bottom-0 bg-second rounded-4 opacity-0 d-flex justify-content-center align-items-center`}>
                           <i className='fa-solid fa-plus h1 text-white fa-2xl'></i>
                        </div>
                     </div>
                  </div>
                  <div className="col-4">
                     <div className={`position-relative ${style.plus}`}>
                        <img src={port2} className='rounded-4' alt="" />
                        <div className={`${style.show} position-absolute top-0 start-0 end-0 bottom-0 bg-second rounded-4 opacity-0 d-flex justify-content-center align-items-center`}>
                           <i className='fa-solid fa-plus h1 text-white fa-2xl'></i>
                        </div>
                     </div>
                  </div>
                  <div className="col-4">
                     <div className={`position-relative ${style.plus}`}>
                        <img src={port3} className='rounded-4' alt="" />
                        <div className={`${style.show} position-absolute top-0 start-0 end-0 bottom-0 bg-second rounded-4 opacity-0 d-flex justify-content-center align-items-center`}>
                           <i className='fa-solid fa-plus h1 text-white fa-2xl'></i>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
