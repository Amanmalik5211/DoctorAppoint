import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const   ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    
    <div className="bg-gradient-to-r from-gray-400 to-white p-5 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:shadow-2xl hover:scale-105">
      <h2 className="text-2xl font-bold text-headingColor mb-3">{name}</h2>
      <p className="text-base text-black  mb-5">{desc}</p>

      <div className="flex items-center justify-between">
        <Link
          to="/doctors"
          className="w-12 h-12 rounded-full border border-solid border-[#181A1E] flex items-center  justify-center bg-blue-100 shadow-md hover:bg-primaryColor hover:border-none transition-all duration-300"
        >
          <BsArrowRight className="text-[#181A1E] group-hover:text-white w-6 h-6 transition-colors  duration-300" />
        </Link>

        <span
          className="w-12 h-12 flex items-center justify-center text-xl font-semibold rounded-full"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transform: 'rotateX(15deg) rotateY(15deg)',
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
