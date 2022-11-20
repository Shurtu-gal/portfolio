import React from 'react';
import { NavList } from './style';
import { NavLink } from 'react-router-dom';

const MobileNavList = () => {
  return (
    <NavList className='nav nav--center'>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/'>
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/about'>
          About
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/projects'>
          Projects
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/blog'>
          Blogs
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/contact'>
          Contact Me
        </NavLink>
      </li>
    </NavList>
  );
};

export default MobileNavList;
