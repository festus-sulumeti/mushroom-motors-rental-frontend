import React from 'react';
import { FaUser, FaTrash, FaEdit } from 'react-icons/fa';

const ManageUsers = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer' },
    { id: 2, name: 'Jane Wambui', email: 'jane@example.com', role: 'Customer' },
    { id: 3, name: 'Brian Otieno', email: 'brian@example.com', role: 'Customer' },
  ];

  return (
    <div className="min-h-screen bg-[#0D1117] text-white p-10">
      <h2 className="text-4xl font-bold mb-8 text-[#FACC15]">Manage Users</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-[#161B22] text-gray-300">
              <th className="p-4">#</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-b border-gray-700 hover:bg-[#1c232b] transition">
                <td className="p-4">{index + 1}</td>
                <td className="p-4 flex items-center gap-2">
                  <FaUser className="text-[#FACC15]" /> {user.name}
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4 flex space-x-4">
                  <button className="text-blue-400 hover:underline text-sm flex items-center">
                    <FaEdit className="mr-1" /> Edit
                  </button>
                  <button className="text-red-500 hover:underline text-sm flex items-center">
                    <FaTrash className="mr-1" /> Delete
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
