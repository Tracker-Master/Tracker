import styled, { keyframes, css } from 'styled-components';
import { palette, devices, sizes } from 'Styles/GlobalStyles';

const modalIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
`;

const modalOut = keyframes`
  from {
    visibility: visible;
    opacity: 1;
  }
  to {
    visibility: hidden;
    opacity: 0;
  }
`;

const animationIn = css`
  animation: ${modalIn} 0.5s ease-in-out forwards;
`;

const animationOut = css`
  animation: ${modalOut} 0.5s ease-in-out forwards;
`;
export const ModalInit = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 110;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.modal &&
    css`
      ${animationIn}
    `}
  ${(props) =>
    !props.modal &&
    css`
      ${animationOut}
    `}
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const Content = styled.section`
  width: 280px;
  min-height: 160px;
  background-color: white;
  border-radius: 10px;
  transition: 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  @media ${devices.breakpointsTablet} {
    width: 600px;
  }
`;
export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  @media ${devices.breakpointsTablet} {
    width: 250px;
    height: 250px;
  }
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 16px;
  margin: 5px 0;
  transition: 0.5s ease-in-out;
  @media ${devices.breakpointsTablet} {
    font-size: 32px;
  }
  @media ${devices.breakpointsDesktop} {
    font-size: 48px;
  }
`;

export const Paragraphs = styled.p`
  max-width: 80%;
  font-size: 12px;
  text-align: center;
  transition: 0.5s ease-in-out;
  color: ${palette.secondTextColor};
  margin-bottom: 15px;
  @media ${devices.breakpointsTablet} {
    font-size: 18px; 
  }
`;

export const Ul = styled.ul`
  width: 60%;
`;

export const Li = styled.li`
  font-size: 12px;
  font-weight: 700;
  @media ${devices.breakpointsTablet} {
    font-size: 18px; 
  }
`;

export const Button = styled.button`
  margin: 10px 20px 10px 0;
  background-color: red;
  padding: 5px 20px;
  color: white;
  border-radius: 50px;
  outline: none;
  border: 0;
  place-self: flex-end;
  @media ${devices.breakpointsTablet} {
    font-size: 18px; 
  }
`;