import React from "react";
import { services } from "./../../assets/data/services";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {services.map((item, index) => (
        <div
          key={index}
          className="relative transition-transform duration-500 hover:shadow-2xl rounded-lg"
          style={{
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 40px 60px rgba(0, 0, 0, 0.3)', // Stronger shadows for depth
            transition: 'transform 0.5s ease, box-shadow 0.5s ease',
            transformStyle: 'preserve-3d',
            perspective: '1500px', // More depth for 3D effect
            borderRadius: '15px',
            background: 'linear-gradient(145deg, #e0e0e0, #ffffff)', // Subtle gradient for 3D lighting
            padding: '20px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'rotateX(15deg) rotateY(15deg) scale(1.05)'; // Stronger 3D tilt and scale
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3), 0 50px 80px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'; // Reset
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2), 0 40px 60px rgba(0, 0, 0, 0.3)';
          }}
        >
          <ServiceCard item={item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
