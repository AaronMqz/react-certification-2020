import React, { useState } from 'react';
import Modal from '../../components/Modal';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const RenderModal = ({ children }) => {
    return <>{isVisible && <Modal>{children}</Modal>}</>;
  };

  return {
    show,
    hide,
    RenderModal,
  };
};
