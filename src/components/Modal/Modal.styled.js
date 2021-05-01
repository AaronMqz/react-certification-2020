import styled from 'styled-components';

const ModalWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  background: white;
  width: 400px;
  border-radius: 10px;
  -webkit-box-shadow: 0px -1px 11px 2px rgba(0, 0, 0, 0.37);
  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.37);
`;

export { ModalWrapper, ModalContainer };
