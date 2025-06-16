import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TurfList = () => {
  const [turfs, setTurfs] = useState([]);

  useEffect(() => {
    const fetchTurfs = async () => {
      const response = await axios.get('http://localhost:3000/api/turfs');
      setTurfs(response.data);
    };

    fetchTurfs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Available Turfs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {turfs.map((turf) => (
            <div key={turf._id} className="bg-white shadow-md rounded p-4">
              <h2 className="text-xl font-bold">{turf.name}</h2>
              <p className="text-gray-700">Location: {turf.location}</p>
              <p className="text-gray-700">Price: ${turf.price}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Book Turf
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TurfList;
