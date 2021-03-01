import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledNav,
} from '../styles/components/HeaderStyles';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledNav>
          <ul>
            <li>
              <img src="" alt="burger-menu" />
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

export default Header;