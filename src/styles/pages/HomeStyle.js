import styled, { css }from 'styled-components';
import { palette, sizes, devices } from 'Routes/GlobalStyles';

export const StyledHome = styled.section`
  /* place-self: center; */
  /* justify-self: center; */
  align-self: center;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  overflow-y: none;
  @media ${devices.breakpointsMobile} {
    width: 100%;
    max-height: 550px;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  width: 100%;
  font-size: 21px;
  text-align: center;
  color: ${palette.firstColor};
  @media ${devices.breakpointsMobile} {
    font-size: 1.5rem;
  }
  & p {
    color: ${palette.secondColor};
  }
`;

export const Img = styled.img`
  outline: none;
  width: 300px;
`

export const About = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  max-width: ${sizes.tablet};
  text-align: center;
  font-size: 12px;
  & :focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  gap: 1rem 0;
  justify-items: end;
  max-width: ${sizes.mobile};
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  border: 2px solid ${palette.secondTextColor};
  border-radius: 1rem;
  outline: none;
  text-align: center;
  font-weight: 600;
  color: ${palette.firstColor};
  transition: 0.5s ease-in-out;

  & :focus {
    transition: 0.5s ease-in-out;
    border: 2px solid ${palette.firstColor};

    ::placeholder{
      transition: 0.5s ease-in-out;
      color: ${palette.firstColor};
      opacity: 0.4;
    }
  }

  ::placeholder {
    transition: 0.5s ease-in-out;
    color: ${palette.firstTextColor};
    opacity: 0.4;
  }
`;

export const Button = styled.button`
  height: 2rem;
  width: 120px;
  border: none;
  border-radius: 1rem;
  outline: none;
  box-shadow: 0 0 2px 2px ${palette.secondColor};
  background-color: ${palette.secondColor};
  color: ${palette.whiteColor};
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;

  & :active, :focus {
    transition: 0.5s ease-in-out;
    transform: scale(0.95);
  }

`;