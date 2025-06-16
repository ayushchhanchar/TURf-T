import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import isSignUp from '../atoms/IsSignup'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { PiSignOutLight } from "react-icons/pi";
import { useRecoilState } from 'recoil'
import isLoginAtom from '../atoms/Islogin'
import axios from 'axios'
import UserAtom from '../atoms/User';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom)
  const setSignUp = useSetRecoilState(isSignUp)
  const [user, setUser] = useRecoilState(UserAtom);
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggles the state between true and false
  };


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
      setIsLogin(false)
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error.response);  // Error handling
    }
  }

  const handleButton = () => {
    setSignUp(true)
    window.location.href = '/login'
  }

  const getInitials = (name) => {
    const nameArray = name.split(" ");
    if (nameArray.length > 1) {
      return nameArray[0][0] + nameArray[1][0];
    }
    return nameArray[0][0];
  };

  const initials = getInitials(user.username);

  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 20% of the element is in view
    // triggerOnce: true, // Only trigger the animation once
  });


  return (
    <>
      <motion.div 
        className='relative w-full h-24 backdrop-blur-xl bg-gray-300/10 flex items-center justify-between px-6 '
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.5  }}
      >
        <div className='flex items-center justify-center'>
          <h1 className='text-[3vw]  mt-5 font-bold text-center text-white mb-8'>Turf!t</h1>
        </div>
        <div className='flex items-center justify-center gap-5 text-white '>
          <button className='flex items-center gap-1'>Turf List <IoIosArrowDown /></button>
          <Link>About us</Link>
          <button className='border-white border-2 py-2 px-3 rounded-md'>List your Turf </button>
          {isLogin ? (
            <>
              <button className="flex h-fit w-fit items-center gap-1 justify-center bg-slate-500 text-white border-2 border-white  p-2 rounded-full" onClick={toggleDropdown}> {initials}  </button>
              {/* Dropdown div */}
              {isOpen && (
                <div className="absolute top-20 right-2 bg-white rounded  h-fit w-64">
                  <div className="text-black  rounded py-2 px-4">
                    <div className=' flex justify-start gap-3 items-center'>
                      <div className="w-fit h-fit p-2 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {initials}
                      </div>
                      <div>
                        <h2 className="text-lg"> {user.username}</h2>
                        <p className='text-sm'> {user.email}</p>
                      </div>
                    </div>
                    < Link to='/profile'><span className='text-blue-600 flex justify-start mt-2 ml-14'>View your profile </span></Link>
                  </div>
                  <hr />
                  <button onClick={HandleLogout} className='text-lg text-black flex justify-start items-center gap-2  rounded-md m-2 ml-4'><PiSignOutLight />Sign out</button>
                </div>
              )}

            </>
          ) : (
            <button onClick={handleButton} className='text-lg relative bg-white  px-8 items-center py-3  rounded-full  text-black transition ease-in-out delay-100 hover:text-blue-400  hover:bg-white hover:-translate-y-2  duration-300 '>Login/Register</button>
          )
          }


        </div>

      </motion.div>
    </>
  )
}

export default Navbar