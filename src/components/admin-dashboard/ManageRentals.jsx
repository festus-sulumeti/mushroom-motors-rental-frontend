import React, { useState } from 'react';
import { FaCarSide, FaCheck, FaTimesCircle, FaClock } from 'react-icons/fa';

const ManageRentals = () => {
  const [rentals, setRentals] = useState([
    {
      id: 1,
      user: 'John Mwangi',
      car: 'Toyota Premio',
      date: '2025-07-20',
      status: 'Pending',
    },
    {
      id: 2,
      user: 'Grace Wanjiku',
      car: 'Mazda Demio',
      date: '2025-07-18',
      status: 'Approved',
    },
    {
      id: 3,
      user: 'Ali Hassan',
      car: 'Nissan Note',
      date: '2025-07-15',
      status: 'Completed',
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-600';
      case 'Approved':
        return 'bg-blue-600';
      case 'Completed':
        return 'bg-green-600';
      case 'Cancelled':
        return 'bg-red-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white p-6 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#FACC15] mb-2">Manage Rentals</h2>
      <p className="text-gray-400 mb-6 text-sm sm:text-base">
        View and manage ongoing, completed, or cancelled car rentals.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-[#161B22] text-gray-300">
              <th className="p-4">#</th>
              <th className="p-4">User</th>
              <th className="p-4">Car</th>
              <th className="p-4">Rental Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rentals.map((rental, index) => (
              <tr
                key={rental.id}
                className="border-b border-gray-700 hover:bg-[#1C232B] transition"
              >
                <td className="p-4 font-medium">{index + 1}</td>
                <td className="p-4">{rental.user}</td>
                <td className="p-4 flex items-center gap-2">
                  <FaCarSide className="text-[#FACC15]" />
                  <span>{rental.car}</span>
                </td>
                <td className="p-4">{rental.date}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      rental.status
                    )} text-white`}
                  >
                    {rental.status}
                  </span>
                </td>
                <td className="p-4 flex space-x-4">
                  {rental.status === 'Pending' && (
                    <>
                      <button className="flex items-center text-green-400 hover:underline text-sm">
                        <FaCheck className="mr-1" /> Approve
                      </button>
                      <button className="flex items-center text-red-400 hover:underline text-sm">
                        <FaTimesCircle className="mr-1" /> Cancel
                      </button>
                    </>
                  )}
                  {rental.status === 'Approved' && (
                    <button className="flex items-center text-blue-400 hover:underline text-sm">
                      <FaClock className="mr-1" /> Mark as Completed
                    </button>
                  )}
                  {['Completed', 'Cancelled'].includes(rental.status) && (
                    <span className="text-gray-400 text-sm italic">No actions</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRentals;
