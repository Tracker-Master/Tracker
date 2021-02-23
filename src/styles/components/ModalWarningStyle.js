  
import styled, { keyframes, css } from 'styled-components';
import { palette } from 'Routes/GlobalStyles';

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

export const Modal = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 110;
  display: flex;
  justify-content: center;
  align-items: center;

  ${ props => props.modal && css`
      ${animationIn}
  `}

  ${ props => !props.modal && css`
      ${animationOut}
  `}

`;

export const Content = styled.section`
  width: 280px;
  height: 160px;
  background-color: white;
  border-radius: 10px;
  transition: 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all .5s;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 16px;
  margin: 5px 0;
  transition: 0.5s ease-in-out;
`;

export const Paragraphs = styled.p`
  max-width: 164px;
  font-size: 12px;
  text-align: center;
  transition: 0.5s ease-in-out;
  color: ${palette.secondTextColor};
`;

