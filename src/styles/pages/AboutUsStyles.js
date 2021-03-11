import styled from 'styled-components';
import { palette, sizes, devices } from 'Styles/GlobalStyles';

import { StyledFooterActions } from 'Styles/components/FooterActionsStyles';

export const StyledAboutUs = styled.main`
  display: grid;
  grid-template: calc(100% - 3.5rem) 3.5rem/1fr;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const DevsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 1rem 0;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const DevsCards = styled.div`
  display: grid;
  grid-template: auto auto auto/84px auto;
  grid-template-areas:
    'imgDev name'
    'imgDev job'
    'imgDev links';
  place-self: center;
  height: 5.25rem;
  width: 100%;
  color: ${palette.secondTextColor};
  border-radius: 0.5rem;
  background: url(https://i.imgur.com/R6Q1K5v.png) no-repeat center right;
  background-color: ${palette.whiteColor};
  background-size: cover;
  box-shadow: 0 0.25rem 1rem 0.125px ${palette.cardsBorderAlpha};
  & h1 {
    grid-area: name;
    font-size: 1rem;
    line-height: 2rem;
  }
  & p {
    grid-area: job;
    font-size: 0.75rem;
    margin-top: -1rem;
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const ImageContainer = styled.div`
  grid-area: imgDev;
  display: inherit;
  max-width: 5.25rem;
  justify-content: center;
  align-content: center;
  & picture {
    & img {
      position: relative;
      top: 0.5rem;
      left: 12.5%;
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      filter: drop-shadow(0 0.1875rem 0.125rem ${palette.firstColorAlpha});
      & :last-of-type {
        position: relative;
        z-index: 2;
        left: 65%;
        top: -1rem;
        height: 1.5rem;
        width: 1.5rem;
        border: none;
      }
    }
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 1.5rem;
  padding: 0 5% 15%;
  gap: 0 1rem;
  & a {
    cursor: pointer;
    & img {
      filter: invert(75%) sepia(50%) hue-rotate(215deg)
        drop-shadow(0 0.0625rem 0.0625rem ${palette.firstDarkerColor});
      & :hover {
        filter: invert(75%) sepia(50%) hue-rotate(215deg)
          drop-shadow(0 0 0.125rem ${palette.firstDarkerColor});
      }
    }
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;

export const FooterActions = styled(StyledFooterActions)`
  height: 3.5rem;
  padding-top: 11.5%;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
