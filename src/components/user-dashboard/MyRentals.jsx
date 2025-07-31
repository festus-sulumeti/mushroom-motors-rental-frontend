import React, { useEffect, useState } from 'react';

const MyRentals = () => {
  const [cart, setCart] = useState([]);
  const [processingId, setProcessingId] = useState(null);

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem('rentalCart') || '[]');
    setCart(storedCart);
  }, []);

  const handleFinalize = (carId) => {
    setProcessingId(carId);
    // ...existing finalize logic (e.g., API call to confirm rental)...
    // For demonstration, remove from cart after "finalizing"
    setTimeout(() => {
      const updatedCart = cart.filter(car => car.id !== carId);
      setCart(updatedCart);
      localStorage.setItem('rentalCart', JSON.stringify(updatedCart));
      setProcessingId(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white px-8 py-12">
      <h1 className="text-3xl font-bold text-[#FACC15] mb-6">My Rentals (Cart)</h1>
      {cart.length === 0 ? (
        <p className="text-gray-400">No cars in your cart. Go to Browse Cars to add one.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {cart.map(car => (
            <div key={car.id} className="bg-[#161B22] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">{car.name} - {car.model}</h3>
              <p className="text-gray-400 mt-2">Status: <span className="text-green-400">Ready to finalize</span></p>
              <button
                onClick={() => handleFinalize(car.id)}
                className="mt-4 bg-[#FACC15] text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
                disabled={processingId === car.id}
              >
                {processingId === car.id ? 'Processing...' : 'Finalize Rental'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default MyRentals;
