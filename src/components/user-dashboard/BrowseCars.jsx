import React, { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const BrowseCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/cars`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data.cars || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
        setLoading(false);
      });
  }, []);

  const handleRent = (carId) => {
    fetch(`${API_BASE_URL}/api/cars/${carId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Rented' })
    })
      .then((res) => res.json())
      .then(() => {
        setCars((prevCars) =>
          prevCars.map(car =>
            car.id === carId ? { ...car, status: 'Rented' } : car
          )
        );
      })
      .catch((err) => console.error('Renting failed:', err));
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-[#FACC15] mb-6">All Cars</h1>
      {loading ? (
        <p className="text-gray-400">Loading cars...</p>
      ) : cars.length === 0 ? (
        <p className="text-gray-400">No cars found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#161B22] text-gray-300">
                <th className="p-4">#</th>
                <th className="p-4">Car</th>
                <th className="p-4">Model</th>
                <th className="p-4">Status</th>
                <th className="p-4">Added</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, idx) => (
                <tr key={car.id} className="border-b border-gray-700 hover:bg-[#1C232B] transition">
                  <td className="p-4 font-medium">{idx + 1}</td>
                  <td className="p-4 flex items-center gap-2">
                    <FaCarSide className="text-[#FACC15]" />
                    <span>{car.name}</span>
                  </td>
                  <td className="p-4">{car.model}</td>
                  <td className="p-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-green-700 text-white"
                    >
                      Available for renting
                    </span>
                  </td>
                  <td className="p-4">{car.created_at ? new Date(car.created_at).toLocaleDateString() : '-'}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRent(car.id)}
                      className="bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded"
                    >
                      Rent Now
                    </button>
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

export default BrowseCars;