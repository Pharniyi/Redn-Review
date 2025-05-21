import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';


const TopNav = () => {
const ActiveLink = ({ isActive }) =>
  isActive ? 'underline underline-offset-4' : 'text-gray-700 hover:text-gray-400';

  return (
    <>
        <div className='flex justify-center items-center py-3'>
            <img src = {logo} alt="Logo"/>
        </div>
        <div className='flex justify-center items-center gap-4 border-t border-b border-gray-700 py-4'>
            <NavLink to={'/'} className={ ActiveLink }>Create</NavLink>
            <NavLink to={'/preset'} className={ ActiveLink }>Presets</NavLink>
        </div>
    </>
  )
}

export default TopNav;