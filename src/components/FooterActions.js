import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooterActions } from 'Styles/components/FooterActionsStyles';

export const FooterActions = () => {
  return (
    <StyledFooterActions>
      <button>
        <picture>
          <img
            src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/icons/ico_save-24px.svg"
            alt="Logo"
          />
          <figcaption>Save</figcaption>
        </picture>
      </button>
      <Link to="/">
        <picture>
          <img
            src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/icons/ico_home-24px.svg"
            alt="Logo"
          />
          <figcaption>Home</figcaption>
        </picture>
      </Link>
      <button>
        <picture>
          <img
            src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/icons/ico_download-24px.svg"
            alt="Logo"
          />
          <figcaption>Save as Picture</figcaption>
        </picture>
      </button>
    </StyledFooterActions>
  );
};
