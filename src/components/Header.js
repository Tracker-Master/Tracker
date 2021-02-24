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
        <StyledLogo>
          <Link to="/">
            <img
              src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/tracker-logo.svg"
              alt="Logo"
            />
          </Link>
        </StyledLogo>
        <StyledNav>
          <ul>
            <li>
              <img src="" alt="burger-menu" />
            </li>
          </ul>
        </StyledNav>
        <StyledLogo />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
