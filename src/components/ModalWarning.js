import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Modal, Content, Image, Title, Paragraphs} from 'Styles/components/ModalWarningStyle';

export const ModalWarning = ({ modal, onClose }) => {

  const [change, setChange] = useState(modal);

  useEffect(() => {
    const clear = setTimeout(() => {
      setChange(!change);
    }, 4500);
    
    const close = setTimeout(() => {
      onClose();
    }, 5000);
    
    return () => clearTimeout(clear, close);
  }, []);

  return ReactDOM.createPortal (
    <>
      <Modal modal={change}>
        <Content>
          <Image src='https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/modal_cry.svg' />
          <Title>Uups...</Title>
          <Paragraphs>El ID que nos proporcionaste no es valido</Paragraphs>
        </Content>
      </Modal>
    </>,
    document.getElementById('modal')
  );
  

}
