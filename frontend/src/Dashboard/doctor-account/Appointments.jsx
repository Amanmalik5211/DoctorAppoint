import React from 'react';
import { formateDate } from '../../Utils/formateDate';

const Appointments = ({ appointments }) => {
  console.log(appointments, 'appointments');

  appointments?.forEach(item => {
    console.log(item?.user, 'appointments555user');
  });

  return (
    <div className="w-full overflow-hidden shadow-lg rounded-lg border border-gray-300">
      <table className='w-full text-left text-sm text-gray-500 table-fixed'>
        <thead className='text-xs text-gray-700 uppercase bg-gradient-to-r from-gray-100 to-gray-300 shadow-md'>
          <tr>
            <th scope='col' className='px-4 py-3 font-bold text-gray-800 w-1/4'>
              NAME
            </th>
            <th scope='col' className='px-4 py-3 font-bold text-gray-800 w-1/6'>
              GENDER
            </th>
            <th scope='col' className='px-4 py-3 font-bold text-gray-800 w-1/6'>
              PAYMENT
            </th>
            <th scope='col' className='px-4 py-3 font-bold text-gray-800 w-1/6'>
              PRICE
            </th>
            <th scope='col' className='px-4 py-3 font-bold text-gray-800 w-1/4'>
              BOOKED ON
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {appointments?.map(item => (
            <tr
              key={item._id}
              className="bg-white hover:bg-gradient-to-r from-indigo-50 to-indigo-100 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <th
                scope="row"
                className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap space-x-4"
              >
                <img
                  src={item?.user?.photo || '/path-to-placeholder-image.jpg'}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-md transform hover:scale-110 transition-all duration-300"
                  alt="User"
                />
                <div>
                  <div className="text-base font-semibold text-gray-800">
                    {item?.user?.name || 'Unknown User'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item?.user?.email?.split('@')[0].substring(0,2)+"..."+item?.user?.email?.split('@')[1] || 'No Email'}
                  </div>
                </div>
              </th>
              <td className="px-4 py-4 font-medium text-gray-600">
                {item?.user?.gender || 'N/A'}
              </td>
              <td className="px-4 py-4">
                {item.isPaid ? (
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2 shadow-lg"></div>
                    <span className="text-green-600 font-semibold">Paid</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2 shadow-lg"></div>
                    <span className="text-red-600 font-semibold">Unpaid</span>
                  </div>
                )}
              </td>
              <td className="px-4 py-4 font-semibold text-gray-800">
                {item.ticketPrice}
              </td>
              <td className="px-4 py-4 text-gray-600">
                {formateDate(item.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
