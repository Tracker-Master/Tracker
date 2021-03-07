import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { StyledLayout } from 'Styles/components/LayoutStyles';

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
