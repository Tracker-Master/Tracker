import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import {
  ModalComponent,
  Content,
  Image,
  Title,
  Paragraphs,
} from 'Styles/components/ModalStyles';

const Modal = ({ modal, onClose, type }) => {
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

  return ReactDOM.createPortal(
    <>
      <ModalComponent modal={change}>
        <Content>
          <Image src="https://assets-juanjosemayorga-website.s3.amazonaws.com/tracker-project-s3/modal_cry.svg" />
          <Title>Uups...</Title>
          <Paragraphs>El ID que nos proporcionaste no es valido</Paragraphs>
        </Content>
      </ModalComponent>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}