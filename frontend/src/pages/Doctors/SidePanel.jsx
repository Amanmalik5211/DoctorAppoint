import React from "react";
import ConvertTime from "../../Utils/ConvertTime";
import {BASE_URL, token} from './../../config';
import {toast} from 'react-toastify';
const SidePanel = ({ doctorId, timeSlots, ticketPrice }) => {

  const bookingHandler = async () => {
    try {
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: 'POST',
        headers: {
          Authorization:`Bearer ${token}`
        },
      })
      const  data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + 'Please  try again.');
      }
      console.log(data);
  
      if(data.session.url){
       window.location.href = data.session.url;
      }
    } catch (error) {
       toast.error(error.message)
    }
  };

  return (
    <>
      <div className="shadow-2xl  shadow-outline p-3  lg:p-5 rounded-md mt-10 ml-12">
        <div className="flex items-center justify-between">
          <p className="text_para  font-semibold">Ticket Price</p>
          <span className="text-[16px] leading-7 lg:text-[19px] lg:leading-8 text-headingColor font-bold ml-6">
              $ {ticketPrice} 
          </span>
        </div>

        <div className="mt-[30px] ">
          <p className="text_para mt-[-8PX] font-semibold text-headingColor">
            Available Time Slots:
          </p>

          <ul className="mt-3 bg-slate-100 shadow-2xl shadow-outline p-1 lg:p-1 rounded-md">
            {timeSlots?.map((item, index) => (
              <li key={index} className="flex item-center  justify-between mb-2">
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {" "}
                 {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                </p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {" "}
                  {ConvertTime(item.startingTime)}- {ConvertTime(item.endingTime)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={bookingHandler} className="btnn px-2 w-full rounded-lg">Book Appoiment</button>
      </div>
    </>
  );
};

export default SidePanel;
