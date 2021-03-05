import styled from 'styled-components';

import { palette, devices, sizes } from 'Styles/GlobalStyles';

export const StyledCards = styled.div`
  display: flex;
  padding: 0.75rem 0 1.5rem 0;
  gap: 0 1.625rem;
  overflow-x: scroll;
  & ::-webkit-scrollbar {
    display: none;
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const Container = styled.div`
  position: relative;
  min-width: 5.75rem;
  height: 4.5625rem;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const CardLeft = styled.div`
  position: absolute;
  z-index: 1;
  width: 5rem;
  height: 3.75rem;
  border: thin solid ${palette.cardsBorder};
  border-radius: 0.25rem;
  opacity: 0.33;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const CardInner = styled.div`
  position: absolute;
  top: 0.375rem;
  left: 0.375rem;
  z-index: 2;
  border: thin solid ${palette.cardsBorder};
  border-radius: 0.25rem;
  width: 5rem;
  height: 3.75rem;
  opacity: 0.66;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const Card = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 3;
  width: 5rem;
  height: 3.75rem;
  max-height: 3.75rem;
  border: thin solid ${palette.cardsBorder};
  border-radius: 0.25rem;
  background-color: ${palette.whiteColor};
  display: grid;
  grid-template-rows: 1rem auto;
  & p {
    display: flex;
    align-items: center;
    overflow-x: auto;
    & ::-webkit-scrollbar {
      display: none;
    }
    & :first-child {
      padding: 0 0.25rem;
      font-size: 0.5rem;
      border-bottom: 1px solid ${palette.cardsBorder};
    }
    & :last-child {
      justify-content: center;
      font-size: 2rem;
      color: ${palette.secondColor};
    }
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
