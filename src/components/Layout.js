import React from 'react';
import { StyledLayout } from 'Styles/components/LayoutStyles';

import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  let Location = location.pathname;
  return (
    <>
      {Location === '/' ? (
        <StyledLayout rows="50px 1fr 50px">
          <Header />
          {children}
          <Footer />
        </StyledLayout>
      ) : (
        <StyledLayout rows="50px 1fr">
          <Header />
          {children}
        </StyledLayout>
      )}
    </>
  );
};
