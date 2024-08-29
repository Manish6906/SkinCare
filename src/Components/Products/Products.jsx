// import FaceWash from "./../../assets/Images/FaceWash.webp";
// import hover1 from "./../../assets/Images/o.webp";

import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import FaceWash from './../../assets/back.jpg';
import hover1 from './../../assets/Front.jpg';



function Products() {
  const obj = [
    {
      id: 1,
      name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
    },
     {
       id: 2,
       name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
     },
     {
       id: 3,
       name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
     },
     {
       id: 4,
       name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
     },
     {
       id: 5,
       name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
     },
     {
       id: 6,
       name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
     },
     {
       id: 7,
       name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
     },
     {
       id: 8,
       name: "Mouse Muse Lip Cream",
       shades:"14 shades",
       newPrice: "₹555",
       oldPrice: "₹599",
       Off: "-9%",
       rating:"4.8 (5)",
       image: FaceWash,
       hoverImage: hover1,
     },
     {
       id: 9,
       name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
     },
     {
       id: 10,
       name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
     },
     {
       id: 11,
       name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
     },
     {
       id: 12,
       name: "Mouse Muse Lip Cream",
      shades:"14 shades",
      newPrice: "₹555",
      oldPrice: "₹599",
      Off: "-9%",
      rating:"4.8 (5)",
      image: FaceWash,
      hoverImage: hover1,
     },
  ];

  return (
    <>
   <div id="product">

    {/* ------------ */}
      <div><h1 className='text-lg md:text-4xl lg:text-5xl font-bold sm:font-semibold text-center p-3 '>OUR PRODUCTS</h1></div>
    <div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap gap-3 sm:gap-x-12 sm:gap-y-7 p-3 mt-3 md:mt-5">
        {obj.map((value) => (
          <div key={value.id}>
            <div className="border-white  border-2 shadow-lg shadow-black rounded-lg flex flex-col items-center 
             text-black">
              {/*  data-aos="fade-in" */}
              <div className="h-40 w-full group p-2">
                <img
                  src={value.image}
                  alt={value.name}
                  className="h-[180px] w-full object-cover rounded-lg group-hover:hidden"
                />
                <img
                  src={value.hoverImage}
                  alt={value.name}
                  className="h-[180px] w-full object-cover rounded-lg hidden group-hover:block"
                />
              </div>

              {/* {/ content div /} */}
              <div className="w-full py-6 sm:px-4 md:px-8 sm:pt-3 md:pt-6 ">
                <h1 className="text-center font-semibold p-3">{value.name}</h1>

                <div className="flex flex-col justify-center items-center gap-1">
                  <p>{value.shades}</p>
                  <p><b>{value.newPrice}</b> <del><i className="text-sm"> {value.oldPrice}</i></del></p>
                  <p>{value.Off}</p>
                  <div className="flex items-center gap-2">
                  <p className="text-yellow-500"><IoStarSharp /></p>
                  <p>{value.rating}</p>
                  </div>

                  <div className="flex items-center gap-2 pt-2 md:pt-3">
                    <p className="text-3xl p-1 rounded-lg border-black border-[1px] hover:bg-red-600 hover:text-white"><CiHeart /></p>
                    <button className="h-10 w-36 border-black border-[1px] rounded-lg bg-black text-white font-bold">SELECT SHADE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    {/* ------------ */}

   </div>
    </>
  );
}

export default Products;