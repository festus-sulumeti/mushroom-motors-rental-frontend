import React, { useEffect, useState } from 'react';

const BrowseCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/cars')
      .then((res) => res.json())
      .then((data) => {
        setCars(data.cars || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white px-8 py-12">
      <h1 className="text-3xl font-bold text-[#FACC15] mb-6">Browse Cars</h1>

      {loading ? (
        <p className="text-gray-400">Loading cars...</p>
      ) : cars.length === 0 ? (
        <p className="text-gray-400">No cars found in the system.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-[#161B22] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">{car.name} - {car.model}</h3>
              <p className="text-gray-400 mt-2">
                Status:{" "}
                <span className={car.status === 'Available' ? 'text-green-400' : 'text-red-400'}>
                  {car.status}
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">Added: {new Date(car.created_at).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseCars;
