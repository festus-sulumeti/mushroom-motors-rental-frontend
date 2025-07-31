import React, { useState } from 'react';

const TicketPaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [formData, setFormData] = useState({
    phone: '',
    amount: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    paypalEmail: '',
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert(`Payment method: ${paymentMethod}\nDetails: ${JSON.stringify(formData, null, 2)}`);
    // You can replace this with actual payment API integration logic
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#0D1117] text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#FACC15] mb-4">Ticket Payment</h2>

      <div className="flex space-x-3 mb-6">
        {['mpesa', 'credit', 'paypal'].map(method => (
          <button
            key={method}
            onClick={() => setPaymentMethod(method)}
            className={`px-4 py-2 rounded ${
              paymentMethod === method ? 'bg-[#FACC15] text-black' : 'bg-[#161B22] text-white'
            }`}
          >
            {method === 'mpesa' && 'M-Pesa'}
            {method === 'credit' && 'Credit Card'}
            {method === 'paypal' && 'PayPal'}
          </button>
        ))}
      </div>

      <form onSubmit={handlePaymentSubmit} className="space-y-4">
        {/* Shared Amount Field */}
        <div>
          <label className="block text-sm mb-1">Amount (KES)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
            className="w-full p-2 rounded bg-[#161B22] border border-gray-600 text-white"
          />
        </div>

        {/* M-Pesa Payment */}
        {paymentMethod === 'mpesa' && (
          <div>
            <label className="block text-sm mb-1">M-Pesa Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="e.g. 07XXXXXXXX"
              className="w-full p-2 rounded bg-[#161B22] border border-gray-600 text-white"
            />
          </div>
        )}

        {/* Credit Card Payment */}
        {paymentMethod === 'credit' && (
          <>
            <div>
              <label className="block text-sm mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                placeholder="1234 5678 9012 3456"
                className="w-full p-2 rounded bg-[#161B22] border border-gray-600 text-white"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1">Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  required
                  placeholder="MM/YY"
                  className="w-full p-2 rounded bg-[#161B22] border border-gray-600 text-white"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  required
                  placeholder="123"
                  className="w-full p-2 rounded bg-[#161B22] border border-gray-600 text-white"
                />
              </div>
            </div>
          </>
        )}

        {/* PayPal Payment */}
        {paymentMethod === 'paypal' && (
          <div>
            <label className="block text-sm mb-1">PayPal Email</label>
            <input
              type="email"
              name="paypalEmail"
              value={formData.paypalEmail}
              onChange={handleInputChange}
              required
              placeholder="you@example.com"
              className="w-full p-2 rounded bg-[#161B22] border border-gray-600 text-white"
            />
          </div>
        )}

        <button
          type="submit"
          className="mt-4 bg-[#FACC15] hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default TicketPaymentForm;
