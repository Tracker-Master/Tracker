import styled from 'styled-components';
import { palette, sizes, devices } from 'Styles/GlobalStyles';

export const StyledHome = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  & .Logo {
    display: none;
  }
  & .arrow-top {
    display: none;
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
    display: block;
    & .Logo {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 21.75rem;
    }
    & .arrow-top {
      transform: rotate(180deg);
      display: block;
      position: relative;
      bottom: -0.5rem;
      left: 55rem;
      height: 1.5rem;
      opacity: 0.25;
      animation: up 2s infinite;
      @keyframes up {
        0% {
          opacity: 0.25;
          transform: rotate(180deg) translate(0px, -10px);
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 0;
          transform: rotate(180deg) translate(0px, 10px);
        }
      }
    }
  }
`;
export const Title = styled.h1`
  text-align: center;
  color: ${palette.firstColor};
  font-size: 1.375rem;
  & p {
    color: ${palette.secondColor};
  }
  @media ${devices.breakpointsTablet} {
    font-size: 1.875rem;
  }
  @media ${devices.breakpointsDesktop} {
    text-align: start;
    font-size: 2.5rem;
  }
`;
export const FormBoard = styled.form`
  display: grid;
  gap: 0.75rem 0;
  justify-items: end;
  & input {
    width: 17.5rem;
    height: 2rem;
    padding: 0 0.5rem;
    border: 2px solid ${palette.firstColor};
    border-radius: 1.25rem;
    outline: none;
    color: ${palette.firstColor};
    & ::placeholder {
      opacity: 0.5;
    }
    & :focus {
      font-weight: 600;
    }
  }
  & button {
    margin-right: 0.0625rem;
    height: 2rem;
    width: 7.5rem;
    border: none;
    border-radius: 1.25rem;
    background-color: ${palette.secondColor};
    color: ${palette.whiteColor};
    font-weight: bold;
    filter: drop-shadow(0 0.25rem 0.125rem ${palette.cardsBorderAlpha});
    outline: none;
  }
  @media ${devices.breakpointsTablet} {
    justify-content: center;
    gap: 1rem 0;
    & input {
      height: 2rem;
      width: 31.25rem;
      filter: drop-shadow(0 0.25rem 0.125rem ${palette.cardsBorderAlpha});
    }
    & button {
      height: 2.25rem;
    }
  }
  @media ${devices.breakpointsDesktop} {
    & input {
      height: 2.75rem;
      width: 40rem;
      padding: 0 1rem;
      & ::placeholder {
        font-size: 1.25rem;
      }
    }
    & button {
      height: 2.75rem;
      width: 15rem;
    }
  }
`;
