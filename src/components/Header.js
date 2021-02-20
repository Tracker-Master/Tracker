import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { palette, sizes, devices } from 'Routes/GlobalStyles';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <Link to="/">Logo</Link>
      </StyledLogo>
      <StyledNav>
        <ul>
          <li>hola </li>
          <li>como</li>
          <li>estas</li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

export const StyledHeader = styled.div`
  display: inherit;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 5%;
  background-color: ${palette.firstColor};
  color: ${palette.whiteColor};
`;
export const StyledLogo = styled.picture`
  display: flex;
  justify-content: flex-start;
`;
export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  & ul {
    display: inherit;
    width: 100%;
    justify-content: space-around;
    @media ${devices.breakpointsTablet} {
      width: 50%;
    }
    @media ${devices.breakpointsDesktop} {
      width: 50%;
    }
  }
  & li {
    list-style: none;
  }
`;
