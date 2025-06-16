import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminTurf = () => {
  const [turfs, setTurfs] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchTurfs();
  }, []);

  const fetchTurfs = async () => {
    const response = await axios.get('http://localhost:3000/api/turfs');
    setTurfs(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (editing) {
      await axios.put(`http://localhost:3000/api/turfs/${editing}`, { name, location, price }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditing(null);
    } else {
      await axios.post('http://localhost:3000/api/turfs', { name, location, price }, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }

    setName('');
    setLocation('');
    setPrice('');
    fetchTurfs();
  };

  const handleEdit = (turf) => {
    setName(turf.name);
    setLocation(turf.location);
    setPrice(turf.price);
    setEditing(turf._id);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:3000/api/turfs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTurfs();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Turf Management</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Turf Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {editing ? 'Update Turf' : 'Add Turf'}
          </button>
        </form>

        <h2 className="text-2xl font-bold mb-4">Available Turfs</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {turfs.map((turf) => (
              <tr key={turf._id}>
                <td className="py-2 px-4 border-b">{turf.name}</td>
                <td className="py-2 px-4 border-b">{turf.location}</td>
                <td className="py-2 px-4 border-b">{turf.price}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(turf)}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(turf._id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTurf;
