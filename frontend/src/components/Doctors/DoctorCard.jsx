import React from "react";
import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    experiences = [],
  } = doctor;

  return (
    <div className="p-3 lg:p-5 w-full max-w-sm mx-auto ">
    <div 
  className="relative w-full h-[500px] bg-white rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:translate-y-[-10px]"
  style={{ boxShadow: "1px 10px 10px rgba(0, 0, 0, 5)" }}
>
        {/* Image Container */}
        <div className="w-full h-[60%] flex items-center justify-center overflow-hidden rounded-t-lg">
          <img
            src={photo}
            alt={`${name}'s photo`}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        {/* Doctor Info */}
        <div className="p-4 h-[40%] flex flex-col justify-between">
          {/* Doctor Name and Specialization */}
          <div>
            <h2
              style={{
                textTransform: "capitalize",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
              className="text-[18px] leading-[30px] lg:text-[22px] lg:leading-8 text-headingColor font-semibold mt-2"
            >
              {name}
            </h2>

            <div className="mt-2 flex items-center justify-between">
              <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-3 text-[14px] font-semibold rounded">
                {specialization}
              </span>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-semibold text-headingColor">
                  <img
                    src={starIcon}
                    alt="Star rating"
                    className="inline-block w-4 h-4 mr-1"
                  />
                  {avgRating}
                </span>
                <span className="text-[14px] font-semibold text-textColor">
                  ({totalRating})
                </span>
              </div>
            </div>
          </div>

          {/* Hospital and Arrow Link */}
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-[14px] text-textColor">
                {experiences.length > 0
                  ? `At ${experiences[0]?.hospital}`
                  : "Hospital N/A"}
              </p>
            </div>

            {/* Link to Doctor's Page */}
            <Link
              to={`/doctors/${doctor._id}`}
              className="w-[44px] h-[44px] rounded-full border-[2px] border-solid border-[#181A1E] flex items-center justify-center group transition-all hover:bg-primaryColor hover:border-none"
            >
              <BsArrowRight className="text-primaryColor group-hover:text-white w-6 h-5 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
