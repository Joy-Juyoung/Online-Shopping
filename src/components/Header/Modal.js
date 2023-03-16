// import React, { useRef, useEffect, useCallback } from 'react';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { 
        Background, 
        ModalWrapper,
        ModalSearch,
        ModalInput,
        ModalContent,
        CloseButtonWrapper,
        CloseModalButton,
        ModalContainer,
        ModalTopWrapper,
        SearchModalIpt
     }
from "./ModalElements";

export const Modal = ({setOpenModal}) => {

  // export const Modal = ({ showModal, setShowModal }) => {
  // const modalRef = useRef();

  // const closeModal = e => {
  //   if (modalRef.current === e.target) {
  //     setShowModal(false);
  //   }
  // };

  // const keyPress = useCallback(
  //   e => {
  //     if (e.key === 'Escape' && showModal) {
  //       setShowModal(false);
  //       console.log('I pressed');
  //     }
  //   },
  //   [setShowModal, showModal]
  // );

  // useEffect(
  //   () => {
  //     document.addEventListener('keydown', keyPress);
  //     return () => document.removeEventListener('keydown', keyPress);
  //   },
  //   [keyPress]
  // );

  return (

      <ModalContainer>
            <ModalWrapper>
              <ModalTopWrapper>

                  <SearchModalIpt placeholder='Search' />


                  <CloseModalButton onClick={() => {setOpenModal(false);}}/>

              </ModalTopWrapper>
              <ModalContent>
                <h1>Popular</h1>
                <p>shorts</p>
                <p>shoes</p>
              </ModalContent>
            </ModalWrapper>
        </ModalContainer>
        );
        

      /* {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
            <ModalWrapper showModal={showModal}>
              <ModalSearch>  
                <ModalInput placeholder='Search'/>
              </ModalSearch>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
              <ModalContent>
                <h1>Popular</h1>
                <p>shorts</p>
                <p>shoes</p>
              </ModalContent>

            </ModalWrapper>
        </Background>

  );
}; */
};