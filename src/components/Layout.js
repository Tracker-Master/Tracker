import React from 'react';
// import { StyledLayout } from '../..//components/LayoutStyles';

import { StyledLayout } from '../styles/components/LayoutStyles';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      {location.pathname === `/` ? (
        <StyledLayout>
          <Header />
          {children}
          <Footer />
        </StyledLayout>
      ) : (
        <StyledLayout withOutFooter>
          <Header />
          {children}
        </StyledLayout>
      )}
    </>
  );
};

export default Layout;
