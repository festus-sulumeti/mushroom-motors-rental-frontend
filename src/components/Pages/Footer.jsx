import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] text-gray-300 px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        <div>
          <h4 className="text-[#FACC15] font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Available Cars</Link></li>
            <li><Link to="/">Car Categories</Link></li>
            <li><Link to="/">Offers</Link></li>
            <li><Link to="/">Insurance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FACC15] font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Flexible Rentals</Link></li>
            <li><Link to="/">Corporate Services</Link></li>
            <li><Link to="/">Long-Term Leasing</Link></li>
            <li><Link to="/">Airport Transfers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FACC15] font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Customer Stories</Link></li>
            <li><Link to="/">Guides</Link></li>
            <li><Link to="/">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FACC15] font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Company</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">Partnerships</Link></li>
            <li><Link to="/">Trust & Safety</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FACC15] font-semibold mb-4">Get Started</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Book Now</Link></li>
            <li><Link to="/">Request Quote</Link></li>
            <li><Link to="/">Customer Support</Link></li>
            <li><Link to="/">Developer API</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold text-[#FACC15]">Mushroom Motors</h1>
          <span className="text-xs text-gray-400">© {new Date().getFullYear()} All Rights Reserved.</span>
        </div>

        <div className="flex items-center space-x-6 text-gray-400 mt-6 md:mt-0">
          <FaFacebookF className="hover:text-[#FACC15]" />
          <FaLinkedinIn className="hover:text-[#FACC15]" />
          <FaXTwitter className="hover:text-[#FACC15]" />
          <FaInstagram className="hover:text-[#FACC15]" />
        </div>

        <div className="mt-4 md:mt-0 flex space-x-4 text-xs text-gray-400">
          <Link to="/" className="hover:text-[#FACC15]">Privacy Policy</Link>
          <Link to="/" className="hover:text-[#FACC15]">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
