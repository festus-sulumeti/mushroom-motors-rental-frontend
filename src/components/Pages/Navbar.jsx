import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white px-10 py-4 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold text-green-500">
        Mushroom Motors
      </div>
      <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <Link to="/" className="hover:text-green-400">Home</Link>
        <Link to="/cars" className="hover:text-green-400">Available Cars</Link>
        <Link to="/about" className="hover:text-green-400">About</Link>
        <Link to="/contact" className="hover:text-green-400">Contact</Link>
      </div>
      <div className="space-x-4 hidden md:flex">
        <Link to="/login" className="px-4 py-2 border border-green-500 rounded-md hover:bg-green-500 hover:text-black">
          Login
        </Link>
        <Link to="/signup" className="px-4 py-2 bg-green-500 rounded-md text-black font-semibold hover:bg-green-400">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
