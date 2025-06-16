import React from 'react'
import { GoStarFill } from "react-icons/go";
import { IoWifi } from "react-icons/io5";
import { CiMedicalCase } from "react-icons/ci";
import { CiParking1 } from "react-icons/ci";
import { CgMusicSpeaker } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";

const TurfBox = ({title}) => {
    return (
        <div className='flex items-center transition ease-in-out delay-100  hover:-translate-y-2  duration-200 :hover cursor-pointer '>
            <div className='relative flex h-96 w-96 flex-col rounded-2xl overflow-hidden border-gray-300/200  border-[1px] ' >
                <div className='relative  h-[50%] '>
                <FaRegHeart  className='absolute p-2 text-3xl font-extrabold rounded-full bg-white right-0 m-3'  />
                    <img src="https://images.unsplash.com/photo-1527600144894-bab91eebde7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='relative bg-white h-[50%] flex flex-col justify-between p-5'>
                    <span className='font-bold'>$50<span className='font-light'>/h</span></span>
                    <div className='flex justify-between items-center'>
                        <h4 className='font-medium'>{title}</h4>
                        <div className='flex justify-between items-center gap-1'>
                            <GoStarFill className='fill-green-600' />
                            <span>4.5(10)</span>
                        </div>
                    </div>
                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, qui!.....</p>
                    <div className='flex justify-start items-center gap-5 '>
                        <IoWifi className='bg-gray-200 rounded-full p-1 text-2xl' />
                        <CiMedicalCase className='bg-gray-200 rounded-full p-1 text-2xl' />
                        <CiParking1 className='bg-gray-200 rounded-full p-1 text-2xl' />
                        <CgMusicSpeaker className='bg-gray-200 rounded-full p-1 text-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TurfBox