import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboardHome = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col">
      {/* Header / Dashboard Navigation */}
      <header className="bg-[#161B22] p-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-[#FACC15]">Mushroom Motors Dashboard</h1>
        <nav className="flex space-x-6 text-gray-300">
          <Link to="/dashboard" className="hover:text-[#FACC15]">Home</Link>
          <Link to="/my-rentals" className="hover:text-[#FACC15]">My Rentals</Link>
          <Link to="/account-settings" className="hover:text-[#FACC15]">Account Settings</Link>
          <Link to="/" className="hover:text-[#FACC15]">Logout</Link>
        </nav>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-grow px-10 py-16">
        <h2 className="text-3xl font-bold mb-8 text-[#FACC15]">Welcome Back!</h2>
        <p className="text-gray-400 mb-6">
          Your trusted rental partner for affordable, reliable, and flexible car rentals across Kenya.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#161B22] rounded-lg p-6 shadow-md hover:ring-2 hover:ring-[#FACC15] transition">
            <h3 className="text-xl font-semibold text-white mb-2">My Rentals</h3>
            <p className="text-gray-400">View and manage all the cars you’ve rented.</p>
            <Link to="/my-rentals" className="mt-4 inline-block text-[#FACC15] font-medium hover:underline">View Rentals →</Link>
          </div>

          <div className="bg-[#161B22] rounded-lg p-6 shadow-md hover:ring-2 hover:ring-[#FACC15] transition">
            <h3 className="text-xl font-semibold text-white mb-2">Browse Cars</h3>
            <p className="text-gray-400">Find a new car to rent from our available fleet.</p>
            <Link to="/cars" className="mt-4 inline-block text-[#FACC15] font-medium hover:underline">Browse Cars →</Link>
          </div>

          <div className="bg-[#161B22] rounded-lg p-6 shadow-md hover:ring-2 hover:ring-[#FACC15] transition">
            <h3 className="text-xl font-semibold text-white mb-2">Account Settings</h3>
            <p className="text-gray-400">Update your personal details and manage your account.</p>
            <Link to="/account-settings" className="mt-4 inline-block text-[#FACC15] font-medium hover:underline">Manage Account →</Link>
          </div>
        </div>
      </main>

      <footer className="bg-[#161B22] text-gray-300 text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Mushroom Motors — All Rights Reserved.
      </footer>
    </div>
  );
};

export default UserDashboardHome;
