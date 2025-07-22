import React from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide, FaUserCog, FaClipboardList } from 'react-icons/fa';

const UserDashboardHome = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col">
      {/* Header */}
      <header className="bg-[#161B22] p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-[#FACC15]">Mushroom Motors Dashboard</h1>
        <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <Link to="/dashboard" className="hover:text-[#FACC15]">Home</Link>
          <Link to="/my-rentals" className="hover:text-[#FACC15]">My Rentals</Link>
          <Link to="/account-settings" className="hover:text-[#FACC15]">Account Settings</Link>
          <Link to="/" className="hover:text-[#FACC15]">Logout</Link>
        </nav>
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
