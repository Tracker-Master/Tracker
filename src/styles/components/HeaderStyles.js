import styled from 'styled-components';
import { palette, devices, sizes } from 'Styles/GlobalStyles';

export const StyledHeader = styled.div`
  display: inherit;
  background-color: ${palette.firstColor};
  color: ${palette.whiteColor};
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const HeaderContainer = styled.div`
  display: inherit;
  grid-template: 1fr/1fr 1fr;
  grid-template-areas: 'menu logo';
  align-items: center;
  margin: 0 auto;
  padding: 0 5%;
  width: 100%;
  height: inherit;
  @media ${devices.breakpointsTablet} {
    grid-template-areas: 'logo menu';
  }
  @media ${devices.breakpointsDesktop} {
    max-width: ${sizes.desktop};
    padding: 0 1.5%;
  }
`;
export const Logo = styled.picture`
  grid-area: logo;
  display: flex;
  justify-content: flex-end;
  height: 50px;
  @media ${devices.breakpointsTablet} {
    justify-content: flex-start;
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const Nav = styled.nav`
  grid-area: menu;
  display: flex;
  justify-content: flex-start;
  height: inherit;
  & ul {
    display: inherit;
    /* justify-content: flex-end; */
    width: 100%;
    & li {
      list-style: none;
      cursor: pointer;
      & img {
        width: 2rem;
        height: inherit;
        filter: invert(1);
      }
    }
  }
  @media ${devices.breakpointsTablet} {
    justify-content: flex-end;
    & ul {
      justify-content: flex-end;
      width: 50%;
    }
  }
  @media ${devices.breakpointsDesktop} {
    & ul {
      width: 50%;
    }
  }
`;
