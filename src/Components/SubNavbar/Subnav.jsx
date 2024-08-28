import React from 'react'
import { Link } from 'react-router-dom';
import { BiSolidOffer } from "react-icons/bi";
 
function Subnav() {
  return (
    <div className=''>
      <nav className="bg-[#1e1e1e] text-white h-16 md:h-10 w-full shadow-md flex  flex-col items-center justify-center
      gap-y-3 gap-x-4 md:flex md:justify-evenly md:items-center flex-wrap "> 
        <Link to="/" className='text-sm  font-medium  hover:underline'>LIPS</Link>
        <Link to="/" className='text-sm  font-medium  hover:underline'>EYES</Link>
        <Link to="/" className='text-sm  font-medium  hover:underline'>FACE</Link>
        <Link to="/" className='text-sm  font-medium  hover:underline'>NAILS</Link>
        <Link to="/" className='text-sm  font-medium  hover:underline'>SKINCARE</Link>
        <Link to="/" className='text-sm  font-medium  hover:underline'>HAIR</Link>
       <div className='flex justify-center items-center gap-1 hover:underline'>
       <div>
        <Link to="/" className='text-sm font-medium '>OFFERS </Link>
        </div>
        <div className='text-red-600 text-xl'>
        <BiSolidOffer />
        </div>
       </div>
        <Link to="/" className='text-sm font-medium  hover:underline'>BESTSELLERS</Link>
      </nav>
    </div>
  )
}

export default Subnav
