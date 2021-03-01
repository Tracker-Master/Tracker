import React from 'react';
// import { StyledLayout } from '../..//components/LayoutStyles';

import { StyledLayout } from '../styles/components/LayoutStyles';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      {location.pathname === `/` ? <Footer /> : ''}
    </StyledLayout>
  );
};

export default Layout;
