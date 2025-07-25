import React, { useEffect, useState } from 'react';
import { FaCarSide, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const API_URL = import.meta.env.VITE_API_BASE_URL;

const ManageCars = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ name: '', model: '', status: 'Available' });

  // Fetch cars
  useEffect(() => {
    fetch(`${API_URL}/api/cars`, { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => setCars(data.cars))
      .catch((err) => console.error('Failed to fetch cars:', err));
  }, []);

  // Add new car
  const handleAddCar = (e) => {
    e.preventDefault();
    if (!newCar.name || !newCar.model) return;

    fetch(`${API_URL}/api/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCars([...cars, data.car]);
          setNewCar({ name: '', model: '', status: 'Available' });
        }
      })
      .catch((err) => console.error('Failed to add car:', err));
  };

  // Delete car
  const handleDelete = (id) => {
    fetch(`${API_URL}/api/cars/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCars(cars.filter((car) => car.id !== id));
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white p-6 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#FACC15] mb-2">Manage Cars</h2>
      <p className="text-gray-400 mb-6 text-sm sm:text-base">
        Add, update, or remove vehicles from listings.
      </p>

      {/* Add Car Form */}
      <form onSubmit={handleAddCar} className="bg-[#161B22] p-6 rounded-lg mb-10 shadow-md grid gap-4 sm:grid-cols-4">
        <input
          type="text"
          placeholder="Car Name"
          value={newCar.name}
          onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
          className="col-span-1 sm:col-span-1 p-3 rounded bg-[#0D1117] border border-gray-700 text-white"
        />
        <input
          type="text"
          placeholder="Model"
          value={newCar.model}
          onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
          className="col-span-1 sm:col-span-1 p-3 rounded bg-[#0D1117] border border-gray-700 text-white"
        />
        <select
          value={newCar.status}
          onChange={(e) => setNewCar({ ...newCar, status: e.target.value })}
          className="col-span-1 sm:col-span-1 p-3 rounded bg-[#0D1117] border border-gray-700 text-white"
        >
          <option value="Available">Available</option>
          <option value="Rented">Rented</option>
        </select>
        <button
          type="submit"
          className="bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded flex items-center justify-center"
        >
          <FaPlus className="mr-2" /> Add Car
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
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
              <tr key={car.id} className="border-b border-gray-700 hover:bg-[#1C232B] transition">
                <td className="p-4 font-medium">{index + 1}</td>
                <td className="p-4 flex items-center gap-2">
                  <FaCarSide className="text-[#FACC15]" />
                  <span>{car.name}</span>
                </td>
                <td className="p-4">{car.model}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      car.status === 'Available' ? 'bg-green-700' : 'bg-red-600'
                    } text-white`}
                  >
                    {car.status}
                  </span>
                </td>
                <td className="p-4 flex space-x-4">
                 
                  <button onClick={() => handleDelete(car.id)} className="flex items-center text-red-500 hover:underline text-sm">
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
