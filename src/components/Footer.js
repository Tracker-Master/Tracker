import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { palette, sizes, devices } from 'Routes/GlobalStyles';

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
  & small {
    color: ${palette.secondTextColor};
  }
  @media ${devices.breakpointsMobile} {
    /* opacity: 0; */
  }
  @media ${devices.breakpointsTablet} {
    /* background-color: blue; */
  }
  @media ${devices.breakpointsDesktop} {
    background: ${palette.firstColor};
    & small {
      color: ${palette.whiteColor};
    }
  }
`;
