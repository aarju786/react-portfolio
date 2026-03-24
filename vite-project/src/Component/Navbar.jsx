import React from 'react'

export default function Navbar() {
  return (
    <div>

      <nav className='flex justify-between items-center px-8 py-5 bg-gray-900 text-white'>
        <ul className='flex gap-5 '>
          <li className= "hover:text-blue-400"><a href="">Home</a></li>
          <li  className= "hover:text-blue-400" ><a href="">About</a></li>
          <li  className= "hover:text-blue-400"><a href="">Resume</a></li>
          <li  className= "hover:text-blue-400"><a href="">Portfolio</a></li>
        </ul>
      
          <a href=" tel:+91654800675"className="text-sm text-white hover:text-blue-400"> 91654800675</a>
      
      
       
      </nav>
    </div>
  )
}
