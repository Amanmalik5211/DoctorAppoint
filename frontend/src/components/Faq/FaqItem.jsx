import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer transition-all duration-300 ease-in-out transform ${isOpen ? 'shadow-lg bg-gradient-to-r from-blue-100 via-white to-blue-100' : 'hover:shadow-md hover:bg-gradient-to-r hover:from-blue-50 hover:via-white hover:to-blue-50'}`}
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between gap-5">
        <h4 className={`text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-semibold transition-colors ${isOpen ? 'text-blue-600' : 'hover:text-blue-500'}`}>
          {item.question}
        </h4>

        <div
          className={`w-7 h-7 lg:w-8 lg:h-8 pt-2 border border-solid border-[#141F21] rounded flex items-center justify-center transition-all duration-300 ease-in-out transform ${isOpen ? 'bg-primaryColor text-white rotate-180' : 'hover:bg-primaryColor hover:text-white'}`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 transition-opacity duration-300 ease-in-out opacity-100">
          <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
