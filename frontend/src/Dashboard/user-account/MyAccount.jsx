import userImg from "../../assets/images/doctor-img01.png";
import { useContext, useState } from "react";
import { authContext } from "./../../context/AuthContext";
import MyBooking from "./MyBooking";
import Profile from "./Profile";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const { state, dispatch } = useContext(authContext);
  const [tab, setTab] = useState("bookings");
  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);
  const navigate = useNavigate();

  const apiDeleteUser = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete user with ID ${userId}`);
      }

      console.log(`User with ID ${userId} deleted from the database.`);
    } catch (error) {
      console.error("Failed to delete user:", error);
      throw new Error(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await apiDeleteUser(userId);
      dispatch({ type: "DELETE_USER" });
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    window.location.reload();
  };

  const handleDelete = async () => {
    if (state.user && state.user._id) {
      console.log(state.user._id, "123456 id");
      await deleteUser(state.user._id);
      window.location.reload();
    } else {
      console.error("No user ID found....");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f7f7f7] py-12">
      <div className="max-w-[1170px] w-full px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 mt-[-55px] gap-10  p-10 rounded-3xl">
            <div className="px-[20px] py-[30px] rounded-md bg-blue-100 shadow-[0px_10px_30px_rgba(1,5,25,0.5)] hover:shadow-[0px_25px_60px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-center">
                <figure className="w-[120px] h-[120px] rounded-full border-3 border-solid border-primaryColor shadow-lg  transform hover:scale-110 transition-transform duration-300">
                  <img
                    src={userData.photo || userImg}
                    alt="User"
                    className="w-full h-full rounded-full object-cover"
                  />
                </figure>
              </div>
              <div className="text-center mt-3">
                <h3 className="text-[22px] leading-[30px] text-gray-800 font-bold">
                  {userData.name.charAt(0).toUpperCase() +
                    userData.name.slice(1).toLowerCase()}
                </h3>

                <p className="text-gray-500 text-[16px] leading-6 font-medium">
                  {userData.email}
                </p>
                <p className="text-gray-500 text-[16px] leading-6 font-medium">
                  Blood Type:
                  <span className="ml-2 text-gray-800 text-[17px] leading-8">
                    {userData.bloodType}
                  </span>
                </p>
              </div>
              <div className="mt-[50px] md:mt-[75px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-primaryColor p-3 text-[18px] leading-7 rounded-md text-white shadow-lg hover:bg-primaryDark transition-all duration-300 hover:shadow-2xl"
                >
                  Logout
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full bg-red-600 mt-4 p-3 text-[18px] leading-7 rounded-md text-white shadow-lg hover:bg-red-700 transition-all duration-300 hover:shadow-2xl"
                >
                  Delete Account
                </button>
              </div>
            </div>


            <div className="md:col-span-2 md:px-[30px]">
              <div className="flex mb-5">
                <button
                  onClick={() => {
                    setTab("bookings");
                  }}
                  className={`${
                    tab === "bookings"
                      ? "bg-primaryColor text-white"
                      : "bg-[#e0e0e0] text-gray-700"
                  } p-2 mr-5 px-5 rounded-md font-semibold text-[16px] leading-7 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300`}
                >
                  My Booking
                </button>
                <button
                  onClick={() => {
                    setTab("settings");
                  }}
                  className={`${
                    tab === "settings"
                      ? "bg-primaryColor text-white"
                      : "bg-[#e0e0e0] text-gray-700"
                  } p-2 mr-5 px-5 rounded-md font-semibold text-[16px] leading-7 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300`}
                >
                  Profile Settings
                </button>
              </div>
              {tab === "bookings" && <MyBooking />}
              {tab === "settings" && <Profile user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
