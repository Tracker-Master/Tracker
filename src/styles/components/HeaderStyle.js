import styled from 'styled-components';

import { palette, devices, sizes } from 'Routes/GlobalStyles';

import { Link } from 'react-router-dom';



export const Head = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  background-color: ${palette.firstColor};
  color: ${palette.whiteColor};
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
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

export const NavButton = styled.button`
  width: 38px;
  height: 38px;
  background-color: transparent;
  outline: none;
  border: 1px solid ${palette.whiteColor};
  border-radius: 5px;
  color: white;
  padding: 2px;
  transition: 0.3s ease-in-out;

  & :hover, :focus {
    background-color: ${palette.whiteColorAlpha};
    transition: 0.3s ease-in-out;
  }
`;