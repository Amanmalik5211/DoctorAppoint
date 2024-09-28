import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import Feedback from "./Feedback";
import DoctorAbout from "./DoctorAbout";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const {
    name,
    photo,
    about,
    experiences,
    specialization,
    qualifications,
    timeSlots,
    reviews,
    bio,
    averageRating,
    totalRating,
    ticketPrice,
  } = data || {}; 


  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  return (
    <section>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {loading && <Loader />}
        {error && <Error />}

        {!loading && !error && data && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <figure className="relative w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-lg overflow-hidden">
                  <img
                    src={photo}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </figure>

                <div className="flex flex-col gap-4 mt-4 md:mt-0">
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 text-[13px] lg:text-[16px] font-semibold rounded">
                  {capitalizeFirstLetter(specialization) || "Specialization"}
                  </span>

                  <h3 className="text-headingColor text-[20px] lg:text-[22px] leading-6 lg:leading-9 font-bold">
                    {capitalizeFirstLetter(name) || "Doctor Name"}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-2 text-[14px] lg:text-[16px] font-semibold text-headingColor">
                      <img src={starIcon} alt="Star Rating" />
                      {averageRating || "N/A"}
                    </span>

                    <span className="text-[13px] lg:text-[15px] font-[400] text-textColor">
                      ({totalRating || "0"})
                    </span>
                  </div>

                  <p className="text_para text-[14px] lg:text-[15px]">
                    {bio || "No bio available."}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-b border-gray-500">
                <button
                  onClick={() => setTab("about")}
                  className={`py-2 px-4 md:px-5 mr-3 rounded-xl text-[14px] lg:text-[16px] font-semibold ${
                    tab === "about"
                      ? "border-[2px] border-black"
                      : "bg-yellow-300 text-headingColor"
                  }`}
                >
                  About
                </button>
              </div>

              <div className="mt-6">
                {tab === "about" && <DoctorAbout name={name} about={about} qualifications={qualifications} experiences={experiences} />}
                {tab === "feedback" && <Feedback reviews={reviews} totalRating={totalRating} />}
              </div>
            </div>

            <div className="hidden md:block">
              <SidePanel doctorId={data._id} ticketPrice={ticketPrice} timeSlots={timeSlots}/>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
