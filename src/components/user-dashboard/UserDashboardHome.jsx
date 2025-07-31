import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide, FaUserCog, FaClipboardList, FaCog, FaBell, FaChartBar } from 'react-icons/fa';

const UserDashboardHome = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);

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
            <button
              onClick={() => setShowSupportModal(true)}
              className="mt-4 bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded transition"
            >
              Support Tickets Payment
            </button>
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
      {/* Support Tickets Modal */}
      {showSupportModal && (
        <SupportTicketsModal onClose={() => setShowSupportModal(false)} />
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

// Support Tickets Modal Component
function SupportTicketsModal({ onClose }) {
  const [tickets, setTickets] = React.useState([
    {
      id: 1,
      subject: 'Mpesa payment not reflecting',
      method: 'Mpesa',
      status: 'Open',
      createdAt: '2024-07-20',
      details: 'Paid via Mpesa but not updated in dashboard.',
    },
    {
      id: 2,
      subject: 'Credit card payment failed',
      method: 'Credit Card',
      status: 'Closed',
      createdAt: '2024-07-18',
      details: 'Card was charged but rental not activated.',
    },
  ]);
  const [showForm, setShowForm] = React.useState(false);
  const [form, setForm] = React.useState({
    subject: '',
    method: 'Mpesa',
    details: '',
  });
  const [success, setSuccess] = React.useState(false);
  const [showPaymentForm, setShowPaymentForm] = React.useState(false);
  const [paymentType, setPaymentType] = React.useState('Mpesa');
  const [paymentData, setPaymentData] = React.useState({
    mpesaNumber: '',
    mpesaAmount: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVC: '',
    cardAmount: '',
  });
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.subject || !form.details) return;
    setTickets([
      {
        id: tickets.length + 1,
        subject: form.subject,
        method: form.method,
        status: 'Open',
        createdAt: new Date().toISOString().slice(0, 10),
        details: form.details,
      },
      ...tickets,
    ]);
    setForm({ subject: '', method: 'Mpesa', details: '' });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setShowForm(false);
  };

  const handlePaymentInput = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      setShowPaymentForm(false);
      setPaymentData({
        mpesaNumber: '',
        mpesaAmount: '',
        cardNumber: '',
        cardName: '',
        cardExpiry: '',
        cardCVC: '',
        cardAmount: '',
      });
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#161B22] rounded-xl shadow-2xl p-8 w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-[#FACC15] text-xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[#FACC15] mb-4 text-center">Support Tickets</h2>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded transition"
          >
            + Create New Ticket
          </button>
          <button
            onClick={() => setShowPaymentForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition"
          >
            Make a Payment
          </button>
        </div>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-[#161B22] rounded-xl shadow-2xl p-8 w-full max-w-md relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-[#FACC15] text-xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-[#FACC15] mb-4 text-center">New Payment Support Ticket</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                    placeholder="e.g. Mpesa payment not reflecting"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Payment Method</label>
                  <select
                    name="method"
                    value={form.method}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                  >
                    <option value="Mpesa">Mpesa</option>
                    <option value="Credit Card">Credit Card</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Details</label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                    rows={4}
                    placeholder="Describe your payment issue..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded transition"
                >
                  Submit Ticket
                </button>
                {success && (
                  <span className="text-green-400 text-sm mt-2">Ticket submitted successfully!</span>
                )}
              </form>
            </div>
          </div>
        )}
        {showPaymentForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-[#161B22] rounded-xl shadow-2xl p-8 w-full max-w-md relative">
              <button
                onClick={() => setShowPaymentForm(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-[#FACC15] text-xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-[#FACC15] mb-4 text-center">Payment Form</h2>
              <form onSubmit={handlePaymentSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-gray-300 mb-1">Payment Method</label>
                  <select
                    name="paymentType"
                    value={paymentType}
                    onChange={e => setPaymentType(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                  >
                    <option value="Mpesa">Mpesa</option>
                    <option value="Credit Card">Credit Card</option>
                  </select>
                </div>
                {paymentType === 'Mpesa' ? (
                  <>
                    <div>
                      <label className="block text-gray-300 mb-1">Mpesa Number</label>
                      <input
                        type="text"
                        name="mpesaNumber"
                        value={paymentData.mpesaNumber}
                        onChange={handlePaymentInput}
                        className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                        placeholder="Enter Mpesa number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1">Amount</label>
                      <input
                        type="number"
                        name="mpesaAmount"
                        value={paymentData.mpesaAmount}
                        onChange={handlePaymentInput}
                        className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                        placeholder="Enter amount"
                        min="1"
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-gray-300 mb-1">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handlePaymentInput}
                        className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                        placeholder="Card Number"
                        maxLength={19}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1">Name on Card</label>
                      <input
                        type="text"
                        name="cardName"
                        value={paymentData.cardName}
                        onChange={handlePaymentInput}
                        className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                        placeholder="Name on Card"
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <label className="block text-gray-300 mb-1">Expiry</label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={paymentData.cardExpiry}
                          onChange={handlePaymentInput}
                          className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-gray-300 mb-1">CVC</label>
                        <input
                          type="text"
                          name="cardCVC"
                          value={paymentData.cardCVC}
                          onChange={handlePaymentInput}
                          className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                          placeholder="CVC"
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1">Amount</label>
                      <input
                        type="number"
                        name="cardAmount"
                        value={paymentData.cardAmount}
                        onChange={handlePaymentInput}
                        className="w-full px-3 py-2 rounded bg-[#0D1117] border border-gray-700 text-white"
                        placeholder="Enter amount"
                        min="1"
                        required
                      />
                    </div>
                  </>
                )}
                <button
                  type="submit"
                  className="bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded transition"
                >
                  Pay Now
                </button>
                {paymentSuccess && (
                  <span className="text-green-400 text-sm mt-2">Payment successful!</span>
                )}
              </form>
            </div>
          </div>
        )}
        <div className="overflow-x-auto rounded-lg shadow-md mt-6">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#161B22] text-gray-300">
                <th className="p-4">#</th>
                <th className="p-4">Subject</th>
                <th className="p-4">Method</th>
                <th className="p-4">Status</th>
                <th className="p-4">Created</th>
                <th className="p-4">Details</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, idx) => (
                <tr key={ticket.id} className="border-b border-gray-700 hover:bg-[#1C232B] transition">
                  <td className="p-4 font-medium">{idx + 1}</td>
                  <td className="p-4">{ticket.subject}</td>
                  <td className="p-4">{ticket.method}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        ticket.status === 'Open' ? 'bg-green-700' : 'bg-gray-600'
                      } text-white`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="p-4">{ticket.createdAt}</td>
                  <td className="p-4">{ticket.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardHome;
