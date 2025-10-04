import React from 'react'

export default function Contact() {
   return (
      <>
         <div className='contact'>
            <article className='text-center'>
               <h4 className='text-uppercase start color-first'>conatct section</h4>
               <div className='d-flex justify-content-center align-items-center gap-3 mt-2'>
                  <div className="line bg-first"></div>
                  <i className='fa-solid fa-star'></i>
                  <div className="line bg-first"></div>
               </div>
            </article>
            <div className='py-5 w-50 mx-auto'>
               <input type="text" className='border-0 border-bottom rounded-4 px-3 py-4 d-block w-100 my-3' placeholder='userName' name="" id="" />
               <input type="number" className='border-0 border-bottom rounded-4 px-3 py-4 d-block w-100 my-3' placeholder='userAge' name="" id="" />
               <input type="email" className='border-0 border-bottom rounded-4 px-3 py-4 d-block w-100 my-3' placeholder='userEmail' name="" id="" />
               <input type="password" className='border-0 border-bottom rounded-4 px-3 py-4 d-block w-100 my-3' placeholder='userPassword' name="" id="" />

               <button className='btn btn-success bg-second border-0'>Send Message</button>
            </div>
         </div>
      </>
   )
}
