import styled from 'styled-components';
// import { palette, devices, sizes } from 'Styles/GlobalStyles';
import { palette, devices, sizes } from '../GlobalStyles';


export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.9rem;
  & small {
    color: ${palette.secondTextColor};
  }
  @media ${devices.breakpointsTablet} {
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
