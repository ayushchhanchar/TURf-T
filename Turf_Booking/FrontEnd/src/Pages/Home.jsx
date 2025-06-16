import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import { IoIosArrowDown } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import TurfBox from '../Components/TurfBox';
import { BsArrowRight } from "react-icons/bs";
import TurfCategory from '../Components/TurfCategory';
import Footer from '../Components/Footer';
import { useInView } from 'react-intersection-observer';
import { easeInOut, motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import isLoginAtom from '../atoms/Islogin';
import Cities from '../Components/Cities';


const Home = () => {
  // Array of turf boxes data
  const turfBoxes = ['Turf 1', 'Turf 2', 'Turf 3', 'Turf 4', 'Turf 5', 'Turf 6',];
  const[islogin,setIslogin] = useRecoilState(isLoginAtom)

  const { ref, inView } = useInView({
    threshold: 0.01, // Trigger when 20% of the boxes are in view
  });

  const animationVariants = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
  };


  //for Range
  const [showRangeDropdown, setShowRangeDropdown] = useState(false);
  const [priceRange, setPriceRange] = useState(1000); // Set the default range value
  const dropdownRef = useRef(null); // Ref for the dropdown

  // Function to handle range change
  const handleRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowRangeDropdown(false);
    }
  };

    // State for overlay visibility
    const [overlayVisible, setOverlayVisible] = useState(true);

    useEffect(() => {
      // Set timeout to hide the overlay after 2 seconds
      const timer = setTimeout(() => {
        setOverlayVisible(false);
      }, 2000); // Adjust duration as needed
  
      return () => clearTimeout(timer);
    }, []);

  // Use effect to set up the event listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  

  return (
    <>
      <div className='overflow-hidden'>
        {/* Full-screen overlay */}
        {overlayVisible && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            transition={{ duration: 1 ,delay:0.7 }} // Animation duration for sliding up

          >
            <h1 className="text-7xl text-black font-bold">Wanna Play?</h1>
          </motion.div>
        )}

<div className='overflow-hidden'>
      <div
        className="flex flex-col justify-start items-center h-screen shadow-2xl "
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1713815713124-362af0201f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />
        {/* Body */}
       
        <motion.div 
            className='flex flex-col h-full items-center justify-center  gap-16'
            initial={{ opacity: 0, y: -400 }} // Start from below
            animate={{ opacity: 1, y: 0 }} // Animate to original position
            transition={{ duration: 0.5 ,delay: 1}} // Animation duration
            
        >
          <h2 className='text-center text-6xl text-white font-bold uppercase'> Best Turf Booking Platform <br /> in your Area </h2>
          <h3 className='text-center text-lg text-white'>You can choose from variety of sports , such as cricket, Football , Badminton , tennis and more <br /> and book your preferred time slot and location</h3>
          <div className='h-24 w-[50vw] rounded-lg bg-white shadow-lg flex items-center justify-evenly'>
            
            <div className="relative flex flex-col gap-1">
                <h1 className='font-bold'>Type</h1>
                <select
                  className="appearance-none bg-white border border-gray-300 px-4 py-1 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:border-indigo-500"
                >
                  <option  value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Cricket">Cricket</option>
                </select>
            </div>
            <div className="relative flex flex-col gap-1">
                <h1 className='font-bold'>Location</h1>
                <select
                  className="appearance-none bg-white border border-gray-300 px-4 py-1 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:border-indigo-500 "
                >
                  <option  value="Football">Bhopal</option>
                  <option value="Basketball">Indore</option>
                  <option value="Cricket">Pune</option>
                  <option value="Cricket">Hyderabad</option>
                  <option value="Cricket">Mumbai</option>
                  <option value="Cricket">Delhi</option>
                  <option value="Cricket">Kolkata</option>
                  <option value="Cricket">Chennai</option>
                </select>
            </div>
            
            <div className='flex flex-col items-start justify-center gap-1 p-1'>
              <h1 className='font-bold'>Date</h1>
              <input className='flex items-center gap-1' type='Date'/>
            </div>
            
            <div className='flex flex-col items-start justify-center gap-1 p-1'>
                <h1 className='font-bold'>Price</h1>
                <h2
                  className='flex items-center gap-1 cursor-pointer bg-white border border-gray-300 px-4 py-1 pr-8 rounded-lg shadow leading-tight'
                  onClick={() => setShowRangeDropdown(!showRangeDropdown)} // Toggle dropdown on click
                >
                  ${priceRange} 
                </h2>
                
                {/* Range Dropdown - Conditionally Rendered */}
                {showRangeDropdown && (
                  <div className='relative' ref={dropdownRef}>
                    <div className="absolute mt-2 px-10 py-4 bg-white shadow-lg border border-gray-300 rounded-lg z-10">
                      <input
                        type="range"
                        min="100"
                        max="5000"
                        step="100"
                        value={priceRange}
                        onChange={handleRangeChange}
                        className="w-full"
                      />
                      <div className='flex justify-between w-32 text-sm mt-1'>
                        <span>100</span>
                        <span>5000</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            <div className='flex items-center justify-center bg-green-700 p-4 rounded-md'>
              <GrSearch className='text-white' />
            </div>
          </div>
        </motion.div>
      </div>
      <div className='w-full flex flex-col items-start bg-white px-32 py-16'>
        <div className='flex justify-between items-center w-full px-14 py-5 '>
          <h1>Expolre Best Turfs Near You</h1>
          <div className='flex justify-between items-center gap-2 :hover cursor-pointer'>
            <h5>See all</h5>
            < BsArrowRight className='text-center' />
          </div>
        </div>

        <div className='flex flex-wrap '>
          {/* <motion.div 
            className='w-1/3 flex justify-center py-4 '
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            <TurfBox title='Turf 1' />
          </motion.div> */}
          {turfBoxes.map((title, index) => (
          <motion.div
            key={index}
            ref={ref}
            className="w-1/3 flex justify-center py-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{
              duration: 0.4,
              delay: index * 0.05, // Stagger the boxes by 0.3 seconds
              ease: easeInOut
            }}
          >
            <TurfBox title={title} />
          </motion.div>
        ))}
         

        </div>
      </div>
      <div className='flex flex-col  justify-center items-start gap-5 px-24 pb-28 pt-12'> 
        <h2 className='text-2xl text-slate-600 font-bold'>Turf Category</h2>
        <div className='flex items-center justify-center gap-4'>
          <TurfCategory/>
        </div>
      </div>
      <Cities/>
      <div className='w-full h-[50vh]  flex justify-center items-center'>
          <div
             className=" h-56 w-[50vw] flex flex-col gap-4 justify-center items-center bg-slate-600  shadow-3xl rounded-3xl"
             style={{
               backgroundImage: 'url("https://images.unsplash.com/photo-1527475549522-94b2a376ce13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // replace with your image URL
               backgroundSize: 'cover',
               backgroundPosition: 'center',
             }}
          >

            {islogin ?  (
              <>
                <h2 className='text-3xl text-white' >Book your Turf</h2>
                <button className='px-5 py-2 bg-blue-500 text-white rounded-lg'>Book</button>
              </>
            ):(
              <>
                <h2 className='text-3xl text-white' >Register with us!</h2>
                <button  className='px-5 py-2 bg-blue-500 text-white rounded-lg'>Register</button>
              </>
            ) }
            
          </div>
      </div>
      <Footer/>
      </div>
      </div>
    </>
  )
}

export default Home