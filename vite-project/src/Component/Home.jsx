import React from 'react'
import I1 from '../Images/photo-1602016736566-7ed6a58894bd.jpg'


export default function Home() {
  return (
    <div>

      <div className='flex relative'>
        <img classname='w-screen h-screen' src={I1} alt="" />
      </div>

      <div className=' absolute top-60 left-50 right-0 text-white' >
        <h1 className='text-9xl '>Arju <br /><b>Sharma</b></h1>
        <h4 className='text-5xl italic mt-4'>Web Developer</h4> 


        <div className='flex gap-7 mt-20 text-2xl'>
          <button className='border-2 border-white rounded-3xl px-4 py-1 hover:bg-white hover:text-black'>Resume</button>
          <button className='border-2 border-white rounded-3xl px-4 py-1 hover:bg-white hover:text-black'>Portfolio</button>
        </div>
      </div>

      <div className='absolute top-300 left-45 flex gap-4  text-4xl ' >
        <a href=""><i class="fa-brands fa-whatsapp"></i></a> 
        <a href=""><i class="fa-brands fa-instagram "></i></a>
        <a href=""><i class="fa-brands fa-github "></i></a>
        <a href=""><i class="fa-brands fa-pinterest-p "></i></a>
        <a href=""><i class="fa-brands fa-twitter "></i></a>
        <a href=""><i class="fa-brands fa-linkedin-in "></i></a>
        <a href=""><i class="fa-brands fa-facebook-f "></i></a>
      </div>




    </div>

  )
}
