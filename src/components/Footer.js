import React from 'react';
import { Link } from 'react-router-dom';

import { StyledFooter } from 'Styles/components/FooterStyles';

export const Footer = () => {
  return (
    <StyledFooter>
      <Link to="">
        <small>
          Your Trello board needs only three lists: <br />
          <em>
            <strong>To Do</strong>, <strong>Doing</strong>,{' '}
            <strong>Done</strong>
          </em>
        </small>
      </Link>
    </StyledFooter>
  );
};
