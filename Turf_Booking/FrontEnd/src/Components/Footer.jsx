import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const Footer = () => {

    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 20% of the element is in view
        // triggerOnce: true, // Only trigger the animation once
      });


      
  return (
    <motion.div 
        className=' w-full h-[60vh] bg-slate-950 flex flex-col'
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 1 }}
    >
        <div className=' h-[60vh] border-white w-full flex items-center justify-around -mt-20'>
            <div className='text-white flex flex-col items-start justify-center gap-2'>
                <h1 className='text-3xl'>Turf!t</h1>
                <p className='text-sm'>An online turf booking platform</p>
            </div>
            <div className='text-white flex flex-col items-start justify-center gap-2'>
                <h1 className='text-xl'>Contact Us</h1>
                <p className='text-sm flex items-center gap-1'> <FaPhoneAlt/> +91-9876543210</p>
                <p className='text-sm flex items-center gap-1'><IoIosMail/> hello@hello.com</p>
                <p className='text-sm flex items-center gap-1'><FaLocationDot/> Bhopal, madhya Pradesh, India</p>
            </div>
            <div className='text-white flex flex-col items-start justify-center gap-2'>
                <h1>Follow us</h1>
                <div className='flex items-center justify-center gap-2'>
                    <BsLinkedin className='text-2xl fill-blue-400'/>
                    <FaInstagram className='text-2xl fill-blue-100'/>
                    <FaFacebook className='text-2xl fill-blue-100'/>
                </div>
            </div>
        </div>
        <div className='text-white flex text-md items-center justify-between  gap-2 px-36'>
            <div><h2 className='text-sm'>All right @Turf!t 2024</h2></div>
            <div className='flex items-center justify-center gap-2 text-sm'>
                <h3>Privacy Policy</h3>
                <h3>Terms of use</h3>
            </div>
        </div>
    </motion.div>
  )
}

export default Footer