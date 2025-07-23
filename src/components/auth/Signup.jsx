import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D1117] flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-[#161B22] rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#FACC15] mb-8">Create Your Account</h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-[#0D1117] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-[#0D1117] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 bg-[#0D1117] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 cursor-pointer text-gray-400"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label htmlFor="confirm-password" className="block text-gray-300 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              placeholder="********"
              className="w-full px-4 py-2 bg-[#0D1117] border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
            <div
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-10 cursor-pointer text-gray-400"
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#FACC15] text-black font-semibold rounded-md hover:bg-yellow-300 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-[#FACC15] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
