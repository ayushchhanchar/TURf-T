import React from 'react'
import football from '../assets/logo/football.png'
import cricket from '../assets/logo/cricket.png'
import badminton from '../assets/logo/badminton.png'
import basketball from '../assets/logo/basketball.png'
import { LiaShareSolid } from "react-icons/lia";
const TurfCategory = () => {
    return (
        <>
        
            <div className=' h-48 w-80 bg-white flex justify-center items-center border-gray-300/200 border-[1px]  rounded-xl overflow-hidden' >
                <div className='w-[60%] h-full bg-green-400 rounded-r-[100px] flex flex-col items-center justify-center'>
                    <img className='h-[100px]' src={football} alt="" />
                    <span className='text-white text-lg font-semibold mt-4'>Football</span>
                </div>
                <div className='w-[40%] h-full flex justify-end items-end p-10  '>
                    <LiaShareSolid className='fill-green-400 text-2xl :hover cursor-pointer' />
                </div>
            </div>
            <div className=' h-48 w-80 bg-white flex justify-center items-center border-gray-300/200 border-[1px]  rounded-xl overflow-hidden ' >
                <div className='w-[60%] h-full bg-green-400 rounded-r-[100px] flex flex-col items-center justify-center'>
                    <img className='h-[100px]' src={cricket} alt="" />
                    <span className='text-white text-lg font-semibold mt-4'>Cricket</span>
                </div>
                <div className='w-[40%] h-full flex justify-end items-end p-10  '>
                    <LiaShareSolid className='fill-green-400 text-2xl :hover cursor-pointer' />
                </div>
            </div>
            <div className=' h-48 w-80 bg-white flex justify-center items-center border-gray-300/200 border-[1px]  rounded-xl overflow-hidden ' >
                <div className='w-[60%] h-full bg-green-400 rounded-r-[100px] flex flex-col items-center justify-center'>
                    <img className='h-[100px]' src={badminton} alt="" />
                    <span className='text-white text-lg font-semibold mt-4'>Badminton</span>
                </div>
                <div className='w-[40%] h-full flex justify-end items-end p-10  '>
                    <LiaShareSolid className='fill-green-400 text-2xl :hover cursor-pointer' />
                </div>
            </div>
            <div className=' h-48 w-80 bg-white flex justify-center items-center border-gray-300/200 border-[1px]  rounded-xl overflow-hidden ' >
                <div className='w-[60%] h-full bg-green-400 rounded-r-[100px] flex flex-col items-center justify-center'>
                    <img className='h-[100px]' src={basketball} alt="" />
                    <span className='text-white text-lg font-semibold mt-4'>BasketBall</span>
                </div>
                <div className='w-[40%] h-full flex justify-end items-end p-10  '>
                    <LiaShareSolid className='fill-green-400 text-2xl :hover cursor-pointer' />
                </div>
            </div>

            </>
    )
}

export default TurfCategory