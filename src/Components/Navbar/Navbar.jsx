import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import Subnav from '../SubNavbar/Subnav';
import Faq from '../Faq/Faq';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav>
      <div className="bg-black sticky top-0 z-10 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <div className="flex items-center"> */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-pink-500"><i>Gliss</i></h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline md:gap-3 lg:gap-8 space-x-4">
                <Link to="/" className="text-pink-500  rounded-md text-sm  lg:text-base font-semibold">Home</Link>
                <Link to="/Contact" className="text-white hover:text-pink-400  rounded-md text-sm lg:text-base font-medium">About Us</Link>
                <Link to="#" className="text-white hover:text-pink-400  rounded-md text-sm  lg:text-base font-medium">Products</Link>
                <Link to="#" className="text-white hover:text-pink-400  rounded-md text-sm  lg:text-base font-medium">Blog</Link>
                <Link to="#" className="text-white hover:text-pink-400  rounded-md text-sm  lg:text-base font-medium">FAQ</Link>
                <Link to="#" className="text-white hover:text-pink-400  rounded-md text-sm  lg:text-base font-medium">Contact Us</Link>
              </div>
            </div>
          {/* </div> */}
          <div className="hidden md:block">
            <div className='flex items-center  border-gray-600 border-[1px] md:h-8 lg:h-10 rounded-md'>
            <div className='text-white md:w-10 md:flex md:justify-center lg:ml-3 lg:text-2xl'>
              <IoSearchOutline />
            </div>
            <div className='hidden lg:block'>
              <input type="text" placeholder='Search on Gliss' className='h-7 text-base outline-none rounded-lg bg-gray-100 mr-3 pl-2'/>
            </div>
            </div>
          </div>
          

          {/* Hamburger icon */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* {/ Mobile menu /} */}

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-pink-500 block px-3 py-2 rounded-md text-base font-semibold">Home</Link>
            <Link to="/Contact" className="text-white hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            <Link to="/" className="text-white hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Products</Link>
            <Link to="/" className="text-white hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link to="/" className="text-white hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">FAQ</Link>
            <Link to="/" className="text-white hover:text-pink-400 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
            {/* subnav */}
            <div className='w-full border-pink-500 border-b-[1px]'></div>
            <Link to="/" className="text-white  block px-3 py-2  hover:underline rounded-md text-base font-medium ">Lips</Link>
            <Link to="/" className="text-white  block px-3 py-2  hover:underline rounded-md text-base font-medium ">Eyes</Link>
            <Link to="/" className="text-white  block px-3 py-2  hover:underline rounded-md text-base font-medium ">Face</Link>
            <Link to="/" className="text-white  block px-3 py-2  hover:underline rounded-md text-base font-medium ">Nails</Link>
            <Link to="/" className="text-white  block px-3 py-2  hover:underline rounded-md text-base font-medium ">Skincare</Link>
          </div>
        </div>
      )}

      <div className='border-gray-500 border-b-[1px]'></div>

      <div className='hidden md:block'>
      <Subnav />
      </div>
      
      </div>

      <div className='relative top-16'>
      <Faq />
      </div>

      <div>
        <Blog />
      </div>

      <div>
        <Footer />
      </div>

    </nav>
   </>
  );
};

export default Navbar;