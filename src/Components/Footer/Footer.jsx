import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-black">
      {/* <div className='flex justify-center'>
      <div className='bg-black h-[120px] w-[120px] rounded-full flex justify-center items-center'>
        <i className='text-pink-500 text-[45px]'>Gliss</i>
      </div>
      </div> */}

      <div className="bg-black w-full  flex justify-center gap-3 py-3 md:py-5">
        <div className="flex gap-2 md:gap-5 text-2xl text-gray-500 p-4 ">
          <div className="p-1 rounded-full border border-gray-500 hover:border-white hover:text-white">
            <FaFacebook />
          </div>
          <div className="p-1 rounded-full border border-gray-500 hover:border-white hover:text-white">
            <FaInstagram />
          </div>
          <div className="p-1 rounded-full border border-gray-500 hover:border-white hover:text-white">
            <FaSquareXTwitter />
          </div>
          <div className="p-1 rounded-full border border-gray-500 hover:border-white hover:text-white">
            <FaYoutube />
          </div>
          <div className="p-1 rounded-full border border-gray-500 hover:border-white hover:text-white">
            {" "}
            <MdEmail />
          </div>
        </div>
      </div>

      <div className="border-white border-b-2 ml-3 mr-3 md:ml-10 md:mr-10 pt-3 "></div>

      <div className="text-white text-sm md:text-[15px] lg:text-lg flex flex-col gap-5 justify-center items-center  md:gap-1 lg:gap-3 md:flex md:flex-row md:justify-evenly md:items-start mt-6 md:mt-10">
        <div className="flex flex-col justify-center items-center md:flex md:flex-col md:items-start md:justify-evenly">
          <h1 className="font-semibold ">Get to Know Us</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Call : 1800-208-0001</p>
          <p>Monday to Friday: 09:00 AM-09:00 PM</p>
          <p>Saturday: 09:00 AM-07:00 PM</p>
        </div>

        <div className="flex flex-col justify-center items-center md:flex md:flex-col md:items-start md:justify-evenly">
          <h1 className="font-semibold ">Support</h1>
          <Link to="">hello@glisssupport.com</Link>
        </div>

        <div className="flex flex-col justify-center items-center md:flex md:flex-col md:items-start md:justify-evenly">
          <h1 className="font-semibold ">Press and Media</h1>
          <Link to="">pr@glisscosmetics.com</Link>
        </div>

        <div className="flex flex-col justify-center items-center md:flex md:flex-col md:items-start md:justify-evenly">
          <h1 className="font-semibold ">Influencer Collab</h1>
          <Link to="">Join Us</Link>
        </div>

      </div>

      <div className="border-white border-b-2 ml-3 mr-3 md:ml-10 md:mr-10 py-5"></div>

      <div className="text-white py-8 md:py-10 flex flex-col justify-center items-center gap-4 md:flex md:flex-row md:justify-center md:gap-3">
        <div>
        <p>GET THE NEW GLISS APP TODAY!</p>
        <p>Tap into a better shopping experience.</p>
        </div>

        <div>
          <button className="h-12 w-48 border-gray-500 border-[1px] rounded-md flex  items-center">
          <div className="text-3xl pl-3">
          <BiLogoPlayStore />
          </div>
          <div>
            <p className="text-xs">
              GET IT ON
            </p>
            <p className="text-lg font-semibold">Google play</p>
          </div>
          </button>
        </div>

        <div>
          <button className="h-12 w-48 border-gray-500 border-[1px] rounded-md flex  items-center">
          <div className="text-3xl pl-3">
          <FaApple />
          </div>
          <div>
            <p className="text-xs">
              Download on the
            </p>
            <p className="text-lg font-semibold">App Store</p>
          </div>
          </button>
        </div>
      </div>

      <div className="border-white border-b-2 ml-3 mr-3 md:ml-10 md:mr-10 pt-3 md:pt-5"></div>

      <div className="text-white py-5 md:py-7  text-sm flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center">
        <p>Copyright &copy; 2024 Gliss Skincare.</p>
        <p>All rights reserved.</p>
      </div>

    </div>
  );
}

export default Footer;
