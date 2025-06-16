import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [turfId, setTurfId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    await axios.post('http://localhost:3000/api/bookings/book', { turfId, date, time }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert('Booking successful!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Book a Turf</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Turf ID</label>
            <input
              type="text"
              value={turfId}
              onChange={(e) => setTurfId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Book Turf
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
