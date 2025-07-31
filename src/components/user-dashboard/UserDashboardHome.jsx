import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide, FaUserCog, FaClipboardList, FaCog, FaBell, FaChartBar } from 'react-icons/fa';

const UserDashboardHome = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

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
          <div className="bg-[#161B22] rounded-xl p-6 text-center shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Make Payments</h3>
            <button
              onClick={() => setShowPaymentModal(true)}
              className="bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded transition mt-2"
            >
              Pay Now
            </button>
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

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal onClose={() => setShowPaymentModal(false)} />
      )}

      {/* Footer */}
      <footer className="bg-[#161B22] text-gray-300 text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Mushroom Motors — All Rights Reserved.
      </footer>
    </div>
  );
};

// Payment Modal Component
function PaymentModal({ onClose }) {
  const [amount, setAmount] = React.useState('');
  const [paybill, setPaybill] = React.useState('');
  const [paying, setPaying] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handlePay = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || Number(amount) <= 0 || !paybill || isNaN(paybill)) return;
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setSuccess(true);
      setAmount('');
      setPaybill('');
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#161B22] rounded-xl shadow-2xl p-8 w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-[#FACC15] text-xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[#FACC15] mb-4 text-center">Make a Payment</h2>
        <form onSubmit={handlePay} className="flex flex-col items-center gap-3">
          <input
            type="text"
            placeholder="Enter Paybill Number"
            value={paybill}
            onChange={e => setPaybill(e.target.value)}
            className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white text-center"
            disabled={paying || success}
            maxLength={20}
            required
          />
          <input
            type="number"
            min="1"
            placeholder="Enter amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white text-center"
            disabled={paying || success}
            required
          />
          <button
            type="submit"
            className="bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded w-full transition"
            disabled={
              paying ||
              !amount ||
              isNaN(amount) ||
              Number(amount) <= 0 ||
              !paybill ||
              isNaN(paybill) ||
              success
            }
          >
            {paying ? 'Processing...' : 'Pay Now'}
          </button>
          {success && (
            <span className="text-green-400 text-sm mt-2">Payment successful!</span>
          )}
        </form>
      </div>
    </div>
  );
}

export default UserDashboardHome;
