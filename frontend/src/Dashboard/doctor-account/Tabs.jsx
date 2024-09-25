import React, { useState, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { authContext } from './../../context/AuthContext';

const Tabs = ({ tab, setTab }) => {
  const { state, dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate("/");
  };

  const apiDeleteUser = async (doctorId) => {
    try {
      const response = await fetch(`${BASE_URL}/doctor/${doctorId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete user with ID ${doctorId}`);
      }

      console.log(`User with ID ${doctorId} deleted from the database.`);
    } catch (error) {
      console.error("Failed to delete user:", error);
      throw new Error(error);
    }
  };

  const deleteUser = async (doctorId) => {
    try {
      await apiDeleteUser(doctorId);
      dispatch({ type: "DELETE_USER" });
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleDelete = async () => {
    if (state.user && state.user._id) {
      await deleteUser(state.user._id);
      window.location.reload();
    } else {
      console.error("No user ID found.");
    }
  };

  return (
   <div>
  <span className="lg:hidden">
    <BiMenu className="w-6 h-6 cursor-pointer" />
  </span>

  <div className="hidden lg:flex flex-col p-[30px] bg-blue-100 shadow-[0px_10px_30px_rgba(1,5,25,0.5)] hover:shadow-[0px_25px_60px_rgba(0,0,0,0.3)] items-center h-max rounded-md">
    <button
      onClick={() => setTab('overview')}
      className={`w-full mt-0 rounded-md py-2 transition-all duration-300 ${
        tab === 'overview'
          ? 'text-white bg-black hover:bg-black' // Active tab
          : 'bg-yellow-200 text-gray-800 hover:bg-gray-500 hover:text-white' // Inactive tab
      } hover:shadow-2xl`}
    >
      Overview
    </button>

    <button
      onClick={() => setTab('appointments')}
      className={`w-full mt-3 rounded-md py-2 transition-all duration-300 ${
        tab === 'appointments'
          ? 'text-white bg-black hover:bg-black' // Active tab
          : 'bg-yellow-200 text-gray-800 hover:bg-gray-500 hover:text-white' // Inactive tab
      } hover:shadow-2xl`}
    >
      Appointments
    </button>

    <button
      onClick={() => setTab('settings')}
      className={`w-full mt-3 rounded-md py-2 transition-all duration-300 ${
        tab ==='settings'
        ? 'text-white bg-black hover:bg-black' // Active tab
          : 'bg-yellow-200 text-gray-800 hover:bg-gray-500 hover:text-white' // Inactive tab
      } hover:shadow-2xl`}
    >
      Profile
    </button>

    <div className="md:mt-[75px] w-full">
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
</div>

  );
};

export default Tabs;
