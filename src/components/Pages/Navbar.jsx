import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0D1117] text-white px-10 py-4 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold text-[#FACC15]">
        Mushroom Motors
      </div>
      <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <Link to="/" className="hover:text-[#FACC15]">Home</Link>
        <Link to="/cars" className="hover:text-[#FACC15]">Available Cars</Link>
        <Link to="/about" className="hover:text-[#FACC15]">About</Link>
        <Link to="/contact" className="hover:text-[#FACC15]">Contact</Link>
      </div>
      <div className="space-x-4 hidden md:flex">
        <Link to="/login" className="px-4 py-2 border border-[#FACC15] rounded-md hover:bg-[#FACC15] hover:text-black">
          Login
        </Link>
        <Link to="/signup" className="px-4 py-2 bg-[#FACC15] rounded-md text-black font-semibold hover:bg-yellow-300">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
