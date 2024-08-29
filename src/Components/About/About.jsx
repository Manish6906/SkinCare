import Main from './../../assets/About_pic.jpg';
import { Link } from 'react-router-dom';




function About() {
  return (
    <>
    <div id='hero'>
     <div><h1 className='text-lg md:text-4xl lg:text-5xl font-bold sm:font-semibold text-center pt-5'>ABOUT US</h1></div>

     <div className='flex flex-col gap-4 lg:flex lg:justify-center lg:flex-row lg:gap-5 p-2 md:p-7 mt-0 md:mt-1 mb-2 md:mb-3'>
     <div className='w-full md:w-[70% ] lg:w-1/2 flex justify-center items-center'>
     <div className='p-2 border-gray-400 shadow-2xl shadow-gray-400 border-[1px] rounded-lg'>
      <img src={Main} alt="main_pic" className='h-[300px] w-[350px] md:h-[400px] md:w-[450px] lg:h-[450px] lg:w-[500px]' />
     </div>
     </div>

      <div className='w-full lg:w-1/2 text-center'>
      <p className='text-center text-2xl pb-2'>Welcome to <i className='text-pink-600 text-3xl font-semibold'>Gliss</i></p>
      <p>
      At Gliss, we believe that skincare is more than just a routine—it's a ritual of self-care that enhances both inner
       confidence and outer beauty. Our mission is to empower you with products that not only nourish your skin but also
      celebrate your unique beauty.
      </p>
      <br />
      <p>
      Our Philosophy
      Gliss is built on the foundation of simplicity and efficacy. We focus on creating high-quality, cruelty-free products
      that are gentle on your skin and kind to the planet. Each of our formulations is meticulously crafted using natural 
      ingredients, free from harsh chemicals, and designed to cater to diverse skin types and needs.
      </p>
      <br />
      <p>
      Why Choose Gliss?
      We are passionate about transparency and integrity. From sourcing the finest natural ingredients to ensuring sustainable 
      packaging, every step in our process reflects our commitment to excellence. With Gliss, you can trust that your skincare 
      routine is in harmony with nature.
      </p>
      <br />
      <p>
      Our Promise
      We are dedicated to helping you achieve healthy, radiant skin with products that you can feel good about using every day.
      Whether you're starting your skincare journey or refining your regimen, Gliss is here to guide and support you with effective,
      science-backed solutions.
      </p>
      <br />
      <p>
      <Link to="" className="text-blue-700 underline">Join us</Link> in embracing a new era of skincare—one that prioritizes your well-being and the environment. 
      With Gliss, glowing skin is just the beginning.
      </p>
      </div>
      </div>
      </div>
    {/* <div className="p-3">


       <div className='h-auto sm:flex  sm:mt-9 shadow-md shadow-blue-500 rounded-xl p-2 bg-[#e0dcdc]'>

<div className='h-auto p-2 sm:w-[50%] md:h-auto lg:h-auto'>
  <div className='h-[50px]  font-bold text-[30px] leading-[40px] font-[#331B3B] md:h-[70px] md:text-[50px] md:leading-[47px] lg:text-[65px] lg:leading-[55px] lg:h-[20%] xl:text-[80px] xl:leading-[80px] xl:h-[0%] text-center'>ABOUT US </div>

  <p className='  font-normal text-[17px] leading-[24.87px] tracking-[2%] md:text-[20px] md:mt-5 lg:mt-9 xl:mt-[160px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages  </p>
  <div className='drop-shadow-xl mt-2 cursor-pointer h-[35px]  bg-[#080808] flex justify-center items-center rounded-md  md:mt-7 lg:h-[50px] hover:bg-white hover:text-black  text-white'><button className=' font-semibold cursor-pointer text-[14px]  '>SCHEDULE A MEETING </button></div>
</div>
<div className='mt-2  h-[260px]  flex justify-center sm:h-[290px] sm:w-[50%] sm:mt-0 md:w-[50%]  md:h-[450px] lg:h-[550px]'>
  <img className='h-[250px] md:h-[400px] lg:h-[75%] xl:h-[90%] rounded-lg' src={logo} alt="" />
 
</div>
</div>

</div> */}
    </>
  )
}

export default About
