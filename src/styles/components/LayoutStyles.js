import styled from 'styled-components';
import { palette, devices, sizes } from 'Styles/GlobalStyles';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  height: 100vh;
  & main {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    overflow-x: auto;
  }
  @media ${devices.breakpointsTablet} {
    & main {
      padding: 2rem;
    }
  }
  @media ${devices.breakpointsDesktop} {
    & main {
      max-width: ${sizes.desktop};
    }
  }
`;
