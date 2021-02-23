import styled from 'styled-components';

import { devices, sizes } from 'Routes/GlobalStyles';
export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 50px;
  height: 100vh;
  @media ${devices.breakpointsMobile} {
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
  & div:nth-of-type(2) {
    background-image: url('https://i.imgur.com/M8kOD68.png');
    max-width: ${sizes.desktop};
    margin: 0 auto;
  }
`;
