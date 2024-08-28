import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dimg from './../../assets/Faq_image/food-delivery-boy-delivering-food-scooter.jpg';
import Yimg from './../../assets/Faq_image/arseny-averyanov-byrkVEVf6jw-unsplash.jpg';
import Pimg from './../../assets/Faq_image/lucian-alexe-afDu-GuxjjM-unsplash.jpg';



const Faq = () => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);

  const accordionData1 = [ 
    {
      question: "How long does it take for delivery?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      question: "Can I collect from the local store?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      question: "Do you deliver on weekends?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ];

  const accordionData2 = [
    {
      question: "Which card do you accept?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      question: "Can I use different payment methods?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ];

  const accordionData3 = [
    {
      question: "Where is my order?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      question: "Can I have an update on my order status?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      question: "How can I make a complaint?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ];

  const handleAccordionClick1 = (index) => {
    setActiveIndex1((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAccordionClick2 = (index) => {
    setActiveIndex2((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAccordionClick3 = (index) => {
    setActiveIndex3((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="bg-gray-100 md:border-gray-100 md:border-[1px] ml-1 mr-1 md:ml-10 md:mr-10 rounded-lg 
      text-black ">

        <div className="flex justify-center ">
          <h1 className="text-xl font-semibold md:text-4xl lg:text-5xl">
            Frequently Asked Question
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-1 mt-0 md:mt-4">
          <div className=" mt-9 md:ml-6 lg:ml-20 sm:ml-6 leading-10 ">
            <h1 className="text-5xl font-bold text-center lg:mr-20 mb-3 text-black">Delivery</h1>
            {accordionData1.map((item, index) => (
              <div
                key={index}
                className={`accordion-item  cursor-pointer pt-6 ${
                  activeIndex1 === index ? "border-b-2" : ""
                }`}
                style={{ marginBottom: "20px" }}
              >
                <h1
                  className="text-lg lg:text-[30px] border-b-2"
                  onClick={() => handleAccordionClick1(index)}
                >
                  {item.question}
                </h1>
                {activeIndex1 === index && (
                  <p className="text-[15px] lg:text-[18px] text-black mt-4 max-h-40 overflow-y-auto">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 lg:mt-10 lg:mr-5">
            <img
              src={Dimg}
              alt=""
              className="h-[358px] lg:h-[358px] w-full lg:w-[633px] rounded-xl px-1 md:px-2 lg:px-0"
            />
          </div>
        </div> 

        <div className="flex flex-col-reverse lg:flex-row justify-between mt-5 lg:mt-20">
          <div className="mt-6 lg:mt-5 lg:ml-5">
            <img
              src={Yimg}
              alt=""
              className="h-[293px] lg:h-[293px] w-full lg:w-[581px] rounded-xl  px-1 md:px-2 lg:px-0"
            />
          </div>
          <div className="md:ml-6  mt-8 leading-10 lg:mr-32">
            <h1 className="text-5xl font-bold text-center lg:mr-24  mb-3 text-green-600">Payment</h1>
            {accordionData2.map((item, index) => (
              <div
                key={index}
                className={`accordion-item  cursor-pointer pt-6 ${
                  activeIndex2 === index ? "border-b-2" : ""
                }`}
                style={{ marginBottom: "20px" }}
              >
                <h1
                  className="text-lg lg:text-[30px] border-b-2"
                  onClick={() => handleAccordionClick2(index)}
                >
                  {item.question}
                </h1>
                {activeIndex2 === index && (
                  <p className="text-[15px] lg:text-[18px] text-black  mt-4 max-h-40 overflow-y-auto">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-3  mt-5 lg:mt-8">
          <div className="lg:ml-20 mt-4 lg:mt-20   md:ml-6 leading-10 ">
            <h1 className="text-5xl font-bold text-center lg:mr-20  mb-3 text-sky-600">
              Your Order
            </h1>
            {accordionData3.map((item, index) => (
              <div
                key={index}
                className={`accordion-item  cursor-pointer pt-6 ${
                  activeIndex3 === index ? "border-b-2" : ""
                }`}
                style={{ marginBottom: "20px" }}
              >
                <h1
                  className="text-lg lg:text-[30px] border-b-2"
                  onClick={() => handleAccordionClick3(index)}
                >
                  {item.question}
                </h1>
                {activeIndex3 === index && (
                  <p className="text-[15px] lg:text-[18px] text-black  mt-4 max-h-40 overflow-y-auto">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 lg:mt-20 lg:mr-5">
            <img
              src={Pimg}
              alt=""
              className="h-[358px] lg:h-[403px] w-full lg:w-[586px] rounded-xl px-1 md:px-2 lg:px-0 mb-10  md:mb-20"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
