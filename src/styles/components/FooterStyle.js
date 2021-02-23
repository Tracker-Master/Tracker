import styled from 'styled-components';
import { palette, devices } from 'Routes/GlobalStyles';

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.9rem;
  
  & small {
    color: ${palette.secondTextColor};
    display: inline-block;
    margin-bottom: 10px;
  }

  & em {
    display: inline-block;
    margin-top: 5px;
  }

  @media ${devices.breakpointsDesktop} {
    background: ${palette.firstColor};
    & a {
      & small {
        color: ${palette.whiteColor};
      }
    }
  }
`;