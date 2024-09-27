import React, { useState, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { authContext } from './../../context/AuthContext';
import { BASE_URL } from "../../config";

const Tabs = ({ tab, setTab }) => {
  const { state, dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu visibility

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate("/");
    setIsMenuOpen(false); // Close the menu after logging out
  };

  const apiDeleteUser = async (doctorId) => {
    try {
      const response = await fetch(`${BASE_URL}/doctors/${doctorId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`,
        },
      });
  
      // Log the full response for debugging
      console.log("Response status:", response.status);
      
      // Try to parse the response body (if there is any)
      const responseBody = await response.json().catch(() => null);
      
      if (!response.ok) {
        console.error("API response:", responseBody || "No response body");
        throw new Error(`Failed to delete user with ID ${doctorId}. Status: ${response.status}`);
      }
  
      console.log(`User with ID ${doctorId} deleted from the database.`);
      console.log("API response:", responseBody || "No response body");
      
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error(error.message);
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
    setIsMenuOpen(false); 
  };

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
    setIsMenuOpen(false); // Close the menu after clicking a tab
  };

  return (
    <div>
      {/* BiMenu button for small screens */}
      <span className="lg:hidden ">
        <BiMenu 
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(true)} // Opens the menu on click
        />
      </span>

      {/* Overlay to darken background when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-10" 
          onClick={() => setIsMenuOpen(false)} // Closes the menu when clicking on the overlay
        />
      )}

      {/* Sliding menu for small screens */}
      <div
        className={`fixed top-10 left-0 w-[40%] h-[60%] bg-blue-100 shadow-lg z-20 p-6 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden space-y-4`}
        style={{
          borderTopRightRadius: "20px",  
          borderBottomRightRadius: "20px" 
        }} 
      >
        <button
          onClick={() => handleTabClick('overview')}
          className={` mt-4 w-full rounded-md py-2 transition-all duration-300 ${
            tab === 'overview'
              ? 'text-white bg-black hover:bg-black' // Active tab
              : 'bg-yellow-200 text-gray-800 hover:bg-gray-500 hover:text-white' // Inactive tab
          } hover:shadow-2xl`}
        >
          Overview
        </button>

        <button
          onClick={() => handleTabClick('appointments')}
          className={`w-full rounded-md py-2 transition-all duration-300 ${
            tab === 'appointments'
              ? 'text-white bg-black hover:bg-black' // Active tab
              : 'bg-yellow-200 text-gray-800 hover:bg-gray-500 hover:text-white' // Inactive tab
          } hover:shadow-2xl`}
        >
          Appointments
        </button>

        <button
          onClick={() => handleTabClick('settings')}
          className={`w-full rounded-md py-2 transition-all duration-300 ${
            tab === 'settings'
            ? 'text-white bg-black hover:bg-black' // Active tab
              : 'bg-yellow-200 text-gray-800 hover:bg-gray-500 hover:text-white' // Inactive tab
          } hover:shadow-2xl`}
        >
          Profile
        </button>

        <div className="mt-[10px] w-full space-y-3">
          <button
            onClick={handleLogout}
            className="mt-[82px] w-full bg-primaryColor p-3 text-[18px] leading-7 rounded-md text-white shadow-lg hover:bg-primaryDark transition-all duration-300 hover:shadow-2xl"
          >
            Logout
          </button>
          <button
            onClick={handleDelete}
            className="w-full bg-red-600 p-3 text-[18px] leading-7 rounded-md text-white shadow-lg hover:bg-red-700 transition-all duration-300 hover:shadow-2xl "
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Original large screen layout */}
      <div className="hidden lg:flex flex-col p-[30px] bg-blue-100 shadow-[0px_10px_30px_rgba(1,5,25,0.5)] hover:shadow-[0px_25px_60px_rgba(0,0,0,0.3)] items-center h-max rounded-md space-y-3">
        <button
          onClick={() => setTab('overview')}
          className={`w-full rounded-md py-2 transition-all duration-300 ${
            tab === 'overview'
              ? 'text-white bg-black hover:bg-black' // Active tab
              : 'bg-yellow-200 text-gray-800 hover:bg-gray-500 hover:text-white' // Inactive tab
          } hover:shadow-2xl`}
        >
          Overview
        </button>

        <button
          onClick={() => setTab('appointments')}
          className={`w-full rounded-md py-2 transition-all duration-300 ${
            tab === 'appointments'
              ? 'text-white bg-black hover:bg-black' // Active tab
              : 'bg-yellow-200 text-gray-800 hover:bg-gray-500 hover:text-white' // Inactive tab
          } hover:shadow-2xl`}
        >
          Appointments
        </button>

        <button
          onClick={() => setTab('settings')}
          className={`w-full rounded-md py-2 transition-all duration-300 ${
            tab === 'settings'
            ? 'text-white bg-black hover:bg-black' // Active tab
              : 'bg-yellow-200 text-gray-800 hover:bg-gray-500 hover:text-white' // Inactive tab
          } hover:shadow-2xl`}
        >
          Profile
        </button>

        <div className="mt-[50px] w-full space-y-3">
          <button
            onClick={handleLogout}
            className="w-full bg-primaryColor p-3 text-[18px] leading-7 rounded-md text-white shadow-lg hover:bg-primaryDark transition-all duration-300 hover:shadow-2xl"
          >
            Logout
          </button>
          <button
            onClick={handleDelete}
            className="w-full bg-red-600 p-3 text-[18px] leading-7 rounded-md text-white shadow-lg hover:bg-red-700 transition-all duration-300 hover:shadow-2xl"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
