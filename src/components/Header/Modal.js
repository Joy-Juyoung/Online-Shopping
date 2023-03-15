import React, { useRef, useEffect, useCallback } from 'react';
// import React, { useState } from 'react';
import { 
        Background, 
        ModalWrapper,
        ModalSearch,
        ModalInput,
        ModalContent,
        CloseModalButton
     }
from "./ModalElements";

// export const Modal = () => {
//   const [modal, setModal] = useState(false);
//   const toggleModal = () => {
//     setModal(!modal);
//   };
  export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
{/*       
        <ModalWrapper>
        <ModalContent>
          <h1>Popular</h1>
          <p>shorts</p>
          <p>shoes</p>
        </ModalContent>
        <CloseModalButton onClick={toggleModal} />
      </ModalWrapper> */}

        

      {showModal ? (
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
      ) : null}
    </>
  );
};