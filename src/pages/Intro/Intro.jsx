import React from 'react'
import leftBackground from '../../assets/leftBackground.png';
import rightBackground from '../../assets/rightBackground.png';

const Intro = () => {
  return (
    <div className='flex justify-between'>
        <span>
        <img src={leftBackground} alt="" />
        </span>
        <div className='place-items-center h-full justify-center p-35' >
        <div className='font-power text-xl'>Hi 👋</div> 
        <div className='font-jakarta text-4xl p-3'>Welcome to Redn Review</div> 
        <div className='p-1 text-gray-500'>Start by updating your presets.</div>
        <div className='p-7'>
            <button className='bg-red-700 text-white rounded py-2 px-2'>
            Update my presets
            </button>
        </div>
        </div>
        <span> 
        <img src={rightBackground} alt="" />
        </span> 
    </div>
)
}

export default Intro