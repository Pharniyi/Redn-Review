import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const CustomNavLink = ({to, label, activePaths = [] }) => {
  const useLocation = useLocation();
  const isActive = activePaths.some((path) => location.pathname.starts(path));
  return (
    
    <NavLink
        to={to}
        className={`text-gray-700 hover:text-gray-400 ${isActive ? 'underline underline-offset-4' : ''}`}>
            {label}
    </NavLink>
  )
  
}

export default CustomNavLink;