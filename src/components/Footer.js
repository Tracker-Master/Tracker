import React from 'react';
import { Link } from 'react-router-dom';

import { StyledFooter } from 'Styles/components/FooterStyle';

export const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/">
        <small>
          Tu tablero de Trello necesita contar sólo con tres listas: <br />
          <em>
            <strong>To Do, Doing, Done</strong>
          </em>
        </small>
      </Link>
    </StyledFooter>
  );
};

