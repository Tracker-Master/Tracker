import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { palette, devices } from 'Routes/GlobalStyles';

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
export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.9rem;
  @media ${devices.breakpointsDesktop} {
    background: ${palette.firstColor};
    & a {
      & small {
        color: ${palette.whiteColor};
      }
    }
  }
  & small {
    color: ${palette.secondTextColor};
  }
`;
