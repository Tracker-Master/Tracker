import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledHeader,
  HeaderContainer,
  Logo,
  Nav,
} from 'Styles/components/HeaderStyles';

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Nav>
          {/* We're going to use this button when we inplement the menu */}
          {/* <ul>
            <li>
              <img
                src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/menu-24px.svg"
                alt="burger-menu"
              />
            </li>
          </ul> */}
        </Nav>
        <Link to="/">
          <Logo>
            <img
              src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/tracker-logo.svg"
              alt="Logo"
            />
          </Logo>
        </Link>
      </HeaderContainer>
    </StyledHeader>
  );
};
