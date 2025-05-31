import React from 'react'
import lucide_image from '../../assets/lucide_image.png';
import upload_states from '../../assets/upload_states.png';
import instagram_icon from '../../assets/instagram_icon.png';
import x_icon from '../../assets/x_icon.png';
const PresetsLayout = () => {
return (
    <>
        <div className='px-64 pb-22'>
            <div className="flex justify-between items-center my-5 border-b border-gray-700 py-1">
                <div>
                    <p className="text-xl font-bold">Presets</p>
                    <p className="text-gray-700"> Your presets form the information</p>
                </div>
                <div>
                    <button
                        className="bg-red-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-white rounded py-2 px-2 transition-opacity 
                    duration-300 ease-in-out hover:opacity-40"
                        disabled
                    >
                        Save changes
                    </button>
                </div>
            </div>

            <div className="border-1 rounded-xl border-gray-700 px-5 py-5">
                <div className="border-b border-gray-700 py-1">
                    <p className="text-lg font-bold">Brandlogo</p>
                    <p className="text-gray-700">Your presets form the information</p>
                </div>

                <div className="flex my-10">
                    <div
                        className="flex items-center justify-center bg-gray-900"
                        style={{
                            border: '8px solid transparent',
                            borderRadius: '8px',
                            padding: '24px 0',
                            width: '200px',
                            height: '250px',
                        }}
                    >
                        <img src={lucide_image} alt="" className="mx-auto" />
                    </div>

                    <div className="flex-col items-center justify-center ml-8">
                        <div
                            style={{
                                border: '4px dotted white',
                                borderRadius: '16px',
                                width: '550px',
                                height: '250px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent:'center',
                                background: 'transparent',
                                padding: '24px 0',
                                boxSizing: 'border-box'
                            }}
                            className="flex flex-col items-center "
                        >
                            <img src={upload_states} alt="" />
                            <div><span>Click to upload </span>or drag and drop</div>
                            <span>SVG, PNG, JPG or GIF (max. 800x400px)</span>

                            <div className="flex items-center my-6 w-full px-6" >
                                <div className="flex-grow border-t border-gray-700"></div>
                                <span className="mx-4 text-gray-500 font-semibold">OR</span>
                                <div className="flex-grow border-t border-gray-700"></div>
                            </div>

                            <div>
                                <button
                                    className="bg-red-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-white rounded py-2 px-2 transition-opacity 
                                duration-300 ease-in-out hover:opacity-40"
                                    disabled
                                >
                                    Browse Files
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-1 rounded-xl border-gray-700 px-5 py-5 my-5">
                <div className="border-b border-gray-700 py-1">
                    <p className="text-lg font-bold">Social accounts</p>
                    <p className="text-gray-700">These accounts will be available to share curated 
                        posts directly to  </p>
                </div>


                <div className='flex justify-between my-8'>
                   <span className='flex items-center gap-4'> <img src={instagram_icon} alt="" />Instagram</span>
                    <button className="bg-red-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-white rounded py-2 px-2 transition-opacity 
                        duration-300 ease-in-out hover:opacity-40"
                        disabled
                        >
                        Connect account
                    </button>
                </div>

                <div className='flex justify-between my-8'>
                   <span className='flex items-center gap-4'> <img src={x_icon} alt="" />X(Formerly Twitter)</span>
                    <button className="border-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-white rounded py-2 px-2 transition-opacity 
                        duration-300 ease-in-out hover:opacity-40"
                        disabled
                        >
                        Disconnect account
                    </button>
                </div>
            </div>
        </div>
    </>
)
}

export default PresetsLayout