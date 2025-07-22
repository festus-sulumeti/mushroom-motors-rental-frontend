import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import carImage from '../../assets/image.jpeg';
import showcase1 from '../../assets/showcase1.jpeg';
import showcase2 from '../../assets/showcase2.jpeg';
import showcase3 from '../../assets/showcase3.jpeg';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
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

      {/* Why Choose Us */}
      <section className="px-10 py-16 bg-[#161B22]">
        <h3 className="text-3xl font-bold mb-6 text-[#FACC15]">Why Choose Mushroom Motors?</h3>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          <div>
            <h4 className="text-xl font-semibold mb-2 text-white">Wide Range of Vehicles</h4>
            <p>From compact cars to SUVs, we offer reliable vehicles to fit every journey and budget.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-white">Affordable Pricing</h4>
            <p>Transparent rates with no hidden charges. Pay for what you use — nothing more, nothing less.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-white">Convenient Booking</h4>
            <p>Fast online reservations with real-time availability. Book in minutes from anywhere.</p>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="px-10 py-16">
        <h3 className="text-3xl font-bold mb-6 text-[#FACC15]">Explore Our Vehicles in Action</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <img src={showcase1} alt="Kenyan Vehicle 1" className="rounded-lg shadow-lg w-full h-64 object-cover" />
          <img src={showcase2} alt="Kenyan Vehicle 2" className="rounded-lg shadow-lg w-full h-64 object-cover" />
          <img src={showcase3} alt="Kenyan Vehicle 3" className="rounded-lg shadow-lg w-full h-64 object-cover" />
        </div>
      </section>

      {/* How It Works */}
      <section className="px-10 py-16 bg-[#161B22]">
        <h3 className="text-3xl font-bold mb-6 text-[#FACC15]">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white">1. Browse & Select</h4>
            <p>Choose from a curated list of well-maintained, trusted vehicles ready for your journey.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white">2. Book & Confirm</h4>
            <p>Book your car online in minutes. Set your dates, choose your extras, and confirm instantly.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white">3. Drive & Enjoy</h4>
            <p>Pick up your car at your chosen location and enjoy a smooth, reliable driving experience.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-10 py-16">
        <h3 className="text-3xl font-bold mb-6 text-[#FACC15]">What Our Customers Say</h3>
        <div className="grid md:grid-cols-2 gap-10 text-gray-300">
          <div className="bg-[#161B22] p-6 rounded-lg shadow-md">
            <p>"Mushroom Motors gave me the smoothest experience I've ever had renting a car in Nairobi. Highly recommend!"</p>
            <p className="mt-4 text-sm text-[#FACC15]">— James, Nairobi</p>
          </div>
          <div className="bg-[#161B22] p-6 rounded-lg shadow-md">
            <p>"Affordable, reliable and excellent customer service. Will definitely use them again on my next trip."</p>
            <p className="mt-4 text-sm text-[#FACC15]">— Mary, Mombasa</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="px-10 py-16 bg-[#161B22] text-center">
        <h3 className="text-3xl font-bold mb-4 text-[#FACC15]">Ready to Get Started?</h3>
        <p className="text-gray-400 mb-8">Experience affordable, convenient, and reliable car rentals across Kenya today.</p>
        <Link
          to="/cars"
          className="inline-block px-8 py-4 bg-[#FACC15] text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
        >
          Explore Our Cars
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
