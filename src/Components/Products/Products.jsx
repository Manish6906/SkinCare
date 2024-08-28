import FaceWash from "./../../assets/Images/FaceWash.webp";
import hover1 from "./../../assets/Images/o.webp";
import { Aos } from 'aos';

function Products() {
  const obj = [
    {
      id: 1,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 2,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 3,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 4,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 5,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 6,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 7,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 8,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 9,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 10,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 11,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
    {
      id: 12,
      name: "The Face Shop Rice Water Bright Foaming Face",
      newPrice: "₹349",
      oldPrice: "M.R.P.: ₹370",
      Off: "-6%",
      image: FaceWash,
      hoverImage: hover1,
    },
  ];

  return (
    <>
   <div>
 
   <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 p-3 ">
        {obj.map((value) => (
          <div key={value.id}>
            <div className="border-2 border-solid border-black  rounded-lg flex flex-col items-center  text-black" data-aos="fade-in">
              <div className="h-40 w-full group p-2">
                <img
                  src={value.image}
                  alt={value.name}
                  className="h-full w-full object-cover  rounded-tl-lg rounded-tr-lg group-hover:hidden"
                />
                <img
                  src={value.hoverImage}
                  alt={value.name}
                  className="h-full w-full object-cover rounded-tl-lg rounded-tr-lg hidden group-hover:block"
                />
              </div>
              {/ content div /}
              <div className="w-full p-1">
                <h1 className="text-center font-bold">{value.name}</h1>
                <div className="flex justify-between mt-3">
                  <p className="text-green-500">{value.newPrice}</p>
                  <p className="text-gray-500 line-through">{value.oldPrice}</p>
                </div>
                <p className="text-red-500 text-right mt-2">{value.Off}</p>
                <div className="flex justify-center">
                  <button className="border-2 border-solid p-2 border-black rounded-xl text-white bg-blue-600 mb-2 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
   </div>
    </>
  );
}

export default Products;
