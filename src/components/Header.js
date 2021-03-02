import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledNav,
} from 'Styles/components/HeaderStyles';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledNav>
          <ul>
            <li>
              <img
                src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/menu-24px.svg"
                alt="burger-menu"
              />
            </li>
          </ul>
        </StyledNav>
        <Link to="/">
          <StyledLogo>
            <img
              src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/tracker-logo.svg"
              alt="Logo"
            />
          </StyledLogo>
        </Link>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
