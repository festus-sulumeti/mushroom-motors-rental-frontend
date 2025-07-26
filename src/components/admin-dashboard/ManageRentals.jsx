import React, { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';

const API_URL = import.meta.env.VITE_API_BASE_URL;


const RentedCars = () => {
  const [rentedCars, setRentedCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/cars/rented`)
      .then((res) => res.json())
      .then((data) => {
        setRentedCars(data.rented_cars || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch rented cars:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white p-6 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#FACC15] mb-2">Rented Cars</h2>
      <p className="text-gray-400 mb-6 text-sm sm:text-base">
        List of all cars currently rented by users.
      </p>

      {loading ? (
        <div className="text-center text-gray-400 text-sm">Loading rented cars...</div>
      ) : rentedCars.length === 0 ? (
        <div className="text-center text-gray-400 text-sm">No cars are currently rented.</div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#161B22] text-gray-300">
                <th className="p-4">#</th>
                <th className="p-4">Car</th>
                <th className="p-4">Model</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date Rented</th>
              </tr>
            </thead>
            <tbody>
              {rentedCars.map((car, index) => (
                <tr
                  key={car.id}
                  className="border-b border-gray-700 hover:bg-[#1C232B] transition"
                >
                  <td className="p-4 font-medium">{index + 1}</td>
                  <td className="p-4 flex items-center gap-2">
                    <FaCarSide className="text-[#FACC15]" />
                    <span>{car.name}</span>
                  </td>
                  <td className="p-4">{car.model}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-semibold">
                      {car.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400 text-sm">
                    {new Date(car.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RentedCars;
