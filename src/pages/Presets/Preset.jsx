import React from 'react'
import TopNav from '../../components/topNav'

const Preset = () => {
  return (
    <>
    <div className='flex justify-between items-center px-64 py-5 gap-1 border-b border-gray-700'>
      
      <div>
        <p className='text-xl font-bold'>Presets</p>
        <p className='text-gray-700'> Your presets form the information</p>
      </div>

      <div>
        <button className='bg-red-700 text-white rounded py-2 px-2 transition-opacity 
          duration-300 ease-in-out hover:opacity-40'>Save changes
        </button>
      </div>

      
    </div>
    <div>
      <p>Passcode</p>
      <p>Input the PIN to accessnthe presets</p>
    </div>

    </>
  )
}

export default Preset