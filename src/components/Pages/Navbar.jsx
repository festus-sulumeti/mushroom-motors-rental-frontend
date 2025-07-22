import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0D1117] text-white px-6 py-4 shadow-md flex items-center justify-between">
      {/* Left: Logo + Links */}
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold text-[#FACC15]">Mushroom Motors</h1>
        </div>

        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <Link to="/" className="hover:text-[#FACC15]">Products</Link>
          <Link to="/cars" className="hover:text-[#FACC15]">Solutions</Link>
          <Link to="/about" className="hover:text-[#FACC15]">Resources</Link>
          <Link to="/contact" className="hover:text-[#FACC15]">Pricing</Link>
        </div>
      </div>

      {/* Right: Login / Sign Up (Desktop Only) */}
      <div className="hidden md:flex items-center space-x-4 font-medium text-gray-300">
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
          <Link to="/" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/cars" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link to="/about" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link to="/contact" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/login" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="hover:text-[#FACC15]" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
