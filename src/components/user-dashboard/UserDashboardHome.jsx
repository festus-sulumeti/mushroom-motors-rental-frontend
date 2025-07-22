import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide, FaUserCog, FaClipboardList, FaCog } from 'react-icons/fa';

const UserDashboardHome = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col">
      {/* Header */}
      <header className="bg-[#161B22] p-6 flex justify-between items-center shadow-md relative">
        <h1 className="text-2xl font-bold text-[#FACC15]">Mushroom Motors Dashboard</h1>

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
      </header>

      {/* Main Content */}
      <main className="flex-grow px-10 py-16">
        <h2 className="text-4xl font-extrabold mb-4 text-[#FACC15]">Welcome Back!</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Manage your rentals, browse cars, and update your account with ease. Everything you need is right here.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#161B22] rounded-xl p-8 shadow-md hover:ring-2 hover:ring-[#FACC15] transition cursor-pointer">
            <FaClipboardList className="text-3xl text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">My Rentals</h3>
            <p className="text-gray-400 mb-4">Easily view and manage your active or previous rentals.</p>
            <Link to="/my-rentals" className="text-[#FACC15] font-medium hover:underline">Go to My Rentals →</Link>
          </div>

          <div className="bg-[#161B22] rounded-xl p-8 shadow-md hover:ring-2 hover:ring-[#FACC15] transition cursor-pointer">
            <FaCarSide className="text-3xl text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Browse Cars</h3>
            <p className="text-gray-400 mb-4">Discover the latest vehicles available to rent in Kenya.</p>
            <Link to="/cars" className="text-[#FACC15] font-medium hover:underline">Browse Cars →</Link>
          </div>

          <div className="bg-[#161B22] rounded-xl p-8 shadow-md hover:ring-2 hover:ring-[#FACC15] transition cursor-pointer">
            <FaUserCog className="text-3xl text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Account Settings</h3>
            <p className="text-gray-400 mb-4">Edit your personal information, security settings, and more.</p>
            <Link to="/account-settings" className="text-[#FACC15] font-medium hover:underline">Manage Account →</Link>
          </div>
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
