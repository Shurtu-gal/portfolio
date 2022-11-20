import styled, { keyframes } from 'styled-components';

const fadeDown = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: .3;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const NavList = styled.ul`
  position: absolute;
  width: 100%;
  background-color: var(--background-primary);
  height: 50vh;
  display: flex;
  padding: 12px 34px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  list-style: none;
  animation: ${fadeDown} 1s cubic-bezier(0.16, 1, 0.3, 1);
  flex: 1;

  .nav-link {
    text-decoration: none;
    color: var(--text-primary-color);
  }

  .nav-item {
    padding: 16px;
    border-bottom: 0.4px solid rgba(163, 163, 163, 1);
  }

  *:last-child {
    border: none;
  }

  @media (min-width: 850px) {
    display: none;
  }
`;
