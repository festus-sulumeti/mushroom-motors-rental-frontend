import React, { useState } from 'react';

const AccountSettings = () => {
  const [accountDetails] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+254712345678',
    memberSince: 'January 2024',
  });

  const [editForm, setEditForm] = useState({
    name: accountDetails.name,
    email: accountDetails.email,
    phone: accountDetails.phone,
    password: '',
  });

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log('Updated account info:', editForm);
    // TODO: API call to update account info
  };

  const handleDeleteAccount = () => {
    console.log('Account deleted');
    // TODO: API call to delete account
    setShowDeleteConfirm(false);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white py-16 px-4 md:px-16">
      <h1 className="text-3xl font-bold text-[#FACC15] mb-8 text-center">Account Settings</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* Account Details Section */}
        <div className="bg-[#161B22] rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#FACC15]">Account Details</h2>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li><span className="font-semibold text-white">Name:</span> {accountDetails.name}</li>
            <li><span className="font-semibold text-white">Email:</span> {accountDetails.email}</li>
            <li><span className="font-semibold text-white">Phone:</span> {accountDetails.phone}</li>
            <li><span className="font-semibold text-white">Member Since:</span> {accountDetails.memberSince}</li>
          </ul>
        </div>

        {/* Edit Account Section */}
        <div className="bg-[#161B22] rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#FACC15]">Edit Account Information</h2>
          <form onSubmit={handleEditSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleEditChange}
                className="w-full p-3 rounded-md bg-[#0D1117] border border-gray-600 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleEditChange}
                className="w-full p-3 rounded-md bg-[#0D1117] border border-gray-600 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={editForm.phone}
                onChange={handleEditChange}
                className="w-full p-3 rounded-md bg-[#0D1117] border border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">New Password</label>
              <input
                type="password"
                name="password"
                value={editForm.password}
                onChange={handleEditChange}
                className="w-full p-3 rounded-md bg-[#0D1117] border border-gray-600 text-white"
                placeholder="Leave blank to keep current password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FACC15] text-black font-bold py-2 rounded-md hover:bg-yellow-400 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>

      {/* Delete Account Section */}
      <div className="max-w-2xl mx-auto mt-12 bg-[#161B22] rounded-xl shadow-md p-8 border border-red-700">
        <h2 className="text-xl font-semibold text-red-500 mb-4">Delete Account</h2>
        <p className="text-gray-400 text-sm mb-4">
          Once you delete your account, all your data will be permanently removed. This action cannot be undone.
        </p>

        {!showDeleteConfirm ? (
          <button
            onClick={() => setShowDeleteConfirm(true)}
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
                onClick={() => setShowDeleteConfirm(false)}
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
