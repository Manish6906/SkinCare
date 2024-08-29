import { FaRegUserCircle } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { RiStarHalfFill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
function Reviews() {

    useEffect(()=>
    {
        Aos.init({duration: 2000})
    },[])
    const review =[
        {
            name :"Manish",
            review : "3 review",
            month : " 2 Month",
            para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
name :"Manish",
            review : "3 review",
            month : " 2 Month",
            para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
name :"Manish",
            review : "3 review",
            month : " 2 Month",
            para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        
    ]
  return (
    <>
    <div className="md:flex mt-5 ">
    { review.map(( content)=>(


    <div key={content} className="p-3"  data-aos="fade-up">
        <div className="flex  gap-5 shadow-lg shadow-blue-600 p-2 rounded-md ">
                    <div className=" text-3xl md:text-5xl">
                    <FaRegUserCircle />
                    </div>      

                    <div>
                        <h1 className=" text-base md:text-2xl font-medium">{content.name}</h1>
                        <h6>{content.review}</h6>
                        <div className="flex  items-center  text-yellow-400 ">
                        <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><RiStarHalfFill /> 
                        <p className="text-gray-600 text-[13px] ml-2">{content.month}</p>
                        </div>
                        <p className="text-sm md:text-[16px] leading-[22px]"> {content.para}</p>
                    </div>
        </div>
    </div>
))}
</div>
    </>
  )
}

export default Reviews