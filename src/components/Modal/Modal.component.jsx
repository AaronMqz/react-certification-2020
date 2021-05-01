import React from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper, ModalContainer } from './Modal.styled';

const Modal = ({ children }) => {
  const element = document.getElementById('modal-login');
  if (!element) return null;

  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>,
    element
  );
};

export default Modal;
