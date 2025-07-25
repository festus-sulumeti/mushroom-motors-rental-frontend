import React, { useEffect, useState } from 'react';
import { FaUser, FaTrash, FaEdit } from 'react-icons/fa';

const API_URL = import.meta.env.VITE_API_BASE_URL;

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("📡 Fetching users from:", `${API_URL}/api/users`);

    fetch(`${API_URL}/api/users`, {
      method: 'GET',
      credentials: 'include', // same as axios's withCredentials: true
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('✅ Users fetched:', data.users);
        setUsers(data.users);
      })
      .catch((error) => {
        console.error('❌ Error fetching users:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white px-10 py-16">
      <h2 className="text-4xl font-extrabold text-[#FACC15] mb-8">Manage Users</h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-sm border-collapse bg-[#0D1117]">
          <thead>
            <tr className="bg-[#161B22] text-left text-gray-300">
              <th className="p-4 font-semibold">#</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Role</th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-gray-700 hover:bg-[#1c232b] transition duration-200"
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4 flex items-center gap-2">
                  <FaUser className="text-[#FACC15]" />
                  <span>{user.name}</span>
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4 flex space-x-4">
                  <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center transition">
                    <FaEdit className="mr-1" />
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-400 text-sm flex items-center transition">
                    <FaTrash className="mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
