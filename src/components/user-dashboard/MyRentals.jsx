import React, { useEffect, useState } from 'react';
import { FaCarSide, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const MyRentals = () => {
  const [cart, setCart] = useState([]);
  const [processingId, setProcessingId] = useState(null);
  const [cancelingId, setCancelingId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [userName, setUserName] = useState('');  // <-- New state

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('rentalCart') || '[]');
    setCart(storedCart);

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  const handleFinalize = (carId) => {
    setProcessingId(carId);
    setTimeout(() => {
      const updatedCart = cart.filter(car => car.id !== carId);
      setCart(updatedCart);
      localStorage.setItem('rentalCart', JSON.stringify(updatedCart));
      setProcessingId(null);
      setSuccessMessage(`You have successfully rented the car, ${userName || 'User'}!`);
      setTimeout(() => setSuccessMessage(''), 3000);
    }, 1000);
  };

  const handleCancel = (carId) => {
    setCancelingId(carId);
    setTimeout(() => {
      const updatedCart = cart.filter(car => car.id !== carId);
      setCart(updatedCart);
      localStorage.setItem('rentalCart', JSON.stringify(updatedCart));
      setCancelingId(null);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white px-4 py-10 sm:px-8 sm:py-12">
      <h1 className="text-3xl font-bold text-[#FACC15] mb-2">My Rentals</h1>
      <p className="text-gray-400 mb-8 text-sm">Review and finalize your car rentals below.</p>
      {successMessage && (
        <div className="mb-6 flex items-center justify-center">
          <span className="bg-green-700 text-white px-6 py-3 rounded shadow flex items-center gap-2 text-lg">
            <FaCheckCircle className="text-xl" /> {successMessage}
          </span>
        </div>
      )}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <FaCarSide className="text-5xl text-gray-700 mb-4" />
          <p className="text-gray-400 text-lg">No cars in your cart. Go to <span className="text-[#FACC15] font-semibold">Browse Cars</span> to add one.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cart.map(car => (
            <div key={car.id} className="bg-[#161B22] p-6 rounded-xl shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <FaCarSide className="text-[#FACC15] text-2xl" />
                  <h3 className="text-xl font-semibold">{car.name} <span className="text-gray-400 font-normal">- {car.model}</span></h3>
                </div>
                <p className="text-gray-400 mb-2">Status: <span className="text-green-400 font-semibold">Ready to finalize</span></p>
                <p className="text-xs text-gray-500 mb-4">Added: {car.created_at ? new Date(car.created_at).toLocaleDateString() : '-'}</p>
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleFinalize(car.id)}
                  className={`flex-1 flex items-center justify-center gap-2 bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded transition ${
                    processingId === car.id ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={processingId === car.id}
                >
                  <FaCheckCircle />
                  {processingId === car.id ? 'Processing...' : 'Finalize Rental'}
                </button>
                <button
                  onClick={() => handleCancel(car.id)}
                  className={`flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition ${
                    cancelingId === car.id ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={cancelingId === car.id}
                >
                  <FaTimesCircle />
                  {cancelingId === car.id ? 'Cancelling...' : 'Cancel Rental'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRentals;
