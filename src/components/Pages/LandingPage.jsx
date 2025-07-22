import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import carImage from '../../assets/image.jpeg';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col">
      <Navbar />
      <main className="flex flex-col md:flex-row items-center justify-between flex-grow px-10 py-16">
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Rent Smarter, Drive Further <span className="text-[#FACC15]">with Mushroom Motors</span>
          </h2>
          <p className="text-lg text-gray-300">
            Kenya’s trusted car rental platform for reliable, affordable, and convenient vehicle rentals. Explore our fleet, book in minutes, and hit the road with confidence.
          </p>
          <Link
            to="/cars"
            className="inline-block px-6 py-3 bg-[#FACC15] text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            View Available Cars
          </Link>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src={carImage}
            alt="Car Rental"
            className="rounded-2xl shadow-2xl w-full max-w-md"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
