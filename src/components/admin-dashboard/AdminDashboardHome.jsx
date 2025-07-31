import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide, FaUsers, FaClipboardList, FaCog, FaBell, FaChartBar } from 'react-icons/fa';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminDashboardHome = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [vehicleCount, setVehicleCount] = useState(0);
  const [rentedCount, setRentedCount] = useState(0);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users/count`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user count');
        return res.json();
      })
      .then((data) => {
        setUserCount(data.count);
      })
      .catch((err) => {
        console.error('Error fetching user count:', err);
      });

    fetch(`${API_BASE_URL}/api/cars`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch vehicles');
        return res.json();
      })
      .then((data) => {
        setVehicleCount(data.cars.length);
      })
      .catch((err) => {
        console.error('Error fetching vehicles:', err);
      });

    fetch(`${API_BASE_URL}/api/cars/rented`)
    .then((res) => {
      if (!res.ok) throw new Error('Failed to fetch rented cars');
      return res.json();
    })
    .then((data) => {
      setRentedCount(data.rented_cars.length);
    })
    .catch((err) => {
      console.error('Error fetching rented cars:', err);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col">
      <header className="bg-[#161B22] p-6 flex justify-between items-center shadow-md relative">
        <h1 className="text-2xl font-bold text-[#FACC15]">Mushroom Motors Admin</h1>
        <div className="flex space-x-4">
          <button className="text-gray-300 text-2xl hover:text-[#FACC15]">
            <FaBell />
          </button>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-300 text-2xl hover:text-[#FACC15] focus:outline-none"
            >
              <FaCog />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-[#161B22] border border-gray-700 rounded-md shadow-md py-2 z-50">
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#0D1117] hover:text-[#FACC15]"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow px-10 py-16">
        <h2 className="text-4xl font-extrabold mb-4 text-[#FACC15]">Welcome Admin!</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Oversee vehicles, users, bookings, and reports — all from this central dashboard.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#161B22] rounded-xl p-6 text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Vehicles</h3>
            <p className="text-3xl font-bold text-[#FACC15]">{vehicleCount}</p>
          </div>
          <div className="bg-[#161B22] rounded-xl p-6 text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">Active Rentals</h3>
            <p className="text-3xl font-bold text-[#FACC15]">{rentedCount}</p>
          </div>

          <div className="bg-[#161B22] rounded-xl p-6 text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">Registered Users</h3>
            <p className="text-3xl font-bold text-[#FACC15]">{userCount}</p>
          </div>
          <div className="bg-[#161B22] rounded-xl p-6 text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">Pending Approvals</h3>
            <p className="text-3xl font-bold text-[#FACC15]">4</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="bg-[#161B22] rounded-xl p-8 shadow-md hover:ring-2 hover:ring-[#FACC15] transition cursor-pointer">
            <FaClipboardList className="text-3xl text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Manage Rentals</h3>
            <p className="text-gray-400 mb-4">Oversee active and historical rentals.</p>
            <Link to="/admin/rented-cars" className="text-[#FACC15] font-medium hover:underline">Manage Rentals →</Link>
          </div>

          <div className="bg-[#161B22] rounded-xl p-8 shadow-md hover:ring-2 hover:ring-[#FACC15] transition cursor-pointer">
            <FaCarSide className="text-3xl text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Manage Cars</h3>
            <p className="text-gray-400 mb-4">Add, update, or remove vehicles from listings.</p>
            <Link to="/admin/manage-cars" className="text-[#FACC15] font-medium hover:underline">Manage Cars →</Link>
          </div>

          <div className="bg-[#161B22] rounded-xl p-8 shadow-md hover:ring-2 hover:ring-[#FACC15] transition cursor-pointer">
            <FaUsers className="text-3xl text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Manage Users</h3>
            <p className="text-gray-400 mb-4">Access and manage user accounts and activity.</p>
            <Link to="/admin/users" className="text-[#FACC15] font-medium hover:underline">Manage Users →</Link>
          </div>
        </div>

        <div className="bg-[#161B22] rounded-xl p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-[#FACC15] flex items-center">
            <FaChartBar className="mr-2" /> System Logs
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>✅ 3 new cars added to the platform — July 21, 2025</li>
            <li>👥 5 new user registrations this week</li>
            <li>📊 Rental report generated — July 20, 2025</li>
          </ul>
        </div>
      </main>

      <footer className="bg-[#161B22] text-gray-300 text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Mushroom Motors — Admin Panel.
      </footer>
    </div>
  );
};

export default AdminDashboardHome;
