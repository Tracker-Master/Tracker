import styled from 'styled-components';
import { palette, devices, sizes } from 'Styles/GlobalStyles';

export const StyledProgress = styled.div`
  margin: 0.5rem auto;
  & progress {
    width: 100%;
    height: 1.125rem;
    border: 1px solid ${palette.firstColorAlpha};
    border-radius: 1.875rem;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    overflow: hidden;
    ::-webkit-progress-bar {
      background-color: transparent;
    }
    ::-webkit-progress-value {
      background: linear-gradient(
        to right,
        ${palette.degradedPurple},
        ${palette.degradedBlue}
      );
    }
  }
  & p {
    padding: 1rem 3.75rem 0.25rem;
    font-size: 1.125rem;
    font-weight: bold;
    text-align: right;
    color: ${palette.secondColor};
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
