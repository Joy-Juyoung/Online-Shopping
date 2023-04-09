import React, { useEffect, useRef } from 'react';
import {
  ModalBody,
  ModalBodyHeader,
  ModalBodyParagraph,
  ModalBodyPList,
  ModalBodyWrap,
  ModalCloseBtn,
  ModalContainerSkin,
  ModalHeader,
  ModalHeaderInput,
  ModalHeaderSearch,
  TestModalBlock,
  TestModalCloseBtn,
  TestModalContainer,
  TestModalContent,
  TestModalSearch,
  TestModalTop,
  TestModalWrapper,
} from './SearchElements';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ onClose, ref }) => {
  // const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // if (!ref.current && ref.current.contains(e.target)) {
      //   onClose();
      // }
      // if (ref.current.contains(e.target)) {
      //   onClose();
      // }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [onClose]);

  // const TestModal = ({setOpen}) => {
  //     const closeModal = () => {
  //         setOpen(false);
  //     };

  return (
    <ModalContainerSkin>
      <TestModalContainer>
        <TestModalWrapper>
          <ModalHeader>
            <ModalHeaderSearch>
              <span>
                <SearchIcon color='disabled' fontSize='medium' />
              </span>
              <ModalHeaderInput placeholder='Seach' />
            </ModalHeaderSearch>
            <ModalCloseBtn onClick={onClose}>
              <CloseIcon fontSize='large' />
            </ModalCloseBtn>
          </ModalHeader>

          <ModalBody>
            <ModalBodyWrap>
              <ModalBodyHeader>
                <h3>Popular</h3>
              </ModalBodyHeader>
              <ModalBodyParagraph>
                <ModalBodyPList>
                  <p>Top</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>Button</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>Outer</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>Shoes</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>Accessories</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>육회</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>해물찜</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>누룽지탕</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>문어숙회</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>나도줘</p>
                </ModalBodyPList>
              </ModalBodyParagraph>
            </ModalBodyWrap>
          </ModalBody>
        </TestModalWrapper>
      </TestModalContainer>
    </ModalContainerSkin>
  );
};

export default Search;
