import styled from 'styled-components';
import { palette, sizes, devices } from 'Styles/GlobalStyles';

export const StyledHome = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const Title = styled.h1`
  text-align: center;
  color: ${palette.firstColor};
  font-size: 1.5rem;
  & p {
    color: ${palette.secondColor};
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const About = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  text-align: center;
  font-size: 0.875rem;
  @media ${devices.breakpointsTablet} {
    max-width: ${sizes.tablet};
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const FormBoard = styled.form`
  display: grid;
  width: 100%;
  gap: 1rem 0;
  justify-items: end;
  max-width: ${sizes.mobile};
  & input {
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    border: 2px solid ${palette.firstColor};
    border-radius: 1rem;
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
    margin-right: 0.125rem;
    height: 2rem;
    width: 120px;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 0 2px 2px ${palette.secondColor};
    background-color: ${palette.secondColor};
    color: ${palette.whiteColor};
    font-weight: bold;
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
