import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide, FaUserCog, FaClipboardList, FaCog, FaBell, FaChartBar } from 'react-icons/fa';

const UserDashboardHome = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col">
      {/* Header */}
      <header className="bg-[#161B22] p-6 flex justify-between items-center shadow-md relative">
        <h1 className="text-2xl font-bold text-[#FACC15]">Mushroom Motors Dashboard</h1>

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
                  to="/account-settings"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#0D1117] hover:text-[#FACC15]"
                >
                  Account Settings
                </Link>
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

      {/* Main Content */}
      <main className="flex-grow px-10 py-16">
        <h2 className="text-4xl font-extrabold mb-4 text-[#FACC15]">Welcome Back!</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Manage your rentals, browse cars, check your stats, and stay updated with recent activity.
        </p>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#161B22] rounded-xl p-6 text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">Active Rentals</h3>
            <p className="text-3xl font-bold text-[#FACC15]">2</p>
          </div>
          <div className="bg-[#161B22] rounded-xl p-6 text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Rentals</h3>
            <p className="text-3xl font-bold text-[#FACC15]">15</p>
          </div>
          <div className="bg-[#161B22] rounded-xl p-6 text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">Pending Payments</h3>
            <p className="text-3xl font-bold text-[#FACC15]">Ksh 3,000</p>
          </div>
          <div className="bg-[#161B22] rounded-xl p-6 text-center shadow-md">
            <h3 className="text-lg font-semibold mb-2">Support Tickets</h3>
            <p className="text-3xl font-bold text-[#FACC15]">1</p>
          </div>
        </div>

        {/* Main Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="bg-[#161B22] rounded-xl p-8 shadow-md hover:ring-2 hover:ring-[#FACC15] transition cursor-pointer">
            <FaClipboardList className="text-3xl text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">My Rentals</h3>
            <p className="text-gray-400 mb-4">View and manage your active or previous rentals.</p>
            <Link to="/user/my-rentals" className="text-[#FACC15] font-medium hover:underline">Go to My Rentals →</Link>
          </div>

          <div className="bg-[#161B22] rounded-xl p-8 shadow-md hover:ring-2 hover:ring-[#FACC15] transition cursor-pointer">
            <FaCarSide className="text-3xl text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Browse Cars</h3>
            <p className="text-gray-400 mb-4">Find the latest vehicles available to rent in Kenya.</p>
            <Link to="/user/browse-cars" className="text-[#FACC15] font-medium hover:underline">Browse Cars →</Link>
          </div>

          <div className="bg-[#161B22] rounded-xl p-8 shadow-md hover:ring-2 hover:ring-[#FACC15] transition cursor-pointer">
            <FaUserCog className="text-3xl text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Support & Assistance</h3>
            <p className="text-gray-400 mb-4">Get help with bookings, payments, or account issues.</p>
            <Link to="/support" className="text-[#FACC15] font-medium hover:underline">Visit Support →</Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#161B22] rounded-xl p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-[#FACC15] flex items-center">
            <FaChartBar className="mr-2" /> Recent Activity
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>✅ Successfully booked Toyota Axio on July 20, 2025</li>
            <li>💳 Payment of Ksh 2,000 completed on July 18, 2025</li>
            <li>📩 Support ticket opened: "Issue with car return" — July 17, 2025</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#161B22] text-gray-300 text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Mushroom Motors — All Rights Reserved.
      </footer>
    </div>
  );
};

export default UserDashboardHome;
