
import { LuPhoneCall } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

function Contact() {
  const behavi=(event)=>
  {
    event.preventDefault()
  }
  // useEffect(()=>
  // {
  //   Aos.init({duration: 2000})
  // })
  return (
    <>
 
      <p className="bg-[#F6F6F6] font-bold">
        <h1 className="ml-10">Contact Us |</h1>
      </p>
      
      <div className="p-2">
      <div className=" p-1 border-3px solid sm:p-4 boredr-3px border-solid border-gray-400 shadow-lg shadow-blue-700 rounded-lg  " >
        {/* main div */}
        <div className=" sm:bg-red-400sm:rounded-xl md:flex ">
          <div className=" h-[26rem] text-center border-2 border-solid border-black  text-black rounded-2xl sm:text-start sm:p-10 sm:h-[28rem] lg:h-[30rem]">
            <h1 className="font-bold text-[20px] pt-10">Contact Information</h1>                    
            <p>Say something to start a live chat!</p>
            <div>
              <p className="flex  justify-center mt-5">
                <LuPhoneCall className="text-[23px] mr-7 " />+91- <p className="underline"> 9465342092</p>
              </p>
              <p className="flex  justify-center mt-5 ml-6">
                <CiMail className="text-[25px] mr-3" />
                badpewdie@gmail.com
              </p>
              <p className="flex  justify-center mt-5">
                <IoLocationSharp className="text-[25px] mr-9" />
                Himachal Pradesh
              </p>
            </div>
            {/* <div className="h-7 w-7 rounded-full bg-[#FFFFFF] relative top-[40px] left-[40px] "></div> */}
            <div className="h-[170px] w-[170px] rounded-full bg-[#282828] relative left-24 top-4 z-[-1] sm:h-[9rem] sm:w-[9rem]  sm:left-[5rem] sm:top-2 lg:top-12"></div>
            {/* <div className="h-24 w-24 rounded-full bg-[#FFFDFD] relative bottom-[180px] left-[100px] "></div> */}
          </div>

          {/* input section */}
          <div className="mt-11  sm:flex grid place-content-center md:ml-11 ">
            <div>
            <form >
              <div className="sm:flex sm:gap-2 text-[#8D8D8D]">
                <div>
                  <h6 className="">Enter Name </h6>
                  <input
                    type="text"
                     required
                    className="rounded-md outline-0 border-b-2 border-solid border-gray-700 h-11 lg:w-[15rem] xl:w-[20rem] "
                  />
                </div>
                <div className="mt-2 sm:mt-0 text-[#8D8D8D] lg:ml-8">
                  <h6>Last Name</h6>
                  <input
                    type="text" required
                    className="rounded-md outline-0 border-b-2 border-solid border-gray-700 h-11 lg:w-[15rem] xl:w-[20rem]"
                  />
                </div>
              </div>

              <div className="sm:flex sm:gap-4">
                <div>
                  <h6 className="mt-2 sm:mt-6 text-[#8D8D8D]">Email Id</h6>
                  <input
                    type="text"
                   required
                    className="rounded-md outline-0 border-b-2 border-solid border-gray-700 h-11 lg:w-[15rem] xl:w-[20rem]"
                  />
                </div>
                <div className="mt-2 sm:mt-0 text-[#8D8D8D] lg:ml-8">
                  <h6 className=" sm:mt-4">Phone Number</h6>
                  <input required
                    className="rounded-md outline-0  border-b-2 border-solid border-gray-700 h-10 sm:mt-1 lg:w-[15rem] xl:w-[20rem]"
                  />
                </div>
              </div>

              <div className="mt-2 sm:mt-3 text-[#8D8D8D]">
                <h6>Querry</h6>
                <input
                  type="text" required
                  className="rounded-md outline-0 border-b-2 border-solid border-gray-700 h-10  sm:w-[23.6rem] lg:w-[33rem] xl:w-[43rem] "
                />
              </div>

              <div className="mt-2 sm:mt-3 text-[#8D8D8D]">
                <h6>Review</h6>
                <input
                  type="text" required
                  className="rounded-md outline-0 border-b-2 border-solid border-gray-700 h-10  sm:w-[23.6rem] lg:w-[33rem] xl:w-[43rem]"
                />
              </div>
              <div className="sm:flex justify-end">
              <button className="bg-black h-[3rem] w-[11rem] sm:w-[10rem] text-white  mt-6  rounded-lg sm sm:right-0 lg:right-[7.8rem]" onClick={behavi}>
                Send Message
              </button>
              
              </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contact;
