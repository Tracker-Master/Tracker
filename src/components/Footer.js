import React from 'react';
import { StyledFooter } from 'Styles/components/FooterStyles';

const Footer = () => {
  return (
    <StyledFooter>
      <small>
        Your Trello board needs only three lists: <br />
        <em>
          <strong>To Do</strong>, <strong>Doing</strong>,{' '}
          <strong>Done</strong>
        </em>
      </small>
    </StyledFooter>
  );
};

export default Footer;
