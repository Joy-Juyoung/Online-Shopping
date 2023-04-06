import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonSmall } from './ButtonElements';
import './Modal.css';
// import {
//   NoUserBtn,
//   NoUserContainer,
//   NoUserContents,
//   NoUserModal,
//   NoUserText,
//   NoUserTitle,
// } from './Header/HeaderElements';

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  overflow: hidden;
`;

const ModalContent = styled.div`
  width: 380px;
  min-height: 200px;
  background-color: white;
  padding: 20px;
`;

const Modal = ({ children, shown, close }) => {
  return shown ? (
    <ModalBackDrop
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <ModalContent
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        {children}
        {/* <button onClick={close}>Close</button> */}
      </ModalContent>
    </ModalBackDrop>
  ) : null;
};

export default Modal;
