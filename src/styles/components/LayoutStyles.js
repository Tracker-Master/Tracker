import styled from 'styled-components';
import { palette, devices, sizes } from 'Styles/GlobalStyles';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.rows};
  height: 100vh;
  & main {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    background-image: url('https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/background/home-desktop-1.svg');
    overflow-y: auto;
    & ::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${devices.breakpointsTablet} {
    & main {
      padding: 2rem;
    }
  }
  @media ${devices.breakpointsDesktop} {
    & main {
      padding: 4rem 4rem 2rem;
      max-width: ${sizes.desktop};
    }
  }
`;
