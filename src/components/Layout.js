import React from 'react';
import styled from 'styled-components';

import { devices, sizes } from 'Routes/GlobalStyles';

import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  height: 100vh;
  @media ${devices.breakpointsMobile} {
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
  & main {
    background-image: url('https://i.imgur.com/M8kOD68.png');
    max-width: ${sizes.desktop};
    margin: 0 auto;
    overflow: auto;
    @media ${devices.breakpointsMobile} {
      width: 100%;
      padding: 1rem;
      /* width: 90%; */
    }
    @media ${devices.breakpointsMobile} {
      padding: 2rem;
    }
  }
`;
