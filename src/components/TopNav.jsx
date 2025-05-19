import React from 'react';
import logo from '../assets/logo.png';

const TopNav = () => {
  return (
    <>
        <div className='flex justify-center items-center py-3'>
            <img src = {logo} alt="Logo"/>
        </div>
        <div className='flex justify-center items-center gap-4 border-t border-b border-gray-700 py-4'>
            <span className='underline'>Create</span>
            <span className='text-gray-700'>Presets</span>
        </div>
    </>
  )
}

export default TopNav;