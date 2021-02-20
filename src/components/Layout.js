import React from 'react';
import styled from 'styled-components';

import { devices } from 'Routes/GlobalStyles';

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
    /* background-color: red; */
  }
  @media ${devices.breakpointsTablet} {
    /* background-color: blue; */
  }
  @media ${devices.breakpointsDesktop} {
    /* background-color: yellow; */
  }
`;
