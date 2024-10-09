import React, { useState, useContext } from "react";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Tabs from "./Tabs";
import { authContext } from "./../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./../../pages/Doctors/DoctorAbout";
import Profile from "./Profile";
import Appointments from "./Appointments";

const Dashboard = () => {
  const [doctorData, setDoctorData] = useState(null);
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const { state } = useContext(authContext);
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );
  const [tab, setTab] = useState("overview");
  // console.log('DatA:', data);
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 p-6 rounded-lg shadow-[0px_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0px_20px_50px_rgba(0,0,0,0.7)]">
 

  <div className="mt-6">
    {tab === "overview" && (
      <div>
        <div className="flex items-center gap-6 mb-8">
          <figure className="relative w-[200px] h-[200px] bg-white rounded-full overflow-hidden shadow-2xl  hover:rotate-2">
            <img
              src={data?.photo}
              alt="Doctor's Profile"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="flex-1">
            <span className="bg-[#add6da] text-blue-900 py-2 px-6 rounded-full text-lg font-semibold shadow-md bg-gradient-to-r from-blue-100 via-blue-300 to-blue-400">
              {capitalizeFirstLetter(data?.specialization)}
            </span>

            <h3 className="text-[28px] ml-2 leading-tight font-bold text-headingColor mt-2">
              {capitalizeFirstLetter(data?.name)}
            </h3>

            <div className="flex ml-2 items-center gap-2 mt-2">
              <span className="flex items-center text-headingColor text-lg font-semibold">
                <img src={starIcon} alt="Star" className="w-5 h-5" />
                {data?.averageRating}
              </span>
              <span className="text-textColor text-base font-medium">
                ({data?.totalRating} Reviews)
              </span>
            </div>

            <p className="text-textColor ml-2 mt-4 leading-6 max-w-md">
              {data?.bio}
            </p>
          </div>
        </div>
        <DoctorAbout
          name={data?.name}
          about={data?.about}
          qualifications={data?.qualifications}
          experiences={data?.experiences}
        />
      </div>
    )}

    {tab === "appointments" && (
      <Appointments appointments={data?.appoinments} />
    )}

    {tab === "settings" && (
      <Profile doctorData={data} setDoctorData={setDoctorData} />
    )}
  </div>
</div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
