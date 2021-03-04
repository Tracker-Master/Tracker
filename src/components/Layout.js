import React from 'react';
import { StyledLayout } from 'Styles/components/LayoutStyles';

import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
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
