import React from 'react'
import TopNav from "../../components/topNav";

const Create = () => {
  return (
    <>
        <div className='px-64 pb-12'>
            <div className='border-1 rounded-xl border-gray-700 px-5 py-5 my-10'>
                <div className="flex justify-between items-center">
                    <div className=" py-1">
                        <p className="text-lg font-bold">Curate a new social media post <br /> carousel instantly</p>
                        
                    </div>

                    <div>
                        <button
                        className="bg-red-700 cursor-pointer text-white rounded py-2 px-2 transition-opacity 
                        duration-300 ease-in-out hover:opacity-40"
                        disabled
                        >
                            Create new
                        </button>
                    </div>
                
                </div>
                <div className='text-gray-700 py-2'>Red n Review helps you
                     create stunning carousel social media posts for movie reviews.
                </div>
            </div> 

            <div className='text-gray-400 text-xl'>Recents</div>

            <div className='flex flex-col justify-center items-center border-1 rounded-xl border-gray-700 py-30 my-8'>
                <span className='text-xl font-bold'>You have no posts yet.</span>
                <span className='text-gray-500 my-1'>Start by creating your first carousel post.</span>
                <button className='border-1 border-gray-700  cursor-pointer text-white rounded py-2 px-2 my-8 hover:opacity-45'>
                Create post
                </button>
            </div>
        </div>
    </>
  )
}

export default Create