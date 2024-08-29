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
            name :"Jessica M.",
            review : "3 review",
            month : " 2 Month",
            para : "I've tried countless serums, but nothing beats Gliss's Glow Up Serum. After just a week, my skin feels smoother and has a noticeable glow."
        },
        {
            name :"Emily R.",
            review : "3 review",
            month : " 2 Month",
            para : "This toner is a game-changer! It’s so refreshing , perfect for my morning routine. My skin feels revitalized, and the subtle floral scent is so soothing."
        },
        {
            name :"Megan S.",
            review : "3 review",
            month : " 2 Month",
            para : "I can't believe the difference this night cream has made. My skin feels firmer and more supple every morning. I love that it's packed with natural ingredients."
        },
        
    ]
  return (
    <>
    <div className="md:flex mt-5  ">
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
                        <p className="text-gray-600 text-[13px] ml-1">{content.month}</p>
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