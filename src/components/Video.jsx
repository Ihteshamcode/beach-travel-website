import React from 'react'
import video from "../assets/vid.mp4";
import {AiOutlineSearch} from "react-icons/ai"

const Video = () => {
  return (
    <div>
           <div className='w-full h-screen relative'>
       <video  className='w-full h-full object-cover' src={video} autoPlay loop muted/>
    </div>
    <div className='absolute w-full h-full top-0 text-white flex flex-col text-center py-4 justify-center'>
        <h1 className='text-3xl font-extrabold'>First class Travel</h1>
        <p className='py-4 text-3xl font-extrabold'>Top Location Worldwide</p>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border rounded-md text-black bg-slate-100/80 p-1'>
            <input className='bg-transparent w-[300px] sm:w[400px] focus:outline-none h-8'  type="text" placeholder='Enter Destination' />
            <button>
                <AiOutlineSearch  size={20}/>
            </button>
        </form>
    </div>
     </div>
  )
}

export default Video