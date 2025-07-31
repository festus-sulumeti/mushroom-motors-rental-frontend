import React, { useEffect, useState } from 'react';

const MyRentals = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rentingId, setRentingId] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/cars')
      .then(res => res.json())
      .then(data => {
        setCars(data.cars.filter(car => car.status === 'Available'));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
        setLoading(false);
      });
  }, []);

  const handleRent = (carId) => {
    setRentingId(carId);
    fetch(`http://127.0.0.1:5000/api/cars/${carId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Rented' })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCars(prev => prev.filter(car => car.id !== carId));
        }
        setRentingId(null);
      })
      .catch(err => {
        console.error('Error renting car:', err);
        setRentingId(null);
      });
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white px-8 py-12">
      <h1 className="text-3xl font-bold text-[#FACC15] mb-6">Available Cars for Rent</h1>

      {loading ? (
        <p className="text-gray-400">Loading cars...</p>
      ) : cars.length === 0 ? (
        <p className="text-gray-400">No available cars at the moment.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {cars.map(car => (
            <div key={car.id} className="bg-[#161B22] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">{car.name} - {car.model}</h3>
              <p className="text-gray-400 mt-2">Status: <span className="text-green-400">{car.status}</span></p>
              <button
                onClick={() => handleRent(car.id)}
                className="mt-4 bg-[#FACC15] text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
                disabled={rentingId === car.id}
              >
                {rentingId === car.id ? 'Processing...' : 'Rent This Car'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRentals;
