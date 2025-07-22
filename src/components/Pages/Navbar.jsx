import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0D1117] text-white px-6 py-4 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <h1 className="text-xl font-bold text-[#FACC15]">Mushroom Motors</h1>
        <span className="text-xs text-gray-400 hidden md:block">Car Rental Platform</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <Link to="/" className="hover:text-[#FACC15]">Home</Link>
        <Link to="/cars" className="hover:text-[#FACC15]">Available Cars</Link>
        <Link to="/about" className="hover:text-[#FACC15]">About</Link>
        <Link to="/contact" className="hover:text-[#FACC15]">Contact</Link>
        <Link to="/login" className="hover:text-[#FACC15]">Login</Link>
        <Link to="/signup" className="hover:text-[#FACC15]">Sign Up</Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FiMenu className="text-2xl text-gray-300" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0D1117] py-4 px-6 flex flex-col space-y-4 md:hidden text-gray-300 font-medium shadow-lg z-50">
          <Link to="/" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/cars" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Available Cars</Link>
          <Link to="/about" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
