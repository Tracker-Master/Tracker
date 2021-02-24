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
export const StyledHeaderContainer = styled.div`
  display: inherit;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 0 5%;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
    max-width: ${sizes.desktop};
    padding: 0;
  }
`;
export const StyledLogo = styled.picture`
  display: flex;
  justify-content: flex-start;
  & a {
    height: inherit;
    & img {
      height: 100%;
    }
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  height: inherit;
  & ul {
    display: inherit;
    justify-content: flex-end;
    width: 100%;
    & li {
      list-style: none;
      cursor: pointer;
      & img {
        width: 2rem;
        height: inherit;
      }
    }
  }
  @media ${devices.breakpointsTablet} {
    & ul {
      width: 50%;
    }
  }
  @media ${devices.breakpointsDesktop} {
    & ul {
      width: 50%;
    }
  }
`;
