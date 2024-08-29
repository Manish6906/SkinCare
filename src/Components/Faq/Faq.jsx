import React, { useState } from "react";
import Dimg from './../../assets/Faq_image/food-delivery-boy-delivering-food-scooter.jpg';
import Yimg from './../../assets/Faq_image/arseny-averyanov-byrkVEVf6jw-unsplash.jpg';
import Pimg from './../../assets/Faq_image/lucian-alexe-afDu-GuxjjM-unsplash.jpg';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState({ delivery: null, payment: null, order: null });

  const faqData = {
    delivery: [
      { 
        question: "How long does delivery take?", 
        answer: "Delivery typically takes 3-5 business days." 
      },
      { 
        question: "Can I collect my order from a local store?", 
        answer: "Yes, we offer in-store pickup at select locations." 
      },
      { 
        question: "Do you deliver on weekends?", 
        answer: "We deliver on Saturdays, but Sunday delivery is not available." 
      },
    ],
    payment: [
      { 
        question: "Which cards do you accept?", 
        answer: "We accept all major credit and debit cards . UPI and other payment gateways are also available." 
      },
      { 
        question: "Can I use multiple payment methods?", 
        answer: "Currently, we only accept one payment method . However, you can choose from a variety of options at checkout." 
      },
    ],
    order: [
      { 
        question: "Where is my order?", 
        answer: "You can track your order status by logging into your Gliss account." 
      },
      { 
        question: "Can I get an update on my order status?", 
        answer: "Updates will be sent on email. You can also check status under 'Order History'." 
      },
      { 
        question: "How can I make a complaint?", 
        answer: " Please contact our customer service team via the App's Contact Us page." 
      },
    ],
  };

  const handleAccordionClick = (section, index) => {
    setActiveIndex(prevState => ({
      ...prevState,
      [section]: prevState[section] === index ? null : index,
    }));
  };

  const renderAccordion = (section, data) => (
    <div className="accordion-section">
      <h1 className={`text-5xl font-bold text-center md:text-start  mb-5 text-${section.color}`}>
        {section.title}
      </h1>
      {data.map((item, index) => (
        <div
          key={index}
          className={`accordion-item cursor-pointer pt-8 ${activeIndex[section.key] === index ? "border-b-2" : ""}`}
          style={{ marginBottom: "20px" }}
        >
          <h1
            className="text-base md:text-[20px] lg:text-[24px] border-b-2"
            onClick={() => handleAccordionClick(section.key, index)}
          >
            {item.question}
          </h1>
          {activeIndex[section.key] === index && (
            <p className="text-[14px] md:text-[15px] lg:text-base text-black mt-4 max-h-40 overflow-y-auto">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-100 md:border-gray-100 md:border-[1px] ml-1 mr-1 md:ml-10 md:mr-10 rounded-lg text-black">
      <div className="flex justify-center">
        <h1 className="text-xl font-semibold md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="faq-section mt-8">
        <div className="flex flex-col lg:flex-row justify-between gap-3">
          <div className="faq-content mt-9 md:ml-6 lg:ml-10 leading-10 ">
            {renderAccordion({ key: 'delivery', title: 'Delivery', color: 'black' }, faqData.delivery)}
          </div>
          <div className="faq-image mt-5 lg:mt-10 lg:mr-5  ">
            <img
              src={Dimg}
              alt="Delivery"
              className="h-[358px] lg:h-[358px] w-full lg:w-[631px] rounded-xl px-1 md:px-2 lg:px-0"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between mt-5 lg:mt-20">
          <div className="faq-image mt-6 lg:mt-5 lg:ml-5">
            <img
              src={Yimg}
              alt="Payment"
              className="h-[293px] lg:h-[293px] w-full lg:w-[581px] rounded-xl px-1 md:px-2 lg:px-0"
            />
          </div>
          <div className="faq-content md:ml-6 mt-8 leading-10 lg:mr-32">
            {renderAccordion({ key: 'payment', title: 'Payment', color: 'green-600' }, faqData.payment)}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-3 mt-5 lg:mt-8">
          <div className="faq-content lg:ml-20 mt-4 lg:mt-20 md:ml-6 leading-10">
            {renderAccordion({ key: 'order', title: 'Your Order', color: 'sky-600' }, faqData.order)}
          </div>
          <div className="faq-image mt-5 lg:mt-20 lg:mr-5">
            <img
              src={Pimg}
              alt="Order"
               className="h-[358px] lg:h-[403px] w-full lg:w-[586px] rounded-xl px-1 md:px-2 lg:px-0 mb-10 md:mb-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
