import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import { StyledLayout } from 'Styles/components/LayoutStyle';

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};

