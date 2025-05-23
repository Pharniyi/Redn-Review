import React from 'react'
import TopNav from '../components/topNav';
// import Intro from '../pages/Intro/Intro';
import { Outlet } from 'react-router-dom';



const MainLayout = () => {
  return (
    <div className='text-white'>
        <TopNav />
        <Outlet />
        {/* <Intro />         */}
    </div>
  )
}

export default MainLayout