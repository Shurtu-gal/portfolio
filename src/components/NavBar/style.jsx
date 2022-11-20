/* eslint-disable indent */
import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 1.5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav--right {
    display: flex;
    gap: 1em;
  }

  .nav--center {
    flex: 1;
    margin: 0;
  }

  @media (max-width: 850px) {
    .nav--center {
      display: none;
    }

    .hamburger--menu {
      display: block;
    }

    .nav--left {
      width: 50%;
    }
  }
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2em;
  font-size: 1.2em;

  .nav-link {
    text-decoration: none;
    color: var(--text-primary-color);
  }
`;

export const MenuButton = styled.button`
  position: relative;
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;

  .menu_burger {
    display: block;
    position: relative;
  }

  .menu_burger,
  .menu_burger::before,
  .menu_burger::after {
    height: 2px;
    width: 25px;
    background-color: var(--text-color-secondary);
    transition: all 400ms ease-in-out;
  }

  .menu_burger::before,
  .menu_burger::after {
    content: '';
    position: absolute;
    width: 15px;
  }

  .menu_burger {
    transform: ${({ menuIsOpen }) => (menuIsOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  .menu_burger::before {
    bottom: ${({ menuIsOpen }) => (menuIsOpen ? '250%' : '400%')};
    left: 0;
    transform: ${({ menuIsOpen }) =>
      menuIsOpen ? 'rotate(90deg) translate(0px, -275%)' : 'rotate(0deg)'};
  }

  .menu_burger::after {
    top: ${({ menuIsOpen }) => (menuIsOpen ? '250%' : '400%')};
    right: 0;
    transform: ${({ menuIsOpen }) =>
      menuIsOpen ? 'rotate(90deg) translate(0px, 250%)' : 'rotate(0deg)'};
  }

  @media (min-width: 680px){
    .menu_burger,
    .menu_burger::before,
    .menu_burger::after {
      height: 3px;
    }

    .menu_burger{
      width: 37.5px;
    }

    .menu_burger::before,
    .menu_burger::after {
      width: 22.5px;
    }

  @media (min-width: 850px){
    display: none;
  }
`;
