import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const API_URL = import.meta.env.VITE_API_BASE_URL;


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('${API_URL}/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success && email === 'admin@gmail.com') {
        navigate('/admin-dashboard');
      } else if (data.success) {
        navigate('/user-dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Server error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-[#161B22] rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#FACC15] mb-8">Welcome Back</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-[#0D1117] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 bg-[#0D1117] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              required
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 cursor-pointer text-gray-400"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#FACC15] text-black font-semibold rounded-md hover:bg-yellow-300 transition"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#FACC15] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
