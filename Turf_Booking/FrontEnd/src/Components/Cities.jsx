import React, { useEffect, useRef } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import player from '../assets/logo/player.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Cities = () => {

    const City = ['Bhopal','Indore','Pune','Hyderabad','Mumbai','Chennai','Delhi'];

  // gsap

  const windmillRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: windmillRef.current,
        scrub: 1,
        pin: true,
        start: "-20% 50%",
        endTrigger: wrapperRef.current,
        end: "220% 50%",
        // markers:true,
      },
    });

    tl.to(windmillRef.current, {
        rotateZ: 900,
        motionPath: {
          path: [
            { x: 0, y: 0 },              // Starting point
            { x: 1000, y: -300 },        // Kick upwards and to the left
            { x: 500, y: -500 },         // Peak of the curve (top right)
            { x: 1200, y: 100 },          // Ball curves downward (like falling from the kick)
            { x: 0, y: 0 },              // Return to original position (you can adjust this as needed)
          ],
          curviness: 5,                 // Higher curviness for a large arc
          autoRotate: true,             // Keep the ball rotating along the path
        },
        scale: 0.2,                     // Scale down the ball as it moves
        duration: 5,                    // Adjust the duration for a slower kick motion
        ease: "power2.out",          
    });

    // Cleanup function to remove ScrollTrigger when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  return (
    <>
    <div className=' h-[60vh] w-full flex items-center justify-center'>
        <div className='h-full w-[90vw]  border-t-2 border-b-2 border-slate-300 flex flex-col items-start justify-start gap-4 p-4 relative'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-2xl text-slate-600 font-bold'>Cities we operate in</h2>
                <h3 className='flex items-center gap-2'>See More <IoIosArrowForward/></h3>
            </div>
            <div className=' flex my-20'>
                <div className=' w-[60vw] flex flex-wrap gap-10 '>
                    {/* <div className='border-2 border-slate-800  px-10 py-4 rounded-lg  flex items-center justify-start gap-4 text-lg'>
                        <h1>Bhopal</h1>
                        <IoIosArrowForward />
                    </div> */}
                    {
                        City.map((CityName,index)=>(
                            <div
                            key={index}
                            className='border-2 border-slate-800 px-10 py-4 rounded-lg flex items-center justify-start gap-4 text-lg transition-all duration-300 hover:bg-slate-800 hover:scale-110 hover:text-white hover:border-slate-600'
                          >
                            <h1>{CityName}</h1>
                            <IoIosArrowForward />
                          </div>
                        ))
                    }
                     
                </div>
               
                <img src={player} alt="React Image" className='z-50 absolute left-[70vw] top-[5vh]' style={{ width: '400px', height: '400px' }} />
                <div className='h-full w-[30vw]'>
                    <div id="pin-windmill-wrap" ref={wrapperRef}  className='h-12 w-full -mt-14 ml-10'>

                        <div id="pin-windmill-svg" ref={windmillRef} style={{ width: '250px', height: '250px' }} >
                            <img src="https://www.svgrepo.com/show/77510/football.svg" alt="React Image"  style={{ width: '250px', height: '250px' }} />
                        </div>
                            
                    </div>
                    </div>
               </div>
        </div>
    </div>
    </>
  )
}

export default Cities