import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavList, Nav, MenuButton } from './style';
import Logo from '../shared/Logo';
import { ToggleModeIcon, Container } from '../shared';
import MobileNavList from './MobileNavList.jsx';

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenuIsOpen = () => (menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true));

  return (
    <div
      className='navbar'
      style={{
        backgroundColor: 'var(--background-primary)',
        position: 'sticky',
        top: '0',
      }}
    >
      <Container>
        <Nav>
          <div className='nav nav--left'>
            <Logo ht='90' wt='90' />
          </div>
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
          <div className='nav nav--right'>
            <ToggleModeIcon />
            <div className='btn__container' onClick={toggleMenuIsOpen}>
              <MenuButton menuIsOpen={menuIsOpen}>
                <span className='menu_burger' />
              </MenuButton>
            </div>
          </div>
        </Nav>
      </Container>
      {menuIsOpen && <MobileNavList />}
    </div>
  );
};

export default NavBar;
