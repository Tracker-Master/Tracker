import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  ModalInit,
  Content,
  Image,
  Title,
  Paragraphs,
  Ul,
  Li,
  Button
} from 'Styles/components/ModalStyles';

export const Modal = ({ modal, onClose, type }) => {
  const [change, setChange] = useState(modal);

  useEffect(() => {
    if (type !== 'error') {
      
      const clear = setTimeout(() => {
        setChange(!change);
        onClose();
      }, 3000);
      
      return () => clearTimeout(clear);
    }
  }, []);

  const handleClick = () => {
    setChange(!change);
    onClose();
  }

  return ReactDOM.createPortal(
    <>
      <ModalInit modal={change}>
        <Content>
          {
            type === 'message' && 
              <>
                <Image src='https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/modal_cry.svg' />
                <Title>Uups...</Title>
                <Paragraphs>El ID que nos proporcionaste no es valido</Paragraphs>
              </>
              
          }
          {
            type === 'warning' && 
              <>
                <Image src='https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/alerts/private_board.svg' />
                <Title>Rayos!</Title>
                <Paragraphs>El tablero que nos proporcionaste es privado</Paragraphs>
              </>
              
          }  
          {
            type === 'error' && 
              <>
                <Image src='https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/alerts/error_questions.svg' />
                <Title>Oh no!</Title>
                <Paragraphs>Tu tablero deberia de tener las siguientes listas para poder analizarlo:</Paragraphs>
                <Ul>
                  <Li>To do</Li>
                  <Li>Doing</Li>
                  <Li>Done</Li>
                </Ul>
                <Button type='button' onClick={handleClick}>Aceptar</Button>
              </>
              
          }  
        </Content>
      </ModalInit>
    </>,
    document.getElementById('modal')
  );
};
