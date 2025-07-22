import React from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide, FaUsers, FaClipboardList, FaChartBar } from 'react-icons/fa';
import AdminNavbar from '../components/AdminNavbar';

const AdminDashboardHome = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col">
      <AdminNavbar />

      <main className="flex-grow px-10 py-16">
        <h1 className="text-4xl font-bold text-[#FACC15] mb-6">Admin Dashboard</h1>
        <p className="text-gray-400 mb-10 max-w-xl">
          Manage vehicles, rentals, users, and reports with ease. This dashboard gives you full control of Mushroom Motors operations.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          <Link to="/admin/manage-cars" className="bg-[#161B22] rounded-lg p-6 shadow-md hover:ring-2 hover:ring-[#FACC15] transition text-center">
            <FaCarSide className="text-4xl mx-auto text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manage Cars</h3>
            <p className="text-gray-400">Add, edit, or remove available cars.</p>
          </Link>

          <Link to="/admin/rented-cars" className="bg-[#161B22] rounded-lg p-6 shadow-md hover:ring-2 hover:ring-[#FACC15] transition text-center">
            <FaClipboardList className="text-4xl mx-auto text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rented Cars</h3>
            <p className="text-gray-400">Track active rentals and timelines.</p>
          </Link>

          <Link to="/admin/users" className="bg-[#161B22] rounded-lg p-6 shadow-md hover:ring-2 hover:ring-[#FACC15] transition text-center">
            <FaUsers className="text-4xl mx-auto text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Users</h3>
            <p className="text-gray-400">View and manage registered users.</p>
          </Link>

          <Link to="/admin/reports" className="bg-[#161B22] rounded-lg p-6 shadow-md hover:ring-2 hover:ring-[#FACC15] transition text-center">
            <FaChartBar className="text-4xl mx-auto text-[#FACC15] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reports</h3>
            <p className="text-gray-400">Review system usage and reports.</p>
          </Link>
        </div>
      </main>

      <footer className="bg-[#161B22] text-gray-300 text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Mushroom Motors — Admin Panel.
      </footer>
    </div>
  );
};

export default AdminDashboardHome;
