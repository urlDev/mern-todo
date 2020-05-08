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
  ul {
    width: 200px;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
`;
