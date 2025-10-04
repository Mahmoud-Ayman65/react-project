import React from 'react'
import smile from '../../assets/avataaars.svg'

export default function Home() {
   return (
      <>
         <div className="home-container bg-second py-3">
            <div className="w-25 m-auto">
               <img src={smile} alt="" />
            </div>
            <div className='text-center text-white'>
               <h3 className='h1 start text-uppercase'>start Framework</h3>
               <div className='d-flex justify-content-center align-items-center gap-4'>
                  <div className='line'></div>
                  <i className='fa-solid fa-star'></i>
                  <div className="line"></div>
               </div>
               <p className='mt-2'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
         </div>
      </>
   )
}
