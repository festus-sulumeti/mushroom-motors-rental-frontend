import React, { useState } from 'react';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Info:', formData);
    // Add your API call here
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-3xl font-bold text-[#FACC15] mb-8">Account Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-[#161B22] rounded-xl shadow-md p-8 w-full max-w-md space-y-6"
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
    </div>
  );
};

export default AccountSettings;
