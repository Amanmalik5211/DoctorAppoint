import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <section>
  <div className="container">
    <div className="flex justify-between gap-5 lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
      {/* Image container with layered design */}
      <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
        <div className="relative">
          <img
            src={aboutImg}
            alt=""
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          />
          {/* Layered smaller image with hover effect */}
          <div className="absolute bottom-4 w-[100px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
            <img
              src={aboutCardImg}
              alt=""
              className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-500 hover:scale-110 hover:shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Content with attractive typography and modern layout */}
      <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
        <h2 className="text-[35px] font-bold text-headingColor leading-[50px] mb-6 transition-all duration-300 hover:text-primaryColor">
          Proud to be one of the nation’s best
        </h2>
        <p className="text-lg leading-[1.8] text-gray-700 mb-6 shadow-md p-5 rounded-lg bg-white transform transition-transform duration-300 hover:scale-105">
          From the first hello to the last goodbye, this hospital journey is a
          testament to the unwavering dedication of those who believe in the
          power of healing. The clean and well-equipped facilities, coupled with
          the latest medical technology, instilled a sense of confidence in the
          quality of care provided during my time there.
        </p>

        <p className="text-lg leading-[1.8] text-gray-700 shadow-md p-5 rounded-lg bg-white transform transition-transform duration-300 hover:scale-105">
          "In the heart of the hospital beats a symphony of compassion and
          expertise, orchestrating healing with every note."
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default About;
