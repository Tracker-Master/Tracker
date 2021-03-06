import styled from 'styled-components';
import { palette, sizes, devices } from 'Styles/GlobalStyles';

export const StyledInfo = styled.main`
  & hr {
    border-top: thin solid ${palette.dividerColor};
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const Title = styled.h1`
  max-height: 1.3125rem;
  font-size: 1rem;
  font-weight: normal;
  color: ${palette.firstColor};
  overflow-x: auto;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const SubTitle = styled.h2`
  padding: 0.75rem 0;
  font-size: 1rem;
  font-weight: normal;
  color: ${palette.firstColor};
  overflow-x: auto;
  & .stronger {
    color: ${palette.secondColor};
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  padding: 0.75rem 0 1.5rem 0;
  gap: 0 1.375rem;
  overflow-x: scroll;
  & ::-webkit-scrollbar {
    display: none;
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const Card = styled.div`
  display: block;
  width: 5.75rem;
  height: 4.625rem;
  padding: 0.75rem 0 0 0.75rem;
  background-image: url('https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/card-container.svg');

  & p:first-child {
    height: 1rem;
    min-width: 100%;
    padding: 0 0 0 0.25rem;
    font-size: 0.625rem;
    overflow-x: auto;
    width: 5rem;
  }
  & p:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 1rem);
    min-width: 100%;
    font-size: 2rem;
    overflow-x: auto;
    color: ${palette.secondColor};
  }

  /* } */
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
