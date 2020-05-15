import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    font-weight: bold;
    color: #047581;
    border-bottom: 2px solid #047581;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 50px 100px 50px 0;
  width: 100%;
  position: absolute;
  z-index: 1;
  a,
  button {
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    margin: 0 0 0 75px;
    padding: 0;
    color: #551a8b;
    :focus,
    :active {
      outline: none;
    }
    transition: color 0.5s ease-in;
    :hover {
      color: #047581;
    }

    @media (max-width: 550px) {
      margin: auto;
      font-size: 15px;
    }
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    padding: 50px 0;
  }
`;
