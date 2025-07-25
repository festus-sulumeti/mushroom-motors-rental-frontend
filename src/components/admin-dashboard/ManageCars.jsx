import React from 'react';
import { FaCarSide, FaEdit, FaTrash } from 'react-icons/fa';

const ManageCars = () => {
  const cars = [
    {
      id: 1,
      name: 'Toyota Premio',
      model: '2020',
      status: 'Available',
    },
    {
      id: 2,
      name: 'Mazda Demio',
      model: '2018',
      status: 'Rented',
    },
    {
      id: 3,
      name: 'Nissan Note',
      model: '2019',
      status: 'Available',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-white p-10">
      <h2 className="text-4xl font-bold mb-8 text-[#FACC15]">Manage Cars</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-[#161B22] text-gray-300">
              <th className="p-4">#</th>
              <th className="p-4">Car</th>
              <th className="p-4">Model</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={car.id} className="border-b border-gray-700 hover:bg-[#1c232b] transition">
                <td className="p-4">{index + 1}</td>
                <td className="p-4 flex items-center gap-2">
                  <FaCarSide className="text-[#FACC15]" /> {car.name}
                </td>
                <td className="p-4">{car.model}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      car.status === 'Available'
                        ? 'bg-green-700 text-white'
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    {car.status}
                  </span>
                </td>
                <td className="p-4 flex space-x-4">
                  <button className="text-blue-400 hover:underline text-sm flex items-center">
                    <FaEdit className="mr-1" /> Edit
                  </button>
                  <button className="text-red-500 hover:underline text-sm flex items-center">
                    <FaTrash className="mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCars;
