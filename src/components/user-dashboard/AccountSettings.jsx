import React, { useState } from 'react';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Info:', formData);
    // TODO: Add API call to update account info
  };

  const handleDeleteAccount = () => {
    console.log('Account deleted');
    // TODO: Add API call to delete account
    setShowConfirmDelete(false);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-3xl font-bold text-[#FACC15] mb-8">Account Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-[#161B22] rounded-xl shadow-md p-8 w-full max-w-md space-y-6 mb-8"
      >
        <div>
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#0D1117] border border-gray-600 text-white focus:ring-[#FACC15]"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#0D1117] border border-gray-600 text-white focus:ring-[#FACC15]"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#0D1117] border border-gray-600 text-white focus:ring-[#FACC15]"
            placeholder="+2547XXXXXXX"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#0D1117] border border-gray-600 text-white focus:ring-[#FACC15]"
            placeholder="New Password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FACC15] text-black font-bold py-3 rounded-md hover:bg-yellow-400 transition"
        >
          Save Changes
        </button>
      </form>

      {/* Delete Account Section */}
      <div className="bg-[#161B22] rounded-xl shadow-md p-8 w-full max-w-md space-y-4 border border-red-700">
        <h2 className="text-xl font-semibold text-red-500">Delete Account</h2>
        <p className="text-gray-400 text-sm">
          Once you delete your account, all your data will be permanently removed. This action cannot be undone.
        </p>
        {!showConfirmDelete ? (
          <button
            onClick={() => setShowConfirmDelete(true)}
            className="w-full bg-red-600 text-white font-bold py-3 rounded-md hover:bg-red-700 transition"
          >
            Delete My Account
          </button>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-300 text-sm">Are you sure you want to delete your account?</p>
            <div className="flex space-x-4">
              <button
                onClick={handleDeleteAccount}
                className="flex-1 bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700 transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowConfirmDelete(false)}
                className="flex-1 bg-gray-600 text-white font-bold py-2 rounded-md hover:bg-gray-700 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSettings;
