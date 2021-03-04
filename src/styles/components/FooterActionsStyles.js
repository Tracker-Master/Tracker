import styled from 'styled-components';

import { palette, devices, sizes } from 'Styles/GlobalStyles';

export const StyledFooterActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.25rem;
  gap: 0 2rem;
  & button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  & picture {
    display: grid;
    grid-template-rows: 1fr 1fr;
    & img {
      place-self: center;
      height: 1.5rem;
      width: 1.5rem;
      filter: drop-shadow(0 0 0.0625rem ${palette.firstColor});
    }
    & figcaption {
      max-width: 2.625rem;
      line-height: 0.75rem;
      max-height: 1.625rem;
      font-size: 0.625rem;
      overflow-y: auto;
      color: ${palette.secondTextColor};
      & ::-webkit-scrollbar {
        display: none;
      }
    }
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
    height: 5.25rem;
  }
`;
