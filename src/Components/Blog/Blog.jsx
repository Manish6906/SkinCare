import React from 'react'
import Main from './../../assets/Blog_image/sssss.jpg';

function Blog() {
  return (
    <div className='mt-12 lg:mt-16 ' id='blog'>
        <div>
            <h1 className='text-center font-semibold text-xl md:text-4xl lg:text-5xl'>Skin Care Blogs - <i className='text-pink-500'>Gliss</i>
            </h1>
        </div> 

      <div className='mt-8 md:mt-10 '>
        <img src={Main} alt="" className='w-full lg:h-[700px]'/>
      </div>
      <div className='ml-3 mr-3 md:ml-10 md:mr-10 bg-white  relative bottom-20 md:bottom-28 border-white shadow-md shadow-gray-600 border-2'>
        <div className='flex flex-col justify-center items-center gap-3 md:gap-7 m-2 md:m-14 lg:m-24 '>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '>"Glow with Gliss: Your Ultimate Skincare Routine Guide"</h1>
        <p className='text-base md:text-lg lg:text-xl '>Taking care of your skin isn’t just about looking good; it’s about feeling good too. 
           A well-crafted skincare routine can make all the difference in achieving that radiant,
           healthy glow. At <span className='underline decoration-dotted text-pink-600'> Gliss </span>, we believe in personalized care that suits your unique skin needs.
           Whether you're a skincare newbie or a seasoned enthusiast, this guide will help you build an 
           effective skincare routine.
        </p>
        <button className='h-11 w-40 mt-2 md:mt-0 bg-black text-white font-semibold hover:bg-[#9D6D2F]'>
          Load More Blogs
        </button>
        </div>
      </div>
    </div>
  )
}

export default Blog
