import styled from 'styled-components';
import { palette, devices, sizes} from 'Routes/GlobalStyles';

export const StyledHome = styled.section`
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
  @media ${devices.breakpointsTablet} {
    padding: 3rem;
    display: grid;
    grid-template-areas: "title title"
                         "sliders form";
    grid-template-columns: 1fr 1fr;
  }
`;

export const SliderContainer = styled.section`
  grid-area: sliders;
`

export const Title = styled.h1`
  display: inline-block;
  width: 100%;
  font-size: 21px;
  text-align: center;
  color: ${palette.firstColor};
  margin-bottom: 1rem;
  @media ${devices.breakpointsMobile} {
    font-size: 1.5rem;
  }
  @media ${devices.breakpointsTablet} {
    font-size: 2rem;
    grid-area: title;
  }
  & p {
    color: ${palette.secondColor};
  }
`;

export const Img = styled.img`
  outline: none;
  width: 300px;
  height: 200px;
`

export const About = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  max-width: ${sizes.tablet};
  text-align: center;
  font-size: 14px;
  & :focus {
    outline: none;
  }
  @media ${devices.breakpointsTablet} {
    font-size: 18px;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  gap: 1rem 0;
  justify-self: flex-end;
  justify-items: end;
  grid-area: form;
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
  font-size: 14px;

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

  @media ${devices.breakpointsTablet} {
    font-size: 18px;
    padding: 0-5rem;
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

  @media ${devices.breakpointsTablet} {
    font-size: 20px;
    width: 130px;
    /* padding: 1rem; */
  }

`;