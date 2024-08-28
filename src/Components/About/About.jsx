
import logo from "./../../assets/Images/logo.avif"




function About() {
  return (
    <>
    <div className="p-3">


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

</div>
    </>
  )
}

export default About
