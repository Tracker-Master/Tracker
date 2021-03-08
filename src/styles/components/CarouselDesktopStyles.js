import styled from 'styled-components';
import { palette, sizes, devices } from 'Styles/GlobalStyles';

export const StyledCarouselDesktop = styled.div`
  display: none;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
    display: grid;
    grid-template: repeat(4, auto) / 1fr;
    gap: 0.625rem 0;
    & div {
      display: inherit;
      grid-template: minmax(40vh, auto) / 1fr 1fr;
      align-items: center;
      justify-items: center;
      & :first-of-type {
        height: 54vh;
        & div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 0.75rem 0;
          & button {
            margin-right: 0.0625rem;
            height: 2.5rem;
            width: 12.5rem;
            border: none;
            border-radius: 0.5rem;
            background-color: ${palette.secondColor};
            color: ${palette.whiteColor};
            font-weight: bold;
            filter: drop-shadow(0 0.25rem 0.125rem ${palette.cardsBorderAlpha});
            outline: none;
            cursor: pointer;
          }
        }
        & img {
          transform: rotate(-15deg);
        }
      }
      & :nth-of-type(2) {
        & img {
          transform: rotate(15deg);
        }
      }
      & :last-of-type {
        & img {
          transform: rotate(-15deg);
        }
      }
    }
    & p {
      width: 95%;
      font-size: 1.25rem;
    }
    & picture {
      & img {
        height: 16.25rem;
      }
    }
    & .arrow-down {
      width: 50%;
      margin: 0 auto;
      height: 1.5rem;
      opacity: 0.25;
      animation: down 2s infinite;
      @keyframes down {
        0% {
          opacity: 0.25;
          transform: translate(0px, -10px);
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 0;
          transform: translate(0px, 10px);
        }
      }
    }
  }
`;
