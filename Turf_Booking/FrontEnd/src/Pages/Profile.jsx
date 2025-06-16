import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserAtom from '../atoms/User';
import { useRecoilState } from 'recoil';

const Profile = () => {
  const [user, setUser] = useRecoilState(UserAtom);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:3000/api/auth/profile', {
          withCredentials: true,
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        });

        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.response);  // Error handling
      }
    };

    fetchUserProfile();
  }, []);

  
  const HandleLogout = async () => {
    alert('Logging out...');
    try {
      await axios.get('http://localhost:3000/api/auth/logout', { withCredentials: true });
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error.response);  // Error handling
    }
  }



  if (!user) return <div>Loading...</div>;

  return (
  
     
       <div className="flex flex-col min-h-screen justify-start items-center h-screen shadow-2xl" >
       <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">User Profile</h1>
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold">Username: {user.username}</h2>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      </div>
      <button className='py-2 px-4 bg-red-500 text-white rounded-md' onClick={HandleLogout}>Logout</button>
      

      {/* Navbar
      <div className='w-full h-24 pt-1 flex items-center justify-between p-5'>
          <div className='flex items-center justify-center'> 
             <h1 className='text-[3vw]  mt-5 font-bold text-center text-black mb-8'>Turf!t</h1>
          </div>
          <div className='flex items-center justify-center'>
              <button>Turf List</button>
              <Link>About us</Link>
              <button>List your Turf </button>
          </div>
      </div>
      {/* Body */}
      {/* <div className='flex flex-col items-center justify-center'>
        <h2 className='text-center text-3xl'>Best Turf Booking Platform <br /> in your Area</h2>
        <h3 className='text-center text-lg '>You can choose from variety of sports , such as cricket, Football , Badminton , tennis and more <br /> and book your preferred time slot and location</h3>
        <div className='h-24 w-[50vw]rounded-md bg-slate-700 shadow-md'></div>
      </div> */} 

    </div>
  );
};

export default Profile;
