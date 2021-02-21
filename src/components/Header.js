import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { palette, devices, sizes } from 'Routes/GlobalStyles';

import Icon from 'Assets/ic_menu.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledLogo>
          <Link to="/">
            <img src="https://i.imgur.com/TA9nhUj.png" alt="Logo" />
          </Link>
        </StyledLogo>

        <StyledNav>
          <ul>
            <li>
              <img src={Icon} alt="" />
            </li>
          </ul>
        </StyledNav>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export const StyledHeader = styled.div`
  display: inherit;
  background-color: ${palette.firstColor};
  color: ${palette.whiteColor};
`;
export const StyledHeaderContainer = styled.div`
  display: inherit;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 0 5%;
  max-width: ${sizes.desktop};
  @media ${devices.breakpointsDesktop} {
    padding: 0;
  }
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
    justify-content: flex-end;

    @media ${devices.breakpointsTablet} {
      width: 50%;
    }
    @media ${devices.breakpointsDesktop} {
      width: 50%;
    }
    & li {
      list-style: none;
      cursor: pointer;
      img {
        width: 2rem;
        height: inherit;
      }
    }
  }
`;
